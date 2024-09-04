goog.provide('enigma_nexus.tabs.tabs');
enigma_nexus.tabs.tabs.tab_header_cell = (function enigma_nexus$tabs$tabs$tab_header_cell(var_args){
var args__5772__auto__ = [];
var len__5766__auto___70841 = arguments.length;
var i__5767__auto___70842 = (0);
while(true){
if((i__5767__auto___70842 < len__5766__auto___70841)){
args__5772__auto__.push((arguments[i__5767__auto___70842]));

var G__70844 = (i__5767__auto___70842 + (1));
i__5767__auto___70842 = G__70844;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return enigma_nexus.tabs.tabs.tab_header_cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(enigma_nexus.tabs.tabs.tab_header_cell.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__70763 = props;
var map__70763__$1 = cljs.core.__destructure_map(map__70763);
var multi_tab_table_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70763__$1,new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832));
var active_tab_index_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70763__$1,new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70763__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70763__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(active_tab_index_STAR_,column_index);
})], null),children], null);
}));

(enigma_nexus.tabs.tabs.tab_header_cell.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(enigma_nexus.tabs.tabs.tab_header_cell.cljs$lang$applyTo = (function (seq70749){
var G__70750 = cljs.core.first(seq70749);
var seq70749__$1 = cljs.core.next(seq70749);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70750,seq70749__$1);
}));

enigma_nexus.tabs.tabs.tab_headers = (function enigma_nexus$tabs$tabs$tab_headers(props){
var map__70777 = props;
var map__70777__$1 = cljs.core.__destructure_map(map__70777);
var multi_tab_table_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70777__$1,new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832));
var active_tab_index_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70777__$1,new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70777__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tabs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (data_STAR_){
return new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_));
}),cljs.core.deref(multi_tab_table_STAR_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tab-header"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (column_index,column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.tabs.tab_header_cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993),active_tab_index_STAR_,new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832),multi_tab_table_STAR_,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(column)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832),multi_tab_table_STAR_,new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993),active_tab_index_STAR_], null)], null);
}),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(column)))], null);
}),tabs))], null);
});
enigma_nexus.tabs.tabs.tabs = (function enigma_nexus$tabs$tabs$tabs(props){
var with_let70813 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70813","with-let70813",-1453729287));
var temp__5808__auto___70866 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70866 == null)){
} else {
var c__67734__auto___70867 = temp__5808__auto___70866;
if((with_let70813.generation === c__67734__auto___70867.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70813.generation = c__67734__auto___70867.ratomGeneration);
}

var init70814 = (with_let70813.length === (0));
var active_tab_index_STAR_ = ((((init70814) || (cljs.core.not(with_let70813.hasOwnProperty((0))))))?(with_let70813[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let70813[(0)]));
var res70815 = (function (){var map__70825 = props;
var map__70825__$1 = cljs.core.__destructure_map(map__70825);
var multi_tab_table_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70825__$1,new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70825__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70825__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var data_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(multi_tab_table_STAR_),cljs.core.deref(active_tab_index_STAR_));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return enigma_nexus.tabs.state.add_new_tab(multi_tab_table_STAR_,(4),(4));
})], null),"Add New Tab"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.tabs.tab_headers,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993),active_tab_index_STAR_], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR_], null)], 0))], null)], null);
})();
return res70815;
});

//# sourceMappingURL=enigma_nexus.tabs.tabs.js.map
