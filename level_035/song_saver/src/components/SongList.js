import React from "react";
import RapList from "./RapList"
import JazzList from "./JazzList"
import RockList from "./RockList"
import PopList from "./PopList"
import OtherList from "./OtherList"


function SongList(props) {
    return(
        <div className="song-list">
                <RapList className="list-component" music={props.song} deleteSong={props.deleteSong}/>
                <JazzList className="list-component" music={props.song} deleteSong={props.deleteSong}/>
                <RockList className="list-component" music={props.song} deleteSong={props.deleteSong}/>
                <PopList className="list-component" music={props.song} deleteSong={props.deleteSong}/>
                <OtherList className="list-component" music={props.song} deleteSong={props.deleteSong} />
        </div>        
    )
}

export default SongList
