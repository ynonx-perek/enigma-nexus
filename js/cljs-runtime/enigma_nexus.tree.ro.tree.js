goog.provide('enigma_nexus.tree.ro.tree');
enigma_nexus.tree.ro.tree.tree_widget1 = (function enigma_nexus$tree$ro$tree$tree_widget1(props){
var map__69849 = props;
var map__69849__$1 = cljs.core.__destructure_map(map__69849);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69849__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var map__69859 = cljs.core.deref(data_STAR_);
var map__69859__$1 = cljs.core.__destructure_map(map__69859);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69859__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69859__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69859__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var indicators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69859__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69859__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["tree-node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_0"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_1"].join('')], null),(function (){var data_type = ((cljs.core.map_QMARK_(data))?"map":((cljs.core.vector_QMARK_(data))?"vector":((cljs.core.set_QMARK_(data))?"set":((typeof data === 'string')?"string":(((data instanceof cljs.core.Keyword))?"keyword":"unknown"
)))));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR_,new cljs.core.Keyword(null,"value","value",305978217),data,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"debug_print","debug_print",28232174),console.log(["inner-tree-value data type : ",data_type,"    ----  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''))], null)], null);
}),component));
})(),(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(indicators);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.coll_QMARK_(data);
} else {
return and__5041__auto__;
}
})())?(function (){var get_key_and_index = ((cljs.core.vector_QMARK_(data))?(function (index,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),index], null),index], null);
}):((cljs.core.map_QMARK_(data))?(function (index,item){
var vec__69888 = item;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69888,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69888,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),key], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(key)], null);
}):null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children",new cljs.core.Keyword(null,"key","key",-1516042587),["coll_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_2"].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
var vec__69911 = (get_key_and_index.cljs$core$IFn$_invoke$arity$2 ? get_key_and_index.cljs$core$IFn$_invoke$arity$2(index,item) : get_key_and_index.call(null,index,item));
var r_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69911,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69911,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"data*","data*",109132105),reagent.core.cursor(data_STAR_,r_index)], null)], null)], null);
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))))], null);
})():null)], null)], null);
});
enigma_nexus.tree.ro.tree.tree_widget = (function enigma_nexus$tree$ro$tree$tree_widget(props){
var map__69934 = props;
var map__69934__$1 = cljs.core.__destructure_map(map__69934);
var data_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69934__$1,new cljs.core.Keyword(null,"data*","data*",109132105));
var map__69935 = cljs.core.deref(data_STAR_);
var map__69935__$1 = cljs.core.__destructure_map(map__69935);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69935__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69935__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69935__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var indicators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69935__$1,new cljs.core.Keyword(null,"indicators","indicators",1312373003));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69935__$1,new cljs.core.Keyword(null,"component","component",1555936782));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),["tree-node ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_0"].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-value",new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_1"].join('')], null),(function (){var data_type = ((cljs.core.map_QMARK_(data))?"map":((cljs.core.vector_QMARK_(data))?"vector":((cljs.core.set_QMARK_(data))?"set":((typeof data === 'string')?"string":(((data instanceof cljs.core.Keyword))?"keyword":"unknown"
)))));
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,c){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"data*","data*",109132105),data_STAR_,new cljs.core.Keyword(null,"value","value",305978217),data,new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"debug_print","debug_print",28232174),console.log(["inner-tree-value data type : ",data_type,"    ----  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(data)].join(''))], null)], null);
}),component));
})(),(cljs.core.truth_((function (){var and__5041__auto__ = new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(indicators);
if(cljs.core.truth_(and__5041__auto__)){
return cljs.core.coll_QMARK_(data);
} else {
return and__5041__auto__;
}
})())?((cljs.core.vector_QMARK_(data))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children",new cljs.core.Keyword(null,"key","key",-1516042587),["coll_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_2"].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"data*","data*",109132105),reagent.core.cursor(data_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),index], null))], null)], null);
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))))], null):((cljs.core.map_QMARK_(data))?(function (){var get_key_and_index = (function (index,item){
var vec__69965 = item;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69965,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69965,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),key], null),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(key)], null);
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"inner-tree-children",new cljs.core.Keyword(null,"key","key",-1516042587),["coll_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"_2"].join('')], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
var vec__69968 = get_key_and_index(index,item);
var r_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69968,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69968,(1),null);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')], null),key], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),["child-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),index,new cljs.core.Keyword(null,"data*","data*",109132105),reagent.core.cursor(data_STAR_,r_index)], null)], null)], null);
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data_STAR_))))], null);
})():null)):null)], null)], null);
});

//# sourceMappingURL=enigma_nexus.tree.ro.tree.js.map
