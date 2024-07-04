goog.provide('enigma_nexus.table.skins');
enigma_nexus.table.skins.multi_select_header = (function enigma_nexus$table$skins$multi_select_header(props){
var map__68244 = props;
var map__68244__$1 = cljs.core.__destructure_map(map__68244);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68244__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
if(cljs.core.empty_QMARK_(value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header empty"], null),"Select ..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (selected_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),selected_item], null);
}),value)], null);
}
});
enigma_nexus.table.skins.cell_date_select = (function enigma_nexus$table$skins$cell_date_select(props){
var map__68245 = props;
var map__68245__$1 = cljs.core.__destructure_map(map__68245);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68245__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_text_input = (function enigma_nexus$table$skins$cell_text_input(props){
var map__68246 = props;
var map__68246__$1 = cljs.core.__destructure_map(map__68246);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68246__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.cell_file_input = (function enigma_nexus$table$skins$cell_file_input(props){
var map__68247 = props;
var map__68247__$1 = cljs.core.__destructure_map(map__68247);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68247__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(table_data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.table.skins.text_cell = (function enigma_nexus$table$skins$text_cell(props){
var map__68248 = props;
var map__68248__$1 = cljs.core.__destructure_map(map__68248);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68248__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.table.skins.danger = (function enigma_nexus$table$skins$danger(props){
var map__68249 = props;
var map__68249__$1 = cljs.core.__destructure_map(map__68249);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68249__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68249__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68249__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68249__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68249__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68249__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68250 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68250","with-let68250",-1294978551));
var temp__5808__auto___68300 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68300 == null)){
} else {
var c__59044__auto___68304 = temp__5808__auto___68300;
if((with_let68250.generation === c__59044__auto___68304.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68250.generation = c__59044__auto___68304.ratomGeneration);
}

var init68251 = (with_let68250.length === (0));
var indicators_STAR_ = ((((init68251) || (cljs.core.not(with_let68250.hasOwnProperty((0))))))?(with_let68250[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let68250[(0)]));
var res68252 = (cljs.core.truth_(new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"danger-row"], null)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"column-danger","column-danger",37828479).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column-danger"], null)], null):null));
return res68252;
});
enigma_nexus.table.skins.expand_collapse = (function enigma_nexus$table$skins$expand_collapse(props){
var map__68253 = props;
var map__68253__$1 = cljs.core.__destructure_map(map__68253);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68253__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68253__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68253__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68253__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68253__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68253__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68254 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68254","with-let68254",-24756658));
var temp__5808__auto___68305 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68305 == null)){
} else {
var c__59044__auto___68306 = temp__5808__auto___68305;
if((with_let68254.generation === c__59044__auto___68306.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68254.generation = c__59044__auto___68306.ratomGeneration);
}

var init68255 = (with_let68254.length === (0));
var expanded_STAR_ = ((((init68255) || (cljs.core.not(with_let68254.hasOwnProperty((0))))))?(with_let68254[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null))):(with_let68254[(0)]));
var res68256 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"expand-collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_data_STAR_,cljs.core.update,new cljs.core.Keyword(null,"expanded","expanded",-3020742),cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?"V":">")], null);
return res68256;
});
enigma_nexus.table.skins.column_menu = (function enigma_nexus$table$skins$column_menu(props){
var map__68257 = props;
var map__68257__$1 = cljs.core.__destructure_map(map__68257);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68257__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68258 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68258","with-let68258",1921352372));
var temp__5808__auto___68307 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68307 == null)){
} else {
var c__59044__auto___68308 = temp__5808__auto___68307;
if((with_let68258.generation === c__59044__auto___68308.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68258.generation = c__59044__auto___68308.ratomGeneration);
}

var init68259 = (with_let68258.length === (0));
var indicators_STAR_ = ((((init68259) || (cljs.core.not(with_let68258.hasOwnProperty((0))))))?(with_let68258[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let68258[(0)]));
var menu = ((((init68259) || (cljs.core.not(with_let68258.hasOwnProperty((1))))))?(with_let68258[(1)] = enigma_nexus.table.state.create_column_menu(table_data_STAR_,row_index,column_index)):(with_let68258[(1)]));
var res68260 = (function (){var map__68261 = cljs.core.deref(indicators_STAR_);
var map__68261__$1 = cljs.core.__destructure_map(map__68261);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68261__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res68260;
});
enigma_nexus.table.skins.row_menu = (function enigma_nexus$table$skins$row_menu(props){
var map__68262 = props;
var map__68262__$1 = cljs.core.__destructure_map(map__68262);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68262__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68262__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68262__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68262__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68262__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68262__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68263 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68263","with-let68263",-929539790));
var temp__5808__auto___68309 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68309 == null)){
} else {
var c__59044__auto___68310 = temp__5808__auto___68309;
if((with_let68263.generation === c__59044__auto___68310.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68263.generation = c__59044__auto___68310.ratomGeneration);
}

var init68264 = (with_let68263.length === (0));
var indicators_STAR_ = ((((init68264) || (cljs.core.not(with_let68263.hasOwnProperty((0))))))?(with_let68263[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let68263[(0)]));
var menu = ((((init68264) || (cljs.core.not(with_let68263.hasOwnProperty((1))))))?(with_let68263[(1)] = enigma_nexus.table.state.create_row_menu(table_data_STAR_,row_index,column_index)):(with_let68263[(1)]));
var res68265 = (function (){var map__68266 = cljs.core.deref(indicators_STAR_);
var map__68266__$1 = cljs.core.__destructure_map(map__68266);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68266__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res68265;
});
enigma_nexus.table.skins.pin = (function enigma_nexus$table$skins$pin(props){
var map__68267 = props;
var map__68267__$1 = cljs.core.__destructure_map(map__68267);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68267__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68267__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68267__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68267__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68267__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68267__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68268 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68268","with-let68268",1322459593));
var temp__5808__auto___68311 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68311 == null)){
} else {
var c__59044__auto___68312 = temp__5808__auto___68311;
if((with_let68268.generation === c__59044__auto___68312.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68268.generation = c__59044__auto___68312.ratomGeneration);
}

var init68269 = (with_let68268.length === (0));
var indicators_STAR_ = ((((init68269) || (cljs.core.not(with_let68268.hasOwnProperty((0))))))?(with_let68268[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let68268[(0)]));
var res68270 = (function (){var map__68271 = cljs.core.deref(indicators_STAR_);
var map__68271__$1 = cljs.core.__destructure_map(map__68271);
var pinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68271__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68271__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
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
return res68270;
});
enigma_nexus.table.skins.menu = (function enigma_nexus$table$skins$menu(props){
var map__68272 = props;
var map__68272__$1 = cljs.core.__destructure_map(map__68272);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68272__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68272__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68272__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var with_let68273 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68273","with-let68273",1678131857));
var temp__5808__auto___68315 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68315 == null)){
} else {
var c__59044__auto___68316 = temp__5808__auto___68315;
if((with_let68273.generation === c__59044__auto___68316.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68273.generation = c__59044__auto___68316.ratomGeneration);
}

var init68274 = (with_let68273.length === (0));
var cell_STAR_ = ((((init68274) || (cljs.core.not(with_let68273.hasOwnProperty((0))))))?(with_let68273[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index], null))):(with_let68273[(0)]));
var menu = ((((init68274) || (cljs.core.not(with_let68273.hasOwnProperty((1))))))?(with_let68273[(1)] = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.kebab], null),new cljs.core.Keyword(null,"class","class",-2030961996),"default-cell-menu",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"default-cell-menu-expanded",new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator-css","separator-css",559201360),"menu-separator"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Date",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_date_select], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Text Cell",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_text_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"File Input",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Multi Select",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"content","content",15833224),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.menu,enigma_nexus.table.skins.cell_file_input], null)], 0));
})], null)], null)], null)], null)):(with_let68273[(1)]));
var res68275 = (function (){var map__68276 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cell_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null));
var map__68276__$1 = cljs.core.__destructure_map(map__68276);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68276__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res68275;
});
enigma_nexus.table.skins.multi_select_option = (function enigma_nexus$table$skins$multi_select_option(props){
var map__68277 = props;
var map__68277__$1 = cljs.core.__destructure_map(map__68277);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68277__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68278 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68278","with-let68278",1653181021));
var temp__5808__auto___68321 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68321 == null)){
} else {
var c__59044__auto___68322 = temp__5808__auto___68321;
if((with_let68278.generation === c__59044__auto___68322.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68278.generation = c__59044__auto___68322.ratomGeneration);
}

var init68279 = (with_let68278.length === (0));
var selected_values_STAR_ = ((((init68279) || (cljs.core.not(with_let68278.hasOwnProperty((0))))))?(with_let68278[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let68278[(0)]));
var res68280 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_values_STAR_,(function (content){
if(cljs.core.contains_QMARK_(content,value)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(content,value);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(content,value);
}
}));
})], null)], null),value], null);
return res68280;
});
enigma_nexus.table.skins.single_select_option = (function enigma_nexus$table$skins$single_select_option(props){
var map__68281 = props;
var map__68281__$1 = cljs.core.__destructure_map(map__68281);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68281__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68282 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68282","with-let68282",472852594));
var temp__5808__auto___68323 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68323 == null)){
} else {
var c__59044__auto___68324 = temp__5808__auto___68323;
if((with_let68282.generation === c__59044__auto___68324.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68282.generation = c__59044__auto___68324.ratomGeneration);
}

var init68283 = (with_let68282.length === (0));
var selected_values_STAR_ = ((((init68283) || (cljs.core.not(with_let68282.hasOwnProperty((0))))))?(with_let68282[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let68282[(0)]));
var res68284 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
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
return res68284;
});
enigma_nexus.table.skins.table_in_table = (function enigma_nexus$table$skins$table_in_table(props){
var map__68285 = props;
var map__68285__$1 = cljs.core.__destructure_map(map__68285);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68285__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68285__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68285__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68285__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68285__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68285__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68286 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68286","with-let68286",1532799787));
var temp__5808__auto___68325 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68325 == null)){
} else {
var c__59044__auto___68326 = temp__5808__auto___68325;
if((with_let68286.generation === c__59044__auto___68326.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68286.generation = c__59044__auto___68326.ratomGeneration);
}

var init68287 = (with_let68286.length === (0));
var inner_table_data_STAR_ = ((((init68287) || (cljs.core.not(with_let68286.hasOwnProperty((0))))))?(with_let68286[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let68286[(0)]));
var res68288 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),inner_table_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res68288;
});
enigma_nexus.table.skins.tree_in_table = (function enigma_nexus$table$skins$tree_in_table(props){
var map__68289 = props;
var map__68289__$1 = cljs.core.__destructure_map(map__68289);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68289__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68289__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68289__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68289__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68289__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68289__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68290 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68290","with-let68290",-1466068426));
var temp__5808__auto___68327 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68327 == null)){
} else {
var c__59044__auto___68328 = temp__5808__auto___68327;
if((with_let68290.generation === c__59044__auto___68328.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68290.generation = c__59044__auto___68328.ratomGeneration);
}

var init68291 = (with_let68290.length === (0));
var tree_data_STAR_ = ((((init68291) || (cljs.core.not(with_let68290.hasOwnProperty((0))))))?(with_let68290[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let68290[(0)]));
var res68292 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),tree_data_STAR_], null)], null);
return res68292;
});
enigma_nexus.table.skins.multi_select = (function enigma_nexus$table$skins$multi_select(props){
var map__68293 = props;
var map__68293__$1 = cljs.core.__destructure_map(map__68293);
var table_data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293__$1,new cljs.core.Keyword(null,"table-data*","table-data*",1671610004));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68293__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let68294 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68294","with-let68294",-1136537315));
var temp__5808__auto___68334 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68334 == null)){
} else {
var c__59044__auto___68335 = temp__5808__auto___68334;
if((with_let68294.generation === c__59044__auto___68335.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68294.generation = c__59044__auto___68335.ratomGeneration);
}

var init68295 = (with_let68294.length === (0));
var select_data_STAR_ = ((((init68295) || (cljs.core.not(with_let68294.hasOwnProperty((0))))))?(with_let68294[(0)] = reagent.core.cursor(table_data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null))):(with_let68294[(0)]));
var res68296 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),select_data_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"multi-select"], null)], null);
return res68296;
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
