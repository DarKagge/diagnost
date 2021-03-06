$(function() {

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	// fancybox
	$("a.modal").fancybox();
});

//Форма отправки 2.0
$(function() {
	$("[name=send]").click(function () {
		$(":input.error").removeClass('error');
		$(".allert").remove();

		var error;
		var btn = $(this);
		var ref = btn.closest('form').find('[required]');
		var msg = btn.closest('form').find('input, textarea');
		var send_btn = btn.closest('form').find('[name=send]');
		var send_options = btn.closest('form').find('[name=campaign_token]');

		$(ref).each(function() {
			if ($(this).val() == '') {
				var errorfield = $(this);
				$(this).addClass('error').parent('.field').append('<div class="allert"><span>Заполните это поле</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
				error = 1;
				$(":input.error:first").focus();
				return;
			} else {
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				if ($(this).attr("type") == 'email') {
					if(!pattern.test($(this).val())) {
						$("[name=email]").val('');
						$(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный e-mail</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
						error = 1;
						$(":input.error:first").focus();
					}
				}
				var patterntel = /^()[0-9]{9,18}/i;
				if ( $(this).attr("type") == 'tel') {
					if(!patterntel.test($(this).val())) {
						$("[name=phone]").val('');
						$(this).addClass('error').parent('.field').append('<div class="allert"><span>Укажите коректный номер телефона</span><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></div>');
						error = 1;
						$(":input.error:first").focus();
					}
				}
			}
		});
		if(!(error==1)) {
			$(send_btn).each(function() {
				$(this).attr('disabled', true);
			});
			$(send_options).each(function() {
				var form = $(this).closest('form'), name = form.find('.name').val();
				if ($(this).val() == '') {
					$.ajax({
						type: 'POST',
						url: 'mail.php',
						data: msg,
						success: function() {
							$( "#modal_callback_ok h4" ).remove();
							$( "#modal_callback_ok" ).prepend("<h4>"+name+",</h4>");
							$('form').trigger("reset");
							setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
							// Настройки модального окна после удачной отправки
							$(".fancybox-close").click();
							$('div.md-show').removeClass('md-show');
							$("#call_ok")[0].click();
						},
						error: function(xhr, str) {
							alert('Возникла ошибка: ' + xhr.responseCode);
						}
					});
				} else {
					$.ajax({
						type: 'POST',
						url: 'mail.php',
						data: msg,
						success:
							$.ajax({
								type: 'POST',
								url: 'https://app.getresponse.com/add_subscriber.html',
								data: msg,
								statusCode: {0:function() {
									$( "#modal_callback_ok h4" ).remove();
									$( "#modal_callback_ok" ).prepend("<h4>"+name+",</h4>");
									$('form').trigger("reset");
									setTimeout(function(){  $("[name=send]").removeAttr("disabled"); }, 1000);
									$(".fancybox-close").click();
									// Настройки модального окна после удачной отправки
									$('div.md-show').removeClass('md-show');
									$("#call_ok")[0].click();
								}}
							}),
						error:  function(xhr, str) {
							alert('Возникла ошибка: ' + xhr.responseCode);
						}
					});
				}
			});
		}
		return false;
	})
});





		var autoplaySlider = $('#adaptive').lightSlider({
			adaptiveHeight:true,
			item:1,
			slideMargin:0,
			controls:false,
			loop:true
		});
		$(".left-arrow-r a").on("click",function (e) {
			e.preventDefault();
			autoplaySlider.goToPrevSlide();
		});
		$(".right-arrow-r a").on("click",function (e) {
			e.preventDefault();
			autoplaySlider.goToNextSlide();
		});



	$('.hamburger').on('click',function(){
		$(this).toggleClass('is-active');
		$(".head-menu").toggleClass('is-active');
	});
	$(document).on("click",function(event){
		if( $(event.target).closest(".head-menu,.hamburger").length )return;
		$('.hamburger').removeClass('is-active');
		$(".head-menu").removeClass('is-active');
		event.stopPropagation();
	});





		var adaptive = $('#adapt').lightSlider({
			adaptiveHeight:true,
			item:1,
			slideMargin:0,
			controls:false,
			loop:true
		});
		$(".left-arrow-a a").on("click",function (e) {
			e.preventDefault();
			adaptive.goToPrevSlide();
		});
		$(".right-arrow-a a").on("click",function (e) {
			e.preventDefault();
			adaptive.goToNextSlide();
		});









	var lightGallery = $('#imageGallery').lightSlider({
		gallery:true,
		item:1,
		loop:true,
		thumbItem:6,
		controls:false,
		slideMargin:0,
		enableDrag: false,
		currentPagerPosition:'left',
		onSliderLoad: function(el) {
			el.lightGallery({
				selector: '#imageGallery .lslide'
			});
		}
	});
	$(".left-arrow-pt a").on("click",function (e) {
		e.preventDefault();
		lightGallery.goToPrevSlide();
	});
	$(".right-arrow-pt a").on("click",function (e) {
		e.preventDefault();
		lightGallery.goToNextSlide();
	});









	var proverka = $('#proverka').lightSlider({
		adaptiveHeight:true,
		pager:false,
		item:1,
		slideMargin:0,
		controls:false,
		loop:true
	});
	$(".left-arrow-r a").on("click",function (e) {
		e.preventDefault();
		proverka.goToPrevSlide();
	});
	$(".right-arrow-r a").on("click",function (e) {
		e.preventDefault();
		proverka.goToNextSlide();
	});




	$('.open-popup-link').magnificPopup({
		type:'inline',
		midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
	});