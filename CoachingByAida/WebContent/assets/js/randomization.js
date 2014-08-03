$(function() {
	var images = [ 'sunrise01.jpg', 'sunrise02.jpg', 'sunrise03.jpg',
	               'sunrise05.jpg', 'sunrise06.jpg', 'sunrise07.jpg',
	               'sunrise08.jpg', 'sunrise09.jpg', 'sunrise10.jpg', 
	               'sunrise12.jpg' ];
	$('#home1').css(
			{
				'background-image' : 'url(assets/img/cover/'
					+ images[Math.floor(Math.random()
							* images.length)] + ')'
			});
});