import React from "react";
//import movies from './movie';
import MoveList from "./MoveList";
import MoveTabs from "./MoveTabs";
import Page404 from "./Page404";
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom'

function LikeCounts({ likeCounts }) {
    return (
        <p>Количество лайков: {likeCounts}</p>
    )
}

class App extends React.Component{
    constructor(){
        super();

        this.state ={
            isLoading: true,
            type: "upcoming",
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

    changeTab = tab =>{
        this.setState({
            type: tab
        })
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log("shouldComponentUpdate");
    //   console.log("old state", this.state);
    //   console.log("new state", nextState);
    //   return true;
    // }

    // componentWillUpdate(nextProps, nextState) {
    //   console.log("componentWillUpdate");
    //   console.log("old state", this.state);
    //   console.log("new state", nextState);
    // }

    // componentDidUpdate(prevProps, prevState) {
    //   console.log("componentDidUpdate");
    //   console.log("old state", prevState);
    //   console.log("new state", this.state);
    // }

  render() {
      const { likeCounts } = this.state;
      return (
          <div>
              <div className="container">
                  <div className="row">
                      <div className="col-12">
                          <LikeCounts likeCounts={likeCounts} />
                      </div>
                  </div>

                  <div className="row mb-4">
                      <div className="col-12">
                          <MoveTabs  /> {/*type={this.state.type} changeTab={this.changeTab}*/}
                      </div>
                  </div>


                  {/* передавая из одного компонент, в другой, и в другой, когда будет более 15-20, нужен Redux*/}
                  <Switch>
                      <Route
                          path='/now_playing'
                          render={(props) => <MoveList {...props} type="now_playing"  increaseLike={this.increaseLike} decreaseLike={this.decreaseLike}/>}
                      />
                      <Route
                          path='/upcoming'
                          render={(props) => <MoveList {...props} type="upcoming"  increaseLike={this.increaseLike} decreaseLike={this.decreaseLike}/>}
                      />
                      <Route
                          path='/popular'
                          render={(props) => <MoveList {...props} type="popular"  increaseLike={this.increaseLike} decreaseLike={this.decreaseLike}/>}
                      />
                      <Route render={()=><Page404 text="Error 404! Page not found!" />}
                      />
                  </Switch>
              </div>
          </div>
      );
    }

}

export default App;
