const functions = require('firebase-functions');
const axios = require('axios')
const cors = require('cors')({ origin: true });

exports.checkService = functions.https.onRequest(async (req, res) => {

	cors(req, res, () => {
		var data = JSON.stringify({
			"email": "superstark02@gmail.com",
			"password": "Gun007us@@@@"
		});

		var config = {
			method: 'post',
			url: 'https://apiv2.shiprocket.in/v1/external/auth/login',
			headers: {
				'Content-Type': 'application/json'
			},
			data: data
		};

		axios(config)
			.then(function (first_res) {
				console.log(req.body)
				var con = {
					method: 'get',
					url: 'https://apiv2.shiprocket.in/v1/external/courier/serviceability/',
					params: {
						pickup_postcode: 110085,
						delivery_postcode: req.body.pincode,
						cod: 0,
						weight: 0.5
					},
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + first_res.data.token
					}
				};

				axios(con)
					.then(function (sec_res) {
						res.send(sec_res.data)
					})
					.catch(function (error) {
						console.log(error);
					});

			})
			.catch(function (error) {
				console.log(error);
			});
	})

});

/*
const functions = require("firebase-functions");
const app = require('express')()
const express = require('express')
const cors = require('cors')
const axios = require('axios')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get('/get-service', (req, res) => {

	var data = JSON.stringify({
		"email": "superstark02@gmail.com",
		"password": "Gun007us@@@@"
	});

	var config = {
		method: 'post',
		url: 'https://apiv2.shiprocket.in/v1/external/auth/login',
		headers: {
			'Content-Type': 'application/json'
		},
		data: data
	};

	axios(config)
		.then(function (first_res) {
			console.log(JSON.stringify(first_res.data));

			var con = {
				method: 'get',
				url: 'https://apiv2.shiprocket.in/v1/external/courier/serviceability/',
				params:{
					pickup_postcode: 110085,
					delivery_postcode: 623153,
					cod: 0,
					weight: 0.5
				},
				headers: {
					'Content-Type': 'application/json',
					'Authorization': 'Bearer '+first_res.data.token
				}
			};

			axios(con)
				.then(function (first_res) {
					console.log(JSON.stringify(first_res.data));
					res.send(first_res.data)
				})
				.catch(function (error) {
					console.log(error);
				});

		})
		.catch(function (error) {
			console.log(error);
		});


})

app.listen(1337, () => {
	console.log('Listening on 1337')
})*/


