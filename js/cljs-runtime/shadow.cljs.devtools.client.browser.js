goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___70998 = arguments.length;
var i__5767__auto___70999 = (0);
while(true){
if((i__5767__auto___70999 < len__5766__auto___70998)){
args__5772__auto__.push((arguments[i__5767__auto___70999]));

var G__71000 = (i__5767__auto___70999 + (1));
i__5767__auto___70999 = G__71000;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq70428){
var G__70429 = cljs.core.first(seq70428);
var seq70428__$1 = cljs.core.next(seq70428);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70429,seq70428__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__70454 = cljs.core.seq(sources);
var chunk__70455 = null;
var count__70456 = (0);
var i__70457 = (0);
while(true){
if((i__70457 < count__70456)){
var map__70497 = chunk__70455.cljs$core$IIndexed$_nth$arity$2(null,i__70457);
var map__70497__$1 = cljs.core.__destructure_map(map__70497);
var src = map__70497__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70497__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70497__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70497__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70497__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e70499){var e_71001 = e70499;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_71001);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_71001.message)].join('')));
}

var G__71002 = seq__70454;
var G__71003 = chunk__70455;
var G__71004 = count__70456;
var G__71005 = (i__70457 + (1));
seq__70454 = G__71002;
chunk__70455 = G__71003;
count__70456 = G__71004;
i__70457 = G__71005;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__70454);
if(temp__5804__auto__){
var seq__70454__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70454__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__70454__$1);
var G__71006 = cljs.core.chunk_rest(seq__70454__$1);
var G__71007 = c__5565__auto__;
var G__71008 = cljs.core.count(c__5565__auto__);
var G__71009 = (0);
seq__70454 = G__71006;
chunk__70455 = G__71007;
count__70456 = G__71008;
i__70457 = G__71009;
continue;
} else {
var map__70509 = cljs.core.first(seq__70454__$1);
var map__70509__$1 = cljs.core.__destructure_map(map__70509);
var src = map__70509__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70509__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70509__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70509__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70509__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e70510){var e_71010 = e70510;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_71010);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_71010.message)].join('')));
}

var G__71011 = cljs.core.next(seq__70454__$1);
var G__71012 = null;
var G__71013 = (0);
var G__71014 = (0);
seq__70454 = G__71011;
chunk__70455 = G__71012;
count__70456 = G__71013;
i__70457 = G__71014;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__70527 = cljs.core.seq(js_requires);
var chunk__70528 = null;
var count__70529 = (0);
var i__70530 = (0);
while(true){
if((i__70530 < count__70529)){
var js_ns = chunk__70528.cljs$core$IIndexed$_nth$arity$2(null,i__70530);
var require_str_71015 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_71015);


var G__71016 = seq__70527;
var G__71017 = chunk__70528;
var G__71018 = count__70529;
var G__71019 = (i__70530 + (1));
seq__70527 = G__71016;
chunk__70528 = G__71017;
count__70529 = G__71018;
i__70530 = G__71019;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__70527);
if(temp__5804__auto__){
var seq__70527__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70527__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__70527__$1);
var G__71020 = cljs.core.chunk_rest(seq__70527__$1);
var G__71021 = c__5565__auto__;
var G__71022 = cljs.core.count(c__5565__auto__);
var G__71023 = (0);
seq__70527 = G__71020;
chunk__70528 = G__71021;
count__70529 = G__71022;
i__70530 = G__71023;
continue;
} else {
var js_ns = cljs.core.first(seq__70527__$1);
var require_str_71024 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_71024);


