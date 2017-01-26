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

        var show = {
          display: 'block'
        }

        var hide = {
          display: 'none'
        }

        var showStyle = this.props.showProgressbar ? show : hide;

        //använda värdet på props. kolla det och beroende på sant/falskt visa el gömma kan göra det med stil el class */}



        return (

        <div style={showStyle}>

            <div className="fork">
                <img src={require('../images/fork1.svg')} className="forkimg"  alt="fork"/>
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
                <img src={require('../images/knife1.svg')} className="knivimg" alt="knife" />
            </div>

        </div>

        );
    }
}




export default Progressbar;
