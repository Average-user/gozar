// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frisk.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.ratom');
goog.require('re_frisk.data');
goog.require('re_frisk.devtool');
goog.require('re_frisk.ui');
goog.require('re_frisk.help');
goog.require('re_frame.registrar');
goog.require('re_frame.core');
re_frisk.core.post_event_callback = (function re_frisk$core$post_event_callback(value){
var cntx = cljs.core.first.call(null,value).call(null,new cljs.core.Keyword(null,"contexts","contexts",4351546).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)));
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_events,cljs.core.conj,(cljs.core.truth_(cntx)?cljs.core.assoc.call(null,cntx,new cljs.core.Keyword(null,"event","event",301435442),value):value));
});
re_frisk.core.render_re_frisk = (function re_frisk$core$render_re_frisk(params){
var div = document.createElement("div");
document.body.appendChild(div);

window.onbeforeunload = ((function (div){
return (function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)))){
return new cljs.core.Keyword(null,"win","win",-1624642689).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.deb_data)).alert("Application has been closed or refreshed. Debugger has been stoped!");
} else {
return null;
}
});})(div))
;

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frisk.ui.re_frisk_shell,re_frisk.data.re_frame_data,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_frisk.devtool.open_debugger_window], null),params)], null),div);
});
re_frisk.core.enable_re_frisk_BANG_ = (function re_frisk$core$enable_re_frisk_BANG_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11572 = arguments.length;
var i__8680__auto___11573 = (0);
while(true){
if((i__8680__auto___11573 < len__8679__auto___11572)){
args__8686__auto__.push((arguments[i__8680__auto___11573]));

var G__11574 = (i__8680__auto___11573 + (1));
i__8680__auto___11573 = G__11574;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
var prefs = cljs.core.first.call(null,params);
var event = reagent.ratom.make_reaction.call(null,((function (prefs){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (prefs){
return (function (a){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.first.call(null,a)],[(function (){var intc = cljs.core.map.call(null,((function (prefs){
return (function (p1__11564_SHARP_,p2__11565_SHARP_){
return cljs.core.merge.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_),(((cljs.core._EQ_.call(null,p2__11565_SHARP_,(0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_),new cljs.core.Keyword(null,"coeffects","coeffects",497912985))))?new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):(((cljs.core._EQ_.call(null,p2__11565_SHARP_,(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050))))?new cljs.core.Keyword(null,"do-fx","do-fx",1194163050).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_),new cljs.core.Keyword(null,"db-handler","db-handler",579530098)))?new cljs.core.Keyword(null,"db-handler","db-handler",579530098).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097)))?new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp):"id"
))))]),(cljs.core.truth_(new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"before","before",-1633692388),(((cljs.core._EQ_.call(null,p2__11565_SHARP_,(0))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_),new cljs.core.Keyword(null,"coeffects","coeffects",497912985))))?new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_),new cljs.core.Keyword(null,"db-handler","db-handler",579530098)))?new cljs.core.Keyword(null,"db-handler","db-handler",579530098).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_),new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097)))?new cljs.core.Keyword(null,"fx-handler","fx-handler",-549783097).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"after","after",594996914),(((cljs.core._EQ_.call(null,p2__11565_SHARP_,(1))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__11564_SHARP_),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050))))?new cljs.core.Keyword(null,"do-fx","do-fx",1194163050).cljs$core$IFn$_invoke$arity$1(re_frisk.help.intrcp_fn):"fn"
)], null):null));
});})(prefs))
,cljs.core.second.call(null,a),cljs.core.range.call(null,cljs.core.count.call(null,cljs.core.second.call(null,a))));
return cljs.core.PersistentHashMap.fromArrays([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,intc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" interceptors")].join('')],[intc]);
})()]);
});})(prefs))
,cljs.core.filter.call(null,((function (prefs){
return (function (p1__11566_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.key.call(null,p1__11566_SHARP_),new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246));
});})(prefs))
,cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,((function (prefs){
return (function (){
return new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
});})(prefs))
)))));
});})(prefs))
);
var sub = reagent.ratom.make_reaction.call(null,((function (prefs,event){
return (function (){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (prefs,event){
return (function (p1__11567_SHARP_){
var k = cljs.core.first.call(null,p1__11567_SHARP_);
return cljs.core.PersistentHashMap.fromArrays([k],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null))]);
});})(prefs,event))
,cljs.core.filter.call(null,((function (prefs,event){
return (function (p1__11568_SHARP_){
return cljs.core.not_EQ_.call(null,cljs.core.first.call(null,p1__11568_SHARP_),new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709));
});})(prefs,event))
,cljs.core.deref.call(null,reagent.ratom.make_reaction.call(null,((function (prefs,event){
return (function (){
return new cljs.core.Keyword(null,"sub","sub",-2093760025).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler));
});})(prefs,event))
)))));
});})(prefs,event))
);
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709),((function (prefs,event,sub){
return (function (db,_){
return db;
});})(prefs,event,sub))
);

