import React from 'react'

function WeatherIcon({condition}){
    let current = condition

    if(current === 'haze'){
        return(<i class="fas fa-cloud-sun"></i>)
    }
    else if(current === 'clouds'){
        return(<i class="fas fa-cloud"></i>)
    }
    else if(current === 'clear'){
        return(<i class="fas fa-sun"></i>)
    }
    else if(current === 'mist'){
        return <i class="fas fa-stream"></i>
    }
    else{
        return(<p></p>)
    }
 }



export default WeatherIcon