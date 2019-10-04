import React from 'react';
import PlayerCard from './PlayerCard'



class PlayerData extends React.Component {

    
    render(props){
        // console.log(this.props.player)
        
        return(
            <div className="outerWrap">
            {this.props.player.map(players => 
                <div >
                    <PlayerCard players={players} />
                </div>
            )}
                </div>
                
                )
        }
    }
export default PlayerData