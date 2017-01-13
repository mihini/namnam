import React from 'react';

class Searchbar extends React.Component {
    render() {

        return(
            <form className="searchbar-form">
                <h1>Let us choose food for you</h1>
                <input type="text" required placeholder="Adress"/>
                <button type="submit">Let's roll</button>
            </form>
        )
    }
}

export default Searchbar;