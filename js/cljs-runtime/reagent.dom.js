goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__70305 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__70308 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__70308);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__70310 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__70311 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__70311);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__70310);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__70305);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__70348 = arguments.length;
switch (G__70348) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__70362 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70362,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70362,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__70367_70390 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__70368_70391 = null;
var count__70369_70392 = (0);
var i__70370_70393 = (0);
while(true){
if((i__70370_70393 < count__70369_70392)){
var vec__70378_70394 = chunk__70368_70391.cljs$core$IIndexed$_nth$arity$2(null,i__70370_70393);
var container_70395 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70378_70394,(0),null);
var comp_70396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70378_70394,(1),null);
reagent.dom.re_render_component(comp_70396,container_70395);


var G__70397 = seq__70367_70390;
var G__70398 = chunk__70368_70391;
var G__70399 = count__70369_70392;
var G__70400 = (i__70370_70393 + (1));
seq__70367_70390 = G__70397;
chunk__70368_70391 = G__70398;
count__70369_70392 = G__70399;
i__70370_70393 = G__70400;
continue;
} else {
var temp__5804__auto___70401 = cljs.core.seq(seq__70367_70390);
if(temp__5804__auto___70401){
var seq__70367_70402__$1 = temp__5804__auto___70401;
if(cljs.core.chunked_seq_QMARK_(seq__70367_70402__$1)){
var c__5565__auto___70403 = cljs.core.chunk_first(seq__70367_70402__$1);
var G__70404 = cljs.core.chunk_rest(seq__70367_70402__$1);
var G__70405 = c__5565__auto___70403;
var G__70406 = cljs.core.count(c__5565__auto___70403);
var G__70407 = (0);
seq__70367_70390 = G__70404;
chunk__70368_70391 = G__70405;
count__70369_70392 = G__70406;
i__70370_70393 = G__70407;
continue;
} else {
var vec__70383_70408 = cljs.core.first(seq__70367_70402__$1);
var container_70409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70383_70408,(0),null);
var comp_70410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70383_70408,(1),null);
reagent.dom.re_render_component(comp_70410,container_70409);


var G__70411 = cljs.core.next(seq__70367_70402__$1);
var G__70412 = null;
var G__70413 = (0);
var G__70414 = (0);
seq__70367_70390 = G__70411;
chunk__70368_70391 = G__70412;
count__70369_70392 = G__70413;
i__70370_70393 = G__70414;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
