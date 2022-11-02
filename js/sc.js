$(function ()
{
$("#navbar-tog").blur(function(event)

 {
 	var screenwidth = window.innerWidth();
 
 	if (screenwidth< 760) {
 		$("#collapse-target").collapse('hide');
 	}
 }
 );
});
(function(global)

{
var dc ={} ;
var homeHTML = "../mypage.html";
var inserthtml(selector,html)
{
    var tagetelem= document.querySelector(selector);
    targetelem.innerHTML=html;
};
var showloading=function(selector)
{
 
};
// On page load (before images or CSS)
document.addEventListener("DOMContentLoaded", function (event) {

// On first load, show home view
showLoading("#main-content");
$ajaxUtils.sendGetRequest(
  homeHtml,
  function (responseText) {
    document.querySelector("#main-content")
      .innerHTML = responseText;
  },
  false);
});


global.$dc = dc;

}
);