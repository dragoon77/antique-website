const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')('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');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/checkout', async (req, res) => {
    const { name, email, address, cardNumber, expiry, cvv, total } = req.body;

    // TODO: Implement payment processing logic using Stripe or other payment provider
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total * 100, // amount in cents
            currency: 'usd',
            payment_method_types: ['card'],
            receipt_email: email,
        });

        // Payment successful
        return res.status(200).json({ message: 'Payment successful', paymentIntent });
    } catch (error) {
        console.error('Error processing payment:', error);
        return res.status(500).json({ error: 'Error processing payment' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
