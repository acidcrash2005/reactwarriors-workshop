import React from "react";
import movies from './movie';
import MovieItem from "./MoveItem";

function LikeCounts({ likeCounts }) {
    return (
        <p>Количество лайков: {likeCounts}</p>
    )
}

class App extends React.Component{
    constructor(){
        super();

        this.state ={
            movies: movies,
            likeCounts: 0
        }
    }

    increaseLike = () =>{
        this.setState({
            likeCounts: this.state.likeCounts + 1
        })
    }

    decreaseLike = () =>{
        this.setState({
            likeCounts: this.state.likeCounts - 1
        })
    }
  render() {
      const { movies, likeCounts} = this.state;
      return (
          <div>
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <LikeCounts likeCounts={likeCounts} />
                      </div>
                  </div>
                  <div className="row">
                      {movies.map( (move, index) => {
                          return (
                              <div className="col-4" key={index}>
                                  {/* В компонент можно передевать функции */}
                                  <MovieItem item={move} increaseLike={this.increaseLike} decreaseLike={this.decreaseLike} />
                              </div>
                          )
                      })}
                  </div>
              </div>
          </div>
      );
    }

}

export default App;
