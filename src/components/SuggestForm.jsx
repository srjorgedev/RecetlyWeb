import { useState, useEffect } from 'react'
import Loader from './Loader'
import './styles/suggest.css'
import API_URL, { ROUTES } from '../api/api'

const SuggestForm = () => {
    const [loading, setLoading] = useState(false)
    const [text, setText] = useState("")
    const [comments, setComments] = useState([])
    const [loadingComments, setLoadingComments] = useState(false)

    const getComments = async () => {
        setLoadingComments(true)

        const commentsResponse = await fetch(
            "https://app.recetly.net/api/v1/suggest/get", {
            method: 'GET'
        }
        );
        const commentsData = await commentsResponse.json();

        setComments(commentsData.data)

        setLoadingComments(false)
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        if (!text || text == "") {
            return alert('No puede estar vacío');
        }
        setLoading(true)
        const response = await fetch(`${API_URL}${ROUTES.POST_SUGGEST}`, {
            method: 'POST',
            body: JSON.stringify({ text: text }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()

        alert('Comentario publicado.')
        setText('')
        setLoading(false)
    }

    const onChangeText = (event) => {
        setText(event.target.value)
    }

    useEffect(() => {
        getComments()
    }, [])

    return (
        <>
            <form>
                <textarea value={text} onChange={onChangeText} placeholder='Tu comentario...' rows="1" name="suggest" id="suggest"></textarea>
                <input onClick={onSubmit} type="submit" value="Publicar" />
                {loading && <Loader />}
            </form >
            <p>Comentarios</p>
            <div className='comment-section'>
                <a href="/sugerencias">Ver mas</a>
                <div className="comments">
                    <div className="blur" />
                    {loadingComments && <Loader />}
                    {!loadingComments && comments && comments.map((comment) => (
                        <p key={comment.id} className={`comment c-${comment.id}`}>
                            {comment.comment}
                        </p>
                    ))}
                </div>
            </div>
        </>
    )
}

export default SuggestForm