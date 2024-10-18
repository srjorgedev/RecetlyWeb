import React, { useState, useRef } from 'react';
import 'cropperjs/dist/cropper.css';
import { Cropper } from 'react-cropper';
import './styles/styles.css';

const RegistrationForm = () => {
    const [image, setImage] = useState(null);
    const [url, setUrl] = useState(null);
    const [next, setNext] = useState(false)
    const [showCropper, setShowCropper] = useState(false); // Estado para mostrar/ocultar el cropper
    const cropperRef = useRef(null);
    const inputFileRef = useRef(null)

    const handleImageChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result); // Cargar la imagen seleccionada
            setShowCropper(true); // Mostrar el cropper cuando se selecciona la imagen
        };
        reader.readAsDataURL(file);
    };

    const handleCrop = () => {
        const cropper = cropperRef.current?.cropper;
        if (cropper) {
            const croppedCanvas = cropper.getCroppedCanvas({
                width: 300,
                height: 300,
            });
            const croppedImage = croppedCanvas.toDataURL('image/png');
            setUrl(croppedImage);
            setShowCropper(false); // Ocultar el cropper después de recortar
        }
    };

    const handleClickImg = () => {
        inputFileRef.current.click();
    }

    const handleNextClick = (evt) => {
        evt.preventDefault()
        if (next) setNext(false)
        if (!next) setNext(true)
    }

    return (
        <div className="main-layout">
            <form action="post">
                <div className={`personal-info ${next ? 'd' : 'a'}`}>
                    <label htmlFor="image">Imagen de perfil</label>
                    <img
                        onClick={handleClickImg}
                        src={url ?? '../../public/assets/default_user.png'}
                        alt="Imagen de perfil"
                        style={{ cursor: 'pointer' }}
                    />
                    <input
                        ref={inputFileRef}
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                        style={{ display: 'none' }}
                    />
                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" name="username" />

                    <label htmlFor="name">Nombre (s)</label>
                    <input type="text" name="name" />

                    <label htmlFor="lastname">Apellido (s)</label>
                    <input type="text" name="lastname" />

                    <button className='next' onClick={handleNextClick}>Siguiente</button>
                </div>
                <div className={`private-info ${next ? 'a' : 'd'}`}><label htmlFor="email">Correo electrónico</label>
                    <input type="email" name="email" />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" name="password" />

                    <input type="submit" id="signin" value="Crear cuenta" />
                </div>
                <a href="/auth/login">Ya tengo una cuenta</a>
            </form>
            {showCropper && image && (
                <div className='cropper'>
                    <Cropper
                        src={image}
                        style={{ height: 400, width: '100%' }}
                        initialAspectRatio={1}
                        aspectRatio={1}
                        guides={true}
                        ref={cropperRef}
                        viewMode={0}
                    />
                    <button type="button" onClick={handleCrop}>Recortar Imagen</button>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
