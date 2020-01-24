import React from "react";
import "./map.css";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia2l0dHktcGFya2hhYml0IiwiYSI6ImNrNXNhcHkyNzA5ZmczbHBjOW9yYWl0OWgifQ.Jw2G79yuxR2Phhqe7Av-dg"
});

function MapContainer() {
  return (
    <Map
      // eslint-disable-next-line react/style-prop-object
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{ height: "100vh", width: "50vw" }}
    >
      <Layer type="symbol" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[51.46028, -0.13774]} />
      </Layer>
    </Map>
  );
}

export default MapContainer;
