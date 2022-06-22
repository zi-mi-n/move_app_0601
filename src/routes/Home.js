import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {

  // 객체!! 콜론!!!!!!!!!!!!!
  state = {
    isLoading: true,
    movies: [], // why do they need comma?
  };

  // async : 저는 시간이 좀 걸립니다요...
  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    
    // stateName : data -> 축약형태(이름이 같으면 축약able)
    this.setState({movies, isLoading: false});
  };


  componentDidMount() {
    this.getMovies();
  }
  render() {
    const {isLoading, movies} = this.state;

    return (
      <section className = "container">
        {isLoading? (
          <div className = "loader">
            <span className = "loader__text">Loading...</span>
          </div>
        ) : (
          <div className = "movies">
            {
              movies.map(movie => (
                <Movie
                  key = {movie.id}
                  id = {movie.id}
                  year = {movie.year}
                  title = {movie.title}
                  summary = {movie.summary}
                  poster = {movie.medium_cover_image}
                  genres = {movie.genres}
                />
              ))
            }
          </div>
        )}
      </section>  
    );
  }
}
export default Home;
