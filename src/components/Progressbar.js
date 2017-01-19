import React from 'react';

var ProgressBar = require('react-progressbar.js');
var Circle = ProgressBar.Circle;

class Progressbar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            progress: 1.0,
            text: "Hämtar käk"
        }

    }


    render() {
        var options = {
            strokeWidth: 2,
            duration: 2800
        };


        var containerStyle = {
            width: '200px',
            height: '200px'
        };

        return (

        <div>

            <div className="fork">
                <img src={require('../images/fork1.svg')} className="forkimg" />
            </div>

            <div className="progressbar">

                <Circle
                    progress={this.state.progress}
                    text={this.state.text}
                    options={options}
                    initialAnimate={true}
                    containerStyle={containerStyle}
                    containerClassName={'.progressbar'}
                />
            </div>

            <div className="kniv">
                <img src={require('../images/knife1.svg')} className="knivimg" />
            </div>

        </div>

        );
    }
}




export default Progressbar;