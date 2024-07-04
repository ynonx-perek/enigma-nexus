goog.provide('enigma_nexus.tree.tree');
enigma_nexus.tree.tree.map_tree_node = (function enigma_nexus$tree$tree$map_tree_node(props){
var map__77760 = props;
var map__77760__$1 = cljs.core.__destructure_map(map__77760);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77760__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77760__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var compilation_rules = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77760__$1,new cljs.core.Keyword(null,"compilation-rules","compilation-rules",-1315180332));
var with_let77761 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77761","with-let77761",-1451327287));
var temp__5808__auto___77774 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77774 == null)){
} else {
var c__59044__auto___77775 = temp__5808__auto___77774;
if((with_let77761.generation === c__59044__auto___77775.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77761.generation = c__59044__auto___77775.ratomGeneration);
}

var init77762 = (with_let77761.length === (0));
var my_tree_STAR_ = ((((init77762) || (cljs.core.not(with_let77761.hasOwnProperty((0))))))?(with_let77761[(0)] = reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))):(with_let77761[(0)]));
var expanded_STAR_ = ((((init77762) || (cljs.core.not(with_let77761.hasOwnProperty((1))))))?(with_let77761[(1)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(true)):(with_let77761[(1)]));
var res77763 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cusror","cusror",-849203038),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_STAR_,cljs.core.not);
})], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?" V":">")].join(''),(cljs.core.truth_(cljs.core.deref(expanded_STAR_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),my_tree_STAR_], null)], null):null)], null);
return res77763;
});
enigma_nexus.tree.tree.tree_widget = (function enigma_nexus$tree$tree$tree_widget(props){
var map__77764 = props;
var map__77764__$1 = cljs.core.__destructure_map(map__77764);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77764__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77764__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var with_let77765 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77765","with-let77765",-1195071288));
var temp__5808__auto___77778 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77778 == null)){
} else {
var c__59044__auto___77779 = temp__5808__auto___77778;
if((with_let77765.generation === c__59044__auto___77779.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77765.generation = c__59044__auto___77779.ratomGeneration);
}

var init77766 = (with_let77765.length === (0));
var my_tree_STAR_ = ((((init77766) || (cljs.core.not(with_let77765.hasOwnProperty((0))))))?(with_let77765[(0)] = reagent.core.cursor(tree_STAR_,(cljs.core.truth_(index)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),index], null):cljs.core.PersistentVector.EMPTY))):(with_let77765[(0)]));
var indicators_STAR_ = ((((init77766) || (cljs.core.not(with_let77765.hasOwnProperty((1))))))?(with_let77765[(1)] = reagent.core.cursor(my_tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let77765[(1)]));
var res77767 = (function (){var map__77768 = cljs.core.deref(my_tree_STAR_);
var map__77768__$1 = cljs.core.__destructure_map(map__77768);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77768__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77768__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77768__$1,new cljs.core.Keyword(null,"value","value",305978217));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77768__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var indicators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77768__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["tree-node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value"], null),(((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_tree_STAR_))))))?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (c_index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),my_tree_STAR_,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179),indicators_STAR_,new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_index)].join('')], null)], null);
}),component)], null))):null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children"], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index__$1,child_node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1)].join(''),new cljs.core.Keyword(null,"index","index",-1531685915),index__$1,new cljs.core.Keyword(null,"key","key",-1516042587),["comp",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),cljs.core.str.cljs$core$IFn$_invoke$arity$1(index__$1)].join(''),new cljs.core.Keyword(null,"tree*","tree*",1569275947),my_tree_STAR_], null)], null);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(my_tree_STAR_)))], null)))], null):null)], null);
})();
return res77767;
});
enigma_nexus.tree.tree.node = (function enigma_nexus$tree$tree$node(props){
var with_let77769 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77769","with-let77769",1234968538));
var temp__5808__auto___77788 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77788 == null)){
} else {
var c__59044__auto___77789 = temp__5808__auto___77788;
if((with_let77769.generation === c__59044__auto___77789.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77769.generation = c__59044__auto___77789.ratomGeneration);
}

var init77770 = (with_let77769.length === (0));
var expanded_STAR_ = ((((init77770) || (cljs.core.not(with_let77769.hasOwnProperty((0))))))?(with_let77769[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let77769[(0)]));
var res77771 = (function (){var map__77772 = props;
var map__77772__$1 = cljs.core.__destructure_map(map__77772);
var tree_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"value","value",305978217));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var expanded_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"expanded-style","expanded-style",1358008989));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var expanded_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77772__$1,new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__77773 = type;
var G__77773__$1 = (((G__77773 instanceof cljs.core.Keyword))?G__77773.fqn:null);
switch (G__77773__$1) {
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
return res77771;
});

//# sourceMappingURL=enigma_nexus.tree.tree.js.map
