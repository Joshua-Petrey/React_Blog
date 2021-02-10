import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className='not-found'>
            <h1>The page can't be found</h1>
            <Link to='/'>Back to the Homepage</Link>
        </div>
     );
}
 
export default NotFound;