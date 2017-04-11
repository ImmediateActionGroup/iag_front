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
	//			检测评论输入字数
	var comment_con_input = $(".comment-con-input ");
	comment_con_input.html("请输入不多于140字 。");
	comment_con_input.focus(function() {
		comment_con_input.html("");
		comment_con_input.css("color", "#000");
	});
	comment_con_input.blur(function() {
		if(comment_con_input.val() == "") {
			comment_con_input.css("color", "#8C8C8C");
			comment_con_input.html("请输入不多于140字。 ");
		}
	});

	function changeText() {
		var input_val = comment_con_input.val().replace(/\ +/g, "");
		var input_val_1 = input_val.replace(/[\r\n]/g, "");
		var num = input_val.length;
		comment_con_input.val(input_val_1);

		if(num >= 140) {
			$(".comment-fontsize").css("color", "red");
			$(".comment-fontsize").html("已达到140字！");
		} else {
			$(".comment-fontsize").css("color", "#000");
			$(".comment-fontsize").html("已输入" + num + "个字。");
		}
	}
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