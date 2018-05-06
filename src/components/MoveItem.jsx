import React from "react";

class MovieItem extends  React.Component {
    constructor(){
        super();

        this.state ={
            showOverview: false,
            like: false,
            favourite: false
        }
    }

    // Like function
    addLike(){
        this.setState({
            like: true
        })
        // Функция была взята из App.js
        this.props.increaseLike();
    }

    unLike = () =>{
        this.setState({
            like: false
        })
        this.props.decreaseLike();
    }

    //Favourite function
    addFavourite = () =>{
        this.setState({
            favourite: true
        })
        this.props.increaseFavourite();
        this.props.addSidebarMove(this);
    }

    removeFavourite = () =>{
        this.setState({
            favourite: false
        })
        this.props.decreaseFavourite();
        this.props.removeSidebarMove(this);
    }


    render() {
        // Overview
        const templateOverview = () =>{
            if (this.state.showOverview){
                return (
                    <React.Fragment>
                        <p>{this.props.item.overview}</p>
                    </React.Fragment>
                )
            }
        }

        // Main IMG for post
        const img = () =>{
            return (
                <React.Fragment>
                    <img
                    className="card-img-top"
                    src={`https://image.tmdb.org/t/p/w500${this.props.item.backdrop_path || this.props.item.poster_path}`}
                    alt={this.props.item.title} />
                </React.Fragment>
            )
        }

        // Card body
        const cardBody = () =>{
            return (
                <div className="card-body">
                    <h6 className="card-title">{this.props.item.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {this.props.item.vote_average}</p>
                    </div>
                </div>
            )
        }

        // Hide button
        const hideShow = () =>{
            return (
                <React.Fragment>
                    <button className="btn btn-info" onClick={() => {
                        this.setState({
                            showOverview: !this.state.showOverview
                        })
                    }}>{this.state.showOverview ? "Hide" : "Show"}</button>
                </React.Fragment>
            )
        }

        const {addFavourite, removeFavourite} = this;

        return (
            <div className={this.state.favourite ? "card text-white bg-warning": "card"} style={{width: "100%"}}>
                {img()}
                <div className="card-body">
                    {cardBody()}
                </div>
                <div className="card-footer">
                    {hideShow()}
                    <div className="d-block">
                        {templateOverview()}
                    </div>


                    <div style={{marginTop: "15px"}}>
                        <div className="row">
                            <div className="col">
                                {this.state.like  ? <button className="btn btn-danger" onClick={this.unLike}>UnLike</button> : <button className="btn btn-success" onClick={ this.addLike.bind(this) }>Like</button>}
                            </div>
                            <div className="col text-right">
                                {this.state.favourite ? <button className="btn btn-link"  onClick={removeFavourite}>UnFavourite</button> : <button className="btn btn-link" onClick={addFavourite}>Favourite</button>}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default MovieItem;