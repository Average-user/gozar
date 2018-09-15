// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.subs');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('re_frame.utils');
goog.require('re_frame.registrar');
goog.require('re_frame.trace');
re_frame.subs.kind = new cljs.core.Keyword(null,"sub","sub",-2093760025);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.subs.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.subs.query__GT_reaction = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Runs on-dispose for all subscriptions we have in the subscription cache.
 *   Used to force recreation of new subscriptions. Should only be necessary
 *   in development.
 * 
 *   The on-dispose functions for the subscriptions will remove themselves from the
 *   cache.
 * 
 *   Useful when reloading Figwheel code after a React exception, as React components
 *   aren't cleaned up properly. This means a subscription's on-dispose function isn't
 *   run when the components are destroyed. If a bad subscription caused your exception,
 *   then you can't fix it without reloading your browser.
 */
re_frame.subs.clear_subscription_cache_BANG_ = (function re_frame$subs$clear_subscription_cache_BANG_(){
var seq__10804_10814 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__10805_10815 = null;
var count__10806_10816 = (0);
var i__10807_10817 = (0);
while(true){
if((i__10807_10817 < count__10806_10816)){
var vec__10808_10818 = cljs.core._nth.call(null,chunk__10805_10815,i__10807_10817);
var k_10819 = cljs.core.nth.call(null,vec__10808_10818,(0),null);
var rxn_10820 = cljs.core.nth.call(null,vec__10808_10818,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_10820);

var G__10821 = seq__10804_10814;
var G__10822 = chunk__10805_10815;
var G__10823 = count__10806_10816;
var G__10824 = (i__10807_10817 + (1));
seq__10804_10814 = G__10821;
chunk__10805_10815 = G__10822;
count__10806_10816 = G__10823;
i__10807_10817 = G__10824;
continue;
} else {
var temp__6753__auto___10825 = cljs.core.seq.call(null,seq__10804_10814);
if(temp__6753__auto___10825){
var seq__10804_10826__$1 = temp__6753__auto___10825;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10804_10826__$1)){
var c__8369__auto___10827 = cljs.core.chunk_first.call(null,seq__10804_10826__$1);
var G__10828 = cljs.core.chunk_rest.call(null,seq__10804_10826__$1);
var G__10829 = c__8369__auto___10827;
var G__10830 = cljs.core.count.call(null,c__8369__auto___10827);
var G__10831 = (0);
seq__10804_10814 = G__10828;
chunk__10805_10815 = G__10829;
count__10806_10816 = G__10830;
i__10807_10817 = G__10831;
continue;
} else {
var vec__10811_10832 = cljs.core.first.call(null,seq__10804_10826__$1);
var k_10833 = cljs.core.nth.call(null,vec__10811_10832,(0),null);
var rxn_10834 = cljs.core.nth.call(null,vec__10811_10832,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_10834);

var G__10835 = cljs.core.next.call(null,seq__10804_10826__$1);
var G__10836 = null;
var G__10837 = (0);
var G__10838 = (0);
seq__10804_10814 = G__10835;
chunk__10805_10815 = G__10836;
count__10806_10816 = G__10837;
i__10807_10817 = G__10838;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Subscription cache should be empty after clearing it.");
} else {
return null;
}
});
/**
 * Unregisters all existing subscription handlers
 */
re_frame.subs.clear_all_handlers_BANG_ = (function re_frame$subs$clear_all_handlers_BANG_(){
re_frame.registrar.clear_handlers.call(null,re_frame.subs.kind);

return re_frame.subs.clear_subscription_cache_BANG_.call(null);
});
/**
 * cache the reaction r
 */
re_frame.subs.cache_and_return = (function re_frame$subs$cache_and_return(query_v,dynv,r){
var cache_key = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dynv], null);
re_frame.interop.add_on_dispose_BANG_.call(null,r,((function (cache_key){
return (function (){
cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.dissoc,cache_key);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_10852 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10146__auto___10865 = re_frame.interop.now.call(null);
var duration__10147__auto___10866 = (end__10146__auto___10865 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10853_10867 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10854_10868 = null;
var count__10855_10869 = (0);
var i__10856_10870 = (0);
while(true){
if((i__10856_10870 < count__10855_10869)){
var vec__10857_10871 = cljs.core._nth.call(null,chunk__10854_10868,i__10856_10870);
var k__10148__auto___10872 = cljs.core.nth.call(null,vec__10857_10871,(0),null);
var cb__10149__auto___10873 = cljs.core.nth.call(null,vec__10857_10871,(1),null);
try{cb__10149__auto___10873.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___10866,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10860){if((e10860 instanceof java.lang.Exception)){
var e__10150__auto___10874 = e10860;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___10872,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___10874);
} else {
throw e10860;

}
}
var G__10875 = seq__10853_10867;
var G__10876 = chunk__10854_10868;
var G__10877 = count__10855_10869;
var G__10878 = (i__10856_10870 + (1));
seq__10853_10867 = G__10875;
chunk__10854_10868 = G__10876;
count__10855_10869 = G__10877;
i__10856_10870 = G__10878;
continue;
} else {
var temp__6753__auto___10879 = cljs.core.seq.call(null,seq__10853_10867);
if(temp__6753__auto___10879){
var seq__10853_10880__$1 = temp__6753__auto___10879;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10853_10880__$1)){
var c__8369__auto___10881 = cljs.core.chunk_first.call(null,seq__10853_10880__$1);
var G__10882 = cljs.core.chunk_rest.call(null,seq__10853_10880__$1);
var G__10883 = c__8369__auto___10881;
var G__10884 = cljs.core.count.call(null,c__8369__auto___10881);
var G__10885 = (0);
seq__10853_10867 = G__10882;
chunk__10854_10868 = G__10883;
count__10855_10869 = G__10884;
i__10856_10870 = G__10885;
continue;
} else {
var vec__10861_10886 = cljs.core.first.call(null,seq__10853_10880__$1);
var k__10148__auto___10887 = cljs.core.nth.call(null,vec__10861_10886,(0),null);
var cb__10149__auto___10888 = cljs.core.nth.call(null,vec__10861_10886,(1),null);
try{cb__10149__auto___10888.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___10866,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10864){if((e10864 instanceof java.lang.Exception)){
var e__10150__auto___10889 = e10864;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___10887,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___10889);
} else {
throw e10864;

}
}
var G__10890 = cljs.core.next.call(null,seq__10853_10880__$1);
var G__10891 = null;
var G__10892 = (0);
var G__10893 = (0);
seq__10853_10867 = G__10890;
chunk__10854_10868 = G__10891;
count__10855_10869 = G__10892;
i__10856_10870 = G__10893;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10852;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10894 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10894;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args10895 = [];
var len__8679__auto___10898 = arguments.length;
var i__8680__auto___10899 = (0);
while(true){
if((i__8680__auto___10899 < len__8679__auto___10898)){
args10895.push((arguments[i__8680__auto___10899]));

var G__10900 = (i__8680__auto___10899 + (1));
i__8680__auto___10899 = G__10900;
continue;
} else {
}
break;
}

var G__10897 = args10895.length;
switch (G__10897) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10895.length)].join('')));

}
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
return re_frame.subs.cache_lookup.call(null,query_v,cljs.core.PersistentVector.EMPTY);
});

