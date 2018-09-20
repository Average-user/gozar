// Compiled by ClojureScript 1.9.542 {}
goog.provide('gozar.views');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('gozar.util');
goog.require('goog.events');
goog.require('gozar.sgfparser');
goog.require('re_frame.core');
gozar.views.r = 1.4;
gozar.views.distance = (function gozar$views$distance(p__12462,p__12463){
var vec__12470 = p__12462;
var a = cljs.core.nth.call(null,vec__12470,(0),null);
var b = cljs.core.nth.call(null,vec__12470,(1),null);
var vec__12473 = p__12463;
var c = cljs.core.nth.call(null,vec__12473,(0),null);
var d = cljs.core.nth.call(null,vec__12473,(1),null);
var abs = ((function (vec__12470,a,b,vec__12473,c,d){
return (function (x){
if((x < (0))){
return ((-1) * x);
} else {
return x;
}
});})(vec__12470,a,b,vec__12473,c,d))
;
return (abs.call(null,(a - c)) + abs.call(null,(b - d)));
});
gozar.views.get_move = (function gozar$views$get_move(){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089)], null))))){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-move","custom-move",-1878986938)], null)));
} else {
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309)], null)));
}
});
gozar.views.get_moves = (function gozar$views$get_moves(){
if(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089)], null))))){
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"custom-moves","custom-moves",1173198063)], null)));
} else {
return cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",927465255)], null)));
}
});
gozar.views.draw_line = (function gozar$views$draw_line(x1,y1,x2,y2,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),f.call(null,x1),new cljs.core.Keyword(null,"y1","y1",589123466),f.call(null,y1),new cljs.core.Keyword(null,"x2","x2",-1362513475),f.call(null,x2),new cljs.core.Keyword(null,"y2","y2",-718691301),f.call(null,y2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(0,0,0)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.07], null)], null)], null);
});
gozar.views.draw_dots = (function gozar$views$draw_dots(f){
return cljs.core.map.call(null,(function (p__12480){
var vec__12481 = p__12480;
var x = cljs.core.nth.call(null,vec__12481,(0),null);
var y = cljs.core.nth.call(null,vec__12481,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),0.2,new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null);
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(9)], null)], null));
});
gozar.views.draw_stones = (function gozar$views$draw_stones(f,p__12484){
var map__12496 = p__12484;
var map__12496__$1 = ((((!((map__12496 == null)))?((((map__12496.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12496.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12496):map__12496);
var stones = cljs.core.get.call(null,map__12496__$1,new cljs.core.Keyword(null,"stones","stones",2138534597));
var turn = cljs.core.get.call(null,map__12496__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var lm = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,gozar.views.get_moves.call(null),(gozar.views.get_move.call(null) - (1))));
var am = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089)], null)));
var moves = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",927465255)], null)));
var move = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309)], null)));
return cljs.core.map.call(null,((function (lm,am,moves,move,map__12496,map__12496__$1,stones,turn){
return (function (p__12498){
var vec__12499 = p__12498;
var vec__12502 = cljs.core.nth.call(null,vec__12499,(0),null);
var y = cljs.core.nth.call(null,vec__12502,(0),null);
var x = cljs.core.nth.call(null,vec__12502,(1),null);
var t = cljs.core.nth.call(null,vec__12499,(1),null);
var G__12505 = t;
var G__12505__$1 = (((G__12505 instanceof cljs.core.Keyword))?G__12505.fqn:null);
switch (G__12505__$1) {
case "black":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.n","circle.n",913556054),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),gozar.views.r,new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null),((cljs.core._EQ_.call(null,lm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),(gozar.views.r / (2)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.17",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null):null)], null);

break;
case "white":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.n","circle.n",913556054),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),gozar.views.r,new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null),((cljs.core._EQ_.call(null,lm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),(gozar.views.r / (2)),new cljs.core.Keyword(null,"stroke","stroke",1741823555),"black",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0.17",new cljs.core.Keyword(null,"fill","fill",883462889),"none"], null)], null):null)], null);

