goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__64601 = arguments.length;
switch (G__64601) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64602 = (function (f,blockable,meta64603){
this.f = f;
this.blockable = blockable;
this.meta64603 = meta64603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64604,meta64603__$1){
var self__ = this;
var _64604__$1 = this;
return (new cljs.core.async.t_cljs$core$async64602(self__.f,self__.blockable,meta64603__$1));
}));

(cljs.core.async.t_cljs$core$async64602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64604){
var self__ = this;
var _64604__$1 = this;
return self__.meta64603;
}));

(cljs.core.async.t_cljs$core$async64602.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64602.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64602.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async64602.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async64602.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta64603","meta64603",-921701757,null)], null);
}));

(cljs.core.async.t_cljs$core$async64602.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64602.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64602");

(cljs.core.async.t_cljs$core$async64602.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async64602");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64602.
 */
cljs.core.async.__GT_t_cljs$core$async64602 = (function cljs$core$async$__GT_t_cljs$core$async64602(f__$1,blockable__$1,meta64603){
return (new cljs.core.async.t_cljs$core$async64602(f__$1,blockable__$1,meta64603));
});

}

return (new cljs.core.async.t_cljs$core$async64602(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__64614 = arguments.length;
switch (G__64614) {
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
var G__64622 = arguments.length;
switch (G__64622) {
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
var G__64627 = arguments.length;
switch (G__64627) {
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
var val_67136 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_67136) : fn1.call(null,val_67136));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_67136) : fn1.call(null,val_67136));
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
var G__64633 = arguments.length;
switch (G__64633) {
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
var n__5633__auto___67147 = n;
var x_67148 = (0);
while(true){
if((x_67148 < n__5633__auto___67147)){
(a[x_67148] = (0));

var G__67149 = (x_67148 + (1));
x_67148 = G__67149;
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

var G__67150 = (i + (1));
i = G__67150;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64655 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64655 = (function (flag,meta64656){
this.flag = flag;
this.meta64656 = meta64656;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64655.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64657,meta64656__$1){
var self__ = this;
var _64657__$1 = this;
return (new cljs.core.async.t_cljs$core$async64655(self__.flag,meta64656__$1));
}));

(cljs.core.async.t_cljs$core$async64655.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64657){
var self__ = this;
var _64657__$1 = this;
return self__.meta64656;
}));

(cljs.core.async.t_cljs$core$async64655.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64655.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async64655.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64655.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async64655.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta64656","meta64656",724551994,null)], null);
}));

(cljs.core.async.t_cljs$core$async64655.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64655.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64655");

(cljs.core.async.t_cljs$core$async64655.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async64655");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64655.
 */
cljs.core.async.__GT_t_cljs$core$async64655 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async64655(flag__$1,meta64656){
return (new cljs.core.async.t_cljs$core$async64655(flag__$1,meta64656));
});

}

return (new cljs.core.async.t_cljs$core$async64655(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async64664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64664 = (function (flag,cb,meta64665){
this.flag = flag;
this.cb = cb;
this.meta64665 = meta64665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async64664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64666,meta64665__$1){
var self__ = this;
var _64666__$1 = this;
return (new cljs.core.async.t_cljs$core$async64664(self__.flag,self__.cb,meta64665__$1));
}));

(cljs.core.async.t_cljs$core$async64664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64666){
var self__ = this;
var _64666__$1 = this;
return self__.meta64665;
}));

(cljs.core.async.t_cljs$core$async64664.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async64664.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async64664.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async64664.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async64664.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta64665","meta64665",1358188836,null)], null);
}));

(cljs.core.async.t_cljs$core$async64664.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async64664.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64664");

(cljs.core.async.t_cljs$core$async64664.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async64664");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async64664.
 */
cljs.core.async.__GT_t_cljs$core$async64664 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async64664(flag__$1,cb__$1,meta64665){
return (new cljs.core.async.t_cljs$core$async64664(flag__$1,cb__$1,meta64665));
});

}