re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2 = (function (query_v,dyn_v){
return cljs.core.get.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [query_v,dyn_v], null));
});

re_frame.subs.cache_lookup.cljs$lang$maxFixedArity = 2;

/**
 * Returns a Reagent/reaction which contains a computation
 */
re_frame.subs.subscribe = (function re_frame$subs$subscribe(var_args){
var args10902 = [];
var len__8679__auto___10931 = arguments.length;
var i__8680__auto___10932 = (0);
while(true){
if((i__8680__auto___10932 < len__8679__auto___10931)){
args10902.push((arguments[i__8680__auto___10932]));

var G__10933 = (i__8680__auto___10932 + (1));
i__8680__auto___10932 = G__10933;
continue;
} else {
}
break;
}

var G__10904 = args10902.length;
switch (G__10904) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10902.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_10905 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10935 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10935;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10936 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10936;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10937 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10937;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10146__auto___10938 = re_frame.interop.now.call(null);
var duration__10147__auto___10939 = (end__10146__auto___10938 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10906_10940 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10907_10941 = null;
var count__10908_10942 = (0);
var i__10909_10943 = (0);
while(true){
if((i__10909_10943 < count__10908_10942)){
var vec__10910_10944 = cljs.core._nth.call(null,chunk__10907_10941,i__10909_10943);
var k__10148__auto___10945 = cljs.core.nth.call(null,vec__10910_10944,(0),null);
var cb__10149__auto___10946 = cljs.core.nth.call(null,vec__10910_10944,(1),null);
try{cb__10149__auto___10946.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___10939,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10913){if((e10913 instanceof java.lang.Exception)){
var e__10150__auto___10947 = e10913;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___10945,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___10947);
} else {
throw e10913;

}
}
var G__10948 = seq__10906_10940;
var G__10949 = chunk__10907_10941;
var G__10950 = count__10908_10942;
var G__10951 = (i__10909_10943 + (1));
seq__10906_10940 = G__10948;
chunk__10907_10941 = G__10949;
count__10908_10942 = G__10950;
i__10909_10943 = G__10951;
continue;
} else {
var temp__6753__auto___10952 = cljs.core.seq.call(null,seq__10906_10940);
if(temp__6753__auto___10952){
var seq__10906_10953__$1 = temp__6753__auto___10952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10906_10953__$1)){
var c__8369__auto___10954 = cljs.core.chunk_first.call(null,seq__10906_10953__$1);
var G__10955 = cljs.core.chunk_rest.call(null,seq__10906_10953__$1);
var G__10956 = c__8369__auto___10954;
var G__10957 = cljs.core.count.call(null,c__8369__auto___10954);
var G__10958 = (0);
seq__10906_10940 = G__10955;
chunk__10907_10941 = G__10956;
count__10908_10942 = G__10957;
i__10909_10943 = G__10958;
continue;
} else {
var vec__10914_10959 = cljs.core.first.call(null,seq__10906_10953__$1);
var k__10148__auto___10960 = cljs.core.nth.call(null,vec__10914_10959,(0),null);
var cb__10149__auto___10961 = cljs.core.nth.call(null,vec__10914_10959,(1),null);
try{cb__10149__auto___10961.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___10939,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10917){if((e10917 instanceof java.lang.Exception)){
var e__10150__auto___10962 = e10917;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___10960,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___10962);
} else {
throw e10917;

}
}
var G__10963 = cljs.core.next.call(null,seq__10906_10953__$1);
var G__10964 = null;
var G__10965 = (0);
var G__10966 = (0);
seq__10906_10940 = G__10963;
chunk__10907_10941 = G__10964;
count__10908_10942 = G__10965;
i__10909_10943 = G__10966;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10905;
}} else {
var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10967 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10967;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10968 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10968;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10969 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10969;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2 = (function (v,dynv){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_10918 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10970 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10970;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10971 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10971;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6753__auto___10972 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6753__auto___10972)){
var not_reactive_10973 = temp__6753__auto___10972;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_10973);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___10974 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___10974;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10918){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10918))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10918){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10918))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10918){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10918))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10146__auto___10975 = re_frame.interop.now.call(null);
var duration__10147__auto___10976 = (end__10146__auto___10975 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10919_10977 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10920_10978 = null;
var count__10921_10979 = (0);
var i__10922_10980 = (0);
while(true){
if((i__10922_10980 < count__10921_10979)){
var vec__10923_10981 = cljs.core._nth.call(null,chunk__10920_10978,i__10922_10980);
var k__10148__auto___10982 = cljs.core.nth.call(null,vec__10923_10981,(0),null);
var cb__10149__auto___10983 = cljs.core.nth.call(null,vec__10923_10981,(1),null);
try{cb__10149__auto___10983.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___10976,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10926){if((e10926 instanceof java.lang.Exception)){
var e__10150__auto___10984 = e10926;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___10982,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___10984);
} else {
throw e10926;

}
}
var G__10985 = seq__10919_10977;
var G__10986 = chunk__10920_10978;
var G__10987 = count__10921_10979;
var G__10988 = (i__10922_10980 + (1));
seq__10919_10977 = G__10985;
chunk__10920_10978 = G__10986;
count__10921_10979 = G__10987;
i__10922_10980 = G__10988;
continue;
} else {
var temp__6753__auto___10989 = cljs.core.seq.call(null,seq__10919_10977);
if(temp__6753__auto___10989){
var seq__10919_10990__$1 = temp__6753__auto___10989;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10919_10990__$1)){
var c__8369__auto___10991 = cljs.core.chunk_first.call(null,seq__10919_10990__$1);
var G__10992 = cljs.core.chunk_rest.call(null,seq__10919_10990__$1);
var G__10993 = c__8369__auto___10991;
var G__10994 = cljs.core.count.call(null,c__8369__auto___10991);
var G__10995 = (0);
seq__10919_10977 = G__10992;
chunk__10920_10978 = G__10993;
count__10921_10979 = G__10994;
i__10922_10980 = G__10995;
continue;
} else {
var vec__10927_10996 = cljs.core.first.call(null,seq__10919_10990__$1);
var k__10148__auto___10997 = cljs.core.nth.call(null,vec__10927_10996,(0),null);
var cb__10149__auto___10998 = cljs.core.nth.call(null,vec__10927_10996,(1),null);
try{cb__10149__auto___10998.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___10976,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10930){if((e10930 instanceof java.lang.Exception)){
var e__10150__auto___10999 = e10930;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___10997,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___10999);
} else {
throw e10930;

}
}
var G__11000 = cljs.core.next.call(null,seq__10919_10990__$1);
var G__11001 = null;
var G__11002 = (0);
var G__11003 = (0);
seq__10919_10977 = G__11000;
chunk__10920_10978 = G__11001;
count__10921_10979 = G__11002;
i__10922_10980 = G__11003;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10918;
}} else {
var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___11004 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___11004;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___11005 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___11005;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6753__auto___11006 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6753__auto___11006)){
var not_reactive_11007 = temp__6753__auto___11006;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_11007);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___11008 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___11008;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__6751__auto__){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__6751__auto__))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__6751__auto__){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__6751__auto__))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__6751__auto__){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__6751__auto__))
));
}
}
}
});

