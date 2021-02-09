import { useParams } from "react-router-dom";
import {useFetch} from '../../custom-hooks/useFetch';

const BlogDetails = () => {
    // we now have access to url parameters
    const {id} = useParams() ;
    const {data: blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id) ;

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
                        </article>
            }
        </div>
     );
}
 
export default BlogDetails;