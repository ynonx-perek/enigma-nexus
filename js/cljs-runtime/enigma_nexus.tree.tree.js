goog.provide('enigma_nexus.tree.tree');
enigma_nexus.tree.tree.map_tree_node = (function enigma_nexus$tree$tree$map_tree_node(props){
var map__60399 = props;
var map__60399__$1 = cljs.core.__destructure_map(map__60399);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60399__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60399__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var compilation_rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60399__$1,new cljs.core.Keyword(null,"compilation-rules","compilation-rules",-1315180332));
var with_let60400 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60400","with-let60400",633527816));
var temp__5808__auto___60413 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60413 == null)){
} else {
var c__59044__auto___60414 = temp__5808__auto___60413;
if((with_let60400.generation === c__59044__auto___60414.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60400.generation = c__59044__auto___60414.ratomGeneration);
}

var init60401 = (with_let60400.length === (0));
var my_tree_STAR_ = ((((init60401) || (cljs.core.not(with_let60400.hasOwnProperty((0))))))?(with_let60400[(0)] = reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))):(with_let60400[(0)]));
var expanded_STAR_ = ((((init60401) || (cljs.core.not(with_let60400.hasOwnProperty((1))))))?(with_let60400[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true)):(with_let60400[(1)]));
var res60402 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cusror","cusror",-849203038),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_STAR_,cljs.core.not);
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?" V":">")].join(''),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),my_tree_STAR_], null)], null):null)], null);
return res60402;
});
enigma_nexus.tree.tree.tree_widget = (function enigma_nexus$tree$tree$tree_widget(props){
var map__60403 = props;
var map__60403__$1 = cljs.core.__destructure_map(map__60403);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60403__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60403__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var with_let60404 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60404","with-let60404",-902402586));
var temp__5808__auto___60415 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60415 == null)){
} else {
var c__59044__auto___60416 = temp__5808__auto___60415;
if((with_let60404.generation === c__59044__auto___60416.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60404.generation = c__59044__auto___60416.ratomGeneration);
}

var init60405 = (with_let60404.length === (0));
var my_tree_STAR_ = ((((init60405) || (cljs.core.not(with_let60404.hasOwnProperty((0))))))?(with_let60404[(0)] = reagent.core.cursor(tree_STAR_,(cljs.core.truth_(index)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),index], null):cljs.core.PersistentVector.EMPTY))):(with_let60404[(0)]));
var indicators_STAR_ = ((((init60405) || (cljs.core.not(with_let60404.hasOwnProperty((1))))))?(with_let60404[(1)] = reagent.core.cursor(my_tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let60404[(1)]));
var res60406 = (function (){var map__60407 = cljs.core.deref(my_tree_STAR_);
var map__60407__$1 = cljs.core.__destructure_map(map__60407);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"value","value",305978217));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var indicators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60407__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tree-node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value"], null),(((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_tree_STAR_))))))?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (c_index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),my_tree_STAR_,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179),indicators_STAR_,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_index)].join('')], null)], null);
}),component)], null))):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children"], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index__$1,child_node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1)].join(''),new cljs.core.Keyword(null,"index","index",-1531685915),index__$1,new cljs.core.Keyword(null,"key","key",-1516042587),["comp",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1)].join(''),new cljs.core.Keyword(null,"tree*","tree*",1569275947),my_tree_STAR_], null)], null);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_tree_STAR_)))], null)))], null):null)], null);
})();
return res60406;
});
enigma_nexus.tree.tree.node = (function enigma_nexus$tree$tree$node(props){
var with_let60408 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let60408","with-let60408",-1213135740));
var temp__5808__auto___60421 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___60421 == null)){
} else {
var c__59044__auto___60422 = temp__5808__auto___60421;
if((with_let60408.generation === c__59044__auto___60422.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let60408.generation = c__59044__auto___60422.ratomGeneration);
}

var init60409 = (with_let60408.length === (0));
var expanded_STAR_ = ((((init60409) || (cljs.core.not(with_let60408.hasOwnProperty((0))))))?(with_let60408[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let60408[(0)]));
var res60410 = (function (){var map__60411 = props;
var map__60411__$1 = cljs.core.__destructure_map(map__60411);
var tree_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"value","value",305978217));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var expanded_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"expanded-style","expanded-style",1358008989));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var expanded_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60411__$1,new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__60412 = type;
var G__60412__$1 = (((G__60412 instanceof cljs.core.Keyword))?G__60412.fqn:null);
switch (G__60412__$1) {
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
return res60410;
});

//# sourceMappingURL=enigma_nexus.tree.tree.js.map
