import { db } from "../firebase";
//import {getByWord} from './getCollectionQuery'

export function uploadData(data) {

    var i = 0;

    /*var data = [
        {
            name: "Mi 10000mAH Li-Polymer Power Bank 2i (Black)",
            sp: "799",
            mrp: "1,799",
            cat: "powerbank",
            image: "https://images-na.ssl-images-amazon.com/images/I/51YhwdPtl0L._SL1050_.jpg"
        },
        
    ]*/

    for (i = 0; i < data.length; i++) {
        db.collection("Products").doc(Math.floor(Date.now() / 1000).toString())
            .set({
                id: Math.floor(Date.now() / 1000),
                name: data[i].name,
                sp: data[i].sp,
                mrp: data[i].mrp,
                cat: data[i].cat,
                image: data[i].image,
            }).then(result => {
                console.log("Done")
                alert("Done")
            }).catch(error => {
                console.log(error)
            })
    }

}





