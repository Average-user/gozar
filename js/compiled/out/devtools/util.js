// Compiled by ClojureScript 1.9.542 {}
goog.provide('devtools.util');
goog.require('cljs.core');
goog.require('goog.userAgent');
goog.require('clojure.data');
goog.require('cljs.pprint');
goog.require('devtools.version');
goog.require('devtools.defaults');
goog.require('devtools.prefs');
devtools.util._STAR_custom_formatters_active_STAR_ = false;
devtools.util._STAR_console_open_STAR_ = false;
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = false;
devtools.util.make_version_info = (function devtools$util$make_version_info(){
var version = "0.8.2";
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("v"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(version)].join('');
});
devtools.util.make_lib_info = (function devtools$util$make_lib_info(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("CLJS DevTools "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("0.8.2")].join('');
});
devtools.util.unknown_feature_msg = (function devtools$util$unknown_feature_msg(feature,known_features,lib_info){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("No such feature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" is currently available in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_info),cljs.core.str.cljs$core$IFn$_invoke$arity$1(". "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("The list of supported features is "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,known_features)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
});
devtools.util.feature_not_available_msg = (function devtools$util$feature_not_available_msg(feature){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Feature "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" cannot be installed. "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unsupported browser "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.getUserAgentString()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".")].join('');
});
devtools.util.custom_formatters_not_active_msg = (function devtools$util$custom_formatters_not_active_msg(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("CLJS DevTools: some custom formatters were not rendered.\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("https://github.com/binaryage/cljs-devtools/blob/master/docs/faq.md#why-some-custom-formatters-were-not-rendered")].join('');
});
devtools.util.get_lib_info = (function devtools$util$get_lib_info(){
return devtools.util.make_lib_info.call(null);
});
devtools.util.formatter_key = "devtoolsFormatters";
devtools.util.get_formatters_safe = (function devtools$util$get_formatters_safe(){
var formatters = (window[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,formatters)){
return formatters;
} else {
return [];
}
});
devtools.util.set_formatters_safe_BANG_ = (function devtools$util$set_formatters_safe_BANG_(new_formatters){
if(((new_formatters == null)) || (cljs.core.array_QMARK_.call(null,new_formatters))){
} else {
throw (new Error("Assert failed: (or (nil? new-formatters) (array? new-formatters))"));
}

return (window[devtools.util.formatter_key] = ((cljs.core.empty_QMARK_.call(null,new_formatters))?null:new_formatters));
});
devtools.util.print_config_overrides_if_requested_BANG_ = (function devtools$util$print_config_overrides_if_requested_BANG_(msg){
if(cljs.core.truth_(devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"print-config-overrides","print-config-overrides",-274716965)))){
var diff = cljs.core.second.call(null,clojure.data.diff.call(null,devtools.defaults.prefs,devtools.prefs.get_prefs.call(null)));
if(!(cljs.core.empty_QMARK_.call(null,diff))){
return console.info(msg,(function (){var sb__8550__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15462_15464 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15463_15465 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15462_15464,_STAR_print_fn_STAR_15463_15465,sb__8550__auto__,diff){
return (function (x__8551__auto__){
return sb__8550__auto__.append(x__8551__auto__);
});})(_STAR_print_newline_STAR_15462_15464,_STAR_print_fn_STAR_15463_15465,sb__8550__auto__,diff))
;

try{cljs.pprint.pprint.call(null,diff);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15463_15465;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15462_15464;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8550__auto__)].join('');
})());
} else {
return null;
}
} else {
return null;
}
});

/**
* @constructor
*/
devtools.util.CustomFormattersDetector = (function (){
})

devtools.util.CustomFormattersDetector.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

devtools.util.CustomFormattersDetector.cljs$lang$type = true;

devtools.util.CustomFormattersDetector.cljs$lang$ctorStr = "devtools.util/CustomFormattersDetector";

devtools.util.CustomFormattersDetector.cljs$lang$ctorPrWriter = (function (this__8115__auto__,writer__8116__auto__,opt__8117__auto__){
return cljs.core._write.call(null,writer__8116__auto__,"devtools.util/CustomFormattersDetector");
});

