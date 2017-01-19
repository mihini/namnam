import React from 'react';

const Header = () =>  {
    return(
        <header>
            <div className="headerbox">
                <h1 className="headertext">
                    NamNam
                </h1>
                <img src={require('../images/pommes.png')} className="pommes" />
                <h3 className="headertext2">
                    Vad är du sugen på?
                </h3>
            </div>
        </header>

    )
}

export default Header;