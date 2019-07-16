/**
 * Created by tarena on 19-6-15.
 */
$(function (){
	//轮播图：
	//保存图片路径
	var baseUrl = "/static/image/";
	var arr = ["0003.jpg","0001.jpg","0002.jpg"];
	var index = 0;
	var timer = setInterval(autoPlay,1000);
	function autoPlay(){
		$("#banner li").eq(index).css("background","#fff");
		index++;
		if(index == arr.length){
			index = 0;
		}
		var url = baseUrl + arr[index];
		$("#banner img").attr("src",url);
		//索引修改
		$("#banner li").eq(index).css("background","red");
	}
	//鼠标移入移出 #banner
	$("#banner").mouseover(function (){
		//停止定时器
		clearInterval(timer);
	}).mouseout(function (){
		//重启定时器
		timer = setInterval(autoPlay,1000);
	})
	//前后翻，图片
	$("#banner a.left").click(function (){
		$("#banner li").eq(index).css("background","#fff");
		index--;
		if(index == -1){
			index = arr.length-1;
		}
		var url = baseUrl + arr[index];
		$("#banner img").attr("src",url);
		//索引修改
		$("#banner li").eq(index).css("background","red");
	})
	$("#banner a.right").click(function (){
		autoPlay();
	})
	//遍历li,添加属性ind
	//each()：jquery提供的遍历方法
	for(var i = 0;i < arr.length;i++ ){
		//为对象添加属性ind,表示下标
		$("#banner li")[i].ind = i;
	}
	console.log($("#banner li").eq(2));
	$("#banner li").click(function (){
		console.log(this.ind);
	});

});




