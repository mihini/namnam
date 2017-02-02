import React from 'react';

class Searchbar extends React.Component {

    constructor(props){
        super(props);
        this.restaurang = this.restaurang.bind(this);

    }


    restaurang(){
        const mintext = { inputText: this.inputText };

        alert(this.inputText.value);
    }

    render() {
        return(
            <form className="searchbar-form">
                <h1>Är du redo för Namnamnam?</h1>
                <input ref={(input) => { this.inputText = input; }} type="text" required placeholder="Adress"/>
                <button type="submit" onClick={this.restaurang}>Let's roll</button>
            </form>
        )
    }
}

export default Searchbar;