<!DOCTYPE html>
<html>
  <head>
    <title>Geolocation</title>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <link rel="stylesheet" type="text/css" href="./style.css" />
    <script type="text/javascript" src="resources/v0.9.3/livelocation.js"></script>
  </head>
  <body>
    <div id="map"></div>
    <!-- Async script executes immediately and must be after any DOM elements used in callback. -->
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBi7TizVTLJIjkU7qWdzR7Z65mrsWYepyA&libraries=places&callback=initMap">
</script>
  </body>
</html>