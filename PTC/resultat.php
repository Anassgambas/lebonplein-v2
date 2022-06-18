<!-- 
Copyrights Anass Ghandour 2021
Developpeur : Baptiste Florentin, baptiste.florentin@edu.devinci.fr
 -->
 <!DOCTYPE html>
 <html lang="fr">
 
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <meta name="description" content="RDV à la station-service ! LeBonPlein vous permet de rendre votre véhicule de location avec le niveau de carburant demandé. Go !">
     <!-- Facebook tags -->
     <meta property="og:url" content="https://www.lebonplein.fr" />
     <meta property="og:type" content="website" />
     <meta property="og:title" content="Le Bon Plein" />
     <meta property="og:description" content="Je viens de découvrir un bon plan. Il est maintenant possible de connaître exactement la quantité de carburant à mettre pour rendre son véhicule de location au niveau demandé : www.lebonplein.fr" />
     <meta property="og:image" content="https://www.lebonplein.fr" />
 
     <title>Le Bon Plein</title>
     <link rel="stylesheet" href="resources/v0.9.3/style.css">
     <link rel="stylesheet" href="resources/v0.9.3/select.css">
     <link rel="icon" href="resources/v0.9.3/images/logo.png" />
     <!-- Global site tag (gtag.js) - Google Analytics -->
     <script async src="https://www.googletagmanager.com/gtag/js?id=G-5Y0LKPH0ZB"></script>
     <script>
         window.dataLayer = window.dataLayer || [];
 
         function gtag() {
             dataLayer.push(arguments);
         }
         gtag('js', new Date());
 
         gtag('config', 'G-5Y0LKPH0ZB');
     </script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?libraries=places&language=en&key=AIzaSyBi7TizVTLJIjkU7qWdzR7Z65mrsWYepyA" type="text/javascript"></script>
	<script async src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBi7TizVTLJIjkU7qWdzR7Z65mrsWYepyA&libraries=places&callback=initMap"></script>
 	<script src="resources/v0.9.3/maps.js" type="text/javascript"></script>
 	<link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" id="bootstrap-css" rel="stylesheet" />
    <link href="style.css" type="text/css"rel="stylesheet"/>
 </head>
 
 <body>
     <div id="fb-root"></div>
     <script async defer crossorigin="anonymous" src="https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v10.0" nonce="A4sadd1b"></script>
     <div class="ctn">
         <nav>
             <img id="infos" src="resources/v0.9.3/images/information.svg" alt="retour">
             <img id="backArrow" src="resources/v0.9.3/images/backArrow.png" alt="retour" style="display: none;">
             <img id="logo" src="resources/v0.9.3/images/logo.png" alt="">
         </nav>

    <form class="myForm" action="" method="post" autocomplete="off">
    <input type="hidden" name="longitude" value="">
    <input type="hidden" name="latitude" value="">
    </form>  
         <div id="etapes">
            <form class="myForm" action="" method="post" autocomplete="off">
                <input type="hidden" name="longitude" value="">
                <input type="hidden" name="latitude" value="">
        </form>
             <h1 id="etape"></h1>
             <h1 id="resulat">Resultat</h1>

             <h2 id="instruction"></h2>
             <h5 id="Autho">Il vous manqueras X litres de carburant</h5>
		<h3 id="distance_trajet"></h3>
                         <iframe style="margin-bottom: 20px;"class="carte" id="map"src=""></iframe>                           <br> 
             
             <defs>
                 <style>
                     .cls-1,
                     .cls-10,
                     .cls-5,
                     .cls-6 {
                         fill: none;
                     }
 
                     .cls-2 {
                         clip-path: url(#clip-path);
                     }
 
                     .cls-3 {
                         clip-path: url(#clip-path-2);
                     }
 
                     .cls-4 {
                         fill: #00bed4;
                         opacity: 0.6;
                     }
 
                     .cls-12,
                     .cls-4,
                     .cls-5,
                     .cls-6,
                     .cls-7,
                     .cls-8 {
                         isolation: isolate;
                     }
 
                     .cls-10,
                     .cls-5,
                     .cls-6 {
                         stroke: #003a40;
                         stroke-width: 4px;
                     }
 
                     .cls-5,
                     .cls-6 {
                         stroke-linecap: round;
                     }
 
                     .cls-5 {
                         opacity: 0.5;
                     }
 
                     .cls-6 {
                         opacity: 0.16;
                     }
 
                     .cls-8 {
                         font-size: 18px;
                         font-family: ArialMT, Arial;
                     }
 
                     .cls-12,
                     .cls-8 {
                         fill: #34747b;
                     }
 
                     .cls-9 {
                         opacity: 0.69;
                     }
 
                     .cls-11 {
                         fill: #66d8e5;
                     }
 
                     .cls-12 {
                         font-size: 23px;
                         font-family: SegoeUI-Semibold, Segoe UI;
                         font-weight: 600;
                     }
                 </style>

             </defs>
             </svg>
             </div>
    </div>
    </div>
</body>
 </html>
 