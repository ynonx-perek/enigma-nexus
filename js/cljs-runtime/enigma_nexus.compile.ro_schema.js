goog.provide('enigma_nexus.compile.ro_schema');
enigma_nexus.compile.ro_schema.decompile_from_tree = (function enigma_nexus$compile$ro_schema$decompile_from_tree(tree){
if(cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
return (enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.decompile_from_tree.call(null,item));
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree));
} else {
if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62935){
var vec__62936 = p__62935;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62936,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62936,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(key) : enigma_nexus.compile.ro_schema.decompile_from_tree.call(null,key)),(enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.compile.ro_schema.decompile_from_tree.call(null,value))]);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree)));
} else {
if((!(cljs.core.coll_QMARK_(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree))))){
return new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree);
} else {
return null;
}
}
}
});
enigma_nexus.compile.ro_schema.compile_to_tree = (function enigma_nexus$compile$ro_schema$compile_to_tree(data){
if((!(cljs.core.coll_QMARK_(data)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"tree","tree",-196312028),(((data instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(data):data),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.cell_text_input], null)], null);
} else {
if(cljs.core.vector_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.expand_collapse], null),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return (enigma_nexus.compile.ro_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.compile_to_tree.call(null,item));
}),data))], null);
} else {
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.expand_collapse], null),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62941){
var vec__62942 = p__62941;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62942,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62942,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-key","map-key",1899483661),new cljs.core.Keyword(null,"tree","tree",-196312028),(((key instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(key):key),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.cell_text_input,enigma_nexus.tree.ro.skins.expand_collapse], null)], null),(enigma_nexus.compile.ro_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.compile_to_tree.call(null,item))]);
}),data))], null);
} else {
return null;
}
}
}
});
enigma_nexus.compile.ro_schema.compile_to_tree_table = (function enigma_nexus$compile$ro_schema$compile_to_tree_table(data){
if((!(cljs.core.coll_QMARK_(data)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"tree","tree",-196312028),(((data instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(data):data),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.cell_text_input], null)], null);
} else {
if(((cljs.core.vector_QMARK_(data)) && ((cljs.core.count(data) < (2))))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.expand_collapse], null),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return (enigma_nexus.compile.ro_schema.compile_to_tree_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_tree_table.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.compile_to_tree_table.call(null,item));
}),data))], null);
} else {
if(cljs.core.vector_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"component-hint","component-hint",-1558846335),"table-in-tree",new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),null,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.table_in_tree], null),new cljs.core.Keyword(null,"tree","tree",-196312028),enigma_nexus.compile.rw_schema.compile_to_table(data)], null);
} else {
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.expand_collapse], null),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62945){
var vec__62946 = p__62945;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62946,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62946,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-key","map-key",1899483661),new cljs.core.Keyword(null,"tree","tree",-196312028),(((key instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(key):key),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.cell_text_input,enigma_nexus.tree.ro.skins.expand_collapse], null)], null),(enigma_nexus.compile.ro_schema.compile_to_tree_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_tree_table.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.compile_to_tree_table.call(null,item))]);
}),data))], null);
} else {
return null;
}
}
}
}
});

//# sourceMappingURL=enigma_nexus.compile.ro_schema.js.map
