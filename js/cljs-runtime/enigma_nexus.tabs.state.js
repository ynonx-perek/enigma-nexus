goog.provide('enigma_nexus.tabs.state');
enigma_nexus.tabs.state.figma_tab = (function enigma_nexus$tabs$state$figma_tab(title){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-cell",new cljs.core.Keyword(null,"content","content",15833224),title,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.skins.ticket_header_text,enigma_nexus.tabs.skins.active_tab_indication], null)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Container",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Version",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Tags",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Images",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Drivers",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Hover",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null)], null)], null));
});
enigma_nexus.tabs.state.empty_tab = (function enigma_nexus$tabs$state$empty_tab(row_count,column_count,title){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-cell",new cljs.core.Keyword(null,"content","content",15833224),title,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.skins.ticket_header_text,enigma_nexus.tabs.skins.active_tab_indication], null)], null),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = (function enigma_nexus$tabs$state$empty_tab_$_iter__60537(s__60538){
return (new cljs.core.LazySeq(null,(function (){
var s__60538__$1 = s__60538;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__60538__$1);
if(temp__5804__auto__){
var s__60538__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__60538__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60538__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60540 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60539 = (0);
while(true){
if((i__60539 < size__5519__auto__)){
var row_index = cljs.core._nth(c__5518__auto__,i__60539);
cljs.core.chunk_append(b__60540,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60539,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545(s__60546){
return (new cljs.core.LazySeq(null,((function (i__60539,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60546__$1 = s__60546;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__60546__$1);
if(temp__5804__auto____$1){
var s__60546__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60546__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60546__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60548 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60547 = (0);
while(true){
if((i__60547 < size__5519__auto____$1)){
var column_index = cljs.core._nth(c__5518__auto____$1,i__60547);
cljs.core.chunk_append(b__60548,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60547,i__60539,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60549(s__60550){
return (new cljs.core.LazySeq(null,((function (i__60547,i__60539,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60550__$1 = s__60550;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__60550__$1);
if(temp__5804__auto____$2){
var s__60550__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60550__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__60550__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__60552 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__60551 = (0);
while(true){
if((i__60551 < size__5519__auto____$2)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$2,i__60551);
cljs.core.chunk_append(b__60552,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60551,i__60547,i__60539,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__60552,s__60550__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60549_$_iter__60553(s__60554){
return (new cljs.core.LazySeq(null,((function (i__60551,i__60547,i__60539,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__60552,s__60550__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60554__$1 = s__60554;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60554__$1);
if(temp__5804__auto____$3){
var s__60554__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60554__$2)){
var c__5518__auto____$3 = cljs.core.chunk_first(s__60554__$2);
var size__5519__auto____$3 = cljs.core.count(c__5518__auto____$3);
var b__60556 = cljs.core.chunk_buffer(size__5519__auto____$3);
if((function (){var i__60555 = (0);
while(true){
if((i__60555 < size__5519__auto____$3)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$3,i__60555);
cljs.core.chunk_append(b__60556,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60606 = (i__60555 + (1));
i__60555 = G__60606;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60556),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60549_$_iter__60553(cljs.core.chunk_rest(s__60554__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60556),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60554__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60549_$_iter__60553(cljs.core.rest(s__60554__$2)));
}
} else {
return null;
}
break;
}
});})(i__60551,i__60547,i__60539,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__60552,s__60550__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60551,i__60547,i__60539,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__60552,s__60550__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__60607 = (i__60551 + (1));
i__60551 = G__60607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60552),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60549(cljs.core.chunk_rest(s__60550__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60552),null);
}
} else {
var row_index__$1 = cljs.core.first(s__60550__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60547,i__60539,row_index__$1,s__60550__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60549_$_iter__60557(s__60558){
return (new cljs.core.LazySeq(null,((function (i__60547,i__60539,row_index__$1,s__60550__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60558__$1 = s__60558;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60558__$1);
if(temp__5804__auto____$3){
var s__60558__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60558__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__60558__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__60560 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__60559 = (0);
while(true){
if((i__60559 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__60559);
cljs.core.chunk_append(b__60560,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60611 = (i__60559 + (1));
i__60559 = G__60611;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60560),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60549_$_iter__60557(cljs.core.chunk_rest(s__60558__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60560),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60558__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60549_$_iter__60557(cljs.core.rest(s__60558__$2)));
}
} else {
return null;
}
break;
}
});})(i__60547,i__60539,row_index__$1,s__60550__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60547,i__60539,row_index__$1,s__60550__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60549(cljs.core.rest(s__60550__$2)));
}
} else {
return null;
}
break;
}
});})(i__60547,i__60539,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60547,i__60539,column_index,c__5518__auto____$1,size__5519__auto____$1,b__60548,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__60612 = (i__60547 + (1));
i__60547 = G__60612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60548),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545(cljs.core.chunk_rest(s__60546__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60548),null);
}
} else {
var column_index = cljs.core.first(s__60546__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60539,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60562(s__60563){
return (new cljs.core.LazySeq(null,((function (i__60539,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60563__$1 = s__60563;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__60563__$1);
if(temp__5804__auto____$2){
var s__60563__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60563__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60563__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60565 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60564 = (0);
while(true){
if((i__60564 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60564);
cljs.core.chunk_append(b__60565,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60564,i__60539,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60565,s__60563__$2,temp__5804__auto____$2,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60562_$_iter__60566(s__60567){
return (new cljs.core.LazySeq(null,((function (i__60564,i__60539,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60565,s__60563__$2,temp__5804__auto____$2,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60567__$1 = s__60567;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60567__$1);
if(temp__5804__auto____$3){
var s__60567__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60567__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__60567__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__60569 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__60568 = (0);
while(true){
if((i__60568 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__60568);
cljs.core.chunk_append(b__60569,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60614 = (i__60568 + (1));
i__60568 = G__60614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60569),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60562_$_iter__60566(cljs.core.chunk_rest(s__60567__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60569),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60567__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60562_$_iter__60566(cljs.core.rest(s__60567__$2)));
}
} else {
return null;
}
break;
}
});})(i__60564,i__60539,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60565,s__60563__$2,temp__5804__auto____$2,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60564,i__60539,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60565,s__60563__$2,temp__5804__auto____$2,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__60618 = (i__60564 + (1));
i__60564 = G__60618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60565),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60562(cljs.core.chunk_rest(s__60563__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60565),null);
}
} else {
var row_index__$1 = cljs.core.first(s__60563__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60539,row_index__$1,s__60563__$2,temp__5804__auto____$2,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60562_$_iter__60570(s__60571){
return (new cljs.core.LazySeq(null,((function (i__60539,row_index__$1,s__60563__$2,temp__5804__auto____$2,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60571__$1 = s__60571;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60571__$1);
if(temp__5804__auto____$3){
var s__60571__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60571__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60571__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60573 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60572 = (0);
while(true){
if((i__60572 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60572);
cljs.core.chunk_append(b__60573,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60619 = (i__60572 + (1));
i__60572 = G__60619;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60573),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60562_$_iter__60570(cljs.core.chunk_rest(s__60571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60573),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60571__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60562_$_iter__60570(cljs.core.rest(s__60571__$2)));
}
} else {
return null;
}
break;
}
});})(i__60539,row_index__$1,s__60563__$2,temp__5804__auto____$2,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60539,row_index__$1,s__60563__$2,temp__5804__auto____$2,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545_$_iter__60562(cljs.core.rest(s__60563__$2)));
}
} else {
return null;
}
break;
}
});})(i__60539,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60539,column_index,s__60546__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60545(cljs.core.rest(s__60546__$2)));
}
} else {
return null;
}
break;
}
});})(i__60539,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60539,row_index,c__5518__auto__,size__5519__auto__,b__60540,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null));

var G__60621 = (i__60539 + (1));
i__60539 = G__60621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60540),enigma_nexus$tabs$state$empty_tab_$_iter__60537(cljs.core.chunk_rest(s__60538__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60540),null);
}
} else {
var row_index = cljs.core.first(s__60538__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574(s__60575){
return (new cljs.core.LazySeq(null,(function (){
var s__60575__$1 = s__60575;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__60575__$1);
if(temp__5804__auto____$1){
var s__60575__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60575__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60575__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60577 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60576 = (0);
while(true){
if((i__60576 < size__5519__auto__)){
var column_index = cljs.core._nth(c__5518__auto__,i__60576);
cljs.core.chunk_append(b__60577,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60576,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60578(s__60579){
return (new cljs.core.LazySeq(null,((function (i__60576,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60579__$1 = s__60579;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__60579__$1);
if(temp__5804__auto____$2){
var s__60579__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60579__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60579__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60581 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60580 = (0);
while(true){
if((i__60580 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60580);
cljs.core.chunk_append(b__60581,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60580,i__60576,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60581,s__60579__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60578_$_iter__60582(s__60583){
return (new cljs.core.LazySeq(null,((function (i__60580,i__60576,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60581,s__60579__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60583__$1 = s__60583;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60583__$1);
if(temp__5804__auto____$3){
var s__60583__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60583__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__60583__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__60585 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__60584 = (0);
while(true){
if((i__60584 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__60584);
cljs.core.chunk_append(b__60585,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60625 = (i__60584 + (1));
i__60584 = G__60625;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60585),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60578_$_iter__60582(cljs.core.chunk_rest(s__60583__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60585),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60583__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60578_$_iter__60582(cljs.core.rest(s__60583__$2)));
}
} else {
return null;
}
break;
}
});})(i__60580,i__60576,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60581,s__60579__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60580,i__60576,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__60581,s__60579__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__60626 = (i__60580 + (1));
i__60580 = G__60626;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60581),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60578(cljs.core.chunk_rest(s__60579__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60581),null);
}
} else {
var row_index__$1 = cljs.core.first(s__60579__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60576,row_index__$1,s__60579__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60578_$_iter__60586(s__60587){
return (new cljs.core.LazySeq(null,((function (i__60576,row_index__$1,s__60579__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60587__$1 = s__60587;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60587__$1);
if(temp__5804__auto____$3){
var s__60587__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60587__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60587__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60589 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60588 = (0);
while(true){
if((i__60588 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60588);
cljs.core.chunk_append(b__60589,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60631 = (i__60588 + (1));
i__60588 = G__60631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60589),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60578_$_iter__60586(cljs.core.chunk_rest(s__60587__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60589),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60587__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60578_$_iter__60586(cljs.core.rest(s__60587__$2)));
}
} else {
return null;
}
break;
}
});})(i__60576,row_index__$1,s__60579__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60576,row_index__$1,s__60579__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60578(cljs.core.rest(s__60579__$2)));
}
} else {
return null;
}
break;
}
});})(i__60576,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60576,column_index,c__5518__auto__,size__5519__auto__,b__60577,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__60632 = (i__60576 + (1));
i__60576 = G__60632;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60577),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574(cljs.core.chunk_rest(s__60575__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60577),null);
}
} else {
var column_index = cljs.core.first(s__60575__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (column_index,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60590(s__60591){
return (new cljs.core.LazySeq(null,(function (){
var s__60591__$1 = s__60591;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__60591__$1);
if(temp__5804__auto____$2){
var s__60591__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__60591__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60591__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60593 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60592 = (0);
while(true){
if((i__60592 < size__5519__auto__)){
var row_index__$1 = cljs.core._nth(c__5518__auto__,i__60592);
cljs.core.chunk_append(b__60593,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__60592,row_index__$1,c__5518__auto__,size__5519__auto__,b__60593,s__60591__$2,temp__5804__auto____$2,column_index,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60590_$_iter__60594(s__60595){
return (new cljs.core.LazySeq(null,((function (i__60592,row_index__$1,c__5518__auto__,size__5519__auto__,b__60593,s__60591__$2,temp__5804__auto____$2,column_index,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function (){
var s__60595__$1 = s__60595;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60595__$1);
if(temp__5804__auto____$3){
var s__60595__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60595__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__60595__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__60597 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__60596 = (0);
while(true){
if((i__60596 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__60596);
cljs.core.chunk_append(b__60597,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60639 = (i__60596 + (1));
i__60596 = G__60639;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60597),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60590_$_iter__60594(cljs.core.chunk_rest(s__60595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60597),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60595__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60590_$_iter__60594(cljs.core.rest(s__60595__$2)));
}
} else {
return null;
}
break;
}
});})(i__60592,row_index__$1,c__5518__auto__,size__5519__auto__,b__60593,s__60591__$2,temp__5804__auto____$2,column_index,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
,null,null));
});})(i__60592,row_index__$1,c__5518__auto__,size__5519__auto__,b__60593,s__60591__$2,temp__5804__auto____$2,column_index,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__60640 = (i__60592 + (1));
i__60592 = G__60640;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60593),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60590(cljs.core.chunk_rest(s__60591__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60593),null);
}
} else {
var row_index__$1 = cljs.core.first(s__60591__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index__$1,s__60591__$2,temp__5804__auto____$2,column_index,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60590_$_iter__60598(s__60599){
return (new cljs.core.LazySeq(null,(function (){
var s__60599__$1 = s__60599;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__60599__$1);
if(temp__5804__auto____$3){
var s__60599__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__60599__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__60599__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__60601 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__60600 = (0);
while(true){
if((i__60600 < size__5519__auto__)){
var column_index__$1 = cljs.core._nth(c__5518__auto__,i__60600);
cljs.core.chunk_append(b__60601,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__60641 = (i__60600 + (1));
i__60600 = G__60641;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60601),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60590_$_iter__60598(cljs.core.chunk_rest(s__60599__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60601),null);
}
} else {
var column_index__$1 = cljs.core.first(s__60599__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60590_$_iter__60598(cljs.core.rest(s__60599__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index__$1,s__60591__$2,temp__5804__auto____$2,column_index,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574_$_iter__60590(cljs.core.rest(s__60591__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(column_index,s__60575__$2,temp__5804__auto____$1,row_index,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$empty_tab_$_iter__60537_$_iter__60574(cljs.core.rest(s__60575__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index,s__60538__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__60537(cljs.core.rest(s__60538__$2)));
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
enigma_nexus.tabs.state.add_new_tab = (function enigma_nexus$tabs$state$add_new_tab(multi_tab_table_STAR_,row_count,column_count){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(multi_tab_table_STAR_,cljs.core.conj,enigma_nexus.tabs.state.empty_tab(row_count,column_count,"New Tab"));
});

//# sourceMappingURL=enigma_nexus.tabs.state.js.map
