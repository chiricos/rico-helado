$(document).ready(function() {
	var myHeight = window.innerHeight;
	var container= document.getElementById('container');
	container.style.minHeight = myHeight+"px";
	
	

	$('#container').mousemove(function(e){
        var offset = $(this).offset();
        var xPos = e.pageX - offset.left;
        var yPos = e.pageY - offset.top;
 
        var mouseXPercent = Math.round(xPos / $(this).width() * 100);
        var mouseYPercent = Math.round(yPos / $(this).height() * 100);
 
        $('#container').each(function(){
			$(this).animate(
				{
					backgroundPositionX: mouseXPercent+"%"
				},
				{
					duration: 50, 
					queue: false, 
					easing: 'linear'}
				); 
		});
	});
});	