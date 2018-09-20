// Compiled by ClojureScript 1.9.542 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('cljsjs.react.dom');
goog.require('reagent.impl.util');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('reagent.debug');
goog.require('reagent.interop');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(!((reagent.dom.imported == null))){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__7458__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__7458__auto__)){
return or__7458__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_9679 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_9679){
return (function (){
var _STAR_always_update_STAR_9680 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(!((callback == null))){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9680;
}});})(_STAR_always_update_STAR_9679))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_9679;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args9681 = [];
var len__8679__auto___9684 = arguments.length;
var i__8680__auto___9685 = (0);
while(true){
if((i__8680__auto___9685 < len__8679__auto___9684)){
args9681.push((arguments[i__8680__auto___9685]));

var G__9686 = (i__8680__auto___9685 + (1));
i__8680__auto___9685 = G__9686;
continue;
} else {
}
break;
}

var G__9683 = args9681.length;
switch (G__9683) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args9681.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__9692_9696 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__9693_9697 = null;
var count__9694_9698 = (0);
var i__9695_9699 = (0);
while(true){
if((i__9695_9699 < count__9694_9698)){
var v_9700 = cljs.core._nth.call(null,chunk__9693_9697,i__9695_9699);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9700);

var G__9701 = seq__9692_9696;
var G__9702 = chunk__9693_9697;
var G__9703 = count__9694_9698;
var G__9704 = (i__9695_9699 + (1));
seq__9692_9696 = G__9701;
chunk__9693_9697 = G__9702;
count__9694_9698 = G__9703;
i__9695_9699 = G__9704;
continue;
} else {
var temp__6753__auto___9705 = cljs.core.seq.call(null,seq__9692_9696);
if(temp__6753__auto___9705){
var seq__9692_9706__$1 = temp__6753__auto___9705;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9692_9706__$1)){
var c__8369__auto___9707 = cljs.core.chunk_first.call(null,seq__9692_9706__$1);
var G__9708 = cljs.core.chunk_rest.call(null,seq__9692_9706__$1);
var G__9709 = c__8369__auto___9707;
var G__9710 = cljs.core.count.call(null,c__8369__auto___9707);
var G__9711 = (0);
seq__9692_9696 = G__9708;
chunk__9693_9697 = G__9709;
count__9694_9698 = G__9710;
i__9695_9699 = G__9711;
continue;
} else {
var v_9712 = cljs.core.first.call(null,seq__9692_9706__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_9712);

var G__9713 = cljs.core.next.call(null,seq__9692_9706__$1);
var G__9714 = null;
var G__9715 = (0);
var G__9716 = (0);
seq__9692_9696 = G__9713;
chunk__9693_9697 = G__9714;
count__9694_9698 = G__9715;
i__9695_9699 = G__9716;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1537411808537