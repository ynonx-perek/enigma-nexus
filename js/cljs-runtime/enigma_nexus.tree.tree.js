goog.provide('enigma_nexus.tree.tree');
enigma_nexus.tree.tree.tree_widget_rw = (function enigma_nexus$tree$tree$tree_widget_rw(props){
var map__59139 = props;
var map__59139__$1 = cljs.core.__destructure_map(map__59139);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59139__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59139__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var with_let59140 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59140","with-let59140",-284943057));
var temp__5808__auto___59166 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59166 == null)){
} else {
var c__59044__auto___59167 = temp__5808__auto___59166;
if((with_let59140.generation === c__59044__auto___59167.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59140.generation = c__59044__auto___59167.ratomGeneration);
}

var init59141 = (with_let59140.length === (0));
var indicators_STAR_ = ((((init59141) || (cljs.core.not(with_let59140.hasOwnProperty((0))))))?(with_let59140[(0)] = reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let59140[(0)]));
var res59142 = (function (){var map__59143 = cljs.core.deref(tree_STAR_);
var map__59143__$1 = cljs.core.__destructure_map(map__59143);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword(null,"value","value",305978217));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var indicators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59143__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),["tree-node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),(((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tree_STAR_))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value"], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (c_index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),c_index,new cljs.core.Keyword(null,"tree*","tree*",1569275947),tree_STAR_,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179),indicators_STAR_], null)], null);
}),component))], null)))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children"], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index__$1,child_node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget_rw,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1)].join(''),new cljs.core.Keyword(null,"index","index",-1531685915),index__$1,new cljs.core.Keyword(null,"key","key",-1516042587),index__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947),reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),index__$1], null))], null)], null);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tree_STAR_))))], null)))], null):null)], null);
})();
return res59142;
});
enigma_nexus.tree.tree.tree_widget_ro = (function enigma_nexus$tree$tree$tree_widget_ro(props){
var map__59144 = props;
var map__59144__$1 = cljs.core.__destructure_map(map__59144);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59144__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59144__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var with_let59145 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59145","with-let59145",-1305738869));
var temp__5808__auto___59178 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59178 == null)){
} else {
var c__59044__auto___59179 = temp__5808__auto___59178;
if((with_let59145.generation === c__59044__auto___59179.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59145.generation = c__59044__auto___59179.ratomGeneration);
}

var init59146 = (with_let59145.length === (0));
var inner_tree_STAR_ = ((((init59146) || (cljs.core.not(with_let59145.hasOwnProperty((0))))))?(with_let59145[(0)] = reagent.core.cursor(tree_STAR_,(cljs.core.truth_(index)?index:cljs.core.PersistentVector.EMPTY))):(with_let59145[(0)]));
var indicators_STAR_ = ((((init59146) || (cljs.core.not(with_let59145.hasOwnProperty((1))))))?(with_let59145[(1)] = reagent.core.cursor(inner_tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let59145[(1)]));
var res59147 = (function (){var map__59148 = cljs.core.deref(inner_tree_STAR_);
var map__59148__$1 = cljs.core.__destructure_map(map__59148);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59148__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59148__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59148__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59148__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tree-node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_0"].join('')].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_1"].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (c_index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),inner_tree_STAR_,new cljs.core.Keyword(null,"value","value",305978217),tree,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179),indicators_STAR_,new cljs.core.Keyword(null,"key","key",-1516042587),["skin_componet_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((c_index + (3)))].join('')], null)], null);
}),component)),(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.coll_QMARK_(tree);
} else {
return and__5041__auto__;
}
})())?(function (){var vec__59149 = ((cljs.core.vector_QMARK_(tree))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]",(function (index__$1,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),index__$1], null),index__$1], null);
})], null):((cljs.core.map_QMARK_(tree))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}",(function (index__$1,item){
var vec__59152 = item;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59152,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59152,(1),null);
var vec__59155 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),key], null),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(key)], null);
var _index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59155,(0),null);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59155,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_index,key__$1], null);
})], null):null));
var o_br = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59149,(0),null);
var c_br = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59149,(1),null);
var get_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59149,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children",new cljs.core.Keyword(null,"key","key",-1516042587),["coll_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_2"].join('')], null),o_br,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index__$1,item){
var vec__59158 = (get_key.cljs$core$IFn$_invoke$arity$2 ? get_key.cljs$core$IFn$_invoke$arity$2(index__$1,item) : get_key.call(null,index__$1,item));
var r_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59158,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59158,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1),"+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget_ro,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1)].join(''),new cljs.core.Keyword(null,"index","index",-1531685915),r_index,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1),"_child_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"tree*","tree*",1569275947),inner_tree_STAR_], null)], null)], null);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(inner_tree_STAR_)))),c_br], null);
})():null)], null)], null);
})();
return res59147;
});
enigma_nexus.tree.tree.node = (function enigma_nexus$tree$tree$node(props){
var with_let59161 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59161","with-let59161",-667777118));
var temp__5808__auto___59181 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59181 == null)){
} else {
var c__59044__auto___59182 = temp__5808__auto___59181;
if((with_let59161.generation === c__59044__auto___59182.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59161.generation = c__59044__auto___59182.ratomGeneration);
}

var init59162 = (with_let59161.length === (0));
var expanded_STAR_ = ((((init59162) || (cljs.core.not(with_let59161.hasOwnProperty((0))))))?(with_let59161[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let59161[(0)]));
var res59163 = (function (){var map__59164 = props;
var map__59164__$1 = cljs.core.__destructure_map(map__59164);
var tree_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"value","value",305978217));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var expanded_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"expanded-style","expanded-style",1358008989));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var expanded_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59164__$1,new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__59165 = type;
var G__59165__$1 = (((G__59165 instanceof cljs.core.Keyword))?G__59165.fqn:null);
switch (G__59165__$1) {
case "click":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_STAR_,cljs.core.not);
})], null);

break;
case "hover":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.reset_BANG_(expanded_STAR_,true);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.reset_BANG_(expanded_STAR_,false);
})], null);

break;
default:
return new cljs.core.Keyword(null,"events","events",1792552201).cljs$core$IFn$_invoke$arity$1(props);

}
})()], 0)),value,(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?(function (){var child_count = cljs.core.count(nodes);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),expanded_style,new cljs.core.Keyword(null,"class","class",-2030961996),expanded_class], null),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,child){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.node,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),tree_options], null),child], 0))], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,(child_count - (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"separator-css","separator-css",559201360).cljs$core$IFn$_invoke$arity$1(tree_options)], null)], null):null)], null);
}),nodes)], null);
})():null)], null);
})();
return res59163;
});

//# sourceMappingURL=enigma_nexus.tree.tree.js.map
