import React from "react";
import { BrowserRouter, Route, Link, NavLink } from 'react-router-dom'

export default class MoveTabs extends React.Component{
    render(){
        const { type } = this.props;
        return(
            <ul className="tabs nav nav-pills">
                <li className="nav-item">
                    <NavLink to='/now_playing' className="nav-link" activeClassName='active'>Now playing</NavLink>
                    {/*<div onClick={() => {this.props.changeTab("now_playing")}} className={type ==="now_playing" ? "nav-link active" : "nav-link" }>*/}
                        {/*Now playing*/}
                    {/*</div>*/}
                </li>
                <li className="nav-item">
                    <NavLink to='/upcoming' className="nav-link" activeClassName='active'>Upcoming</NavLink>
                    {/*<div onClick={()=>{this.props.changeTab("upcoming")}}  className={type ==="upcoming" ? "nav-link active" : "nav-link" }>*/}
                        {/*Upcoming*/}
                    {/*</div>*/}
                </li>
                <li className="nav-item">
                    <NavLink to='/popular' className="nav-link" activeClassName='active'>Popular</NavLink>
                    {/*<div onClick={this.props.changeTab.bind(this,"popular")} className={type ==="popular" ? "nav-link active" : "nav-link" }>*/}
                        {/*Popular*/}
                    {/*</div>*/}
                </li>
            </ul>
        )
    }
}