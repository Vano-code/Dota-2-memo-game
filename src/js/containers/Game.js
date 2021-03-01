import React from 'react';
import { connect } from "react-redux";
import RowCardContainer from './../components/game/rowCardContainer';
import Timer from './../components/game/timer';
import Button from './../components/home/Button';
import { arrayOfShirtsInit, removalOfStates, ObjectOfShirtsInit, postMyResult } from './../actions/index';

class Game extends React.Component {

  componentWillUnmount(){
    this.props.removalOfStates()
  }
  cardsInit = () => {
    const List = [];
    for(let i = 0; i < this.props.height; i++){
        List.push(<RowCardContainer width={this.props.width} key={i} index={i}/>);
    }
    return List;
  }
  componentWillMount(){
    const width = this.props.width * this.props.height / 2;
    this.props.arrayOfShirtsInit(width);
    this.props.ObjectOfShirtsInit(this.props.arrayOfShirts.length);
  }

  componentDidUpdate(){
    const width = this.props.width * this.props.height / 2;
    if(this.props.countPairsFound === width){
      this.props.postMyResult(this.props.name, this.props.email, this.props.score)
    }
  }

  endOfGame = () => {
    return <div className="game">
    <p className="end-of-game">You're a superstar! May today's success be the beginning of tomorrow's achievements.</p>
    <div className="game-buttons-container">
      <Button className="game-button" name="Home" location="/"/>
      <Button className="game-button" name="Back" location="/settings"/>
    </div>
  </div>
  }

    render() {
      const width = this.props.width * this.props.height / 2;
      if(this.props.countPairsFound === width) return this.endOfGame()
      return <div className="game">
      <Timer />
      <div className="game-cards-container">
      {this.cardsInit()}
      </div>
      <div className="game-buttons-container">
        <Button className="game-button" name="Home" location="/"/>
        <Button className="game-button" name="Back" location="/settings"/>
      </div>
    </div>
  }
}
const mapStateToProps = state => {
  return {
    width: state.settings.width,
    height: state.settings.height,
    back: state.settings.back,
    arrayOfShirts: state.game.arrayOfShirts,
    objectOfShirts: state.game.shirts,
    countPairsFound: state.game.pairsCount,
    name: state.requisites.name,
    email: state.requisites.email,
    score: state.game.currentTime
  };
};

const mapDispatchToProps = dispatch => {
  return{
    arrayOfShirtsInit: width => {
      dispatch(arrayOfShirtsInit(width))
    },
    removalOfStates: () => {
      dispatch(removalOfStates())
    },
    ObjectOfShirtsInit: number => {
      dispatch(ObjectOfShirtsInit(number))
    },
    postMyResult: (name, email, score) => {
      dispatch(postMyResult(name, email, score))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
