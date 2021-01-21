import React from "react"
import ListItem from "./ListItem"

function RapList (props) {
    const rapList = props.music.rapSongs.map(item => <ListItem
                                                song={item.song}
                                                artist={item.artist}
                                                genre={item.genre}
                                                rating={item.rating}
                                                id={item.id}
                                                deleteSong={props.deleteSong}/>)

    return (
        <div>
            <h2 className="genre-title">Rap</h2>
            <ul>
                {rapList}
            </ul>
        </div>
    )
}

export default RapList