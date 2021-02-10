import {useState} from 'react';
import {useHistory}  from 'react-router-dom';

const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        // prevents page refresh
        e.preventDefault() ;
        //create blog object from form data
        const blog = { title, body, author} ;
        // shows adding blog... while the new blog is being posted
        setIsLoading(true);
        // POST blog to endpoint
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {console.log("post added to db");
            setIsLoading(false);
        history.push('/');})
    }

    return ( 
        <div className='create'>
            <h2>Add a new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                required
                value={title}
                // e.target.value is whatever were typing into the input
                // 
                onChange={(e) => setTitle(e.target.value) }
                />

                <label>Blog Content:</label>
                <textarea
                required
                onChange={(e) => setBody(e.target.value) }
                value={body}
                />


                <select 
                value={author}
                onChange={e => setAuthor(e.target.value)}
                >
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                { !isLoading && <button>Add Blog</button>}
                { isLoading && <button disabled>Adding blog...</button>}

            </form>
        </div>
     );
}
 
export default CreateBlog;