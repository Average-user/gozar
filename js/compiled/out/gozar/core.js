// Compiled by ClojureScript 1.9.542 {}
goog.provide('gozar.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frisk.core');
goog.require('gozar.views');
goog.require('gozar.config');
gozar.core.dev_setup = (function gozar$core$dev_setup(){
if(gozar.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

re_frisk.core.enable_re_frisk_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
gozar.core.mount_root = (function gozar$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.main_panel], null),document.getElementById("app"));
});
gozar.core.init = (function gozar$core$init(){
gozar.core.dev_setup.call(null);

return gozar.core.mount_root.call(null);
});
goog.exportSymbol('gozar.core.init', gozar.core.init);

//# sourceMappingURL=core.js.map?rel=1537053746690