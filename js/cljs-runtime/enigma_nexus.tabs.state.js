goog.provide('enigma_nexus.tabs.state');
enigma_nexus.tabs.state.figma_tab = (function enigma_nexus$tabs$state$figma_tab(title){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-cell",new cljs.core.Keyword(null,"content","content",15833224),title,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.skins.ticket_header_text,enigma_nexus.tabs.skins.active_tab_indication], null)], null),new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Container",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Version",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Tags",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Images",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Drivers",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),"Hover",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dell_BKC_Crockett"], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.single_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.PersistentVector.EMPTY], null)], null)], null));
});
enigma_nexus.tabs.state.empty_tab = (function enigma_nexus$tabs$state$empty_tab(row_count,column_count,title){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"class","class",-2030961996),"menu-cell",new cljs.core.Keyword(null,"content","content",15833224),title,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.skins.ticket_header_text,enigma_nexus.tabs.skins.active_tab_indication], null)], null),new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = (function enigma_nexus$tabs$state$empty_tab_$_iter__70839(s__70840){
return (new cljs.core.LazySeq(null,(function (){
var s__70840__$1 = s__70840;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__70840__$1);
if(temp__5804__auto__){
var s__70840__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70840__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70840__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70842 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70841 = (0);
while(true){
if((i__70841 < size__5519__auto__)){
var row_index = cljs.core._nth(c__5518__auto__,i__70841);
cljs.core.chunk_append(b__70842,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70841,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843(s__70844){
return (new cljs.core.LazySeq(null,((function (i__70841,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70844__$1 = s__70844;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__70844__$1);
if(temp__5804__auto____$1){
var s__70844__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70844__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70844__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70846 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70845 = (0);
while(true){
if((i__70845 < size__5519__auto____$1)){
var column_index = cljs.core._nth(c__5518__auto____$1,i__70845);
cljs.core.chunk_append(b__70846,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70845,i__70841,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70847(s__70848){
return (new cljs.core.LazySeq(null,((function (i__70845,i__70841,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70848__$1 = s__70848;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__70848__$1);
if(temp__5804__auto____$2){
var s__70848__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__70848__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__70848__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__70850 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__70849 = (0);
while(true){
if((i__70849 < size__5519__auto____$2)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$2,i__70849);
cljs.core.chunk_append(b__70850,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70849,i__70845,i__70841,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__70850,s__70848__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70847_$_iter__70851(s__70852){
return (new cljs.core.LazySeq(null,((function (i__70849,i__70845,i__70841,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__70850,s__70848__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70852__$1 = s__70852;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70852__$1);
if(temp__5804__auto____$3){
var s__70852__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70852__$2)){
var c__5518__auto____$3 = cljs.core.chunk_first(s__70852__$2);
var size__5519__auto____$3 = cljs.core.count(c__5518__auto____$3);
var b__70854 = cljs.core.chunk_buffer(size__5519__auto____$3);
if((function (){var i__70853 = (0);
while(true){
if((i__70853 < size__5519__auto____$3)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$3,i__70853);
cljs.core.chunk_append(b__70854,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70906 = (i__70853 + (1));
i__70853 = G__70906;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70854),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70847_$_iter__70851(cljs.core.chunk_rest(s__70852__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70854),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70852__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70847_$_iter__70851(cljs.core.rest(s__70852__$2)));
}
} else {
return null;
}
break;
}
});})(i__70849,i__70845,i__70841,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__70850,s__70848__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70849,i__70845,i__70841,row_index__$1,c__5518__auto____$2,size__5519__auto____$2,b__70850,s__70848__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__70907 = (i__70849 + (1));
i__70849 = G__70907;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70850),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70847(cljs.core.chunk_rest(s__70848__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70850),null);
}
} else {
var row_index__$1 = cljs.core.first(s__70848__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70845,i__70841,row_index__$1,s__70848__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70847_$_iter__70855(s__70856){
return (new cljs.core.LazySeq(null,((function (i__70845,i__70841,row_index__$1,s__70848__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70856__$1 = s__70856;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70856__$1);
if(temp__5804__auto____$3){
var s__70856__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70856__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__70856__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__70858 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__70857 = (0);
while(true){
if((i__70857 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__70857);
cljs.core.chunk_append(b__70858,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70909 = (i__70857 + (1));
i__70857 = G__70909;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70858),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70847_$_iter__70855(cljs.core.chunk_rest(s__70856__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70858),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70856__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70847_$_iter__70855(cljs.core.rest(s__70856__$2)));
}
} else {
return null;
}
break;
}
});})(i__70845,i__70841,row_index__$1,s__70848__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70845,i__70841,row_index__$1,s__70848__$2,temp__5804__auto____$2,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70847(cljs.core.rest(s__70848__$2)));
}
} else {
return null;
}
break;
}
});})(i__70845,i__70841,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70845,i__70841,column_index,c__5518__auto____$1,size__5519__auto____$1,b__70846,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__70913 = (i__70845 + (1));
i__70845 = G__70913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70846),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843(cljs.core.chunk_rest(s__70844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70846),null);
}
} else {
var column_index = cljs.core.first(s__70844__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70841,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70859(s__70860){
return (new cljs.core.LazySeq(null,((function (i__70841,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70860__$1 = s__70860;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__70860__$1);
if(temp__5804__auto____$2){
var s__70860__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__70860__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70860__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70862 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70861 = (0);
while(true){
if((i__70861 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70861);
cljs.core.chunk_append(b__70862,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70861,i__70841,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70862,s__70860__$2,temp__5804__auto____$2,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70859_$_iter__70863(s__70864){
return (new cljs.core.LazySeq(null,((function (i__70861,i__70841,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70862,s__70860__$2,temp__5804__auto____$2,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70864__$1 = s__70864;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70864__$1);
if(temp__5804__auto____$3){
var s__70864__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70864__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__70864__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__70866 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__70865 = (0);
while(true){
if((i__70865 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__70865);
cljs.core.chunk_append(b__70866,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70916 = (i__70865 + (1));
i__70865 = G__70916;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70866),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70859_$_iter__70863(cljs.core.chunk_rest(s__70864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70866),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70864__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70859_$_iter__70863(cljs.core.rest(s__70864__$2)));
}
} else {
return null;
}
break;
}
});})(i__70861,i__70841,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70862,s__70860__$2,temp__5804__auto____$2,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70861,i__70841,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70862,s__70860__$2,temp__5804__auto____$2,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__70917 = (i__70861 + (1));
i__70861 = G__70917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70862),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70859(cljs.core.chunk_rest(s__70860__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70862),null);
}
} else {
var row_index__$1 = cljs.core.first(s__70860__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70841,row_index__$1,s__70860__$2,temp__5804__auto____$2,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70859_$_iter__70867(s__70868){
return (new cljs.core.LazySeq(null,((function (i__70841,row_index__$1,s__70860__$2,temp__5804__auto____$2,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70868__$1 = s__70868;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70868__$1);
if(temp__5804__auto____$3){
var s__70868__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70868__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70868__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70870 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70869 = (0);
while(true){
if((i__70869 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70869);
cljs.core.chunk_append(b__70870,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70918 = (i__70869 + (1));
i__70869 = G__70918;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70870),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70859_$_iter__70867(cljs.core.chunk_rest(s__70868__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70870),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70868__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70859_$_iter__70867(cljs.core.rest(s__70868__$2)));
}
} else {
return null;
}
break;
}
});})(i__70841,row_index__$1,s__70860__$2,temp__5804__auto____$2,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70841,row_index__$1,s__70860__$2,temp__5804__auto____$2,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843_$_iter__70859(cljs.core.rest(s__70860__$2)));
}
} else {
return null;
}
break;
}
});})(i__70841,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70841,column_index,s__70844__$2,temp__5804__auto____$1,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70843(cljs.core.rest(s__70844__$2)));
}
} else {
return null;
}
break;
}
});})(i__70841,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70841,row_index,c__5518__auto__,size__5519__auto__,b__70842,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null));

var G__70919 = (i__70841 + (1));
i__70841 = G__70919;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70842),enigma_nexus$tabs$state$empty_tab_$_iter__70839(cljs.core.chunk_rest(s__70840__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70842),null);
}
} else {
var row_index = cljs.core.first(s__70840__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871(s__70872){
return (new cljs.core.LazySeq(null,(function (){
var s__70872__$1 = s__70872;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__70872__$1);
if(temp__5804__auto____$1){
var s__70872__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__70872__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70872__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70874 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70873 = (0);
while(true){
if((i__70873 < size__5519__auto__)){
var column_index = cljs.core._nth(c__5518__auto__,i__70873);
cljs.core.chunk_append(b__70874,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70873,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70875(s__70876){
return (new cljs.core.LazySeq(null,((function (i__70873,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70876__$1 = s__70876;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__70876__$1);
if(temp__5804__auto____$2){
var s__70876__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__70876__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70876__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70878 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70877 = (0);
while(true){
if((i__70877 < size__5519__auto____$1)){
var row_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70877);
cljs.core.chunk_append(b__70878,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70877,i__70873,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70878,s__70876__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70875_$_iter__70879(s__70880){
return (new cljs.core.LazySeq(null,((function (i__70877,i__70873,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70878,s__70876__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70880__$1 = s__70880;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70880__$1);
if(temp__5804__auto____$3){
var s__70880__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70880__$2)){
var c__5518__auto____$2 = cljs.core.chunk_first(s__70880__$2);
var size__5519__auto____$2 = cljs.core.count(c__5518__auto____$2);
var b__70882 = cljs.core.chunk_buffer(size__5519__auto____$2);
if((function (){var i__70881 = (0);
while(true){
if((i__70881 < size__5519__auto____$2)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$2,i__70881);
cljs.core.chunk_append(b__70882,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70926 = (i__70881 + (1));
i__70881 = G__70926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70882),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70875_$_iter__70879(cljs.core.chunk_rest(s__70880__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70882),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70880__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70875_$_iter__70879(cljs.core.rest(s__70880__$2)));
}
} else {
return null;
}
break;
}
});})(i__70877,i__70873,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70878,s__70876__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70877,i__70873,row_index__$1,c__5518__auto____$1,size__5519__auto____$1,b__70878,s__70876__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__70927 = (i__70877 + (1));
i__70877 = G__70927;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70878),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70875(cljs.core.chunk_rest(s__70876__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70878),null);
}
} else {
var row_index__$1 = cljs.core.first(s__70876__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70873,row_index__$1,s__70876__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70875_$_iter__70883(s__70884){
return (new cljs.core.LazySeq(null,((function (i__70873,row_index__$1,s__70876__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70884__$1 = s__70884;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70884__$1);
if(temp__5804__auto____$3){
var s__70884__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70884__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70884__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70886 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70885 = (0);
while(true){
if((i__70885 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70885);
cljs.core.chunk_append(b__70886,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70928 = (i__70885 + (1));
i__70885 = G__70928;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70886),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70875_$_iter__70883(cljs.core.chunk_rest(s__70884__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70886),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70884__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70875_$_iter__70883(cljs.core.rest(s__70884__$2)));
}
} else {
return null;
}
break;
}
});})(i__70873,row_index__$1,s__70876__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70873,row_index__$1,s__70876__$2,temp__5804__auto____$2,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70875(cljs.core.rest(s__70876__$2)));
}
} else {
return null;
}
break;
}
});})(i__70873,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70873,column_index,c__5518__auto__,size__5519__auto__,b__70874,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)));

var G__70929 = (i__70873 + (1));
i__70873 = G__70929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70874),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871(cljs.core.chunk_rest(s__70872__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70874),null);
}
} else {
var column_index = cljs.core.first(s__70872__$2);
return cljs.core.cons(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.row_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.column_menu,enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(1))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(1)))))?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.table_in_table,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),true,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.vec((function (){var iter__5520__auto__ = ((function (column_index,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70887(s__70888){
return (new cljs.core.LazySeq(null,(function (){
var s__70888__$1 = s__70888;
while(true){
var temp__5804__auto____$2 = cljs.core.seq(s__70888__$1);
if(temp__5804__auto____$2){
var s__70888__$2 = temp__5804__auto____$2;
if(cljs.core.chunked_seq_QMARK_(s__70888__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70888__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70890 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70889 = (0);
while(true){
if((i__70889 < size__5519__auto__)){
var row_index__$1 = cljs.core._nth(c__5518__auto__,i__70889);
cljs.core.chunk_append(b__70890,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (i__70889,row_index__$1,c__5518__auto__,size__5519__auto__,b__70890,s__70888__$2,temp__5804__auto____$2,column_index,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70887_$_iter__70891(s__70892){
return (new cljs.core.LazySeq(null,((function (i__70889,row_index__$1,c__5518__auto__,size__5519__auto__,b__70890,s__70888__$2,temp__5804__auto____$2,column_index,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function (){
var s__70892__$1 = s__70892;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70892__$1);
if(temp__5804__auto____$3){
var s__70892__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70892__$2)){
var c__5518__auto____$1 = cljs.core.chunk_first(s__70892__$2);
var size__5519__auto____$1 = cljs.core.count(c__5518__auto____$1);
var b__70894 = cljs.core.chunk_buffer(size__5519__auto____$1);
if((function (){var i__70893 = (0);
while(true){
if((i__70893 < size__5519__auto____$1)){
var column_index__$1 = cljs.core._nth(c__5518__auto____$1,i__70893);
cljs.core.chunk_append(b__70894,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70936 = (i__70893 + (1));
i__70893 = G__70936;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70894),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70887_$_iter__70891(cljs.core.chunk_rest(s__70892__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70894),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70892__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70887_$_iter__70891(cljs.core.rest(s__70892__$2)));
}
} else {
return null;
}
break;
}
});})(i__70889,row_index__$1,c__5518__auto__,size__5519__auto__,b__70890,s__70888__$2,temp__5804__auto____$2,column_index,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
,null,null));
});})(i__70889,row_index__$1,c__5518__auto__,size__5519__auto__,b__70890,s__70888__$2,temp__5804__auto____$2,column_index,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null));

var G__70937 = (i__70889 + (1));
i__70889 = G__70937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70890),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70887(cljs.core.chunk_rest(s__70888__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70890),null);
}
} else {
var row_index__$1 = cljs.core.first(s__70888__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),cljs.core.vec((function (){var iter__5520__auto__ = ((function (row_index__$1,s__70888__$2,temp__5804__auto____$2,column_index,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__){
return (function enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70887_$_iter__70895(s__70896){
return (new cljs.core.LazySeq(null,(function (){
var s__70896__$1 = s__70896;
while(true){
var temp__5804__auto____$3 = cljs.core.seq(s__70896__$1);
if(temp__5804__auto____$3){
var s__70896__$2 = temp__5804__auto____$3;
if(cljs.core.chunked_seq_QMARK_(s__70896__$2)){
var c__5518__auto__ = cljs.core.chunk_first(s__70896__$2);
var size__5519__auto__ = cljs.core.count(c__5518__auto__);
var b__70898 = cljs.core.chunk_buffer(size__5519__auto__);
if((function (){var i__70897 = (0);
while(true){
if((i__70897 < size__5519__auto__)){
var column_index__$1 = cljs.core._nth(c__5518__auto__,i__70897);
cljs.core.chunk_append(b__70898,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null));

var G__70938 = (i__70897 + (1));
i__70897 = G__70938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70898),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70887_$_iter__70895(cljs.core.chunk_rest(s__70896__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70898),null);
}
} else {
var column_index__$1 = cljs.core.first(s__70896__$2);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.cell_text_input,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.pin,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70887_$_iter__70895(cljs.core.rest(s__70896__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index__$1,s__70888__$2,temp__5804__auto____$2,column_index,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871_$_iter__70887(cljs.core.rest(s__70888__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(column_index,s__70872__$2,temp__5804__auto____$1,row_index,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((5)));
})())], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select,enigma_nexus.table.skins.danger,enigma_nexus.table.skins.menu], null),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"expanded","expanded",-3020742),false,new cljs.core.Keyword(null,"rows","rows",850049680),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_header,enigma_nexus.table.skins.expand_collapse], null),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"B"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"columns","columns",1998437288),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()),new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.table.skins.multi_select_option], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"content","content",15833224),"C"], null)], null)], null)], null)], null),new cljs.core.Keyword(null,"indicators","indicators",1312373003),cljs.core.PersistentHashSet.EMPTY], null)
))))], 0)),enigma_nexus$tabs$state$empty_tab_$_iter__70839_$_iter__70871(cljs.core.rest(s__70872__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index,s__70840__$2,temp__5804__auto__))
;
return iter__5520__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(column_count));
})())], null),enigma_nexus$tabs$state$empty_tab_$_iter__70839(cljs.core.rest(s__70840__$2)));
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
