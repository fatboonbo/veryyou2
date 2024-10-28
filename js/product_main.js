!function(t,e,i,n){var o=t(e);t.fn.lazyload=function(a){function s(){var e=0;d.each(function(){var i=t(this);if(!l.skip_invisible||i.is(":visible"))if(t.abovethetop(this,l)||t.leftofbegin(this,l));else if(t.belowthefold(this,l)||t.rightoffold(this,l)){if(++e>l.failure_limit)return!1}else i.trigger("appear"),e=0})}var r,d=this,l={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:e,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return a&&(n!==a.failurelimit&&(a.failure_limit=a.failurelimit,delete a.failurelimit),n!==a.effectspeed&&(a.effect_speed=a.effectspeed,delete a.effectspeed),t.extend(l,a)),r=l.container===n||l.container===e?o:t(l.container),0===l.event.indexOf("scroll")&&r.bind(l.event,function(){return s()}),this.each(function(){var e=this,i=t(e);e.loaded=!1,(i.attr("src")===n||!1===i.attr("src"))&&i.is("img")&&i.attr("src",l.placeholder),i.one("appear",function(){if(!this.loaded){if(l.appear){var n=d.length;l.appear.call(e,n,l)}t("<img />").bind("load",function(){var n=i.attr("data-"+l.data_attribute);i.hide(),i.is("img")?i.attr("src",n):i.css("background-image","url('"+n+"')"),i[l.effect](l.effect_speed),e.loaded=!0;var o=t.grep(d,function(t){return!t.loaded});if(d=t(o),l.load){var a=d.length;l.load.call(e,a,l)}}).attr("src",i.attr("data-"+l.data_attribute))}}),0!==l.event.indexOf("scroll")&&i.bind(l.event,function(){e.loaded||i.trigger("appear")})}),o.bind("resize",function(){s()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&o.bind("pageshow",function(e){e.originalEvent&&e.originalEvent.persisted&&d.each(function(){t(this).trigger("appear")})}),t(i).ready(function(){s()}),this},t.belowthefold=function(i,a){return(a.container===n||a.container===e?(e.innerHeight?e.innerHeight:o.height())+o.scrollTop():t(a.container).offset().top+t(a.container).height())<=t(i).offset().top-a.threshold},t.rightoffold=function(i,a){return(a.container===n||a.container===e?o.width()+o.scrollLeft():t(a.container).offset().left+t(a.container).width())<=t(i).offset().left-a.threshold},t.abovethetop=function(i,a){return(a.container===n||a.container===e?o.scrollTop():t(a.container).offset().top)>=t(i).offset().top+a.threshold+t(i).height()},t.leftofbegin=function(i,a){return(a.container===n||a.container===e?o.scrollLeft():t(a.container).offset().left)>=t(i).offset().left+a.threshold+t(i).width()},t.inviewport=function(e,i){return!(t.rightoffold(e,i)||t.leftofbegin(e,i)||t.belowthefold(e,i)||t.abovethetop(e,i))},t.extend(t.expr[":"],{"below-the-fold":function(e){return t.belowthefold(e,{threshold:0})},"above-the-top":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-screen":function(e){return t.rightoffold(e,{threshold:0})},"left-of-screen":function(e){return!t.rightoffold(e,{threshold:0})},"in-viewport":function(e){return t.inviewport(e,{threshold:0})},"above-the-fold":function(e){return!t.belowthefold(e,{threshold:0})},"right-of-fold":function(e){return t.rightoffold(e,{threshold:0})},"left-of-fold":function(e){return!t.rightoffold(e,{threshold:0})}})}(jQuery,window,document),window.matchMedia=window.matchMedia||function(t,e){var i,n=t.documentElement,o=n.firstElementChild||n.firstChild,a=t.createElement("body"),s=t.createElement("div");return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",a.appendChild(s),function(t){return s.innerHTML='&shy;<style media="'+t+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(a,o),i=42==s.offsetWidth,n.removeChild(a),{matches:i,media:t}}}(document),define("lazy2",function(){}),function(t){t.fn.theiaStickySidebar=function(e){function i(e,i){return!0===e.initialized||!(t("body").width()<e.minWidth)&&(n(e,i),!0)}function n(e,i){e.initialized=!0,t("head").append(t('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),i.each(function(){function i(){a.fixedScrollTop=0,a.sidebar.css({"min-height":"1px"}),a.stickySidebar.css({position:"static",width:"",transform:"none"})}function n(e){var i=e.height();return e.children().each(function(){i=Math.max(i,t(this).height())}),i}var a={};if(a.sidebar=t(this),a.options=e||{},a.container=t(a.options.containerSelector),0==a.container.length&&(a.container=a.sidebar.parent()),a.sidebar.parents().css("-webkit-transform","none"),a.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),a.stickySidebar=a.sidebar.find(".theiaStickySidebar"),0==a.stickySidebar.length){var s=/(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;a.sidebar.find("script").filter(function(t,e){return 0===e.type.length||e.type.match(s)}).remove(),a.stickySidebar=t("<div>").addClass("theiaStickySidebar").append(a.sidebar.children()),a.sidebar.append(a.stickySidebar)}a.marginBottom=parseInt(a.sidebar.css("margin-bottom")),a.paddingTop=parseInt(a.sidebar.css("padding-top")),a.paddingBottom=parseInt(a.sidebar.css("padding-bottom"));var r=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight();a.stickySidebar.css("padding-top",1),a.stickySidebar.css("padding-bottom",1),r-=a.stickySidebar.offset().top,d=a.stickySidebar.outerHeight()-d-r,0==r?(a.stickySidebar.css("padding-top",0),a.stickySidebarPaddingTop=0):a.stickySidebarPaddingTop=1,0==d?(a.stickySidebar.css("padding-bottom",0),a.stickySidebarPaddingBottom=0):a.stickySidebarPaddingBottom=1,a.previousScrollTop=null,a.fixedScrollTop=0,i(),a.onScroll=function(a){if(a.stickySidebar.is(":visible"))if(t("body").width()<a.options.minWidth)i();else if(a.options.disableOnResponsiveLayouts&&a.sidebar.outerWidth("none"==a.sidebar.css("float"))+50>a.container.width())i();else{var s=t(document).scrollTop(),r="static";if(s>=a.sidebar.offset().top+(a.paddingTop-a.options.additionalMarginTop)){var d,l=a.paddingTop+e.additionalMarginTop,c=a.paddingBottom+a.marginBottom+e.additionalMarginBottom,h=a.sidebar.offset().top,f=a.sidebar.offset().top+n(a.container),u=0+e.additionalMarginTop;d=a.stickySidebar.outerHeight()+l+c<t(window).height()?u+a.stickySidebar.outerHeight():t(window).height()-a.marginBottom-a.paddingBottom-e.additionalMarginBottom;var p=h-s+a.paddingTop,g=f-s-a.paddingBottom-a.marginBottom,m=a.stickySidebar.offset().top-s,b=a.previousScrollTop-s;"fixed"==a.stickySidebar.css("position")&&"modern"==a.options.sidebarBehavior&&(m+=b),"stick-to-top"==a.options.sidebarBehavior&&(m=e.additionalMarginTop),"stick-to-bottom"==a.options.sidebarBehavior&&(m=d-a.stickySidebar.outerHeight()),m=b>0?Math.min(m,u):Math.max(m,d-a.stickySidebar.outerHeight()),m=Math.max(m,p),m=Math.min(m,g-a.stickySidebar.outerHeight());var v=a.container.height()==a.stickySidebar.outerHeight();r=!v&&m==u||!v&&m==d-a.stickySidebar.outerHeight()?"fixed":s+m-a.sidebar.offset().top-a.paddingTop<=e.additionalMarginTop?"static":"absolute"}if("fixed"==r){var y=t(document).scrollLeft();a.stickySidebar.css({position:"fixed",width:o(a.stickySidebar)+"px",transform:"translateY("+m+"px)",left:a.sidebar.offset().left+parseInt(a.sidebar.css("padding-left"))-y+"px",top:"0px"})}else if("absolute"==r){var w={};"absolute"!=a.stickySidebar.css("position")&&(w.position="absolute",w.transform="translateY("+(s+m-a.sidebar.offset().top-a.stickySidebarPaddingTop-a.stickySidebarPaddingBottom)+"px)",w.top="0px"),w.width=o(a.stickySidebar)+"px",w.left="",a.stickySidebar.css(w)}else"static"==r&&i();"static"!=r&&1==a.options.updateSidebarHeight&&a.sidebar.css({"min-height":a.stickySidebar.outerHeight()+a.stickySidebar.offset().top-a.sidebar.offset().top+a.paddingBottom}),a.previousScrollTop=s}},a.onScroll(a),t(document).scroll(function(t){return function(){t.onScroll(t)}}(a)),t(window).resize(function(t){return function(){t.stickySidebar.css({position:"static"}),t.onScroll(t)}}(a)),"undefined"!=typeof ResizeSensor&&new ResizeSensor(a.stickySidebar[0],function(t){return function(){t.onScroll(t)}}(a))})}function o(t){var e;try{e=t[0].getBoundingClientRect().width}catch(t){}return void 0===e&&(e=t.width()),e}var a={containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern"};(e=t.extend(a,e)).additionalMarginTop=parseInt(e.additionalMarginTop)||0,e.additionalMarginBottom=parseInt(e.additionalMarginBottom)||0,function(e,n){i(e,n)||(console.log("TSS: Body width smaller than options.minWidth. Init is delayed."),t(document).scroll(function(e,n){return function(o){i(e,n)&&t(this).unbind(o)}}(e,n)),t(window).resize(function(e,n){return function(o){i(e,n)&&t(this).unbind(o)}}(e,n)))}(e,this)}}(jQuery),define("stickysidebar",function(){}),function(t){"use strict";function e(t,i){if(!(this instanceof e)){var n=new e(t,i);return n.open(),n}this.id=e.id++,this.setup(t,i),this.chainCallbacks(e._callbackChain)}function i(t,e){var i={};for(var n in t)n in e&&(i[n]=t[n],delete t[n]);return i}function n(t,e){var i={},n=new RegExp("^"+e+"([A-Z])(.*)");for(var o in t){var a=o.match(n);if(a){i[(a[1]+a[2].replace(/([A-Z])/g,"-$1")).toLowerCase()]=t[o]}}return i}if(void 0===t)return void("console"in window&&window.console.info("Too much lightness, Featherlight needs jQuery."));var o=[],a=function(e){return o=t.grep(o,function(t){return t!==e&&t.$instance.closest("body").length>0})},s={allowfullscreen:1,frameborder:1,height:1,longdesc:1,marginheight:1,marginwidth:1,name:1,referrerpolicy:1,scrolling:1,sandbox:1,src:1,srcdoc:1,width:1},r={keyup:"onKeyUp",resize:"onResize"},d=function(i){t.each(e.opened().reverse(),function(){return i.isDefaultPrevented()||!1!==this[r[i.type]](i)?void 0:(i.preventDefault(),i.stopPropagation(),!1)})},l=function(i){if(i!==e._globalHandlerInstalled){e._globalHandlerInstalled=i;var n=t.map(r,function(t,i){return i+"."+e.prototype.namespace}).join(" ");t(window)[i?"on":"off"](n,d)}};e.prototype={constructor:e,namespace:"featherlight",targetAttr:"data-featherlight",variant:null,resetCss:!1,background:null,openTrigger:"click",closeTrigger:"click",filter:null,root:"body",openSpeed:250,closeSpeed:250,closeOnClick:"background",closeOnEsc:!0,closeIcon:"&#10005;",loading:"",persist:!1,otherClose:null,beforeOpen:t.noop,beforeContent:t.noop,beforeClose:t.noop,afterOpen:t.noop,afterContent:t.noop,afterClose:t.noop,onKeyUp:t.noop,onResize:t.noop,type:null,contentFilters:["jquery","image","html","ajax","iframe","text"],setup:function(e,i){"object"!=typeof e||e instanceof t!=0||i||(i=e,e=void 0);var n=t.extend(this,i,{target:e}),o=n.resetCss?n.namespace+"-reset":n.namespace,a=t(n.background||['<div class="'+o+"-loading "+o+'">','<div class="'+o+'-content">','<button class="'+o+"-close-icon "+n.namespace+'-close" aria-label="Close">',n.closeIcon,"</button>",'<div class="'+n.namespace+'-inner">'+n.loading+"</div>","</div>","</div>"].join("")),s="."+n.namespace+"-close"+(n.otherClose?","+n.otherClose:"");return n.$instance=a.clone().addClass(n.variant),n.$instance.on(n.closeTrigger+"."+n.namespace,function(e){var i=t(e.target);("background"===n.closeOnClick&&i.is("."+n.namespace)||"anywhere"===n.closeOnClick||i.closest(s).length)&&(n.close(e),e.preventDefault())}),this},getContent:function(){if(!1!==this.persist&&this.$content)return this.$content;var e=this,i=this.constructor.contentFilters,n=function(t){return e.$currentTarget&&e.$currentTarget.attr(t)},o=n(e.targetAttr),a=e.target||o||"",s=i[e.type];if(!s&&a in i&&(s=i[a],a=e.target&&o),a=a||n("href")||"",!s)for(var r in i)e[r]&&(s=i[r],a=e[r]);if(!s){var d=a;if(a=null,t.each(e.contentFilters,function(){return s=i[this],s.test&&(a=s.test(d)),!a&&s.regex&&d.match&&d.match(s.regex)&&(a=d),!a}),!a)return"console"in window&&window.console.error("Featherlight: no content filter found "+(d?' for "'+d+'"':" (no target specified)")),!1}return s.process.call(e,a)},setContent:function(e){var i=this;return e.is("iframe")&&i.$instance.addClass(i.namespace+"-iframe"),i.$instance.removeClass(i.namespace+"-loading"),i.$instance.find("."+i.namespace+"-inner").not(e).slice(1).remove().end().replaceWith(t.contains(i.$instance[0],e[0])?"":e),i.$content=e.addClass(i.namespace+"-inner"),i},open:function(e){var i=this;if(i.$instance.hide().appendTo(i.root),!(e&&e.isDefaultPrevented()||!1===i.beforeOpen(e))){e&&e.preventDefault();var n=i.getContent();if(n)return o.push(i),l(!0),i.$instance.fadeIn(i.openSpeed),i.beforeContent(e),t.when(n).always(function(t){i.setContent(t),i.afterContent(e)}).then(i.$instance.promise()).done(function(){i.afterOpen(e)})}return i.$instance.detach(),t.Deferred().reject().promise()},close:function(e){var i=this,n=t.Deferred();return!1===i.beforeClose(e)?n.reject():(0===a(i).length&&l(!1),i.$instance.fadeOut(i.closeSpeed,function(){i.$instance.detach(),i.afterClose(e),n.resolve()})),n.promise()},resize:function(t,e){if(t&&e){this.$content.css("width","").css("height","");var i=Math.max(t/(parseInt(this.$content.parent().css("width"),10)-1),e/(parseInt(this.$content.parent().css("height"),10)-1));i>1&&(i=e/Math.floor(e/i),this.$content.css("width",t/i+"px").css("height",e/i+"px"))}},chainCallbacks:function(e){for(var i in e)this[i]=t.proxy(e[i],this,t.proxy(this[i],this))}},t.extend(e,{id:0,autoBind:"[data-featherlight]",defaults:e.prototype,contentFilters:{jquery:{regex:/^[#.]\w/,test:function(e){return e instanceof t&&e},process:function(e){return!1!==this.persist?t(e):t(e).clone(!0)}},image:{regex:/\.(png|jpg|jpeg|gif|tiff|bmp|svg)(\?\S*)?$/i,process:function(e){var i=this,n=t.Deferred(),o=new Image,a=t('<img src="'+e+'" alt="" class="'+i.namespace+'-image" />');return o.onload=function(){a.naturalWidth=o.width,a.naturalHeight=o.height,n.resolve(a)},o.onerror=function(){n.reject(a)},o.src=e,n.promise()}},html:{regex:/^\s*<[\w!][^<]*>/,process:function(e){return t(e)}},ajax:{regex:/./,process:function(e){var i=t.Deferred(),n=t("<div></div>").load(e,function(t,e){"error"!==e&&i.resolve(n.contents()),i.fail()});return i.promise()}},iframe:{process:function(e){var o=new t.Deferred,a=t("<iframe/>"),r=n(this,"iframe"),d=i(r,s);return a.hide().attr("src",e).attr(d).css(r).on("load",function(){o.resolve(a.show())}).appendTo(this.$instance.find("."+this.namespace+"-content")),o.promise()}},text:{process:function(e){return t("<div>",{text:e})}}},functionAttributes:["beforeOpen","afterOpen","beforeContent","afterContent","beforeClose","afterClose"],readElementConfig:function(e,i){var n=this,o=new RegExp("^data-"+i+"-(.*)"),a={};return e&&e.attributes&&t.each(e.attributes,function(){var e=this.name.match(o);if(e){var i=this.value,s=t.camelCase(e[1]);if(t.inArray(s,n.functionAttributes)>=0)i=new Function(i);else try{i=JSON.parse(i)}catch(t){}a[s]=i}}),a},extend:function(e,i){var n=function(){this.constructor=e};return n.prototype=this.prototype,e.prototype=new n,e.__super__=this.prototype,t.extend(e,this,i),e.defaults=e.prototype,e},attach:function(e,i,n){var o=this;"object"!=typeof i||i instanceof t!=0||n||(n=i,i=void 0),n=t.extend({},n);var a,s=n.namespace||o.defaults.namespace,r=t.extend({},o.defaults,o.readElementConfig(e[0],s),n),d=function(s){var d=t(s.currentTarget),l=t.extend({$source:e,$currentTarget:d},o.readElementConfig(e[0],r.namespace),o.readElementConfig(s.currentTarget,r.namespace),n),c=a||d.data("featherlight-persisted")||new o(i,l);"shared"===c.persist?a=c:!1!==c.persist&&d.data("featherlight-persisted",c),l.$currentTarget.blur&&l.$currentTarget.blur(),c.open(s)};return e.on(r.openTrigger+"."+r.namespace,r.filter,d),d},current:function(){var t=this.opened();return t[t.length-1]||null},opened:function(){var e=this;return a(),t.grep(o,function(t){return t instanceof e})},close:function(t){var e=this.current();return e?e.close(t):void 0},_onReady:function(){var e=this;e.autoBind&&(t(e.autoBind).each(function(){e.attach(t(this))}),t(document).on("click",e.autoBind,function(i){if(!i.isDefaultPrevented()){e.attach(t(i.currentTarget))(i)}}))},_callbackChain:{onKeyUp:function(e,i){return 27===i.keyCode?(this.closeOnEsc&&t.featherlight.close(i),!1):e(i)},beforeOpen:function(e,i){return this._previouslyActive=document.activeElement,this._$previouslyTabbable=t("a, input, select, textarea, iframe, button, iframe, [contentEditable=true]").not("[tabindex]").not(this.$instance.find("button")),this._$previouslyWithTabIndex=t("[tabindex]").not('[tabindex="-1"]'),this._previousWithTabIndices=this._$previouslyWithTabIndex.map(function(e,i){return t(i).attr("tabindex")}),this._$previouslyWithTabIndex.add(this._$previouslyTabbable).attr("tabindex",-1),document.activeElement.blur&&document.activeElement.blur(),e(i)},afterClose:function(e,i){var n=e(i),o=this;return this._$previouslyTabbable.removeAttr("tabindex"),this._$previouslyWithTabIndex.each(function(e,i){t(i).attr("tabindex",o._previousWithTabIndices[e])}),this._previouslyActive.focus(),n},onResize:function(t,e){return this.resize(this.$content.naturalWidth,this.$content.naturalHeight),t(e)},afterContent:function(t,e){var i=t(e);return this.$instance.find("[autofocus]:not([disabled])").focus(),this.onResize(e),i}}}),t.featherlight=e,t.fn.featherlight=function(t,i){return e.attach(this,t,i),this},t(document).ready(function(){e._onReady()})}(jQuery),define("featherlight",function(){}),function(t){"use strict";function e(i,n){if(!(this instanceof e)){var o=new e(t.extend({$source:i,$currentTarget:i.first()},n));return o.open(),o}t.featherlight.apply(this,arguments),this.chainCallbacks(r)}var i=function(t){window.console&&window.console.warn&&window.console.warn("FeatherlightGallery: "+t)};if(void 0===t)return i("Too much lightness, Featherlight needs jQuery.");if(!t.featherlight)return i("Load the featherlight plugin before the gallery plugin");var n="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,o=t.event&&t.event.special.swipeleft&&t,a=window.Hammer&&function(t){var e=new window.Hammer.Manager(t[0]);return e.add(new window.Hammer.Swipe),e},s=n&&(o||a);n&&!s&&i("No compatible swipe library detected; one must be included before featherlightGallery for swipe motions to navigate the galleries.");var r={afterClose:function(t,e){var i=this;return i.$instance.off("next."+i.namespace+" previous."+i.namespace),i._swiper&&(i._swiper.off("swipeleft",i._swipeleft).off("swiperight",i._swiperight),i._swiper=null),t(e)},beforeOpen:function(t,e){var i=this;return i.$instance.on("next."+i.namespace+" previous."+i.namespace,function(t){var e="next"===t.type?1:-1;i.navigateTo(i.currentNavigation()+e)}),s&&(i._swiper=s(i.$instance).on("swipeleft",i._swipeleft=function(){i.$instance.trigger("next")}).on("swiperight",i._swiperight=function(){i.$instance.trigger("previous")}),i.$instance.addClass(this.namespace+"-swipe-aware",s)),i.$instance.find("."+i.namespace+"-content").append(i.createNavigation("previous")).append(i.createNavigation("next")),t(e)},beforeContent:function(t,e){var i=this.currentNavigation(),n=this.slides().length;return this.$instance.toggleClass(this.namespace+"-first-slide",0===i).toggleClass(this.namespace+"-last-slide",i===n-1),t(e)},onKeyUp:function(t,e){var i={37:"previous",39:"next"}[e.keyCode];return i?(this.$instance.trigger(i),!1):t(e)}};t.featherlight.extend(e,{autoBind:"[data-featherlight-gallery]"}),t.extend(e.prototype,{previousIcon:"&#9664;",nextIcon:"&#9654;",galleryFadeIn:100,galleryFadeOut:300,slides:function(){return this.filter?this.$source.find(this.filter):this.$source},images:function(){return i("images is deprecated, please use slides instead"),this.slides()},currentNavigation:function(){return this.slides().index(this.$currentTarget)},navigateTo:function(e){var i=this,n=i.slides(),o=n.length,a=i.$instance.find("."+i.namespace+"-inner");return e=(e%o+o)%o,i.$currentTarget=n.eq(e),i.beforeContent(),t.when(i.getContent(),a.fadeTo(i.galleryFadeOut,.2)).always(function(t){i.setContent(t),i.afterContent(),t.fadeTo(i.galleryFadeIn,1)})},createNavigation:function(e){var i=this;return t('<span title="'+e+'" class="'+this.namespace+"-"+e+'"><span>'+this[e+"Icon"]+"</span></span>").click(function(){t(this).trigger(e+"."+i.namespace)})}}),t.featherlightGallery=e,t.fn.featherlightGallery=function(t){return e.attach(this,t),this},t(document).ready(function(){e._onReady()})}(jQuery),define("fgallery",["featherlight"],function(){}),function(){"use strict";var t,e;t=jQuery,e=function(e,i){var n,o;return this.options=t.extend({title:null,footer:null,remote:null},t.fn.ekkoLightbox.defaults,i||{}),this.$element=t(e),"",this.modal_id=this.options.modal_id?this.options.modal_id:"ekkoLightbox-"+Math.floor(1e3*Math.random()+1),o='<div class="modal-header"'+(this.options.title||this.options.always_show_close?"":' style="display:none"')+'><button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button><h4 class="modal-title">'+(this.options.title||"&nbsp;")+"</h4></div>",n='<div class="modal-footer"'+(this.options.footer?"":' style="display:none"')+">"+this.options.footer+"</div>",t(document.body).append('<div id="'+this.modal_id+'" class="ekko-lightbox modal fade" tabindex="-1"><div class="modal-dialog"><div class="modal-content">'+o+'<div class="modal-body"><div class="ekko-lightbox-container"><div></div></div></div>'+n+"</div></div></div>"),this.modal=t("#"+this.modal_id),this.modal_dialog=this.modal.find(".modal-dialog").first(),this.modal_content=this.modal.find(".modal-content").first(),this.modal_body=this.modal.find(".modal-body").first(),this.modal_header=this.modal.find(".modal-header").first(),this.modal_footer=this.modal.find(".modal-footer").first(),this.lightbox_container=this.modal_body.find(".ekko-lightbox-container").first(),this.lightbox_body=this.lightbox_container.find("> div:first-child").first(),this.showLoading(),this.modal_arrows=null,this.border={top:parseFloat(this.modal_dialog.css("border-top-width"))+parseFloat(this.modal_content.css("border-top-width"))+parseFloat(this.modal_body.css("border-top-width")),right:parseFloat(this.modal_dialog.css("border-right-width"))+parseFloat(this.modal_content.css("border-right-width"))+parseFloat(this.modal_body.css("border-right-width")),bottom:parseFloat(this.modal_dialog.css("border-bottom-width"))+parseFloat(this.modal_content.css("border-bottom-width"))+parseFloat(this.modal_body.css("border-bottom-width")),left:parseFloat(this.modal_dialog.css("border-left-width"))+parseFloat(this.modal_content.css("border-left-width"))+parseFloat(this.modal_body.css("border-left-width"))},this.padding={top:parseFloat(this.modal_dialog.css("padding-top"))+parseFloat(this.modal_content.css("padding-top"))+parseFloat(this.modal_body.css("padding-top")),right:parseFloat(this.modal_dialog.css("padding-right"))+parseFloat(this.modal_content.css("padding-right"))+parseFloat(this.modal_body.css("padding-right")),bottom:parseFloat(this.modal_dialog.css("padding-bottom"))+parseFloat(this.modal_content.css("padding-bottom"))+parseFloat(this.modal_body.css("padding-bottom")),left:parseFloat(this.modal_dialog.css("padding-left"))+parseFloat(this.modal_content.css("padding-left"))+parseFloat(this.modal_body.css("padding-left"))},this.modal.on("show.bs.modal",this.options.onShow.bind(this)).on("shown.bs.modal",function(t){return function(){return t.modal_shown(),t.options.onShown.call(t)}}(this)).on("hide.bs.modal",this.options.onHide.bind(this)).on("hidden.bs.modal",function(e){return function(){return e.gallery&&t(document).off("keydown.ekkoLightbox"),e.modal.remove(),e.options.onHidden.call(e)}}(this)).modal("show",i),this.modal},e.prototype={modal_shown:function(){var e;return this.options.remote?(this.gallery=this.$element.data("gallery"),this.gallery&&("document.body"===this.options.gallery_parent_selector||""===this.options.gallery_parent_selector?this.gallery_items=t(document.body).find('*[data-gallery="'+this.gallery+'"]'):this.gallery_items=this.$element.parents(this.options.gallery_parent_selector).first().find('*[data-gallery="'+this.gallery+'"]'),this.gallery_index=this.gallery_items.index(this.$element),t(document).on("keydown.ekkoLightbox",this.navigate.bind(this)),this.options.directional_arrows&&this.gallery_items.length>1&&(this.lightbox_container.append('<div class="ekko-lightbox-nav-overlay"><a href="#" class="'+this.strip_stops(this.options.left_arrow_class)+'"></a><a href="#" class="'+this.strip_stops(this.options.right_arrow_class)+'"></a></div>'),this.modal_arrows=this.lightbox_container.find("div.ekko-lightbox-nav-overlay").first(),this.lightbox_container.find("a"+this.strip_spaces(this.options.left_arrow_class)).on("click",function(t){return function(e){return e.preventDefault(),t.navigate_left()}}(this)),this.lightbox_container.find("a"+this.strip_spaces(this.options.right_arrow_class)).on("click",function(t){return function(e){return e.preventDefault(),t.navigate_right()}}(this)))),this.options.type?"image"===this.options.type?this.preloadImage(this.options.remote,!0):"youtube"===this.options.type&&(e=this.getYoutubeId(this.options.remote))?this.showYoutubeVideo(e):"vimeo"===this.options.type?this.showVimeoVideo(this.options.remote):"instagram"===this.options.type?this.showInstagramVideo(this.options.remote):"url"===this.options.type?this.loadRemoteContent(this.options.remote):"video"===this.options.type?this.showVideoIframe(this.options.remote):this.error('Could not detect remote target type. Force the type using data-type="image|youtube|vimeo|instagram|url|video"'):this.detectRemoteType(this.options.remote)):this.error("No remote target given")},strip_stops:function(t){return t.replace(/\./g,"")},strip_spaces:function(t){return t.replace(/\s/g,"")},isImage:function(t){return t.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSwf:function(t){return t.match(/\.(swf)((\?|#).*)?$/i)},getYoutubeId:function(t){var e;return!(!(e=t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/))||11!==e[2].length)&&e[2]},getVimeoId:function(t){return t.indexOf("vimeo")>0&&t},getInstagramId:function(t){return t.indexOf("instagram")>0&&t},navigate:function(t){if(t=t||window.event,39===t.keyCode||37===t.keyCode){if(39===t.keyCode)return this.navigate_right();if(37===t.keyCode)return this.navigate_left()}},navigateTo:function(e){var i,n;return 0>e||e>this.gallery_items.length-1?this:(this.showLoading(),this.gallery_index=e,this.$element=t(this.gallery_items.get(this.gallery_index)),this.updateTitleAndFooter(),n=this.$element.attr("data-remote")||this.$element.attr("href"),this.detectRemoteType(n,this.$element.attr("data-type")||!1),this.gallery_index+1<this.gallery_items.length&&(i=t(this.gallery_items.get(this.gallery_index+1),!1),n=i.attr("data-remote")||i.attr("href"),"image"===i.attr("data-type")||this.isImage(n))?this.preloadImage(n,!1):void 0)},navigate_left:function(){return 1!==this.gallery_items.length?(0===this.gallery_index?this.gallery_index=this.gallery_items.length-1:this.gallery_index--,this.options.onNavigate.call(this,"left",this.gallery_index),this.navigateTo(this.gallery_index)):void 0},navigate_right:function(){return 1!==this.gallery_items.length?(this.gallery_index===this.gallery_items.length-1?this.gallery_index=0:this.gallery_index++,this.options.onNavigate.call(this,"right",this.gallery_index),this.navigateTo(this.gallery_index)):void 0},detectRemoteType:function(t,e){var i;return e=e||!1,"image"===e||this.isImage(t)?(this.options.type="image",this.preloadImage(t,!0)):"youtube"===e||(i=this.getYoutubeId(t))?(this.options.type="youtube",this.showYoutubeVideo(i)):"vimeo"===e||(i=this.getVimeoId(t))?(this.options.type="vimeo",this.showVimeoVideo(i)):"instagram"===e||(i=this.getInstagramId(t))?(this.options.type="instagram",this.showInstagramVideo(i)):"video"===e?(this.options.type="video",this.showVideoIframe(t)):(this.options.type="url",this.loadRemoteContent(t))},updateTitleAndFooter:function(){var t,e,i,n;return i=this.modal_content.find(".modal-header"),e=this.modal_content.find(".modal-footer"),n=this.$element.data("title")||"",t=this.$element.data("footer")||"",n||this.options.always_show_close?i.css("display","").find(".modal-title").html(n||"&nbsp;"):i.css("display","none"),t?e.css("display","").html(t):e.css("display","none"),this},showLoading:function(){return this.lightbox_body.html('<div class="modal-loading">'+this.options.loadingMessage+"</div>"),this},showYoutubeVideo:function(t){var e,i,n;return i=null!=this.$element.attr("data-norelated")||this.options.no_related?"&rel=0":"",n=this.checkDimensions(this.$element.data("width")||560),e=n/(560/315),this.showVideoIframe("//www.youtube.com/embed/"+t+"?badge=0&autoplay=1&html5=1"+i,n,e)},showVimeoVideo:function(t){var e,i;return i=this.checkDimensions(this.$element.data("width")||560),e=i/(500/281),this.showVideoIframe(t+"?autoplay=1",i,e)},showInstagramVideo:function(t){var e,i;return i=this.checkDimensions(this.$element.data("width")||612),this.resize(i),e=i+80,this.lightbox_body.html('<iframe width="'+i+'" height="'+e+'" src="'+this.addTrailingSlash(t)+'embed/" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this),this.modal_arrows?this.modal_arrows.css("display","none"):void 0},showVideoIframe:function(t,e,i){return i=i||e,this.resize(e),this.lightbox_body.html('<div class="embed-responsive embed-responsive-16by9"><iframe width="'+e+'" height="'+i+'" src="'+t+'" frameborder="0" allowfullscreen class="embed-responsive-item"></iframe></div>'),this.options.onContentLoaded.call(this),this.modal_arrows&&this.modal_arrows.css("display","none"),this},loadRemoteContent:function(e){var i,n;return n=this.$element.data("width")||560,this.resize(n),i=this.$element.data("disableExternalCheck")||!1,i||this.isExternal(e)?(this.lightbox_body.html('<iframe width="'+n+'" height="'+n+'" src="'+e+'" frameborder="0" allowfullscreen></iframe>'),this.options.onContentLoaded.call(this)):this.lightbox_body.load(e,t.proxy(function(t){return function(){return t.$element.trigger("loaded.bs.modal")}}(this))),this.modal_arrows&&this.modal_arrows.css("display","none"),this},isExternal:function(t){var e;return e=t.match(/^([^:\/?#]+:)?(?:\/\/([^\/?#]*))?([^?#]+)?(\?[^#]*)?(#.*)?/),"string"==typeof e[1]&&e[1].length>0&&e[1].toLowerCase()!==location.protocol||"string"==typeof e[2]&&e[2].length>0&&e[2].replace(new RegExp(":("+{"http:":80,"https:":443}[location.protocol]+")?$"),"")!==location.host},error:function(t){return this.lightbox_body.html(t),this},preloadImage:function(e,i){var n;return n=new Image,null!=i&&!0!==i||(n.onload=function(e){return function(){var i;return i=t("<img />"),i.attr("src",n.src),i.addClass("img-responsive"),e.lightbox_body.html(i),e.modal_arrows&&e.modal_arrows.css("display","block"),i.load(function(){return e.options.scale_height?e.scaleHeight(n.height,n.width):e.resize(n.width),e.options.onContentLoaded.call(e)})}}(this),n.onerror=function(t){return function(){return t.error("Failed to load image: "+e)}}(this)),n.src=e,n},scaleHeight:function(e,i){var n,o,a,s,r,d;return s=this.modal_header.outerHeight(!0)||0,a=this.modal_footer.outerHeight(!0)||0,this.modal_footer.is(":visible")||(a=0),this.modal_header.is(":visible")||(s=0),n=this.border.top+this.border.bottom+this.padding.top+this.padding.bottom,r=parseFloat(this.modal_dialog.css("margin-top"))+parseFloat(this.modal_dialog.css("margin-bottom")),d=t(window).height()-n-r-s-a,o=Math.min(d/e,1),this.modal_dialog.css("height","auto").css("max-height",d),this.resize(o*i)},resize:function(e){var i;return i=e+this.border.left+this.padding.left+this.padding.right+this.border.right,this.modal_dialog.css("width","auto").css("max-width",i),this.lightbox_container.find("a").css("line-height",function(){return t(this).parent().height()+"px"}),this},checkDimensions:function(t){var e,i;return i=t+this.border.left+this.padding.left+this.padding.right+this.border.right,e=document.body.clientWidth,i>e&&(t=this.modal_body.width()),t},close:function(){return this.modal.modal("hide")},
addTrailingSlash:function(t){return"/"!==t.substr(-1)&&(t+="/"),t}},t.fn.ekkoLightbox=function(i){return this.each(function(){var n;return n=t(this),i=t.extend({remote:n.attr("data-remote")||n.attr("href"),gallery_parent_selector:n.attr("data-parent"),type:n.attr("data-type")},i,n.data()),new e(this,i),this})},t.fn.ekkoLightbox.defaults={gallery_parent_selector:"document.body",left_arrow_class:".glyphicon .glyphicon-chevron-left",right_arrow_class:".glyphicon .glyphicon-chevron-right",directional_arrows:!0,type:null,always_show_close:!0,no_related:!1,scale_height:!0,loadingMessage:"Loading...",onShow:function(){},onShown:function(){},onHide:function(){},onHidden:function(){},onNavigate:function(){},onContentLoaded:function(){}}}.call(this),define("ekko",["bmodal"],function(){}),define("product_main",["stickysidebar","fgallery","ekko","text!version-css.json?bust="+(new Date).getTime()],function(t,e,i,n){n=JSON.parse(n),requirejs.config({urlArgs:"v="+n.v});var o=document.createElement("link");o.href="css/size-chart.min.css",o.rel="preload",o.as="style",o.id="sizeChart",document.head.appendChild(o),$("#sizeChart").attr("onload",'this.rel="stylesheet"'),l("size-chart.min.css"),(window.navigator.userAgent.indexOf("MSIE ")>0||navigator.userAgent.match(/Trident.*rv\:11\./))&&require(["libs/modules/cache-css"],function(){require(["css!../css/size-chart.min.css"]),l("size-chart.min.css")}),$(".accordion-category").on("click",function(){$(this).parent().hasClass("expand")?($(this).parent().find(".accordion-content").addClass("expand"),$(this).parent().removeClass("expand").find(".expand").removeClass("expand")):($(this).parent().addClass("expand"),$(this).parent().siblings(".expand").find(".accordion-content").removeClass("expand"),$(this).parent().siblings(".expand").removeClass("expand").find(".expand").removeClass("expand"))}),$(document).ready(function(){$(".category-menu>section>ul>li:has(.accordion-content li .alink.selected)").addClass("expand")}),$("img.lazyload").lazyload({threshold:400,placeholder:"css/images/blank.gif",effect:"fadeIn",effectspeed:100}),$(".column-main-product, .column-menu, .column-product-description").theiaStickySidebar({additionalMarginTop:95,minWidth:768}),$(document).ready(function(){function t(){e&&$(window).width()>=1024?($(".block-p01").after($(".block-txt")),e=!0):!e&&$(window).width()<1023&&($(".block-p03").after($(".block-txt")),e=!1)}t();var e=!0;$(window).resize(t)}),$(".size-select").on("touchstart click",function(t){t.preventDefault(),$(".btn-checkout").removeClass("disabled"),$(".edit-select").removeClass("disabled"),$(".size-select").hasClass("selected")?($(".size-select").removeClass("selected"),$(this).addClass("selected")):$(this).addClass("selected"),changeSize(this.getAttribute("mycolor"),this.getAttribute("mysize"),this)}),$(".edit-less").on("click",function(){var t=parseInt($("#qty").attr("value"));"0"!=$("#qty").attr("maxvalue")&&$.isNumeric(t)&&(t--,t<1&&(t=1),$(".edit-count").find("span").text(t),$("#qty").attr("value",t),$("#hidqty").val(t))}),$(".edit-add").on("click",function(){var t=parseInt($("#qty").attr("value"));"0"!=$("#qty").attr("maxvalue")&&$.isNumeric(t)&&t<parseInt($("#qty").attr("maxvalue"))&&(t++,$(".edit-count").find("span").text(t),$("#qty").attr("value",t),$("#hidqty").val(t))}),$.fn.dataImg=function(t){function e(t){var e=$(window).width();return e>n.med?t.data("lrg"):e<=n.med&&e>n.sml?t.data("med"):t.data("sml")}function i(){o.each(function(){var t=$(this),i=e(t);void 0!=i&&(t.is("img")?t.attr("src",i):t.css("background-image","url("+i+")"))})}var n=$.extend({sml:400,med:800,lrg:1e3,resize:!1},t),o=$(this);i(),1==n.resize&&$(window).resize(function(){i()})},$(function(){$(".data-img").dataImg({sml:769,lrg:1e3,resize:!0,bgImg:!0})}),$(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])',"click",function(t){return t.preventDefault(),$(this).ekkoLightbox({onShown:function(){if(window.console)return console.log("lightbox")},onNavigate:function(t,e){if(window.console)return console.log("Navigating "+t+". Current item: "+e)}})}),$("#open-image").click(function(t){t.preventDefault(),$(".open-image").ekkoLightbox()}),$("#open-youtube").click(function(t){t.preventDefault(),$(this).ekkoLightbox()}),$(document).delegate('*[data-gallery="navigateTo"]',"click",function(t){t.preventDefault();var e;return $(this).ekkoLightbox({onShown:function(){e=this,$(e.modal_content).on("click",".modal-footer a",function(t){t.preventDefault(),e.navigateTo(2)})}})}),l("product-main fully loaded")});