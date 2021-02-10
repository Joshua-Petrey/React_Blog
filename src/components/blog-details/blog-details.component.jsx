import { useParams } from "react-router-dom";
import {useFetch} from '../../custom-hooks/useFetch';
import {useHistory} from 'react-router-dom';

const BlogDetails = () => {
    // we now have access to url parameters
    const {id} = useParams() ;
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id) ;
    const history = useHistory();

    const handleClick = ( ) => {
        fetch('http://localhost:8000/blogs/' + id, 
        {method: "DELETE"})
        .then(
            history.push('/')
        )
    }

    return ( 
        <div className="blog-details">
            {
                isLoading && <div>Loading blog</div> 
            }
            {
                error && <div>{error}</div>
            }
            {
                blog && <article>
                            <h2>{blog.title}</h2>
                            <p>Written by: {blog.author}</p>
                            <div>
                                {blog.body}
                            </div>
                            <button onClick={handleClick}>Delete</button>
                        </article>
            }
        </div>
     );
}
 
export default BlogDetails;