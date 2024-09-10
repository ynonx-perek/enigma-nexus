goog.provide('enigma_nexus.data_widget.data_widget');
enigma_nexus.data_widget.data_widget.indexes = (function enigma_nexus$data_widget$data_widget$indexes(coll){
if(cljs.core.vector_QMARK_(coll)){
return cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(coll));
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.keys(coll));
}
});
enigma_nexus.data_widget.data_widget.data_widget = (function enigma_nexus$data_widget$data_widget$data_widget(props){
var map__74004 = props;
var map__74004__$1 = cljs.core.__destructure_map(map__74004);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74004__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74004__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var ui_props_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74004__$1,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747));
var with_let74005 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74005","with-let74005",-618496896));
var temp__5808__auto___74009 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74009 == null)){
} else {
var c__59154__auto___74010 = temp__5808__auto___74009;
if((with_let74005.generation === c__59154__auto___74010.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74005.generation = c__59154__auto___74010.ratomGeneration);
}

var init74006 = (with_let74005.length === (0));
var local_root_STAR_ = ((((init74006) || (cljs.core.not(with_let74005.hasOwnProperty((0))))))?(with_let74005[(0)] = reagent.core.cursor(root_STAR_,path)):(with_let74005[(0)]));
var res74007 = (function (){var map__74008 = cljs.core.deref(local_root_STAR_);
var map__74008__$1 = cljs.core.__destructure_map(map__74008);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74008__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var indicators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74008__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
var index_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74008__$1,new cljs.core.Keyword(null,"index-component","index-component",-1258618905));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74008__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74008__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var control_component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74008__$1,new cljs.core.Keyword(null,"control-component","control-component",-307582384));
var ui_props = (ui_props_fn.cljs$core$IFn$_invoke$arity$2 ? ui_props_fn.cljs$core$IFn$_invoke$arity$2(root_STAR_,path) : ui_props_fn.call(null,root_STAR_,path));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"local-root","local-root",-1717411086).cljs$core$IFn$_invoke$arity$1(ui_props),(((!(cljs.core.coll_QMARK_(data))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (skin_index,c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root*","root*",964817570),root_STAR_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),ui_props_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [skin_index], null)], null));
}),component))], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (skin_index,c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root*","root*",964817570),root_STAR_,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),ui_props_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [skin_index], null)], null));
}),component)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"collection","collection",-683361892).cljs$core$IFn$_invoke$arity$1(ui_props),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(indicators))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (collection_index){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"collection-item","collection-item",1816029553).cljs$core$IFn$_invoke$arity$1(ui_props),(cljs.core.truth_(control_component)?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (skin_index,c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root*","root*",964817570),root_STAR_,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([collection_index], 0)),new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),ui_props_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [skin_index], null)], null));
}),control_component)):null),(cljs.core.truth_(index_component)?cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (skin_index,c){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"root*","root*",964817570),root_STAR_,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([collection_index], 0)),new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),ui_props_fn], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [skin_index], null)], null));
}),index_component)):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([collection_index], 0)),new cljs.core.Keyword(null,"root*","root*",964817570),root_STAR_,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([collection_index], 0)),new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),ui_props_fn], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,"collection-item",(function (){var or__5043__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(collection_index);
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return collection_index;
}
})()], null)], null));
}),enigma_nexus.data_widget.data_widget.indexes(data))):null)], null)], null))], null);
})();
return res74007;
});

//# sourceMappingURL=enigma_nexus.data_widget.data_widget.js.map
