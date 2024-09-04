goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__65074,res){
var map__65075 = p__65074;
var map__65075__$1 = cljs.core.__destructure_map(map__65075);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65075__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65075__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__65077 = res;
var G__65077__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65077,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__65077);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__65077__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__65077__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__65085 = arguments.length;
switch (G__65085) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__65095,msg,handlers,timeout_after_ms){
var map__65097 = p__65095;
var map__65097__$1 = cljs.core.__destructure_map(map__65097);
var runtime = map__65097__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65097__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___65349 = arguments.length;
var i__5767__auto___65350 = (0);
while(true){
if((i__5767__auto___65350 < len__5766__auto___65349)){
args__5772__auto__.push((arguments[i__5767__auto___65350]));

var G__65352 = (i__5767__auto___65350 + (1));
i__5767__auto___65350 = G__65352;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__65178,ev,args){
var map__65179 = p__65178;
var map__65179__$1 = cljs.core.__destructure_map(map__65179);
var runtime = map__65179__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65179__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__65180 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__65183 = null;
var count__65184 = (0);
var i__65185 = (0);
while(true){
if((i__65185 < count__65184)){
var ext = chunk__65183.cljs$core$IIndexed$_nth$arity$2(null,i__65185);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65355 = seq__65180;
var G__65356 = chunk__65183;
var G__65357 = count__65184;
var G__65358 = (i__65185 + (1));
seq__65180 = G__65355;
chunk__65183 = G__65356;
count__65184 = G__65357;
i__65185 = G__65358;
continue;
} else {
var G__65359 = seq__65180;
var G__65360 = chunk__65183;
var G__65361 = count__65184;
var G__65362 = (i__65185 + (1));
seq__65180 = G__65359;
chunk__65183 = G__65360;
count__65184 = G__65361;
i__65185 = G__65362;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65180);
if(temp__5804__auto__){
var seq__65180__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65180__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65180__$1);
var G__65363 = cljs.core.chunk_rest(seq__65180__$1);
var G__65364 = c__5565__auto__;
var G__65365 = cljs.core.count(c__5565__auto__);
var G__65366 = (0);
seq__65180 = G__65363;
chunk__65183 = G__65364;
count__65184 = G__65365;
i__65185 = G__65366;
continue;
} else {
var ext = cljs.core.first(seq__65180__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65367 = cljs.core.next(seq__65180__$1);
var G__65368 = null;
var G__65369 = (0);
var G__65370 = (0);
seq__65180 = G__65367;
chunk__65183 = G__65368;
count__65184 = G__65369;
i__65185 = G__65370;
continue;
} else {
var G__65371 = cljs.core.next(seq__65180__$1);
var G__65372 = null;
var G__65373 = (0);
var G__65374 = (0);
seq__65180 = G__65371;
chunk__65183 = G__65372;
count__65184 = G__65373;
i__65185 = G__65374;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq65172){
var G__65173 = cljs.core.first(seq65172);
var seq65172__$1 = cljs.core.next(seq65172);
var G__65174 = cljs.core.first(seq65172__$1);
var seq65172__$2 = cljs.core.next(seq65172__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65173,G__65174,seq65172__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__65221,p__65222){
var map__65223 = p__65221;
var map__65223__$1 = cljs.core.__destructure_map(map__65223);
var runtime = map__65223__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65223__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65224 = p__65222;
var map__65224__$1 = cljs.core.__destructure_map(map__65224);
var msg = map__65224__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65224__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__65225 = cljs.core.deref(state_ref);
var map__65225__$1 = cljs.core.__destructure_map(map__65225);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65225__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65225__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__65232){
var map__65233 = p__65232;
var map__65233__$1 = cljs.core.__destructure_map(map__65233);
var runtime = map__65233__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65233__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__65240,msg){
var map__65241 = p__65240;
var map__65241__$1 = cljs.core.__destructure_map(map__65241);
var runtime = map__65241__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65241__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__65247,key,p__65248){
var map__65250 = p__65247;
var map__65250__$1 = cljs.core.__destructure_map(map__65250);
var state = map__65250__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65250__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__65251 = p__65248;
var map__65251__$1 = cljs.core.__destructure_map(map__65251);
var spec = map__65251__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65251__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__65255,key,spec){
var map__65257 = p__65255;
var map__65257__$1 = cljs.core.__destructure_map(map__65257);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65257__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__65260_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__65260_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__65261_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__65261_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__65262_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__65262_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__65263_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__65263_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__65264_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__65264_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__65269,key){
var map__65270 = p__65269;
var map__65270__$1 = cljs.core.__destructure_map(map__65270);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65270__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__65272,msg){
var map__65273 = p__65272;
var map__65273__$1 = cljs.core.__destructure_map(map__65273);
var runtime = map__65273__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65273__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__65304,p__65305){
var map__65306 = p__65304;
var map__65306__$1 = cljs.core.__destructure_map(map__65306);
var runtime = map__65306__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65306__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65307 = p__65305;
var map__65307__$1 = cljs.core.__destructure_map(map__65307);
var msg = map__65307__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65307__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65307__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__65312 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__65314 = null;
var count__65315 = (0);
var i__65316 = (0);
while(true){
if((i__65316 < count__65315)){
var map__65324 = chunk__65314.cljs$core$IIndexed$_nth$arity$2(null,i__65316);
var map__65324__$1 = cljs.core.__destructure_map(map__65324);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65324__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65413 = seq__65312;
var G__65414 = chunk__65314;
var G__65415 = count__65315;
var G__65416 = (i__65316 + (1));
seq__65312 = G__65413;
chunk__65314 = G__65414;
count__65315 = G__65415;
i__65316 = G__65416;
continue;
} else {
var G__65417 = seq__65312;
var G__65418 = chunk__65314;
var G__65419 = count__65315;
var G__65420 = (i__65316 + (1));
seq__65312 = G__65417;
chunk__65314 = G__65418;
count__65315 = G__65419;
i__65316 = G__65420;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65312);
if(temp__5804__auto__){
var seq__65312__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65312__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65312__$1);
var G__65421 = cljs.core.chunk_rest(seq__65312__$1);
var G__65422 = c__5565__auto__;
var G__65423 = cljs.core.count(c__5565__auto__);
var G__65424 = (0);
seq__65312 = G__65421;
chunk__65314 = G__65422;
count__65315 = G__65423;
i__65316 = G__65424;
continue;
} else {
var map__65326 = cljs.core.first(seq__65312__$1);
var map__65326__$1 = cljs.core.__destructure_map(map__65326);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65326__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65426 = cljs.core.next(seq__65312__$1);
var G__65427 = null;
var G__65428 = (0);
var G__65429 = (0);
seq__65312 = G__65426;
chunk__65314 = G__65427;
count__65315 = G__65428;
i__65316 = G__65429;
continue;
} else {
var G__65431 = cljs.core.next(seq__65312__$1);
var G__65432 = null;
var G__65433 = (0);
var G__65434 = (0);
seq__65312 = G__65431;
chunk__65314 = G__65432;
count__65315 = G__65433;
i__65316 = G__65434;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
