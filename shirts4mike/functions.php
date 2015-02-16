<?php
class relative_URI {
    function relative_URI() {
        add_action('get_header', array(&$this, 'get_header'), 1);
        add_action('get_footer', array(&$this, 'get_footer'), 99999);
    }
    function replace_relative_URI($content) {
        $home_url = trailingslashit(get_home_url('/'));
        return str_replace($home_url, 'http://10.0.1.2/wordpress/', $content);
    }
    function get_header(){
        ob_start(array(&$this, 'replace_relative_URI'));
    }
    function get_footer(){
        ob_end_flush();
    }
}
new relative_URI();

?>