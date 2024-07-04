goog.provide('enigma_nexus.tree.tree');
enigma_nexus.tree.tree.map_tree_node = (function enigma_nexus$tree$tree$map_tree_node(props){
var map__68193 = props;
var map__68193__$1 = cljs.core.__destructure_map(map__68193);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68193__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68193__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var compilation_rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68193__$1,new cljs.core.Keyword(null,"compilation-rules","compilation-rules",-1315180332));
var with_let68194 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68194","with-let68194",667113379));
var temp__5808__auto___68207 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68207 == null)){
} else {
var c__59044__auto___68208 = temp__5808__auto___68207;
if((with_let68194.generation === c__59044__auto___68208.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68194.generation = c__59044__auto___68208.ratomGeneration);
}

var init68195 = (with_let68194.length === (0));
var my_tree_STAR_ = ((((init68195) || (cljs.core.not(with_let68194.hasOwnProperty((0))))))?(with_let68194[(0)] = reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))):(with_let68194[(0)]));
var expanded_STAR_ = ((((init68195) || (cljs.core.not(with_let68194.hasOwnProperty((1))))))?(with_let68194[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true)):(with_let68194[(1)]));
var res68196 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cusror","cusror",-849203038),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_STAR_,cljs.core.not);
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?" V":">")].join(''),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),my_tree_STAR_], null)], null):null)], null);
return res68196;
});
enigma_nexus.tree.tree.tree_widget = (function enigma_nexus$tree$tree$tree_widget(props){
var map__68197 = props;
var map__68197__$1 = cljs.core.__destructure_map(map__68197);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68197__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var with_let68198 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68198","with-let68198",160541329));
var temp__5808__auto___68209 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68209 == null)){
} else {
var c__59044__auto___68210 = temp__5808__auto___68209;
if((with_let68198.generation === c__59044__auto___68210.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68198.generation = c__59044__auto___68210.ratomGeneration);
}

var init68199 = (with_let68198.length === (0));
var _ = ((((init68199) || (cljs.core.not(with_let68198.hasOwnProperty((0))))))?(with_let68198[(0)] = console.log("tree = ",cljs.core.clj__GT_js(tree_STAR_))):(with_let68198[(0)]));
var my_tree_STAR_ = ((((init68199) || (cljs.core.not(with_let68198.hasOwnProperty((1))))))?(with_let68198[(1)] = reagent.core.cursor(tree_STAR_,(cljs.core.truth_(index)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),index], null):cljs.core.PersistentVector.EMPTY))):(with_let68198[(1)]));
var indicators_STAR_ = ((((init68199) || (cljs.core.not(with_let68198.hasOwnProperty((2))))))?(with_let68198[(2)] = reagent.core.cursor(my_tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let68198[(2)]));
var res68200 = (function (){var map__68201 = cljs.core.deref(my_tree_STAR_);
var map__68201__$1 = cljs.core.__destructure_map(map__68201);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68201__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68201__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68201__$1,new cljs.core.Keyword(null,"value","value",305978217));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68201__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var indicators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68201__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tree-node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value"], null),(((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_tree_STAR_))))))?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (c_index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),my_tree_STAR_,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179),indicators_STAR_,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_index)].join('')], null)], null);
}),component)], null))):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children"], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index__$1,child_node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1)].join(''),new cljs.core.Keyword(null,"index","index",-1531685915),index__$1,new cljs.core.Keyword(null,"key","key",-1516042587),["comp",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1)].join(''),new cljs.core.Keyword(null,"tree*","tree*",1569275947),my_tree_STAR_], null)], null);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_tree_STAR_)))], null)))], null):null)], null);
})();
return res68200;
});
enigma_nexus.tree.tree.node = (function enigma_nexus$tree$tree$node(props){
var with_let68202 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let68202","with-let68202",305559565));
var temp__5808__auto___68211 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___68211 == null)){
} else {
var c__59044__auto___68212 = temp__5808__auto___68211;
if((with_let68202.generation === c__59044__auto___68212.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let68202.generation = c__59044__auto___68212.ratomGeneration);
}

var init68203 = (with_let68202.length === (0));
var expanded_STAR_ = ((((init68203) || (cljs.core.not(with_let68202.hasOwnProperty((0))))))?(with_let68202[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let68202[(0)]));
var res68204 = (function (){var map__68205 = props;
var map__68205__$1 = cljs.core.__destructure_map(map__68205);
var tree_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"value","value",305978217));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var expanded_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"expanded-style","expanded-style",1358008989));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var expanded_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68205__$1,new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__68206 = type;
var G__68206__$1 = (((G__68206 instanceof cljs.core.Keyword))?G__68206.fqn:null);
switch (G__68206__$1) {
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
return res68204;
});

//# sourceMappingURL=enigma_nexus.tree.tree.js.map
