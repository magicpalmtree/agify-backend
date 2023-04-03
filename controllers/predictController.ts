import axios from 'axios';
import { getCachedData, cacheData } from '../utils/cache';

interface Predict {
    firstName: string;
    age: number;
}

export const predictHandler = async (data: Predict): Promise<Predict> => {
    const { firstName } = data;
    const cachedAge = getCachedData(firstName);
    if(cachedAge != null) return { firstName, age: cachedAge };

    const res = await axios.get(`https://api.agify.io?name=${firstName}`);
    const age = res.data?.age ? res.data?.age : 0; // Use 0 as default age in case of missing data
    cacheData(data.firstName, age);

    return { firstName, age };
}