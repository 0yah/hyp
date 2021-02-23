import { AccountCircle, ShoppingCartOutlined } from "@material-ui/icons";
import MenuIcon from '@material-ui/icons/Menu';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import CloseIcon from '@material-ui/icons/Close';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import $ from 'jquery';

import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { firestore, storage, clothRef } from "../firebase";

export const HeaderNav = () => {

    return    <div className="navigation">
        <nav>
            <ul id='hideMobile'>
                <li>Shirts</li>
                <li>Caps & Hats</li>
                <li>Bags</li>
                <li>Shoes</li>
            </ul>

            <ul id='hideDesktop'>
                <li style={{
                    textAlign: 'center'
                }}>Hyp</li>
            </ul>

            <ul className='controls' id='hideMobile'>
                <li>
                    <SearchOutlinedIcon />
                </li>

                <li>
                    <PersonOutlineOutlinedIcon />
                </li>

                <li onClick={() => {
                    window.location.href = '/cart'
                }}>

                    <ShoppingCartOutlined />
                </li>


            </ul>
            <div className="hamburger" id='hideDesktop' onClick={() => {
                $('.mobileNav').css({
                    display: 'block'
                });
            }}>
                <MenuIcon />
            </div>

            <div className='mobileNav' >
                <nav>
                    <ul>
                        <li>Shirts</li>
                        <li>Caps & Hats</li>
                        <li>Bags</li>
                        <li>Shoes</li>
                        <li>Cart</li>
                    </ul>
                </nav>
                <div className='controls' onClick={() => {
                    $('.mobileNav').css({
                        display: 'none'
                    });
                }}>
                    <CloseIcon />
                </div>
            </div>
        </nav>
    </div>
}