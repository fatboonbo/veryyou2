define("index_main",["text!version-css.json?bust="+(new Date).getTime()],function(e){e=JSON.parse(e),requirejs.config({urlArgs:"v="+e.v});var n="css/act.css?v="+e.v,s=document.createElement("link");s.href=n,s.rel="preload",s.as="style",s.id="cssstyle",document.head.appendChild(s),l("act.css loaded"),$("#cssstyle").attr("onload",'this.onload=null;this.rel="stylesheet"'),l("act.css applied"),(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))&&require(["libs/modules/cache-css"],function(){require(["css!../css/act.css"]),l("act.css")}),$(document).ready(function(){function e(){n&&$(window).width()>=1024?($(".section-index-banner.wrapper").after($(".section-index-news.wrapper")),n=!1):!n&&$(window).width()<1024&&($(".section-banner .left").append($(".section-index-news.wrapper")),n=!0)}e();var n=!0;$(window).resize(e)}),l("index-main fully loaded")});