var G__71025 = cljs.core.next(seq__70527__$1);
var G__71026 = null;
var G__71027 = (0);
var G__71028 = (0);
seq__70527 = G__71025;
chunk__70528 = G__71026;
count__70529 = G__71027;
i__70530 = G__71028;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__70567){
var map__70569 = p__70567;
var map__70569__$1 = cljs.core.__destructure_map(map__70569);
var msg = map__70569__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70569__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70569__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70573(s__70574){
return (new cljs.core.LazySeq(null,(function (){
var s__70574__$1 = s__70574;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__70574__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__70579 = cljs.core.first(xs__6360__auto__);
var map__70579__$1 = cljs.core.__destructure_map(map__70579);
var src = map__70579__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70579__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70579__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__70574__$1,map__70579,map__70579__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__70569,map__70569__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70573_$_iter__70575(s__70576){
return (new cljs.core.LazySeq(null,((function (s__70574__$1,map__70579,map__70579__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__70569,map__70569__$1,msg,info,reload_info){
return (function (){
var s__70576__$1 = s__70576;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__70576__$1);
if(temp__5804__auto____$1){
var s__70576__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70576__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70576__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70578 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70577 = (0);
while(true){
if((i__70577 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__70577);
cljs.core.chunk_append(b__70578,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__71029 = (i__70577 + (1));
i__70577 = G__71029;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70578),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70573_$_iter__70575(cljs.core.chunk_rest(s__70576__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70578),null);
}
} else {
var warning = cljs.core.first(s__70576__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70573_$_iter__70575(cljs.core.rest(s__70576__$2)));
}
} else {
return null;
}
break;
}
});})(s__70574__$1,map__70579,map__70579__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__70569,map__70569__$1,msg,info,reload_info))
,null,null));
});})(s__70574__$1,map__70579,map__70579__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__70569,map__70569__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__70573(cljs.core.rest(s__70574__$1)));
} else {
var G__71030 = cljs.core.rest(s__70574__$1);
s__70574__$1 = G__71030;
continue;
}
} else {
var G__71031 = cljs.core.rest(s__70574__$1);
s__70574__$1 = G__71031;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__70594_71032 = cljs.core.seq(warnings);
var chunk__70595_71033 = null;
var count__70596_71034 = (0);
var i__70597_71035 = (0);
while(true){
if((i__70597_71035 < count__70596_71034)){
var map__70620_71036 = chunk__70595_71033.cljs$core$IIndexed$_nth$arity$2(null,i__70597_71035);
var map__70620_71037__$1 = cljs.core.__destructure_map(map__70620_71036);
var w_71038 = map__70620_71037__$1;
var msg_71039__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70620_71037__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_71040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70620_71037__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_71041 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70620_71037__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_71042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70620_71037__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_71042)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71040),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_71041),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_71039__$1)].join(''));


var G__71043 = seq__70594_71032;
var G__71044 = chunk__70595_71033;
var G__71045 = count__70596_71034;
var G__71046 = (i__70597_71035 + (1));
seq__70594_71032 = G__71043;
chunk__70595_71033 = G__71044;
count__70596_71034 = G__71045;
i__70597_71035 = G__71046;
continue;
} else {
var temp__5804__auto___71047 = cljs.core.seq(seq__70594_71032);
if(temp__5804__auto___71047){
var seq__70594_71048__$1 = temp__5804__auto___71047;
if(cljs.core.chunked_seq_QMARK_(seq__70594_71048__$1)){
var c__5565__auto___71049 = cljs.core.chunk_first(seq__70594_71048__$1);
var G__71050 = cljs.core.chunk_rest(seq__70594_71048__$1);
var G__71051 = c__5565__auto___71049;
var G__71052 = cljs.core.count(c__5565__auto___71049);
var G__71053 = (0);
seq__70594_71032 = G__71050;
chunk__70595_71033 = G__71051;
count__70596_71034 = G__71052;
i__70597_71035 = G__71053;
continue;
} else {
var map__70645_71054 = cljs.core.first(seq__70594_71048__$1);
var map__70645_71055__$1 = cljs.core.__destructure_map(map__70645_71054);
var w_71056 = map__70645_71055__$1;
var msg_71057__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70645_71055__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_71058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70645_71055__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_71059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70645_71055__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_71060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70645_71055__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_71060)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_71058),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_71059),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_71057__$1)].join(''));


