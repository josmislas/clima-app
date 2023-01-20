import React from "react";

const InfoClima = (props) => {
  console.log(props);
  return (
    <div>
      {props.error && (
        <div className="alert alert-danger">
          <p>{props.error}</p>
        </div>
      )}
      {props.temperatura ? (
        <div className="card card-body mt-2 animated fadeInUp">
          {props.ciudad && (
            <p>
              <i className="fas fa-location-arrow"></i> Localización:{" "}
              {props.ciudad}, {props.pais}
            </p>
          )}
          {props.temperatura && (
            <p>
              <i className="fas fa-temperature-low"></i> Temperatura:{" "}
              {props.temperatura} ℃, {props.descripcion}
            </p>
          )}
          {props.temp_max && (
            <p>
              <i className="fas fa-temperature-low"></i> Temp. Max:{" "}
              {props.temp_max} ℃
            </p>
          )}
          {props.temp_min && (
            <p>
              <i className="fas fa-temperature-high"></i> Temp. Min:{" "}
              {props.temp_min} ℃
            </p>
          )}
          {props.humedad && (
            <p>
              <i className="fas fa-water"></i> Humedad: {props.humedad} %
            </p>
          )}
          {props.velocidad_viento && (
            <p>
              <i className="fas fa-wind"></i> Velocidad del Viento:{" "}
              {props.velocidad_viento} Km/h
            </p>
          )}
        </div>
      ) : (
        <div className="card card-body mt-2 text-center">
          <i className="fas fa-sun fa-10x"></i>
        </div>
      )}
    </div>
  );
};

export default InfoClima;
