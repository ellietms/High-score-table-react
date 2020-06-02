import React,{useState} from 'react';
import Page  from './Table'
const HighScore = (props) => {
    const [Asending,setAsending] = useState(false)
    function handleAsending (){
        setAsending(!Asending);
    } 
    return(
   <Page onClick={handleAsending} data={props} />
)
}

export default HighScore;
