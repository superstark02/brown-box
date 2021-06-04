import { db } from "../firebase";
//import {getByWord} from './getCollectionQuery'

export function uploadData(data, response) {

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
                        console.log("Done")
                        resolve(true)
                    }).catch(error => {
                        console.log(error)
                    })
            }).catch(error => {
                reject(false)
            })

    });

}





