import React, {useRef, useEffect} from "react";
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { useGeographic } from "ol/proj";
import "ol/ol.css"
import { TileWMS } from "ol/source";


function MapComponent(props) {
    useGeographic();
    const mapRef = useRef(null);

  useEffect(() => {
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        //http://localhost:9000/geoserver/ne/wms?service=WMS&version=1.1.0&request=GetMap&layers=ne%3Acountries&bbox=-180.0%2C-90.0%2C180.0%2C83.64513&width=768&height=370&srs=EPSG%3A4326&styles=&format=application/openlayers
        new TileLayer({
          source: new TileWMS({
        //http://localhost:9000/geoserver/ne/wms?service=WMS&version=1.1.0&request=GetMap&layers=ne%3Acountries&bbox=-180.0%2C-90.0%2C180.0%2C83.64513&width=768&height=370&srs=EPSG%3A4326&styles=&format=application/openlayers
            "url": "http://localhost:9000/geoserver/prge/wms",
            params: {
              "LAYERS": ["prge:apteki", "prge:torowisko_kolejowe"],
              "TILED": true,
            },
            
            serverType: "geoserver",
            transition: 0,
          })
        }),
      ],
      view: new View({
        center: [21, 52],
        zoom: 10,
      }),
    });
    return () => map.setTarget(null);
  }, []);

  return <div className="mapComponent" ref={mapRef}></div>;
}
export default MapComponent;