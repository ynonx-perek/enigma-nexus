goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_68362 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_68362(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_68364 = (function (this$){
var x__5390__auto__ = (((this$ == null))?null:this$);
var m__5391__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5390__auto__)]);
if((!((m__5391__auto__ == null)))){
return (m__5391__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5391__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5391__auto__.call(null,this$));
} else {
var m__5389__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5389__auto__ == null)))){
return (m__5389__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5389__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5389__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_68364(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__67151 = coll;
var G__67152 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__67151,G__67152) : shadow.dom.lazy_native_coll_seq.call(null,G__67151,G__67152));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5043__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5327__auto__,writer__5328__auto__,opt__5329__auto__){
return cljs.core._write(writer__5328__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__67179 = arguments.length;
switch (G__67179) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__67186 = arguments.length;
switch (G__67186) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__67194 = arguments.length;
switch (G__67194) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__67206 = arguments.length;
switch (G__67206) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__67222 = arguments.length;
switch (G__67222) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__67245 = arguments.length;
switch (G__67245) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e67264){if((e67264 instanceof Object)){
var e = e67264;
return console.log("didnt support attachEvent",el,e);
} else {
throw e67264;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5043__auto__ = (!((typeof document !== 'undefined')));
if(or__5043__auto__){
return or__5043__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__67293 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__67294 = null;
var count__67295 = (0);
var i__67296 = (0);
while(true){
if((i__67296 < count__67295)){
var el = chunk__67294.cljs$core$IIndexed$_nth$arity$2(null,i__67296);
var handler_68416__$1 = ((function (seq__67293,chunk__67294,count__67295,i__67296,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67293,chunk__67294,count__67295,i__67296,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68416__$1);


var G__68417 = seq__67293;
var G__68418 = chunk__67294;
var G__68419 = count__67295;
var G__68420 = (i__67296 + (1));
seq__67293 = G__68417;
chunk__67294 = G__68418;
count__67295 = G__68419;
i__67296 = G__68420;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67293);
if(temp__5804__auto__){
var seq__67293__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67293__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67293__$1);
var G__68421 = cljs.core.chunk_rest(seq__67293__$1);
var G__68422 = c__5565__auto__;
var G__68423 = cljs.core.count(c__5565__auto__);
var G__68424 = (0);
seq__67293 = G__68421;
chunk__67294 = G__68422;
count__67295 = G__68423;
i__67296 = G__68424;
continue;
} else {
var el = cljs.core.first(seq__67293__$1);
var handler_68425__$1 = ((function (seq__67293,chunk__67294,count__67295,i__67296,el,seq__67293__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67293,chunk__67294,count__67295,i__67296,el,seq__67293__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68425__$1);


var G__68426 = cljs.core.next(seq__67293__$1);
var G__68427 = null;
var G__68428 = (0);
var G__68429 = (0);
seq__67293 = G__68426;
chunk__67294 = G__68427;
count__67295 = G__68428;
i__67296 = G__68429;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__67313 = arguments.length;
switch (G__67313) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__67328 = cljs.core.seq(events);
var chunk__67329 = null;
var count__67330 = (0);
var i__67331 = (0);
while(true){
if((i__67331 < count__67330)){
var vec__67348 = chunk__67329.cljs$core$IIndexed$_nth$arity$2(null,i__67331);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67348,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67348,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68436 = seq__67328;
var G__68437 = chunk__67329;
var G__68438 = count__67330;
var G__68439 = (i__67331 + (1));
seq__67328 = G__68436;
chunk__67329 = G__68437;
count__67330 = G__68438;
i__67331 = G__68439;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67328);
if(temp__5804__auto__){
var seq__67328__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67328__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67328__$1);
var G__68440 = cljs.core.chunk_rest(seq__67328__$1);
var G__68441 = c__5565__auto__;
var G__68442 = cljs.core.count(c__5565__auto__);
var G__68443 = (0);
seq__67328 = G__68440;
chunk__67329 = G__68441;
count__67330 = G__68442;
i__67331 = G__68443;
continue;
} else {
var vec__67355 = cljs.core.first(seq__67328__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67355,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67355,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68444 = cljs.core.next(seq__67328__$1);
var G__68445 = null;
var G__68446 = (0);
var G__68447 = (0);
seq__67328 = G__68444;
chunk__67329 = G__68445;
count__67330 = G__68446;
i__67331 = G__68447;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__67369 = cljs.core.seq(styles);
var chunk__67370 = null;
var count__67371 = (0);
var i__67372 = (0);
while(true){
if((i__67372 < count__67371)){
var vec__67390 = chunk__67370.cljs$core$IIndexed$_nth$arity$2(null,i__67372);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67390,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67390,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68448 = seq__67369;
var G__68449 = chunk__67370;
var G__68450 = count__67371;
var G__68451 = (i__67372 + (1));
seq__67369 = G__68448;
chunk__67370 = G__68449;
count__67371 = G__68450;
i__67372 = G__68451;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67369);
if(temp__5804__auto__){
var seq__67369__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67369__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67369__$1);
var G__68456 = cljs.core.chunk_rest(seq__67369__$1);
var G__68457 = c__5565__auto__;
var G__68458 = cljs.core.count(c__5565__auto__);
var G__68459 = (0);
seq__67369 = G__68456;
chunk__67370 = G__68457;
count__67371 = G__68458;
i__67372 = G__68459;
continue;
} else {
var vec__67397 = cljs.core.first(seq__67369__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67397,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67397,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68468 = cljs.core.next(seq__67369__$1);
var G__68469 = null;
var G__68470 = (0);
var G__68471 = (0);
seq__67369 = G__68468;
chunk__67370 = G__68469;
count__67371 = G__68470;
i__67372 = G__68471;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__67408_68473 = key;
var G__67408_68474__$1 = (((G__67408_68473 instanceof cljs.core.Keyword))?G__67408_68473.fqn:null);
switch (G__67408_68474__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_68492 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_68492,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_68492,"aria-");
}
})())){
el.setAttribute(ks_68492,value);
} else {
(el[ks_68492] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__67429){
var map__67430 = p__67429;
var map__67430__$1 = cljs.core.__destructure_map(map__67430);
var props = map__67430__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67430__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__67433 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67433,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67433,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67433,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__67439 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__67439,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__67439;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__67446 = arguments.length;
switch (G__67446) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__67455){
var vec__67456 = p__67455;
var seq__67457 = cljs.core.seq(vec__67456);
var first__67458 = cljs.core.first(seq__67457);
var seq__67457__$1 = cljs.core.next(seq__67457);
var nn = first__67458;
var first__67458__$1 = cljs.core.first(seq__67457__$1);
var seq__67457__$2 = cljs.core.next(seq__67457__$1);
var np = first__67458__$1;
var nc = seq__67457__$2;
var node = vec__67456;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67461 = nn;
var G__67462 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67461,G__67462) : create_fn.call(null,G__67461,G__67462));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67465 = nn;
var G__67466 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67465,G__67466) : create_fn.call(null,G__67465,G__67466));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__67470 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67470,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67470,(1),null);
var seq__67477_68558 = cljs.core.seq(node_children);
var chunk__67478_68559 = null;
var count__67479_68560 = (0);
var i__67480_68561 = (0);
while(true){
if((i__67480_68561 < count__67479_68560)){
var child_struct_68562 = chunk__67478_68559.cljs$core$IIndexed$_nth$arity$2(null,i__67480_68561);
var children_68563 = shadow.dom.dom_node(child_struct_68562);
if(cljs.core.seq_QMARK_(children_68563)){
var seq__67545_68564 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68563));
var chunk__67547_68565 = null;
var count__67548_68566 = (0);
var i__67549_68567 = (0);
while(true){
if((i__67549_68567 < count__67548_68566)){
var child_68568 = chunk__67547_68565.cljs$core$IIndexed$_nth$arity$2(null,i__67549_68567);
if(cljs.core.truth_(child_68568)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68568);


var G__68569 = seq__67545_68564;
var G__68570 = chunk__67547_68565;
var G__68571 = count__67548_68566;
var G__68572 = (i__67549_68567 + (1));
seq__67545_68564 = G__68569;
chunk__67547_68565 = G__68570;
count__67548_68566 = G__68571;
i__67549_68567 = G__68572;
continue;
} else {
var G__68573 = seq__67545_68564;
var G__68574 = chunk__67547_68565;
var G__68575 = count__67548_68566;
var G__68576 = (i__67549_68567 + (1));
seq__67545_68564 = G__68573;
chunk__67547_68565 = G__68574;
count__67548_68566 = G__68575;
i__67549_68567 = G__68576;
continue;
}
} else {
var temp__5804__auto___68577 = cljs.core.seq(seq__67545_68564);
if(temp__5804__auto___68577){
var seq__67545_68578__$1 = temp__5804__auto___68577;
if(cljs.core.chunked_seq_QMARK_(seq__67545_68578__$1)){
var c__5565__auto___68579 = cljs.core.chunk_first(seq__67545_68578__$1);
var G__68580 = cljs.core.chunk_rest(seq__67545_68578__$1);
var G__68581 = c__5565__auto___68579;
var G__68582 = cljs.core.count(c__5565__auto___68579);
var G__68583 = (0);
seq__67545_68564 = G__68580;
chunk__67547_68565 = G__68581;
count__67548_68566 = G__68582;
i__67549_68567 = G__68583;
continue;
} else {
var child_68585 = cljs.core.first(seq__67545_68578__$1);
if(cljs.core.truth_(child_68585)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68585);


var G__68586 = cljs.core.next(seq__67545_68578__$1);
var G__68587 = null;
var G__68588 = (0);
var G__68589 = (0);
seq__67545_68564 = G__68586;
chunk__67547_68565 = G__68587;
count__67548_68566 = G__68588;
i__67549_68567 = G__68589;
continue;
} else {
var G__68590 = cljs.core.next(seq__67545_68578__$1);
var G__68591 = null;
var G__68592 = (0);
var G__68593 = (0);
seq__67545_68564 = G__68590;
chunk__67547_68565 = G__68591;
count__67548_68566 = G__68592;
i__67549_68567 = G__68593;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68563);
}


var G__68594 = seq__67477_68558;
var G__68595 = chunk__67478_68559;
var G__68596 = count__67479_68560;
var G__68597 = (i__67480_68561 + (1));
seq__67477_68558 = G__68594;
chunk__67478_68559 = G__68595;
count__67479_68560 = G__68596;
i__67480_68561 = G__68597;
continue;
} else {
var temp__5804__auto___68599 = cljs.core.seq(seq__67477_68558);
if(temp__5804__auto___68599){
var seq__67477_68600__$1 = temp__5804__auto___68599;
if(cljs.core.chunked_seq_QMARK_(seq__67477_68600__$1)){
var c__5565__auto___68601 = cljs.core.chunk_first(seq__67477_68600__$1);
var G__68602 = cljs.core.chunk_rest(seq__67477_68600__$1);
var G__68603 = c__5565__auto___68601;
var G__68604 = cljs.core.count(c__5565__auto___68601);
var G__68605 = (0);
seq__67477_68558 = G__68602;
chunk__67478_68559 = G__68603;
count__67479_68560 = G__68604;
i__67480_68561 = G__68605;
continue;
} else {
var child_struct_68606 = cljs.core.first(seq__67477_68600__$1);
var children_68607 = shadow.dom.dom_node(child_struct_68606);
if(cljs.core.seq_QMARK_(children_68607)){
var seq__67569_68608 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68607));
var chunk__67571_68609 = null;
var count__67572_68610 = (0);
var i__67573_68611 = (0);
while(true){
if((i__67573_68611 < count__67572_68610)){
var child_68612 = chunk__67571_68609.cljs$core$IIndexed$_nth$arity$2(null,i__67573_68611);
if(cljs.core.truth_(child_68612)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68612);


var G__68613 = seq__67569_68608;
var G__68614 = chunk__67571_68609;
var G__68615 = count__67572_68610;
var G__68616 = (i__67573_68611 + (1));
seq__67569_68608 = G__68613;
chunk__67571_68609 = G__68614;
count__67572_68610 = G__68615;
i__67573_68611 = G__68616;
continue;
} else {
var G__68617 = seq__67569_68608;
var G__68618 = chunk__67571_68609;
var G__68619 = count__67572_68610;
var G__68620 = (i__67573_68611 + (1));
seq__67569_68608 = G__68617;
chunk__67571_68609 = G__68618;
count__67572_68610 = G__68619;
i__67573_68611 = G__68620;
continue;
}
} else {
var temp__5804__auto___68622__$1 = cljs.core.seq(seq__67569_68608);
if(temp__5804__auto___68622__$1){
var seq__67569_68624__$1 = temp__5804__auto___68622__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67569_68624__$1)){
var c__5565__auto___68625 = cljs.core.chunk_first(seq__67569_68624__$1);
var G__68627 = cljs.core.chunk_rest(seq__67569_68624__$1);
var G__68628 = c__5565__auto___68625;
var G__68629 = cljs.core.count(c__5565__auto___68625);
var G__68630 = (0);
seq__67569_68608 = G__68627;
chunk__67571_68609 = G__68628;
count__67572_68610 = G__68629;
i__67573_68611 = G__68630;
continue;
} else {
var child_68631 = cljs.core.first(seq__67569_68624__$1);
if(cljs.core.truth_(child_68631)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68631);


var G__68633 = cljs.core.next(seq__67569_68624__$1);
var G__68634 = null;
var G__68635 = (0);
var G__68636 = (0);
seq__67569_68608 = G__68633;
chunk__67571_68609 = G__68634;
count__67572_68610 = G__68635;
i__67573_68611 = G__68636;
continue;
} else {
var G__68640 = cljs.core.next(seq__67569_68624__$1);
var G__68641 = null;
var G__68642 = (0);
var G__68643 = (0);
seq__67569_68608 = G__68640;
chunk__67571_68609 = G__68641;
count__67572_68610 = G__68642;
i__67573_68611 = G__68643;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68607);
}


var G__68644 = cljs.core.next(seq__67477_68600__$1);
var G__68645 = null;
var G__68646 = (0);
var G__68647 = (0);
seq__67477_68558 = G__68644;
chunk__67478_68559 = G__68645;
count__67479_68560 = G__68646;
i__67480_68561 = G__68647;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__67617 = cljs.core.seq(node);
var chunk__67618 = null;
var count__67619 = (0);
var i__67620 = (0);
while(true){
if((i__67620 < count__67619)){
var n = chunk__67618.cljs$core$IIndexed$_nth$arity$2(null,i__67620);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68650 = seq__67617;
var G__68651 = chunk__67618;
var G__68652 = count__67619;
var G__68653 = (i__67620 + (1));
seq__67617 = G__68650;
chunk__67618 = G__68651;
count__67619 = G__68652;
i__67620 = G__68653;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67617);
if(temp__5804__auto__){
var seq__67617__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67617__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67617__$1);
var G__68655 = cljs.core.chunk_rest(seq__67617__$1);
var G__68656 = c__5565__auto__;
var G__68657 = cljs.core.count(c__5565__auto__);
var G__68658 = (0);
seq__67617 = G__68655;
chunk__67618 = G__68656;
count__67619 = G__68657;
i__67620 = G__68658;
continue;
} else {
var n = cljs.core.first(seq__67617__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68659 = cljs.core.next(seq__67617__$1);
var G__68660 = null;
var G__68661 = (0);
var G__68662 = (0);
seq__67617 = G__68659;
chunk__67618 = G__68660;
count__67619 = G__68661;
i__67620 = G__68662;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__67660 = arguments.length;
switch (G__67660) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__67667 = arguments.length;
switch (G__67667) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__67690 = arguments.length;
switch (G__67690) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5043__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5772__auto__ = [];
var len__5766__auto___68675 = arguments.length;
var i__5767__auto___68676 = (0);
while(true){
if((i__5767__auto___68676 < len__5766__auto___68675)){
args__5772__auto__.push((arguments[i__5767__auto___68676]));

var G__68681 = (i__5767__auto___68676 + (1));
i__5767__auto___68676 = G__68681;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((0) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5773__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__67758_68682 = cljs.core.seq(nodes);
var chunk__67759_68683 = null;
var count__67760_68684 = (0);
var i__67761_68685 = (0);
while(true){
if((i__67761_68685 < count__67760_68684)){
var node_68686 = chunk__67759_68683.cljs$core$IIndexed$_nth$arity$2(null,i__67761_68685);
fragment.appendChild(shadow.dom._to_dom(node_68686));


var G__68689 = seq__67758_68682;
var G__68690 = chunk__67759_68683;
var G__68691 = count__67760_68684;
var G__68692 = (i__67761_68685 + (1));
seq__67758_68682 = G__68689;
chunk__67759_68683 = G__68690;
count__67760_68684 = G__68691;
i__67761_68685 = G__68692;
continue;
} else {
var temp__5804__auto___68693 = cljs.core.seq(seq__67758_68682);
if(temp__5804__auto___68693){
var seq__67758_68695__$1 = temp__5804__auto___68693;
if(cljs.core.chunked_seq_QMARK_(seq__67758_68695__$1)){
var c__5565__auto___68696 = cljs.core.chunk_first(seq__67758_68695__$1);
var G__68697 = cljs.core.chunk_rest(seq__67758_68695__$1);
var G__68698 = c__5565__auto___68696;
var G__68699 = cljs.core.count(c__5565__auto___68696);
var G__68700 = (0);
seq__67758_68682 = G__68697;
chunk__67759_68683 = G__68698;
count__67760_68684 = G__68699;
i__67761_68685 = G__68700;
continue;
} else {
var node_68701 = cljs.core.first(seq__67758_68695__$1);
fragment.appendChild(shadow.dom._to_dom(node_68701));


var G__68702 = cljs.core.next(seq__67758_68695__$1);
var G__68703 = null;
var G__68704 = (0);
var G__68705 = (0);
seq__67758_68682 = G__68702;
chunk__67759_68683 = G__68703;
count__67760_68684 = G__68704;
i__67761_68685 = G__68705;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq67742){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67742));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__67783_68708 = cljs.core.seq(scripts);
var chunk__67784_68709 = null;
var count__67785_68710 = (0);
var i__67786_68711 = (0);
while(true){
if((i__67786_68711 < count__67785_68710)){
var vec__67810_68712 = chunk__67784_68709.cljs$core$IIndexed$_nth$arity$2(null,i__67786_68711);
var script_tag_68713 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67810_68712,(0),null);
var script_body_68714 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67810_68712,(1),null);
eval(script_body_68714);


var G__68715 = seq__67783_68708;
var G__68716 = chunk__67784_68709;
var G__68717 = count__67785_68710;
var G__68718 = (i__67786_68711 + (1));
seq__67783_68708 = G__68715;
chunk__67784_68709 = G__68716;
count__67785_68710 = G__68717;
i__67786_68711 = G__68718;
continue;
} else {
var temp__5804__auto___68719 = cljs.core.seq(seq__67783_68708);
if(temp__5804__auto___68719){
var seq__67783_68720__$1 = temp__5804__auto___68719;
if(cljs.core.chunked_seq_QMARK_(seq__67783_68720__$1)){
var c__5565__auto___68721 = cljs.core.chunk_first(seq__67783_68720__$1);
var G__68722 = cljs.core.chunk_rest(seq__67783_68720__$1);
var G__68723 = c__5565__auto___68721;
var G__68724 = cljs.core.count(c__5565__auto___68721);
var G__68725 = (0);
seq__67783_68708 = G__68722;
chunk__67784_68709 = G__68723;
count__67785_68710 = G__68724;
i__67786_68711 = G__68725;
continue;
} else {
var vec__67817_68727 = cljs.core.first(seq__67783_68720__$1);
var script_tag_68728 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67817_68727,(0),null);
var script_body_68729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67817_68727,(1),null);
eval(script_body_68729);


var G__68730 = cljs.core.next(seq__67783_68720__$1);
var G__68731 = null;
var G__68732 = (0);
var G__68733 = (0);
seq__67783_68708 = G__68730;
chunk__67784_68709 = G__68731;
count__67785_68710 = G__68732;
i__67786_68711 = G__68733;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__67821){
var vec__67823 = p__67821;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67823,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67823,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__67841 = arguments.length;
switch (G__67841) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__67879 = cljs.core.seq(style_keys);
var chunk__67880 = null;
var count__67881 = (0);
var i__67882 = (0);
while(true){
if((i__67882 < count__67881)){
var it = chunk__67880.cljs$core$IIndexed$_nth$arity$2(null,i__67882);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68736 = seq__67879;
var G__68737 = chunk__67880;
var G__68738 = count__67881;
var G__68739 = (i__67882 + (1));
seq__67879 = G__68736;
chunk__67880 = G__68737;
count__67881 = G__68738;
i__67882 = G__68739;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67879);
if(temp__5804__auto__){
var seq__67879__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67879__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67879__$1);
var G__68741 = cljs.core.chunk_rest(seq__67879__$1);
var G__68742 = c__5565__auto__;
var G__68743 = cljs.core.count(c__5565__auto__);
var G__68744 = (0);
seq__67879 = G__68741;
chunk__67880 = G__68742;
count__67881 = G__68743;
i__67882 = G__68744;
continue;
} else {
var it = cljs.core.first(seq__67879__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68745 = cljs.core.next(seq__67879__$1);
var G__68746 = null;
var G__68747 = (0);
var G__68748 = (0);
seq__67879 = G__68745;
chunk__67880 = G__68746;
count__67881 = G__68747;
i__67882 = G__68748;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k67896,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__67902 = k67896;
var G__67902__$1 = (((G__67902 instanceof cljs.core.Keyword))?G__67902.fqn:null);
switch (G__67902__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67896,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__67903){
var vec__67904 = p__67903;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67904,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67904,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67895){
var self__ = this;
var G__67895__$1 = this;
return (new cljs.core.RecordIter((0),G__67895__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67897,other67898){
var self__ = this;
var this67897__$1 = this;
return (((!((other67898 == null)))) && ((((this67897__$1.constructor === other67898.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67897__$1.x,other67898.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67897__$1.y,other67898.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67897__$1.__extmap,other67898.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k67896){
var self__ = this;
var this__5347__auto____$1 = this;
var G__67918 = k67896;
var G__67918__$1 = (((G__67918 instanceof cljs.core.Keyword))?G__67918.fqn:null);
switch (G__67918__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67896);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__67895){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__67921 = cljs.core.keyword_identical_QMARK_;
var expr__67922 = k__5349__auto__;
if(cljs.core.truth_((pred__67921.cljs$core$IFn$_invoke$arity$2 ? pred__67921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__67922) : pred__67921.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__67922)))){
return (new shadow.dom.Coordinate(G__67895,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67921.cljs$core$IFn$_invoke$arity$2 ? pred__67921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__67922) : pred__67921.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__67922)))){
return (new shadow.dom.Coordinate(self__.x,G__67895,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__67895),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__67895){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__67895,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__67899){
var extmap__5382__auto__ = (function (){var G__67946 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67899,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__67899)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67946);
} else {
return G__67946;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__67899),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__67899),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5340__auto__,k__5341__auto__){
var self__ = this;
var this__5340__auto____$1 = this;
return this__5340__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5341__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k67963,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__67975 = k67963;
var G__67975__$1 = (((G__67975 instanceof cljs.core.Keyword))?G__67975.fqn:null);
switch (G__67975__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67963,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__67980){
var vec__67982 = p__67980;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67982,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67982,(1),null);
return (f__5361__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5361__auto__.cljs$core$IFn$_invoke$arity$3(ret__5363__auto__,k__5364__auto__,v__5365__auto__) : f__5361__auto__.call(null,ret__5363__auto__,k__5364__auto__,v__5365__auto__));
}),init__5362__auto__,this__5360__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5355__auto__,writer__5356__auto__,opts__5357__auto__){
var self__ = this;
var this__5355__auto____$1 = this;
var pr_pair__5358__auto__ = (function (keyval__5359__auto__){
return cljs.core.pr_sequential_writer(writer__5356__auto__,cljs.core.pr_writer,""," ","",opts__5357__auto__,keyval__5359__auto__);
});
return cljs.core.pr_sequential_writer(writer__5356__auto__,pr_pair__5358__auto__,"#shadow.dom.Size{",", ","}",opts__5357__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67962){
var self__ = this;
var G__67962__$1 = this;
return (new cljs.core.RecordIter((0),G__67962__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5335__auto__){
var self__ = this;
var this__5335__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5344__auto__){
var self__ = this;
var this__5344__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
var h__5152__auto__ = self__.__hash;
if((!((h__5152__auto__ == null)))){
return h__5152__auto__;
} else {
var h__5152__auto____$1 = (function (coll__5337__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5337__auto__));
})(this__5336__auto____$1);
(self__.__hash = h__5152__auto____$1);

return h__5152__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67964,other67965){
var self__ = this;
var this67964__$1 = this;
return (((!((other67965 == null)))) && ((((this67964__$1.constructor === other67965.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67964__$1.w,other67965.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67964__$1.h,other67965.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67964__$1.__extmap,other67965.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5350__auto__,k__5351__auto__){
var self__ = this;
var this__5350__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5351__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5350__auto____$1),self__.__meta),k__5351__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5351__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k67963){
var self__ = this;
var this__5347__auto____$1 = this;
var G__68030 = k67963;
var G__68030__$1 = (((G__68030 instanceof cljs.core.Keyword))?G__68030.fqn:null);
switch (G__68030__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67963);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__67962){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__68033 = cljs.core.keyword_identical_QMARK_;
var expr__68034 = k__5349__auto__;
if(cljs.core.truth_((pred__68033.cljs$core$IFn$_invoke$arity$2 ? pred__68033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__68034) : pred__68033.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__68034)))){
return (new shadow.dom.Size(G__67962,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__68033.cljs$core$IFn$_invoke$arity$2 ? pred__68033.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__68034) : pred__68033.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__68034)))){
return (new shadow.dom.Size(self__.w,G__67962,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__67962),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__67962){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__67962,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5345__auto__,entry__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5346__auto__)){
return this__5345__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5346__auto__,(0)),cljs.core._nth(entry__5346__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5345__auto____$1,entry__5346__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5386__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5386__auto__,writer__5387__auto__){
return cljs.core._write(writer__5387__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__67969){
var extmap__5382__auto__ = (function (){var G__68053 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67969,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__67969)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__68053);
} else {
return G__68053;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__67969),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__67969),null,cljs.core.not_empty(extmap__5382__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5630__auto__ = opts;
var l__5631__auto__ = a__5630__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5631__auto__)){
var G__68835 = (i + (1));
var G__68836 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__68835;
ret = G__68836;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68078){
var vec__68079 = p__68078;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68079,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68079,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__68085 = arguments.length;
switch (G__68085) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__68849 = ps;
var G__68850 = (i + (1));
el__$1 = G__68849;
i = G__68850;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__68093 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68093,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68093,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68093,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__68096_68853 = cljs.core.seq(props);
var chunk__68097_68854 = null;
var count__68098_68855 = (0);
var i__68099_68856 = (0);
while(true){
if((i__68099_68856 < count__68098_68855)){
var vec__68106_68857 = chunk__68097_68854.cljs$core$IIndexed$_nth$arity$2(null,i__68099_68856);
var k_68858 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68106_68857,(0),null);
var v_68859 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68106_68857,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_68858);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68858),v_68859);


var G__68860 = seq__68096_68853;
var G__68861 = chunk__68097_68854;
var G__68862 = count__68098_68855;
var G__68863 = (i__68099_68856 + (1));
seq__68096_68853 = G__68860;
chunk__68097_68854 = G__68861;
count__68098_68855 = G__68862;
i__68099_68856 = G__68863;
continue;
} else {
var temp__5804__auto___68865 = cljs.core.seq(seq__68096_68853);
if(temp__5804__auto___68865){
var seq__68096_68868__$1 = temp__5804__auto___68865;
if(cljs.core.chunked_seq_QMARK_(seq__68096_68868__$1)){
var c__5565__auto___68869 = cljs.core.chunk_first(seq__68096_68868__$1);
var G__68870 = cljs.core.chunk_rest(seq__68096_68868__$1);
var G__68871 = c__5565__auto___68869;
var G__68872 = cljs.core.count(c__5565__auto___68869);
var G__68873 = (0);
seq__68096_68853 = G__68870;
chunk__68097_68854 = G__68871;
count__68098_68855 = G__68872;
i__68099_68856 = G__68873;
continue;
} else {
var vec__68111_68875 = cljs.core.first(seq__68096_68868__$1);
var k_68876 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68111_68875,(0),null);
var v_68877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68111_68875,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_68876);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68876),v_68877);


var G__68886 = cljs.core.next(seq__68096_68868__$1);
var G__68887 = null;
var G__68888 = (0);
var G__68889 = (0);
seq__68096_68853 = G__68886;
chunk__68097_68854 = G__68887;
count__68098_68855 = G__68888;
i__68099_68856 = G__68889;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__68127 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68127,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68127,(1),null);
var seq__68130_68894 = cljs.core.seq(node_children);
var chunk__68132_68895 = null;
var count__68133_68896 = (0);
var i__68134_68897 = (0);
while(true){
if((i__68134_68897 < count__68133_68896)){
var child_struct_68898 = chunk__68132_68895.cljs$core$IIndexed$_nth$arity$2(null,i__68134_68897);
if((!((child_struct_68898 == null)))){
if(typeof child_struct_68898 === 'string'){
var text_68899 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68899),child_struct_68898].join(''));
} else {
var children_68900 = shadow.dom.svg_node(child_struct_68898);
if(cljs.core.seq_QMARK_(children_68900)){
var seq__68173_68901 = cljs.core.seq(children_68900);
var chunk__68175_68902 = null;
var count__68176_68903 = (0);
var i__68177_68904 = (0);
while(true){
if((i__68177_68904 < count__68176_68903)){
var child_68905 = chunk__68175_68902.cljs$core$IIndexed$_nth$arity$2(null,i__68177_68904);
if(cljs.core.truth_(child_68905)){
node.appendChild(child_68905);


var G__68907 = seq__68173_68901;
var G__68908 = chunk__68175_68902;
var G__68909 = count__68176_68903;
var G__68910 = (i__68177_68904 + (1));
seq__68173_68901 = G__68907;
chunk__68175_68902 = G__68908;
count__68176_68903 = G__68909;
i__68177_68904 = G__68910;
continue;
} else {
var G__68911 = seq__68173_68901;
var G__68912 = chunk__68175_68902;
var G__68913 = count__68176_68903;
var G__68914 = (i__68177_68904 + (1));
seq__68173_68901 = G__68911;
chunk__68175_68902 = G__68912;
count__68176_68903 = G__68913;
i__68177_68904 = G__68914;
continue;
}
} else {
var temp__5804__auto___68918 = cljs.core.seq(seq__68173_68901);
if(temp__5804__auto___68918){
var seq__68173_68919__$1 = temp__5804__auto___68918;
if(cljs.core.chunked_seq_QMARK_(seq__68173_68919__$1)){
var c__5565__auto___68920 = cljs.core.chunk_first(seq__68173_68919__$1);
var G__68921 = cljs.core.chunk_rest(seq__68173_68919__$1);
var G__68922 = c__5565__auto___68920;
var G__68923 = cljs.core.count(c__5565__auto___68920);
var G__68924 = (0);
seq__68173_68901 = G__68921;
chunk__68175_68902 = G__68922;
count__68176_68903 = G__68923;
i__68177_68904 = G__68924;
continue;
} else {
var child_68925 = cljs.core.first(seq__68173_68919__$1);
if(cljs.core.truth_(child_68925)){
node.appendChild(child_68925);


var G__68926 = cljs.core.next(seq__68173_68919__$1);
var G__68927 = null;
var G__68928 = (0);
var G__68929 = (0);
seq__68173_68901 = G__68926;
chunk__68175_68902 = G__68927;
count__68176_68903 = G__68928;
i__68177_68904 = G__68929;
continue;
} else {
var G__68930 = cljs.core.next(seq__68173_68919__$1);
var G__68931 = null;
var G__68932 = (0);
var G__68933 = (0);
seq__68173_68901 = G__68930;
chunk__68175_68902 = G__68931;
count__68176_68903 = G__68932;
i__68177_68904 = G__68933;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68900);
}
}


var G__68934 = seq__68130_68894;
var G__68935 = chunk__68132_68895;
var G__68936 = count__68133_68896;
var G__68937 = (i__68134_68897 + (1));
seq__68130_68894 = G__68934;
chunk__68132_68895 = G__68935;
count__68133_68896 = G__68936;
i__68134_68897 = G__68937;
continue;
} else {
var G__68938 = seq__68130_68894;
var G__68939 = chunk__68132_68895;
var G__68940 = count__68133_68896;
var G__68941 = (i__68134_68897 + (1));
seq__68130_68894 = G__68938;
chunk__68132_68895 = G__68939;
count__68133_68896 = G__68940;
i__68134_68897 = G__68941;
continue;
}
} else {
var temp__5804__auto___68942 = cljs.core.seq(seq__68130_68894);
if(temp__5804__auto___68942){
var seq__68130_68943__$1 = temp__5804__auto___68942;
if(cljs.core.chunked_seq_QMARK_(seq__68130_68943__$1)){
var c__5565__auto___68944 = cljs.core.chunk_first(seq__68130_68943__$1);
var G__68945 = cljs.core.chunk_rest(seq__68130_68943__$1);
var G__68946 = c__5565__auto___68944;
var G__68947 = cljs.core.count(c__5565__auto___68944);
var G__68948 = (0);
seq__68130_68894 = G__68945;
chunk__68132_68895 = G__68946;
count__68133_68896 = G__68947;
i__68134_68897 = G__68948;
continue;
} else {
var child_struct_68949 = cljs.core.first(seq__68130_68943__$1);
if((!((child_struct_68949 == null)))){
if(typeof child_struct_68949 === 'string'){
var text_68950 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68950),child_struct_68949].join(''));
} else {
var children_68952 = shadow.dom.svg_node(child_struct_68949);
if(cljs.core.seq_QMARK_(children_68952)){
var seq__68199_68956 = cljs.core.seq(children_68952);
var chunk__68201_68957 = null;
var count__68202_68958 = (0);
var i__68203_68959 = (0);
while(true){
if((i__68203_68959 < count__68202_68958)){
var child_68960 = chunk__68201_68957.cljs$core$IIndexed$_nth$arity$2(null,i__68203_68959);
if(cljs.core.truth_(child_68960)){
node.appendChild(child_68960);


var G__68962 = seq__68199_68956;
var G__68963 = chunk__68201_68957;
var G__68964 = count__68202_68958;
var G__68965 = (i__68203_68959 + (1));
seq__68199_68956 = G__68962;
chunk__68201_68957 = G__68963;
count__68202_68958 = G__68964;
i__68203_68959 = G__68965;
continue;
} else {
var G__68966 = seq__68199_68956;
var G__68967 = chunk__68201_68957;
var G__68968 = count__68202_68958;
var G__68969 = (i__68203_68959 + (1));
seq__68199_68956 = G__68966;
chunk__68201_68957 = G__68967;
count__68202_68958 = G__68968;
i__68203_68959 = G__68969;
continue;
}
} else {
var temp__5804__auto___68970__$1 = cljs.core.seq(seq__68199_68956);
if(temp__5804__auto___68970__$1){
var seq__68199_68971__$1 = temp__5804__auto___68970__$1;
if(cljs.core.chunked_seq_QMARK_(seq__68199_68971__$1)){
var c__5565__auto___68972 = cljs.core.chunk_first(seq__68199_68971__$1);
var G__68973 = cljs.core.chunk_rest(seq__68199_68971__$1);
var G__68974 = c__5565__auto___68972;
var G__68975 = cljs.core.count(c__5565__auto___68972);
var G__68976 = (0);
seq__68199_68956 = G__68973;
chunk__68201_68957 = G__68974;
count__68202_68958 = G__68975;
i__68203_68959 = G__68976;
continue;
} else {
var child_68977 = cljs.core.first(seq__68199_68971__$1);
if(cljs.core.truth_(child_68977)){
node.appendChild(child_68977);


var G__68978 = cljs.core.next(seq__68199_68971__$1);
var G__68979 = null;
var G__68980 = (0);
var G__68981 = (0);
seq__68199_68956 = G__68978;
chunk__68201_68957 = G__68979;
count__68202_68958 = G__68980;
i__68203_68959 = G__68981;
continue;
} else {
var G__68982 = cljs.core.next(seq__68199_68971__$1);
var G__68983 = null;
var G__68984 = (0);
var G__68985 = (0);
seq__68199_68956 = G__68982;
chunk__68201_68957 = G__68983;
count__68202_68958 = G__68984;
i__68203_68959 = G__68985;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68952);
}
}


var G__68986 = cljs.core.next(seq__68130_68943__$1);
var G__68987 = null;
var G__68988 = (0);
var G__68989 = (0);
seq__68130_68894 = G__68986;
chunk__68132_68895 = G__68987;
count__68133_68896 = G__68988;
i__68134_68897 = G__68989;
continue;
} else {
var G__68990 = cljs.core.next(seq__68130_68943__$1);
var G__68991 = null;
var G__68992 = (0);
var G__68993 = (0);
seq__68130_68894 = G__68990;
chunk__68132_68895 = G__68991;
count__68133_68896 = G__68992;
i__68134_68897 = G__68993;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5772__auto__ = [];
var len__5766__auto___68995 = arguments.length;
var i__5767__auto___68996 = (0);
while(true){
if((i__5767__auto___68996 < len__5766__auto___68995)){
args__5772__auto__.push((arguments[i__5767__auto___68996]));

var G__68999 = (i__5767__auto___68996 + (1));
i__5767__auto___68996 = G__68999;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq68219){
var G__68220 = cljs.core.first(seq68219);
var seq68219__$1 = cljs.core.next(seq68219);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68220,seq68219__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__68223 = arguments.length;
switch (G__68223) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5041__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5041__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5041__auto__;
}
})())){
var c__64537__auto___69008 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64538__auto__ = (function (){var switch__64312__auto__ = (function (state_68260){
var state_val_68261 = (state_68260[(1)]);
if((state_val_68261 === (1))){
var state_68260__$1 = state_68260;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68260__$1,(2),once_or_cleanup);
} else {
if((state_val_68261 === (2))){
var inst_68257 = (state_68260[(2)]);
var inst_68258 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_68260__$1 = (function (){var statearr_68281 = state_68260;
(statearr_68281[(7)] = inst_68257);

return statearr_68281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68260__$1,inst_68258);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__64313__auto__ = null;
var shadow$dom$state_machine__64313__auto____0 = (function (){
var statearr_68293 = [null,null,null,null,null,null,null,null];
(statearr_68293[(0)] = shadow$dom$state_machine__64313__auto__);

(statearr_68293[(1)] = (1));

return statearr_68293;
});
var shadow$dom$state_machine__64313__auto____1 = (function (state_68260){
while(true){
var ret_value__64314__auto__ = (function (){try{while(true){
var result__64315__auto__ = switch__64312__auto__(state_68260);
if(cljs.core.keyword_identical_QMARK_(result__64315__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64315__auto__;
}
break;
}
}catch (e68309){if((e68309 instanceof Object)){
var ex__64316__auto__ = e68309;
var statearr_68311_69010 = state_68260;
(statearr_68311_69010[(5)] = ex__64316__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64314__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69013 = state_68260;
state_68260 = G__69013;
continue;
} else {
return ret_value__64314__auto__;
}
break;
}
});
shadow$dom$state_machine__64313__auto__ = function(state_68260){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__64313__auto____0.call(this);
case 1:
return shadow$dom$state_machine__64313__auto____1.call(this,state_68260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__64313__auto____0;
shadow$dom$state_machine__64313__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__64313__auto____1;
return shadow$dom$state_machine__64313__auto__;
})()
})();
var state__64539__auto__ = (function (){var statearr_68321 = f__64538__auto__();
(statearr_68321[(6)] = c__64537__auto___69008);

return statearr_68321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64539__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
