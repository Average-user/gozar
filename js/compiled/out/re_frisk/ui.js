// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frisk.ui');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('goog.events');
goog.require('datafrisk.core');
goog.require('re_frisk.data');
goog.require('goog.events.EventType');
re_frisk.ui.frisk_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#FAFAFA",new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),"Consolas,Monaco,Courier New,monospace",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"12px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null);
re_frisk.ui.re_frisk_button_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),new cljs.core.Keyword(null,"fontFamily","fontFamily",1493518353),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)],["left","#CCCCCC","move","0px","Consolas,Monaco,Courier New,monospace","2rem","6px","inline-block","12px","2px","0px"]);
re_frisk.ui.arrow_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"border-bottom-left-radius","border-bottom-left-radius",-76446610),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772)],["center","5px","#CCCCCC","15px","pointer","0px","2rem","3px","inline-block","2px","0px"]);
if(typeof re_frisk.ui.draggable !== 'undefined'){
} else {
re_frisk.ui.draggable = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof re_frisk.ui.ua !== 'undefined'){
} else {
re_frisk.ui.ua = window.navigator.userAgent;
}
if(typeof re_frisk.ui.ie_QMARK_ !== 'undefined'){
} else {
re_frisk.ui.ie_QMARK_ = (function (){var or__7458__auto__ = cljs.core.re_find.call(null,/MSIE /,re_frisk.ui.ua);
if(cljs.core.truth_(or__7458__auto__)){
return or__7458__auto__;
} else {
var or__7458__auto____$1 = cljs.core.re_find.call(null,/Trident\//,re_frisk.ui.ua);
if(cljs.core.truth_(or__7458__auto____$1)){
return or__7458__auto____$1;
} else {
return cljs.core.re_find.call(null,/Edge\//,re_frisk.ui.ua);
}
}
})();
}
re_frisk.ui.get_client_rect = (function re_frisk$ui$get_client_rect(evt){
var r = evt.target.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"top","top",-1856271961),r.top], null);
});
re_frisk.ui.mouse_move_handler = (function re_frisk$ui$mouse_move_handler(offset){
return (function (evt){
var x = (evt.clientX - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset));
var y = (evt.clientY - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));
return cljs.core.reset_BANG_.call(null,re_frisk.ui.draggable,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
});
});
re_frisk.ui.mouse_up_handler = (function re_frisk$ui$mouse_up_handler(on_move){
return (function re_frisk$ui$mouse_up_handler_$_me(evt){
return goog.events.unlisten(window,goog.events.EventType.MOUSEMOVE,on_move);
});
});
re_frisk.ui.mouse_down_handler = (function re_frisk$ui$mouse_down_handler(e){
var map__12649 = re_frisk.ui.get_client_rect.call(null,e);
var map__12649__$1 = ((((!((map__12649 == null)))?((((map__12649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12649):map__12649);
var left = cljs.core.get.call(null,map__12649__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.call(null,map__12649__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var offset = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(e.clientX - left),new cljs.core.Keyword(null,"y","y",-1757859776),(e.clientY - top)], null);
var on_move = re_frisk.ui.mouse_move_handler.call(null,offset);
goog.events.listen(window,goog.events.EventType.MOUSEMOVE,on_move);

return goog.events.listen(window,goog.events.EventType.MOUSEUP,re_frisk.ui.mouse_up_handler.call(null,on_move));
});
re_frisk.ui.visibility_button = (function re_frisk$ui$visibility_button(visible_QMARK_,update_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"border","border",1444987323),(0),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"transparent",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"height","height",1025178622),"10px"], null),new cljs.core.Keyword(null,"onClick","onClick",-1991238530),update_fn], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 100 100",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.2s ease",new cljs.core.Keyword(null,"transform","transform",1381301764),(cljs.core.truth_(visible_QMARK_)?"rotate(90deg)":null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),"0,0 0,100 100,50",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black"], null)], null)], null)], null);
});
re_frisk.ui.re_frisk_panel = (function re_frisk$ui$re_frisk_panel(var_args){
var args__8686__auto__ = [];
var len__8679__auto___12654 = arguments.length;
var i__8680__auto___12655 = (0);
while(true){
if((i__8680__auto___12655 < len__8679__auto___12654)){
args__8686__auto__.push((arguments[i__8680__auto___12655]));

var G__12656 = (i__8680__auto___12655 + (1));
i__8680__auto___12655 = G__12656;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return re_frisk.ui.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

re_frisk.ui.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic = (function (data){
var expand_by_default = cljs.core.reduce.call(null,(function (p1__12651_SHARP_,p2__12652_SHARP_){
return cljs.core.assoc_in.call(null,p1__12651_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),p2__12652_SHARP_,new cljs.core.Keyword(null,"expanded-paths","expanded-paths",787811540)], null),cljs.core.PersistentHashSet.createAsIfByAssoc([cljs.core.PersistentVector.EMPTY]));
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,cljs.core.count.call(null,data)));
var state_atom = reagent.core.atom.call(null,expand_by_default);
return ((function (expand_by_default,state_atom){
return (function() { 
var G__12657__delegate = function (data__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map_indexed.call(null,((function (expand_by_default,state_atom){
return (function (id,x){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [datafrisk.core.Root,x,id,state_atom], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null));
});})(expand_by_default,state_atom))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data__$1], null))], null);
};
var G__12657 = function (var_args){
var data__$1 = null;
if (arguments.length > 0) {
var G__12658__i = 0, G__12658__a = new Array(arguments.length -  0);
while (G__12658__i < G__12658__a.length) {G__12658__a[G__12658__i] = arguments[G__12658__i + 0]; ++G__12658__i;}
  data__$1 = new cljs.core.IndexedSeq(G__12658__a,0,null);
} 
return G__12657__delegate.call(this,data__$1);};
G__12657.cljs$lang$maxFixedArity = 0;
G__12657.cljs$lang$applyTo = (function (arglist__12659){
var data__$1 = cljs.core.seq(arglist__12659);
return G__12657__delegate(data__$1);
});
G__12657.cljs$core$IFn$_invoke$arity$variadic = G__12657__delegate;
return G__12657;
})()
;
;})(expand_by_default,state_atom))
});

