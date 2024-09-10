goog.provide('enigma_nexus.compile.ro_schema');
enigma_nexus.compile.ro_schema.decompile_from_tree = (function enigma_nexus$compile$ro_schema$decompile_from_tree(data){
if(cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
return (enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.decompile_from_tree.call(null,item));
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.map_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61522){
var vec__61524 = p__61522;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61524,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61524,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([(enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(key) : enigma_nexus.compile.ro_schema.decompile_from_tree.call(null,key)),(enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.compile.ro_schema.decompile_from_tree.call(null,value))]);
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data)));
} else {
if((!(cljs.core.coll_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))))){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data);
} else {
return null;
}
}
}
});
enigma_nexus.compile.ro_schema.compile_to_tree = (function enigma_nexus$compile$ro_schema$compile_to_tree(data){
if((!(cljs.core.coll_QMARK_(data)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.cell_text_input], null)], null);
} else {
if(cljs.core.vector_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.expand_collapse], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
return (enigma_nexus.compile.ro_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.compile_to_tree.call(null,item));
}),data)], null);
} else {
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.expand_collapse], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61539){
var vec__61540 = p__61539;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61540,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61540,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-key","map-key",1899483661),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.cell_text_input,enigma_nexus.tree.ro.skins.expand_collapse], null)], null),(enigma_nexus.compile.ro_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.compile_to_tree.call(null,item))]);
}),data))], null);
} else {
return null;
}
}
}
});
enigma_nexus.compile.ro_schema.compile_basic_to_table = (function enigma_nexus$compile$ro_schema$compile_basic_to_table(data){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null);
});
enigma_nexus.compile.ro_schema._compile_item_to_table = (function enigma_nexus$compile$ro_schema$_compile_item_to_table(data){
if(cljs.core.vector_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"data","data",-232669377),(enigma_nexus.compile.ro_schema.compile_to_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_table.cljs$core$IFn$_invoke$arity$1(data) : enigma_nexus.compile.ro_schema.compile_to_table.call(null,data)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"data","data",-232669377),(enigma_nexus.compile.ro_schema.compile_to_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_table.cljs$core$IFn$_invoke$arity$1(data) : enigma_nexus.compile.ro_schema.compile_to_table.call(null,data)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.set_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"data","data",-232669377),(enigma_nexus.compile.ro_schema.compile_to_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_table.cljs$core$IFn$_invoke$arity$1(data) : enigma_nexus.compile.ro_schema.compile_to_table.call(null,data)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())], null);

}
}
}
});
enigma_nexus.compile.ro_schema.compile_to_table = (function enigma_nexus$compile$ro_schema$compile_to_table(data){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null)], null),(((!(cljs.core.coll_QMARK_(data))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.compile.ro_schema._compile_item_to_table(data)], null)], null)], null)], null):((cljs.core.vector_QMARK_(data))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core.vector_QMARK_(row))?new cljs.core.Keyword(null,"vector","vector",1902966158):new cljs.core.Keyword(null,"row-single","row-single",1320608053)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(enigma_nexus.compile.ro_schema._compile_item_to_table,((cljs.core.vector_QMARK_(row))?row:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null)))], null);
}),data)], null):((cljs.core.map_QMARK_(data))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(enigma_nexus.compile.ro_schema.compile_basic_to_table,cljs.core.keys(data)),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(enigma_nexus.compile.ro_schema._compile_item_to_table,cljs.core.vals(data)),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null):((cljs.core.set_QMARK_(data))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(enigma_nexus.compile.ro_schema._compile_item_to_table,data),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null):null))))], 0));
});
enigma_nexus.compile.ro_schema.compile_to_tree_table = (function enigma_nexus$compile$ro_schema$compile_to_tree_table(data){
if((!(cljs.core.coll_QMARK_(data)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"data","data",-232669377),(((data instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(data):data),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.cell_text_input], null)], null);
} else {
if(((cljs.core.vector_QMARK_(data)) && ((cljs.core.count(data) < (2))))){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"traversing","traversing",-1471412243),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.expand_collapse], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return (enigma_nexus.compile.ro_schema.compile_to_tree_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_tree_table.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.compile_to_tree_table.call(null,item));
}),data))], null);
} else {
if(cljs.core.vector_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"component-hint","component-hint",-1558846335),"table-in-tree",new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),null,new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.table_in_tree], null),new cljs.core.Keyword(null,"traversing","traversing",-1471412243),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"data","data",-232669377),enigma_nexus.compile.ro_schema.compile_to_table(data)], null);
} else {
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"traversing","traversing",-1471412243),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.expand_collapse], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61588){
var vec__61591 = p__61588;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61591,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61591,(1),null);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-key","map-key",1899483661),new cljs.core.Keyword(null,"data","data",-232669377),(((key instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(key):key),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.ro.skins.cell_text_input,enigma_nexus.tree.ro.skins.expand_collapse], null)], null),(enigma_nexus.compile.ro_schema.compile_to_tree_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.compile_to_tree_table.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.ro_schema.compile_to_tree_table.call(null,item))]);
}),data))], null);
} else {
return null;
}
}
}
}
});
enigma_nexus.compile.ro_schema.decompile_array_columns = (function enigma_nexus$compile$ro_schema$decompile_array_columns(columns){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cell){
var G__61599 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell);
var G__61599__$1 = (((G__61599 instanceof cljs.core.Keyword))?G__61599.fqn:null);
switch (G__61599__$1) {
case "vector":
var G__61600 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cell);
return (enigma_nexus.compile.ro_schema.decompile_array_from_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.decompile_array_from_table.cljs$core$IFn$_invoke$arity$1(G__61600) : enigma_nexus.compile.ro_schema.decompile_array_from_table.call(null,G__61600));

break;
case "keyword":
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cell);

