// _modal-window.js
var modal = (function(){
	var $window = $(window);
	var $modal = $('div.modal');
	var $content = $('div.content');
	var $close = $('button.close');

	$modal.append($content,$close);

	// $close.on('click',function(e){
	// 	e.preventDefault();
	// 	modal.close();
	// });

	return{
		center: function(){
			var top = Math.max($window.height() - $modal.outerHeight(),0) / 2;
			var left = Math.max($window.width() - $modal.outerWidth(),0) / 2;
			$modal.css({
				top: top + $window.scrollTop(),
				left: left + $window.scrollLeft(),
				'background-color': '#fdfdfd',
				'border': '2px solid #9E544C',
				'border-radius': '10px',
				'padding': '5px 10px 5px 10px'
			});
			$content.css({
				'padding': '5px 10px 5px 10px'
			});
			$close.css({

			})
		},
		open: function(settings){
			$content.empty().append(settings.content);
			$modal.css({
				width: settings.width || 'auto', // width = to passed 'settings' value, OR takes on auto value
				height: settings.height || 'auto'
			}).appendTo('body');
			modal.center();
			$(window).on('resize',modal.center);
		},
		close: function(){
			$content.empty();
			$modal.detach();
			$(window).off('resize', modal.center);
			$('body *:not(div.modal)').delay(375).fadeIn(1000).css('opacity','1');
			$('form > *, button').removeAttr('disabled');
		}
	};
}());