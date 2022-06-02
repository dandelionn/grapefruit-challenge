import fakestockmarketgenerator from 'fake-stock-market-generator';

export const numberOfDays = 365;
console.log(fakestockmarketgenerator.generateStockData(numberOfDays));

const stocks = [];
let i = 0;

while( i < 4 ) {
    stocks.push(fakestockmarketgenerator.generateStockData(numberOfDays).priceData);
    ++i;
}

export const getStocks = async () => {
    return stocks;
} 
