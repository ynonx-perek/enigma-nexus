goog.provide('enigma_nexus.table.tabs');
enigma_nexus.table.tabs.add_new_tab = (function enigma_nexus$table$tabs$add_new_tab(row_count,column_count){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-cell",new cljs.core.Keyword(null,"content","content",15833224),"New Tab",new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.skins.ticket_header_text,enigma_nexus.tabs.skins.active_tab_indication], null)], null),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583(s__60584){
return (new cljs.core.LazySeq(null,(function (){
var s__60584__$1 = s__60584;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60584__$1);
if(temp__5804__auto__){
var s__60584__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60584__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60584__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60586 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60585 = (0);
while(true){
if((i__60585 < size__5519__auto__)){
var row_index = cljs.core._nth(c__5518__auto__,i__60585);
cljs.core.chunk_append(b__60586,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60585,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587(s__60588){
return (new cljs.core.LazySeq(null,((function (i__60585,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60588__$1 = s__60588;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__60588__$1);
if(temp__5804__auto____$1){
var s__60588__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60588__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60588__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60590 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60589 = (0);
while(true){
if((i__60589 < size__5519__auto____$1)){
var column_index = cljs.core._nth(c__5518__auto____$1,i__60589);
cljs.core.chunk_append(b__60590,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60589,i__60585,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60591(s__60592){
return (new cljs.core.LazySeq(null,((function (i__60589,i__60585,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60592__$1 = s__60592;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__60592__$1);
if(temp__5804__auto____$2){
var s__60592__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60592__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__60592__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__60594 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__60593 = (0);
while(true){
if((i__60593 < size__5519__auto____$2)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$2,i__60593);
cljs.core.chunk_append(b__60594,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60593,i__60589,i__60585,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__60594,s__60592__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60591_$_iter__60595(s__60596){
return (new cljs.core.LazySeq(null,((function (i__60593,i__60589,i__60585,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__60594,s__60592__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60596__$1 = s__60596;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60596__$1);
if(temp__5804__auto____$3){
var s__60596__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60596__$2)){
var c__5518__auto____$3 = cljs.core.chunk_first(s__60596__$2);
var size__5519__auto____$3 = cljs.core.count(c__5518__auto____$3);
var b__60598 = cljs.core.chunk_buffer(size__5519__auto____$3);
if((function (){var i__60597 = (0);
while(true){
if((i__60597 < size__5519__auto____$3)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$3,i__60597);
cljs.core.chunk_append(b__60598,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60643 = (i__60597 + (1));
i__60597 = G__60643;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60598),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60591_$_iter__60595(cljs.core.chunk_rest(s__60596__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60598),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60596__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60591_$_iter__60595(cljs.core.rest(s__60596__$2)));
}
} else {
return null;
}
break;
}
});})(i__60593,i__60589,i__60585,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__60594,s__60592__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60593,i__60589,i__60585,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__60594,s__60592__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__60644 = (i__60593 + (1));
i__60593 = G__60644;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60594),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60591(cljs.core.chunk_rest(s__60592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60594),null);
}
} else {
var row_index__$1 = cljs.core.first(s__60592__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60589,i__60585,row_index__$1,s__60592__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60591_$_iter__60599(s__60600){
return (new cljs.core.LazySeq(null,((function (i__60589,i__60585,row_index__$1,s__60592__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60600__$1 = s__60600;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60600__$1);
if(temp__5804__auto____$3){
var s__60600__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60600__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__60600__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__60602 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__60601 = (0);
while(true){
if((i__60601 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__60601);
cljs.core.chunk_append(b__60602,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60645 = (i__60601 + (1));
i__60601 = G__60645;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60602),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60591_$_iter__60599(cljs.core.chunk_rest(s__60600__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60602),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60600__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60591_$_iter__60599(cljs.core.rest(s__60600__$2)));
}
} else {
return null;
}
break;
}
});})(i__60589,i__60585,row_index__$1,s__60592__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60589,i__60585,row_index__$1,s__60592__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60591(cljs.core.rest(s__60592__$2)));
}
} else {
return null;
}
break;
}
});})(i__60589,i__60585,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60589,i__60585,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60590,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__60646 = (i__60589 + (1));
i__60589 = G__60646;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60590),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587(cljs.core.chunk_rest(s__60588__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60590),null);
}
} else {
var column_index = cljs.core.first(s__60588__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60585,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60603(s__60604){
return (new cljs.core.LazySeq(null,((function (i__60585,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60604__$1 = s__60604;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__60604__$1);
if(temp__5804__auto____$2){
var s__60604__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60604__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60604__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60606 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60605 = (0);
while(true){
if((i__60605 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60605);
cljs.core.chunk_append(b__60606,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60605,i__60585,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60606,s__60604__$2,temp__5804__auto____$2,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60603_$_iter__60607(s__60608){
return (new cljs.core.LazySeq(null,((function (i__60605,i__60585,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60606,s__60604__$2,temp__5804__auto____$2,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60608__$1 = s__60608;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60608__$1);
if(temp__5804__auto____$3){
var s__60608__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60608__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__60608__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__60610 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__60609 = (0);
while(true){
if((i__60609 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__60609);
cljs.core.chunk_append(b__60610,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60647 = (i__60609 + (1));
i__60609 = G__60647;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60610),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60603_$_iter__60607(cljs.core.chunk_rest(s__60608__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60610),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60608__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60603_$_iter__60607(cljs.core.rest(s__60608__$2)));
}
} else {
return null;
}
break;
}
});})(i__60605,i__60585,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60606,s__60604__$2,temp__5804__auto____$2,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60605,i__60585,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60606,s__60604__$2,temp__5804__auto____$2,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__60648 = (i__60605 + (1));
i__60605 = G__60648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60606),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60603(cljs.core.chunk_rest(s__60604__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60606),null);
}
} else {
var row_index__$1 = cljs.core.first(s__60604__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60585,row_index__$1,s__60604__$2,temp__5804__auto____$2,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60603_$_iter__60611(s__60612){
return (new cljs.core.LazySeq(null,((function (i__60585,row_index__$1,s__60604__$2,temp__5804__auto____$2,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60612__$1 = s__60612;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60612__$1);
if(temp__5804__auto____$3){
var s__60612__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60612__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60612__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60614 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60613 = (0);
while(true){
if((i__60613 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60613);
cljs.core.chunk_append(b__60614,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60649 = (i__60613 + (1));
i__60613 = G__60649;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60614),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60603_$_iter__60611(cljs.core.chunk_rest(s__60612__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60614),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60612__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60603_$_iter__60611(cljs.core.rest(s__60612__$2)));
}
} else {
return null;
}
break;
}
});})(i__60585,row_index__$1,s__60604__$2,temp__5804__auto____$2,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60585,row_index__$1,s__60604__$2,temp__5804__auto____$2,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587_$_iter__60603(cljs.core.rest(s__60604__$2)));
}
} else {
return null;
}
break;
}
});})(i__60585,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60585,column_index,s__60588__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60587(cljs.core.rest(s__60588__$2)));
}
} else {
return null;
}
break;
}
});})(i__60585,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60585,row_index,c__5518__auto__,size__5519__auto__,b__60586,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null));

var G__60650 = (i__60585 + (1));
i__60585 = G__60650;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60586),enigma_nexus$table$tabs$add_new_tab_$_iter__60583(cljs.core.chunk_rest(s__60584__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60586),null);
}
} else {
var row_index = cljs.core.first(s__60584__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615(s__60616){
return (new cljs.core.LazySeq(null,(function (){
var s__60616__$1 = s__60616;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__60616__$1);
if(temp__5804__auto____$1){
var s__60616__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60616__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60616__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60618 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60617 = (0);
while(true){
if((i__60617 < size__5519__auto__)){
var column_index = cljs.core._nth(c__5518__auto__,i__60617);
cljs.core.chunk_append(b__60618,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60617,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60619(s__60620){
return (new cljs.core.LazySeq(null,((function (i__60617,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60620__$1 = s__60620;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__60620__$1);
if(temp__5804__auto____$2){
var s__60620__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60620__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60620__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60622 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60621 = (0);
while(true){
if((i__60621 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60621);
cljs.core.chunk_append(b__60622,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60621,i__60617,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60622,s__60620__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60619_$_iter__60623(s__60624){
return (new cljs.core.LazySeq(null,((function (i__60621,i__60617,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60622,s__60620__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60624__$1 = s__60624;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60624__$1);
if(temp__5804__auto____$3){
var s__60624__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60624__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__60624__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__60626 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__60625 = (0);
while(true){
if((i__60625 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__60625);
cljs.core.chunk_append(b__60626,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60651 = (i__60625 + (1));
i__60625 = G__60651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60626),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60619_$_iter__60623(cljs.core.chunk_rest(s__60624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60626),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60624__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60619_$_iter__60623(cljs.core.rest(s__60624__$2)));
}
} else {
return null;
}
break;
}
});})(i__60621,i__60617,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60622,s__60620__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60621,i__60617,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60622,s__60620__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__60652 = (i__60621 + (1));
i__60621 = G__60652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60622),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60619(cljs.core.chunk_rest(s__60620__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60622),null);
}
} else {
var row_index__$1 = cljs.core.first(s__60620__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60617,row_index__$1,s__60620__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60619_$_iter__60627(s__60628){
return (new cljs.core.LazySeq(null,((function (i__60617,row_index__$1,s__60620__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60628__$1 = s__60628;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60628__$1);
if(temp__5804__auto____$3){
var s__60628__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60628__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60628__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60630 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60629 = (0);
while(true){
if((i__60629 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60629);
cljs.core.chunk_append(b__60630,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60653 = (i__60629 + (1));
i__60629 = G__60653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60630),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60619_$_iter__60627(cljs.core.chunk_rest(s__60628__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60630),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60628__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60619_$_iter__60627(cljs.core.rest(s__60628__$2)));
}
} else {
return null;
}
break;
}
});})(i__60617,row_index__$1,s__60620__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60617,row_index__$1,s__60620__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60619(cljs.core.rest(s__60620__$2)));
}
} else {
return null;
}
break;
}
});})(i__60617,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60617,column_index,c__5518__auto__,size__5519__auto__,b__60618,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__60654 = (i__60617 + (1));
i__60617 = G__60654;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60618),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615(cljs.core.chunk_rest(s__60616__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60618),null);
}
} else {
var column_index = cljs.core.first(s__60616__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (column_index,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60631(s__60632){
return (new cljs.core.LazySeq(null,(function (){
var s__60632__$1 = s__60632;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__60632__$1);
if(temp__5804__auto____$2){
var s__60632__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60632__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60632__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60634 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60633 = (0);
while(true){
if((i__60633 < size__5519__auto__)){
var row_index__$1 = cljs.core._nth(c__5518__auto__,i__60633);
cljs.core.chunk_append(b__60634,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60633,row_index__$1,c__5518__auto__,size__5519__auto__,b__60634,s__60632__$2,temp__5804__auto____$2,column_index,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60631_$_iter__60635(s__60636){
return (new cljs.core.LazySeq(null,((function (i__60633,row_index__$1,c__5518__auto__,size__5519__auto__,b__60634,s__60632__$2,temp__5804__auto____$2,column_index,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function (){
var s__60636__$1 = s__60636;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60636__$1);
if(temp__5804__auto____$3){
var s__60636__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60636__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60636__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60638 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60637 = (0);
while(true){
if((i__60637 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60637);
cljs.core.chunk_append(b__60638,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60655 = (i__60637 + (1));
i__60637 = G__60655;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60638),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60631_$_iter__60635(cljs.core.chunk_rest(s__60636__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60638),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60636__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60631_$_iter__60635(cljs.core.rest(s__60636__$2)));
}
} else {
return null;
}
break;
}
});})(i__60633,row_index__$1,c__5518__auto__,size__5519__auto__,b__60634,s__60632__$2,temp__5804__auto____$2,column_index,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
,null,null));
});})(i__60633,row_index__$1,c__5518__auto__,size__5519__auto__,b__60634,s__60632__$2,temp__5804__auto____$2,column_index,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__60656 = (i__60633 + (1));
i__60633 = G__60656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60634),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60631(cljs.core.chunk_rest(s__60632__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60634),null);
}
} else {
var row_index__$1 = cljs.core.first(s__60632__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index__$1,s__60632__$2,temp__5804__auto____$2,column_index,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__){
return (function enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60631_$_iter__60639(s__60640){
return (new cljs.core.LazySeq(null,(function (){
var s__60640__$1 = s__60640;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60640__$1);
if(temp__5804__auto____$3){
var s__60640__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60640__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60640__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60642 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60641 = (0);
while(true){
if((i__60641 < size__5519__auto__)){
var column_index__$1 = cljs.core._nth(c__5518__auto__,i__60641);
cljs.core.chunk_append(b__60642,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60657 = (i__60641 + (1));
i__60641 = G__60657;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60642),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60631_$_iter__60639(cljs.core.chunk_rest(s__60640__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60642),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60640__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60631_$_iter__60639(cljs.core.rest(s__60640__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index__$1,s__60632__$2,temp__5804__auto____$2,column_index,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615_$_iter__60631(cljs.core.rest(s__60632__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(column_index,s__60616__$2,temp__5804__auto____$1,row_index,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$table$tabs$add_new_tab_$_iter__60583_$_iter__60615(cljs.core.rest(s__60616__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index,s__60584__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null),enigma_nexus$table$tabs$add_new_tab_$_iter__60583(cljs.core.rest(s__60584__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(row_count));
})())], null));
});

//# sourceMappingURL=enigma_nexus.table.tabs.js.map
