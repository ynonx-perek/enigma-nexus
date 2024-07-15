goog.provide('enigma_nexus.tree.ro.skins');
enigma_nexus.tree.ro.skins.text_cell = (function enigma_nexus$tree$ro$skins$text_cell(props){
var map__59465 = props;
var map__59465__$1 = cljs.core.__destructure_map(map__59465);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59465__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.tree.ro.skins.cell_text_input = (function enigma_nexus$tree$ro$skins$cell_text_input(props){
var map__59466 = props;
var map__59466__$1 = cljs.core.__destructure_map(map__59466);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59466__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59466__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tree_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028)], null),newtext);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.tree.ro.skins.expand_collapse = (function enigma_nexus$tree$ro$skins$expand_collapse(props){
var map__59473 = props;
var map__59473__$1 = cljs.core.__destructure_map(map__59473);
var indicators_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59473__$1,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179));
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
enigma_nexus.tree.ro.skins.table_in_tree = (function enigma_nexus$tree$ro$skins$table_in_tree(props){
var map__59481 = props;
var map__59481__$1 = cljs.core.__destructure_map(map__59481);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59481__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var with_let59482 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59482","with-let59482",1742711564));
var temp__5808__auto___59501 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59501 == null)){
} else {
var c__59044__auto___59502 = temp__5808__auto___59501;
if((with_let59482.generation === c__59044__auto___59502.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59482.generation = c__59044__auto___59502.ratomGeneration);
}

var init59484 = (with_let59482.length === (0));
var table_data_STAR_ = ((((init59484) || (cljs.core.not(with_let59482.hasOwnProperty((0))))))?(with_let59482[(0)] = reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028)], null))):(with_let59482[(0)]));
var res59487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),table_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res59487;
});
enigma_nexus.tree.ro.skins.document_leaf = (function enigma_nexus$tree$ro$skins$document_leaf(){
return true;
});

//# sourceMappingURL=enigma_nexus.tree.ro.skins.js.map
