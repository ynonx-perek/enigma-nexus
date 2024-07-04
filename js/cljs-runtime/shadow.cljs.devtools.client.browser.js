goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69937 = arguments.length;
var i__5767__auto___69938 = (0);
while(true){
if((i__5767__auto___69938 < len__5766__auto___69937)){
args__5772__auto__.push((arguments[i__5767__auto___69938]));

var G__69939 = (i__5767__auto___69938 + (1));
i__5767__auto___69938 = G__69939;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq69729){
var G__69730 = cljs.core.first(seq69729);
var seq69729__$1 = cljs.core.next(seq69729);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69730,seq69729__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__69740 = cljs.core.seq(sources);
var chunk__69741 = null;
var count__69742 = (0);
var i__69743 = (0);
while(true){
if((i__69743 < count__69742)){
var map__69753 = chunk__69741.cljs$core$IIndexed$_nth$arity$2(null,i__69743);
var map__69753__$1 = cljs.core.__destructure_map(map__69753);
var src = map__69753__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69753__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69753__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69753__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69753__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e69754){var e_69941 = e69754;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_69941);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_69941.message)].join('')));
}

var G__69942 = seq__69740;
var G__69943 = chunk__69741;
var G__69944 = count__69742;
var G__69945 = (i__69743 + (1));
seq__69740 = G__69942;
chunk__69741 = G__69943;
count__69742 = G__69944;
i__69743 = G__69945;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69740);
if(temp__5804__auto__){
var seq__69740__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69740__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__69740__$1);
var G__69946 = cljs.core.chunk_rest(seq__69740__$1);
var G__69947 = c__5565__auto__;
var G__69948 = cljs.core.count(c__5565__auto__);
var G__69949 = (0);
seq__69740 = G__69946;
chunk__69741 = G__69947;
count__69742 = G__69948;
i__69743 = G__69949;
continue;
} else {
var map__69757 = cljs.core.first(seq__69740__$1);
var map__69757__$1 = cljs.core.__destructure_map(map__69757);
var src = map__69757__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69757__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69757__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69757__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69757__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e69758){var e_70007 = e69758;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_70007);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_70007.message)].join('')));
}

var G__70008 = cljs.core.next(seq__69740__$1);
var G__70009 = null;
var G__70010 = (0);
var G__70011 = (0);
seq__69740 = G__70008;
chunk__69741 = G__70009;
count__69742 = G__70010;
i__69743 = G__70011;
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
var seq__69763 = cljs.core.seq(js_requires);
var chunk__69764 = null;
var count__69765 = (0);
var i__69766 = (0);
while(true){
if((i__69766 < count__69765)){
var js_ns = chunk__69764.cljs$core$IIndexed$_nth$arity$2(null,i__69766);
var require_str_70012 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_70012);


var G__70013 = seq__69763;
var G__70014 = chunk__69764;
var G__70015 = count__69765;
var G__70016 = (i__69766 + (1));
seq__69763 = G__70013;
chunk__69764 = G__70014;
count__69765 = G__70015;
i__69766 = G__70016;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69763);
if(temp__5804__auto__){
var seq__69763__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69763__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__69763__$1);
var G__70017 = cljs.core.chunk_rest(seq__69763__$1);
var G__70018 = c__5565__auto__;
var G__70019 = cljs.core.count(c__5565__auto__);
var G__70020 = (0);
seq__69763 = G__70017;
chunk__69764 = G__70018;
count__69765 = G__70019;
i__69766 = G__70020;
continue;
} else {
var js_ns = cljs.core.first(seq__69763__$1);
var require_str_70021 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_70021);


