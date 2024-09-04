goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__68146){
var map__68147 = p__68146;
var map__68147__$1 = cljs.core.__destructure_map(map__68147);
var m = map__68147__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68147__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68147__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__68148_68452 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__68149_68453 = null;
var count__68150_68454 = (0);
var i__68151_68455 = (0);
while(true){
if((i__68151_68455 < count__68150_68454)){
var f_68460 = chunk__68149_68453.cljs$core$IIndexed$_nth$arity$2(null,i__68151_68455);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_68460], 0));


var G__68461 = seq__68148_68452;
var G__68462 = chunk__68149_68453;
var G__68463 = count__68150_68454;
var G__68464 = (i__68151_68455 + (1));
seq__68148_68452 = G__68461;
chunk__68149_68453 = G__68462;
count__68150_68454 = G__68463;
i__68151_68455 = G__68464;
continue;
} else {
var temp__5804__auto___68467 = cljs.core.seq(seq__68148_68452);
if(temp__5804__auto___68467){
var seq__68148_68472__$1 = temp__5804__auto___68467;
if(cljs.core.chunked_seq_QMARK_(seq__68148_68472__$1)){
var c__5565__auto___68476 = cljs.core.chunk_first(seq__68148_68472__$1);
var G__68477 = cljs.core.chunk_rest(seq__68148_68472__$1);
var G__68478 = c__5565__auto___68476;
var G__68479 = cljs.core.count(c__5565__auto___68476);
var G__68480 = (0);
seq__68148_68452 = G__68477;
chunk__68149_68453 = G__68478;
count__68150_68454 = G__68479;
i__68151_68455 = G__68480;
continue;
} else {
var f_68482 = cljs.core.first(seq__68148_68472__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_68482], 0));


var G__68483 = cljs.core.next(seq__68148_68472__$1);
var G__68484 = null;
var G__68485 = (0);
var G__68486 = (0);
seq__68148_68452 = G__68483;
chunk__68149_68453 = G__68484;
count__68150_68454 = G__68485;
i__68151_68455 = G__68486;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_68491 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5043__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_68491], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_68491)))?cljs.core.second(arglists_68491):arglists_68491)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__68162_68494 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__68163_68495 = null;
var count__68164_68496 = (0);
var i__68165_68497 = (0);
while(true){
if((i__68165_68497 < count__68164_68496)){
var vec__68188_68498 = chunk__68163_68495.cljs$core$IIndexed$_nth$arity$2(null,i__68165_68497);
var name_68499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68188_68498,(0),null);
var map__68191_68500 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68188_68498,(1),null);
var map__68191_68501__$1 = cljs.core.__destructure_map(map__68191_68500);
var doc_68502 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68191_68501__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_68503 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68191_68501__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_68499], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_68503], 0));

if(cljs.core.truth_(doc_68502)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_68502], 0));
} else {
}


var G__68504 = seq__68162_68494;
var G__68505 = chunk__68163_68495;
var G__68506 = count__68164_68496;
var G__68507 = (i__68165_68497 + (1));
seq__68162_68494 = G__68504;
chunk__68163_68495 = G__68505;
count__68164_68496 = G__68506;
i__68165_68497 = G__68507;
continue;
} else {
var temp__5804__auto___68508 = cljs.core.seq(seq__68162_68494);
if(temp__5804__auto___68508){
var seq__68162_68509__$1 = temp__5804__auto___68508;
if(cljs.core.chunked_seq_QMARK_(seq__68162_68509__$1)){
var c__5565__auto___68510 = cljs.core.chunk_first(seq__68162_68509__$1);
var G__68511 = cljs.core.chunk_rest(seq__68162_68509__$1);
var G__68512 = c__5565__auto___68510;
var G__68513 = cljs.core.count(c__5565__auto___68510);
var G__68514 = (0);
seq__68162_68494 = G__68511;
chunk__68163_68495 = G__68512;
count__68164_68496 = G__68513;
i__68165_68497 = G__68514;
continue;
} else {
var vec__68195_68515 = cljs.core.first(seq__68162_68509__$1);
var name_68516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68195_68515,(0),null);
var map__68198_68517 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68195_68515,(1),null);
var map__68198_68518__$1 = cljs.core.__destructure_map(map__68198_68517);
var doc_68519 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68198_68518__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_68520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68198_68518__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_68516], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_68520], 0));

