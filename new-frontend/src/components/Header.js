import React from 'react';
import burger from '../SVG/burger.svg';
import circle from '../SVG/circle.svg';

const Header = () => (
    <div className="header" style={{margin: '0 auto', width: '50%'}}>
        <img src={burger}/>
    </div>
);

export default Header;
