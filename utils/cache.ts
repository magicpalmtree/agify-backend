interface PredictCache<T> {
    [key: string]: T;
}
  
const cache: PredictCache<number> = {};
  
export function getCachedData(key: string): number | null {
    key = key.toLowerCase();
    if (cache.hasOwnProperty(key)) return cache[key];
    return null;
}
  
export function cacheData(key: string, age: number) {
    cache[key.toLowerCase()] = age;
}
  