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
var seq__10637 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10638 = null;
var count__10639 = (0);
var i__10640 = (0);
while(true){
if((i__10640 < count__10639)){
var vec__10641 = cljs.core._nth.call(null,chunk__10638,i__10640);
var effect_k = cljs.core.nth.call(null,vec__10641,(0),null);
var value = cljs.core.nth.call(null,vec__10641,(1),null);
var temp__6751__auto___10647 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6751__auto___10647)){
var effect_fn_10648 = temp__6751__auto___10647;
effect_fn_10648.call(null,value);
} else {
}

var G__10649 = seq__10637;
var G__10650 = chunk__10638;
var G__10651 = count__10639;
var G__10652 = (i__10640 + (1));
seq__10637 = G__10649;
chunk__10638 = G__10650;
count__10639 = G__10651;
i__10640 = G__10652;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10637);
if(temp__6753__auto__){
var seq__10637__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10637__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__10637__$1);
var G__10653 = cljs.core.chunk_rest.call(null,seq__10637__$1);
var G__10654 = c__8369__auto__;
var G__10655 = cljs.core.count.call(null,c__8369__auto__);
var G__10656 = (0);
seq__10637 = G__10653;
chunk__10638 = G__10654;
count__10639 = G__10655;
i__10640 = G__10656;
continue;
} else {
var vec__10644 = cljs.core.first.call(null,seq__10637__$1);
var effect_k = cljs.core.nth.call(null,vec__10644,(0),null);
var value = cljs.core.nth.call(null,vec__10644,(1),null);
var temp__6751__auto___10657 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6751__auto___10657)){
var effect_fn_10658 = temp__6751__auto___10657;
effect_fn_10658.call(null,value);
} else {
}

var G__10659 = cljs.core.next.call(null,seq__10637__$1);
var G__10660 = null;
var G__10661 = (0);
var G__10662 = (0);
seq__10637 = G__10659;
chunk__10638 = G__10660;
count__10639 = G__10661;
i__10640 = G__10662;
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
var seq__10663 = cljs.core.seq.call(null,value);
var chunk__10664 = null;
var count__10665 = (0);
var i__10666 = (0);
while(true){
if((i__10666 < count__10665)){
var map__10667 = cljs.core._nth.call(null,chunk__10664,i__10666);
var map__10667__$1 = ((((!((map__10667 == null)))?((((map__10667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10667.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10667):map__10667);
var effect = map__10667__$1;
var ms = cljs.core.get.call(null,map__10667__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10667__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10663,chunk__10664,count__10665,i__10666,map__10667,map__10667__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10663,chunk__10664,count__10665,i__10666,map__10667,map__10667__$1,effect,ms,dispatch))
,ms);
}

var G__10671 = seq__10663;
var G__10672 = chunk__10664;
var G__10673 = count__10665;
var G__10674 = (i__10666 + (1));
seq__10663 = G__10671;
chunk__10664 = G__10672;
count__10665 = G__10673;
i__10666 = G__10674;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10663);
if(temp__6753__auto__){
var seq__10663__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10663__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__10663__$1);
var G__10675 = cljs.core.chunk_rest.call(null,seq__10663__$1);
var G__10676 = c__8369__auto__;
var G__10677 = cljs.core.count.call(null,c__8369__auto__);
var G__10678 = (0);
seq__10663 = G__10675;
chunk__10664 = G__10676;
count__10665 = G__10677;
i__10666 = G__10678;
continue;
} else {
var map__10669 = cljs.core.first.call(null,seq__10663__$1);
var map__10669__$1 = ((((!((map__10669 == null)))?((((map__10669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10669.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10669):map__10669);
var effect = map__10669__$1;
var ms = cljs.core.get.call(null,map__10669__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10669__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10663,chunk__10664,count__10665,i__10666,map__10669,map__10669__$1,effect,ms,dispatch,seq__10663__$1,temp__6753__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10663,chunk__10664,count__10665,i__10666,map__10669,map__10669__$1,effect,ms,dispatch,seq__10663__$1,temp__6753__auto__))
,ms);
}

var G__10679 = cljs.core.next.call(null,seq__10663__$1);
var G__10680 = null;
var G__10681 = (0);
var G__10682 = (0);
seq__10663 = G__10679;
chunk__10664 = G__10680;
count__10665 = G__10681;
i__10666 = G__10682;
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

var seq__10683 = cljs.core.seq.call(null,value);
var chunk__10684 = null;
var count__10685 = (0);
var i__10686 = (0);
while(true){
if((i__10686 < count__10685)){
var event = cljs.core._nth.call(null,chunk__10684,i__10686);
re_frame.router.dispatch.call(null,event);

var G__10687 = seq__10683;
var G__10688 = chunk__10684;
var G__10689 = count__10685;
var G__10690 = (i__10686 + (1));
seq__10683 = G__10687;
chunk__10684 = G__10688;
count__10685 = G__10689;
i__10686 = G__10690;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10683);
if(temp__6753__auto__){
var seq__10683__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10683__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__10683__$1);
var G__10691 = cljs.core.chunk_rest.call(null,seq__10683__$1);
var G__10692 = c__8369__auto__;
var G__10693 = cljs.core.count.call(null,c__8369__auto__);
var G__10694 = (0);
seq__10683 = G__10691;
chunk__10684 = G__10692;
count__10685 = G__10693;
i__10686 = G__10694;
continue;
} else {
var event = cljs.core.first.call(null,seq__10683__$1);
re_frame.router.dispatch.call(null,event);

var G__10695 = cljs.core.next.call(null,seq__10683__$1);
var G__10696 = null;
var G__10697 = (0);
var G__10698 = (0);
seq__10683 = G__10695;
chunk__10684 = G__10696;
count__10685 = G__10697;
i__10686 = G__10698;
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
var seq__10699 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__10700 = null;
var count__10701 = (0);
var i__10702 = (0);
while(true){
if((i__10702 < count__10701)){
var event = cljs.core._nth.call(null,chunk__10700,i__10702);
clear_event.call(null,event);

var G__10703 = seq__10699;
var G__10704 = chunk__10700;
var G__10705 = count__10701;
var G__10706 = (i__10702 + (1));
seq__10699 = G__10703;
chunk__10700 = G__10704;
count__10701 = G__10705;
i__10702 = G__10706;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10699);
if(temp__6753__auto__){
var seq__10699__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10699__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__10699__$1);
var G__10707 = cljs.core.chunk_rest.call(null,seq__10699__$1);
var G__10708 = c__8369__auto__;
var G__10709 = cljs.core.count.call(null,c__8369__auto__);
var G__10710 = (0);
seq__10699 = G__10707;
chunk__10700 = G__10708;
count__10701 = G__10709;
i__10702 = G__10710;
continue;
} else {
var event = cljs.core.first.call(null,seq__10699__$1);
clear_event.call(null,event);

var G__10711 = cljs.core.next.call(null,seq__10699__$1);
var G__10712 = null;
var G__10713 = (0);
var G__10714 = (0);
seq__10699 = G__10711;
chunk__10700 = G__10712;
count__10701 = G__10713;
i__10702 = G__10714;
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

//# sourceMappingURL=fx.js.map?rel=1537038596586