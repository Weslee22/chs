var searchInput = 'location';
        $(document).ready(function () {
            var autocomplete;
            autocomplete = new google.maps.places.Autocomplete((document.getElementById(searchInput)), {
                types: ['geocode'],
                componentRestrictions: {
                country: "USA"
            }
            });
            
        });
        
        var x = document.getElementById("location");
        
        function getLocation() {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
            document.getElementById('hid1').style.display = 'none';
               document.getElementById('hid2').style.display = 'block';
          } else { 
            x.value = "Geolocation is not supported by this browser.";
          }
        }
        
        function showPosition(position) {
          
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          const geoApiUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&amp;longitude=${longitude}&amp;localityLanguage=en'
          
          fetch(geoApiUrl)
          .then(res => res.json())
          .then(data => {
              x.value = data.principalSubdivision + ',' + data.countryCode;
              })
           }
           
           function cancelLocation(){
               if((x.value).trim() === ""){
                  document.getElementById('hid2').style.display = 'none';
                  document.getElementById('hid1').style.display = 'block';	 
               }
               else{
            
                   document.getElementById('hid1').style.display = 'none';
                   document.getElementById('hid2').style.display = 'block';
               }
               
           }
           
           function clearStatement(){
               document.getElementById('hid2').style.display = 'none';
               document.getElementById('hid1').style.display = 'block';	
               x.value="";
               
           }