cljs.core.reset_BANG_.call(null,re_frisk.data.re_frame_data,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handlers","handlers",79528781),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.count.call(null,cljs.core.deref.call(null,event)),event]),new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.count.call(null,cljs.core.deref.call(null,sub)),sub]),new cljs.core.Keyword(null,"fx","fx",-1237829572),reagent.ratom.make_reaction.call(null,((function (prefs,event,sub){
return (function (){
return cljs.core.map.call(null,((function (prefs,event,sub){
return (function (p1__11569_SHARP_){
if(cljs.core.truth_(p1__11569_SHARP_.call(null,re_frisk.help.fx))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__11569_SHARP_,p1__11569_SHARP_.call(null,re_frisk.help.fx)]);
} else {
return p1__11569_SHARP_;
}
});})(prefs,event,sub))
,cljs.core.keys.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler))));
});})(prefs,event,sub))
),new cljs.core.Keyword(null,"cofx","cofx",2013202907),reagent.ratom.make_reaction.call(null,((function (prefs,event,sub){
return (function (){
return cljs.core.map.call(null,((function (prefs,event,sub){
return (function (p1__11570_SHARP_){
if(cljs.core.truth_(p1__11570_SHARP_.call(null,re_frisk.help.cofx))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__11570_SHARP_,p1__11570_SHARP_.call(null,re_frisk.help.cofx)]);
} else {
return p1__11570_SHARP_;
}
});})(prefs,event,sub))
,cljs.core.keys.call(null,new cljs.core.Keyword(null,"cofx","cofx",2013202907).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.registrar.kind__GT_id__GT_handler))));
});})(prefs,event,sub))
)], null),new cljs.core.Keyword(null,"app-db","app-db",865606302),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-frisk.core","db","re-frisk.core/db",447694709)], null))], null));

cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc,new cljs.core.Keyword(null,"prefs","prefs",-1818938470),prefs);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"events?","events?",-780512682).cljs$core$IFn$_invoke$arity$1(prefs),false)){
} else {
re_frame.core.add_post_event_callback.call(null,re_frisk.core.post_event_callback);
}

return setTimeout(re_frisk.core.render_re_frisk,(100),prefs);
}
});

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_re_frisk_BANG_.cljs$lang$applyTo = (function (seq11571){
return re_frisk.core.enable_re_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11571));
});

re_frisk.core.enable_frisk_BANG_ = (function re_frisk$core$enable_frisk_BANG_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___11576 = arguments.length;
var i__8680__auto___11577 = (0);
while(true){
if((i__8680__auto___11577 < len__8679__auto___11576)){
args__8686__auto__.push((arguments[i__8680__auto___11577]));

var G__11578 = (i__8680__auto___11577 + (1));
i__8680__auto___11577 = G__11578;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (params){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frisk.data.initialized))){
return null;
} else {
cljs.core.reset_BANG_.call(null,re_frisk.data.initialized,true);

return setTimeout(re_frisk.core.render_re_frisk,(100),cljs.core.first.call(null,params));
}
});

re_frisk.core.enable_frisk_BANG_.cljs$lang$maxFixedArity = (0);

re_frisk.core.enable_frisk_BANG_.cljs$lang$applyTo = (function (seq11575){
return re_frisk.core.enable_frisk_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11575));
});

re_frisk.core.add_data = (function re_frisk$core$add_data(key,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc,key,data);
});
re_frisk.core.add_in_data = (function re_frisk$core$add_in_data(keys,data){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,keys,data);
});
re_frisk.core.watch_context = re_frame.core.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"re-frisk-watch-context","re-frisk-watch-context",1102368726),new cljs.core.Keyword(null,"before","before",-1633692388),(function (context){
cljs.core.swap_BANG_.call(null,re_frisk.data.deb_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"contexts","contexts",4351546),cljs.core.first.call(null,new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"coeffects","coeffects",497912985).cljs$core$IFn$_invoke$arity$1(context))),new cljs.core.Keyword(null,"before","before",-1633692388)], null),context);

return context;
}));
re_frisk.core.reg_view = (function re_frisk$core$reg_view(view,subs,events){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"events","events",1792552201)], null),cljs.core.set.call(null,events));

cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487),view,new cljs.core.Keyword(null,"subs","subs",-186681991)], null),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__11579_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([p1__11579_SHARP_],[re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11579_SHARP_], null))]);
}),subs)));

var seq__11584 = cljs.core.seq.call(null,subs);
var chunk__11585 = null;
var count__11586 = (0);
var i__11587 = (0);
while(true){
if((i__11587 < count__11586)){
var s = cljs.core._nth.call(null,chunk__11585,i__11587);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__11588 = seq__11584;
var G__11589 = chunk__11585;
var G__11590 = count__11586;
var G__11591 = (i__11587 + (1));
seq__11584 = G__11588;
chunk__11585 = G__11589;
count__11586 = G__11590;
i__11587 = G__11591;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__11584);
if(temp__6753__auto__){
var seq__11584__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11584__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__11584__$1);
var G__11592 = cljs.core.chunk_rest.call(null,seq__11584__$1);
var G__11593 = c__8369__auto__;
var G__11594 = cljs.core.count.call(null,c__8369__auto__);
var G__11595 = (0);
seq__11584 = G__11592;
chunk__11585 = G__11593;
count__11586 = G__11594;
i__11587 = G__11595;
continue;
} else {
var s = cljs.core.first.call(null,seq__11584__$1);
cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subs","subs",-186681991),s], null),re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null)));

var G__11596 = cljs.core.next.call(null,seq__11584__$1);
var G__11597 = null;
var G__11598 = (0);
var G__11599 = (0);
seq__11584 = G__11596;
chunk__11585 = G__11597;
count__11586 = G__11598;
i__11587 = G__11599;
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
});
re_frisk.core.unmount_view = (function re_frisk$core$unmount_view(view){
if(cljs.core.truth_(new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frisk.data.re_frame_data)))){
return cljs.core.swap_BANG_.call(null,re_frisk.data.re_frame_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"views","views",1450155487)], null),cljs.core.dissoc,view);
} else {
return null;
}
});
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("re-frisk","update-db","re-frisk/update-db",-658524246),(function (db,p__11600){
var vec__11601 = p__11600;
var _ = cljs.core.nth.call(null,vec__11601,(0),null);
var value = cljs.core.nth.call(null,vec__11601,(1),null);
return value;
}));

//# sourceMappingURL=core.js.map?rel=1537038598849