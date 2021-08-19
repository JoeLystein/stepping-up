import React from 'react';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
    } from '../my-navbar/NavbarElements'
	import aa from 

function mynavbar() {
    return (
    <div>
        {/* <Image>
        <img src="" alt="none"/>
        </Image> */}
        <Nav>
		<Bars />

		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='/events' activeStyle>
			Events
		</NavLink>
		<NavLink to='/annual' activeStyle>
			Annual Report
		</NavLink>
		<NavLink to='/team' activeStyle>
			Teams
		</NavLink>
		<NavLink to='/video' activeStyle>
			Videos
		</NavLink>
		<NavLink to='/signup' activeStyle>
			Sign Up
		</NavLink>
        </NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn>
	</Nav>
    </div>
        
    )
}

export default mynavbar


