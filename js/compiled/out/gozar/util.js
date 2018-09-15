// Compiled by ClojureScript 1.9.542 {}
goog.provide('gozar.util');
goog.require('cljs.core');
goog.require('gozar.sgfparser');
gozar.util.stones = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8320__auto__ = (function gozar$util$iter__10336(s__10337){
return (new cljs.core.LazySeq(null,(function (){
var s__10337__$1 = s__10337;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__10337__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var x = cljs.core.first.call(null,xs__7309__auto__);
var iterys__8316__auto__ = ((function (s__10337__$1,x,xs__7309__auto__,temp__6753__auto__){
return (function gozar$util$iter__10336_$_iter__10338(s__10339){
return (new cljs.core.LazySeq(null,((function (s__10337__$1,x,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__10339__$1 = s__10339;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__10339__$1);
if(temp__6753__auto____$1){
var s__10339__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10339__$2)){
var c__8318__auto__ = cljs.core.chunk_first.call(null,s__10339__$2);
var size__8319__auto__ = cljs.core.count.call(null,c__8318__auto__);
var b__10341 = cljs.core.chunk_buffer.call(null,size__8319__auto__);
if((function (){var i__10340 = (0);
while(true){
if((i__10340 < size__8319__auto__)){
var y = cljs.core._nth.call(null,c__8318__auto__,i__10340);
cljs.core.chunk_append.call(null,b__10341,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"free","free",801364328)], null));

var G__10342 = (i__10340 + (1));
i__10340 = G__10342;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10341),gozar$util$iter__10336_$_iter__10338.call(null,cljs.core.chunk_rest.call(null,s__10339__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10341),null);
}
} else {
var y = cljs.core.first.call(null,s__10339__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"free","free",801364328)], null),gozar$util$iter__10336_$_iter__10338.call(null,cljs.core.rest.call(null,s__10339__$2)));
}
} else {
return null;
}
break;
}
});})(s__10337__$1,x,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__10337__$1,x,xs__7309__auto__,temp__6753__auto__))
;
var fs__8317__auto__ = cljs.core.seq.call(null,iterys__8316__auto__.call(null,cljs.core.range.call(null,(19))));
if(fs__8317__auto__){
return cljs.core.concat.call(null,fs__8317__auto__,gozar$util$iter__10336.call(null,cljs.core.rest.call(null,s__10337__$1)));
} else {
var G__10343 = cljs.core.rest.call(null,s__10337__$1);
s__10337__$1 = G__10343;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8320__auto__.call(null,cljs.core.range.call(null,(19)));
})());
gozar.util.create_board = (function gozar$util$create_board(handicap_stones,turn,komi){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stones","stones",2138534597),cljs.core.reduce.call(null,cljs.core.conj,gozar.util.stones,handicap_stones),new cljs.core.Keyword(null,"turn","turn",75759344),turn,new cljs.core.Keyword(null,"ko","ko",-626263540),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),null,new cljs.core.Keyword(null,"black","black",1294279647),null], null),new cljs.core.Keyword(null,"komi","komi",1538616357),komi], null);
});
gozar.util.initial_board = gozar.util.create_board.call(null,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"black","black",1294279647),6.5);
gozar.util.enemy = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"black","black",1294279647),new cljs.core.Keyword(null,"white","white",-483998618)], null);
gozar.util.grid__GT_stones = (function gozar$util$grid__GT_stones(grid){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__8320__auto__ = (function gozar$util$grid__GT_stones_$_iter__10350(s__10351){
return (new cljs.core.LazySeq(null,(function (){
var s__10351__$1 = s__10351;
while(true){
var temp__6753__auto__ = cljs.core.seq.call(null,s__10351__$1);
if(temp__6753__auto__){
var xs__7309__auto__ = temp__6753__auto__;
var x = cljs.core.first.call(null,xs__7309__auto__);
var iterys__8316__auto__ = ((function (s__10351__$1,x,xs__7309__auto__,temp__6753__auto__){
return (function gozar$util$grid__GT_stones_$_iter__10350_$_iter__10352(s__10353){
return (new cljs.core.LazySeq(null,((function (s__10351__$1,x,xs__7309__auto__,temp__6753__auto__){
return (function (){
var s__10353__$1 = s__10353;
while(true){
var temp__6753__auto____$1 = cljs.core.seq.call(null,s__10353__$1);
if(temp__6753__auto____$1){
var s__10353__$2 = temp__6753__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10353__$2)){
var c__8318__auto__ = cljs.core.chunk_first.call(null,s__10353__$2);
var size__8319__auto__ = cljs.core.count.call(null,c__8318__auto__);
var b__10355 = cljs.core.chunk_buffer.call(null,size__8319__auto__);
if((function (){var i__10354 = (0);
while(true){
if((i__10354 < size__8319__auto__)){
var y = cljs.core._nth.call(null,c__8318__auto__,i__10354);
cljs.core.chunk_append.call(null,b__10355,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentArrayMap(null, 3, [".",new cljs.core.Keyword(null,"free","free",801364328),"O",new cljs.core.Keyword(null,"black","black",1294279647),"X",new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,cljs.core.get_in.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null));

var G__10356 = (i__10354 + (1));
i__10354 = G__10356;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10355),gozar$util$grid__GT_stones_$_iter__10350_$_iter__10352.call(null,cljs.core.chunk_rest.call(null,s__10353__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10355),null);
}
} else {
var y = cljs.core.first.call(null,s__10353__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.PersistentArrayMap(null, 3, [".",new cljs.core.Keyword(null,"free","free",801364328),"O",new cljs.core.Keyword(null,"black","black",1294279647),"X",new cljs.core.Keyword(null,"white","white",-483998618)], null).call(null,cljs.core.get_in.call(null,grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))], null),gozar$util$grid__GT_stones_$_iter__10350_$_iter__10352.call(null,cljs.core.rest.call(null,s__10353__$2)));
}
} else {
return null;
}
break;
}
});})(s__10351__$1,x,xs__7309__auto__,temp__6753__auto__))
,null,null));
});})(s__10351__$1,x,xs__7309__auto__,temp__6753__auto__))
;
var fs__8317__auto__ = cljs.core.seq.call(null,iterys__8316__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,grid))));
if(fs__8317__auto__){
return cljs.core.concat.call(null,fs__8317__auto__,gozar$util$grid__GT_stones_$_iter__10350.call(null,cljs.core.rest.call(null,s__10351__$1)));
} else {
var G__10357 = cljs.core.rest.call(null,s__10351__$1);
s__10351__$1 = G__10357;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__8320__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,grid)));
})());
});
gozar.util.stones__GT_grid = (function gozar$util$stones__GT_grid(stones){
var s = cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.ffirst,stones));
var f = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"free","free",801364328),".",new cljs.core.Keyword(null,"white","white",-483998618),"X",new cljs.core.Keyword(null,"black","black",1294279647),"O"], null);
return cljs.core.mapv.call(null,((function (s,f){
return (function (x){
return cljs.core.mapv.call(null,((function (s,f){
return (function (y){
return f.call(null,cljs.core.get.call(null,stones,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});})(s,f))
,cljs.core.range.call(null,(s + (1))));
});})(s,f))
,cljs.core.range.call(null,(s + (1))));
});
gozar.util.example1 = gozar.util.grid__GT_stones.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X........",".XXXXX...",".OOX.X...","..OXXX...","..OO.....",".O.......",".OOO...XX","...O..XOO","......XO."], null));
gozar.util.example2 = gozar.util.grid__GT_stones.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OOX......","XXXOOO...","..OXOXO..","..OXXXO..","..OXXOO..","...OXXO..","...OOO...","..OXXXO..","..OX.XO.."], null));
gozar.util.example3 = gozar.util.grid__GT_stones.call(null,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [".........","...OOOO..",".OOOXXO..",".XXOXXXO.",".OXX.XOO.",".OOOXOOO.","...OOO...",".........","........."], null));
/**
 * Returns the neighbors of [x y] that are true for f
 */
