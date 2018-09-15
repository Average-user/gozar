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
var make_chain = (function (p1__10171_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__10171_SHARP_));
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

var temp__6753__auto___10172 = cljs.core.first.call(null,cljs.core.remove.call(null,re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__6753__auto___10172)){
var not_i_10173 = temp__6753__auto___10172;
if(cljs.core.fn_QMARK_.call(null,not_i_10173)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got:")].join(''),not_i_10173);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: when registering "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", expected interceptors, but got:")].join(''),not_i_10173);
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
var _STAR_handling_STAR_10188 = re_frame.events._STAR_handling_STAR_;
re_frame.events._STAR_handling_STAR_ = event_v;

try{if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_10189 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__10146__auto___10202 = re_frame.interop.now.call(null);
var duration__10147__auto___10203 = (end__10146__auto___10202 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__10190_10204 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__10191_10205 = null;
var count__10192_10206 = (0);
var i__10193_10207 = (0);
while(true){
if((i__10193_10207 < count__10192_10206)){
var vec__10194_10208 = cljs.core._nth.call(null,chunk__10191_10205,i__10193_10207);
var k__10148__auto___10209 = cljs.core.nth.call(null,vec__10194_10208,(0),null);
var cb__10149__auto___10210 = cljs.core.nth.call(null,vec__10194_10208,(1),null);
try{cb__10149__auto___10210.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___10203,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10197){if((e10197 instanceof java.lang.Exception)){
var e__10150__auto___10211 = e10197;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___10209,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___10211);
} else {
throw e10197;

}
}
var G__10212 = seq__10190_10204;
var G__10213 = chunk__10191_10205;
var G__10214 = count__10192_10206;
var G__10215 = (i__10193_10207 + (1));
seq__10190_10204 = G__10212;
chunk__10191_10205 = G__10213;
count__10192_10206 = G__10214;
i__10193_10207 = G__10215;
continue;
} else {
var temp__6753__auto___10216 = cljs.core.seq.call(null,seq__10190_10204);
if(temp__6753__auto___10216){
var seq__10190_10217__$1 = temp__6753__auto___10216;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10190_10217__$1)){
var c__8369__auto___10218 = cljs.core.chunk_first.call(null,seq__10190_10217__$1);
var G__10219 = cljs.core.chunk_rest.call(null,seq__10190_10217__$1);
var G__10220 = c__8369__auto___10218;
var G__10221 = cljs.core.count.call(null,c__8369__auto___10218);
var G__10222 = (0);
seq__10190_10204 = G__10219;
chunk__10191_10205 = G__10220;
count__10192_10206 = G__10221;
i__10193_10207 = G__10222;
continue;
} else {
var vec__10198_10223 = cljs.core.first.call(null,seq__10190_10217__$1);
var k__10148__auto___10224 = cljs.core.nth.call(null,vec__10198_10223,(0),null);
var cb__10149__auto___10225 = cljs.core.nth.call(null,vec__10198_10223,(1),null);
try{cb__10149__auto___10225.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__10147__auto___10203,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e10201){if((e10201 instanceof java.lang.Exception)){
var e__10150__auto___10226 = e10201;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__10148__auto___10224,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__10150__auto___10226);
} else {
throw e10201;

}
}
var G__10227 = cljs.core.next.call(null,seq__10190_10217__$1);
var G__10228 = null;
var G__10229 = (0);
var G__10230 = (0);
seq__10190_10204 = G__10227;
chunk__10191_10205 = G__10228;
count__10192_10206 = G__10229;
i__10193_10207 = G__10230;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_10189;
}} else {
return re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_10188;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1537038595315