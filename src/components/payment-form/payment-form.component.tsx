
import './payment-form.styles.css'

import { CardElement } from '@stripe/react-stripe-js'
import ButtonComponent from '../button/button.component'
import { useStripe, useElements } from '@stripe/react-stripe-js'


import { useSelector } from 'react-redux'

import { selectCurrentUser } from '../../store/user/user.selector'

import { selectCartTotal } from '../../store/cart/cart.selector'


import { FormEvent } from 'react'
import { StripeCardElement } from '@stripe/stripe-js'


const ifCartIsValid =(card:StripeCardElement | null): card is StripeCardElement => card !== null



const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()

 const currentUser = useSelector(selectCurrentUser)
 const total = useSelector(selectCartTotal)
 console.log("currentUser and total",currentUser, total);


    const paymentHandler = async (e:FormEvent<HTMLFormElement>) => {
        console.log("payment handler is called");
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount: total*100 })
        }).then((res)=>res.json())

        console.log("@?@?@?@?@?@Response", response);

        const { paymentIntent: { client_secret } } = response


        const cardDetails=  elements.getElement(CardElement)
        // if(cardDetails === null) return
        if(!ifCartIsValid(cardDetails)) return

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: cardDetails,
                billing_details: {
                    name: currentUser ?  currentUser.currentUser?.displayName: 'Guest'
                    
                }               

            }
        })
        console.log("Payment result", paymentResult);

        if (paymentResult.error) {
            alert(paymentResult.error)
        }
        else {
            if (paymentResult.paymentIntent.status === 'succeeded') {
                alert("Payment Successfull!!")

            }
        }


    }


    return (
        <div className='payment-form-container'>
            <form className='form-container' onSubmit={paymentHandler}>
                <CardElement />
                <ButtonComponent>Pay now</ButtonComponent>
            </form>
        </div>
    )
}



export default PaymentForm

