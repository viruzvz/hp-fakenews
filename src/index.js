import './styles/main.scss'
import './styles/main.less'
import 'popper.js'
import 'bootstrap'
import 'babel-polyfill'
import $ from 'jquery'
window.jQuery = $
window.$ = $
$('#myTabs a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
  })