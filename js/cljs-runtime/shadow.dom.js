goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_68080 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_68080(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_68082 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_68082(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__67006 = coll;
var G__67007 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__67006,G__67007) : shadow.dom.lazy_native_coll_seq.call(null,G__67006,G__67007));
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
var G__67031 = arguments.length;
switch (G__67031) {
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
var G__67051 = arguments.length;
switch (G__67051) {
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
var G__67062 = arguments.length;
switch (G__67062) {
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
var G__67073 = arguments.length;
switch (G__67073) {
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
var G__67084 = arguments.length;
switch (G__67084) {
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
var G__67098 = arguments.length;
switch (G__67098) {
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
}catch (e67119){if((e67119 instanceof Object)){
var e = e67119;
return console.log("didnt support attachEvent",el,e);
} else {
throw e67119;

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
var seq__67122 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__67123 = null;
var count__67124 = (0);
var i__67125 = (0);
while(true){
if((i__67125 < count__67124)){
var el = chunk__67123.cljs$core$IIndexed$_nth$arity$2(null,i__67125);
var handler_68111__$1 = ((function (seq__67122,chunk__67123,count__67124,i__67125,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67122,chunk__67123,count__67124,i__67125,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68111__$1);


var G__68112 = seq__67122;
var G__68113 = chunk__67123;
var G__68114 = count__67124;
var G__68115 = (i__67125 + (1));
seq__67122 = G__68112;
chunk__67123 = G__68113;
count__67124 = G__68114;
i__67125 = G__68115;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67122);
if(temp__5804__auto__){
var seq__67122__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67122__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67122__$1);
var G__68117 = cljs.core.chunk_rest(seq__67122__$1);
var G__68118 = c__5565__auto__;
var G__68119 = cljs.core.count(c__5565__auto__);
var G__68120 = (0);
seq__67122 = G__68117;
chunk__67123 = G__68118;
count__67124 = G__68119;
i__67125 = G__68120;
continue;
} else {
var el = cljs.core.first(seq__67122__$1);
var handler_68121__$1 = ((function (seq__67122,chunk__67123,count__67124,i__67125,el,seq__67122__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__67122,chunk__67123,count__67124,i__67125,el,seq__67122__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_68121__$1);


var G__68122 = cljs.core.next(seq__67122__$1);
var G__68123 = null;
var G__68124 = (0);
var G__68125 = (0);
seq__67122 = G__68122;
chunk__67123 = G__68123;
count__67124 = G__68124;
i__67125 = G__68125;
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
var G__67154 = arguments.length;
switch (G__67154) {
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
var seq__67178 = cljs.core.seq(events);
var chunk__67179 = null;
var count__67180 = (0);
var i__67181 = (0);
while(true){
if((i__67181 < count__67180)){
var vec__67209 = chunk__67179.cljs$core$IIndexed$_nth$arity$2(null,i__67181);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67209,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67209,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68127 = seq__67178;
var G__68128 = chunk__67179;
var G__68129 = count__67180;
var G__68130 = (i__67181 + (1));
seq__67178 = G__68127;
chunk__67179 = G__68128;
count__67180 = G__68129;
i__67181 = G__68130;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67178);
if(temp__5804__auto__){
var seq__67178__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67178__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67178__$1);
var G__68131 = cljs.core.chunk_rest(seq__67178__$1);
var G__68132 = c__5565__auto__;
var G__68133 = cljs.core.count(c__5565__auto__);
var G__68134 = (0);
seq__67178 = G__68131;
chunk__67179 = G__68132;
count__67180 = G__68133;
i__67181 = G__68134;
continue;
} else {
var vec__67225 = cljs.core.first(seq__67178__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67225,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67225,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__68135 = cljs.core.next(seq__67178__$1);
var G__68136 = null;
var G__68137 = (0);
var G__68138 = (0);
seq__67178 = G__68135;
chunk__67179 = G__68136;
count__67180 = G__68137;
i__67181 = G__68138;
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
var seq__67233 = cljs.core.seq(styles);
var chunk__67234 = null;
var count__67235 = (0);
var i__67236 = (0);
while(true){
if((i__67236 < count__67235)){
var vec__67247 = chunk__67234.cljs$core$IIndexed$_nth$arity$2(null,i__67236);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67247,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67247,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68139 = seq__67233;
var G__68140 = chunk__67234;
var G__68141 = count__67235;
var G__68142 = (i__67236 + (1));
seq__67233 = G__68139;
chunk__67234 = G__68140;
count__67235 = G__68141;
i__67236 = G__68142;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67233);
if(temp__5804__auto__){
var seq__67233__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67233__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67233__$1);
var G__68143 = cljs.core.chunk_rest(seq__67233__$1);
var G__68144 = c__5565__auto__;
var G__68145 = cljs.core.count(c__5565__auto__);
var G__68146 = (0);
seq__67233 = G__68143;
chunk__67234 = G__68144;
count__67235 = G__68145;
i__67236 = G__68146;
continue;
} else {
var vec__67252 = cljs.core.first(seq__67233__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67252,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67252,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__68147 = cljs.core.next(seq__67233__$1);
var G__68148 = null;
var G__68149 = (0);
var G__68150 = (0);
seq__67233 = G__68147;
chunk__67234 = G__68148;
count__67235 = G__68149;
i__67236 = G__68150;
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
var G__67255_68151 = key;
var G__67255_68152__$1 = (((G__67255_68151 instanceof cljs.core.Keyword))?G__67255_68151.fqn:null);
switch (G__67255_68152__$1) {
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
var ks_68155 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5043__auto__ = goog.string.startsWith(ks_68155,"data-");
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return goog.string.startsWith(ks_68155,"aria-");
}
})())){
el.setAttribute(ks_68155,value);
} else {
(el[ks_68155] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__67304){
var map__67307 = p__67304;
var map__67307__$1 = cljs.core.__destructure_map(map__67307);
var props = map__67307__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67307__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__67309 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67309,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67309,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67309,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__67315 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__67315,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__67315;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__67322 = arguments.length;
switch (G__67322) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__67332){
var vec__67333 = p__67332;
var seq__67334 = cljs.core.seq(vec__67333);
var first__67335 = cljs.core.first(seq__67334);
var seq__67334__$1 = cljs.core.next(seq__67334);
var nn = first__67335;
var first__67335__$1 = cljs.core.first(seq__67334__$1);
var seq__67334__$2 = cljs.core.next(seq__67334__$1);
var np = first__67335__$1;
var nc = seq__67334__$2;
var node = vec__67333;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67339 = nn;
var G__67340 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67339,G__67340) : create_fn.call(null,G__67339,G__67340));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67342 = nn;
var G__67343 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__67342,G__67343) : create_fn.call(null,G__67342,G__67343));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__67350 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67350,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67350,(1),null);
var seq__67353_68162 = cljs.core.seq(node_children);
var chunk__67354_68163 = null;
var count__67355_68164 = (0);
var i__67356_68165 = (0);
while(true){
if((i__67356_68165 < count__67355_68164)){
var child_struct_68166 = chunk__67354_68163.cljs$core$IIndexed$_nth$arity$2(null,i__67356_68165);
var children_68167 = shadow.dom.dom_node(child_struct_68166);
if(cljs.core.seq_QMARK_(children_68167)){
var seq__67397_68172 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68167));
var chunk__67399_68173 = null;
var count__67400_68174 = (0);
var i__67401_68175 = (0);
while(true){
if((i__67401_68175 < count__67400_68174)){
var child_68176 = chunk__67399_68173.cljs$core$IIndexed$_nth$arity$2(null,i__67401_68175);
if(cljs.core.truth_(child_68176)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68176);


var G__68181 = seq__67397_68172;
var G__68182 = chunk__67399_68173;
var G__68183 = count__67400_68174;
var G__68184 = (i__67401_68175 + (1));
seq__67397_68172 = G__68181;
chunk__67399_68173 = G__68182;
count__67400_68174 = G__68183;
i__67401_68175 = G__68184;
continue;
} else {
var G__68185 = seq__67397_68172;
var G__68186 = chunk__67399_68173;
var G__68187 = count__67400_68174;
var G__68188 = (i__67401_68175 + (1));
seq__67397_68172 = G__68185;
chunk__67399_68173 = G__68186;
count__67400_68174 = G__68187;
i__67401_68175 = G__68188;
continue;
}
} else {
var temp__5804__auto___68189 = cljs.core.seq(seq__67397_68172);
if(temp__5804__auto___68189){
var seq__67397_68190__$1 = temp__5804__auto___68189;
if(cljs.core.chunked_seq_QMARK_(seq__67397_68190__$1)){
var c__5565__auto___68191 = cljs.core.chunk_first(seq__67397_68190__$1);
var G__68192 = cljs.core.chunk_rest(seq__67397_68190__$1);
var G__68193 = c__5565__auto___68191;
var G__68194 = cljs.core.count(c__5565__auto___68191);
var G__68195 = (0);
seq__67397_68172 = G__68192;
chunk__67399_68173 = G__68193;
count__67400_68174 = G__68194;
i__67401_68175 = G__68195;
continue;
} else {
var child_68196 = cljs.core.first(seq__67397_68190__$1);
if(cljs.core.truth_(child_68196)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68196);


var G__68197 = cljs.core.next(seq__67397_68190__$1);
var G__68198 = null;
var G__68199 = (0);
var G__68200 = (0);
seq__67397_68172 = G__68197;
chunk__67399_68173 = G__68198;
count__67400_68174 = G__68199;
i__67401_68175 = G__68200;
continue;
} else {
var G__68201 = cljs.core.next(seq__67397_68190__$1);
var G__68202 = null;
var G__68203 = (0);
var G__68204 = (0);
seq__67397_68172 = G__68201;
chunk__67399_68173 = G__68202;
count__67400_68174 = G__68203;
i__67401_68175 = G__68204;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68167);
}


var G__68205 = seq__67353_68162;
var G__68206 = chunk__67354_68163;
var G__68207 = count__67355_68164;
var G__68208 = (i__67356_68165 + (1));
seq__67353_68162 = G__68205;
chunk__67354_68163 = G__68206;
count__67355_68164 = G__68207;
i__67356_68165 = G__68208;
continue;
} else {
var temp__5804__auto___68209 = cljs.core.seq(seq__67353_68162);
if(temp__5804__auto___68209){
var seq__67353_68210__$1 = temp__5804__auto___68209;
if(cljs.core.chunked_seq_QMARK_(seq__67353_68210__$1)){
var c__5565__auto___68211 = cljs.core.chunk_first(seq__67353_68210__$1);
var G__68212 = cljs.core.chunk_rest(seq__67353_68210__$1);
var G__68213 = c__5565__auto___68211;
var G__68214 = cljs.core.count(c__5565__auto___68211);
var G__68215 = (0);
seq__67353_68162 = G__68212;
chunk__67354_68163 = G__68213;
count__67355_68164 = G__68214;
i__67356_68165 = G__68215;
continue;
} else {
var child_struct_68216 = cljs.core.first(seq__67353_68210__$1);
var children_68222 = shadow.dom.dom_node(child_struct_68216);
if(cljs.core.seq_QMARK_(children_68222)){
var seq__67427_68224 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_68222));
var chunk__67429_68225 = null;
var count__67430_68226 = (0);
var i__67431_68227 = (0);
while(true){
if((i__67431_68227 < count__67430_68226)){
var child_68228 = chunk__67429_68225.cljs$core$IIndexed$_nth$arity$2(null,i__67431_68227);
if(cljs.core.truth_(child_68228)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68228);


var G__68229 = seq__67427_68224;
var G__68230 = chunk__67429_68225;
var G__68231 = count__67430_68226;
var G__68232 = (i__67431_68227 + (1));
seq__67427_68224 = G__68229;
chunk__67429_68225 = G__68230;
count__67430_68226 = G__68231;
i__67431_68227 = G__68232;
continue;
} else {
var G__68243 = seq__67427_68224;
var G__68244 = chunk__67429_68225;
var G__68245 = count__67430_68226;
var G__68246 = (i__67431_68227 + (1));
seq__67427_68224 = G__68243;
chunk__67429_68225 = G__68244;
count__67430_68226 = G__68245;
i__67431_68227 = G__68246;
continue;
}
} else {
var temp__5804__auto___68247__$1 = cljs.core.seq(seq__67427_68224);
if(temp__5804__auto___68247__$1){
var seq__67427_68248__$1 = temp__5804__auto___68247__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67427_68248__$1)){
var c__5565__auto___68249 = cljs.core.chunk_first(seq__67427_68248__$1);
var G__68250 = cljs.core.chunk_rest(seq__67427_68248__$1);
var G__68251 = c__5565__auto___68249;
var G__68252 = cljs.core.count(c__5565__auto___68249);
var G__68253 = (0);
seq__67427_68224 = G__68250;
chunk__67429_68225 = G__68251;
count__67430_68226 = G__68252;
i__67431_68227 = G__68253;
continue;
} else {
var child_68254 = cljs.core.first(seq__67427_68248__$1);
if(cljs.core.truth_(child_68254)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_68254);


var G__68259 = cljs.core.next(seq__67427_68248__$1);
var G__68260 = null;
var G__68261 = (0);
var G__68262 = (0);
seq__67427_68224 = G__68259;
chunk__67429_68225 = G__68260;
count__67430_68226 = G__68261;
i__67431_68227 = G__68262;
continue;
} else {
var G__68263 = cljs.core.next(seq__67427_68248__$1);
var G__68264 = null;
var G__68265 = (0);
var G__68266 = (0);
seq__67427_68224 = G__68263;
chunk__67429_68225 = G__68264;
count__67430_68226 = G__68265;
i__67431_68227 = G__68266;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_68222);
}


var G__68267 = cljs.core.next(seq__67353_68210__$1);
var G__68268 = null;
var G__68269 = (0);
var G__68270 = (0);
seq__67353_68162 = G__68267;
chunk__67354_68163 = G__68268;
count__67355_68164 = G__68269;
i__67356_68165 = G__68270;
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
var seq__67477 = cljs.core.seq(node);
var chunk__67478 = null;
var count__67479 = (0);
var i__67480 = (0);
while(true){
if((i__67480 < count__67479)){
var n = chunk__67478.cljs$core$IIndexed$_nth$arity$2(null,i__67480);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68277 = seq__67477;
var G__68278 = chunk__67478;
var G__68279 = count__67479;
var G__68280 = (i__67480 + (1));
seq__67477 = G__68277;
chunk__67478 = G__68278;
count__67479 = G__68279;
i__67480 = G__68280;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67477);
if(temp__5804__auto__){
var seq__67477__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67477__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67477__$1);
var G__68281 = cljs.core.chunk_rest(seq__67477__$1);
var G__68282 = c__5565__auto__;
var G__68283 = cljs.core.count(c__5565__auto__);
var G__68284 = (0);
seq__67477 = G__68281;
chunk__67478 = G__68282;
count__67479 = G__68283;
i__67480 = G__68284;
continue;
} else {
var n = cljs.core.first(seq__67477__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__68285 = cljs.core.next(seq__67477__$1);
var G__68286 = null;
var G__68287 = (0);
var G__68288 = (0);
seq__67477 = G__68285;
chunk__67478 = G__68286;
count__67479 = G__68287;
i__67480 = G__68288;
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
var G__67504 = arguments.length;
switch (G__67504) {
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
var G__67516 = arguments.length;
switch (G__67516) {
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
var G__67536 = arguments.length;
switch (G__67536) {
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
var len__5766__auto___68298 = arguments.length;
var i__5767__auto___68299 = (0);
while(true){
if((i__5767__auto___68299 < len__5766__auto___68298)){
args__5772__auto__.push((arguments[i__5767__auto___68299]));

var G__68300 = (i__5767__auto___68299 + (1));
i__5767__auto___68299 = G__68300;
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
var seq__67565_68303 = cljs.core.seq(nodes);
var chunk__67566_68304 = null;
var count__67567_68305 = (0);
var i__67568_68306 = (0);
while(true){
if((i__67568_68306 < count__67567_68305)){
var node_68307 = chunk__67566_68304.cljs$core$IIndexed$_nth$arity$2(null,i__67568_68306);
fragment.appendChild(shadow.dom._to_dom(node_68307));


var G__68308 = seq__67565_68303;
var G__68309 = chunk__67566_68304;
var G__68310 = count__67567_68305;
var G__68311 = (i__67568_68306 + (1));
seq__67565_68303 = G__68308;
chunk__67566_68304 = G__68309;
count__67567_68305 = G__68310;
i__67568_68306 = G__68311;
continue;
} else {
var temp__5804__auto___68312 = cljs.core.seq(seq__67565_68303);
if(temp__5804__auto___68312){
var seq__67565_68313__$1 = temp__5804__auto___68312;
if(cljs.core.chunked_seq_QMARK_(seq__67565_68313__$1)){
var c__5565__auto___68314 = cljs.core.chunk_first(seq__67565_68313__$1);
var G__68315 = cljs.core.chunk_rest(seq__67565_68313__$1);
var G__68316 = c__5565__auto___68314;
var G__68317 = cljs.core.count(c__5565__auto___68314);
var G__68318 = (0);
seq__67565_68303 = G__68315;
chunk__67566_68304 = G__68316;
count__67567_68305 = G__68317;
i__67568_68306 = G__68318;
continue;
} else {
var node_68319 = cljs.core.first(seq__67565_68313__$1);
fragment.appendChild(shadow.dom._to_dom(node_68319));


var G__68320 = cljs.core.next(seq__67565_68313__$1);
var G__68321 = null;
var G__68322 = (0);
var G__68323 = (0);
seq__67565_68303 = G__68320;
chunk__67566_68304 = G__68321;
count__67567_68305 = G__68322;
i__67568_68306 = G__68323;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq67560){
var self__5752__auto__ = this;
return self__5752__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq67560));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__67586_68335 = cljs.core.seq(scripts);
var chunk__67587_68336 = null;
var count__67588_68337 = (0);
var i__67589_68338 = (0);
while(true){
if((i__67589_68338 < count__67588_68337)){
var vec__67614_68345 = chunk__67587_68336.cljs$core$IIndexed$_nth$arity$2(null,i__67589_68338);
var script_tag_68346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67614_68345,(0),null);
var script_body_68347 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67614_68345,(1),null);
eval(script_body_68347);


var G__68355 = seq__67586_68335;
var G__68356 = chunk__67587_68336;
var G__68357 = count__67588_68337;
var G__68358 = (i__67589_68338 + (1));
seq__67586_68335 = G__68355;
chunk__67587_68336 = G__68356;
count__67588_68337 = G__68357;
i__67589_68338 = G__68358;
continue;
} else {
var temp__5804__auto___68363 = cljs.core.seq(seq__67586_68335);
if(temp__5804__auto___68363){
var seq__67586_68365__$1 = temp__5804__auto___68363;
if(cljs.core.chunked_seq_QMARK_(seq__67586_68365__$1)){
var c__5565__auto___68366 = cljs.core.chunk_first(seq__67586_68365__$1);
var G__68367 = cljs.core.chunk_rest(seq__67586_68365__$1);
var G__68368 = c__5565__auto___68366;
var G__68369 = cljs.core.count(c__5565__auto___68366);
var G__68370 = (0);
seq__67586_68335 = G__68367;
chunk__67587_68336 = G__68368;
count__67588_68337 = G__68369;
i__67589_68338 = G__68370;
continue;
} else {
var vec__67621_68372 = cljs.core.first(seq__67586_68365__$1);
var script_tag_68373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67621_68372,(0),null);
var script_body_68374 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67621_68372,(1),null);
eval(script_body_68374);


var G__68375 = cljs.core.next(seq__67586_68365__$1);
var G__68376 = null;
var G__68377 = (0);
var G__68378 = (0);
seq__67586_68335 = G__68375;
chunk__67587_68336 = G__68376;
count__67588_68337 = G__68377;
i__67589_68338 = G__68378;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__67633){
var vec__67634 = p__67633;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67634,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67634,(1),null);
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
var G__67648 = arguments.length;
switch (G__67648) {
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
var seq__67669 = cljs.core.seq(style_keys);
var chunk__67670 = null;
var count__67671 = (0);
var i__67672 = (0);
while(true){
if((i__67672 < count__67671)){
var it = chunk__67670.cljs$core$IIndexed$_nth$arity$2(null,i__67672);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68404 = seq__67669;
var G__68405 = chunk__67670;
var G__68406 = count__67671;
var G__68407 = (i__67672 + (1));
seq__67669 = G__68404;
chunk__67670 = G__68405;
count__67671 = G__68406;
i__67672 = G__68407;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__67669);
if(temp__5804__auto__){
var seq__67669__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__67669__$1)){
var c__5565__auto__ = cljs.core.chunk_first(seq__67669__$1);
var G__68414 = cljs.core.chunk_rest(seq__67669__$1);
var G__68415 = c__5565__auto__;
var G__68416 = cljs.core.count(c__5565__auto__);
var G__68417 = (0);
seq__67669 = G__68414;
chunk__67670 = G__68415;
count__67671 = G__68416;
i__67672 = G__68417;
continue;
} else {
var it = cljs.core.first(seq__67669__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__68418 = cljs.core.next(seq__67669__$1);
var G__68419 = null;
var G__68420 = (0);
var G__68421 = (0);
seq__67669 = G__68418;
chunk__67670 = G__68419;
count__67671 = G__68420;
i__67672 = G__68421;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k67683,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__67697 = k67683;
var G__67697__$1 = (((G__67697 instanceof cljs.core.Keyword))?G__67697.fqn:null);
switch (G__67697__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67683,else__5343__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__67709){
var vec__67711 = p__67709;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67711,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67711,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67682){
var self__ = this;
var G__67682__$1 = this;
return (new cljs.core.RecordIter((0),G__67682__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67684,other67685){
var self__ = this;
var this67684__$1 = this;
return (((!((other67685 == null)))) && ((((this67684__$1.constructor === other67685.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67684__$1.x,other67685.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67684__$1.y,other67685.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67684__$1.__extmap,other67685.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k67683){
var self__ = this;
var this__5347__auto____$1 = this;
var G__67744 = k67683;
var G__67744__$1 = (((G__67744 instanceof cljs.core.Keyword))?G__67744.fqn:null);
switch (G__67744__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67683);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__67682){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__67748 = cljs.core.keyword_identical_QMARK_;
var expr__67749 = k__5349__auto__;
if(cljs.core.truth_((pred__67748.cljs$core$IFn$_invoke$arity$2 ? pred__67748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__67749) : pred__67748.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__67749)))){
return (new shadow.dom.Coordinate(G__67682,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67748.cljs$core$IFn$_invoke$arity$2 ? pred__67748.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__67749) : pred__67748.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__67749)))){
return (new shadow.dom.Coordinate(self__.x,G__67682,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__67682),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__67682){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__67682,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__67686){
var extmap__5382__auto__ = (function (){var G__67763 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67686,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__67686)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67763);
} else {
return G__67763;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__67686),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__67686),null,cljs.core.not_empty(extmap__5382__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5342__auto__,k67777,else__5343__auto__){
var self__ = this;
var this__5342__auto____$1 = this;
var G__67796 = k67777;
var G__67796__$1 = (((G__67796 instanceof cljs.core.Keyword))?G__67796.fqn:null);
switch (G__67796__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k67777,else__5343__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5360__auto__,f__5361__auto__,init__5362__auto__){
var self__ = this;
var this__5360__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5363__auto__,p__67801){
var vec__67802 = p__67801;
var k__5364__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67802,(0),null);
var v__5365__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67802,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__67776){
var self__ = this;
var G__67776__$1 = this;
return (new cljs.core.RecordIter((0),G__67776__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this67778,other67779){
var self__ = this;
var this67778__$1 = this;
return (((!((other67779 == null)))) && ((((this67778__$1.constructor === other67779.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67778__$1.w,other67779.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67778__$1.h,other67779.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this67778__$1.__extmap,other67779.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5347__auto__,k67777){
var self__ = this;
var this__5347__auto____$1 = this;
var G__67825 = k67777;
var G__67825__$1 = (((G__67825 instanceof cljs.core.Keyword))?G__67825.fqn:null);
switch (G__67825__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k67777);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5348__auto__,k__5349__auto__,G__67776){
var self__ = this;
var this__5348__auto____$1 = this;
var pred__67828 = cljs.core.keyword_identical_QMARK_;
var expr__67829 = k__5349__auto__;
if(cljs.core.truth_((pred__67828.cljs$core$IFn$_invoke$arity$2 ? pred__67828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__67829) : pred__67828.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__67829)))){
return (new shadow.dom.Size(G__67776,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__67828.cljs$core$IFn$_invoke$arity$2 ? pred__67828.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__67829) : pred__67828.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__67829)))){
return (new shadow.dom.Size(self__.w,G__67776,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5349__auto__,G__67776),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5353__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5339__auto__,G__67776){
var self__ = this;
var this__5339__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__67776,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__67784){
var extmap__5382__auto__ = (function (){var G__67831 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__67784,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__67784)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__67831);
} else {
return G__67831;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__67784),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__67784),null,cljs.core.not_empty(extmap__5382__auto__),null));
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
var G__68466 = (i + (1));
var G__68467 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__68466;
ret = G__68467;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__67840){
var vec__67844 = p__67840;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67844,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67844,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__67848 = arguments.length;
switch (G__67848) {
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
var G__68473 = ps;
var G__68474 = (i + (1));
el__$1 = G__68473;
i = G__68474;
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
var vec__67853 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67853,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67853,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67853,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__67856_68475 = cljs.core.seq(props);
var chunk__67857_68476 = null;
var count__67858_68477 = (0);
var i__67859_68478 = (0);
while(true){
if((i__67859_68478 < count__67858_68477)){
var vec__67869_68479 = chunk__67857_68476.cljs$core$IIndexed$_nth$arity$2(null,i__67859_68478);
var k_68480 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67869_68479,(0),null);
var v_68481 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67869_68479,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_68480);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68480),v_68481);


var G__68485 = seq__67856_68475;
var G__68486 = chunk__67857_68476;
var G__68487 = count__67858_68477;
var G__68488 = (i__67859_68478 + (1));
seq__67856_68475 = G__68485;
chunk__67857_68476 = G__68486;
count__67858_68477 = G__68487;
i__67859_68478 = G__68488;
continue;
} else {
var temp__5804__auto___68489 = cljs.core.seq(seq__67856_68475);
if(temp__5804__auto___68489){
var seq__67856_68490__$1 = temp__5804__auto___68489;
if(cljs.core.chunked_seq_QMARK_(seq__67856_68490__$1)){
var c__5565__auto___68491 = cljs.core.chunk_first(seq__67856_68490__$1);
var G__68492 = cljs.core.chunk_rest(seq__67856_68490__$1);
var G__68493 = c__5565__auto___68491;
var G__68494 = cljs.core.count(c__5565__auto___68491);
var G__68495 = (0);
seq__67856_68475 = G__68492;
chunk__67857_68476 = G__68493;
count__67858_68477 = G__68494;
i__67859_68478 = G__68495;
continue;
} else {
var vec__67872_68496 = cljs.core.first(seq__67856_68490__$1);
var k_68498 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67872_68496,(0),null);
var v_68499 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67872_68496,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_68498);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_68498),v_68499);


var G__68504 = cljs.core.next(seq__67856_68490__$1);
var G__68505 = null;
var G__68506 = (0);
var G__68507 = (0);
seq__67856_68475 = G__68504;
chunk__67857_68476 = G__68505;
count__67858_68477 = G__68506;
i__67859_68478 = G__68507;
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
var vec__67876 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67876,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67876,(1),null);
var seq__67879_68510 = cljs.core.seq(node_children);
var chunk__67881_68511 = null;
var count__67882_68512 = (0);
var i__67883_68513 = (0);
while(true){
if((i__67883_68513 < count__67882_68512)){
var child_struct_68514 = chunk__67881_68511.cljs$core$IIndexed$_nth$arity$2(null,i__67883_68513);
if((!((child_struct_68514 == null)))){
if(typeof child_struct_68514 === 'string'){
var text_68517 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68517),child_struct_68514].join(''));
} else {
var children_68518 = shadow.dom.svg_node(child_struct_68514);
if(cljs.core.seq_QMARK_(children_68518)){
var seq__67912_68519 = cljs.core.seq(children_68518);
var chunk__67914_68520 = null;
var count__67915_68521 = (0);
var i__67916_68522 = (0);
while(true){
if((i__67916_68522 < count__67915_68521)){
var child_68523 = chunk__67914_68520.cljs$core$IIndexed$_nth$arity$2(null,i__67916_68522);
if(cljs.core.truth_(child_68523)){
node.appendChild(child_68523);


var G__68524 = seq__67912_68519;
var G__68525 = chunk__67914_68520;
var G__68526 = count__67915_68521;
var G__68527 = (i__67916_68522 + (1));
seq__67912_68519 = G__68524;
chunk__67914_68520 = G__68525;
count__67915_68521 = G__68526;
i__67916_68522 = G__68527;
continue;
} else {
var G__68528 = seq__67912_68519;
var G__68529 = chunk__67914_68520;
var G__68530 = count__67915_68521;
var G__68531 = (i__67916_68522 + (1));
seq__67912_68519 = G__68528;
chunk__67914_68520 = G__68529;
count__67915_68521 = G__68530;
i__67916_68522 = G__68531;
continue;
}
} else {
var temp__5804__auto___68532 = cljs.core.seq(seq__67912_68519);
if(temp__5804__auto___68532){
var seq__67912_68533__$1 = temp__5804__auto___68532;
if(cljs.core.chunked_seq_QMARK_(seq__67912_68533__$1)){
var c__5565__auto___68534 = cljs.core.chunk_first(seq__67912_68533__$1);
var G__68535 = cljs.core.chunk_rest(seq__67912_68533__$1);
var G__68536 = c__5565__auto___68534;
var G__68537 = cljs.core.count(c__5565__auto___68534);
var G__68538 = (0);
seq__67912_68519 = G__68535;
chunk__67914_68520 = G__68536;
count__67915_68521 = G__68537;
i__67916_68522 = G__68538;
continue;
} else {
var child_68539 = cljs.core.first(seq__67912_68533__$1);
if(cljs.core.truth_(child_68539)){
node.appendChild(child_68539);


var G__68540 = cljs.core.next(seq__67912_68533__$1);
var G__68541 = null;
var G__68542 = (0);
var G__68543 = (0);
seq__67912_68519 = G__68540;
chunk__67914_68520 = G__68541;
count__67915_68521 = G__68542;
i__67916_68522 = G__68543;
continue;
} else {
var G__68544 = cljs.core.next(seq__67912_68533__$1);
var G__68545 = null;
var G__68546 = (0);
var G__68547 = (0);
seq__67912_68519 = G__68544;
chunk__67914_68520 = G__68545;
count__67915_68521 = G__68546;
i__67916_68522 = G__68547;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68518);
}
}


var G__68548 = seq__67879_68510;
var G__68549 = chunk__67881_68511;
var G__68550 = count__67882_68512;
var G__68551 = (i__67883_68513 + (1));
seq__67879_68510 = G__68548;
chunk__67881_68511 = G__68549;
count__67882_68512 = G__68550;
i__67883_68513 = G__68551;
continue;
} else {
var G__68552 = seq__67879_68510;
var G__68553 = chunk__67881_68511;
var G__68554 = count__67882_68512;
var G__68555 = (i__67883_68513 + (1));
seq__67879_68510 = G__68552;
chunk__67881_68511 = G__68553;
count__67882_68512 = G__68554;
i__67883_68513 = G__68555;
continue;
}
} else {
var temp__5804__auto___68556 = cljs.core.seq(seq__67879_68510);
if(temp__5804__auto___68556){
var seq__67879_68557__$1 = temp__5804__auto___68556;
if(cljs.core.chunked_seq_QMARK_(seq__67879_68557__$1)){
var c__5565__auto___68558 = cljs.core.chunk_first(seq__67879_68557__$1);
var G__68559 = cljs.core.chunk_rest(seq__67879_68557__$1);
var G__68560 = c__5565__auto___68558;
var G__68561 = cljs.core.count(c__5565__auto___68558);
var G__68562 = (0);
seq__67879_68510 = G__68559;
chunk__67881_68511 = G__68560;
count__67882_68512 = G__68561;
i__67883_68513 = G__68562;
continue;
} else {
var child_struct_68563 = cljs.core.first(seq__67879_68557__$1);
if((!((child_struct_68563 == null)))){
if(typeof child_struct_68563 === 'string'){
var text_68564 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_68564),child_struct_68563].join(''));
} else {
var children_68565 = shadow.dom.svg_node(child_struct_68563);
if(cljs.core.seq_QMARK_(children_68565)){
var seq__67938_68566 = cljs.core.seq(children_68565);
var chunk__67940_68567 = null;
var count__67941_68568 = (0);
var i__67942_68569 = (0);
while(true){
if((i__67942_68569 < count__67941_68568)){
var child_68570 = chunk__67940_68567.cljs$core$IIndexed$_nth$arity$2(null,i__67942_68569);
if(cljs.core.truth_(child_68570)){
node.appendChild(child_68570);


var G__68571 = seq__67938_68566;
var G__68572 = chunk__67940_68567;
var G__68573 = count__67941_68568;
var G__68574 = (i__67942_68569 + (1));
seq__67938_68566 = G__68571;
chunk__67940_68567 = G__68572;
count__67941_68568 = G__68573;
i__67942_68569 = G__68574;
continue;
} else {
var G__68575 = seq__67938_68566;
var G__68576 = chunk__67940_68567;
var G__68577 = count__67941_68568;
var G__68578 = (i__67942_68569 + (1));
seq__67938_68566 = G__68575;
chunk__67940_68567 = G__68576;
count__67941_68568 = G__68577;
i__67942_68569 = G__68578;
continue;
}
} else {
var temp__5804__auto___68579__$1 = cljs.core.seq(seq__67938_68566);
if(temp__5804__auto___68579__$1){
var seq__67938_68580__$1 = temp__5804__auto___68579__$1;
if(cljs.core.chunked_seq_QMARK_(seq__67938_68580__$1)){
var c__5565__auto___68581 = cljs.core.chunk_first(seq__67938_68580__$1);
var G__68582 = cljs.core.chunk_rest(seq__67938_68580__$1);
var G__68583 = c__5565__auto___68581;
var G__68584 = cljs.core.count(c__5565__auto___68581);
var G__68585 = (0);
seq__67938_68566 = G__68582;
chunk__67940_68567 = G__68583;
count__67941_68568 = G__68584;
i__67942_68569 = G__68585;
continue;
} else {
var child_68586 = cljs.core.first(seq__67938_68580__$1);
if(cljs.core.truth_(child_68586)){
node.appendChild(child_68586);


var G__68587 = cljs.core.next(seq__67938_68580__$1);
var G__68588 = null;
var G__68589 = (0);
var G__68590 = (0);
seq__67938_68566 = G__68587;
chunk__67940_68567 = G__68588;
count__67941_68568 = G__68589;
i__67942_68569 = G__68590;
continue;
} else {
var G__68591 = cljs.core.next(seq__67938_68580__$1);
var G__68592 = null;
var G__68593 = (0);
var G__68594 = (0);
seq__67938_68566 = G__68591;
chunk__67940_68567 = G__68592;
count__67941_68568 = G__68593;
i__67942_68569 = G__68594;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_68565);
}
}


var G__68595 = cljs.core.next(seq__67879_68557__$1);
var G__68596 = null;
var G__68597 = (0);
var G__68598 = (0);
seq__67879_68510 = G__68595;
chunk__67881_68511 = G__68596;
count__67882_68512 = G__68597;
i__67883_68513 = G__68598;
continue;
} else {
var G__68599 = cljs.core.next(seq__67879_68557__$1);
var G__68600 = null;
var G__68601 = (0);
var G__68602 = (0);
seq__67879_68510 = G__68599;
chunk__67881_68511 = G__68600;
count__67882_68512 = G__68601;
i__67883_68513 = G__68602;
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
var len__5766__auto___68604 = arguments.length;
var i__5767__auto___68608 = (0);
while(true){
if((i__5767__auto___68608 < len__5766__auto___68604)){
args__5772__auto__.push((arguments[i__5767__auto___68608]));

var G__68609 = (i__5767__auto___68608 + (1));
i__5767__auto___68608 = G__68609;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq67959){
var G__67960 = cljs.core.first(seq67959);
var seq67959__$1 = cljs.core.next(seq67959);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67960,seq67959__$1);
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
var G__68000 = arguments.length;
switch (G__68000) {
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
var c__64749__auto___68611 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__64750__auto__ = (function (){var switch__64453__auto__ = (function (state_68050){
var state_val_68051 = (state_68050[(1)]);
if((state_val_68051 === (1))){
var state_68050__$1 = state_68050;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_68050__$1,(2),once_or_cleanup);
} else {
if((state_val_68051 === (2))){
var inst_68044 = (state_68050[(2)]);
var inst_68045 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_68050__$1 = (function (){var statearr_68064 = state_68050;
(statearr_68064[(7)] = inst_68044);

return statearr_68064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_68050__$1,inst_68045);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__64454__auto__ = null;
var shadow$dom$state_machine__64454__auto____0 = (function (){
var statearr_68065 = [null,null,null,null,null,null,null,null];
(statearr_68065[(0)] = shadow$dom$state_machine__64454__auto__);

(statearr_68065[(1)] = (1));

return statearr_68065;
});
var shadow$dom$state_machine__64454__auto____1 = (function (state_68050){
while(true){
var ret_value__64455__auto__ = (function (){try{while(true){
var result__64456__auto__ = switch__64453__auto__(state_68050);
if(cljs.core.keyword_identical_QMARK_(result__64456__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__64456__auto__;
}
break;
}
}catch (e68066){if((e68066 instanceof Object)){
var ex__64457__auto__ = e68066;
var statearr_68068_68615 = state_68050;
(statearr_68068_68615[(5)] = ex__64457__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_68050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68066;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__64455__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68616 = state_68050;
state_68050 = G__68616;
continue;
} else {
return ret_value__64455__auto__;
}
break;
}
});
shadow$dom$state_machine__64454__auto__ = function(state_68050){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__64454__auto____0.call(this);
case 1:
return shadow$dom$state_machine__64454__auto____1.call(this,state_68050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__64454__auto____0;
shadow$dom$state_machine__64454__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__64454__auto____1;
return shadow$dom$state_machine__64454__auto__;
})()
})();
var state__64751__auto__ = (function (){var statearr_68071 = f__64750__auto__();
(statearr_68071[(6)] = c__64749__auto___68611);

return statearr_68071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__64751__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
