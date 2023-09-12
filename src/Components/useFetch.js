import { useState , useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading , setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

// setTimeout(() => {
        fetch(url , {signal: abortCont.signal})
            .then(result => {
              // console.log(res);
              if(!result.ok){
                throw Error('Could not fetch data from that resource');
              }
              return result.json();
            })
            .then((thedata) => {
              // console.log(thedata);
              setData(thedata);
              setIsLoading(false);
              setError(null);
            })
            .catch( err => {
              if(err.name === 'AbortError'){
                console.log('Fetch aborted');
              }else{
                setError(err.message);
                setIsLoading(false);
            }
            })
// }, 50000);

            return () => abortCont.abort();

    } , [url] );
  

      return { data , isLoading , error }
}

export default useFetch;