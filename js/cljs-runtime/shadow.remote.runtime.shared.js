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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__64937,res){
var map__64939 = p__64937;
var map__64939__$1 = cljs.core.__destructure_map(map__64939);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64939__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64939__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__64940 = res;
var G__64940__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64940,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__64940);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__64940__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__64940__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__64942 = arguments.length;
switch (G__64942) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__64946,msg,handlers,timeout_after_ms){
var map__64947 = p__64946;
var map__64947__$1 = cljs.core.__destructure_map(map__64947);
var runtime = map__64947__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64947__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___65199 = arguments.length;
var i__5767__auto___65201 = (0);
while(true){
if((i__5767__auto___65201 < len__5766__auto___65199)){
args__5772__auto__.push((arguments[i__5767__auto___65201]));

var G__65202 = (i__5767__auto___65201 + (1));
i__5767__auto___65201 = G__65202;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((2) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5773__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__64956,ev,args){
var map__64957 = p__64956;
var map__64957__$1 = cljs.core.__destructure_map(map__64957);
var runtime = map__64957__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__64957__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__64958 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__64961 = null;
var count__64962 = (0);
var i__64963 = (0);
while(true){
if((i__64963 < count__64962)){
var ext = chunk__64961.cljs$core$IIndexed$_nth$arity$2(null,i__64963);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65217 = seq__64958;
var G__65218 = chunk__64961;
var G__65219 = count__64962;
var G__65220 = (i__64963 + (1));
seq__64958 = G__65217;
chunk__64961 = G__65218;
count__64962 = G__65219;
i__64963 = G__65220;
continue;
} else {
var G__65221 = seq__64958;
var G__65222 = chunk__64961;
var G__65223 = count__64962;
var G__65224 = (i__64963 + (1));
seq__64958 = G__65221;
chunk__64961 = G__65222;
count__64962 = G__65223;
i__64963 = G__65224;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__64958);
if(temp__5804__auto__){
var seq__64958__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__64958__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__64958__$1);
var G__65225 = cljs.core.chunk_rest(seq__64958__$1);
var G__65226 = c__5565__auto__;
var G__65227 = cljs.core.count(c__5565__auto__);
var G__65228 = (0);
seq__64958 = G__65225;
chunk__64961 = G__65226;
count__64962 = G__65227;
i__64963 = G__65228;
continue;
} else {
var ext = cljs.core.first(seq__64958__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__65229 = cljs.core.next(seq__64958__$1);
var G__65230 = null;
var G__65231 = (0);
var G__65232 = (0);
seq__64958 = G__65229;
chunk__64961 = G__65230;
count__64962 = G__65231;
i__64963 = G__65232;
continue;
} else {
var G__65233 = cljs.core.next(seq__64958__$1);
var G__65234 = null;
var G__65235 = (0);
var G__65236 = (0);
seq__64958 = G__65233;
chunk__64961 = G__65234;
count__64962 = G__65235;
i__64963 = G__65236;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq64952){
var G__64953 = cljs.core.first(seq64952);
var seq64952__$1 = cljs.core.next(seq64952);
var G__64954 = cljs.core.first(seq64952__$1);
var seq64952__$2 = cljs.core.next(seq64952__$1);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64953,G__64954,seq64952__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__65004,p__65005){
var map__65007 = p__65004;
var map__65007__$1 = cljs.core.__destructure_map(map__65007);
var runtime = map__65007__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65007__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65008 = p__65005;
var map__65008__$1 = cljs.core.__destructure_map(map__65008);
var msg = map__65008__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65008__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__65009 = cljs.core.deref(state_ref);
var map__65009__$1 = cljs.core.__destructure_map(map__65009);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65009__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65009__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__65032){
var map__65038 = p__65032;
var map__65038__$1 = cljs.core.__destructure_map(map__65038);
var runtime = map__65038__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65038__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5043__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__65044,msg){
var map__65045 = p__65044;
var map__65045__$1 = cljs.core.__destructure_map(map__65045);
var runtime = map__65045__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65045__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__65092,key,p__65093){
var map__65094 = p__65092;
var map__65094__$1 = cljs.core.__destructure_map(map__65094);
var state = map__65094__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65094__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__65095 = p__65093;
var map__65095__$1 = cljs.core.__destructure_map(map__65095);
var spec = map__65095__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65095__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__65103,key,spec){
var map__65108 = p__65103;
var map__65108__$1 = cljs.core.__destructure_map(map__65108);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65108__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__65118_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__65118_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__65119_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__65119_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__65120_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__65120_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__65121_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__65121_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__65122_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__65122_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__65142,key){
var map__65143 = p__65142;
var map__65143__$1 = cljs.core.__destructure_map(map__65143);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65143__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__65149,msg){
var map__65150 = p__65149;
var map__65150__$1 = cljs.core.__destructure_map(map__65150);
var runtime = map__65150__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65150__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__65165,p__65166){
var map__65167 = p__65165;
var map__65167__$1 = cljs.core.__destructure_map(map__65167);
var runtime = map__65167__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65167__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__65168 = p__65166;
var map__65168__$1 = cljs.core.__destructure_map(map__65168);
var msg = map__65168__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65168__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65168__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__65171 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__65173 = null;
var count__65174 = (0);
var i__65175 = (0);
while(true){
if((i__65175 < count__65174)){
var map__65188 = chunk__65173.cljs$core$IIndexed$_nth$arity$2(null,i__65175);
var map__65188__$1 = cljs.core.__destructure_map(map__65188);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65188__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65294 = seq__65171;
var G__65295 = chunk__65173;
var G__65296 = count__65174;
var G__65297 = (i__65175 + (1));
seq__65171 = G__65294;
chunk__65173 = G__65295;
count__65174 = G__65296;
i__65175 = G__65297;
continue;
} else {
var G__65298 = seq__65171;
var G__65299 = chunk__65173;
var G__65300 = count__65174;
var G__65301 = (i__65175 + (1));
seq__65171 = G__65298;
chunk__65173 = G__65299;
count__65174 = G__65300;
i__65175 = G__65301;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__65171);
if(temp__5804__auto__){
var seq__65171__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__65171__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__65171__$1);
var G__65302 = cljs.core.chunk_rest(seq__65171__$1);
var G__65303 = c__5565__auto__;
var G__65304 = cljs.core.count(c__5565__auto__);
var G__65305 = (0);
seq__65171 = G__65302;
chunk__65173 = G__65303;
count__65174 = G__65304;
i__65175 = G__65305;
continue;
} else {
var map__65189 = cljs.core.first(seq__65171__$1);
var map__65189__$1 = cljs.core.__destructure_map(map__65189);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65189__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__65306 = cljs.core.next(seq__65171__$1);
var G__65307 = null;
var G__65308 = (0);
var G__65309 = (0);
seq__65171 = G__65306;
chunk__65173 = G__65307;
count__65174 = G__65308;
i__65175 = G__65309;
continue;
} else {
var G__65310 = cljs.core.next(seq__65171__$1);
var G__65311 = null;
var G__65312 = (0);
var G__65313 = (0);
seq__65171 = G__65310;
chunk__65173 = G__65311;
count__65174 = G__65312;
i__65175 = G__65313;
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
