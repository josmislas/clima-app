import React, { Component } from "react";
import InfoClima from "./Componentes/InfoClima";
import FormClima from "./Componentes/FormClima";

import { WEATHER_KEY } from "./Componentes/Keys";

class App extends Component {
  state = {
    temperatura: "",
    temp_max: "",
    temp_min: "",
    descripcion: "",
    humedad: "",
    velocidad_viento: "",
    ciudad: "",
    pais: "",
    error: null,
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { ciudad } = e.target.elements;
    const ciudadValue = ciudad.value;

    if (ciudadValue) {
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadValue}&lang=sp&appid=${WEATHER_KEY}&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(ciudadValue);

      this.setState({
        temperatura: data.main.temp,
        temp_max: data.main.temp_max,
        temp_min: data.main.temp_min,
        descripcion: data.weather[0].description,
        humedad: data.main.humidity,
        velocidad_viento: data.wind.speed,
        ciudad: data.name,
        pais: data.sys.country,
        error: null,
      });
    } else {
      this.setState({
        error: "Ingrese una Ciudad",
      });
    }
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <FormClima getWeather={this.getWeather} />
            <InfoClima {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
