googleMap = () => {
  let properties = {
        center: new google.maps.LatLng(27.7172, 85.3240),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    let map = new google.maps.Map(document.getElementById("map"), properties); 
    new google.maps.Marker({
        position: properties.center,
        map,
        title: "Kathmandu Nepal",
      });
   let cities = loadData();
   let markers = [];
    cities.forEach(city => {
    const myCityLatlng = new google.maps.LatLng(city.latitude,city.longitude);
    markers.push(myCityLatlng);
   }); 
  markers.forEach(marker => {
    new google.maps.Marker({
        position: marker,
        map,
      });
  });
}

// let's this is mimic data from database
loadData = () => {
   return dataNepaliCitesWithLatLng = [
  {
    name: "Pokhara",
    latitude : 28.209,
    longitude : 83.9856
   },
  {
    name: "Baglung",
    latitude : 28.2774,
    longitude : 83.5816
 },
 {
   name: "Biratnagar",
   latitude : 26.4525,
   longitude : 87.2718
 }
 ]
}

