goog.provide('enigma_nexus.tabs.state');
enigma_nexus.tabs.state.add_new_tab = (function enigma_nexus$tabs$state$add_new_tab(multi_tab_table_STAR_,row_count,column_count){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(multi_tab_table_STAR_,cljs.core.conj,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-cell",new cljs.core.Keyword(null,"content","content",15833224),"New Tab",new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.skins.ticket_header_text,enigma_nexus.tabs.skins.active_tab_indication], null)], null),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468(s__59469){
return (new cljs.core.LazySeq(null,(function (){
var s__59469__$1 = s__59469;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__59469__$1);
if(temp__5804__auto__){
var s__59469__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__59469__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59469__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59471 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59470 = (0);
while(true){
if((i__59470 < size__5519__auto__)){
var row_index = cljs.core._nth(c__5518__auto__,i__59470);
cljs.core.chunk_append(b__59471,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59470,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474(s__59475){
return (new cljs.core.LazySeq(null,((function (i__59470,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59475__$1 = s__59475;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__59475__$1);
if(temp__5804__auto____$1){
var s__59475__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59475__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__59475__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__59477 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__59476 = (0);
while(true){
if((i__59476 < size__5519__auto____$1)){
var column_index = cljs.core._nth(c__5518__auto____$1,i__59476);
cljs.core.chunk_append(b__59477,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59476,i__59470,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59489(s__59490){
return (new cljs.core.LazySeq(null,((function (i__59476,i__59470,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59490__$1 = s__59490;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__59490__$1);
if(temp__5804__auto____$2){
var s__59490__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__59490__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__59490__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__59492 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__59491 = (0);
while(true){
if((i__59491 < size__5519__auto____$2)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$2,i__59491);
cljs.core.chunk_append(b__59492,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59491,i__59476,i__59470,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__59492,s__59490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59489_$_iter__59496(s__59497){
return (new cljs.core.LazySeq(null,((function (i__59491,i__59476,i__59470,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__59492,s__59490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59497__$1 = s__59497;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__59497__$1);
if(temp__5804__auto____$3){
var s__59497__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__59497__$2)){
var c__5518__auto____$3 = cljs.core.chunk_first(s__59497__$2);
var size__5519__auto____$3 = cljs.core.count(c__5518__auto____$3);
var b__59499 = cljs.core.chunk_buffer(size__5519__auto____$3);
if((function (){var i__59498 = (0);
while(true){
if((i__59498 < size__5519__auto____$3)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$3,i__59498);
cljs.core.chunk_append(b__59499,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__59586 = (i__59498 + (1));
i__59498 = G__59586;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59499),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59489_$_iter__59496(cljs.core.chunk_rest(s__59497__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59499),null);
}
} else {
var column_index__$1 = cljs.core.first(s__59497__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59489_$_iter__59496(cljs.core.rest(s__59497__$2)));
}
} else {
return null;
}
break;
}
});})(i__59491,i__59476,i__59470,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__59492,s__59490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59491,i__59476,i__59470,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__59492,s__59490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__59587 = (i__59491 + (1));
i__59491 = G__59587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59492),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59489(cljs.core.chunk_rest(s__59490__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59492),null);
}
} else {
var row_index__$1 = cljs.core.first(s__59490__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59476,i__59470,row_index__$1,s__59490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59489_$_iter__59511(s__59512){
return (new cljs.core.LazySeq(null,((function (i__59476,i__59470,row_index__$1,s__59490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59512__$1 = s__59512;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__59512__$1);
if(temp__5804__auto____$3){
var s__59512__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__59512__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__59512__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__59514 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__59513 = (0);
while(true){
if((i__59513 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__59513);
cljs.core.chunk_append(b__59514,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__59588 = (i__59513 + (1));
i__59513 = G__59588;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59514),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59489_$_iter__59511(cljs.core.chunk_rest(s__59512__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59514),null);
}
} else {
var column_index__$1 = cljs.core.first(s__59512__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59489_$_iter__59511(cljs.core.rest(s__59512__$2)));
}
} else {
return null;
}
break;
}
});})(i__59476,i__59470,row_index__$1,s__59490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59476,i__59470,row_index__$1,s__59490__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59489(cljs.core.rest(s__59490__$2)));
}
} else {
return null;
}
break;
}
});})(i__59476,i__59470,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59476,i__59470,column_index,c__5518__auto____$1,size__5519__auto____$1,b__59477,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__59589 = (i__59476 + (1));
i__59476 = G__59589;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59477),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474(cljs.core.chunk_rest(s__59475__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59477),null);
}
} else {
var column_index = cljs.core.first(s__59475__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59470,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59521(s__59522){
return (new cljs.core.LazySeq(null,((function (i__59470,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59522__$1 = s__59522;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__59522__$1);
if(temp__5804__auto____$2){
var s__59522__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__59522__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__59522__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__59524 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__59523 = (0);
while(true){
if((i__59523 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__59523);
cljs.core.chunk_append(b__59524,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59523,i__59470,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__59524,s__59522__$2,temp__5804__auto____$2,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59521_$_iter__59525(s__59526){
return (new cljs.core.LazySeq(null,((function (i__59523,i__59470,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__59524,s__59522__$2,temp__5804__auto____$2,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59526__$1 = s__59526;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__59526__$1);
if(temp__5804__auto____$3){
var s__59526__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__59526__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__59526__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__59528 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__59527 = (0);
while(true){
if((i__59527 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__59527);
cljs.core.chunk_append(b__59528,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__59590 = (i__59527 + (1));
i__59527 = G__59590;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59528),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59521_$_iter__59525(cljs.core.chunk_rest(s__59526__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59528),null);
}
} else {
var column_index__$1 = cljs.core.first(s__59526__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59521_$_iter__59525(cljs.core.rest(s__59526__$2)));
}
} else {
return null;
}
break;
}
});})(i__59523,i__59470,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__59524,s__59522__$2,temp__5804__auto____$2,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59523,i__59470,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__59524,s__59522__$2,temp__5804__auto____$2,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__59591 = (i__59523 + (1));
i__59523 = G__59591;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59524),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59521(cljs.core.chunk_rest(s__59522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59524),null);
}
} else {
var row_index__$1 = cljs.core.first(s__59522__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59470,row_index__$1,s__59522__$2,temp__5804__auto____$2,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59521_$_iter__59535(s__59536){
return (new cljs.core.LazySeq(null,((function (i__59470,row_index__$1,s__59522__$2,temp__5804__auto____$2,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59536__$1 = s__59536;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__59536__$1);
if(temp__5804__auto____$3){
var s__59536__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__59536__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__59536__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__59538 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__59537 = (0);
while(true){
if((i__59537 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__59537);
cljs.core.chunk_append(b__59538,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__59592 = (i__59537 + (1));
i__59537 = G__59592;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59538),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59521_$_iter__59535(cljs.core.chunk_rest(s__59536__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59538),null);
}
} else {
var column_index__$1 = cljs.core.first(s__59536__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59521_$_iter__59535(cljs.core.rest(s__59536__$2)));
}
} else {
return null;
}
break;
}
});})(i__59470,row_index__$1,s__59522__$2,temp__5804__auto____$2,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59470,row_index__$1,s__59522__$2,temp__5804__auto____$2,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474_$_iter__59521(cljs.core.rest(s__59522__$2)));
}
} else {
return null;
}
break;
}
});})(i__59470,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59470,column_index,s__59475__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59474(cljs.core.rest(s__59475__$2)));
}
} else {
return null;
}
break;
}
});})(i__59470,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59470,row_index,c__5518__auto__,size__5519__auto__,b__59471,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null));

var G__59593 = (i__59470 + (1));
i__59470 = G__59593;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59471),enigma_nexus$tabs$state$add_new_tab_$_iter__59468(cljs.core.chunk_rest(s__59469__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59471),null);
}
} else {
var row_index = cljs.core.first(s__59469__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550(s__59551){
return (new cljs.core.LazySeq(null,(function (){
var s__59551__$1 = s__59551;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__59551__$1);
if(temp__5804__auto____$1){
var s__59551__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__59551__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59551__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59553 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59552 = (0);
while(true){
if((i__59552 < size__5519__auto__)){
var column_index = cljs.core._nth(c__5518__auto__,i__59552);
cljs.core.chunk_append(b__59553,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59552,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59558(s__59559){
return (new cljs.core.LazySeq(null,((function (i__59552,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59559__$1 = s__59559;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__59559__$1);
if(temp__5804__auto____$2){
var s__59559__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__59559__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__59559__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__59561 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__59560 = (0);
while(true){
if((i__59560 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__59560);
cljs.core.chunk_append(b__59561,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59560,i__59552,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__59561,s__59559__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59558_$_iter__59562(s__59563){
return (new cljs.core.LazySeq(null,((function (i__59560,i__59552,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__59561,s__59559__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59563__$1 = s__59563;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__59563__$1);
if(temp__5804__auto____$3){
var s__59563__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__59563__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__59563__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__59565 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__59564 = (0);
while(true){
if((i__59564 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__59564);
cljs.core.chunk_append(b__59565,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__59594 = (i__59564 + (1));
i__59564 = G__59594;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59565),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59558_$_iter__59562(cljs.core.chunk_rest(s__59563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59565),null);
}
} else {
var column_index__$1 = cljs.core.first(s__59563__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59558_$_iter__59562(cljs.core.rest(s__59563__$2)));
}
} else {
return null;
}
break;
}
});})(i__59560,i__59552,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__59561,s__59559__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59560,i__59552,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__59561,s__59559__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__59595 = (i__59560 + (1));
i__59560 = G__59595;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59561),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59558(cljs.core.chunk_rest(s__59559__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59561),null);
}
} else {
var row_index__$1 = cljs.core.first(s__59559__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59552,row_index__$1,s__59559__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59558_$_iter__59570(s__59571){
return (new cljs.core.LazySeq(null,((function (i__59552,row_index__$1,s__59559__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59571__$1 = s__59571;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__59571__$1);
if(temp__5804__auto____$3){
var s__59571__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__59571__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__59571__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__59573 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__59572 = (0);
while(true){
if((i__59572 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__59572);
cljs.core.chunk_append(b__59573,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__59596 = (i__59572 + (1));
i__59572 = G__59596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59573),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59558_$_iter__59570(cljs.core.chunk_rest(s__59571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59573),null);
}
} else {
var column_index__$1 = cljs.core.first(s__59571__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59558_$_iter__59570(cljs.core.rest(s__59571__$2)));
}
} else {
return null;
}
break;
}
});})(i__59552,row_index__$1,s__59559__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59552,row_index__$1,s__59559__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59558(cljs.core.rest(s__59559__$2)));
}
} else {
return null;
}
break;
}
});})(i__59552,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59552,column_index,c__5518__auto__,size__5519__auto__,b__59553,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__59597 = (i__59552 + (1));
i__59552 = G__59597;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59553),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550(cljs.core.chunk_rest(s__59551__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59553),null);
}
} else {
var column_index = cljs.core.first(s__59551__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (column_index,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59574(s__59575){
return (new cljs.core.LazySeq(null,(function (){
var s__59575__$1 = s__59575;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__59575__$1);
if(temp__5804__auto____$2){
var s__59575__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__59575__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59575__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59577 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59576 = (0);
while(true){
if((i__59576 < size__5519__auto__)){
var row_index__$1 = cljs.core._nth(c__5518__auto__,i__59576);
cljs.core.chunk_append(b__59577,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__59576,row_index__$1,c__5518__auto__,size__5519__auto__,b__59577,s__59575__$2,temp__5804__auto____$2,column_index,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59574_$_iter__59578(s__59579){
return (new cljs.core.LazySeq(null,((function (i__59576,row_index__$1,c__5518__auto__,size__5519__auto__,b__59577,s__59575__$2,temp__5804__auto____$2,column_index,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function (){
var s__59579__$1 = s__59579;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__59579__$1);
if(temp__5804__auto____$3){
var s__59579__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__59579__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__59579__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__59581 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__59580 = (0);
while(true){
if((i__59580 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__59580);
cljs.core.chunk_append(b__59581,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__59598 = (i__59580 + (1));
i__59580 = G__59598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59581),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59574_$_iter__59578(cljs.core.chunk_rest(s__59579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59581),null);
}
} else {
var column_index__$1 = cljs.core.first(s__59579__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59574_$_iter__59578(cljs.core.rest(s__59579__$2)));
}
} else {
return null;
}
break;
}
});})(i__59576,row_index__$1,c__5518__auto__,size__5519__auto__,b__59577,s__59575__$2,temp__5804__auto____$2,column_index,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
,null,null));
});})(i__59576,row_index__$1,c__5518__auto__,size__5519__auto__,b__59577,s__59575__$2,temp__5804__auto____$2,column_index,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__59599 = (i__59576 + (1));
i__59576 = G__59599;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59577),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59574(cljs.core.chunk_rest(s__59575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59577),null);
}
} else {
var row_index__$1 = cljs.core.first(s__59575__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index__$1,s__59575__$2,temp__5804__auto____$2,column_index,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59574_$_iter__59582(s__59583){
return (new cljs.core.LazySeq(null,(function (){
var s__59583__$1 = s__59583;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__59583__$1);
if(temp__5804__auto____$3){
var s__59583__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__59583__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__59583__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__59585 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__59584 = (0);
while(true){
if((i__59584 < size__5519__auto__)){
var column_index__$1 = cljs.core._nth(c__5518__auto__,i__59584);
cljs.core.chunk_append(b__59585,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__59600 = (i__59584 + (1));
i__59584 = G__59600;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__59585),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59574_$_iter__59582(cljs.core.chunk_rest(s__59583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__59585),null);
}
} else {
var column_index__$1 = cljs.core.first(s__59583__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59574_$_iter__59582(cljs.core.rest(s__59583__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index__$1,s__59575__$2,temp__5804__auto____$2,column_index,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550_$_iter__59574(cljs.core.rest(s__59575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(column_index,s__59551__$2,temp__5804__auto____$1,row_index,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$add_new_tab_$_iter__59468_$_iter__59550(cljs.core.rest(s__59551__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index,s__59469__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null),enigma_nexus$tabs$state$add_new_tab_$_iter__59468(cljs.core.rest(s__59469__$2)));
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
