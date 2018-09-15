// Compiled by ClojureScript 1.9.542 {}
goog.provide('gozar.sgfparser');
goog.require('cljs.core');
goog.require('clojure.string');
gozar.sgfparser.char__GT_int = (function gozar$sgfparser$char__GT_int(c){
return cljs.core.vec.call(null,"abcdefghijklmnopqrstuvwxyz").indexOf(c);
});
gozar.sgfparser.after = (function gozar$sgfparser$after(text,str){
return cljs.core.ffirst.call(null,cljs.core.drop_while.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.second),cljs.core.iterate.call(null,(function (p__10311){
var vec__10312 = p__10311;
var s = cljs.core.nth.call(null,vec__10312,(0),null);
var b = cljs.core.nth.call(null,vec__10312,(1),null);
if((cljs.core.empty_QMARK_.call(null,s)) || (clojure.string.starts_with_QMARK_.call(null,s,str))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,true], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(1)),false], null);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text,false], null))));
});
gozar.sgfparser.get_handicap = (function gozar$sgfparser$get_handicap(xs){
var f = (function gozar$sgfparser$get_handicap_$_f(x){
return cljs.core.map.call(null,cljs.core.comp.call(null,(function (c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.Keyword(null,"black","black",1294279647)], null);
}),cljs.core.partial.call(null,cljs.core.mapv,gozar.sgfparser.char__GT_int),cljs.core.second),cljs.core.re_seq.call(null,/\[(.*?)\]/,cljs.core.apply.call(null,cljs.core.str,cljs.core.take_while.call(null,cljs.core.partial.call(null,cljs.core.not_EQ_,";"),x))));
});
return f.call(null,gozar.sgfparser.after.call(null,xs,"AB"));
});
gozar.sgfparser.get_result = (function gozar$sgfparser$get_result(xs){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/\[(.*?)\]/,gozar.sgfparser.after.call(null,xs,"RE"))));
});
gozar.sgfparser.get_komi = (function gozar$sgfparser$get_komi(xs){
var komi = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/\[(.*?)\]/,gozar.sgfparser.after.call(null,xs,"KM"))));
return parseFloat(komi);
});
gozar.sgfparser.get_handicap_n = (function gozar$sgfparser$get_handicap_n(xs){
var $ = cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/\[(.*?)\]/,gozar.sgfparser.after.call(null,xs,"HA"))));
if(cljs.core.empty_QMARK_.call(null,$)){
return (0);
} else {
return parseFloat($);
}
});
gozar.sgfparser.player_names_and_ranks = (function gozar$sgfparser$player_names_and_ranks(xs){
var f = (function (p1__10315_SHARP_){
return cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/\[(.*?)\]/,gozar.sgfparser.after.call(null,xs,p1__10315_SHARP_))));
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player-black","player-black",1843278047),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.call(null,"PB")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.call(null,"BR"))].join(''),new cljs.core.Keyword(null,"player-white","player-white",-1676124930),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.call(null,"PW")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(f.call(null,"WR"))].join('')], null);
});
gozar.sgfparser.parse_line = (function gozar$sgfparser$parse_line(line){
var coords = (function gozar$sgfparser$parse_line_$_coords(x){
return cljs.core.mapv.call(null,gozar.sgfparser.char__GT_int,cljs.core.reverse.call(null,cljs.core.second.call(null,cljs.core.first.call(null,cljs.core.re_seq.call(null,/\[(.*?)\]/,x)))));
});
var G__10317 = cljs.core.first.call(null,line);
switch (G__10317) {
case "W":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"location","location",1815599388),coords.call(null,line)], null);

break;
case "B":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"location","location",1815599388),coords.call(null,line)], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,line))].join('')));

}
});
gozar.sgfparser.parse_game = (function gozar$sgfparser$parse_game(file_string){
var moves = cljs.core.mapv.call(null,gozar.sgfparser.parse_line,cljs.core.filter.call(null,(function (p1__10319_SHARP_){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["B",null,"W",null], null), null).call(null,cljs.core.first.call(null,p1__10319_SHARP_));
}),clojure.string.split.call(null,file_string,/;/)));
return cljs.core.reduce.call(null,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"handicap","handicap",653637002),gozar.sgfparser.get_handicap.call(null,file_string),new cljs.core.Keyword(null,"turn","turn",75759344),new cljs.core.Keyword(null,"player","player",-97687400).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,moves)),new cljs.core.Keyword(null,"moves","moves",927465255),moves,new cljs.core.Keyword(null,"komi","komi",1538616357),gozar.sgfparser.get_komi.call(null,file_string),new cljs.core.Keyword(null,"result","result",1415092211),gozar.sgfparser.get_result.call(null,file_string),new cljs.core.Keyword(null,"handicap-n","handicap-n",975463966),gozar.sgfparser.get_handicap_n.call(null,file_string)], null),gozar.sgfparser.player_names_and_ranks.call(null,file_string));
});
gozar.sgfparser.distance = (function gozar$sgfparser$distance(p__10320,p__10321){
var vec__10328 = p__10320;
var a = cljs.core.nth.call(null,vec__10328,(0),null);
var b = cljs.core.nth.call(null,vec__10328,(1),null);
var vec__10331 = p__10321;
var c = cljs.core.nth.call(null,vec__10331,(0),null);
var d = cljs.core.nth.call(null,vec__10331,(1),null);
var abs = ((function (vec__10328,a,b,vec__10331,c,d){
return (function (x){
if((x < (0))){
return ((-1) * x);
} else {
return x;
}
});})(vec__10328,a,b,vec__10331,c,d))
;
return (abs.call(null,(a - c)) + abs.call(null,(b - d)));
});

//# sourceMappingURL=sgfparser.js.map?rel=1537038595764