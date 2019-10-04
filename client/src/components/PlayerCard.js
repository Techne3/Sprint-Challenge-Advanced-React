import React from 'react'
import { Card, CardBody, CardTitle, CardText, } from 'reactstrap';


function PlayerCard (props) {
//  console.log(props)

    return (


    <div className="outerWrap">
         <div className="cardWrap">
            <h1>{props.players.name}</h1>
            <p>{props.players.country}</p>
            <p>{props.players.searches}</p>
        </div> 
    </div>


      
    )
}

export default PlayerCard;

  

    //     <Card className="cardWrap">

    //     <CardBody className="cardBody">
    //       <CardTitle>{props.players.name}</CardTitle>
    //       <CardText>{props.players.country} </CardText>
    //       <CardText>
    //         <small className="text-muted">{props.players.searches}</small>
    //       </CardText>
    //     </CardBody>
    //   </Card>
