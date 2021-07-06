import axios from 'axios'

export default function checkService() {
    const body = {
        email: "superstark02@gmail.com",
        password:"Gun007us@@@@"
    }

    axios.post('https://apiv2.shiprocket.in/v1/external/auth/login', body).then(res=>{
        console.log(res.data)

        const headers = { 
            'Authorization': 'Bearer ',
        };
    });
}