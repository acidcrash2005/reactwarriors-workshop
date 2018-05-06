import React from "react";
import movies from './movie';
import MovieItem from "./MoveItem";

function LikeCounts({ likeCounts }) {
    return (
        <p>Количество лайков: {likeCounts}</p>
    )
}

function FavouriteMoves(props) {
    return (
        <p>Количество любимых фильмов: {props.favouriteMoves}</p>
    )
}

function SidebarFavorite({move}) {
    const removeFavorite = () =>{
        move.removeFavourite();
    }
    return(
        <div className="card">
            <div className="card-header">{move.props.item.title}</div>
            <div className="card-body">
                rating: {move.props.item.vote_average}
            </div>
            <div className="card-footer">
                <button onClick={removeFavorite}>Remove</button>
            </div>
        </div>
    )
}

class App extends React.Component{
    constructor(){
        super();

        this.state ={
            movies: movies,
            likeCounts: 0,
            favouriteMoves: 0,
            favouriteMovesSidebar: []
        }
    }

    // Like Functions
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

    // Favourite Functions
    increaseFavourite = () =>{
        this.setState({
            favouriteMoves: this.state.favouriteMoves + 1
        })
    }

    decreaseFavourite = () =>{
        this.setState({
            favouriteMoves: this.state.favouriteMoves - 1
        })
    }

    // Add/Remove sidebar moves
    addSidebarMove = (move) =>{
        this.state.favouriteMovesSidebar.push({move})
        this.setState({
            favouriteMovesSidebar: this.state.favouriteMovesSidebar
        })
    }

    removeSidebarMove = (move) =>{
        this.setState({
            favouriteMovesSidebar: this.state.favouriteMovesSidebar.filter(function (moveEl) {
                return moveEl.move.props.item.id !== move.props.item.id;
            })
        })
    }

  render() {
      const { movies, likeCounts, favouriteMoves, favouriteMovesSidebar} = this.state;
      return (
          <div>
              <div className="container">
                  <div className="row">
                      <div className="col-6">
                          <LikeCounts likeCounts={likeCounts} />
                      </div>
                      <div className="col-6">
                          <FavouriteMoves favouriteMoves={favouriteMoves}/>
                      </div>
                  </div>
                  <div className="row">
                      <div className="col-2">
                          {favouriteMovesSidebar.map( ({move}, index) => {
                              return (
                                  <SidebarFavorite
                                      key={move.props.item.id}
                                      move={move}
                                  />
                              )
                          })}
                      </div>
                      <div className="col-10">
                          <div className="row">
                              {movies.map( (move, index) => {
                                  return (
                                      <div className="col-4" key={index}>
                                          {/* В компонент можно передевать функции */}
                                          <MovieItem
                                              item={move}

                                              addSidebarMove={this.addSidebarMove}
                                              removeSidebarMove={this.removeSidebarMove}

                                              increaseFavourite={this.increaseFavourite}
                                              decreaseFavourite={this.decreaseFavourite}

                                              increaseLike={this.increaseLike}
                                              decreaseLike={this.decreaseLike} />
                                      </div>
                                  )
                              })}
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      );
    }

}

export default App;
