import axios from 'axios';
// import { queryClient } from '../config/queryClient';

const baseUrl = process.env.REACT_APP_FLASK_SERVER_URL || 'http://localhost:5000';

export const predictScore = async ( loPercent, nCocurr ) => {
    try
    {
        const body = {
            exp: [ loPercent, nCocurr ]
        }
        const res = await axios.post(`${baseUrl}/api`, body);
        return res.data;
    }
    catch(error)
    {
        const res = error.response;
        if(res.status === 401) return { ...res.data, error: "Please login to view this page" };
        else // 500 or others
        {
            console.error(error.message);
            return { ...res.data, error: "Something went wrong" };
        }
    }
}