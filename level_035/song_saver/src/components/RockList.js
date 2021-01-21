import React from "react"
import ListItem from "./ListItem"

function RockList (props) {
    const rockList = props.music.rockSongs.map(item => <ListItem
                                                song={item.song}
                                                artist={item.artist}
                                                genre={item.genre}
                                                rating={item.rating}
                                                id={item.id}
                                                deleteSong={props.deleteSong}/>)

    return (
        <div>
            <h2 className="genre-title">Rock</h2>
            <ul>
                {rockList}
            </ul>
        </div>
    )
}

export default RockList