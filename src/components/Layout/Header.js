import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import gamesImage from '../../assets/games.jpg'
import classes from './Header.module.css';

const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>GNexusGames</h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={gamesImage} alt='Get all the games you want here!'/>
        </div>
    </Fragment>
}

export default Header;