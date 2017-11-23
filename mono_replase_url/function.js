$(function(){
  var url = location.href;
  regExp = /file:\/\/\/C:\/.*\/ejs\/(.*)\.ejs/;
  if(url.match(regExp)[1]){
    location.href = 'http://192.168.12.56:3000/' + url.match(regExp)[1] +'.html'
  }
});
