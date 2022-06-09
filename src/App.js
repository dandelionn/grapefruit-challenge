
import { useState } from 'react';
import './App.css';
import classes from './app.module.css';
import Navbar from './navbar/navbar';
import ArticlePreview from './widgets/article-preview';
import Weather from './widgets/weather';
import Stocks from './widgets/stocks';
import Sidebar from './sidebar/sidebar';

function App() {
  const [ sidebarVisible, setSidebarVisible ] = useState(false);
  return (
    <div className="app">
      <Navbar className="navbar" showSidebar={() => setSidebarVisible(!sidebarVisible)}/>
      <div className="content-wrapper">
        <div className={classes.content}> 
            <ArticlePreview className={classes.articlePreview}/>
            <Weather className={classes.weather} />
            <Stocks className={classes.stocks} />
        </div>
        <Sidebar show={sidebarVisible} hideSidebar={() => setSidebarVisible(false)} />
      </div>
    </div>
  );
}

export default App;
