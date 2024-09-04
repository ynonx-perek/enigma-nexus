goog.provide('enigma_nexus.tree.node.node');
enigma_nexus.tree.node.node.node = (function enigma_nexus$tree$node$node$node(props){
var with_let69864 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let69864","with-let69864",-1036314759));
var temp__5808__auto___69921 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___69921 == null)){
} else {
var c__67734__auto___69922 = temp__5808__auto___69921;
if((with_let69864.generation === c__67734__auto___69922.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let69864.generation = c__67734__auto___69922.ratomGeneration);
}

var init69865 = (with_let69864.length === (0));
var expanded_STAR_ = ((((init69865) || (cljs.core.not(with_let69864.hasOwnProperty((0))))))?(with_let69864[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)):(with_let69864[(0)]));
var res69868 = (function (){var map__69879 = props;
var map__69879__$1 = cljs.core.__destructure_map(map__69879);
var tree_options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"value","value",305978217));
var nodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"nodes","nodes",-2099585805));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var expanded_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"expanded-style","expanded-style",1358008989));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var expanded_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69879__$1,new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),style], null),(function (){var G__69897 = type;
var G__69897__$1 = (((G__69897 instanceof cljs.core.Keyword))?G__69897.fqn:null);
switch (G__69897__$1) {
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
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.node.node.node,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),tree_options], null),child], 0))], null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(index,(child_count - (1))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"separator-css","separator-css",559201360).cljs$core$IFn$_invoke$arity$1(tree_options)], null)], null):null)], null);
}),nodes)], null);
})():null)], null);
})();
return res69868;
});

//# sourceMappingURL=enigma_nexus.tree.node.node.js.map
