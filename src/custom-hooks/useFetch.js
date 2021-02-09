import {useState, useEffect} from 'react';

export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [ isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // create abortController
        const abortController = new AbortController() ;

        //Associate the abortController with a fetch request 
        fetch(url, {signal: abortController.signal})
        .then(res => {
            if (!res.ok) {
                throw Error("Could not fetch the data")
            }
            return res.json();
        })
        .then((data) => {
            setData(data)
            setIsLoading(false)
            setError(null)
        })
        .catch(
            (err) => {
            if (err.name === 'AbortError'){
                console.log("Fetch aborted")
            } else {
            setError(err.message)
            setIsLoading(false)
            }})
        // abort the fetch
        return () => abortController.abort();
    }, [url])

    return {data, isLoading, error}
}

