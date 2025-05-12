const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const paypal = require('@paypal/checkout-server-sdk');

// PayPal configuration
let environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
let paypalClient = new paypal.core.PayPalHttpClient(environment);

// Process payment based on method
const processPayment = async (paymentMethod, amount, currency = 'usd') => {
  try {
    switch (paymentMethod) {
      case 'credit_card':
        return await processStripePayment(amount, currency);
      case 'paypal':
        return await processPayPalPayment(amount, currency);
      default:
        throw new Error('Invalid payment method');
    }
  } catch (error) {
    throw new Error(`Payment processing failed: ${error.message}`);
  }
};

// Process Stripe payment
const processStripePayment = async (amount, currency) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: currency,
    });
    return {
      clientSecret: paymentIntent.client_secret,
      paymentId: paymentIntent.id
    };
  } catch (error) {
    throw new Error(`Stripe payment failed: ${error.message}`);
  }
};

// Process PayPal payment
const processPayPalPayment = async (amount, currency) => {
  try {
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: currency,
          value: amount.toString()
        }
      }]
    });

    const order = await paypalClient.execute(request);
    return {
      orderId: order.result.id,
      links: order.result.links
    };
  } catch (error) {
    throw new Error(`PayPal payment failed: ${error.message}`);
  }
};

module.exports = {
  processPayment
}; 