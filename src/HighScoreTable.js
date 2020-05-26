import React from 'react';
import {Table} from 'reactstrap';


const HighScore = (props) => {
    console.log(props.CountryScores);
    return(
    <div>
    {props.CountryScores.map((eachCountry,index) =>
    <Table className="countryBorder" bordered key={index}>
        <tbody>
        <tr> 
        <td>
            <h1><span>High Scores:</span><span>{`${ eachCountry.name}`}</span></h1>
        </td>
        </tr>
        <tr className="ml-3" >
        <td>
            {eachCountry.scores.map((element,i) => 
            <Table bordered className="scoreClass" key={i}>
            <tbody className="bodyTable">
            <tr> 
                <td className="myName">{element.n}</td>
            </tr>
            <tr>    
                <td className="myScore">{element.s}</td>
            </tr>
            </tbody>
                </Table>
                )
            }
            </td>    
            </tr>
        </tbody>
        </Table>
    )}
    </div>
    )
}

export default HighScore;
