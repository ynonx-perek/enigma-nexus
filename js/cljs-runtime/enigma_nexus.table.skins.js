goog.provide('enigma_nexus.table.skins');
enigma_nexus.table.skins.multi_select_header = (function enigma_nexus$table$skins$multi_select_header(props){
var map__60450 = props;
var map__60450__$1 = cljs.core.__destructure_map(map__60450);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
if(cljs.core.empty_QMARK_(value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header empty"], null),"Select ..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (selected_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),selected_item], null);
}),value)], null);
}
});
enigma_nexus.table.skins.cell_date_select = (function enigma_nexus$table$skins$cell_date_select(props){
var map__60451 = props;
var map__60451__$1 = cljs.core.__destructure_map(map__60451);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60451__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60451__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60451__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60451__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60451__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60451__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_text_input = (function enigma_nexus$table$skins$cell_text_input(props){
var map__60452 = props;
var map__60452__$1 = cljs.core.__destructure_map(map__60452);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60452__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_file_input = (function enigma_nexus$table$skins$cell_file_input(props){
var map__60453 = props;
var map__60453__$1 = cljs.core.__destructure_map(map__60453);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60453__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60453__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60453__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60453__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60453__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60453__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.text_cell = (function enigma_nexus$table$skins$text_cell(props){
var map__60454 = props;
var map__60454__$1 = cljs.core.__destructure_map(map__60454);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60454__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.table.skins.danger = (function enigma_nexus$table$skins$danger(props){
var map__60455 = props;
var map__60455__$1 = cljs.core.__destructure_map(map__60455);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60455__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60456 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60456","with-let60456",-1901509509));
var temp__5808__auto___60503 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60503 == null)){
} else {
var c__59044__auto___60504 = temp__5808__auto___60503;
if((with_let60456.generation === c__59044__auto___60504.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60456.generation = c__59044__auto___60504.ratomGeneration);
}

var init60457 = (with_let60456.length === (0));
var indicators_STAR_ = ((((init60457) || (cljs.core.not(with_let60456.hasOwnProperty((0))))))?(with_let60456[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let60456[(0)]));
var res60458 = (cljs.core.truth_(new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"danger-row"], null)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"column-danger","column-danger",37828479).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column-danger"], null)], null):null));
return res60458;
});
enigma_nexus.table.skins.expand_collapse = (function enigma_nexus$table$skins$expand_collapse(props){
var map__60459 = props;
var map__60459__$1 = cljs.core.__destructure_map(map__60459);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60459__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60460 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60460","with-let60460",-274330500));
var temp__5808__auto___60505 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60505 == null)){
} else {
var c__59044__auto___60506 = temp__5808__auto___60505;
if((with_let60460.generation === c__59044__auto___60506.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60460.generation = c__59044__auto___60506.ratomGeneration);
}

var init60461 = (with_let60460.length === (0));
var expanded_STAR_ = ((((init60461) || (cljs.core.not(with_let60460.hasOwnProperty((0))))))?(with_let60460[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null))):(with_let60460[(0)]));
var res60462 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"expand-collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_data_STAR_,cljs.core.update,new cljs.core.Keyword(null,"expanded","expanded",-3020742),cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?"V":">")], null);
return res60462;
});
enigma_nexus.table.skins.column_menu = (function enigma_nexus$table$skins$column_menu(props){
var map__60463 = props;
var map__60463__$1 = cljs.core.__destructure_map(map__60463);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60464 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60464","with-let60464",774616315));
var temp__5808__auto___60508 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60508 == null)){
} else {
var c__59044__auto___60509 = temp__5808__auto___60508;
if((with_let60464.generation === c__59044__auto___60509.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60464.generation = c__59044__auto___60509.ratomGeneration);
}

var init60465 = (with_let60464.length === (0));
var indicators_STAR_ = ((((init60465) || (cljs.core.not(with_let60464.hasOwnProperty((0))))))?(with_let60464[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let60464[(0)]));
var menu = ((((init60465) || (cljs.core.not(with_let60464.hasOwnProperty((1))))))?(with_let60464[(1)] = enigma_nexus.table.state.create_column_menu(table_data_STAR_,row_index,column_index)):(with_let60464[(1)]));
var res60466 = (function (){var map__60467 = cljs.core.deref(indicators_STAR_);
var map__60467__$1 = cljs.core.__destructure_map(map__60467);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60467__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res60466;
});
enigma_nexus.table.skins.row_menu = (function enigma_nexus$table$skins$row_menu(props){
var map__60468 = props;
var map__60468__$1 = cljs.core.__destructure_map(map__60468);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60468__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60469 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60469","with-let60469",-349781258));
var temp__5808__auto___60512 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60512 == null)){
} else {
var c__59044__auto___60513 = temp__5808__auto___60512;
if((with_let60469.generation === c__59044__auto___60513.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60469.generation = c__59044__auto___60513.ratomGeneration);
}

var init60470 = (with_let60469.length === (0));
var indicators_STAR_ = ((((init60470) || (cljs.core.not(with_let60469.hasOwnProperty((0))))))?(with_let60469[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let60469[(0)]));
var menu = ((((init60470) || (cljs.core.not(with_let60469.hasOwnProperty((1))))))?(with_let60469[(1)] = enigma_nexus.table.state.create_row_menu(table_data_STAR_,row_index,column_index)):(with_let60469[(1)]));
var res60471 = (function (){var map__60472 = cljs.core.deref(indicators_STAR_);
var map__60472__$1 = cljs.core.__destructure_map(map__60472);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60472__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res60471;
});
enigma_nexus.table.skins.pin = (function enigma_nexus$table$skins$pin(props){
var map__60473 = props;
var map__60473__$1 = cljs.core.__destructure_map(map__60473);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60474 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60474","with-let60474",1225317069));
var temp__5808__auto___60518 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60518 == null)){
} else {
var c__59044__auto___60519 = temp__5808__auto___60518;
if((with_let60474.generation === c__59044__auto___60519.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60474.generation = c__59044__auto___60519.ratomGeneration);
}

var init60475 = (with_let60474.length === (0));
var indicators_STAR_ = ((((init60475) || (cljs.core.not(with_let60474.hasOwnProperty((0))))))?(with_let60474[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let60474[(0)]));
var res60476 = (function (){var map__60477 = cljs.core.deref(indicators_STAR_);
var map__60477__$1 = cljs.core.__destructure_map(map__60477);
var pinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60477__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60477__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
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
return res60476;
});
enigma_nexus.table.skins.menu = (function enigma_nexus$table$skins$menu(props){
var map__60478 = props;
var map__60478__$1 = cljs.core.__destructure_map(map__60478);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60478__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60478__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60478__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var with_let60479 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60479","with-let60479",724238585));
var temp__5808__auto___60520 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60520 == null)){
} else {
var c__59044__auto___60521 = temp__5808__auto___60520;
if((with_let60479.generation === c__59044__auto___60521.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60479.generation = c__59044__auto___60521.ratomGeneration);
}

var init60480 = (with_let60479.length === (0));
var cell_STAR_ = ((((init60480) || (cljs.core.not(with_let60479.hasOwnProperty((0))))))?(with_let60479[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index], null))):(with_let60479[(0)]));
var menu = ((((init60480) || (cljs.core.not(with_let60479.hasOwnProperty((1))))))?(with_let60479[(1)] = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.kebab], null),new cljs.core.Keyword(null,"class","class",-2030961996),"default-cell-menu",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"default-cell-menu-expanded",new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator-css","separator-css",559201360),"menu-separator"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Date",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_date_select], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Text Cell",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_text_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"File Input",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Multi Select",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null)], null)], null)):(with_let60479[(1)]));
var res60481 = (function (){var map__60482 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cell_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null));
var map__60482__$1 = cljs.core.__destructure_map(map__60482);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60482__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res60481;
});
enigma_nexus.table.skins.multi_select_option = (function enigma_nexus$table$skins$multi_select_option(props){
var map__60483 = props;
var map__60483__$1 = cljs.core.__destructure_map(map__60483);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60483__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60484 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60484","with-let60484",-345876138));
var temp__5808__auto___60522 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60522 == null)){
} else {
var c__59044__auto___60523 = temp__5808__auto___60522;
if((with_let60484.generation === c__59044__auto___60523.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60484.generation = c__59044__auto___60523.ratomGeneration);
}

var init60485 = (with_let60484.length === (0));
var selected_values_STAR_ = ((((init60485) || (cljs.core.not(with_let60484.hasOwnProperty((0))))))?(with_let60484[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let60484[(0)]));
var res60486 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_values_STAR_,(function (content){
if(cljs.core.contains_QMARK_(content,value)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(content,value);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(content,value);
}
}));
})], null)], null),value], null);
return res60486;
});
enigma_nexus.table.skins.single_select_option = (function enigma_nexus$table$skins$single_select_option(props){
var map__60487 = props;
var map__60487__$1 = cljs.core.__destructure_map(map__60487);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60487__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60488 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60488","with-let60488",-773900955));
var temp__5808__auto___60524 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60524 == null)){
} else {
var c__59044__auto___60525 = temp__5808__auto___60524;
if((with_let60488.generation === c__59044__auto___60525.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60488.generation = c__59044__auto___60525.ratomGeneration);
}

var init60489 = (with_let60488.length === (0));
var selected_values_STAR_ = ((((init60489) || (cljs.core.not(with_let60488.hasOwnProperty((0))))))?(with_let60488[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let60488[(0)]));
var res60490 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_data_STAR_,(function (table_data){
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(table_data,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null),(function (content){
if(cljs.core.contains_QMARK_(content,value)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(content,value);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,value);
}
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),false);
}));
})], null)], null),value], null);
return res60490;
});
enigma_nexus.table.skins.table_in_table = (function enigma_nexus$table$skins$table_in_table(props){
var map__60491 = props;
var map__60491__$1 = cljs.core.__destructure_map(map__60491);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60491__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60491__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60491__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60491__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60491__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60491__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60492 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60492","with-let60492",505550011));
var temp__5808__auto___60528 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60528 == null)){
} else {
var c__59044__auto___60529 = temp__5808__auto___60528;
if((with_let60492.generation === c__59044__auto___60529.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60492.generation = c__59044__auto___60529.ratomGeneration);
}

var init60493 = (with_let60492.length === (0));
var inner_table_data_STAR_ = ((((init60493) || (cljs.core.not(with_let60492.hasOwnProperty((0))))))?(with_let60492[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let60492[(0)]));
var res60494 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),inner_table_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res60494;
});
enigma_nexus.table.skins.tree_in_table = (function enigma_nexus$table$skins$tree_in_table(props){
var map__60495 = props;
var map__60495__$1 = cljs.core.__destructure_map(map__60495);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60495__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60496 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60496","with-let60496",-1658167040));
var temp__5808__auto___60530 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60530 == null)){
} else {
var c__59044__auto___60531 = temp__5808__auto___60530;
if((with_let60496.generation === c__59044__auto___60531.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60496.generation = c__59044__auto___60531.ratomGeneration);
}

var init60497 = (with_let60496.length === (0));
var tree_data_STAR_ = ((((init60497) || (cljs.core.not(with_let60496.hasOwnProperty((0))))))?(with_let60496[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let60496[(0)]));
var res60498 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),tree_data_STAR_], null)], null);
return res60498;
});
enigma_nexus.table.skins.multi_select = (function enigma_nexus$table$skins$multi_select(props){
var map__60499 = props;
var map__60499__$1 = cljs.core.__destructure_map(map__60499);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60499__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let60500 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60500","with-let60500",-626121248));
var temp__5808__auto___60535 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60535 == null)){
} else {
var c__59044__auto___60536 = temp__5808__auto___60535;
if((with_let60500.generation === c__59044__auto___60536.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60500.generation = c__59044__auto___60536.ratomGeneration);
}

var init60501 = (with_let60500.length === (0));
var select_data_STAR_ = ((((init60501) || (cljs.core.not(with_let60500.hasOwnProperty((0))))))?(with_let60500[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let60500[(0)]));
var res60502 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),select_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"multi-select"], null)], null);
return res60502;
});
enigma_nexus.table.skins.compile_scalar_to_table = (function enigma_nexus$table$skins$compile_scalar_to_table(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((data instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Keyword(null,"content","content",15833224),data,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
)], null)], null)], null)], null);
});
enigma_nexus.table.skins.compile_array_to_table_bfs = (function enigma_nexus$table$skins$compile_array_to_table_bfs(data){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),(enigma_nexus.table.skins.compile_array_to_table_bfs.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.table.skins.compile_array_to_table_bfs.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.table.skins.compile_array_to_table_bfs.call(null,value)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),(enigma_nexus.table.skins.compile_map_to_table_bfs.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.table.skins.compile_map_to_table_bfs.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.table.skins.compile_map_to_table_bfs.call(null,value)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),value,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);

}
}
}
}),((cljs.core.vector_QMARK_(row))?row:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null)))], null);
}),data)], null);
});
enigma_nexus.table.skins.compile_set_to_table_bfs = (function enigma_nexus$table$skins$compile_set_to_table_bfs(data){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),(((value instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(value):value
),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
}),data)], null)], null)], null);
});
enigma_nexus.table.skins.compile_map_to_table_bfs = (function enigma_nexus$table$skins$compile_map_to_table_bfs(data){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),(((key instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(key):key
),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
}),cljs.core.keys(data))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),enigma_nexus.table.skins.compile_array_to_table_bfs(value),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),(enigma_nexus.table.skins.compile_map_to_table_bfs.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.table.skins.compile_map_to_table_bfs.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.table.skins.compile_map_to_table_bfs.call(null,value)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.set_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),enigma_nexus.table.skins.compile_set_to_table_bfs(value),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),value,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);

}
}
}
}
}),cljs.core.vals(data))], null)], null)], null);
});
enigma_nexus.table.skins.compile_array_to_table_dfs = (function enigma_nexus$table$skins$compile_array_to_table_dfs(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (index){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),index,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(data)))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),(enigma_nexus.table.skins.compile_array_to_table_dfs.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.table.skins.compile_array_to_table_dfs.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.table.skins.compile_array_to_table_dfs.call(null,value)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),(enigma_nexus.table.skins.compile_map_to_table_dfs.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.table.skins.compile_map_to_table_dfs.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.table.skins.compile_map_to_table_dfs.call(null,value)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),value,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);

}
}
}
}),data)], null)], null)], null);
});
enigma_nexus.table.skins.compile_set_to_table_dfs = (function enigma_nexus$table$skins$compile_set_to_table_dfs(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),(((value instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(value):value
),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
}),data)], null)], null)], null);
});
enigma_nexus.table.skins.compile_map_to_table_dfs = (function enigma_nexus$table$skins$compile_map_to_table_dfs(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),(((key instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(key):key
),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
}),cljs.core.keys(data))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),enigma_nexus.table.skins.compile_array_to_table_dfs(value),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),(enigma_nexus.table.skins.compile_map_to_table_dfs.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.table.skins.compile_map_to_table_dfs.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.table.skins.compile_map_to_table_dfs.call(null,value)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.set_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),enigma_nexus.table.skins.compile_set_to_table_dfs(value),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),value,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);

}
}
}
}
}),cljs.core.vals(data))], null)], null)], null);
});
enigma_nexus.table.skins.compile_to_table = (function enigma_nexus$table$skins$compile_to_table(data){
if((!(cljs.core.coll_QMARK_(data)))){
return enigma_nexus.table.skins.compile_scalar_to_table(data);
} else {
if(cljs.core.vector_QMARK_(data)){
return enigma_nexus.table.skins.compile_array_to_table_dfs(data);
} else {
if(cljs.core.map_QMARK_(data)){
return enigma_nexus.table.skins.compile_map_to_table_dfs(data);
} else {
return null;
}
}
}
});

//# sourceMappingURL=enigma_nexus.table.skins.js.map
