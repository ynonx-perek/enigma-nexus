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
var _STAR_always_update_STAR__orig_val__70485 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__70486 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__70486);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__70491 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__70492 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__70492);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__70491);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__70485);
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
var G__70505 = arguments.length;
switch (G__70505) {
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

var vec__70513 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70513,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70513,(1),null);
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

var seq__70538_70601 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__70539_70602 = null;
var count__70540_70603 = (0);
var i__70541_70604 = (0);
while(true){
if((i__70541_70604 < count__70540_70603)){
var vec__70563_70606 = chunk__70539_70602.cljs$core$IIndexed$_nth$arity$2(null,i__70541_70604);
var container_70607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70563_70606,(0),null);
var comp_70608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70563_70606,(1),null);
reagent.dom.re_render_component(comp_70608,container_70607);


var G__70610 = seq__70538_70601;
var G__70611 = chunk__70539_70602;
var G__70612 = count__70540_70603;
var G__70613 = (i__70541_70604 + (1));
seq__70538_70601 = G__70610;
chunk__70539_70602 = G__70611;
count__70540_70603 = G__70612;
i__70541_70604 = G__70613;
continue;
} else {
var temp__5804__auto___70615 = cljs.core.seq(seq__70538_70601);
if(temp__5804__auto___70615){
var seq__70538_70621__$1 = temp__5804__auto___70615;
if(cljs.core.chunked_seq_QMARK_(seq__70538_70621__$1)){
var c__5565__auto___70622 = cljs.core.chunk_first(seq__70538_70621__$1);
var G__70623 = cljs.core.chunk_rest(seq__70538_70621__$1);
var G__70624 = c__5565__auto___70622;
var G__70625 = cljs.core.count(c__5565__auto___70622);
var G__70626 = (0);
seq__70538_70601 = G__70623;
chunk__70539_70602 = G__70624;
count__70540_70603 = G__70625;
i__70541_70604 = G__70626;
continue;
} else {
var vec__70582_70627 = cljs.core.first(seq__70538_70621__$1);
var container_70628 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70582_70627,(0),null);
var comp_70629 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70582_70627,(1),null);
reagent.dom.re_render_component(comp_70629,container_70628);


var G__70630 = cljs.core.next(seq__70538_70621__$1);
var G__70631 = null;
var G__70632 = (0);
var G__70633 = (0);
seq__70538_70601 = G__70630;
chunk__70539_70602 = G__70631;
count__70540_70603 = G__70632;
i__70541_70604 = G__70633;
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
