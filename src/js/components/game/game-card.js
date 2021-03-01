import React from 'react';
import { connect } from "react-redux";
import LoadingScreen from './../LoadingScreen/index';
import { pushToCheck, changeTheIsClicked, clearCheckArray, changeTheVisibility, pairsFound, setUnmatched} from '../../actions/index';
import { FIRST_CARD_TO_CHECK, SECOND_CARD_TO_CHECK, NUMBER_FOR_PAIR, TIME_FOR_ANIMATION } from './../../constants/constants';

class CardOfGame extends React.Component{

    cliked = () => {
        if(this.props.arrayInCheck.length === NUMBER_FOR_PAIR) return;
        const numberOfCardInArray = this.props.width * this.props.indexA + this.props.indexB - 1;
        if(this.props.arrayInCheck.length === 1 && this.props.arrayInCheck[FIRST_CARD_TO_CHECK].numberInArray === numberOfCardInArray) return;
        const nameOfCard = this.props.arrayOfShirts[numberOfCardInArray];
        this.props.pushToCheck(numberOfCardInArray, nameOfCard);
        this.props.changeTheIsClicked(numberOfCardInArray);
        if(this.props.arrayInCheck.length === NUMBER_FOR_PAIR){
            if(this.props.arrayInCheck[FIRST_CARD_TO_CHECK].cardName !== this.props.arrayInCheck[SECOND_CARD_TO_CHECK].cardName){
                setTimeout(()=>{
                    this.props.changeTheIsClicked(this.props.arrayInCheck[FIRST_CARD_TO_CHECK].numberInArray);
                    this.props.changeTheIsClicked(this.props.arrayInCheck[SECOND_CARD_TO_CHECK].numberInArray);
                    this.props.clearCheckArray();
                },TIME_FOR_ANIMATION)
            }else{
                setTimeout(()=>{
                    this.props.changeTheVisibility(this.props.arrayInCheck[FIRST_CARD_TO_CHECK].numberInArray);
                    this.props.changeTheVisibility(this.props.arrayInCheck[SECOND_CARD_TO_CHECK].numberInArray);
                    this.props.clearCheckArray();
                    this.props.pairsFound();
                },TIME_FOR_ANIMATION)
            }
        }
    }

    backGroundOfCard = () => {
        const numberOfCardInArray = this.props.width * this.props.indexA + this.props.indexB - 1;
        const backImageUrl = require(`../../../img/backs/${this.props.back}`);
        const shirtImageUrl = require(`../../../img/shirts/${this.props.arrayOfShirts[numberOfCardInArray]}`);
        let back = {backgroundImage:`url(${backImageUrl})`};
        if(this.props.objectOfShirts[numberOfCardInArray].isClicked){
            back = {backgroundImage:`url(${shirtImageUrl})`};
        }
        return back;
    }


    classNameOfCard = () => {
        const numberOfCardInArray = this.props.width * this.props.indexA + this.props.indexB -1 ;
        const className = "game-card ";
        const whenClicked = "clicked ";
        const whenHidden = "hidden";
        if(this.props.objectOfShirts[numberOfCardInArray].isClicked){
            if(this.props.objectOfShirts[numberOfCardInArray].isClicked && !this.props.objectOfShirts[numberOfCardInArray].isVisible){
                return className + whenClicked + whenHidden;
            }
            return className + whenClicked;
        }else{
            return className
        }
    }

    render(){
        const backGround = this.backGroundOfCard();
        const className = this.classNameOfCard()
        if(this.props.arrayOfShirts.length === 0 || typeof this.props.arrayOfShirts === 'undefined'){
            return <LoadingScreen />
        }
        return <div onClick={this.cliked} style={backGround} className={className}></div>
    }

}

const mapStateToProps = state => {
    return {
        width: state.settings.width,
        back: state.settings.back,
        arrayOfShirts: state.game.arrayOfShirts,
        height: state.settings.height,
        objectOfShirts: state.game.shirts,
        arrayInCheck: state.game.forCheck,
        countPairsFound: state.game.pairsCount,
        store: state
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return{
        pairsFound: () => {
            dispatch(pairsFound())
        },
        pushToCheck: (number,name) => {
            dispatch(pushToCheck(number, name))
        },
        changeTheIsClicked: number => {
            dispatch(changeTheIsClicked(number))
        },
        clearCheckArray: () => {
            dispatch(clearCheckArray())
        },
        changeTheVisibility: number => {
            dispatch(changeTheVisibility(number))
        },
        setUnmatched: number => {
            dispatch(setUnmatched(number))
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CardOfGame);