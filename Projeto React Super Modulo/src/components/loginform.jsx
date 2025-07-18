import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../context/userContext'













function LoginForm() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const { setUser } = useContext(UserContext)


    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const dados = await fetch('./usuarios.json')
        const usuarios = await dados.json()
        console.log(usuarios)

        for(let usuario of usuarios) {
            console.log(usuario)
            if (usuario.email === email && usuario.senha === senha) {
                setUser(usuario.email)
                localStorage.setItem('email', usuario.email)
                navigate('/hero')
            }
            else {
                alert('Senha ou email incorretos')
            }
        }        
    };

    const handleEmail = (target) => {
        setEmail(target.value);
        };

        const handleSenha = (target) => {
            setSenha(target.value);
            console.log(senha)
            
        };

	return(






        
        <div class="form-container">
            
        <div class="card-wrapper">
            <div class="animated-card">

                <div class="card-inner front">
                    
                </div>
                <div class="card-inner back">
                    <form onSubmit={(event) => handleSubmit(event)} class="login-form">
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={({ target }) => handleEmail(target)}
                            value={email}
                            name="email"
                            required
                            class="form-input"
                        />
                        <input
                            type="password"
                            placeholder="Senha"
                            value={senha}
                            name="password"
                            onChange={({ target }) => handleSenha(target)}
                            required
                            class="form-input"
                        />
                        <button type="submit" class="submit-button">Entrar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>


            


	)
}



export default LoginForm