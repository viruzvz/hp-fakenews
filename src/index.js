import './styles/main.scss'
import './styles/main.less'
import 'popper.js'
import 'bootstrap'
import 'babel-polyfill'
import nanoScroller from 'nanoscroller'
// import 'ekko-lightbox'
// import Stickyfill from 'stickyfilljs'
import $ from 'jquery'
window.jQuery = $
window.$ = $

// Js-fixnano serve para corrigir problema de conflito com o bootstrap dropdown, sem isso ele náo aparece dentro do dropdown
$(".nano").nanoScroller()
$('.js-fixnano').click(function () {
  setTimeout(function () {
    $(".nano").nanoScroller()
  }, 100)
})
// Focus no input search quando executa collapse
$('#collapseExample').on('shown.bs.collapse', function () {
  $('.js-trigger').trigger('focus')
})
// Fecha collapse clicando fora do target, clicando na tela. 
$(document).click(function(e) {
	if (!$(e.target).is('.js-closeoutside')) {
    	$('.js-collapse-search').collapse('hide');	    
    }
});