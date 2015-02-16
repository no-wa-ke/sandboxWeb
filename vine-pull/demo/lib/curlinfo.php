<?php
$vineurl = $_POST['vidurl'];

function get_data($url) {
	$ch = curl_init();
	$timeout = 5;
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
	$data = curl_exec($ch);
	curl_close($ch);
	return $data;
}

$dataobj = get_data($vineurl);

// parse HTML content
$doc = new DOMDocument();
@$doc->loadHTML($dataobj);

$list = $doc->getElementsByTagName('meta');

foreach( $list as $item ) {
  $prop = $item->getAttribute('property');

  if($prop == 'twitter:image') {
    die($item->getAttribute('content'));
  }
} 


?>