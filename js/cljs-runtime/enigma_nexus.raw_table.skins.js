goog.provide('enigma_nexus.raw_table.skins');
enigma_nexus.raw_table.skins.multi_select_header = (function enigma_nexus$raw_table$skins$multi_select_header(props){
var map__70163 = props;
var map__70163__$1 = cljs.core.__destructure_map(map__70163);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70163__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70163__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70163__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70163__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70163__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70163__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
if(cljs.core.empty_QMARK_(value)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header empty"], null),"Select ..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-header"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (selected_item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),selected_item], null);
}),value)], null);
}
});
enigma_nexus.raw_table.skins.cell_date_select = (function enigma_nexus$raw_table$skins$cell_date_select(props){
var map__70171 = props;
var map__70171__$1 = cljs.core.__destructure_map(map__70171);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.raw_table.skins.cell_text_input = (function enigma_nexus$raw_table$skins$cell_text_input(props){
var map__70178 = props;
var map__70178__$1 = cljs.core.__destructure_map(map__70178);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.raw_table.skins.cell_file_input = (function enigma_nexus$raw_table$skins$cell_file_input(props){
var map__70201 = props;
var map__70201__$1 = cljs.core.__destructure_map(map__70201);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70201__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70201__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70201__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70201__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70201__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70201__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return enigma_nexus.table.state.change_selection_at(data_STAR_,row_index,column_index,newtext,column_count);
}),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
enigma_nexus.raw_table.skins.text_cell = (function enigma_nexus$raw_table$skins$text_cell(props){
var map__70207 = props;
var map__70207__$1 = cljs.core.__destructure_map(map__70207);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70207__$1,new cljs.core.Keyword(null,"value","value",305978217));
return value;
});
enigma_nexus.raw_table.skins.danger = (function enigma_nexus$raw_table$skins$danger(props){
var map__70214 = props;
var map__70214__$1 = cljs.core.__destructure_map(map__70214);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70214__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70214__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70214__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70214__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70214__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70214__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70220 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70220","with-let70220",1710726598));
var temp__5808__auto___70531 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70531 == null)){
} else {
var c__67734__auto___70532 = temp__5808__auto___70531;
if((with_let70220.generation === c__67734__auto___70532.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70220.generation = c__67734__auto___70532.ratomGeneration);
}

var init70221 = (with_let70220.length === (0));
var indicators_STAR_ = ((((init70221) || (cljs.core.not(with_let70220.hasOwnProperty((0))))))?(with_let70220[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let70220[(0)]));
var res70222 = (cljs.core.truth_(new cljs.core.Keyword(null,"danger","danger",-624338030).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"danger-row"], null)], null):(cljs.core.truth_(new cljs.core.Keyword(null,"column-danger","column-danger",37828479).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"column-danger"], null)], null):null));
return res70222;
});
enigma_nexus.raw_table.skins.expand_collapse = (function enigma_nexus$raw_table$skins$expand_collapse(props){
var map__70232 = props;
var map__70232__$1 = cljs.core.__destructure_map(map__70232);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70232__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var with_let70233 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70233","with-let70233",1614885150));
var temp__5808__auto___70557 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70557 == null)){
} else {
var c__67734__auto___70559 = temp__5808__auto___70557;
if((with_let70233.generation === c__67734__auto___70559.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70233.generation = c__67734__auto___70559.ratomGeneration);
}

var init70234 = (with_let70233.length === (0));
var expanded_STAR_ = ((((init70234) || (cljs.core.not(with_let70233.hasOwnProperty((0))))))?(with_let70233[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null))):(with_let70233[(0)]));
var res70235 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"expand-collapse",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_STAR_,cljs.core.update,new cljs.core.Keyword(null,"expanded","expanded",-3020742),cljs.core.not);
})], null),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_down], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.arrow_right], null))], null);
return res70235;
});
enigma_nexus.raw_table.skins.column_menu = (function enigma_nexus$raw_table$skins$column_menu(props){
var map__70250 = props;
var map__70250__$1 = cljs.core.__destructure_map(map__70250);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70250__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70250__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70250__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70250__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70250__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70250__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70253 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70253","with-let70253",-1218581395));
var temp__5808__auto___70568 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70568 == null)){
} else {
var c__67734__auto___70570 = temp__5808__auto___70568;
if((with_let70253.generation === c__67734__auto___70570.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70253.generation = c__67734__auto___70570.ratomGeneration);
}

var init70254 = (with_let70253.length === (0));
var indicators_STAR_ = ((((init70254) || (cljs.core.not(with_let70253.hasOwnProperty((0))))))?(with_let70253[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let70253[(0)]));
var menu = ((((init70254) || (cljs.core.not(with_let70253.hasOwnProperty((1))))))?(with_let70253[(1)] = enigma_nexus.table.state.create_column_menu(data_STAR_,row_index,column_index)):(with_let70253[(1)]));
var res70255 = (function (){var map__70261 = cljs.core.deref(indicators_STAR_);
var map__70261__$1 = cljs.core.__destructure_map(map__70261);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70261__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res70255;
});
enigma_nexus.raw_table.skins.row_menu = (function enigma_nexus$raw_table$skins$row_menu(props){
var map__70265 = props;
var map__70265__$1 = cljs.core.__destructure_map(map__70265);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70265__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70265__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70265__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70265__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70265__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70265__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70272 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70272","with-let70272",1341226766));
var temp__5808__auto___70580 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70580 == null)){
} else {
var c__67734__auto___70581 = temp__5808__auto___70580;
if((with_let70272.generation === c__67734__auto___70581.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70272.generation = c__67734__auto___70581.ratomGeneration);
}

var init70273 = (with_let70272.length === (0));
var indicators_STAR_ = ((((init70273) || (cljs.core.not(with_let70272.hasOwnProperty((0))))))?(with_let70272[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let70272[(0)]));
var menu = ((((init70273) || (cljs.core.not(with_let70272.hasOwnProperty((1))))))?(with_let70272[(1)] = enigma_nexus.table.state.create_row_menu(data_STAR_,row_index,column_index)):(with_let70272[(1)]));
var res70274 = (function (){var map__70297 = cljs.core.deref(indicators_STAR_);
var map__70297__$1 = cljs.core.__destructure_map(map__70297);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70297__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res70274;
});
enigma_nexus.raw_table.skins.pin = (function enigma_nexus$raw_table$skins$pin(props){
var map__70318 = props;
var map__70318__$1 = cljs.core.__destructure_map(map__70318);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70318__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70318__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70318__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70318__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70318__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70318__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70321 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70321","with-let70321",957036194));
var temp__5808__auto___70585 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70585 == null)){
} else {
var c__67734__auto___70586 = temp__5808__auto___70585;
if((with_let70321.generation === c__67734__auto___70586.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70321.generation = c__67734__auto___70586.ratomGeneration);
}

var init70322 = (with_let70321.length === (0));
var indicators_STAR_ = ((((init70322) || (cljs.core.not(with_let70321.hasOwnProperty((0))))))?(with_let70321[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let70321[(0)]));
var res70323 = (function (){var map__70332 = cljs.core.deref(indicators_STAR_);
var map__70332__$1 = cljs.core.__destructure_map(map__70332);
var pinned = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70332__$1,new cljs.core.Keyword(null,"pinned","pinned",-1216085339));
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70332__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
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
return res70323;
});
enigma_nexus.raw_table.skins.menu = (function enigma_nexus$raw_table$skins$menu(props){
var map__70357 = props;
var map__70357__$1 = cljs.core.__destructure_map(map__70357);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70357__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70357__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70357__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var with_let70359 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70359","with-let70359",-2010235460));
var temp__5808__auto___70592 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70592 == null)){
} else {
var c__67734__auto___70593 = temp__5808__auto___70592;
if((with_let70359.generation === c__67734__auto___70593.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70359.generation = c__67734__auto___70593.ratomGeneration);
}

var init70360 = (with_let70359.length === (0));
var cell_STAR_ = ((((init70360) || (cljs.core.not(with_let70359.hasOwnProperty((0))))))?(with_let70359[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index], null))):(with_let70359[(0)]));
var menu = ((((init70360) || (cljs.core.not(with_let70359.hasOwnProperty((1))))))?(with_let70359[(1)] = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.kebab], null),new cljs.core.Keyword(null,"class","class",-2030961996),"default-cell-menu",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"default-cell-menu-expanded",new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator-css","separator-css",559201360),"menu-separator"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Date",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.menu,enigma_nexus.raw_table.skins.cell_date_select], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Text Cell",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.menu,enigma_nexus.raw_table.skins.cell_text_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"File Input",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.menu,enigma_nexus.raw_table.skins.cell_file_input], null)], 0));
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Multi Select",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(cell_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.menu,enigma_nexus.raw_table.skins.cell_file_input], null)], 0));
})], null)], null)], null)], null)):(with_let70359[(1)]));
var res70361 = (function (){var map__70393 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cell_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null));
var map__70393__$1 = cljs.core.__destructure_map(map__70393);
var hovered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70393__$1,new cljs.core.Keyword(null,"hovered","hovered",399068143));
if(cljs.core.truth_(hovered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,menu], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null);
}
})();
return res70361;
});
enigma_nexus.raw_table.skins.multi_select_option = (function enigma_nexus$raw_table$skins$multi_select_option(props){
var map__70397 = props;
var map__70397__$1 = cljs.core.__destructure_map(map__70397);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70397__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70397__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70397__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70397__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70397__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70397__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70398 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70398","with-let70398",650318280));
var temp__5808__auto___70653 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70653 == null)){
} else {
var c__67734__auto___70654 = temp__5808__auto___70653;
if((with_let70398.generation === c__67734__auto___70654.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70398.generation = c__67734__auto___70654.ratomGeneration);
}

var init70399 = (with_let70398.length === (0));
var selected_values_STAR_ = ((((init70399) || (cljs.core.not(with_let70398.hasOwnProperty((0))))))?(with_let70398[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70398[(0)]));
var res70400 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_values_STAR_,(function (content){
if(cljs.core.contains_QMARK_(content,value)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(content,value);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(content,value);
}
}));
})], null)], null),value], null);
return res70400;
});
enigma_nexus.raw_table.skins.single_select_option = (function enigma_nexus$raw_table$skins$single_select_option(props){
var map__70423 = props;
var map__70423__$1 = cljs.core.__destructure_map(map__70423);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70423__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70423__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70423__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70423__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70423__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70423__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70435 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70435","with-let70435",-2136595792));
var temp__5808__auto___70661 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70661 == null)){
} else {
var c__67734__auto___70662 = temp__5808__auto___70661;
if((with_let70435.generation === c__67734__auto___70662.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70435.generation = c__67734__auto___70662.ratomGeneration);
}

var init70436 = (with_let70435.length === (0));
var selected_values_STAR_ = ((((init70436) || (cljs.core.not(with_let70435.hasOwnProperty((0))))))?(with_let70435[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70435[(0)]));
var res70437 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(cljs.core.deref(selected_values_STAR_),value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
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
return res70437;
});
enigma_nexus.raw_table.skins.table_in_table = (function enigma_nexus$raw_table$skins$table_in_table(props){
var map__70448 = props;
var map__70448__$1 = cljs.core.__destructure_map(map__70448);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70448__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70448__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70448__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70448__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70448__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70448__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70450 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70450","with-let70450",-1336062590));
var temp__5808__auto___70667 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70667 == null)){
} else {
var c__67734__auto___70668 = temp__5808__auto___70667;
if((with_let70450.generation === c__67734__auto___70668.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70450.generation = c__67734__auto___70668.ratomGeneration);
}

var init70451 = (with_let70450.length === (0));
var data_STAR___$1 = ((((init70451) || (cljs.core.not(with_let70450.hasOwnProperty((0))))))?(with_let70450[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70450[(0)]));
var res70452 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR___$1,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null);
return res70452;
});
enigma_nexus.raw_table.skins.tree_in_table_ro = (function enigma_nexus$raw_table$skins$tree_in_table_ro(props){
var map__70458 = props;
var map__70458__$1 = cljs.core.__destructure_map(map__70458);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70458__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70458__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70458__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70458__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70458__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70458__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70461 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70461","with-let70461",957245376));
var temp__5808__auto___70672 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70672 == null)){
} else {
var c__67734__auto___70673 = temp__5808__auto___70672;
if((with_let70461.generation === c__67734__auto___70673.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70461.generation = c__67734__auto___70673.ratomGeneration);
}

var init70462 = (with_let70461.length === (0));
var data_STAR___$1 = ((((init70462) || (cljs.core.not(with_let70461.hasOwnProperty((0))))))?(with_let70461[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70461[(0)]));
var res70463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR___$1], null)], null);
return res70463;
});
enigma_nexus.raw_table.skins.tree_in_table_rw = (function enigma_nexus$raw_table$skins$tree_in_table_rw(props){
var map__70471 = props;
var map__70471__$1 = cljs.core.__destructure_map(map__70471);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70471__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70471__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70471__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70471__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70471__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70471__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70472 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70472","with-let70472",238796005));
var temp__5808__auto___70676 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70676 == null)){
} else {
var c__67734__auto___70677 = temp__5808__auto___70676;
if((with_let70472.generation === c__67734__auto___70677.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70472.generation = c__67734__auto___70677.ratomGeneration);
}

var init70473 = (with_let70472.length === (0));
var data_STAR___$1 = ((((init70473) || (cljs.core.not(with_let70472.hasOwnProperty((0))))))?(with_let70472[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70472[(0)]));
var res70474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),data_STAR___$1], null)], null);
return res70474;
});
enigma_nexus.raw_table.skins.multi_select = (function enigma_nexus$raw_table$skins$multi_select(props){
var map__70482 = props;
var map__70482__$1 = cljs.core.__destructure_map(map__70482);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70482__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70482__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70482__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70482__$1,new cljs.core.Keyword(null,"value","value",305978217));
var row_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70482__$1,new cljs.core.Keyword(null,"row-count","row-count",1060167988));
var column_count = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70482__$1,new cljs.core.Keyword(null,"column-count","column-count",1235131236));
var with_let70488 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let70488","with-let70488",245296347));
var temp__5808__auto___70682 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70682 == null)){
} else {
var c__67734__auto___70683 = temp__5808__auto___70682;
if((with_let70488.generation === c__67734__auto___70683.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let70488.generation = c__67734__auto___70683.ratomGeneration);
}

var init70489 = (with_let70488.length === (0));
var data_STAR___$1 = ((((init70489) || (cljs.core.not(with_let70488.hasOwnProperty((0))))))?(with_let70488[(0)] = reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),row_index,new cljs.core.Keyword(null,"data","data",-232669377),column_index,new cljs.core.Keyword(null,"data","data",-232669377)], null))):(with_let70488[(0)]));
var res70490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.table.table,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR___$1,new cljs.core.Keyword(null,"class","class",-2030961996),"multi-select"], null)], null);
return res70490;
});

//# sourceMappingURL=enigma_nexus.raw_table.skins.js.map
