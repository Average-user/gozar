// Compiled by ClojureScript 1.9.542 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x14253_14254 = value;
x14253_14254.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x14258_14259 = value;
x14258_14259.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x14263_14264 = value;
x14263_14264.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__7446__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__7446__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__7446__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__8686__auto__ = [];
var len__8679__auto___14272 = arguments.length;
var i__8680__auto___14273 = (0);
while(true){
if((i__8680__auto___14273 < len__8679__auto___14272)){
args__8686__auto__.push((arguments[i__8680__auto___14273]));

var G__14274 = (i__8680__auto___14273 + (1));
i__8680__auto___14273 = G__14274;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__14268_14275 = cljs.core.seq.call(null,items);
var chunk__14269_14276 = null;
var count__14270_14277 = (0);
var i__14271_14278 = (0);
while(true){
if((i__14271_14278 < count__14270_14277)){
var item_14279 = cljs.core._nth.call(null,chunk__14269_14276,i__14271_14278);
if(!((item_14279 == null))){
if(cljs.core.coll_QMARK_.call(null,item_14279)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_14279)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_14279));
}
} else {
}

var G__14280 = seq__14268_14275;
var G__14281 = chunk__14269_14276;
var G__14282 = count__14270_14277;
var G__14283 = (i__14271_14278 + (1));
seq__14268_14275 = G__14280;
chunk__14269_14276 = G__14281;
count__14270_14277 = G__14282;
i__14271_14278 = G__14283;
continue;
} else {
var temp__6753__auto___14284 = cljs.core.seq.call(null,seq__14268_14275);
if(temp__6753__auto___14284){
var seq__14268_14285__$1 = temp__6753__auto___14284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14268_14285__$1)){
var c__8369__auto___14286 = cljs.core.chunk_first.call(null,seq__14268_14285__$1);
var G__14287 = cljs.core.chunk_rest.call(null,seq__14268_14285__$1);
var G__14288 = c__8369__auto___14286;
var G__14289 = cljs.core.count.call(null,c__8369__auto___14286);
var G__14290 = (0);
seq__14268_14275 = G__14287;
chunk__14269_14276 = G__14288;
count__14270_14277 = G__14289;
i__14271_14278 = G__14290;
continue;
} else {
var item_14291 = cljs.core.first.call(null,seq__14268_14285__$1);
if(!((item_14291 == null))){
if(cljs.core.coll_QMARK_.call(null,item_14291)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_14291)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_14291));
}
} else {
}

var G__14292 = cljs.core.next.call(null,seq__14268_14285__$1);
var G__14293 = null;
var G__14294 = (0);
var G__14295 = (0);
seq__14268_14275 = G__14292;
chunk__14269_14276 = G__14293;
count__14270_14277 = G__14294;
i__14271_14278 = G__14295;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq14267){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14267));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___14303 = arguments.length;
var i__8680__auto___14304 = (0);
while(true){
if((i__8680__auto___14304 < len__8679__auto___14303)){
args__8686__auto__.push((arguments[i__8680__auto___14304]));

var G__14305 = (i__8680__auto___14304 + (1));
i__8680__auto___14304 = G__14305;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((2) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8687__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__14299_14306 = cljs.core.seq.call(null,children);
var chunk__14300_14307 = null;
var count__14301_14308 = (0);
var i__14302_14309 = (0);
while(true){
if((i__14302_14309 < count__14301_14308)){
var child_14310 = cljs.core._nth.call(null,chunk__14300_14307,i__14302_14309);
if(!((child_14310 == null))){
if(cljs.core.coll_QMARK_.call(null,child_14310)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_14310))));
} else {
var temp__6751__auto___14311 = devtools.formatters.helpers.pref.call(null,child_14310);
if(cljs.core.truth_(temp__6751__auto___14311)){
var child_value_14312 = temp__6751__auto___14311;
template.push(child_value_14312);
} else {
}
}
} else {
}

var G__14313 = seq__14299_14306;
var G__14314 = chunk__14300_14307;
var G__14315 = count__14301_14308;
var G__14316 = (i__14302_14309 + (1));
seq__14299_14306 = G__14313;
chunk__14300_14307 = G__14314;
count__14301_14308 = G__14315;
i__14302_14309 = G__14316;
continue;
} else {
var temp__6753__auto___14317 = cljs.core.seq.call(null,seq__14299_14306);
if(temp__6753__auto___14317){
var seq__14299_14318__$1 = temp__6753__auto___14317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14299_14318__$1)){
var c__8369__auto___14319 = cljs.core.chunk_first.call(null,seq__14299_14318__$1);
var G__14320 = cljs.core.chunk_rest.call(null,seq__14299_14318__$1);
var G__14321 = c__8369__auto___14319;
var G__14322 = cljs.core.count.call(null,c__8369__auto___14319);
var G__14323 = (0);
seq__14299_14306 = G__14320;
chunk__14300_14307 = G__14321;
count__14301_14308 = G__14322;
i__14302_14309 = G__14323;
continue;
} else {
var child_14324 = cljs.core.first.call(null,seq__14299_14318__$1);
if(!((child_14324 == null))){
if(cljs.core.coll_QMARK_.call(null,child_14324)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_14324))));
} else {
var temp__6751__auto___14325 = devtools.formatters.helpers.pref.call(null,child_14324);
if(cljs.core.truth_(temp__6751__auto___14325)){
var child_value_14326 = temp__6751__auto___14325;
template.push(child_value_14326);
} else {
}
}
} else {
}

