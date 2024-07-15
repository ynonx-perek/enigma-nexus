goog.provide('enigma_nexus.compile.rw_schema');
enigma_nexus.compile.rw_schema.decompile_from_tree = (function enigma_nexus$compile$rw_schema$decompile_from_tree(tree){
var G__62914 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tree);
var G__62914__$1 = (((G__62914 instanceof cljs.core.Keyword))?G__62914.fqn:null);
switch (G__62914__$1) {
case "scalar":
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(tree);

break;
case "map":
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),(function (){var G__62915 = cljs.core.first(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(item));
return (enigma_nexus.compile.rw_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.rw_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(G__62915) : enigma_nexus.compile.rw_schema.decompile_from_tree.call(null,G__62915));
})()]);
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree)));

break;
case "vector":
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (item){
var G__62916 = cljs.core.first(new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(item));
return (enigma_nexus.compile.rw_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.rw_schema.decompile_from_tree.cljs$core$IFn$_invoke$arity$1(G__62916) : enigma_nexus.compile.rw_schema.decompile_from_tree.call(null,G__62916));
}),new cljs.core.Keyword(null,"tree","tree",-196312028).cljs$core$IFn$_invoke$arity$1(tree));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62914__$1)].join('')));

}
});
enigma_nexus.compile.rw_schema.compile_to_tree = (function enigma_nexus$compile$rw_schema$compile_to_tree(data){
if((!(cljs.core.coll_QMARK_(data)))){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"value","value",305978217),(((data instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(data):data),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input,enigma_nexus.tree.rw.skins.document_leaf], null)], null);
} else {
if(cljs.core.vector_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input], null),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),index,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"array-index","array-index",67273111),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(enigma_nexus.compile.rw_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.rw_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.rw_schema.compile_to_tree.call(null,item))], null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input,enigma_nexus.tree.rw.skins.expand_collapse], null)], null);
}),data))], null);
} else {
if(cljs.core.map_QMARK_(data)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"expanded","expanded",-3020742),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input], null),new cljs.core.Keyword(null,"tree","tree",-196312028),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__62917){
var vec__62918 = p__62917;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62918,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62918,(1),null);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),(((key instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(key):key),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map-key","map-key",1899483661),new cljs.core.Keyword(null,"tree","tree",-196312028),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(enigma_nexus.compile.rw_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.rw_schema.compile_to_tree.cljs$core$IFn$_invoke$arity$1(item) : enigma_nexus.compile.rw_schema.compile_to_tree.call(null,item))], null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.rw.skins.cell_text_input,enigma_nexus.tree.rw.skins.expand_collapse], null)], null);
}),data))], null);
} else {
return null;
}
}
}
});
enigma_nexus.compile.rw_schema.compile_scalar_to_table = (function enigma_nexus$compile$rw_schema$compile_scalar_to_table(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((data instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"str","str",1089608819),new cljs.core.Keyword(null,"content","content",15833224),data,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
)], null)], null)], null)], null);
});
enigma_nexus.compile.rw_schema.compile_array_to_table = (function enigma_nexus$compile$rw_schema$compile_array_to_table(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (row){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core.vector_QMARK_(row))?new cljs.core.Keyword(null,"vector","vector",1902966158):new cljs.core.Keyword(null,"row-single","row-single",1320608053)),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),(enigma_nexus.compile.rw_schema.compile_array_to_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.rw_schema.compile_array_to_table.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.compile.rw_schema.compile_array_to_table.call(null,value)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),(enigma_nexus.compile.rw_schema.compile_map_to_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.rw_schema.compile_map_to_table.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.compile.rw_schema.compile_map_to_table.call(null,value)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);

}
}
}
}),((cljs.core.vector_QMARK_(row))?row:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row], null)))], null);
}),data)], null);
});
enigma_nexus.compile.rw_schema.decompile_array_columns = (function enigma_nexus$compile$rw_schema$decompile_array_columns(columns){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (cell){
var G__62921 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cell);
var G__62921__$1 = (((G__62921 instanceof cljs.core.Keyword))?G__62921.fqn:null);
switch (G__62921__$1) {
case "vector":
var G__62922 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cell);
return (enigma_nexus.compile.rw_schema.decompile_array_from_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.rw_schema.decompile_array_from_table.cljs$core$IFn$_invoke$arity$1(G__62922) : enigma_nexus.compile.rw_schema.decompile_array_from_table.call(null,G__62922));

break;
case "keyword":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cell);

break;
case "scalar":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cell);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62921__$1)].join('')));

}
}),columns);
});
enigma_nexus.compile.rw_schema.decompile_array_from_table = (function enigma_nexus$compile$rw_schema$decompile_array_from_table(tabledata){
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(tabledata);
console.log(cljs.core.clj__GT_js(rows));

return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__62923){
var map__62924 = p__62923;
var map__62924__$1 = cljs.core.__destructure_map(map__62924);
var columns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62924__$1,new cljs.core.Keyword(null,"columns","columns",1998437288));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__62924__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__62925 = type;
var G__62925__$1 = (((G__62925 instanceof cljs.core.Keyword))?G__62925.fqn:null);
switch (G__62925__$1) {
case "vector":
return enigma_nexus.compile.rw_schema.decompile_array_columns(columns);

break;
case "row-single":
return cljs.core.first(enigma_nexus.compile.rw_schema.decompile_array_columns(columns));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62925__$1)].join('')));

}
}),rows);
});
enigma_nexus.compile.rw_schema.compile_set_to_table = (function enigma_nexus$compile$rw_schema$compile_set_to_table(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),(((value instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(value):value
),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
}),data)], null)], null)], null);
});
enigma_nexus.compile.rw_schema.compile_map_to_table = (function enigma_nexus$compile$rw_schema$compile_map_to_table(data){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),(((key instanceof cljs.core.Keyword))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(key):key
),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
}),cljs.core.keys(data))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (value){
if(cljs.core.vector_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),enigma_nexus.compile.rw_schema.compile_array_to_table(value),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),(enigma_nexus.compile.rw_schema.compile_map_to_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.rw_schema.compile_map_to_table.cljs$core$IFn$_invoke$arity$1(value) : enigma_nexus.compile.rw_schema.compile_map_to_table.call(null,value)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if(cljs.core.set_QMARK_(value)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table], null),new cljs.core.Keyword(null,"content","content",15833224),enigma_nexus.compile.rw_schema.compile_set_to_table(value),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
if((value instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);
} else {
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.text_cell], null),new cljs.core.Keyword(null,"content","content",15833224),value,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"scalar","scalar",1611359571),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null);

}
}
}
}
}),cljs.core.vals(data))], null)], null)], null);
});
enigma_nexus.compile.rw_schema.decompile_map_from_table = (function enigma_nexus$compile$rw_schema$decompile_map_from_table(tabledata){
var vec__62926 = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(tabledata);
var keys_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62926,(0),null);
var values_row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__62926,(1),null);
var keys = new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(keys_row);
var values = new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(values_row);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (key,value){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(key),(function (){var G__62929 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(value);
var G__62929__$1 = (((G__62929 instanceof cljs.core.Keyword))?G__62929.fqn:null);
switch (G__62929__$1) {
case "vector":
return enigma_nexus.compile.rw_schema.decompile_array_from_table(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(value));

break;
case "map":
var G__62930 = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(value);
return (enigma_nexus.compile.rw_schema.decompile_map_from_table.cljs$core$IFn$_invoke$arity$1 ? enigma_nexus.compile.rw_schema.decompile_map_from_table.cljs$core$IFn$_invoke$arity$1(G__62930) : enigma_nexus.compile.rw_schema.decompile_map_from_table.call(null,G__62930));

break;
case "scalar":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(value);

break;
case "keyword":
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62929__$1)].join('')));

}
})()]);
}),keys,values));
});
enigma_nexus.compile.rw_schema.compile_to_table = (function enigma_nexus$compile$rw_schema$compile_to_table(data){
if((!(cljs.core.coll_QMARK_(data)))){
return enigma_nexus.compile.rw_schema.compile_scalar_to_table(data);
} else {
if(cljs.core.vector_QMARK_(data)){
return enigma_nexus.compile.rw_schema.compile_array_to_table(data);
} else {
if(cljs.core.map_QMARK_(data)){
return enigma_nexus.compile.rw_schema.compile_map_to_table(data);
} else {
return null;
}
}
}
});
enigma_nexus.compile.rw_schema.decompile_from_table = (function enigma_nexus$compile$rw_schema$decompile_from_table(tabledata){
var G__62931 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tabledata);
var G__62931__$1 = (((G__62931 instanceof cljs.core.Keyword))?G__62931.fqn:null);
switch (G__62931__$1) {
case "scalar":
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tabledata,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),(0),new cljs.core.Keyword(null,"columns","columns",1998437288),(0),new cljs.core.Keyword(null,"content","content",15833224)], null));

break;
case "vector":
return enigma_nexus.compile.rw_schema.decompile_array_from_table(tabledata);

break;
case "map":
return enigma_nexus.compile.rw_schema.decompile_map_from_table(tabledata);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__62931__$1)].join('')));

}
});
console.log(cljs.core.clj__GT_js(enigma_nexus.compile.rw_schema.decompile_from_table(enigma_nexus.compile.rw_schema.compile_to_table(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(20),(30)], null)], null)))));

//# sourceMappingURL=enigma_nexus.compile.rw_schema.js.map
