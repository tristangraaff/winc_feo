import React from "react"
import ListItem from "./ListItem"

function JazzList (props) {
    const jazzList = props.music.jazzSongs.map(item => <ListItem
                                                song={item.song}
                                                artist={item.artist}
                                                genre={item.genre}
                                                rating={item.rating}
                                                id={item.id}
                                                deleteSong={props.deleteSong}/>)

    return (
        <div>
            <h2 className="genre-title">Jazz</h2>
            <ul>
                {jazzList}
            </ul>
        </div>
    )
}

export default JazzList