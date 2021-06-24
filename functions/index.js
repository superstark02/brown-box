const functions = require("firebase-functions");

const app = require('express')()
const express = require('express')
const path = require('path')
const shortid = require('nanoid')
const Razorpay = require('razorpay')
const cors = require('cors')
const crypto = require("crypto-js")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const razorpay = new Razorpay({
	key_id: 'rzp_test_0NgOX9f0NSb8Cy',
	key_secret: 'qGIZeOXI1o77pq4B1xsD3dui'
})

app.get('/logo.svg', (req, res) => {
	res.sendFile(path.join(__dirname, 'logo512.png'))
})

app.post('/verification', (req, res) => {
	// do a validation
	const secret = '12345678'

	console.log(req.body)

	const crypto = require('crypto')

	const shasum = crypto.createHmac('sha256', secret)
	shasum.update(JSON.stringify(req.body))
	const digest = shasum.digest('hex')

	console.log(digest, req.headers['x-razorpay-signature'])

	if (digest === req.headers['x-razorpay-signature']) {
		console.log('request is legit')
		// process it
		require('fs').writeFileSync('payment1.json', JSON.stringify(req.body, null, 4))
	} else {
		// pass it
	}
	res.json({ status: 'ok' })
})

app.post('/razorpay', async (req, res) => {
	console.log("Here: "+req.body.amount)
	const payment_capture = 1
	const amount = req.body.amount
	const currency = 'INR'

	const options = {
		amount: amount * 100,
		currency,
		receipt: shortid.nanoid(),
		payment_capture
	}

	try {
		const response = await razorpay.orders.create(options)
		console.log(response)
		res.json({
			id: response.id,
			currency: response.currency,
			amount: response.amount
		})
	} catch (error) {
		console.log(error)
		console.log("yaha")
	}

})

app.listen(1337, () => {
	console.log('Listening on 1337')
})


exports.pay = functions.https.onRequest(app);