break;
case "free":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__12505,G__12505__$1,vec__12499,vec__12502,y,x,t,lm,am,moves,move,map__12496,map__12496__$1,stones,turn){
return (function (){
if(cljs.core.truth_(am)){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-custom-move","add-custom-move",-1899750389),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"player","player",-97687400),turn,new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)], null)], null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,moves,move)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null))){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-move","inc-move",-1890506383)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-attempt-to","set-attempt-to",1372667734),null], null));
} else {
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-attempt-to","set-attempt-to",1372667734),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)], null));

}
}
});})(G__12505,G__12505__$1,vec__12499,vec__12502,y,x,t,lm,am,moves,move,map__12496,map__12496__$1,stones,turn))
], null),(function (){var G__12506 = cljs.core._EQ_.call(null,turn,new cljs.core.Keyword(null,"white","white",-483998618));
if(cljs.core._EQ_.call(null,true,G__12506)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.w","circle.w",1180709092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),gozar.views.r], null)], null);
} else {
if(cljs.core._EQ_.call(null,false,G__12506)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.b","circle.b",-875064529),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),gozar.views.r], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),gozar.views.r,new cljs.core.Keyword(null,"fill","fill",883462889),"rgba(0,0,0,0)"], null)], null);

}
}
})()], null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(t)].join('')));

}
});})(lm,am,moves,move,map__12496,map__12496__$1,stones,turn))
,stones);
});
gozar.views.draw_board_base = (function gozar$views$draw_board_base(p__12508,amplifier){
var map__12515 = p__12508;
var map__12515__$1 = ((((!((map__12515 == null)))?((((map__12515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12515.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12515):map__12515);
var board = map__12515__$1;
var stones = cljs.core.get.call(null,map__12515__$1,new cljs.core.Keyword(null,"stones","stones",2138534597));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),"58%",new cljs.core.Keyword(null,"height","height",1025178622),"58%",new cljs.core.Keyword(null,"fill","fill",883462889),"rgb(219,176,98)"], null)], null)], null),cljs.core.concat.call(null,gozar.views.draw_dots.call(null,amplifier),cljs.core.mapv.call(null,((function (map__12515,map__12515__$1,board,stones){
return (function (p__12517){
var vec__12518 = p__12517;
var x1 = cljs.core.nth.call(null,vec__12518,(0),null);
var y1 = cljs.core.nth.call(null,vec__12518,(1),null);
var x2 = cljs.core.nth.call(null,vec__12518,(2),null);
var y2 = cljs.core.nth.call(null,vec__12518,(3),null);
return gozar.views.draw_line.call(null,x1,y1,x2,y2,amplifier);
});})(map__12515,map__12515__$1,board,stones))
,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(19)),cljs.core.repeat.call(null,(0)),cljs.core.range.call(null,(19)),cljs.core.repeat.call(null,(18))),cljs.core.map.call(null,cljs.core.vector,cljs.core.repeat.call(null,(0)),cljs.core.range.call(null,(19)),cljs.core.repeat.call(null,(18)),cljs.core.range.call(null,(19))))),gozar.views.draw_stones.call(null,amplifier,board)));
});
gozar.views.board_svg = (function gozar$views$board_svg(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"150%",new cljs.core.Keyword(null,"height","height",1025178622),"150%",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 100 100"], null),(function (){var board = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null)));
var moves = gozar.views.get_moves.call(null);
var move = gozar.views.get_move.call(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.draw_board_base,gozar.util.apply_moves.call(null,board,cljs.core.subvec.call(null,moves,(0),move)),((function (board,moves,move){
return (function (p1__12521_SHARP_){
return ((p1__12521_SHARP_ * (3)) + (2));
});})(board,moves,move))
], null);
})()], null)], null);
});
gozar.views.sgf_file_input = (function gozar$views$sgf_file_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file.has-name","div.file.has-name",-896637401),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.file-label","label.file-label",-520604852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".sgf",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var file = cljs.core.first.call(null,cljs.core.array_seq.call(null,e.target.files));
var file_reader = (new FileReader());
file_reader.onload = ((function (file,file_reader){
return (function (e_SINGLEQUOTE_){
var game = gozar.sgfparser.parse_game.call(null,e_SINGLEQUOTE_.target.result);
var nb = gozar.util.create_board.call(null,new cljs.core.Keyword(null,"handicap","handicap",653637002).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"komi","komi",1538616357).cljs$core$IFn$_invoke$arity$1(game));
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-of-file","change-of-file",860475011),nb,cljs.core.vec.call(null,new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"player-black","player-black",1843278047),new cljs.core.Keyword(null,"player-black","player-black",1843278047).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"player-white","player-white",-1676124930),new cljs.core.Keyword(null,"player-white","player-white",-1676124930).cljs$core$IFn$_invoke$arity$1(game)], null),new cljs.core.Keyword(null,"handicap-n","handicap-n",975463966).cljs$core$IFn$_invoke$arity$1(game),file.name], null));
});})(file,file_reader))
;

