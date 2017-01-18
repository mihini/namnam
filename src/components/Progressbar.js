import React from 'react';

var ProgressBar = require('react-progressbar.js');
var Circle = ProgressBar.Circle;

class Progressbar extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            progress: 0.96,
            text: "Hämtar käk"
        }

    }


    render() {
        var options = {
            strokeWidth: 2,
            duration: 1800
        };


        var containerStyle = {
            width: '200px',
            height: '200px'
        };

        return (

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
        );
    }
}




export default Progressbar;