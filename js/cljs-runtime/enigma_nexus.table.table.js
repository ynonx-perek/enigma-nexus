goog.provide('enigma_nexus.table.table');
enigma_nexus.table.table.cell = (function enigma_nexus$table$table$cell(var_args){
var args__5772__auto__ = [];
var len__5766__auto___60437 = arguments.length;
var i__5767__auto___60438 = (0);
while(true){
if((i__5767__auto___60438 < len__5766__auto___60437)){
args__5772__auto__.push((arguments[i__5767__auto___60438]));

var G__60439 = (i__5767__auto___60438 + (1));
i__5767__auto___60438 = G__60439;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return enigma_nexus.table.table.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(enigma_nexus.table.table.cell.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__60426 = props;
var map__60426__$1 = cljs.core.__destructure_map(map__60426);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60426__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var with_let60427 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60427","with-let60427",1547704564));
var temp__5808__auto___60440 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60440 == null)){
} else {
var c__59044__auto___60441 = temp__5808__auto___60440;
if((with_let60427.generation === c__59044__auto___60441.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60427.generation = c__59044__auto___60441.ratomGeneration);
}

var init60428 = (with_let60427.length === (0));
var indicators_STAR_ = ((((init60428) || (cljs.core.not(with_let60427.hasOwnProperty((0))))))?(with_let60427[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let60427[(0)]));
var res60429 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.conj,new cljs.core.Keyword(null,"clicked","clicked",114423720));
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.conj,new cljs.core.Keyword(null,"hovered","hovered",399068143));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.disj,new cljs.core.Keyword(null,"hovered","hovered",399068143));
})], null),children], null);
return res60429;
}));

(enigma_nexus.table.table.cell.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(enigma_nexus.table.table.cell.cljs$lang$applyTo = (function (seq60423){
var G__60424 = cljs.core.first(seq60423);
var seq60423__$1 = cljs.core.next(seq60423);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60424,seq60423__$1);
}));

enigma_nexus.table.table.table = (function enigma_nexus$table$table$table(props){
var map__60431 = props;
var map__60431__$1 = cljs.core.__destructure_map(map__60431);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60431__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60431__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var row_class = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),"-row"].join('');
var cell_class = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),"-cell"].join('');
var expanded = new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_data_STAR_));
var rows = (cljs.core.truth_(expanded)?new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_data_STAR_)):cljs.core.take.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(table_data_STAR_))));
var row_count = cljs.core.count(rows);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["table-tab ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),(cljs.core.truth_(expanded)?" expanded":null)].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (row_index,row){
var columns = new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(row);
var column_count = cljs.core.count(columns);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["row ",row_class].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (column_index,column){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.cell,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"class","class",-2030961996),["cell ",cell_class,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(column))].join(''),new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),table_data_STAR_,new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column)),"-start"].join('')], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_index,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(column),column_index,i], null),new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),table_data_STAR_,new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(column),new cljs.core.Keyword(null,"row-count","row-count",1060167988),row_count,new cljs.core.Keyword(null,"column-count","column-count",1235131236),column_count], null)], null);
}),new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(column))], null)))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),column_index], null));
}),columns))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(row)], null));
}),rows))], null);
});

//# sourceMappingURL=enigma_nexus.table.table.js.map
