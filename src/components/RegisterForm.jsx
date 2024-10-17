import React, { useState, useRef } from 'react';
import 'cropperjs/dist/cropper.css';
import { Cropper } from 'react-cropper';
import './styles/styles.css';

const RegistrationForm = () => {
    const [image, setImage] = useState(null);
    const cropperRef = useRef(null);

    const handleImageChange = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            setImage(reader.result); // Cargar la imagen seleccionada
        };
        reader.readAsDataURL(file);
    };

    const handleCrop = () => {
        const cropper = cropperRef.current?.cropper;
        if (cropper) {
            // Obtener la imagen recortada en una resolución de 300x300
            const croppedCanvas = cropper.getCroppedCanvas({
                width: 300,
                height: 300,
            });
            // Convertir a base64 para mostrar o hacer algo con la imagen recortada
            const croppedImage = croppedCanvas.toDataURL('image/png');
            console.log(croppedImage);
            // Aquí puedes hacer algo con la imagen recortada, como subirla a un servidor
        }
    };

    return (
        <div className="main-layout">
            <h1>BIENVENIDO</h1>
            <h2>
                Ingresa tus datos y registrate en <strong>RECETLY</strong> para tener acceso
                a la mejor aplicación de recetas de comida.
            </h2>
            <form action="post">
                <label htmlFor="image">Imagen de perfil</label>
                <input type="file" name="image" accept="image/*" onChange={handleImageChange} />
                {image && (
                    <>
                        <Cropper
                            src={image}
                            style={{ height: 400, width: '100%' }}
                            initialAspectRatio={1}
                            guides={false}
                            ref={cropperRef}
                            viewMode={1}
                        />
                        <button type="button" onClick={handleCrop}>Recortar Imagen</button>
                    </>
                )}

                <label htmlFor="username">Nombre de usuario</label>
                <input type="text" name="username" />

                <label htmlFor="name">Nombre (s)</label>
                <input type="text" name="name" />

                <label htmlFor="lastname">Apellido (s)</label>
                <input type="text" name="lastname" />

                <label htmlFor="email">Correo electrónico</label>
                <input type="email" name="email" />

                <label htmlFor="password">Contraseña</label>
                <input type="password" name="password" />

                <input type="submit" id="signin" value="Crear cuenta" />
                <a href="/auth/login">Ya tengo una cuenta</a>
            </form>
        </div>
    );
};

export default RegistrationForm;
