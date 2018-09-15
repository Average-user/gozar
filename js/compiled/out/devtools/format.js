// Compiled by ClojureScript 1.9.542 {}
goog.provide('devtools.format');
goog.require('cljs.core');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__8176__auto__ = (((value == null))?null:value);
var m__8177__auto__ = (devtools.format._header[goog.typeOf(x__8176__auto__)]);
if(!((m__8177__auto__ == null))){
return m__8177__auto__.call(null,value);
} else {
var m__8177__auto____$1 = (devtools.format._header["_"]);
if(!((m__8177__auto____$1 == null))){
return m__8177__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__8176__auto__ = (((value == null))?null:value);
var m__8177__auto__ = (devtools.format._has_body[goog.typeOf(x__8176__auto__)]);
if(!((m__8177__auto__ == null))){
return m__8177__auto__.call(null,value);
} else {
var m__8177__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__8177__auto____$1 == null))){
return m__8177__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__8176__auto__ = (((value == null))?null:value);
var m__8177__auto__ = (devtools.format._body[goog.typeOf(x__8176__auto__)]);
if(!((m__8177__auto__ == null))){
return m__8177__auto__.call(null,value);
} else {
var m__8177__auto____$1 = (devtools.format._body["_"]);
if(!((m__8177__auto____$1 == null))){
return m__8177__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__11631__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__11631__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__11631__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__11631__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__11630__auto__ = temp__6753__auto____$2;
return goog.object.get(o__11630__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__11631__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__11631__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__11631__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__11631__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__11630__auto__ = temp__6753__auto____$2;
return goog.object.get(o__11630__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__11631__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__11631__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__11631__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__11631__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__11630__auto__ = temp__6753__auto____$2;
return goog.object.get(o__11630__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__11631__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__11631__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__11631__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__11631__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__11630__auto__ = temp__6753__auto____$2;
return goog.object.get(o__11630__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__11631__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__11631__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__11631__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__11631__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__11630__auto__ = temp__6753__auto____$2;
return goog.object.get(o__11630__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__11631__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__11631__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__11631__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__11631__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__11630__auto__ = temp__6753__auto____$2;
return goog.object.get(o__11630__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__6753__auto__ = goog.object.get(window,"devtools");
if(cljs.core.truth_(temp__6753__auto__)){
var o__11631__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__11631__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__11631__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__11631__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__11630__auto__ = temp__6753__auto____$2;
return goog.object.get(o__11630__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11652 = arguments.length;
var i__8680__auto___11653 = (0);
while(true){
if((i__8680__auto___11653 < len__8679__auto___11652)){
args__8686__auto__.push((arguments[i__8680__auto___11653]));

var G__11654 = (i__8680__auto___11653 + (1));
i__8680__auto___11653 = G__11654;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq11651){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11651));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11656 = arguments.length;
var i__8680__auto___11657 = (0);
while(true){
if((i__8680__auto___11657 < len__8679__auto___11656)){
args__8686__auto__.push((arguments[i__8680__auto___11657]));

var G__11658 = (i__8680__auto___11657 + (1));
i__8680__auto___11657 = G__11658;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq11655){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11655));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11660 = arguments.length;
var i__8680__auto___11661 = (0);
while(true){
if((i__8680__auto___11661 < len__8679__auto___11660)){
args__8686__auto__.push((arguments[i__8680__auto___11661]));

var G__11662 = (i__8680__auto___11661 + (1));
i__8680__auto___11661 = G__11662;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq11659){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11659));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11664 = arguments.length;
var i__8680__auto___11665 = (0);
while(true){
if((i__8680__auto___11665 < len__8679__auto___11664)){
args__8686__auto__.push((arguments[i__8680__auto___11665]));

var G__11666 = (i__8680__auto___11665 + (1));
i__8680__auto___11665 = G__11666;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq11663){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11663));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11668 = arguments.length;
var i__8680__auto___11669 = (0);
while(true){
if((i__8680__auto___11669 < len__8679__auto___11668)){
args__8686__auto__.push((arguments[i__8680__auto___11669]));

var G__11670 = (i__8680__auto___11669 + (1));
i__8680__auto___11669 = G__11670;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq11667){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11667));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11672 = arguments.length;
var i__8680__auto___11673 = (0);
while(true){
if((i__8680__auto___11673 < len__8679__auto___11672)){
args__8686__auto__.push((arguments[i__8680__auto___11673]));

var G__11674 = (i__8680__auto___11673 + (1));
i__8680__auto___11673 = G__11674;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq11671){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11671));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11676 = arguments.length;
var i__8680__auto___11677 = (0);
while(true){
if((i__8680__auto___11677 < len__8679__auto___11676)){
args__8686__auto__.push((arguments[i__8680__auto___11677]));

var G__11678 = (i__8680__auto___11677 + (1));
i__8680__auto___11677 = G__11678;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq11675){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11675));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11686 = arguments.length;
var i__8680__auto___11687 = (0);
while(true){
if((i__8680__auto___11687 < len__8679__auto___11686)){
args__8686__auto__.push((arguments[i__8680__auto___11687]));

var G__11688 = (i__8680__auto___11687 + (1));
i__8680__auto___11687 = G__11688;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__11682){
var vec__11683 = p__11682;
var state_override = cljs.core.nth.call(null,vec__11683,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__11683,state_override){
return (function (p1__11679_SHARP_){
return cljs.core.merge.call(null,p1__11679_SHARP_,state_override);
});})(vec__11683,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq11680){
var G__11681 = cljs.core.first.call(null,seq11680);
var seq11680__$1 = cljs.core.next.call(null,seq11680);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__11681,seq11680__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11690 = arguments.length;
var i__8680__auto___11691 = (0);
while(true){
if((i__8680__auto___11691 < len__8679__auto___11690)){
args__8686__auto__.push((arguments[i__8680__auto___11691]));

var G__11692 = (i__8680__auto___11691 + (1));
i__8680__auto___11691 = G__11692;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq11689){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11689));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11695 = arguments.length;
var i__8680__auto___11696 = (0);
while(true){
if((i__8680__auto___11696 < len__8679__auto___11695)){
args__8686__auto__.push((arguments[i__8680__auto___11696]));

var G__11697 = (i__8680__auto___11696 + (1));
i__8680__auto___11696 = G__11697;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq11693){
var G__11694 = cljs.core.first.call(null,seq11693);
var seq11693__$1 = cljs.core.next.call(null,seq11693);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__11694,seq11693__$1);
});


//# sourceMappingURL=format.js.map?rel=1537038599273