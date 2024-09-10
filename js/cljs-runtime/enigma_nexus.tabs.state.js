goog.provide('enigma_nexus.tabs.state');
enigma_nexus.tabs.state.add_new_tab = (function enigma_nexus$tabs$state$add_new_tab(multi_tab_table_STAR_,row_count,column_count){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(multi_tab_table_STAR_,cljs.core.conj,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-cell",new cljs.core.Keyword(null,"content","content",15833224),"New Tab",new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.skins.ticket_header_text], null)], null),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460(s__61461){
return (new cljs.core.LazySeq(null,(function (){
var s__61461__$1 = s__61461;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__61461__$1);
if(temp__5804__auto__){
var s__61461__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__61461__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__61461__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__61463 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__61462 = (0);
while(true){
if((i__61462 < size__5519__auto__)){
var row_index = cljs.core._nth(c__5518__auto__,i__61462);
cljs.core.chunk_append(b__61463,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61462,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468(s__61469){
return (new cljs.core.LazySeq(null,((function (i__61462,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61469__$1 = s__61469;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__61469__$1);
if(temp__5804__auto____$1){
var s__61469__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61469__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__61469__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__61471 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__61470 = (0);
while(true){
if((i__61470 < size__5519__auto____$1)){
var column_index = cljs.core._nth(c__5518__auto____$1,i__61470);
cljs.core.chunk_append(b__61471,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61470,i__61462,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61489(s__61490){
return (new cljs.core.LazySeq(null,((function (i__61470,i__61462,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61490__$1 = s__61490;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__61490__$1);
if(temp__5804__auto____$2){
var s__61490__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__61490__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__61490__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__61492 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__61491 = (0);
while(true){
if((i__61491 < size__5519__auto____$2)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$2,i__61491);
cljs.core.chunk_append(b__61492,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61491,i__61470,i__61462,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__61492,s__61490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61489_$_iter__61500(s__61501){
return (new cljs.core.LazySeq(null,((function (i__61491,i__61470,i__61462,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__61492,s__61490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61501__$1 = s__61501;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__61501__$1);
if(temp__5804__auto____$3){
var s__61501__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__61501__$2)){
var c__5518__auto____$3 = cljs.core.chunk_first(s__61501__$2);
var size__5519__auto____$3 = cljs.core.count(c__5518__auto____$3);
var b__61504 = cljs.core.chunk_buffer(size__5519__auto____$3);
if((function (){var i__61503 = (0);
while(true){
if((i__61503 < size__5519__auto____$3)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$3,i__61503);
cljs.core.chunk_append(b__61504,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__61687 = (i__61503 + (1));
i__61503 = G__61687;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61504),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61489_$_iter__61500(cljs.core.chunk_rest(s__61501__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61504),null);
}
} else {
var column_index__$1 = cljs.core.first(s__61501__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61489_$_iter__61500(cljs.core.rest(s__61501__$2)));
}
} else {
return null;
}
break;
}
});})(i__61491,i__61470,i__61462,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__61492,s__61490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61491,i__61470,i__61462,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__61492,s__61490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__61688 = (i__61491 + (1));
i__61491 = G__61688;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61492),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61489(cljs.core.chunk_rest(s__61490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61492),null);
}
} else {
var row_index__$1 = cljs.core.first(s__61490__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61470,i__61462,row_index__$1,s__61490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61489_$_iter__61511(s__61512){
return (new cljs.core.LazySeq(null,((function (i__61470,i__61462,row_index__$1,s__61490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61512__$1 = s__61512;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__61512__$1);
if(temp__5804__auto____$3){
var s__61512__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__61512__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__61512__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__61514 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__61513 = (0);
while(true){
if((i__61513 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__61513);
cljs.core.chunk_append(b__61514,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__61695 = (i__61513 + (1));
i__61513 = G__61695;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61514),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61489_$_iter__61511(cljs.core.chunk_rest(s__61512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61514),null);
}
} else {
var column_index__$1 = cljs.core.first(s__61512__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61489_$_iter__61511(cljs.core.rest(s__61512__$2)));
}
} else {
return null;
}
break;
}
});})(i__61470,i__61462,row_index__$1,s__61490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61470,i__61462,row_index__$1,s__61490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61489(cljs.core.rest(s__61490__$2)));
}
} else {
return null;
}
break;
}
});})(i__61470,i__61462,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61470,i__61462,column_index,c__5518__auto____$1,size__5519__auto____$1,b__61471,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__61697 = (i__61470 + (1));
i__61470 = G__61697;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61471),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468(cljs.core.chunk_rest(s__61469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61471),null);
}
} else {
var column_index = cljs.core.first(s__61469__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61462,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61558(s__61559){
return (new cljs.core.LazySeq(null,((function (i__61462,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61559__$1 = s__61559;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__61559__$1);
if(temp__5804__auto____$2){
var s__61559__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__61559__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__61559__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__61561 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__61560 = (0);
while(true){
if((i__61560 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__61560);
cljs.core.chunk_append(b__61561,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61560,i__61462,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__61561,s__61559__$2,temp__5804__auto____$2,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61558_$_iter__61567(s__61568){
return (new cljs.core.LazySeq(null,((function (i__61560,i__61462,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__61561,s__61559__$2,temp__5804__auto____$2,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61568__$1 = s__61568;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__61568__$1);
if(temp__5804__auto____$3){
var s__61568__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__61568__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__61568__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__61570 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__61569 = (0);
while(true){
if((i__61569 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__61569);
cljs.core.chunk_append(b__61570,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__61701 = (i__61569 + (1));
i__61569 = G__61701;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61570),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61558_$_iter__61567(cljs.core.chunk_rest(s__61568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61570),null);
}
} else {
var column_index__$1 = cljs.core.first(s__61568__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61558_$_iter__61567(cljs.core.rest(s__61568__$2)));
}
} else {
return null;
}
break;
}
});})(i__61560,i__61462,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__61561,s__61559__$2,temp__5804__auto____$2,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61560,i__61462,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__61561,s__61559__$2,temp__5804__auto____$2,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__61702 = (i__61560 + (1));
i__61560 = G__61702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61561),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61558(cljs.core.chunk_rest(s__61559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61561),null);
}
} else {
var row_index__$1 = cljs.core.first(s__61559__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61462,row_index__$1,s__61559__$2,temp__5804__auto____$2,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61558_$_iter__61577(s__61578){
return (new cljs.core.LazySeq(null,((function (i__61462,row_index__$1,s__61559__$2,temp__5804__auto____$2,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61578__$1 = s__61578;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__61578__$1);
if(temp__5804__auto____$3){
var s__61578__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__61578__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__61578__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__61580 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__61579 = (0);
while(true){
if((i__61579 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__61579);
cljs.core.chunk_append(b__61580,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__61705 = (i__61579 + (1));
i__61579 = G__61705;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61580),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61558_$_iter__61577(cljs.core.chunk_rest(s__61578__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61580),null);
}
} else {
var column_index__$1 = cljs.core.first(s__61578__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61558_$_iter__61577(cljs.core.rest(s__61578__$2)));
}
} else {
return null;
}
break;
}
});})(i__61462,row_index__$1,s__61559__$2,temp__5804__auto____$2,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61462,row_index__$1,s__61559__$2,temp__5804__auto____$2,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468_$_iter__61558(cljs.core.rest(s__61559__$2)));
}
} else {
return null;
}
break;
}
});})(i__61462,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61462,column_index,s__61469__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61468(cljs.core.rest(s__61469__$2)));
}
} else {
return null;
}
break;
}
});})(i__61462,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61462,row_index,c__5518__auto__,size__5519__auto__,b__61463,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null));

var G__61706 = (i__61462 + (1));
i__61462 = G__61706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61463),enigma_nexus$tabs$state$add_new_tab_$_iter__61460(cljs.core.chunk_rest(s__61461__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61463),null);
}
} else {
var row_index = cljs.core.first(s__61461__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601(s__61602){
return (new cljs.core.LazySeq(null,(function (){
var s__61602__$1 = s__61602;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__61602__$1);
if(temp__5804__auto____$1){
var s__61602__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__61602__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__61602__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__61604 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__61603 = (0);
while(true){
if((i__61603 < size__5519__auto__)){
var column_index = cljs.core._nth(c__5518__auto__,i__61603);
cljs.core.chunk_append(b__61604,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61603,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61617(s__61618){
return (new cljs.core.LazySeq(null,((function (i__61603,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61618__$1 = s__61618;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__61618__$1);
if(temp__5804__auto____$2){
var s__61618__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__61618__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__61618__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__61620 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__61619 = (0);
while(true){
if((i__61619 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__61619);
cljs.core.chunk_append(b__61620,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61619,i__61603,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__61620,s__61618__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61617_$_iter__61628(s__61629){
return (new cljs.core.LazySeq(null,((function (i__61619,i__61603,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__61620,s__61618__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61629__$1 = s__61629;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__61629__$1);
if(temp__5804__auto____$3){
var s__61629__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__61629__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__61629__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__61631 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__61630 = (0);
while(true){
if((i__61630 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__61630);
cljs.core.chunk_append(b__61631,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__61707 = (i__61630 + (1));
i__61630 = G__61707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61631),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61617_$_iter__61628(cljs.core.chunk_rest(s__61629__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61631),null);
}
} else {
var column_index__$1 = cljs.core.first(s__61629__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61617_$_iter__61628(cljs.core.rest(s__61629__$2)));
}
} else {
return null;
}
break;
}
});})(i__61619,i__61603,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__61620,s__61618__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61619,i__61603,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__61620,s__61618__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__61708 = (i__61619 + (1));
i__61619 = G__61708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61620),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61617(cljs.core.chunk_rest(s__61618__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61620),null);
}
} else {
var row_index__$1 = cljs.core.first(s__61618__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61603,row_index__$1,s__61618__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61617_$_iter__61636(s__61637){
return (new cljs.core.LazySeq(null,((function (i__61603,row_index__$1,s__61618__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61637__$1 = s__61637;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__61637__$1);
if(temp__5804__auto____$3){
var s__61637__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__61637__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__61637__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__61639 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__61638 = (0);
while(true){
if((i__61638 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__61638);
cljs.core.chunk_append(b__61639,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__61709 = (i__61638 + (1));
i__61638 = G__61709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61639),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61617_$_iter__61636(cljs.core.chunk_rest(s__61637__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61639),null);
}
} else {
var column_index__$1 = cljs.core.first(s__61637__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61617_$_iter__61636(cljs.core.rest(s__61637__$2)));
}
} else {
return null;
}
break;
}
});})(i__61603,row_index__$1,s__61618__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61603,row_index__$1,s__61618__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61617(cljs.core.rest(s__61618__$2)));
}
} else {
return null;
}
break;
}
});})(i__61603,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61603,column_index,c__5518__auto__,size__5519__auto__,b__61604,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__61710 = (i__61603 + (1));
i__61603 = G__61710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61604),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601(cljs.core.chunk_rest(s__61602__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61604),null);
}
} else {
var column_index = cljs.core.first(s__61602__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (column_index,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61646(s__61647){
return (new cljs.core.LazySeq(null,(function (){
var s__61647__$1 = s__61647;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__61647__$1);
if(temp__5804__auto____$2){
var s__61647__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__61647__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__61647__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__61649 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__61648 = (0);
while(true){
if((i__61648 < size__5519__auto__)){
var row_index__$1 = cljs.core._nth(c__5518__auto__,i__61648);
cljs.core.chunk_append(b__61649,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__61648,row_index__$1,c__5518__auto__,size__5519__auto__,b__61649,s__61647__$2,temp__5804__auto____$2,column_index,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61646_$_iter__61654(s__61655){
return (new cljs.core.LazySeq(null,((function (i__61648,row_index__$1,c__5518__auto__,size__5519__auto__,b__61649,s__61647__$2,temp__5804__auto____$2,column_index,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function (){
var s__61655__$1 = s__61655;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__61655__$1);
if(temp__5804__auto____$3){
var s__61655__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__61655__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__61655__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__61657 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__61656 = (0);
while(true){
if((i__61656 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__61656);
cljs.core.chunk_append(b__61657,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__61713 = (i__61656 + (1));
i__61656 = G__61713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61657),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61646_$_iter__61654(cljs.core.chunk_rest(s__61655__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61657),null);
}
} else {
var column_index__$1 = cljs.core.first(s__61655__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61646_$_iter__61654(cljs.core.rest(s__61655__$2)));
}
} else {
return null;
}
break;
}
});})(i__61648,row_index__$1,c__5518__auto__,size__5519__auto__,b__61649,s__61647__$2,temp__5804__auto____$2,column_index,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
,null,null));
});})(i__61648,row_index__$1,c__5518__auto__,size__5519__auto__,b__61649,s__61647__$2,temp__5804__auto____$2,column_index,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__61716 = (i__61648 + (1));
i__61648 = G__61716;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61649),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61646(cljs.core.chunk_rest(s__61647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61649),null);
}
} else {
var row_index__$1 = cljs.core.first(s__61647__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index__$1,s__61647__$2,temp__5804__auto____$2,column_index,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61646_$_iter__61665(s__61666){
return (new cljs.core.LazySeq(null,(function (){
var s__61666__$1 = s__61666;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__61666__$1);
if(temp__5804__auto____$3){
var s__61666__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__61666__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__61666__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__61668 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__61667 = (0);
while(true){
if((i__61667 < size__5519__auto__)){
var column_index__$1 = cljs.core._nth(c__5518__auto__,i__61667);
cljs.core.chunk_append(b__61668,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__61721 = (i__61667 + (1));
i__61667 = G__61721;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__61668),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61646_$_iter__61665(cljs.core.chunk_rest(s__61666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__61668),null);
}
} else {
var column_index__$1 = cljs.core.first(s__61666__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61646_$_iter__61665(cljs.core.rest(s__61666__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index__$1,s__61647__$2,temp__5804__auto____$2,column_index,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601_$_iter__61646(cljs.core.rest(s__61647__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(column_index,s__61602__$2,temp__5804__auto____$1,row_index,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$add_new_tab_$_iter__61460_$_iter__61601(cljs.core.rest(s__61602__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index,s__61461__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__61460(cljs.core.rest(s__61461__$2)));
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