gozar.util.neighbors = (function gozar$util$neighbors(f,stones,p__10358){
var vec__10366 = p__10358;
var x = cljs.core.nth.call(null,vec__10366,(0),null);
var y = cljs.core.nth.call(null,vec__10366,(1),null);
return cljs.core.filter.call(null,cljs.core.comp.call(null,f,stones),cljs.core.map.call(null,((function (vec__10366,x,y){
return (function (p__10369){
var vec__10370 = p__10369;
var j = cljs.core.nth.call(null,vec__10370,(0),null);
var k = cljs.core.nth.call(null,vec__10370,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + j),(y + k)], null);
});})(vec__10366,x,y))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null)));
});
/**
 * Returns the group of stones that contains [x y], and nil if [x y] is free
 */
gozar.util.group_of = (function gozar$util$group_of(stones,p__10374){
var vec__10392 = p__10374;
var x = cljs.core.nth.call(null,vec__10392,(0),null);
var y = cljs.core.nth.call(null,vec__10392,(1),null);
var temp__6753__auto__ = (function (){var $ = cljs.core.get.call(null,stones,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"free","free",801364328),$)){
return $;
} else {
return null;
}
})();
if(cljs.core.truth_(temp__6753__auto__)){
var c = temp__6753__auto__;
var f = ((function (c,temp__6753__auto__,vec__10392,x,y){
return (function gozar$util$group_of_$_f(p__10402){
var vec__10406 = p__10402;
var seen = cljs.core.nth.call(null,vec__10406,(0),null);
var fronteir = cljs.core.nth.call(null,vec__10406,(1),null);
var nseen = cljs.core.reduce.call(null,cljs.core.conj,seen,fronteir);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nseen,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,nseen),cljs.core.mapcat.call(null,((function (nseen,vec__10406,seen,fronteir,c,temp__6753__auto__,vec__10392,x,y){
return (function (p1__10373_SHARP_){
return gozar.util.neighbors.call(null,cljs.core.partial.call(null,cljs.core._EQ_,c),stones,p1__10373_SHARP_);
});})(nseen,vec__10406,seen,fronteir,c,temp__6753__auto__,vec__10392,x,y))
,fronteir))], null);
});})(c,temp__6753__auto__,vec__10392,x,y))
;
return cljs.core.ffirst.call(null,cljs.core.drop_while.call(null,cljs.core.comp.call(null,cljs.core.seq,cljs.core.second),cljs.core.iterate.call(null,f,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)], null)], null))));
} else {
return null;
}
});
/**
 * Returns true if the group that contains [x y] has 0 liberties, false otherwise.
 *   Returns nik if [x y] is :free
 */
