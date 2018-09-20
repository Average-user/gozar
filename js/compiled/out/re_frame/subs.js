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
var seq__12055_12065 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.subs.query__GT_reaction));
var chunk__12056_12066 = null;
var count__12057_12067 = (0);
var i__12058_12068 = (0);
while(true){
if((i__12058_12068 < count__12057_12067)){
var vec__12059_12069 = cljs.core._nth.call(null,chunk__12056_12066,i__12058_12068);
var k_12070 = cljs.core.nth.call(null,vec__12059_12069,(0),null);
var rxn_12071 = cljs.core.nth.call(null,vec__12059_12069,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_12071);

var G__12072 = seq__12055_12065;
var G__12073 = chunk__12056_12066;
var G__12074 = count__12057_12067;
var G__12075 = (i__12058_12068 + (1));
seq__12055_12065 = G__12072;
chunk__12056_12066 = G__12073;
count__12057_12067 = G__12074;
i__12058_12068 = G__12075;
continue;
} else {
var temp__6753__auto___12076 = cljs.core.seq.call(null,seq__12055_12065);
if(temp__6753__auto___12076){
var seq__12055_12077__$1 = temp__6753__auto___12076;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12055_12077__$1)){
var c__8369__auto___12078 = cljs.core.chunk_first.call(null,seq__12055_12077__$1);
var G__12079 = cljs.core.chunk_rest.call(null,seq__12055_12077__$1);
var G__12080 = c__8369__auto___12078;
var G__12081 = cljs.core.count.call(null,c__8369__auto___12078);
var G__12082 = (0);
seq__12055_12065 = G__12079;
chunk__12056_12066 = G__12080;
count__12057_12067 = G__12081;
i__12058_12068 = G__12082;
continue;
} else {
var vec__12062_12083 = cljs.core.first.call(null,seq__12055_12077__$1);
var k_12084 = cljs.core.nth.call(null,vec__12062_12083,(0),null);
var rxn_12085 = cljs.core.nth.call(null,vec__12062_12083,(1),null);
re_frame.interop.dispose_BANG_.call(null,rxn_12085);

var G__12086 = cljs.core.next.call(null,seq__12055_12077__$1);
var G__12087 = null;
var G__12088 = (0);
var G__12089 = (0);
seq__12055_12065 = G__12086;
chunk__12056_12066 = G__12087;
count__12057_12067 = G__12088;
i__12058_12068 = G__12089;
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
var _STAR_current_trace_STAR_12103 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11719__auto___12116 = re_frame.interop.now.call(null);
var duration__11720__auto___12117 = (end__11719__auto___12116 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__12104_12118 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__12105_12119 = null;
var count__12106_12120 = (0);
var i__12107_12121 = (0);
while(true){
if((i__12107_12121 < count__12106_12120)){
var vec__12108_12122 = cljs.core._nth.call(null,chunk__12105_12119,i__12107_12121);
var k__11721__auto___12123 = cljs.core.nth.call(null,vec__12108_12122,(0),null);
var cb__11722__auto___12124 = cljs.core.nth.call(null,vec__12108_12122,(1),null);
try{cb__11722__auto___12124.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12117,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12111){if((e12111 instanceof java.lang.Exception)){
var e__11723__auto___12125 = e12111;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12123,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12125);
} else {
throw e12111;

}
}
var G__12126 = seq__12104_12118;
var G__12127 = chunk__12105_12119;
var G__12128 = count__12106_12120;
var G__12129 = (i__12107_12121 + (1));
seq__12104_12118 = G__12126;
chunk__12105_12119 = G__12127;
count__12106_12120 = G__12128;
i__12107_12121 = G__12129;
continue;
} else {
var temp__6753__auto___12130 = cljs.core.seq.call(null,seq__12104_12118);
if(temp__6753__auto___12130){
var seq__12104_12131__$1 = temp__6753__auto___12130;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12104_12131__$1)){
var c__8369__auto___12132 = cljs.core.chunk_first.call(null,seq__12104_12131__$1);
var G__12133 = cljs.core.chunk_rest.call(null,seq__12104_12131__$1);
var G__12134 = c__8369__auto___12132;
var G__12135 = cljs.core.count.call(null,c__8369__auto___12132);
var G__12136 = (0);
seq__12104_12118 = G__12133;
chunk__12105_12119 = G__12134;
count__12106_12120 = G__12135;
i__12107_12121 = G__12136;
continue;
} else {
var vec__12112_12137 = cljs.core.first.call(null,seq__12104_12131__$1);
var k__11721__auto___12138 = cljs.core.nth.call(null,vec__12112_12137,(0),null);
var cb__11722__auto___12139 = cljs.core.nth.call(null,vec__12112_12137,(1),null);
try{cb__11722__auto___12139.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12117,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12115){if((e12115 instanceof java.lang.Exception)){
var e__11723__auto___12140 = e12115;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12138,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12140);
} else {
throw e12115;

}
}
var G__12141 = cljs.core.next.call(null,seq__12104_12131__$1);
var G__12142 = null;
var G__12143 = (0);
var G__12144 = (0);
seq__12104_12118 = G__12141;
chunk__12105_12119 = G__12142;
count__12106_12120 = G__12143;
i__12107_12121 = G__12144;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12103;
}} else {
return null;
}
});})(cache_key))
);