re_frame.subs.subscribe.cljs$lang$maxFixedArity = 2;

/**
 * Returns a new version of 'm' in which 'f' has been applied to each value.
 *   (map-vals inc {:a 4, :b 2}) => {:a 5, :b 3}
 */
re_frame.subs.map_vals = (function re_frame$subs$map_vals(f,m){
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__11013){
var vec__11014 = p__11013;
var k = cljs.core.nth.call(null,vec__11014,(0),null);
var v = cljs.core.nth.call(null,vec__11014,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10163__auto___11017 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10163__auto___11017;

} else {
}

return signals__$1;
});
/**
 * Associate the given `query id` with a handler function and an optional signal function.
 * 
 *   There's 3 ways this function can be called
 * 
 *   1. (reg-sub
 *     :test-sub
 *     (fn [db [_]] db))
 *   The value in app-db is passed to the computation function as the 1st argument.
 * 
 *   2. (reg-sub
 *     :a-b-sub
 *     (fn [q-vec d-vec]
 *       [(subs/subscribe [:a-sub])
 *        (subs/subscribe [:b-sub])])
 *     (fn [[a b] [_]] {:a a :b b}))
 * 
 *   Two functions provided. The 2nd is computation function, as before. The 1st
 *   is returns what `input signals` should be provided to the computation. The
 *   `input signals` function is called with two arguments: the query vector
 *   and the dynamic vector. The return value can be singleton reaction or
 *   a sequence of reactions.
 * 
 *   3. (reg-sub
 *     :a-b-sub
 *     :<- [:a-sub]
 *     :<- [:b-sub]
 *     (fn [[a b] [_]] {:a a :b b}))```
 *   This 3rd variation is just syntactic sugar for the 2nd. Pairs are supplied instead
 *   of an `input signals` functions. `:<-` is supplied followed by the subscription
 *   vector.
 *   
 */
