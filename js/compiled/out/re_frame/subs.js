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
var seq__10754_10764 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__10755_10765 = null;
var count__10756_10766 = (0);
var i__10757_10767 = (0);
while(true){
if((i__10757_10767 < count__10756_10766)){
var vec__10758_10768 = cljs.core._nth.call(null,chunk__10755_10765,i__10757_10767);
var k_10769 = cljs.core.nth.call(null,vec__10758_10768,(0),null);
var rxn_10770 = cljs.core.nth.call(null,vec__10758_10768,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_10770);

var G__10771 = seq__10754_10764;
var G__10772 = chunk__10755_10765;
var G__10773 = count__10756_10766;
var G__10774 = (i__10757_10767 + (1));
seq__10754_10764 = G__10771;
chunk__10755_10765 = G__10772;
count__10756_10766 = G__10773;
i__10757_10767 = G__10774;
continue;
} else {
var temp__6753__auto___10775 = cljs.core.seq.call(null,seq__10754_10764);
if(temp__6753__auto___10775){
var seq__10754_10776__$1 = temp__6753__auto___10775;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10754_10776__$1)){
var c__8369__auto___10777 = cljs.core.chunk_first.call(null,seq__10754_10776__$1);
var G__10778 = cljs.core.chunk_rest.call(null,seq__10754_10776__$1);
var G__10779 = c__8369__auto___10777;
var G__10780 = cljs.core.count.call(null,c__8369__auto___10777);
var G__10781 = (0);
seq__10754_10764 = G__10778;
chunk__10755_10765 = G__10779;
count__10756_10766 = G__10780;
i__10757_10767 = G__10781;
continue;
} else {
var vec__10761_10782 = cljs.core.first.call(null,seq__10754_10776__$1);
var k_10783 = cljs.core.nth.call(null,vec__10761_10782,(0),null);
var rxn_10784 = cljs.core.nth.call(null,vec__10761_10782,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_10784);

var G__10785 = cljs.core.next.call(null,seq__10754_10776__$1);
var G__10786 = null;
var G__10787 = (0);
var G__10788 = (0);
seq__10754_10764 = G__10785;
chunk__10755_10765 = G__10786;
count__10756_10766 = G__10787;
i__10757_10767 = G__10788;
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
var _STAR_current_trace_STAR_10802 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10418__auto___10815 = re_frame.interop.now.call(null);
var duration__10419__auto___10816 = (end__10418__auto___10815 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10803_10817 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10804_10818 = null;
var count__10805_10819 = (0);
var i__10806_10820 = (0);
while(true){
if((i__10806_10820 < count__10805_10819)){
var vec__10807_10821 = cljs.core._nth.call(null,chunk__10804_10818,i__10806_10820);
var k__10420__auto___10822 = cljs.core.nth.call(null,vec__10807_10821,(0),null);
var cb__10421__auto___10823 = cljs.core.nth.call(null,vec__10807_10821,(1),null);
try{cb__10421__auto___10823.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___10816,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10810){if((e10810 instanceof java.lang.Exception)){
var e__10422__auto___10824 = e10810;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___10822,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___10824);
} else {
throw e10810;

}
}
var G__10825 = seq__10803_10817;
var G__10826 = chunk__10804_10818;
var G__10827 = count__10805_10819;
var G__10828 = (i__10806_10820 + (1));
seq__10803_10817 = G__10825;
chunk__10804_10818 = G__10826;
count__10805_10819 = G__10827;
i__10806_10820 = G__10828;
continue;
} else {
var temp__6753__auto___10829 = cljs.core.seq.call(null,seq__10803_10817);
if(temp__6753__auto___10829){
var seq__10803_10830__$1 = temp__6753__auto___10829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10803_10830__$1)){
var c__8369__auto___10831 = cljs.core.chunk_first.call(null,seq__10803_10830__$1);
var G__10832 = cljs.core.chunk_rest.call(null,seq__10803_10830__$1);
var G__10833 = c__8369__auto___10831;
var G__10834 = cljs.core.count.call(null,c__8369__auto___10831);
var G__10835 = (0);
seq__10803_10817 = G__10832;
chunk__10804_10818 = G__10833;
count__10805_10819 = G__10834;
i__10806_10820 = G__10835;
continue;
} else {
var vec__10811_10836 = cljs.core.first.call(null,seq__10803_10830__$1);
var k__10420__auto___10837 = cljs.core.nth.call(null,vec__10811_10836,(0),null);
var cb__10421__auto___10838 = cljs.core.nth.call(null,vec__10811_10836,(1),null);
try{cb__10421__auto___10838.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___10816,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10814){if((e10814 instanceof java.lang.Exception)){
var e__10422__auto___10839 = e10814;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___10837,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___10839);
} else {
throw e10814;

}
}
var G__10840 = cljs.core.next.call(null,seq__10803_10830__$1);
var G__10841 = null;
var G__10842 = (0);
var G__10843 = (0);
seq__10803_10817 = G__10840;
chunk__10804_10818 = G__10841;
count__10805_10819 = G__10842;
i__10806_10820 = G__10843;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10802;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10844 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10844;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args10845 = [];
var len__8679__auto___10848 = arguments.length;
var i__8680__auto___10849 = (0);
while(true){
if((i__8680__auto___10849 < len__8679__auto___10848)){
args10845.push((arguments[i__8680__auto___10849]));

var G__10850 = (i__8680__auto___10849 + (1));
i__8680__auto___10849 = G__10850;
continue;
} else {
}
break;
}

var G__10847 = args10845.length;
switch (G__10847) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10845.length)].join('')));

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
var args10852 = [];
var len__8679__auto___10881 = arguments.length;
var i__8680__auto___10882 = (0);
while(true){
if((i__8680__auto___10882 < len__8679__auto___10881)){
args10852.push((arguments[i__8680__auto___10882]));

var G__10883 = (i__8680__auto___10882 + (1));
i__8680__auto___10882 = G__10883;
continue;
} else {
}
break;
}

