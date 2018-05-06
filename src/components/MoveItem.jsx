import React from "react";

class MovieItem extends  React.Component {
    constructor(){
        super();

        this.state ={
            showOverview: false,
            like: false
        }
    }

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

    render() {
        const templateOverview = () =>{
            if (this.state.showOverview){
                return (
                    <React.Fragment>
                        <p>{this.props.item.overview}</p>
                    </React.Fragment>
                )
            }
        }

        return (
            <div className="card" style={{width: "100%"}}>
                <img
                    className="card-img-top"
                    src={this.props.item.backdrop_path || this.props.item.poster_path}
                    alt={this.props.item.title}
                />
                <div className="card-body">
                    <h6 className="card-title">{this.props.item.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {this.props.item.vote_average}</p>
                    </div>
                </div>
                <button onClick={() => {
                    this.setState({
                        showOverview: !this.state.showOverview
                    })
                }}>{this.state.showOverview ? "Hide" : "Show"}</button>

                { templateOverview() }
                <div style={{marginTop: "15px"}}>
                    {this.state.like  ? <button onClick={this.unLike}>UnLike</button> : <button onClick={ this.addLike.bind(this) }>Like</button>}
                </div>
            </div>
        )
    }
}

export default MovieItem;