re_frisk.ui.re_frisk_panel.cljs$lang$maxFixedArity = (0);

re_frisk.ui.re_frisk_panel.cljs$lang$applyTo = (function (seq12653){
return re_frisk.ui.re_frisk_panel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12653));
});

re_frisk.ui.re_frisk_shell = (function re_frisk$ui$re_frisk_shell(data,p__12660){
var map__12663 = p__12660;
var map__12663__$1 = ((((!((map__12663 == null)))?((((map__12663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12663):map__12663);
var on_click = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var x = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__12663__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var style = cljs.core.merge.call(null,re_frisk.ui.frisk_style,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"resize","resize",297367086),"both",new cljs.core.Keyword(null,"width","width",-384071477),"300px",new cljs.core.Keyword(null,"height","height",1025178622),"200px"], null));
var height__$1 = (cljs.core.truth_((function (){var and__7446__auto__ = re_frisk.ui.ie_QMARK_;
if(cljs.core.truth_(and__7446__auto__)){
return cljs.core.not.call(null,height);
} else {
return and__7446__auto__;
}
})())?(200):height);
var style__$1 = cljs.core.merge.call(null,style,(cljs.core.truth_(height__$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),height__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804),height__$1,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null):null));
var style__$2 = cljs.core.merge.call(null,style__$1,(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),width,new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null):null));
if(cljs.core.truth_(x)){
cljs.core.swap_BANG_.call(null,re_frisk.ui.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),x);
} else {
}

if(cljs.core.truth_(y)){
cljs.core.swap_BANG_.call(null,re_frisk.ui.draggable,cljs.core.assoc,new cljs.core.Keyword(null,"y","y",-1757859776),y);
} else {
}

