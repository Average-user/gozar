// Compiled by ClojureScript 1.9.542 {}
goog.provide('gozar.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('gozar.util');
goog.require('gozar.sgfparser');
goog.require('cljs.reader');
gozar.views.file_data = reagent.core.atom.call(null,"");
gozar.views.moves = reagent.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
gozar.views.board = reagent.core.atom.call(null,gozar.util.initial_board);
gozar.views.move = reagent.core.atom.call(null,(0));
gozar.views.view_mode = reagent.core.atom.call(null,false);
gozar.views.handicap = reagent.core.atom.call(null,"0");
gozar.views.attempt = reagent.core.atom.call(null,null);
gozar.views.info = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),"-",new cljs.core.Keyword(null,"player-black","player-black",1843278047),"-",new cljs.core.Keyword(null,"player-white","player-white",-1676124930),"-"], null));
gozar.views.r = 1.42;
gozar.views.distance = (function gozar$views$distance(p__11157,p__11158){
var vec__11165 = p__11157;
var a = cljs.core.nth.call(null,vec__11165,(0),null);
var b = cljs.core.nth.call(null,vec__11165,(1),null);
var vec__11168 = p__11158;
var c = cljs.core.nth.call(null,vec__11168,(0),null);
var d = cljs.core.nth.call(null,vec__11168,(1),null);
var abs = ((function (vec__11165,a,b,vec__11168,c,d){
return (function (x){
if((x < (0))){
return ((-1) * x);
} else {
return x;
}
});})(vec__11165,a,b,vec__11168,c,d))
;
return (abs.call(null,(a - c)) + abs.call(null,(b - d)));
});
gozar.views.draw_line = (function gozar$views$draw_line(x1,y1,x2,y2,f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x1","x1",-1863922247),f.call(null,x1),new cljs.core.Keyword(null,"y1","y1",589123466),f.call(null,y1),new cljs.core.Keyword(null,"x2","x2",-1362513475),f.call(null,x2),new cljs.core.Keyword(null,"y2","y2",-718691301),f.call(null,y2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke","stroke",1741823555),"rgb(0,0,0)",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),0.07], null)], null)], null);
});
gozar.views.draw_dots = (function gozar$views$draw_dots(f){
return cljs.core.map.call(null,(function (p__11175){
var vec__11176 = p__11175;
var x = cljs.core.nth.call(null,vec__11176,(0),null);
var y = cljs.core.nth.call(null,vec__11176,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),0.2,new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null);
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(9)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(9),(15)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(15),(9)], null)], null));
});
gozar.views.draw_stones = (function gozar$views$draw_stones(f,p__11179){
var map__11191 = p__11179;
var map__11191__$1 = ((((!((map__11191 == null)))?((((map__11191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11191):map__11191);
var stones = cljs.core.get.call(null,map__11191__$1,new cljs.core.Keyword(null,"stones","stones",2138534597));
var turn = cljs.core.get.call(null,map__11191__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
return cljs.core.map.call(null,((function (map__11191,map__11191__$1,stones,turn){
return (function (p__11193){
var vec__11194 = p__11193;
var vec__11197 = cljs.core.nth.call(null,vec__11194,(0),null);
var y = cljs.core.nth.call(null,vec__11197,(0),null);
var x = cljs.core.nth.call(null,vec__11197,(1),null);
var t = cljs.core.nth.call(null,vec__11194,(1),null);
var G__11200 = t;
var G__11200__$1 = (((G__11200 instanceof cljs.core.Keyword))?G__11200.fqn:null);
switch (G__11200__$1) {
case "black":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.n","circle.n",913556054),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),gozar.views.r,new cljs.core.Keyword(null,"fill","fill",883462889),"black"], null)], null)], null);

break;
case "white":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.n","circle.n",913556054),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),gozar.views.r,new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null)], null);

break;
case "free":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (G__11200,G__11200__$1,vec__11194,vec__11197,y,x,t,map__11191,map__11191__$1,stones,turn){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,gozar.views.view_mode))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,gozar.views.moves),cljs.core.deref.call(null,gozar.views.move))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null))){
cljs.core.swap_BANG_.call(null,gozar.views.move,cljs.core.inc);

return cljs.core.reset_BANG_.call(null,gozar.views.attempt,null);
} else {
return cljs.core.reset_BANG_.call(null,gozar.views.attempt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null));
}
} else {
return null;
}
});})(G__11200,G__11200__$1,vec__11194,vec__11197,y,x,t,map__11191,map__11191__$1,stones,turn))
], null),(function (){var G__11201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.not.call(null,cljs.core.deref.call(null,gozar.views.view_mode)),cljs.core._EQ_.call(null,turn,new cljs.core.Keyword(null,"white","white",-483998618))], null);
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__11201)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.w","circle.w",1180709092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),f.call(null,x),new cljs.core.Keyword(null,"cy","cy",755331060),f.call(null,y),new cljs.core.Keyword(null,"r","r",-471384190),gozar.views.r], null)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__11201)){
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
});})(map__11191,map__11191__$1,stones,turn))
,stones);
});
gozar.views.draw_board_base = (function gozar$views$draw_board_base(p__11203,amplifier){
var map__11210 = p__11203;
var map__11210__$1 = ((((!((map__11210 == null)))?((((map__11210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__11210.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11210):map__11210);
var board = map__11210__$1;
var stones = cljs.core.get.call(null,map__11210__$1,new cljs.core.Keyword(null,"stones","stones",2138534597));
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),"58%",new cljs.core.Keyword(null,"height","height",1025178622),"58%",new cljs.core.Keyword(null,"fill","fill",883462889),"rgb(219,176,98)"], null)], null)], null),cljs.core.concat.call(null,gozar.views.draw_dots.call(null,amplifier),cljs.core.mapv.call(null,((function (map__11210,map__11210__$1,board,stones){
return (function (p__11212){
var vec__11213 = p__11212;
var x1 = cljs.core.nth.call(null,vec__11213,(0),null);
var y1 = cljs.core.nth.call(null,vec__11213,(1),null);
var x2 = cljs.core.nth.call(null,vec__11213,(2),null);
var y2 = cljs.core.nth.call(null,vec__11213,(3),null);
return gozar.views.draw_line.call(null,x1,y1,x2,y2,amplifier);
});})(map__11210,map__11210__$1,board,stones))
,cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null,(19)),cljs.core.repeat.call(null,(0)),cljs.core.range.call(null,(19)),cljs.core.repeat.call(null,(18))),cljs.core.map.call(null,cljs.core.vector,cljs.core.repeat.call(null,(0)),cljs.core.range.call(null,(19)),cljs.core.repeat.call(null,(18)),cljs.core.range.call(null,(19))))),gozar.views.draw_stones.call(null,amplifier,board)));
});
gozar.views.board_svg = (function gozar$views$board_svg(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"150%",new cljs.core.Keyword(null,"height","height",1025178622),"150%",new cljs.core.Keyword(null,"view-box","view-box",-1792199155),"0 0 100 100"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.draw_board_base,gozar.util.apply_moves.call(null,cljs.core.deref.call(null,gozar.views.board),cljs.core.subvec.call(null,cljs.core.deref.call(null,gozar.views.moves),(0),cljs.core.deref.call(null,gozar.views.move))),(function (p1__11216_SHARP_){
return ((p1__11216_SHARP_ * (3)) + (2));
})], null)], null)], null);
});
gozar.views.moves_range = (function gozar$views$moves_range(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"range",new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),cljs.core.count.call(null,cljs.core.deref.call(null,gozar.views.moves)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,gozar.views.move),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__11217_SHARP_){
return cljs.core.reset_BANG_.call(null,gozar.views.move,parseInt(p1__11217_SHARP_.target.value));
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),cljs.core.count.call(null,cljs.core.deref.call(null,gozar.views.moves))], null)], null);
});
gozar.views.sgf_file_input = (function gozar$views$sgf_file_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.file","div.file",1837411179),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.file-label","label.file-label",-520604852),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.file-input","input.file-input",-263595274),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),".sgf",new cljs.core.Keyword(null,"value","value",305978217),"Upload SGF File:",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var file = cljs.core.first.call(null,cljs.core.array_seq.call(null,e.target.files));
var file_reader = (new FileReader());
file_reader.onload = ((function (file,file_reader){
return (function (e__$1){
cljs.core.reset_BANG_.call(null,gozar.views.file_data,e__$1.target.result);

var game = gozar.sgfparser.parse_game.call(null,cljs.core.deref.call(null,gozar.views.file_data));
var nb = gozar.util.create_board.call(null,new cljs.core.Keyword(null,"handicap","handicap",653637002).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"turn","turn",75759344).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"komi","komi",1538616357).cljs$core$IFn$_invoke$arity$1(game));
cljs.core.reset_BANG_.call(null,gozar.views.moves,cljs.core.vec.call(null,new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(game)));

cljs.core.reset_BANG_.call(null,gozar.views.board,nb);

cljs.core.reset_BANG_.call(null,gozar.views.move,(0));

cljs.core.reset_BANG_.call(null,gozar.views.attempt,null);

cljs.core.swap_BANG_.call(null,gozar.views.info,cljs.core.partial.call(null,cljs.core.reduce,cljs.core.conj),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"player-black","player-black",1843278047),new cljs.core.Keyword(null,"player-black","player-black",1843278047).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"player-white","player-white",-1676124930),new cljs.core.Keyword(null,"player-white","player-white",-1676124930).cljs$core$IFn$_invoke$arity$1(game)], null));

