$(function(){
    $('#dowebok').fullpage({
        'verticalCentered': false,//内容是否垂直居中
		'animateAnchor':true,
        'css3': true,
        'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],//定义背景颜色
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],//定义锚链接
        'navigation': true,/*项目导航演示：continuousVertical设置为true  显示右侧点点 false 不显示*/
		'menu': '#menu',/*绑定菜单：添加菜单项*/
		'fixedElements': '#foot',/*绑定菜单：添加菜单项*/
		'continuousVertical': true,//
        'navigationPosition': 'right',
        'navigationTooltips': ['网站首页', '新闻中心', '公司简介', '产品展示', '在线留言'],
		afterRender:function(){//页面结构生成后的回调函数，或者说页面初始化完成后的回调函数
			$('#logo').find('img').delay(0).animate({top: '0'}, 900, 'easeOutBounce');
		},
        afterLoad: function(anchorLink, index){//滚动到某一屏后的回调函数.接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
			if(index == 1){
			$('.bg1').find('.content1').delay(0).animate({top: '0'}, 300, 'easeOutBounce');
			$('.bg1').find('.content1').delay(0).animate({rotate: '360'}, 3000, 'easeInOutElastic');
			}
			$('#foot').animate({right: '0'}, 1000, 'easeOutExpo');
		},
		onLeave: function(index, direction){//滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
			if(index == '1'){
				$('.bg1').find('.content1').delay(0).animate({top: '-120%'}, 300, 'easeOutBounce');
				$('.bg1').find('.content1').delay(0).animate({rotate: '360'}, 3000, 'easeInOutElastic');
			}
           $('#foot').animate({right: '-120%'}, 1000, 'easeInOutQuart');
		}
    })
	
	//导航点击切换
	var NavClick=$("div#menu_right>i");
	var Menu=$("#menu");	
	NavClick.click(
		function ()
		{
			if(!Menu.hasClass("minuery"))
			{
				Menu.addClass('minuery');
				$(this).css("transform","rotate(180deg)");
				$(this).css("-webkit-transform","rotate(180deg)");
				$("#menu").animate({"width":"800px"},300);	
			}
			else
			{
				Menu.removeClass('minuery');
				$(this).css("transform","rotate(0deg)");
				$(this).css("-webkit-transform","rotate(0deg)");
				$("#menu").animate({"width":"235px"},300);		
			}	
		}
	)
	//第二屏列表添加样式
	var content2_li=$(".content2 .pright ul li");
	content2_li.each(function(index, element) {
        $(this).addClass('index'+index);
    });
	
	//第四屏产品列表添加样式
	var content4_li=$(".content4 div.bottom li");
	content4_li.each(function(index, element) {
        if((index+1)%2==0)
		{
			$(this).addClass("ever");	
		}
		else
		{
			$(this).addClass("odd");		
		}
    });
})