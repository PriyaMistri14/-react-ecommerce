

require("dotenv").config()

const stripe = require("stripe")('sk_test_51NKZRUSCV5eAz6slj7vsPTvue0SL5ECcBBH49UjkQOqDy1NfSDHBEnUTBbM5usjUFNSu5vLPU0DatPSuNshvtSd200SzfvtJRx')

exports.handler = async (event) => {
    try {

        const { amount } = JSON.parse(event.body)
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
            description: 'test',

            shipping: {
                name: "Ram",
                address: {
                    line1: "510 Townsend St",
                    postal_code: "98140",
                    city: "San Francisco",
                    state: "CA",
                    country: "US",
                },
            }


        })

        console.log("amount and paymanet intent", amount, paymentIntent);

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent })
        }


    } catch (error) {
        return {
            statusCode: 400,
            body: JSON.stringify({ error })
        }
    }

}


