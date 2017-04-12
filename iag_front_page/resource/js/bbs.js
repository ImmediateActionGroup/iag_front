$(document).ready(function() {
	//	点击展开,收起
	$(".comment-more ").click(function() {
		$(this).hide();
		$(".comment-more-hide ").show();
	});
	$(".comment-more-hide ").click(function() {
		$(this).hide();
		$(".comment-more ").show();
	});

	//	检测移动端还是PC端
	function IsPC() {
		var userAgentInfo = navigator.userAgent;
		var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPod"];
		var flag = true;
		for(var v = 0; v < Agents.length; v++) {
			if(userAgentInfo.indexOf(Agents[v]) > 0) {
				flag = false;
				//				alert("移动端");
				break;
			}
		}
		if(window.screen.width >= 768) {
			flag = true;
			//			alert("PC");
		}
		return flag;
	}
	IsPC();
})