var G__10854 = args10852.length;
switch (G__10854) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args10852.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_10855 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10885 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10885;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10886 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10886;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10887 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10887;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10418__auto___10888 = re_frame.interop.now.call(null);
var duration__10419__auto___10889 = (end__10418__auto___10888 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10856_10890 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10857_10891 = null;
var count__10858_10892 = (0);
var i__10859_10893 = (0);
while(true){
if((i__10859_10893 < count__10858_10892)){
var vec__10860_10894 = cljs.core._nth.call(null,chunk__10857_10891,i__10859_10893);
var k__10420__auto___10895 = cljs.core.nth.call(null,vec__10860_10894,(0),null);
var cb__10421__auto___10896 = cljs.core.nth.call(null,vec__10860_10894,(1),null);
try{cb__10421__auto___10896.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___10889,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10863){if((e10863 instanceof java.lang.Exception)){
var e__10422__auto___10897 = e10863;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___10895,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___10897);
} else {
throw e10863;

}
}
var G__10898 = seq__10856_10890;
var G__10899 = chunk__10857_10891;
var G__10900 = count__10858_10892;
var G__10901 = (i__10859_10893 + (1));
seq__10856_10890 = G__10898;
chunk__10857_10891 = G__10899;
count__10858_10892 = G__10900;
i__10859_10893 = G__10901;
continue;
} else {
var temp__6753__auto___10902 = cljs.core.seq.call(null,seq__10856_10890);
if(temp__6753__auto___10902){
var seq__10856_10903__$1 = temp__6753__auto___10902;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10856_10903__$1)){
var c__8369__auto___10904 = cljs.core.chunk_first.call(null,seq__10856_10903__$1);
var G__10905 = cljs.core.chunk_rest.call(null,seq__10856_10903__$1);
var G__10906 = c__8369__auto___10904;
var G__10907 = cljs.core.count.call(null,c__8369__auto___10904);
var G__10908 = (0);
seq__10856_10890 = G__10905;
chunk__10857_10891 = G__10906;
count__10858_10892 = G__10907;
i__10859_10893 = G__10908;
continue;
} else {
var vec__10864_10909 = cljs.core.first.call(null,seq__10856_10903__$1);
var k__10420__auto___10910 = cljs.core.nth.call(null,vec__10864_10909,(0),null);
var cb__10421__auto___10911 = cljs.core.nth.call(null,vec__10864_10909,(1),null);
try{cb__10421__auto___10911.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___10889,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10867){if((e10867 instanceof java.lang.Exception)){
var e__10422__auto___10912 = e10867;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___10910,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___10912);
} else {
throw e10867;

}
}
var G__10913 = cljs.core.next.call(null,seq__10856_10903__$1);
var G__10914 = null;
var G__10915 = (0);
var G__10916 = (0);
seq__10856_10890 = G__10913;
chunk__10857_10891 = G__10914;
count__10858_10892 = G__10915;
i__10859_10893 = G__10916;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10855;
}} else {
var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10917 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10917;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10918 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10918;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10919 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10919;

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
var _STAR_current_trace_STAR_10868 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10920 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10920;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10921 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10921;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6753__auto___10922 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6753__auto___10922)){
var not_reactive_10923 = temp__6753__auto___10922;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_10923);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10924 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10924;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10868){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10868))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10868){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10868))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10868){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_10868))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10418__auto___10925 = re_frame.interop.now.call(null);
var duration__10419__auto___10926 = (end__10418__auto___10925 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10869_10927 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10870_10928 = null;
var count__10871_10929 = (0);
var i__10872_10930 = (0);
while(true){
if((i__10872_10930 < count__10871_10929)){
var vec__10873_10931 = cljs.core._nth.call(null,chunk__10870_10928,i__10872_10930);
var k__10420__auto___10932 = cljs.core.nth.call(null,vec__10873_10931,(0),null);
var cb__10421__auto___10933 = cljs.core.nth.call(null,vec__10873_10931,(1),null);
try{cb__10421__auto___10933.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___10926,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10876){if((e10876 instanceof java.lang.Exception)){
var e__10422__auto___10934 = e10876;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___10932,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___10934);
} else {
throw e10876;

}
}
var G__10935 = seq__10869_10927;
var G__10936 = chunk__10870_10928;
var G__10937 = count__10871_10929;
var G__10938 = (i__10872_10930 + (1));
seq__10869_10927 = G__10935;
chunk__10870_10928 = G__10936;
count__10871_10929 = G__10937;
i__10872_10930 = G__10938;
continue;
} else {
var temp__6753__auto___10939 = cljs.core.seq.call(null,seq__10869_10927);
if(temp__6753__auto___10939){
var seq__10869_10940__$1 = temp__6753__auto___10939;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10869_10940__$1)){
var c__8369__auto___10941 = cljs.core.chunk_first.call(null,seq__10869_10940__$1);
var G__10942 = cljs.core.chunk_rest.call(null,seq__10869_10940__$1);
var G__10943 = c__8369__auto___10941;
var G__10944 = cljs.core.count.call(null,c__8369__auto___10941);
var G__10945 = (0);
seq__10869_10927 = G__10942;
chunk__10870_10928 = G__10943;
count__10871_10929 = G__10944;
i__10872_10930 = G__10945;
continue;
} else {
var vec__10877_10946 = cljs.core.first.call(null,seq__10869_10940__$1);
var k__10420__auto___10947 = cljs.core.nth.call(null,vec__10877_10946,(0),null);
var cb__10421__auto___10948 = cljs.core.nth.call(null,vec__10877_10946,(1),null);
try{cb__10421__auto___10948.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___10926,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10880){if((e10880 instanceof java.lang.Exception)){
var e__10422__auto___10949 = e10880;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___10947,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___10949);
} else {
throw e10880;

}
}
var G__10950 = cljs.core.next.call(null,seq__10869_10940__$1);
var G__10951 = null;
var G__10952 = (0);
var G__10953 = (0);
seq__10869_10927 = G__10950;
chunk__10870_10928 = G__10951;
count__10871_10929 = G__10952;
i__10872_10930 = G__10953;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10868;
}} else {
var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10954 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10954;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10955 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10955;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6753__auto___10956 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6753__auto___10956)){
var not_reactive_10957 = temp__6753__auto___10956;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_10957);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10958 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10958;

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
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__10963){
var vec__10964 = p__10963;
var k = cljs.core.nth.call(null,vec__10964,(0),null);
var v = cljs.core.nth.call(null,vec__10964,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__10435__auto___10967 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__10435__auto___10967;

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
var len__8679__auto___11023 = arguments.length;
var i__8680__auto___11024 = (0);
while(true){
if((i__8680__auto___11024 < len__8679__auto___11023)){
args__8686__auto__.push((arguments[i__8680__auto___11024]));

var G__11025 = (i__8680__auto___11024 + (1));
i__8680__auto___11024 = G__11025;
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
var inputs_fn = (function (){var G__10970 = cljs.core.count.call(null,input_args);
switch (G__10970) {
case (0):
return ((function (G__10970,computation_fn,input_args,err_header){
return (function() {
var G__11027 = null;
var G__11027__1 = (function (_){
return re_frame.db.app_db;
});
var G__11027__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__11027 = function(_,___$1){
switch(arguments.length){
case 1:
return G__11027__1.call(this,_);
case 2:
return G__11027__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__11027.cljs$core$IFn$_invoke$arity$1 = G__11027__1;
G__11027.cljs$core$IFn$_invoke$arity$2 = G__11027__2;
return G__11027;
})()
;})(G__10970,computation_fn,input_args,err_header))

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
return ((function (G__10970,computation_fn,input_args,err_header){
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
;})(G__10970,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__10970,computation_fn,input_args,err_header){
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
;})(pairs,vecs,G__10970,computation_fn,input_args,err_header))

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
var _STAR_current_trace_STAR_10997 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10418__auto___11028 = re_frame.interop.now.call(null);
var duration__10419__auto___11029 = (end__10418__auto___11028 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10998_11030 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10999_11031 = null;
var count__11000_11032 = (0);
var i__11001_11033 = (0);
while(true){
if((i__11001_11033 < count__11000_11032)){
var vec__11002_11034 = cljs.core._nth.call(null,chunk__10999_11031,i__11001_11033);
var k__10420__auto___11035 = cljs.core.nth.call(null,vec__11002_11034,(0),null);
var cb__10421__auto___11036 = cljs.core.nth.call(null,vec__11002_11034,(1),null);
try{cb__10421__auto___11036.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___11029,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11005){if((e11005 instanceof java.lang.Exception)){
var e__10422__auto___11037 = e11005;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___11035,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___11037);
} else {
throw e11005;

}
}
var G__11038 = seq__10998_11030;
var G__11039 = chunk__10999_11031;
var G__11040 = count__11000_11032;
var G__11041 = (i__11001_11033 + (1));
seq__10998_11030 = G__11038;
chunk__10999_11031 = G__11039;
count__11000_11032 = G__11040;
i__11001_11033 = G__11041;
continue;
} else {
var temp__6753__auto___11042 = cljs.core.seq.call(null,seq__10998_11030);
if(temp__6753__auto___11042){
var seq__10998_11043__$1 = temp__6753__auto___11042;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10998_11043__$1)){
var c__8369__auto___11044 = cljs.core.chunk_first.call(null,seq__10998_11043__$1);
var G__11045 = cljs.core.chunk_rest.call(null,seq__10998_11043__$1);
var G__11046 = c__8369__auto___11044;
var G__11047 = cljs.core.count.call(null,c__8369__auto___11044);
var G__11048 = (0);
seq__10998_11030 = G__11045;
chunk__10999_11031 = G__11046;
count__11000_11032 = G__11047;
i__11001_11033 = G__11048;
continue;
} else {
var vec__11006_11049 = cljs.core.first.call(null,seq__10998_11043__$1);
var k__10420__auto___11050 = cljs.core.nth.call(null,vec__11006_11049,(0),null);
var cb__10421__auto___11051 = cljs.core.nth.call(null,vec__11006_11049,(1),null);
try{cb__10421__auto___11051.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___11029,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11009){if((e11009 instanceof java.lang.Exception)){
var e__10422__auto___11052 = e11009;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___11050,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___11052);
} else {
throw e11009;

}
}
var G__11053 = cljs.core.next.call(null,seq__10998_11043__$1);
var G__11054 = null;
var G__11055 = (0);
var G__11056 = (0);
seq__10998_11030 = G__11053;
chunk__10999_11031 = G__11054;
count__11000_11032 = G__11055;
i__11001_11033 = G__11056;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10997;
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
var _STAR_current_trace_STAR_11010 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10418__auto___11057 = re_frame.interop.now.call(null);
var duration__10419__auto___11058 = (end__10418__auto___11057 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11011_11059 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11012_11060 = null;
var count__11013_11061 = (0);
var i__11014_11062 = (0);
while(true){
if((i__11014_11062 < count__11013_11061)){
var vec__11015_11063 = cljs.core._nth.call(null,chunk__11012_11060,i__11014_11062);
var k__10420__auto___11064 = cljs.core.nth.call(null,vec__11015_11063,(0),null);
var cb__10421__auto___11065 = cljs.core.nth.call(null,vec__11015_11063,(1),null);
try{cb__10421__auto___11065.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___11058,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11018){if((e11018 instanceof java.lang.Exception)){
var e__10422__auto___11066 = e11018;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___11064,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___11066);
} else {
throw e11018;

}
}
var G__11067 = seq__11011_11059;
var G__11068 = chunk__11012_11060;
var G__11069 = count__11013_11061;
var G__11070 = (i__11014_11062 + (1));
seq__11011_11059 = G__11067;
chunk__11012_11060 = G__11068;
count__11013_11061 = G__11069;
i__11014_11062 = G__11070;
continue;
} else {
var temp__6753__auto___11071 = cljs.core.seq.call(null,seq__11011_11059);
if(temp__6753__auto___11071){
var seq__11011_11072__$1 = temp__6753__auto___11071;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11011_11072__$1)){
var c__8369__auto___11073 = cljs.core.chunk_first.call(null,seq__11011_11072__$1);
var G__11074 = cljs.core.chunk_rest.call(null,seq__11011_11072__$1);
var G__11075 = c__8369__auto___11073;
var G__11076 = cljs.core.count.call(null,c__8369__auto___11073);
var G__11077 = (0);
seq__11011_11059 = G__11074;
chunk__11012_11060 = G__11075;
count__11013_11061 = G__11076;
i__11014_11062 = G__11077;
continue;
} else {
var vec__11019_11078 = cljs.core.first.call(null,seq__11011_11072__$1);
var k__10420__auto___11079 = cljs.core.nth.call(null,vec__11019_11078,(0),null);
var cb__10421__auto___11080 = cljs.core.nth.call(null,vec__11019_11078,(1),null);
try{cb__10421__auto___11080.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10419__auto___11058,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11022){if((e11022 instanceof java.lang.Exception)){
var e__10422__auto___11081 = e11022;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10420__auto___11079,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10422__auto___11081);
} else {
throw e11022;

}
}
var G__11082 = cljs.core.next.call(null,seq__11011_11072__$1);
var G__11083 = null;
var G__11084 = (0);
var G__11085 = (0);
seq__11011_11059 = G__11082;
chunk__11012_11060 = G__11083;
count__11013_11061 = G__11084;
i__11014_11062 = G__11085;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11010;
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

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq10968){
var G__10969 = cljs.core.first.call(null,seq10968);
var seq10968__$1 = cljs.core.next.call(null,seq10968);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__10969,seq10968__$1);
});


//# sourceMappingURL=subs.js.map?rel=1537053745409