break;
case "scalar":
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cell);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61599__$1)].join('')));

}
}),columns);
});
enigma_nexus.compile.ro_schema.decompile_array_from_table = (function enigma_nexus$compile$ro_schema$decompile_array_from_table(tabledata){
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(tabledata);
console.log(cljs.core.clj__GT_js(rows));

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__61607){
var map__61608 = p__61607;
var map__61608__$1 = cljs.core.__destructure_map(map__61608);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61608__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61608__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__61609 = type;
var G__61609__$1 = (((G__61609 instanceof cljs.core.Keyword))?G__61609.fqn:null);
switch (G__61609__$1) {
case "vector":
return enigma_nexus.compile.ro_schema.decompile_array_columns(columns);

break;
case "row-single":
return cljs.core.first(enigma_nexus.compile.ro_schema.decompile_array_columns(columns));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61609__$1)].join('')));

}
}),rows);
});
enigma_nexus.compile.ro_schema.decompile_map_from_table = (function enigma_nexus$compile$ro_schema$decompile_map_from_table(tabledata){
var vec__61610 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(tabledata);
var keys_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61610,(0),null);
var values_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61610,(1),null);
var keys = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(keys_row);
var values = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(values_row);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (key,value){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(key),(function (){var G__61616 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var G__61616__$1 = (((G__61616 instanceof cljs.core.Keyword))?G__61616.fqn:null);
switch (G__61616__$1) {
case "vector":
return enigma_nexus.compile.ro_schema.decompile_array_from_table(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value));

break;
case "map":
var G__61621 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value);
return (enigma_nexus.compile.ro_schema.decompile_map_from_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.ro_schema.decompile_map_from_table.cljs$core$IFn$_invoke$arity$1(G__61621) : enigma_nexus.compile.ro_schema.decompile_map_from_table.call(null,G__61621));

break;
case "scalar":
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value);

break;
case "keyword":
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61616__$1)].join('')));

}
})()]);
}),keys,values));
});
enigma_nexus.compile.ro_schema.decompile_from_table = (function enigma_nexus$compile$ro_schema$decompile_from_table(tabledata){
var G__61627 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tabledata);
var G__61627__$1 = (((G__61627 instanceof cljs.core.Keyword))?G__61627.fqn:null);
switch (G__61627__$1) {
case "scalar":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tabledata,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null));

break;
case "vector":
return enigma_nexus.compile.ro_schema.decompile_array_from_table(tabledata);

break;
case "map":
return enigma_nexus.compile.ro_schema.decompile_map_from_table(tabledata);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61627__$1)].join('')));

}
});

//# sourceMappingURL=enigma_nexus.compile.ro_schema.js.map
