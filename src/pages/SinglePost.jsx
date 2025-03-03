import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

function SinglePost() {
    const { id } = useParams();
    const [post, setPost] = useState({
        id: "",
        title: "",
        content: "",
        image: "",
        tags: []
    });

    useEffect(() => {
        fetch(`http://localhost:3000/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error("errore nel caricamento dei post:", error));
    }, [id]);


    return (
        <div className="container mt-4">
            <h1>Dettaglio del Post: {id}</h1>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            {post.image && <img src={post.image} alt={post.title} className="img-fluid mt-3" />}
            <h4>Tags:</h4>
            <ul>
                {post.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
};

export default SinglePost;