define(['jquery'], function ($) {
	return function (){
		var _width=$('img')[0].width+10;
		var height=[];
		var width=window.innerWidth;
		var max=width/_width|0;
		var k;
		var min;
		//console.log(max);
		for(var i=0;i<max;i++){
			$('li').eq(i).css('top',0);
			$('li').eq(i).css('left',_width*i+"px");
			height[i]=$('img')[i].height+10;
			//console.log(height[i]);
		}
		for(var i=max;i<15;i++){
			min=Math.min.apply(null,height);
			for(var j=0;j<max;j++){
				if(min==height[j]){
					k=j;
					height[j]+=$('img')[i].height+10;
					break;
				}
			}
			$('li').eq(i).css('top',min+"px");
			$('li').eq(i).css('left',_width*k+"px");
		}
	};
});
