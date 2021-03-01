import React, { Component } from 'react';
import Button from './../components/home/Button';
class Home extends Component{

    
    render(){
        return  <div className='start-page'>            
            <h3>Welcome to DOTA 2 match-match game</h3>                      
        </div>
        
    }

    render(){
        return  <div className='start-page'>            
            <Button className="home-buttons" name="New Game" location="/registration"/>                       
        </div>
        
    }

}
export default Home;