//下拉框
(function(){
    var num = 0;

    $('[data-toggle=arrowdown]').hover(function(){
        var _id = $(this).attr('id');
        num = _id.substring(5, _id.length);
        $(this).find('span')
            .removeClass('run-down')
            .addClass('run-up');
        $('#nav-box'+num).slideDown(100);
    }, function(){
        $(this).find('span')
            .removeClass('run-up')
            .addClass('run-down');
        $('#nav-box'+num).hide();
    });
    $('[data-toggle=hidden-box]').hover(function(){
        var _id =  $(this).attr('id');
        num = _id.substring(7, _id.length);
        $('#arrow'+num).addClass('nav-hover')
            .find('span').removeClass('run-down')
            .addClass('run-up');
        $(this).show();
    }, function(){
        $('#arrow'+num).removeClass('nav-hover')
            .find('span').removeClass('run-up')
            .addClass('run-down');
        setTimeout(function(){
            $('#arrow'+num).find('span').removeClass('run-down');
        }, 500);
        $(this).slideUp(100);
    });
})(jQuery);




//关二维码
(function(){
    $('.close-code').click(function(){
        $('.two-code').fadeOut(200);
    });
})();


//tab-nav
(function(){
    $('.li-nav').hover(function(){
        var _id, num;

        _id = $(this).attr('id');
        num = _id.substring(3, _id.length);
        $('.li-nav').removeClass('li-nav-hover');
        $('.hiddenBox').hide();
        $('#box-'+num).fadeIn(200);
    }, function(){
        $(this).addClass('li-nav-hover');
    });
})();




var give1=document.getElementById('give1');
var box=document.getElementById('box');
var outbox=document.getElementById('outbox');

	
	give1.onmouseover=function ()
	{
	    box.style.display = 'block';
	};
	
	outbox.onclick=function ()
	{
	    box.style.display = 'none';
	};
	
	
//hover	

var imghover=document.getElementById('imghover');
var marig=document.getElementById('marig');

	marig.onmouseover=function ()
	{
	   imghover.style.display = 'block';
	};
	
	imghover.onmouseout=function ()
	{
	   imghover.style.display = 'none';
	};
