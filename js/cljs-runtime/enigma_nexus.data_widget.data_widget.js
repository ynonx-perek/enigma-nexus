goog.provide('enigma_nexus.data_widget.data_widget');
enigma_nexus.data_widget.data_widget.indexes = (function enigma_nexus$data_widget$data_widget$indexes(coll){
if(cljs.core.vector_QMARK_(coll)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(coll));
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keys(coll));
}
});
enigma_nexus.data_widget.data_widget.data_widget = (function enigma_nexus$data_widget$data_widget$data_widget(props){
var map__71639 = props;
var map__71639__$1 = cljs.core.__destructure_map(map__71639);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71639__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71639__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var ui_props_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71639__$1,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71639__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var ui_props = (ui_props_fn.cljs$core$IFn$_invoke$arity$3 ? ui_props_fn.cljs$core$IFn$_invoke$arity$3(root_STAR_,path,state) : ui_props_fn.call(null,root_STAR_,path,state));
var with_let71640 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71640","with-let71640",-470853708));
var temp__5808__auto___71644 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71644 == null)){
} else {
var c__59104__auto___71645 = temp__5808__auto___71644;
if((with_let71640.generation === c__59104__auto___71645.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71640.generation = c__59104__auto___71645.ratomGeneration);
}

var init71641 = (with_let71640.length === (0));
var component_STAR_ = ((((init71641) || (cljs.core.not(with_let71640.hasOwnProperty((0))))))?(with_let71640[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"component","component",1555936782)))):(with_let71640[(0)]));
var res71642 = (function (){var data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),path);
var map__71643 = data;
var map__71643__$1 = cljs.core.__destructure_map(map__71643);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71643__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var data__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71643__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var indicators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71643__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
var index_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71643__$1,new cljs.core.Keyword(null,"index-component","index-component",-1258618905));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),ui_props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"skins"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"root*","root*",964817570),root_STAR_,new cljs.core.Keyword(null,"path","path",-188191168),path], null)], null);
}),cljs.core.deref(component_STAR_)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"children"], null),(cljs.core.truth_((function (){var and__5041__auto__ = cljs.core.coll_QMARK_(data__$1);
if(and__5041__auto__){
return new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(indicators);
} else {
return and__5041__auto__;
}
})())?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (index){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"collection-item",new cljs.core.Keyword(null,"key","key",-1516042587),(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(index);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return index;
}
})()], null),(cljs.core.truth_(index_component)?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (skin_index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),skin_index,new cljs.core.Keyword(null,"root*","root*",964817570),root_STAR_,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index], 0))], null)], null);
}),index_component)):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index], 0))], null),new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),ui_props_fn,new cljs.core.Keyword(null,"root*","root*",964817570),root_STAR_,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(state,indicators),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([index], 0))], null)], null)], null);
}),enigma_nexus.data_widget.data_widget.indexes(data__$1))):null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,path], null)], null));
})();
return res71642;
});

//# sourceMappingURL=enigma_nexus.data_widget.data_widget.js.map