if(cljs.core.truth_(doc_68519)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_68519], 0));
} else {
}


var G__68521 = cljs.core.next(seq__68162_68509__$1);
var G__68522 = null;
var G__68523 = (0);
var G__68524 = (0);
seq__68162_68494 = G__68521;
chunk__68163_68495 = G__68522;
count__68164_68496 = G__68523;
i__68165_68497 = G__68524;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__68205 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__68206 = null;
var count__68207 = (0);
var i__68208 = (0);
while(true){
if((i__68208 < count__68207)){
var role = chunk__68206.cljs$core$IIndexed$_nth$arity$2(null,i__68208);
var temp__5804__auto___68525__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___68525__$1)){
var spec_68526 = temp__5804__auto___68525__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_68526)], 0));
} else {
}


var G__68527 = seq__68205;
var G__68528 = chunk__68206;
var G__68529 = count__68207;
var G__68530 = (i__68208 + (1));
seq__68205 = G__68527;
chunk__68206 = G__68528;
count__68207 = G__68529;
i__68208 = G__68530;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__68205);
if(temp__5804__auto____$1){
var seq__68205__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__68205__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__68205__$1);
var G__68532 = cljs.core.chunk_rest(seq__68205__$1);
var G__68533 = c__5565__auto__;
var G__68534 = cljs.core.count(c__5565__auto__);
var G__68535 = (0);
seq__68205 = G__68532;
chunk__68206 = G__68533;
count__68207 = G__68534;
i__68208 = G__68535;
continue;
} else {
var role = cljs.core.first(seq__68205__$1);
var temp__5804__auto___68536__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___68536__$2)){
var spec_68538 = temp__5804__auto___68536__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_68538)], 0));
} else {
}


