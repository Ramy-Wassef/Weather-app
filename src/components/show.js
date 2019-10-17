import React from 'react';

const Show = (props) => {
    return(
        <div>
         { props.country && <p> Country: <span> {props.country}</span> </p> }
         { props.city && <p> City: <span> {props.city} </span> </p> }
         { props.temprature && <p> Temprature: <span> {props.temprature} </span> </p> }
         { props.humidity && <p> Humidity: <span> {props.humidity} </span> </p> }
         { props.description && <p> Description: <span> {props.description} </span> </p> }
         { props.error && <p> Error: <span className='er' > {props.error} </span> </p> }
        </div>
    )
}

export default Show;