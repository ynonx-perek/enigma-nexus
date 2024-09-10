goog.provide('enigma_nexus.core');
enigma_nexus.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
enigma_nexus.core.path_for = (function enigma_nexus$core$path_for(var_args){
var args__5772__auto__ = [];
var len__5766__auto___74146 = arguments.length;
var i__5767__auto___74147 = (0);
while(true){
if((i__5767__auto___74147 < len__5766__auto___74146)){
args__5772__auto__.push((arguments[i__5767__auto___74147]));

var G__74148 = (i__5767__auto___74147 + (1));
i__5767__auto___74147 = G__74148;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return enigma_nexus.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(enigma_nexus.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__74096){
var vec__74098 = p__74096;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74098,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(enigma_nexus.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(enigma_nexus.core.router,route));
}
}));

(enigma_nexus.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(enigma_nexus.core.path_for.cljs$lang$applyTo = (function (seq74092){
var G__74093 = cljs.core.first(seq74092);
var seq74092__$1 = cljs.core.next(seq74092);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74093,seq74092__$1);
}));

enigma_nexus.core.demo_class_function = (function enigma_nexus$core$demo_class_function(root_STAR_,path,state){
var with_let74104 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74104","with-let74104",-35692801));
var temp__5808__auto___74149 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74149 == null)){
} else {
var c__59154__auto___74150 = temp__5808__auto___74149;
if((with_let74104.generation === c__59154__auto___74150.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74104.generation = c__59154__auto___74150.ratomGeneration);
}

var init74105 = (with_let74104.length === (0));
var data_STAR_ = ((((init74105) || (cljs.core.not(with_let74104.hasOwnProperty((0))))))?(with_let74104[(0)] = reagent.core.cursor(root_STAR_,path)):(with_let74104[(0)]));
var res74106 = (function (){var last_in_state = cljs.core.peek(state);
var is_table = new cljs.core.Keyword(null,"table","table",-564943036).cljs$core$IFn$_invoke$arity$1(last_in_state);
var is_tree = new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(last_in_state);
var vec__74109 = cljs.core.take_last((4),path);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74109,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74109,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74109,(2),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74109,(3),null);
var is_header = (function (){var and__5041__auto__ = is_table;
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row,(0));
} else {
return and__5041__auto__;
}
})();
if(cljs.core.truth_(is_table)){
if(cljs.core.truth_(is_header)){
return "dw-table-row table-header";
} else {
return "dw-table-row";
}
} else {
if(cljs.core.truth_(is_tree)){
return "is-tree";
} else {
return "data-cell";

}
}
})();
return res74106;
});
enigma_nexus.core.server_table_menu_item = (function enigma_nexus$core$server_table_menu_item(p__74114){
var map__74115 = p__74114;
var map__74115__$1 = cljs.core.__destructure_map(map__74115);
var page_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74115__$1,new cljs.core.Keyword(null,"page*","page*",-26389174));
var with_let74116 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74116","with-let74116",-119967837));
var temp__5808__auto___74151 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74151 == null)){
} else {
var c__59154__auto___74152 = temp__5808__auto___74151;
if((with_let74116.generation === c__59154__auto___74152.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74116.generation = c__59154__auto___74152.ratomGeneration);
}

var init74117 = (with_let74116.length === (0));
var data_STAR_ = ((((init74117) || (cljs.core.not(with_let74116.hasOwnProperty((0))))))?(with_let74116[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let74116[(0)]));
var res74118 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (ev){
var data = enigma_nexus.compile.data_widget.decompile_from_tree(cljs.core.deref(data_STAR_));
return fetch("/data",cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 2, ["Content-Type","application/json","Accept","application/json"], null),new cljs.core.Keyword(null,"body","body",-2049205669),JSON.stringify(cljs.core.clj__GT_js(data))], null)));
})], null),"Save table"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return fetch("/data").then((function (r){
return r.json();
})).then(cljs.core.js__GT_clj).then((function (data){
console.log(cljs.core.clj__GT_js(data));

console.log(cljs.core.clj__GT_js(enigma_nexus.compile.data_widget.compile_to_tree(data)));

cljs.core.reset_BANG_(data_STAR_,enigma_nexus.compile.data_widget.compile_to_tree(data));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),enigma_nexus.compile.demo.figma_table_ui_props,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"root*","root*",964817570),data_STAR_], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.data_widget.data_widget.data_widget], null));
}));
})], null),"Show Table From Server"], null)], null);
return res74118;
});
enigma_nexus.core.main_menu = (function enigma_nexus$core$main_menu(props){
var with_let74125 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74125","with-let74125",-915768474));
var temp__5808__auto___74153 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74153 == null)){
} else {
var c__59154__auto___74154 = temp__5808__auto___74153;
if((with_let74125.generation === c__59154__auto___74154.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74125.generation = c__59154__auto___74154.ratomGeneration);
}

var init74126 = (with_let74125.length === (0));
var res74127 = (function (){var map__74132 = props;
var map__74132__$1 = cljs.core.__destructure_map(map__74132);
var page_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74132__$1,new cljs.core.Keyword(null,"page*","page*",-26389174));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"main-menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
console.log(JSON.stringify(cljs.core.clj__GT_js(enigma_nexus.compile.data_widget.compile_to_tree(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),(10)], null)))));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),enigma_nexus.compile.demo.sutdata_ui_props,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"root*","root*",964817570),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.compile.data_widget.compile_to_tree(enigma_nexus.compile.demo.sut_data))], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.data_widget.data_widget.data_widget], null));
})], null),"1.5 Add Figma Schema Tree (SUT Data)"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.core.server_table_menu_item,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page*","page*",-26389174),page_STAR_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),enigma_nexus.compile.demo.figma_table_ui_props,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"root*","root*",964817570),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.compile.data_widget.compile_neo_json(enigma_nexus.compile.demo.sut_data))], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.data_widget.data_widget.data_widget], null));
})], null),"2. compile to neo  (SUT Data)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (ev){
var reader = (new FileReader());
var file = cljs.core.first(ev.target.files);
(reader.onload = (function (e){
var doc = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(e.target.result));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.compile.data_widget.compile_to_tree(doc))], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.data_widget.data_widget.data_widget], null));
}));

