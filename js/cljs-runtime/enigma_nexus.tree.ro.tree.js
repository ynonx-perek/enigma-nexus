goog.provide('enigma_nexus.tree.ro.tree');
enigma_nexus.tree.ro.tree.tree_widget = (function enigma_nexus$tree$ro$tree$tree_widget(props){
var map__59078 = props;
var map__59078__$1 = cljs.core.__destructure_map(map__59078);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59078__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59078__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var with_let59084 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let59084","with-let59084",1349616601));
var temp__5808__auto___59119 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___59119 == null)){
} else {
var c__59044__auto___59121 = temp__5808__auto___59119;
if((with_let59084.generation === c__59044__auto___59121.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let59084.generation = c__59044__auto___59121.ratomGeneration);
}

var init59085 = (with_let59084.length === (0));
var inner_tree_STAR_ = ((((init59085) || (cljs.core.not(with_let59084.hasOwnProperty((0))))))?(with_let59084[(0)] = reagent.core.cursor(tree_STAR_,(cljs.core.truth_(index)?index:cljs.core.PersistentVector.EMPTY))):(with_let59084[(0)]));
var indicators_STAR_ = ((((init59085) || (cljs.core.not(with_let59084.hasOwnProperty((1))))))?(with_let59084[(1)] = reagent.core.cursor(inner_tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let59084[(1)]));
var res59086 = (function (){var map__59094 = cljs.core.deref(inner_tree_STAR_);
var map__59094__$1 = cljs.core.__destructure_map(map__59094);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59094__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59094__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59094__$1,new cljs.core.Keyword(null,"tree","tree",-196312028));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59094__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tree-node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"key","key",-1516042587)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_0"].join('')].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_1"].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (c_index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),inner_tree_STAR_,new cljs.core.Keyword(null,"value","value",305978217),tree,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179),indicators_STAR_,new cljs.core.Keyword(null,"key","key",-1516042587),["skin_componet_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1((c_index + (3)))].join('')], null)], null);
}),component)),(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_));
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.coll_QMARK_(tree);
} else {
return and__5041__auto__;
}
})())?(function (){var vec__59096 = ((cljs.core.vector_QMARK_(tree))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]",(function (index__$1,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),index__$1], null),index__$1], null);
})], null):((cljs.core.map_QMARK_(tree))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["{","}",(function (index__$1,item){
var vec__59100 = item;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59100,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59100,(1),null);
var vec__59103 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),key], null),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(key)], null);
var _index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59103,(0),null);
var key__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59103,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_index,key__$1], null);
})], null):null));
var o_br = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59096,(0),null);
var c_br = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59096,(1),null);
var get_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59096,(2),null);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children",new cljs.core.Keyword(null,"key","key",-1516042587),["coll_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_2"].join('')], null),o_br,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index__$1,item){
var vec__59108 = (get_key.cljs$core$IFn$_invoke$arity$2 ? get_key.cljs$core$IFn$_invoke$arity$2(index__$1,item) : get_key.call(null,index__$1,item));
var r_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59108,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1),"+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1)].join(''),new cljs.core.Keyword(null,"index","index",-1531685915),r_index,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1),"_child_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"tree*","tree*",1569275947),inner_tree_STAR_], null)], null)], null);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(inner_tree_STAR_)))),c_br], null);
})():null)], null)], null);
})();
return res59086;
});

//# sourceMappingURL=enigma_nexus.tree.ro.tree.js.map
