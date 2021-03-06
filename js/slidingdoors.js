window.onload = function(){
	var box = document.getElementById('container');
	var imgs = box.getElementsByTagName('img');
	
	//单张图片宽度
	var imgWidth = imgs[0].offsetWidth;
	
	//设置掩藏门露出的宽度
	var exposeWidth = 160;
	//设置容器的总宽度
	var boxWidth = imgWidth + exposeWidth * (imgs.length-1);
	box.style.width = boxWidth + 'px';
	//设置每到门的初始位置
	//left 属性设置定位元素左外边距边界与其包含块左边界之间的偏移
	function setImgsPos(){
		for (var i = 1, len = imgs.length; i<len; i++) {
			imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + 'px';
		}
	}
	setImgsPos();
	
	
	//计算每道门打开时移动的距离
	var translate = imgWidth - exposeWidth;
	
	//为每道门绑定事件
	for (var i = 0, len = imgs.length; i < len; i++) {
		//使用立即调用的函数表达式，为了获得不同的i值
		(function(i){
			imgs[i].onmouseover = function(){
				//每道门复位
				setImgsPos();
				//打开门
				for(var j = 1; j <= i; j++){
					imgs[j].style.left = parseInt(imgs[j].style.left,10) - 
					translate + 'px';
				}
			}
		})(i);
		
	}
};