var G__71062 = cljs.core.next(seq__70594_71048__$1);
var G__71063 = null;
var G__71064 = (0);
var G__71065 = (0);
seq__70594_71032 = G__71062;
chunk__70595_71033 = G__71063;
count__70596_71034 = G__71064;
i__70597_71035 = G__71065;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__70566_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__70566_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5041__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5041__auto__){
var and__5041__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5041__auto____$1){
return new$;
} else {
return and__5041__auto____$1;
}
} else {
return and__5041__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__70702){
var map__70703 = p__70702;
var map__70703__$1 = cljs.core.__destructure_map(map__70703);
var msg = map__70703__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70703__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__70704 = cljs.core.seq(updates);
var chunk__70707 = null;
var count__70708 = (0);
var i__70709 = (0);
while(true){
if((i__70709 < count__70708)){
var path = chunk__70707.cljs$core$IIndexed$_nth$arity$2(null,i__70709);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__70846_71069 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__70850_71070 = null;
var count__70851_71071 = (0);
var i__70852_71072 = (0);
while(true){
if((i__70852_71072 < count__70851_71071)){
var node_71073 = chunk__70850_71070.cljs$core$IIndexed$_nth$arity$2(null,i__70852_71072);
if(cljs.core.not(node_71073.shadow$old)){
var path_match_71074 = shadow.cljs.devtools.client.browser.match_paths(node_71073.getAttribute("href"),path);
if(cljs.core.truth_(path_match_71074)){
var new_link_71075 = (function (){var G__70875 = node_71073.cloneNode(true);
G__70875.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_71074),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__70875;
})();
(node_71073.shadow$old = true);

(new_link_71075.onload = ((function (seq__70846_71069,chunk__70850_71070,count__70851_71071,i__70852_71072,seq__70704,chunk__70707,count__70708,i__70709,new_link_71075,path_match_71074,node_71073,path,map__70703,map__70703__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_71073);
});})(seq__70846_71069,chunk__70850_71070,count__70851_71071,i__70852_71072,seq__70704,chunk__70707,count__70708,i__70709,new_link_71075,path_match_71074,node_71073,path,map__70703,map__70703__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_71074], 0));

goog.dom.insertSiblingAfter(new_link_71075,node_71073);


var G__71076 = seq__70846_71069;
var G__71077 = chunk__70850_71070;
var G__71078 = count__70851_71071;
var G__71079 = (i__70852_71072 + (1));
seq__70846_71069 = G__71076;
chunk__70850_71070 = G__71077;
count__70851_71071 = G__71078;
i__70852_71072 = G__71079;
continue;
} else {
var G__71080 = seq__70846_71069;
var G__71081 = chunk__70850_71070;
var G__71082 = count__70851_71071;
var G__71083 = (i__70852_71072 + (1));
seq__70846_71069 = G__71080;
chunk__70850_71070 = G__71081;
count__70851_71071 = G__71082;
i__70852_71072 = G__71083;
continue;
}
} else {
var G__71084 = seq__70846_71069;
var G__71085 = chunk__70850_71070;
var G__71086 = count__70851_71071;
var G__71087 = (i__70852_71072 + (1));
seq__70846_71069 = G__71084;
chunk__70850_71070 = G__71085;
count__70851_71071 = G__71086;
i__70852_71072 = G__71087;
continue;
}
} else {
var temp__5804__auto___71088 = cljs.core.seq(seq__70846_71069);
if(temp__5804__auto___71088){
var seq__70846_71089__$1 = temp__5804__auto___71088;
if(cljs.core.chunked_seq_QMARK_(seq__70846_71089__$1)){
var c__5565__auto___71090 = cljs.core.chunk_first(seq__70846_71089__$1);
var G__71091 = cljs.core.chunk_rest(seq__70846_71089__$1);
var G__71092 = c__5565__auto___71090;
var G__71093 = cljs.core.count(c__5565__auto___71090);
var G__71094 = (0);
seq__70846_71069 = G__71091;
chunk__70850_71070 = G__71092;
count__70851_71071 = G__71093;
i__70852_71072 = G__71094;
continue;
} else {
var node_71095 = cljs.core.first(seq__70846_71089__$1);
if(cljs.core.not(node_71095.shadow$old)){
var path_match_71096 = shadow.cljs.devtools.client.browser.match_paths(node_71095.getAttribute("href"),path);
if(cljs.core.truth_(path_match_71096)){
var new_link_71097 = (function (){var G__70884 = node_71095.cloneNode(true);
G__70884.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_71096),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__70884;
})();
(node_71095.shadow$old = true);

(new_link_71097.onload = ((function (seq__70846_71069,chunk__70850_71070,count__70851_71071,i__70852_71072,seq__70704,chunk__70707,count__70708,i__70709,new_link_71097,path_match_71096,node_71095,seq__70846_71089__$1,temp__5804__auto___71088,path,map__70703,map__70703__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_71095);
});})(seq__70846_71069,chunk__70850_71070,count__70851_71071,i__70852_71072,seq__70704,chunk__70707,count__70708,i__70709,new_link_71097,path_match_71096,node_71095,seq__70846_71089__$1,temp__5804__auto___71088,path,map__70703,map__70703__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_71096], 0));

goog.dom.insertSiblingAfter(new_link_71097,node_71095);


var G__71098 = cljs.core.next(seq__70846_71089__$1);
var G__71099 = null;
var G__71100 = (0);
var G__71101 = (0);
seq__70846_71069 = G__71098;
chunk__70850_71070 = G__71099;
count__70851_71071 = G__71100;
i__70852_71072 = G__71101;
continue;
} else {
var G__71102 = cljs.core.next(seq__70846_71089__$1);
var G__71103 = null;
var G__71104 = (0);
var G__71105 = (0);
seq__70846_71069 = G__71102;
chunk__70850_71070 = G__71103;
count__70851_71071 = G__71104;
i__70852_71072 = G__71105;
continue;
}
} else {
var G__71106 = cljs.core.next(seq__70846_71089__$1);
var G__71107 = null;
var G__71108 = (0);
var G__71109 = (0);
seq__70846_71069 = G__71106;
chunk__70850_71070 = G__71107;
count__70851_71071 = G__71108;
i__70852_71072 = G__71109;
continue;
}
}
} else {
}
}
break;
}


