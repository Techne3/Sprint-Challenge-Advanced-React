import React from 'react'



function PlayerCard (props) {
//  console.log(props)

    return (
        <div>
            
        <h1>{props.players.name}</h1>
        <p>{props.players.country}</p>
        <p>{props.players.searches}</p>
        
        </div>
    )
}

export default PlayerCard;