devtools.util.__GT_CustomFormattersDetector = (function devtools$util$__GT_CustomFormattersDetector(){
return (new devtools.util.CustomFormattersDetector());
});

devtools.util.make_detector = (function devtools$util$make_detector(){
var detector = (new devtools.util.CustomFormattersDetector());
(detector["header"] = ((function (detector){
return (function (_object,_config){
devtools.util._STAR_custom_formatters_active_STAR_ = true;

return null;
});})(detector))
);

(detector["hasBody"] = cljs.core.constantly.call(null,false));

(detector["body"] = cljs.core.constantly.call(null,null));

return detector;
});
devtools.util.install_detector_BANG_ = (function devtools$util$install_detector_BANG_(detector){
var formatters = devtools.util.get_formatters_safe.call(null);
formatters.push(detector);

return devtools.util.set_formatters_safe_BANG_.call(null,formatters);
});
devtools.util.uninstall_detector_BANG_ = (function devtools$util$uninstall_detector_BANG_(detector){
var current_formatters = (window[devtools.util.formatter_key]);
if(cljs.core.array_QMARK_.call(null,current_formatters)){
var new_formatters = current_formatters.filter(((function (current_formatters){
return (function (p1__15466_SHARP_){
return !(cljs.core._EQ_.call(null,detector,p1__15466_SHARP_));
});})(current_formatters))
);
return devtools.util.set_formatters_safe_BANG_.call(null,new_formatters);
} else {
return null;
}
});
devtools.util.check_custom_formatters_active_BANG_ = (function devtools$util$check_custom_formatters_active_BANG_(){
if((devtools.util._STAR_console_open_STAR_) && (!(devtools.util._STAR_custom_formatters_active_STAR_))){
if(devtools.util._STAR_custom_formatters_warning_reported_STAR_){
return null;
} else {
devtools.util._STAR_custom_formatters_warning_reported_STAR_ = true;

return console.warn(devtools.util.custom_formatters_not_active_msg.call(null));
}
} else {
return null;
}
});
devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_ = (function devtools$util$uninstall_detector_and_check_custom_formatters_active_BANG_(detector){
devtools.util.uninstall_detector_BANG_.call(null,detector);

return devtools.util.check_custom_formatters_active_BANG_.call(null);
});
devtools.util.make_detection_printer = (function devtools$util$make_detection_printer(){
var f = (function (){
return null;
});
var G__15468_15469 = f;
var target__13687__auto___15470 = G__15468_15469;
if(cljs.core.truth_(target__13687__auto___15470)){
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("unable to locate object path "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15468_15469)].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("target__13687__auto__")].join('')));
}

goog.object.set(target__13687__auto___15470,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toString"], null)),((function (G__15468_15469,target__13687__auto___15470,f){
return (function (){
devtools.util._STAR_console_open_STAR_ = true;

setTimeout(devtools.util.check_custom_formatters_active_BANG_,(0));

return "";
});})(G__15468_15469,target__13687__auto___15470,f))
);


return f;
});
devtools.util.wrap_with_custom_formatter_detection_BANG_ = (function devtools$util$wrap_with_custom_formatter_detection_BANG_(f){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-detect-custom-formatters","dont-detect-custom-formatters",-29005804)))){
var detector = devtools.util.make_detector.call(null);
devtools.util.install_detector_BANG_.call(null,detector);

f.call(null,"%c%s","color:transparent",devtools.util.make_detection_printer.call(null));

return setTimeout(cljs.core.partial.call(null,devtools.util.uninstall_detector_and_check_custom_formatters_active_BANG_,detector),(0));
} else {
return f.call(null);
}
});
devtools.util.feature_for_display = (function devtools$util$feature_for_display(installed_features,feature){
var color = (cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),installed_features))?"color:#0000ff":"color:#ccc");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%c%s",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')], null)], null);
});
devtools.util.feature_list_display = (function devtools$util$feature_list_display(installed_features,feature_groups){
var labels = cljs.core.map.call(null,cljs.core.partial.call(null,devtools.util.feature_for_display,installed_features),new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups));
var _STAR_ = ((function (labels){
return (function (accum,val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,accum)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,val))].join(''),cljs.core.concat.call(null,cljs.core.second.call(null,accum),cljs.core.second.call(null,val))], null);
});})(labels))
;
return cljs.core.reduce.call(null,_STAR_,cljs.core.first.call(null,labels),cljs.core.rest.call(null,labels));
});
devtools.util.display_banner_BANG_ = (function devtools$util$display_banner_BANG_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___15478 = arguments.length;
var i__8680__auto___15479 = (0);
while(true){
if((i__8680__auto___15479 < len__8679__auto___15478)){
args__8686__auto__.push((arguments[i__8680__auto___15479]));

var G__15480 = (i__8680__auto___15479 + (1));
i__8680__auto___15479 = G__15480;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((3) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((3)),(0),null)):null);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__8687__auto__);
});

devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (installed_features,feature_groups,fmt,params){
var vec__15475 = devtools.util.feature_list_display.call(null,installed_features,feature_groups);
var fmt_str = cljs.core.nth.call(null,vec__15475,(0),null);
var fmt_params = cljs.core.nth.call(null,vec__15475,(1),null);
return devtools.util.wrap_with_custom_formatter_detection_BANG_.call(null,((function (vec__15475,fmt_str,fmt_params){
return (function() { 
var G__15481__delegate = function (add_fmt,add_args){
var items = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fmt_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(add_fmt)].join('')], null),params,fmt_params,add_args);
return console.info.apply(console,cljs.core.into_array.call(null,items));
};
var G__15481 = function (add_fmt,var_args){
var add_args = null;
if (arguments.length > 1) {
var G__15482__i = 0, G__15482__a = new Array(arguments.length -  1);
while (G__15482__i < G__15482__a.length) {G__15482__a[G__15482__i] = arguments[G__15482__i + 1]; ++G__15482__i;}
  add_args = new cljs.core.IndexedSeq(G__15482__a,0,null);
} 
return G__15481__delegate.call(this,add_fmt,add_args);};
G__15481.cljs$lang$maxFixedArity = 1;
G__15481.cljs$lang$applyTo = (function (arglist__15483){
var add_fmt = cljs.core.first(arglist__15483);
var add_args = cljs.core.rest(arglist__15483);
return G__15481__delegate(add_fmt,add_args);
});
G__15481.cljs$core$IFn$_invoke$arity$variadic = G__15481__delegate;
return G__15481;
})()
;})(vec__15475,fmt_str,fmt_params))
);
});

devtools.util.display_banner_BANG_.cljs$lang$maxFixedArity = (3);

devtools.util.display_banner_BANG_.cljs$lang$applyTo = (function (seq15471){
var G__15472 = cljs.core.first.call(null,seq15471);
var seq15471__$1 = cljs.core.next.call(null,seq15471);
var G__15473 = cljs.core.first.call(null,seq15471__$1);
var seq15471__$2 = cljs.core.next.call(null,seq15471__$1);
var G__15474 = cljs.core.first.call(null,seq15471__$2);
var seq15471__$3 = cljs.core.next.call(null,seq15471__$2);
return devtools.util.display_banner_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15472,G__15473,G__15474,seq15471__$3);
});

