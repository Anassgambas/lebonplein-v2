//The magic code to add show/hide custom event triggers
(function($) {
    $.each(['show', 'hide'], function(i, ev) {
        var el = $.fn[ev];
        $.fn[ev] = function() {
            this.trigger(ev);
            return el.apply(this, arguments);
        };
    });
})(jQuery);

function fade_in(el) {
    el.fadeTo("fast", 100);
    el.show();
}

function fade_out(el, el_callback = null, callback = null) {
    el.fadeTo("fast", 0, function() {
        el.hide();
        if (el_callback != null && callback != null) {
            callback(el_callback);
        } else if (el_callback != null && callback == null) {
            el_callback.show();
        }
    });
}

function show(el) {
    el.show();
}

function hide(el) {
    el.hide();
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function setup(evt) {

    var svg = evt.target;

    var isMobile = false; //initiate as false
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
        isMobile = true;
    }

    if (isMobile) {
        $("#whatsapp").show();
        $("#linkedin").hide();
        //$("#fb").find("a").attr("href", "fb-messenger://share?link=www.lebonplein.fr");
        var os = getMobileOperatingSystem();
        if (os == "Android") {
            $("#sms").hide();
        } else if (os == "iOS") {
            $("#sms").show();
            $("#sendSmsLink").attr("href", "sms:&body=Je viens de découvrir un bon plan. Il est maintenant possible de connaître exactement la quantité de carburant à mettre pour rendre son véhicule de location au niveau demandé : www.lebonplein.fr")
        }
    }

    svg.addEventListener('mousedown', startDrag);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', endDrag);
    //svg.addEventListener('mouseleave', endDrag);

    svg.addEventListener('touchstart', startDrag);
    document.addEventListener('touchmove', drag);
    document.addEventListener('touchend', endDrag);
    document.addEventListener('touchleave', endDrag);
    document.addEventListener('touchcancel', endDrag);

    var carburant = document.getElementById("Carburant");
    var curseur = document.getElementById("Curseur")
    var offset;
    var lastHauteurJauge;
    var dragging = false;
    var only_click = false;

    var basJauge = 478;
    var hautJauge = -2.5;

    var maxy = 472;
    var miny = hautJauge;

    console.log(localStorage.getItem("firstVisit"));

    var firstVisit = false;

    if (!localStorage.getItem("firstVisit")) {
        firstVisit = true;
    }

    resetCarburant();
    $("#valeurJauge").text("0");

    function resetCarburant() {
        curseur.setAttributeNS(null, "y", maxy);
        carburant.setAttributeNS(null, "y", maxy);
        $("#valeurJauge").text("0");
    }



    function getMousePosition(evt) {
        var CTM = svg.getScreenCTM();
        if (evt.touches && evt.touches.length > 0) { evt = evt.touches[0]; }
        return {
            x: (evt.clientX - CTM.e) / CTM.a,
            y: (evt.clientY - CTM.f) / CTM.d
        };
    }

    function startDrag(evt) {
        dragging = true;
        only_click = true;
        last_coord = getMousePosition(evt);
        offset = getMousePosition(evt); //uncomment if you want to use the offset
        //offset.x -= parseFloat(carburant.getAttributeNS(null, "x"));
        offset.y -= parseFloat(carburant.getAttributeNS(null, "y"));
        if ($("#bouton_valider").hasClass("inactive")) {
            //console.log("hello");
            $("#bouton_valider").removeClass("inactive");
        }
        console.log();
    }

    function drag(evt) {
        if (dragging == true) {
            only_click = false;
            if (isMobile != true) {
                evt.preventDefault();
            }
            var coord = getMousePosition(evt);
            var hauteurJauge = Math.max(miny, Math.min(maxy, coord.y - offset.y));
            var textJauge = valeurJauge(hauteurJauge);
            //console.log(textJauge);
            $("#valeurJauge").text(textJauge);
            //carburant.setAttributeNS(null, "x", coord.x - offset.x);
            if (hauteurJauge < maxy) {
                $("#helpmsg").hide();
            }
            carburant.setAttributeNS(null, "y", hauteurJauge);
            curseur.setAttributeNS(null, "y", hauteurJauge);
            lastHauteurJauge = hauteurJauge;
        }
    }

    function endDrag(evt) {
        if (evt.target.id && only_click && (evt.target == svg || ($("#svg").find("#" + evt.target.id).length >= 1))) {
            // Il n'y a pas eu de drag, déplacer la jauge jusqu'au click
            var coord
            if (isMobile != true) {
                evt.preventDefault();
                coord = last_coord;
            } else {
                coord = getMousePosition(evt);
            }
            var hauteurJauge = Math.max(miny, Math.min(maxy, coord.y));
            var textJauge = valeurJauge(hauteurJauge);
            //console.log(textJauge);
            $("#valeurJauge").text(textJauge);
            //carburant.setAttributeNS(null, "x", coord.x - offset.x);
            if (hauteurJauge < maxy) {
                $("#helpmsg").hide();
            }
            console.log(evt);
            carburant.setAttributeNS(null, "y", hauteurJauge);
            curseur.setAttributeNS(null, "y", hauteurJauge);
            lastHauteurJauge = hauteurJauge;
            click = false;
        }

        //carburant = null;
        //console.log("y:", parseFloat(carburant.getAttributeNS(null, "y")));
        var ajustement = closestGraduation(parseFloat(carburant.getAttributeNS(null, "y")));
        //console.log("ajustement:", ajustement);
        var closest = basJauge - ajustement * (basJauge - hautJauge);
        //console.log("correction:", closest);
        carburant.setAttributeNS(null, "y", Math.max(miny, Math.min(maxy, closest)));
        curseur.setAttributeNS(null, "y", Math.max(miny, Math.min(maxy, closest)));
        dragging = false;
        if (lastHauteurJauge >= maxy) {
            $("#helpmsg").show();
        }
    }

    var niveaux_norm = [0, 1 / 16, 1 / 8, 3 / 16, 1 / 4, 5 / 16, 3 / 8, 7 / 16, 1 / 2, 9 / 16, 5 / 8, 11 / 16, 3 / 4, 13 / 16, 7 / 8, 15 / 16, 1]
    var niveaux_norm_text = ["0", "1/16", "1/8", "3/16", "1/4", "5/16", "3/8", "7/16", "1/2", "9/16", "5/8", "11/16", "3/4", "13/16", "7/8", "15/16", "Plein"]

    function valeurJauge(niveau) {
        var niveau_ajuste = (basJauge - niveau) / (basJauge - hautJauge);
        //console.log("ajusté:", niveau_ajuste);
        for (var i = 1; i < niveaux_norm.length; i++) {
            if (niveaux_norm[i] > niveau_ajuste) {
                //console.log(niveaux_norm[i]);
                if (niveaux_norm[i] - niveau_ajuste < niveau_ajuste - niveaux_norm[i - 1]) {
                    return niveaux_norm_text[i];
                } else {
                    //console.log(niveau[i - 1]);
                    return niveaux_norm_text[i - 1];
                }
            }
        }
        return "Plein";
    }

    function closestGraduation(niveau) {
        var niveau_ajuste = (basJauge - niveau) / (basJauge - hautJauge);
        //console.log("ajusté:", niveau_ajuste);
        for (var i = 1; i < niveaux_norm.length; i++) {
            if (niveaux_norm[i] > niveau_ajuste) {
                //console.log(niveaux_norm[i]);
                if (niveaux_norm[i] - niveau_ajuste < niveau_ajuste - niveaux_norm[i - 1]) {
                    return niveaux_norm[i];
                } else {
                    //console.log(niveau[i - 1]);
                    return niveaux_norm[i - 1];
                }
            }
        }
        return 1;
    }

    //// Entrées utilisateurs
    var niveauCarbAct, niveauCarbSouhaite, marqueVoiture, modeleVoiture, capaciteReservoir;

    //// Setup page navigation
    var button = document.getElementById("bouton_valider");
    button.addEventListener("mousedown", nextStep);
    var step = -1;

    var selectedItem = null;
    var selectedItemCapacite = null;

    var selecteur = $('.select_wrap');
    hide(selecteur);

    $("#bouton_go").on("click", (el) => {
        nextStep();
    });

    $("#cross").on("click", (el) => {
        step = -1;
        //console.log("cross");
        chargerPageAccueil();
    });



    $("#backArrow").on("click", (el) => {
        if (step > -1) {
            step--;
        }
        switch (step) {
            case -1:
                chargerPageAccueil();
                break;
            case 0:
                chargerEtape1();
                break;
            case 1:
                chargerEtape2();
                break;
            case 2:
                chargerEtape3();
                break;
            case 3:
                chargerEtape4();
                break;
            case 4:
                chargerResultat();
                break;
        }
    });

    $("#divsvg").on("show", function() {
        if ($("#svg").width() != 0) {
            $("#divsvg").css("width", $("#svg").width() + "px");
        }
    });

    $("#svg").on("show", function() {
        if ($("#svg").width() != 0) {
            $("#divsvg").css("width", $("#svg").width() + "px");
        }
    });

    function chargerPageAccueil() {
        fade_out($("#result"), $("#home"), fade_in);
        $("#divsvg").hide();
        $("#etapes").hide();
        fade_out($("#backArrow"), $("#infos"), fade_in);
        selecteur.hide();
    }

    function chargerEtape1() {
        $("#helpmsg").show();
        fade_out($("#infos"), $("#backArrow"), fade_in);
        fade_in($("#etapes"));
        fade_in($("#divsvg"));
        fade_out($("#home"));
        $("#etape").html("Etape n°1");
        $("#instruction").html("Indiquez le niveau de carburant actuel");
        selecteur.hide();
        $("#result").hide();
        resetCarburant();
        if (!$("#bouton_valider").hasClass("inactive")) {
            $("#bouton_valider").addClass("inactive");
        }

    }

    function chargerEtape2() {
        $("#helpmsg").show();
        $("#etapes").show();
        $("#home").hide();
        $("#etape").html("Etape n°2");
        $("#instruction").html("Indiquez le niveau de carburant souhaité")
        fade_out(selecteur, $("#divsvg"), fade_in);
        $("#result").hide();
        resetCarburant();
        if (!$("#bouton_valider").hasClass("inactive")) {
            $("#bouton_valider").addClass("inactive");
        }
    }

    function chargerEtape3() {
        fade_in($("#etapes"));
        $("#home").hide();
        $("#etape").html("Etape n°3");
        $("#instruction").html("Sélectionnez le véhicule")
        fade_out($('#divsvg'), selecteur, fade_in);
        $("#result").hide();
        setupSelection();
        if (!$("#bouton_valider").hasClass("inactive")) {
            $("#bouton_valider").addClass("inactive");
        }
    }

    function chargerEtape4() {
        fade_in($("#etapes"));
        $("#home").hide();
        $("#etape").html("Etape n°4");
        $("#instruction").html("Sélectionnez le véhicule")
        hide($("#divsvg"));
        fade_in(selecteur);
        fade_out($("#result"));
        setupSelection();
        if (!$("#bouton_valider").hasClass("inactive")) {
            $("#bouton_valider").addClass("inactive");
        }
    }

    function chargerResultat() {

        if (firstVisit == false) {
            $(".feedback").hide();
            $(".feedbackH5").hide();
        }

        capaciteReservoir = getCapaciteReservoir();
        $("#home").hide();
        nbLitres = calculerNbLitres(niveauCarbAct, niveauCarbSouhaite, capaciteReservoir);
        $("#divsvg").hide();

        if (nbLitres <= 0) {
            $("#result h3").html("");
            $("#result h4").html("Vous avez dépassé le niveau souhaité de " + Math.abs(nbLitres) + " litres");
        } else {
            $("#result h3").html(nbLitres + " litres");
            $("#result h4").html("de carburant à mettre pour atteindre le niveau souhaité");
        }
        fade_out($("#etapes"), $("#result"), fade_in);
    }

    function nextStep(evt) {
        //console.log("next step", button.className);
        if (step == -1) {
            step++;
            chargerEtape1();
        }
        if (button.className == "") {
            if (step == 0) {
                niveauCarbAct = (basJauge - parseFloat(carburant.getAttributeNS(null, "y"))) / (basJauge - hautJauge); // y est plus grand en bas de la jauge et plus petit en haut
                //console.log("Niveau actuel :", niveauCarbAct);
                step++;
                chargerEtape2();
            } else if (step == 1) {
                niveauCarbSouhaite = (basJauge - parseFloat(carburant.getAttributeNS(null, "y"))) / (basJauge - hautJauge); // y est plus grand en bas de la jauge et plus petit en haut
                //console.log("Niveau souhaité :", niveauCarbSouhaite);
                step++;
                chargerEtape3();
            } else if (step == 2) {
                if (selectedItem != null) {
                    marqueVoiture = selectedItem;
                    console.log("marque de la voiture:", marqueVoiture);
                    step++;
                    selectedItem = null;
                    chargerEtape4();
                }
            } else if (step == 3) {
                if (selectedItem != null) {
                    modeleVoiture = selectedItem;
                    //console.log("modele de la voiture:", modeleVoiture);
                    step++;
                    chargerResultat();
                }
            }
        }
    }

    function getCapaciteReservoir() {
        for (var i = 0; i < vehicules.length; i++) {
            if (vehicules[i][0] == marqueVoiture) {
                for (var j = 1; j < vehicules[i].length; j++) {
                    if (marqueVoiture + " " + vehicules[i][j][0] == modeleVoiture) {
                        //console.log("capacite du reservoir:", vehicules[i][j][1]);
                        return vehicules[i][j][1];
                    }
                }
            }
        }
    }

    function calculerNbLitres(nvActu, nvSouh, capacite) {
        var nbLitres = (nvSouh - nvActu) * capacite;
        return Math.round(nbLitres);
    }

    //Select box
    var vehicules = [
        ["ALFA ROMEO",["GIULIA", 56],["GIULIETTA", 60],["STELVIO", 62]],
        ["AUDI",["A1", 40],["A3", 40],["A5", 54],["A6", 73],["Q2", 50],["Q5", 68],["Q7", 85]],
        ["BMW",["SERIE 1", 52],["SERIE 3", 40],["SERIE 5", 66],["X1", 51],["X3", 65],["X6", 82]],
        ["CITROEN",["BERLINGO", 53],["C1", 35],["C3", 45],["C3 AIR CROSS", 45],["C4 CACTUS", 50],["C4 GRAND SCENIC", 57],["C5 AIR CROSS", 53],["JUMPY", 70],["SPACE TOURER", 69]],
        ["DACIA",["DUSTER", 50],["LOGAN", 50],["SANDERO", 50]],
        ["DS",["DS3", 48],["DS7 CROSSBACK", 62]],
        ["FIAT",["500", 35],["500X", 48],["DUCATO", 90]],
        ["FORD",["FIESTA", 42],["FOCUS", 52],["GALAXY", 68],["KUGA", 54],["MONDEO", 53] ,["TRANSIT", 70],["TRANSIT CUSTOM", 70]],
        ["HYUNDAI",["I10", 40],["I20", 40],["I30", 53],["I30 INFINITI", 50],["KONA", 38],["IONIQ", 45],["TUCSON", 62]],["IVECO",["DAILY", 100]],["JAGUAR",["XE", 59],["XF", 69]],["JEEP",["COMPASS", 60],["RENEGADE", 55]],["KIA",["CEED", 50],["PICANTO", 35],["SPORTAGE", 58]],["LAND ROVER",["EVOQUE", 56],["RANGE ROVER", 57]],["LEXUS",["CT", 45],["NX", 56],["UX", 43]],["MAZDA",["3", 51],["CX-5", 56],["MX-5", 45]],["MERCEDES",["CLASSE A", 50],["CLASSE C", 66],["CLASSE E", 66],["GLA", 50]],["MINI",["COOPER", 42]],["MITSUBISHI",["ECLIPSE", 63],["OUTLANDER", 43]],["NISSAN",["JUKE", 46],["QASHQAI", 55],["X-TRAIL", 60]],
        ["OPEL",["ASTRA", 48],["COMBO", 50],["CORSA", 45],["CROSS LAND X", 45],["GRAND LAND X", 53],["INSIGNA", 62], ["MOKKA X", 52], ["VIVARO", 80],["ZAFIRA", 70]],
        ["PEUGEOT",["108", 35],["208", 45],["308", 53],["508", 60],["2008", 50],["3008", 53],["5008", 56],["RIFTER", 60],["TRAVELLER", 69]],["RENAULT",["ARKANA", 50],["CAPTUR", 45],["CLIO", 42],["ESPACE", 62],["GRAND SCENIC", 53],["KADJAR", 55],["KANGOO EXPRES", 60],["KOLEOS", 60],["MASTER", 105],["MEGANE", 46],["SCENIC", 52],["TALISMAN", 55],["TRAFIC", 80],["TWINGO", 35]],["SEAT",["ATECA", 50],["IBIZA", 40],["LEON", 50],["TARRACO", 58]],["SKODA",["KODIAQ", 58],["OCTAVIA", 50]],["SMART",["FORTWO", 35]],["SUZUKI",["ALTO", 35],["VITARA", 47],["SWIFT", 42]],["TOYOTA",["AYGO", 35],["CH-R", 43],["COROLLA", 43],["PRIUS", 43],["RAV-4", 55],["YARIS", 42]],
        ["VOLKSWAGEN",["GOLF", 50],["PASSAT", 65],["POLO", 40],["T-ROC", 50],["TIGUAN", 58],["UP!", 35]],["VOLVO",["S60 ", 60],["S90 ", 55],["V40 Crosscountry", 54],["V40 Essence Mec", 62],["V60", 60],["XC 40", 54],["XC 60", 71],["XC 90", 71]]
    ]

    function findIndexOfVehicules(marque) {
        for (var i = 0; i < vehicules.length; i++) {
            var estMarque = (el) => el == marque;
            if (vehicules[i].findIndex(estMarque) != -1) {
                return i;
            }
        }
    }

    function setupSelection() {
        $('.select_ul').empty(); // On supprime les choix
        //console.log("step", step)
        if (step == 2) {
            $('.default_option > li > .option > p').html("Sélectionnez la marque");
            for (var i = 0; i < vehicules.length; i++) {
                if (i == vehicules.length - 1) {
                    $('.select_ul').append("<li class=\"no_bottom_border\"><div class=\"option\"><p>" + vehicules[i][0] + "</p></div></li>");
                } else {
                    $('.select_ul').append("<li><div class=\"option\"><p>" + vehicules[i][0] + "</p></div></li>");
                }
            }
        } else if (step == 3) {
            $('.default_option > li > .option > p').html("Sélectionnez le modèle");
            var indexMarque = findIndexOfVehicules(marqueVoiture);
            //console.log("index", indexMarque);
            for (var i = 1; i < vehicules[indexMarque].length; i++) {
                if (i == vehicules[indexMarque].length - 1) {
                    $('.select_ul').append("<li class=\"no_bottom_border\"><div class=\"option\"><p>" + vehicules[indexMarque][i][0] + "</p></div></li>");
                } else {
                    $('.select_ul').append("<li><div class=\"option\"><p>" + vehicules[indexMarque][i][0] + "</p></div></li>");
                }
            }
        }

        $(".select_ul li").click(function() {
            var currentele = $(this).html();
            if (step == 3) {
                currentele = $(this).find("p").html();
                $(".default_option li .option p").html(marqueVoiture + " " + currentele);
            } else {
                $(".default_option li").html(currentele);
            }
            $(this).parents(".select_wrap").removeClass("active");
            selectedItem = $('.default_option > li > .option > p').html();
            //console.log(selectedItem);
            if ($("#bouton_valider").hasClass("inactive")) {
                $("#bouton_valider").removeClass("inactive");
            }
        })
    }

    $(".default_option").click(function() {
        $(this).parent().toggleClass("active");
    })
}

/// modal partager
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("partager");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

$("#copy").on("click", (el) => {
    /* Get the text field */
    var copyText = document.getElementById("url");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
});


/// modal inofs
// Get the modal
var modalInfos = document.getElementById("modalInfos");

// Get the button that opens the modal
var btnInfos = document.getElementById("infos");

// Get the <span> element that closes the modal
var spanInfos = document.getElementsByClassName("closeInfos")[0];

// When the user clicks the button, open the modal 
btnInfos.onclick = function() {
    modalInfos.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spanInfos.onclick = function() {
    modalInfos.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalInfos) {
        modalInfos.style.display = "none";
    }
}

$("#copy").on("click", (el) => {
    /* Get the text field */
    var copyText = document.getElementById("url");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    document.execCommand("copy");
});