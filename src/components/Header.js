import React from 'react';

const Header = (props) => (
    <div className="header">
        <div className="container container--header">
            <div>
                <h1 className="header__title">
                    <img src="https://tchol.org/images/travel-and-tourism-clipart-6.png"  />
                    {props.title}
                </h1>
                {props.subtitle && <h2 className="header__subtitle"> {props.subtitle} </h2>}
            </div>
        </div>
    </div>
);

Header.defaultProps = {
    title: '   YouTravel'
}

export default Header;
