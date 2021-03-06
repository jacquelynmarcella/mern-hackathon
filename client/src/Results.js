import React, { Component } from 'react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';

class Results extends Component {

  render(){
    const sunsetTime = this.props.data.sunsetTime
    var tz = moment.tz.guess();
    var localSunset = moment(sunsetTime).tz(tz).format('h:MM')

    const BeforeSunset = () => {
      return(
      <div className="div-sunsettime">
        <p className="p--results__true">You will make it before the sun has set! :) </p>
      </div>
      )
    }
    const AfterSunset = () => {
      return(
      <div className="div-sunsettime">
        <p className="p--results__false">You will make it after the sun has set! :( </p>
      </div>
      )
    }
    const ResultDiv = () => {
     return(
      <div>
      <div className="div-sunsettime">
        <p className="p--results__sunsettime">The Sun will set at your destination at {localSunset}PM</p>
      </div>

      <div className="div-sunsettime">
        <h5>Pass in Arrival Time state as prop (from Map to Results?)</h5>
        <p className="p--results__commutetime">If you head out now, you will arive in {this.props.duration} (traveling {this.props.distance})</p>
      </div>
      </div>
      )
    }

    if(sunsetTime && (localSunset < "7")) {
    return(
    <div>
    {console.log('Arriving after Sunset')}
      <ResultDiv />
      <AfterSunset />
    </div>
    )
  } 
   else if (sunsetTime && (localSunset > "7")){
    return(
      <div>
        {console.log('Arriving before Sunset')}
        <ResultDiv />
        <BeforeSunset />
      </div>
      )
  }
  else {
    {console.log('Awaiting origin')}
    return (<div>Please Submit Your Origin and Destination Location</div>)
    }
  } 
}

export default Results;