// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__9260__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9260 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9261__i = 0, G__9261__a = new Array(arguments.length -  0);
while (G__9261__i < G__9261__a.length) {G__9261__a[G__9261__i] = arguments[G__9261__i + 0]; ++G__9261__i;}
  args = new cljs.core.IndexedSeq(G__9261__a,0,null);
} 
return G__9260__delegate.call(this,args);};
G__9260.cljs$lang$maxFixedArity = 0;
G__9260.cljs$lang$applyTo = (function (arglist__9262){
var args = cljs.core.seq(arglist__9262);
return G__9260__delegate(args);
});
G__9260.cljs$core$IFn$_invoke$arity$variadic = G__9260__delegate;
return G__9260;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__9263__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__9263 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9264__i = 0, G__9264__a = new Array(arguments.length -  0);
while (G__9264__i < G__9264__a.length) {G__9264__a[G__9264__i] = arguments[G__9264__i + 0]; ++G__9264__i;}
  args = new cljs.core.IndexedSeq(G__9264__a,0,null);
} 
return G__9263__delegate.call(this,args);};
G__9263.cljs$lang$maxFixedArity = 0;
G__9263.cljs$lang$applyTo = (function (arglist__9265){
var args = cljs.core.seq(arglist__9265);
return G__9263__delegate(args);
});
G__9263.cljs$core$IFn$_invoke$arity$variadic = G__9263__delegate;
return G__9263;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1537053741765