var G__70022 = cljs.core.next(seq__69763__$1);
var G__70023 = null;
var G__70024 = (0);
var G__70025 = (0);
seq__69763 = G__70022;
chunk__69764 = G__70023;
count__69765 = G__70024;
i__69766 = G__70025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__69775){
var map__69776 = p__69775;
var map__69776__$1 = cljs.core.__destructure_map(map__69776);
var msg = map__69776__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69776__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69776__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69778(s__69779){
return (new cljs.core.LazySeq(null,(function (){
var s__69779__$1 = s__69779;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__69779__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__69784 = cljs.core.first(xs__6360__auto__);
var map__69784__$1 = cljs.core.__destructure_map(map__69784);
var src = map__69784__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69784__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69784__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5516__auto__ = ((function (s__69779__$1,map__69784,map__69784__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__69776,map__69776__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69778_$_iter__69780(s__69781){
return (new cljs.core.LazySeq(null,((function (s__69779__$1,map__69784,map__69784__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__69776,map__69776__$1,msg,info,reload_info){
return (function (){
var s__69781__$1 = s__69781;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__69781__$1);
if(temp__5804__auto____$1){
var s__69781__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__69781__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__69781__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__69783 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__69782 = (0);
while(true){
if((i__69782 < size__5519__auto__)){
var warning = cljs.core._nth(c__5518__auto__,i__69782);
cljs.core.chunk_append(b__69783,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__70026 = (i__69782 + (1));
i__69782 = G__70026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69783),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69778_$_iter__69780(cljs.core.chunk_rest(s__69781__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69783),null);
}
} else {
var warning = cljs.core.first(s__69781__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69778_$_iter__69780(cljs.core.rest(s__69781__$2)));
}
} else {
return null;
}
break;
}
});})(s__69779__$1,map__69784,map__69784__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__69776,map__69776__$1,msg,info,reload_info))
,null,null));
});})(s__69779__$1,map__69784,map__69784__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__69776,map__69776__$1,msg,info,reload_info))
;
var fs__5517__auto__ = cljs.core.seq(iterys__5516__auto__(warnings));
if(fs__5517__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5517__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__69778(cljs.core.rest(s__69779__$1)));
} else {
var G__70032 = cljs.core.rest(s__69779__$1);
s__69779__$1 = G__70032;
continue;
}
} else {
var G__70033 = cljs.core.rest(s__69779__$1);
s__69779__$1 = G__70033;
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
var seq__69786_70034 = cljs.core.seq(warnings);
var chunk__69787_70035 = null;
var count__69788_70036 = (0);
var i__69789_70037 = (0);
while(true){
if((i__69789_70037 < count__69788_70036)){
var map__69792_70038 = chunk__69787_70035.cljs$core$IIndexed$_nth$arity$2(null,i__69789_70037);
var map__69792_70039__$1 = cljs.core.__destructure_map(map__69792_70038);
var w_70040 = map__69792_70039__$1;
var msg_70041__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69792_70039__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_70042 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69792_70039__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_70043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69792_70039__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_70044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69792_70039__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_70044)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_70042),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_70043),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_70041__$1)].join(''));


var G__70048 = seq__69786_70034;
var G__70049 = chunk__69787_70035;
var G__70050 = count__69788_70036;
var G__70051 = (i__69789_70037 + (1));
seq__69786_70034 = G__70048;
chunk__69787_70035 = G__70049;
count__69788_70036 = G__70050;
i__69789_70037 = G__70051;
continue;
} else {
var temp__5804__auto___70053 = cljs.core.seq(seq__69786_70034);
if(temp__5804__auto___70053){
var seq__69786_70054__$1 = temp__5804__auto___70053;
if(cljs.core.chunked_seq_QMARK_(seq__69786_70054__$1)){
var c__5565__auto___70057 = cljs.core.chunk_first(seq__69786_70054__$1);
var G__70058 = cljs.core.chunk_rest(seq__69786_70054__$1);
var G__70059 = c__5565__auto___70057;
var G__70060 = cljs.core.count(c__5565__auto___70057);
var G__70061 = (0);
seq__69786_70034 = G__70058;
chunk__69787_70035 = G__70059;
count__69788_70036 = G__70060;
i__69789_70037 = G__70061;
continue;
} else {
var map__69793_70063 = cljs.core.first(seq__69786_70054__$1);
var map__69793_70064__$1 = cljs.core.__destructure_map(map__69793_70063);
var w_70065 = map__69793_70064__$1;
var msg_70066__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69793_70064__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_70067 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69793_70064__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_70068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69793_70064__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_70069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69793_70064__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_70069)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_70067),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_70068),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_70066__$1)].join(''));


