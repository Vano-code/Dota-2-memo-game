import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = (props) => {
    return <Link className={props.className} to={props.location}>{props.name}</Link>
}

Button.propTypes = {
    className: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
}
export default Button;