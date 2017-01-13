import React from 'react';

class SearchForm extends React.Component{
  render(){
    return(
      <form>
        <label for="search"></label>
        <input id="search" type="text" placeholder="Sveavägen 60, Stockholm"/>
        <button>Sök</button>
      </form>
    )
  }
}

export default SearchForm;
