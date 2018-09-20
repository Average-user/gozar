// Compiled by ClojureScript 1.9.542 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.hints');
goog.require('devtools.defaults');
goog.require('devtools.formatters');
goog.require('devtools.async');
goog.require('devtools.toolbox');
goog.require('devtools.util');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__16245 = feature;
var G__16245__$1 = (((G__16245 instanceof cljs.core.Keyword))?G__16245.fqn:null);
switch (G__16245__$1) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var args16247 = [];
var len__8679__auto___16250 = arguments.length;
var i__8680__auto___16251 = (0);
while(true){
if((i__8680__auto___16251 < len__8679__auto___16250)){
args16247.push((arguments[i__8680__auto___16251]));

var G__16252 = (i__8680__auto___16251 + (1));
i__8680__auto___16251 = G__16252;
continue;
} else {
}
break;
}

var G__16249 = args16247.length;
switch (G__16249) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16247.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__16255 = feature;
var G__16255__$1 = (((G__16255 instanceof cljs.core.Keyword))?G__16255.fqn:null);
switch (G__16255__$1) {
case "formatters":
return devtools.formatters.installed_QMARK_.call(null);

break;
case "hints":
return devtools.hints.installed_QMARK_.call(null);

break;
case "async":
return devtools.async.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(feature)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var args16257 = [];
var len__8679__auto___16260 = arguments.length;
var i__8680__auto___16261 = (0);
while(true){
if((i__8680__auto___16261 < len__8679__auto___16260)){
args16257.push((arguments[i__8680__auto___16261]));

var G__16262 = (i__8680__auto___16261 + (1));
i__8680__auto___16261 = G__16262;
continue;
} else {
}
break;
}

var G__16259 = args16257.length;
switch (G__16259) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16257.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var args16264 = [];
var len__8679__auto___16267 = arguments.length;
var i__8680__auto___16268 = (0);
while(true){
if((i__8680__auto___16268 < len__8679__auto___16267)){
args16264.push((arguments[i__8680__auto___16268]));

var G__16269 = (i__8680__auto___16268 + (1));
i__8680__auto___16268 = G__16269;
continue;
} else {
}
break;
}

var G__16266 = args16264.length;
switch (G__16266) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args16264.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
devtools.util.display_banner_if_needed_BANG_.call(null,features,devtools.defaults.feature_groups);

devtools.util.print_config_overrides_if_requested_BANG_.call(null,"config overrides prior install:\n");

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_.call(null);

devtools.hints.uninstall_BANG_.call(null);

return devtools.async.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> remove the call")].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/set-single-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable-single-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable-single-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___16272 = arguments.length;
var i__8680__auto___16273 = (0);
while(true){
if((i__8680__auto___16273 < len__8679__auto___16272)){
args__8686__auto__.push((arguments[i__8680__auto___16273]));

var G__16274 = (i__8680__auto___16273 + (1));
i__8680__auto___16273 = G__16274;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq16271){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16271));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___16276 = arguments.length;
var i__8680__auto___16277 = (0);
while(true){
if((i__8680__auto___16277 < len__8679__auto___16276)){
args__8686__auto__.push((arguments[i__8680__auto___16277]));

var G__16278 = (i__8680__auto___16277 + (1));
i__8680__auto___16277 = G__16278;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq16275){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16275));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/single-feature-available? was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___16280 = arguments.length;
var i__8680__auto___16281 = (0);
while(true){
if((i__8680__auto___16281 < len__8679__auto___16280)){
args__8686__auto__.push((arguments[i__8680__auto___16281]));

var G__16282 = (i__8680__auto___16281 + (1));
i__8680__auto___16281 = G__16282;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/feature-available? was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq16279){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16279));
});


//# sourceMappingURL=core.js.map?rel=1537411823023