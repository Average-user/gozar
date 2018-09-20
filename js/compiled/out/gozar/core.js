// Compiled by ClojureScript 1.9.542 {}
goog.provide('gozar.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('re_frisk.core');
goog.require('gozar.views');
goog.require('gozar.config');
goog.require('gozar.events');
goog.require('gozar.subs');
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
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.main_panel], null),document.getElementById("app"));
});
gozar.core.init = (function gozar$core$init(){
gozar.core.dev_setup.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return gozar.core.mount_root.call(null);
});
goog.exportSymbol('gozar.core.init', gozar.core.init);

//# sourceMappingURL=core.js.map?rel=1537411814860