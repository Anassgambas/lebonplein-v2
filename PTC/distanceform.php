 <form id="distance_form">
     <link rel="stylesheet" href="resources/style/bootstrap.css">


<script>
             google.maps.event.addDomListener(window, 'load', function () {
              var input = document.getElementById('from_places');
              var options = {  componentRestrictions: {country: "fr"} };
              var from_places = new google.maps.places.Autocomplete(input,options);
              var curren_position = (document.getElementById('from_places'));
              var to_places = new google.maps.places.Autocomplete(document.getElementById('to_places'),options);

              google.maps.event.addListener(from_places, 'place_changed', function () {
                  var from_place = from_places.getPlace();
                  var from_address = from_place.formatted_address;
                  $('#origin').val(from_address);
              });

              google.maps.event.addListener(to_places, 'place_changed', function () {
                  var to_place = to_places.getPlace();
                  var to_address = to_place.formatted_address;
                  $('#destination').val(to_address);}); });
</script>
                <div id="form" class="form-group">

                    <input style="text-align:center;"class="form-control" value=""id="from_places" placeholder="Indiquez le point de départ ? " /> <input id="origin" name="origin" type="hidden" /><br>

                    <div id="form" class="form-group">
                        <input style="text-align:center;" class="form-control" id="to_places" placeholder="Où souhaitez-vous aller ?" />
                        <input id="destination" name="destination" required="" type="hidden" />
                        <div id="user-position "class="position-actuelle" style=>
                  <button onclick="user()" id="cu-pos-btn"style="
                       background-color: #003A40;
                        width: 100%;
                        height: 23px;
                        font-weight: 600;
                        color: white;
                        margin-top: 5px;
                        margin-bottom: 4px;
                        margin-left: 0% !important;
                        font-size: 12px !important;">
                     Utiliser ma position actuelle</button></div>
                          </div> </div>
                        <iframe style="margin-bottom:20px;display:none;"class="carte" id="maps"src=""></iframe>
                 <?php require ('current-location.php');?>
                 <button id="bouton_valider" id="submit" type="submit" class="cu-pos-btn">Valider</button>
         </form>
