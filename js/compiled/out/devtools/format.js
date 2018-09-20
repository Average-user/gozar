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
var o__13681__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__13681__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__13681__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__13681__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__13680__auto__ = temp__6753__auto____$2;
return goog.object.get(o__13680__auto__,"make_template");
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
var o__13681__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__13681__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__13681__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__13681__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__13680__auto__ = temp__6753__auto____$2;
return goog.object.get(o__13680__auto__,"make_group");
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
var o__13681__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__13681__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__13681__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__13681__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__13680__auto__ = temp__6753__auto____$2;
return goog.object.get(o__13680__auto__,"make_reference");
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
var o__13681__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__13681__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__13681__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__13681__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__13680__auto__ = temp__6753__auto____$2;
return goog.object.get(o__13680__auto__,"make_surrogate");
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
var o__13681__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__13681__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__13681__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__13681__auto____$1,"templating");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__13680__auto__ = temp__6753__auto____$2;
return goog.object.get(o__13680__auto__,"render_markup");
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
var o__13681__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__13681__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__13681__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__13681__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__13680__auto__ = temp__6753__auto____$2;
return goog.object.get(o__13680__auto__,"_LT_header_GT_");
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
var o__13681__auto__ = temp__6753__auto__;
var temp__6753__auto____$1 = goog.object.get(o__13681__auto__,"formatters");
if(cljs.core.truth_(temp__6753__auto____$1)){
var o__13681__auto____$1 = temp__6753__auto____$1;
var temp__6753__auto____$2 = goog.object.get(o__13681__auto____$1,"markup");
if(cljs.core.truth_(temp__6753__auto____$2)){
var o__13680__auto__ = temp__6753__auto____$2;
return goog.object.get(o__13680__auto__,"_LT_standard_body_GT_");
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
var len__8679__auto___13702 = arguments.length;
var i__8680__auto___13703 = (0);
while(true){
if((i__8680__auto___13703 < len__8679__auto___13702)){
args__8686__auto__.push((arguments[i__8680__auto___13703]));

var G__13704 = (i__8680__auto___13703 + (1));
i__8680__auto___13703 = G__13704;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq13701){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13701));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___13706 = arguments.length;
var i__8680__auto___13707 = (0);
while(true){
if((i__8680__auto___13707 < len__8679__auto___13706)){
args__8686__auto__.push((arguments[i__8680__auto___13707]));

var G__13708 = (i__8680__auto___13707 + (1));
i__8680__auto___13707 = G__13708;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq13705){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13705));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__8686__auto__ = [];
var len__8679__auto___13710 = arguments.length;
var i__8680__auto___13711 = (0);
while(true){
if((i__8680__auto___13711 < len__8679__auto___13710)){
args__8686__auto__.push((arguments[i__8680__auto___13711]));

var G__13712 = (i__8680__auto___13711 + (1));
i__8680__auto___13711 = G__13712;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq13709){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13709));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__8686__auto__ = [];
var len__8679__auto___13714 = arguments.length;
var i__8680__auto___13715 = (0);
while(true){
if((i__8680__auto___13715 < len__8679__auto___13714)){
args__8686__auto__.push((arguments[i__8680__auto___13715]));

var G__13716 = (i__8680__auto___13715 + (1));
i__8680__auto___13715 = G__13716;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq13713){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13713));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___13718 = arguments.length;
var i__8680__auto___13719 = (0);
while(true){
if((i__8680__auto___13719 < len__8679__auto___13718)){
args__8686__auto__.push((arguments[i__8680__auto___13719]));

var G__13720 = (i__8680__auto___13719 + (1));
i__8680__auto___13719 = G__13720;
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

devtools.format.template.cljs$lang$applyTo = (function (seq13717){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13717));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__8686__auto__ = [];
var len__8679__auto___13722 = arguments.length;
var i__8680__auto___13723 = (0);
while(true){
if((i__8680__auto___13723 < len__8679__auto___13722)){
args__8686__auto__.push((arguments[i__8680__auto___13723]));

var G__13724 = (i__8680__auto___13723 + (1));
i__8680__auto___13723 = G__13724;
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

devtools.format.group.cljs$lang$applyTo = (function (seq13721){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13721));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__8686__auto__ = [];
var len__8679__auto___13726 = arguments.length;
var i__8680__auto___13727 = (0);
while(true){
if((i__8680__auto___13727 < len__8679__auto___13726)){
args__8686__auto__.push((arguments[i__8680__auto___13727]));

var G__13728 = (i__8680__auto___13727 + (1));
i__8680__auto___13727 = G__13728;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq13725){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13725));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__8686__auto__ = [];
var len__8679__auto___13736 = arguments.length;
var i__8680__auto___13737 = (0);
while(true){
if((i__8680__auto___13737 < len__8679__auto___13736)){
args__8686__auto__.push((arguments[i__8680__auto___13737]));

var G__13738 = (i__8680__auto___13737 + (1));
i__8680__auto___13737 = G__13738;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__13732){
var vec__13733 = p__13732;
var state_override = cljs.core.nth.call(null,vec__13733,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__13733,state_override){
return (function (p1__13729_SHARP_){
return cljs.core.merge.call(null,p1__13729_SHARP_,state_override);
});})(vec__13733,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq13730){
var G__13731 = cljs.core.first.call(null,seq13730);
var seq13730__$1 = cljs.core.next.call(null,seq13730);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__13731,seq13730__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__8686__auto__ = [];
var len__8679__auto___13740 = arguments.length;
var i__8680__auto___13741 = (0);
while(true){
if((i__8680__auto___13741 < len__8679__auto___13740)){
args__8686__auto__.push((arguments[i__8680__auto___13741]));

var G__13742 = (i__8680__auto___13741 + (1));
i__8680__auto___13741 = G__13742;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq13739){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13739));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___13745 = arguments.length;
var i__8680__auto___13746 = (0);
while(true){
if((i__8680__auto___13746 < len__8679__auto___13745)){
args__8686__auto__.push((arguments[i__8680__auto___13746]));

var G__13747 = (i__8680__auto___13746 + (1));
i__8680__auto___13746 = G__13747;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq13743){
var G__13744 = cljs.core.first.call(null,seq13743);
var seq13743__$1 = cljs.core.next.call(null,seq13743);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__13744,seq13743__$1);
});


//# sourceMappingURL=format.js.map?rel=1537411816227