var G__71110 = seq__70704;
var G__71111 = chunk__70707;
var G__71112 = count__70708;
var G__71113 = (i__70709 + (1));
seq__70704 = G__71110;
chunk__70707 = G__71111;
count__70708 = G__71112;
i__70709 = G__71113;
continue;
} else {
var G__71114 = seq__70704;
var G__71115 = chunk__70707;
var G__71116 = count__70708;
var G__71117 = (i__70709 + (1));
seq__70704 = G__71114;
chunk__70707 = G__71115;
count__70708 = G__71116;
i__70709 = G__71117;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__70704);
if(temp__5804__auto__){
var seq__70704__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__70704__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__70704__$1);
var G__71118 = cljs.core.chunk_rest(seq__70704__$1);
var G__71119 = c__5565__auto__;
var G__71120 = cljs.core.count(c__5565__auto__);
var G__71121 = (0);
seq__70704 = G__71118;
chunk__70707 = G__71119;
count__70708 = G__71120;
i__70709 = G__71121;
continue;
} else {
var path = cljs.core.first(seq__70704__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__70886_71122 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__70890_71123 = null;
var count__70891_71124 = (0);
var i__70892_71125 = (0);
while(true){
if((i__70892_71125 < count__70891_71124)){
var node_71126 = chunk__70890_71123.cljs$core$IIndexed$_nth$arity$2(null,i__70892_71125);
if(cljs.core.not(node_71126.shadow$old)){
var path_match_71127 = shadow.cljs.devtools.client.browser.match_paths(node_71126.getAttribute("href"),path);
if(cljs.core.truth_(path_match_71127)){
var new_link_71128 = (function (){var G__70906 = node_71126.cloneNode(true);
G__70906.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_71127),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__70906;
})();
(node_71126.shadow$old = true);

(new_link_71128.onload = ((function (seq__70886_71122,chunk__70890_71123,count__70891_71124,i__70892_71125,seq__70704,chunk__70707,count__70708,i__70709,new_link_71128,path_match_71127,node_71126,path,seq__70704__$1,temp__5804__auto__,map__70703,map__70703__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_71126);
});})(seq__70886_71122,chunk__70890_71123,count__70891_71124,i__70892_71125,seq__70704,chunk__70707,count__70708,i__70709,new_link_71128,path_match_71127,node_71126,path,seq__70704__$1,temp__5804__auto__,map__70703,map__70703__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_71127], 0));

goog.dom.insertSiblingAfter(new_link_71128,node_71126);


var G__71129 = seq__70886_71122;
var G__71130 = chunk__70890_71123;
var G__71131 = count__70891_71124;
var G__71132 = (i__70892_71125 + (1));
seq__70886_71122 = G__71129;
chunk__70890_71123 = G__71130;
count__70891_71124 = G__71131;
i__70892_71125 = G__71132;
continue;
} else {
var G__71133 = seq__70886_71122;
var G__71134 = chunk__70890_71123;
var G__71135 = count__70891_71124;
var G__71136 = (i__70892_71125 + (1));
seq__70886_71122 = G__71133;
chunk__70890_71123 = G__71134;
count__70891_71124 = G__71135;
i__70892_71125 = G__71136;
continue;
}
} else {
var G__71137 = seq__70886_71122;
var G__71138 = chunk__70890_71123;
var G__71139 = count__70891_71124;
var G__71140 = (i__70892_71125 + (1));
seq__70886_71122 = G__71137;
chunk__70890_71123 = G__71138;
count__70891_71124 = G__71139;
i__70892_71125 = G__71140;
continue;
}
} else {
var temp__5804__auto___71141__$1 = cljs.core.seq(seq__70886_71122);
if(temp__5804__auto___71141__$1){
var seq__70886_71142__$1 = temp__5804__auto___71141__$1;
if(cljs.core.chunked_seq_QMARK_(seq__70886_71142__$1)){
var c__5565__auto___71143 = cljs.core.chunk_first(seq__70886_71142__$1);
var G__71144 = cljs.core.chunk_rest(seq__70886_71142__$1);
var G__71145 = c__5565__auto___71143;
var G__71146 = cljs.core.count(c__5565__auto___71143);
var G__71147 = (0);
seq__70886_71122 = G__71144;
chunk__70890_71123 = G__71145;
count__70891_71124 = G__71146;
i__70892_71125 = G__71147;
continue;
} else {
var node_71148 = cljs.core.first(seq__70886_71142__$1);
if(cljs.core.not(node_71148.shadow$old)){
var path_match_71149 = shadow.cljs.devtools.client.browser.match_paths(node_71148.getAttribute("href"),path);
if(cljs.core.truth_(path_match_71149)){
var new_link_71150 = (function (){var G__70914 = node_71148.cloneNode(true);
G__70914.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_71149),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__70914;
})();
(node_71148.shadow$old = true);

(new_link_71150.onload = ((function (seq__70886_71122,chunk__70890_71123,count__70891_71124,i__70892_71125,seq__70704,chunk__70707,count__70708,i__70709,new_link_71150,path_match_71149,node_71148,seq__70886_71142__$1,temp__5804__auto___71141__$1,path,seq__70704__$1,temp__5804__auto__,map__70703,map__70703__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_71148);
});})(seq__70886_71122,chunk__70890_71123,count__70891_71124,i__70892_71125,seq__70704,chunk__70707,count__70708,i__70709,new_link_71150,path_match_71149,node_71148,seq__70886_71142__$1,temp__5804__auto___71141__$1,path,seq__70704__$1,temp__5804__auto__,map__70703,map__70703__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_71149], 0));

goog.dom.insertSiblingAfter(new_link_71150,node_71148);


var G__71152 = cljs.core.next(seq__70886_71142__$1);
var G__71153 = null;
var G__71154 = (0);
var G__71155 = (0);
seq__70886_71122 = G__71152;
chunk__70890_71123 = G__71153;
count__70891_71124 = G__71154;
i__70892_71125 = G__71155;
continue;
} else {
var G__71156 = cljs.core.next(seq__70886_71142__$1);
var G__71157 = null;
var G__71158 = (0);
var G__71159 = (0);
seq__70886_71122 = G__71156;
chunk__70890_71123 = G__71157;
count__70891_71124 = G__71158;
i__70892_71125 = G__71159;
continue;
}
} else {
var G__71160 = cljs.core.next(seq__70886_71142__$1);
var G__71161 = null;
var G__71162 = (0);
var G__71163 = (0);
seq__70886_71122 = G__71160;
chunk__70890_71123 = G__71161;
count__70891_71124 = G__71162;
i__70892_71125 = G__71163;
continue;
}
}
} else {
}
}
break;
}