devtools.util.display_banner_if_needed_BANG_ = (function devtools$util$display_banner_if_needed_BANG_(features_to_install,feature_groups){
if(cljs.core.not.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"dont-display-banner","dont-display-banner",-1175550370)))){
var banner = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Installing %c%s%c and enabling features")].join('');
var lib_info_style = "color:black;font-weight:bold;";
var reset_style = "color:black";
return devtools.util.display_banner_BANG_.call(null,features_to_install,feature_groups,banner,lib_info_style,devtools.util.get_lib_info.call(null),reset_style);
} else {
return devtools.util._STAR_custom_formatters_active_STAR_ = true;
}
});
devtools.util.report_unknown_features_BANG_ = (function devtools$util$report_unknown_features_BANG_(features,known_features){
var lib_info = devtools.util.get_lib_info.call(null);
var seq__15488 = cljs.core.seq.call(null,features);
var chunk__15489 = null;
var count__15490 = (0);
var i__15491 = (0);
while(true){
if((i__15491 < count__15490)){
var feature = cljs.core._nth.call(null,chunk__15489,i__15491);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
console.warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__15492 = seq__15488;
var G__15493 = chunk__15489;
var G__15494 = count__15490;
var G__15495 = (i__15491 + (1));
seq__15488 = G__15492;
chunk__15489 = G__15493;
count__15490 = G__15494;
i__15491 = G__15495;
continue;
} else {
var temp__6753__auto__ = cljs.core.seq.call(null,seq__15488);
if(temp__6753__auto__){
var seq__15488__$1 = temp__6753__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15488__$1)){
var c__8369__auto__ = cljs.core.chunk_first.call(null,seq__15488__$1);
var G__15496 = cljs.core.chunk_rest.call(null,seq__15488__$1);
var G__15497 = c__8369__auto__;
var G__15498 = cljs.core.count.call(null,c__8369__auto__);
var G__15499 = (0);
seq__15488 = G__15496;
chunk__15489 = G__15497;
count__15490 = G__15498;
i__15491 = G__15499;
continue;
} else {
var feature = cljs.core.first.call(null,seq__15488__$1);
if(cljs.core.not.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features))){
console.warn(devtools.util.unknown_feature_msg.call(null,feature,known_features,lib_info));
} else {
}

var G__15500 = cljs.core.next.call(null,seq__15488__$1);
var G__15501 = null;
var G__15502 = (0);
var G__15503 = (0);
seq__15488 = G__15500;
chunk__15489 = G__15501;
count__15490 = G__15502;
i__15491 = G__15503;
continue;
}
} else {
return null;
}
}
break;
}
});
devtools.util.is_known_feature_QMARK_ = (function devtools$util$is_known_feature_QMARK_(known_features,feature){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),known_features));
});
devtools.util.convert_legacy_feature = (function devtools$util$convert_legacy_feature(feature){
var G__15505 = feature;
var G__15505__$1 = (((G__15505 instanceof cljs.core.Keyword))?G__15505.fqn:null);
switch (G__15505__$1) {
case "custom-formatters":
return new cljs.core.Keyword(null,"formatters","formatters",-1875637118);

break;
case "sanity-hints":
return new cljs.core.Keyword(null,"hints","hints",-991113151);

break;
default:
return feature;

}
});
devtools.util.convert_legacy_features = (function devtools$util$convert_legacy_features(features){
return cljs.core.map.call(null,devtools.util.convert_legacy_feature,features);
});
devtools.util.sanititze_features_BANG_ = (function devtools$util$sanititze_features_BANG_(features,feature_groups){
var known_features = new cljs.core.Keyword(null,"all","all",892129742).cljs$core$IFn$_invoke$arity$1(feature_groups);
var features__$1 = devtools.util.convert_legacy_features.call(null,features);
devtools.util.report_unknown_features_BANG_.call(null,features__$1,known_features);

return cljs.core.filter.call(null,cljs.core.partial.call(null,devtools.util.is_known_feature_QMARK_,known_features),features__$1);
});
devtools.util.resolve_features_BANG_ = (function devtools$util$resolve_features_BANG_(features_desc,feature_groups){
var features = (cljs.core.truth_((function (){var and__7446__auto__ = (features_desc instanceof cljs.core.Keyword);
if(and__7446__auto__){
return features_desc.call(null,feature_groups);
} else {
return and__7446__auto__;
}
})())?features_desc.call(null,feature_groups):(((features_desc == null))?new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(feature_groups):((cljs.core.seqable_QMARK_.call(null,features_desc))?features_desc:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [features_desc], null)
)));
return devtools.util.sanititze_features_BANG_.call(null,features,feature_groups);
});
devtools.util.install_feature_BANG_ = (function devtools$util$install_feature_BANG_(feature,features_to_install,available_fn,install_fn){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([feature]),features_to_install))){
if(cljs.core.truth_((function (){var or__7458__auto__ = devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"bypass-availability-checks","bypass-availability-checks",1934691680));
if(cljs.core.truth_(or__7458__auto__)){
return or__7458__auto__;
} else {
return available_fn.call(null,feature);
}
})())){
return install_fn.call(null);
} else {
return console.warn(devtools.util.feature_not_available_msg.call(null,feature));
}
} else {
return null;
}
});

//# sourceMappingURL=util.js.map?rel=1537411820592