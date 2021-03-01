import React from 'react';
import { connect } from "react-redux";
import { URL } from './../constants/constants';
import LoadingScreen from './../components/LoadingScreen/index';
import { getScore } from './../actions/index';
import CellOfTable from './../components/score/cellOfTable';
import { compareFunc } from './../utils/utils';
import Button from './../components/home/Button';
import {TOP_OF_SCORE_FOR_RENDER} from '../constants/constants';

class Score extends React.Component{

    componentDidMount(){
        fetch(URL)
        .then(response => response.json())
        .then(data => this.props.getScore(data))
        .catch(error => this.props.getScore(error));
    }

    render(){
        if(Object.keys(this.props.stateOfScore).length === 0) return <LoadingScreen />
        const fullList = this.props.stateOfScore.result.slice().sort(compareFunc);
        const list = fullList.map((item, index) =>{
            return <CellOfTable key={index} name={item.username} email={item.email} score={item.score}/>
        }).slice(0, TOP_OF_SCORE_FOR_RENDER);
        return <div className='start-page-score'>
        <h3 className="score-message">Here are the best!</h3>
        <table>
            <thead>
                <tr>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody>
            {list}
            </tbody>
        </table>
        <Button location='/' name="Home Page" className="score-button"/>
        </div>
    }
}

const mapStateToProps = state => {
    return {
      stateOfScore: state.score
    };
};

const mapDispatchToProps = dispatch => {
    return{
        getScore: data =>{
            dispatch(getScore(data))
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Score);