const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripeFactory = require("stripe");

const stripe = stripeFactory(
    "sk_test_51IpyCNIPBjdqlAEdDpM3lu255ghIi9ULDvakOiMFU5tVvapRjfcvWhsJ62S1fjDxLHnIIBTjZd1ypeCEfhn6TR8800XepLJw7a" // eslint-disable-line
);


const app = express();


app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.get("/secret", (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved! Amount Total Is >>>", total);

  stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  }).then( (intent) => {
    response.status(201).send({
      clientSecret: intent.client_secret,
    });
  });
});

exports.api = functions.https.onRequest(app);


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
