goog.provide('enigma_nexus.tree.rw.tree');
enigma_nexus.tree.rw.tree.tree_widget = (function enigma_nexus$tree$rw$tree$tree_widget(props){
var map__61187 = props;
var map__61187__$1 = cljs.core.__destructure_map(map__61187);
var tree_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61187__$1,new cljs.core.Keyword(null,"tree*","tree*",1569275947));
var with_let61189 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let61189","with-let61189",678639131));
var temp__5808__auto___61205 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___61205 == null)){
} else {
var c__59154__auto___61206 = temp__5808__auto___61205;
if((with_let61189.generation === c__59154__auto___61206.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let61189.generation = c__59154__auto___61206.ratomGeneration);
}

var init61190 = (with_let61189.length === (0));
var indicators_STAR_ = ((((init61190) || (cljs.core.not(with_let61189.hasOwnProperty((0))))))?(with_let61189[(0)] = reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null))):(with_let61189[(0)]));
var res61191 = (function (){var map__61196 = cljs.core.deref(tree_STAR_);
var map__61196__$1 = cljs.core.__destructure_map(map__61196);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61196__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61196__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61196__$1,new cljs.core.Keyword(null,"value","value",305978217));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61196__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var indicators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61196__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"class","class",-2030961996),["tree-node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join('')], null),(((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vector","vector",1902966158),null,new cljs.core.Keyword(null,"map","map",1371690461),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tree_STAR_))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value"], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (c_index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),c_index,new cljs.core.Keyword(null,"tree*","tree*",1569275947),tree_STAR_,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"indicators*","indicators*",-1098268179),indicators_STAR_], null)], null);
}),component))], null)))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(indicators_STAR_)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children"], null),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,child_node){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"tree*","tree*",1569275947),reagent.core.cursor(tree_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tree","tree",-196312028),index], null))], null)], null);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(tree_STAR_))))], null)))], null):null)], null);
})();
return res61191;
});

//# sourceMappingURL=enigma_nexus.tree.rw.tree.js.map
