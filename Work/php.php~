<?php
//$dir = "Photography";

switch ($_GET["dir"]) 
{
    case "Photography":
        populatefolder("Photography");
        break;
    case "Applications":
        populatefolder("Applications");
        break;
    case "Web":
        populatefolder("Web");
        break;
    case "Print":
        populatefolder("Print");
        break;
    case "All":
         populatefolder("Photography");
         populatefolder("Applications");
         populatefolder("Web");
         populatefolder("Print");
         break;
    default:
       echo "i is not equal to 0, 1 or 2";
}


function populatefolder($dir) {
 if (is_dir($dir)){
 //echo "postoji direktorijum";
  if ($dh = opendir($dir))
    {
    while (($file = readdir($dh)) !== false)
    {
      if ($file == '.' or $file=='..') continue;     
      echo '<div><img src="' . $dir . '/' . $file . '" width=60px;height=60px;></div>' ;
    }
    closedir($dh);
    }
}
else
{
	echo "greska";
}
 
}




?>