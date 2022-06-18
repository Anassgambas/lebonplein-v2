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
    <meta property="og:url" content="https://www.lebonplein.fr"/>
    <meta property="og:type" content="website"/>
    <meta property="og:title" content="Le Bon Plein"/>
    <meta property="og:description" content="Je viens de découvrir un bon plan. Il est maintenant possible de connaître exactement la quantité de carburant à mettre pour rendre son véhicule de location au niveau demandé : www.lebonplein.fr" />
    <meta property="og:image" content="https://www.lebonplein.fr"/>

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
        <div id="etapes" style="display: none">
        <script>
          </script>
            <h1 id="etape">Etape n°1</h1>
            <h2 id="instruction">Indiquez le niveau de carburant</h2>
            <button id="bouton_valider" class="inactive">Valider</button>
            <div id="divsvg">
                <svg id="svg" data-name="svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 -10 268.35 520" onload="setup(evt)">
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
                <clipPath id="clip-path" transform="translate(-13.98 -3.84)">
                    <rect class="cls-1" x="61" y="10.72" width="117" height="483" rx="41" />
                </clipPath>
                <clipPath id="clip-path-2" transform="translate(-13.98 -3.84)">
                    <rect class="cls-1" x="61" y="8.72" width="117" height="483" rx="41" />
                </clipPath>
            </defs>
            <g id="Groupe_33" data-name="Groupe 33" transform="translate(0, 10);">
                <g class="cls-2">
                    <g id="Groupe_de_masques_1" data-name="Groupe de masques 1"  transform="translate(0, 11)">
                        <rect id="Carburant" data-name="Rectangle 2" class="cls-4 draggable" x="47.02"
                            y="8.38" width="117" height="479.5" rx="12" />
                    </g>
                </g>
                <line id="Ligne_6" data-name="Ligne 6" class="cls-5" x1="148.52" y1="248.88" x2="61.52"
                    y2="248.88" />
                <line id="Ligne_9" data-name="Ligne 9" class="cls-5" x1="148.52" y1="127.88" x2="61.52"
                    y2="127.88" />
                <line id="Ligne_14" data-name="Ligne 14" class="cls-5" x1="148.52" y1="66.88" x2="61.52"
                    y2="66.88" />
                <line id="Ligne_16" data-name="Ligne 16" class="cls-6" x1="137.93" y1="36.88" x2="72.12"
                    y2="36.88" />
                <line id="Ligne_17" data-name="Ligne 17" class="cls-6" x1="137.93" y1="97.88" x2="72.12"
                    y2="97.88" />
                <line id="Ligne_18" data-name="Ligne 18" class="cls-6" x1="137.93" y1="157.88" x2="72.12"
                    y2="157.88" />
                <line id="Ligne_19" data-name="Ligne 19" class="cls-6" x1="137.93" y1="217.88" x2="72.12"
                    y2="217.88" />
                <line id="Ligne_20" data-name="Ligne 20" class="cls-6" x1="137.93" y1="278.88" x2="72.12"
                    y2="278.88" />
                <line id="Ligne_21" data-name="Ligne 21" class="cls-6" x1="137.93" y1="338.88" x2="72.12"
                    y2="338.88" />
                <line id="Ligne_22" data-name="Ligne 22" class="cls-6" x1="137.93" y1="398.88" x2="72.12"
                    y2="398.88" />
                <line id="Ligne_23" data-name="Ligne 23" class="cls-6" x1="137.93" y1="459.88" x2="72.12"
                    y2="459.88" />
                <line id="Ligne_10" data-name="Ligne 10" class="cls-5" x1="148.52" y1="368.88" x2="61.52"
                    y2="368.88" />
                <line id="Ligne_11" data-name="Ligne 11" class="cls-5" x1="148.52" y1="308.88" x2="61.52"
                    y2="308.88" />
                <line id="Ligne_12" data-name="Ligne 12" class="cls-5" x1="148.52" y1="429.88" x2="61.52"
                    y2="429.88" />
                <line id="Ligne_13" data-name="Ligne 13" class="cls-5" x1="148.52" y1="187.88" x2="61.52"
                    y2="187.88" />
                <g id="_3_4" data-name=" 3 4" class="cls-7">
                    <text class="cls-8" transform="translate(15 130.88)">
                        3/4
                    </text>
                </g>
                <g id="_7_8" data-name=" 7 8" class="cls-7">
                    <text class="cls-8" transform="translate(15 70.88)">
                        7/8
                    </text>
                </g>
                <g id="Plein" class="cls-7">
                    <text class="cls-8" transform="translate(0 16.88)">
                        Plein
                    </text>
                </g>
                <g id="_5_8" data-name=" 5 8" class="cls-7">
                    <text class="cls-8" transform="translate(15 191.88)">
                        5/8
                    </text>
                </g>
                <g id="_1_2" data-name=" 1 2" class="cls-7">
                    <text class="cls-8" transform="translate(15 251.88)">
                        1/2
                    </text>
                </g>
                <g id="_3_8" data-name=" 3 8" class="cls-7">
                    <text class="cls-8" transform="translate(15 312.88)">
                        3/8
                    </text>
                </g>
                <g id="_1_4" data-name=" 1 4" class="cls-7">
                    <text class="cls-8" transform="translate(15 372.88)">
                        1/4
                    </text>
                </g>
                <g id="_1_8" data-name=" 1 8" class="cls-7">
                    <text class="cls-8" transform="translate(15 433.88)">
                        1/8
                    </text>
                </g>
                <g id="Rectangle_5" data-name="Rectangle 5" class="cls-9">
                    <rect class="cls-1" x="47.02" y="6.88" width="117" height="483" rx="41" />
                    <rect class="cls-10" x="49.02" y="8.88" width="113" height="479" rx="39" />
                </g>
            </g>
            <svg id="Curseur" >
                <g id="Groupe_35" class="draggable" data-name="Groupe 35">
                    <path id="Polygone_1" data-name="Polygone 1" class="cls-11"
                        d="M187.21,20.07a3,3,0,0,1-.18-4.24l.18-.18,12-11a3,3,0,0,1,5,2.21v22a3,3,0,0,1-5,2.21Z"
                        transform="translate(-13.98 -3.84)" />
                    <g id="Plein-2" class="cls-7">
                        <text id="valeurJauge" class="cls-12" transform="translate(195.02 23.16)">
                            13/166666
                        </text>
                    </g>
                </g>
            </svg>
                </svg>
            </div>
            <div id="helpmsg">
                <p>Faites glisser la flèche vers le haut</p>
            </div>
            <div class="select_wrap">
                <!--https://codepen.io/RajRajeshDn/pen/XWJYMzZ-->
                <ul class="default_option">
                    <li>
                        <div class="option">
                            <p id="selected_option">Sélecionnez la marque</p>
                        </div>
                    </li>
                </ul>
                <ul class="select_ul">
                    <!-- <li>
                    <div class="option">
                        <p>CITROEN</p>
                    </div>
                </li> -->
                </ul>
            </div>
        </div>

        <div id="home">
            <h2 id="welcome1">Plannifier un trajet selon le niveau de carburant actuel</h2>
            <!-- <h3 id="welcome2">Rendez le véhicule de location au niveau de carburant demandé</h3> -->

            <button id="bouton_go">Go !</button><br><br><br>
            <div class="centring"><a href="../">Autres services</a></div>


            <button id="partager">Partager le service</button>
            <div id="footer">Copyrights LeBonPlein 2021</div>
        </div>
        <div id="result" style="display:none">
            <img id="cross" src="resources/v0.9.3/images/cross.png" alt="croix">
            <div style="display:flex;justify-content:center;align-items:center;">

                <img id="img" src="" style="display:none"width="90px" height="70px"/>
                </div>            <h4 id="Autho"> </h4>
                <div id="mymap"></div>
                <iframe style="margin-bottom:20px;display:none;"class="carte" id="maps"src=""></iframe>

             <div class="feedback">
             <h5 class="feedbackH5">Etes-vous satisfait du service proposé ?</h5>

                <ul>
                    <li><button id="oui" onclick="location.href='https:\/\/bit.ly/3jFe1Tv'">Oui</button></li>
                    <li><button id="non" onclick="location.href='https:\/\/bit.ly/33sINqj'">Non</button></li>
                </ul>
            </div>
        </div>


        <div id="destination" style="display: none">
         <h1 id="etape">Etape n°4</h1>
            <h2 id="instruction" style="display: ;">Où souhaitez-vous aller ?</h2>
            <form class="myForm" action="" method="post" autocomplete="off">
                <input type="hidden" name="longitude" value="">
                <input type="hidden" name="latitude" value="">
            </form>
            <div style="display:flex;justify-content:center;align-items:center;">

                <img id="img" src="" style="display:none"width="90px" height="70px"/>
                 </div>
                 <iframe style="margin-bottom:20px;display:none;"class="carte" id="maps"src=""></iframe>

                <h2 id="Autho" style="color:black;font-size:12px;"></h2>
                <h2 id="distance_trajet" style="color:black;font-size:15px"></h2>

                 <div style="display:flex;justify-content:center;align-items:center;">
                <?php require ('distanceform.php');?>

         </div>

        <!-- Modal Share -->
        <div id="myModal" class="modal">

            <!-- Modal content -->
            <div class="modal-content">
                <span class="close"><img src="resources/v0.9.3/images/PartagerCross.png" alt=""></span>
                <h6>Partager</h6>
                <ul>
                    <li id="sms" style="display:None">
                        <a id="sendSmsLink" href="sms:/?body=Je viens de découvrir un bon plan. Il est maintenant possible de connaître exactement la quantité de carburant à mettre pour rendre son véhicule de location au niveau demandé : www.lebonplein.fr"><img src="resources/v0.9.3/images/sms.svg" alt=""></a>
                        <p class="partage">Sms</p>
                    </li>
                    <li id="fb">
                        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.lebonplein.fr&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"><img src="resources/v0.9.3/images/facebook.svg" alt=""></a>
                        <p class="partage">Facebook</p>
                    </li>
                    <li id="twitter">
                        <a target="_blank" href="https://twitter.com/intent/tweet?text=Je viens de découvrir un bon plan. Il est maintenant possible de connaître exactement la quantité de carburant à mettre pour rendre son véhicule de location au niveau demandé : www.lebonplein.fr"><img src="resources/v0.9.3/images/twitter.svg" alt=""></a>
                        <p class="partage">Twitter</p>
                    </li>
                    <li id="whatsapp" style="display:None">
                        <a target="_blank" href="whatsapp://send?text=Je viens de découvrir un bon plan. Il est maintenant possible de connaître exactement la quantité de carburant à mettre pour rendre son véhicule de location au niveau demandé : www.lebonplein.fr" data-action="share/whatsapp/share"><img src="resources/v0.9.3/images/whatsapp.svg" alt=""></a>
                        <p class="partage">Whatsapp</p>
                    </li>
                    <li id="mail">
                        <a target="_blank" href="mailto:?subject=lebonplein.fr&body=Je viens de découvrir un bon plan. Il est maintenant possible de connaître exactement la quantité de carburant à mettre pour rendre son véhicule de location au niveau demandé : https://www.lebonplein.fr"><img src="resources/v0.9.3/images/email.svg" alt=""></a>
                        <p class="partage">Email</p>
                    </li>
                    <li id="linkedin">
                        <a target="_blank" href="https://www.linkedin.com/sharing/share-offsite/?url=www.lebonplein.fr"><img src="resources/v0.9.3/images/linkedin.svg" alt=""></a>
                        <p class="partage">Linkedin</p>
                    </li>
                </ul>
                <div>
                    <input id="url" type="text" value="https://www.lebonplein.fr">
                    <button id="copy">Copier</button>
                </div>
            </div>

        </div>

        <!-- Modal Infos -->
        <div id="modalInfos" class="modal">

            <!-- Modal content -->
            <div class="modal-content" style="height: auto;">
                <span class="closeInfos"><img src="resources/v0.9.3/images/PartagerCross.png" alt=""></span>
                <h6>Contacter le fondateur</h6>
                <p>Anass Ghandour</p>
                <p><a href="Tel:+33695574573">+33 6 95 57 45 73</a></p>
                <p><a href="mailto:anassghandour@outlook.fr">anassghandour@outlook.fr</a></p>
            </div>

        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js "></script>
    <script type="text/javascript " src="resources/v0.9.3/script.js "></script>
</body>

</html>