gozar.util.dead_group_QMARK_ = (function gozar$util$dead_group_QMARK_(stones,p__10410){
var vec__10414 = p__10410;
var x = cljs.core.nth.call(null,vec__10414,(0),null);
var y = cljs.core.nth.call(null,vec__10414,(1),null);
var temp__6753__auto__ = gozar.util.group_of.call(null,stones,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
if(cljs.core.truth_(temp__6753__auto__)){
var gp = temp__6753__auto__;
return cljs.core.empty_QMARK_.call(null,cljs.core.mapcat.call(null,cljs.core.partial.call(null,gozar.util.neighbors,((function (gp,temp__6753__auto__,vec__10414,x,y){
return (function (p1__10409_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"free","free",801364328),p1__10409_SHARP_);
});})(gp,temp__6753__auto__,vec__10414,x,y))
,stones),gp));
} else {
return null;
}
});
gozar.util.remove_group = (function gozar$util$remove_group(stones,p__10419){
var vec__10423 = p__10419;
var x = cljs.core.nth.call(null,vec__10423,(0),null);
var y = cljs.core.nth.call(null,vec__10423,(1),null);
return cljs.core.reduce.call(null,((function (vec__10423,x,y){
return (function (p1__10417_SHARP_,p2__10418_SHARP_){
return cljs.core.assoc.call(null,p1__10417_SHARP_,p2__10418_SHARP_,new cljs.core.Keyword(null,"free","free",801364328));
});})(vec__10423,x,y))
,stones,gozar.util.group_of.call(null,stones,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
});
gozar.util.place_stone = (function gozar$util$place_stone(stones,p__10426,color){
var vec__10430 = p__10426;
var x = cljs.core.nth.call(null,vec__10430,(0),null);
var y = cljs.core.nth.call(null,vec__10430,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"free","free",801364328),cljs.core.get.call(null,stones,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)))){
var nstones = cljs.core.assoc.call(null,stones,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),color);
var f = ((function (nstones,vec__10430,x,y){
return (function (stones__$1,c){
var inc = cljs.core.get.call(null,stones__$1,c);
if(cljs.core.truth_((function (){var and__7446__auto__ = cljs.core._EQ_.call(null,gozar.util.enemy.call(null,color),inc);
if(and__7446__auto__){
return gozar.util.dead_group_QMARK_.call(null,stones__$1,c);
} else {
return and__7446__auto__;
}
})())){
return gozar.util.remove_group.call(null,stones__$1,c);
} else {
return stones__$1;
}
});})(nstones,vec__10430,x,y))
;
return cljs.core.reduce.call(null,f,nstones,gozar.util.neighbors.call(null,cljs.core.PersistentHashSet.createAsIfByAssoc([gozar.util.enemy.call(null,color)]),stones,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else {
return null;
}
});
gozar.util.valid_move_QMARK_ = (function gozar$util$valid_move_QMARK_(stones,p__10433,color){
var vec__10437 = p__10433;
var x = cljs.core.nth.call(null,vec__10437,(0),null);
var y = cljs.core.nth.call(null,vec__10437,(1),null);
var temp__6753__auto__ = gozar.util.place_stone.call(null,stones,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),color);
if(cljs.core.truth_(temp__6753__auto__)){
var nstones = temp__6753__auto__;
return cljs.core.not.call(null,gozar.util.dead_group_QMARK_.call(null,nstones,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null)));
} else {
return null;
}
});
gozar.util.child_board = (function gozar$util$child_board(p__10440,p__10441){
var map__10446 = p__10440;
var map__10446__$1 = ((((!((map__10446 == null)))?((((map__10446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10446.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10446):map__10446);
var board = map__10446__$1;
var stones = cljs.core.get.call(null,map__10446__$1,new cljs.core.Keyword(null,"stones","stones",2138534597));
var turn = cljs.core.get.call(null,map__10446__$1,new cljs.core.Keyword(null,"turn","turn",75759344));
var map__10447 = p__10441;
var map__10447__$1 = ((((!((map__10447 == null)))?((((map__10447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10447.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10447):map__10447);
var player = cljs.core.get.call(null,map__10447__$1,new cljs.core.Keyword(null,"player","player",-97687400));
var location = cljs.core.get.call(null,map__10447__$1,new cljs.core.Keyword(null,"location","location",1815599388));
if((cljs.core.not.call(null,gozar.util.valid_move_QMARK_.call(null,stones,location,player))) || (cljs.core.not_EQ_.call(null,player,turn))){
return board;
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stones","stones",2138534597),gozar.util.place_stone.call(null,stones,location,player),new cljs.core.Keyword(null,"turn","turn",75759344),gozar.util.enemy.call(null,player),new cljs.core.Keyword(null,"ko","ko",-626263540),cljs.core.get.call(null,board,new cljs.core.Keyword(null,"ko","ko",-626263540)),new cljs.core.Keyword(null,"komi","komi",1538616357),cljs.core.get.call(null,board,new cljs.core.Keyword(null,"komi","komi",1538616357))], null);
}
});
/**
 * Returns every element before the first element that returns true for pred,
 * including the element itself. (take-until odd? '(2 4 6 8 9 10 12 14)) => '(2 4 6 8 9)
 */
gozar.util.take_until = (function gozar$util$take_until(pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__6753__auto__ = cljs.core.seq.call(null,coll);
if(temp__6753__auto__){
var s = temp__6753__auto__;
if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s)))){
var x__8392__auto__ = cljs.core.first.call(null,s);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__8392__auto__);
} else {
return cljs.core.cons.call(null,cljs.core.first.call(null,s),gozar.util.take_until.call(null,pred,cljs.core.rest.call(null,s)));
}
} else {
return null;
}
}),null,null));
});
gozar.util.apply_moves = (function gozar$util$apply_moves(board,moves){
return cljs.core.reduce.call(null,gozar.util.child_board,board,moves);
});
gozar.util.simulate_game = (function gozar$util$simulate_game(file_string){
var vec__10460 = gozar.sgfparser.parse_game.call(null,file_string);
var handicap = cljs.core.nth.call(null,vec__10460,(0),null);
var turn = cljs.core.nth.call(null,vec__10460,(1),null);
var moves = cljs.core.nth.call(null,vec__10460,(2),null);
return cljs.core.map.call(null,cljs.core.first,gozar.util.take_until.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.first,cljs.core.second),cljs.core.iterate.call(null,((function (vec__10460,handicap,turn,moves){
return (function (p__10463){
var vec__10464 = p__10463;
var b = cljs.core.nth.call(null,vec__10464,(0),null);
var vec__10467 = cljs.core.nth.call(null,vec__10464,(1),null);
var seq__10468 = cljs.core.seq.call(null,vec__10467);
var first__10469 = cljs.core.first.call(null,seq__10468);
var seq__10468__$1 = cljs.core.next.call(null,seq__10468);
var m = first__10469;
var ms = seq__10468__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.util.child_board.call(null,b,m),ms], null);
});})(vec__10460,handicap,turn,moves))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gozar.util.create_board.call(null,handicap,turn,5.5),moves], null))));
});

//# sourceMappingURL=util.js.map?rel=1537038595973