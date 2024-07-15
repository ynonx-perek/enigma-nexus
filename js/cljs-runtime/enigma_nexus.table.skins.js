goog.provide('enigma_nexus.table.skins');
enigma_nexus.table.skins.multi_select_header = (function enigma_nexus$table$skins$multi_select_header(props){
var map__59406 = props;
var map__59406__$1 = cljs.core.__destructure_map(map__59406);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59406__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59406__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59406__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59406__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59406__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59406__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
if(cljs.core.empty_QMARK_(value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header empty"], null),"Select ..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (selected_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),selected_item], null);
}),value)], null);
}
});
enigma_nexus.table.skins.cell_date_select = (function enigma_nexus$table$skins$cell_date_select(props){
var map__59408 = props;
var map__59408__$1 = cljs.core.__destructure_map(map__59408);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59408__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_text_input = (function enigma_nexus$table$skins$cell_text_input(props){
var map__59409 = props;
var map__59409__$1 = cljs.core.__destructure_map(map__59409);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59409__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59409__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59409__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59409__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59409__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59409__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_file_input = (function enigma_nexus$table$skins$cell_file_input(props){
var map__59410 = props;
var map__59410__$1 = cljs.core.__destructure_map(map__59410);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59410__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.text_cell = (function enigma_nexus$table$skins$text_cell(props){
var map__59411 = props;
var map__59411__$1 = cljs.core.__destructure_map(map__59411);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59411__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.table.skins.danger = (function enigma_nexus$table$skins$danger(props){
var map__59412 = props;
var map__59412__$1 = cljs.core.__destructure_map(map__59412);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59412__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59412__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59412__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59412__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59412__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59412__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59413 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59413","with-let59413",596623598));
var temp__5808__auto___59478 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59478 == null)){
} else {
var c__59044__auto___59479 = temp__5808__auto___59478;
if((with_let59413.generation === c__59044__auto___59479.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59413.generation = c__59044__auto___59479.ratomGeneration);
}

var init59414 = (with_let59413.length === (0));
var indicators_STAR_ = ((((init59414) || (cljs.core.not(with_let59413.hasOwnProperty((0))))))?(with_let59413[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let59413[(0)]));
var res59415 = (cljs.core.truth_(new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"danger-row"], null)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"column-danger","column-danger",37828479).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column-danger"], null)], null):null));
return res59415;
});
enigma_nexus.table.skins.expand_collapse = (function enigma_nexus$table$skins$expand_collapse(props){
var map__59416 = props;
var map__59416__$1 = cljs.core.__destructure_map(map__59416);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59416__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59417 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59417","with-let59417",-1645920601));
var temp__5808__auto___59488 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59488 == null)){
} else {
var c__59044__auto___59493 = temp__5808__auto___59488;
if((with_let59417.generation === c__59044__auto___59493.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59417.generation = c__59044__auto___59493.ratomGeneration);
}

var init59418 = (with_let59417.length === (0));
var expanded_STAR_ = ((((init59418) || (cljs.core.not(with_let59417.hasOwnProperty((0))))))?(with_let59417[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null))):(with_let59417[(0)]));
var res59419 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"expand-collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_data_STAR_,cljs.core.update,new cljs.core.Keyword(null,"expanded","expanded",-3020742),cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?"V":">")], null);
return res59419;
});
enigma_nexus.table.skins.column_menu = (function enigma_nexus$table$skins$column_menu(props){
var map__59420 = props;
var map__59420__$1 = cljs.core.__destructure_map(map__59420);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59420__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59420__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59420__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59420__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59420__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59420__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59421 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59421","with-let59421",-222658267));
var temp__5808__auto___59494 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59494 == null)){
} else {
var c__59044__auto___59495 = temp__5808__auto___59494;
if((with_let59421.generation === c__59044__auto___59495.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59421.generation = c__59044__auto___59495.ratomGeneration);
}

var init59422 = (with_let59421.length === (0));
var indicators_STAR_ = ((((init59422) || (cljs.core.not(with_let59421.hasOwnProperty((0))))))?(with_let59421[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let59421[(0)]));
var menu = ((((init59422) || (cljs.core.not(with_let59421.hasOwnProperty((1))))))?(with_let59421[(1)] = enigma_nexus.table.state.create_column_menu(table_data_STAR_,row_index,column_index)):(with_let59421[(1)]));
var res59423 = (function (){var map__59424 = cljs.core.deref(indicators_STAR_);
var map__59424__$1 = cljs.core.__destructure_map(map__59424);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59424__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res59423;
});
enigma_nexus.table.skins.row_menu = (function enigma_nexus$table$skins$row_menu(props){
var map__59425 = props;
var map__59425__$1 = cljs.core.__destructure_map(map__59425);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59425__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59425__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59425__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59425__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59425__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59425__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59426 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59426","with-let59426",-570268705));
var temp__5808__auto___59503 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59503 == null)){
} else {
var c__59044__auto___59505 = temp__5808__auto___59503;
if((with_let59426.generation === c__59044__auto___59505.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59426.generation = c__59044__auto___59505.ratomGeneration);
}

var init59427 = (with_let59426.length === (0));
var indicators_STAR_ = ((((init59427) || (cljs.core.not(with_let59426.hasOwnProperty((0))))))?(with_let59426[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let59426[(0)]));
var menu = ((((init59427) || (cljs.core.not(with_let59426.hasOwnProperty((1))))))?(with_let59426[(1)] = enigma_nexus.table.state.create_row_menu(table_data_STAR_,row_index,column_index)):(with_let59426[(1)]));
var res59428 = (function (){var map__59429 = cljs.core.deref(indicators_STAR_);
var map__59429__$1 = cljs.core.__destructure_map(map__59429);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59429__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res59428;
});
enigma_nexus.table.skins.pin = (function enigma_nexus$table$skins$pin(props){
var map__59430 = props;
var map__59430__$1 = cljs.core.__destructure_map(map__59430);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59430__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59431 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59431","with-let59431",1710911651));
var temp__5808__auto___59509 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59509 == null)){
} else {
var c__59044__auto___59510 = temp__5808__auto___59509;
if((with_let59431.generation === c__59044__auto___59510.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59431.generation = c__59044__auto___59510.ratomGeneration);
}

var init59432 = (with_let59431.length === (0));
var indicators_STAR_ = ((((init59432) || (cljs.core.not(with_let59431.hasOwnProperty((0))))))?(with_let59431[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let59431[(0)]));
var res59433 = (function (){var map__59434 = cljs.core.deref(indicators_STAR_);
var map__59434__$1 = cljs.core.__destructure_map(map__59434);
var pinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59434__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59434__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
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
return res59433;
});
enigma_nexus.table.skins.menu = (function enigma_nexus$table$skins$menu(props){
var map__59435 = props;
var map__59435__$1 = cljs.core.__destructure_map(map__59435);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59435__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59435__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59435__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var with_let59436 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59436","with-let59436",-824842934));
var temp__5808__auto___59515 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59515 == null)){
} else {
var c__59044__auto___59517 = temp__5808__auto___59515;
if((with_let59436.generation === c__59044__auto___59517.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59436.generation = c__59044__auto___59517.ratomGeneration);
}

var init59437 = (with_let59436.length === (0));
var cell_STAR_ = ((((init59437) || (cljs.core.not(with_let59436.hasOwnProperty((0))))))?(with_let59436[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index], null))):(with_let59436[(0)]));
var menu = ((((init59437) || (cljs.core.not(with_let59436.hasOwnProperty((1))))))?(with_let59436[(1)] = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.kebab], null),new cljs.core.Keyword(null,"class","class",-2030961996),"default-cell-menu",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"default-cell-menu-expanded",new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator-css","separator-css",559201360),"menu-separator"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Date",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_date_select], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Text Cell",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_text_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"File Input",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Multi Select",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null)], null)], null)):(with_let59436[(1)]));
var res59438 = (function (){var map__59439 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cell_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null));
var map__59439__$1 = cljs.core.__destructure_map(map__59439);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59439__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res59438;
});
enigma_nexus.table.skins.multi_select_option = (function enigma_nexus$table$skins$multi_select_option(props){
var map__59440 = props;
var map__59440__$1 = cljs.core.__destructure_map(map__59440);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59440__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59441 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59441","with-let59441",-1857659828));
var temp__5808__auto___59529 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59529 == null)){
} else {
var c__59044__auto___59530 = temp__5808__auto___59529;
if((with_let59441.generation === c__59044__auto___59530.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59441.generation = c__59044__auto___59530.ratomGeneration);
}

var init59442 = (with_let59441.length === (0));
var selected_values_STAR_ = ((((init59442) || (cljs.core.not(with_let59441.hasOwnProperty((0))))))?(with_let59441[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let59441[(0)]));
var res59443 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_values_STAR_,(function (content){
if(cljs.core.contains_QMARK_(content,value)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(content,value);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(content,value);
}
}));
})], null)], null),value], null);
return res59443;
});
enigma_nexus.table.skins.single_select_option = (function enigma_nexus$table$skins$single_select_option(props){
var map__59444 = props;
var map__59444__$1 = cljs.core.__destructure_map(map__59444);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59444__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59444__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59444__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59444__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59444__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59444__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59445 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59445","with-let59445",1948374138));
var temp__5808__auto___59531 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59531 == null)){
} else {
var c__59044__auto___59532 = temp__5808__auto___59531;
if((with_let59445.generation === c__59044__auto___59532.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59445.generation = c__59044__auto___59532.ratomGeneration);
}

var init59446 = (with_let59445.length === (0));
var selected_values_STAR_ = ((((init59446) || (cljs.core.not(with_let59445.hasOwnProperty((0))))))?(with_let59445[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let59445[(0)]));
var res59447 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
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
return res59447;
});
enigma_nexus.table.skins.table_in_table = (function enigma_nexus$table$skins$table_in_table(props){
var map__59448 = props;
var map__59448__$1 = cljs.core.__destructure_map(map__59448);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59448__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59448__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59448__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59448__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59448__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59448__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59449 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59449","with-let59449",-998360575));
var temp__5808__auto___59533 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59533 == null)){
} else {
var c__59044__auto___59534 = temp__5808__auto___59533;
if((with_let59449.generation === c__59044__auto___59534.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59449.generation = c__59044__auto___59534.ratomGeneration);
}

var init59450 = (with_let59449.length === (0));
var inner_table_data_STAR_ = ((((init59450) || (cljs.core.not(with_let59449.hasOwnProperty((0))))))?(with_let59449[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let59449[(0)]));
var res59451 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),inner_table_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res59451;
});
enigma_nexus.table.skins.tree_in_table_ro = (function enigma_nexus$table$skins$tree_in_table_ro(props){
var map__59452 = props;
var map__59452__$1 = cljs.core.__destructure_map(map__59452);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59452__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59453 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59453","with-let59453",-1435225993));
var temp__5808__auto___59539 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59539 == null)){
} else {
var c__59044__auto___59540 = temp__5808__auto___59539;
if((with_let59453.generation === c__59044__auto___59540.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59453.generation = c__59044__auto___59540.ratomGeneration);
}

var init59454 = (with_let59453.length === (0));
var tree_data_STAR_ = ((((init59454) || (cljs.core.not(with_let59453.hasOwnProperty((0))))))?(with_let59453[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let59453[(0)]));
var res59455 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),tree_data_STAR_], null)], null);
return res59455;
});
enigma_nexus.table.skins.tree_in_table_rw = (function enigma_nexus$table$skins$tree_in_table_rw(props){
var map__59456 = props;
var map__59456__$1 = cljs.core.__destructure_map(map__59456);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59456__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59457 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59457","with-let59457",-873905814));
var temp__5808__auto___59542 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59542 == null)){
} else {
var c__59044__auto___59543 = temp__5808__auto___59542;
if((with_let59457.generation === c__59044__auto___59543.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59457.generation = c__59044__auto___59543.ratomGeneration);
}

var init59458 = (with_let59457.length === (0));
var tree_data_STAR_ = ((((init59458) || (cljs.core.not(with_let59457.hasOwnProperty((0))))))?(with_let59457[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let59457[(0)]));
var res59459 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),tree_data_STAR_], null)], null);
return res59459;
});
enigma_nexus.table.skins.multi_select = (function enigma_nexus$table$skins$multi_select(props){
var map__59460 = props;
var map__59460__$1 = cljs.core.__destructure_map(map__59460);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59460__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let59461 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59461","with-let59461",-586360712));
var temp__5808__auto___59548 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59548 == null)){
} else {
var c__59044__auto___59549 = temp__5808__auto___59548;
if((with_let59461.generation === c__59044__auto___59549.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59461.generation = c__59044__auto___59549.ratomGeneration);
}

var init59462 = (with_let59461.length === (0));
var select_data_STAR_ = ((((init59462) || (cljs.core.not(with_let59461.hasOwnProperty((0))))))?(with_let59461[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let59461[(0)]));
var res59463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),select_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"multi-select"], null)], null);
return res59463;
});

//# sourceMappingURL=enigma_nexus.table.skins.js.map
