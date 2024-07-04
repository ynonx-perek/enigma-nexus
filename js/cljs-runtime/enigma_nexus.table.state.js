goog.provide('enigma_nexus.table.state');
enigma_nexus.table.state.change_selection_at = (function enigma_nexus$table$state$change_selection_at(table_data_STAR_,row_index,column_index,new_value,column_count){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(table_data_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),column_index,new cljs.core.Keyword(null,"content","content",15833224)], null),new_value);

return cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__5520__auto__ = (function enigma_nexus$table$state$change_selection_at_$_iter__68216(s__68217){
return (new cljs.core.LazySeq(null,(function (){
var s__68217__$1 = s__68217;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__68217__$1);
if(temp__5804__auto__){
var s__68217__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68217__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__68217__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__68219 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__68218 = (0);
while(true){
if((i__68218 < size__5519__auto__)){
var c = cljs.core._nth(c__5518__auto__,i__68218);
cljs.core.chunk_append(b__68219,(function (){var on_cascade = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(table_data_STAR_),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),c,new cljs.core.Keyword(null,"on-cascade","on-cascade",-177099510)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.identity;
}
})();
return (on_cascade.cljs$core$IFn$_invoke$arity$6 ? on_cascade.cljs$core$IFn$_invoke$arity$6(table_data_STAR_,row_index,column_index,new_value,row_index,c) : on_cascade.call(null,table_data_STAR_,row_index,column_index,new_value,row_index,c));
})());

var G__68243 = (i__68218 + (1));
i__68218 = G__68243;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68219),enigma_nexus$table$state$change_selection_at_$_iter__68216(cljs.core.chunk_rest(s__68217__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68219),null);
}
} else {
var c = cljs.core.first(s__68217__$2);
return cljs.core.cons((function (){var on_cascade = (function (){var or__5043__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(table_data_STAR_),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288),c,new cljs.core.Keyword(null,"on-cascade","on-cascade",-177099510)], null));
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.identity;
}
})();
return (on_cascade.cljs$core$IFn$_invoke$arity$6 ? on_cascade.cljs$core$IFn$_invoke$arity$6(table_data_STAR_,row_index,column_index,new_value,row_index,c) : on_cascade.call(null,table_data_STAR_,row_index,column_index,new_value,row_index,c));
})(),enigma_nexus$table$state$change_selection_at_$_iter__68216(cljs.core.rest(s__68217__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((column_index + (1)),(column_count - (1))));
})());
});
enigma_nexus.table.state.delete_nth = (function enigma_nexus$table$state$delete_nth(array,index){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take.cljs$core$IFn$_invoke$arity$2(index,array),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((index + (1)),array)));
});
enigma_nexus.table.state.delete_row_BANG_ = (function enigma_nexus$table$state$delete_row_BANG_(table_data_STAR_,row_index){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_data_STAR_,(function (table_data){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(table_data,new cljs.core.Keyword(null,"rows","rows",850049680),enigma_nexus.table.state.delete_nth(new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(table_data),row_index));
}));
});
enigma_nexus.table.state.set_row_indicators = (function enigma_nexus$table$state$set_row_indicators(table_data_STAR_,row_index,indicator){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_data_STAR_,(function (table_data){
var row_cells = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288)], null));
var row_with_indicators = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (cell){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"indicators","indicators",1312373003),(function (p1__68225_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = p1__68225_SHARP_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),indicator);
}));
}),row_cells));
return cljs.core.assoc_in(table_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288)], null),row_with_indicators);
}));
});
enigma_nexus.table.state.clear_row_indicators = (function enigma_nexus$table$state$clear_row_indicators(table_data_STAR_,row_index,indicator){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_data_STAR_,(function (table_data){
var row = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(table_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288)], null));
var row_with_indicators = cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (m){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword(null,"indicators","indicators",1312373003),(function (p1__68226_SHARP_){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = p1__68226_SHARP_;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),indicator);
}));
}),row));
return cljs.core.assoc_in(table_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index,new cljs.core.Keyword(null,"columns","columns",1998437288)], null),row_with_indicators);
}));
});
enigma_nexus.table.state.duplicate_row_BANG_ = (function enigma_nexus$table$state$duplicate_row_BANG_(table_STAR_,row_index){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_STAR_,(function (state){
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(state);
var row_to_duplicate = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rows","rows",850049680),row_index], null));
var copy_of_row_with_new_id = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row_to_duplicate,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
var new_row = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(copy_of_row_with_new_id,new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__68232_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__68232_SHARP_,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
}),new cljs.core.Keyword(null,"columns","columns",1998437288).cljs$core$IFn$_invoke$arity$1(copy_of_row_with_new_id))));
var vec__68233 = cljs.core.split_at((row_index + (1)),rows);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68233,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68233,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_row], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))));
}));
});
enigma_nexus.table.state.new_row_BANG_ = (function enigma_nexus$table$state$new_row_BANG_(table_STAR_,row_index,row_template){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_STAR_,(function (state){
var rows = new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(state);
var vec__68236 = cljs.core.split_at((row_index + (1)),rows);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68236,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68236,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(l,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_template], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([r], 0))));
}));
});
enigma_nexus.table.state.leaf_add_row_from_template = (function enigma_nexus$table$state$leaf_add_row_from_template(table_data_STAR_,row_index,column_index,template_name){
var template = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(table_data_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-templates","row-templates",-852911039),template_name], null));
return (function (e){
e.stopPropagation();

return enigma_nexus.table.state.new_row_BANG_(table_data_STAR_,row_index,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(template,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));
});
});
enigma_nexus.table.state.set_column_indicator = (function enigma_nexus$table$state$set_column_indicator(table_data_STAR_,column_index,indicator){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_data_STAR_,(function (table_data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(table_data,new cljs.core.Keyword(null,"rows","rows",850049680),(function (rows){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"columns","columns",1998437288),(function (columns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null),(function (indicators){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = indicators;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),indicator);
}));
}));
}),rows));
}));
}));
});
enigma_nexus.table.state.clear_column_indicator = (function enigma_nexus$table$state$clear_column_indicator(table_data_STAR_,column_index,indicator){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_data_STAR_,(function (table_data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(table_data,new cljs.core.Keyword(null,"rows","rows",850049680),(function (rows){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"columns","columns",1998437288),(function (columns){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(columns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_index,new cljs.core.Keyword(null,"indicators","indicators",1312373003)], null),(function (indicators){
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2((function (){var or__5043__auto__ = indicators;
if(cljs.core.truth_(or__5043__auto__)){
return or__5043__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),indicator);
}));
}));
}),rows));
}));
}));
});
enigma_nexus.table.state.add_column_from_template = (function enigma_nexus$table$state$add_column_from_template(table_data_STAR_,row_index,column_index,template_name){
return true;
});
enigma_nexus.table.state.duplicate_column_BANG_ = (function enigma_nexus$table$state$duplicate_column_BANG_(table_data_STAR_,column_index){
return true;
});
enigma_nexus.table.state.add_row_from_template = (function enigma_nexus$table$state$add_row_from_template(table_data_STAR_,row_index,column_index,template_name){
return true;
});
enigma_nexus.table.state.delete_column_BANG_ = (function enigma_nexus$table$state$delete_column_BANG_(table_data_STAR_,column_index){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(table_data_STAR_,(function (table_data){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(table_data,new cljs.core.Keyword(null,"rows","rows",850049680),(function (rows){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(row,new cljs.core.Keyword(null,"columns","columns",1998437288),(function (columns){
return enigma_nexus.table.state.delete_nth(columns,column_index);
}));
}),rows));
})),new cljs.core.Keyword(null,"row-templates","row-templates",-852911039),(function (templates){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__68239){
var vec__68240 = p__68239;
var template_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68240,(0),null);
var template_object = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68240,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [template_name,cljs.core.update.cljs$core$IFn$_invoke$arity$3(template_object,new cljs.core.Keyword(null,"columns","columns",1998437288),(function (columns){
return enigma_nexus.table.state.delete_nth(columns,column_index);
}))], null);
}),templates));
}));
}));
});
enigma_nexus.table.state.create_column_menu = (function enigma_nexus$table$state$create_column_menu(table_data_STAR_,row_index,column_index){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.kebab], null),new cljs.core.Keyword(null,"class","class",-2030961996),"default-cell-menu",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"default-cell-menu-expanded",new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator-css","separator-css",559201360),"menu-separator"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.plus], null),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-item-icon",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"menu-plus-expanded",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Container",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(enigma_nexus.table.state.add_column_from_template,table_data_STAR_,row_index,column_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Container"], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Version",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(enigma_nexus.table.state.add_column_from_template,table_data_STAR_,row_index,column_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Version"], 0))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.duplicate], null),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-item-icon",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(enigma_nexus.table.state.duplicate_column_BANG_,table_data_STAR_,column_index);
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.trash], null),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-item-icon",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(enigma_nexus.table.state.set_column_indicator,table_data_STAR_,column_index,new cljs.core.Keyword(null,"column-danger","column-danger",37828479)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(enigma_nexus.table.state.clear_column_indicator,table_data_STAR_,column_index,new cljs.core.Keyword(null,"column-danger","column-danger",37828479)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return enigma_nexus.table.state.delete_column_BANG_(table_data_STAR_,column_index);
})], null)], null)], null)], null);
});
enigma_nexus.table.state.create_row_menu = (function enigma_nexus$table$state$create_row_menu(table_data_STAR_,row_index,column_index){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.kebab], null),new cljs.core.Keyword(null,"class","class",-2030961996),"default-cell-menu",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"default-cell-menu-expanded",new cljs.core.Keyword(null,"tree-options","tree-options",-1628159444),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator-css","separator-css",559201360),"menu-separator"], null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.plus], null),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-item-icon",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"menu-plus-expanded",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Container",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(enigma_nexus.table.state.add_row_from_template,table_data_STAR_,row_index,column_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Drivers"], 0))], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"value","value",305978217),"Version",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(enigma_nexus.table.state.add_row_from_template,table_data_STAR_,row_index,column_index,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tools"], 0))], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.duplicate], null),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-item-icon",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return cljs.core.partial.cljs$core$IFn$_invoke$arity$3(enigma_nexus.table.state.duplicate_column_BANG_,table_data_STAR_,column_index);
})], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.trash], null),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-item-icon",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(enigma_nexus.table.state.set_row_indicators,table_data_STAR_,row_index,new cljs.core.Keyword(null,"danger","danger",-624338030)),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(enigma_nexus.table.state.clear_row_indicators,table_data_STAR_,row_index,new cljs.core.Keyword(null,"danger","danger",-624338030)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
e.stopPropagation();

