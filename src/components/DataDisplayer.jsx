import React, { Component } from 'react'
import moment from 'moment-timezone'
import axios from 'axios';
import PriceChart from './PriceChart';
import HighChartsTheme from './HighChartsTheme'


class DataDisplayer extends Component {
  state = {
    symbol:'',
    price:0
  }
  componentDidMount(){
    const term = 'AMZN'
    const key = '7DMHHLIN1NAQ7KCN'
    const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=${key}`;
    axios.get(url).then((res) =>{
      var correspondingDate = [];
      var openingPrice = [];
      const newObj = Object.assign(res.data)
      console.log(newObj)
      for(var x in newObj['Time Series (Daily)']){
        correspondingDate.push(x)
        for(var y in newObj['Time Series (Daily)'][x] ){
          openingPrice.push(newObj['Time Series (Daily)'][x][y])
        }
      }
      correspondingDate.slice(0,10)
      openingPrice.slice(0,10)
      //const title = 'Time Series (Daily)'
      
     
      console.log(this.state)
    }).catch(error => console.log(error))
}
render(){
  return(
    <div>
      <h1>{this.state.symbol}</h1>
      <h1>{this.state.price}</h1>
      <PriceChart/>
    </div>
  );
}
}
export default DataDisplayer;