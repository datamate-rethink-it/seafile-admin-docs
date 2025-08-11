<?php

declare(strict_types=1);

if (count($argv) != 2) {
    echo "Usage: $argv[0] <FILENAME>";
    exit(1);
}

$orange_codes = '/#(f59f00|feac74|f89a68|eb8205|f19645|feefb8|e0873b|ee8204|f7941d|ea8102|f93|ee8221|ed7b16|d96f10|f3af7d|feaa7c|cb8a5d|feab79|ff9800|ec8000|eb9205|d98100|ff8000|ed7109)/';
$rgba_codes = '/(rgba\(255,152,0|rgba\(255,167,38)/';   
$final_css = array();
$placeholder = '##maincolor##';

// Datei als Array eingelesen
$array = explode("}", file_get_contents($argv[1]));
$last = count($array)-1;

foreach($array as $key => $value){

    $inside = "";

    // diverse Bereinigungen (lange Grafiken oder URLs weg)
    $array[$key] = trim($value);
    if( preg_match('/src: url|data:image/', $value) ){
      //$array[$key] = "";
      unset($array[$key]);
    }
    // lange Elemente werden entfernt
    if ( strlen($value) > 5000 ){
      //$array[$key] = "";
      unset($array[$key]);
    }
  
    // Navigationshover entfernen
    if( preg_match('/.tree-node:not([type=dir]):hover{background-color/', $value) ){
        unset($array[$key]);
    }

    // verschachtelte zusammenführen
    if ( substr_count($value, "{") > 1 ){
        $inside = "y";
        $inside_start = $key;
        $inside_ende = $key;
    }
    if ( trim($value) == "" AND $inside == "y" ){
        $inside_ende = $key;
        while($inside_start < $key){
            $array[$key] = trim($array[$key] ."\n". $array[$inside_start] ."}");
            unset($array[$inside_start]);
            $inside_start++;
        }
        $inside = "n";
        $value = $array[$key];
    }

    if( $inside != "y" ){
        $array[$key] = trim($value."}");
    }
}

// clean last element
if ( trim($array[$last]) == "}" ) {
    unset($array[$last]);
}
  
// Array-Index wieder neu aufbauen
$array = array_values($array);

//print_r($array);

// 1. save code-block only if it contains a "#..."

foreach($array as $key => $value){
    if( preg_match($orange_codes, $value) OR preg_match($rgba_codes, $value) ){

        // 2. replace orange code with placehoder
        $tmp = str_replace(["\r", "\n"], '', preg_replace($rgba_codes, 'rgba(##mainrgba##', preg_replace($orange_codes, $placeholder, trim($value))));
        //$tmp = str_replace(["\r", "\n"], '', preg_replace($orange_codes, $placeholder, trim($value)));
        //$tmp = $tmp.'}';

        $final_css[] = $tmp;
    }
}

// manuelle zugabe von Transparenz bei Hintergrundfarben (Navigation) und Hover fix
$final_css[] = '.nav-pills .nav-item .nav-link:hover {background-color: ##maincolor##30;}
.side-tabnav-tabs .tab a:hover {background-color: ##maincolor##30;text-decoration: none}
.tree-node-inner-hover{background-color:##maincolor##30;border-radius:.25rem}
.side-panel .nav .nav-link.active:hover{background-color: ##maincolor##;}
.nav-pills .nav-item .nav-link.active{background-color: ##maincolor##; color:#fff;}
.dropdown-item:hover, .dropdown-item:focus {color: #333; background-color: rgba(##mainrgba##,.20);}
.show>.btn-secondary.dropdown-toggle.dropdown-item{color: #333; background-color: rgba(##mainrgba##,.20);}';

// button hover effect
$final_css[] = '.btn-primary:hover{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}
.btn-primary:not(:disabled):not(.disabled):active{background-color: rgba(##mainrgba##,.75); border-color: rgba(##mainrgba##,.75);}';

// operation icon hover effect
$final_css[] = '.op-icon:focus, .op-icon:hover{color: rgba(##mainrgba##,.70) !important;}';

// überschreiben dieser scheiss admin-css
$final_css[] = '.cur-view-path .sf-heading a {color: ##maincolor## !important;}';

// fix: verschwindende gruppen
$final_css[] = '.nav{flex-wrap:inherit !important;}';

// button word-break
$final_css[] = 'button {word-break: normal;}';


// implode array
$final_css_string = implode("\n",$final_css);

// jede Zeile durchgehen und alles entfernen, was kein . { } oder # enthält:

$final_css_linebyline = explode("\n", $final_css_string);
foreach($final_css_linebyline as $key => $value){
    if( !preg_match('/\.[a-zA-Z]|{|}|#/', $value) ){
        unset($final_css_linebyline[$key]);
    }
}
$final_css_linebyline = array_values($final_css_linebyline);
$final_css_string2 = implode("\n",$final_css_linebyline);

// Save to file
file_put_contents($argv[1], $final_css_string2);
