import React, {useEffect, useState, useRef} from "react";
import { createMap, drawPoints } from "maplibre-gl-js-amplify";
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";


import "maplibre-gl/dist/maplibre-gl.css";

const Map = ({farmerId}) => {
  const mapRef = useRef(null); // Reference to the map DOM element
  const [boxes, setBoxes] = useState([]);


  // Wrapping our code in a useEffect allows us to run initializeMap after the div has been rendered into the DOM
  useEffect(() => {
    let map;
    async function initializeMap() {
      // We only want to initialize the underlying maplibre map after the div has been rendered
      if (mapRef.current != null) {
        map = await createMap({
          container: mapRef.current,
          center: [11.5820, 48.1351],
          zoom: 11,
        });
      }
      map.on("load", function () {
        drawPoints("mySourceName", // Arbitrary source name
            [
                {
                  coordinates: [11.66188771148024, 48.08986952522042], // [Longitude, Latitude]
                  title: "Golden Gate Bridge",
                  address: "A suspension bridge spanning the Golden Gate",
                },
                // {
                //   coordinates: [11.66188771148024, 48.08986952522042], // [Longitude, Latitude]
                // },
            ], // An array of coordinate data, an array of Feature data, or an array of [NamedLocations](https://github.com/aws-amplify/maplibre-gl-js-amplify/blob/main/src/types.ts#L8)
            map,
            {
                showCluster: true,
                unclusteredOptions: {
                    showMarkerPopup: true,
                },
                clusterOptions: {
                    showCount: true,
                },
            }
        );
    });
    }
    initializeMap();

    // Cleans up and maplibre DOM elements and other resources - https://maplibre.org/maplibre-gl-js-docs/api/map/#map#remove
    return function cleanup() {
      if (map != null) map.remove();
    };
  }, []);

  return (
      <div ref={mapRef} id="map" />
  );
}

export default Map;