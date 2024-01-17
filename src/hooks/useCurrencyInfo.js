import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [currencyInfo, setCurrencyInfo] = useState({});
    
    useEffect(() => {
        fetch("https://api.exchangeratesapi.io/latest")
        .then((response) => response.json())
        .then((data) => setCurrencyInfo(data));
        
    }, []);
    
    return currencyInfo;
}   