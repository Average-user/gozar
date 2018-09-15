// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.impl.util');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('reagent.debug');
goog.require('reagent.interop');
goog.require('clojure.string');
if(typeof reagent.impl.util.react !== 'undefined'){
} else {
reagent.impl.util.react = ((typeof React !== 'undefined')?React:((typeof require !== 'undefined')?(function (){var or__7458__auto__ = require("react");
if(cljs.core.truth_(or__7458__auto__)){
return or__7458__auto__;
} else {
throw (new Error("require('react') failed"));
}
})():(function(){throw (new Error("js/React is missing"))})()
));
}
reagent.impl.util.is_client = (typeof window !== 'undefined') && (!(((window["document"]) == null)));
reagent.impl.util._STAR_non_reactive_STAR_ = false;
reagent.impl.util.memoize_1 = (function reagent$impl$util$memoize_1(f){
var mem = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
return ((function (mem){
return (function (arg){
var v = cljs.core.get.call(null,cljs.core.deref.call(null,mem),arg);
if(!((v == null))){
return v;
} else {
var ret = f.call(null,arg);
cljs.core.swap_BANG_.call(null,mem,cljs.core.assoc,arg,ret);

return ret;
}
});
;})(mem))
});
reagent.impl.util.dont_camel_case = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria",null,"data",null], null), null);
reagent.impl.util.capitalize = (function reagent$impl$util$capitalize(s){
if((cljs.core.count.call(null,s) < (2))){
return clojure.string.upper_case.call(null,s);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,(0),(1)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join('');
}
});
reagent.impl.util.dash_to_camel = (function reagent$impl$util$dash_to_camel(dashed){
if(typeof dashed === 'string'){
return dashed;
} else {
var name_str = cljs.core.name.call(null,dashed);
var vec__9271 = clojure.string.split.call(null,name_str,/-/);
var seq__9272 = cljs.core.seq.call(null,vec__9271);
var first__9273 = cljs.core.first.call(null,seq__9272);
var seq__9272__$1 = cljs.core.next.call(null,seq__9272);
var start = first__9273;
var parts = seq__9272__$1;
if(cljs.core.truth_(reagent.impl.util.dont_camel_case.call(null,start))){
return name_str;
} else {
return cljs.core.apply.call(null,cljs.core.str,start,cljs.core.map.call(null,reagent.impl.util.capitalize,parts));
}
}
});
reagent.impl.util.fun_name = (function reagent$impl$util$fun_name(f){
var n = (function (){var or__7458__auto__ = (function (){var and__7446__auto__ = cljs.core.fn_QMARK_.call(null,f);
if(and__7446__auto__){
var or__7458__auto__ = (f["displayName"]);
if(cljs.core.truth_(or__7458__auto__)){
return or__7458__auto__;
} else {
return (f["name"]);
}
} else {
return and__7446__auto__;
}
})();
if(cljs.core.truth_(or__7458__auto__)){
return or__7458__auto__;
} else {
var or__7458__auto____$1 = (function (){var and__7446__auto__ = ((!((f == null)))?((((f.cljs$lang$protocol_mask$partition1$ & (4096))) || ((cljs.core.PROTOCOL_SENTINEL === f.cljs$core$INamed$)))?true:false):false);
if(and__7446__auto__){
return cljs.core.name.call(null,f);
} else {
return and__7446__auto__;
}
})();
if(cljs.core.truth_(or__7458__auto____$1)){
return or__7458__auto____$1;
} else {
var m = cljs.core.meta.call(null,f);
if(cljs.core.map_QMARK_.call(null,m)){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
}
}
})();
return clojure.string.replace.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''),"$",".");
});

