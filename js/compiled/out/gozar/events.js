// Compiled by ClojureScript 1.9.542 {}
goog.provide('gozar.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('gozar.db');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return gozar.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"analyze-mode-change","analyze-mode-change",1029188387),(function (db,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089),false),new cljs.core.Keyword(null,"custom-moves","custom-moves",1173198063),null),new cljs.core.Keyword(null,"custom-move","custom-move",-1878986938),null);
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"custom-moves","custom-moves",1173198063),cljs.core.subvec.call(null,new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(db),(0),new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(db))),new cljs.core.Keyword(null,"custom-move","custom-move",-1878986938),new cljs.core.Keyword(null,"move","move",-2110884309).cljs$core$IFn$_invoke$arity$1(db)),new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089),true);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"add-custom-move","add-custom-move",-1899750389),(function (db,p__12528){
var vec__12529 = p__12528;
var _ = cljs.core.nth.call(null,vec__12529,(0),null);
var move = cljs.core.nth.call(null,vec__12529,(1),null);
return cljs.core.update.call(null,cljs.core.update.call(null,db,new cljs.core.Keyword(null,"custom-moves","custom-moves",1173198063),((function (vec__12529,_,move){
return (function (p1__12527_SHARP_){
return cljs.core.conj.call(null,cljs.core.subvec.call(null,p1__12527_SHARP_,(0),new cljs.core.Keyword(null,"custom-move","custom-move",-1878986938).cljs$core$IFn$_invoke$arity$1(db)),move);
});})(vec__12529,_,move))
),new cljs.core.Keyword(null,"custom-move","custom-move",-1878986938),cljs.core.inc);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-move","change-move",-208700263),(function (db,p__12532){
var vec__12533 = p__12532;
var _ = cljs.core.nth.call(null,vec__12533,(0),null);
var move = cljs.core.nth.call(null,vec__12533,(1),null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089).cljs$core$IFn$_invoke$arity$1(db))){
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"custom-move","custom-move",-1878986938),move);
} else {
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"move","move",-2110884309),move);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dec-move","dec-move",267444978),(function (db,_){
var move = (cljs.core.truth_(new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089).cljs$core$IFn$_invoke$arity$1(db))?new cljs.core.Keyword(null,"custom-move","custom-move",-1878986938):new cljs.core.Keyword(null,"move","move",-2110884309));
if((cljs.core.get.call(null,db,move) <= (0))){
return cljs.core.assoc.call(null,db,move,(0));
} else {
return cljs.core.update.call(null,db,move,cljs.core.dec);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"inc-move","inc-move",-1890506383),(function (db,_){
var move = (cljs.core.truth_(new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089).cljs$core$IFn$_invoke$arity$1(db))?new cljs.core.Keyword(null,"custom-move","custom-move",-1878986938):new cljs.core.Keyword(null,"move","move",-2110884309));
var moves_length = cljs.core.count.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"analyze-mode","analyze-mode",607816089).cljs$core$IFn$_invoke$arity$1(db))?new cljs.core.Keyword(null,"custom-moves","custom-moves",1173198063):new cljs.core.Keyword(null,"moves","moves",927465255)).call(null,db));
if((cljs.core.get.call(null,db,move) >= moves_length)){
return cljs.core.assoc.call(null,db,move,moves_length);
} else {
return cljs.core.update.call(null,db,move,cljs.core.inc);
}
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"change-of-file","change-of-file",860475011),(function (db,p__12536){
var vec__12537 = p__12536;
var _ = cljs.core.nth.call(null,vec__12537,(0),null);
var board = cljs.core.nth.call(null,vec__12537,(1),null);
var moves = cljs.core.nth.call(null,vec__12537,(2),null);
var info = cljs.core.nth.call(null,vec__12537,(3),null);
var handicap = cljs.core.nth.call(null,vec__12537,(4),null);
var filename = cljs.core.nth.call(null,vec__12537,(5),null);
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,gozar.db.default_db,new cljs.core.Keyword(null,"board","board",-1907017633),board),new cljs.core.Keyword(null,"moves","moves",927465255),moves),new cljs.core.Keyword(null,"info","info",-317069002),info),new cljs.core.Keyword(null,"handicap","handicap",653637002),handicap),new cljs.core.Keyword(null,"filename","filename",-1428840783),filename);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"set-attempt-to","set-attempt-to",1372667734),(function (db,p__12540){
var vec__12541 = p__12540;
var _ = cljs.core.nth.call(null,vec__12541,(0),null);
var to = cljs.core.nth.call(null,vec__12541,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"attempt","attempt",1611761308),to);
}));

//# sourceMappingURL=events.js.map?rel=1537411813788