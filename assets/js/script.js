/* som ao clicar em cada nota */
$('div').click(function(){
	var classe = $(this).attr('class').split(' ')[0];
	var notaSom = new Audio();
    notaSom.src = 'assets/audios/'+classe+'.mp3';
    notaSom.play();
});

/* efeito no css ao clicar na nota */
$('.nota').mousedown(function(){
    $(this).css({'height' : '295px' , 'box-shadow' : 'inset 0 0 20px #333333' });
});
 $('.nota').mouseout(function(){
    $(this).css({'height' : '300px' , 'box-shadow' : 'inset 0 0 10px #333333' });
 });
 $('.sustenido').mousedown(function(e){
 	var e = e || window.event;
	e.stopPropagation();
    $(this).css('border-width' , '1px 3px 4px');
});
 $('.sustenido').mouseout(function(e){
 	var e = e || window.event;
	e.stopPropagation();
    $(this).css('border-width' , '1px 3px 8px');
 });