var G__14327 = cljs.core.next.call(null,seq__14299_14318__$1);
var G__14328 = null;
var G__14329 = (0);
var G__14330 = (0);
seq__14299_14306 = G__14327;
chunk__14300_14307 = G__14328;
count__14301_14308 = G__14329;
i__14302_14309 = G__14330;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq14296){
var G__14297 = cljs.core.first.call(null,seq14296);
var seq14296__$1 = cljs.core.next.call(null,seq14296);
var G__14298 = cljs.core.first.call(null,seq14296__$1);
var seq14296__$2 = cljs.core.next.call(null,seq14296__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__14297,G__14298,seq14296__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___14333 = arguments.length;
var i__8680__auto___14334 = (0);
while(true){
if((i__8680__auto___14334 < len__8679__auto___14333)){
args__8686__auto__.push((arguments[i__8680__auto___14334]));

var G__14335 = (i__8680__auto___14334 + (1));
i__8680__auto___14334 = G__14335;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq14331){
var G__14332 = cljs.core.first.call(null,seq14331);
var seq14331__$1 = cljs.core.next.call(null,seq14331);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14332,seq14331__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___14338 = arguments.length;
var i__8680__auto___14339 = (0);
while(true){
if((i__8680__auto___14339 < len__8679__auto___14338)){
args__8686__auto__.push((arguments[i__8680__auto___14339]));

var G__14340 = (i__8680__auto___14339 + (1));
i__8680__auto___14339 = G__14340;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq14336){
var G__14337 = cljs.core.first.call(null,seq14336);
var seq14336__$1 = cljs.core.next.call(null,seq14336);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14337,seq14336__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args14341 = [];
var len__8679__auto___14346 = arguments.length;
var i__8680__auto___14347 = (0);
while(true){
if((i__8680__auto___14347 < len__8679__auto___14346)){
args14341.push((arguments[i__8680__auto___14347]));

var G__14348 = (i__8680__auto___14347 + (1));
i__8680__auto___14347 = G__14348;
continue;
} else {
}
break;
}

var G__14343 = args14341.length;
switch (G__14343) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args14341.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj14345 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__7458__auto__ = start_index;
if(cljs.core.truth_(or__7458__auto__)){
return or__7458__auto__;
} else {
return (0);
}
})()};
return obj14345;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__8686__auto__ = [];
var len__8679__auto___14356 = arguments.length;
var i__8680__auto___14357 = (0);
while(true){
if((i__8680__auto___14357 < len__8679__auto___14356)){
args__8686__auto__.push((arguments[i__8680__auto___14357]));

var G__14358 = (i__8680__auto___14357 + (1));
i__8680__auto___14357 = G__14358;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__14352){
var vec__14353 = p__14352;
var state_override_fn = cljs.core.nth.call(null,vec__14353,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq14350){
var G__14351 = cljs.core.first.call(null,seq14350);
var seq14350__$1 = cljs.core.next.call(null,seq14350);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__14351,seq14350__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__8550__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_14362_14365 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_14363_14366 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_14362_14365,_STAR_print_fn_STAR_14363_14366,sb__8550__auto__){
return (function (x__8551__auto__){
return sb__8550__auto__.append(x__8551__auto__);
});})(_STAR_print_newline_STAR_14362_14365,_STAR_print_fn_STAR_14363_14366,sb__8550__auto__))
;

try{var _STAR_print_level_STAR_14364_14367 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14364_14367;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_14363_14366;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_14362_14365;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8550__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_14369 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_14369;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__14371 = name;
switch (G__14371) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__14376 = tag;
var html_tag = cljs.core.nth.call(null,vec__14376,(0),null);
var style = cljs.core.nth.call(null,vec__14376,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_14380 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_14380;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_14383 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_14384 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_14384;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_14383;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__14385 = initial_value;
var G__14386 = value.call(null);
initial_value = G__14385;
value = G__14386;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__14387 = initial_value;
var G__14388 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__14387;
value = G__14388;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__14389 = initial_value;
var G__14390 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__14389;
value = G__14390;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1537038606025