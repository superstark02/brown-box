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





