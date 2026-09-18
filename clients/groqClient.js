import axios from "axios";
import {config} from 'dotenv';
config();


console.log("API KEY EXISTS:", !!process.env.GROQ_API_KEY);

export const groqClient =axios.create({
    baseURL:"https://api.groq.com/openai/v1",
    headers:{
        "Content-Type":'application/json',
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`
    }
});