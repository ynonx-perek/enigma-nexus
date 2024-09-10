goog.provide('enigma_nexus.compile.raw_schema');
enigma_nexus.compile.raw_schema.decompile_from_tree = (function enigma_nexus$compile$raw_schema$decompile_from_tree(tree){
var G__61516 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tree);
var G__61516__$1 = (((G__61516 instanceof cljs.core.Keyword))?G__61516.fqn:null);
switch (G__61516__$1) {
case "scalar":
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);

break;
case "map":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),(function (){var G__61521 = cljs.core.first(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(item));
return (enigma_nexus.compile.raw_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.raw_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(G__61521) : enigma_nexus.compile.raw_schema.decompile_from_tree.call(null,G__61521));
})()]);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree)));

break;
case "vector":
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
var G__61527 = cljs.core.first(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(item));
return (enigma_nexus.compile.raw_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.raw_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(G__61527) : enigma_nexus.compile.raw_schema.decompile_from_tree.call(null,G__61527));
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61516__$1)].join('')));

}
});
enigma_nexus.compile.raw_schema.compile_to_tree = (function enigma_nexus$compile$raw_schema$compile_to_tree(data){
if((!(cljs.core.coll_QMARK_(data)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"value","value",305978217),(((data instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(data):data),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input,enigma_nexus.tree.rw.skins.document_leaf], null)], null);
} else {
if(cljs.core.vector_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input], null),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),index,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"array-index","array-index",67273111),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(enigma_nexus.compile.raw_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.raw_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.raw_schema.compile_to_tree.call(null,item))], null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input,enigma_nexus.tree.rw.skins.expand_collapse], null)], null);
}),data))], null);
} else {
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input], null),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__61557){
var vec__61562 = p__61557;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61562,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61562,(1),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),(((key instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(key):key),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-key","map-key",1899483661),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(enigma_nexus.compile.raw_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.raw_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.raw_schema.compile_to_tree.call(null,item))], null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input,enigma_nexus.tree.rw.skins.expand_collapse], null)], null);
}),data))], null);
} else {
return null;
}
}
}
});
enigma_nexus.compile.raw_schema.compile_scalar_to_table = (function enigma_nexus$compile$raw_schema$compile_scalar_to_table(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((data instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.text_cell], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.text_cell], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
)], null)], null)], null)], null);
});
enigma_nexus.compile.raw_schema.compile_array_to_table = (function enigma_nexus$compile$raw_schema$compile_array_to_table(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core.vector_QMARK_(row))?new cljs.core.Keyword(null,"vector","vector",1902966158):new cljs.core.Keyword(null,"row-single","row-single",1320608053)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.table_in_table], null),new cljs.core.Keyword(null,"data","data",-232669377),(enigma_nexus.compile.raw_schema.compile_array_to_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.raw_schema.compile_array_to_table.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.compile.raw_schema.compile_array_to_table.call(null,value)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.table_in_table], null),new cljs.core.Keyword(null,"data","data",-232669377),(enigma_nexus.compile.raw_schema.compile_map_to_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.raw_schema.compile_map_to_table.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.compile.raw_schema.compile_map_to_table.call(null,value)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.text_cell], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.text_cell], null),new cljs.core.Keyword(null,"data","data",-232669377),value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);

}
}
}
}),((cljs.core.vector_QMARK_(row))?row:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null)))], null);
}),data)], null);
});
enigma_nexus.compile.raw_schema.decompile_array_columns = (function enigma_nexus$compile$raw_schema$decompile_array_columns(columns){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cell){
var G__61585 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell);
var G__61585__$1 = (((G__61585 instanceof cljs.core.Keyword))?G__61585.fqn:null);
switch (G__61585__$1) {
case "vector":
var G__61587 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cell);
return (enigma_nexus.compile.raw_schema.decompile_array_from_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.raw_schema.decompile_array_from_table.cljs$core$IFn$_invoke$arity$1(G__61587) : enigma_nexus.compile.raw_schema.decompile_array_from_table.call(null,G__61587));

break;
case "keyword":
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cell);