return file_reader.readAsText(file);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-cta","span.file-cta",1078791818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-icon","span.file-icon",890123937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-upload","i.fas.fa-upload",207000756)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-label","span.file-label",1374272136),"Upload SGF..."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-name","span.file-name",-605410282),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"filename","filename",-1428840783)], null)))], null)], null)], null)], null);
});
gozar.views.info_table = (function gozar$views$info_table(){
var info = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"info","info",-317069002)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Move"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Komi"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Handicap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"White"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Result"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),gozar.views.get_move.call(null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"komi","komi",1538616357).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633)], null))))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handicap","handicap",653637002)], null)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"player-black","player-black",1843278047).cljs$core$IFn$_invoke$arity$1(info)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"player-white","player-white",-1676124930).cljs$core$IFn$_invoke$arity$1(info)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(info)], null)], null)], null)], null)], null);
});
gozar.views.moves_range = (function gozar$views$moves_range(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.count.call(null,gozar.views.get_moves.call(null)),new cljs.core.Keyword(null,"value","value",305978217),gozar.views.get_move.call(null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"90%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__12522_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change-move","change-move",-208700263),parseInt(p1__12522_SHARP_.target.value)], null));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.count.call(null,gozar.views.get_moves.call(null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-move","dec-move",267444978)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-attempt-to","set-attempt-to",1372667734),null], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-small","span.icon.is-small",1815318948),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-arrow-left","i.fa.fa-arrow-left",2128970984)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button","a.button",275710893),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-move","inc-move",-1890506383)], null));

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-attempt-to","set-attempt-to",1372667734),null], null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-small","span.icon.is-small",1815318948),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-arrow-right","i.fa.fa-arrow-right",584597601)], null)], null)], null)], null)], null)], null);
});
gozar.views.analyze_mode_checkbox = (function gozar$views$analyze_mode_checkbox(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.button","button.button",1464242525),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"analyze-mode-change","analyze-mode-change",1029188387)], null));
})], null),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089)], null))))?"Change to guess mode":"Change to analyze mode")], null);
});
gozar.views.how_close_bar = (function gozar$views$how_close_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),(function (){var moves = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"moves","moves",927465255)], null)));
var attempt = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attempt","attempt",1611761308)], null)));
var nl = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,moves,cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move","move",-2110884309)], null)))));
var n = (((cljs.core.empty_QMARK_.call(null,moves)) || ((attempt == null)))?(100):((((100) * ((38) - gozar.views.distance.call(null,attempt,nl))) / (38)) | (0)));
if((n > (90))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.progress.is-success","progress.progress.is-success",-1267776089),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"value","value",305978217),n,new cljs.core.Keyword(null,"max","max",61366548),(100)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.progress.is-danger","progress.progress.is-danger",-1012148213),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"value","value",305978217),n,new cljs.core.Keyword(null,"max","max",61366548),(100)], null)], null);

}
})()], null);
});
goog.events.listen(window,"keydown",(function (e){
var key_code = e.keyCode;
if((cljs.core._EQ_.call(null,key_code,(37))) || (cljs.core._EQ_.call(null,key_code,(39)))){
if(cljs.core._EQ_.call(null,(39),key_code)){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inc-move","inc-move",-1890506383)], null));
} else {
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dec-move","dec-move",267444978)], null));
}

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-attempt-to","set-attempt-to",1372667734),null], null));
} else {
return null;
}
}));
gozar.views.main_panel = (function gozar$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half","div.column.is-half",1599821405),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.title.is-1","h1.title.is-1",24691365),"GOzar"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.info_table], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.analyze_mode_checkbox], null),(cljs.core.truth_(cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089)], null))))?null:null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.how_close_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.moves_range], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.sgf_file_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon","a.icon",-1846503712),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Average-user/gozar#readme",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"url(img/github.png)",new cljs.core.Keyword(null,"width","width",-384071477),"32",new cljs.core.Keyword(null,"height","height",1025178622),"32"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.board_svg], null)], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1537411813720