// Compiled by ClojureScript 1.9.542 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x15790_15791 = value;
x15790_15791.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x15795_15796 = value;
x15795_15796.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x15800_15801 = value;
x15800_15801.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__7446__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__7446__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__7446__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__8686__auto__ = [];
var len__8679__auto___15809 = arguments.length;
var i__8680__auto___15810 = (0);
while(true){
if((i__8680__auto___15810 < len__8679__auto___15809)){
args__8686__auto__.push((arguments[i__8680__auto___15810]));

var G__15811 = (i__8680__auto___15810 + (1));
i__8680__auto___15810 = G__15811;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((0) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__8687__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__15805_15812 = cljs.core.seq.call(null,items);
var chunk__15806_15813 = null;
var count__15807_15814 = (0);
var i__15808_15815 = (0);
while(true){
if((i__15808_15815 < count__15807_15814)){
var item_15816 = cljs.core._nth.call(null,chunk__15806_15813,i__15808_15815);
if(!((item_15816 == null))){
if(cljs.core.coll_QMARK_.call(null,item_15816)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_15816)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_15816));
}
} else {
}

var G__15817 = seq__15805_15812;
var G__15818 = chunk__15806_15813;
var G__15819 = count__15807_15814;
var G__15820 = (i__15808_15815 + (1));
seq__15805_15812 = G__15817;
chunk__15806_15813 = G__15818;
count__15807_15814 = G__15819;
i__15808_15815 = G__15820;
continue;
} else {
var temp__6753__auto___15821 = cljs.core.seq.call(null,seq__15805_15812);
if(temp__6753__auto___15821){
var seq__15805_15822__$1 = temp__6753__auto___15821;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15805_15822__$1)){
var c__8369__auto___15823 = cljs.core.chunk_first.call(null,seq__15805_15822__$1);
var G__15824 = cljs.core.chunk_rest.call(null,seq__15805_15822__$1);
var G__15825 = c__8369__auto___15823;
var G__15826 = cljs.core.count.call(null,c__8369__auto___15823);
var G__15827 = (0);
seq__15805_15812 = G__15824;
chunk__15806_15813 = G__15825;
count__15807_15814 = G__15826;
i__15808_15815 = G__15827;
continue;
} else {
var item_15828 = cljs.core.first.call(null,seq__15805_15822__$1);
if(!((item_15828 == null))){
if(cljs.core.coll_QMARK_.call(null,item_15828)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_15828)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_15828));
}
} else {
}

var G__15829 = cljs.core.next.call(null,seq__15805_15822__$1);
var G__15830 = null;
var G__15831 = (0);
var G__15832 = (0);
seq__15805_15812 = G__15829;
chunk__15806_15813 = G__15830;
count__15807_15814 = G__15831;
i__15808_15815 = G__15832;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq15804){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15804));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__8686__auto__ = [];
var len__8679__auto___15840 = arguments.length;
var i__8680__auto___15841 = (0);
while(true){
if((i__8680__auto___15841 < len__8679__auto___15840)){
args__8686__auto__.push((arguments[i__8680__auto___15841]));

var G__15842 = (i__8680__auto___15841 + (1));
i__8680__auto___15841 = G__15842;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((2) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8687__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__15836_15843 = cljs.core.seq.call(null,children);
var chunk__15837_15844 = null;
var count__15838_15845 = (0);
var i__15839_15846 = (0);
while(true){
if((i__15839_15846 < count__15838_15845)){
var child_15847 = cljs.core._nth.call(null,chunk__15837_15844,i__15839_15846);
if(!((child_15847 == null))){
if(cljs.core.coll_QMARK_.call(null,child_15847)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_15847))));
} else {
var temp__6751__auto___15848 = devtools.formatters.helpers.pref.call(null,child_15847);
if(cljs.core.truth_(temp__6751__auto___15848)){
var child_value_15849 = temp__6751__auto___15848;
template.push(child_value_15849);
} else {
}
}
} else {
}

var G__15850 = seq__15836_15843;
var G__15851 = chunk__15837_15844;
var G__15852 = count__15838_15845;
var G__15853 = (i__15839_15846 + (1));
seq__15836_15843 = G__15850;
chunk__15837_15844 = G__15851;
count__15838_15845 = G__15852;
i__15839_15846 = G__15853;
continue;
} else {
var temp__6753__auto___15854 = cljs.core.seq.call(null,seq__15836_15843);
if(temp__6753__auto___15854){
var seq__15836_15855__$1 = temp__6753__auto___15854;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15836_15855__$1)){
var c__8369__auto___15856 = cljs.core.chunk_first.call(null,seq__15836_15855__$1);
var G__15857 = cljs.core.chunk_rest.call(null,seq__15836_15855__$1);
var G__15858 = c__8369__auto___15856;
var G__15859 = cljs.core.count.call(null,c__8369__auto___15856);
var G__15860 = (0);
seq__15836_15843 = G__15857;
chunk__15837_15844 = G__15858;
count__15838_15845 = G__15859;
i__15839_15846 = G__15860;
continue;
} else {
var child_15861 = cljs.core.first.call(null,seq__15836_15855__$1);
if(!((child_15861 == null))){
if(cljs.core.coll_QMARK_.call(null,child_15861)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_15861))));
} else {
var temp__6751__auto___15862 = devtools.formatters.helpers.pref.call(null,child_15861);
if(cljs.core.truth_(temp__6751__auto___15862)){
var child_value_15863 = temp__6751__auto___15862;
template.push(child_value_15863);
} else {
}
}
} else {
}

