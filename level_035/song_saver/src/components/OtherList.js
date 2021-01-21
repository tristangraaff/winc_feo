import React from "react"
import ListItem from "./ListItem"

function OtherList(props){
    const otherList = props.music.otherSongs.map(item => <ListItem
                                                            song={item.song}
                                                            artist={item.artist}
                                                            genre={item.genre}
                                                            rating={item.rating}
                                                            id={item.id}
                                                            deleteSong={props.deleteSong}/>)

    return (
        <div>
            <h2 className="genre-title">Other</h2>
            <ul>
                {otherList}
            </ul>
        </div>
    )
}

export default OtherList