goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__66589__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__66589 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66590__i = 0, G__66590__a = new Array(arguments.length -  0);
while (G__66590__i < G__66590__a.length) {G__66590__a[G__66590__i] = arguments[G__66590__i + 0]; ++G__66590__i;}
  args = new cljs.core.IndexedSeq(G__66590__a,0,null);
} 
return G__66589__delegate.call(this,args);};
G__66589.cljs$lang$maxFixedArity = 0;
G__66589.cljs$lang$applyTo = (function (arglist__66591){
var args = cljs.core.seq(arglist__66591);
return G__66589__delegate(args);
});
G__66589.cljs$core$IFn$_invoke$arity$variadic = G__66589__delegate;
return G__66589;
})()
);

(o.error = (function() { 
var G__66592__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__66592 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66594__i = 0, G__66594__a = new Array(arguments.length -  0);
while (G__66594__i < G__66594__a.length) {G__66594__a[G__66594__i] = arguments[G__66594__i + 0]; ++G__66594__i;}
  args = new cljs.core.IndexedSeq(G__66594__a,0,null);
} 
return G__66592__delegate.call(this,args);};
G__66592.cljs$lang$maxFixedArity = 0;
G__66592.cljs$lang$applyTo = (function (arglist__66595){
var args = cljs.core.seq(arglist__66595);
return G__66592__delegate(args);
});
G__66592.cljs$core$IFn$_invoke$arity$variadic = G__66592__delegate;
return G__66592;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
