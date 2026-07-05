import {useState,useEffect} from 'react'
import './Quote.css';

function Quote() {
    const [quote,setQuote]=useState({content:'',author:''});

    //fetching quote from API
    const fetchQuote=() => {
    fetch('https://dummyjson.com/quotes/random')
            .then(res => res.json())
            .then((data) => {
                setQuote({ 
                    content: data.quote, 
                    author: data.author 
                });
            })
            .catch(err => console.error("Error fetching quote:", err));
    };

    useEffect(()=>{
        fetchQuote();//mount fetched quote
        const interval=setInterval(fetchQuote,20000);
        return ()=> clearInterval(interval);
    },[]);

    return (
        <div className="quote-container">
            <p className="quote-content">"{quote.content}"</p>
            
        </div>
    )
}
export default Quote