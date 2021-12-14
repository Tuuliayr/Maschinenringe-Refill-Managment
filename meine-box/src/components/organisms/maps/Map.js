import React, {useEffect, useState, useRef} from "react";
import { createMap } from "maplibre-gl-js-amplify";
import maplibregl from "maplibre-gl";
import * as dbData from "../../organisms/databaseconnection/DatabaseConnection";
import "maplibre-gl/dist/maplibre-gl.css";
import "@maplibre/maplibre-gl-geocoder/dist/maplibre-gl-geocoder.css";


const Map = ({farmerId}) => {
  const mapRef = useRef(null); // Reference to the map DOM element
  const [boxes, setBoxes] = useState([]);
  const [myBoxesId, setMyBoxesId] = useState([]);


   // fetch all the salesboxes
   useEffect(() => {
    const fetchSalesboxes = async () => {
      const data = await dbData.getSalesBoxes();
      setBoxes(data);
      const products = await dbData.getProductsByFarmerId(farmerId);
      const myBoxes = [];
      const myBoxesId = [];

      
      if (products != undefined || products != null) {
        const arranged = products.sort(
          (x, y) =>
            x.stock_quantity - y.stock_quantity
        );
        arranged.forEach(product => {
          if (!myBoxes.includes(product.salesbox_id)) {
            let myBox = {id: product.salesbox_id, level: 'full'}

            if(product.stock_quantity === 0) {
              myBox.level = 'empty';
            } else if (product.stock_quantity  <= product.low_stock_definition ) {
              myBox.level = 'low';
            }
            myBoxes.push(product.salesbox_id);
            myBoxesId.push(myBox);
          }
        });
      } 
      setMyBoxesId(myBoxesId);
    };

    fetchSalesboxes();
  }, []);

  // Wrapping our code in a useEffect allows us to run initializeMap after the div has been rendered into the DOM
  useEffect(() => {
    let map;
    async function initializeMap() {
      // We only want to initialize the underlying maplibre map after the div has been rendered
      if (mapRef.current != null) {
        map = await createMap({
          container: mapRef.current,
          center: [11.5820, 48.1351],
          zoom: 10,
        });
      }

      let coordinates = [
        [11.522934772478546, 48.13176448565928],
        [11.455319223351527, 48.18219005071294],
        [11.529609140213097, 48.09077527194564],
        [11.66188771148024, 48.08986952522042],
        [11.465034309730871, 48.2155517165466]
      ]
      let markerColors = [];
      let popUps = [];
        console.log(myBoxesId);
      boxes.forEach((box, key) => {
        console.log(myBoxesId[key]);
        if (myBoxesId.some(e => e.id === box.id && e.level === 'low')) {
          markerColors.push({color: '#FEDE00'})
          popUps.push(`<h4 class="map-popup__title">SalesBox ${box.id} </h4><p class="map-popup__stock">Stock is low</p> <p class="map-popup__street">${box.street_address}</p> <a class="map-popup__link" href="/productsoverview/${box.id}">See products</a>`)
        } else if (myBoxesId.some(e => e.id === box.id && e.level === 'empty')) {
          markerColors.push({color: '#fa4359'})
          popUps.push(`<h4 class="map-popup__title">SalesBox ${box.id}</h4> <p class="map-popup__stock">Stock is empty</p> <p class="map-popup__street">${box.street_address}</p> <a class="map-popup__link" href="/productsoverview/${box.id}">See products</a>`)
        } else if (myBoxesId.some(e => e.id === box.id && e.level === 'full')) {
          markerColors.push({color: '#65b22e'})
          popUps.push(`<h4 class="map-popup__title">SalesBox ${box.id}</h4> <p class="map-popup__stock">Stock is good</p> <p class="map-popup__street">${box.street_address}</p> <a class="map-popup__link" href="/productsoverview/${box.id}">See products</a>`)
        } else {
          markerColors.push({color: '#30C5FF'})
          popUps.push(`<h4 class="map-popup__title">SalesBox ${box.id}</h4> <p class="map-popup__street">${box.street_address}</p>`)

        }
      })

      for(let i=0; i < boxes.length; i++) {
        new maplibregl.Marker(markerColors[i])
          .setLngLat(coordinates[i])
          .setPopup(new maplibregl.Popup().setHTML(popUps[i]))
          .addTo(map);
      }
    }
    initializeMap();

    // Cleans up and maplibre DOM elements and other resources - https://maplibre.org/maplibre-gl-js-docs/api/map/#map#remove
    return function cleanup() {
      if (map != null) map.remove();
    };
  }, [myBoxesId]);

  return (
      <div ref={mapRef} id="map" />
  );
}

export default Map;