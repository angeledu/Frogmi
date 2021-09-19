import axios from 'axios';

const stores = axios.create({
    baseURL: 'https://api.frogmi.com/api/v3',
    headers: {
        'X-Company-Uuid': 'b7fa583e-a144-4ec2-9464-e1e514512fb4',
        'Authorization': 'Bearer 0c6a5e67c9645d3590d0f88cef02a30b'
    }
})


export default stores;