goog.provide('enigma_nexus.tree.rw.skins');
enigma_nexus.tree.rw.skins.text_cell = (function enigma_nexus$tree$rw$skins$text_cell(props){
var map__61456 = props;
var map__61456__$1 = cljs.core.__destructure_map(map__61456);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61456__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.tree.rw.skins.cell_text_input = (function enigma_nexus$tree$rw$skins$cell_text_input(props){
var map__61465 = props;
var map__61465__$1 = cljs.core.__destructure_map(map__61465);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61465__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61465__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(tree_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null),newtext);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.tree.rw.skins.expand_collapse = (function enigma_nexus$tree$rw$skins$expand_collapse(props){
var map__61472 = props;
var map__61472__$1 = cljs.core.__destructure_map(map__61472);
var indicators_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61472__$1,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179));
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
var map__61483 = props;
var map__61483__$1 = cljs.core.__destructure_map(map__61483);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61483__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var with_let61486 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let61486","with-let61486",848003775));
var temp__5808__auto___61505 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___61505 == null)){
} else {
var c__59154__auto___61507 = temp__5808__auto___61505;
if((with_let61486.generation === c__59154__auto___61507.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let61486.generation = c__59154__auto___61507.ratomGeneration);
}

var init61487 = (with_let61486.length === (0));
var data_STAR_ = ((((init61487) || (cljs.core.not(with_let61486.hasOwnProperty((0))))))?(with_let61486[(0)] = reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217)], null))):(with_let61486[(0)]));
var res61488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res61488;
});
enigma_nexus.tree.rw.skins.document_leaf = (function enigma_nexus$tree$rw$skins$document_leaf(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"leaf"], null)], null);
});

//# sourceMappingURL=enigma_nexus.tree.rw.skins.js.map
