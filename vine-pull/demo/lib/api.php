<?php
require_once('TwitterAPIExchange.php'); // https://github.com/J7mbo/twitter-api-php

$settings = array(
  'oauth_access_token' => "388374221-CpjzZb1lsNfPMri6OPVZ27zwgrg3IJxXLMXe7N1e",
  'oauth_access_token_secret' => "juvnGLQzVgGdxVJZiTSLxpe7tUIvq2J6xOBXWVLigyyXP",
  'consumer_key' => "LdeUthHc5CDChZG9JYtw5A",
  'consumer_secret' => "nXs09LfHWpSTVqYOCazFYcscVYDYpjulWH0BlwRKGvc"
);

$hashtag = $_GET['hashtag'];
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q='.urlencode($hashtag).'%20vine';
$requestMethod = 'GET';

$twitter = new TwitterAPIExchange($settings);

echo $twitter->setGetfield($getfield)->buildOauth($url, $requestMethod)->performRequest();  

?>