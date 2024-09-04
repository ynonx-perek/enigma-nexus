goog.provide('enigma_nexus.tabs.state');
enigma_nexus.tabs.state.add_new_tab = (function enigma_nexus$tabs$state$add_new_tab(multi_tab_table_STAR_,row_count,column_count){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(multi_tab_table_STAR_,cljs.core.conj,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-cell",new cljs.core.Keyword(null,"content","content",15833224),"New Tab",new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.skins.ticket_header_text], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293(s__70294){
return (new cljs.core.LazySeq(null,(function (){
var s__70294__$1 = s__70294;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__70294__$1);
if(temp__5804__auto__){
var s__70294__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70294__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70294__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70296 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70295 = (0);
while(true){
if((i__70295 < size__5519__auto__)){
var row_index = cljs.core._nth(c__5518__auto__,i__70295);
cljs.core.chunk_append(b__70296,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70295,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311(s__70312){
return (new cljs.core.LazySeq(null,((function (i__70295,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70312__$1 = s__70312;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__70312__$1);
if(temp__5804__auto____$1){
var s__70312__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70312__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70312__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70314 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70313 = (0);
while(true){
if((i__70313 < size__5519__auto____$1)){
var column_index = cljs.core._nth(c__5518__auto____$1,i__70313);
cljs.core.chunk_append(b__70314,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70313,i__70295,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70347(s__70348){
return (new cljs.core.LazySeq(null,((function (i__70313,i__70295,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70348__$1 = s__70348;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__70348__$1);
if(temp__5804__auto____$2){
var s__70348__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__70348__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__70348__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__70350 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__70349 = (0);
while(true){
if((i__70349 < size__5519__auto____$2)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$2,i__70349);
cljs.core.chunk_append(b__70350,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70349,i__70313,i__70295,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__70350,s__70348__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70347_$_iter__70371(s__70372){
return (new cljs.core.LazySeq(null,((function (i__70349,i__70313,i__70295,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__70350,s__70348__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70372__$1 = s__70372;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70372__$1);
if(temp__5804__auto____$3){
var s__70372__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70372__$2)){
var c__5518__auto____$3 = cljs.core.chunk_first(s__70372__$2);
var size__5519__auto____$3 = cljs.core.count(c__5518__auto____$3);
var b__70374 = cljs.core.chunk_buffer(size__5519__auto____$3);
if((function (){var i__70373 = (0);
while(true){
if((i__70373 < size__5519__auto____$3)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$3,i__70373);
cljs.core.chunk_append(b__70374,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70778 = (i__70373 + (1));
i__70373 = G__70778;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70374),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70347_$_iter__70371(cljs.core.chunk_rest(s__70372__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70374),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70372__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70347_$_iter__70371(cljs.core.rest(s__70372__$2)));
}
} else {
return null;
}
break;
}
});})(i__70349,i__70313,i__70295,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__70350,s__70348__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70349,i__70313,i__70295,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__70350,s__70348__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__70780 = (i__70349 + (1));
i__70349 = G__70780;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70350),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70347(cljs.core.chunk_rest(s__70348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70350),null);
}
} else {
var row_index__$1 = cljs.core.first(s__70348__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70313,i__70295,row_index__$1,s__70348__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70347_$_iter__70383(s__70384){
return (new cljs.core.LazySeq(null,((function (i__70313,i__70295,row_index__$1,s__70348__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70384__$1 = s__70384;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70384__$1);
if(temp__5804__auto____$3){
var s__70384__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70384__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__70384__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__70386 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__70385 = (0);
while(true){
if((i__70385 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__70385);
cljs.core.chunk_append(b__70386,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70796 = (i__70385 + (1));
i__70385 = G__70796;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70386),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70347_$_iter__70383(cljs.core.chunk_rest(s__70384__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70386),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70384__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70347_$_iter__70383(cljs.core.rest(s__70384__$2)));
}
} else {
return null;
}
break;
}
});})(i__70313,i__70295,row_index__$1,s__70348__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70313,i__70295,row_index__$1,s__70348__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70347(cljs.core.rest(s__70348__$2)));
}
} else {
return null;
}
break;
}
});})(i__70313,i__70295,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70313,i__70295,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70314,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__70816 = (i__70313 + (1));
i__70313 = G__70816;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70314),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311(cljs.core.chunk_rest(s__70312__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70314),null);
}
} else {
var column_index = cljs.core.first(s__70312__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70295,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70424(s__70425){
return (new cljs.core.LazySeq(null,((function (i__70295,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70425__$1 = s__70425;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__70425__$1);
if(temp__5804__auto____$2){
var s__70425__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__70425__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70425__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70427 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70426 = (0);
while(true){
if((i__70426 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70426);
cljs.core.chunk_append(b__70427,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70426,i__70295,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70427,s__70425__$2,temp__5804__auto____$2,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70424_$_iter__70430(s__70431){
return (new cljs.core.LazySeq(null,((function (i__70426,i__70295,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70427,s__70425__$2,temp__5804__auto____$2,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70431__$1 = s__70431;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70431__$1);
if(temp__5804__auto____$3){
var s__70431__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70431__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__70431__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__70433 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__70432 = (0);
while(true){
if((i__70432 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__70432);
cljs.core.chunk_append(b__70433,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70829 = (i__70432 + (1));
i__70432 = G__70829;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70433),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70424_$_iter__70430(cljs.core.chunk_rest(s__70431__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70433),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70431__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70424_$_iter__70430(cljs.core.rest(s__70431__$2)));
}
} else {
return null;
}
break;
}
});})(i__70426,i__70295,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70427,s__70425__$2,temp__5804__auto____$2,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70426,i__70295,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70427,s__70425__$2,temp__5804__auto____$2,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__70830 = (i__70426 + (1));
i__70426 = G__70830;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70427),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70424(cljs.core.chunk_rest(s__70425__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70427),null);
}
} else {
var row_index__$1 = cljs.core.first(s__70425__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70295,row_index__$1,s__70425__$2,temp__5804__auto____$2,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70424_$_iter__70466(s__70467){
return (new cljs.core.LazySeq(null,((function (i__70295,row_index__$1,s__70425__$2,temp__5804__auto____$2,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70467__$1 = s__70467;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70467__$1);
if(temp__5804__auto____$3){
var s__70467__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70467__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70467__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70469 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70468 = (0);
while(true){
if((i__70468 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70468);
cljs.core.chunk_append(b__70469,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70834 = (i__70468 + (1));
i__70468 = G__70834;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70469),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70424_$_iter__70466(cljs.core.chunk_rest(s__70467__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70469),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70467__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70424_$_iter__70466(cljs.core.rest(s__70467__$2)));
}
} else {
return null;
}
break;
}
});})(i__70295,row_index__$1,s__70425__$2,temp__5804__auto____$2,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70295,row_index__$1,s__70425__$2,temp__5804__auto____$2,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311_$_iter__70424(cljs.core.rest(s__70425__$2)));
}
} else {
return null;
}
break;
}
});})(i__70295,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70295,column_index,s__70312__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70311(cljs.core.rest(s__70312__$2)));
}
} else {
return null;
}
break;
}
});})(i__70295,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70295,row_index,c__5518__auto__,size__5519__auto__,b__70296,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null));

var G__70858 = (i__70295 + (1));
i__70295 = G__70858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70296),enigma_nexus$tabs$state$add_new_tab_$_iter__70293(cljs.core.chunk_rest(s__70294__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70296),null);
}
} else {
var row_index = cljs.core.first(s__70294__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477(s__70478){
return (new cljs.core.LazySeq(null,(function (){
var s__70478__$1 = s__70478;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__70478__$1);
if(temp__5804__auto____$1){
var s__70478__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70478__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70478__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70480 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70479 = (0);
while(true){
if((i__70479 < size__5519__auto__)){
var column_index = cljs.core._nth(c__5518__auto__,i__70479);
cljs.core.chunk_append(b__70480,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70479,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70501(s__70502){
return (new cljs.core.LazySeq(null,((function (i__70479,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70502__$1 = s__70502;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__70502__$1);
if(temp__5804__auto____$2){
var s__70502__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__70502__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70502__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70504 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70503 = (0);
while(true){
if((i__70503 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70503);
cljs.core.chunk_append(b__70504,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70503,i__70479,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70504,s__70502__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70501_$_iter__70523(s__70524){
return (new cljs.core.LazySeq(null,((function (i__70503,i__70479,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70504,s__70502__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70524__$1 = s__70524;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70524__$1);
if(temp__5804__auto____$3){
var s__70524__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70524__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__70524__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__70526 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__70525 = (0);
while(true){
if((i__70525 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__70525);
cljs.core.chunk_append(b__70526,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70882 = (i__70525 + (1));
i__70525 = G__70882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70526),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70501_$_iter__70523(cljs.core.chunk_rest(s__70524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70526),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70524__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70501_$_iter__70523(cljs.core.rest(s__70524__$2)));
}
} else {
return null;
}
break;
}
});})(i__70503,i__70479,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70504,s__70502__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70503,i__70479,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70504,s__70502__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__70883 = (i__70503 + (1));
i__70503 = G__70883;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70504),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70501(cljs.core.chunk_rest(s__70502__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70504),null);
}
} else {
var row_index__$1 = cljs.core.first(s__70502__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70479,row_index__$1,s__70502__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70501_$_iter__70553(s__70554){
return (new cljs.core.LazySeq(null,((function (i__70479,row_index__$1,s__70502__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70554__$1 = s__70554;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70554__$1);
if(temp__5804__auto____$3){
var s__70554__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70554__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70554__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70556 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70555 = (0);
while(true){
if((i__70555 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70555);
cljs.core.chunk_append(b__70556,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70885 = (i__70555 + (1));
i__70555 = G__70885;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70556),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70501_$_iter__70553(cljs.core.chunk_rest(s__70554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70556),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70554__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70501_$_iter__70553(cljs.core.rest(s__70554__$2)));
}
} else {
return null;
}
break;
}
});})(i__70479,row_index__$1,s__70502__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70479,row_index__$1,s__70502__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70501(cljs.core.rest(s__70502__$2)));
}
} else {
return null;
}
break;
}
});})(i__70479,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70479,column_index,c__5518__auto__,size__5519__auto__,b__70480,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__70897 = (i__70479 + (1));
i__70479 = G__70897;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70480),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477(cljs.core.chunk_rest(s__70478__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70480),null);
}
} else {
var column_index = cljs.core.first(s__70478__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (column_index,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70634(s__70635){
return (new cljs.core.LazySeq(null,(function (){
var s__70635__$1 = s__70635;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__70635__$1);
if(temp__5804__auto____$2){
var s__70635__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__70635__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70635__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70637 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70636 = (0);
while(true){
if((i__70636 < size__5519__auto__)){
var row_index__$1 = cljs.core._nth(c__5518__auto__,i__70636);
cljs.core.chunk_append(b__70637,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70636,row_index__$1,c__5518__auto__,size__5519__auto__,b__70637,s__70635__$2,temp__5804__auto____$2,column_index,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70634_$_iter__70648(s__70649){
return (new cljs.core.LazySeq(null,((function (i__70636,row_index__$1,c__5518__auto__,size__5519__auto__,b__70637,s__70635__$2,temp__5804__auto____$2,column_index,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function (){
var s__70649__$1 = s__70649;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70649__$1);
if(temp__5804__auto____$3){
var s__70649__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70649__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70649__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70651 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70650 = (0);
while(true){
if((i__70650 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70650);
cljs.core.chunk_append(b__70651,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70904 = (i__70650 + (1));
i__70650 = G__70904;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70651),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70634_$_iter__70648(cljs.core.chunk_rest(s__70649__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70651),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70649__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70634_$_iter__70648(cljs.core.rest(s__70649__$2)));
}
} else {
return null;
}
break;
}
});})(i__70636,row_index__$1,c__5518__auto__,size__5519__auto__,b__70637,s__70635__$2,temp__5804__auto____$2,column_index,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
,null,null));
});})(i__70636,row_index__$1,c__5518__auto__,size__5519__auto__,b__70637,s__70635__$2,temp__5804__auto____$2,column_index,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__70905 = (i__70636 + (1));
i__70636 = G__70905;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70637),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70634(cljs.core.chunk_rest(s__70635__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70637),null);
}
} else {
var row_index__$1 = cljs.core.first(s__70635__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index__$1,s__70635__$2,temp__5804__auto____$2,column_index,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70634_$_iter__70678(s__70679){
return (new cljs.core.LazySeq(null,(function (){
var s__70679__$1 = s__70679;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70679__$1);
if(temp__5804__auto____$3){
var s__70679__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70679__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70679__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70681 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70680 = (0);
while(true){
if((i__70680 < size__5519__auto__)){
var column_index__$1 = cljs.core._nth(c__5518__auto__,i__70680);
cljs.core.chunk_append(b__70681,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70909 = (i__70680 + (1));
i__70680 = G__70909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70681),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70634_$_iter__70678(cljs.core.chunk_rest(s__70679__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70681),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70679__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70634_$_iter__70678(cljs.core.rest(s__70679__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index__$1,s__70635__$2,temp__5804__auto____$2,column_index,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477_$_iter__70634(cljs.core.rest(s__70635__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(column_index,s__70478__$2,temp__5804__auto____$1,row_index,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$add_new_tab_$_iter__70293_$_iter__70477(cljs.core.rest(s__70478__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index,s__70294__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__70293(cljs.core.rest(s__70294__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(row_count));
})())], null)));
});

//# sourceMappingURL=enigma_nexus.tabs.state.js.map