cljs.core.swap_BANG_.call(null,re_frame.subs.query__GT_reaction,cljs.core.assoc,cache_key,r);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12145 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12145;

} else {
}

return r;
});
re_frame.subs.cache_lookup = (function re_frame$subs$cache_lookup(var_args){
var args12146 = [];
var len__8679__auto___12149 = arguments.length;
var i__8680__auto___12150 = (0);
while(true){
if((i__8680__auto___12150 < len__8679__auto___12149)){
args12146.push((arguments[i__8680__auto___12150]));

var G__12151 = (i__8680__auto___12150 + (1));
i__8680__auto___12150 = G__12151;
continue;
} else {
}
break;
}

var G__12148 = args12146.length;
switch (G__12148) {
case 1:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.cache_lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12146.length)].join('')));

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
var args12153 = [];
var len__8679__auto___12182 = arguments.length;
var i__8680__auto___12183 = (0);
while(true){
if((i__8680__auto___12183 < len__8679__auto___12182)){
args12153.push((arguments[i__8680__auto___12183]));

var G__12184 = (i__8680__auto___12183 + (1));
i__8680__auto___12183 = G__12184;
continue;
} else {
}
break;
}

var G__12155 = args12153.length;
switch (G__12155) {
case 1:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args12153.length)].join('')));

}
});

re_frame.subs.subscribe.cljs$core$IFn$_invoke$arity$1 = (function (query_v){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_12156 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_v], null)], null));

