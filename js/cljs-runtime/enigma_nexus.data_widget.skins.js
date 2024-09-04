goog.provide('enigma_nexus.data_widget.skins');
enigma_nexus.data_widget.skins.cell_text_input = (function enigma_nexus$data_widget$skins$cell_text_input(props){
var map__71646 = props;
var map__71646__$1 = cljs.core.__destructure_map(map__71646);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71646__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71646__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let71647 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71647","with-let71647",-831805788));
var temp__5808__auto___71723 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71723 == null)){
} else {
var c__59104__auto___71724 = temp__5808__auto___71723;
if((with_let71647.generation === c__59104__auto___71724.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71647.generation = c__59104__auto___71724.ratomGeneration);
}

var init71648 = (with_let71647.length === (0));
var data_STAR_ = ((((init71648) || (cljs.core.not(with_let71647.hasOwnProperty((0))))))?(with_let71647[(0)] = reagent.core.cursor(root_STAR_,path)):(with_let71647[(0)]));
var indicators_STAR_ = ((((init71648) || (cljs.core.not(with_let71647.hasOwnProperty((1))))))?(with_let71647[(1)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(cljs.core.pop(path)),new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let71647[(1)]));
var res71649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?"cell-text-input side-by-side":(cljs.core.truth_(new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?"cell-text-input full-w":"cell-text-input"
)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(data_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),newtext);
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))], null)], null);
return res71649;
});
enigma_nexus.data_widget.skins.map_key = (function enigma_nexus$data_widget$skins$map_key(p__71650,props){
var map__71651 = p__71650;
var map__71651__$1 = cljs.core.__destructure_map(map__71651);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71651__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71651__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var key = cljs.core.last(path);
var indicators_STAR_ = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(cljs.core.pop(path)),new cljs.core.Keyword(null,"indicators","indicators",1312373003)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?"cell-text-input side-by-side":(cljs.core.truth_(new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?"cell-text-input full-w":"cell-text-input"
)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (e){
var newtext = e.target.value;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(root_STAR_,cljs.core.update,new cljs.core.Keyword(null,"data","data",-232669377),clojure.set.rename_keys,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([key,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(key,new cljs.core.Keyword(null,"data","data",-232669377),newtext)])], 0));
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(key)], null)], null);
});
enigma_nexus.data_widget.skins.to_row = (function enigma_nexus$data_widget$skins$to_row(p__71653){
var map__71654 = p__71653;
var map__71654__$1 = cljs.core.__destructure_map(map__71654);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71654__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71654__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let71655 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71655","with-let71655",-424876275));
var temp__5808__auto___71725 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71725 == null)){
} else {
var c__59104__auto___71726 = temp__5808__auto___71725;
if((with_let71655.generation === c__59104__auto___71726.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71655.generation = c__59104__auto___71726.ratomGeneration);
}

var init71656 = (with_let71655.length === (0));
var indicators_STAR_ = ((((init71656) || (cljs.core.not(with_let71655.hasOwnProperty((0))))))?(with_let71655[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let71655[(0)]));
var res71657 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (p1__71652_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__71652_SHARP_,new cljs.core.Keyword(null,"tree","tree",-196312028)),new cljs.core.Keyword(null,"table","table",-564943036));
}));
})], null),"1. Row"], null);
return res71657;
});
enigma_nexus.data_widget.skins.to_tree = (function enigma_nexus$data_widget$skins$to_tree(p__71659){
var map__71660 = p__71659;
var map__71660__$1 = cljs.core.__destructure_map(map__71660);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71660__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71660__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let71661 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71661","with-let71661",-281082979));
var temp__5808__auto___71727 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71727 == null)){
} else {
var c__59104__auto___71728 = temp__5808__auto___71727;
if((with_let71661.generation === c__59104__auto___71728.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71661.generation = c__59104__auto___71728.ratomGeneration);
}

var init71662 = (with_let71661.length === (0));
var indicators_STAR_ = ((((init71662) || (cljs.core.not(with_let71661.hasOwnProperty((0))))))?(with_let71661[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let71661[(0)]));
var res71663 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (p1__71658_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__71658_SHARP_,new cljs.core.Keyword(null,"table","table",-564943036)),new cljs.core.Keyword(null,"tree","tree",-196312028));
}));
})], null),"2. Tree"], null);
return res71663;
});
enigma_nexus.data_widget.skins.expand_collapse = (function enigma_nexus$data_widget$skins$expand_collapse(p__71665){
var map__71666 = p__71665;
var map__71666__$1 = cljs.core.__destructure_map(map__71666);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71666__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71666__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let71667 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71667","with-let71667",1493140184));
var temp__5808__auto___71731 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71731 == null)){
} else {
var c__59104__auto___71732 = temp__5808__auto___71731;
if((with_let71667.generation === c__59104__auto___71732.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71667.generation = c__59104__auto___71732.ratomGeneration);
}

var init71668 = (with_let71667.length === (0));
var indicators_STAR_ = ((((init71668) || (cljs.core.not(with_let71667.hasOwnProperty((0))))))?(with_let71667[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let71667[(0)]));
var res71669 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (p1__71664_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(p1__71664_SHARP_))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__71664_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__71664_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
}
}));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"skin-expand-collapse"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?"-":"+")], null);
return res71669;
});
enigma_nexus.data_widget.skins.table_header_cell = (function enigma_nexus$data_widget$skins$table_header_cell(p__71670){
var map__71671 = p__71670;
var map__71671__$1 = cljs.core.__destructure_map(map__71671);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71671__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71671__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let71672 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71672","with-let71672",-32803519));
var temp__5808__auto___71733 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71733 == null)){
} else {
var c__59104__auto___71734 = temp__5808__auto___71733;
if((with_let71672.generation === c__59104__auto___71734.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71672.generation = c__59104__auto___71734.ratomGeneration);
}

var init71673 = (with_let71672.length === (0));
var data_STAR_ = ((((init71673) || (cljs.core.not(with_let71672.hasOwnProperty((0))))))?(with_let71672[(0)] = reagent.core.cursor(root_STAR_,path)):(with_let71672[(0)]));
var res71674 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"table-header-cell"], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))], null);
return res71674;
});
enigma_nexus.data_widget.skins.nested_menu_item = (function enigma_nexus$data_widget$skins$nested_menu_item(upper_tree){
return (function (p__71675){
var map__71676 = p__71675;
var map__71676__$1 = cljs.core.__destructure_map(map__71676);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71676__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71676__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let71677 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71677","with-let71677",-969075980));
var temp__5808__auto___71735 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71735 == null)){
} else {
var c__59104__auto___71736 = temp__5808__auto___71735;
if((with_let71677.generation === c__59104__auto___71736.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71677.generation = c__59104__auto___71736.ratomGeneration);
}

var init71678 = (with_let71677.length === (0));
var data_STAR_ = ((((init71678) || (cljs.core.not(with_let71677.hasOwnProperty((0))))))?(with_let71677[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)))):(with_let71677[(0)]));
var res71679 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (ev){
var map__71680 = upper_tree;
var map__71680__$1 = cljs.core.__destructure_map(map__71680);
var upper_root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71680__$1,new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095));
var upper_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71680__$1,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874));
var action = new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_));
return (action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(upper_root_STAR_,upper_path) : action.call(null,upper_root_STAR_,upper_path));
}),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-item"], null),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))], null);
return res71679;
});
});
enigma_nexus.data_widget.skins.expand_collapse_nested_menu = (function enigma_nexus$data_widget$skins$expand_collapse_nested_menu(p__71682){
var map__71683 = p__71682;
var map__71683__$1 = cljs.core.__destructure_map(map__71683);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71683__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71683__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let71684 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71684","with-let71684",1582479807));
var temp__5808__auto___71741 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71741 == null)){
} else {
var c__59104__auto___71742 = temp__5808__auto___71741;
if((with_let71684.generation === c__59104__auto___71742.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71684.generation = c__59104__auto___71742.ratomGeneration);
}

var init71685 = (with_let71684.length === (0));
var data_STAR_ = ((((init71685) || (cljs.core.not(with_let71684.hasOwnProperty((0))))))?(with_let71684[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)))):(with_let71684[(0)]));
var indicators_STAR_ = ((((init71685) || (cljs.core.not(with_let71684.hasOwnProperty((1))))))?(with_let71684[(1)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pop(path),(1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"indicators","indicators",1312373003)], 0)))):(with_let71684[(1)]));
var res71686 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"show-hide-menu-icon",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(indicators_STAR_,(function (p1__71681_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(p1__71681_SHARP_))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__71681_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__71681_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
}
}));
})], null),cljs.core.deref(data_STAR_)], null);
return res71686;
});
enigma_nexus.data_widget.skins.compile_to_nested_menu = (function enigma_nexus$data_widget$skins$compile_to_nested_menu(menu,upper_tree){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(menu))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debug","debug",-1608172596),null,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(menu),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.skins.nested_menu_item(upper_tree)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.first(menu),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.skins.expand_collapse_nested_menu], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__71687_SHARP_){
return (enigma_nexus.data_widget.skins.compile_to_nested_menu.cljs$core$IFn$_invoke$arity$2 ? enigma_nexus.data_widget.skins.compile_to_nested_menu.cljs$core$IFn$_invoke$arity$2(p1__71687_SHARP_,upper_tree) : enigma_nexus.data_widget.skins.compile_to_nested_menu.call(null,p1__71687_SHARP_,upper_tree));
}),cljs.core.rest(menu))], null)], null),new cljs.core.Keyword(null,"component","component",1555936782),cljs.core.PersistentVector.EMPTY], null);

}
});
enigma_nexus.data_widget.skins.nested_menu_init = (function enigma_nexus$data_widget$skins$nested_menu_init(menu_tree,menu_css){
return (function (p__71688){
var map__71689 = p__71688;
var map__71689__$1 = cljs.core.__destructure_map(map__71689);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71689__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71689__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let71690 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71690","with-let71690",807380195));
var temp__5808__auto___71746 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71746 == null)){
} else {
var c__59104__auto___71747 = temp__5808__auto___71746;
if((with_let71690.generation === c__59104__auto___71747.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71690.generation = c__59104__auto___71747.ratomGeneration);
}

var init71691 = (with_let71690.length === (0));
var indicators_STAR_ = ((((init71691) || (cljs.core.not(with_let71690.hasOwnProperty((0))))))?(with_let71690[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let71690[(0)]));
var menu_root_STAR_ = ((((init71691) || (cljs.core.not(with_let71690.hasOwnProperty((1))))))?(with_let71690[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.data_widget.skins.compile_to_nested_menu(menu_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095),root_STAR_,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874),path], null)))):(with_let71690[(1)]));
var res71692 = (cljs.core.truth_((function (){var or__5043__auto__ = true;
if(or__5043__auto__){
return or__5043__auto__;
} else {
return new cljs.core.Keyword(null,"hover","hover",-341141711).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_));
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),menu_css,new cljs.core.Keyword(null,"root*","root*",964817570),menu_root_STAR_], null)], null):null);
return res71692;
});
});
enigma_nexus.data_widget.skins.nested_menu_init_right_click = (function enigma_nexus$data_widget$skins$nested_menu_init_right_click(menu_tree,menu_css){
return (function (p__71693){
var map__71694 = p__71693;
var map__71694__$1 = cljs.core.__destructure_map(map__71694);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71694__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71694__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var with_let71695 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71695","with-let71695",1859332888));
var temp__5808__auto___71751 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71751 == null)){
} else {
var c__59104__auto___71752 = temp__5808__auto___71751;
if((with_let71695.generation === c__59104__auto___71752.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71695.generation = c__59104__auto___71752.ratomGeneration);
}

var init71696 = (with_let71695.length === (0));
var indicators_STAR_ = ((((init71696) || (cljs.core.not(with_let71695.hasOwnProperty((0))))))?(with_let71695[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"indicators","indicators",1312373003)))):(with_let71695[(0)]));
var menu_root_STAR_ = ((((init71696) || (cljs.core.not(with_let71695.hasOwnProperty((1))))))?(with_let71695[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.data_widget.skins.compile_to_nested_menu(menu_tree,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095),root_STAR_,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874),path], null)))):(with_let71695[(1)]));
var res71697 = (cljs.core.truth_(new cljs.core.Keyword(null,"right-click","right-click",-1443353028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),menu_css,new cljs.core.Keyword(null,"root*","root*",964817570),menu_root_STAR_], null)], null):null);
return res71697;
});
});
enigma_nexus.data_widget.skins.select_menu_css = (function enigma_nexus$data_widget$skins$select_menu_css(root_STAR_,path,state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"multiselect"], null);
});
enigma_nexus.data_widget.skins.select_menu_header = (function enigma_nexus$data_widget$skins$select_menu_header(props){
var map__71699 = props;
var map__71699__$1 = cljs.core.__destructure_map(map__71699);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71699__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71699__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var selected_otions = (function (){var fexpr__71700 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"get-selected","get-selected",-1580447103)], null));
return (fexpr__71700.cljs$core$IFn$_invoke$arity$0 ? fexpr__71700.cljs$core$IFn$_invoke$arity$0() : fexpr__71700.call(null));
})();
var toggle = (function (e){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(root_STAR_,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(1),new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null),(function (p1__71698_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(p1__71698_SHARP_))){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__71698_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__71698_SHARP_,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
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
var map__71701 = props;
var map__71701__$1 = cljs.core.__destructure_map(map__71701);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71701__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71701__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var option = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"option","option",65132272)], 0)));
var on_select_fn = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(path,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-select-fn","on-select-fn",-498685964)], 0)));
var get_upper_tree = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"get-upper-tree","get-upper-tree",458779218)], null));
var selected_otions = (function (){var fexpr__71702 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"get-selected","get-selected",-1580447103)], null));
return (fexpr__71702.cljs$core$IFn$_invoke$arity$0 ? fexpr__71702.cljs$core$IFn$_invoke$arity$0() : fexpr__71702.call(null));
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
return (function (p__71704){
var map__71705 = p__71704;
var map__71705__$1 = cljs.core.__destructure_map(map__71705);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71705__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71705__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var get_upper_tree = (function (){
var fexpr__71706 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095),root_STAR_,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874),path], null);
return (fexpr__71706.cljs$core$IFn$_invoke$arity$0 ? fexpr__71706.cljs$core$IFn$_invoke$arity$0() : fexpr__71706.call(null));
});
var get_selected_options = (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)));
});
var on_select = (function (option){
var with_let71707 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71707","with-let71707",636274624));
var temp__5808__auto___71758 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71758 == null)){
} else {
var c__59104__auto___71759 = temp__5808__auto___71758;
if((with_let71707.generation === c__59104__auto___71759.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71707.generation = c__59104__auto___71759.ratomGeneration);
}

var init71708 = (with_let71707.length === (0));
var selected_otions_STAR_ = ((((init71708) || (cljs.core.not(with_let71707.hasOwnProperty((0))))))?(with_let71707[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)))):(with_let71707[(0)]));
var res71709 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_otions_STAR_,(function (p1__71703_SHARP_){
if(cljs.core.contains_QMARK_(p1__71703_SHARP_,option)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__71703_SHARP_,option);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,option);
}
}));
return res71709;
});
var with_let71710 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71710","with-let71710",-325778847));
var temp__5808__auto___71762 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71762 == null)){
} else {
var c__59104__auto___71763 = temp__5808__auto___71762;
if((with_let71710.generation === c__59104__auto___71763.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71710.generation = c__59104__auto___71763.ratomGeneration);
}

var init71711 = (with_let71710.length === (0));
var menu_root_STAR_ = ((((init71711) || (cljs.core.not(with_let71710.hasOwnProperty((0))))))?(with_let71710[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.data_widget.skins.compile_to_select_menu(options,on_select,get_selected_options,get_upper_tree))):(with_let71710[(0)]));
var res71712 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),enigma_nexus.data_widget.skins.select_menu_css,new cljs.core.Keyword(null,"root*","root*",964817570),menu_root_STAR_], null)], null);
return res71712;
});
});
enigma_nexus.data_widget.skins.multi_select_menu_init = (function enigma_nexus$data_widget$skins$multi_select_menu_init(options){
return (function (p__71714){
var map__71715 = p__71714;
var map__71715__$1 = cljs.core.__destructure_map(map__71715);
var root_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71715__$1,new cljs.core.Keyword(null,"root*","root*",964817570));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71715__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var get_upper_tree = (function (){
var fexpr__71716 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"upper-root*","upper-root*",-1724148095),root_STAR_,new cljs.core.Keyword(null,"upper-path","upper-path",-257233874),path], null);
return (fexpr__71716.cljs$core$IFn$_invoke$arity$0 ? fexpr__71716.cljs$core$IFn$_invoke$arity$0() : fexpr__71716.call(null));
});
var get_selected_options = (function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(root_STAR_),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)));
});
var on_select = (function (option){
var with_let71717 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71717","with-let71717",587656366));
var temp__5808__auto___71768 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71768 == null)){
} else {
var c__59104__auto___71769 = temp__5808__auto___71768;
if((with_let71717.generation === c__59104__auto___71769.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71717.generation = c__59104__auto___71769.ratomGeneration);
}

var init71718 = (with_let71717.length === (0));
var selected_otions_STAR_ = ((((init71718) || (cljs.core.not(with_let71717.hasOwnProperty((0))))))?(with_let71717[(0)] = reagent.core.cursor(root_STAR_,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"data","data",-232669377)))):(with_let71717[(0)]));
var res71719 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(selected_otions_STAR_,(function (p1__71713_SHARP_){
if(cljs.core.contains_QMARK_(p1__71713_SHARP_,option)){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(p1__71713_SHARP_,option);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__71713_SHARP_,option);
}
}));
return res71719;
});
var with_let71720 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let71720","with-let71720",-1072487773));
var temp__5808__auto___71770 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___71770 == null)){
} else {
var c__59104__auto___71771 = temp__5808__auto___71770;
if((with_let71720.generation === c__59104__auto___71771.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let71720.generation = c__59104__auto___71771.ratomGeneration);
}

var init71721 = (with_let71720.length === (0));
var menu_root_STAR_ = ((((init71721) || (cljs.core.not(with_let71720.hasOwnProperty((0))))))?(with_let71720[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.data_widget.skins.compile_to_select_menu(options,on_select,get_selected_options,get_upper_tree))):(with_let71720[(0)]));
var res71722 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.data_widget.data_widget.data_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),enigma_nexus.data_widget.skins.select_menu_css,new cljs.core.Keyword(null,"root*","root*",964817570),menu_root_STAR_], null)], null);
return res71722;
});
});

//# sourceMappingURL=enigma_nexus.data_widget.skins.js.map
