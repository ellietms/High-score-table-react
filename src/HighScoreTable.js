import React,{useState} from 'react';
import Page  from './Table'
const HighScore = (props) => {
    const [Asending,setAsending] = useState(false)
    function handleAsending (){
        setAsending(!Asending);
    } 
    return(
   <Page handleAsending={handleAsending} status={Asending} data={props} />
)
}

export default HighScore;
