import classes from './stock-list.module.css';
import react, { useState, useEffect } from 'react';
import Tab from './tab';

const StockList = (props) => {
    const [selectedTab, setSelectedTab] = useState(-1);

    return (
        <div className={classes.stockListWrapper}>
            <div className={classes.stockList}>
                    {
                    props.data.map((item, index) => {
                        return (
                        <Tab 
                            noBorder={selectedTab === index + 1}
                            selected={selectedTab === index} 
                            key={index} 
                            name={item.symbol}
                            index={index} 
                            currentValue={item.priceData} 
                            onClick={() => setSelectedTab(index)} 
                        />
                        ); 
                    })
                    }
            </div>
        </div>
    );
}

export default StockList;