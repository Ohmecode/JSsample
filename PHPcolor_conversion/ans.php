<!DOCTYPE html>
    <meta charset="UTF-8">
    <html>
    <body>
    <table border="1">
        <?php

$color = $_POST["color"];
$Red = $_POST["Red"];
$Green = $_POST["Green"];
$Blue = $_POST["Blue"];

function henkan1($Red, $Green, $Blue){//RGB->Hex
    $code_red = dechex($Red);
    $code_green = dechex($Green);
    $code_blue = dechex($Blue);

        if(mb_strlen($code_red) == 1){
            $code_red = "0".$code_red;
        }if(mb_strlen($code_green) == 1){
            $code_green = "0".$code_green;
        }if(mb_strlen($code_blue) == 1){
            $code_blue = "0".$code_blue;
        }
    $color_hex = "#".$code_red.$code_green.$code_blue;
    $color_hex = strtoupper($color_hex);
    return $color_hex;
    }

function henkan2($color){ //Hex->RGB
        if(substr($color, 0, 1)=="#"){
            $code_red = hexdec(substr($color, 1, 2));
            $code_green = hexdec(substr($color, 3, 2));
            $code_blue = hexdec(substr($color, 5, 2));
            $color_rgb =  $code_red . ", " . $code_green . ", " . $code_blue;
            return $color_rgb;

        }else{
            $code_red = hexdec(substr($color, 0, 2));
            $code_green = hexdec(substr($color, 2, 2));
            $code_blue = hexdec(substr($color, 4, 2));
            $color_rgb =  $code_red . ", " . $code_green . ", " . $code_blue;
            return $color_rgb;
        }
}

    if (isset($_POST["code"]) ){
    }else{
        print "変換モードが選択されていません<br/>
        変換モードは「Hex>>>RGB」と「RGB>>>Hex」があります。<br/>";

        echo '<button><a href="' . $_SERVER['HTTP_REFERER'] . '">戻る</a></button>';
        exit;  
    }

$code = $_POST["code"];
if($code == 1) {    //RGB->Hex
    print "<h4>変換結果</h4><br/>";
    if($Red>255||$Red<0){
        echo "Redを0～255の範囲で数値を入力してください。<br/>";
    }

    if($Green>255 || $Green<0){
        echo "Greenを0～255の範囲で数値を入力してください。<br/>";
    }

    if($Blue>255 || $Blue<0){
        echo "Blueを0～255の範囲で数値を入力してください。<br/>";
    }
    if(($Red == null)||($Green == null)||($Blue == null)){
        if ($Red == null) {
            echo "Redにデータが入力されていません。<br/>";

        }
        if ($Green == null) {
            echo "Greenにデータが入力されていません。<br/>";
        }
        if ($Blue == null) {
            echo "Blueにデータが入力されていません。<br/>";
        }
        
        echo "変換モードは「RGB>>>Hex」が選択されています。<br/>";
        echo '<button><a href="' . $_SERVER['HTTP_REFERER'] . '">戻る</a></button>';
        exit;
    }
    
    

        $color_hex = henkan1($Red, $Green, $Blue);
        
        $before= "RGB:(".$Red.",".$Green.",".$Blue.")";
        $after = "Hex:(".$color_hex.")";
        echo "<tr>
        <th></th>
        <th>RGB</th>
        <th>>>></th> 
        <th></th>
        <th>Hex</th>
    </tr>
    <tr>
        <td style=\"background-color: $color_hex\" width=\"70px\"></td>
        <td>$before</td>
        <td>>>></td>
        <td style=\"background-color: $color_hex\" width=\"70px\"></td>
        <td>$after</td>
    </tr>";
echo "</table>";
        echo '<button><a href="' . $_SERVER['HTTP_REFERER'] . '">戻る</a></button>';
}


    if($code == 2) {    //Hex->RGB
        if (empty($color)) {
            echo "Hexにデータが入力されていません。<br/>
                HexカラーコードをRGBに変換したい場合は、Hexに値を入力して下さい<br/>
                変換モード「Hex>>>RGB」を選択してください<br/>";
                echo '<button><a href="' . $_SERVER['HTTP_REFERER'] . '">戻る</a></button>';
                exit;
            }
        $color_rgb = "RGB:(".henkan2($color).")<br/>";
        

        print "<h4>変換結果</h4><br/>";
            if(substr($color, 0, 1)=="#"){
                $before= "Hex:(".$color.")";
                $after = $color_rgb;
                echo "<tr>
                        <th></th>
                        <th>Hex</th>
                        <th>>>></th> 
                        <th></th>
                        <th>RGB</th>
                    </tr>
                    <tr>
                        <td style=\"background-color: $color\" width=\"70px\"></td>
                        <td>$before</td>
                        <td>>>></td>
                        <td style=\"background-color: $color\" width=\"70px\"></td>
                        <td>$after</td>
                    </tr>";

                echo "</table>";
                echo '<button><a href="' . $_SERVER['HTTP_REFERER'] . '">戻る</a></button>';
            }else{
                $color = "#".$color;
                $before= "Hex:(".$color.")";
                $after = $color_rgb;
                echo "<tr>
                        <th></th>
                        <th>Hex</th>
                        <th>>>></th> 
                        <th></th>
                        <th>RGB</th>
                    </tr>
                    <tr>
                        <td style=\"background-color: $color\" width=\"70px\"></td>
                        <td>$before</td>
                        <td>>>></td>
                        <td style=\"background-color: $color\" width=\"70px\"></td>
                        <td>$after</td>
                    </tr>";
                echo "</table>";
                echo '<button><a href="' . $_SERVER['HTTP_REFERER'] . '">戻る</a></button>';
            }
    }

    print "<br/><h3 style=\"text-align:center\">カラーチャート</h3><br/>";
    echo "<table border=\"1\">";
    echo "<tr>
            <th></th><th>Hex</th><th>RGB</th>
            <th></th><th>Hex</th><th>RGB</th>
            <th></th><th>Hex</th><th>RGB</th>
            <th></th><th>Hex</th><th>RGB</th>
            <th></th><th>Hex</th><th>RGB</th>
            <th></th><th>Hex</th><th>RGB</th>
        </tr>";
for($Red = 0; $Red <= 255; $Red +=51){
    for($Green = 0; $Green <= 255; $Green +=51){
        echo "<tr>";
        for($Blue = 0; $Blue <= 255; $Blue +=51){

            $rgb =  "(".$Red . "," . $Green . "," . $Blue.")";
            $hex = henkan1($Red, $Green, $Blue);
            echo   "<td style=\"background-color: $hex\" width=\"20px\"></td>";
            echo   "<td>$hex</td>";
            echo   "<td align=\"center\">$rgb</td>";
            
        }
    }
    echo "</tr>";
}
?>
</table>
</body> 
</html> 
<style>
    body{
        margin: auto%;
        color: #5d627b;
        background: white;
        border-top: solid 15px #CCCCFF;
        box-shadow: 0 3px 7px rgba(0, 0, 0, 0.22);
        text-align:center;
\
    }
</style>