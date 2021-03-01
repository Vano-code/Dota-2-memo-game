import React from 'react';
import './styles.css';

class LoadingScreen extends React.Component {

    render() {
        return (
            <div
                className="loader"
           >
                <div className="loader-spinner" />
            </div>

        );
    }
}

export default LoadingScreen;