var G__15864 = cljs.core.next.call(null,seq__15836_15855__$1);
var G__15865 = null;
var G__15866 = (0);
var G__15867 = (0);
seq__15836_15843 = G__15864;
chunk__15837_15844 = G__15865;
count__15838_15845 = G__15866;
i__15839_15846 = G__15867;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq15833){
var G__15834 = cljs.core.first.call(null,seq15833);
var seq15833__$1 = cljs.core.next.call(null,seq15833);
var G__15835 = cljs.core.first.call(null,seq15833__$1);
var seq15833__$2 = cljs.core.next.call(null,seq15833__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__15834,G__15835,seq15833__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___15870 = arguments.length;
var i__8680__auto___15871 = (0);
while(true){
if((i__8680__auto___15871 < len__8679__auto___15870)){
args__8686__auto__.push((arguments[i__8680__auto___15871]));

var G__15872 = (i__8680__auto___15871 + (1));
i__8680__auto___15871 = G__15872;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq15868){
var G__15869 = cljs.core.first.call(null,seq15868);
var seq15868__$1 = cljs.core.next.call(null,seq15868);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15869,seq15868__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__8686__auto__ = [];
var len__8679__auto___15875 = arguments.length;
var i__8680__auto___15876 = (0);
while(true){
if((i__8680__auto___15876 < len__8679__auto___15875)){
args__8686__auto__.push((arguments[i__8680__auto___15876]));

var G__15877 = (i__8680__auto___15876 + (1));
i__8680__auto___15876 = G__15877;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq15873){
var G__15874 = cljs.core.first.call(null,seq15873);
var seq15873__$1 = cljs.core.next.call(null,seq15873);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15874,seq15873__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args15878 = [];
var len__8679__auto___15883 = arguments.length;
var i__8680__auto___15884 = (0);
while(true){
if((i__8680__auto___15884 < len__8679__auto___15883)){
args15878.push((arguments[i__8680__auto___15884]));

var G__15885 = (i__8680__auto___15884 + (1));
i__8680__auto___15884 = G__15885;
continue;
} else {
}
break;
}

var G__15880 = args15878.length;
switch (G__15880) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args15878.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj15882 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__7458__auto__ = start_index;
if(cljs.core.truth_(or__7458__auto__)){
return or__7458__auto__;
} else {
return (0);
}
})()};
return obj15882;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__8686__auto__ = [];
var len__8679__auto___15893 = arguments.length;
var i__8680__auto___15894 = (0);
while(true){
if((i__8680__auto___15894 < len__8679__auto___15893)){
args__8686__auto__.push((arguments[i__8680__auto___15894]));

var G__15895 = (i__8680__auto___15894 + (1));
i__8680__auto___15894 = G__15895;
continue;
} else {
}
break;
}

var argseq__8687__auto__ = ((((1) < args__8686__auto__.length))?(new cljs.core.IndexedSeq(args__8686__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8687__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__15889){
var vec__15890 = p__15889;
var state_override_fn = cljs.core.nth.call(null,vec__15890,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq15887){
var G__15888 = cljs.core.first.call(null,seq15887);
var seq15887__$1 = cljs.core.next.call(null,seq15887);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__15888,seq15887__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__8550__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_15899_15902 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_15900_15903 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_15899_15902,_STAR_print_fn_STAR_15900_15903,sb__8550__auto__){
return (function (x__8551__auto__){
return sb__8550__auto__.append(x__8551__auto__);
});})(_STAR_print_newline_STAR_15899_15902,_STAR_print_fn_STAR_15900_15903,sb__8550__auto__))
;

try{var _STAR_print_level_STAR_15901_15904 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15901_15904;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_15900_15903;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_15899_15902;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__8550__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_15906 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_15906;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__15908 = name;
switch (G__15908) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__15913 = tag;
var html_tag = cljs.core.nth.call(null,vec__15913,(0),null);
var style = cljs.core.nth.call(null,vec__15913,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_15917 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_15917;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_15920 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_15921 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_15921;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_15920;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__15922 = initial_value;
var G__15923 = value.call(null);
initial_value = G__15922;
value = G__15923;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__15924 = initial_value;
var G__15925 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__15924;
value = G__15925;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__15926 = initial_value;
var G__15927 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__15926;
value = G__15927;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1537411821855