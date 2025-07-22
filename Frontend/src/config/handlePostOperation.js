import { BASE_URL } from "./constants";

export const handlePostOperation = async(URL,data) =>{
    try {
        const result = await axios.post(`${BASE_URL}${URL}`,data) 
        return result
    }catch(error){
        return error;
    }
}