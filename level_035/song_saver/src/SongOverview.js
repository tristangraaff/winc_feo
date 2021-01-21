import React from 'react';
import SongForm from './components/SongForm'
import SongList from './components/SongList'

class SongOverview extends React.Component {
  
    constructor() {
        super()
        this.state = {
            newSong: 
                {song: "", artist: "", genre: "", rating: ""},
            otherSongs: [],
            rapSongs: [],
            jazzSongs: [],
            rockSongs: [],
            popSongs: []
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        switch(e.target.placeholder) {
            case "Song":
                this.setState(prevState => {
                    return {
                        newSong: 
                            {song: e.target.value,
                             artist: prevState.newSong.artist,
                             genre: prevState.newSong.genre,
                             rating: prevState.newSong.rating,
                             }
                    }
                });
                break;
            case "Artist":
                this.setState(prevState => {
                    return {
                        newSong: 
                            {song: prevState.newSong.song,
                             artist: e.target.value,
                             genre: prevState.newSong.genre,
                             rating: prevState.newSong.rating,
                             }
                    }
                });
                break;
            case "Genre":
                this.setState(prevState => {
                    return {
                        newSong: 
                            {song: prevState.newSong.song,
                             artist: prevState.newSong.artist,
                             genre: e.target.value,
                             rating: prevState.newSong.rating,
                             }
                    }
                });
                break;
            case "Rating":
                this.setState(prevState => {
                    return {
                        newSong: 
                            {song: prevState.newSong.song,
                             artist: prevState.newSong.artist,
                             genre: prevState.newSong.genre,
                             rating: e.target.value,
                             }
                    }
                });
                break;
            default:
                console.log("Default");
        }
    }

    addSong = () => {
        switch(this.state.newSong.genre.toUpperCase()) {
            case "RAP":
                let rapSongsCopy =  [...this.state.rapSongs];
                console.log(rapSongsCopy);
                console.log(this.state.newSong)
                let rapId = 0;
                rapSongsCopy.push(this.state.newSong);
                console.log(rapSongsCopy)
                console.log(this.state.newSong)
                rapSongsCopy.forEach(song => {
                    song.id = rapId;
                    rapId++;
                })
                console.log(rapSongsCopy);
                console.log(this.state.newSong);
                this.setState({rapSongs: rapSongsCopy}, () => console.log(this.state));
                break;
            case "JAZZ":
                let jazzSongsCopy =  [...this.state.jazzSongs];
                let jazzId = 0;
                jazzSongsCopy.push(this.state.newSong);
                jazzSongsCopy.forEach(song => {
                    song.id = jazzId;
                    jazzId++;
                })
                this.setState({jazzSongs: jazzSongsCopy});
                break;
            case "ROCK":
                let rockSongsCopy =  [...this.state.rockSongs];
                let rockId = 0;
                rockSongsCopy.push(this.state.newSong);
                rockSongsCopy.forEach(song => {
                    song.id = rockId;
                    rockId++;
                })
                this.setState({rockSongs: rockSongsCopy});
                break;
            case "POP":
                let popSongsCopy =  [...this.state.popSongs];
                let popId = 0;
                popSongsCopy.push(this.state.newSong);
                popSongsCopy.forEach(song => {
                    song.id = popId;
                    popId++;
                })
                this.setState({popSongs: popSongsCopy});
                break;
            default:
                let otherSongsCopy = [...this.state.otherSongs];
                let otherId = 0;
                otherSongsCopy.push(this.state.newSong);
                otherSongsCopy.forEach(song => {
                    song.id = otherId;
                    otherId++;
                })
                this.setState({otherSongs: otherSongsCopy});
        }
    }

    sortSongs = () => {
        let otherSongsCopy = [...this.state.otherSongs];
        let popSongsCopy =  [...this.state.popSongs];
        let rockSongsCopy =  [...this.state.rockSongs];
        let jazzSongsCopy =  [...this.state.jazzSongs];
        let rapSongsCopy =  [...this.state.rapSongs];
        console.log(otherSongsCopy);
        const compare = (a, b) => {
            const songA = a.artist.toUpperCase();
            const songB = b.artist.toUpperCase();
            let comparison = 0;
            if (songA > songB) {
                comparison = 1;
            } else if (songA <  songB) {
                comparison = -1;
            }
            return comparison
        }
        otherSongsCopy.sort(compare);
        popSongsCopy.sort(compare);
        rockSongsCopy.sort(compare);
        jazzSongsCopy.sort(compare);
        rapSongsCopy.sort(compare);
        this.setState({otherSongs: otherSongsCopy,
                       popSongs: popSongsCopy,
                       rockSongs: rockSongsCopy,
                       jazzSongs: jazzSongsCopy,
                       rapSongs: rapSongsCopy});
    }

    deleteSong = (track) => {
        switch(track.genre.toUpperCase()) {
            case "RAP":
                let rapSongsCopy = [...this.state.rapSongs];
                let rapSongDeleted = rapSongsCopy.filter(item => item.id !== track.id);
                console.log(rapSongDeleted);
                this.setState({rapSongs: rapSongDeleted});
                break;
            case "JAZZ":
                let jazzSongsCopy = [...this.state.jazzSongs];
                let jazzSongDeleted = jazzSongsCopy.filter(item => item.id !== track.id);
                console.log(jazzSongDeleted);
                this.setState({jazzSongs: jazzSongDeleted});
                break;
            case "ROCK":
                let rockSongsCopy = [...this.state.rockSongs];
                let rockSongDeleted = rockSongsCopy.filter(item => item.id !== track.id);
                console.log(rockSongDeleted);
                this.setState({rockSongs: rockSongDeleted});
                break;
            case "POP":
                let popSongsCopy = [...this.state.popSongs];
                let popSongDeleted = popSongsCopy.filter(item => item.id !== track.id);
                console.log(popSongDeleted);
                this.setState({popSongs: popSongDeleted});
                break;
            default:
                let otherSongsCopy = [...this.state.otherSongs];
                let otherSongDeleted = otherSongsCopy.filter(item => item.id !== track.id);
                console.log(otherSongDeleted);
                this.setState({otherSongs: otherSongDeleted});
        }
    }
    render() {
      return (
        <div>
                <SongForm addSong={this.addSong}
                          handleChange={this.handleChange}
                          sortSongs={this.sortSongs}/>
                    <table className="genre-table">
                        <tbody>
                          <tr className="song-header">  
                                  <th className="song-row__item">Song</th>
                                  <th className="song-row__item">Artist</th>
                                  <th className="song-row__item">Genre</th>
                                  <th className="song-row__item">Rating</th>
                          </tr>
                        </tbody>
                    </table>
                <SongList song={this.state} 
                          songToBeAdded={this.addSong}
                          deleteSong={this.deleteSong}/>
        </div>
      );
    }
  }
  
  export default SongOverview;