return enigma_nexus.table.state.delete_row_BANG_(table_data_STAR_,row_index);
})], null)], null)], null)], null);
});
enigma_nexus.table.state.create_header_menu = (function enigma_nexus$table$state$create_header_menu(table_data_STAR_,row_index,column_index){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.kebab], null),new cljs.core.Keyword(null,"class","class",-2030961996),"default-cell-menu",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"default-cell-menu-expanded",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.icons.plus], null),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-item-icon",new cljs.core.Keyword(null,"expanded-class","expanded-class",1084067344),"menu-plus-expanded",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.Keyword(null,"nodes","nodes",-2099585805),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),"Drivers",new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),enigma_nexus.table.state.leaf_add_row_from_template(table_data_STAR_,row_index,column_index,"Drivers")], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"value","value",305978217),"Images",new cljs.core.Keyword(null,"class","class",-2030961996),"text-menu-item",new cljs.core.Keyword(null,"events","events",1792552201),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),enigma_nexus.table.state.leaf_add_row_from_template(table_data_STAR_,row_index,column_index,"Images")], null)], null)], null)], null)], null)], null);
});
enigma_nexus.table.state.__console_log = (function enigma_nexus$table$state$__console_log(msg){
return console.log(cljs.core.clj__GT_js(msg));
});

//# sourceMappingURL=enigma_nexus.table.state.js.map
