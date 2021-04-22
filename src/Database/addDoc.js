import { db } from "../firebase";

export function addSubDoc(collection,doc,sub_collection,sub_doc,data){

    return new Promise((resolve, reject) => {

        db.collection(collection).doc(doc).collection(sub_collection).doc(sub_doc).set(data).then(result=>{
            resolve(1);
        }).catch(error=>{
            reject(error)
        })
    });
}