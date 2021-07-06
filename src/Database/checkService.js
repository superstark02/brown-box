import axios from 'axios'

export default function checkService(pincode) {
    axios.post('https://us-central1-pine-valley-7820d.cloudfunctions.net/checkService', {pincode:110058}).then(res => {
        console.log(res.data)
    });
}