try{try{var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12186 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12186;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12187 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12187;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12188 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12188;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
return re_frame.subs.cache_and_return.call(null,query_v,cljs.core.PersistentVector.EMPTY,handler_fn.call(null,re_frame.db.app_db,query_v));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11719__auto___12189 = re_frame.interop.now.call(null);
var duration__11720__auto___12190 = (end__11719__auto___12189 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__12157_12191 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__12158_12192 = null;
var count__12159_12193 = (0);
var i__12160_12194 = (0);
while(true){
if((i__12160_12194 < count__12159_12193)){
var vec__12161_12195 = cljs.core._nth.call(null,chunk__12158_12192,i__12160_12194);
var k__11721__auto___12196 = cljs.core.nth.call(null,vec__12161_12195,(0),null);
var cb__11722__auto___12197 = cljs.core.nth.call(null,vec__12161_12195,(1),null);
try{cb__11722__auto___12197.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12190,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12164){if((e12164 instanceof java.lang.Exception)){
var e__11723__auto___12198 = e12164;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12196,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12198);
} else {
throw e12164;

}
}
var G__12199 = seq__12157_12191;
var G__12200 = chunk__12158_12192;
var G__12201 = count__12159_12193;
var G__12202 = (i__12160_12194 + (1));
seq__12157_12191 = G__12199;
chunk__12158_12192 = G__12200;
count__12159_12193 = G__12201;
i__12160_12194 = G__12202;
continue;
} else {
var temp__6753__auto___12203 = cljs.core.seq.call(null,seq__12157_12191);
if(temp__6753__auto___12203){
var seq__12157_12204__$1 = temp__6753__auto___12203;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12157_12204__$1)){
var c__8369__auto___12205 = cljs.core.chunk_first.call(null,seq__12157_12204__$1);
var G__12206 = cljs.core.chunk_rest.call(null,seq__12157_12204__$1);
var G__12207 = c__8369__auto___12205;
var G__12208 = cljs.core.count.call(null,c__8369__auto___12205);
var G__12209 = (0);
seq__12157_12191 = G__12206;
chunk__12158_12192 = G__12207;
count__12159_12193 = G__12208;
i__12160_12194 = G__12209;
continue;
} else {
var vec__12165_12210 = cljs.core.first.call(null,seq__12157_12204__$1);
var k__11721__auto___12211 = cljs.core.nth.call(null,vec__12165_12210,(0),null);
var cb__11722__auto___12212 = cljs.core.nth.call(null,vec__12165_12210,(1),null);
try{cb__11722__auto___12212.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12190,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12168){if((e12168 instanceof java.lang.Exception)){
var e__11723__auto___12213 = e12168;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12211,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12213);
} else {
throw e12168;

}
}
var G__12214 = cljs.core.next.call(null,seq__12157_12204__$1);
var G__12215 = null;
var G__12216 = (0);
var G__12217 = (0);
seq__12157_12191 = G__12214;
chunk__12158_12192 = G__12215;
count__12159_12193 = G__12216;
i__12160_12194 = G__12217;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12156;
}} else {
var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,query_v);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12218 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12218;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,query_v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12219 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12219;

} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12220 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12220;

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
var _STAR_current_trace_STAR_12169 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,v),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),v,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dynv], null)], null));

try{try{var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12221 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12221;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12222 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12222;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6753__auto___12223 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6753__auto___12223)){
var not_reactive_12224 = temp__6753__auto___12223;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_12224);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12225 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12225;

} else {
}

return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("re-frame: no subscription handler registered for: \""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_id),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\". Returning a nil subscription.")].join(''));
} else {
var dyn_vals = re_frame.interop.make_reaction.call(null,((function (query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_12169){
return (function (){
return cljs.core.mapv.call(null,cljs.core.deref,dynv);
});})(query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_12169))
);
var sub = re_frame.interop.make_reaction.call(null,((function (dyn_vals,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_12169){
return (function (){
return handler_fn.call(null,re_frame.db.app_db,v,cljs.core.deref.call(null,dyn_vals));
});})(dyn_vals,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_12169))
);
return re_frame.subs.cache_and_return.call(null,v,dynv,re_frame.interop.make_reaction.call(null,((function (dyn_vals,sub,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_12169){
return (function (){
return cljs.core.deref.call(null,cljs.core.deref.call(null,sub));
});})(dyn_vals,sub,query_id,handler_fn,temp__6751__auto__,_STAR_current_trace_STAR_12169))
));
}
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11719__auto___12226 = re_frame.interop.now.call(null);
var duration__11720__auto___12227 = (end__11719__auto___12226 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__12170_12228 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__12171_12229 = null;
var count__12172_12230 = (0);
var i__12173_12231 = (0);
while(true){
if((i__12173_12231 < count__12172_12230)){
var vec__12174_12232 = cljs.core._nth.call(null,chunk__12171_12229,i__12173_12231);
var k__11721__auto___12233 = cljs.core.nth.call(null,vec__12174_12232,(0),null);
var cb__11722__auto___12234 = cljs.core.nth.call(null,vec__12174_12232,(1),null);
try{cb__11722__auto___12234.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12227,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12177){if((e12177 instanceof java.lang.Exception)){
var e__11723__auto___12235 = e12177;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12233,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12235);
} else {
throw e12177;

}
}
var G__12236 = seq__12170_12228;
var G__12237 = chunk__12171_12229;
var G__12238 = count__12172_12230;
var G__12239 = (i__12173_12231 + (1));
seq__12170_12228 = G__12236;
chunk__12171_12229 = G__12237;
count__12172_12230 = G__12238;
i__12173_12231 = G__12239;
continue;
} else {
var temp__6753__auto___12240 = cljs.core.seq.call(null,seq__12170_12228);
if(temp__6753__auto___12240){
var seq__12170_12241__$1 = temp__6753__auto___12240;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12170_12241__$1)){
var c__8369__auto___12242 = cljs.core.chunk_first.call(null,seq__12170_12241__$1);
var G__12243 = cljs.core.chunk_rest.call(null,seq__12170_12241__$1);
var G__12244 = c__8369__auto___12242;
var G__12245 = cljs.core.count.call(null,c__8369__auto___12242);
var G__12246 = (0);
seq__12170_12228 = G__12243;
chunk__12171_12229 = G__12244;
count__12172_12230 = G__12245;
i__12173_12231 = G__12246;
continue;
} else {
var vec__12178_12247 = cljs.core.first.call(null,seq__12170_12241__$1);
var k__11721__auto___12248 = cljs.core.nth.call(null,vec__12178_12247,(0),null);
var cb__11722__auto___12249 = cljs.core.nth.call(null,vec__12178_12247,(1),null);
try{cb__11722__auto___12249.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12227,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12181){if((e12181 instanceof java.lang.Exception)){
var e__11723__auto___12250 = e12181;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12248,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12250);
} else {
throw e12181;

}
}
var G__12251 = cljs.core.next.call(null,seq__12170_12241__$1);
var G__12252 = null;
var G__12253 = (0);
var G__12254 = (0);
seq__12170_12228 = G__12251;
chunk__12171_12229 = G__12252;
count__12172_12230 = G__12253;
i__12173_12231 = G__12254;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12169;
}} else {
var temp__6751__auto__ = re_frame.subs.cache_lookup.call(null,v,dynv);
if(cljs.core.truth_(temp__6751__auto__)){
var cached = temp__6751__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12255 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cached)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12255;

} else {
}

