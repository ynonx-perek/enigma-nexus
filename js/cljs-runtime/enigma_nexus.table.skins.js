goog.provide('enigma_nexus.table.skins');
enigma_nexus.table.skins.multi_select_header = (function enigma_nexus$table$skins$multi_select_header(props){
var map__77811 = props;
var map__77811__$1 = cljs.core.__destructure_map(map__77811);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77811__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77811__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77811__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77811__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77811__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77811__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
if(cljs.core.empty_QMARK_(value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header empty"], null),"Select ..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (selected_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),selected_item], null);
}),value)], null);
}
});
enigma_nexus.table.skins.cell_date_select = (function enigma_nexus$table$skins$cell_date_select(props){
var map__77812 = props;
var map__77812__$1 = cljs.core.__destructure_map(map__77812);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77812__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77812__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77812__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77812__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77812__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77812__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_text_input = (function enigma_nexus$table$skins$cell_text_input(props){
var map__77813 = props;
var map__77813__$1 = cljs.core.__destructure_map(map__77813);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77813__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77813__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77813__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77813__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77813__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77813__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_file_input = (function enigma_nexus$table$skins$cell_file_input(props){
var map__77814 = props;
var map__77814__$1 = cljs.core.__destructure_map(map__77814);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77814__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77814__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77814__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77814__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77814__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77814__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.text_cell = (function enigma_nexus$table$skins$text_cell(props){
var map__77815 = props;
var map__77815__$1 = cljs.core.__destructure_map(map__77815);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77815__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.table.skins.danger = (function enigma_nexus$table$skins$danger(props){
var map__77816 = props;
var map__77816__$1 = cljs.core.__destructure_map(map__77816);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77816__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77816__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77816__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77816__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77816__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77816__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77817 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77817","with-let77817",1351189942));
var temp__5808__auto___77870 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77870 == null)){
} else {
var c__59044__auto___77871 = temp__5808__auto___77870;
if((with_let77817.generation === c__59044__auto___77871.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77817.generation = c__59044__auto___77871.ratomGeneration);
}

var init77818 = (with_let77817.length === (0));
var indicators_STAR_ = ((((init77818) || (cljs.core.not(with_let77817.hasOwnProperty((0))))))?(with_let77817[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let77817[(0)]));
var res77819 = (cljs.core.truth_(new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"danger-row"], null)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"column-danger","column-danger",37828479).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column-danger"], null)], null):null));
return res77819;
});
enigma_nexus.table.skins.expand_collapse = (function enigma_nexus$table$skins$expand_collapse(props){
var map__77820 = props;
var map__77820__$1 = cljs.core.__destructure_map(map__77820);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77820__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77820__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77820__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77820__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77820__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77820__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77821 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77821","with-let77821",-164114775));
var temp__5808__auto___77872 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77872 == null)){
} else {
var c__59044__auto___77873 = temp__5808__auto___77872;
if((with_let77821.generation === c__59044__auto___77873.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77821.generation = c__59044__auto___77873.ratomGeneration);
}

var init77822 = (with_let77821.length === (0));
var expanded_STAR_ = ((((init77822) || (cljs.core.not(with_let77821.hasOwnProperty((0))))))?(with_let77821[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null))):(with_let77821[(0)]));
var res77823 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"expand-collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_data_STAR_,cljs.core.update,new cljs.core.Keyword(null,"expanded","expanded",-3020742),cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?"V":">")], null);
return res77823;
});
enigma_nexus.table.skins.column_menu = (function enigma_nexus$table$skins$column_menu(props){
var map__77824 = props;
var map__77824__$1 = cljs.core.__destructure_map(map__77824);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77824__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77824__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77824__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77824__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77824__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77824__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77825 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77825","with-let77825",2141099593));
var temp__5808__auto___77874 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77874 == null)){
} else {
var c__59044__auto___77875 = temp__5808__auto___77874;
if((with_let77825.generation === c__59044__auto___77875.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77825.generation = c__59044__auto___77875.ratomGeneration);
}

var init77826 = (with_let77825.length === (0));
var indicators_STAR_ = ((((init77826) || (cljs.core.not(with_let77825.hasOwnProperty((0))))))?(with_let77825[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let77825[(0)]));
var menu = ((((init77826) || (cljs.core.not(with_let77825.hasOwnProperty((1))))))?(with_let77825[(1)] = enigma_nexus.table.state.create_column_menu(table_data_STAR_,row_index,column_index)):(with_let77825[(1)]));
var res77827 = (function (){var map__77828 = cljs.core.deref(indicators_STAR_);
var map__77828__$1 = cljs.core.__destructure_map(map__77828);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77828__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res77827;
});
enigma_nexus.table.skins.row_menu = (function enigma_nexus$table$skins$row_menu(props){
var map__77829 = props;
var map__77829__$1 = cljs.core.__destructure_map(map__77829);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77829__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77829__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77829__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77829__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77829__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77829__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77830 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77830","with-let77830",1589898194));
var temp__5808__auto___77877 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77877 == null)){
} else {
var c__59044__auto___77879 = temp__5808__auto___77877;
if((with_let77830.generation === c__59044__auto___77879.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77830.generation = c__59044__auto___77879.ratomGeneration);
}

var init77831 = (with_let77830.length === (0));
var indicators_STAR_ = ((((init77831) || (cljs.core.not(with_let77830.hasOwnProperty((0))))))?(with_let77830[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let77830[(0)]));
var menu = ((((init77831) || (cljs.core.not(with_let77830.hasOwnProperty((1))))))?(with_let77830[(1)] = enigma_nexus.table.state.create_row_menu(table_data_STAR_,row_index,column_index)):(with_let77830[(1)]));
var res77832 = (function (){var map__77833 = cljs.core.deref(indicators_STAR_);
var map__77833__$1 = cljs.core.__destructure_map(map__77833);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77833__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res77832;
});
enigma_nexus.table.skins.pin = (function enigma_nexus$table$skins$pin(props){
var map__77834 = props;
var map__77834__$1 = cljs.core.__destructure_map(map__77834);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77834__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77834__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77834__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77834__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77834__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77834__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77835 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77835","with-let77835",-631443516));
var temp__5808__auto___77883 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77883 == null)){
} else {
var c__59044__auto___77884 = temp__5808__auto___77883;
if((with_let77835.generation === c__59044__auto___77884.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77835.generation = c__59044__auto___77884.ratomGeneration);
}

var init77836 = (with_let77835.length === (0));
var indicators_STAR_ = ((((init77836) || (cljs.core.not(with_let77835.hasOwnProperty((0))))))?(with_let77835[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let77835[(0)]));
var res77837 = (function (){var map__77838 = cljs.core.deref(indicators_STAR_);
var map__77838__$1 = cljs.core.__destructure_map(map__77838);
var pinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77838__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77838__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
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
return res77837;
});
enigma_nexus.table.skins.menu = (function enigma_nexus$table$skins$menu(props){
var map__77839 = props;
var map__77839__$1 = cljs.core.__destructure_map(map__77839);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77839__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77839__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77839__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var with_let77840 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77840","with-let77840",18742226));
var temp__5808__auto___77886 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77886 == null)){
} else {
var c__59044__auto___77887 = temp__5808__auto___77886;
if((with_let77840.generation === c__59044__auto___77887.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77840.generation = c__59044__auto___77887.ratomGeneration);
}

var init77841 = (with_let77840.length === (0));
var cell_STAR_ = ((((init77841) || (cljs.core.not(with_let77840.hasOwnProperty((0))))))?(with_let77840[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index], null))):(with_let77840[(0)]));
var menu = ((((init77841) || (cljs.core.not(with_let77840.hasOwnProperty((1))))))?(with_let77840[(1)] = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.kebab], null),new cljs.core.Keyword(null,"class","class",-2030961996),"default-cell-menu",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"default-cell-menu-expanded",new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator-css","separator-css",559201360),"menu-separator"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Date",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_date_select], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Text Cell",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_text_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"File Input",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Multi Select",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null)], null)], null)):(with_let77840[(1)]));
var res77842 = (function (){var map__77843 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cell_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null));
var map__77843__$1 = cljs.core.__destructure_map(map__77843);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77843__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res77842;
});
enigma_nexus.table.skins.multi_select_option = (function enigma_nexus$table$skins$multi_select_option(props){
var map__77844 = props;
var map__77844__$1 = cljs.core.__destructure_map(map__77844);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77844__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77844__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77844__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77844__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77844__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77844__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77845 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77845","with-let77845",-507412405));
var temp__5808__auto___77888 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77888 == null)){
} else {
var c__59044__auto___77889 = temp__5808__auto___77888;
if((with_let77845.generation === c__59044__auto___77889.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77845.generation = c__59044__auto___77889.ratomGeneration);
}

var init77846 = (with_let77845.length === (0));
var selected_values_STAR_ = ((((init77846) || (cljs.core.not(with_let77845.hasOwnProperty((0))))))?(with_let77845[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let77845[(0)]));
var res77847 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_values_STAR_,(function (content){
if(cljs.core.contains_QMARK_(content,value)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(content,value);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(content,value);
}
}));
})], null)], null),value], null);
return res77847;
});
enigma_nexus.table.skins.single_select_option = (function enigma_nexus$table$skins$single_select_option(props){
var map__77848 = props;
var map__77848__$1 = cljs.core.__destructure_map(map__77848);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77848__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77848__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77848__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77848__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77848__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77848__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77849 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77849","with-let77849",473660937));
var temp__5808__auto___77893 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77893 == null)){
} else {
var c__59044__auto___77894 = temp__5808__auto___77893;
if((with_let77849.generation === c__59044__auto___77894.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77849.generation = c__59044__auto___77894.ratomGeneration);
}

var init77850 = (with_let77849.length === (0));
var selected_values_STAR_ = ((((init77850) || (cljs.core.not(with_let77849.hasOwnProperty((0))))))?(with_let77849[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let77849[(0)]));
var res77851 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
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
return res77851;
});
enigma_nexus.table.skins.table_in_table = (function enigma_nexus$table$skins$table_in_table(props){
var map__77852 = props;
var map__77852__$1 = cljs.core.__destructure_map(map__77852);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77852__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77853 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77853","with-let77853",566240803));
var temp__5808__auto___77895 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77895 == null)){
} else {
var c__59044__auto___77896 = temp__5808__auto___77895;
if((with_let77853.generation === c__59044__auto___77896.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77853.generation = c__59044__auto___77896.ratomGeneration);
}

var init77854 = (with_let77853.length === (0));
var inner_table_data_STAR_ = ((((init77854) || (cljs.core.not(with_let77853.hasOwnProperty((0))))))?(with_let77853[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let77853[(0)]));
var res77855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),inner_table_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res77855;
});
enigma_nexus.table.skins.tree_in_table = (function enigma_nexus$table$skins$tree_in_table(props){
var map__77856 = props;
var map__77856__$1 = cljs.core.__destructure_map(map__77856);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77856__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77856__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77856__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77856__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77856__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77856__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77857 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77857","with-let77857",1452064079));
var temp__5808__auto___77897 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77897 == null)){
} else {
var c__59044__auto___77898 = temp__5808__auto___77897;
if((with_let77857.generation === c__59044__auto___77898.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77857.generation = c__59044__auto___77898.ratomGeneration);
}

var init77858 = (with_let77857.length === (0));
var tree_data_STAR_ = ((((init77858) || (cljs.core.not(with_let77857.hasOwnProperty((0))))))?(with_let77857[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let77857[(0)]));
var res77859 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),tree_data_STAR_], null)], null);
return res77859;
});
enigma_nexus.table.skins.multi_select = (function enigma_nexus$table$skins$multi_select(props){
var map__77860 = props;
var map__77860__$1 = cljs.core.__destructure_map(map__77860);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77860__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77860__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77860__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77860__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77860__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77860__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let77861 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77861","with-let77861",-1968568875));
var temp__5808__auto___77900 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77900 == null)){
} else {
var c__59044__auto___77901 = temp__5808__auto___77900;
if((with_let77861.generation === c__59044__auto___77901.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77861.generation = c__59044__auto___77901.ratomGeneration);
}

var init77862 = (with_let77861.length === (0));
var select_data_STAR_ = ((((init77862) || (cljs.core.not(with_let77861.hasOwnProperty((0))))))?(with_let77861[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let77861[(0)]));
var res77863 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),select_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"multi-select"], null)], null);
return res77863;
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
