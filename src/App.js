import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { makeStyles, createStyles } from '@material-ui/core'

import GroupedColumn from './components/charts/groupedColumn';
import ChartColumn2d from './components/charts/chartColumn2d';
import Donut from './components/charts/donut';
import HorizontalBar from './components/charts/horizontalBar';
import LineMultipleSeries from './components/charts/lineMultipleSeries';
import DualAxisColumnLine from './components/charts/dualAxisColumnLine';


import GroupedStacked from './components/charts/groupedStacked';
import StackedArea from './components/charts/stackedArea';
import Pie from './components/charts/pie';
import SimpleBubble from './components/charts/simpleBubble';
import SimplePareto from './components/charts/simplePareto';
import SimpleScatter from './components/charts/simpleScatter';


const style = makeStyles(theme => createStyles({
  '@global': {
    h3: {
      padding: '10px 0',
      margin: '0',
      textAlign: 'center',
      fontFamily: "'Capriola', sans-serif",
      color: '#6e6e6e'
    }
  },
  charts: {
    width: '90%',
    margin: 'auto',
    '&>div': {
      marginBottom: '70px',
      textAlign: 'center',
      border: '2px solid #e3e3e3',
      borderRadius: '7px',
      padding: '14px 0'
    }
  },
  twoBox: {
    display: 'flex',
    flexWrap: 'wrap',
    // width: '97%',
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    '&>div': {
      width: '40%',
      margin: 'auto',
      [theme.breakpoints.down('sm')]: {
        width: '80%'
      }
    }
  },
  innerTwoBox: {
    width: '97%'
  },
  twoVerticalBox: {
    display: 'flex',
    flexDirection: 'column',
    '&>div': {
      margin: '70px 0',
    }
  },
  heading: {
    textAlign: 'center',
    fontFamily: "'Capriola', sans-serif",
    color: '#7a7a7a',
    fontSize: '24px',
    width: '100%',
    backgroundColor: '#d6d6d6',
    padding: '10px 0',
    marginBottom: '40px',
    [theme.breakpoints.down('md')]: {
      fontSize: '18px'
    }
  }
}
));

function App() {

  const classes = style();
  return (
    <React.Fragment>
      <div className={classes.heading}><h1>Charts Using FusionCharts</h1></div>
      <div className={classes.charts}>
        <h3>Hindustan Unilever</h3><div><GroupedColumn /></div>
        <h3>Oil Reserves</h3><div><ChartColumn2d /></div>
        <h3>Android App Distribution</h3><div><Donut /></div>
        <h3>Industry Coverage and Social Media Disribution</h3><div className={classes.twoVerticalBox}>
          <div className={classes.innerTwoBox}><HorizontalBar /></div>
          <div className={classes.innerTwoBox}><LineMultipleSeries /></div>
        </div>
        <h3>Youth Population</h3><div><DualAxisColumnLine /></div>
        <h3>Annual Revenue</h3><div><GroupedStacked /></div>
        <h3>Energy Production</h3><div><StackedArea /></div>
        <h3>Portfolio Split</h3><div><Pie /></div>
        <h3>Adwords</h3><div><SimpleBubble /></div>
        <h3>Late Arrivals and Ice-Cream Distribution </h3><div className={classes.twoBox}>
          <div className={classes.innerTwoBox}><SimplePareto /></div>
          <div className={classes.innerTwoBox}><SimpleScatter /></div>
        </div>
      </div>
    </React.Fragment>

  );
}

export default App;