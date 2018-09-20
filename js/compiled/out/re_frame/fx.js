// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.register = cljs.core.partial.call(null,re_frame.registrar.register_handler,re_frame.fx.kind);
/**
 * An interceptor which actions a `context's` (side) `:effects`.
 * 
 *   For each key in the `:effects` map, call the `effects handler` previously
 *   registered using `reg-fx`.
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 *   call the registered effects handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
var seq__11888 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__11889 = null;
var count__11890 = (0);
var i__11891 = (0);
while(true){
if((i__11891 < count__11890)){
var vec__11892 = cljs.core._nth.call(null,chunk__11889,i__11891);
var effect_k = cljs.core.nth.call(null,vec__11892,(0),null);
var value = cljs.core.nth.call(null,vec__11892,(1),null);
var temp__6751__auto___11898 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6751__auto___11898)){
var effect_fn_11899 = temp__6751__auto___11898;
effect_fn_11899.call(null,value);
} else {
}

var G__11900 = seq__11888;
var G__11901 = chunk__11889;
var G__11902 = count__11890;
var G__11903 = (i__11891 + (1));
seq__11888 = G__11900;
chunk__11889 = G__11901;
count__11890 = G__11902;
i__11891 = G__11903;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__11888);
if(temp__6753__auto__){
var seq__11888__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11888__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__11888__$1);
var G__11904 = cljs.core.chunk_rest.call(null,seq__11888__$1);
var G__11905 = c__8369__auto__;
var G__11906 = cljs.core.count.call(null,c__8369__auto__);
var G__11907 = (0);
seq__11888 = G__11904;
chunk__11889 = G__11905;
count__11890 = G__11906;
i__11891 = G__11907;
continue;
} else {
var vec__11895 = cljs.core.first.call(null,seq__11888__$1);
var effect_k = cljs.core.nth.call(null,vec__11895,(0),null);
var value = cljs.core.nth.call(null,vec__11895,(1),null);
var temp__6751__auto___11908 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6751__auto___11908)){
var effect_fn_11909 = temp__6751__auto___11908;
effect_fn_11909.call(null,value);
} else {
}

var G__11910 = cljs.core.next.call(null,seq__11888__$1);
var G__11911 = null;
var G__11912 = (0);
var G__11913 = (0);
seq__11888 = G__11910;
chunk__11889 = G__11911;
count__11890 = G__11912;
i__11891 = G__11913;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__11914 = cljs.core.seq.call(null,value);
var chunk__11915 = null;
var count__11916 = (0);
var i__11917 = (0);
while(true){
if((i__11917 < count__11916)){
var map__11918 = cljs.core._nth.call(null,chunk__11915,i__11917);
var map__11918__$1 = ((((!((map__11918 == null)))?((((map__11918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11918.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11918):map__11918);
var effect = map__11918__$1;
var ms = cljs.core.get.call(null,map__11918__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11918__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11914,chunk__11915,count__11916,i__11917,map__11918,map__11918__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11914,chunk__11915,count__11916,i__11917,map__11918,map__11918__$1,effect,ms,dispatch))
,ms);
}

var G__11922 = seq__11914;
var G__11923 = chunk__11915;
var G__11924 = count__11916;
var G__11925 = (i__11917 + (1));
seq__11914 = G__11922;
chunk__11915 = G__11923;
count__11916 = G__11924;
i__11917 = G__11925;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__11914);
if(temp__6753__auto__){
var seq__11914__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11914__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__11914__$1);
var G__11926 = cljs.core.chunk_rest.call(null,seq__11914__$1);
var G__11927 = c__8369__auto__;
var G__11928 = cljs.core.count.call(null,c__8369__auto__);
var G__11929 = (0);
seq__11914 = G__11926;
chunk__11915 = G__11927;
count__11916 = G__11928;
i__11917 = G__11929;
continue;
} else {
var map__11920 = cljs.core.first.call(null,seq__11914__$1);
var map__11920__$1 = ((((!((map__11920 == null)))?((((map__11920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11920.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11920):map__11920);
var effect = map__11920__$1;
var ms = cljs.core.get.call(null,map__11920__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__11920__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__11914,chunk__11915,count__11916,i__11917,map__11920,map__11920__$1,effect,ms,dispatch,seq__11914__$1,temp__6753__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__11914,chunk__11915,count__11916,i__11917,map__11920,map__11920__$1,effect,ms,dispatch,seq__11914__$1,temp__6753__auto__))
,ms);
}

var G__11930 = cljs.core.next.call(null,seq__11914__$1);
var G__11931 = null;
var G__11932 = (0);
var G__11933 = (0);
seq__11914 = G__11930;
chunk__11915 = G__11931;
count__11916 = G__11932;
i__11917 = G__11933;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
}

var seq__11934 = cljs.core.seq.call(null,value);
var chunk__11935 = null;
var count__11936 = (0);
var i__11937 = (0);
while(true){
if((i__11937 < count__11936)){
var event = cljs.core._nth.call(null,chunk__11935,i__11937);
re_frame.router.dispatch.call(null,event);

var G__11938 = seq__11934;
var G__11939 = chunk__11935;
var G__11940 = count__11936;
var G__11941 = (i__11937 + (1));
seq__11934 = G__11938;
chunk__11935 = G__11939;
count__11936 = G__11940;
i__11937 = G__11941;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__11934);
if(temp__6753__auto__){
var seq__11934__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11934__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__11934__$1);
var G__11942 = cljs.core.chunk_rest.call(null,seq__11934__$1);
var G__11943 = c__8369__auto__;
var G__11944 = cljs.core.count.call(null,c__8369__auto__);
var G__11945 = (0);
seq__11934 = G__11942;
chunk__11935 = G__11943;
count__11936 = G__11944;
i__11937 = G__11945;
continue;
} else {
var event = cljs.core.first.call(null,seq__11934__$1);
re_frame.router.dispatch.call(null,event);

var G__11946 = cljs.core.next.call(null,seq__11934__$1);
var G__11947 = null;
var G__11948 = (0);
var G__11949 = (0);
seq__11934 = G__11946;
chunk__11935 = G__11947;
count__11936 = G__11948;
i__11937 = G__11949;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__11950 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__11951 = null;
var count__11952 = (0);
var i__11953 = (0);
while(true){
if((i__11953 < count__11952)){
var event = cljs.core._nth.call(null,chunk__11951,i__11953);
clear_event.call(null,event);

var G__11954 = seq__11950;
var G__11955 = chunk__11951;
var G__11956 = count__11952;
var G__11957 = (i__11953 + (1));
seq__11950 = G__11954;
chunk__11951 = G__11955;
count__11952 = G__11956;
i__11953 = G__11957;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__11950);
if(temp__6753__auto__){
var seq__11950__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11950__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__11950__$1);
var G__11958 = cljs.core.chunk_rest.call(null,seq__11950__$1);
var G__11959 = c__8369__auto__;
var G__11960 = cljs.core.count.call(null,c__8369__auto__);
var G__11961 = (0);
seq__11950 = G__11958;
chunk__11951 = G__11959;
count__11952 = G__11960;
i__11953 = G__11961;
continue;
} else {
var event = cljs.core.first.call(null,seq__11950__$1);
clear_event.call(null,event);

var G__11962 = cljs.core.next.call(null,seq__11950__$1);
var G__11963 = null;
var G__11964 = (0);
var G__11965 = (0);
seq__11950 = G__11962;
chunk__11951 = G__11963;
count__11952 = G__11964;
i__11953 = G__11965;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));
re_frame.fx.register.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
}));

//# sourceMappingURL=fx.js.map?rel=1537411812850