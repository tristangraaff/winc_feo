import React from "react"
import ListItem from "./ListItem"

function PopList (props) {
    const popList = props.music.popSongs.map(item => <ListItem
                                                song={item.song}
                                                artist={item.artist}
                                                genre={item.genre}
                                                rating={item.rating}
                                                id={item.id}
                                                deleteSong={props.deleteSong}/>)

    return (
        <div>
            <h2 className="genre-title">Pop</h2>
            <ul>
                {popList}
            </ul>
        </div>
    )
}

export default PopList