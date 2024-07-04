goog.provide('enigma_nexus.tree.skins');
enigma_nexus.tree.skins.text_cell = (function enigma_nexus$tree$skins$text_cell(props){
var map__60238 = props;
var map__60238__$1 = cljs.core.__destructure_map(map__60238);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60238__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.tree.skins.cell_text_input = (function enigma_nexus$tree$skins$cell_text_input(props){
var map__60239 = props;
var map__60239__$1 = cljs.core.__destructure_map(map__60239);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60239__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60239__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tree_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),newtext);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.tree.skins.expand_collapse = (function enigma_nexus$tree$skins$expand_collapse(props){
var map__60240 = props;
var map__60240__$1 = cljs.core.__destructure_map(map__60240);
var indicators_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60240__$1,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"tree-expand-collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (indicators){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(indicators))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(indicators,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indicators,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
}
}));
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_right], null))], null);
});
enigma_nexus.tree.skins.table_in_tree = (function enigma_nexus$tree$skins$table_in_tree(props){
var map__60241 = props;
var map__60241__$1 = cljs.core.__destructure_map(map__60241);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60241__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var with_let60242 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60242","with-let60242",505715674));
var temp__5808__auto___60245 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60245 == null)){
} else {
var c__59044__auto___60246 = temp__5808__auto___60245;
if((with_let60242.generation === c__59044__auto___60246.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60242.generation = c__59044__auto___60246.ratomGeneration);
}

var init60243 = (with_let60242.length === (0));
var table_data_STAR_ = ((((init60243) || (cljs.core.not(with_let60242.hasOwnProperty((0))))))?(with_let60242[(0)] = reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null))):(with_let60242[(0)]));
var res60244 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),table_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res60244;
});

//# sourceMappingURL=enigma_nexus.tree.skins.js.map
