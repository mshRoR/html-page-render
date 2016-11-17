/**
 * Created by shajed on 11/17/16.
 */
$(document).ready(function (){
//	var newURL = window.location.protocol + "//" + window.location.host + "/" + window.location.pathname;
//	console.log(newURL);
//	if (a.indexOf('html') > -1) { //Check of html String in URL.
//	   url.substring(0, newURL.lastIndexOf("."));
//	}
//  $.get("app/home.html", function (data) {
//    $("div#main-body").append(data);
//  });
  pageRender('app/home.html');
  link = document.location.href;
  window.history.replaceState(null, null, link.split('.html')[0]);
});

$('a.app-content').click(function(){
  var page =  $(this).data('content');
  var path = 'app/'+ page +'.html';
  pageRender(path);
});

function pageRender(page){
  $.get(page, function (data) {
    $("div#main-body").html(data);
  });
}
