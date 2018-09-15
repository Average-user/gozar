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
var seq__10587 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10588 = null;
var count__10589 = (0);
var i__10590 = (0);
while(true){
if((i__10590 < count__10589)){
var vec__10591 = cljs.core._nth.call(null,chunk__10588,i__10590);
var effect_k = cljs.core.nth.call(null,vec__10591,(0),null);
var value = cljs.core.nth.call(null,vec__10591,(1),null);
var temp__6751__auto___10597 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6751__auto___10597)){
var effect_fn_10598 = temp__6751__auto___10597;
effect_fn_10598.call(null,value);
} else {
}

var G__10599 = seq__10587;
var G__10600 = chunk__10588;
var G__10601 = count__10589;
var G__10602 = (i__10590 + (1));
seq__10587 = G__10599;
chunk__10588 = G__10600;
count__10589 = G__10601;
i__10590 = G__10602;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10587);
if(temp__6753__auto__){
var seq__10587__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10587__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__10587__$1);
var G__10603 = cljs.core.chunk_rest.call(null,seq__10587__$1);
var G__10604 = c__8369__auto__;
var G__10605 = cljs.core.count.call(null,c__8369__auto__);
var G__10606 = (0);
seq__10587 = G__10603;
chunk__10588 = G__10604;
count__10589 = G__10605;
i__10590 = G__10606;
continue;
} else {
var vec__10594 = cljs.core.first.call(null,seq__10587__$1);
var effect_k = cljs.core.nth.call(null,vec__10594,(0),null);
var value = cljs.core.nth.call(null,vec__10594,(1),null);
var temp__6751__auto___10607 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_k,true);
if(cljs.core.truth_(temp__6751__auto___10607)){
var effect_fn_10608 = temp__6751__auto___10607;
effect_fn_10608.call(null,value);
} else {
}

var G__10609 = cljs.core.next.call(null,seq__10587__$1);
var G__10610 = null;
var G__10611 = (0);
var G__10612 = (0);
seq__10587 = G__10609;
chunk__10588 = G__10610;
count__10589 = G__10611;
i__10590 = G__10612;
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
var seq__10613 = cljs.core.seq.call(null,value);
var chunk__10614 = null;
var count__10615 = (0);
var i__10616 = (0);
while(true){
if((i__10616 < count__10615)){
var map__10617 = cljs.core._nth.call(null,chunk__10614,i__10616);
var map__10617__$1 = ((((!((map__10617 == null)))?((((map__10617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10617.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10617):map__10617);
var effect = map__10617__$1;
var ms = cljs.core.get.call(null,map__10617__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10617__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10613,chunk__10614,count__10615,i__10616,map__10617,map__10617__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10613,chunk__10614,count__10615,i__10616,map__10617,map__10617__$1,effect,ms,dispatch))
,ms);
}

var G__10621 = seq__10613;
var G__10622 = chunk__10614;
var G__10623 = count__10615;
var G__10624 = (i__10616 + (1));
seq__10613 = G__10621;
chunk__10614 = G__10622;
count__10615 = G__10623;
i__10616 = G__10624;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10613);
if(temp__6753__auto__){
var seq__10613__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10613__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__10613__$1);
var G__10625 = cljs.core.chunk_rest.call(null,seq__10613__$1);
var G__10626 = c__8369__auto__;
var G__10627 = cljs.core.count.call(null,c__8369__auto__);
var G__10628 = (0);
seq__10613 = G__10625;
chunk__10614 = G__10626;
count__10615 = G__10627;
i__10616 = G__10628;
continue;
} else {
var map__10619 = cljs.core.first.call(null,seq__10613__$1);
var map__10619__$1 = ((((!((map__10619 == null)))?((((map__10619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10619.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10619):map__10619);
var effect = map__10619__$1;
var ms = cljs.core.get.call(null,map__10619__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__10619__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number'))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__10613,chunk__10614,count__10615,i__10616,map__10619,map__10619__$1,effect,ms,dispatch,seq__10613__$1,temp__6753__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__10613,chunk__10614,count__10615,i__10616,map__10619,map__10619__$1,effect,ms,dispatch,seq__10613__$1,temp__6753__auto__))
,ms);
}

var G__10629 = cljs.core.next.call(null,seq__10613__$1);
var G__10630 = null;
var G__10631 = (0);
var G__10632 = (0);
seq__10613 = G__10629;
chunk__10614 = G__10630;
count__10615 = G__10631;
i__10616 = G__10632;
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

var seq__10633 = cljs.core.seq.call(null,value);
var chunk__10634 = null;
var count__10635 = (0);
var i__10636 = (0);
while(true){
if((i__10636 < count__10635)){
var event = cljs.core._nth.call(null,chunk__10634,i__10636);
re_frame.router.dispatch.call(null,event);

var G__10637 = seq__10633;
var G__10638 = chunk__10634;
var G__10639 = count__10635;
var G__10640 = (i__10636 + (1));
seq__10633 = G__10637;
chunk__10634 = G__10638;
count__10635 = G__10639;
i__10636 = G__10640;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10633);
if(temp__6753__auto__){
var seq__10633__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10633__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__10633__$1);
var G__10641 = cljs.core.chunk_rest.call(null,seq__10633__$1);
var G__10642 = c__8369__auto__;
var G__10643 = cljs.core.count.call(null,c__8369__auto__);
var G__10644 = (0);
seq__10633 = G__10641;
chunk__10634 = G__10642;
count__10635 = G__10643;
i__10636 = G__10644;
continue;
} else {
var event = cljs.core.first.call(null,seq__10633__$1);
re_frame.router.dispatch.call(null,event);

var G__10645 = cljs.core.next.call(null,seq__10633__$1);
var G__10646 = null;
var G__10647 = (0);
var G__10648 = (0);
seq__10633 = G__10645;
chunk__10634 = G__10646;
count__10635 = G__10647;
i__10636 = G__10648;
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
var seq__10649 = cljs.core.seq.call(null,((cljs.core.sequential_QMARK_.call(null,value))?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)));
var chunk__10650 = null;
var count__10651 = (0);
var i__10652 = (0);
while(true){
if((i__10652 < count__10651)){
var event = cljs.core._nth.call(null,chunk__10650,i__10652);
clear_event.call(null,event);

var G__10653 = seq__10649;
var G__10654 = chunk__10650;
var G__10655 = count__10651;
var G__10656 = (i__10652 + (1));
seq__10649 = G__10653;
chunk__10650 = G__10654;
count__10651 = G__10655;
i__10652 = G__10656;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__10649);
if(temp__6753__auto__){
var seq__10649__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10649__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__10649__$1);
var G__10657 = cljs.core.chunk_rest.call(null,seq__10649__$1);
var G__10658 = c__8369__auto__;
var G__10659 = cljs.core.count.call(null,c__8369__auto__);
var G__10660 = (0);
seq__10649 = G__10657;
chunk__10650 = G__10658;
count__10651 = G__10659;
i__10652 = G__10660;
continue;
} else {
var event = cljs.core.first.call(null,seq__10649__$1);
clear_event.call(null,event);

var G__10661 = cljs.core.next.call(null,seq__10649__$1);
var G__10662 = null;
var G__10663 = (0);
var G__10664 = (0);
seq__10649 = G__10661;
chunk__10650 = G__10662;
count__10651 = G__10663;
i__10652 = G__10664;
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

//# sourceMappingURL=fx.js.map?rel=1537053744838