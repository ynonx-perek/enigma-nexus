goog.provide('enigma_nexus.table.table');
enigma_nexus.table.table.cell = (function enigma_nexus$table$table$cell(var_args){
var args__5772__auto__ = [];
var len__5766__auto___61180 = arguments.length;
var i__5767__auto___61181 = (0);
while(true){
if((i__5767__auto___61181 < len__5766__auto___61180)){
args__5772__auto__.push((arguments[i__5767__auto___61181]));

var G__61182 = (i__5767__auto___61181 + (1));
i__5767__auto___61181 = G__61182;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return enigma_nexus.table.table.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(enigma_nexus.table.table.cell.cljs$core$IFn$_invoke$arity$variadic = (function (props,children){
var map__61155 = props;
var map__61155__$1 = cljs.core.__destructure_map(map__61155);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61155__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61155__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61155__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61155__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var with_let61156 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let61156","with-let61156",-84173549));
var temp__5808__auto___61184 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___61184 == null)){
} else {
var c__59154__auto___61185 = temp__5808__auto___61184;
if((with_let61156.generation === c__59154__auto___61185.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let61156.generation = c__59154__auto___61185.ratomGeneration);
}

var init61157 = (with_let61156.length === (0));
var indicators_STAR_ = ((((init61157) || (cljs.core.not(with_let61156.hasOwnProperty((0))))))?(with_let61156[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let61156[(0)]));
var res61158 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.conj,new cljs.core.Keyword(null,"clicked","clicked",114423720));
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.conj,new cljs.core.Keyword(null,"hovered","hovered",399068143));
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.disj,new cljs.core.Keyword(null,"hovered","hovered",399068143));
})], null),children], null);
return res61158;
}));

(enigma_nexus.table.table.cell.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(enigma_nexus.table.table.cell.cljs$lang$applyTo = (function (seq61149){
var G__61150 = cljs.core.first(seq61149);
var seq61149__$1 = cljs.core.next(seq61149);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__61150,seq61149__$1);
}));

enigma_nexus.table.table.table = (function enigma_nexus$table$table$table(props){
var map__61171 = props;
var map__61171__$1 = cljs.core.__destructure_map(map__61171);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61171__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61171__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
