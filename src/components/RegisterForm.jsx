import { useState } from 'react';
import './styles/styles.css';
import Loader from './Loader';
import API_URL, { ROUTES } from '../api/api'; // Corregí el nombre API_URLm
import axios from 'axios';

const RegistrationForm = () => {
    const [next, setNext] = useState(false);
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (setter) => (evt) => {
        setter(evt.target.value);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post(`${API_URL}${ROUTES.SIGNUP}`, {
                username: username,
                name: name,
                lastname: lastname,
                email: email,
                password: password,
            });
            
            if (!response.data.error) {
                location.replace('/')
            }
        } catch (error) {
            console.error('Error al registrar:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleNextClick = (evt) => {
        evt.preventDefault();
        setNext(!next); // Alterna entre la primera y la segunda sección
    };

    return (
        <div className="main-layout">
            <form onSubmit={handleSubmit}>
                <div className={`personal-info ${next ? 'd' : 'a'}`}>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleInputChange(setUsername)}
                        value={username}
                    />

                    <label htmlFor="name">Nombre (s)</label>
                    <input
                        type="text"
                        name="name"
                        onChange={handleInputChange(setName)}
                        value={name}
                    />

                    <label htmlFor="lastname">Apellido (s)</label>
                    <input
                        type="text"
                        name="lastname"
                        onChange={handleInputChange(setLastname)}
                        value={lastname}
                    />

                    <button className="next" onClick={handleNextClick}>
                        Siguiente
                    </button>
                </div>

                <div className={`private-info ${next ? 'a' : 'd'}`}>
                    <label htmlFor="email">Correo electrónico</label>
                    <input
                        type="email"
                        name="email"
                        onChange={handleInputChange(setEmail)}
                        value={email}
                    />

                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        name="password"
                        onChange={handleInputChange(setPassword)}
                        value={password}
                    />

                    <div className="button-container">
                        <button className="back" onClick={handleNextClick}>
                            Volver
                        </button>
                        <input type="submit" id="signin" value="Crear cuenta" />
                    </div>
                </div>

                <a href="/auth/login">Ya tengo una cuenta</a>
                {loading && <Loader />} {/* Muestra el loader si loading es true */}
            </form>
        </div>
    );
};

export default RegistrationForm;
