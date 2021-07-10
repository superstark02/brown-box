import { db } from "../firebase";

export function uploadData(data, photo) {

    var today = new Date();
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
                amount: data.total,
                /*payment_id: response.razorpay_payment_id,
                order_id: response.razorpay_order_id,
                razorpay_sign: response.razorpay_signature,*/
                product: data.product,
                date: today.getDate().toString().padStart(2, '0') + "/" + today.getMonth().toString().padStart(2, '0') + "/" + today.getFullYear()
            }).then(result => {
                resolve(true)
            }).catch(error => {
                alert(error)
                reject(false)
            })

    });

}

export function updatePayment(data) {
    return new Promise((resolve, reject) => {
        db.collection("Users").doc(data.user_id).collection("Orders").doc(data.pow)
            .update({
                payment: true
            }).then(res=>{
                resolve(true)
            }).catch(e=>{
                alert(e)
                reject(false)
            })
    });
}

export function uploadProducts(data) {

    for (var i = 0; i < 4; i++) {
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

    for (var i = 0; i < 2; i++) {
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





