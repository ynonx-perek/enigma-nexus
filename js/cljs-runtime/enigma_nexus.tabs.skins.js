goog.provide('enigma_nexus.tabs.skins');
enigma_nexus.tabs.skins.ticket_header_text = (function enigma_nexus$tabs$skins$ticket_header_text(props){
var map__61153 = props;
var map__61153__$1 = cljs.core.__destructure_map(map__61153);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61153__$1,new cljs.core.Keyword(null,"value","value",305978217));
var multi_tab_table_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61153__$1,new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832));
var active_tab_index_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61153__$1,new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61153__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var my_table_STAR_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(multi_tab_table_STAR_),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_index], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"class","class",-2030961996),"ticket-header-text",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__61148_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(my_table_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.Keyword(null,"content","content",15833224)], null),p1__61148_SHARP_.target.value);
})], null)], null);
});
enigma_nexus.tabs.skins.active_tab_indication = (function enigma_nexus$tabs$skins$active_tab_indication(props){
var map__61159 = props;
var map__61159__$1 = cljs.core.__destructure_map(map__61159);
var active_tab_index_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61159__$1,new cljs.core.Keyword(null,"active-tab-index*","active-tab-index*",-1568632993));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__61159__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(active_tab_index_STAR_),column_index))?"":null)], null);
});

//# sourceMappingURL=enigma_nexus.tabs.skins.js.map
