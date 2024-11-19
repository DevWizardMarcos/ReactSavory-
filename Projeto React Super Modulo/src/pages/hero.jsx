import React, { useContext, useEffect } from 'react'
import { UserContext } from '../context/userContext'
import HeroInputField from '../components/heroInputField'
import ShowRecipes from '../components/showRecipes'
import './hero.css'


function Hero() {
    const { user, setUser } = useContext(UserContext)

	useEffect(() => {
		let email = localStorage.getItem('email')
		if (!email) { 
			email = 'usuário'
		}
		console.log(email)
		setUser(email)
	},[])

	return (
		<header className="hero-header">
		  <div className="hero-search">
		  </div>
		  <h1 className="hero-title">Bem vindo, {user ? user : 'usuario'}!</h1>
		  <div className="hero-input-field">
			<HeroInputField />
		  </div>
		  <div className="hero-recipes">
			<ShowRecipes />
		  </div>
		</header>
	  )
}


export default Hero