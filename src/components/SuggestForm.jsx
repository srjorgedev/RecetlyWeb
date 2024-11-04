import { useState } from 'react'
import Loader from './Loader'
import './styles/suggest.css'
import API_URL, { ROUTES } from '../api/api'

const SuggestForm = () => {
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState(null)

    const onSubmit = async (event) => {
        setLoading(true)
        event.preventDefault()
        if (!text || text == "") {
            return alert('No puede estar vacío');
        }

        const response = await fetch(`${API_URL}${ROUTES.POST_SUGGEST}`, {
            method: 'POST',
            body: JSON.stringify({ text: text }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        const commentEvent = new CustomEvent('commentSubmitted', {
            detail: text,
        });
        window.dispatchEvent(commentEvent);

        alert('Comentario publicado.')
        setText('')
        setLoading(false)
    }

    const onChangeText = (event) => {
        setText(event.target.value)
    }

    return (
        <form>
            <textarea onChange={onChangeText} placeholder='Tu comentario...' rows="1" name="suggest" id="suggest"></textarea>
            <input onClick={onSubmit} type="submit" value="Publicar" />
            {loading && <Loader />}
        </form >
    )
}

export default SuggestForm