return cljs.core.reset_BANG_.call(null,gozar.views.handicap,new cljs.core.Keyword(null,"handicap-n","handicap-n",975463966).cljs$core$IFn$_invoke$arity$1(game));
});})(file,file_reader))
;

return file_reader.readAsText(file);
})], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-cta","span.file-cta",1078791818),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-icon","span.file-icon",890123937),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fa.fa-upload","i.fa.fa-upload",1870045017)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.file-label","span.file-label",1374272136),"Upload SGF"], null)], null)], null)], null)], null);
});
gozar.views.view_mode_checkbox = (function gozar$views$view_mode_checkbox(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.call(null,gozar.views.view_mode,cljs.core.not);
})], null)], null),"View mode"], null);
});
gozar.views.info_table = (function gozar$views$info_table(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Move"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Komi"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Handicap"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Black"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"White"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),"Result"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tfoot","tfoot",-701599890),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),cljs.core.deref.call(null,gozar.views.move)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"komi","komi",1538616357).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gozar.views.board))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),cljs.core.deref.call(null,gozar.views.handicap)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"player-black","player-black",1843278047).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gozar.views.info))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"player-white","player-white",-1676124930).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gozar.views.info))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"abbr","abbr",2088591884),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gozar.views.info))], null)], null)], null)], null)], null);
});
gozar.views.how_close_bar = (function gozar$views$how_close_bar(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),(function (){var nl = new cljs.core.Keyword(null,"location","location",1815599388).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,gozar.views.moves),cljs.core.deref.call(null,gozar.views.move)));
var n = (((cljs.core.empty_QMARK_.call(null,cljs.core.deref.call(null,gozar.views.moves))) || ((cljs.core.deref.call(null,gozar.views.attempt) == null)))?(100):((((100) * ((38) - gozar.views.distance.call(null,cljs.core.deref.call(null,gozar.views.attempt),nl))) / (38)) | (0)));
if((n > (90))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.progress.is-success","progress.progress.is-success",-1267776089),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"value","value",305978217),n,new cljs.core.Keyword(null,"max","max",61366548),(100)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progress.progress.is-danger","progress.progress.is-danger",-1012148213),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"80%"], null),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"value","value",305978217),n,new cljs.core.Keyword(null,"max","max",61366548),(100)], null)], null);

}
})()], null);
});
gozar.views.show_next_move = (function gozar$views$show_next_move(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.field","div.field",1089355414),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.button.is-outlined","a.button.is-outlined",-2074223306),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,gozar.views.move,cljs.core.inc);
})], null),"Show me next move"], null)], null);
});
gozar.views.main_panel = (function gozar$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.columns","div.columns",-437221213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"10px"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column.is-half","div.column.is-half",1599821405),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h.title.is-1","h.title.is-1",-505729397),"GOzar"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.info_table], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.view_mode_checkbox], null),(cljs.core.truth_(cljs.core.deref.call(null,gozar.views.view_mode))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.how_close_bar], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.show_next_move], null)], null)),(cljs.core.truth_(cljs.core.deref.call(null,gozar.views.view_mode))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.moves_range], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"20px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.sgf_file_input], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.icon","a.icon",-1846503712),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),"https://github.com/Average-user/gozar#readme",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),"url(img/github.png)",new cljs.core.Keyword(null,"width","width",-384071477),"32",new cljs.core.Keyword(null,"height","height",1025178622),"32"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.column","div.column",-1380853326),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.views.board_svg], null)], null)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1537053745703