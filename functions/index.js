const functions = require('firebase-functions')
const cors = require('cors')({origin: true});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send(req.query)
})

exports.products = functions.https.onRequest((req, res) => {
    cors(req, res, () => {})
    res.send([
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          }
    ])
})