return reader.readAsText(file);
})], null)], null),(cljs.core.truth_(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74123_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__74123_SHARP_),new cljs.core.Keyword(null,"file","file",-1269645878));
}),cljs.core.deref(page_STAR_))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(enigma_nexus.compile.data_widget.decompile_from_tree(cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74124_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__74124_SHARP_),new cljs.core.Keyword(null,"file","file",-1269645878));
}),cljs.core.deref(page_STAR_))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"tree*","tree*",1569275947)], null))))),null,(2))))].join(''),new cljs.core.Keyword(null,"download","download",-300081668),"data.json"], null),"Download"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ui-props-fn","ui-props-fn",-824328747),enigma_nexus.compile.demo.figma_table_ui_props,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"root*","root*",964817570),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.compile.demo.figma_table)], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.data_widget.data_widget.data_widget], null));
})], null),"10. Add Figma Table"], null)], null)], null);
})();
return res74127;
});
enigma_nexus.core.home_page = (function enigma_nexus$core$home_page(){
var with_let74139 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let74139","with-let74139",-2036063395));
var temp__5808__auto___74155 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___74155 == null)){
} else {
var c__59154__auto___74156 = temp__5808__auto___74155;
if((with_let74139.generation === c__59154__auto___74156.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let74139.generation = c__59154__auto___74156.ratomGeneration);
}

var init74140 = (with_let74139.length === (0));
var page_STAR_ = ((((init74140) || (cljs.core.not(with_let74139.hasOwnProperty((0))))))?(with_let74139[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY)):(with_let74139[(0)]));
var res74141 = (function (){var left = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74137_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"side","side",389652279).cljs$core$IFn$_invoke$arity$1(p1__74137_SHARP_),new cljs.core.Keyword(null,"left","left",-399115937));
}),cljs.core.deref(page_STAR_));
var right = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74138_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"side","side",389652279).cljs$core$IFn$_invoke$arity$1(p1__74138_SHARP_),new cljs.core.Keyword(null,"right","right",-452581833));
}),cljs.core.deref(page_STAR_));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),"homepage"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"left"], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__74142){
var map__74143 = p__74142;
var map__74143__$1 = cljs.core.__destructure_map(map__74143);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74143__$1,new cljs.core.Keyword(null,"props","props",453281727));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74143__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,props], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,"left",index], null)], null));
}),left))], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"right"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.core.main_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page*","page*",-26389174),page_STAR_], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.evaluator.evaluator.evaluator], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,p__74144){
var map__74145 = p__74144;
var map__74145__$1 = cljs.core.__destructure_map(map__74145);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74145__$1,new cljs.core.Keyword(null,"props","props",453281727));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74145__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,props], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,"right",index], null)], null));
}),right))], null)], null);
})();
return res74141;
});
enigma_nexus.core.items_page = (function enigma_nexus$core$items_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The items of enigma-nexus"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),enigma_nexus.core.path_for.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"item","item",249373802),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null)], 0))], null),"Item: ",item_id], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(60)))], null)], null);
});
});
enigma_nexus.core.item_page = (function enigma_nexus$core$item_page(){
return (function (){
var routing_data = reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309));
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)," of enigma-nexus"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),enigma_nexus.core.path_for(new cljs.core.Keyword(null,"items","items",1031954938))], null),"Back to the list of items"], null)], null)], null);
});
});
enigma_nexus.core.about_page = (function enigma_nexus$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About enigma-nexus"], null)], null);
});
});
enigma_nexus.core.page_for = (function enigma_nexus$core$page_for(route){
return new cljs.core.Var(function(){return enigma_nexus.core.home_page;},new cljs.core.Symbol("enigma-nexus.core","home-page","enigma-nexus.core/home-page",115086665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"enigma-nexus.core","enigma-nexus.core",98428082,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"enigma_nexus/core.cljs",16,1,152,152,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(enigma_nexus.core.home_page)?enigma_nexus.core.home_page.cljs$lang$test:null)]));
});
enigma_nexus.core.current_page = (function enigma_nexus$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null);
});
});
enigma_nexus.core.mount_root = (function enigma_nexus$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.core.current_page], null),document.getElementById("app"));
});
enigma_nexus.core.init_BANG_ = (function enigma_nexus$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(enigma_nexus.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),enigma_nexus.core.page_for(current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(enigma_nexus.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return enigma_nexus.core.mount_root();
});
enigma_nexus.core.reload_BANG_ = (function enigma_nexus$core$reload_BANG_(){
return enigma_nexus.core.mount_root();
});

//# sourceMappingURL=enigma_nexus.core.js.map