var G__71164 = cljs.core.next(seq__70704__$1);
var G__71165 = null;
var G__71166 = (0);
var G__71167 = (0);
seq__70704 = G__71164;
chunk__70707 = G__71165;
count__70708 = G__71166;
i__70709 = G__71167;
continue;
} else {
var G__71168 = cljs.core.next(seq__70704__$1);
var G__71169 = null;
var G__71170 = (0);
var G__71171 = (0);
seq__70704 = G__71168;
chunk__70707 = G__71169;
count__70708 = G__71170;
i__70709 = G__71171;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__70929){
var map__70930 = p__70929;
var map__70930__$1 = cljs.core.__destructure_map(map__70930);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70930__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__70946){
var map__70947 = p__70946;
var map__70947__$1 = cljs.core.__destructure_map(map__70947);
var _ = map__70947__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70947__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__70951,done,error){
var map__70952 = p__70951;
var map__70952__$1 = cljs.core.__destructure_map(map__70952);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70952__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__70954,done,error){
var map__70955 = p__70954;
var map__70955__$1 = cljs.core.__destructure_map(map__70955);
var msg = map__70955__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70955__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70955__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70955__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__70956){
var map__70957 = p__70956;
var map__70957__$1 = cljs.core.__destructure_map(map__70957);
var src = map__70957__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70957__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__70958 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__70958) : done.call(null,G__70958));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__70960){
var map__70961 = p__70960;
var map__70961__$1 = cljs.core.__destructure_map(map__70961);
var msg__$1 = map__70961__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70961__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e70962){var ex = e70962;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__70978){
var map__70979 = p__70978;
var map__70979__$1 = cljs.core.__destructure_map(map__70979);
var env = map__70979__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70979__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__70982){
var map__70983 = p__70982;
var map__70983__$1 = cljs.core.__destructure_map(map__70983);
var msg = map__70983__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70983__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__70989){
var map__70990 = p__70989;
var map__70990__$1 = cljs.core.__destructure_map(map__70990);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70990__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70990__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__70991){
var map__70992 = p__70991;
var map__70992__$1 = cljs.core.__destructure_map(map__70992);
var svc = map__70992__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70992__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
