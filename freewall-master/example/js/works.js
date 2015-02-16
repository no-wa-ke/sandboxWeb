/*
works by NOWAKE v.0.3
freewall js
tooltip js
needed
*/


   var temp = "<div class='brick {addCls}' style='width:{width}px;'><a href=''target='blank'class='tooltip'title=''><img src='i/myphoto/{index}.jpg' width='100%'height='auto'></div>";
   var low = 150;
   var high = 200;
   var w = 1,
       h = 1,
       html = '',
       limitItem = 15;
   for (var i = 0; i < limitItem; ++i) {
       //assign sizes to each photo i
       w = Math.floor(Math.random() * (high - low)) + low;
       //append items
       html += temp.replace(/\{width\}/g, w).replace("{index}", i + 1).replace("{addCls}", i + 1);

   }
        //append to freewall
   $("#freewall").html(html);

   var wall = new freewall("#freewall");
   wall.reset({
       selector: '.brick',
       animate: true,
       cellW: 200,
       cellH: 'auto',
       delay: 30,
       /*
        onResize: function() {
            wall.refresh();
        }
    });
    wall.filter(".");
    $(".filter-label").click(function() {
        $(".filter-label").removeClass("active");
        var filter = $(this).addClass('active').data('filter');
        if (filter) {
            wall.filter(filter);
        } else {
            wall.unFilter();
        }
    });
    wall.fitWidth();
    });*/
       onResize: function() {
           wall.fitWidth();
       }
   });

    //filter items
   wall.filter(".personal");
   $(".filter-label").click(function() {
       $(".filter-label").removeClass("active");
       var filter = $(this).addClass('active').data('filter');
       if (filter) {
           wall.filter(filter);
       } else {
           wall.unFilter();
       }
   });

   var images = wall.container.find('.brick');
   var length = images.length;
   images.css({
       visibility: 'hidden'
   });
   images.find('img').load(function() {
       --length;
       if (!length) {
           setTimeout(function() {
               images.css({
                   visibility: 'visible'
               });
               wall.fitWidth();
           }, 505);
       }
   });



   $(document).ready(function() {

       //1
       $(".1 ").addClass("personal");
       $(".1 ").addClass("big");
       $(".1 a").attr("href", "http://no-wa-ke.com/interminablecurrent");
       $(".1 a").attr("title", "interminablecurrent");
       //2
       $(".2 ").addClass("personal");
       $(".2 a").attr("href", "http://no-wa-ke.com/townsequnce");
       $(".2 a").attr("title", "townsequence");
       //3
       $(".3 ").addClass("personal");
       $(".3 a").attr("href", "http://no-wa-ke.com/inparis");
       $(".3 a").attr("title", "inparis");
       //4 SLIDE
       $(".4 ").addClass("personal");
       $(".4 .tooltip").attr("href", "http://no-wa-ke.com/portfolio/decay/thumb.jpg");
       $(".4 .tooltip").attr("rel", "lightbox[decay]");
       $(".4 .tooltip").attr("title", "decay");
       $(".4 ").append("<a href = 'http://no-wa-ke.com/portfolio/decay/1.jpg'rel='lightbox[decay]'>" + "<a href = 'http://no-wa-ke.com/portfolio/decay/2.png'" + "rel=lightbox[decay]>" + "<a href = 'http://no-wa-ke.com/portfolio/decay/3.jpg'" + "rel=lightbox[decay]>");
       //5
       $(".5 ").addClass("personal");
       $(".5 a").attr("href", "http://no-wa-ke.com/dailymotion");
       $(".5 a").attr("title", "dailymotion");
       //6
       $(".6 ").addClass("personal");
       $(".6 a").attr("href", "http://no-wa-ke.com/akemashite");
       $(".6 a").attr("title", "akemashite");
       //7
       $(".7 ").addClass("personal");
       $(".7 a").attr("href", "http://no-wa-ke.com/abookofmotion");
       $(".7 a").attr("title", "bookofmotion");
       //8
       $(".8").addClass("commisioned");
       $(".8 a").attr("href", "https://itunes.apple.com/jp/album/transatlantic-ep/id566826553");
       $(".8 a").attr("title", "Hold On");
       //9 SLIDE
       $(".9").addClass("commisioned");
       $(".9 .tooltip").attr("href", "http://no-wa-ke.com/img/silas1.jpg");
       $(".9 .tooltip").attr("rel", "lightbox[Silas]");
       $(".9 .tooltip").attr("title", "Silas And Maria");
       $(".9 ").append("<a href = 'http://no-wa-ke.com/img/silas2.jpg'rel='lightbox[Silas]'>");
       //10
       $(".10").addClass("commisioned");
       $(".10 a").attr("href", "http://shishiyamazaki.tumblr.com/post/65041484730/a-better-life-a-better-world-by-wonder");
       $(".10 a").attr("title", "Panasonic");
       //11 SLIDE
       $(".11 ").addClass("personal");
       $(".11 .tooltip").attr("href", "http://no-wa-ke.com/img/perspective_thumb?001.jpg");
       $(".11 .tooltip").attr("rel", "lightbox[perspective_typo]");
       $(".11 .tooltip").attr("title", "VISCOMP");
       $(".11 ").append("<a href = 'http://no-wa-ke.com/img/gifs/viscomp_thumb.jpg'rel='lightbox[perspective_typo]'>");
       //12
       $(".12").addClass("commisioned");
       $(".12 a").attr("href", "http://harunakosaka.com");
       $(".12 a").attr("title", "Harunakosaka Web");
       //13
       $(".13").addClass("commisioned");
       $(".13 a").attr("href", "https://itunes.apple.com/jp/album/call-a-romance/id472254691#");
       $(".13 a").attr("title", "KSR/KIDOYOJI");
       //14
       $(".14 ").addClass("personal");
       $(".14 .tooltip").attr("href", "http://no-wa-ke.com/img/gravity_thumb.jpg");
       $(".14 .tooltip").attr("rel", "lightbox[gravity]");
       $(".14 .tooltip").attr("title", "Gravity");
       $(".14 ").append("<a href = 'http://no-wa-ke.com/media/gravity.jpg'rel='lightbox[gravity]'>");
       //14
       $(".15 ").addClass("personal");
       $(".15 a").attr("href", "http://no-wa-ke.com/cursor.html");
       $(".15 a").attr("title", "ugly duckling");




       //swap thumbnail hover



       //interminable
       $(".1 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [1] + ".gif");

           },
           function() {
               $(this).attr("src", "i/myphoto/" + [1] + ".jpg");

           });
       //town sequence
       $(".2 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [2] + ".gif");
           },
           function() {
               $(this).attr("src", "i/myphoto/" + [2] + ".jpg");

           });
       //In paris
       $(".3 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [3] + ".gif");
           },
           function() {
               $(this).attr("src", "i/myphoto/" + [3] + ".jpg");

           });

       //DECAY
       $(".4 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [4] + ".jpg");
           },
           function() {
               $(this).attr("src", "i/myphoto/" + [4] + ".jpg");

           });
       //5
       $(".5 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [5] + ".gif");
           },
           function() {
               $(this).attr("src", "i/myphoto/" + [5] + ".jpg");

           });
       //6
       $(".6 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [6] + ".jpg");
           },
           function() {
               $(this).attr("src", "i/myphoto/" + [6] + ".jpg");

           });

       //7
       $(".7 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [7] + ".gif");
           },
           function() {
               $(this).attr("src", "i/myphoto/" + [7] + ".jpg");

           });
       //11
       $(".11 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [11] + ".jpg");
           },
           function() {
               $(this).attr("src", "i/myphoto/" + [11] + ".jpg");

           });

       //gravity
       $(".14 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [14] + ".jpg");
           },
           function() {
               $(this).attr("src", "i/myphoto/" + [14] + ".jpg");

           });
       //15
       $(".15 img").hover(function() {
               $(this).attr("src", "i/gifs/" + [15] + ".gif");
           },
           function() {
               $(this).attr("src", "i/myphoto/" + [15] + ".jpg");

           });

   });