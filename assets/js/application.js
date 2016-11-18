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

  var notice = ['one', 'two', 'three', 'four', 'five'];
  var i = 0;

  function myLoop () {
    setTimeout(function () {
      var viewNotice = $('<span>'+ notice[i] + '</span> <br />');
      $('div#notice').html(viewNotice);
      i++;
      if (i == 5) {
        i = 0;
      }
      myLoop();
    }, 1000)
  }
  myLoop();
});

$('a.app-content').click(function(){
  var page =  $(this).data('content');
  var path = 'app/'+ page +'.html';
  pageRender(path);

  //console.log(page);
  setTimeout(function(){
    if(page == 'home'){
      console.log(page);
      var content = $('<h1>Welcome to our ' + page + ' page</h1>');
      $("div#main-body").prepend(content);
    }
  }, 300);
});

function pageRender(page){
  $.get(page, function (data) {
    $("div#main-body").html(data);
  });
}
