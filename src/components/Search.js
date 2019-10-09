import React, {Component} from "react"
import {observer} from "mobx-react"
import {Link} from "react-router-dom"
import store from "../store/home"
import Pagination from "./Pagination"

const nullw500 = require('../images/nullw500.png')

const Search = observer(class extends Component {
    render() {
      const {searchResults, loaded} = store
      const {changePage, scrollTop} = this.props
      return (
          <section>
              
                {loaded ? <div className="movies-grid">
                    {
                searchResults.results.map(({id, 
                poster_path, 
                release_date, 
                original_title, 
                vote_average}) => (
                    <div 
                    className="movie-item infos-container" 
                    key={id}>
                        <Link to={`/movie/${id}`} onClick={scrollTop}>       
                            <img src={poster_path ? 
                            `https://image.tmdb.org/t/p/w500${poster_path}` :
                                `${nullw500}`} 
                                alt={`Movie Poster`}/>
                            <div className="infos-box">
                                <div className="infos-one">{release_date}</div>
                                <div className="infos-two">{original_title}</div>
                                <div className="infos-three">{vote_average}</div>
                            </div>
                        </Link>
                    </div>))}
                    </div> : 
                    <div className="loading">Loading...</div>
                }
                
              <Pagination
              results={searchResults}
              changePage={changePage} />
          </section>
      )
    }
})

export default Search