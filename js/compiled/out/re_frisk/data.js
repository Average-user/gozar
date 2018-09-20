// Compiled by ClojureScript 1.9.542 {}
goog.provide('re_frisk.data');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof re_frisk.data.initialized !== 'undefined'){
} else {
re_frisk.data.initialized = reagent.core.atom.call(null,false);
}
if(typeof re_frisk.data.re_frame_data !== 'undefined'){
} else {
re_frisk.data.re_frame_data = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof re_frisk.data.re_frame_events !== 'undefined'){
} else {
re_frisk.data.re_frame_events = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if(typeof re_frisk.data.deb_data !== 'undefined'){
} else {
re_frisk.data.deb_data = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"deb-win-closed?","deb-win-closed?",-1950516132),true], null));
}

//# sourceMappingURL=data.js.map?rel=1537411813802