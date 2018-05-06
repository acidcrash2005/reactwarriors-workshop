import React from "react";
import MovieItem from "./MoveItem";
import {API_KEY_3} from "../utils";

export default class MoveList extends React.Component{
    constructor(){
        super();

        this.state ={
            movies: [],
            isLoading: true
        }
    }

    getListMovies(type){
        const link = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY_3}&language=en-US&region=ru&page=1`;
        fetch(link).then((response) => {
            return response.json();
        }).then((data) => {
            this.setState({
                movies: data.results,
                isLoading: false
            })
        })
    }

    // Вызывается только один раз, только при первом render
    componentDidMount(){
        setTimeout( () => {
            this.getListMovies(this.props.type);
        },1000);
    }


    componentWillReceiveProps(nextProps){
        if (nextProps.type !== this.props.type){
            // Выполняется до рендера и не вызывает новый рендер
            this.setState({
                isLoading:true
            })

            setTimeout( () => {
                this.getListMovies(nextProps.type);
            },1000)

        }
    }

    render (){
        const {movies, isLoading} = this.state;
        return(
            <div className="row">
                {isLoading ? (
                    <p>...Loading</p>
                ):(
                    movies.map( (move, index) => {
                        return (
                            <div className="col-4" key={index}>
                                <MovieItem item={move} increaseLike={this.props.increaseLike} decreaseLike={this.props.decreaseLike} />
                            </div>
                        )
                    })
                )}
            </div>
        )
    }
}