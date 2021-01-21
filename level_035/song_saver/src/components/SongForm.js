import React from "react"

function SongForm(props) {
    return (
        <div className="song-form">
                 <input className="input" placeholder="Song" onChange={props.handleChange}></input>
                 <input className="input" placeholder="Artist" onChange={props.handleChange}></input>
                 <input className="input" placeholder="Genre" onChange={props.handleChange}></input>
                 <input className="input" placeholder="Rating" onChange={props.handleChange}></input>
                 <button className="form-button" onClick={props.addSong}>Add to playlist!</button>
                 <button className ="form-button" onClick={props.sortSongs}>Sort songs on artist</button>     
        </div>
    )
}

export default SongForm