var G__68540 = cljs.core.next(seq__68205__$1);
var G__68541 = null;
var G__68542 = (0);
var G__68543 = (0);
seq__68205 = G__68540;
chunk__68206 = G__68541;
count__68207 = G__68542;
i__68208 = G__68543;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__68551 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__68552 = cljs.core.ex_cause(t);
via = G__68551;
t = G__68552;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__68245 = datafied_throwable;
var map__68245__$1 = cljs.core.__destructure_map(map__68245);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68245__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__68246 = cljs.core.last(via);
var map__68246__$1 = cljs.core.__destructure_map(map__68246);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__68247 = data;
var map__68247__$1 = cljs.core.__destructure_map(map__68247);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__68248 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__68248__$1 = cljs.core.__destructure_map(map__68248);
var top_data = map__68248__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68248__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__68264 = phase;
var G__68264__$1 = (((G__68264 instanceof cljs.core.Keyword))?G__68264.fqn:null);
switch (G__68264__$1) {
case "read-source":
var map__68271 = data;
var map__68271__$1 = cljs.core.__destructure_map(map__68271);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68271__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68271__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__68277 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__68277__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68277,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__68277);
var G__68277__$2 = (cljs.core.truth_((function (){var fexpr__68282 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__68282.cljs$core$IFn$_invoke$arity$1 ? fexpr__68282.cljs$core$IFn$_invoke$arity$1(source) : fexpr__68282.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68277__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__68277__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68277__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__68277__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__68299 = top_data;
var G__68299__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68299,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__68299);
var G__68299__$2 = (cljs.core.truth_((function (){var fexpr__68310 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__68310.cljs$core$IFn$_invoke$arity$1 ? fexpr__68310.cljs$core$IFn$_invoke$arity$1(source) : fexpr__68310.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__68299__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__68299__$1);
var G__68299__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68299__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__68299__$2);
var G__68299__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68299__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__68299__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68299__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__68299__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__68322 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68322,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68322,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68322,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68322,(3),null);
var G__68325 = top_data;
var G__68325__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68325,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__68325);
var G__68325__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68325__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__68325__$1);
var G__68325__$3 = (cljs.core.truth_((function (){var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68325__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__68325__$2);
var G__68325__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68325__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__68325__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68325__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__68325__$4;
}

break;
case "execution":
var vec__68348 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68348,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68348,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68348,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68348,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__68242_SHARP_){
var or__5043__auto__ = (p1__68242_SHARP_ == null);
if(or__5043__auto__){
return or__5043__auto__;
} else {
var fexpr__68355 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__68355.cljs$core$IFn$_invoke$arity$1 ? fexpr__68355.cljs$core$IFn$_invoke$arity$1(p1__68242_SHARP_) : fexpr__68355.call(null,p1__68242_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5043__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return line;
}
})();
var G__68356 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__68356__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68356,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__68356);
var G__68356__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68356__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__68356__$1);
var G__68356__$3 = (cljs.core.truth_((function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
var and__5041__auto__ = source__$1;
if(cljs.core.truth_(and__5041__auto__)){
return method;
} else {
return and__5041__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68356__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5043__auto__ = fn;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__68356__$2);
var G__68356__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68356__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__68356__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68356__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__68356__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68264__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__68363){
var map__68365 = p__68363;
var map__68365__$1 = cljs.core.__destructure_map(map__68365);
var triage_data = map__68365__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68365__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68365__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68365__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68365__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68365__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68365__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68365__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68365__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = source;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5043__auto__ = line;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5043__auto__ = class$;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__68368 = phase;
var G__68368__$1 = (((G__68368 instanceof cljs.core.Keyword))?G__68368.fqn:null);
switch (G__68368__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__68370 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__68371 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68372 = loc;
var G__68373 = (cljs.core.truth_(spec)?(function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__68375_68666 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__68376_68667 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__68377_68668 = true;
var _STAR_print_fn_STAR__temp_val__68378_68669 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68377_68668);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68378_68669);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68359_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__68359_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68376_68667);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68375_68666);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__68370,G__68371,G__68372,G__68373) : format.call(null,G__68370,G__68371,G__68372,G__68373));

break;
case "macroexpansion":
var G__68382 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__68383 = cause_type;
var G__68384 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68385 = loc;
var G__68386 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__68382,G__68383,G__68384,G__68385,G__68386) : format.call(null,G__68382,G__68383,G__68384,G__68385,G__68386));

break;
case "compile-syntax-check":
var G__68387 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__68388 = cause_type;
var G__68389 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68390 = loc;
var G__68391 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__68387,G__68388,G__68389,G__68390,G__68391) : format.call(null,G__68387,G__68388,G__68389,G__68390,G__68391));

break;
case "compilation":
var G__68392 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__68393 = cause_type;
var G__68394 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68395 = loc;
var G__68396 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__68392,G__68393,G__68394,G__68395,G__68396) : format.call(null,G__68392,G__68393,G__68394,G__68395,G__68396));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__68398 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__68399 = symbol;
var G__68400 = loc;
var G__68401 = (function (){var sb__5687__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__68402_68677 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__68403_68678 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__68404_68679 = true;
var _STAR_print_fn_STAR__temp_val__68405_68680 = (function (x__5688__auto__){
return sb__5687__auto__.append(x__5688__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__68404_68679);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__68405_68680);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68361_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__68361_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__68403_68678);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__68402_68677);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5687__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__68398,G__68399,G__68400,G__68401) : format.call(null,G__68398,G__68399,G__68400,G__68401));
} else {
var G__68409 = "Execution error%s at %s(%s).\n%s\n";
var G__68410 = cause_type;
var G__68411 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__68412 = loc;
var G__68413 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__68409,G__68410,G__68411,G__68412,G__68413) : format.call(null,G__68409,G__68410,G__68411,G__68412,G__68413));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__68368__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
