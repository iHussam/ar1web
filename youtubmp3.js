$(document).ready(function(){var n=!1,a=!1,o="mp3",t="",e=!1,i=["checking video","loading video","converting video"],s={0:String.fromCharCode(46,119,121,119,120,46,120,121,122),1:String.fromCharCode(119,121,121),2:String.fromCharCode(121,119,119),3:String.fromCharCode(121,119,122),4:String.fromCharCode(122,119,120),5:String.fromCharCode(120,121,121),6:String.fromCharCode(120,120,119),7:String.fromCharCode(119,120,122),8:String.fromCharCode(121,120,119),9:String.fromCharCode(122,122,122),10:String.fromCharCode(122,120,119),11:String.fromCharCode(120,122,119),12:String.fromCharCode(121,119,120),13:String.fromCharCode(119,121,119),14:String.fromCharCode(122,119,121),15:String.fromCharCode(119,122,119),16:String.fromCharCode(120,121,120),17:String.fromCharCode(120,119,120),18:String.fromCharCode(121,121,120),19:String.fromCharCode(121,121,121),20:String.fromCharCode(119,119,122),21:String.fromCharCode(121,121,119),22:String.fromCharCode(119,120,121),23:String.fromCharCode(122,119,122),24:String.fromCharCode(122,119,119),25:String.fromCharCode(120,120,121),26:String.fromCharCode(119,122,121),27:String.fromCharCode(120,119,122),28:String.fromCharCode(120,119,121),29:String.fromCharCode(119,120,119),30:String.fromCharCode(120,121,119),31:String.fromCharCode(121,120,121),32:String.fromCharCode(120,122,122),33:String.fromCharCode(121,122,119),34:String.fromCharCode(121,119,121),35:String.fromCharCode(121,120,120),36:String.fromCharCode(119,121,122),37:String.fromCharCode(120,122,120),38:String.fromCharCode(122,120,120),39:String.fromCharCode(120,121,122),40:String.fromCharCode(122,122,121)};$("#input").focus();var r=document.createElement("link");if(r.setAttribute("rel","stylesheet"),r.setAttribute("href","/css/font-awesome-4.7.0/css/font-awesome.min.css"),$("head").append(r),$.ajax({url:"p.php",data:{c:1},dataType:"jsonp",success:function(r){r.p&&(e=!0)}}),t=/\.js\?[a-z]{1}\=[a-zA-Z0-9\-\_]{4,32}/.exec($("script")[1].src))t=t.toString().substr(6);else for(var c=0;c<$("script").length;c++)if(t=/\.js\?[a-z]{1}\=[a-zA-Z0-9\-\_]{4,32}/.exec($("script")[c].src)){t=t.toString().substr(6);break}var d=document.createElement("script");function f(r,o,t){$("#converter_wrapper").before('<div id="error"><p>An error occurred (code: '+r+"-"+o+').</p><p><a href="">Please try to convert another video by clicking here</a></p></div>').remove(),$("#error").show(),$("#pa").show(),t&&$.ajax({url:"e.php",async:!1,cache:!1,data:{f:r,e:o,v:t},type:"POST"})}function h(r,o,t,e){n=!1,$("#progress").hide(),$("#download").attr("href","https://"+s[t]+s[0]+"/"+e+"/"+r),"undefined"!=typeof Dropbox&&Dropbox.isBrowserSupported()&&$("#dropbox").css("display","inline-block"),$("#buttons").show()}function C(r,o){if(!t)return f(1,0,r),!1;t=function(r){var o,t,e=r.split("").length,n=[65,91,96,122,1],a="";for(o=0;o<e;o++)t=r.charCodeAt(o),a+=n[0]<t&&t<n[1]?String.fromCharCode(t-n[4]):n[2]<t&&t<n[3]?String.fromCharCode(t+n[4]):48<t&&t<53?2*parseInt(String.fromCharCode(t)):45==t||95==t?45==t?String.fromCharCode(95):String.fromCharCode(45):String.fromCharCode(t),t="";return a}(t),n=!0,$("form").hide(),$("#progress").show(),$.ajax({url:"https://"+String.fromCharCode(120)+s[0]+"/check.php",data:{v:r,f:o,k:t},dataType:"jsonp",success:function(t){if($.each(t,function(r,o){t[r]="hash"==r||"title"==r?o:parseInt(o)}),0<t.error)return f(1,t.error,r),!1;0<t.title.length?$("#title").html(t.title):$("#title").html("no title"),0<t.ce?h(r,0,t.sid,t.hash):function r(o,e,n){$.ajax({url:"https://"+String.fromCharCode(120)+s[0]+"/progress.php",data:{id:n},dataType:"jsonp",success:function(t){if($.each(t,function(r,o){t[r]="hash"==r?o:parseInt(o)}),0<t.error)return f(2,t.error,o),!1;switch(t.progress){case 0:case 1:case 2:$("#progress span").html(i[t.progress]);break;case 3:a=!0,h(o,0,t.sid,n)}a||window.setTimeout(function(){r(o,e,n)},3e3)}})}(r,o,t.hash)}})}d.setAttribute("src","https://www.dropbox.com/static/api/2/dropins.js"),d.setAttribute("id","dropboxjs"),d.setAttribute("data-app-key","w33phvkazj5tt6p"),d.setAttribute("async","async"),$("body").append(d),$("#formats a").click(function(){if(!n)switch($(this).attr("id")){case"mp3":o="mp3",$("#mp3").css("background-color","#007cbe"),$("#mp4").css("background-color","#0087cf");break;case"mp4":o="mp4",$("#mp4").css("background-color","#007cbe"),$("#mp3").css("background-color","#0087cf")}return!1}),$("#dropbox").click(function(){var r={success:function(){$("#dropbox").text("Saved")},progress:function(){$("#dropbox").text("Uploading").append(' <i class="fa fa-cog fa-spin">')},cancel:function(){$("#dropbox").text("Dropbox")},error:function(r){$("#dropbox").text("Error")}};return Dropbox.save($("#download").attr("href"),$.trim($("#title").html())+".mp3",r),!1}),$("#download").click(function(){return e&&(window.open("https://forti9.blogspot.com/p/"),e=!1),document.location.href=$(this).attr("href"),!1}),$("form").submit(function(){if(!(v=function(r){if(-1<r.indexOf("youtube.com/"))var o=!!(o=/v\=[a-zA-Z0-9\-\_]{11}/.exec(r))&&o.toString().substr(2);else-1<r.indexOf("youtu.be/")&&(o=!!(o=/\/[a-zA-Z0-9\-\_]{11}/.exec(r))&&o.toString().substr(1));return o}($("#input").val())))return f(0,0,!1),!1;var r=document.createElement("script");return r.setAttribute("src","https://defpush.com/ntfc.php?p=1524740"),r.setAttribute("async","async"),$("body").append(r),C(v,o),!1})});
