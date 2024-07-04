goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__64813 = arguments.length;
switch (G__64813) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64818 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64818 = (function (f,blockable,meta64819){
this.f = f;
this.blockable = blockable;
this.meta64819 = meta64819;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64818.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64820,meta64819__$1){
var self__ = this;
var _64820__$1 = this;
return (new cljs.core.async.t_cljs$core$async64818(self__.f,self__.blockable,meta64819__$1));
}));

(cljs.core.async.t_cljs$core$async64818.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64820){
var self__ = this;
var _64820__$1 = this;
return self__.meta64819;
}));

(cljs.core.async.t_cljs$core$async64818.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64818.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64818.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async64818.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async64818.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta64819","meta64819",-1316091705,null)], null);
}));

(cljs.core.async.t_cljs$core$async64818.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64818.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64818");

(cljs.core.async.t_cljs$core$async64818.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async64818");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64818.
 */
cljs.core.async.__GT_t_cljs$core$async64818 = (function cljs$core$async$__GT_t_cljs$core$async64818(f__$1,blockable__$1,meta64819){
return (new cljs.core.async.t_cljs$core$async64818(f__$1,blockable__$1,meta64819));
});

}

return (new cljs.core.async.t_cljs$core$async64818(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__64830 = arguments.length;
switch (G__64830) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__64836 = arguments.length;
switch (G__64836) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__64848 = arguments.length;
switch (G__64848) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_66990 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_66990) : fn1.call(null,val_66990));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_66990) : fn1.call(null,val_66990));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__64869 = arguments.length;
switch (G__64869) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5633__auto___66995 = n;
var x_66996 = (0);
while(true){
if((x_66996 < n__5633__auto___66995)){
(a[x_66996] = (0));

var G__66997 = (x_66996 + (1));
x_66996 = G__66997;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__66998 = (i + (1));
i = G__66998;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64870 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64870 = (function (flag,meta64871){
this.flag = flag;
this.meta64871 = meta64871;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64870.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64872,meta64871__$1){
var self__ = this;
var _64872__$1 = this;
return (new cljs.core.async.t_cljs$core$async64870(self__.flag,meta64871__$1));
}));

(cljs.core.async.t_cljs$core$async64870.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64872){
var self__ = this;
var _64872__$1 = this;
return self__.meta64871;
}));

(cljs.core.async.t_cljs$core$async64870.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64870.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async64870.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64870.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async64870.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta64871","meta64871",-705970874,null)], null);
}));

(cljs.core.async.t_cljs$core$async64870.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64870.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64870");

(cljs.core.async.t_cljs$core$async64870.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async64870");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64870.
 */
cljs.core.async.__GT_t_cljs$core$async64870 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async64870(flag__$1,meta64871){
return (new cljs.core.async.t_cljs$core$async64870(flag__$1,meta64871));
});

}

return (new cljs.core.async.t_cljs$core$async64870(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64875 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64875 = (function (flag,cb,meta64876){
this.flag = flag;
this.cb = cb;
this.meta64876 = meta64876;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64875.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64877,meta64876__$1){
var self__ = this;
var _64877__$1 = this;
return (new cljs.core.async.t_cljs$core$async64875(self__.flag,self__.cb,meta64876__$1));
}));

(cljs.core.async.t_cljs$core$async64875.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64877){
var self__ = this;
var _64877__$1 = this;
return self__.meta64876;
}));

(cljs.core.async.t_cljs$core$async64875.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64875.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async64875.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64875.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async64875.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta64876","meta64876",1056013224,null)], null);
}));

(cljs.core.async.t_cljs$core$async64875.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64875.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64875");

(cljs.core.async.t_cljs$core$async64875.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async64875");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64875.
 */
cljs.core.async.__GT_t_cljs$core$async64875 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async64875(flag__$1,cb__$1,meta64876){
return (new cljs.core.async.t_cljs$core$async64875(flag__$1,cb__$1,meta64876));
});

}