break;
case "scalar":
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cell);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61585__$1)].join('')));

}
}),columns);
});
enigma_nexus.compile.raw_schema.decompile_array_from_table = (function enigma_nexus$compile$raw_schema$decompile_array_from_table(tabledata){
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(tabledata);
console.log(cljs.core.clj__GT_js(rows));

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__61594){
var map__61595 = p__61594;
var map__61595__$1 = cljs.core.__destructure_map(map__61595);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61595__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61595__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__61596 = type;
var G__61596__$1 = (((G__61596 instanceof cljs.core.Keyword))?G__61596.fqn:null);
switch (G__61596__$1) {
case "vector":
return enigma_nexus.compile.raw_schema.decompile_array_columns(columns);

break;
case "row-single":
return cljs.core.first(enigma_nexus.compile.raw_schema.decompile_array_columns(columns));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61596__$1)].join('')));

}
}),rows);
});
enigma_nexus.compile.raw_schema.compile_set_to_table = (function enigma_nexus$compile$raw_schema$compile_set_to_table(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.text_cell], null),new cljs.core.Keyword(null,"data","data",-232669377),(((value instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(value):value
),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
}),data)], null)], null)], null);
});
enigma_nexus.compile.raw_schema.compile_map_to_table = (function enigma_nexus$compile$raw_schema$compile_map_to_table(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.text_cell], null),new cljs.core.Keyword(null,"data","data",-232669377),(((key instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(key):key
),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
}),cljs.core.keys(data))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.table_in_table], null),new cljs.core.Keyword(null,"data","data",-232669377),enigma_nexus.compile.raw_schema.compile_array_to_table(value),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.table_in_table], null),new cljs.core.Keyword(null,"data","data",-232669377),(enigma_nexus.compile.raw_schema.compile_map_to_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.raw_schema.compile_map_to_table.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.compile.raw_schema.compile_map_to_table.call(null,value)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.set_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.table_in_table], null),new cljs.core.Keyword(null,"data","data",-232669377),enigma_nexus.compile.raw_schema.compile_set_to_table(value),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.text_cell], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.raw_table.skins.text_cell], null),new cljs.core.Keyword(null,"data","data",-232669377),value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);

}
}
}
}
}),cljs.core.vals(data))], null)], null)], null);
});
enigma_nexus.compile.raw_schema.decompile_map_from_table = (function enigma_nexus$compile$raw_schema$decompile_map_from_table(tabledata){
var vec__61624 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(tabledata);
var keys_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61624,(0),null);
var values_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__61624,(1),null);
var keys = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(keys_row);
var values = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(values_row);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (key,value){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(key),(function (){var G__61632 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var G__61632__$1 = (((G__61632 instanceof cljs.core.Keyword))?G__61632.fqn:null);
switch (G__61632__$1) {
case "vector":
return enigma_nexus.compile.raw_schema.decompile_array_from_table(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value));

break;
case "map":
var G__61633 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value);
return (enigma_nexus.compile.raw_schema.decompile_map_from_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.raw_schema.decompile_map_from_table.cljs$core$IFn$_invoke$arity$1(G__61633) : enigma_nexus.compile.raw_schema.decompile_map_from_table.call(null,G__61633));

break;
case "scalar":
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value);

break;
case "keyword":
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61632__$1)].join('')));

}
})()]);
}),keys,values));
});
enigma_nexus.compile.raw_schema.compile_to_table = (function enigma_nexus$compile$raw_schema$compile_to_table(data){
if((!(cljs.core.coll_QMARK_(data)))){
return enigma_nexus.compile.raw_schema.compile_scalar_to_table(data);
} else {
if(cljs.core.vector_QMARK_(data)){
return enigma_nexus.compile.raw_schema.compile_array_to_table(data);
} else {
if(cljs.core.map_QMARK_(data)){
return enigma_nexus.compile.raw_schema.compile_map_to_table(data);
} else {
return null;
}
}
}
});
enigma_nexus.compile.raw_schema.decompile_from_table = (function enigma_nexus$compile$raw_schema$decompile_from_table(tabledata){
var G__61635 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tabledata);
var G__61635__$1 = (((G__61635 instanceof cljs.core.Keyword))?G__61635.fqn:null);
switch (G__61635__$1) {
case "scalar":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tabledata,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377),(0),new cljs.core.Keyword(null,"data","data",-232669377)], null));

break;
case "vector":
return enigma_nexus.compile.raw_schema.decompile_array_from_table(tabledata);

break;
case "map":
return enigma_nexus.compile.raw_schema.decompile_map_from_table(tabledata);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__61635__$1)].join('')));

}
});

//# sourceMappingURL=enigma_nexus.compile.raw_schema.js.map
