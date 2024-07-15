goog.provide('enigma_nexus.tabs.tabs');
enigma_nexus.tabs.tabs.tab_header_cell = (function enigma_nexus$tabs$tabs$tab_header_cell(var_args){
var args__5772__auto__ = [];
var len__5766__auto___59325 = arguments.length;
var i__5767__auto___59326 = (0);
while(true){
if((i__5767__auto___59326 < len__5766__auto___59325)){
args__5772__auto__.push((arguments[i__5767__auto___59326]));

var G__59327 = (i__5767__auto___59326 + (1));
i__5767__auto___59326 = G__59327;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return enigma_nexus.tabs.tabs.tab_header_cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(enigma_nexus.tabs.tabs.tab_header_cell.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__59313 = props;
var map__59313__$1 = cljs.core.__destructure_map(map__59313);
var multi_tab_table_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59313__$1,new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832));
var active_tab_index_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59313__$1,new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59313__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59313__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(active_tab_index_STAR_,column_index);
})], null),children], null);
}));

(enigma_nexus.tabs.tabs.tab_header_cell.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(enigma_nexus.tabs.tabs.tab_header_cell.cljs$lang$applyTo = (function (seq59311){
var G__59312 = cljs.core.first(seq59311);
var seq59311__$1 = cljs.core.next(seq59311);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59312,seq59311__$1);
}));

enigma_nexus.tabs.tabs.tab_headers = (function enigma_nexus$tabs$tabs$tab_headers(props){
var map__59316 = props;
var map__59316__$1 = cljs.core.__destructure_map(map__59316);
var multi_tab_table_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59316__$1,new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832));
var active_tab_index_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59316__$1,new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59316__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tabs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (table_data_STAR_){
return new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_data_STAR_));
}),cljs.core.deref(multi_tab_table_STAR_));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"tab-header"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (column_index,column){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.tabs.tab_header_cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993),active_tab_index_STAR_,new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832),multi_tab_table_STAR_,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(column)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832),multi_tab_table_STAR_,new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993),active_tab_index_STAR_], null)], null);
}),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(column)))], null);
}),tabs))], null);
});
enigma_nexus.tabs.tabs.tabs = (function enigma_nexus$tabs$tabs$tabs(props){
var with_let59319 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59319","with-let59319",-1692259585));
var temp__5808__auto___59330 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59330 == null)){
} else {
var c__59044__auto___59331 = temp__5808__auto___59330;
if((with_let59319.generation === c__59044__auto___59331.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59319.generation = c__59044__auto___59331.ratomGeneration);
}

var init59320 = (with_let59319.length === (0));
var active_tab_index_STAR_ = ((((init59320) || (cljs.core.not(with_let59319.hasOwnProperty((0))))))?(with_let59319[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((0))):(with_let59319[(0)]));
var res59321 = (function (){var map__59322 = props;
var map__59322__$1 = cljs.core.__destructure_map(map__59322);
var multi_tab_table_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59322__$1,new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59322__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59322__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var table_data_STAR_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(multi_tab_table_STAR_),cljs.core.deref(active_tab_index_STAR_));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return enigma_nexus.tabs.state.add_new_tab(multi_tab_table_STAR_,(4),(4));
})], null),"Add New Tab"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.tabs.tab_headers,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993),active_tab_index_STAR_], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),table_data_STAR_], null)], 0))], null)], null);
})();
return res59321;
});

//# sourceMappingURL=enigma_nexus.tabs.tabs.js.map
