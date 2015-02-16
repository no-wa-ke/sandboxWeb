//variables
var globalTag = null;
var pageNum = null;
var ppp = 20; // posts per page
var totalPosts = null;
var tum;
var tumblrPage = "harunakworks.tumblr.com"; // URL
$(document).ready(function() {

    var tagLength = function(p) {
        if (p.tags) {
            var tagNum = p.tags.length;
            var tagHTML = "";
            for (b = 0; b < tagNum; b++) {
                tagHTML = tagHTML + "<span class='post-tag'>" + p.tags[b] + "</span> ";
            }
            return tagHTML;
        } else {
            return " ";
        }
    };
    //start off some init functions....
    var blogWriter = function(data) {
        $(".tumblr-post").remove();
        $(".load-more").remove();
        var tumblr = data;
        tum = tumblr;
        totalPosts = tumblr["posts-total"];
        console.log("total posts: " + tumblr["posts-total"]);
        console.log("loaded posts: " + tumblr.posts.length);
        console.log(tumblr);
        var postsNum = ppp;
        var photo500 = ['photo-url-500'];
        var photo250 = ['photo-url-250'];
        var purl100 = ['photo-url-500'];

        if (tumblr.posts.length < postsNum) { // if there are less posts than you want to display, thats the new post display count
            postsNum = tumblr.posts.length;
        }
        for (i = 0; i < postsNum; i++) {
            var p = tumblr.posts[i];
            var newD = p.date.split(" ");

            var pDate = ""
            switch (p.type) {
                case "photo":
                    if (p.photos.length < 1) { // photo: 一つなら
                        var photoImg = "<div class='onepic'>" + "<img src='" + p[photo500] + "' /></div>";
                        if (p.width > 200) {
                            photoImg = "<div class='onepic'>" + "<a class='block-img' rel='lightbox[tumblr]'href='" + p["photo-url-1280"] + "'><img src='" + p[photo500] + "' /></a>" + "</div>";
                        }
                        $("#tumblr-wrap").append("<div class='totalwrap center'>" + "<li class = 'wTitle'>" + p["photo-caption"] + "</li><a class='date-link' href='" + p.url + "'></a>" + photoImg + "<div class='post-tags'>" + tagLength(p) + "</div></div>");



                    } else { // if its a photoset

                        var photoLen = p.photos.length;
                        var toAppend = "<a class='date-link' href='" + p.url + "'>" + pDate + "</a>";
                        var mulAppend = "<a class='date-link' href='" + p.url + "'>" + pDate + "</a>";
                        var twoAppend = "<a class='date-link' href='" + p.url + "'>" + pDate + "</a>";
                        for (c = 0; c < 1; c++) { //一枚目を大きくする
                            var photosImg = p["photo-caption"] + "<div class='mulfirst'>" + "<img src='" + p.photos[c][photo500] + "'/>" + "</div>";
                            if (p.photos[c].width > 200) {
                                photosImg = "<li class = 'wTitle'>" + p["photo-caption"] + "</li><div class='mulfirst'>" + "<a href='" + p.photos[c]["photo-url-500"] + "'rel='lightbox[tumblr]'><img src='" + p.photos[c]["photo-url-500"] + "' /></a>" + "</div>";
                            }
                            toAppend = toAppend + photosImg; // 一枚目を一旦appendに書き込む
                        }

                        if (photoLen < 3) { // 写真数が３枚以下なら
                            for (d = 1; d < photoLen; d++) {
                                var photosImg2 = "<div class='lessThree'>" + "<img src='" + p.photos[d][photo500] + "' />" + "</div>"; //二枚目は同じサイズ
                                if (p.photos[d].width > 200) {
                                    photosImg2 = "<div class='lessThree'>" + "<a href='" + p.photos[d]["photo-url-500"] + "'rel='lightbox[tumblr]'><img src='" + p.photos[d]["photo-url-500"] + "' /></a>" + "</div>";
                                }
                                twoAppend = mulAppend + photosImg2;　 //２枚目以降を一旦append2に書き込む
                            }
                        } else if (photoLen == 3) { //3枚なら
                            for (d = 1; d < 3; d++) { //3枚
                                var photosImg2 = "<div class='mulpic'>" + "<img src='" + p.photos[d]["photo-url-250"] + "'/>" + "</div>"; //二枚目から小さく
                                if (p.photos[d].width > 200) {
                                    photosImg2 = "<div class='mulpic'>" + "<a href='" + p.photos[d]["photo-url-500"] + "'rel='lightbox[tumblr]'><img src='" + p.photos[d]["photo-url-500"] + "' /></a>" + "</div>";
                                }
                                mulAppend = mulAppend + photosImg2;　 //２枚目以降を一旦append2に書き込む
                            }
                        } else if (photoLen == 4) { //4枚以上なら
                            for (d = 1; d < 4; d++) { //4枚
                                var photosImg2 = "<div class='mulpic'>" + "<img src='" + p.photos[d]["photo-url-250"] + "' />" + "</div>"; //二枚目から小さく
                                if (p.photos[d].width > 200) {
                                    photosImg2 = "<div class='mulpic'>" + "<a href='" + p.photos[d]["photo-url-500"] + "'rel='lightbox[tumblr]'><img src='" + p.photos[d]["photo-url-250"] + "' /></a>" + "</div>";
                                }
                                mulAppend = mulAppend + photosImg2;　 //２枚目以降を一旦append2に書き込む
                            }
                        } else if (photoLen == 5) { //5枚以上なら
                            for (d = 1; d < 5; d++) { //5枚
                                var photosImg2 = "<div class='mulpic'>" + "<img src='" + p.photos[d]["photo-url-250"] + "' />" + "</div>"; //二枚目から小さく
                                if (p.photos[d].width > 200) {
                                    photosImg2 = "<div class='mulpic'>" + "<a href='" + p.photos[d]["photo-url-500"] + "'rel='ligtbox[tumblr]'><img src='" + p.photos[d]["photo-url-250"] + "' /></a>" + "</div>";
                                }

                                mulAppend = mulAppend + photosImg2;　 //２枚目以降を一旦append2に書き込む
                            }
                        } else if (photoLen == 6) { //6枚以上なら
                            for (d = 1; d < 6; d++) { //6枚
                                var photosImg2 = "<div class='mulpic'>" + "<img src='" + p.photos[d]["photo-url-100"] + "'/>" + "</div>"; //二枚目から小さく
                                if (p.photos[d].width > 200) {
                                    photosImg2 = "<div class='mulpic'>" + "<a href='" + p.photos[d]["photo-url-500"] + "'rel='lightbox[tumblr]'><img src='" + p.photos[d]["photo-url-250"] + "' /></a>" + "</div>";
                                }
                                mulAppend = mulAppend + photosImg2;　 //２枚目以降を一旦append2に書き込む
                            }
                        } else if (photoLen == 7) { //7枚以上なら
                            for (d = 1; d < 6; d++) { //7枚
                                var photosImg2 = "<div class='mulpic'>" + "<img src='" + p.photos[d]["photo-url-100"] + "' />" + "</div>"; //二枚目から小さく
                                if (p.photos[d].width > 200) {
                                    photosImg2 = "<div class='mulpic'>" + "<a href='" + p.photos[d]["photo-url-500"] + "'rel='lightbox[tumblr]'><img src='" + p.photos[d]["photo-url-250"] + "' /></a>" + "</div>";
                                }
                                mulAppend = mulAppend + photosImg2;　 //２枚目以降を一旦append2に書き込む
                            }
                        }


                        toWrap = "<div class='totalwrap center'>";


                        var getWrap = "<div class ='mulWrap'>";


                        toAppend = toAppend + twoAppend + getWrap + mulAppend + "</div>";
                        totalWrap = toWrap + toAppend + "</div>";
                        $("#tumblr-wrap").append(totalWrap);


                    }
                    break;
            }
        }


        if (tumblr.posts.length > ppp) {
            $('#tumblr-wrap').append("<span class='load-more'>Load more...</span>");
        }
    };

    //tag function. not using it for now
    var getNews = function() {
        $.getJSON('http://' + tumblrPage + '/api/read/json?callback=?', function(data) {
            blogWriter(data);
        });
    };



    getNews();
    $(".post-tag").live("click", function() {
        filterTag($(this).text());
    });
    $(".get-news").live("click", function() {
        $(".get-news").remove();
        $(".no-posts").remove();
        getNews();
    });
    //call load function
    $(".load-more").live("click", function() {
        if (globalTag == null && pageNum == null) { // if there is not a tag and is first page
            $.getJSON('http://' + tumblrPage + '/api/read/json?callback=?&start=' + ppp, function(data) {
                blogWriter(data);
            });
        } else if (globalTag !== null && pageNum !== null) { // if there is a current tag and it's not the first page
            $.getJSON('http://' + tumblrPage + '/api/read/json?callback=?&tagged=' + globalTag + '&start=' + (pageNum + 1) * ppp, function(data) {
                blogWriter(data);
            });
        } else if (globalTag !== null && pageNum == null) { // if there is a current tag
            $.getJSON('http://' + tumblrPage + '/api/read/json?callback=?&tagged=' + globalTag + '&start=' + ppp, function(data) {
                blogWriter(data);
            });
        } else { // (globalTag == null && pageNum !== null) if it's not the first page
            $.getJSON('http://' + tumblrPage + '/api/read/json?callback=?&start=' + (pageNum + 1) * ppp, function(data) {
                blogWriter(data);
            });
        }
        pageNum++;
        console.log("pageNum is " + pageNum + ", and globalTag is " + globalTag);
        window.scrollTo(0, 0);

    });

});