var G__70070 = cljs.core.next(seq__69786_70054__$1);
var G__70071 = null;
var G__70072 = (0);
var G__70073 = (0);
seq__69786_70034 = G__70070;
chunk__69787_70035 = G__70071;
count__69788_70036 = G__70072;
i__69789_70037 = G__70073;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__69771_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__69771_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__69800){
var map__69801 = p__69800;
var map__69801__$1 = cljs.core.__destructure_map(map__69801);
var msg = map__69801__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69801__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__69802 = cljs.core.seq(updates);
var chunk__69804 = null;
var count__69805 = (0);
var i__69806 = (0);
while(true){
if((i__69806 < count__69805)){
var path = chunk__69804.cljs$core$IIndexed$_nth$arity$2(null,i__69806);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__69854_70074 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__69858_70075 = null;
var count__69859_70076 = (0);
var i__69860_70077 = (0);
while(true){
if((i__69860_70077 < count__69859_70076)){
var node_70078 = chunk__69858_70075.cljs$core$IIndexed$_nth$arity$2(null,i__69860_70077);
if(cljs.core.not(node_70078.shadow$old)){
var path_match_70079 = shadow.cljs.devtools.client.browser.match_paths(node_70078.getAttribute("href"),path);
if(cljs.core.truth_(path_match_70079)){
var new_link_70080 = (function (){var G__69870 = node_70078.cloneNode(true);
G__69870.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_70079),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69870;
})();
(node_70078.shadow$old = true);

(new_link_70080.onload = ((function (seq__69854_70074,chunk__69858_70075,count__69859_70076,i__69860_70077,seq__69802,chunk__69804,count__69805,i__69806,new_link_70080,path_match_70079,node_70078,path,map__69801,map__69801__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_70078);
});})(seq__69854_70074,chunk__69858_70075,count__69859_70076,i__69860_70077,seq__69802,chunk__69804,count__69805,i__69806,new_link_70080,path_match_70079,node_70078,path,map__69801,map__69801__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_70079], 0));

goog.dom.insertSiblingAfter(new_link_70080,node_70078);


var G__70081 = seq__69854_70074;
var G__70082 = chunk__69858_70075;
var G__70083 = count__69859_70076;
var G__70084 = (i__69860_70077 + (1));
seq__69854_70074 = G__70081;
chunk__69858_70075 = G__70082;
count__69859_70076 = G__70083;
i__69860_70077 = G__70084;
continue;
} else {
var G__70085 = seq__69854_70074;
var G__70086 = chunk__69858_70075;
var G__70087 = count__69859_70076;
var G__70088 = (i__69860_70077 + (1));
seq__69854_70074 = G__70085;
chunk__69858_70075 = G__70086;
count__69859_70076 = G__70087;
i__69860_70077 = G__70088;
continue;
}
} else {
var G__70089 = seq__69854_70074;
var G__70090 = chunk__69858_70075;
var G__70091 = count__69859_70076;
var G__70092 = (i__69860_70077 + (1));
seq__69854_70074 = G__70089;
chunk__69858_70075 = G__70090;
count__69859_70076 = G__70091;
i__69860_70077 = G__70092;
continue;
}
} else {
var temp__5804__auto___70093 = cljs.core.seq(seq__69854_70074);
if(temp__5804__auto___70093){
var seq__69854_70094__$1 = temp__5804__auto___70093;
if(cljs.core.chunked_seq_QMARK_(seq__69854_70094__$1)){
var c__5565__auto___70095 = cljs.core.chunk_first(seq__69854_70094__$1);
var G__70096 = cljs.core.chunk_rest(seq__69854_70094__$1);
var G__70097 = c__5565__auto___70095;
var G__70098 = cljs.core.count(c__5565__auto___70095);
var G__70099 = (0);
seq__69854_70074 = G__70096;
chunk__69858_70075 = G__70097;
count__69859_70076 = G__70098;
i__69860_70077 = G__70099;
continue;
} else {
var node_70100 = cljs.core.first(seq__69854_70094__$1);
if(cljs.core.not(node_70100.shadow$old)){
var path_match_70101 = shadow.cljs.devtools.client.browser.match_paths(node_70100.getAttribute("href"),path);
if(cljs.core.truth_(path_match_70101)){
var new_link_70102 = (function (){var G__69871 = node_70100.cloneNode(true);
G__69871.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_70101),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69871;
})();
(node_70100.shadow$old = true);

(new_link_70102.onload = ((function (seq__69854_70074,chunk__69858_70075,count__69859_70076,i__69860_70077,seq__69802,chunk__69804,count__69805,i__69806,new_link_70102,path_match_70101,node_70100,seq__69854_70094__$1,temp__5804__auto___70093,path,map__69801,map__69801__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_70100);
});})(seq__69854_70074,chunk__69858_70075,count__69859_70076,i__69860_70077,seq__69802,chunk__69804,count__69805,i__69806,new_link_70102,path_match_70101,node_70100,seq__69854_70094__$1,temp__5804__auto___70093,path,map__69801,map__69801__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_70101], 0));

goog.dom.insertSiblingAfter(new_link_70102,node_70100);


var G__70103 = cljs.core.next(seq__69854_70094__$1);
var G__70104 = null;
var G__70105 = (0);
var G__70106 = (0);
seq__69854_70074 = G__70103;
chunk__69858_70075 = G__70104;
count__69859_70076 = G__70105;
i__69860_70077 = G__70106;
continue;
} else {
var G__70107 = cljs.core.next(seq__69854_70094__$1);
var G__70108 = null;
var G__70109 = (0);
var G__70110 = (0);
seq__69854_70074 = G__70107;
chunk__69858_70075 = G__70108;
count__69859_70076 = G__70109;
i__69860_70077 = G__70110;
continue;
}
} else {
var G__70111 = cljs.core.next(seq__69854_70094__$1);
var G__70112 = null;
var G__70113 = (0);
var G__70114 = (0);
seq__69854_70074 = G__70111;
chunk__69858_70075 = G__70112;
count__69859_70076 = G__70113;
i__69860_70077 = G__70114;
continue;
}
}
} else {
}
}
break;
}


