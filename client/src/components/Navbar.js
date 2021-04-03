import React, { useState, useEffect } from 'react'
import stylesheet from '../utils/stylesheet.module.css';
import "./Navbar.css"

export default function Navbar() {
	return (
		<nav>
			<ul className="list">
				<li className="items">Accueil</li>
				<li className="items">Profile</li>
				<li className="items">Contact</li>
				<li className="items">Logout</li>
			</ul>
			<button className="btn">Btn</button>
		</nav>
	);
}