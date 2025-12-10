import React from "react";
import MapComponent from "../components/MapComponent";

function Map(props)
{
    return(
        <div className="map">
        <MapComponent properties={props}/>
            </div>
    );
}

export default Map;