var G__70115 = seq__69802;
var G__70116 = chunk__69804;
var G__70117 = count__69805;
var G__70118 = (i__69806 + (1));
seq__69802 = G__70115;
chunk__69804 = G__70116;
count__69805 = G__70117;
i__69806 = G__70118;
continue;
} else {
var G__70119 = seq__69802;
var G__70120 = chunk__69804;
var G__70121 = count__69805;
var G__70122 = (i__69806 + (1));
seq__69802 = G__70119;
chunk__69804 = G__70120;
count__69805 = G__70121;
i__69806 = G__70122;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69802);
if(temp__5804__auto__){
var seq__69802__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69802__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__69802__$1);
var G__70123 = cljs.core.chunk_rest(seq__69802__$1);
var G__70124 = c__5565__auto__;
var G__70125 = cljs.core.count(c__5565__auto__);
var G__70126 = (0);
seq__69802 = G__70123;
chunk__69804 = G__70124;
count__69805 = G__70125;
i__69806 = G__70126;
continue;
} else {
var path = cljs.core.first(seq__69802__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__69874_70127 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__69878_70128 = null;
var count__69879_70129 = (0);
var i__69880_70130 = (0);
while(true){
if((i__69880_70130 < count__69879_70129)){
var node_70131 = chunk__69878_70128.cljs$core$IIndexed$_nth$arity$2(null,i__69880_70130);
if(cljs.core.not(node_70131.shadow$old)){
var path_match_70132 = shadow.cljs.devtools.client.browser.match_paths(node_70131.getAttribute("href"),path);
if(cljs.core.truth_(path_match_70132)){
var new_link_70133 = (function (){var G__69886 = node_70131.cloneNode(true);
G__69886.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_70132),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69886;
})();
(node_70131.shadow$old = true);

(new_link_70133.onload = ((function (seq__69874_70127,chunk__69878_70128,count__69879_70129,i__69880_70130,seq__69802,chunk__69804,count__69805,i__69806,new_link_70133,path_match_70132,node_70131,path,seq__69802__$1,temp__5804__auto__,map__69801,map__69801__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_70131);
});})(seq__69874_70127,chunk__69878_70128,count__69879_70129,i__69880_70130,seq__69802,chunk__69804,count__69805,i__69806,new_link_70133,path_match_70132,node_70131,path,seq__69802__$1,temp__5804__auto__,map__69801,map__69801__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_70132], 0));

goog.dom.insertSiblingAfter(new_link_70133,node_70131);


var G__70134 = seq__69874_70127;
var G__70135 = chunk__69878_70128;
var G__70136 = count__69879_70129;
var G__70137 = (i__69880_70130 + (1));
seq__69874_70127 = G__70134;
chunk__69878_70128 = G__70135;
count__69879_70129 = G__70136;
i__69880_70130 = G__70137;
continue;
} else {
var G__70138 = seq__69874_70127;
var G__70139 = chunk__69878_70128;
var G__70140 = count__69879_70129;
var G__70141 = (i__69880_70130 + (1));
seq__69874_70127 = G__70138;
chunk__69878_70128 = G__70139;
count__69879_70129 = G__70140;
i__69880_70130 = G__70141;
continue;
}
} else {
var G__70142 = seq__69874_70127;
var G__70143 = chunk__69878_70128;
var G__70144 = count__69879_70129;
var G__70145 = (i__69880_70130 + (1));
seq__69874_70127 = G__70142;
chunk__69878_70128 = G__70143;
count__69879_70129 = G__70144;
i__69880_70130 = G__70145;
continue;
}
} else {
var temp__5804__auto___70146__$1 = cljs.core.seq(seq__69874_70127);
if(temp__5804__auto___70146__$1){
var seq__69874_70147__$1 = temp__5804__auto___70146__$1;
if(cljs.core.chunked_seq_QMARK_(seq__69874_70147__$1)){
var c__5565__auto___70148 = cljs.core.chunk_first(seq__69874_70147__$1);
var G__70149 = cljs.core.chunk_rest(seq__69874_70147__$1);
var G__70150 = c__5565__auto___70148;
var G__70151 = cljs.core.count(c__5565__auto___70148);
var G__70152 = (0);
seq__69874_70127 = G__70149;
chunk__69878_70128 = G__70150;
count__69879_70129 = G__70151;
i__69880_70130 = G__70152;
continue;
} else {
var node_70153 = cljs.core.first(seq__69874_70147__$1);
if(cljs.core.not(node_70153.shadow$old)){
var path_match_70154 = shadow.cljs.devtools.client.browser.match_paths(node_70153.getAttribute("href"),path);
if(cljs.core.truth_(path_match_70154)){
var new_link_70155 = (function (){var G__69887 = node_70153.cloneNode(true);
G__69887.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_70154),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__69887;
})();
(node_70153.shadow$old = true);

(new_link_70155.onload = ((function (seq__69874_70127,chunk__69878_70128,count__69879_70129,i__69880_70130,seq__69802,chunk__69804,count__69805,i__69806,new_link_70155,path_match_70154,node_70153,seq__69874_70147__$1,temp__5804__auto___70146__$1,path,seq__69802__$1,temp__5804__auto__,map__69801,map__69801__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_70153);
});})(seq__69874_70127,chunk__69878_70128,count__69879_70129,i__69880_70130,seq__69802,chunk__69804,count__69805,i__69806,new_link_70155,path_match_70154,node_70153,seq__69874_70147__$1,temp__5804__auto___70146__$1,path,seq__69802__$1,temp__5804__auto__,map__69801,map__69801__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_70154], 0));

goog.dom.insertSiblingAfter(new_link_70155,node_70153);


var G__70156 = cljs.core.next(seq__69874_70147__$1);
var G__70157 = null;
var G__70158 = (0);
var G__70159 = (0);
seq__69874_70127 = G__70156;
chunk__69878_70128 = G__70157;
count__69879_70129 = G__70158;
i__69880_70130 = G__70159;
continue;
} else {
var G__70160 = cljs.core.next(seq__69874_70147__$1);
var G__70161 = null;
var G__70162 = (0);
var G__70163 = (0);
seq__69874_70127 = G__70160;
chunk__69878_70128 = G__70161;
count__69879_70129 = G__70162;
i__69880_70130 = G__70163;
continue;
}
} else {
var G__70164 = cljs.core.next(seq__69874_70147__$1);
var G__70165 = null;
var G__70166 = (0);
var G__70167 = (0);
seq__69874_70127 = G__70164;
chunk__69878_70128 = G__70165;
count__69879_70129 = G__70166;
i__69880_70130 = G__70167;
continue;
}
}
} else {
}
}
break;
}


