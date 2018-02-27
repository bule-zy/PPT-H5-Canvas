
$(function(){
	/*var num = 0;
	var arrImg = ["images/img.jpg","images/img1.jpg","images/img.jpg"];
	var g_canvas = null;
	var text = null;
	var canvasList = $("#canvasList");
	var canvasListLi = canvasList.find("li");
	var canvasListT = canvasListLi.find("canvas");
	canvasListT.each(function(){
		$(this).attr("id","canvas"+ $(this).attr("pageNum"));
	})
	
	init();
	$("#up").click(function(){
		$(this).removeClass("gray");
		num --;
		if(num <= 0){
			num = 0;
			$(this).addClass("gray");
		}
		g_canvas = document.getElementById(canvasListT.eq(num).attr("id"));
		
		init();
	})
	$("#down").click(function(){
		$(this).removeClass("gray");
		num ++;
		if(num >= arrImg.length){
			num = arrImg.length -1;
			$(this).addClass("gray");
		}
		g_canvas = document.getElementById(canvasListT.eq(num).attr("id"));
		text = g_canvas.getContext('2d');
		resizeCanvas(g_canvas,text,3000,3000);
		move(g_canvas,text)
		init();
	})*/
	
	function changeFontc(num){
		var iptC = $("#fontColor input"),
			fontS = $("#fontSize input"),
			color = ["#FF0000", "#000000", "#80FF00", "#00FFFF", "#808080", "#FF8000", "#408080", "#8000FF", "#CCCC00"]; 
		for(var i = 0, l = iptC.length; i < l; i++) {
			iptC[i].index = i;
			iptC[i].onclick = function() {
				$(this).addClass('active').siblings().removeClass('active');
				$(".input-box").eq(num).css("color",color[$(this).index()-1]);				
			}
		}
		for(var i = 0, l = fontS.length; i < l; i++) {
			fontS[i].index = i;
			fontS[i].onclick = function() {
				$(this).addClass('active').siblings().removeClass('active');
				$(".input-box").eq(num).css("fontSize",$(this).val()+"px");
			}
		}				
	}
	$("#fontIc").click(function(){
		$("#textBox").append("<li><div class='input-box' contenteditable='true'>请输入内容</div></li>"); 
		$(".input-box").each(function(index){
			keepLastIndex($(".input-box"));
			$(this).attr('id','inputBox'+ index);
			$.Move('inputBox'+ index);
			$('#inputBox'+ index).click(function(){
				changeFontc(index);
				document.onkeydown=function(event){
		            var e = event || window.event || arguments.callee.caller.arguments[0];
		            if(e && e.keyCode==46){ 
		                 $('#inputBox'+ index).parent().remove();
		            }
		        };
			})
		})	
	});	
	/*(function($){
    //拖拽插件,参数:id或object
	    $.Move = function(_this){
	        if(typeof(_this)=='object'){
	            _this=_this;
	        }else{
	            _this=$("#"+_this);
	        }
	        if(!_this){return false;}
			_this.css({'position':'absolute'})
	        _this.mousedown(function(e){ 
	            var offset = $(this).offset();
	            var x = e.pageX - offset.left;
	            var y = e.pageY - offset.top;
	            $(document).bind("mousemove",function(ev){
	                _this.bind('selectstart',function(){return false;});
	                var _x = ev.pageX - x;//获得X轴方向移动的值
	                var _y = ev.pageY - y;//获得Y轴方向移动的值
	                _this.css({'left':_x+"px",'top':_y+"px"});
	            });
	        });
			$(document).mouseup(function(){
	            $(this).unbind("mousemove");
	            _this.css({'opacity':''});
	        })
	    };
	})(jQuery)		*/
})


