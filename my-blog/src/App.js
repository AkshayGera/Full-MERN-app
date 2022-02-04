
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
    <div className="App">
    <NavBar />
    <div id='page-body'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/article/:name' element={<ArticlePage />} />
        <Route path='/article-list' element={<ArticleListPage />} />
      </Routes>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
