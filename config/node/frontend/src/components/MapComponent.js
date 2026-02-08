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
        new TileLayer({
          source: new TileWMS({
            "url": "http://localhost:9000/geoserver/prge/wms?",
            params: {
              "LAYERS": ["prge:dzielnice", "prge:budynek_wielorodzinny",
                "prge:las","prge:apteki", "prge:przedszkola",
                "prge:droga", "prge:torowisko_tramwajowe", 
                "prge:torowisko_kolejowe", "prge:rondo",
                "prge:stacje_kolejowe", "prge:cemetery"
              ],
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