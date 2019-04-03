import HighChartsConfig from './HighchartsConfig'
import React from 'react'
import ReactHighCharts from 'react-highcharts';
import HighChartsTheme from './HighChartsTheme'
ReactHighCharts.Highcharts.setOptions(HighChartsTheme);


 export const PriceChart = () => {
  return (
    <div>
      <ReactHighCharts config = {HighChartsConfig()}/>   
    </div>
  )
}

export default PriceChart
