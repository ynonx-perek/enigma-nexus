goog.provide('enigma_nexus.tree.ro.skins');
enigma_nexus.tree.ro.skins.text_cell = (function enigma_nexus$tree$ro$skins$text_cell(props){
var map__70277 = props;
var map__70277__$1 = cljs.core.__destructure_map(map__70277);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70277__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.tree.ro.skins.cell_text_input = (function enigma_nexus$tree$ro$skins$cell_text_input(props){
var map__70291 = props;
var map__70291__$1 = cljs.core.__destructure_map(map__70291);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70291__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70291__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),newtext);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.tree.ro.skins.expand_collapse = (function enigma_nexus$tree$ro$skins$expand_collapse(props){
var map__70300 = props;
var map__70300__$1 = cljs.core.__destructure_map(map__70300);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70300__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var with_let70307 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70307","with-let70307",1385180814));
var temp__5808__auto___70375 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70375 == null)){
} else {
var c__67734__auto___70376 = temp__5808__auto___70375;
if((with_let70307.generation === c__67734__auto___70376.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70307.generation = c__67734__auto___70376.ratomGeneration);
}

var init70308 = (with_let70307.length === (0));
var indicators_STAR_ = ((((init70308) || (cljs.core.not(with_let70307.hasOwnProperty((0))))))?(with_let70307[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let70307[(0)]));
var res70310 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"tree-expand-collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (indicators){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(indicators))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(indicators,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(indicators,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
}
}));
})], null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_right], null))], null);
return res70310;
});
enigma_nexus.tree.ro.skins.table_in_tree = (function enigma_nexus$tree$ro$skins$table_in_tree(props){
var map__70334 = props;
var map__70334__$1 = cljs.core.__destructure_map(map__70334);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70334__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var with_let70337 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70337","with-let70337",-117897403));
var temp__5808__auto___70377 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70377 == null)){
} else {
var c__67734__auto___70378 = temp__5808__auto___70377;
if((with_let70337.generation === c__67734__auto___70378.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70337.generation = c__67734__auto___70378.ratomGeneration);
}

var init70338 = (with_let70337.length === (0));
var data_STAR___$1 = ((((init70338) || (cljs.core.not(with_let70337.hasOwnProperty((0))))))?(with_let70337[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70337[(0)]));
var res70341 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR___$1,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res70341;
});
enigma_nexus.tree.ro.skins.document_leaf = (function enigma_nexus$tree$ro$skins$document_leaf(){
return true;
});

//# sourceMappingURL=enigma_nexus.tree.ro.skins.js.map
