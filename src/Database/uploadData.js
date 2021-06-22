import { db } from "../firebase";
import axios from 'axios'
//import {getByWord} from './getCollectionQuery'

export function uploadData(data, response, photo) {

    return new Promise((resolve, reject) => {
        db.collection("Users").doc(data.uid).collection("Orders").doc(data.product)
            .set({
                name: data.name,
                phone: data.phone,
                email: data.email,
                address: data.address,
                city: data.city,
                state: data.state,
                pincode: data.pincode,
                payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                razorpay_sign: response.razorpay_signature,
            }).then(result => {
                db.collection("Users").doc(data.uid)
                    .update({
                        name: data.name,
                        phone: data.phone,
                        email: data.email,
                        address: data.address,
                        city: data.city,
                        state: data.state,
                        pincode: data.pincode
                    }).then(result => {
                        axios.post('https://sheet.best/api/sheets/8469573a-bf05-40b5-9d7f-4c1dcbdad8b1', {
                            name: data.name,
                            phone: data.phone,
                            email: data.email,
                            address: data.address,
                            city: data.city,
                            state: data.state,
                            pincode: data.pincode,
                            payment_id: response.razorpay_payment_id,
                            order_id: response.razorpay_order_id,
                            razorpay_sign: response.razorpay_signature,
                            product: data.product,
                            photo: photo
                        })
                            .then(response => {
                                resolve(true);
                            })
                    }).catch(error => {
                        alert(error)
                        reject(false);
                    })

            }).catch(error => {
                alert(error)
                reject(false)
            })

    });

}


export function uploadProducts(data) {

    for (var i = 0; i < 5; i++) {
        db.collection("Products").doc(data[i].id)
            .set({
                id: data[i].id,
                name: data[i].name,
                image: data[i].image,
                mrp: data[i].mrp,
                sp: data[i].sp,
                category: data[i].category,
                discount: data[i].discount,
                description: data[i].description,
                highlights: data[i].highlights,
                image1: data[i].image1,
                image2: data[i].image2,
                image3: data[i].image3,
                from: data[i].from,
                to: data[i].to,
                amazon: data[i].amazon,
                flipkart: data[i].flipkart,
                video: data[i].video
            }).then(result => {
                console.log("Done")
            }).catch(error => {
                console.log(error)
            })
    }

}

export function uploadGames(data) {

    for (var i = 0; i < 1; i++) {
        db.collection("Games").doc(data[i].id)
            .set({
                id: data[i].id,
                name: data[i].name,
                image: data[i].image,
                image1: data[i].image1,
                mrp: data[i].mrp,
                sp: data[i].sp,
                category: data[i].category,
                discount: data[i].discount,
                description: data[i].description,
                highlights: data[i].highlights,
                from: data[i].from,
                to: data[i].to,
                amazon: data[i].amazon,
                flipkart: data[i].flipkart,
                video: data[i].video
            }).then(result => {
                console.log("Done")
            }).catch(error => {
                console.log(error)
            })
    }

}





