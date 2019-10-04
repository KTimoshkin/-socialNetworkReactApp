import React from 'react';
import {NavLink, Redirect} from 'react-router-dom';
import Styles from './Header.module.sass'
import img from '../../../img/site-logo.png';
import Button from "../global/Button/Button";

const Header = (props)=> {
    return(
        <header>
            <div className={Styles.header}>
                <div className={Styles.siteLogo}>
                    <NavLink to="/profile" >
                        <img src={img} alt="site logo"/>
                        <b>Social Network on ReactJs</b>
                    </NavLink>
                </div>
                <div className={Styles.loginBlock}>
                    {props.isAuth
                        ? <p>{props.login} <Button btnText={"Logout"} btnOnClick={props.logout}></Button></p>
                        : <NavLink to="/login">Login </NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;