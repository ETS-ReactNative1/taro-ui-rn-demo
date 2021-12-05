<?php

$inputFile = '/Users/lzp/work/TaroOne/src/taro-ui/src/components/icon-font/weapp/weapp.wxml';
$outputFile = '/Users/lzp/work/TaroOne/src/taro-ui/src/components/icon-font/index-1.weapp.js';

$xmlCode = file_get_contents($inputFile);
preg_match_all('@<view wx:if="{{name === \'(.*?)\'}}" style="(.*?)" class="icon" />@', $xmlCode, $matches);
//print_r($matches);

	foreach ($matches[1] as $key => $name) {
		$style = $matches[2][$key];
		$style = str_replace("{{(isStr ? colors : colors[0]) || 'rgb(51,51,51)'}}", "\${(isStr ? colors : colors[0]) || 'rgb(51,51,51)'}", $style);
		$style = str_replace("{{(isStr ? colors : colors[1]) || 'rgb(51,51,51)'}}", "\${(isStr ? colors : colors[1]) || 'rgb(51,51,51)'}", $style);
		$style = str_replace("{{(isStr ? colors : colors[2]) || 'rgb(51,51,51)'}}", "\${(isStr ? colors : colors[2]) || 'rgb(51,51,51)'}", $style);
		$style = str_replace("{{(isStr ? colors : colors[3]) || 'rgb(51,51,51)'}}", "\${(isStr ? colors : colors[3]) || 'rgb(51,51,51)'}", $style);
		$style = str_replace("{{(isStr ? colors : colors[4]) || 'rgb(51,51,51)'}}", "\${(isStr ? colors : colors[4]) || 'rgb(51,51,51)'}", $style);
		$style = str_replace("{{(isStr ? colors : colors[5]) || 'rgb(51,51,51)'}}", "\${(isStr ? colors : colors[5]) || 'rgb(51,51,51)'}", $style);
		$style = str_replace('{{quot}}', '${quot}', $style);
		$style = str_replace('{{svgSize}}', '${svgSize}', $style);
?>
if (name === '<?php echo $name ?>') {
    return <view style={`<?php echo $style ?>`} className='icon' />
}
<?php

	}
