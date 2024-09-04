goog.provide('enigma_nexus.table.skins');
enigma_nexus.table.skins.multi_select_header = (function enigma_nexus$table$skins$multi_select_header(props){
var map__70026 = props;
var map__70026__$1 = cljs.core.__destructure_map(map__70026);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70026__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70026__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70026__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70026__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70026__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70026__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
if(cljs.core.empty_QMARK_(value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header empty"], null),"Select ..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (selected_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),selected_item], null);
}),value)], null);
}
});
enigma_nexus.table.skins.cell_date_select = (function enigma_nexus$table$skins$cell_date_select(props){
var map__70029 = props;
var map__70029__$1 = cljs.core.__destructure_map(map__70029);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70029__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70029__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70029__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70029__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70029__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70029__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_text_input = (function enigma_nexus$table$skins$cell_text_input(props){
var map__70038 = props;
var map__70038__$1 = cljs.core.__destructure_map(map__70038);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70038__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_file_input = (function enigma_nexus$table$skins$cell_file_input(props){
var map__70043 = props;
var map__70043__$1 = cljs.core.__destructure_map(map__70043);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70043__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70043__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70043__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70043__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70043__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70043__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.text_cell = (function enigma_nexus$table$skins$text_cell(props){
var map__70051 = props;
var map__70051__$1 = cljs.core.__destructure_map(map__70051);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70051__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.table.skins.danger = (function enigma_nexus$table$skins$danger(props){
var map__70057 = props;
var map__70057__$1 = cljs.core.__destructure_map(map__70057);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70057__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70057__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70057__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70057__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70057__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70057__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70063 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70063","with-let70063",666768808));
var temp__5808__auto___70302 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70302 == null)){
} else {
var c__67734__auto___70303 = temp__5808__auto___70302;
if((with_let70063.generation === c__67734__auto___70303.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70063.generation = c__67734__auto___70303.ratomGeneration);
}

var init70064 = (with_let70063.length === (0));
var indicators_STAR_ = ((((init70064) || (cljs.core.not(with_let70063.hasOwnProperty((0))))))?(with_let70063[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let70063[(0)]));
var res70065 = (cljs.core.truth_(new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"danger-row"], null)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"column-danger","column-danger",37828479).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column-danger"], null)], null):null));
return res70065;
});
enigma_nexus.table.skins.expand_collapse = (function enigma_nexus$table$skins$expand_collapse(props){
var map__70070 = props;
var map__70070__$1 = cljs.core.__destructure_map(map__70070);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70070__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var with_let70071 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70071","with-let70071",-939521669));
var temp__5808__auto___70329 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70329 == null)){
} else {
var c__67734__auto___70330 = temp__5808__auto___70329;
if((with_let70071.generation === c__67734__auto___70330.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70071.generation = c__67734__auto___70330.ratomGeneration);
}

var init70072 = (with_let70071.length === (0));
var expanded_STAR_ = ((((init70072) || (cljs.core.not(with_let70071.hasOwnProperty((0))))))?(with_let70071[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null))):(with_let70071[(0)]));
var res70073 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"expand-collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_STAR_,cljs.core.update,new cljs.core.Keyword(null,"expanded","expanded",-3020742),cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_right], null))], null);
return res70073;
});
enigma_nexus.table.skins.column_menu = (function enigma_nexus$table$skins$column_menu(props){
var map__70079 = props;
var map__70079__$1 = cljs.core.__destructure_map(map__70079);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70079__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70079__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70079__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70079__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70079__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70079__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70084 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70084","with-let70084",1298917183));
var temp__5808__auto___70344 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70344 == null)){
} else {
var c__67734__auto___70345 = temp__5808__auto___70344;
if((with_let70084.generation === c__67734__auto___70345.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70084.generation = c__67734__auto___70345.ratomGeneration);
}

var init70085 = (with_let70084.length === (0));
var indicators_STAR_ = ((((init70085) || (cljs.core.not(with_let70084.hasOwnProperty((0))))))?(with_let70084[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let70084[(0)]));
var menu = ((((init70085) || (cljs.core.not(with_let70084.hasOwnProperty((1))))))?(with_let70084[(1)] = enigma_nexus.table.state.create_column_menu(data_STAR_,row_index,column_index)):(with_let70084[(1)]));
var res70087 = (function (){var map__70098 = cljs.core.deref(indicators_STAR_);
var map__70098__$1 = cljs.core.__destructure_map(map__70098);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res70087;
});
enigma_nexus.table.skins.row_menu = (function enigma_nexus$table$skins$row_menu(props){
var map__70101 = props;
var map__70101__$1 = cljs.core.__destructure_map(map__70101);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70101__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70101__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70101__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70101__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70101__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70101__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70104 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70104","with-let70104",2045480956));
var temp__5808__auto___70368 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70368 == null)){
} else {
var c__67734__auto___70369 = temp__5808__auto___70368;
if((with_let70104.generation === c__67734__auto___70369.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70104.generation = c__67734__auto___70369.ratomGeneration);
}

var init70105 = (with_let70104.length === (0));
var indicators_STAR_ = ((((init70105) || (cljs.core.not(with_let70104.hasOwnProperty((0))))))?(with_let70104[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let70104[(0)]));
var menu = ((((init70105) || (cljs.core.not(with_let70104.hasOwnProperty((1))))))?(with_let70104[(1)] = enigma_nexus.table.state.create_row_menu(data_STAR_,row_index,column_index)):(with_let70104[(1)]));
var res70106 = (function (){var map__70110 = cljs.core.deref(indicators_STAR_);
var map__70110__$1 = cljs.core.__destructure_map(map__70110);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70110__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res70106;
});
enigma_nexus.table.skins.pin = (function enigma_nexus$table$skins$pin(props){
var map__70112 = props;
var map__70112__$1 = cljs.core.__destructure_map(map__70112);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70112__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70112__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70112__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70112__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70112__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70112__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70113 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70113","with-let70113",1216402823));
var temp__5808__auto___70380 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70380 == null)){
} else {
var c__67734__auto___70381 = temp__5808__auto___70380;
if((with_let70113.generation === c__67734__auto___70381.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70113.generation = c__67734__auto___70381.ratomGeneration);
}

var init70114 = (with_let70113.length === (0));
var indicators_STAR_ = ((((init70114) || (cljs.core.not(with_let70113.hasOwnProperty((0))))))?(with_let70113[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let70113[(0)]));
var res70115 = (function (){var map__70117 = cljs.core.deref(indicators_STAR_);
var map__70117__$1 = cljs.core.__destructure_map(map__70117);
var pinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70117__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70117__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(pinned)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.disj,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"pin pinned"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.pin], null)], null);
} else {
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(indicators_STAR_,cljs.core.conj,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"pin"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.pin], null)], null);
} else {
return null;
}
}
})();
return res70115;
});
enigma_nexus.table.skins.menu = (function enigma_nexus$table$skins$menu(props){
var map__70124 = props;
var map__70124__$1 = cljs.core.__destructure_map(map__70124);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70124__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70124__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70124__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var with_let70126 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70126","with-let70126",-470271893));
var temp__5808__auto___70394 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70394 == null)){
} else {
var c__67734__auto___70395 = temp__5808__auto___70394;
if((with_let70126.generation === c__67734__auto___70395.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70126.generation = c__67734__auto___70395.ratomGeneration);
}

var init70127 = (with_let70126.length === (0));
var cell_STAR_ = ((((init70127) || (cljs.core.not(with_let70126.hasOwnProperty((0))))))?(with_let70126[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index], null))):(with_let70126[(0)]));
var menu = ((((init70127) || (cljs.core.not(with_let70126.hasOwnProperty((1))))))?(with_let70126[(1)] = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.kebab], null),new cljs.core.Keyword(null,"class","class",-2030961996),"default-cell-menu",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"default-cell-menu-expanded",new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator-css","separator-css",559201360),"menu-separator"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Date",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_date_select], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Text Cell",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_text_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"File Input",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Multi Select",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null)], null)], null)):(with_let70126[(1)]));
var res70130 = (function (){var map__70139 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cell_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null));
var map__70139__$1 = cljs.core.__destructure_map(map__70139);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70139__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res70130;
});
enigma_nexus.table.skins.multi_select_option = (function enigma_nexus$table$skins$multi_select_option(props){
var map__70142 = props;
var map__70142__$1 = cljs.core.__destructure_map(map__70142);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70142__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70142__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70142__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70142__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70142__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70142__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70143 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70143","with-let70143",1382978967));
var temp__5808__auto___70403 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70403 == null)){
} else {
var c__67734__auto___70404 = temp__5808__auto___70403;
if((with_let70143.generation === c__67734__auto___70404.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70143.generation = c__67734__auto___70404.ratomGeneration);
}

var init70144 = (with_let70143.length === (0));
var selected_values_STAR_ = ((((init70144) || (cljs.core.not(with_let70143.hasOwnProperty((0))))))?(with_let70143[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70143[(0)]));
var res70145 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_values_STAR_,(function (content){
if(cljs.core.contains_QMARK_(content,value)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(content,value);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(content,value);
}
}));
})], null)], null),value], null);
return res70145;
});
enigma_nexus.table.skins.single_select_option = (function enigma_nexus$table$skins$single_select_option(props){
var map__70165 = props;
var map__70165__$1 = cljs.core.__destructure_map(map__70165);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70165__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70165__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70165__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70165__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70165__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70165__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70166 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70166","with-let70166",-277509003));
var temp__5808__auto___70407 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70407 == null)){
} else {
var c__67734__auto___70408 = temp__5808__auto___70407;
if((with_let70166.generation === c__67734__auto___70408.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70166.generation = c__67734__auto___70408.ratomGeneration);
}

var init70167 = (with_let70166.length === (0));
var selected_values_STAR_ = ((((init70167) || (cljs.core.not(with_let70166.hasOwnProperty((0))))))?(with_let70166[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70166[(0)]));
var res70168 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(data_STAR_,(function (data){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null),(function (content){
if(cljs.core.contains_QMARK_(content,value)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(content,value);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,value);
}
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),false);
}));
})], null)], null),value], null);
return res70168;
});
enigma_nexus.table.skins.table_in_table = (function enigma_nexus$table$skins$table_in_table(props){
var map__70182 = props;
var map__70182__$1 = cljs.core.__destructure_map(map__70182);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70182__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70182__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70182__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70182__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70182__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70182__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70198 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70198","with-let70198",-931375042));
var temp__5808__auto___70416 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70416 == null)){
} else {
var c__67734__auto___70417 = temp__5808__auto___70416;
if((with_let70198.generation === c__67734__auto___70417.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70198.generation = c__67734__auto___70417.ratomGeneration);
}

var init70199 = (with_let70198.length === (0));
var data_STAR___$1 = ((((init70199) || (cljs.core.not(with_let70198.hasOwnProperty((0))))))?(with_let70198[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70198[(0)]));
var res70200 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR___$1,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res70200;
});
enigma_nexus.table.skins.tree_in_table_ro = (function enigma_nexus$table$skins$tree_in_table_ro(props){
var map__70208 = props;
var map__70208__$1 = cljs.core.__destructure_map(map__70208);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70208__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70208__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70208__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70208__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70208__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70208__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70211 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70211","with-let70211",-1020825871));
var temp__5808__auto___70421 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70421 == null)){
} else {
var c__67734__auto___70422 = temp__5808__auto___70421;
if((with_let70211.generation === c__67734__auto___70422.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70211.generation = c__67734__auto___70422.ratomGeneration);
}

var init70212 = (with_let70211.length === (0));
var data_STAR___$1 = ((((init70212) || (cljs.core.not(with_let70211.hasOwnProperty((0))))))?(with_let70211[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70211[(0)]));
var res70213 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR___$1], null)], null);
return res70213;
});
enigma_nexus.table.skins.tree_in_table_rw = (function enigma_nexus$table$skins$tree_in_table_rw(props){
var map__70228 = props;
var map__70228__$1 = cljs.core.__destructure_map(map__70228);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70228__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70228__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70228__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70228__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70228__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70228__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70229 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70229","with-let70229",-903103020));
var temp__5808__auto___70440 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70440 == null)){
} else {
var c__67734__auto___70441 = temp__5808__auto___70440;
if((with_let70229.generation === c__67734__auto___70441.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70229.generation = c__67734__auto___70441.ratomGeneration);
}

var init70230 = (with_let70229.length === (0));
var data_STAR___$1 = ((((init70230) || (cljs.core.not(with_let70229.hasOwnProperty((0))))))?(with_let70229[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70229[(0)]));
var res70231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),data_STAR___$1], null)], null);
return res70231;
});
enigma_nexus.table.skins.multi_select = (function enigma_nexus$table$skins$multi_select(props){
var map__70243 = props;
var map__70243__$1 = cljs.core.__destructure_map(map__70243);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70243__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70243__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70243__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70243__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70243__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70243__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70244 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70244","with-let70244",55081987));
var temp__5808__auto___70446 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70446 == null)){
} else {
var c__67734__auto___70447 = temp__5808__auto___70446;
if((with_let70244.generation === c__67734__auto___70447.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70244.generation = c__67734__auto___70447.ratomGeneration);
}

var init70245 = (with_let70244.length === (0));
var data_STAR___$1 = ((((init70245) || (cljs.core.not(with_let70244.hasOwnProperty((0))))))?(with_let70244[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70244[(0)]));
var res70246 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR___$1,new cljs.core.Keyword(null,"class","class",-2030961996),"multi-select"], null)], null);
return res70246;
});

//# sourceMappingURL=enigma_nexus.table.skins.js.map
