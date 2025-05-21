(function($){$.headerBuilder=function(){var $header=$('.site-header'),$stickyElements=$('.header-sticky-row'),$firstSticky='',$window=$(window),isSticked=!1,stickAfter=100,cloneHTML='',previousScroll;$stickyElements.each(function(){var $this=$(this);if($this[0].offsetHeight>10){$firstSticky=$this;return!1}});if(!$header.hasClass('header-with-sticky-template')){var $adminBar=$('#wpadminbar');var headerHeight=$header.find('.header-wrapper')[0].offsetHeight;var adminBarHeight=$adminBar.length>0?$adminBar[0].offsetHeight:0;if(!$header.hasClass('header-with-sticky-template')){if($firstSticky.length===0||$firstSticky[0].offsetHeight<10){return}
if(!$header.hasClass('header-transparent')){$header.addClass('header-sticky-prepared').css({paddingTop:headerHeight})}
stickAfter=$firstSticky.offset().top-adminBarHeight}}
if($header.hasClass('header-with-sticky-template')){$header=$header.next('.header-sticky-template')}
$window.on('scroll',function(){var $header=$('.site-header'),$stickyElements=$('.header-sticky-row'),$firstSticky='',$window=$(window),previousScroll;var after=stickAfter;var currentScroll=$window.scrollTop();var windowHeight=$window.height();var documentHeight=$(document).height();if(currentScroll>after){$header.addClass('sticky-active');if($header.hasClass('header-light')){$header.addClass('header-light-disabled');$header.removeClass('header-light')}
menuDropdownRecalc()}else{$header.removeClass('sticky-active');if($header.hasClass('header-light-disabled')){$header.addClass('header-light');$header.removeClass('header-light-disabled')}
menuDropdownRecalc()}
previousScroll=currentScroll});function stickHeader(){$header.addClass('sticky-active');if($header.hasClass('header-light')){$header.addClass('header-light-disabled');$header.removeClass('header-light')}
menuDropdownRecalc()}
function unstickHeader(){if(!isSticked){return}
isSticked=!1;$header.removeClass('sticky-active');if($header.hasClass('header-light-disabled')){$header.addClass('header-light');$header.removeClass('header-light-disabled')}
menuDropdownRecalc()}
function menuDropdownRecalc(){if(!$header.hasClass('header-boxed')){return}
$('.header-offsets-calculated .header-dropdown-menu').attr('style','');$('.header-offsets-calculated').removeClass('header-offsets-calculated')}};$(document).on('ready',function(){$.headerBuilder()})})(jQuery)