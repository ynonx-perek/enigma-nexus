goog.provide('enigma_nexus.table.table');
enigma_nexus.table.table.cell = (function enigma_nexus$table$table$cell(var_args){
var args__5772__auto__ = [];
var len__5766__auto___69957 = arguments.length;
var i__5767__auto___69958 = (0);
while(true){
if((i__5767__auto___69958 < len__5766__auto___69957)){
args__5772__auto__.push((arguments[i__5767__auto___69958]));

var G__69959 = (i__5767__auto___69958 + (1));
i__5767__auto___69958 = G__69959;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return enigma_nexus.table.table.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(enigma_nexus.table.table.cell.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__69869 = props;
var map__69869__$1 = cljs.core.__destructure_map(map__69869);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69869__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69869__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69869__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69869__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var with_let69870 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let69870","with-let69870",-84062132));
var temp__5808__auto___69961 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___69961 == null)){
} else {
var c__67734__auto___69963 = temp__5808__auto___69961;
if((with_let69870.generation === c__67734__auto___69963.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let69870.generation = c__67734__auto___69963.ratomGeneration);
}

var init69871 = (with_let69870.length === (0));
var indicators_STAR_ = ((((init69871) || (cljs.core.not(with_let69870.hasOwnProperty((0))))))?(with_let69870[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let69870[(0)]));
var res69872 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.conj,new cljs.core.Keyword(null,"clicked","clicked",114423720));
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.conj,new cljs.core.Keyword(null,"hovered","hovered",399068143));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.disj,new cljs.core.Keyword(null,"hovered","hovered",399068143));
})], null),children], null);
return res69872;
}));

(enigma_nexus.table.table.cell.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(enigma_nexus.table.table.cell.cljs$lang$applyTo = (function (seq69822){
var G__69823 = cljs.core.first(seq69822);
var seq69822__$1 = cljs.core.next(seq69822);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__69823,seq69822__$1);
}));

enigma_nexus.table.table.table = (function enigma_nexus$table$table$table(props){
var map__69929 = props;
var map__69929__$1 = cljs.core.__destructure_map(map__69929);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69929__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69929__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var row_class = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),"-row"].join('');
var cell_class = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),"-cell"].join('');
var expanded = new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_));
var rows = (cljs.core.truth_(expanded)?new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_)):cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))));
var row_count = cljs.core.count(rows);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["table-tab ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),(cljs.core.truth_(expanded)?" expanded":null)].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (row_index,row){
var columns = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(row);
var column_count = cljs.core.count(columns);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["row ",row_class].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (column_index,column){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["cell ",cell_class,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(column))].join(''),new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR_,new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)),"-start"].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_index,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),column_index,i], null),new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR_,new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count], null)], null);
}),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(column))], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),column_index], null));
}),columns))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row)], null));
}),rows))], null);
});

//# sourceMappingURL=enigma_nexus.table.table.js.map
