import Navbar from './components/navbar/navbar.component';
import Home from './components/home/home.component';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import CreateBlog from './components/create-blog/create-blog.component';
import BlogDetails from './components/blog-details/blog-details.component';
import NotFound from './components/404/404.component';

const App = () => {
  
  return (
  <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className='content'>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <CreateBlog />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails></BlogDetails>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </div>
    </div>
  </BrowserRouter>
  );
}
// export components to use in other files
export default App;
