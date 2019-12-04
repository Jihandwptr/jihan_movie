import React, { Component } from 'react';
import './App.css';
import MovieRow from './MovieRow.js';
//import $ from 'jquery'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    //console.log("This is my initializer")

    const movies = [
      {id:0, poster_src: "https://cdn.collider.com/wp-content/uploads/2018/03/avengers-infinity-war-poster.jpg",
      title: "Avengers: Infinity War", overview: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment, the fate of Earth and existence has never been more uncertain."},
      {id:1, poster_src:"https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
      title: "The Avengers", overview: "One of the weapons Marvel used in its climb to comic-book dominance was a willingness to invent new characters at a dizzying speed. There are so many Marvel universes, indeed, that some superheroes do not even exist in one another's worlds, preventing gridlock. The Avengers however do share the same time and space continuum, although in recent years, they've been treated in separate, single-superhero movies. One assumes the idle Avengers follow the exploits of the employed ones on the news."},
    ]


    var movieRows = []
    movies.forEach((movie) => {
      console.log(movie.title)
      const movieRow = <MovieRow movie={movie}/> 
      movieRows.push(movieRow)
    })
    this.state = {rows: movieRows}

    //this.performSearch()
  }

  /*performSearch(searchTerm) {
    const $ = window.$;
    console.log("Perform search using moviedb")
    const urlString = "http://www.omdbapi.com/apikey.aspx?VERIFYKEY=f964c108-5204-4fde-846e-16d3f0cfffac";
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        //console.log(searchResults)
        const results = searchResults.results
        //console.log(results[0])

        var movieRows =[]

        results.forEach((movie) => {
          movie.poster_src = "https://cdn.collider.com/wp-content/uploads/2018/03/avengers-infinity-war-poster.jpg" + movie.poster_path
          //  console.log(movie.poster_path)
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movie)
        })

        this.setState({rows: movieRows})
      },
        error: (xhr, status, err) => {
          console.error("Failed to fetch data")
        }
    })
  }*/

  render(){
    return (
      <div>
        
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="30" src="apps-svgrepo-com.svg"/>
              </td>
              <td width="8"/>
              <td>
                <h1>Movie Search App</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input style={{
          fontSize: 24,
          display: 'block',
          width:"99%",
          paddingTop: 8,
          paddingBottom: 8,
          paddingLeft: 16
        }} placeholder="Enter search term"/>

        {this.state.rows}
      </div>
    );
  }
}

export default App;
