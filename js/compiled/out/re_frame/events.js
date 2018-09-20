// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.events');
goog.require('cljs.core');
goog.require('re_frame.db');
goog.require('re_frame.utils');
goog.require('re_frame.interop');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.interceptor');
goog.require('re_frame.trace');
re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages
 */
re_frame.events.flatten_and_remove_nils = (function re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__11744_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__11744_SHARP_));
});
if(!(re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected a collection of interceptors, got:")].join(''),interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", given an empty interceptor chain")].join(''));
} else {
}

var temp__6753__auto___11745 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6753__auto___11745)){
var not_i_11746 = temp__6753__auto___11745;
if(cljs.core.fn_QMARK_.call(null,not_i_11746)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_11746);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_11746);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * An `event handler` will likely be at the end of the chain (wrapped in an interceptor).
 */
re_frame.events.register = (function re_frame$events$register(id,interceptors){
return re_frame.registrar.register_handler.call(null,re_frame.events.kind,id,re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector, look up the associated intercepter chain, and execute it.
 */
re_frame.events.handle = (function re_frame$events$handle(event_v){
var event_id = re_frame.utils.first_in_vector.call(null,event_v);
var temp__6751__auto__ = re_frame.registrar.get_handler.call(null,re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__6751__auto__)){
var interceptors = temp__6751__auto__;
if(cljs.core.truth_(re_frame.events._STAR_handling_STAR_)){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: while handling \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_frame.events._STAR_handling_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\", dispatch-sync was called for \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(event_v),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". You can't call dispatch-sync within an event handler.")].join(''));
} else {
var _STAR_handling_STAR_11761 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_11762 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11719__auto___11775 = re_frame.interop.now.call(null);
var duration__11720__auto___11776 = (end__11719__auto___11775 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__11763_11777 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__11764_11778 = null;
var count__11765_11779 = (0);
var i__11766_11780 = (0);
while(true){
if((i__11766_11780 < count__11765_11779)){
var vec__11767_11781 = cljs.core._nth.call(null,chunk__11764_11778,i__11766_11780);
var k__11721__auto___11782 = cljs.core.nth.call(null,vec__11767_11781,(0),null);
var cb__11722__auto___11783 = cljs.core.nth.call(null,vec__11767_11781,(1),null);
try{cb__11722__auto___11783.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___11776,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11770){if((e11770 instanceof java.lang.Exception)){
var e__11723__auto___11784 = e11770;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___11782,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___11784);
} else {
throw e11770;

}
}
var G__11785 = seq__11763_11777;
var G__11786 = chunk__11764_11778;
var G__11787 = count__11765_11779;
var G__11788 = (i__11766_11780 + (1));
seq__11763_11777 = G__11785;
chunk__11764_11778 = G__11786;
count__11765_11779 = G__11787;
i__11766_11780 = G__11788;
continue;
} else {
var temp__6753__auto___11789 = cljs.core.seq.call(null,seq__11763_11777);
if(temp__6753__auto___11789){
var seq__11763_11790__$1 = temp__6753__auto___11789;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11763_11790__$1)){
var c__8369__auto___11791 = cljs.core.chunk_first.call(null,seq__11763_11790__$1);
var G__11792 = cljs.core.chunk_rest.call(null,seq__11763_11790__$1);
var G__11793 = c__8369__auto___11791;
var G__11794 = cljs.core.count.call(null,c__8369__auto___11791);
var G__11795 = (0);
seq__11763_11777 = G__11792;
chunk__11764_11778 = G__11793;
count__11765_11779 = G__11794;
i__11766_11780 = G__11795;
continue;
} else {
var vec__11771_11796 = cljs.core.first.call(null,seq__11763_11790__$1);
var k__11721__auto___11797 = cljs.core.nth.call(null,vec__11771_11796,(0),null);
var cb__11722__auto___11798 = cljs.core.nth.call(null,vec__11771_11796,(1),null);
try{cb__11722__auto___11798.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___11776,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e11774){if((e11774 instanceof java.lang.Exception)){
var e__11723__auto___11799 = e11774;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___11797,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___11799);
} else {
throw e11774;

}
}
var G__11800 = cljs.core.next.call(null,seq__11763_11790__$1);
var G__11801 = null;
var G__11802 = (0);
var G__11803 = (0);
seq__11763_11777 = G__11800;
chunk__11764_11778 = G__11801;
count__11765_11779 = G__11802;
i__11766_11780 = G__11803;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_11762;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_11761;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1537411812443