/**
* @constructor
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
*/
reagent.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
reagent.impl.util.partial_ifn.prototype.call = (function() { 
var G__9283__delegate = function (self__,a){
var self____$1 = this;
var _ = self____$1;
var or__7458__auto___9284 = self__.p;
if(cljs.core.truth_(or__7458__auto___9284)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__9283 = function (self__,var_args){
var self__ = this;
var a = null;
if (arguments.length > 1) {
var G__9285__i = 0, G__9285__a = new Array(arguments.length -  1);
while (G__9285__i < G__9285__a.length) {G__9285__a[G__9285__i] = arguments[G__9285__i + 1]; ++G__9285__i;}
  a = new cljs.core.IndexedSeq(G__9285__a,0,null);
} 
return G__9283__delegate.call(this,self__,a);};
G__9283.cljs$lang$maxFixedArity = 1;
G__9283.cljs$lang$applyTo = (function (arglist__9286){
var self__ = cljs.core.first(arglist__9286);
var a = cljs.core.rest(arglist__9286);
return G__9283__delegate(self__,a);
});
G__9283.cljs$core$IFn$_invoke$arity$variadic = G__9283__delegate;
return G__9283;
})()
;

reagent.impl.util.partial_ifn.prototype.apply = (function (self__,args9282){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9282)));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9287__delegate = function (a){
var _ = this;
var or__7458__auto___9288 = self__.p;
if(cljs.core.truth_(or__7458__auto___9288)){
} else {
self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}

return cljs.core.apply.call(null,self__.p,a);
};
var G__9287 = function (var_args){
var self__ = this;
var a = null;
if (arguments.length > 0) {
var G__9289__i = 0, G__9289__a = new Array(arguments.length -  0);
while (G__9289__i < G__9289__a.length) {G__9289__a[G__9289__i] = arguments[G__9289__i + 0]; ++G__9289__i;}
  a = new cljs.core.IndexedSeq(G__9289__a,0,null);
} 
return G__9287__delegate.call(this,a);};
G__9287.cljs$lang$maxFixedArity = 0;
G__9287.cljs$lang$applyTo = (function (arglist__9290){
var a = cljs.core.seq(arglist__9290);
return G__9287__delegate(a);
});
G__9287.cljs$core$IFn$_invoke$arity$variadic = G__9287__delegate;
return G__9287;
})()
;

reagent.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});

reagent.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});

reagent.impl.util.partial_ifn.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"args","args",-1338879193,null),cljs.core.with_meta(new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

reagent.impl.util.partial_ifn.cljs$lang$type = true;

reagent.impl.util.partial_ifn.cljs$lang$ctorStr = "reagent.impl.util/partial-ifn";

reagent.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__8115__auto__,writer__8116__auto__,opt__8117__auto__){
return cljs.core._write.call(null,writer__8116__auto__,"reagent.impl.util/partial-ifn");
});

reagent.impl.util.__GT_partial_ifn = (function reagent$impl$util$__GT_partial_ifn(f,args,p){
return (new reagent.impl.util.partial_ifn(f,args,p));
});

reagent.impl.util.merge_class = (function reagent$impl$util$merge_class(p1,p2){
var class$ = (function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__6753__auto__)){
var c1 = temp__6753__auto__;
var temp__6753__auto____$1 = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__6753__auto____$1)){
var c2 = temp__6753__auto____$1;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(c1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c2)].join('');
} else {
return null;
}
} else {
return null;
}
})();
if((class$ == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",-2030961996),class$);
}
});
reagent.impl.util.merge_style = (function reagent$impl$util$merge_style(p1,p2){
var style = (function (){var temp__6753__auto__ = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p1);
if(cljs.core.truth_(temp__6753__auto__)){
var s1 = temp__6753__auto__;
var temp__6753__auto____$1 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(p2);
if(cljs.core.truth_(temp__6753__auto____$1)){
var s2 = temp__6753__auto____$1;
return cljs.core.merge.call(null,s1,s2);
} else {
return null;
}
} else {
return null;
}
})();
if((style == null)){
return p2;
} else {
return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",-496642736),style);
}
});
reagent.impl.util.merge_props = (function reagent$impl$util$merge_props(p1,p2){
if((p1 == null)){
return p2;
} else {
if(cljs.core.map_QMARK_.call(null,p1)){
} else {
throw (new Error("Assert failed: (map? p1)"));
}

return reagent.impl.util.merge_style.call(null,p1,reagent.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
reagent.impl.util._STAR_always_update_STAR_ = false;
reagent.impl.util.force_update = (function reagent$impl$util$force_update(comp,deep){
if(cljs.core.truth_(deep)){
var _STAR_always_update_STAR_9292 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (comp["forceUpdate"])();
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9292;
}} else {
return (comp["forceUpdate"])();
}
});

//# sourceMappingURL=util.js.map?rel=1537053741883