re_frame.subs.reg_sub = (function re_frame$subs$reg_sub(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11073 = arguments.length;
var i__8680__auto___11074 = (0);
while(true){
if((i__8680__auto___11074 < len__8679__auto___11073)){
args__8686__auto__.push((arguments[i__8680__auto___11074]));

var G__11075 = (i__8680__auto___11074 + (1));
i__8680__auto___11074 = G__11075;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (query_id,args){
var computation_fn = cljs.core.last.call(null,args);
var input_args = cljs.core.butlast.call(null,args);
var err_header = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: reg-sub for "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", ")].join('');
var inputs_fn = (function (){var G__11020 = cljs.core.count.call(null,input_args);
switch (G__11020) {
case (0):
return ((function (G__11020,computation_fn,input_args,err_header){
return (function() {
var G__11077 = null;
var G__11077__1 = (function (_){
return re_frame.db.app_db;
});
var G__11077__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__11077 = function(_,___$1){
switch(arguments.length){
case 1:
return G__11077__1.call(this,_);
case 2:
return G__11077__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__11077.cljs$core$IFn$_invoke$arity$1 = G__11077__1;
G__11077.cljs$core$IFn$_invoke$arity$2 = G__11077__2;
return G__11077;
})()
;})(G__11020,computation_fn,input_args,err_header))

break;
case (1):
var f = cljs.core.first.call(null,input_args);
if(cljs.core.fn_QMARK_.call(null,f)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"2nd argument expected to be an inputs function, got:",f);
}

return f;

break;
case (2):
return ((function (G__11020,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return re_frame.subs.subscribe.call(null,cljs.core.second.call(null,input_args));
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(G__11020,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__11020,computation_fn,input_args,err_header){
return (function() {
var re_frame$subs$inp_fn = null;
var re_frame$subs$inp_fn__1 = (function (_){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
var re_frame$subs$inp_fn__2 = (function (_,___$1){
return cljs.core.map.call(null,re_frame.subs.subscribe,vecs);
});
re_frame$subs$inp_fn = function(_,___$1){
switch(arguments.length){
case 1:
return re_frame$subs$inp_fn__1.call(this,_);
case 2:
return re_frame$subs$inp_fn__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$1 = re_frame$subs$inp_fn__1;
re_frame$subs$inp_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$inp_fn__2;
return re_frame$subs$inp_fn;
})()
;})(pairs,vecs,G__11020,computation_fn,input_args,err_header))

}
})();
return re_frame.registrar.register_handler.call(null,re_frame.subs.kind,query_id,((function (computation_fn,input_args,err_header,inputs_fn){
return (function() {
var re_frame$subs$subs_handler_fn = null;
var re_frame$subs$subs_handler_fn__2 = (function (db,query_vec){
var subscriptions = inputs_fn.call(null,query_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11047 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10146__auto___11078 = re_frame.interop.now.call(null);
var duration__10147__auto___11079 = (end__10146__auto___11078 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11048_11080 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11049_11081 = null;
var count__11050_11082 = (0);
var i__11051_11083 = (0);
while(true){
if((i__11051_11083 < count__11050_11082)){
var vec__11052_11084 = cljs.core._nth.call(null,chunk__11049_11081,i__11051_11083);
var k__10148__auto___11085 = cljs.core.nth.call(null,vec__11052_11084,(0),null);
var cb__10149__auto___11086 = cljs.core.nth.call(null,vec__11052_11084,(1),null);
try{cb__10149__auto___11086.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___11079,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11055){if((e11055 instanceof java.lang.Exception)){
var e__10150__auto___11087 = e11055;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___11085,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___11087);
} else {
throw e11055;

}
}
var G__11088 = seq__11048_11080;
var G__11089 = chunk__11049_11081;
var G__11090 = count__11050_11082;
var G__11091 = (i__11051_11083 + (1));
seq__11048_11080 = G__11088;
chunk__11049_11081 = G__11089;
count__11050_11082 = G__11090;
i__11051_11083 = G__11091;
continue;
} else {
var temp__6753__auto___11092 = cljs.core.seq.call(null,seq__11048_11080);
if(temp__6753__auto___11092){
var seq__11048_11093__$1 = temp__6753__auto___11092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11048_11093__$1)){
var c__8369__auto___11094 = cljs.core.chunk_first.call(null,seq__11048_11093__$1);
var G__11095 = cljs.core.chunk_rest.call(null,seq__11048_11093__$1);
var G__11096 = c__8369__auto___11094;
var G__11097 = cljs.core.count.call(null,c__8369__auto___11094);
var G__11098 = (0);
seq__11048_11080 = G__11095;
chunk__11049_11081 = G__11096;
count__11050_11082 = G__11097;
i__11051_11083 = G__11098;
continue;
} else {
var vec__11056_11099 = cljs.core.first.call(null,seq__11048_11093__$1);
var k__10148__auto___11100 = cljs.core.nth.call(null,vec__11056_11099,(0),null);
var cb__10149__auto___11101 = cljs.core.nth.call(null,vec__11056_11099,(1),null);
try{cb__10149__auto___11101.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___11079,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11059){if((e11059 instanceof java.lang.Exception)){
var e__10150__auto___11102 = e11059;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___11100,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___11102);
} else {
throw e11059;

}
}
var G__11103 = cljs.core.next.call(null,seq__11048_11093__$1);
var G__11104 = null;
var G__11105 = (0);
var G__11106 = (0);
seq__11048_11080 = G__11103;
chunk__11049_11081 = G__11104;
count__11050_11082 = G__11105;
i__11051_11083 = G__11106;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11047;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
var re_frame$subs$subs_handler_fn__3 = (function (db,query_vec,dyn_vec){
var subscriptions = inputs_fn.call(null,query_vec,dyn_vec);
var reaction_id = cljs.core.atom.call(null,null);
var reaction = re_frame.interop.make_reaction.call(null,((function (subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn){
return (function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11060 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10146__auto___11107 = re_frame.interop.now.call(null);
var duration__10147__auto___11108 = (end__10146__auto___11107 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11061_11109 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11062_11110 = null;
var count__11063_11111 = (0);
var i__11064_11112 = (0);
while(true){
if((i__11064_11112 < count__11063_11111)){
var vec__11065_11113 = cljs.core._nth.call(null,chunk__11062_11110,i__11064_11112);
var k__10148__auto___11114 = cljs.core.nth.call(null,vec__11065_11113,(0),null);
var cb__10149__auto___11115 = cljs.core.nth.call(null,vec__11065_11113,(1),null);
try{cb__10149__auto___11115.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___11108,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11068){if((e11068 instanceof java.lang.Exception)){
var e__10150__auto___11116 = e11068;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___11114,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___11116);
} else {
throw e11068;

}
}
var G__11117 = seq__11061_11109;
var G__11118 = chunk__11062_11110;
var G__11119 = count__11063_11111;
var G__11120 = (i__11064_11112 + (1));
seq__11061_11109 = G__11117;
chunk__11062_11110 = G__11118;
count__11063_11111 = G__11119;
i__11064_11112 = G__11120;
continue;
} else {
var temp__6753__auto___11121 = cljs.core.seq.call(null,seq__11061_11109);
if(temp__6753__auto___11121){
var seq__11061_11122__$1 = temp__6753__auto___11121;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11061_11122__$1)){
var c__8369__auto___11123 = cljs.core.chunk_first.call(null,seq__11061_11122__$1);
var G__11124 = cljs.core.chunk_rest.call(null,seq__11061_11122__$1);
var G__11125 = c__8369__auto___11123;
var G__11126 = cljs.core.count.call(null,c__8369__auto___11123);
var G__11127 = (0);
seq__11061_11109 = G__11124;
chunk__11062_11110 = G__11125;
count__11063_11111 = G__11126;
i__11064_11112 = G__11127;
continue;
} else {
var vec__11069_11128 = cljs.core.first.call(null,seq__11061_11122__$1);
var k__10148__auto___11129 = cljs.core.nth.call(null,vec__11069_11128,(0),null);
var cb__10149__auto___11130 = cljs.core.nth.call(null,vec__11069_11128,(1),null);
try{cb__10149__auto___11130.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___11108,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11072){if((e11072 instanceof java.lang.Exception)){
var e__10150__auto___11131 = e11072;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___11129,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___11131);
} else {
throw e11072;

}
}
var G__11132 = cljs.core.next.call(null,seq__11061_11122__$1);
var G__11133 = null;
var G__11134 = (0);
var G__11135 = (0);
seq__11061_11109 = G__11132;
chunk__11062_11110 = G__11133;
count__11063_11111 = G__11134;
i__11064_11112 = G__11135;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11060;
}} else {
return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}
});})(subscriptions,reaction_id,computation_fn,input_args,err_header,inputs_fn))
);
cljs.core.reset_BANG_.call(null,reaction_id,re_frame.interop.reagent_id.call(null,reaction));

return reaction;
});
re_frame$subs$subs_handler_fn = function(db,query_vec,dyn_vec){
switch(arguments.length){
case 2:
return re_frame$subs$subs_handler_fn__2.call(this,db,query_vec);
case 3:
return re_frame$subs$subs_handler_fn__3.call(this,db,query_vec,dyn_vec);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$2 = re_frame$subs$subs_handler_fn__2;
re_frame$subs$subs_handler_fn.cljs$core$IFn$_invoke$arity$3 = re_frame$subs$subs_handler_fn__3;
return re_frame$subs$subs_handler_fn;
})()
;})(computation_fn,input_args,err_header,inputs_fn))
);
});

re_frame.subs.reg_sub.cljs$lang$maxFixedArity = (1);

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq11018){
var G__11019 = cljs.core.first.call(null,seq11018);
var seq11018__$1 = cljs.core.next.call(null,seq11018);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__11019,seq11018__$1);
});


//# sourceMappingURL=subs.js.map?rel=1537038597299