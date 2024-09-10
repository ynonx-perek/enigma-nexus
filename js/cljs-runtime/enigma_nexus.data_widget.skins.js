goog.provide('enigma_nexus.data_widget.skins');
enigma_nexus.data_widget.skins.cell_text_input = (function enigma_nexus$data_widget$skins$cell_text_input(props){
var map__74011 = props;
var map__74011__$1 = cljs.core.__destructure_map(map__74011);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74011__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74011__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var ui_props_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74011__$1,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747));
var with_let74012 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74012","with-let74012",-2144586206));
var temp__5808__auto___74088 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74088 == null)){
} else {
var c__59154__auto___74089 = temp__5808__auto___74088;
if((with_let74012.generation === c__59154__auto___74089.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74012.generation = c__59154__auto___74089.ratomGeneration);
}

var init74013 = (with_let74012.length === (0));
var data_STAR_ = ((((init74013) || (cljs.core.not(with_let74012.hasOwnProperty((0))))))?(with_let74012[(0)] = reagent.core.cursor(root_STAR_,path)):(with_let74012[(0)]));
var res74014 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"props-fn-result","props-fn-result",2103286966),cljs.core.str.cljs$core$IFn$_invoke$arity$1((ui_props_fn.cljs$core$IFn$_invoke$arity$2 ? ui_props_fn.cljs$core$IFn$_invoke$arity$2(root_STAR_,path) : ui_props_fn.call(null,root_STAR_,path))),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),newtext);
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))], null)], null);
return res74014;
});
enigma_nexus.data_widget.skins.map_key = (function enigma_nexus$data_widget$skins$map_key(p__74015,props){
var map__74016 = p__74015;
var map__74016__$1 = cljs.core.__destructure_map(map__74016);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74016__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74016__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var key = cljs.core.last(path);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),"cell-text-input",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(root_STAR_,cljs.core.update_in,cljs.core.pop(path),clojure.set.rename_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(key,new cljs.core.Keyword(null,"data","data",-232669377),newtext)])], 0));
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(key)], null)], null);
});
enigma_nexus.data_widget.skins.to_row = (function enigma_nexus$data_widget$skins$to_row(p__74018){
var map__74019 = p__74018;
var map__74019__$1 = cljs.core.__destructure_map(map__74019);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74019__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74019__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let74020 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74020","with-let74020",-1974431474));
var temp__5808__auto___74090 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74090 == null)){
} else {
var c__59154__auto___74091 = temp__5808__auto___74090;
if((with_let74020.generation === c__59154__auto___74091.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74020.generation = c__59154__auto___74091.ratomGeneration);
}

var init74021 = (with_let74020.length === (0));
var indicators_STAR_ = ((((init74021) || (cljs.core.not(with_let74020.hasOwnProperty((0))))))?(with_let74020[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let74020[(0)]));
var res74022 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (p1__74017_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__74017_SHARP_,new cljs.core.Keyword(null,"tree","tree",-196312028)),new cljs.core.Keyword(null,"table","table",-564943036));
}));
})], null),"1. Table"], null);
return res74022;
});
enigma_nexus.data_widget.skins.to_tree = (function enigma_nexus$data_widget$skins$to_tree(p__74024){
var map__74025 = p__74024;
var map__74025__$1 = cljs.core.__destructure_map(map__74025);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74025__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74025__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let74026 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74026","with-let74026",1888040985));
var temp__5808__auto___74094 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74094 == null)){
} else {
var c__59154__auto___74095 = temp__5808__auto___74094;
if((with_let74026.generation === c__59154__auto___74095.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74026.generation = c__59154__auto___74095.ratomGeneration);
}

var init74027 = (with_let74026.length === (0));
var indicators_STAR_ = ((((init74027) || (cljs.core.not(with_let74026.hasOwnProperty((0))))))?(with_let74026[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let74026[(0)]));
var res74028 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (p1__74023_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__74023_SHARP_,new cljs.core.Keyword(null,"table","table",-564943036)),new cljs.core.Keyword(null,"tree","tree",-196312028));
}));
})], null),"2. Tree"], null);
return res74028;
});
enigma_nexus.data_widget.skins.expand_collapse = (function enigma_nexus$data_widget$skins$expand_collapse(p__74030){
var map__74031 = p__74030;
var map__74031__$1 = cljs.core.__destructure_map(map__74031);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74031__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74031__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let74032 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74032","with-let74032",-516783369));
var temp__5808__auto___74097 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74097 == null)){
} else {
var c__59154__auto___74101 = temp__5808__auto___74097;
if((with_let74032.generation === c__59154__auto___74101.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74032.generation = c__59154__auto___74101.ratomGeneration);
}

var init74033 = (with_let74032.length === (0));
var indicators_STAR_ = ((((init74033) || (cljs.core.not(with_let74032.hasOwnProperty((0))))))?(with_let74032[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let74032[(0)]));
var res74034 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (p1__74029_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(p1__74029_SHARP_))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__74029_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__74029_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
}
}));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"skin-expand-collapse"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?"-":"+")], null);
return res74034;
});
enigma_nexus.data_widget.skins.table_header_cell = (function enigma_nexus$data_widget$skins$table_header_cell(p__74035){
var map__74036 = p__74035;
var map__74036__$1 = cljs.core.__destructure_map(map__74036);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74036__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74036__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let74037 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74037","with-let74037",-1420525760));
var temp__5808__auto___74102 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74102 == null)){
} else {
var c__59154__auto___74103 = temp__5808__auto___74102;
if((with_let74037.generation === c__59154__auto___74103.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74037.generation = c__59154__auto___74103.ratomGeneration);
}

var init74038 = (with_let74037.length === (0));
var data_STAR_ = ((((init74038) || (cljs.core.not(with_let74037.hasOwnProperty((0))))))?(with_let74037[(0)] = reagent.core.cursor(root_STAR_,path)):(with_let74037[(0)]));
var res74039 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-header-cell"], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))], null);
return res74039;
});
enigma_nexus.data_widget.skins.nested_menu_item = (function enigma_nexus$data_widget$skins$nested_menu_item(upper_tree){
return (function (p__74040){
var map__74041 = p__74040;
var map__74041__$1 = cljs.core.__destructure_map(map__74041);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74041__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74041__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let74042 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74042","with-let74042",-919833997));
var temp__5808__auto___74107 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74107 == null)){
} else {
var c__59154__auto___74108 = temp__5808__auto___74107;
if((with_let74042.generation === c__59154__auto___74108.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74042.generation = c__59154__auto___74108.ratomGeneration);
}

var init74043 = (with_let74042.length === (0));
var data_STAR_ = ((((init74043) || (cljs.core.not(with_let74042.hasOwnProperty((0))))))?(with_let74042[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)))):(with_let74042[(0)]));
var res74044 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (ev){
var map__74045 = upper_tree;
var map__74045__$1 = cljs.core.__destructure_map(map__74045);
var upper_root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74045__$1,new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095));
var upper_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74045__$1,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874));
var action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_));
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(upper_root_STAR_,upper_path) : action.call(null,upper_root_STAR_,upper_path));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-item"], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))], null);
return res74044;
});
});
enigma_nexus.data_widget.skins.expand_collapse_nested_menu = (function enigma_nexus$data_widget$skins$expand_collapse_nested_menu(p__74047){
var map__74048 = p__74047;
var map__74048__$1 = cljs.core.__destructure_map(map__74048);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74048__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74048__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let74049 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74049","with-let74049",-1916965221));
var temp__5808__auto___74112 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74112 == null)){
} else {
var c__59154__auto___74113 = temp__5808__auto___74112;
if((with_let74049.generation === c__59154__auto___74113.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74049.generation = c__59154__auto___74113.ratomGeneration);
}

var init74050 = (with_let74049.length === (0));
var data_STAR_ = ((((init74050) || (cljs.core.not(with_let74049.hasOwnProperty((0))))))?(with_let74049[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)))):(with_let74049[(0)]));
var indicators_STAR_ = ((((init74050) || (cljs.core.not(with_let74049.hasOwnProperty((1))))))?(with_let74049[(1)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(path),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"indicators","indicators",1312373003)], 0)))):(with_let74049[(1)]));
var res74051 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"show-hide-menu-icon",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (p1__74046_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(p1__74046_SHARP_))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__74046_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__74046_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
}
}));
})], null),cljs.core.deref(data_STAR_)], null);
return res74051;
});
enigma_nexus.data_widget.skins.compile_to_nested_menu = (function enigma_nexus$data_widget$skins$compile_to_nested_menu(menu,upper_tree){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(menu))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),null,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(menu),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.skins.nested_menu_item(upper_tree)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(menu),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.skins.expand_collapse_nested_menu], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__74052_SHARP_){
return (enigma_nexus.data_widget.skins.compile_to_nested_menu.cljs$core$IFn$_invoke$arity$2 ? enigma_nexus.data_widget.skins.compile_to_nested_menu.cljs$core$IFn$_invoke$arity$2(p1__74052_SHARP_,upper_tree) : enigma_nexus.data_widget.skins.compile_to_nested_menu.call(null,p1__74052_SHARP_,upper_tree));
}),cljs.core.rest(menu))], null)], null),new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.PersistentVector.EMPTY], null);

}
});
enigma_nexus.data_widget.skins.nested_menu_init = (function enigma_nexus$data_widget$skins$nested_menu_init(menu_tree,menu_css){
return (function (p__74053){
var map__74054 = p__74053;
var map__74054__$1 = cljs.core.__destructure_map(map__74054);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74054__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74054__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let74055 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74055","with-let74055",766279543));
var temp__5808__auto___74119 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74119 == null)){
} else {
var c__59154__auto___74120 = temp__5808__auto___74119;
if((with_let74055.generation === c__59154__auto___74120.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74055.generation = c__59154__auto___74120.ratomGeneration);
}

var init74056 = (with_let74055.length === (0));
var indicators_STAR_ = ((((init74056) || (cljs.core.not(with_let74055.hasOwnProperty((0))))))?(with_let74055[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let74055[(0)]));
var menu_root_STAR_ = ((((init74056) || (cljs.core.not(with_let74055.hasOwnProperty((1))))))?(with_let74055[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.data_widget.skins.compile_to_nested_menu(menu_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095),root_STAR_,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874),path], null)))):(with_let74055[(1)]));
var res74057 = (cljs.core.truth_((function (){var or__5043__auto__ = true;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_));
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),menu_css,new cljs.core.Keyword(null,"root*","root*",964817570),menu_root_STAR_], null)], null):null);
return res74057;
});
});
enigma_nexus.data_widget.skins.nested_menu_init_right_click = (function enigma_nexus$data_widget$skins$nested_menu_init_right_click(menu_tree,menu_css){
return (function (p__74058){
var map__74059 = p__74058;
var map__74059__$1 = cljs.core.__destructure_map(map__74059);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74059__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74059__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let74060 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74060","with-let74060",469112651));
var temp__5808__auto___74121 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74121 == null)){
} else {
var c__59154__auto___74122 = temp__5808__auto___74121;
if((with_let74060.generation === c__59154__auto___74122.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74060.generation = c__59154__auto___74122.ratomGeneration);
}

var init74061 = (with_let74060.length === (0));
var indicators_STAR_ = ((((init74061) || (cljs.core.not(with_let74060.hasOwnProperty((0))))))?(with_let74060[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let74060[(0)]));
var menu_root_STAR_ = ((((init74061) || (cljs.core.not(with_let74060.hasOwnProperty((1))))))?(with_let74060[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.data_widget.skins.compile_to_nested_menu(menu_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095),root_STAR_,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874),path], null)))):(with_let74060[(1)]));
var res74062 = (cljs.core.truth_(new cljs.core.Keyword(null,"right-click","right-click",-1443353028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),menu_css,new cljs.core.Keyword(null,"root*","root*",964817570),menu_root_STAR_], null)], null):null);
return res74062;
});
});
enigma_nexus.data_widget.skins.select_menu_css = (function enigma_nexus$data_widget$skins$select_menu_css(root_STAR_,path,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"multiselect"], null);
});
enigma_nexus.data_widget.skins.select_menu_header = (function enigma_nexus$data_widget$skins$select_menu_header(props){
var map__74064 = props;
var map__74064__$1 = cljs.core.__destructure_map(map__74064);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74064__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74064__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var selected_otions = (function (){var fexpr__74065 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"get-selected","get-selected",-1580447103)], null));
return (fexpr__74065.cljs$core$IFn$_invoke$arity$0 ? fexpr__74065.cljs$core$IFn$_invoke$arity$0() : fexpr__74065.call(null));
})();
var toggle = (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(root_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(1),new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null),(function (p1__74063_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(p1__74063_SHARP_))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__74063_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__74063_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
}
}));
});
if(cljs.core.empty_QMARK_(selected_otions)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle,new cljs.core.Keyword(null,"class","class",-2030961996),"select-header empty"], null),"Select ..."], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),toggle,new cljs.core.Keyword(null,"class","class",-2030961996),"select-header"], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (selected_item){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),selected_item], null),selected_item], null);
}),selected_otions)], null);
}
});
enigma_nexus.data_widget.skins.select_menu_option = (function enigma_nexus$data_widget$skins$select_menu_option(props){
var map__74066 = props;
var map__74066__$1 = cljs.core.__destructure_map(map__74066);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74066__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74066__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var option = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"option","option",65132272)], 0)));
var on_select_fn = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-select-fn","on-select-fn",-498685964)], 0)));
var get_upper_tree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"get-upper-tree","get-upper-tree",458779218)], null));
var selected_otions = (function (){var fexpr__74067 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"get-selected","get-selected",-1580447103)], null));
return (fexpr__74067.cljs$core$IFn$_invoke$arity$0 ? fexpr__74067.cljs$core$IFn$_invoke$arity$0() : fexpr__74067.call(null));
})();
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"select-option"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.contains_QMARK_(selected_otions,option),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (){
return (on_select_fn.cljs$core$IFn$_invoke$arity$1 ? on_select_fn.cljs$core$IFn$_invoke$arity$1(option) : on_select_fn.call(null,option));
})], null)], null),option], null);
});
enigma_nexus.data_widget.skins.compile_to_select_menu = (function enigma_nexus$data_widget$skins$compile_to_select_menu(options,on_select,get_selected_options,get_upper_tree){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-selected","get-selected",-1580447103),get_selected_options,new cljs.core.Keyword(null,"get-upper-tree","get-upper-tree",458779218),get_upper_tree], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.skins.select_menu_header], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"option","option",65132272),option,new cljs.core.Keyword(null,"on-select-fn","on-select-fn",-498685964),on_select], null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.skins.select_menu_option], null)], null);
}),options),new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.PersistentVector.EMPTY], null)], null)], null)], null)], null);
});
enigma_nexus.data_widget.skins.single_select_menu_init = (function enigma_nexus$data_widget$skins$single_select_menu_init(options){
return (function (p__74069){
var map__74070 = p__74069;
var map__74070__$1 = cljs.core.__destructure_map(map__74070);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74070__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74070__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var get_upper_tree = (function (){
var fexpr__74071 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095),root_STAR_,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874),path], null);
return (fexpr__74071.cljs$core$IFn$_invoke$arity$0 ? fexpr__74071.cljs$core$IFn$_invoke$arity$0() : fexpr__74071.call(null));
});
var get_selected_options = (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)));
});
var on_select = (function (option){
var with_let74072 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74072","with-let74072",-2127384782));
var temp__5808__auto___74128 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74128 == null)){
} else {
var c__59154__auto___74129 = temp__5808__auto___74128;
if((with_let74072.generation === c__59154__auto___74129.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74072.generation = c__59154__auto___74129.ratomGeneration);
}

var init74073 = (with_let74072.length === (0));
var selected_otions_STAR_ = ((((init74073) || (cljs.core.not(with_let74072.hasOwnProperty((0))))))?(with_let74072[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)))):(with_let74072[(0)]));
var res74074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_otions_STAR_,(function (p1__74068_SHARP_){
if(cljs.core.contains_QMARK_(p1__74068_SHARP_,option)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__74068_SHARP_,option);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,option);
}
}));
return res74074;
});
var with_let74075 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74075","with-let74075",-1011959669));
var temp__5808__auto___74130 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74130 == null)){
} else {
var c__59154__auto___74131 = temp__5808__auto___74130;
if((with_let74075.generation === c__59154__auto___74131.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74075.generation = c__59154__auto___74131.ratomGeneration);
}

var init74076 = (with_let74075.length === (0));
var menu_root_STAR_ = ((((init74076) || (cljs.core.not(with_let74075.hasOwnProperty((0))))))?(with_let74075[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.data_widget.skins.compile_to_select_menu(options,on_select,get_selected_options,get_upper_tree))):(with_let74075[(0)]));
var res74077 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),enigma_nexus.data_widget.skins.select_menu_css,new cljs.core.Keyword(null,"root*","root*",964817570),menu_root_STAR_], null)], null);
return res74077;
});
});
enigma_nexus.data_widget.skins.multi_select_menu_init = (function enigma_nexus$data_widget$skins$multi_select_menu_init(options){
return (function (p__74079){
var map__74080 = p__74079;
var map__74080__$1 = cljs.core.__destructure_map(map__74080);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74080__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74080__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var get_upper_tree = (function (){
var fexpr__74081 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095),root_STAR_,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874),path], null);
return (fexpr__74081.cljs$core$IFn$_invoke$arity$0 ? fexpr__74081.cljs$core$IFn$_invoke$arity$0() : fexpr__74081.call(null));
});
var get_selected_options = (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)));
});
var on_select = (function (option){
var with_let74082 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74082","with-let74082",1304686365));
var temp__5808__auto___74133 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74133 == null)){
} else {
var c__59154__auto___74134 = temp__5808__auto___74133;
if((with_let74082.generation === c__59154__auto___74134.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74082.generation = c__59154__auto___74134.ratomGeneration);
}

var init74083 = (with_let74082.length === (0));
var selected_otions_STAR_ = ((((init74083) || (cljs.core.not(with_let74082.hasOwnProperty((0))))))?(with_let74082[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)))):(with_let74082[(0)]));
var res74084 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_otions_STAR_,(function (p1__74078_SHARP_){
if(cljs.core.contains_QMARK_(p1__74078_SHARP_,option)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__74078_SHARP_,option);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__74078_SHARP_,option);
}
}));
return res74084;
});
var with_let74085 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74085","with-let74085",-61305469));
var temp__5808__auto___74135 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74135 == null)){
} else {
var c__59154__auto___74136 = temp__5808__auto___74135;
if((with_let74085.generation === c__59154__auto___74136.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74085.generation = c__59154__auto___74136.ratomGeneration);
}

var init74086 = (with_let74085.length === (0));
var menu_root_STAR_ = ((((init74086) || (cljs.core.not(with_let74085.hasOwnProperty((0))))))?(with_let74085[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.data_widget.skins.compile_to_select_menu(options,on_select,get_selected_options,get_upper_tree))):(with_let74085[(0)]));
var res74087 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),enigma_nexus.data_widget.skins.select_menu_css,new cljs.core.Keyword(null,"root*","root*",964817570),menu_root_STAR_], null)], null);
return res74087;
});
});

//# sourceMappingURL=enigma_nexus.data_widget.skins.js.map