return (new cljs.core.async.t_cljs$core$async64664(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__64678_SHARP_){
var G__64685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64678_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__64685) : fret.call(null,G__64685));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__64679_SHARP_){
var G__64686 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__64679_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__64686) : fret.call(null,G__64686));
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
var G__67153 = (i + (1));
i = G__67153;
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
var len__5766__auto___67154 = arguments.length;
var i__5767__auto___67155 = (0);
while(true){
if((i__5767__auto___67155 < len__5766__auto___67154)){
args__5772__auto__.push((arguments[i__5767__auto___67155]));

var G__67156 = (i__5767__auto___67155 + (1));
i__5767__auto___67155 = G__67156;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__64696){
var map__64697 = p__64696;
var map__64697__$1 = cljs.core.__destructure_map(map__64697);
var opts = map__64697__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq64690){
var G__64691 = cljs.core.first(seq64690);
var seq64690__$1 = cljs.core.next(seq64690);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__64691,seq64690__$1);
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
var G__64707 = arguments.length;
switch (G__64707) {
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
var c__64537__auto___67158 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_64751){
var state_val_64752 = (state_64751[(1)]);
if((state_val_64752 === (7))){
var inst_64747 = (state_64751[(2)]);
var state_64751__$1 = state_64751;
var statearr_64753_67159 = state_64751__$1;
(statearr_64753_67159[(2)] = inst_64747);

(statearr_64753_67159[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (1))){
var state_64751__$1 = state_64751;
var statearr_64754_67160 = state_64751__$1;
(statearr_64754_67160[(2)] = null);

(statearr_64754_67160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (4))){
var inst_64726 = (state_64751[(7)]);
var inst_64726__$1 = (state_64751[(2)]);
var inst_64731 = (inst_64726__$1 == null);
var state_64751__$1 = (function (){var statearr_64755 = state_64751;
(statearr_64755[(7)] = inst_64726__$1);

return statearr_64755;
})();
if(cljs.core.truth_(inst_64731)){
var statearr_64756_67161 = state_64751__$1;
(statearr_64756_67161[(1)] = (5));

} else {
var statearr_64757_67162 = state_64751__$1;
(statearr_64757_67162[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (13))){
var state_64751__$1 = state_64751;
var statearr_64760_67163 = state_64751__$1;
(statearr_64760_67163[(2)] = null);

(statearr_64760_67163[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (6))){
var inst_64726 = (state_64751[(7)]);
var state_64751__$1 = state_64751;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64751__$1,(11),to,inst_64726);
} else {
if((state_val_64752 === (3))){
var inst_64749 = (state_64751[(2)]);
var state_64751__$1 = state_64751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64751__$1,inst_64749);
} else {
if((state_val_64752 === (12))){
var state_64751__$1 = state_64751;
var statearr_64761_67164 = state_64751__$1;
(statearr_64761_67164[(2)] = null);

(statearr_64761_67164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (2))){
var state_64751__$1 = state_64751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64751__$1,(4),from);
} else {
if((state_val_64752 === (11))){
var inst_64740 = (state_64751[(2)]);
var state_64751__$1 = state_64751;
if(cljs.core.truth_(inst_64740)){
var statearr_64763_67166 = state_64751__$1;
(statearr_64763_67166[(1)] = (12));

} else {
var statearr_64764_67167 = state_64751__$1;
(statearr_64764_67167[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (9))){
var state_64751__$1 = state_64751;
var statearr_64765_67168 = state_64751__$1;
(statearr_64765_67168[(2)] = null);

(statearr_64765_67168[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (5))){
var state_64751__$1 = state_64751;
if(cljs.core.truth_(close_QMARK_)){
var statearr_64767_67169 = state_64751__$1;
(statearr_64767_67169[(1)] = (8));

} else {
var statearr_64768_67171 = state_64751__$1;
(statearr_64768_67171[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (14))){
var inst_64745 = (state_64751[(2)]);
var state_64751__$1 = state_64751;
var statearr_64777_67172 = state_64751__$1;
(statearr_64777_67172[(2)] = inst_64745);

(statearr_64777_67172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (10))){
var inst_64737 = (state_64751[(2)]);
var state_64751__$1 = state_64751;
var statearr_64781_67174 = state_64751__$1;
(statearr_64781_67174[(2)] = inst_64737);

(statearr_64781_67174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64752 === (8))){
var inst_64734 = cljs.core.async.close_BANG_(to);
var state_64751__$1 = state_64751;
var statearr_64787_67175 = state_64751__$1;
(statearr_64787_67175[(2)] = inst_64734);

(statearr_64787_67175[(1)] = (10));


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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_64793 = [null,null,null,null,null,null,null,null];
(statearr_64793[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_64793[(1)] = (1));

return statearr_64793;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_64751){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_64751);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e64796){if((e64796 instanceof Object)){
var ex__64316__auto__ = e64796;
var statearr_64798_67180 = state_64751;
(statearr_64798_67180[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64796;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67182 = state_64751;
state_64751 = G__67182;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_64751){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_64751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_64806 = f__64538__auto__();
(statearr_64806[(6)] = c__64537__auto___67158);

return statearr_64806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
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
var process__$1 = (function (p__64820){
var vec__64823 = p__64820;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64823,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64823,(1),null);
var job = vec__64823;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__64537__auto___67185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_64835){
var state_val_64836 = (state_64835[(1)]);
if((state_val_64836 === (1))){
var state_64835__$1 = state_64835;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_64835__$1,(2),res,v);
} else {
if((state_val_64836 === (2))){
var inst_64832 = (state_64835[(2)]);
var inst_64833 = cljs.core.async.close_BANG_(res);
var state_64835__$1 = (function (){var statearr_64847 = state_64835;
(statearr_64847[(7)] = inst_64832);

return statearr_64847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_64835__$1,inst_64833);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0 = (function (){
var statearr_64855 = [null,null,null,null,null,null,null,null];
(statearr_64855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__);

(statearr_64855[(1)] = (1));

return statearr_64855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1 = (function (state_64835){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_64835);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e64859){if((e64859 instanceof Object)){
var ex__64316__auto__ = e64859;
var statearr_64861_67189 = state_64835;
(statearr_64861_67189[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64835);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64859;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67190 = state_64835;
state_64835 = G__67190;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = function(state_64835){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1.call(this,state_64835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_64867 = f__64538__auto__();
(statearr_64867[(6)] = c__64537__auto___67185);

return statearr_64867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__64870){
var vec__64871 = p__64870;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64871,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64871,(1),null);
var job = vec__64871;
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
var n__5633__auto___67192 = n;
var __67193 = (0);
while(true){
if((__67193 < n__5633__auto___67192)){
var G__64874_67195 = type;
var G__64874_67196__$1 = (((G__64874_67195 instanceof cljs.core.Keyword))?G__64874_67195.fqn:null);
switch (G__64874_67196__$1) {
case "compute":
var c__64537__auto___67198 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__67193,c__64537__auto___67198,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async){
return (function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = ((function (__67193,c__64537__auto___67198,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async){
return (function (state_64889){
var state_val_64890 = (state_64889[(1)]);
if((state_val_64890 === (1))){
var state_64889__$1 = state_64889;
var statearr_64894_67199 = state_64889__$1;
(statearr_64894_67199[(2)] = null);

(statearr_64894_67199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64890 === (2))){
var state_64889__$1 = state_64889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64889__$1,(4),jobs);
} else {
if((state_val_64890 === (3))){
var inst_64887 = (state_64889[(2)]);
var state_64889__$1 = state_64889;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64889__$1,inst_64887);
} else {
if((state_val_64890 === (4))){
var inst_64878 = (state_64889[(2)]);
var inst_64879 = process__$1(inst_64878);
var state_64889__$1 = state_64889;
if(cljs.core.truth_(inst_64879)){
var statearr_64901_67200 = state_64889__$1;
(statearr_64901_67200[(1)] = (5));

} else {
var statearr_64902_67201 = state_64889__$1;
(statearr_64902_67201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64890 === (5))){
var state_64889__$1 = state_64889;
var statearr_64906_67202 = state_64889__$1;
(statearr_64906_67202[(2)] = null);

(statearr_64906_67202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64890 === (6))){
var state_64889__$1 = state_64889;
var statearr_64907_67203 = state_64889__$1;
(statearr_64907_67203[(2)] = null);

(statearr_64907_67203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64890 === (7))){
var inst_64885 = (state_64889[(2)]);
var state_64889__$1 = state_64889;
var statearr_64908_67204 = state_64889__$1;
(statearr_64908_67204[(2)] = inst_64885);

(statearr_64908_67204[(1)] = (3));


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
});})(__67193,c__64537__auto___67198,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async))
;
return ((function (__67193,switch__64312__auto__,c__64537__auto___67198,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0 = (function (){
var statearr_64909 = [null,null,null,null,null,null,null];
(statearr_64909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__);

(statearr_64909[(1)] = (1));

return statearr_64909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1 = (function (state_64889){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_64889);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e64911){if((e64911 instanceof Object)){
var ex__64316__auto__ = e64911;
var statearr_64912_67207 = state_64889;
(statearr_64912_67207[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64889);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64911;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67208 = state_64889;
state_64889 = G__67208;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = function(state_64889){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1.call(this,state_64889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__;
})()
;})(__67193,switch__64312__auto__,c__64537__auto___67198,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async))
})();
var state__64539__auto__ = (function (){var statearr_64913 = f__64538__auto__();
(statearr_64913[(6)] = c__64537__auto___67198);

return statearr_64913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
});})(__67193,c__64537__auto___67198,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async))
);


break;
case "async":
var c__64537__auto___67209 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__67193,c__64537__auto___67209,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async){
return (function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = ((function (__67193,c__64537__auto___67209,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async){
return (function (state_64934){
var state_val_64935 = (state_64934[(1)]);
if((state_val_64935 === (1))){
var state_64934__$1 = state_64934;
var statearr_64936_67210 = state_64934__$1;
(statearr_64936_67210[(2)] = null);

(statearr_64936_67210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64935 === (2))){
var state_64934__$1 = state_64934;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_64934__$1,(4),jobs);
} else {
if((state_val_64935 === (3))){
var inst_64932 = (state_64934[(2)]);
var state_64934__$1 = state_64934;
return cljs.core.async.impl.ioc_helpers.return_chan(state_64934__$1,inst_64932);
} else {
if((state_val_64935 === (4))){
var inst_64920 = (state_64934[(2)]);
var inst_64921 = async(inst_64920);
var state_64934__$1 = state_64934;
if(cljs.core.truth_(inst_64921)){
var statearr_64938_67211 = state_64934__$1;
(statearr_64938_67211[(1)] = (5));

} else {
var statearr_64939_67212 = state_64934__$1;
(statearr_64939_67212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64935 === (5))){
var state_64934__$1 = state_64934;
var statearr_64941_67213 = state_64934__$1;
(statearr_64941_67213[(2)] = null);

(statearr_64941_67213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64935 === (6))){
var state_64934__$1 = state_64934;
var statearr_64945_67214 = state_64934__$1;
(statearr_64945_67214[(2)] = null);

(statearr_64945_67214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64935 === (7))){
var inst_64930 = (state_64934[(2)]);
var state_64934__$1 = state_64934;
var statearr_64946_67215 = state_64934__$1;
(statearr_64946_67215[(2)] = inst_64930);

(statearr_64946_67215[(1)] = (3));


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
});})(__67193,c__64537__auto___67209,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async))
;
return ((function (__67193,switch__64312__auto__,c__64537__auto___67209,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0 = (function (){
var statearr_64947 = [null,null,null,null,null,null,null];
(statearr_64947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__);

(statearr_64947[(1)] = (1));

return statearr_64947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1 = (function (state_64934){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_64934);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e64948){if((e64948 instanceof Object)){
var ex__64316__auto__ = e64948;
var statearr_64949_67220 = state_64934;
(statearr_64949_67220[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_64934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67221 = state_64934;
state_64934 = G__67221;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = function(state_64934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1.call(this,state_64934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__;
})()
;})(__67193,switch__64312__auto__,c__64537__auto___67209,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async))
})();
var state__64539__auto__ = (function (){var statearr_64953 = f__64538__auto__();
(statearr_64953[(6)] = c__64537__auto___67209);

return statearr_64953;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
});})(__67193,c__64537__auto___67209,G__64874_67195,G__64874_67196__$1,n__5633__auto___67192,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64874_67196__$1)].join('')));

}

var G__67223 = (__67193 + (1));
__67193 = G__67223;
continue;
} else {
}
break;
}

var c__64537__auto___67224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_65024){
var state_val_65025 = (state_65024[(1)]);
if((state_val_65025 === (7))){
var inst_65019 = (state_65024[(2)]);
var state_65024__$1 = state_65024;
var statearr_65029_67225 = state_65024__$1;
(statearr_65029_67225[(2)] = inst_65019);

(statearr_65029_67225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65025 === (1))){
var state_65024__$1 = state_65024;
var statearr_65030_67226 = state_65024__$1;
(statearr_65030_67226[(2)] = null);

(statearr_65030_67226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65025 === (4))){
var inst_64956 = (state_65024[(7)]);
var inst_64956__$1 = (state_65024[(2)]);
var inst_64957 = (inst_64956__$1 == null);
var state_65024__$1 = (function (){var statearr_65036 = state_65024;
(statearr_65036[(7)] = inst_64956__$1);

return statearr_65036;
})();
if(cljs.core.truth_(inst_64957)){
var statearr_65039_67227 = state_65024__$1;
(statearr_65039_67227[(1)] = (5));

} else {
var statearr_65040_67228 = state_65024__$1;
(statearr_65040_67228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65025 === (6))){
var inst_64982 = (state_65024[(8)]);
var inst_64956 = (state_65024[(7)]);
var inst_64982__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_65010 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_65011 = [inst_64956,inst_64982__$1];
var inst_65012 = (new cljs.core.PersistentVector(null,2,(5),inst_65010,inst_65011,null));
var state_65024__$1 = (function (){var statearr_65046 = state_65024;
(statearr_65046[(8)] = inst_64982__$1);

return statearr_65046;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65024__$1,(8),jobs,inst_65012);
} else {
if((state_val_65025 === (3))){
var inst_65021 = (state_65024[(2)]);
var state_65024__$1 = state_65024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65024__$1,inst_65021);
} else {
if((state_val_65025 === (2))){
var state_65024__$1 = state_65024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65024__$1,(4),from);
} else {
if((state_val_65025 === (9))){
var inst_65016 = (state_65024[(2)]);
var state_65024__$1 = (function (){var statearr_65047 = state_65024;
(statearr_65047[(9)] = inst_65016);

return statearr_65047;
})();
var statearr_65048_67236 = state_65024__$1;
(statearr_65048_67236[(2)] = null);

(statearr_65048_67236[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65025 === (5))){
var inst_64959 = cljs.core.async.close_BANG_(jobs);
var state_65024__$1 = state_65024;
var statearr_65058_67240 = state_65024__$1;
(statearr_65058_67240[(2)] = inst_64959);

(statearr_65058_67240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65025 === (8))){
var inst_64982 = (state_65024[(8)]);
var inst_65014 = (state_65024[(2)]);
var state_65024__$1 = (function (){var statearr_65073 = state_65024;
(statearr_65073[(10)] = inst_65014);

return statearr_65073;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65024__$1,(9),results,inst_64982);
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
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0 = (function (){
var statearr_65082 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65082[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__);

(statearr_65082[(1)] = (1));

return statearr_65082;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1 = (function (state_65024){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_65024);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e65107){if((e65107 instanceof Object)){
var ex__64316__auto__ = e65107;
var statearr_65108_67246 = state_65024;
(statearr_65108_67246[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65024);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65107;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67247 = state_65024;
state_65024 = G__67247;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = function(state_65024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1.call(this,state_65024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_65109 = f__64538__auto__();
(statearr_65109[(6)] = c__64537__auto___67224);

return statearr_65109;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));


var c__64537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_65169){
var state_val_65170 = (state_65169[(1)]);
if((state_val_65170 === (7))){
var inst_65165 = (state_65169[(2)]);
var state_65169__$1 = state_65169;
var statearr_65189_67248 = state_65169__$1;
(statearr_65189_67248[(2)] = inst_65165);

(statearr_65189_67248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (20))){
var state_65169__$1 = state_65169;
var statearr_65190_67256 = state_65169__$1;
(statearr_65190_67256[(2)] = null);

(statearr_65190_67256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (1))){
var state_65169__$1 = state_65169;
var statearr_65191_67257 = state_65169__$1;
(statearr_65191_67257[(2)] = null);

(statearr_65191_67257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (4))){
var inst_65124 = (state_65169[(7)]);
var inst_65124__$1 = (state_65169[(2)]);
var inst_65130 = (inst_65124__$1 == null);
var state_65169__$1 = (function (){var statearr_65192 = state_65169;
(statearr_65192[(7)] = inst_65124__$1);

return statearr_65192;
})();
if(cljs.core.truth_(inst_65130)){
var statearr_65193_67261 = state_65169__$1;
(statearr_65193_67261[(1)] = (5));

} else {
var statearr_65194_67262 = state_65169__$1;
(statearr_65194_67262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (15))){
var inst_65147 = (state_65169[(8)]);
var state_65169__$1 = state_65169;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65169__$1,(18),to,inst_65147);
} else {
if((state_val_65170 === (21))){
var inst_65160 = (state_65169[(2)]);
var state_65169__$1 = state_65169;
var statearr_65199_67263 = state_65169__$1;
(statearr_65199_67263[(2)] = inst_65160);

(statearr_65199_67263[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (13))){
var inst_65162 = (state_65169[(2)]);
var state_65169__$1 = (function (){var statearr_65209 = state_65169;
(statearr_65209[(9)] = inst_65162);

return statearr_65209;
})();
var statearr_65210_67265 = state_65169__$1;
(statearr_65210_67265[(2)] = null);

(statearr_65210_67265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (6))){
var inst_65124 = (state_65169[(7)]);
var state_65169__$1 = state_65169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65169__$1,(11),inst_65124);
} else {
if((state_val_65170 === (17))){
var inst_65155 = (state_65169[(2)]);
var state_65169__$1 = state_65169;
if(cljs.core.truth_(inst_65155)){
var statearr_65212_67269 = state_65169__$1;
(statearr_65212_67269[(1)] = (19));

} else {
var statearr_65213_67270 = state_65169__$1;
(statearr_65213_67270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (3))){
var inst_65167 = (state_65169[(2)]);
var state_65169__$1 = state_65169;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65169__$1,inst_65167);
} else {
if((state_val_65170 === (12))){
var inst_65144 = (state_65169[(10)]);
var state_65169__$1 = state_65169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65169__$1,(14),inst_65144);
} else {
if((state_val_65170 === (2))){
var state_65169__$1 = state_65169;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65169__$1,(4),results);
} else {
if((state_val_65170 === (19))){
var state_65169__$1 = state_65169;
var statearr_65214_67278 = state_65169__$1;
(statearr_65214_67278[(2)] = null);

(statearr_65214_67278[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (11))){
var inst_65144 = (state_65169[(2)]);
var state_65169__$1 = (function (){var statearr_65215 = state_65169;
(statearr_65215[(10)] = inst_65144);

return statearr_65215;
})();
var statearr_65216_67282 = state_65169__$1;
(statearr_65216_67282[(2)] = null);

(statearr_65216_67282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (9))){
var state_65169__$1 = state_65169;
var statearr_65217_67283 = state_65169__$1;
(statearr_65217_67283[(2)] = null);

(statearr_65217_67283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (5))){
var state_65169__$1 = state_65169;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65218_67288 = state_65169__$1;
(statearr_65218_67288[(1)] = (8));

} else {
var statearr_65219_67289 = state_65169__$1;
(statearr_65219_67289[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (14))){
var inst_65147 = (state_65169[(8)]);
var inst_65149 = (state_65169[(11)]);
var inst_65147__$1 = (state_65169[(2)]);
var inst_65148 = (inst_65147__$1 == null);
var inst_65149__$1 = cljs.core.not(inst_65148);
var state_65169__$1 = (function (){var statearr_65226 = state_65169;
(statearr_65226[(8)] = inst_65147__$1);

(statearr_65226[(11)] = inst_65149__$1);

return statearr_65226;
})();
if(inst_65149__$1){
var statearr_65227_67290 = state_65169__$1;
(statearr_65227_67290[(1)] = (15));

} else {
var statearr_65229_67291 = state_65169__$1;
(statearr_65229_67291[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (16))){
var inst_65149 = (state_65169[(11)]);
var state_65169__$1 = state_65169;
var statearr_65230_67292 = state_65169__$1;
(statearr_65230_67292[(2)] = inst_65149);

(statearr_65230_67292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (10))){
var inst_65141 = (state_65169[(2)]);
var state_65169__$1 = state_65169;
var statearr_65231_67297 = state_65169__$1;
(statearr_65231_67297[(2)] = inst_65141);

(statearr_65231_67297[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (18))){
var inst_65152 = (state_65169[(2)]);
var state_65169__$1 = state_65169;
var statearr_65234_67298 = state_65169__$1;
(statearr_65234_67298[(2)] = inst_65152);

(statearr_65234_67298[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65170 === (8))){
var inst_65138 = cljs.core.async.close_BANG_(to);
var state_65169__$1 = state_65169;
var statearr_65238_67301 = state_65169__$1;
(statearr_65238_67301[(2)] = inst_65138);

(statearr_65238_67301[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0 = (function (){
var statearr_65239 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65239[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__);

(statearr_65239[(1)] = (1));

return statearr_65239;
});
var cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1 = (function (state_65169){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_65169);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e65242){if((e65242 instanceof Object)){
var ex__64316__auto__ = e65242;
var statearr_65243_67303 = state_65169;
(statearr_65243_67303[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65169);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65242;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67304 = state_65169;
state_65169 = G__67304;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__ = function(state_65169){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1.call(this,state_65169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__64313__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_65244 = f__64538__auto__();
(statearr_65244[(6)] = c__64537__auto__);

return statearr_65244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));

return c__64537__auto__;
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
var G__65249 = arguments.length;
switch (G__65249) {
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
var G__65259 = arguments.length;
switch (G__65259) {
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
var G__65268 = arguments.length;
switch (G__65268) {
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
var c__64537__auto___67309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_65300){
var state_val_65301 = (state_65300[(1)]);
if((state_val_65301 === (7))){
var inst_65296 = (state_65300[(2)]);
var state_65300__$1 = state_65300;
var statearr_65302_67311 = state_65300__$1;
(statearr_65302_67311[(2)] = inst_65296);

(statearr_65302_67311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (1))){
var state_65300__$1 = state_65300;
var statearr_65303_67312 = state_65300__$1;
(statearr_65303_67312[(2)] = null);

(statearr_65303_67312[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (4))){
var inst_65276 = (state_65300[(7)]);
var inst_65276__$1 = (state_65300[(2)]);
var inst_65277 = (inst_65276__$1 == null);
var state_65300__$1 = (function (){var statearr_65308 = state_65300;
(statearr_65308[(7)] = inst_65276__$1);

return statearr_65308;
})();
if(cljs.core.truth_(inst_65277)){
var statearr_65309_67314 = state_65300__$1;
(statearr_65309_67314[(1)] = (5));

} else {
var statearr_65310_67315 = state_65300__$1;
(statearr_65310_67315[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (13))){
var state_65300__$1 = state_65300;
var statearr_65311_67316 = state_65300__$1;
(statearr_65311_67316[(2)] = null);

(statearr_65311_67316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (6))){
var inst_65276 = (state_65300[(7)]);
var inst_65282 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_65276) : p.call(null,inst_65276));
var state_65300__$1 = state_65300;
if(cljs.core.truth_(inst_65282)){
var statearr_65318_67317 = state_65300__$1;
(statearr_65318_67317[(1)] = (9));

} else {
var statearr_65319_67318 = state_65300__$1;
(statearr_65319_67318[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (3))){
var inst_65298 = (state_65300[(2)]);
var state_65300__$1 = state_65300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65300__$1,inst_65298);
} else {
if((state_val_65301 === (12))){
var state_65300__$1 = state_65300;
var statearr_65323_67319 = state_65300__$1;
(statearr_65323_67319[(2)] = null);

(statearr_65323_67319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (2))){
var state_65300__$1 = state_65300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65300__$1,(4),ch);
} else {
if((state_val_65301 === (11))){
var inst_65276 = (state_65300[(7)]);
var inst_65287 = (state_65300[(2)]);
var state_65300__$1 = state_65300;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65300__$1,(8),inst_65287,inst_65276);
} else {
if((state_val_65301 === (9))){
var state_65300__$1 = state_65300;
var statearr_65325_67320 = state_65300__$1;
(statearr_65325_67320[(2)] = tc);

(statearr_65325_67320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (5))){
var inst_65279 = cljs.core.async.close_BANG_(tc);
var inst_65280 = cljs.core.async.close_BANG_(fc);
var state_65300__$1 = (function (){var statearr_65328 = state_65300;
(statearr_65328[(8)] = inst_65279);

return statearr_65328;
})();
var statearr_65331_67321 = state_65300__$1;
(statearr_65331_67321[(2)] = inst_65280);

(statearr_65331_67321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (14))){
var inst_65294 = (state_65300[(2)]);
var state_65300__$1 = state_65300;
var statearr_65333_67322 = state_65300__$1;
(statearr_65333_67322[(2)] = inst_65294);

(statearr_65333_67322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (10))){
var state_65300__$1 = state_65300;
var statearr_65334_67323 = state_65300__$1;
(statearr_65334_67323[(2)] = fc);

(statearr_65334_67323[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65301 === (8))){
var inst_65289 = (state_65300[(2)]);
var state_65300__$1 = state_65300;
if(cljs.core.truth_(inst_65289)){
var statearr_65335_67324 = state_65300__$1;
(statearr_65335_67324[(1)] = (12));

} else {
var statearr_65336_67325 = state_65300__$1;
(statearr_65336_67325[(1)] = (13));

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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_65343 = [null,null,null,null,null,null,null,null,null];
(statearr_65343[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_65343[(1)] = (1));

return statearr_65343;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_65300){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_65300);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e65345){if((e65345 instanceof Object)){
var ex__64316__auto__ = e65345;
var statearr_65346_67326 = state_65300;
(statearr_65346_67326[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67327 = state_65300;
state_65300 = G__67327;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_65300){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_65300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_65348 = f__64538__auto__();
(statearr_65348[(6)] = c__64537__auto___67309);

return statearr_65348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
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
var c__64537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_65395){
var state_val_65396 = (state_65395[(1)]);
if((state_val_65396 === (7))){
var inst_65391 = (state_65395[(2)]);
var state_65395__$1 = state_65395;
var statearr_65398_67332 = state_65395__$1;
(statearr_65398_67332[(2)] = inst_65391);

(statearr_65398_67332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65396 === (1))){
var inst_65375 = init;
var state_65395__$1 = (function (){var statearr_65400 = state_65395;
(statearr_65400[(7)] = inst_65375);

return statearr_65400;
})();
var statearr_65401_67333 = state_65395__$1;
(statearr_65401_67333[(2)] = null);

(statearr_65401_67333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65396 === (4))){
var inst_65378 = (state_65395[(8)]);
var inst_65378__$1 = (state_65395[(2)]);
var inst_65379 = (inst_65378__$1 == null);
var state_65395__$1 = (function (){var statearr_65403 = state_65395;
(statearr_65403[(8)] = inst_65378__$1);

return statearr_65403;
})();
if(cljs.core.truth_(inst_65379)){
var statearr_65404_67337 = state_65395__$1;
(statearr_65404_67337[(1)] = (5));

} else {
var statearr_65406_67338 = state_65395__$1;
(statearr_65406_67338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65396 === (6))){
var inst_65378 = (state_65395[(8)]);
var inst_65375 = (state_65395[(7)]);
var inst_65382 = (state_65395[(9)]);
var inst_65382__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_65375,inst_65378) : f.call(null,inst_65375,inst_65378));
var inst_65383 = cljs.core.reduced_QMARK_(inst_65382__$1);
var state_65395__$1 = (function (){var statearr_65407 = state_65395;
(statearr_65407[(9)] = inst_65382__$1);

return statearr_65407;
})();
if(inst_65383){
var statearr_65408_67339 = state_65395__$1;
(statearr_65408_67339[(1)] = (8));

} else {
var statearr_65409_67340 = state_65395__$1;
(statearr_65409_67340[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65396 === (3))){
var inst_65393 = (state_65395[(2)]);
var state_65395__$1 = state_65395;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65395__$1,inst_65393);
} else {
if((state_val_65396 === (2))){
var state_65395__$1 = state_65395;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65395__$1,(4),ch);
} else {
if((state_val_65396 === (9))){
var inst_65382 = (state_65395[(9)]);
var inst_65375 = inst_65382;
var state_65395__$1 = (function (){var statearr_65425 = state_65395;
(statearr_65425[(7)] = inst_65375);

return statearr_65425;
})();
var statearr_65430_67344 = state_65395__$1;
(statearr_65430_67344[(2)] = null);

(statearr_65430_67344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65396 === (5))){
var inst_65375 = (state_65395[(7)]);
var state_65395__$1 = state_65395;
var statearr_65435_67345 = state_65395__$1;
(statearr_65435_67345[(2)] = inst_65375);

(statearr_65435_67345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65396 === (10))){
var inst_65389 = (state_65395[(2)]);
var state_65395__$1 = state_65395;
var statearr_65436_67346 = state_65395__$1;
(statearr_65436_67346[(2)] = inst_65389);

(statearr_65436_67346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65396 === (8))){
var inst_65382 = (state_65395[(9)]);
var inst_65385 = cljs.core.deref(inst_65382);
var state_65395__$1 = state_65395;
var statearr_65437_67352 = state_65395__$1;
(statearr_65437_67352[(2)] = inst_65385);

(statearr_65437_67352[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__64313__auto__ = null;
var cljs$core$async$reduce_$_state_machine__64313__auto____0 = (function (){
var statearr_65438 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65438[(0)] = cljs$core$async$reduce_$_state_machine__64313__auto__);

(statearr_65438[(1)] = (1));

return statearr_65438;
});
var cljs$core$async$reduce_$_state_machine__64313__auto____1 = (function (state_65395){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_65395);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e65440){if((e65440 instanceof Object)){
var ex__64316__auto__ = e65440;
var statearr_65441_67353 = state_65395;
(statearr_65441_67353[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65395);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67354 = state_65395;
state_65395 = G__67354;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__64313__auto__ = function(state_65395){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__64313__auto____1.call(this,state_65395);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__64313__auto____0;
cljs$core$async$reduce_$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__64313__auto____1;
return cljs$core$async$reduce_$_state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_65442 = f__64538__auto__();
(statearr_65442[(6)] = c__64537__auto__);

return statearr_65442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));

return c__64537__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__64537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_65452){
var state_val_65453 = (state_65452[(1)]);
if((state_val_65453 === (1))){
var inst_65447 = cljs.core.async.reduce(f__$1,init,ch);
var state_65452__$1 = state_65452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65452__$1,(2),inst_65447);
} else {
if((state_val_65453 === (2))){
var inst_65449 = (state_65452[(2)]);
var inst_65450 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_65449) : f__$1.call(null,inst_65449));
var state_65452__$1 = state_65452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65452__$1,inst_65450);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__64313__auto__ = null;
var cljs$core$async$transduce_$_state_machine__64313__auto____0 = (function (){
var statearr_65456 = [null,null,null,null,null,null,null];
(statearr_65456[(0)] = cljs$core$async$transduce_$_state_machine__64313__auto__);

(statearr_65456[(1)] = (1));

return statearr_65456;
});
var cljs$core$async$transduce_$_state_machine__64313__auto____1 = (function (state_65452){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_65452);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e65457){if((e65457 instanceof Object)){
var ex__64316__auto__ = e65457;
var statearr_65458_67373 = state_65452;
(statearr_65458_67373[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65457;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67374 = state_65452;
state_65452 = G__67374;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__64313__auto__ = function(state_65452){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__64313__auto____1.call(this,state_65452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__64313__auto____0;
cljs$core$async$transduce_$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__64313__auto____1;
return cljs$core$async$transduce_$_state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_65459 = f__64538__auto__();
(statearr_65459[(6)] = c__64537__auto__);

return statearr_65459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));

return c__64537__auto__;
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
var G__65461 = arguments.length;
switch (G__65461) {
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
var c__64537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_65488){
var state_val_65489 = (state_65488[(1)]);
if((state_val_65489 === (7))){
var inst_65470 = (state_65488[(2)]);
var state_65488__$1 = state_65488;
var statearr_65490_67386 = state_65488__$1;
(statearr_65490_67386[(2)] = inst_65470);

(statearr_65490_67386[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (1))){
var inst_65463 = cljs.core.seq(coll);
var inst_65464 = inst_65463;
var state_65488__$1 = (function (){var statearr_65491 = state_65488;
(statearr_65491[(7)] = inst_65464);

return statearr_65491;
})();
var statearr_65492_67389 = state_65488__$1;
(statearr_65492_67389[(2)] = null);

(statearr_65492_67389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (4))){
var inst_65464 = (state_65488[(7)]);
var inst_65467 = cljs.core.first(inst_65464);
var state_65488__$1 = state_65488;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65488__$1,(7),ch,inst_65467);
} else {
if((state_val_65489 === (13))){
var inst_65482 = (state_65488[(2)]);
var state_65488__$1 = state_65488;
var statearr_65493_67393 = state_65488__$1;
(statearr_65493_67393[(2)] = inst_65482);

(statearr_65493_67393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (6))){
var inst_65473 = (state_65488[(2)]);
var state_65488__$1 = state_65488;
if(cljs.core.truth_(inst_65473)){
var statearr_65495_67394 = state_65488__$1;
(statearr_65495_67394[(1)] = (8));

} else {
var statearr_65496_67395 = state_65488__$1;
(statearr_65496_67395[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (3))){
var inst_65486 = (state_65488[(2)]);
var state_65488__$1 = state_65488;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65488__$1,inst_65486);
} else {
if((state_val_65489 === (12))){
var state_65488__$1 = state_65488;
var statearr_65497_67396 = state_65488__$1;
(statearr_65497_67396[(2)] = null);

(statearr_65497_67396[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (2))){
var inst_65464 = (state_65488[(7)]);
var state_65488__$1 = state_65488;
if(cljs.core.truth_(inst_65464)){
var statearr_65498_67398 = state_65488__$1;
(statearr_65498_67398[(1)] = (4));

} else {
var statearr_65499_67401 = state_65488__$1;
(statearr_65499_67401[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (11))){
var inst_65479 = cljs.core.async.close_BANG_(ch);
var state_65488__$1 = state_65488;
var statearr_65500_67402 = state_65488__$1;
(statearr_65500_67402[(2)] = inst_65479);

(statearr_65500_67402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (9))){
var state_65488__$1 = state_65488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_65501_67403 = state_65488__$1;
(statearr_65501_67403[(1)] = (11));

} else {
var statearr_65502_67404 = state_65488__$1;
(statearr_65502_67404[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (5))){
var inst_65464 = (state_65488[(7)]);
var state_65488__$1 = state_65488;
var statearr_65503_67405 = state_65488__$1;
(statearr_65503_67405[(2)] = inst_65464);

(statearr_65503_67405[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (10))){
var inst_65484 = (state_65488[(2)]);
var state_65488__$1 = state_65488;
var statearr_65505_67406 = state_65488__$1;
(statearr_65505_67406[(2)] = inst_65484);

(statearr_65505_67406[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65489 === (8))){
var inst_65464 = (state_65488[(7)]);
var inst_65475 = cljs.core.next(inst_65464);
var inst_65464__$1 = inst_65475;
var state_65488__$1 = (function (){var statearr_65506 = state_65488;
(statearr_65506[(7)] = inst_65464__$1);

return statearr_65506;
})();
var statearr_65507_67407 = state_65488__$1;
(statearr_65507_67407[(2)] = null);

(statearr_65507_67407[(1)] = (2));


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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_65508 = [null,null,null,null,null,null,null,null];
(statearr_65508[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_65508[(1)] = (1));

return statearr_65508;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_65488){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_65488);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e65509){if((e65509 instanceof Object)){
var ex__64316__auto__ = e65509;
var statearr_65510_67409 = state_65488;
(statearr_65510_67409[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67410 = state_65488;
state_65488 = G__67410;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_65488){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_65488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_65511 = f__64538__auto__();
(statearr_65511[(6)] = c__64537__auto__);

return statearr_65511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));

return c__64537__auto__;
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

var cljs$core$async$Mux$muxch_STAR_$dyn_67411 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_67411(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_67412 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_67412(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_67413 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_67413(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_67416 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_67416(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65515 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65515 = (function (ch,cs,meta65516){
this.ch = ch;
this.cs = cs;
this.meta65516 = meta65516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65517,meta65516__$1){
var self__ = this;
var _65517__$1 = this;
return (new cljs.core.async.t_cljs$core$async65515(self__.ch,self__.cs,meta65516__$1));
}));

(cljs.core.async.t_cljs$core$async65515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65517){
var self__ = this;
var _65517__$1 = this;
return self__.meta65516;
}));

(cljs.core.async.t_cljs$core$async65515.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async65515.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65515.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async65515.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async65515.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async65515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta65516","meta65516",-2108954139,null)], null);
}));

(cljs.core.async.t_cljs$core$async65515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65515");

(cljs.core.async.t_cljs$core$async65515.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async65515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65515.
 */
cljs.core.async.__GT_t_cljs$core$async65515 = (function cljs$core$async$mult_$___GT_t_cljs$core$async65515(ch__$1,cs__$1,meta65516){
return (new cljs.core.async.t_cljs$core$async65515(ch__$1,cs__$1,meta65516));
});

}

return (new cljs.core.async.t_cljs$core$async65515(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__64537__auto___67418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_65656){
var state_val_65657 = (state_65656[(1)]);
if((state_val_65657 === (7))){
var inst_65652 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
var statearr_65659_67419 = state_65656__$1;
(statearr_65659_67419[(2)] = inst_65652);

(statearr_65659_67419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (20))){
var inst_65554 = (state_65656[(7)]);
var inst_65566 = cljs.core.first(inst_65554);
var inst_65568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65566,(0),null);
var inst_65569 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65566,(1),null);
var state_65656__$1 = (function (){var statearr_65660 = state_65656;
(statearr_65660[(8)] = inst_65568);

return statearr_65660;
})();
if(cljs.core.truth_(inst_65569)){
var statearr_65661_67431 = state_65656__$1;
(statearr_65661_67431[(1)] = (22));

} else {
var statearr_65662_67432 = state_65656__$1;
(statearr_65662_67432[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (27))){
var inst_65599 = (state_65656[(9)]);
var inst_65604 = (state_65656[(10)]);
var inst_65523 = (state_65656[(11)]);
var inst_65597 = (state_65656[(12)]);
var inst_65604__$1 = cljs.core._nth(inst_65597,inst_65599);
var inst_65605 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_65604__$1,inst_65523,done);
var state_65656__$1 = (function (){var statearr_65664 = state_65656;
(statearr_65664[(10)] = inst_65604__$1);

return statearr_65664;
})();
if(cljs.core.truth_(inst_65605)){
var statearr_65665_67436 = state_65656__$1;
(statearr_65665_67436[(1)] = (30));

} else {
var statearr_65666_67437 = state_65656__$1;
(statearr_65666_67437[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (1))){
var state_65656__$1 = state_65656;
var statearr_65667_67438 = state_65656__$1;
(statearr_65667_67438[(2)] = null);

(statearr_65667_67438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (24))){
var inst_65554 = (state_65656[(7)]);
var inst_65574 = (state_65656[(2)]);
var inst_65575 = cljs.core.next(inst_65554);
var inst_65532 = inst_65575;
var inst_65533 = null;
var inst_65534 = (0);
var inst_65535 = (0);
var state_65656__$1 = (function (){var statearr_65668 = state_65656;
(statearr_65668[(13)] = inst_65532);

(statearr_65668[(14)] = inst_65533);

(statearr_65668[(15)] = inst_65534);

(statearr_65668[(16)] = inst_65574);

(statearr_65668[(17)] = inst_65535);

return statearr_65668;
})();
var statearr_65669_67440 = state_65656__$1;
(statearr_65669_67440[(2)] = null);

(statearr_65669_67440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (39))){
var state_65656__$1 = state_65656;
var statearr_65673_67441 = state_65656__$1;
(statearr_65673_67441[(2)] = null);

(statearr_65673_67441[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (4))){
var inst_65523 = (state_65656[(11)]);
var inst_65523__$1 = (state_65656[(2)]);
var inst_65524 = (inst_65523__$1 == null);
var state_65656__$1 = (function (){var statearr_65675 = state_65656;
(statearr_65675[(11)] = inst_65523__$1);

return statearr_65675;
})();
if(cljs.core.truth_(inst_65524)){
var statearr_65676_67443 = state_65656__$1;
(statearr_65676_67443[(1)] = (5));

} else {
var statearr_65677_67445 = state_65656__$1;
(statearr_65677_67445[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (15))){
var inst_65532 = (state_65656[(13)]);
var inst_65533 = (state_65656[(14)]);
var inst_65534 = (state_65656[(15)]);
var inst_65535 = (state_65656[(17)]);
var inst_65550 = (state_65656[(2)]);
var inst_65551 = (inst_65535 + (1));
var tmp65670 = inst_65532;
var tmp65671 = inst_65533;
var tmp65672 = inst_65534;
var inst_65532__$1 = tmp65670;
var inst_65533__$1 = tmp65671;
var inst_65534__$1 = tmp65672;
var inst_65535__$1 = inst_65551;
var state_65656__$1 = (function (){var statearr_65678 = state_65656;
(statearr_65678[(13)] = inst_65532__$1);

(statearr_65678[(14)] = inst_65533__$1);

(statearr_65678[(18)] = inst_65550);

(statearr_65678[(15)] = inst_65534__$1);

(statearr_65678[(17)] = inst_65535__$1);

return statearr_65678;
})();
var statearr_65679_67447 = state_65656__$1;
(statearr_65679_67447[(2)] = null);

(statearr_65679_67447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (21))){
var inst_65578 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
var statearr_65683_67448 = state_65656__$1;
(statearr_65683_67448[(2)] = inst_65578);

(statearr_65683_67448[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (31))){
var inst_65604 = (state_65656[(10)]);
var inst_65608 = done(null);
var inst_65609 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_65604);
var state_65656__$1 = (function (){var statearr_65685 = state_65656;
(statearr_65685[(19)] = inst_65608);

return statearr_65685;
})();
var statearr_65686_67449 = state_65656__$1;
(statearr_65686_67449[(2)] = inst_65609);

(statearr_65686_67449[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (32))){
var inst_65598 = (state_65656[(20)]);
var inst_65599 = (state_65656[(9)]);
var inst_65596 = (state_65656[(21)]);
var inst_65597 = (state_65656[(12)]);
var inst_65611 = (state_65656[(2)]);
var inst_65612 = (inst_65599 + (1));
var tmp65680 = inst_65598;
var tmp65681 = inst_65596;
var tmp65682 = inst_65597;
var inst_65596__$1 = tmp65681;
var inst_65597__$1 = tmp65682;
var inst_65598__$1 = tmp65680;
var inst_65599__$1 = inst_65612;
var state_65656__$1 = (function (){var statearr_65687 = state_65656;
(statearr_65687[(20)] = inst_65598__$1);

(statearr_65687[(9)] = inst_65599__$1);

(statearr_65687[(21)] = inst_65596__$1);

(statearr_65687[(12)] = inst_65597__$1);

(statearr_65687[(22)] = inst_65611);

return statearr_65687;
})();
var statearr_65688_67450 = state_65656__$1;
(statearr_65688_67450[(2)] = null);

(statearr_65688_67450[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (40))){
var inst_65624 = (state_65656[(23)]);
var inst_65628 = done(null);
var inst_65629 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_65624);
var state_65656__$1 = (function (){var statearr_65689 = state_65656;
(statearr_65689[(24)] = inst_65628);

return statearr_65689;
})();
var statearr_65690_67451 = state_65656__$1;
(statearr_65690_67451[(2)] = inst_65629);

(statearr_65690_67451[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (33))){
var inst_65615 = (state_65656[(25)]);
var inst_65617 = cljs.core.chunked_seq_QMARK_(inst_65615);
var state_65656__$1 = state_65656;
if(inst_65617){
var statearr_65691_67452 = state_65656__$1;
(statearr_65691_67452[(1)] = (36));

} else {
var statearr_65692_67453 = state_65656__$1;
(statearr_65692_67453[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (13))){
var inst_65544 = (state_65656[(26)]);
var inst_65547 = cljs.core.async.close_BANG_(inst_65544);
var state_65656__$1 = state_65656;
var statearr_65694_67454 = state_65656__$1;
(statearr_65694_67454[(2)] = inst_65547);

(statearr_65694_67454[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (22))){
var inst_65568 = (state_65656[(8)]);
var inst_65571 = cljs.core.async.close_BANG_(inst_65568);
var state_65656__$1 = state_65656;
var statearr_65695_67459 = state_65656__$1;
(statearr_65695_67459[(2)] = inst_65571);

(statearr_65695_67459[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (36))){
var inst_65615 = (state_65656[(25)]);
var inst_65619 = cljs.core.chunk_first(inst_65615);
var inst_65620 = cljs.core.chunk_rest(inst_65615);
var inst_65621 = cljs.core.count(inst_65619);
var inst_65596 = inst_65620;
var inst_65597 = inst_65619;
var inst_65598 = inst_65621;
var inst_65599 = (0);
var state_65656__$1 = (function (){var statearr_65696 = state_65656;
(statearr_65696[(20)] = inst_65598);

(statearr_65696[(9)] = inst_65599);

(statearr_65696[(21)] = inst_65596);

(statearr_65696[(12)] = inst_65597);

return statearr_65696;
})();
var statearr_65697_67460 = state_65656__$1;
(statearr_65697_67460[(2)] = null);

(statearr_65697_67460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (41))){
var inst_65615 = (state_65656[(25)]);
var inst_65631 = (state_65656[(2)]);
var inst_65632 = cljs.core.next(inst_65615);
var inst_65596 = inst_65632;
var inst_65597 = null;
var inst_65598 = (0);
var inst_65599 = (0);
var state_65656__$1 = (function (){var statearr_65698 = state_65656;
(statearr_65698[(20)] = inst_65598);

(statearr_65698[(9)] = inst_65599);

(statearr_65698[(21)] = inst_65596);

(statearr_65698[(12)] = inst_65597);

(statearr_65698[(27)] = inst_65631);

return statearr_65698;
})();
var statearr_65699_67463 = state_65656__$1;
(statearr_65699_67463[(2)] = null);

(statearr_65699_67463[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (43))){
var state_65656__$1 = state_65656;
var statearr_65701_67464 = state_65656__$1;
(statearr_65701_67464[(2)] = null);

(statearr_65701_67464[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (29))){
var inst_65640 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
var statearr_65702_67467 = state_65656__$1;
(statearr_65702_67467[(2)] = inst_65640);

(statearr_65702_67467[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (44))){
var inst_65649 = (state_65656[(2)]);
var state_65656__$1 = (function (){var statearr_65703 = state_65656;
(statearr_65703[(28)] = inst_65649);

return statearr_65703;
})();
var statearr_65704_67468 = state_65656__$1;
(statearr_65704_67468[(2)] = null);

(statearr_65704_67468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (6))){
var inst_65588 = (state_65656[(29)]);
var inst_65587 = cljs.core.deref(cs);
var inst_65588__$1 = cljs.core.keys(inst_65587);
var inst_65589 = cljs.core.count(inst_65588__$1);
var inst_65590 = cljs.core.reset_BANG_(dctr,inst_65589);
var inst_65595 = cljs.core.seq(inst_65588__$1);
var inst_65596 = inst_65595;
var inst_65597 = null;
var inst_65598 = (0);
var inst_65599 = (0);
var state_65656__$1 = (function (){var statearr_65705 = state_65656;
(statearr_65705[(20)] = inst_65598);

(statearr_65705[(29)] = inst_65588__$1);

(statearr_65705[(30)] = inst_65590);

(statearr_65705[(9)] = inst_65599);

(statearr_65705[(21)] = inst_65596);

(statearr_65705[(12)] = inst_65597);

return statearr_65705;
})();
var statearr_65706_67469 = state_65656__$1;
(statearr_65706_67469[(2)] = null);

(statearr_65706_67469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (28))){
var inst_65615 = (state_65656[(25)]);
var inst_65596 = (state_65656[(21)]);
var inst_65615__$1 = cljs.core.seq(inst_65596);
var state_65656__$1 = (function (){var statearr_65708 = state_65656;
(statearr_65708[(25)] = inst_65615__$1);

return statearr_65708;
})();
if(inst_65615__$1){
var statearr_65709_67475 = state_65656__$1;
(statearr_65709_67475[(1)] = (33));

} else {
var statearr_65710_67476 = state_65656__$1;
(statearr_65710_67476[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (25))){
var inst_65598 = (state_65656[(20)]);
var inst_65599 = (state_65656[(9)]);
var inst_65601 = (inst_65599 < inst_65598);
var inst_65602 = inst_65601;
var state_65656__$1 = state_65656;
if(cljs.core.truth_(inst_65602)){
var statearr_65711_67481 = state_65656__$1;
(statearr_65711_67481[(1)] = (27));

} else {
var statearr_65712_67482 = state_65656__$1;
(statearr_65712_67482[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (34))){
var state_65656__$1 = state_65656;
var statearr_65713_67483 = state_65656__$1;
(statearr_65713_67483[(2)] = null);

(statearr_65713_67483[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (17))){
var state_65656__$1 = state_65656;
var statearr_65714_67484 = state_65656__$1;
(statearr_65714_67484[(2)] = null);

(statearr_65714_67484[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (3))){
var inst_65654 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65656__$1,inst_65654);
} else {
if((state_val_65657 === (12))){
var inst_65583 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
var statearr_65715_67491 = state_65656__$1;
(statearr_65715_67491[(2)] = inst_65583);

(statearr_65715_67491[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (2))){
var state_65656__$1 = state_65656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65656__$1,(4),ch);
} else {
if((state_val_65657 === (23))){
var state_65656__$1 = state_65656;
var statearr_65717_67492 = state_65656__$1;
(statearr_65717_67492[(2)] = null);

(statearr_65717_67492[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (35))){
var inst_65638 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
var statearr_65718_67493 = state_65656__$1;
(statearr_65718_67493[(2)] = inst_65638);

(statearr_65718_67493[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (19))){
var inst_65554 = (state_65656[(7)]);
var inst_65558 = cljs.core.chunk_first(inst_65554);
var inst_65559 = cljs.core.chunk_rest(inst_65554);
var inst_65560 = cljs.core.count(inst_65558);
var inst_65532 = inst_65559;
var inst_65533 = inst_65558;
var inst_65534 = inst_65560;
var inst_65535 = (0);
var state_65656__$1 = (function (){var statearr_65719 = state_65656;
(statearr_65719[(13)] = inst_65532);

(statearr_65719[(14)] = inst_65533);

(statearr_65719[(15)] = inst_65534);

(statearr_65719[(17)] = inst_65535);

return statearr_65719;
})();
var statearr_65720_67495 = state_65656__$1;
(statearr_65720_67495[(2)] = null);

(statearr_65720_67495[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (11))){
var inst_65532 = (state_65656[(13)]);
var inst_65554 = (state_65656[(7)]);
var inst_65554__$1 = cljs.core.seq(inst_65532);
var state_65656__$1 = (function (){var statearr_65721 = state_65656;
(statearr_65721[(7)] = inst_65554__$1);

return statearr_65721;
})();
if(inst_65554__$1){
var statearr_65722_67497 = state_65656__$1;
(statearr_65722_67497[(1)] = (16));

} else {
var statearr_65723_67498 = state_65656__$1;
(statearr_65723_67498[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (9))){
var inst_65585 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
var statearr_65725_67499 = state_65656__$1;
(statearr_65725_67499[(2)] = inst_65585);

(statearr_65725_67499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (5))){
var inst_65530 = cljs.core.deref(cs);
var inst_65531 = cljs.core.seq(inst_65530);
var inst_65532 = inst_65531;
var inst_65533 = null;
var inst_65534 = (0);
var inst_65535 = (0);
var state_65656__$1 = (function (){var statearr_65726 = state_65656;
(statearr_65726[(13)] = inst_65532);

(statearr_65726[(14)] = inst_65533);

(statearr_65726[(15)] = inst_65534);

(statearr_65726[(17)] = inst_65535);

return statearr_65726;
})();
var statearr_65727_67500 = state_65656__$1;
(statearr_65727_67500[(2)] = null);

(statearr_65727_67500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (14))){
var state_65656__$1 = state_65656;
var statearr_65728_67501 = state_65656__$1;
(statearr_65728_67501[(2)] = null);

(statearr_65728_67501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (45))){
var inst_65646 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
var statearr_65729_67502 = state_65656__$1;
(statearr_65729_67502[(2)] = inst_65646);

(statearr_65729_67502[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (26))){
var inst_65588 = (state_65656[(29)]);
var inst_65642 = (state_65656[(2)]);
var inst_65643 = cljs.core.seq(inst_65588);
var state_65656__$1 = (function (){var statearr_65730 = state_65656;
(statearr_65730[(31)] = inst_65642);

return statearr_65730;
})();
if(inst_65643){
var statearr_65731_67503 = state_65656__$1;
(statearr_65731_67503[(1)] = (42));

} else {
var statearr_65732_67504 = state_65656__$1;
(statearr_65732_67504[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (16))){
var inst_65554 = (state_65656[(7)]);
var inst_65556 = cljs.core.chunked_seq_QMARK_(inst_65554);
var state_65656__$1 = state_65656;
if(inst_65556){
var statearr_65733_67511 = state_65656__$1;
(statearr_65733_67511[(1)] = (19));

} else {
var statearr_65735_67512 = state_65656__$1;
(statearr_65735_67512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (38))){
var inst_65635 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
var statearr_65736_67513 = state_65656__$1;
(statearr_65736_67513[(2)] = inst_65635);

(statearr_65736_67513[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (30))){
var state_65656__$1 = state_65656;
var statearr_65737_67515 = state_65656__$1;
(statearr_65737_67515[(2)] = null);

(statearr_65737_67515[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (10))){
var inst_65533 = (state_65656[(14)]);
var inst_65535 = (state_65656[(17)]);
var inst_65543 = cljs.core._nth(inst_65533,inst_65535);
var inst_65544 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65543,(0),null);
var inst_65545 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65543,(1),null);
var state_65656__$1 = (function (){var statearr_65738 = state_65656;
(statearr_65738[(26)] = inst_65544);

return statearr_65738;
})();
if(cljs.core.truth_(inst_65545)){
var statearr_65739_67516 = state_65656__$1;
(statearr_65739_67516[(1)] = (13));

} else {
var statearr_65740_67518 = state_65656__$1;
(statearr_65740_67518[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (18))){
var inst_65581 = (state_65656[(2)]);
var state_65656__$1 = state_65656;
var statearr_65741_67519 = state_65656__$1;
(statearr_65741_67519[(2)] = inst_65581);

(statearr_65741_67519[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (42))){
var state_65656__$1 = state_65656;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_65656__$1,(45),dchan);
} else {
if((state_val_65657 === (37))){
var inst_65624 = (state_65656[(23)]);
var inst_65615 = (state_65656[(25)]);
var inst_65523 = (state_65656[(11)]);
var inst_65624__$1 = cljs.core.first(inst_65615);
var inst_65625 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_65624__$1,inst_65523,done);
var state_65656__$1 = (function (){var statearr_65743 = state_65656;
(statearr_65743[(23)] = inst_65624__$1);

return statearr_65743;
})();
if(cljs.core.truth_(inst_65625)){
var statearr_65744_67528 = state_65656__$1;
(statearr_65744_67528[(1)] = (39));

} else {
var statearr_65745_67529 = state_65656__$1;
(statearr_65745_67529[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65657 === (8))){
var inst_65534 = (state_65656[(15)]);
var inst_65535 = (state_65656[(17)]);
var inst_65537 = (inst_65535 < inst_65534);
var inst_65538 = inst_65537;
var state_65656__$1 = state_65656;
if(cljs.core.truth_(inst_65538)){
var statearr_65746_67531 = state_65656__$1;
(statearr_65746_67531[(1)] = (10));

} else {
var statearr_65747_67532 = state_65656__$1;
(statearr_65747_67532[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__64313__auto__ = null;
var cljs$core$async$mult_$_state_machine__64313__auto____0 = (function (){
var statearr_65748 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65748[(0)] = cljs$core$async$mult_$_state_machine__64313__auto__);

(statearr_65748[(1)] = (1));

return statearr_65748;
});
var cljs$core$async$mult_$_state_machine__64313__auto____1 = (function (state_65656){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_65656);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e65749){if((e65749 instanceof Object)){
var ex__64316__auto__ = e65749;
var statearr_65751_67534 = state_65656;
(statearr_65751_67534[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65749;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67544 = state_65656;
state_65656 = G__67544;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__64313__auto__ = function(state_65656){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__64313__auto____1.call(this,state_65656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__64313__auto____0;
cljs$core$async$mult_$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__64313__auto____1;
return cljs$core$async$mult_$_state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_65752 = f__64538__auto__();
(statearr_65752[(6)] = c__64537__auto___67418);

return statearr_65752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
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
var G__65754 = arguments.length;
switch (G__65754) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_67554 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_67554(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_67557 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_67557(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_67565 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_67565(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_67567 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_67567(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_67568 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_67568(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5772__auto__ = [];
var len__5766__auto___67575 = arguments.length;
var i__5767__auto___67576 = (0);
while(true){
if((i__5767__auto___67576 < len__5766__auto___67575)){
args__5772__auto__.push((arguments[i__5767__auto___67576]));

var G__67577 = (i__5767__auto___67576 + (1));
i__5767__auto___67576 = G__67577;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((3) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5773__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__65765){
var map__65766 = p__65765;
var map__65766__$1 = cljs.core.__destructure_map(map__65766);
var opts = map__65766__$1;
var statearr_65767_67580 = state;
(statearr_65767_67580[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_65768_67581 = state;
(statearr_65768_67581[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_65769_67582 = state;
(statearr_65769_67582[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq65761){
var G__65762 = cljs.core.first(seq65761);
var seq65761__$1 = cljs.core.next(seq65761);
var G__65763 = cljs.core.first(seq65761__$1);
var seq65761__$2 = cljs.core.next(seq65761__$1);
var G__65764 = cljs.core.first(seq65761__$2);
var seq65761__$3 = cljs.core.next(seq65761__$2);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65762,G__65763,G__65764,seq65761__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async65773 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async65773 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta65774){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta65774 = meta65774;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_65775,meta65774__$1){
var self__ = this;
var _65775__$1 = this;
return (new cljs.core.async.t_cljs$core$async65773(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta65774__$1));
}));

(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_65775){
var self__ = this;
var _65775__$1 = this;
return self__.meta65774;
}));

(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65773.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async65773.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta65774","meta65774",-1209157717,null)], null);
}));

(cljs.core.async.t_cljs$core$async65773.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async65773.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async65773");

(cljs.core.async.t_cljs$core$async65773.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async65773");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async65773.
 */
cljs.core.async.__GT_t_cljs$core$async65773 = (function cljs$core$async$mix_$___GT_t_cljs$core$async65773(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta65774){
return (new cljs.core.async.t_cljs$core$async65773(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta65774));
});

}

return (new cljs.core.async.t_cljs$core$async65773(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__64537__auto___67593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_65849){
var state_val_65850 = (state_65849[(1)]);
if((state_val_65850 === (7))){
var inst_65807 = (state_65849[(2)]);
var state_65849__$1 = state_65849;
if(cljs.core.truth_(inst_65807)){
var statearr_65851_67594 = state_65849__$1;
(statearr_65851_67594[(1)] = (8));

} else {
var statearr_65852_67595 = state_65849__$1;
(statearr_65852_67595[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (20))){
var inst_65800 = (state_65849[(7)]);
var state_65849__$1 = state_65849;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_65849__$1,(23),out,inst_65800);
} else {
if((state_val_65850 === (1))){
var inst_65783 = calc_state();
var inst_65784 = cljs.core.__destructure_map(inst_65783);
var inst_65785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65784,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_65786 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65784,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_65787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65784,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_65788 = inst_65783;
var state_65849__$1 = (function (){var statearr_65853 = state_65849;
(statearr_65853[(8)] = inst_65788);

(statearr_65853[(9)] = inst_65787);

(statearr_65853[(10)] = inst_65785);

(statearr_65853[(11)] = inst_65786);

return statearr_65853;
})();
var statearr_65854_67599 = state_65849__$1;
(statearr_65854_67599[(2)] = null);

(statearr_65854_67599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (24))){
var inst_65791 = (state_65849[(12)]);
var inst_65788 = inst_65791;
var state_65849__$1 = (function (){var statearr_65855 = state_65849;
(statearr_65855[(8)] = inst_65788);

return statearr_65855;
})();
var statearr_65856_67600 = state_65849__$1;
(statearr_65856_67600[(2)] = null);

(statearr_65856_67600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (4))){
var inst_65800 = (state_65849[(7)]);
var inst_65802 = (state_65849[(13)]);
var inst_65799 = (state_65849[(2)]);
var inst_65800__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65799,(0),null);
var inst_65801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_65799,(1),null);
var inst_65802__$1 = (inst_65800__$1 == null);
var state_65849__$1 = (function (){var statearr_65860 = state_65849;
(statearr_65860[(7)] = inst_65800__$1);

(statearr_65860[(14)] = inst_65801);

(statearr_65860[(13)] = inst_65802__$1);

return statearr_65860;
})();
if(cljs.core.truth_(inst_65802__$1)){
var statearr_65861_67603 = state_65849__$1;
(statearr_65861_67603[(1)] = (5));

} else {
var statearr_65862_67606 = state_65849__$1;
(statearr_65862_67606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (15))){
var inst_65792 = (state_65849[(15)]);
var inst_65821 = (state_65849[(16)]);
var inst_65821__$1 = cljs.core.empty_QMARK_(inst_65792);
var state_65849__$1 = (function (){var statearr_65869 = state_65849;
(statearr_65869[(16)] = inst_65821__$1);

return statearr_65869;
})();
if(inst_65821__$1){
var statearr_65870_67614 = state_65849__$1;
(statearr_65870_67614[(1)] = (17));

} else {
var statearr_65871_67616 = state_65849__$1;
(statearr_65871_67616[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (21))){
var inst_65791 = (state_65849[(12)]);
var inst_65788 = inst_65791;
var state_65849__$1 = (function (){var statearr_65872 = state_65849;
(statearr_65872[(8)] = inst_65788);

return statearr_65872;
})();
var statearr_65873_67621 = state_65849__$1;
(statearr_65873_67621[(2)] = null);

(statearr_65873_67621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (13))){
var inst_65814 = (state_65849[(2)]);
var inst_65815 = calc_state();
var inst_65788 = inst_65815;
var state_65849__$1 = (function (){var statearr_65877 = state_65849;
(statearr_65877[(8)] = inst_65788);

(statearr_65877[(17)] = inst_65814);

return statearr_65877;
})();
var statearr_65879_67623 = state_65849__$1;
(statearr_65879_67623[(2)] = null);

(statearr_65879_67623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (22))){
var inst_65843 = (state_65849[(2)]);
var state_65849__$1 = state_65849;
var statearr_65881_67624 = state_65849__$1;
(statearr_65881_67624[(2)] = inst_65843);

(statearr_65881_67624[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (6))){
var inst_65801 = (state_65849[(14)]);
var inst_65805 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_65801,change);
var state_65849__$1 = state_65849;
var statearr_65885_67625 = state_65849__$1;
(statearr_65885_67625[(2)] = inst_65805);

(statearr_65885_67625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (25))){
var state_65849__$1 = state_65849;
var statearr_65887_67626 = state_65849__$1;
(statearr_65887_67626[(2)] = null);

(statearr_65887_67626[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (17))){
var inst_65793 = (state_65849[(18)]);
var inst_65801 = (state_65849[(14)]);
var inst_65823 = (inst_65793.cljs$core$IFn$_invoke$arity$1 ? inst_65793.cljs$core$IFn$_invoke$arity$1(inst_65801) : inst_65793.call(null,inst_65801));
var inst_65824 = cljs.core.not(inst_65823);
var state_65849__$1 = state_65849;
var statearr_65891_67627 = state_65849__$1;
(statearr_65891_67627[(2)] = inst_65824);

(statearr_65891_67627[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (3))){
var inst_65847 = (state_65849[(2)]);
var state_65849__$1 = state_65849;
return cljs.core.async.impl.ioc_helpers.return_chan(state_65849__$1,inst_65847);
} else {
if((state_val_65850 === (12))){
var state_65849__$1 = state_65849;
var statearr_65896_67629 = state_65849__$1;
(statearr_65896_67629[(2)] = null);

(statearr_65896_67629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (2))){
var inst_65791 = (state_65849[(12)]);
var inst_65788 = (state_65849[(8)]);
var inst_65791__$1 = cljs.core.__destructure_map(inst_65788);
var inst_65792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65791__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_65793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65791__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_65794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_65791__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_65849__$1 = (function (){var statearr_65901 = state_65849;
(statearr_65901[(12)] = inst_65791__$1);

(statearr_65901[(15)] = inst_65792);

(statearr_65901[(18)] = inst_65793);

return statearr_65901;
})();
return cljs.core.async.ioc_alts_BANG_(state_65849__$1,(4),inst_65794);
} else {
if((state_val_65850 === (23))){
var inst_65832 = (state_65849[(2)]);
var state_65849__$1 = state_65849;
if(cljs.core.truth_(inst_65832)){
var statearr_65903_67632 = state_65849__$1;
(statearr_65903_67632[(1)] = (24));

} else {
var statearr_65905_67633 = state_65849__$1;
(statearr_65905_67633[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (19))){
var inst_65827 = (state_65849[(2)]);
var state_65849__$1 = state_65849;
var statearr_65908_67634 = state_65849__$1;
(statearr_65908_67634[(2)] = inst_65827);

(statearr_65908_67634[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (11))){
var inst_65801 = (state_65849[(14)]);
var inst_65811 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_65801);
var state_65849__$1 = state_65849;
var statearr_65913_67636 = state_65849__$1;
(statearr_65913_67636[(2)] = inst_65811);

(statearr_65913_67636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (9))){
var inst_65792 = (state_65849[(15)]);
var inst_65818 = (state_65849[(19)]);
var inst_65801 = (state_65849[(14)]);
var inst_65818__$1 = (inst_65792.cljs$core$IFn$_invoke$arity$1 ? inst_65792.cljs$core$IFn$_invoke$arity$1(inst_65801) : inst_65792.call(null,inst_65801));
var state_65849__$1 = (function (){var statearr_65915 = state_65849;
(statearr_65915[(19)] = inst_65818__$1);

return statearr_65915;
})();
if(cljs.core.truth_(inst_65818__$1)){
var statearr_65918_67640 = state_65849__$1;
(statearr_65918_67640[(1)] = (14));

} else {
var statearr_65920_67641 = state_65849__$1;
(statearr_65920_67641[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (5))){
var inst_65802 = (state_65849[(13)]);
var state_65849__$1 = state_65849;
var statearr_65924_67643 = state_65849__$1;
(statearr_65924_67643[(2)] = inst_65802);

(statearr_65924_67643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (14))){
var inst_65818 = (state_65849[(19)]);
var state_65849__$1 = state_65849;
var statearr_65926_67644 = state_65849__$1;
(statearr_65926_67644[(2)] = inst_65818);

(statearr_65926_67644[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (26))){
var inst_65838 = (state_65849[(2)]);
var state_65849__$1 = state_65849;
var statearr_65928_67645 = state_65849__$1;
(statearr_65928_67645[(2)] = inst_65838);

(statearr_65928_67645[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (16))){
var inst_65829 = (state_65849[(2)]);
var state_65849__$1 = state_65849;
if(cljs.core.truth_(inst_65829)){
var statearr_65932_67646 = state_65849__$1;
(statearr_65932_67646[(1)] = (20));

} else {
var statearr_65934_67647 = state_65849__$1;
(statearr_65934_67647[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (10))){
var inst_65845 = (state_65849[(2)]);
var state_65849__$1 = state_65849;
var statearr_65937_67648 = state_65849__$1;
(statearr_65937_67648[(2)] = inst_65845);

(statearr_65937_67648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (18))){
var inst_65821 = (state_65849[(16)]);
var state_65849__$1 = state_65849;
var statearr_65938_67651 = state_65849__$1;
(statearr_65938_67651[(2)] = inst_65821);

(statearr_65938_67651[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65850 === (8))){
var inst_65800 = (state_65849[(7)]);
var inst_65809 = (inst_65800 == null);
var state_65849__$1 = state_65849;
if(cljs.core.truth_(inst_65809)){
var statearr_65940_67652 = state_65849__$1;
(statearr_65940_67652[(1)] = (11));

} else {
var statearr_65941_67653 = state_65849__$1;
(statearr_65941_67653[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__64313__auto__ = null;
var cljs$core$async$mix_$_state_machine__64313__auto____0 = (function (){
var statearr_65946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_65946[(0)] = cljs$core$async$mix_$_state_machine__64313__auto__);

(statearr_65946[(1)] = (1));

return statearr_65946;
});
var cljs$core$async$mix_$_state_machine__64313__auto____1 = (function (state_65849){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_65849);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e65948){if((e65948 instanceof Object)){
var ex__64316__auto__ = e65948;
var statearr_65951_67659 = state_65849;
(statearr_65951_67659[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_65849);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65948;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67661 = state_65849;
state_65849 = G__67661;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__64313__auto__ = function(state_65849){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__64313__auto____1.call(this,state_65849);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__64313__auto____0;
cljs$core$async$mix_$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__64313__auto____1;
return cljs$core$async$mix_$_state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_65954 = f__64538__auto__();
(statearr_65954[(6)] = c__64537__auto___67593);

return statearr_65954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_67664 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_67664(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_67670 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_67670(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_67673 = (function() {
var G__67674 = null;
var G__67674__1 = (function (p){
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
var G__67674__2 = (function (p,v){
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
G__67674 = function(p,v){
switch(arguments.length){
case 1:
return G__67674__1.call(this,p);
case 2:
return G__67674__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__67674.cljs$core$IFn$_invoke$arity$1 = G__67674__1;
G__67674.cljs$core$IFn$_invoke$arity$2 = G__67674__2;
return G__67674;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__65993 = arguments.length;
switch (G__65993) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_67673(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_67673(p,v);
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
var G__66008 = arguments.length;
switch (G__66008) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__66003_SHARP_){
if(cljs.core.truth_((p1__66003_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__66003_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__66003_SHARP_.call(null,topic)))){
return p1__66003_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66003_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66018 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66018 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta66019){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta66019 = meta66019;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66020,meta66019__$1){
var self__ = this;
var _66020__$1 = this;
return (new cljs.core.async.t_cljs$core$async66018(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta66019__$1));
}));

(cljs.core.async.t_cljs$core$async66018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66020){
var self__ = this;
var _66020__$1 = this;
return self__.meta66019;
}));

(cljs.core.async.t_cljs$core$async66018.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66018.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async66018.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66018.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async66018.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async66018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async66018.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async66018.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta66019","meta66019",160927089,null)], null);
}));

(cljs.core.async.t_cljs$core$async66018.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66018.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66018");

(cljs.core.async.t_cljs$core$async66018.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66018");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66018.
 */
cljs.core.async.__GT_t_cljs$core$async66018 = (function cljs$core$async$__GT_t_cljs$core$async66018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66019){
return (new cljs.core.async.t_cljs$core$async66018(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta66019));
});

}

return (new cljs.core.async.t_cljs$core$async66018(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__64537__auto___67692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_66129){
var state_val_66130 = (state_66129[(1)]);
if((state_val_66130 === (7))){
var inst_66122 = (state_66129[(2)]);
var state_66129__$1 = state_66129;
var statearr_66137_67693 = state_66129__$1;
(statearr_66137_67693[(2)] = inst_66122);

(statearr_66137_67693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (20))){
var state_66129__$1 = state_66129;
var statearr_66138_67694 = state_66129__$1;
(statearr_66138_67694[(2)] = null);

(statearr_66138_67694[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (1))){
var state_66129__$1 = state_66129;
var statearr_66142_67696 = state_66129__$1;
(statearr_66142_67696[(2)] = null);

(statearr_66142_67696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (24))){
var inst_66101 = (state_66129[(7)]);
var inst_66112 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_66101);
var state_66129__$1 = state_66129;
var statearr_66147_67698 = state_66129__$1;
(statearr_66147_67698[(2)] = inst_66112);

(statearr_66147_67698[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (4))){
var inst_66045 = (state_66129[(8)]);
var inst_66045__$1 = (state_66129[(2)]);
var inst_66046 = (inst_66045__$1 == null);
var state_66129__$1 = (function (){var statearr_66151 = state_66129;
(statearr_66151[(8)] = inst_66045__$1);

return statearr_66151;
})();
if(cljs.core.truth_(inst_66046)){
var statearr_66152_67701 = state_66129__$1;
(statearr_66152_67701[(1)] = (5));

} else {
var statearr_66153_67702 = state_66129__$1;
(statearr_66153_67702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (15))){
var inst_66095 = (state_66129[(2)]);
var state_66129__$1 = state_66129;
var statearr_66157_67705 = state_66129__$1;
(statearr_66157_67705[(2)] = inst_66095);

(statearr_66157_67705[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (21))){
var inst_66118 = (state_66129[(2)]);
var state_66129__$1 = (function (){var statearr_66158 = state_66129;
(statearr_66158[(9)] = inst_66118);

return statearr_66158;
})();
var statearr_66160_67707 = state_66129__$1;
(statearr_66160_67707[(2)] = null);

(statearr_66160_67707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (13))){
var inst_66073 = (state_66129[(10)]);
var inst_66076 = cljs.core.chunked_seq_QMARK_(inst_66073);
var state_66129__$1 = state_66129;
if(inst_66076){
var statearr_66164_67714 = state_66129__$1;
(statearr_66164_67714[(1)] = (16));

} else {
var statearr_66165_67715 = state_66129__$1;
(statearr_66165_67715[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (22))){
var inst_66108 = (state_66129[(2)]);
var state_66129__$1 = state_66129;
if(cljs.core.truth_(inst_66108)){
var statearr_66167_67717 = state_66129__$1;
(statearr_66167_67717[(1)] = (23));

} else {
var statearr_66168_67718 = state_66129__$1;
(statearr_66168_67718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (6))){
var inst_66101 = (state_66129[(7)]);
var inst_66045 = (state_66129[(8)]);
var inst_66104 = (state_66129[(11)]);
var inst_66101__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_66045) : topic_fn.call(null,inst_66045));
var inst_66103 = cljs.core.deref(mults);
var inst_66104__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_66103,inst_66101__$1);
var state_66129__$1 = (function (){var statearr_66174 = state_66129;
(statearr_66174[(7)] = inst_66101__$1);

(statearr_66174[(11)] = inst_66104__$1);

return statearr_66174;
})();
if(cljs.core.truth_(inst_66104__$1)){
var statearr_66176_67730 = state_66129__$1;
(statearr_66176_67730[(1)] = (19));

} else {
var statearr_66177_67731 = state_66129__$1;
(statearr_66177_67731[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (25))){
var inst_66115 = (state_66129[(2)]);
var state_66129__$1 = state_66129;
var statearr_66178_67732 = state_66129__$1;
(statearr_66178_67732[(2)] = inst_66115);

(statearr_66178_67732[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (17))){
var inst_66073 = (state_66129[(10)]);
var inst_66086 = cljs.core.first(inst_66073);
var inst_66087 = cljs.core.async.muxch_STAR_(inst_66086);
var inst_66088 = cljs.core.async.close_BANG_(inst_66087);
var inst_66089 = cljs.core.next(inst_66073);
var inst_66056 = inst_66089;
var inst_66057 = null;
var inst_66058 = (0);
var inst_66059 = (0);
var state_66129__$1 = (function (){var statearr_66179 = state_66129;
(statearr_66179[(12)] = inst_66058);

(statearr_66179[(13)] = inst_66056);

(statearr_66179[(14)] = inst_66088);

(statearr_66179[(15)] = inst_66059);

(statearr_66179[(16)] = inst_66057);

return statearr_66179;
})();
var statearr_66180_67735 = state_66129__$1;
(statearr_66180_67735[(2)] = null);

(statearr_66180_67735[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (3))){
var inst_66124 = (state_66129[(2)]);
var state_66129__$1 = state_66129;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66129__$1,inst_66124);
} else {
if((state_val_66130 === (12))){
var inst_66097 = (state_66129[(2)]);
var state_66129__$1 = state_66129;
var statearr_66181_67739 = state_66129__$1;
(statearr_66181_67739[(2)] = inst_66097);

(statearr_66181_67739[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (2))){
var state_66129__$1 = state_66129;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66129__$1,(4),ch);
} else {
if((state_val_66130 === (23))){
var state_66129__$1 = state_66129;
var statearr_66182_67741 = state_66129__$1;
(statearr_66182_67741[(2)] = null);

(statearr_66182_67741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (19))){
var inst_66045 = (state_66129[(8)]);
var inst_66104 = (state_66129[(11)]);
var inst_66106 = cljs.core.async.muxch_STAR_(inst_66104);
var state_66129__$1 = state_66129;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66129__$1,(22),inst_66106,inst_66045);
} else {
if((state_val_66130 === (11))){
var inst_66056 = (state_66129[(13)]);
var inst_66073 = (state_66129[(10)]);
var inst_66073__$1 = cljs.core.seq(inst_66056);
var state_66129__$1 = (function (){var statearr_66183 = state_66129;
(statearr_66183[(10)] = inst_66073__$1);

return statearr_66183;
})();
if(inst_66073__$1){
var statearr_66184_67744 = state_66129__$1;
(statearr_66184_67744[(1)] = (13));

} else {
var statearr_66185_67745 = state_66129__$1;
(statearr_66185_67745[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (9))){
var inst_66099 = (state_66129[(2)]);
var state_66129__$1 = state_66129;
var statearr_66186_67746 = state_66129__$1;
(statearr_66186_67746[(2)] = inst_66099);

(statearr_66186_67746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (5))){
var inst_66053 = cljs.core.deref(mults);
var inst_66054 = cljs.core.vals(inst_66053);
var inst_66055 = cljs.core.seq(inst_66054);
var inst_66056 = inst_66055;
var inst_66057 = null;
var inst_66058 = (0);
var inst_66059 = (0);
var state_66129__$1 = (function (){var statearr_66187 = state_66129;
(statearr_66187[(12)] = inst_66058);

(statearr_66187[(13)] = inst_66056);

(statearr_66187[(15)] = inst_66059);

(statearr_66187[(16)] = inst_66057);

return statearr_66187;
})();
var statearr_66188_67753 = state_66129__$1;
(statearr_66188_67753[(2)] = null);

(statearr_66188_67753[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (14))){
var state_66129__$1 = state_66129;
var statearr_66192_67754 = state_66129__$1;
(statearr_66192_67754[(2)] = null);

(statearr_66192_67754[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (16))){
var inst_66073 = (state_66129[(10)]);
var inst_66078 = cljs.core.chunk_first(inst_66073);
var inst_66079 = cljs.core.chunk_rest(inst_66073);
var inst_66081 = cljs.core.count(inst_66078);
var inst_66056 = inst_66079;
var inst_66057 = inst_66078;
var inst_66058 = inst_66081;
var inst_66059 = (0);
var state_66129__$1 = (function (){var statearr_66193 = state_66129;
(statearr_66193[(12)] = inst_66058);

(statearr_66193[(13)] = inst_66056);

(statearr_66193[(15)] = inst_66059);

(statearr_66193[(16)] = inst_66057);

return statearr_66193;
})();
var statearr_66194_67757 = state_66129__$1;
(statearr_66194_67757[(2)] = null);

(statearr_66194_67757[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (10))){
var inst_66058 = (state_66129[(12)]);
var inst_66056 = (state_66129[(13)]);
var inst_66059 = (state_66129[(15)]);
var inst_66057 = (state_66129[(16)]);
var inst_66066 = cljs.core._nth(inst_66057,inst_66059);
var inst_66068 = cljs.core.async.muxch_STAR_(inst_66066);
var inst_66069 = cljs.core.async.close_BANG_(inst_66068);
var inst_66070 = (inst_66059 + (1));
var tmp66189 = inst_66058;
var tmp66190 = inst_66056;
var tmp66191 = inst_66057;
var inst_66056__$1 = tmp66190;
var inst_66057__$1 = tmp66191;
var inst_66058__$1 = tmp66189;
var inst_66059__$1 = inst_66070;
var state_66129__$1 = (function (){var statearr_66197 = state_66129;
(statearr_66197[(12)] = inst_66058__$1);

(statearr_66197[(13)] = inst_66056__$1);

(statearr_66197[(15)] = inst_66059__$1);

(statearr_66197[(16)] = inst_66057__$1);

(statearr_66197[(17)] = inst_66069);

return statearr_66197;
})();
var statearr_66202_67768 = state_66129__$1;
(statearr_66202_67768[(2)] = null);

(statearr_66202_67768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (18))){
var inst_66092 = (state_66129[(2)]);
var state_66129__$1 = state_66129;
var statearr_66207_67769 = state_66129__$1;
(statearr_66207_67769[(2)] = inst_66092);

(statearr_66207_67769[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66130 === (8))){
var inst_66058 = (state_66129[(12)]);
var inst_66059 = (state_66129[(15)]);
var inst_66061 = (inst_66059 < inst_66058);
var inst_66062 = inst_66061;
var state_66129__$1 = state_66129;
if(cljs.core.truth_(inst_66062)){
var statearr_66208_67770 = state_66129__$1;
(statearr_66208_67770[(1)] = (10));

} else {
var statearr_66210_67771 = state_66129__$1;
(statearr_66210_67771[(1)] = (11));

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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_66211 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66211[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_66211[(1)] = (1));

return statearr_66211;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_66129){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_66129);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e66212){if((e66212 instanceof Object)){
var ex__64316__auto__ = e66212;
var statearr_66213_67774 = state_66129;
(statearr_66213_67774[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66212;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67775 = state_66129;
state_66129 = G__67775;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_66129){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_66129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_66218 = f__64538__auto__();
(statearr_66218[(6)] = c__64537__auto___67692);

return statearr_66218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
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
var G__66224 = arguments.length;
switch (G__66224) {
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
var G__66230 = arguments.length;
switch (G__66230) {
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
var G__66236 = arguments.length;
switch (G__66236) {
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
var c__64537__auto___67795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_66284){
var state_val_66285 = (state_66284[(1)]);
if((state_val_66285 === (7))){
var state_66284__$1 = state_66284;
var statearr_66290_67796 = state_66284__$1;
(statearr_66290_67796[(2)] = null);

(statearr_66290_67796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (1))){
var state_66284__$1 = state_66284;
var statearr_66291_67797 = state_66284__$1;
(statearr_66291_67797[(2)] = null);

(statearr_66291_67797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (4))){
var inst_66244 = (state_66284[(7)]);
var inst_66246 = (inst_66244 < cnt);
var state_66284__$1 = state_66284;
if(cljs.core.truth_(inst_66246)){
var statearr_66296_67801 = state_66284__$1;
(statearr_66296_67801[(1)] = (6));

} else {
var statearr_66297_67807 = state_66284__$1;
(statearr_66297_67807[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (15))){
var inst_66276 = (state_66284[(2)]);
var state_66284__$1 = state_66284;
var statearr_66301_67808 = state_66284__$1;
(statearr_66301_67808[(2)] = inst_66276);

(statearr_66301_67808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (13))){
var inst_66269 = cljs.core.async.close_BANG_(out);
var state_66284__$1 = state_66284;
var statearr_66303_67809 = state_66284__$1;
(statearr_66303_67809[(2)] = inst_66269);

(statearr_66303_67809[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (6))){
var state_66284__$1 = state_66284;
var statearr_66307_67813 = state_66284__$1;
(statearr_66307_67813[(2)] = null);

(statearr_66307_67813[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (3))){
var inst_66278 = (state_66284[(2)]);
var state_66284__$1 = state_66284;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66284__$1,inst_66278);
} else {
if((state_val_66285 === (12))){
var inst_66266 = (state_66284[(8)]);
var inst_66266__$1 = (state_66284[(2)]);
var inst_66267 = cljs.core.some(cljs.core.nil_QMARK_,inst_66266__$1);
var state_66284__$1 = (function (){var statearr_66310 = state_66284;
(statearr_66310[(8)] = inst_66266__$1);

return statearr_66310;
})();
if(cljs.core.truth_(inst_66267)){
var statearr_66311_67814 = state_66284__$1;
(statearr_66311_67814[(1)] = (13));

} else {
var statearr_66316_67815 = state_66284__$1;
(statearr_66316_67815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (2))){
var inst_66243 = cljs.core.reset_BANG_(dctr,cnt);
var inst_66244 = (0);
var state_66284__$1 = (function (){var statearr_66317 = state_66284;
(statearr_66317[(7)] = inst_66244);

(statearr_66317[(9)] = inst_66243);

return statearr_66317;
})();
var statearr_66321_67816 = state_66284__$1;
(statearr_66321_67816[(2)] = null);

(statearr_66321_67816[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (11))){
var inst_66244 = (state_66284[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_66284,(10),Object,null,(9));
var inst_66253 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_66244) : chs__$1.call(null,inst_66244));
var inst_66254 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_66244) : done.call(null,inst_66244));
var inst_66255 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_66253,inst_66254);
var state_66284__$1 = state_66284;
var statearr_66323_67822 = state_66284__$1;
(statearr_66323_67822[(2)] = inst_66255);


cljs.core.async.impl.ioc_helpers.process_exception(state_66284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (9))){
var inst_66244 = (state_66284[(7)]);
var inst_66257 = (state_66284[(2)]);
var inst_66258 = (inst_66244 + (1));
var inst_66244__$1 = inst_66258;
var state_66284__$1 = (function (){var statearr_66324 = state_66284;
(statearr_66324[(10)] = inst_66257);

(statearr_66324[(7)] = inst_66244__$1);

return statearr_66324;
})();
var statearr_66325_67826 = state_66284__$1;
(statearr_66325_67826[(2)] = null);

(statearr_66325_67826[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (5))){
var inst_66264 = (state_66284[(2)]);
var state_66284__$1 = (function (){var statearr_66329 = state_66284;
(statearr_66329[(11)] = inst_66264);

return statearr_66329;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66284__$1,(12),dchan);
} else {
if((state_val_66285 === (14))){
var inst_66266 = (state_66284[(8)]);
var inst_66271 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_66266);
var state_66284__$1 = state_66284;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66284__$1,(16),out,inst_66271);
} else {
if((state_val_66285 === (16))){
var inst_66273 = (state_66284[(2)]);
var state_66284__$1 = (function (){var statearr_66331 = state_66284;
(statearr_66331[(12)] = inst_66273);

return statearr_66331;
})();
var statearr_66332_67828 = state_66284__$1;
(statearr_66332_67828[(2)] = null);

(statearr_66332_67828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (10))){
var inst_66248 = (state_66284[(2)]);
var inst_66249 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_66284__$1 = (function (){var statearr_66337 = state_66284;
(statearr_66337[(13)] = inst_66248);

return statearr_66337;
})();
var statearr_66338_67829 = state_66284__$1;
(statearr_66338_67829[(2)] = inst_66249);


cljs.core.async.impl.ioc_helpers.process_exception(state_66284__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66285 === (8))){
var inst_66262 = (state_66284[(2)]);
var state_66284__$1 = state_66284;
var statearr_66339_67837 = state_66284__$1;
(statearr_66339_67837[(2)] = inst_66262);

(statearr_66339_67837[(1)] = (5));


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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_66343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66343[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_66343[(1)] = (1));

return statearr_66343;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_66284){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_66284);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e66345){if((e66345 instanceof Object)){
var ex__64316__auto__ = e66345;
var statearr_66346_67838 = state_66284;
(statearr_66346_67838[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66345;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67840 = state_66284;
state_66284 = G__67840;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_66284){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_66284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_66347 = f__64538__auto__();
(statearr_66347[(6)] = c__64537__auto___67795);

return statearr_66347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
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
var G__66351 = arguments.length;
switch (G__66351) {
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
var c__64537__auto___67843 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_66394){
var state_val_66395 = (state_66394[(1)]);
if((state_val_66395 === (7))){
var inst_66371 = (state_66394[(7)]);
var inst_66370 = (state_66394[(8)]);
var inst_66370__$1 = (state_66394[(2)]);
var inst_66371__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66370__$1,(0),null);
var inst_66372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_66370__$1,(1),null);
var inst_66373 = (inst_66371__$1 == null);
var state_66394__$1 = (function (){var statearr_66400 = state_66394;
(statearr_66400[(9)] = inst_66372);

(statearr_66400[(7)] = inst_66371__$1);

(statearr_66400[(8)] = inst_66370__$1);

return statearr_66400;
})();
if(cljs.core.truth_(inst_66373)){
var statearr_66401_67844 = state_66394__$1;
(statearr_66401_67844[(1)] = (8));

} else {
var statearr_66403_67845 = state_66394__$1;
(statearr_66403_67845[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (1))){
var inst_66360 = cljs.core.vec(chs);
var inst_66361 = inst_66360;
var state_66394__$1 = (function (){var statearr_66404 = state_66394;
(statearr_66404[(10)] = inst_66361);

return statearr_66404;
})();
var statearr_66405_67846 = state_66394__$1;
(statearr_66405_67846[(2)] = null);

(statearr_66405_67846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (4))){
var inst_66361 = (state_66394[(10)]);
var state_66394__$1 = state_66394;
return cljs.core.async.ioc_alts_BANG_(state_66394__$1,(7),inst_66361);
} else {
if((state_val_66395 === (6))){
var inst_66387 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
var statearr_66406_67847 = state_66394__$1;
(statearr_66406_67847[(2)] = inst_66387);

(statearr_66406_67847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (3))){
var inst_66389 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66394__$1,inst_66389);
} else {
if((state_val_66395 === (2))){
var inst_66361 = (state_66394[(10)]);
var inst_66363 = cljs.core.count(inst_66361);
var inst_66364 = (inst_66363 > (0));
var state_66394__$1 = state_66394;
if(cljs.core.truth_(inst_66364)){
var statearr_66411_67849 = state_66394__$1;
(statearr_66411_67849[(1)] = (4));

} else {
var statearr_66413_67850 = state_66394__$1;
(statearr_66413_67850[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (11))){
var inst_66361 = (state_66394[(10)]);
var inst_66380 = (state_66394[(2)]);
var tmp66407 = inst_66361;
var inst_66361__$1 = tmp66407;
var state_66394__$1 = (function (){var statearr_66414 = state_66394;
(statearr_66414[(11)] = inst_66380);

(statearr_66414[(10)] = inst_66361__$1);

return statearr_66414;
})();
var statearr_66415_67854 = state_66394__$1;
(statearr_66415_67854[(2)] = null);

(statearr_66415_67854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (9))){
var inst_66371 = (state_66394[(7)]);
var state_66394__$1 = state_66394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66394__$1,(11),out,inst_66371);
} else {
if((state_val_66395 === (5))){
var inst_66385 = cljs.core.async.close_BANG_(out);
var state_66394__$1 = state_66394;
var statearr_66416_67855 = state_66394__$1;
(statearr_66416_67855[(2)] = inst_66385);

(statearr_66416_67855[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (10))){
var inst_66383 = (state_66394[(2)]);
var state_66394__$1 = state_66394;
var statearr_66417_67856 = state_66394__$1;
(statearr_66417_67856[(2)] = inst_66383);

(statearr_66417_67856[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66395 === (8))){
var inst_66372 = (state_66394[(9)]);
var inst_66371 = (state_66394[(7)]);
var inst_66370 = (state_66394[(8)]);
var inst_66361 = (state_66394[(10)]);
var inst_66375 = (function (){var cs = inst_66361;
var vec__66366 = inst_66370;
var v = inst_66371;
var c = inst_66372;
return (function (p1__66349_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__66349_SHARP_);
});
})();
var inst_66376 = cljs.core.filterv(inst_66375,inst_66361);
var inst_66361__$1 = inst_66376;
var state_66394__$1 = (function (){var statearr_66424 = state_66394;
(statearr_66424[(10)] = inst_66361__$1);

return statearr_66424;
})();
var statearr_66425_67857 = state_66394__$1;
(statearr_66425_67857[(2)] = null);

(statearr_66425_67857[(1)] = (2));


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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_66430 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66430[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_66430[(1)] = (1));

return statearr_66430;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_66394){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_66394);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e66432){if((e66432 instanceof Object)){
var ex__64316__auto__ = e66432;
var statearr_66433_67858 = state_66394;
(statearr_66433_67858[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66432;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67859 = state_66394;
state_66394 = G__67859;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_66394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_66394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_66437 = f__64538__auto__();
(statearr_66437[(6)] = c__64537__auto___67843);

return statearr_66437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
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
var G__66443 = arguments.length;
switch (G__66443) {
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
var c__64537__auto___67871 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_66473){
var state_val_66474 = (state_66473[(1)]);
if((state_val_66474 === (7))){
var inst_66453 = (state_66473[(7)]);
var inst_66453__$1 = (state_66473[(2)]);
var inst_66455 = (inst_66453__$1 == null);
var inst_66456 = cljs.core.not(inst_66455);
var state_66473__$1 = (function (){var statearr_66478 = state_66473;
(statearr_66478[(7)] = inst_66453__$1);

return statearr_66478;
})();
if(inst_66456){
var statearr_66480_67872 = state_66473__$1;
(statearr_66480_67872[(1)] = (8));

} else {
var statearr_66481_67873 = state_66473__$1;
(statearr_66481_67873[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66474 === (1))){
var inst_66448 = (0);
var state_66473__$1 = (function (){var statearr_66482 = state_66473;
(statearr_66482[(8)] = inst_66448);

return statearr_66482;
})();
var statearr_66484_67874 = state_66473__$1;
(statearr_66484_67874[(2)] = null);

(statearr_66484_67874[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66474 === (4))){
var state_66473__$1 = state_66473;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66473__$1,(7),ch);
} else {
if((state_val_66474 === (6))){
var inst_66467 = (state_66473[(2)]);
var state_66473__$1 = state_66473;
var statearr_66488_67875 = state_66473__$1;
(statearr_66488_67875[(2)] = inst_66467);

(statearr_66488_67875[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66474 === (3))){
var inst_66469 = (state_66473[(2)]);
var inst_66470 = cljs.core.async.close_BANG_(out);
var state_66473__$1 = (function (){var statearr_66489 = state_66473;
(statearr_66489[(9)] = inst_66469);

return statearr_66489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66473__$1,inst_66470);
} else {
if((state_val_66474 === (2))){
var inst_66448 = (state_66473[(8)]);
var inst_66450 = (inst_66448 < n);
var state_66473__$1 = state_66473;
if(cljs.core.truth_(inst_66450)){
var statearr_66491_67883 = state_66473__$1;
(statearr_66491_67883[(1)] = (4));

} else {
var statearr_66492_67884 = state_66473__$1;
(statearr_66492_67884[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66474 === (11))){
var inst_66448 = (state_66473[(8)]);
var inst_66459 = (state_66473[(2)]);
var inst_66460 = (inst_66448 + (1));
var inst_66448__$1 = inst_66460;
var state_66473__$1 = (function (){var statearr_66495 = state_66473;
(statearr_66495[(8)] = inst_66448__$1);

(statearr_66495[(10)] = inst_66459);

return statearr_66495;
})();
var statearr_66498_67885 = state_66473__$1;
(statearr_66498_67885[(2)] = null);

(statearr_66498_67885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66474 === (9))){
var state_66473__$1 = state_66473;
var statearr_66499_67886 = state_66473__$1;
(statearr_66499_67886[(2)] = null);

(statearr_66499_67886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66474 === (5))){
var state_66473__$1 = state_66473;
var statearr_66503_67887 = state_66473__$1;
(statearr_66503_67887[(2)] = null);

(statearr_66503_67887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66474 === (10))){
var inst_66464 = (state_66473[(2)]);
var state_66473__$1 = state_66473;
var statearr_66506_67888 = state_66473__$1;
(statearr_66506_67888[(2)] = inst_66464);

(statearr_66506_67888[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66474 === (8))){
var inst_66453 = (state_66473[(7)]);
var state_66473__$1 = state_66473;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66473__$1,(11),out,inst_66453);
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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_66507 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66507[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_66507[(1)] = (1));

return statearr_66507;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_66473){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_66473);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e66509){if((e66509 instanceof Object)){
var ex__64316__auto__ = e66509;
var statearr_66510_67890 = state_66473;
(statearr_66510_67890[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66473);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66509;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67894 = state_66473;
state_66473 = G__67894;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_66473){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_66473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_66513 = f__64538__auto__();
(statearr_66513[(6)] = c__64537__auto___67871);

return statearr_66513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66520 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66520 = (function (f,ch,meta66521){
this.f = f;
this.ch = ch;
this.meta66521 = meta66521;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66522,meta66521__$1){
var self__ = this;
var _66522__$1 = this;
return (new cljs.core.async.t_cljs$core$async66520(self__.f,self__.ch,meta66521__$1));
}));

(cljs.core.async.t_cljs$core$async66520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66522){
var self__ = this;
var _66522__$1 = this;
return self__.meta66521;
}));

(cljs.core.async.t_cljs$core$async66520.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66520.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66520.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66520.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66520.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66528 = (function (f,ch,meta66521,_,fn1,meta66529){
this.f = f;
this.ch = ch;
this.meta66521 = meta66521;
this._ = _;
this.fn1 = fn1;
this.meta66529 = meta66529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66530,meta66529__$1){
var self__ = this;
var _66530__$1 = this;
return (new cljs.core.async.t_cljs$core$async66528(self__.f,self__.ch,self__.meta66521,self__._,self__.fn1,meta66529__$1));
}));

(cljs.core.async.t_cljs$core$async66528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66530){
var self__ = this;
var _66530__$1 = this;
return self__.meta66529;
}));

(cljs.core.async.t_cljs$core$async66528.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async66528.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async66528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__66516_SHARP_){
var G__66545 = (((p1__66516_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__66516_SHARP_) : self__.f.call(null,p1__66516_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__66545) : f1.call(null,G__66545));
});
}));

(cljs.core.async.t_cljs$core$async66528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66521","meta66521",-1248856227,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async66520","cljs.core.async/t_cljs$core$async66520",-933717945,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta66529","meta66529",1402646126,null)], null);
}));

(cljs.core.async.t_cljs$core$async66528.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66528.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66528");

(cljs.core.async.t_cljs$core$async66528.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66528");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66528.
 */
cljs.core.async.__GT_t_cljs$core$async66528 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66528(f__$1,ch__$1,meta66521__$1,___$2,fn1__$1,meta66529){
return (new cljs.core.async.t_cljs$core$async66528(f__$1,ch__$1,meta66521__$1,___$2,fn1__$1,meta66529));
});

}

return (new cljs.core.async.t_cljs$core$async66528(self__.f,self__.ch,self__.meta66521,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5041__auto__ = ret;
if(cljs.core.truth_(and__5041__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5041__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__66559 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__66559) : self__.f.call(null,G__66559));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async66520.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66520.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async66520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66521","meta66521",-1248856227,null)], null);
}));

(cljs.core.async.t_cljs$core$async66520.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66520.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66520");

(cljs.core.async.t_cljs$core$async66520.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66520");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66520.
 */
cljs.core.async.__GT_t_cljs$core$async66520 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async66520(f__$1,ch__$1,meta66521){
return (new cljs.core.async.t_cljs$core$async66520(f__$1,ch__$1,meta66521));
});

}

return (new cljs.core.async.t_cljs$core$async66520(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66571 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66571 = (function (f,ch,meta66572){
this.f = f;
this.ch = ch;
this.meta66572 = meta66572;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66573,meta66572__$1){
var self__ = this;
var _66573__$1 = this;
return (new cljs.core.async.t_cljs$core$async66571(self__.f,self__.ch,meta66572__$1));
}));

(cljs.core.async.t_cljs$core$async66571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66573){
var self__ = this;
var _66573__$1 = this;
return self__.meta66572;
}));

(cljs.core.async.t_cljs$core$async66571.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66571.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66571.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66571.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async66571.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66571.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async66571.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66572","meta66572",2014460848,null)], null);
}));

(cljs.core.async.t_cljs$core$async66571.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66571.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66571");

(cljs.core.async.t_cljs$core$async66571.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66571");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66571.
 */
cljs.core.async.__GT_t_cljs$core$async66571 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async66571(f__$1,ch__$1,meta66572){
return (new cljs.core.async.t_cljs$core$async66571(f__$1,ch__$1,meta66572));
});

}

return (new cljs.core.async.t_cljs$core$async66571(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async66584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async66584 = (function (p,ch,meta66585){
this.p = p;
this.ch = ch;
this.meta66585 = meta66585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async66584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66586,meta66585__$1){
var self__ = this;
var _66586__$1 = this;
return (new cljs.core.async.t_cljs$core$async66584(self__.p,self__.ch,meta66585__$1));
}));

(cljs.core.async.t_cljs$core$async66584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66586){
var self__ = this;
var _66586__$1 = this;
return self__.meta66585;
}));

(cljs.core.async.t_cljs$core$async66584.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66584.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async66584.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async66584.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async66584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async66584.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta66585","meta66585",1440668260,null)], null);
}));

(cljs.core.async.t_cljs$core$async66584.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async66584.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async66584");

(cljs.core.async.t_cljs$core$async66584.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"cljs.core.async/t_cljs$core$async66584");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async66584.
 */
cljs.core.async.__GT_t_cljs$core$async66584 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async66584(p__$1,ch__$1,meta66585){
return (new cljs.core.async.t_cljs$core$async66584(p__$1,ch__$1,meta66585));
});

}

return (new cljs.core.async.t_cljs$core$async66584(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__66601 = arguments.length;
switch (G__66601) {
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
var c__64537__auto___67908 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_66645){
var state_val_66646 = (state_66645[(1)]);
if((state_val_66646 === (7))){
var inst_66637 = (state_66645[(2)]);
var state_66645__$1 = state_66645;
var statearr_66653_67909 = state_66645__$1;
(statearr_66653_67909[(2)] = inst_66637);

(statearr_66653_67909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (1))){
var state_66645__$1 = state_66645;
var statearr_66657_67910 = state_66645__$1;
(statearr_66657_67910[(2)] = null);

(statearr_66657_67910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (4))){
var inst_66623 = (state_66645[(7)]);
var inst_66623__$1 = (state_66645[(2)]);
var inst_66624 = (inst_66623__$1 == null);
var state_66645__$1 = (function (){var statearr_66658 = state_66645;
(statearr_66658[(7)] = inst_66623__$1);

return statearr_66658;
})();
if(cljs.core.truth_(inst_66624)){
var statearr_66659_67911 = state_66645__$1;
(statearr_66659_67911[(1)] = (5));

} else {
var statearr_66660_67912 = state_66645__$1;
(statearr_66660_67912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (6))){
var inst_66623 = (state_66645[(7)]);
var inst_66628 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_66623) : p.call(null,inst_66623));
var state_66645__$1 = state_66645;
if(cljs.core.truth_(inst_66628)){
var statearr_66661_67913 = state_66645__$1;
(statearr_66661_67913[(1)] = (8));

} else {
var statearr_66662_67914 = state_66645__$1;
(statearr_66662_67914[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (3))){
var inst_66639 = (state_66645[(2)]);
var state_66645__$1 = state_66645;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66645__$1,inst_66639);
} else {
if((state_val_66646 === (2))){
var state_66645__$1 = state_66645;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66645__$1,(4),ch);
} else {
if((state_val_66646 === (11))){
var inst_66631 = (state_66645[(2)]);
var state_66645__$1 = state_66645;
var statearr_66663_67915 = state_66645__$1;
(statearr_66663_67915[(2)] = inst_66631);

(statearr_66663_67915[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (9))){
var state_66645__$1 = state_66645;
var statearr_66664_67916 = state_66645__$1;
(statearr_66664_67916[(2)] = null);

(statearr_66664_67916[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (5))){
var inst_66626 = cljs.core.async.close_BANG_(out);
var state_66645__$1 = state_66645;
var statearr_66666_67917 = state_66645__$1;
(statearr_66666_67917[(2)] = inst_66626);

(statearr_66666_67917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (10))){
var inst_66634 = (state_66645[(2)]);
var state_66645__$1 = (function (){var statearr_66670 = state_66645;
(statearr_66670[(8)] = inst_66634);

return statearr_66670;
})();
var statearr_66671_67919 = state_66645__$1;
(statearr_66671_67919[(2)] = null);

(statearr_66671_67919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66646 === (8))){
var inst_66623 = (state_66645[(7)]);
var state_66645__$1 = state_66645;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66645__$1,(11),out,inst_66623);
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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_66672 = [null,null,null,null,null,null,null,null,null];
(statearr_66672[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_66672[(1)] = (1));

return statearr_66672;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_66645){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_66645);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e66673){if((e66673 instanceof Object)){
var ex__64316__auto__ = e66673;
var statearr_66674_67924 = state_66645;
(statearr_66674_67924[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67925 = state_66645;
state_66645 = G__67925;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_66645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_66645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_66675 = f__64538__auto__();
(statearr_66675[(6)] = c__64537__auto___67908);

return statearr_66675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__66677 = arguments.length;
switch (G__66677) {
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
var c__64537__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_66755){
var state_val_66756 = (state_66755[(1)]);
if((state_val_66756 === (7))){
var inst_66750 = (state_66755[(2)]);
var state_66755__$1 = state_66755;
var statearr_66760_67930 = state_66755__$1;
(statearr_66760_67930[(2)] = inst_66750);

(statearr_66760_67930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (20))){
var inst_66720 = (state_66755[(7)]);
var inst_66731 = (state_66755[(2)]);
var inst_66732 = cljs.core.next(inst_66720);
var inst_66705 = inst_66732;
var inst_66706 = null;
var inst_66707 = (0);
var inst_66708 = (0);
var state_66755__$1 = (function (){var statearr_66761 = state_66755;
(statearr_66761[(8)] = inst_66706);

(statearr_66761[(9)] = inst_66708);

(statearr_66761[(10)] = inst_66705);

(statearr_66761[(11)] = inst_66707);

(statearr_66761[(12)] = inst_66731);

return statearr_66761;
})();
var statearr_66762_67934 = state_66755__$1;
(statearr_66762_67934[(2)] = null);

(statearr_66762_67934[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (1))){
var state_66755__$1 = state_66755;
var statearr_66763_67936 = state_66755__$1;
(statearr_66763_67936[(2)] = null);

(statearr_66763_67936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (4))){
var inst_66693 = (state_66755[(13)]);
var inst_66693__$1 = (state_66755[(2)]);
var inst_66694 = (inst_66693__$1 == null);
var state_66755__$1 = (function (){var statearr_66764 = state_66755;
(statearr_66764[(13)] = inst_66693__$1);

return statearr_66764;
})();
if(cljs.core.truth_(inst_66694)){
var statearr_66766_67937 = state_66755__$1;
(statearr_66766_67937[(1)] = (5));

} else {
var statearr_66767_67938 = state_66755__$1;
(statearr_66767_67938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (15))){
var state_66755__$1 = state_66755;
var statearr_66772_67939 = state_66755__$1;
(statearr_66772_67939[(2)] = null);

(statearr_66772_67939[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (21))){
var state_66755__$1 = state_66755;
var statearr_66776_67943 = state_66755__$1;
(statearr_66776_67943[(2)] = null);

(statearr_66776_67943[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (13))){
var inst_66706 = (state_66755[(8)]);
var inst_66708 = (state_66755[(9)]);
var inst_66705 = (state_66755[(10)]);
var inst_66707 = (state_66755[(11)]);
var inst_66716 = (state_66755[(2)]);
var inst_66717 = (inst_66708 + (1));
var tmp66769 = inst_66706;
var tmp66770 = inst_66705;
var tmp66771 = inst_66707;
var inst_66705__$1 = tmp66770;
var inst_66706__$1 = tmp66769;
var inst_66707__$1 = tmp66771;
var inst_66708__$1 = inst_66717;
var state_66755__$1 = (function (){var statearr_66777 = state_66755;
(statearr_66777[(8)] = inst_66706__$1);

(statearr_66777[(14)] = inst_66716);

(statearr_66777[(9)] = inst_66708__$1);

(statearr_66777[(10)] = inst_66705__$1);

(statearr_66777[(11)] = inst_66707__$1);

return statearr_66777;
})();
var statearr_66778_67947 = state_66755__$1;
(statearr_66778_67947[(2)] = null);

(statearr_66778_67947[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (22))){
var state_66755__$1 = state_66755;
var statearr_66779_67948 = state_66755__$1;
(statearr_66779_67948[(2)] = null);

(statearr_66779_67948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (6))){
var inst_66693 = (state_66755[(13)]);
var inst_66703 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_66693) : f.call(null,inst_66693));
var inst_66704 = cljs.core.seq(inst_66703);
var inst_66705 = inst_66704;
var inst_66706 = null;
var inst_66707 = (0);
var inst_66708 = (0);
var state_66755__$1 = (function (){var statearr_66780 = state_66755;
(statearr_66780[(8)] = inst_66706);

(statearr_66780[(9)] = inst_66708);

(statearr_66780[(10)] = inst_66705);

(statearr_66780[(11)] = inst_66707);

return statearr_66780;
})();
var statearr_66781_67949 = state_66755__$1;
(statearr_66781_67949[(2)] = null);

(statearr_66781_67949[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (17))){
var inst_66720 = (state_66755[(7)]);
var inst_66724 = cljs.core.chunk_first(inst_66720);
var inst_66725 = cljs.core.chunk_rest(inst_66720);
var inst_66726 = cljs.core.count(inst_66724);
var inst_66705 = inst_66725;
var inst_66706 = inst_66724;
var inst_66707 = inst_66726;
var inst_66708 = (0);
var state_66755__$1 = (function (){var statearr_66782 = state_66755;
(statearr_66782[(8)] = inst_66706);

(statearr_66782[(9)] = inst_66708);

(statearr_66782[(10)] = inst_66705);

(statearr_66782[(11)] = inst_66707);

return statearr_66782;
})();
var statearr_66783_67950 = state_66755__$1;
(statearr_66783_67950[(2)] = null);

(statearr_66783_67950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (3))){
var inst_66753 = (state_66755[(2)]);
var state_66755__$1 = state_66755;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66755__$1,inst_66753);
} else {
if((state_val_66756 === (12))){
var inst_66740 = (state_66755[(2)]);
var state_66755__$1 = state_66755;
var statearr_66784_67951 = state_66755__$1;
(statearr_66784_67951[(2)] = inst_66740);

(statearr_66784_67951[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (2))){
var state_66755__$1 = state_66755;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66755__$1,(4),in$);
} else {
if((state_val_66756 === (23))){
var inst_66748 = (state_66755[(2)]);
var state_66755__$1 = state_66755;
var statearr_66785_67952 = state_66755__$1;
(statearr_66785_67952[(2)] = inst_66748);

(statearr_66785_67952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (19))){
var inst_66735 = (state_66755[(2)]);
var state_66755__$1 = state_66755;
var statearr_66786_67953 = state_66755__$1;
(statearr_66786_67953[(2)] = inst_66735);

(statearr_66786_67953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (11))){
var inst_66720 = (state_66755[(7)]);
var inst_66705 = (state_66755[(10)]);
var inst_66720__$1 = cljs.core.seq(inst_66705);
var state_66755__$1 = (function (){var statearr_66787 = state_66755;
(statearr_66787[(7)] = inst_66720__$1);

return statearr_66787;
})();
if(inst_66720__$1){
var statearr_66788_67957 = state_66755__$1;
(statearr_66788_67957[(1)] = (14));

} else {
var statearr_66789_67958 = state_66755__$1;
(statearr_66789_67958[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (9))){
var inst_66742 = (state_66755[(2)]);
var inst_66743 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_66755__$1 = (function (){var statearr_66790 = state_66755;
(statearr_66790[(15)] = inst_66742);

return statearr_66790;
})();
if(cljs.core.truth_(inst_66743)){
var statearr_66791_67959 = state_66755__$1;
(statearr_66791_67959[(1)] = (21));

} else {
var statearr_66792_67960 = state_66755__$1;
(statearr_66792_67960[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (5))){
var inst_66696 = cljs.core.async.close_BANG_(out);
var state_66755__$1 = state_66755;
var statearr_66793_67961 = state_66755__$1;
(statearr_66793_67961[(2)] = inst_66696);

(statearr_66793_67961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (14))){
var inst_66720 = (state_66755[(7)]);
var inst_66722 = cljs.core.chunked_seq_QMARK_(inst_66720);
var state_66755__$1 = state_66755;
if(inst_66722){
var statearr_66794_67966 = state_66755__$1;
(statearr_66794_67966[(1)] = (17));

} else {
var statearr_66795_67967 = state_66755__$1;
(statearr_66795_67967[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (16))){
var inst_66738 = (state_66755[(2)]);
var state_66755__$1 = state_66755;
var statearr_66796_67968 = state_66755__$1;
(statearr_66796_67968[(2)] = inst_66738);

(statearr_66796_67968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66756 === (10))){
var inst_66706 = (state_66755[(8)]);
var inst_66708 = (state_66755[(9)]);
var inst_66714 = cljs.core._nth(inst_66706,inst_66708);
var state_66755__$1 = state_66755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66755__$1,(13),out,inst_66714);
} else {
if((state_val_66756 === (18))){
var inst_66720 = (state_66755[(7)]);
var inst_66729 = cljs.core.first(inst_66720);
var state_66755__$1 = state_66755;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66755__$1,(20),out,inst_66729);
} else {
if((state_val_66756 === (8))){
var inst_66708 = (state_66755[(9)]);
var inst_66707 = (state_66755[(11)]);
var inst_66711 = (inst_66708 < inst_66707);
var inst_66712 = inst_66711;
var state_66755__$1 = state_66755;
if(cljs.core.truth_(inst_66712)){
var statearr_66802_67971 = state_66755__$1;
(statearr_66802_67971[(1)] = (10));

} else {
var statearr_66803_67972 = state_66755__$1;
(statearr_66803_67972[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__64313__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__64313__auto____0 = (function (){
var statearr_66805 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66805[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__64313__auto__);

(statearr_66805[(1)] = (1));

return statearr_66805;
});
var cljs$core$async$mapcat_STAR__$_state_machine__64313__auto____1 = (function (state_66755){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_66755);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e66807){if((e66807 instanceof Object)){
var ex__64316__auto__ = e66807;
var statearr_66808_67973 = state_66755;
(statearr_66808_67973[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66807;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__67974 = state_66755;
state_66755 = G__67974;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__64313__auto__ = function(state_66755){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__64313__auto____1.call(this,state_66755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__64313__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__64313__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_66809 = f__64538__auto__();
(statearr_66809[(6)] = c__64537__auto__);

return statearr_66809;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));

return c__64537__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__66812 = arguments.length;
switch (G__66812) {
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
var G__66818 = arguments.length;
switch (G__66818) {
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
var G__66820 = arguments.length;
switch (G__66820) {
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
var c__64537__auto___67979 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_66852){
var state_val_66853 = (state_66852[(1)]);
if((state_val_66853 === (7))){
var inst_66847 = (state_66852[(2)]);
var state_66852__$1 = state_66852;
var statearr_66854_67981 = state_66852__$1;
(statearr_66854_67981[(2)] = inst_66847);

(statearr_66854_67981[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66853 === (1))){
var inst_66829 = null;
var state_66852__$1 = (function (){var statearr_66855 = state_66852;
(statearr_66855[(7)] = inst_66829);

return statearr_66855;
})();
var statearr_66856_67985 = state_66852__$1;
(statearr_66856_67985[(2)] = null);

(statearr_66856_67985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66853 === (4))){
var inst_66832 = (state_66852[(8)]);
var inst_66832__$1 = (state_66852[(2)]);
var inst_66833 = (inst_66832__$1 == null);
var inst_66834 = cljs.core.not(inst_66833);
var state_66852__$1 = (function (){var statearr_66857 = state_66852;
(statearr_66857[(8)] = inst_66832__$1);

return statearr_66857;
})();
if(inst_66834){
var statearr_66858_67990 = state_66852__$1;
(statearr_66858_67990[(1)] = (5));

} else {
var statearr_66859_67991 = state_66852__$1;
(statearr_66859_67991[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66853 === (6))){
var state_66852__$1 = state_66852;
var statearr_66860_67992 = state_66852__$1;
(statearr_66860_67992[(2)] = null);

(statearr_66860_67992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66853 === (3))){
var inst_66849 = (state_66852[(2)]);
var inst_66850 = cljs.core.async.close_BANG_(out);
var state_66852__$1 = (function (){var statearr_66861 = state_66852;
(statearr_66861[(9)] = inst_66849);

return statearr_66861;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_66852__$1,inst_66850);
} else {
if((state_val_66853 === (2))){
var state_66852__$1 = state_66852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66852__$1,(4),ch);
} else {
if((state_val_66853 === (11))){
var inst_66832 = (state_66852[(8)]);
var inst_66841 = (state_66852[(2)]);
var inst_66829 = inst_66832;
var state_66852__$1 = (function (){var statearr_66864 = state_66852;
(statearr_66864[(10)] = inst_66841);

(statearr_66864[(7)] = inst_66829);

return statearr_66864;
})();
var statearr_66867_67993 = state_66852__$1;
(statearr_66867_67993[(2)] = null);

(statearr_66867_67993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66853 === (9))){
var inst_66832 = (state_66852[(8)]);
var state_66852__$1 = state_66852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66852__$1,(11),out,inst_66832);
} else {
if((state_val_66853 === (5))){
var inst_66832 = (state_66852[(8)]);
var inst_66829 = (state_66852[(7)]);
var inst_66836 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66832,inst_66829);
var state_66852__$1 = state_66852;
if(inst_66836){
var statearr_66872_67996 = state_66852__$1;
(statearr_66872_67996[(1)] = (8));

} else {
var statearr_66873_67999 = state_66852__$1;
(statearr_66873_67999[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66853 === (10))){
var inst_66844 = (state_66852[(2)]);
var state_66852__$1 = state_66852;
var statearr_66874_68000 = state_66852__$1;
(statearr_66874_68000[(2)] = inst_66844);

(statearr_66874_68000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66853 === (8))){
var inst_66829 = (state_66852[(7)]);
var tmp66870 = inst_66829;
var inst_66829__$1 = tmp66870;
var state_66852__$1 = (function (){var statearr_66875 = state_66852;
(statearr_66875[(7)] = inst_66829__$1);

return statearr_66875;
})();
var statearr_66876_68001 = state_66852__$1;
(statearr_66876_68001[(2)] = null);

(statearr_66876_68001[(1)] = (2));


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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_66880 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66880[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_66880[(1)] = (1));

return statearr_66880;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_66852){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_66852);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e66881){if((e66881 instanceof Object)){
var ex__64316__auto__ = e66881;
var statearr_66882_68002 = state_66852;
(statearr_66882_68002[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66881;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68003 = state_66852;
state_66852 = G__68003;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_66852){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_66852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_66883 = f__64538__auto__();
(statearr_66883[(6)] = c__64537__auto___67979);

return statearr_66883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__66885 = arguments.length;
switch (G__66885) {
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
var c__64537__auto___68005 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_66928){
var state_val_66929 = (state_66928[(1)]);
if((state_val_66929 === (7))){
var inst_66924 = (state_66928[(2)]);
var state_66928__$1 = state_66928;
var statearr_66930_68006 = state_66928__$1;
(statearr_66930_68006[(2)] = inst_66924);

(statearr_66930_68006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (1))){
var inst_66886 = (new Array(n));
var inst_66887 = inst_66886;
var inst_66888 = (0);
var state_66928__$1 = (function (){var statearr_66931 = state_66928;
(statearr_66931[(7)] = inst_66888);

(statearr_66931[(8)] = inst_66887);

return statearr_66931;
})();
var statearr_66932_68010 = state_66928__$1;
(statearr_66932_68010[(2)] = null);

(statearr_66932_68010[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (4))){
var inst_66891 = (state_66928[(9)]);
var inst_66891__$1 = (state_66928[(2)]);
var inst_66893 = (inst_66891__$1 == null);
var inst_66894 = cljs.core.not(inst_66893);
var state_66928__$1 = (function (){var statearr_66933 = state_66928;
(statearr_66933[(9)] = inst_66891__$1);

return statearr_66933;
})();
if(inst_66894){
var statearr_66934_68011 = state_66928__$1;
(statearr_66934_68011[(1)] = (5));

} else {
var statearr_66935_68012 = state_66928__$1;
(statearr_66935_68012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (15))){
var inst_66918 = (state_66928[(2)]);
var state_66928__$1 = state_66928;
var statearr_66936_68013 = state_66928__$1;
(statearr_66936_68013[(2)] = inst_66918);

(statearr_66936_68013[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (13))){
var state_66928__$1 = state_66928;
var statearr_66937_68014 = state_66928__$1;
(statearr_66937_68014[(2)] = null);

(statearr_66937_68014[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (6))){
var inst_66888 = (state_66928[(7)]);
var inst_66914 = (inst_66888 > (0));
var state_66928__$1 = state_66928;
if(cljs.core.truth_(inst_66914)){
var statearr_66938_68015 = state_66928__$1;
(statearr_66938_68015[(1)] = (12));

} else {
var statearr_66939_68016 = state_66928__$1;
(statearr_66939_68016[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (3))){
var inst_66926 = (state_66928[(2)]);
var state_66928__$1 = state_66928;
return cljs.core.async.impl.ioc_helpers.return_chan(state_66928__$1,inst_66926);
} else {
if((state_val_66929 === (12))){
var inst_66887 = (state_66928[(8)]);
var inst_66916 = cljs.core.vec(inst_66887);
var state_66928__$1 = state_66928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66928__$1,(15),out,inst_66916);
} else {
if((state_val_66929 === (2))){
var state_66928__$1 = state_66928;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_66928__$1,(4),ch);
} else {
if((state_val_66929 === (11))){
var inst_66908 = (state_66928[(2)]);
var inst_66909 = (new Array(n));
var inst_66887 = inst_66909;
var inst_66888 = (0);
var state_66928__$1 = (function (){var statearr_66942 = state_66928;
(statearr_66942[(10)] = inst_66908);

(statearr_66942[(7)] = inst_66888);

(statearr_66942[(8)] = inst_66887);

return statearr_66942;
})();
var statearr_66943_68019 = state_66928__$1;
(statearr_66943_68019[(2)] = null);

(statearr_66943_68019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (9))){
var inst_66887 = (state_66928[(8)]);
var inst_66906 = cljs.core.vec(inst_66887);
var state_66928__$1 = state_66928;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_66928__$1,(11),out,inst_66906);
} else {
if((state_val_66929 === (5))){
var inst_66888 = (state_66928[(7)]);
var inst_66900 = (state_66928[(11)]);
var inst_66891 = (state_66928[(9)]);
var inst_66887 = (state_66928[(8)]);
var inst_66897 = (inst_66887[inst_66888] = inst_66891);
var inst_66900__$1 = (inst_66888 + (1));
var inst_66901 = (inst_66900__$1 < n);
var state_66928__$1 = (function (){var statearr_66944 = state_66928;
(statearr_66944[(11)] = inst_66900__$1);

(statearr_66944[(12)] = inst_66897);

return statearr_66944;
})();
if(cljs.core.truth_(inst_66901)){
var statearr_66945_68022 = state_66928__$1;
(statearr_66945_68022[(1)] = (8));

} else {
var statearr_66946_68023 = state_66928__$1;
(statearr_66946_68023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (14))){
var inst_66921 = (state_66928[(2)]);
var inst_66922 = cljs.core.async.close_BANG_(out);
var state_66928__$1 = (function (){var statearr_66948 = state_66928;
(statearr_66948[(13)] = inst_66921);

return statearr_66948;
})();
var statearr_66949_68024 = state_66928__$1;
(statearr_66949_68024[(2)] = inst_66922);

(statearr_66949_68024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (10))){
var inst_66912 = (state_66928[(2)]);
var state_66928__$1 = state_66928;
var statearr_66950_68025 = state_66928__$1;
(statearr_66950_68025[(2)] = inst_66912);

(statearr_66950_68025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66929 === (8))){
var inst_66900 = (state_66928[(11)]);
var inst_66887 = (state_66928[(8)]);
var tmp66947 = inst_66887;
var inst_66887__$1 = tmp66947;
var inst_66888 = inst_66900;
var state_66928__$1 = (function (){var statearr_66952 = state_66928;
(statearr_66952[(7)] = inst_66888);

(statearr_66952[(8)] = inst_66887__$1);

return statearr_66952;
})();
var statearr_66953_68026 = state_66928__$1;
(statearr_66953_68026[(2)] = null);

(statearr_66953_68026[(1)] = (2));


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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_66955 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66955[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_66955[(1)] = (1));

return statearr_66955;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_66928){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_66928);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e66956){if((e66956 instanceof Object)){
var ex__64316__auto__ = e66956;
var statearr_66957_68029 = state_66928;
(statearr_66957_68029[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_66928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66956;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68031 = state_66928;
state_66928 = G__68031;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_66928){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_66928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_66959 = f__64538__auto__();
(statearr_66959[(6)] = c__64537__auto___68005);

return statearr_66959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__66965 = arguments.length;
switch (G__66965) {
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
var c__64537__auto___68036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_67019){
var state_val_67020 = (state_67019[(1)]);
if((state_val_67020 === (7))){
var inst_67015 = (state_67019[(2)]);
var state_67019__$1 = state_67019;
var statearr_67021_68037 = state_67019__$1;
(statearr_67021_68037[(2)] = inst_67015);

(statearr_67021_68037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (1))){
var inst_66967 = [];
var inst_66969 = inst_66967;
var inst_66970 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_67019__$1 = (function (){var statearr_67022 = state_67019;
(statearr_67022[(7)] = inst_66969);

(statearr_67022[(8)] = inst_66970);

return statearr_67022;
})();
var statearr_67023_68038 = state_67019__$1;
(statearr_67023_68038[(2)] = null);

(statearr_67023_68038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (4))){
var inst_66973 = (state_67019[(9)]);
var inst_66973__$1 = (state_67019[(2)]);
var inst_66974 = (inst_66973__$1 == null);
var inst_66975 = cljs.core.not(inst_66974);
var state_67019__$1 = (function (){var statearr_67024 = state_67019;
(statearr_67024[(9)] = inst_66973__$1);

return statearr_67024;
})();
if(inst_66975){
var statearr_67025_68039 = state_67019__$1;
(statearr_67025_68039[(1)] = (5));

} else {
var statearr_67026_68040 = state_67019__$1;
(statearr_67026_68040[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (15))){
var inst_66969 = (state_67019[(7)]);
var inst_67007 = cljs.core.vec(inst_66969);
var state_67019__$1 = state_67019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67019__$1,(18),out,inst_67007);
} else {
if((state_val_67020 === (13))){
var inst_67002 = (state_67019[(2)]);
var state_67019__$1 = state_67019;
var statearr_67027_68041 = state_67019__$1;
(statearr_67027_68041[(2)] = inst_67002);

(statearr_67027_68041[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (6))){
var inst_66969 = (state_67019[(7)]);
var inst_67004 = inst_66969.length;
var inst_67005 = (inst_67004 > (0));
var state_67019__$1 = state_67019;
if(cljs.core.truth_(inst_67005)){
var statearr_67028_68042 = state_67019__$1;
(statearr_67028_68042[(1)] = (15));

} else {
var statearr_67029_68043 = state_67019__$1;
(statearr_67029_68043[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (17))){
var inst_67012 = (state_67019[(2)]);
var inst_67013 = cljs.core.async.close_BANG_(out);
var state_67019__$1 = (function (){var statearr_67030 = state_67019;
(statearr_67030[(10)] = inst_67012);

return statearr_67030;
})();
var statearr_67031_68044 = state_67019__$1;
(statearr_67031_68044[(2)] = inst_67013);

(statearr_67031_68044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (3))){
var inst_67017 = (state_67019[(2)]);
var state_67019__$1 = state_67019;
return cljs.core.async.impl.ioc_helpers.return_chan(state_67019__$1,inst_67017);
} else {
if((state_val_67020 === (12))){
var inst_66969 = (state_67019[(7)]);
var inst_66992 = cljs.core.vec(inst_66969);
var state_67019__$1 = state_67019;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_67019__$1,(14),out,inst_66992);
} else {
if((state_val_67020 === (2))){
var state_67019__$1 = state_67019;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_67019__$1,(4),ch);
} else {
if((state_val_67020 === (11))){
var inst_66969 = (state_67019[(7)]);
var inst_66973 = (state_67019[(9)]);
var inst_66977 = (state_67019[(11)]);
var inst_66988 = inst_66969.push(inst_66973);
var tmp67032 = inst_66969;
var inst_66969__$1 = tmp67032;
var inst_66970 = inst_66977;
var state_67019__$1 = (function (){var statearr_67040 = state_67019;
(statearr_67040[(7)] = inst_66969__$1);

(statearr_67040[(12)] = inst_66988);

(statearr_67040[(8)] = inst_66970);

return statearr_67040;
})();
var statearr_67043_68045 = state_67019__$1;
(statearr_67043_68045[(2)] = null);

(statearr_67043_68045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (9))){
var inst_66970 = (state_67019[(8)]);
var inst_66981 = cljs.core.keyword_identical_QMARK_(inst_66970,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_67019__$1 = state_67019;
var statearr_67050_68046 = state_67019__$1;
(statearr_67050_68046[(2)] = inst_66981);

(statearr_67050_68046[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (5))){
var inst_66973 = (state_67019[(9)]);
var inst_66977 = (state_67019[(11)]);
var inst_66970 = (state_67019[(8)]);
var inst_66978 = (state_67019[(13)]);
var inst_66977__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_66973) : f.call(null,inst_66973));
var inst_66978__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_66977__$1,inst_66970);
var state_67019__$1 = (function (){var statearr_67057 = state_67019;
(statearr_67057[(11)] = inst_66977__$1);

(statearr_67057[(13)] = inst_66978__$1);

return statearr_67057;
})();
if(inst_66978__$1){
var statearr_67058_68047 = state_67019__$1;
(statearr_67058_68047[(1)] = (8));

} else {
var statearr_67059_68048 = state_67019__$1;
(statearr_67059_68048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (14))){
var inst_66973 = (state_67019[(9)]);
var inst_66977 = (state_67019[(11)]);
var inst_66994 = (state_67019[(2)]);
var inst_66998 = [];
var inst_66999 = inst_66998.push(inst_66973);
var inst_66969 = inst_66998;
var inst_66970 = inst_66977;
var state_67019__$1 = (function (){var statearr_67068 = state_67019;
(statearr_67068[(7)] = inst_66969);

(statearr_67068[(14)] = inst_66994);

(statearr_67068[(15)] = inst_66999);

(statearr_67068[(8)] = inst_66970);

return statearr_67068;
})();
var statearr_67075_68051 = state_67019__$1;
(statearr_67075_68051[(2)] = null);

(statearr_67075_68051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (16))){
var state_67019__$1 = state_67019;
var statearr_67076_68052 = state_67019__$1;
(statearr_67076_68052[(2)] = null);

(statearr_67076_68052[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (10))){
var inst_66983 = (state_67019[(2)]);
var state_67019__$1 = state_67019;
if(cljs.core.truth_(inst_66983)){
var statearr_67083_68054 = state_67019__$1;
(statearr_67083_68054[(1)] = (11));

} else {
var statearr_67084_68055 = state_67019__$1;
(statearr_67084_68055[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (18))){
var inst_67009 = (state_67019[(2)]);
var state_67019__$1 = state_67019;
var statearr_67085_68056 = state_67019__$1;
(statearr_67085_68056[(2)] = inst_67009);

(statearr_67085_68056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_67020 === (8))){
var inst_66978 = (state_67019[(13)]);
var state_67019__$1 = state_67019;
var statearr_67086_68057 = state_67019__$1;
(statearr_67086_68057[(2)] = inst_66978);

(statearr_67086_68057[(1)] = (10));


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
var cljs$core$async$state_machine__64313__auto__ = null;
var cljs$core$async$state_machine__64313__auto____0 = (function (){
var statearr_67089 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_67089[(0)] = cljs$core$async$state_machine__64313__auto__);

(statearr_67089[(1)] = (1));

return statearr_67089;
});
var cljs$core$async$state_machine__64313__auto____1 = (function (state_67019){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_67019);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e67090){if((e67090 instanceof Object)){
var ex__64316__auto__ = e67090;
var statearr_67091_68059 = state_67019;
(statearr_67091_68059[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_67019);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e67090;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68063 = state_67019;
state_67019 = G__68063;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
cljs$core$async$state_machine__64313__auto__ = function(state_67019){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__64313__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__64313__auto____1.call(this,state_67019);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__64313__auto____0;
cljs$core$async$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__64313__auto____1;
return cljs$core$async$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_67093 = f__64538__auto__();
(statearr_67093[(6)] = c__64537__auto___68036);

return statearr_67093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
