function initMap() {
    const UNITED_STATES_BOUNDS = {
      north: 49.384359 ,
      south: 25.837377,
      west: -124.327629,
      east: -66.885666,
    };
    
      const myLatlng = { lat: 36.99704415583998, lng: -101.70230487500001 };
    
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        restriction: {
          latLngBounds: UNITED_STATES_BOUNDS,
          strictBounds: false,
        },
        center: myLatlng,
      });
    
    var marker;
    
    google.maps.event.addListener(map, 'click', function(event) {
       placeMarker(event.latLng);
        const latLng = event.latLng;
    
        // Use the latitude and longitude to make a Geocoding API request
        const geocoder = new google.maps.Geocoder();
        geocoder.geocode({ location: latLng }, function (results, status) {
          if (status === "OK") {
            if (results[0]) {
              // Get the address components from the first result
              const addressComponents = results[0].address_components;
    
              let city, state;
    
              // Loop through the address components to find the city and state
              for (let i = 0; i < addressComponents.length; i++) {
                const types = addressComponents[i].types;
    
                // Check if the component is a city or state
                if (types.includes("locality")) {
                  city = addressComponents[i].long_name;
                } else if (types.includes("administrative_area_level_1")) {
                  state = addressComponents[i].long_name;
                }
              }
    
              // Log the city and state information to the console
              document.getElementById('location').value=state;
    
                }
        }     
    });
    });
    
    
    function placeMarker(location) {
    
        if (marker == null)
        {
              marker = new google.maps.Marker({
                 position: location,
                 map: map
              }); 
        } 
        else 
        {
            marker.setPosition(location); 
        } 
    }
    
    
    }
    
    window.initMap = initMap;