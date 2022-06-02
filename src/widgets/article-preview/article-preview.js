import react from 'react';
import WaterImage from '../../assets/images/water.png';
import IconSource from '../../assets/icons/icon-source.svg';
import IconTime from '../../assets/icons/icon-time.svg';
import classes from './article-preview.module.css';

const ArticlePreview = () => {
  return (
    <div className={classes.articlePreview}>
         <div className={classes.text}>
            <div className={classes.title}>Astronauts could land on Red Planet by 2039</div>
            <div className={classes.details}>
                <div className={classes.sourceAndTime}>
                    <span className={classes.source}>
                        <img src={IconSource} alt="Source"/>
                        <p>SPACE.com</p>
                    </span>
                    <span className={classes.time}>
                        <img src={IconTime} alt="Time"/>
                        <p>20m ago</p>
                    </span>
                </div>
                <div className={classes.domain}>
                    Science
                </div>
            </div>
        </div>
        <div className={classes.backImage}>
            {<img src={WaterImage} alt="Image"/>}
        </div>
       
    </div>
  );
};

export default ArticlePreview;