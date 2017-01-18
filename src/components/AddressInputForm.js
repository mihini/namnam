class AdressInputForm extends React.Component {
  render() {

      return (
          <form className="input-form" onSubmit={this._handleSearch.bind(this)}>
            <label>Namnam hjälper dig att hitta en restaurang i närheten</label>
              <div className="input-area">
                <input placeholder="Skriv din adress tex. Sveavägen 83, Stockholm..." ref={(input) => this._address = input}/>
                <button type="submit">sök</button>
              </div>
            </form>

    );
  }

_handleSearch(event) {
  event.preventDefault();

  let address = this._address;
console.log("click Yes! addressen är: " + address);
}

}
