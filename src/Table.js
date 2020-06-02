import React from 'react';
import {Table} from 'reactstrap';

const Page = (props) => {
return( 
    <div className="App col-12">
    <button onClick={props.handleAsending} type="button" class="btn btn-primary">
     {props.status ? `Asending` : `Desending`}
    </button>  
    <h1>High Scores Per Country </h1>
    {props.data.CountryScores.sort((a, b) => (a.name > b.name) ? 1 : -1).map((eachCountry,index) =>
    <Table className="countryBorder" bordered key={index}>
        <tbody className="container">
        <tr> 
        <td className="score">
            <h1><span className="header">High Scores:</span><span className="countryName">{eachCountry.name}</span></h1>
        </td>
        </tr>
        <tr>
        <td className="small-table">
            {(props.status ? eachCountry.scores.sort((a, b) => (a.s > b.s) ? -1 : 1).map((element,i) => 
            <Table bordered className="scoreClass" key={i}>
            <tbody className="bodyTable">
            <tr> 
                <td className="myName">{element.n.toUpperCase()}</td>
            </tr>
            <tr>    
                <td className="myScore">{element.s}</td>
            </tr>
            </tbody>
            </Table>
            ) : eachCountry.scores.sort((a, b) => (a.s < b.s) ? -1 : 1).map((element,i) => 
            <Table bordered className="scoreClass" key={i}>
            <tbody className="bodyTable">
            <tr> 
                <td className="myName">{element.n.toUpperCase()}</td>
            </tr>
            <tr>    
                <td className="myScore">{element.s}</td>
            </tr>
            </tbody>
                </Table>
            ))}       
            </td>    
         </tr>
        </tbody>
        </Table>
    )
}  
    </div>
    );
}

export default Page;

 