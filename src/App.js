
import './app.css';
import classes from './app.module.css';
import Navbar from './navbar/navbar';
import ArticlePreview from './widgets/article-preview';
import Weather from './widgets/weather';
import Stocks from './widgets/stocks';

function App() {
  return (
    <div className="app">
      <Navbar className="navbar"/>
      <div className="content-wrapper">
        <div className={classes.content}> 
            <ArticlePreview className={classes.articlePreview}/>
            <Weather className={classes.weather} />
            <Stocks className={classes.stocks} />
        </div>
      </div>
    </div>
  );
}

export default App;