var G__70168 = cljs.core.next(seq__69802__$1);
var G__70169 = null;
var G__70170 = (0);
var G__70171 = (0);
seq__69802 = G__70168;
chunk__69804 = G__70169;
count__69805 = G__70170;
i__69806 = G__70171;
continue;
} else {
var G__70172 = cljs.core.next(seq__69802__$1);
var G__70173 = null;
var G__70174 = (0);
var G__70175 = (0);
seq__69802 = G__70172;
chunk__69804 = G__70173;
count__69805 = G__70174;
i__69806 = G__70175;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__69888){
var map__69889 = p__69888;
var map__69889__$1 = cljs.core.__destructure_map(map__69889);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69889__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__69894){
var map__69895 = p__69894;
var map__69895__$1 = cljs.core.__destructure_map(map__69895);
var _ = map__69895__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69895__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__69896,done,error){
var map__69897 = p__69896;
var map__69897__$1 = cljs.core.__destructure_map(map__69897);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69897__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__69898,done,error){
var map__69899 = p__69898;
var map__69899__$1 = cljs.core.__destructure_map(map__69899);
var msg = map__69899__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69899__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69899__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69899__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__69900){
var map__69901 = p__69900;
var map__69901__$1 = cljs.core.__destructure_map(map__69901);
var src = map__69901__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69901__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5041__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5041__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__69903 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__69903) : done.call(null,G__69903));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__69907){
var map__69909 = p__69907;
var map__69909__$1 = cljs.core.__destructure_map(map__69909);
var msg__$1 = map__69909__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69909__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e69911){var ex = e69911;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__69914){
var map__69915 = p__69914;
var map__69915__$1 = cljs.core.__destructure_map(map__69915);
var env = map__69915__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69915__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__69923){
var map__69924 = p__69923;
var map__69924__$1 = cljs.core.__destructure_map(map__69924);
var msg = map__69924__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69924__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__69927){
var map__69928 = p__69927;
var map__69928__$1 = cljs.core.__destructure_map(map__69928);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69928__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69928__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__69932){
var map__69933 = p__69932;
var map__69933__$1 = cljs.core.__destructure_map(map__69933);
var svc = map__69933__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69933__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
