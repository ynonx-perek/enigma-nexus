goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__69172,p__69173){
var map__69174 = p__69172;
var map__69174__$1 = cljs.core.__destructure_map(map__69174);
var svc = map__69174__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69174__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69174__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69174__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__69175 = p__69173;
var map__69175__$1 = cljs.core.__destructure_map(map__69175);
var msg = map__69175__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69175__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69175__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69175__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69175__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__69186,p__69187){
var map__69189 = p__69186;
var map__69189__$1 = cljs.core.__destructure_map(map__69189);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69189__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__69190 = p__69187;
var map__69190__$1 = cljs.core.__destructure_map(map__69190);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69190__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__69195,p__69196){
var map__69197 = p__69195;
var map__69197__$1 = cljs.core.__destructure_map(map__69197);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__69199 = p__69196;
var map__69199__$1 = cljs.core.__destructure_map(map__69199);
var msg = map__69199__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69199__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__69203,tid){
var map__69208 = p__69203;
var map__69208__$1 = cljs.core.__destructure_map(map__69208);
var svc = map__69208__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69208__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__69222 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__69223 = null;
var count__69224 = (0);
var i__69225 = (0);
while(true){
if((i__69225 < count__69224)){
var vec__69232 = chunk__69223.cljs$core$IIndexed$_nth$arity$2(null,i__69225);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69232,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69232,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__69272 = seq__69222;
var G__69273 = chunk__69223;
var G__69274 = count__69224;
var G__69275 = (i__69225 + (1));
seq__69222 = G__69272;
chunk__69223 = G__69273;
count__69224 = G__69274;
i__69225 = G__69275;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__69222);
if(temp__5804__auto__){
var seq__69222__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__69222__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__69222__$1);
var G__69276 = cljs.core.chunk_rest(seq__69222__$1);
var G__69277 = c__5565__auto__;
var G__69278 = cljs.core.count(c__5565__auto__);
var G__69279 = (0);
seq__69222 = G__69276;
chunk__69223 = G__69277;
count__69224 = G__69278;
i__69225 = G__69279;
continue;
} else {
var vec__69235 = cljs.core.first(seq__69222__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69235,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69235,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__69280 = cljs.core.next(seq__69222__$1);
var G__69281 = null;
var G__69282 = (0);
var G__69283 = (0);
seq__69222 = G__69280;
chunk__69223 = G__69281;
count__69224 = G__69282;
i__69225 = G__69283;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__69215_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__69215_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__69218_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__69218_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__69219_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__69219_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__69220_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__69220_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__69246){
var map__69247 = p__69246;
var map__69247__$1 = cljs.core.__destructure_map(map__69247);
var svc = map__69247__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69247__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69247__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
