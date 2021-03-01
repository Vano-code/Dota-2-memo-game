import React from 'react';
import Button from './../components/home/Button';
import { connect } from "react-redux";
import { setRequisites } from './../actions/index';

class Registration extends React.Component{

    setToStorage = (event) =>{
        event.preventDefault();
        this.props.setToStorage(this.refs.name.value, this.refs.email.value);
        this.props.history.push('/settings');
    }

    componentDidMount(){
        this.refs.name.focus();
    }

    render(){
        return <div className='registration'>
        <h3>Welcome to DOTA 2 match-match game</h3>
        <h3>sign up please!</h3>
        <form onSubmit={this.setToStorage}>
            <label>Name:<input ref="name" type="text" required placeholder="Enter a name"/></label>
            <label>E-mail:<input ref="email" type="email" placeholder="Enter a valid email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/></label>
            <div className="registration-button-container">
                <Button className="registration-button" location="/" name="Back"/>
                <input className="registration-button" type="submit" value="Start"/>
            </div>
        </form>
        </div>
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setToStorage: (name, email) =>{
            dispatch(setRequisites(name, email));
        }
    }
  }

export default connect(null, mapDispatchToProps)(Registration);