return ((function (style,height__$1,style__$1,style__$2,map__12663,map__12663__$1,on_click,x,y,width,height){
return (function (data__$1){
if(cljs.core.truth_(new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",-1950516132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.ui.draggable))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.ui.draggable))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("px")].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),(999)], null),(cljs.core.truth_((function (){var or__7458__auto__ = re_frisk.ui.ie_QMARK_;
if(cljs.core.truth_(or__7458__auto__)){
return or__7458__auto__;
} else {
return cljs.core.not.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.ui.draggable)));
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"0px",new cljs.core.Keyword(null,"right","right",-452581833),"20px"], null):null))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.re_frisk_button_style,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),re_frisk.ui.mouse_down_handler], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.visibility_button,new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data))),((function (style,height__$1,style__$1,style__$2,map__12663,map__12663__$1,on_click,x,y,width,height){
return (function (_){
return cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))));
});})(style,height__$1,style__$1,style__$2,map__12663,map__12663__$1,on_click,x,y,width,height))
], null),"re-frisk"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),re_frisk.ui.arrow_style,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),"\u2197"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data-frisk","data-frisk",-357579764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style__$2], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.re_frisk_panel,cljs.core.deref.call(null,data__$1)], null)], null):null)], null);
} else {
return null;
}
});
;})(style,height__$1,style__$1,style__$2,map__12663,map__12663__$1,on_click,x,y,width,height))
});
re_frisk.ui.debugger_page = "<!DOCTYPE html>\n  <html>\n\n    <head>\n\n      <title>re-frisk debugger</title>\n      <meta charset=\"UTF-8\">\n\n      <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n\n    </head>\n\n    <body style=\"margin:0px;padding:0px\">\n\n      <script>var saveAs=saveAs||function(e){\"use strict\";if(typeof e===\"undefined\"||typeof navigator!==\"undefined\"&&/MSIE [1-9]\\./.test(navigator.userAgent)){return}var t=e.document,n=function(){return e.URL||e.webkitURL||e},r=t.createElementNS(\"http://www.w3.org/1999/xhtml\",\"a\"),o=\"download\"in r,a=function(e){var t=new MouseEvent(\"click\");e.dispatchEvent(t)},i=/constructor/i.test(e.HTMLElement)||e.safari,f=/CriOS\\/[\\d]+/.test(navigator.userAgent),u=function(t){(e.setImmediate||e.setTimeout)(function(){throw t},0)},s=\"application/octet-stream\",d=1e3*40,c=function(e){var t=function(){if(typeof e===\"string\"){n().revokeObjectURL(e)}else{e.remove()}};setTimeout(t,d)},l=function(e,t,n){t=[].concat(t);var r=t.length;while(r--){var o=e[\"on\"+t[r]];if(typeof o===\"function\"){try{o.call(e,n||e)}catch(a){u(a)}}}},p=function(e){if(/^\\s*(?:text\\/\\S*|application\\/xml|\\S*\\/\\S*\\+xml)\\s*;.*charset\\s*=\\s*utf-8/i.test(e.type)){return new Blob([String.fromCharCode(65279),e],{type:e.type})}return e},v=function(t,u,d){if(!d){t=p(t)}var v=this,w=t.type,m=w===s,y,h=function(){l(v,\"writestart progress write writeend\".split(\" \"))},S=function(){if((f||m&&i)&&e.FileReader){var r=new FileReader;r.onloadend=function(){var t=f?r.result:r.result.replace(/^data:[^;]*;/,\"data:attachment/file;\");var n=e.open(t,\"_blank\");if(!n)e.location.href=t;t=undefined;v.readyState=v.DONE;h()};r.readAsDataURL(t);v.readyState=v.INIT;return}if(!y){y=n().createObjectURL(t)}if(m){e.location.href=y}else{var o=e.open(y,\"_blank\");if(!o){e.location.href=y}}v.readyState=v.DONE;h();c(y)};v.readyState=v.INIT;if(o){y=n().createObjectURL(t);setTimeout(function(){r.href=y;r.download=u;a(r);h();c(y);v.readyState=v.DONE});return}S()},w=v.prototype,m=function(e,t,n){return new v(e,t||e.name||\"download\",n)};if(typeof navigator!==\"undefined\"&&navigator.msSaveOrOpenBlob){return function(e,t,n){t=t||e.name||\"download\";if(!n){e=p(e)}return navigator.msSaveOrOpenBlob(e,t)}}w.abort=function(){};w.readyState=w.INIT=0;w.WRITING=1;w.DONE=2;w.error=w.onwritestart=w.onprogress=w.onwrite=w.onabort=w.onerror=w.onwriteend=null;return m}(typeof self!==\"undefined\"&&self||typeof window!==\"undefined\"&&window||this.content);if(typeof module!==\"undefined\"&&module.exports){module.exports.saveAs=saveAs}else if(typeof define!==\"undefined\"&&define!==null&&define.amd!==null){define(\"FileSaver.js\",function(){return saveAs})}</script>\n      <style>\n\nhtml {\n    overflow: hidden;\n    height: 100%;\n}\n\nbody {\n    height: 100%;\n    overflow: auto;\n}\n\n#debugger {\n  width: 100%;\n  height: 100%;\n  font-family: monospace;\n}\n\n#values {\n  display: block;\n  float: left;\n  height: 100%;\n  width: calc(100% - 30ch);\n  margin: 0;\n  overflow: auto;\n  cursor: default;\n}\n\n.debugger-sidebar {\n  display: block;\n  float: left;\n  width: 30ch;\n  height: 100%;\n  color: white;\n  background-color: rgb(61, 61, 61);\n}\n\n.debugger-sidebar-controls {\n  width: 100%;\n  text-align: center;\n  background-color: rgb(50, 50, 50);\n}\n\n.debugger-sidebar-controls-import-export {\n  width: 100%;\n  height: 24px;\n  line-height: 24px;\n  font-size: 12px;\n}\n\n.debugger-sidebar-controls-resume {\n  width: 100%;\n  height: 30px;\n  line-height: 30px;\n  cursor: pointer;\n}\n\n.debugger-sidebar-controls-resume:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.debugger-sidebar-messages {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 24px);\n}\n\n.debugger-sidebar-messages-paused {\n  width: 100%;\n  overflow-y: auto;\n  height: calc(100% - 54px);\n}\n\n.messages-entry {\n  cursor: pointer;\n  width: 100%;\n}\n\n.messages-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.messages-entry-selected, .messages-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.messages-entry-content {\n  width: 23ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-left: 1ch;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.messages-entry-index {\n  color: #666;\n  width: 5ch;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  padding-right: 1ch;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n</style>\n      <div id=\"app\" style=\"height:100%;width:100%\">\n\n        <h2>re-frisk debugger</h2>\n\n        <p>ENJOY!</p>\n\n      </div>\n\n    </body>\n\n  </html>";

//# sourceMappingURL=ui.js.map?rel=1537411814216