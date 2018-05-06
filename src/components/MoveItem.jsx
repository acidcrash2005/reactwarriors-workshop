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
                    src={this.props.item.backdrop_path || this.props.item.poster_path}
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
                    <button onClick={() => {
                        this.setState({
                            showOverview: !this.state.showOverview
                        })
                    }}>{this.state.showOverview ? "Hide" : "Show"}</button>
                </React.Fragment>
            )
        }

        const {addFavourite, removeFavourite} = this;

        return (
            <div className="card" style={{width: "100%"}}>
                {img()}
                {cardBody()}
                {hideShow()}
                {templateOverview()}

                <div style={{marginTop: "15px"}}>
                    <div className="row">
                        <div className="col">
                            {this.state.like  ? <button onClick={this.unLike}>UnLike</button> : <button onClick={ this.addLike.bind(this) }>Like</button>}
                        </div>
                        <div className="col text-right">
                            {this.state.favourite ? <button onClick={removeFavourite}>UnFavourite</button> : <button onClick={addFavourite}>Favourite</button>}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default MovieItem;