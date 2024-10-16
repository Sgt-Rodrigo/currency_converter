import { useEffect, useState } from "react";

//* index signature > to type the returned value
//* if not done here, on the definition, you can do it in the function call. Typescript might not infer the type of the fetched data.  
type CurrencyData = {
    [key:string] : number
}


function useCurrencyData(currency:string):CurrencyData {
    const [data, setData] = useState({});
    
    // const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;

    const url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`

    useEffect(()=>{
        fetch(url)
        .then(res => res.json())
        .then(res => setData(res[currency]))
    },[currency])

    return data
}

export default useCurrencyData;