<!DOCTYPE html>
<html lang="ja">
<head>

	<meta charset="UTF-8">
	<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/media/favicon.ico">
<link rel="stylesheet" href="<?php echo get_stylesheet_uri(); ?>" media="screen">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/main.css" media="screen">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/jquery.fullPage.css" media="screen">
<link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/lightBox.css"media="screen">
<script src='http://codepen.io/assets/libs/fullpage/jquery.js'></script>
<script type="text/javascript" src="http://harunak.tumblr.com/api/read/json?num=10&type=photo"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.9.1/jquery-ui.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/jquery.fullPage.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/jquery.slimscroll.min.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/mason.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/lightBox.js"></script>
<script src="<?php echo get_template_directory_uri(); ?>/lib/photoSets.js"></script>



<title>Kosaka Haruna Web</title>
</head>
<body>

<div id = "container">
<!-- head -->
<?php get_header(); ?>
<!-- menu -->
<?php get_sidebar(); ?>
<!-- foot -->
<?php get_footer(); ?>
</div>



<div id="fullpage">
<!-- 1 -->
<div class="section" id="section0"></div>
<!-- 2 -->
<div class="section " id="section1">
            <div class="intro center">
                news.</div>
                <div class ="postOut"></div>
                <div class ="linkFoot center">
                <a href="http://harunak.tumblr.com/">
                See more posts on Tumblr / Tumblrで読む</a>　</div>
            </div>
<!-- 3 -->
<div class="section" id="section2">
         <div class="intro center">
                works.</div>
<div id = "tumblr-wrap"></div>
</div>
<!-- 4 -->
 <div class="section" id="section3">
        <iframe src="https://harunak.stores.jp/#!/" style="width:100%; height:100%; border:none; margin:0; padding:0;z-index:999999;">
  Your browser doesn't support IFrames
</iframe>
</div>
<!-- 5 -->
  <div class="section" id="section4">
    <div class ="boxContainer center">
    <div class ="picBox">

        <img src="<?php echo get_template_directory_uri(); ?>/media/profile.png" alt="">

        </div>

<div class ="profile">
<p>
llustration/photo/graphic design<br><br>

高坂春菜 / Haruna Kosaka<br>
1988年 東京生まれ。<br>
東京と、５年暮らしたシンガポールで育つ。<br>
2012年 武蔵野美術大学 視覚伝達デザイン学科卒。<br>
デザイン、イラスト、写真、などジャンル問わず<br>
だれかの事からわたくし事まで<br>
足どり軽く、制作活動中です。<br>

_____________________________________________<br>

HARUNA KOSAKA<br>
1988 born in Tokyo, Japan<br>
2012 graduated from Musashino Art University,<br>
and started working as a freelance.<br>
Lives and works in Tokyo.<br><br>



[ Past Exhibitions and Events ]<br><br>

2010.3　　　恋ケ窪 はこ庭にて個展 「ここちよいカタチ」<br>
2012.3　　　武蔵野美術大学　卒業制作展<br>
2012.4　　　世田谷ものづくり学校　FFLLAATT主催<br>
  　      　　　     「MOUNT ZINE3」に出品<br>
2012.9　　　京都造形芸術大学・東北芸術大学 外苑キャンパスで<br>
　　　　    　THE TOKYO ART BOOK FAIR 2012に出店<br>
2012.10            FFLLAATT主催<br>
　　　　　  「SUNDAY BOOKS/シブカル祭/MOUNT ZINE4」に出品<br>
2012.10　　　池袋ジュンク堂にて写真集・カレンダーの取り扱いがスタート<br>

</p>

</div>
</div>
</div>
<!-- 6 -->
  <div class="section" id="section5">
        <div class ="contact center">
            </div>
</div>
 </div>


        <script src="<?php echo get_template_directory_uri(); ?>/lib/backStretch.js"></script>


</body>
</html>