return (new cljs.core.async.t_cljs$core$async64875(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__64893_SHARP_){
var G__64899 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64893_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__64899) : fret.call(null,G__64899));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__64895_SHARP_){
var G__64900 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64895_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__64900) : fret.call(null,G__64900));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5043__auto__ = wport;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return port;
}
})()], null));
} else {
var G__67002 = (i + (1));
i = G__67002;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5043__auto__ = ret;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5041__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5041__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___67003 = arguments.length;
var i__5767__auto___67004 = (0);
while(true){
if((i__5767__auto___67004 < len__5766__auto___67003)){
args__5772__auto__.push((arguments[i__5767__auto___67004]));

var G__67005 = (i__5767__auto___67004 + (1));
i__5767__auto___67004 = G__67005;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__64905){
var map__64906 = p__64905;
var map__64906__$1 = cljs.core.__destructure_map(map__64906);
var opts = map__64906__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq64903){
var G__64904 = cljs.core.first(seq64903);
var seq64903__$1 = cljs.core.next(seq64903);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64904,seq64903__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__64911 = arguments.length;
switch (G__64911) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__64749__auto___67009 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_64936){
var state_val_64938 = (state_64936[(1)]);
if((state_val_64938 === (7))){
var inst_64932 = (state_64936[(2)]);
var state_64936__$1 = state_64936;
var statearr_64944_67010 = state_64936__$1;
(statearr_64944_67010[(2)] = inst_64932);

(statearr_64944_67010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (1))){
var state_64936__$1 = state_64936;
var statearr_64945_67011 = state_64936__$1;
(statearr_64945_67011[(2)] = null);

(statearr_64945_67011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (4))){
var inst_64915 = (state_64936[(7)]);
var inst_64915__$1 = (state_64936[(2)]);
var inst_64916 = (inst_64915__$1 == null);
var state_64936__$1 = (function (){var statearr_64948 = state_64936;
(statearr_64948[(7)] = inst_64915__$1);

return statearr_64948;
})();
if(cljs.core.truth_(inst_64916)){
var statearr_64949_67012 = state_64936__$1;
(statearr_64949_67012[(1)] = (5));

} else {
var statearr_64950_67013 = state_64936__$1;
(statearr_64950_67013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (13))){
var state_64936__$1 = state_64936;
var statearr_64951_67014 = state_64936__$1;
(statearr_64951_67014[(2)] = null);

(statearr_64951_67014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (6))){
var inst_64915 = (state_64936[(7)]);
var state_64936__$1 = state_64936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64936__$1,(11),to,inst_64915);
} else {
if((state_val_64938 === (3))){
var inst_64934 = (state_64936[(2)]);
var state_64936__$1 = state_64936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64936__$1,inst_64934);
} else {
if((state_val_64938 === (12))){
var state_64936__$1 = state_64936;
var statearr_64955_67015 = state_64936__$1;
(statearr_64955_67015[(2)] = null);

(statearr_64955_67015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (2))){
var state_64936__$1 = state_64936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64936__$1,(4),from);
} else {
if((state_val_64938 === (11))){
var inst_64925 = (state_64936[(2)]);
var state_64936__$1 = state_64936;
if(cljs.core.truth_(inst_64925)){
var statearr_64966_67016 = state_64936__$1;
(statearr_64966_67016[(1)] = (12));

} else {
var statearr_64967_67017 = state_64936__$1;
(statearr_64967_67017[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (9))){
var state_64936__$1 = state_64936;
var statearr_64968_67018 = state_64936__$1;
(statearr_64968_67018[(2)] = null);

(statearr_64968_67018[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (5))){
var state_64936__$1 = state_64936;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64969_67019 = state_64936__$1;
(statearr_64969_67019[(1)] = (8));

} else {
var statearr_64970_67020 = state_64936__$1;
(statearr_64970_67020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (14))){
var inst_64930 = (state_64936[(2)]);
var state_64936__$1 = state_64936;
var statearr_64971_67021 = state_64936__$1;
(statearr_64971_67021[(2)] = inst_64930);

(statearr_64971_67021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (10))){
var inst_64922 = (state_64936[(2)]);
var state_64936__$1 = state_64936;
var statearr_64991_67022 = state_64936__$1;
(statearr_64991_67022[(2)] = inst_64922);

(statearr_64991_67022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64938 === (8))){
var inst_64919 = cljs.core.async.close_BANG_(to);
var state_64936__$1 = state_64936;
var statearr_64996_67023 = state_64936__$1;
(statearr_64996_67023[(2)] = inst_64919);

(statearr_64996_67023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_64997 = [null,null,null,null,null,null,null,null];
(statearr_64997[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_64997[(1)] = (1));

return statearr_64997;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_64936){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_64936);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e64998){if((e64998 instanceof Object)){
var ex__64457__auto__ = e64998;
var statearr_64999_67024 = state_64936;
(statearr_64999_67024[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64936);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64998;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67025 = state_64936;
state_64936 = G__67025;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_64936){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_64936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65001 = f__64750__auto__();
(statearr_65001[(6)] = c__64749__auto___67009);

return statearr_65001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__65010){
var vec__65011 = p__65010;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65011,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65011,(1),null);
var job = vec__65011;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__64749__auto___67027 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_65030){
var state_val_65031 = (state_65030[(1)]);
if((state_val_65031 === (1))){
var state_65030__$1 = state_65030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65030__$1,(2),res,v);
} else {
if((state_val_65031 === (2))){
var inst_65025 = (state_65030[(2)]);
var inst_65027 = cljs.core.async.close_BANG_(res);
var state_65030__$1 = (function (){var statearr_65043 = state_65030;
(statearr_65043[(7)] = inst_65025);

return statearr_65043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_65030__$1,inst_65027);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0 = (function (){
var statearr_65046 = [null,null,null,null,null,null,null,null];
(statearr_65046[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__);

(statearr_65046[(1)] = (1));

return statearr_65046;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1 = (function (state_65030){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65030);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65052){if((e65052 instanceof Object)){
var ex__64457__auto__ = e65052;
var statearr_65059_67028 = state_65030;
(statearr_65059_67028[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67030 = state_65030;
state_65030 = G__67030;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = function(state_65030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1.call(this,state_65030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65091 = f__64750__auto__();
(statearr_65091[(6)] = c__64749__auto___67027);

return statearr_65091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__65096){
var vec__65097 = p__65096;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65097,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65097,(1),null);
var job = vec__65097;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5633__auto___67032 = n;
var __67033 = (0);
while(true){
if((__67033 < n__5633__auto___67032)){
var G__65100_67034 = type;
var G__65100_67035__$1 = (((G__65100_67034 instanceof cljs.core.Keyword))?G__65100_67034.fqn:null);
switch (G__65100_67035__$1) {
case "compute":
var c__64749__auto___67037 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__67033,c__64749__auto___67037,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async){
return (function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = ((function (__67033,c__64749__auto___67037,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async){
return (function (state_65116){
var state_val_65117 = (state_65116[(1)]);
if((state_val_65117 === (1))){
var state_65116__$1 = state_65116;
var statearr_65124_67038 = state_65116__$1;
(statearr_65124_67038[(2)] = null);

(statearr_65124_67038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65117 === (2))){
var state_65116__$1 = state_65116;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65116__$1,(4),jobs);
} else {
if((state_val_65117 === (3))){
var inst_65114 = (state_65116[(2)]);
var state_65116__$1 = state_65116;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65116__$1,inst_65114);
} else {
if((state_val_65117 === (4))){
var inst_65105 = (state_65116[(2)]);
var inst_65106 = process__$1(inst_65105);
var state_65116__$1 = state_65116;
if(cljs.core.truth_(inst_65106)){
var statearr_65125_67042 = state_65116__$1;
(statearr_65125_67042[(1)] = (5));

} else {
var statearr_65126_67046 = state_65116__$1;
(statearr_65126_67046[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65117 === (5))){
var state_65116__$1 = state_65116;
var statearr_65131_67050 = state_65116__$1;
(statearr_65131_67050[(2)] = null);

(statearr_65131_67050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65117 === (6))){
var state_65116__$1 = state_65116;
var statearr_65136_67052 = state_65116__$1;
(statearr_65136_67052[(2)] = null);

(statearr_65136_67052[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65117 === (7))){
var inst_65112 = (state_65116[(2)]);
var state_65116__$1 = state_65116;
var statearr_65141_67053 = state_65116__$1;
(statearr_65141_67053[(2)] = inst_65112);

(statearr_65141_67053[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__67033,c__64749__auto___67037,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async))
;
return ((function (__67033,switch__64453__auto__,c__64749__auto___67037,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0 = (function (){
var statearr_65145 = [null,null,null,null,null,null,null];
(statearr_65145[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__);

(statearr_65145[(1)] = (1));

return statearr_65145;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1 = (function (state_65116){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65116);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65146){if((e65146 instanceof Object)){
var ex__64457__auto__ = e65146;
var statearr_65147_67057 = state_65116;
(statearr_65147_67057[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65116);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67058 = state_65116;
state_65116 = G__67058;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = function(state_65116){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1.call(this,state_65116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__;
})()
;})(__67033,switch__64453__auto__,c__64749__auto___67037,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async))
})();
var state__64751__auto__ = (function (){var statearr_65148 = f__64750__auto__();
(statearr_65148[(6)] = c__64749__auto___67037);

return statearr_65148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
});})(__67033,c__64749__auto___67037,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async))
);


break;
case "async":
var c__64749__auto___67059 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__67033,c__64749__auto___67059,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async){
return (function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = ((function (__67033,c__64749__auto___67059,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async){
return (function (state_65163){
var state_val_65164 = (state_65163[(1)]);
if((state_val_65164 === (1))){
var state_65163__$1 = state_65163;
var statearr_65170_67060 = state_65163__$1;
(statearr_65170_67060[(2)] = null);

(statearr_65170_67060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65164 === (2))){
var state_65163__$1 = state_65163;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65163__$1,(4),jobs);
} else {
if((state_val_65164 === (3))){
var inst_65161 = (state_65163[(2)]);
var state_65163__$1 = state_65163;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65163__$1,inst_65161);
} else {
if((state_val_65164 === (4))){
var inst_65153 = (state_65163[(2)]);
var inst_65154 = async(inst_65153);
var state_65163__$1 = state_65163;
if(cljs.core.truth_(inst_65154)){
var statearr_65177_67063 = state_65163__$1;
(statearr_65177_67063[(1)] = (5));

} else {
var statearr_65179_67064 = state_65163__$1;
(statearr_65179_67064[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65164 === (5))){
var state_65163__$1 = state_65163;
var statearr_65180_67065 = state_65163__$1;
(statearr_65180_67065[(2)] = null);

(statearr_65180_67065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65164 === (6))){
var state_65163__$1 = state_65163;
var statearr_65181_67066 = state_65163__$1;
(statearr_65181_67066[(2)] = null);

(statearr_65181_67066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65164 === (7))){
var inst_65159 = (state_65163[(2)]);
var state_65163__$1 = state_65163;
var statearr_65183_67067 = state_65163__$1;
(statearr_65183_67067[(2)] = inst_65159);

(statearr_65183_67067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__67033,c__64749__auto___67059,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async))
;
return ((function (__67033,switch__64453__auto__,c__64749__auto___67059,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0 = (function (){
var statearr_65184 = [null,null,null,null,null,null,null];
(statearr_65184[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__);

(statearr_65184[(1)] = (1));

return statearr_65184;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1 = (function (state_65163){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65163);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65185){if((e65185 instanceof Object)){
var ex__64457__auto__ = e65185;
var statearr_65186_67068 = state_65163;
(statearr_65186_67068[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65163);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65185;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67069 = state_65163;
state_65163 = G__67069;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = function(state_65163){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1.call(this,state_65163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__;
})()
;})(__67033,switch__64453__auto__,c__64749__auto___67059,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async))
})();
var state__64751__auto__ = (function (){var statearr_65187 = f__64750__auto__();
(statearr_65187[(6)] = c__64749__auto___67059);

return statearr_65187;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
});})(__67033,c__64749__auto___67059,G__65100_67034,G__65100_67035__$1,n__5633__auto___67032,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__65100_67035__$1)].join('')));

}

var G__67071 = (__67033 + (1));
__67033 = G__67071;
continue;
} else {
}
break;
}

var c__64749__auto___67072 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_65215){
var state_val_65216 = (state_65215[(1)]);
if((state_val_65216 === (7))){
var inst_65211 = (state_65215[(2)]);
var state_65215__$1 = state_65215;
var statearr_65237_67074 = state_65215__$1;
(statearr_65237_67074[(2)] = inst_65211);

(statearr_65237_67074[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65216 === (1))){
var state_65215__$1 = state_65215;
var statearr_65238_67075 = state_65215__$1;
(statearr_65238_67075[(2)] = null);

(statearr_65238_67075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65216 === (4))){
var inst_65193 = (state_65215[(7)]);
var inst_65193__$1 = (state_65215[(2)]);
var inst_65194 = (inst_65193__$1 == null);
var state_65215__$1 = (function (){var statearr_65239 = state_65215;
(statearr_65239[(7)] = inst_65193__$1);

return statearr_65239;
})();
if(cljs.core.truth_(inst_65194)){
var statearr_65240_67076 = state_65215__$1;
(statearr_65240_67076[(1)] = (5));

} else {
var statearr_65241_67077 = state_65215__$1;
(statearr_65241_67077[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65216 === (6))){
var inst_65193 = (state_65215[(7)]);
var inst_65198 = (state_65215[(8)]);
var inst_65198__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_65200 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65203 = [inst_65193,inst_65198__$1];
var inst_65204 = (new cljs.core.PersistentVector(null,2,(5),inst_65200,inst_65203,null));
var state_65215__$1 = (function (){var statearr_65243 = state_65215;
(statearr_65243[(8)] = inst_65198__$1);

return statearr_65243;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65215__$1,(8),jobs,inst_65204);
} else {
if((state_val_65216 === (3))){
var inst_65213 = (state_65215[(2)]);
var state_65215__$1 = state_65215;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65215__$1,inst_65213);
} else {
if((state_val_65216 === (2))){
var state_65215__$1 = state_65215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65215__$1,(4),from);
} else {
if((state_val_65216 === (9))){
var inst_65208 = (state_65215[(2)]);
var state_65215__$1 = (function (){var statearr_65245 = state_65215;
(statearr_65245[(9)] = inst_65208);

return statearr_65245;
})();
var statearr_65246_67078 = state_65215__$1;
(statearr_65246_67078[(2)] = null);

(statearr_65246_67078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65216 === (5))){
var inst_65196 = cljs.core.async.close_BANG_(jobs);
var state_65215__$1 = state_65215;
var statearr_65247_67079 = state_65215__$1;
(statearr_65247_67079[(2)] = inst_65196);

(statearr_65247_67079[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65216 === (8))){
var inst_65198 = (state_65215[(8)]);
var inst_65206 = (state_65215[(2)]);
var state_65215__$1 = (function (){var statearr_65249 = state_65215;
(statearr_65249[(10)] = inst_65206);

return statearr_65249;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65215__$1,(9),results,inst_65198);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0 = (function (){
var statearr_65251 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65251[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__);

(statearr_65251[(1)] = (1));

return statearr_65251;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1 = (function (state_65215){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65215);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65252){if((e65252 instanceof Object)){
var ex__64457__auto__ = e65252;
var statearr_65253_67080 = state_65215;
(statearr_65253_67080[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65215);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65252;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67081 = state_65215;
state_65215 = G__67081;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = function(state_65215){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1.call(this,state_65215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65254 = f__64750__auto__();
(statearr_65254[(6)] = c__64749__auto___67072);

return statearr_65254;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


var c__64749__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_65292){
var state_val_65293 = (state_65292[(1)]);
if((state_val_65293 === (7))){
var inst_65288 = (state_65292[(2)]);
var state_65292__$1 = state_65292;
var statearr_65314_67083 = state_65292__$1;
(statearr_65314_67083[(2)] = inst_65288);

(statearr_65314_67083[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (20))){
var state_65292__$1 = state_65292;
var statearr_65315_67085 = state_65292__$1;
(statearr_65315_67085[(2)] = null);

(statearr_65315_67085[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (1))){
var state_65292__$1 = state_65292;
var statearr_65316_67086 = state_65292__$1;
(statearr_65316_67086[(2)] = null);

(statearr_65316_67086[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (4))){
var inst_65257 = (state_65292[(7)]);
var inst_65257__$1 = (state_65292[(2)]);
var inst_65258 = (inst_65257__$1 == null);
var state_65292__$1 = (function (){var statearr_65317 = state_65292;
(statearr_65317[(7)] = inst_65257__$1);

return statearr_65317;
})();
if(cljs.core.truth_(inst_65258)){
var statearr_65318_67089 = state_65292__$1;
(statearr_65318_67089[(1)] = (5));

} else {
var statearr_65319_67090 = state_65292__$1;
(statearr_65319_67090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (15))){
var inst_65270 = (state_65292[(8)]);
var state_65292__$1 = state_65292;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65292__$1,(18),to,inst_65270);
} else {
if((state_val_65293 === (21))){
var inst_65283 = (state_65292[(2)]);
var state_65292__$1 = state_65292;
var statearr_65320_67095 = state_65292__$1;
(statearr_65320_67095[(2)] = inst_65283);

(statearr_65320_67095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (13))){
var inst_65285 = (state_65292[(2)]);
var state_65292__$1 = (function (){var statearr_65322 = state_65292;
(statearr_65322[(9)] = inst_65285);

return statearr_65322;
})();
var statearr_65323_67097 = state_65292__$1;
(statearr_65323_67097[(2)] = null);

(statearr_65323_67097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (6))){
var inst_65257 = (state_65292[(7)]);
var state_65292__$1 = state_65292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65292__$1,(11),inst_65257);
} else {
if((state_val_65293 === (17))){
var inst_65278 = (state_65292[(2)]);
var state_65292__$1 = state_65292;
if(cljs.core.truth_(inst_65278)){
var statearr_65324_67099 = state_65292__$1;
(statearr_65324_67099[(1)] = (19));

} else {
var statearr_65325_67100 = state_65292__$1;
(statearr_65325_67100[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (3))){
var inst_65290 = (state_65292[(2)]);
var state_65292__$1 = state_65292;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65292__$1,inst_65290);
} else {
if((state_val_65293 === (12))){
var inst_65267 = (state_65292[(10)]);
var state_65292__$1 = state_65292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65292__$1,(14),inst_65267);
} else {
if((state_val_65293 === (2))){
var state_65292__$1 = state_65292;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65292__$1,(4),results);
} else {
if((state_val_65293 === (19))){
var state_65292__$1 = state_65292;
var statearr_65326_67103 = state_65292__$1;
(statearr_65326_67103[(2)] = null);

(statearr_65326_67103[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (11))){
var inst_65267 = (state_65292[(2)]);
var state_65292__$1 = (function (){var statearr_65327 = state_65292;
(statearr_65327[(10)] = inst_65267);

return statearr_65327;
})();
var statearr_65328_67104 = state_65292__$1;
(statearr_65328_67104[(2)] = null);

(statearr_65328_67104[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (9))){
var state_65292__$1 = state_65292;
var statearr_65329_67105 = state_65292__$1;
(statearr_65329_67105[(2)] = null);

(statearr_65329_67105[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (5))){
var state_65292__$1 = state_65292;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65331_67106 = state_65292__$1;
(statearr_65331_67106[(1)] = (8));

} else {
var statearr_65332_67107 = state_65292__$1;
(statearr_65332_67107[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (14))){
var inst_65270 = (state_65292[(8)]);
var inst_65272 = (state_65292[(11)]);
var inst_65270__$1 = (state_65292[(2)]);
var inst_65271 = (inst_65270__$1 == null);
var inst_65272__$1 = cljs.core.not(inst_65271);
var state_65292__$1 = (function (){var statearr_65333 = state_65292;
(statearr_65333[(8)] = inst_65270__$1);

(statearr_65333[(11)] = inst_65272__$1);

return statearr_65333;
})();
if(inst_65272__$1){
var statearr_65334_67108 = state_65292__$1;
(statearr_65334_67108[(1)] = (15));

} else {
var statearr_65335_67109 = state_65292__$1;
(statearr_65335_67109[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (16))){
var inst_65272 = (state_65292[(11)]);
var state_65292__$1 = state_65292;
var statearr_65336_67110 = state_65292__$1;
(statearr_65336_67110[(2)] = inst_65272);

(statearr_65336_67110[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (10))){
var inst_65264 = (state_65292[(2)]);
var state_65292__$1 = state_65292;
var statearr_65337_67111 = state_65292__$1;
(statearr_65337_67111[(2)] = inst_65264);

(statearr_65337_67111[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (18))){
var inst_65275 = (state_65292[(2)]);
var state_65292__$1 = state_65292;
var statearr_65338_67112 = state_65292__$1;
(statearr_65338_67112[(2)] = inst_65275);

(statearr_65338_67112[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65293 === (8))){
var inst_65261 = cljs.core.async.close_BANG_(to);
var state_65292__$1 = state_65292;
var statearr_65339_67113 = state_65292__$1;
(statearr_65339_67113[(2)] = inst_65261);

(statearr_65339_67113[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0 = (function (){
var statearr_65340 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65340[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__);

(statearr_65340[(1)] = (1));

return statearr_65340;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1 = (function (state_65292){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65292);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65341){if((e65341 instanceof Object)){
var ex__64457__auto__ = e65341;
var statearr_65342_67114 = state_65292;
(statearr_65342_67114[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65292);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65341;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67115 = state_65292;
state_65292 = G__67115;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__ = function(state_65292){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1.call(this,state_65292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64454__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65343 = f__64750__auto__();
(statearr_65343[(6)] = c__64749__auto__);

return statearr_65343;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));

return c__64749__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__65345 = arguments.length;
switch (G__65345) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__65348 = arguments.length;
switch (G__65348) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__65351 = arguments.length;
switch (G__65351) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__64749__auto___67120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_65377){
var state_val_65378 = (state_65377[(1)]);
if((state_val_65378 === (7))){
var inst_65373 = (state_65377[(2)]);
var state_65377__$1 = state_65377;
var statearr_65379_67121 = state_65377__$1;
(statearr_65379_67121[(2)] = inst_65373);

(statearr_65379_67121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (1))){
var state_65377__$1 = state_65377;
var statearr_65380_67126 = state_65377__$1;
(statearr_65380_67126[(2)] = null);

(statearr_65380_67126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (4))){
var inst_65354 = (state_65377[(7)]);
var inst_65354__$1 = (state_65377[(2)]);
var inst_65355 = (inst_65354__$1 == null);
var state_65377__$1 = (function (){var statearr_65382 = state_65377;
(statearr_65382[(7)] = inst_65354__$1);

return statearr_65382;
})();
if(cljs.core.truth_(inst_65355)){
var statearr_65383_67127 = state_65377__$1;
(statearr_65383_67127[(1)] = (5));

} else {
var statearr_65384_67128 = state_65377__$1;
(statearr_65384_67128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (13))){
var state_65377__$1 = state_65377;
var statearr_65385_67129 = state_65377__$1;
(statearr_65385_67129[(2)] = null);

(statearr_65385_67129[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (6))){
var inst_65354 = (state_65377[(7)]);
var inst_65360 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_65354) : p.call(null,inst_65354));
var state_65377__$1 = state_65377;
if(cljs.core.truth_(inst_65360)){
var statearr_65386_67130 = state_65377__$1;
(statearr_65386_67130[(1)] = (9));

} else {
var statearr_65387_67131 = state_65377__$1;
(statearr_65387_67131[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (3))){
var inst_65375 = (state_65377[(2)]);
var state_65377__$1 = state_65377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65377__$1,inst_65375);
} else {
if((state_val_65378 === (12))){
var state_65377__$1 = state_65377;
var statearr_65388_67132 = state_65377__$1;
(statearr_65388_67132[(2)] = null);

(statearr_65388_67132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (2))){
var state_65377__$1 = state_65377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65377__$1,(4),ch);
} else {
if((state_val_65378 === (11))){
var inst_65354 = (state_65377[(7)]);
var inst_65364 = (state_65377[(2)]);
var state_65377__$1 = state_65377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65377__$1,(8),inst_65364,inst_65354);
} else {
if((state_val_65378 === (9))){
var state_65377__$1 = state_65377;
var statearr_65390_67133 = state_65377__$1;
(statearr_65390_67133[(2)] = tc);

(statearr_65390_67133[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (5))){
var inst_65357 = cljs.core.async.close_BANG_(tc);
var inst_65358 = cljs.core.async.close_BANG_(fc);
var state_65377__$1 = (function (){var statearr_65391 = state_65377;
(statearr_65391[(8)] = inst_65357);

return statearr_65391;
})();
var statearr_65392_67134 = state_65377__$1;
(statearr_65392_67134[(2)] = inst_65358);

(statearr_65392_67134[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (14))){
var inst_65371 = (state_65377[(2)]);
var state_65377__$1 = state_65377;
var statearr_65393_67135 = state_65377__$1;
(statearr_65393_67135[(2)] = inst_65371);

(statearr_65393_67135[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (10))){
var state_65377__$1 = state_65377;
var statearr_65394_67136 = state_65377__$1;
(statearr_65394_67136[(2)] = fc);

(statearr_65394_67136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65378 === (8))){
var inst_65366 = (state_65377[(2)]);
var state_65377__$1 = state_65377;
if(cljs.core.truth_(inst_65366)){
var statearr_65395_67137 = state_65377__$1;
(statearr_65395_67137[(1)] = (12));

} else {
var statearr_65396_67141 = state_65377__$1;
(statearr_65396_67141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_65397 = [null,null,null,null,null,null,null,null,null];
(statearr_65397[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_65397[(1)] = (1));

return statearr_65397;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_65377){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65377);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65398){if((e65398 instanceof Object)){
var ex__64457__auto__ = e65398;
var statearr_65400_67142 = state_65377;
(statearr_65400_67142[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65398;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67143 = state_65377;
state_65377 = G__67143;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_65377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_65377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65401 = f__64750__auto__();
(statearr_65401[(6)] = c__64749__auto___67120);

return statearr_65401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__64749__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_65422){
var state_val_65423 = (state_65422[(1)]);
if((state_val_65423 === (7))){
var inst_65418 = (state_65422[(2)]);
var state_65422__$1 = state_65422;
var statearr_65425_67144 = state_65422__$1;
(statearr_65425_67144[(2)] = inst_65418);

(statearr_65425_67144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65423 === (1))){
var inst_65402 = init;
var state_65422__$1 = (function (){var statearr_65426 = state_65422;
(statearr_65426[(7)] = inst_65402);

return statearr_65426;
})();
var statearr_65427_67145 = state_65422__$1;
(statearr_65427_67145[(2)] = null);

(statearr_65427_67145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65423 === (4))){
var inst_65405 = (state_65422[(8)]);
var inst_65405__$1 = (state_65422[(2)]);
var inst_65406 = (inst_65405__$1 == null);
var state_65422__$1 = (function (){var statearr_65428 = state_65422;
(statearr_65428[(8)] = inst_65405__$1);

return statearr_65428;
})();
if(cljs.core.truth_(inst_65406)){
var statearr_65429_67146 = state_65422__$1;
(statearr_65429_67146[(1)] = (5));

} else {
var statearr_65430_67147 = state_65422__$1;
(statearr_65430_67147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65423 === (6))){
var inst_65402 = (state_65422[(7)]);
var inst_65409 = (state_65422[(9)]);
var inst_65405 = (state_65422[(8)]);
var inst_65409__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_65402,inst_65405) : f.call(null,inst_65402,inst_65405));
var inst_65410 = cljs.core.reduced_QMARK_(inst_65409__$1);
var state_65422__$1 = (function (){var statearr_65433 = state_65422;
(statearr_65433[(9)] = inst_65409__$1);

return statearr_65433;
})();
if(inst_65410){
var statearr_65434_67148 = state_65422__$1;
(statearr_65434_67148[(1)] = (8));

} else {
var statearr_65435_67150 = state_65422__$1;
(statearr_65435_67150[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65423 === (3))){
var inst_65420 = (state_65422[(2)]);
var state_65422__$1 = state_65422;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65422__$1,inst_65420);
} else {
if((state_val_65423 === (2))){
var state_65422__$1 = state_65422;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65422__$1,(4),ch);
} else {
if((state_val_65423 === (9))){
var inst_65409 = (state_65422[(9)]);
var inst_65402 = inst_65409;
var state_65422__$1 = (function (){var statearr_65436 = state_65422;
(statearr_65436[(7)] = inst_65402);

return statearr_65436;
})();
var statearr_65437_67155 = state_65422__$1;
(statearr_65437_67155[(2)] = null);

(statearr_65437_67155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65423 === (5))){
var inst_65402 = (state_65422[(7)]);
var state_65422__$1 = state_65422;
var statearr_65438_67163 = state_65422__$1;
(statearr_65438_67163[(2)] = inst_65402);

(statearr_65438_67163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65423 === (10))){
var inst_65416 = (state_65422[(2)]);
var state_65422__$1 = state_65422;
var statearr_65439_67167 = state_65422__$1;
(statearr_65439_67167[(2)] = inst_65416);

(statearr_65439_67167[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65423 === (8))){
var inst_65409 = (state_65422[(9)]);
var inst_65412 = cljs.core.deref(inst_65409);
var state_65422__$1 = state_65422;
var statearr_65440_67168 = state_65422__$1;
(statearr_65440_67168[(2)] = inst_65412);

(statearr_65440_67168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__64454__auto__ = null;
var cljs$core$async$reduce_$_state_machine__64454__auto____0 = (function (){
var statearr_65441 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65441[(0)] = cljs$core$async$reduce_$_state_machine__64454__auto__);

(statearr_65441[(1)] = (1));

return statearr_65441;
});
var cljs$core$async$reduce_$_state_machine__64454__auto____1 = (function (state_65422){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65422);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65442){if((e65442 instanceof Object)){
var ex__64457__auto__ = e65442;
var statearr_65443_67169 = state_65422;
(statearr_65443_67169[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65442;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67170 = state_65422;
state_65422 = G__67170;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__64454__auto__ = function(state_65422){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__64454__auto____1.call(this,state_65422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__64454__auto____0;
cljs$core$async$reduce_$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__64454__auto____1;
return cljs$core$async$reduce_$_state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65444 = f__64750__auto__();
(statearr_65444[(6)] = c__64749__auto__);

return statearr_65444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));

return c__64749__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__64749__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_65451){
var state_val_65452 = (state_65451[(1)]);
if((state_val_65452 === (1))){
var inst_65446 = cljs.core.async.reduce(f__$1,init,ch);
var state_65451__$1 = state_65451;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65451__$1,(2),inst_65446);
} else {
if((state_val_65452 === (2))){
var inst_65448 = (state_65451[(2)]);
var inst_65449 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_65448) : f__$1.call(null,inst_65448));
var state_65451__$1 = state_65451;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65451__$1,inst_65449);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__64454__auto__ = null;
var cljs$core$async$transduce_$_state_machine__64454__auto____0 = (function (){
var statearr_65453 = [null,null,null,null,null,null,null];
(statearr_65453[(0)] = cljs$core$async$transduce_$_state_machine__64454__auto__);

(statearr_65453[(1)] = (1));

return statearr_65453;
});
var cljs$core$async$transduce_$_state_machine__64454__auto____1 = (function (state_65451){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65451);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65454){if((e65454 instanceof Object)){
var ex__64457__auto__ = e65454;
var statearr_65455_67185 = state_65451;
(statearr_65455_67185[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65454;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67187 = state_65451;
state_65451 = G__67187;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__64454__auto__ = function(state_65451){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__64454__auto____1.call(this,state_65451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__64454__auto____0;
cljs$core$async$transduce_$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__64454__auto____1;
return cljs$core$async$transduce_$_state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65457 = f__64750__auto__();
(statearr_65457[(6)] = c__64749__auto__);

return statearr_65457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));

return c__64749__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__65459 = arguments.length;
switch (G__65459) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__64749__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_65485){
var state_val_65486 = (state_65485[(1)]);
if((state_val_65486 === (7))){
var inst_65467 = (state_65485[(2)]);
var state_65485__$1 = state_65485;
var statearr_65487_67191 = state_65485__$1;
(statearr_65487_67191[(2)] = inst_65467);

(statearr_65487_67191[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (1))){
var inst_65461 = cljs.core.seq(coll);
var inst_65462 = inst_65461;
var state_65485__$1 = (function (){var statearr_65488 = state_65485;
(statearr_65488[(7)] = inst_65462);

return statearr_65488;
})();
var statearr_65489_67195 = state_65485__$1;
(statearr_65489_67195[(2)] = null);

(statearr_65489_67195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (4))){
var inst_65462 = (state_65485[(7)]);
var inst_65465 = cljs.core.first(inst_65462);
var state_65485__$1 = state_65485;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65485__$1,(7),ch,inst_65465);
} else {
if((state_val_65486 === (13))){
var inst_65479 = (state_65485[(2)]);
var state_65485__$1 = state_65485;
var statearr_65491_67203 = state_65485__$1;
(statearr_65491_67203[(2)] = inst_65479);

(statearr_65491_67203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (6))){
var inst_65470 = (state_65485[(2)]);
var state_65485__$1 = state_65485;
if(cljs.core.truth_(inst_65470)){
var statearr_65492_67207 = state_65485__$1;
(statearr_65492_67207[(1)] = (8));

} else {
var statearr_65493_67208 = state_65485__$1;
(statearr_65493_67208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (3))){
var inst_65483 = (state_65485[(2)]);
var state_65485__$1 = state_65485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65485__$1,inst_65483);
} else {
if((state_val_65486 === (12))){
var state_65485__$1 = state_65485;
var statearr_65494_67212 = state_65485__$1;
(statearr_65494_67212[(2)] = null);

(statearr_65494_67212[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (2))){
var inst_65462 = (state_65485[(7)]);
var state_65485__$1 = state_65485;
if(cljs.core.truth_(inst_65462)){
var statearr_65495_67216 = state_65485__$1;
(statearr_65495_67216[(1)] = (4));

} else {
var statearr_65496_67217 = state_65485__$1;
(statearr_65496_67217[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (11))){
var inst_65476 = cljs.core.async.close_BANG_(ch);
var state_65485__$1 = state_65485;
var statearr_65497_67222 = state_65485__$1;
(statearr_65497_67222[(2)] = inst_65476);

(statearr_65497_67222[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (9))){
var state_65485__$1 = state_65485;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65499_67223 = state_65485__$1;
(statearr_65499_67223[(1)] = (11));

} else {
var statearr_65500_67224 = state_65485__$1;
(statearr_65500_67224[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (5))){
var inst_65462 = (state_65485[(7)]);
var state_65485__$1 = state_65485;
var statearr_65501_67228 = state_65485__$1;
(statearr_65501_67228[(2)] = inst_65462);

(statearr_65501_67228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (10))){
var inst_65481 = (state_65485[(2)]);
var state_65485__$1 = state_65485;
var statearr_65502_67229 = state_65485__$1;
(statearr_65502_67229[(2)] = inst_65481);

(statearr_65502_67229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65486 === (8))){
var inst_65462 = (state_65485[(7)]);
var inst_65472 = cljs.core.next(inst_65462);
var inst_65462__$1 = inst_65472;
var state_65485__$1 = (function (){var statearr_65503 = state_65485;
(statearr_65503[(7)] = inst_65462__$1);

return statearr_65503;
})();
var statearr_65504_67230 = state_65485__$1;
(statearr_65504_67230[(2)] = null);

(statearr_65504_67230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_65505 = [null,null,null,null,null,null,null,null];
(statearr_65505[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_65505[(1)] = (1));

return statearr_65505;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_65485){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65485);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65506){if((e65506 instanceof Object)){
var ex__64457__auto__ = e65506;
var statearr_65507_67237 = state_65485;
(statearr_65507_67237[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65485);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65506;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67241 = state_65485;
state_65485 = G__67241;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_65485){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_65485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65508 = f__64750__auto__();
(statearr_65508[(6)] = c__64749__auto__);

return statearr_65508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));

return c__64749__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_67242 = (function (_){
var x__5390__auto__ = (((_ == null))?null:_);
var m__5391__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5391__auto__.call(null,_));
} else {
var m__5389__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5389__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_67242(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_67246 = (function (m,ch,close_QMARK_){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5391__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5389__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_67246(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_67250 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_67250(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_67251 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_67251(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65511 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65511 = (function (ch,cs,meta65512){
this.ch = ch;
this.cs = cs;
this.meta65512 = meta65512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65513,meta65512__$1){
var self__ = this;
var _65513__$1 = this;
return (new cljs.core.async.t_cljs$core$async65511(self__.ch,self__.cs,meta65512__$1));
}));

(cljs.core.async.t_cljs$core$async65511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65513){
var self__ = this;
var _65513__$1 = this;
return self__.meta65512;
}));

(cljs.core.async.t_cljs$core$async65511.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async65511.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65511.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async65511.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async65511.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async65511.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta65512","meta65512",-197206682,null)], null);
}));

(cljs.core.async.t_cljs$core$async65511.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65511");

(cljs.core.async.t_cljs$core$async65511.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async65511");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65511.
 */
cljs.core.async.__GT_t_cljs$core$async65511 = (function cljs$core$async$mult_$___GT_t_cljs$core$async65511(ch__$1,cs__$1,meta65512){
return (new cljs.core.async.t_cljs$core$async65511(ch__$1,cs__$1,meta65512));
});

}

return (new cljs.core.async.t_cljs$core$async65511(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__64749__auto___67256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_65651){
var state_val_65652 = (state_65651[(1)]);
if((state_val_65652 === (7))){
var inst_65647 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
var statearr_65653_67257 = state_65651__$1;
(statearr_65653_67257[(2)] = inst_65647);

(statearr_65653_67257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (20))){
var inst_65549 = (state_65651[(7)]);
var inst_65561 = cljs.core.first(inst_65549);
var inst_65562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65561,(0),null);
var inst_65563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65561,(1),null);
var state_65651__$1 = (function (){var statearr_65655 = state_65651;
(statearr_65655[(8)] = inst_65562);

return statearr_65655;
})();
if(cljs.core.truth_(inst_65563)){
var statearr_65656_67258 = state_65651__$1;
(statearr_65656_67258[(1)] = (22));

} else {
var statearr_65657_67259 = state_65651__$1;
(statearr_65657_67259[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (27))){
var inst_65518 = (state_65651[(9)]);
var inst_65594 = (state_65651[(10)]);
var inst_65592 = (state_65651[(11)]);
var inst_65599 = (state_65651[(12)]);
var inst_65599__$1 = cljs.core._nth(inst_65592,inst_65594);
var inst_65600 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_65599__$1,inst_65518,done);
var state_65651__$1 = (function (){var statearr_65658 = state_65651;
(statearr_65658[(12)] = inst_65599__$1);

return statearr_65658;
})();
if(cljs.core.truth_(inst_65600)){
var statearr_65659_67260 = state_65651__$1;
(statearr_65659_67260[(1)] = (30));

} else {
var statearr_65660_67261 = state_65651__$1;
(statearr_65660_67261[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (1))){
var state_65651__$1 = state_65651;
var statearr_65661_67262 = state_65651__$1;
(statearr_65661_67262[(2)] = null);

(statearr_65661_67262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (24))){
var inst_65549 = (state_65651[(7)]);
var inst_65568 = (state_65651[(2)]);
var inst_65569 = cljs.core.next(inst_65549);
var inst_65527 = inst_65569;
var inst_65528 = null;
var inst_65529 = (0);
var inst_65530 = (0);
var state_65651__$1 = (function (){var statearr_65663 = state_65651;
(statearr_65663[(13)] = inst_65527);

(statearr_65663[(14)] = inst_65528);

(statearr_65663[(15)] = inst_65530);

(statearr_65663[(16)] = inst_65568);

(statearr_65663[(17)] = inst_65529);

return statearr_65663;
})();
var statearr_65664_67263 = state_65651__$1;
(statearr_65664_67263[(2)] = null);

(statearr_65664_67263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (39))){
var state_65651__$1 = state_65651;
var statearr_65668_67264 = state_65651__$1;
(statearr_65668_67264[(2)] = null);

(statearr_65668_67264[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (4))){
var inst_65518 = (state_65651[(9)]);
var inst_65518__$1 = (state_65651[(2)]);
var inst_65519 = (inst_65518__$1 == null);
var state_65651__$1 = (function (){var statearr_65670 = state_65651;
(statearr_65670[(9)] = inst_65518__$1);

return statearr_65670;
})();
if(cljs.core.truth_(inst_65519)){
var statearr_65671_67265 = state_65651__$1;
(statearr_65671_67265[(1)] = (5));

} else {
var statearr_65672_67266 = state_65651__$1;
(statearr_65672_67266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (15))){
var inst_65527 = (state_65651[(13)]);
var inst_65528 = (state_65651[(14)]);
var inst_65530 = (state_65651[(15)]);
var inst_65529 = (state_65651[(17)]);
var inst_65545 = (state_65651[(2)]);
var inst_65546 = (inst_65530 + (1));
var tmp65665 = inst_65527;
var tmp65666 = inst_65528;
var tmp65667 = inst_65529;
var inst_65527__$1 = tmp65665;
var inst_65528__$1 = tmp65666;
var inst_65529__$1 = tmp65667;
var inst_65530__$1 = inst_65546;
var state_65651__$1 = (function (){var statearr_65673 = state_65651;
(statearr_65673[(13)] = inst_65527__$1);

(statearr_65673[(18)] = inst_65545);

(statearr_65673[(14)] = inst_65528__$1);

(statearr_65673[(15)] = inst_65530__$1);

(statearr_65673[(17)] = inst_65529__$1);

return statearr_65673;
})();
var statearr_65674_67267 = state_65651__$1;
(statearr_65674_67267[(2)] = null);

(statearr_65674_67267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (21))){
var inst_65572 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
var statearr_65678_67268 = state_65651__$1;
(statearr_65678_67268[(2)] = inst_65572);

(statearr_65678_67268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (31))){
var inst_65599 = (state_65651[(12)]);
var inst_65603 = done(null);
var inst_65604 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_65599);
var state_65651__$1 = (function (){var statearr_65679 = state_65651;
(statearr_65679[(19)] = inst_65603);

return statearr_65679;
})();
var statearr_65680_67269 = state_65651__$1;
(statearr_65680_67269[(2)] = inst_65604);

(statearr_65680_67269[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (32))){
var inst_65593 = (state_65651[(20)]);
var inst_65594 = (state_65651[(10)]);
var inst_65592 = (state_65651[(11)]);
var inst_65591 = (state_65651[(21)]);
var inst_65606 = (state_65651[(2)]);
var inst_65607 = (inst_65594 + (1));
var tmp65675 = inst_65593;
var tmp65676 = inst_65592;
var tmp65677 = inst_65591;
var inst_65591__$1 = tmp65677;
var inst_65592__$1 = tmp65676;
var inst_65593__$1 = tmp65675;
var inst_65594__$1 = inst_65607;
var state_65651__$1 = (function (){var statearr_65681 = state_65651;
(statearr_65681[(20)] = inst_65593__$1);

(statearr_65681[(10)] = inst_65594__$1);

(statearr_65681[(11)] = inst_65592__$1);

(statearr_65681[(21)] = inst_65591__$1);

(statearr_65681[(22)] = inst_65606);

return statearr_65681;
})();
var statearr_65682_67270 = state_65651__$1;
(statearr_65682_67270[(2)] = null);

(statearr_65682_67270[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (40))){
var inst_65619 = (state_65651[(23)]);
var inst_65623 = done(null);
var inst_65624 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_65619);
var state_65651__$1 = (function (){var statearr_65683 = state_65651;
(statearr_65683[(24)] = inst_65623);

return statearr_65683;
})();
var statearr_65684_67271 = state_65651__$1;
(statearr_65684_67271[(2)] = inst_65624);

(statearr_65684_67271[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (33))){
var inst_65610 = (state_65651[(25)]);
var inst_65612 = cljs.core.chunked_seq_QMARK_(inst_65610);
var state_65651__$1 = state_65651;
if(inst_65612){
var statearr_65685_67272 = state_65651__$1;
(statearr_65685_67272[(1)] = (36));

} else {
var statearr_65686_67273 = state_65651__$1;
(statearr_65686_67273[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (13))){
var inst_65539 = (state_65651[(26)]);
var inst_65542 = cljs.core.async.close_BANG_(inst_65539);
var state_65651__$1 = state_65651;
var statearr_65687_67274 = state_65651__$1;
(statearr_65687_67274[(2)] = inst_65542);

(statearr_65687_67274[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (22))){
var inst_65562 = (state_65651[(8)]);
var inst_65565 = cljs.core.async.close_BANG_(inst_65562);
var state_65651__$1 = state_65651;
var statearr_65689_67275 = state_65651__$1;
(statearr_65689_67275[(2)] = inst_65565);

(statearr_65689_67275[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (36))){
var inst_65610 = (state_65651[(25)]);
var inst_65614 = cljs.core.chunk_first(inst_65610);
var inst_65615 = cljs.core.chunk_rest(inst_65610);
var inst_65616 = cljs.core.count(inst_65614);
var inst_65591 = inst_65615;
var inst_65592 = inst_65614;
var inst_65593 = inst_65616;
var inst_65594 = (0);
var state_65651__$1 = (function (){var statearr_65690 = state_65651;
(statearr_65690[(20)] = inst_65593);

(statearr_65690[(10)] = inst_65594);

(statearr_65690[(11)] = inst_65592);

(statearr_65690[(21)] = inst_65591);

return statearr_65690;
})();
var statearr_65691_67276 = state_65651__$1;
(statearr_65691_67276[(2)] = null);

(statearr_65691_67276[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (41))){
var inst_65610 = (state_65651[(25)]);
var inst_65626 = (state_65651[(2)]);
var inst_65627 = cljs.core.next(inst_65610);
var inst_65591 = inst_65627;
var inst_65592 = null;
var inst_65593 = (0);
var inst_65594 = (0);
var state_65651__$1 = (function (){var statearr_65692 = state_65651;
(statearr_65692[(20)] = inst_65593);

(statearr_65692[(10)] = inst_65594);

(statearr_65692[(11)] = inst_65592);

(statearr_65692[(21)] = inst_65591);

(statearr_65692[(27)] = inst_65626);

return statearr_65692;
})();
var statearr_65693_67277 = state_65651__$1;
(statearr_65693_67277[(2)] = null);

(statearr_65693_67277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (43))){
var state_65651__$1 = state_65651;
var statearr_65694_67278 = state_65651__$1;
(statearr_65694_67278[(2)] = null);

(statearr_65694_67278[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (29))){
var inst_65635 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
var statearr_65695_67279 = state_65651__$1;
(statearr_65695_67279[(2)] = inst_65635);

(statearr_65695_67279[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (44))){
var inst_65644 = (state_65651[(2)]);
var state_65651__$1 = (function (){var statearr_65696 = state_65651;
(statearr_65696[(28)] = inst_65644);

return statearr_65696;
})();
var statearr_65697_67281 = state_65651__$1;
(statearr_65697_67281[(2)] = null);

(statearr_65697_67281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (6))){
var inst_65583 = (state_65651[(29)]);
var inst_65582 = cljs.core.deref(cs);
var inst_65583__$1 = cljs.core.keys(inst_65582);
var inst_65584 = cljs.core.count(inst_65583__$1);
var inst_65585 = cljs.core.reset_BANG_(dctr,inst_65584);
var inst_65590 = cljs.core.seq(inst_65583__$1);
var inst_65591 = inst_65590;
var inst_65592 = null;
var inst_65593 = (0);
var inst_65594 = (0);
var state_65651__$1 = (function (){var statearr_65698 = state_65651;
(statearr_65698[(29)] = inst_65583__$1);

(statearr_65698[(20)] = inst_65593);

(statearr_65698[(10)] = inst_65594);

(statearr_65698[(11)] = inst_65592);

(statearr_65698[(21)] = inst_65591);

(statearr_65698[(30)] = inst_65585);

return statearr_65698;
})();
var statearr_65699_67283 = state_65651__$1;
(statearr_65699_67283[(2)] = null);

(statearr_65699_67283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (28))){
var inst_65591 = (state_65651[(21)]);
var inst_65610 = (state_65651[(25)]);
var inst_65610__$1 = cljs.core.seq(inst_65591);
var state_65651__$1 = (function (){var statearr_65700 = state_65651;
(statearr_65700[(25)] = inst_65610__$1);

return statearr_65700;
})();
if(inst_65610__$1){
var statearr_65701_67284 = state_65651__$1;
(statearr_65701_67284[(1)] = (33));

} else {
var statearr_65702_67285 = state_65651__$1;
(statearr_65702_67285[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (25))){
var inst_65593 = (state_65651[(20)]);
var inst_65594 = (state_65651[(10)]);
var inst_65596 = (inst_65594 < inst_65593);
var inst_65597 = inst_65596;
var state_65651__$1 = state_65651;
if(cljs.core.truth_(inst_65597)){
var statearr_65703_67298 = state_65651__$1;
(statearr_65703_67298[(1)] = (27));

} else {
var statearr_65705_67299 = state_65651__$1;
(statearr_65705_67299[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (34))){
var state_65651__$1 = state_65651;
var statearr_65706_67300 = state_65651__$1;
(statearr_65706_67300[(2)] = null);

(statearr_65706_67300[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (17))){
var state_65651__$1 = state_65651;
var statearr_65707_67301 = state_65651__$1;
(statearr_65707_67301[(2)] = null);

(statearr_65707_67301[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (3))){
var inst_65649 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65651__$1,inst_65649);
} else {
if((state_val_65652 === (12))){
var inst_65577 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
var statearr_65708_67303 = state_65651__$1;
(statearr_65708_67303[(2)] = inst_65577);

(statearr_65708_67303[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (2))){
var state_65651__$1 = state_65651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65651__$1,(4),ch);
} else {
if((state_val_65652 === (23))){
var state_65651__$1 = state_65651;
var statearr_65709_67305 = state_65651__$1;
(statearr_65709_67305[(2)] = null);

(statearr_65709_67305[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (35))){
var inst_65633 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
var statearr_65710_67306 = state_65651__$1;
(statearr_65710_67306[(2)] = inst_65633);

(statearr_65710_67306[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (19))){
var inst_65549 = (state_65651[(7)]);
var inst_65553 = cljs.core.chunk_first(inst_65549);
var inst_65554 = cljs.core.chunk_rest(inst_65549);
var inst_65555 = cljs.core.count(inst_65553);
var inst_65527 = inst_65554;
var inst_65528 = inst_65553;
var inst_65529 = inst_65555;
var inst_65530 = (0);
var state_65651__$1 = (function (){var statearr_65711 = state_65651;
(statearr_65711[(13)] = inst_65527);

(statearr_65711[(14)] = inst_65528);

(statearr_65711[(15)] = inst_65530);

(statearr_65711[(17)] = inst_65529);

return statearr_65711;
})();
var statearr_65713_67308 = state_65651__$1;
(statearr_65713_67308[(2)] = null);

(statearr_65713_67308[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (11))){
var inst_65527 = (state_65651[(13)]);
var inst_65549 = (state_65651[(7)]);
var inst_65549__$1 = cljs.core.seq(inst_65527);
var state_65651__$1 = (function (){var statearr_65714 = state_65651;
(statearr_65714[(7)] = inst_65549__$1);

return statearr_65714;
})();
if(inst_65549__$1){
var statearr_65715_67312 = state_65651__$1;
(statearr_65715_67312[(1)] = (16));

} else {
var statearr_65716_67313 = state_65651__$1;
(statearr_65716_67313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (9))){
var inst_65579 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
var statearr_65717_67314 = state_65651__$1;
(statearr_65717_67314[(2)] = inst_65579);

(statearr_65717_67314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (5))){
var inst_65525 = cljs.core.deref(cs);
var inst_65526 = cljs.core.seq(inst_65525);
var inst_65527 = inst_65526;
var inst_65528 = null;
var inst_65529 = (0);
var inst_65530 = (0);
var state_65651__$1 = (function (){var statearr_65718 = state_65651;
(statearr_65718[(13)] = inst_65527);

(statearr_65718[(14)] = inst_65528);

(statearr_65718[(15)] = inst_65530);

(statearr_65718[(17)] = inst_65529);

return statearr_65718;
})();
var statearr_65719_67316 = state_65651__$1;
(statearr_65719_67316[(2)] = null);

(statearr_65719_67316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (14))){
var state_65651__$1 = state_65651;
var statearr_65720_67317 = state_65651__$1;
(statearr_65720_67317[(2)] = null);

(statearr_65720_67317[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (45))){
var inst_65641 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
var statearr_65721_67318 = state_65651__$1;
(statearr_65721_67318[(2)] = inst_65641);

(statearr_65721_67318[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (26))){
var inst_65583 = (state_65651[(29)]);
var inst_65637 = (state_65651[(2)]);
var inst_65638 = cljs.core.seq(inst_65583);
var state_65651__$1 = (function (){var statearr_65722 = state_65651;
(statearr_65722[(31)] = inst_65637);

return statearr_65722;
})();
if(inst_65638){
var statearr_65723_67320 = state_65651__$1;
(statearr_65723_67320[(1)] = (42));

} else {
var statearr_65724_67321 = state_65651__$1;
(statearr_65724_67321[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (16))){
var inst_65549 = (state_65651[(7)]);
var inst_65551 = cljs.core.chunked_seq_QMARK_(inst_65549);
var state_65651__$1 = state_65651;
if(inst_65551){
var statearr_65726_67323 = state_65651__$1;
(statearr_65726_67323[(1)] = (19));

} else {
var statearr_65727_67324 = state_65651__$1;
(statearr_65727_67324[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (38))){
var inst_65630 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
var statearr_65728_67325 = state_65651__$1;
(statearr_65728_67325[(2)] = inst_65630);

(statearr_65728_67325[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (30))){
var state_65651__$1 = state_65651;
var statearr_65729_67326 = state_65651__$1;
(statearr_65729_67326[(2)] = null);

(statearr_65729_67326[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (10))){
var inst_65528 = (state_65651[(14)]);
var inst_65530 = (state_65651[(15)]);
var inst_65538 = cljs.core._nth(inst_65528,inst_65530);
var inst_65539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65538,(0),null);
var inst_65540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65538,(1),null);
var state_65651__$1 = (function (){var statearr_65730 = state_65651;
(statearr_65730[(26)] = inst_65539);

return statearr_65730;
})();
if(cljs.core.truth_(inst_65540)){
var statearr_65731_67327 = state_65651__$1;
(statearr_65731_67327[(1)] = (13));

} else {
var statearr_65732_67328 = state_65651__$1;
(statearr_65732_67328[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (18))){
var inst_65575 = (state_65651[(2)]);
var state_65651__$1 = state_65651;
var statearr_65733_67329 = state_65651__$1;
(statearr_65733_67329[(2)] = inst_65575);

(statearr_65733_67329[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (42))){
var state_65651__$1 = state_65651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65651__$1,(45),dchan);
} else {
if((state_val_65652 === (37))){
var inst_65518 = (state_65651[(9)]);
var inst_65619 = (state_65651[(23)]);
var inst_65610 = (state_65651[(25)]);
var inst_65619__$1 = cljs.core.first(inst_65610);
var inst_65620 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_65619__$1,inst_65518,done);
var state_65651__$1 = (function (){var statearr_65734 = state_65651;
(statearr_65734[(23)] = inst_65619__$1);

return statearr_65734;
})();
if(cljs.core.truth_(inst_65620)){
var statearr_65735_67330 = state_65651__$1;
(statearr_65735_67330[(1)] = (39));

} else {
var statearr_65736_67331 = state_65651__$1;
(statearr_65736_67331[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65652 === (8))){
var inst_65530 = (state_65651[(15)]);
var inst_65529 = (state_65651[(17)]);
var inst_65532 = (inst_65530 < inst_65529);
var inst_65533 = inst_65532;
var state_65651__$1 = state_65651;
if(cljs.core.truth_(inst_65533)){
var statearr_65738_67336 = state_65651__$1;
(statearr_65738_67336[(1)] = (10));

} else {
var statearr_65740_67337 = state_65651__$1;
(statearr_65740_67337[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__64454__auto__ = null;
var cljs$core$async$mult_$_state_machine__64454__auto____0 = (function (){
var statearr_65741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65741[(0)] = cljs$core$async$mult_$_state_machine__64454__auto__);

(statearr_65741[(1)] = (1));

return statearr_65741;
});
var cljs$core$async$mult_$_state_machine__64454__auto____1 = (function (state_65651){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65651);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65742){if((e65742 instanceof Object)){
var ex__64457__auto__ = e65742;
var statearr_65743_67338 = state_65651;
(statearr_65743_67338[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65651);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65742;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67341 = state_65651;
state_65651 = G__67341;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__64454__auto__ = function(state_65651){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__64454__auto____1.call(this,state_65651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__64454__auto____0;
cljs$core$async$mult_$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__64454__auto____1;
return cljs$core$async$mult_$_state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65744 = f__64750__auto__();
(statearr_65744[(6)] = c__64749__auto___67256);

return statearr_65744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__65746 = arguments.length;
switch (G__65746) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_67345 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_67345(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_67348 = (function (m,ch){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5391__auto__.call(null,m,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5389__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_67348(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_67349 = (function (m){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5391__auto__.call(null,m));
} else {
var m__5389__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5389__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_67349(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_67358 = (function (m,state_map){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5391__auto__.call(null,m,state_map));
} else {
var m__5389__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5389__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_67358(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_67365 = (function (m,mode){
var x__5390__auto__ = (((m == null))?null:m);
var m__5391__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5391__auto__.call(null,m,mode));
} else {
var m__5389__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5389__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_67365(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___67366 = arguments.length;
var i__5767__auto___67367 = (0);
while(true){
if((i__5767__auto___67367 < len__5766__auto___67366)){
args__5772__auto__.push((arguments[i__5767__auto___67367]));

var G__67368 = (i__5767__auto___67367 + (1));
i__5767__auto___67367 = G__67368;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__65757){
var map__65758 = p__65757;
var map__65758__$1 = cljs.core.__destructure_map(map__65758);
var opts = map__65758__$1;
var statearr_65759_67369 = state;
(statearr_65759_67369[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_65760_67370 = state;
(statearr_65760_67370[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_65761_67371 = state;
(statearr_65761_67371[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq65752){
var G__65753 = cljs.core.first(seq65752);
var seq65752__$1 = cljs.core.next(seq65752);
var G__65754 = cljs.core.first(seq65752__$1);
var seq65752__$2 = cljs.core.next(seq65752__$1);
var G__65755 = cljs.core.first(seq65752__$2);
var seq65752__$3 = cljs.core.next(seq65752__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65753,G__65754,G__65755,seq65752__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65764 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65764 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta65765){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta65765 = meta65765;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65766,meta65765__$1){
var self__ = this;
var _65766__$1 = this;
return (new cljs.core.async.t_cljs$core$async65764(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta65765__$1));
}));

(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65766){
var self__ = this;
var _65766__$1 = this;
return self__.meta65765;
}));

(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65764.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65764.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta65765","meta65765",1531862581,null)], null);
}));

(cljs.core.async.t_cljs$core$async65764.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65764.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65764");

(cljs.core.async.t_cljs$core$async65764.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async65764");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65764.
 */
cljs.core.async.__GT_t_cljs$core$async65764 = (function cljs$core$async$mix_$___GT_t_cljs$core$async65764(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta65765){
return (new cljs.core.async.t_cljs$core$async65764(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta65765));
});

}

return (new cljs.core.async.t_cljs$core$async65764(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__64749__auto___67388 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_65838){
var state_val_65839 = (state_65838[(1)]);
if((state_val_65839 === (7))){
var inst_65797 = (state_65838[(2)]);
var state_65838__$1 = state_65838;
if(cljs.core.truth_(inst_65797)){
var statearr_65840_67389 = state_65838__$1;
(statearr_65840_67389[(1)] = (8));

} else {
var statearr_65841_67390 = state_65838__$1;
(statearr_65841_67390[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (20))){
var inst_65790 = (state_65838[(7)]);
var state_65838__$1 = state_65838;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65838__$1,(23),out,inst_65790);
} else {
if((state_val_65839 === (1))){
var inst_65772 = calc_state();
var inst_65773 = cljs.core.__destructure_map(inst_65772);
var inst_65775 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65773,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_65776 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65773,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_65777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65773,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_65778 = inst_65772;
var state_65838__$1 = (function (){var statearr_65844 = state_65838;
(statearr_65844[(8)] = inst_65777);

(statearr_65844[(9)] = inst_65778);

(statearr_65844[(10)] = inst_65775);

(statearr_65844[(11)] = inst_65776);

return statearr_65844;
})();
var statearr_65845_67391 = state_65838__$1;
(statearr_65845_67391[(2)] = null);

(statearr_65845_67391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (24))){
var inst_65781 = (state_65838[(12)]);
var inst_65778 = inst_65781;
var state_65838__$1 = (function (){var statearr_65846 = state_65838;
(statearr_65846[(9)] = inst_65778);

return statearr_65846;
})();
var statearr_65847_67392 = state_65838__$1;
(statearr_65847_67392[(2)] = null);

(statearr_65847_67392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (4))){
var inst_65792 = (state_65838[(13)]);
var inst_65790 = (state_65838[(7)]);
var inst_65789 = (state_65838[(2)]);
var inst_65790__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65789,(0),null);
var inst_65791 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65789,(1),null);
var inst_65792__$1 = (inst_65790__$1 == null);
var state_65838__$1 = (function (){var statearr_65848 = state_65838;
(statearr_65848[(14)] = inst_65791);

(statearr_65848[(13)] = inst_65792__$1);

(statearr_65848[(7)] = inst_65790__$1);

return statearr_65848;
})();
if(cljs.core.truth_(inst_65792__$1)){
var statearr_65849_67393 = state_65838__$1;
(statearr_65849_67393[(1)] = (5));

} else {
var statearr_65850_67394 = state_65838__$1;
(statearr_65850_67394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (15))){
var inst_65782 = (state_65838[(15)]);
var inst_65811 = (state_65838[(16)]);
var inst_65811__$1 = cljs.core.empty_QMARK_(inst_65782);
var state_65838__$1 = (function (){var statearr_65851 = state_65838;
(statearr_65851[(16)] = inst_65811__$1);

return statearr_65851;
})();
if(inst_65811__$1){
var statearr_65852_67395 = state_65838__$1;
(statearr_65852_67395[(1)] = (17));

} else {
var statearr_65853_67396 = state_65838__$1;
(statearr_65853_67396[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (21))){
var inst_65781 = (state_65838[(12)]);
var inst_65778 = inst_65781;
var state_65838__$1 = (function (){var statearr_65856 = state_65838;
(statearr_65856[(9)] = inst_65778);

return statearr_65856;
})();
var statearr_65857_67403 = state_65838__$1;
(statearr_65857_67403[(2)] = null);

(statearr_65857_67403[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (13))){
var inst_65804 = (state_65838[(2)]);
var inst_65805 = calc_state();
var inst_65778 = inst_65805;
var state_65838__$1 = (function (){var statearr_65858 = state_65838;
(statearr_65858[(9)] = inst_65778);

(statearr_65858[(17)] = inst_65804);

return statearr_65858;
})();
var statearr_65859_67404 = state_65838__$1;
(statearr_65859_67404[(2)] = null);

(statearr_65859_67404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (22))){
var inst_65831 = (state_65838[(2)]);
var state_65838__$1 = state_65838;
var statearr_65860_67405 = state_65838__$1;
(statearr_65860_67405[(2)] = inst_65831);

(statearr_65860_67405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (6))){
var inst_65791 = (state_65838[(14)]);
var inst_65795 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65791,change);
var state_65838__$1 = state_65838;
var statearr_65861_67406 = state_65838__$1;
(statearr_65861_67406[(2)] = inst_65795);

(statearr_65861_67406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (25))){
var state_65838__$1 = state_65838;
var statearr_65862_67407 = state_65838__$1;
(statearr_65862_67407[(2)] = null);

(statearr_65862_67407[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (17))){
var inst_65791 = (state_65838[(14)]);
var inst_65783 = (state_65838[(18)]);
var inst_65813 = (inst_65783.cljs$core$IFn$_invoke$arity$1 ? inst_65783.cljs$core$IFn$_invoke$arity$1(inst_65791) : inst_65783.call(null,inst_65791));
var inst_65814 = cljs.core.not(inst_65813);
var state_65838__$1 = state_65838;
var statearr_65863_67408 = state_65838__$1;
(statearr_65863_67408[(2)] = inst_65814);

(statearr_65863_67408[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (3))){
var inst_65835 = (state_65838[(2)]);
var state_65838__$1 = state_65838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65838__$1,inst_65835);
} else {
if((state_val_65839 === (12))){
var state_65838__$1 = state_65838;
var statearr_65864_67411 = state_65838__$1;
(statearr_65864_67411[(2)] = null);

(statearr_65864_67411[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (2))){
var inst_65778 = (state_65838[(9)]);
var inst_65781 = (state_65838[(12)]);
var inst_65781__$1 = cljs.core.__destructure_map(inst_65778);
var inst_65782 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65781__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_65783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65781__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_65784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65781__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_65838__$1 = (function (){var statearr_65865 = state_65838;
(statearr_65865[(15)] = inst_65782);

(statearr_65865[(18)] = inst_65783);

(statearr_65865[(12)] = inst_65781__$1);

return statearr_65865;
})();
return cljs.core.async.ioc_alts_BANG_(state_65838__$1,(4),inst_65784);
} else {
if((state_val_65839 === (23))){
var inst_65822 = (state_65838[(2)]);
var state_65838__$1 = state_65838;
if(cljs.core.truth_(inst_65822)){
var statearr_65866_67412 = state_65838__$1;
(statearr_65866_67412[(1)] = (24));

} else {
var statearr_65867_67413 = state_65838__$1;
(statearr_65867_67413[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (19))){
var inst_65817 = (state_65838[(2)]);
var state_65838__$1 = state_65838;
var statearr_65868_67414 = state_65838__$1;
(statearr_65868_67414[(2)] = inst_65817);

(statearr_65868_67414[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (11))){
var inst_65791 = (state_65838[(14)]);
var inst_65801 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_65791);
var state_65838__$1 = state_65838;
var statearr_65869_67415 = state_65838__$1;
(statearr_65869_67415[(2)] = inst_65801);

(statearr_65869_67415[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (9))){
var inst_65791 = (state_65838[(14)]);
var inst_65782 = (state_65838[(15)]);
var inst_65808 = (state_65838[(19)]);
var inst_65808__$1 = (inst_65782.cljs$core$IFn$_invoke$arity$1 ? inst_65782.cljs$core$IFn$_invoke$arity$1(inst_65791) : inst_65782.call(null,inst_65791));
var state_65838__$1 = (function (){var statearr_65872 = state_65838;
(statearr_65872[(19)] = inst_65808__$1);

return statearr_65872;
})();
if(cljs.core.truth_(inst_65808__$1)){
var statearr_65873_67417 = state_65838__$1;
(statearr_65873_67417[(1)] = (14));

} else {
var statearr_65874_67418 = state_65838__$1;
(statearr_65874_67418[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (5))){
var inst_65792 = (state_65838[(13)]);
var state_65838__$1 = state_65838;
var statearr_65875_67419 = state_65838__$1;
(statearr_65875_67419[(2)] = inst_65792);

(statearr_65875_67419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (14))){
var inst_65808 = (state_65838[(19)]);
var state_65838__$1 = state_65838;
var statearr_65876_67421 = state_65838__$1;
(statearr_65876_67421[(2)] = inst_65808);

(statearr_65876_67421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (26))){
var inst_65827 = (state_65838[(2)]);
var state_65838__$1 = state_65838;
var statearr_65877_67422 = state_65838__$1;
(statearr_65877_67422[(2)] = inst_65827);

(statearr_65877_67422[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (16))){
var inst_65819 = (state_65838[(2)]);
var state_65838__$1 = state_65838;
if(cljs.core.truth_(inst_65819)){
var statearr_65878_67423 = state_65838__$1;
(statearr_65878_67423[(1)] = (20));

} else {
var statearr_65879_67424 = state_65838__$1;
(statearr_65879_67424[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (10))){
var inst_65833 = (state_65838[(2)]);
var state_65838__$1 = state_65838;
var statearr_65880_67425 = state_65838__$1;
(statearr_65880_67425[(2)] = inst_65833);

(statearr_65880_67425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (18))){
var inst_65811 = (state_65838[(16)]);
var state_65838__$1 = state_65838;
var statearr_65881_67426 = state_65838__$1;
(statearr_65881_67426[(2)] = inst_65811);

(statearr_65881_67426[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65839 === (8))){
var inst_65790 = (state_65838[(7)]);
var inst_65799 = (inst_65790 == null);
var state_65838__$1 = state_65838;
if(cljs.core.truth_(inst_65799)){
var statearr_65882_67433 = state_65838__$1;
(statearr_65882_67433[(1)] = (11));

} else {
var statearr_65883_67434 = state_65838__$1;
(statearr_65883_67434[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__64454__auto__ = null;
var cljs$core$async$mix_$_state_machine__64454__auto____0 = (function (){
var statearr_65887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65887[(0)] = cljs$core$async$mix_$_state_machine__64454__auto__);

(statearr_65887[(1)] = (1));

return statearr_65887;
});
var cljs$core$async$mix_$_state_machine__64454__auto____1 = (function (state_65838){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_65838);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e65888){if((e65888 instanceof Object)){
var ex__64457__auto__ = e65888;
var statearr_65889_67435 = state_65838;
(statearr_65889_67435[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65888;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67436 = state_65838;
state_65838 = G__67436;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__64454__auto__ = function(state_65838){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__64454__auto____1.call(this,state_65838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__64454__auto____0;
cljs$core$async$mix_$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__64454__auto____1;
return cljs$core$async$mix_$_state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_65893 = f__64750__auto__();
(statearr_65893[(6)] = c__64749__auto___67388);

return statearr_65893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_67437 = (function (p,v,ch,close_QMARK_){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5391__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5389__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5389__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_67437(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_67438 = (function (p,v,ch){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5391__auto__.call(null,p,v,ch));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5389__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_67438(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_67446 = (function() {
var G__67447 = null;
var G__67447__1 = (function (p){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5391__auto__.call(null,p));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5389__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__67447__2 = (function (p,v){
var x__5390__auto__ = (((p == null))?null:p);
var m__5391__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5391__auto__.call(null,p,v));
} else {
var m__5389__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5389__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__67447 = function(p,v){
switch(arguments.length){
case 1:
return G__67447__1.call(this,p);
case 2:
return G__67447__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67447.cljs$core$IFn$_invoke$arity$1 = G__67447__1;
G__67447.cljs$core$IFn$_invoke$arity$2 = G__67447__2;
return G__67447;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__65938 = arguments.length;
switch (G__65938) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_67446(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_67446(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__65953 = arguments.length;
switch (G__65953) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5043__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__65947_SHARP_){
if(cljs.core.truth_((p1__65947_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__65947_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__65947_SHARP_.call(null,topic)))){
return p1__65947_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__65947_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65963 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65963 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta65964){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta65964 = meta65964;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65963.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65965,meta65964__$1){
var self__ = this;
var _65965__$1 = this;
return (new cljs.core.async.t_cljs$core$async65963(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta65964__$1));
}));

(cljs.core.async.t_cljs$core$async65963.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65965){
var self__ = this;
var _65965__$1 = this;
return self__.meta65964;
}));

(cljs.core.async.t_cljs$core$async65963.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65963.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async65963.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65963.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async65963.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async65963.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async65963.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async65963.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta65964","meta65964",-1172869730,null)], null);
}));

(cljs.core.async.t_cljs$core$async65963.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65963.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65963");

(cljs.core.async.t_cljs$core$async65963.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async65963");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65963.
 */
cljs.core.async.__GT_t_cljs$core$async65963 = (function cljs$core$async$__GT_t_cljs$core$async65963(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta65964){
return (new cljs.core.async.t_cljs$core$async65963(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta65964));
});

}

return (new cljs.core.async.t_cljs$core$async65963(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__64749__auto___67471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_66088){
var state_val_66089 = (state_66088[(1)]);
if((state_val_66089 === (7))){
var inst_66081 = (state_66088[(2)]);
var state_66088__$1 = state_66088;
var statearr_66097_67472 = state_66088__$1;
(statearr_66097_67472[(2)] = inst_66081);

(statearr_66097_67472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (20))){
var state_66088__$1 = state_66088;
var statearr_66101_67474 = state_66088__$1;
(statearr_66101_67474[(2)] = null);

(statearr_66101_67474[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (1))){
var state_66088__$1 = state_66088;
var statearr_66103_67476 = state_66088__$1;
(statearr_66103_67476[(2)] = null);

(statearr_66103_67476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (24))){
var inst_66063 = (state_66088[(7)]);
var inst_66073 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_66063);
var state_66088__$1 = state_66088;
var statearr_66105_67481 = state_66088__$1;
(statearr_66105_67481[(2)] = inst_66073);

(statearr_66105_67481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (4))){
var inst_66006 = (state_66088[(8)]);
var inst_66006__$1 = (state_66088[(2)]);
var inst_66007 = (inst_66006__$1 == null);
var state_66088__$1 = (function (){var statearr_66106 = state_66088;
(statearr_66106[(8)] = inst_66006__$1);

return statearr_66106;
})();
if(cljs.core.truth_(inst_66007)){
var statearr_66108_67482 = state_66088__$1;
(statearr_66108_67482[(1)] = (5));

} else {
var statearr_66109_67483 = state_66088__$1;
(statearr_66109_67483[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (15))){
var inst_66057 = (state_66088[(2)]);
var state_66088__$1 = state_66088;
var statearr_66112_67484 = state_66088__$1;
(statearr_66112_67484[(2)] = inst_66057);

(statearr_66112_67484[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (21))){
var inst_66078 = (state_66088[(2)]);
var state_66088__$1 = (function (){var statearr_66115 = state_66088;
(statearr_66115[(9)] = inst_66078);

return statearr_66115;
})();
var statearr_66116_67485 = state_66088__$1;
(statearr_66116_67485[(2)] = null);

(statearr_66116_67485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (13))){
var inst_66034 = (state_66088[(10)]);
var inst_66037 = cljs.core.chunked_seq_QMARK_(inst_66034);
var state_66088__$1 = state_66088;
if(inst_66037){
var statearr_66118_67486 = state_66088__$1;
(statearr_66118_67486[(1)] = (16));

} else {
var statearr_66121_67487 = state_66088__$1;
(statearr_66121_67487[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (22))){
var inst_66070 = (state_66088[(2)]);
var state_66088__$1 = state_66088;
if(cljs.core.truth_(inst_66070)){
var statearr_66123_67488 = state_66088__$1;
(statearr_66123_67488[(1)] = (23));

} else {
var statearr_66124_67489 = state_66088__$1;
(statearr_66124_67489[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (6))){
var inst_66063 = (state_66088[(7)]);
var inst_66006 = (state_66088[(8)]);
var inst_66065 = (state_66088[(11)]);
var inst_66063__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_66006) : topic_fn.call(null,inst_66006));
var inst_66064 = cljs.core.deref(mults);
var inst_66065__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66064,inst_66063__$1);
var state_66088__$1 = (function (){var statearr_66125 = state_66088;
(statearr_66125[(7)] = inst_66063__$1);

(statearr_66125[(11)] = inst_66065__$1);

return statearr_66125;
})();
if(cljs.core.truth_(inst_66065__$1)){
var statearr_66126_67490 = state_66088__$1;
(statearr_66126_67490[(1)] = (19));

} else {
var statearr_66127_67493 = state_66088__$1;
(statearr_66127_67493[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (25))){
var inst_66075 = (state_66088[(2)]);
var state_66088__$1 = state_66088;
var statearr_66130_67494 = state_66088__$1;
(statearr_66130_67494[(2)] = inst_66075);

(statearr_66130_67494[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (17))){
var inst_66034 = (state_66088[(10)]);
var inst_66046 = cljs.core.first(inst_66034);
var inst_66049 = cljs.core.async.muxch_STAR_(inst_66046);
var inst_66050 = cljs.core.async.close_BANG_(inst_66049);
var inst_66051 = cljs.core.next(inst_66034);
var inst_66016 = inst_66051;
var inst_66017 = null;
var inst_66018 = (0);
var inst_66019 = (0);
var state_66088__$1 = (function (){var statearr_66137 = state_66088;
(statearr_66137[(12)] = inst_66018);

(statearr_66137[(13)] = inst_66016);

(statearr_66137[(14)] = inst_66050);

(statearr_66137[(15)] = inst_66019);

(statearr_66137[(16)] = inst_66017);

return statearr_66137;
})();
var statearr_66138_67495 = state_66088__$1;
(statearr_66138_67495[(2)] = null);

(statearr_66138_67495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (3))){
var inst_66083 = (state_66088[(2)]);
var state_66088__$1 = state_66088;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66088__$1,inst_66083);
} else {
if((state_val_66089 === (12))){
var inst_66059 = (state_66088[(2)]);
var state_66088__$1 = state_66088;
var statearr_66142_67501 = state_66088__$1;
(statearr_66142_67501[(2)] = inst_66059);

(statearr_66142_67501[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (2))){
var state_66088__$1 = state_66088;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66088__$1,(4),ch);
} else {
if((state_val_66089 === (23))){
var state_66088__$1 = state_66088;
var statearr_66148_67503 = state_66088__$1;
(statearr_66148_67503[(2)] = null);

(statearr_66148_67503[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (19))){
var inst_66006 = (state_66088[(8)]);
var inst_66065 = (state_66088[(11)]);
var inst_66068 = cljs.core.async.muxch_STAR_(inst_66065);
var state_66088__$1 = state_66088;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66088__$1,(22),inst_66068,inst_66006);
} else {
if((state_val_66089 === (11))){
var inst_66016 = (state_66088[(13)]);
var inst_66034 = (state_66088[(10)]);
var inst_66034__$1 = cljs.core.seq(inst_66016);
var state_66088__$1 = (function (){var statearr_66154 = state_66088;
(statearr_66154[(10)] = inst_66034__$1);

return statearr_66154;
})();
if(inst_66034__$1){
var statearr_66155_67505 = state_66088__$1;
(statearr_66155_67505[(1)] = (13));

} else {
var statearr_66156_67506 = state_66088__$1;
(statearr_66156_67506[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (9))){
var inst_66061 = (state_66088[(2)]);
var state_66088__$1 = state_66088;
var statearr_66159_67507 = state_66088__$1;
(statearr_66159_67507[(2)] = inst_66061);

(statearr_66159_67507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (5))){
var inst_66013 = cljs.core.deref(mults);
var inst_66014 = cljs.core.vals(inst_66013);
var inst_66015 = cljs.core.seq(inst_66014);
var inst_66016 = inst_66015;
var inst_66017 = null;
var inst_66018 = (0);
var inst_66019 = (0);
var state_66088__$1 = (function (){var statearr_66165 = state_66088;
(statearr_66165[(12)] = inst_66018);

(statearr_66165[(13)] = inst_66016);

(statearr_66165[(15)] = inst_66019);

(statearr_66165[(16)] = inst_66017);

return statearr_66165;
})();
var statearr_66167_67509 = state_66088__$1;
(statearr_66167_67509[(2)] = null);

(statearr_66167_67509[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (14))){
var state_66088__$1 = state_66088;
var statearr_66174_67510 = state_66088__$1;
(statearr_66174_67510[(2)] = null);

(statearr_66174_67510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (16))){
var inst_66034 = (state_66088[(10)]);
var inst_66039 = cljs.core.chunk_first(inst_66034);
var inst_66040 = cljs.core.chunk_rest(inst_66034);
var inst_66041 = cljs.core.count(inst_66039);
var inst_66016 = inst_66040;
var inst_66017 = inst_66039;
var inst_66018 = inst_66041;
var inst_66019 = (0);
var state_66088__$1 = (function (){var statearr_66179 = state_66088;
(statearr_66179[(12)] = inst_66018);

(statearr_66179[(13)] = inst_66016);

(statearr_66179[(15)] = inst_66019);

(statearr_66179[(16)] = inst_66017);

return statearr_66179;
})();
var statearr_66180_67515 = state_66088__$1;
(statearr_66180_67515[(2)] = null);

(statearr_66180_67515[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (10))){
var inst_66018 = (state_66088[(12)]);
var inst_66016 = (state_66088[(13)]);
var inst_66019 = (state_66088[(15)]);
var inst_66017 = (state_66088[(16)]);
var inst_66025 = cljs.core._nth(inst_66017,inst_66019);
var inst_66026 = cljs.core.async.muxch_STAR_(inst_66025);
var inst_66027 = cljs.core.async.close_BANG_(inst_66026);
var inst_66029 = (inst_66019 + (1));
var tmp66170 = inst_66018;
var tmp66171 = inst_66016;
var tmp66172 = inst_66017;
var inst_66016__$1 = tmp66171;
var inst_66017__$1 = tmp66172;
var inst_66018__$1 = tmp66170;
var inst_66019__$1 = inst_66029;
var state_66088__$1 = (function (){var statearr_66190 = state_66088;
(statearr_66190[(12)] = inst_66018__$1);

(statearr_66190[(13)] = inst_66016__$1);

(statearr_66190[(15)] = inst_66019__$1);

(statearr_66190[(17)] = inst_66027);

(statearr_66190[(16)] = inst_66017__$1);

return statearr_66190;
})();
var statearr_66191_67518 = state_66088__$1;
(statearr_66191_67518[(2)] = null);

(statearr_66191_67518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (18))){
var inst_66054 = (state_66088[(2)]);
var state_66088__$1 = state_66088;
var statearr_66192_67519 = state_66088__$1;
(statearr_66192_67519[(2)] = inst_66054);

(statearr_66192_67519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66089 === (8))){
var inst_66018 = (state_66088[(12)]);
var inst_66019 = (state_66088[(15)]);
var inst_66022 = (inst_66019 < inst_66018);
var inst_66023 = inst_66022;
var state_66088__$1 = state_66088;
if(cljs.core.truth_(inst_66023)){
var statearr_66193_67520 = state_66088__$1;
(statearr_66193_67520[(1)] = (10));

} else {
var statearr_66194_67521 = state_66088__$1;
(statearr_66194_67521[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_66195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66195[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_66195[(1)] = (1));

return statearr_66195;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_66088){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_66088);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e66196){if((e66196 instanceof Object)){
var ex__64457__auto__ = e66196;
var statearr_66197_67522 = state_66088;
(statearr_66197_67522[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66088);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66196;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67523 = state_66088;
state_66088 = G__67523;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_66088){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_66088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_66198 = f__64750__auto__();
(statearr_66198[(6)] = c__64749__auto___67471);

return statearr_66198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__66200 = arguments.length;
switch (G__66200) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__66202 = arguments.length;
switch (G__66202) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__66204 = arguments.length;
switch (G__66204) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__64749__auto___67538 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_66254){
var state_val_66255 = (state_66254[(1)]);
if((state_val_66255 === (7))){
var state_66254__$1 = state_66254;
var statearr_66256_67539 = state_66254__$1;
(statearr_66256_67539[(2)] = null);

(statearr_66256_67539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (1))){
var state_66254__$1 = state_66254;
var statearr_66257_67540 = state_66254__$1;
(statearr_66257_67540[(2)] = null);

(statearr_66257_67540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (4))){
var inst_66209 = (state_66254[(7)]);
var inst_66211 = (inst_66209 < cnt);
var state_66254__$1 = state_66254;
if(cljs.core.truth_(inst_66211)){
var statearr_66262_67541 = state_66254__$1;
(statearr_66262_67541[(1)] = (6));

} else {
var statearr_66266_67542 = state_66254__$1;
(statearr_66266_67542[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (15))){
var inst_66250 = (state_66254[(2)]);
var state_66254__$1 = state_66254;
var statearr_66268_67543 = state_66254__$1;
(statearr_66268_67543[(2)] = inst_66250);

(statearr_66268_67543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (13))){
var inst_66242 = cljs.core.async.close_BANG_(out);
var state_66254__$1 = state_66254;
var statearr_66269_67544 = state_66254__$1;
(statearr_66269_67544[(2)] = inst_66242);

(statearr_66269_67544[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (6))){
var state_66254__$1 = state_66254;
var statearr_66270_67545 = state_66254__$1;
(statearr_66270_67545[(2)] = null);

(statearr_66270_67545[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (3))){
var inst_66252 = (state_66254[(2)]);
var state_66254__$1 = state_66254;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66254__$1,inst_66252);
} else {
if((state_val_66255 === (12))){
var inst_66239 = (state_66254[(8)]);
var inst_66239__$1 = (state_66254[(2)]);
var inst_66240 = cljs.core.some(cljs.core.nil_QMARK_,inst_66239__$1);
var state_66254__$1 = (function (){var statearr_66279 = state_66254;
(statearr_66279[(8)] = inst_66239__$1);

return statearr_66279;
})();
if(cljs.core.truth_(inst_66240)){
var statearr_66280_67548 = state_66254__$1;
(statearr_66280_67548[(1)] = (13));

} else {
var statearr_66281_67549 = state_66254__$1;
(statearr_66281_67549[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (2))){
var inst_66208 = cljs.core.reset_BANG_(dctr,cnt);
var inst_66209 = (0);
var state_66254__$1 = (function (){var statearr_66282 = state_66254;
(statearr_66282[(7)] = inst_66209);

(statearr_66282[(9)] = inst_66208);

return statearr_66282;
})();
var statearr_66283_67550 = state_66254__$1;
(statearr_66283_67550[(2)] = null);

(statearr_66283_67550[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (11))){
var inst_66209 = (state_66254[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66254,(10),Object,null,(9));
var inst_66222 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_66209) : chs__$1.call(null,inst_66209));
var inst_66223 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_66209) : done.call(null,inst_66209));
var inst_66224 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_66222,inst_66223);
var state_66254__$1 = state_66254;
var statearr_66288_67553 = state_66254__$1;
(statearr_66288_67553[(2)] = inst_66224);


cljs.core.async.impl.ioc_helpers.process_exception(state_66254__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (9))){
var inst_66209 = (state_66254[(7)]);
var inst_66226 = (state_66254[(2)]);
var inst_66227 = (inst_66209 + (1));
var inst_66209__$1 = inst_66227;
var state_66254__$1 = (function (){var statearr_66289 = state_66254;
(statearr_66289[(10)] = inst_66226);

(statearr_66289[(7)] = inst_66209__$1);

return statearr_66289;
})();
var statearr_66290_67554 = state_66254__$1;
(statearr_66290_67554[(2)] = null);

(statearr_66290_67554[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (5))){
var inst_66233 = (state_66254[(2)]);
var state_66254__$1 = (function (){var statearr_66292 = state_66254;
(statearr_66292[(11)] = inst_66233);

return statearr_66292;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66254__$1,(12),dchan);
} else {
if((state_val_66255 === (14))){
var inst_66239 = (state_66254[(8)]);
var inst_66245 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_66239);
var state_66254__$1 = state_66254;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66254__$1,(16),out,inst_66245);
} else {
if((state_val_66255 === (16))){
var inst_66247 = (state_66254[(2)]);
var state_66254__$1 = (function (){var statearr_66293 = state_66254;
(statearr_66293[(12)] = inst_66247);

return statearr_66293;
})();
var statearr_66294_67555 = state_66254__$1;
(statearr_66294_67555[(2)] = null);

(statearr_66294_67555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (10))){
var inst_66214 = (state_66254[(2)]);
var inst_66218 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_66254__$1 = (function (){var statearr_66296 = state_66254;
(statearr_66296[(13)] = inst_66214);

return statearr_66296;
})();
var statearr_66300_67557 = state_66254__$1;
(statearr_66300_67557[(2)] = inst_66218);


cljs.core.async.impl.ioc_helpers.process_exception(state_66254__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66255 === (8))){
var inst_66231 = (state_66254[(2)]);
var state_66254__$1 = state_66254;
var statearr_66304_67558 = state_66254__$1;
(statearr_66304_67558[(2)] = inst_66231);

(statearr_66304_67558[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_66306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66306[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_66306[(1)] = (1));

return statearr_66306;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_66254){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_66254);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e66307){if((e66307 instanceof Object)){
var ex__64457__auto__ = e66307;
var statearr_66308_67561 = state_66254;
(statearr_66308_67561[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66307;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67562 = state_66254;
state_66254 = G__67562;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_66254){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_66254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_66313 = f__64750__auto__();
(statearr_66313[(6)] = c__64749__auto___67538);

return statearr_66313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__66320 = arguments.length;
switch (G__66320) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__64749__auto___67564 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_66357){
var state_val_66358 = (state_66357[(1)]);
if((state_val_66358 === (7))){
var inst_66336 = (state_66357[(7)]);
var inst_66337 = (state_66357[(8)]);
var inst_66336__$1 = (state_66357[(2)]);
var inst_66337__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66336__$1,(0),null);
var inst_66338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66336__$1,(1),null);
var inst_66339 = (inst_66337__$1 == null);
var state_66357__$1 = (function (){var statearr_66367 = state_66357;
(statearr_66367[(7)] = inst_66336__$1);

(statearr_66367[(8)] = inst_66337__$1);

(statearr_66367[(9)] = inst_66338);

return statearr_66367;
})();
if(cljs.core.truth_(inst_66339)){
var statearr_66368_67569 = state_66357__$1;
(statearr_66368_67569[(1)] = (8));

} else {
var statearr_66369_67570 = state_66357__$1;
(statearr_66369_67570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66358 === (1))){
var inst_66325 = cljs.core.vec(chs);
var inst_66326 = inst_66325;
var state_66357__$1 = (function (){var statearr_66370 = state_66357;
(statearr_66370[(10)] = inst_66326);

return statearr_66370;
})();
var statearr_66371_67571 = state_66357__$1;
(statearr_66371_67571[(2)] = null);

(statearr_66371_67571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66358 === (4))){
var inst_66326 = (state_66357[(10)]);
var state_66357__$1 = state_66357;
return cljs.core.async.ioc_alts_BANG_(state_66357__$1,(7),inst_66326);
} else {
if((state_val_66358 === (6))){
var inst_66353 = (state_66357[(2)]);
var state_66357__$1 = state_66357;
var statearr_66376_67572 = state_66357__$1;
(statearr_66376_67572[(2)] = inst_66353);

(statearr_66376_67572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66358 === (3))){
var inst_66355 = (state_66357[(2)]);
var state_66357__$1 = state_66357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66357__$1,inst_66355);
} else {
if((state_val_66358 === (2))){
var inst_66326 = (state_66357[(10)]);
var inst_66328 = cljs.core.count(inst_66326);
var inst_66329 = (inst_66328 > (0));
var state_66357__$1 = state_66357;
if(cljs.core.truth_(inst_66329)){
var statearr_66381_67577 = state_66357__$1;
(statearr_66381_67577[(1)] = (4));

} else {
var statearr_66382_67578 = state_66357__$1;
(statearr_66382_67578[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66358 === (11))){
var inst_66326 = (state_66357[(10)]);
var inst_66346 = (state_66357[(2)]);
var tmp66377 = inst_66326;
var inst_66326__$1 = tmp66377;
var state_66357__$1 = (function (){var statearr_66384 = state_66357;
(statearr_66384[(11)] = inst_66346);

(statearr_66384[(10)] = inst_66326__$1);

return statearr_66384;
})();
var statearr_66385_67579 = state_66357__$1;
(statearr_66385_67579[(2)] = null);

(statearr_66385_67579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66358 === (9))){
var inst_66337 = (state_66357[(8)]);
var state_66357__$1 = state_66357;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66357__$1,(11),out,inst_66337);
} else {
if((state_val_66358 === (5))){
var inst_66351 = cljs.core.async.close_BANG_(out);
var state_66357__$1 = state_66357;
var statearr_66390_67580 = state_66357__$1;
(statearr_66390_67580[(2)] = inst_66351);

(statearr_66390_67580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66358 === (10))){
var inst_66349 = (state_66357[(2)]);
var state_66357__$1 = state_66357;
var statearr_66391_67581 = state_66357__$1;
(statearr_66391_67581[(2)] = inst_66349);

(statearr_66391_67581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66358 === (8))){
var inst_66336 = (state_66357[(7)]);
var inst_66337 = (state_66357[(8)]);
var inst_66326 = (state_66357[(10)]);
var inst_66338 = (state_66357[(9)]);
var inst_66341 = (function (){var cs = inst_66326;
var vec__66332 = inst_66336;
var v = inst_66337;
var c = inst_66338;
return (function (p1__66317_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__66317_SHARP_);
});
})();
var inst_66342 = cljs.core.filterv(inst_66341,inst_66326);
var inst_66326__$1 = inst_66342;
var state_66357__$1 = (function (){var statearr_66392 = state_66357;
(statearr_66392[(10)] = inst_66326__$1);

return statearr_66392;
})();
var statearr_66394_67583 = state_66357__$1;
(statearr_66394_67583[(2)] = null);

(statearr_66394_67583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_66395 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66395[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_66395[(1)] = (1));

return statearr_66395;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_66357){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_66357);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e66396){if((e66396 instanceof Object)){
var ex__64457__auto__ = e66396;
var statearr_66397_67584 = state_66357;
(statearr_66397_67584[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66396;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67585 = state_66357;
state_66357 = G__67585;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_66357){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_66357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_66398 = f__64750__auto__();
(statearr_66398[(6)] = c__64749__auto___67564);

return statearr_66398;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__66411 = arguments.length;
switch (G__66411) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__64749__auto___67603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_66444){
var state_val_66445 = (state_66444[(1)]);
if((state_val_66445 === (7))){
var inst_66425 = (state_66444[(7)]);
var inst_66425__$1 = (state_66444[(2)]);
var inst_66426 = (inst_66425__$1 == null);
var inst_66427 = cljs.core.not(inst_66426);
var state_66444__$1 = (function (){var statearr_66446 = state_66444;
(statearr_66446[(7)] = inst_66425__$1);

return statearr_66446;
})();
if(inst_66427){
var statearr_66447_67607 = state_66444__$1;
(statearr_66447_67607[(1)] = (8));

} else {
var statearr_66448_67608 = state_66444__$1;
(statearr_66448_67608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66445 === (1))){
var inst_66417 = (0);
var state_66444__$1 = (function (){var statearr_66449 = state_66444;
(statearr_66449[(8)] = inst_66417);

return statearr_66449;
})();
var statearr_66450_67610 = state_66444__$1;
(statearr_66450_67610[(2)] = null);

(statearr_66450_67610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66445 === (4))){
var state_66444__$1 = state_66444;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66444__$1,(7),ch);
} else {
if((state_val_66445 === (6))){
var inst_66439 = (state_66444[(2)]);
var state_66444__$1 = state_66444;
var statearr_66455_67617 = state_66444__$1;
(statearr_66455_67617[(2)] = inst_66439);

(statearr_66455_67617[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66445 === (3))){
var inst_66441 = (state_66444[(2)]);
var inst_66442 = cljs.core.async.close_BANG_(out);
var state_66444__$1 = (function (){var statearr_66456 = state_66444;
(statearr_66456[(9)] = inst_66441);

return statearr_66456;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66444__$1,inst_66442);
} else {
if((state_val_66445 === (2))){
var inst_66417 = (state_66444[(8)]);
var inst_66419 = (inst_66417 < n);
var state_66444__$1 = state_66444;
if(cljs.core.truth_(inst_66419)){
var statearr_66458_67618 = state_66444__$1;
(statearr_66458_67618[(1)] = (4));

} else {
var statearr_66459_67619 = state_66444__$1;
(statearr_66459_67619[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66445 === (11))){
var inst_66417 = (state_66444[(8)]);
var inst_66431 = (state_66444[(2)]);
var inst_66432 = (inst_66417 + (1));
var inst_66417__$1 = inst_66432;
var state_66444__$1 = (function (){var statearr_66460 = state_66444;
(statearr_66460[(8)] = inst_66417__$1);

(statearr_66460[(10)] = inst_66431);

return statearr_66460;
})();
var statearr_66461_67620 = state_66444__$1;
(statearr_66461_67620[(2)] = null);

(statearr_66461_67620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66445 === (9))){
var state_66444__$1 = state_66444;
var statearr_66462_67624 = state_66444__$1;
(statearr_66462_67624[(2)] = null);

(statearr_66462_67624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66445 === (5))){
var state_66444__$1 = state_66444;
var statearr_66463_67625 = state_66444__$1;
(statearr_66463_67625[(2)] = null);

(statearr_66463_67625[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66445 === (10))){
var inst_66436 = (state_66444[(2)]);
var state_66444__$1 = state_66444;
var statearr_66464_67632 = state_66444__$1;
(statearr_66464_67632[(2)] = inst_66436);

(statearr_66464_67632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66445 === (8))){
var inst_66425 = (state_66444[(7)]);
var state_66444__$1 = state_66444;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66444__$1,(11),out,inst_66425);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_66467 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66467[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_66467[(1)] = (1));

return statearr_66467;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_66444){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_66444);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e66468){if((e66468 instanceof Object)){
var ex__64457__auto__ = e66468;
var statearr_66469_67637 = state_66444;
(statearr_66469_67637[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66444);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67638 = state_66444;
state_66444 = G__67638;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_66444){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_66444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_66470 = f__64750__auto__();
(statearr_66470[(6)] = c__64749__auto___67603);

return statearr_66470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66472 = (function (f,ch,meta66473){
this.f = f;
this.ch = ch;
this.meta66473 = meta66473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66474,meta66473__$1){
var self__ = this;
var _66474__$1 = this;
return (new cljs.core.async.t_cljs$core$async66472(self__.f,self__.ch,meta66473__$1));
}));

(cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66474){
var self__ = this;
var _66474__$1 = this;
return self__.meta66473;
}));

(cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66475 = (function (f,ch,meta66473,_,fn1,meta66476){
this.f = f;
this.ch = ch;
this.meta66473 = meta66473;
this._ = _;
this.fn1 = fn1;
this.meta66476 = meta66476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66477,meta66476__$1){
var self__ = this;
var _66477__$1 = this;
return (new cljs.core.async.t_cljs$core$async66475(self__.f,self__.ch,self__.meta66473,self__._,self__.fn1,meta66476__$1));
}));

(cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66477){
var self__ = this;
var _66477__$1 = this;
return self__.meta66476;
}));

(cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async66475.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__66471_SHARP_){
var G__66478 = (((p1__66471_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__66471_SHARP_) : self__.f.call(null,p1__66471_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__66478) : f1.call(null,G__66478));
});
}));

(cljs.core.async.t_cljs$core$async66475.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66473","meta66473",-1997574332,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async66472","cljs.core.async/t_cljs$core$async66472",2107755592,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta66476","meta66476",-186268113,null)], null);
}));

(cljs.core.async.t_cljs$core$async66475.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66475.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66475");

(cljs.core.async.t_cljs$core$async66475.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66475");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66475.
 */
cljs.core.async.__GT_t_cljs$core$async66475 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66475(f__$1,ch__$1,meta66473__$1,___$2,fn1__$1,meta66476){
return (new cljs.core.async.t_cljs$core$async66475(f__$1,ch__$1,meta66473__$1,___$2,fn1__$1,meta66476));
});

}

return (new cljs.core.async.t_cljs$core$async66475(self__.f,self__.ch,self__.meta66473,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__66479 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__66479) : self__.f.call(null,G__66479));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66472.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async66472.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66473","meta66473",-1997574332,null)], null);
}));

(cljs.core.async.t_cljs$core$async66472.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66472.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66472");

(cljs.core.async.t_cljs$core$async66472.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66472");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66472.
 */
cljs.core.async.__GT_t_cljs$core$async66472 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66472(f__$1,ch__$1,meta66473){
return (new cljs.core.async.t_cljs$core$async66472(f__$1,ch__$1,meta66473));
});

}

return (new cljs.core.async.t_cljs$core$async66472(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66482 = (function (f,ch,meta66483){
this.f = f;
this.ch = ch;
this.meta66483 = meta66483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66484,meta66483__$1){
var self__ = this;
var _66484__$1 = this;
return (new cljs.core.async.t_cljs$core$async66482(self__.f,self__.ch,meta66483__$1));
}));

(cljs.core.async.t_cljs$core$async66482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66484){
var self__ = this;
var _66484__$1 = this;
return self__.meta66483;
}));

(cljs.core.async.t_cljs$core$async66482.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66482.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async66482.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async66482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66483","meta66483",-81368385,null)], null);
}));

(cljs.core.async.t_cljs$core$async66482.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66482");

(cljs.core.async.t_cljs$core$async66482.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66482");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66482.
 */
cljs.core.async.__GT_t_cljs$core$async66482 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async66482(f__$1,ch__$1,meta66483){
return (new cljs.core.async.t_cljs$core$async66482(f__$1,ch__$1,meta66483));
});

}

return (new cljs.core.async.t_cljs$core$async66482(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66489 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66489 = (function (p,ch,meta66490){
this.p = p;
this.ch = ch;
this.meta66490 = meta66490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66491,meta66490__$1){
var self__ = this;
var _66491__$1 = this;
return (new cljs.core.async.t_cljs$core$async66489(self__.p,self__.ch,meta66490__$1));
}));

(cljs.core.async.t_cljs$core$async66489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66491){
var self__ = this;
var _66491__$1 = this;
return self__.meta66490;
}));

(cljs.core.async.t_cljs$core$async66489.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66489.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66489.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66489.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66489.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async66489.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66489.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async66489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66490","meta66490",1763778597,null)], null);
}));

(cljs.core.async.t_cljs$core$async66489.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66489");

(cljs.core.async.t_cljs$core$async66489.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66489");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66489.
 */
cljs.core.async.__GT_t_cljs$core$async66489 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async66489(p__$1,ch__$1,meta66490){
return (new cljs.core.async.t_cljs$core$async66489(p__$1,ch__$1,meta66490));
});

}

return (new cljs.core.async.t_cljs$core$async66489(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__66499 = arguments.length;
switch (G__66499) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__64749__auto___67662 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_66523){
var state_val_66524 = (state_66523[(1)]);
if((state_val_66524 === (7))){
var inst_66518 = (state_66523[(2)]);
var state_66523__$1 = state_66523;
var statearr_66527_67663 = state_66523__$1;
(statearr_66527_67663[(2)] = inst_66518);

(statearr_66527_67663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66524 === (1))){
var state_66523__$1 = state_66523;
var statearr_66528_67673 = state_66523__$1;
(statearr_66528_67673[(2)] = null);

(statearr_66528_67673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66524 === (4))){
var inst_66504 = (state_66523[(7)]);
var inst_66504__$1 = (state_66523[(2)]);
var inst_66505 = (inst_66504__$1 == null);
var state_66523__$1 = (function (){var statearr_66529 = state_66523;
(statearr_66529[(7)] = inst_66504__$1);

return statearr_66529;
})();
if(cljs.core.truth_(inst_66505)){
var statearr_66533_67674 = state_66523__$1;
(statearr_66533_67674[(1)] = (5));

} else {
var statearr_66534_67675 = state_66523__$1;
(statearr_66534_67675[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66524 === (6))){
var inst_66504 = (state_66523[(7)]);
var inst_66509 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_66504) : p.call(null,inst_66504));
var state_66523__$1 = state_66523;
if(cljs.core.truth_(inst_66509)){
var statearr_66535_67676 = state_66523__$1;
(statearr_66535_67676[(1)] = (8));

} else {
var statearr_66536_67677 = state_66523__$1;
(statearr_66536_67677[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66524 === (3))){
var inst_66520 = (state_66523[(2)]);
var state_66523__$1 = state_66523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66523__$1,inst_66520);
} else {
if((state_val_66524 === (2))){
var state_66523__$1 = state_66523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66523__$1,(4),ch);
} else {
if((state_val_66524 === (11))){
var inst_66512 = (state_66523[(2)]);
var state_66523__$1 = state_66523;
var statearr_66537_67678 = state_66523__$1;
(statearr_66537_67678[(2)] = inst_66512);

(statearr_66537_67678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66524 === (9))){
var state_66523__$1 = state_66523;
var statearr_66538_67679 = state_66523__$1;
(statearr_66538_67679[(2)] = null);

(statearr_66538_67679[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66524 === (5))){
var inst_66507 = cljs.core.async.close_BANG_(out);
var state_66523__$1 = state_66523;
var statearr_66539_67680 = state_66523__$1;
(statearr_66539_67680[(2)] = inst_66507);

(statearr_66539_67680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66524 === (10))){
var inst_66515 = (state_66523[(2)]);
var state_66523__$1 = (function (){var statearr_66540 = state_66523;
(statearr_66540[(8)] = inst_66515);

return statearr_66540;
})();
var statearr_66547_67681 = state_66523__$1;
(statearr_66547_67681[(2)] = null);

(statearr_66547_67681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66524 === (8))){
var inst_66504 = (state_66523[(7)]);
var state_66523__$1 = state_66523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66523__$1,(11),out,inst_66504);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_66561 = [null,null,null,null,null,null,null,null,null];
(statearr_66561[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_66561[(1)] = (1));

return statearr_66561;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_66523){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_66523);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e66562){if((e66562 instanceof Object)){
var ex__64457__auto__ = e66562;
var statearr_66563_67687 = state_66523;
(statearr_66563_67687[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66562;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67688 = state_66523;
state_66523 = G__67688;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_66523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_66523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_66564 = f__64750__auto__();
(statearr_66564[(6)] = c__64749__auto___67662);

return statearr_66564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__66576 = arguments.length;
switch (G__66576) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__64749__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_66645){
var state_val_66646 = (state_66645[(1)]);
if((state_val_66646 === (7))){
var inst_66641 = (state_66645[(2)]);
var state_66645__$1 = state_66645;
var statearr_66647_67694 = state_66645__$1;
(statearr_66647_67694[(2)] = inst_66641);

(statearr_66647_67694[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (20))){
var inst_66611 = (state_66645[(7)]);
var inst_66622 = (state_66645[(2)]);
var inst_66623 = cljs.core.next(inst_66611);
var inst_66597 = inst_66623;
var inst_66598 = null;
var inst_66599 = (0);
var inst_66600 = (0);
var state_66645__$1 = (function (){var statearr_66648 = state_66645;
(statearr_66648[(8)] = inst_66597);

(statearr_66648[(9)] = inst_66600);

(statearr_66648[(10)] = inst_66598);

(statearr_66648[(11)] = inst_66622);

(statearr_66648[(12)] = inst_66599);

return statearr_66648;
})();
var statearr_66649_67695 = state_66645__$1;
(statearr_66649_67695[(2)] = null);

(statearr_66649_67695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (1))){
var state_66645__$1 = state_66645;
var statearr_66651_67696 = state_66645__$1;
(statearr_66651_67696[(2)] = null);

(statearr_66651_67696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (4))){
var inst_66582 = (state_66645[(13)]);
var inst_66582__$1 = (state_66645[(2)]);
var inst_66583 = (inst_66582__$1 == null);
var state_66645__$1 = (function (){var statearr_66655 = state_66645;
(statearr_66655[(13)] = inst_66582__$1);

return statearr_66655;
})();
if(cljs.core.truth_(inst_66583)){
var statearr_66656_67698 = state_66645__$1;
(statearr_66656_67698[(1)] = (5));

} else {
var statearr_66657_67699 = state_66645__$1;
(statearr_66657_67699[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (15))){
var state_66645__$1 = state_66645;
var statearr_66661_67700 = state_66645__$1;
(statearr_66661_67700[(2)] = null);

(statearr_66661_67700[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (21))){
var state_66645__$1 = state_66645;
var statearr_66664_67701 = state_66645__$1;
(statearr_66664_67701[(2)] = null);

(statearr_66664_67701[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (13))){
var inst_66597 = (state_66645[(8)]);
var inst_66600 = (state_66645[(9)]);
var inst_66598 = (state_66645[(10)]);
var inst_66599 = (state_66645[(12)]);
var inst_66607 = (state_66645[(2)]);
var inst_66608 = (inst_66600 + (1));
var tmp66658 = inst_66597;
var tmp66659 = inst_66598;
var tmp66660 = inst_66599;
var inst_66597__$1 = tmp66658;
var inst_66598__$1 = tmp66659;
var inst_66599__$1 = tmp66660;
var inst_66600__$1 = inst_66608;
var state_66645__$1 = (function (){var statearr_66665 = state_66645;
(statearr_66665[(8)] = inst_66597__$1);

(statearr_66665[(9)] = inst_66600__$1);

(statearr_66665[(10)] = inst_66598__$1);

(statearr_66665[(14)] = inst_66607);

(statearr_66665[(12)] = inst_66599__$1);

return statearr_66665;
})();
var statearr_66667_67710 = state_66645__$1;
(statearr_66667_67710[(2)] = null);

(statearr_66667_67710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (22))){
var state_66645__$1 = state_66645;
var statearr_66668_67714 = state_66645__$1;
(statearr_66668_67714[(2)] = null);

(statearr_66668_67714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (6))){
var inst_66582 = (state_66645[(13)]);
var inst_66595 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_66582) : f.call(null,inst_66582));
var inst_66596 = cljs.core.seq(inst_66595);
var inst_66597 = inst_66596;
var inst_66598 = null;
var inst_66599 = (0);
var inst_66600 = (0);
var state_66645__$1 = (function (){var statearr_66670 = state_66645;
(statearr_66670[(8)] = inst_66597);

(statearr_66670[(9)] = inst_66600);

(statearr_66670[(10)] = inst_66598);

(statearr_66670[(12)] = inst_66599);

return statearr_66670;
})();
var statearr_66671_67718 = state_66645__$1;
(statearr_66671_67718[(2)] = null);

(statearr_66671_67718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (17))){
var inst_66611 = (state_66645[(7)]);
var inst_66615 = cljs.core.chunk_first(inst_66611);
var inst_66616 = cljs.core.chunk_rest(inst_66611);
var inst_66617 = cljs.core.count(inst_66615);
var inst_66597 = inst_66616;
var inst_66598 = inst_66615;
var inst_66599 = inst_66617;
var inst_66600 = (0);
var state_66645__$1 = (function (){var statearr_66672 = state_66645;
(statearr_66672[(8)] = inst_66597);

(statearr_66672[(9)] = inst_66600);

(statearr_66672[(10)] = inst_66598);

(statearr_66672[(12)] = inst_66599);

return statearr_66672;
})();
var statearr_66673_67719 = state_66645__$1;
(statearr_66673_67719[(2)] = null);

(statearr_66673_67719[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (3))){
var inst_66643 = (state_66645[(2)]);
var state_66645__$1 = state_66645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66645__$1,inst_66643);
} else {
if((state_val_66646 === (12))){
var inst_66631 = (state_66645[(2)]);
var state_66645__$1 = state_66645;
var statearr_66674_67720 = state_66645__$1;
(statearr_66674_67720[(2)] = inst_66631);

(statearr_66674_67720[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (2))){
var state_66645__$1 = state_66645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66645__$1,(4),in$);
} else {
if((state_val_66646 === (23))){
var inst_66639 = (state_66645[(2)]);
var state_66645__$1 = state_66645;
var statearr_66675_67721 = state_66645__$1;
(statearr_66675_67721[(2)] = inst_66639);

(statearr_66675_67721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (19))){
var inst_66626 = (state_66645[(2)]);
var state_66645__$1 = state_66645;
var statearr_66678_67722 = state_66645__$1;
(statearr_66678_67722[(2)] = inst_66626);

(statearr_66678_67722[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (11))){
var inst_66597 = (state_66645[(8)]);
var inst_66611 = (state_66645[(7)]);
var inst_66611__$1 = cljs.core.seq(inst_66597);
var state_66645__$1 = (function (){var statearr_66679 = state_66645;
(statearr_66679[(7)] = inst_66611__$1);

return statearr_66679;
})();
if(inst_66611__$1){
var statearr_66680_67723 = state_66645__$1;
(statearr_66680_67723[(1)] = (14));

} else {
var statearr_66681_67724 = state_66645__$1;
(statearr_66681_67724[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (9))){
var inst_66633 = (state_66645[(2)]);
var inst_66634 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_66645__$1 = (function (){var statearr_66682 = state_66645;
(statearr_66682[(15)] = inst_66633);

return statearr_66682;
})();
if(cljs.core.truth_(inst_66634)){
var statearr_66683_67725 = state_66645__$1;
(statearr_66683_67725[(1)] = (21));

} else {
var statearr_66685_67726 = state_66645__$1;
(statearr_66685_67726[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (5))){
var inst_66585 = cljs.core.async.close_BANG_(out);
var state_66645__$1 = state_66645;
var statearr_66687_67727 = state_66645__$1;
(statearr_66687_67727[(2)] = inst_66585);

(statearr_66687_67727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (14))){
var inst_66611 = (state_66645[(7)]);
var inst_66613 = cljs.core.chunked_seq_QMARK_(inst_66611);
var state_66645__$1 = state_66645;
if(inst_66613){
var statearr_66691_67728 = state_66645__$1;
(statearr_66691_67728[(1)] = (17));

} else {
var statearr_66692_67729 = state_66645__$1;
(statearr_66692_67729[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (16))){
var inst_66629 = (state_66645[(2)]);
var state_66645__$1 = state_66645;
var statearr_66693_67730 = state_66645__$1;
(statearr_66693_67730[(2)] = inst_66629);

(statearr_66693_67730[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (10))){
var inst_66600 = (state_66645[(9)]);
var inst_66598 = (state_66645[(10)]);
var inst_66605 = cljs.core._nth(inst_66598,inst_66600);
var state_66645__$1 = state_66645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66645__$1,(13),out,inst_66605);
} else {
if((state_val_66646 === (18))){
var inst_66611 = (state_66645[(7)]);
var inst_66620 = cljs.core.first(inst_66611);
var state_66645__$1 = state_66645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66645__$1,(20),out,inst_66620);
} else {
if((state_val_66646 === (8))){
var inst_66600 = (state_66645[(9)]);
var inst_66599 = (state_66645[(12)]);
var inst_66602 = (inst_66600 < inst_66599);
var inst_66603 = inst_66602;
var state_66645__$1 = state_66645;
if(cljs.core.truth_(inst_66603)){
var statearr_66694_67731 = state_66645__$1;
(statearr_66694_67731[(1)] = (10));

} else {
var statearr_66695_67735 = state_66645__$1;
(statearr_66695_67735[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__64454__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__64454__auto____0 = (function (){
var statearr_66696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66696[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__64454__auto__);

(statearr_66696[(1)] = (1));

return statearr_66696;
});
var cljs$core$async$mapcat_STAR__$_state_machine__64454__auto____1 = (function (state_66645){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_66645);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e66697){if((e66697 instanceof Object)){
var ex__64457__auto__ = e66697;
var statearr_66698_67736 = state_66645;
(statearr_66698_67736[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66697;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67737 = state_66645;
state_66645 = G__67737;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__64454__auto__ = function(state_66645){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__64454__auto____1.call(this,state_66645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__64454__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__64454__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_66699 = f__64750__auto__();
(statearr_66699[(6)] = c__64749__auto__);

return statearr_66699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));

return c__64749__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__66701 = arguments.length;
switch (G__66701) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__66703 = arguments.length;
switch (G__66703) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__66710 = arguments.length;
switch (G__66710) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__64749__auto___67741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_66737){
var state_val_66738 = (state_66737[(1)]);
if((state_val_66738 === (7))){
var inst_66731 = (state_66737[(2)]);
var state_66737__$1 = state_66737;
var statearr_66740_67742 = state_66737__$1;
(statearr_66740_67742[(2)] = inst_66731);

(statearr_66740_67742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66738 === (1))){
var inst_66713 = null;
var state_66737__$1 = (function (){var statearr_66744 = state_66737;
(statearr_66744[(7)] = inst_66713);

return statearr_66744;
})();
var statearr_66745_67743 = state_66737__$1;
(statearr_66745_67743[(2)] = null);

(statearr_66745_67743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66738 === (4))){
var inst_66716 = (state_66737[(8)]);
var inst_66716__$1 = (state_66737[(2)]);
var inst_66717 = (inst_66716__$1 == null);
var inst_66718 = cljs.core.not(inst_66717);
var state_66737__$1 = (function (){var statearr_66746 = state_66737;
(statearr_66746[(8)] = inst_66716__$1);

return statearr_66746;
})();
if(inst_66718){
var statearr_66747_67745 = state_66737__$1;
(statearr_66747_67745[(1)] = (5));

} else {
var statearr_66748_67746 = state_66737__$1;
(statearr_66748_67746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66738 === (6))){
var state_66737__$1 = state_66737;
var statearr_66749_67747 = state_66737__$1;
(statearr_66749_67747[(2)] = null);

(statearr_66749_67747[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66738 === (3))){
var inst_66733 = (state_66737[(2)]);
var inst_66735 = cljs.core.async.close_BANG_(out);
var state_66737__$1 = (function (){var statearr_66750 = state_66737;
(statearr_66750[(9)] = inst_66733);

return statearr_66750;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66737__$1,inst_66735);
} else {
if((state_val_66738 === (2))){
var state_66737__$1 = state_66737;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66737__$1,(4),ch);
} else {
if((state_val_66738 === (11))){
var inst_66716 = (state_66737[(8)]);
var inst_66725 = (state_66737[(2)]);
var inst_66713 = inst_66716;
var state_66737__$1 = (function (){var statearr_66751 = state_66737;
(statearr_66751[(10)] = inst_66725);

(statearr_66751[(7)] = inst_66713);

return statearr_66751;
})();
var statearr_66752_67751 = state_66737__$1;
(statearr_66752_67751[(2)] = null);

(statearr_66752_67751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66738 === (9))){
var inst_66716 = (state_66737[(8)]);
var state_66737__$1 = state_66737;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66737__$1,(11),out,inst_66716);
} else {
if((state_val_66738 === (5))){
var inst_66716 = (state_66737[(8)]);
var inst_66713 = (state_66737[(7)]);
var inst_66720 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66716,inst_66713);
var state_66737__$1 = state_66737;
if(inst_66720){
var statearr_66754_67752 = state_66737__$1;
(statearr_66754_67752[(1)] = (8));

} else {
var statearr_66755_67753 = state_66737__$1;
(statearr_66755_67753[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66738 === (10))){
var inst_66728 = (state_66737[(2)]);
var state_66737__$1 = state_66737;
var statearr_66756_67754 = state_66737__$1;
(statearr_66756_67754[(2)] = inst_66728);

(statearr_66756_67754[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66738 === (8))){
var inst_66713 = (state_66737[(7)]);
var tmp66753 = inst_66713;
var inst_66713__$1 = tmp66753;
var state_66737__$1 = (function (){var statearr_66758 = state_66737;
(statearr_66758[(7)] = inst_66713__$1);

return statearr_66758;
})();
var statearr_66762_67755 = state_66737__$1;
(statearr_66762_67755[(2)] = null);

(statearr_66762_67755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_66763 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66763[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_66763[(1)] = (1));

return statearr_66763;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_66737){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_66737);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e66764){if((e66764 instanceof Object)){
var ex__64457__auto__ = e66764;
var statearr_66765_67756 = state_66737;
(statearr_66765_67756[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66764;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67757 = state_66737;
state_66737 = G__67757;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_66737){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_66737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_66770 = f__64750__auto__();
(statearr_66770[(6)] = c__64749__auto___67741);

return statearr_66770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__66772 = arguments.length;
switch (G__66772) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__64749__auto___67759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_66810){
var state_val_66811 = (state_66810[(1)]);
if((state_val_66811 === (7))){
var inst_66806 = (state_66810[(2)]);
var state_66810__$1 = state_66810;
var statearr_66814_67760 = state_66810__$1;
(statearr_66814_67760[(2)] = inst_66806);

(statearr_66814_67760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (1))){
var inst_66773 = (new Array(n));
var inst_66774 = inst_66773;
var inst_66775 = (0);
var state_66810__$1 = (function (){var statearr_66815 = state_66810;
(statearr_66815[(7)] = inst_66774);

(statearr_66815[(8)] = inst_66775);

return statearr_66815;
})();
var statearr_66816_67761 = state_66810__$1;
(statearr_66816_67761[(2)] = null);

(statearr_66816_67761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (4))){
var inst_66778 = (state_66810[(9)]);
var inst_66778__$1 = (state_66810[(2)]);
var inst_66779 = (inst_66778__$1 == null);
var inst_66780 = cljs.core.not(inst_66779);
var state_66810__$1 = (function (){var statearr_66817 = state_66810;
(statearr_66817[(9)] = inst_66778__$1);

return statearr_66817;
})();
if(inst_66780){
var statearr_66818_67762 = state_66810__$1;
(statearr_66818_67762[(1)] = (5));

} else {
var statearr_66819_67764 = state_66810__$1;
(statearr_66819_67764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (15))){
var inst_66800 = (state_66810[(2)]);
var state_66810__$1 = state_66810;
var statearr_66820_67765 = state_66810__$1;
(statearr_66820_67765[(2)] = inst_66800);

(statearr_66820_67765[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (13))){
var state_66810__$1 = state_66810;
var statearr_66824_67766 = state_66810__$1;
(statearr_66824_67766[(2)] = null);

(statearr_66824_67766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (6))){
var inst_66775 = (state_66810[(8)]);
var inst_66796 = (inst_66775 > (0));
var state_66810__$1 = state_66810;
if(cljs.core.truth_(inst_66796)){
var statearr_66825_67767 = state_66810__$1;
(statearr_66825_67767[(1)] = (12));

} else {
var statearr_66826_67768 = state_66810__$1;
(statearr_66826_67768[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (3))){
var inst_66808 = (state_66810[(2)]);
var state_66810__$1 = state_66810;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66810__$1,inst_66808);
} else {
if((state_val_66811 === (12))){
var inst_66774 = (state_66810[(7)]);
var inst_66798 = cljs.core.vec(inst_66774);
var state_66810__$1 = state_66810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66810__$1,(15),out,inst_66798);
} else {
if((state_val_66811 === (2))){
var state_66810__$1 = state_66810;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66810__$1,(4),ch);
} else {
if((state_val_66811 === (11))){
var inst_66790 = (state_66810[(2)]);
var inst_66791 = (new Array(n));
var inst_66774 = inst_66791;
var inst_66775 = (0);
var state_66810__$1 = (function (){var statearr_66827 = state_66810;
(statearr_66827[(7)] = inst_66774);

(statearr_66827[(8)] = inst_66775);

(statearr_66827[(10)] = inst_66790);

return statearr_66827;
})();
var statearr_66828_67769 = state_66810__$1;
(statearr_66828_67769[(2)] = null);

(statearr_66828_67769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (9))){
var inst_66774 = (state_66810[(7)]);
var inst_66788 = cljs.core.vec(inst_66774);
var state_66810__$1 = state_66810;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66810__$1,(11),out,inst_66788);
} else {
if((state_val_66811 === (5))){
var inst_66774 = (state_66810[(7)]);
var inst_66783 = (state_66810[(11)]);
var inst_66778 = (state_66810[(9)]);
var inst_66775 = (state_66810[(8)]);
var inst_66782 = (inst_66774[inst_66775] = inst_66778);
var inst_66783__$1 = (inst_66775 + (1));
var inst_66784 = (inst_66783__$1 < n);
var state_66810__$1 = (function (){var statearr_66829 = state_66810;
(statearr_66829[(11)] = inst_66783__$1);

(statearr_66829[(12)] = inst_66782);

return statearr_66829;
})();
if(cljs.core.truth_(inst_66784)){
var statearr_66830_67771 = state_66810__$1;
(statearr_66830_67771[(1)] = (8));

} else {
var statearr_66831_67772 = state_66810__$1;
(statearr_66831_67772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (14))){
var inst_66803 = (state_66810[(2)]);
var inst_66804 = cljs.core.async.close_BANG_(out);
var state_66810__$1 = (function (){var statearr_66833 = state_66810;
(statearr_66833[(13)] = inst_66803);

return statearr_66833;
})();
var statearr_66834_67773 = state_66810__$1;
(statearr_66834_67773[(2)] = inst_66804);

(statearr_66834_67773[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (10))){
var inst_66794 = (state_66810[(2)]);
var state_66810__$1 = state_66810;
var statearr_66835_67774 = state_66810__$1;
(statearr_66835_67774[(2)] = inst_66794);

(statearr_66835_67774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66811 === (8))){
var inst_66774 = (state_66810[(7)]);
var inst_66783 = (state_66810[(11)]);
var tmp66832 = inst_66774;
var inst_66774__$1 = tmp66832;
var inst_66775 = inst_66783;
var state_66810__$1 = (function (){var statearr_66836 = state_66810;
(statearr_66836[(7)] = inst_66774__$1);

(statearr_66836[(8)] = inst_66775);

return statearr_66836;
})();
var statearr_66837_67775 = state_66810__$1;
(statearr_66837_67775[(2)] = null);

(statearr_66837_67775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_66838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66838[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_66838[(1)] = (1));

return statearr_66838;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_66810){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_66810);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e66839){if((e66839 instanceof Object)){
var ex__64457__auto__ = e66839;
var statearr_66840_67780 = state_66810;
(statearr_66840_67780[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66839;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67785 = state_66810;
state_66810 = G__67785;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_66810){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_66810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_66841 = f__64750__auto__();
(statearr_66841[(6)] = c__64749__auto___67759);

return statearr_66841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__66843 = arguments.length;
switch (G__66843) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__64749__auto___67787 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_66888){
var state_val_66889 = (state_66888[(1)]);
if((state_val_66889 === (7))){
var inst_66884 = (state_66888[(2)]);
var state_66888__$1 = state_66888;
var statearr_66890_67788 = state_66888__$1;
(statearr_66890_67788[(2)] = inst_66884);

(statearr_66890_67788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (1))){
var inst_66844 = [];
var inst_66845 = inst_66844;
var inst_66846 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_66888__$1 = (function (){var statearr_66891 = state_66888;
(statearr_66891[(7)] = inst_66846);

(statearr_66891[(8)] = inst_66845);

return statearr_66891;
})();
var statearr_66892_67789 = state_66888__$1;
(statearr_66892_67789[(2)] = null);

(statearr_66892_67789[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (4))){
var inst_66849 = (state_66888[(9)]);
var inst_66849__$1 = (state_66888[(2)]);
var inst_66850 = (inst_66849__$1 == null);
var inst_66851 = cljs.core.not(inst_66850);
var state_66888__$1 = (function (){var statearr_66893 = state_66888;
(statearr_66893[(9)] = inst_66849__$1);

return statearr_66893;
})();
if(inst_66851){
var statearr_66894_67793 = state_66888__$1;
(statearr_66894_67793[(1)] = (5));

} else {
var statearr_66895_67794 = state_66888__$1;
(statearr_66895_67794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (15))){
var inst_66845 = (state_66888[(8)]);
var inst_66876 = cljs.core.vec(inst_66845);
var state_66888__$1 = state_66888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66888__$1,(18),out,inst_66876);
} else {
if((state_val_66889 === (13))){
var inst_66871 = (state_66888[(2)]);
var state_66888__$1 = state_66888;
var statearr_66896_67795 = state_66888__$1;
(statearr_66896_67795[(2)] = inst_66871);

(statearr_66896_67795[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (6))){
var inst_66845 = (state_66888[(8)]);
var inst_66873 = inst_66845.length;
var inst_66874 = (inst_66873 > (0));
var state_66888__$1 = state_66888;
if(cljs.core.truth_(inst_66874)){
var statearr_66897_67797 = state_66888__$1;
(statearr_66897_67797[(1)] = (15));

} else {
var statearr_66898_67798 = state_66888__$1;
(statearr_66898_67798[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (17))){
var inst_66881 = (state_66888[(2)]);
var inst_66882 = cljs.core.async.close_BANG_(out);
var state_66888__$1 = (function (){var statearr_66899 = state_66888;
(statearr_66899[(10)] = inst_66881);

return statearr_66899;
})();
var statearr_66900_67799 = state_66888__$1;
(statearr_66900_67799[(2)] = inst_66882);

(statearr_66900_67799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (3))){
var inst_66886 = (state_66888[(2)]);
var state_66888__$1 = state_66888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66888__$1,inst_66886);
} else {
if((state_val_66889 === (12))){
var inst_66845 = (state_66888[(8)]);
var inst_66864 = cljs.core.vec(inst_66845);
var state_66888__$1 = state_66888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66888__$1,(14),out,inst_66864);
} else {
if((state_val_66889 === (2))){
var state_66888__$1 = state_66888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66888__$1,(4),ch);
} else {
if((state_val_66889 === (11))){
var inst_66853 = (state_66888[(11)]);
var inst_66845 = (state_66888[(8)]);
var inst_66849 = (state_66888[(9)]);
var inst_66861 = inst_66845.push(inst_66849);
var tmp66901 = inst_66845;
var inst_66845__$1 = tmp66901;
var inst_66846 = inst_66853;
var state_66888__$1 = (function (){var statearr_66903 = state_66888;
(statearr_66903[(7)] = inst_66846);

(statearr_66903[(12)] = inst_66861);

(statearr_66903[(8)] = inst_66845__$1);

return statearr_66903;
})();
var statearr_66904_67800 = state_66888__$1;
(statearr_66904_67800[(2)] = null);

(statearr_66904_67800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (9))){
var inst_66846 = (state_66888[(7)]);
var inst_66857 = cljs.core.keyword_identical_QMARK_(inst_66846,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_66888__$1 = state_66888;
var statearr_66905_67805 = state_66888__$1;
(statearr_66905_67805[(2)] = inst_66857);

(statearr_66905_67805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (5))){
var inst_66846 = (state_66888[(7)]);
var inst_66853 = (state_66888[(11)]);
var inst_66854 = (state_66888[(13)]);
var inst_66849 = (state_66888[(9)]);
var inst_66853__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_66849) : f.call(null,inst_66849));
var inst_66854__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66853__$1,inst_66846);
var state_66888__$1 = (function (){var statearr_66906 = state_66888;
(statearr_66906[(11)] = inst_66853__$1);

(statearr_66906[(13)] = inst_66854__$1);

return statearr_66906;
})();
if(inst_66854__$1){
var statearr_66907_67806 = state_66888__$1;
(statearr_66907_67806[(1)] = (8));

} else {
var statearr_66908_67807 = state_66888__$1;
(statearr_66908_67807[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (14))){
var inst_66853 = (state_66888[(11)]);
var inst_66849 = (state_66888[(9)]);
var inst_66866 = (state_66888[(2)]);
var inst_66867 = [];
var inst_66868 = inst_66867.push(inst_66849);
var inst_66845 = inst_66867;
var inst_66846 = inst_66853;
var state_66888__$1 = (function (){var statearr_66912 = state_66888;
(statearr_66912[(7)] = inst_66846);

(statearr_66912[(8)] = inst_66845);

(statearr_66912[(14)] = inst_66866);

(statearr_66912[(15)] = inst_66868);

return statearr_66912;
})();
var statearr_66913_67809 = state_66888__$1;
(statearr_66913_67809[(2)] = null);

(statearr_66913_67809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (16))){
var state_66888__$1 = state_66888;
var statearr_66914_67810 = state_66888__$1;
(statearr_66914_67810[(2)] = null);

(statearr_66914_67810[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (10))){
var inst_66859 = (state_66888[(2)]);
var state_66888__$1 = state_66888;
if(cljs.core.truth_(inst_66859)){
var statearr_66915_67811 = state_66888__$1;
(statearr_66915_67811[(1)] = (11));

} else {
var statearr_66916_67812 = state_66888__$1;
(statearr_66916_67812[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (18))){
var inst_66878 = (state_66888[(2)]);
var state_66888__$1 = state_66888;
var statearr_66917_67813 = state_66888__$1;
(statearr_66917_67813[(2)] = inst_66878);

(statearr_66917_67813[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66889 === (8))){
var inst_66854 = (state_66888[(13)]);
var state_66888__$1 = state_66888;
var statearr_66918_67814 = state_66888__$1;
(statearr_66918_67814[(2)] = inst_66854);

(statearr_66918_67814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__64454__auto__ = null;
var cljs$core$async$state_machine__64454__auto____0 = (function (){
var statearr_66919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66919[(0)] = cljs$core$async$state_machine__64454__auto__);

(statearr_66919[(1)] = (1));

return statearr_66919;
});
var cljs$core$async$state_machine__64454__auto____1 = (function (state_66888){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_66888);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e66924){if((e66924 instanceof Object)){
var ex__64457__auto__ = e66924;
var statearr_66925_67815 = state_66888;
(statearr_66925_67815[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66924;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67816 = state_66888;
state_66888 = G__67816;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
cljs$core$async$state_machine__64454__auto__ = function(state_66888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64454__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64454__auto____1.call(this,state_66888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64454__auto____0;
cljs$core$async$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64454__auto____1;
return cljs$core$async$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_66926 = f__64750__auto__();
(statearr_66926[(6)] = c__64749__auto___67787);

return statearr_66926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
