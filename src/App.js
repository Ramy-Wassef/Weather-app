import React , {Component} from 'react';
import Form from './components/form';
import Show from './components/show';

class App extends Component{

  state={
    country:'',
    city:'',
    temprature:'',
    humidity:'',
    description:'',
    error:''
  }

get = async (e) => {
  e.preventDefault();
  const city = e.target.elements.city.value;
  const country = e.target.elements.country.value;
  const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=e36ed364400282e43250b6c4c0274d44`)
  const data = await api.json();
  if(city && country){
    this.setState({
      country: data.sys.country ,
      city: data.name ,
      temprature:data.main.temp,
      humidity: data.main.humidity ,
      description: data.weather[0].description ,
      error:''
  })
}
  else{
    this.setState({
    country:'',
    city:'',
    temprature:'',
    humidity:'',
    description:'',
    error:'No city and Country are choosen'
    })
  }
  
}

  render(){
    return(
      <div>
        <h1>Weather App</h1>
        <div className='main' >
        <Form get={this.get} />
        <Show 
        country={this.state.country}
        city={this.state.city}
        temprature={this.state.temprature}
        humidity={this.state.humidity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
      </div>
    )
  }
}

export default App;
