import React from 'react';
import { Config } from './../constants/config';
import { connect } from "react-redux";
import Card from './../components/settings/card';
import DiffButton from './../components/settings/diffButton';
import Button from './../components/home/Button';
import { setSettings, setBack } from './../actions/index';

class Settings extends React.Component{

    render(){
        return <div className="settings">
            <h2>Choose a shirt and difficulty!</h2>
            <div className="settings-cards-container">
            {Config.backs.map((item, index)=>{
                return <Card currentBack={this.props.currentBack} click={this.props.setBack} key={index} back={item}/>
            })}   
            </div>
            <div className="settings-diff">{
                Config.diff.map((item, index) => {
                    return <DiffButton currentWidth={this.props.currentWidth} click={this.props.setSettings} key={index} width={item.width} height={item.height}/>
                })
            }</div>
            <div className="settings-buttons-container">
                <Button className="settings-button" location="/registration" name="Back"/>
                {this.props.currentBack && this.props.currentWidth && <Button className="settings-button" location="/game" name="NEXT"/>}
            </div>
        </div>
    }
}

const mapStateToProps = state => {
    return {
        currentWidth: state.settings.width,
        currentBack: state.settings.back
    };
  };

  const mapDispatchToProps = dispatch => {
    return{
        setSettings:(width, height) =>{
            dispatch(setSettings(width, height))
        },
        setBack: (back) =>{
            dispatch(setBack(back))
        }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Settings);