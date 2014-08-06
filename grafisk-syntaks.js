$(document).ready(function () {
    
    //Check for touch device//////////////////
    var bind;
    if (Modernizr.touch) {
        bind = 'touchstart';
    } else {
        bind = 'click';
    }
    
    //Check for bugzilla//////////////////////
    var mozBrowser;    
    if ($.browser.mozilla) {
        mozBrowser = 'true';
    }
    
    //  Generativ Aleatoric SVG System  //
    //  -----------------------------   //
    //  (c) 2013 Zoran Todorovic        //
    //  -----------------------------   //
    
    var svgColors = ['#99aaaa', '#becfd1', '#5b5f61', '#767c7d', '#CEDBE0'];
    var svgAlpha = ['0.5', '1.0'];
    var svgStroke = ['0', '4'];
    
    
    function SVG(tag) {
        return document.createElementNS('http://www.w3.org/2000/svg',  tag);
    }
    
    var $svg = $('#svgGraph');
    
    $svg[0].setAttribute('width', 100 + '%');
    $svg[0].setAttribute('height', 100 + '%');
    $svg[0].setAttribute('preserveAspectRatio', 'xMinYMin');
    
    $svg.each(function(index,node){
        if (mozBrowser !== 'true') {
            node.viewBox.baseVal.x = 0 
            node.viewBox.baseVal.y = 0
            node.viewBox.baseVal.width = 800
            node.viewBox.baseVal.height = 800
        }
    });
  
    function graphGenerate() {
        for (var i = 0; i < 50; i++) {
            var rndX = Math.floor((Math.random()*100)+0);
            var rndY = Math.floor((Math.random()*300)+0);
            var rndSkew = Math.floor((Math.random()*30)+0);
            var rndSize = Math.floor((Math.random()*300)+1);
            var rndRotate = Math.floor((Math.random()*360)+1);
            var svgColor = svgColors[Math.floor(Math.random()*svgColors.length)];
            
            $(SVG('polyline'))
                .attr('points', '' + Math.floor((Math.random()*400)+20) + ' 49 67 42 200 ' + Math.floor((Math.random()*400)+20) + '')
                .attr('fill', svgColor)
                .attr('fill-opacity', svgAlpha[Math.floor(Math.random()*svgAlpha.length)])
                .attr('stroke-width', svgStroke[Math.floor(Math.random()*svgStroke.length)])
                .attr('stroke', svgColor)
                .attr('transform', 'rotate(' + rndRotate + ' 100 100)')
                .attr('X', rndX)
                .attr('Y', rndY)
                .appendTo($svg);
        }
        
        var rndDist = Math.floor((Math.random()*30)+0);
        
        for (var i = 0; i < 50; i++) {
            $(SVG('rect'))
                .attr('width', 5)
                .attr('height', 5)
                .attr('fill', '#CEDBE0')
                .attr('X', 20 * i)
                .attr('Y', rndDist * i/2)
                .appendTo($svg);
        }
        
        for (var i = 0; i < 500; i++) {
            $(SVG('rect'))
                .attr('width', 2)
                .attr('height', 2)
                .attr('fill', '#CEDBE0')
                .attr('transform', 'rotate(' + Math.floor((Math.random()*72)+16) + ' 100 100)')
                .attr('X', 10 * i)
                .attr('Y', 75)
                .appendTo($svg);
        }
        
        $(SVG('rect'))
            .attr('width', 400)
            .attr('height', 10)
            .attr('fill', '#CEDBE0')
            .attr('Y', 170)
            .attr('transform', 'rotate(' + Math.floor((Math.random()*72)+0) + ' 100 100)')
            .appendTo($svg);
        
        $(SVG('rect'))
            .attr('width', 400)
            .attr('height', 60)
            .attr('fill', '#CEDBE0')
            .attr('transform', 'rotate(' + Math.floor((Math.random()*72)+0) + ' 100 100)')
            .attr('Y', 220)
            .appendTo($svg);
        
        
       // $(SVG('svg width="1000px" height="1000px"'));
        
    }
    graphGenerate();
    
    function graphStart() {
        $('#svgGraph').empty();
        graphGenerate();
        $('#svgGraph').css({'opacity': '0'});
        $('#svgGraph').animate({opacity: '1'}, 1000);
        $('#svgGraph').delay(6000).animate({opacity: '0.0'}, 1500, function() {graphStart()});
    }
    graphStart();
    
    //Portfolio Web////////////////////////////////////////////////////////////////////////////
    
    $.getJSON('grafisk-syntaks.json', function(data) {
        var pw, pwT, img;
        
        $.each(data, function() {
            pw  = $('<pw/>')
                .addClass('portfolio');
            pwT = $('<pwT/>')
                .addClass('portfolio-text')
                .text(this.title)
                .appendTo(pw);
            img = $('<img/>')
                .attr({
                    src: this.image
                })
                .appendTo(pw);
            
            //$('#portfolio-web').append(pw);
            console.log(pw);
        });
    });
    
    
    $('#portfolio-web').css({'left': '0%'});
    $('#portfolio-web').hide();
    
    var portfolioWeb = [
        [
        "Berlingske Barometer",
        "images/bbarometer.png",
        "Webapplikation; Berlingske Barometer viser et gennemsnit af de politiske meningsmålinger, der er blevet offentliggjort inden for de seneste 31 dage. En avanceret model ligger til grund for beregningen. Blandt andet tillægges nyere målinger mere vægt end ældre og de enkelte institutter vægtes efter deres måde at indsamle data på.<br>Design og udvikling af Zoran Todorovic & Thomas Carlsen",
        "http://www.b.dk/berlingskebarometer"
        ],
        [
        "Kommunalvalg 2013",
        "images/bkommune.png",
        "Grafisk design; Temasite til kommunalvalget 2013, inkl. interaktivt danmarkskort og infografikken Berlingske Kommuneindeks<br>Design af Zoran Todorovic udvikling af Thomas Carlsen",
        "http://www.b.dk/kommunalvalg"
        ],
        [
        "Nobelprismodtagere 1901 - 2013",
        "images/bnobel.png",
        "Infografik; Samtlige Nobelprismodtagere fra 1901 til 2013<br>Design og udvikling Zoran Todorovic",
        "http://www.b.dk/globalt/nobelprismodtagere-fra-1901-til-2013"
        ],
        [
        "De mest dødbringende jordskælv",
        "images/bjordskaelv.png",
        "Infografik; Listen over historiens værste jordskælv.<br>Design og udvikling af Zoran Todorovic",
        "http://www.b.dk/viden/doedbringende-jordskaelv"
        ],
        [
        "Blod Obligationer",
        "images/bblod.png",
        "Webapplikation; Der er stor sandsynlighed for, at du gennem din pensionsopsparing eller eventuelle investeringsforening har penge investeret i afrikanske statsobligationer.<br>Design og udvikling af Zoran Todorovic",
        "http://www.b.dk/globalt/blod-obligationer-grafik"
        ],
        [
        "Top 30 flest fængslede i verden",
        "images/bfaengsel.png",
        "Infgrafik; Her er de 30 lande hvor flest mennesker sidder fængslede<br>Design og udvikling af Zoran Todorovic",
        "http://www.b.dk/globalt/de-30-mest-faengslende-lande-i-verden"
        ],
        [
        "Berlingske USA valg",
        "images/busa.png",
        "Interaktivt kort over USA, lavet til USA valget 2012.<br>Design af Zoran Todorovic, udvikling af Thomas Carlsen",
        "http://www.b.dk/usavalg"
        ],
        [
        "Maersk Triple-E",
        "images/bmaersk.png",
        "Infografik; Med en længde på 400 meter bliver Maersk Triple-E verdens største og mest effektive skib.<br>Design og udvikling Zoran Todorovic",
        "http://www.b.dk/globalt/verdens-stoerste-fragtskib"
        ],
        [
        "Test dig selv som jobskaber",
        "images/btest.png",
        "Webspil; Hvordan tror du, at du skaber flest arbejdspladser, så folk kan komme i arbejde allerede inden for et år?<br>Design og udvikling af Zoran Todorovic",
        "http://www.b.dk/politiko/hvor-mange-job-kan-du-lave-for-fire-milliarder-kroner"
        ],
        [
        "Rejsen til Månen",
        "images/bmoon.png",
        "Infografik; Foreløbig har kun 18 rumfartøjer ved hjælp af bremseraketter foretaget en blød landing på Månen og gennemført videnskabelige undersøgelser på Månens overflade – seks af disse har haft mennesker om bord.<br>Design og udvikling af Zoran Todorovic",
        "http://www.b.dk/viden/kina-paa-vej-til-maanen"
        ],
        [
        "Highlights fra Roskilde",
        "images/broskilde.png",
        "Infografik; Best detail (AHA) pris til SNDS’ designkonkurrence 2012<br>Design og udvikling af Zoran Todorovic",
        "http://www.b.dk/kultur/fra-lone-kellermann-til-beastie-boys"
        ],
        [
        "Sæt skik på Danmarks budget",
        "images/bbudget.png",
        "Webspil; Danmarks budgetunderskud vokser år for år. Ding opgave er at bringe balance i budgettet 2020.<br>Design og udvikling af Zoran Todorovic & Marie Lind",
        "http://www.b.dk/politiko/saet-skik-paa-danmarks-budget"    
        ],
        [
        "Berlingske Modeuge",
        "images/bmode.png",
        "Infografik; Man kan ikke se tidsånden, men man kan få en fornemmelse af den, når man ser på moden. Bl.a. kan man aflæse kvindefrigørelse, økonomiske op- og nedture, yuppiernes storhedstid – og fald.<br>Design og udvikling af Zoran Todorovic",
        "http://www.b.dk/mode/saadan-gik-vi-klaedt-i-de-glade-60ere-og-i-fattig-firserne"
        ]
    ]
    
    function portfolioWebStart() {
        
        var pwAll = '';
        for (var i=0; i<portfolioWeb.length; i++) {
            
            if ($(window).width() <= 480) {
                pwAll += '<pw' + i + '><a href="' + portfolioWeb[i][3] + '" target="_blank"><pwT' + i + '>' + portfolioWeb[i][0] + '</pwT' + i + '><img src="' + portfolioWeb[i][1] + '"></a></pw' + i + '>';
            } else {
                pwAll += '<pw' + i + '><pwT' + i + '>' + portfolioWeb[i][0] + '</pwT' + i + '><img src="' + portfolioWeb[i][1] + '"></pw' + i + '>';
            }
            $('#portfolio-web').html('<portTitel>UDVALGTE VÆRKER</portTitel>' + pwAll);
            $('portTitel').css({
                'padding-left': '25px',
                'font-weight': '900',
                'color': '#099AAA',
            });
        }
        
        for (var i=0; i<portfolioWeb.length; i++) {
            $('pw' + i).addClass('portfolio');
            $('pwT' + i).addClass('portfolio-text');
        }
        
        $('.portfolio').css({'cursor': 'pointer'});
        var percentage = 17+'%';
        var ani = true;
        if ($(window).width() > 480) {
            $('.portfolio').bind(bind, function(e) {
                var classIndex = $(this).index('.portfolio');
                $('.portfolio').css({'opacity': '0.5'});
                $(this).css({'opacity': '1'});
                if (ani == true) {
                    $('#c-menu').animate({'top': percentage, 'opacity': '0'}, 500, 'easeOutExpo');
                    $('#c-title').animate({'top': percentage, 'opacity': '0'}, 500, 'easeOutExpo', function() {extraFill(classIndex)});
                    ani = false;
                } else {
                    $('extraInfo').remove();
                    extraFill(classIndex);
                }
            });
        }
        
        function extraFill(classIndex) {
            $('body').append('<extraInfo />');
            $('extraInfo').html('' + portfolioWeb[classIndex][2] + '<br><br><a href="' + portfolioWeb[classIndex][3] + '" target="_blank">LINK</a>');
            $('extraInfo').append('<luk>X</luk>');
            $('extraInfo, luk').addClass('h-position');
            
            $('luk').css({
                'top': '-29',
                'left': '0',
                'text-align': 'center',
                'width': '10px',
                'height': '10px',
                'color': '#5B5F61',
                'font-size': '10px',
                'font-weight': '900',
                'line-height': '10px',
                'cursor': 'pointer',
                'border': 'solid'
            });
            if (mozBrowser == 'true') {
                $('luk').css({'line-height': '12px'});
            }
            $('extraInfo').css({
                'margin-left': '-278',
                'margin-top': '-5%',
                'width': '255px',
                'color':'#099AAA',
                'font-family':'sans-serif',
                'font':'Arial',
                'font-size':'13px',
                'font-weight': '400',
                'border-top':'solid',
                'border-top-width':'5px',
                'border-top-color':'#5B5F61',
                'padding-top': '10px'
            });
            $('extraInfo a').css({
                'color': '#5B5F61',
                'font-weight': '900'
            });
            
            $('luk').bind(bind, function(e){
                $('extraInfo').remove();
                $('#c-menu, #c-title').animate({'top': 50 + '%', 'opacity': '1'}, 500, 'easeOutExpo');
                $('.portfolio').css({'opacity': '1'});
                ani = true;
            });
        }
        
        if(bind !== 'touchstart') {
            goodScroller();
        }
    }
    
    function goodScroller() {
        $("#portfolio-web").mCustomScrollbar({
            theme:"light-thick",
            scrollInertia: "200",
        });
    }
    
    
    //Info + Kontakt///////////////////////////////////////////////////
    $('#info-kontakt').hide();
    $('#info-kontakt').css({'left': '0%'});
    $('#info-kontakt').hide();
    
    var ztInfo = 'Grafisk Syntaks er Interaktiv designers Zoran Todorovic personlig side. Zoran Todorovic har arbejdet med form og funktion i det digitale domæne siden år 2000. Uddannet grafiker med fokus på web og multimedier fra Center for Medie & Kommunikation RTS i Roskilde. Besidder stillingen Interaktiv Designer i Berlingske Media siden 2009, hvor han dagligt arbejder med design og udvikling af webapplikationer, interaktive infografikker og design af temasites til B.dk, bl.a. den prisvindene "Highlights fra Roskilde" infografik.';
    var ztKontakt = '<b>email: </b>zoran[at]grafisk-syntaks[dot]net<br><b>tlf.: </b>+45 3142 5207<br><b>';
    
    function infoKontaktStart() {
        $('#info-kontakt').html(ztInfo + '<br><br><e-brev>' + ztKontakt + '</>');
        $('e-brev').addClass('name');
        if(bind !== 'touchstart') {
            goodScroller2();
        }
    }
    
    function goodScroller2() {
         $("#info-kontakt").mCustomScrollbar({
            theme:"light-thick",
            scrollInertia: "200",
        });
    }
    
    //Menu/////////////////////////////////////////////////////////////
    
    var percentage2 = 100+'%';
    
    //Design + Kode//
    $('#design-kode').bind(bind, function(e) {
        $('.menu-quad').css({'border-color': '#099AAA'});
        $('.sub-pages').hide()
        $('.sub-pages').css({'left': '0%'});
        $('#portfolio-web').show();
        $('#portfolio-web').animate({'left': percentage2}, 500, 'easeOutExpo', function() {$("#portfolio-web").mCustomScrollbar("update")});
        portfolioWebStart();
        $('.menu-quad:eq(0)').css({'border-color': '#FFFFFF'});
    });
    
    //Info + Kontakt//
    $('#info-kon').bind(bind, function(e) {
        $('.menu-quad').css({'border-color': '#099AAA'});
        $('.sub-pages').hide();
        $('.sub-pages').css({'left': '0%'});
        $('#info-kontakt').show();
        infoKontaktStart();
        $('#info-kontakt').animate({'left': percentage2}, 500, 'easeOutExpo');
        $('.menu-quad:eq(1)').css({'border-color': '#FFFFFF'});
    });
    
    //Bottom///////////////////////////////////////////////////////////
    
    
});
