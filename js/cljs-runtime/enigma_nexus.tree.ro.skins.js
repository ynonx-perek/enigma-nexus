goog.provide('enigma_nexus.tree.ro.skins');
enigma_nexus.tree.ro.skins.text_cell = (function enigma_nexus$tree$ro$skins$text_cell(props){
var map__61454 = props;
var map__61454__$1 = cljs.core.__destructure_map(map__61454);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61454__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.tree.ro.skins.cell_text_input = (function enigma_nexus$tree$ro$skins$cell_text_input(props){
var map__61464 = props;
var map__61464__$1 = cljs.core.__destructure_map(map__61464);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61464__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61464__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),newtext);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.tree.ro.skins.expand_collapse = (function enigma_nexus$tree$ro$skins$expand_collapse(props){
var map__61473 = props;
var map__61473__$1 = cljs.core.__destructure_map(map__61473);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61473__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var with_let61474 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let61474","with-let61474",983074442));
var temp__5808__auto___61533 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___61533 == null)){
} else {
var c__59154__auto___61534 = temp__5808__auto___61533;
if((with_let61474.generation === c__59154__auto___61534.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let61474.generation = c__59154__auto___61534.ratomGeneration);
}

var init61475 = (with_let61474.length === (0));
var indicators_STAR_ = ((((init61475) || (cljs.core.not(with_let61474.hasOwnProperty((0))))))?(with_let61474[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let61474[(0)]));
var res61477 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"tree-expand-collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (indicators){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(indicators))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(indicators,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indicators,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
}
}));
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_right], null))], null);
return res61477;
});
enigma_nexus.tree.ro.skins.table_in_tree = (function enigma_nexus$tree$ro$skins$table_in_tree(props){
var map__61495 = props;
var map__61495__$1 = cljs.core.__destructure_map(map__61495);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61495__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var with_let61496 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let61496","with-let61496",655395824));
var temp__5808__auto___61544 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___61544 == null)){
} else {
var c__59154__auto___61552 = temp__5808__auto___61544;
if((with_let61496.generation === c__59154__auto___61552.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let61496.generation = c__59154__auto___61552.ratomGeneration);
}

var init61497 = (with_let61496.length === (0));
var data_STAR___$1 = ((((init61497) || (cljs.core.not(with_let61496.hasOwnProperty((0))))))?(with_let61496[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let61496[(0)]));
var res61498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR___$1,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res61498;
});
enigma_nexus.tree.ro.skins.document_leaf = (function enigma_nexus$tree$ro$skins$document_leaf(){
return true;
});

//# sourceMappingURL=enigma_nexus.tree.ro.skins.js.map