return cached;
} else {
var query_id = re_frame.utils.first_in_vector.call(null,v);
var handler_fn = re_frame.registrar.get_handler.call(null,re_frame.subs.kind,query_id);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12256 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12256;

} else {
}

if(re_frame.interop.debug_enabled_QMARK_){
var temp__6753__auto___12257 = cljs.core.not_empty.call(null,cljs.core.remove.call(null,re_frame.interop.ratom_QMARK_,dynv));
if(cljs.core.truth_(temp__6753__auto___12257)){
var not_reactive_12258 = temp__6753__auto___12257;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: your subscription's dynamic parameters that don't implement IReactiveAtom:",not_reactive_12258);
} else {
}
} else {
}

if((handler_fn == null)){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12259 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12259;

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
return cljs.core.into.call(null,cljs.core.empty.call(null,m),cljs.core.map.call(null,(function (p__12264){
var vec__12265 = p__12264;
var k = cljs.core.nth.call(null,vec__12265,(0),null);
var v = cljs.core.nth.call(null,vec__12265,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,f.call(null,v)], null);
})),m);
});
re_frame.subs.deref_input_signals = (function re_frame$subs$deref_input_signals(signals,query_id){
var signals__$1 = ((cljs.core.sequential_QMARK_.call(null,signals))?cljs.core.map.call(null,cljs.core.deref,signals):((cljs.core.map_QMARK_.call(null,signals))?re_frame.subs.map_vals.call(null,cljs.core.deref,signals):(cljs.core.truth_(re_frame.interop.deref_QMARK_.call(null,signals))?cljs.core.deref.call(null,signals):re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: in the reg-sub for ",query_id,", the input-signals function returns: ",signals)
)));
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__11736__auto___12268 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-signals","input-signals",563633497),cljs.core.map.call(null,re_frame.interop.reagent_id,signals__$1)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__11736__auto___12268;

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
var len__8679__auto___12324 = arguments.length;
var i__8680__auto___12325 = (0);
while(true){
if((i__8680__auto___12325 < len__8679__auto___12324)){
args__8686__auto__.push((arguments[i__8680__auto___12325]));

var G__12326 = (i__8680__auto___12325 + (1));
i__8680__auto___12325 = G__12326;
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
var inputs_fn = (function (){var G__12271 = cljs.core.count.call(null,input_args);
switch (G__12271) {
case (0):
return ((function (G__12271,computation_fn,input_args,err_header){
return (function() {
var G__12328 = null;
var G__12328__1 = (function (_){
return re_frame.db.app_db;
});
var G__12328__2 = (function (_,___$1){
return re_frame.db.app_db;
});
G__12328 = function(_,___$1){
switch(arguments.length){
case 1:
return G__12328__1.call(this,_);
case 2:
return G__12328__2.call(this,_,___$1);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__12328.cljs$core$IFn$_invoke$arity$1 = G__12328__1;
G__12328.cljs$core$IFn$_invoke$arity$2 = G__12328__2;
return G__12328;
})()
;})(G__12271,computation_fn,input_args,err_header))

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
return ((function (G__12271,computation_fn,input_args,err_header){
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
;})(G__12271,computation_fn,input_args,err_header))

break;
default:
var pairs = cljs.core.partition.call(null,(2),input_args);
var vecs = cljs.core.map.call(null,cljs.core.last,pairs);
if(cljs.core.every_QMARK_.call(null,cljs.core.vector_QMARK_,vecs)){
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),err_header,"expected pairs of :<- and vectors, got:",pairs);
}

return ((function (pairs,vecs,G__12271,computation_fn,input_args,err_header){
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
;})(pairs,vecs,G__12271,computation_fn,input_args,err_header))

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
var _STAR_current_trace_STAR_12298 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11719__auto___12329 = re_frame.interop.now.call(null);
var duration__11720__auto___12330 = (end__11719__auto___12329 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__12299_12331 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__12300_12332 = null;
var count__12301_12333 = (0);
var i__12302_12334 = (0);
while(true){
if((i__12302_12334 < count__12301_12333)){
var vec__12303_12335 = cljs.core._nth.call(null,chunk__12300_12332,i__12302_12334);
var k__11721__auto___12336 = cljs.core.nth.call(null,vec__12303_12335,(0),null);
var cb__11722__auto___12337 = cljs.core.nth.call(null,vec__12303_12335,(1),null);
try{cb__11722__auto___12337.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12330,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12306){if((e12306 instanceof java.lang.Exception)){
var e__11723__auto___12338 = e12306;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12336,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12338);
} else {
throw e12306;

}
}
var G__12339 = seq__12299_12331;
var G__12340 = chunk__12300_12332;
var G__12341 = count__12301_12333;
var G__12342 = (i__12302_12334 + (1));
seq__12299_12331 = G__12339;
chunk__12300_12332 = G__12340;
count__12301_12333 = G__12341;
i__12302_12334 = G__12342;
continue;
} else {
var temp__6753__auto___12343 = cljs.core.seq.call(null,seq__12299_12331);
if(temp__6753__auto___12343){
var seq__12299_12344__$1 = temp__6753__auto___12343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12299_12344__$1)){
var c__8369__auto___12345 = cljs.core.chunk_first.call(null,seq__12299_12344__$1);
var G__12346 = cljs.core.chunk_rest.call(null,seq__12299_12344__$1);
var G__12347 = c__8369__auto___12345;
var G__12348 = cljs.core.count.call(null,c__8369__auto___12345);
var G__12349 = (0);
seq__12299_12331 = G__12346;
chunk__12300_12332 = G__12347;
count__12301_12333 = G__12348;
i__12302_12334 = G__12349;
continue;
} else {
var vec__12307_12350 = cljs.core.first.call(null,seq__12299_12344__$1);
var k__11721__auto___12351 = cljs.core.nth.call(null,vec__12307_12350,(0),null);
var cb__11722__auto___12352 = cljs.core.nth.call(null,vec__12307_12350,(1),null);
try{cb__11722__auto___12352.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12330,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12310){if((e12310 instanceof java.lang.Exception)){
var e__11723__auto___12353 = e12310;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12351,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12353);
} else {
throw e12310;

}
}
var G__12354 = cljs.core.next.call(null,seq__12299_12344__$1);
var G__12355 = null;
var G__12356 = (0);
var G__12357 = (0);
seq__12299_12331 = G__12354;
chunk__12300_12332 = G__12355;
count__12301_12333 = G__12356;
i__12302_12334 = G__12357;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12298;
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
var _STAR_current_trace_STAR_12311 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.utils.first_in_vector.call(null,query_vec),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"query-v","query-v",-1514170131),query_vec,new cljs.core.Keyword(null,"dyn-v","dyn-v",949994592),dyn_vec,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref.call(null,reaction_id)], null)], null));

try{try{return computation_fn.call(null,re_frame.subs.deref_input_signals.call(null,subscriptions,query_id),query_vec,dyn_vec);
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__11719__auto___12358 = re_frame.interop.now.call(null);
var duration__11720__auto___12359 = (end__11719__auto___12358 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
var seq__12312_12360 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__12313_12361 = null;
var count__12314_12362 = (0);
var i__12315_12363 = (0);
while(true){
if((i__12315_12363 < count__12314_12362)){
var vec__12316_12364 = cljs.core._nth.call(null,chunk__12313_12361,i__12315_12363);
var k__11721__auto___12365 = cljs.core.nth.call(null,vec__12316_12364,(0),null);
var cb__11722__auto___12366 = cljs.core.nth.call(null,vec__12316_12364,(1),null);
try{cb__11722__auto___12366.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12359,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12319){if((e12319 instanceof java.lang.Exception)){
var e__11723__auto___12367 = e12319;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12365,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12367);
} else {
throw e12319;

}
}
var G__12368 = seq__12312_12360;
var G__12369 = chunk__12313_12361;
var G__12370 = count__12314_12362;
var G__12371 = (i__12315_12363 + (1));
seq__12312_12360 = G__12368;
chunk__12313_12361 = G__12369;
count__12314_12362 = G__12370;
i__12315_12363 = G__12371;
continue;
} else {
var temp__6753__auto___12372 = cljs.core.seq.call(null,seq__12312_12360);
if(temp__6753__auto___12372){
var seq__12312_12373__$1 = temp__6753__auto___12372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12312_12373__$1)){
var c__8369__auto___12374 = cljs.core.chunk_first.call(null,seq__12312_12373__$1);
var G__12375 = cljs.core.chunk_rest.call(null,seq__12312_12373__$1);
var G__12376 = c__8369__auto___12374;
var G__12377 = cljs.core.count.call(null,c__8369__auto___12374);
var G__12378 = (0);
seq__12312_12360 = G__12375;
chunk__12313_12361 = G__12376;
count__12314_12362 = G__12377;
i__12315_12363 = G__12378;
continue;
} else {
var vec__12320_12379 = cljs.core.first.call(null,seq__12312_12373__$1);
var k__11721__auto___12380 = cljs.core.nth.call(null,vec__12320_12379,(0),null);
var cb__11722__auto___12381 = cljs.core.nth.call(null,vec__12320_12379,(1),null);
try{cb__11722__auto___12381.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__11720__auto___12359,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null))], null));
}catch (e12323){if((e12323 instanceof java.lang.Exception)){
var e__11723__auto___12382 = e12323;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__11721__auto___12380,"while storing",re_frame.trace._STAR_current_trace_STAR_,e__11723__auto___12382);
} else {
throw e12323;

}
}
var G__12383 = cljs.core.next.call(null,seq__12312_12373__$1);
var G__12384 = null;
var G__12385 = (0);
var G__12386 = (0);
seq__12312_12360 = G__12383;
chunk__12313_12361 = G__12384;
count__12314_12362 = G__12385;
i__12315_12363 = G__12386;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_12311;
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

re_frame.subs.reg_sub.cljs$lang$applyTo = (function (seq12269){
var G__12270 = cljs.core.first.call(null,seq12269);
var seq12269__$1 = cljs.core.next.call(null,seq12269);
return re_frame.subs.reg_sub.cljs$core$IFn$_invoke$arity$variadic(G__12270,seq12269__$1);
});


//# sourceMappingURL=subs.js.map?rel=1537411813379