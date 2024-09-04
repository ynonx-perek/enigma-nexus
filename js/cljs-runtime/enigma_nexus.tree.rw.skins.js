goog.provide('enigma_nexus.tree.rw.skins');
enigma_nexus.tree.rw.skins.text_cell = (function enigma_nexus$tree$rw$skins$text_cell(props){
var map__70279 = props;
var map__70279__$1 = cljs.core.__destructure_map(map__70279);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70279__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.tree.rw.skins.cell_text_input = (function enigma_nexus$tree$rw$skins$cell_text_input(props){
var map__70292 = props;
var map__70292__$1 = cljs.core.__destructure_map(map__70292);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70292__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70292__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tree_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),newtext);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.tree.rw.skins.expand_collapse = (function enigma_nexus$tree$rw$skins$expand_collapse(props){
var map__70309 = props;
var map__70309__$1 = cljs.core.__destructure_map(map__70309);
var indicators_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70309__$1,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179));
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
enigma_nexus.tree.rw.skins.table_in_tree = (function enigma_nexus$tree$rw$skins$table_in_tree(props){
var map__70336 = props;
var map__70336__$1 = cljs.core.__destructure_map(map__70336);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70336__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var with_let70339 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70339","with-let70339",-421016423));
var temp__5808__auto___70387 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70387 == null)){
} else {
var c__67734__auto___70388 = temp__5808__auto___70387;
if((with_let70339.generation === c__67734__auto___70388.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70339.generation = c__67734__auto___70388.ratomGeneration);
}

var init70340 = (with_let70339.length === (0));
var data_STAR_ = ((((init70340) || (cljs.core.not(with_let70339.hasOwnProperty((0))))))?(with_let70339[(0)] = reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null))):(with_let70339[(0)]));
var res70342 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res70342;
});
enigma_nexus.tree.rw.skins.document_leaf = (function enigma_nexus$tree$rw$skins$document_leaf(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leaf"], null)], null);
});

//# sourceMappingURL=enigma_nexus.tree.rw.skins.js.map
