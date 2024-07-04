goog.provide('enigma_nexus.core');
enigma_nexus.core.router = reitit.frontend.router.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Keyword(null,"index","index",-1531685915)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/items",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",new cljs.core.Keyword(null,"items","items",1031954938)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:item-id",new cljs.core.Keyword(null,"item","item",249373802)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/about",new cljs.core.Keyword(null,"about","about",1423892543)], null)], null));
enigma_nexus.core.path_for = (function enigma_nexus$core$path_for(var_args){
var args__5772__auto__ = [];
var len__5766__auto___77680 = arguments.length;
var i__5767__auto___77681 = (0);
while(true){
if((i__5767__auto___77681 < len__5766__auto___77680)){
args__5772__auto__.push((arguments[i__5767__auto___77681]));

var G__77682 = (i__5767__auto___77681 + (1));
i__5767__auto___77681 = G__77682;
continue;
} else {
}
break;
}

var argseq__5773__auto__ = ((((1) < args__5772__auto__.length))?(new cljs.core.IndexedSeq(args__5772__auto__.slice((1)),(0),null)):null);
return enigma_nexus.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5773__auto__);
});

(enigma_nexus.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route,p__77666){
var vec__77667 = p__77666;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77667,(0),null);
if(cljs.core.truth_(params)){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$3(enigma_nexus.core.router,route,params));
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.frontend.match_by_name.cljs$core$IFn$_invoke$arity$2(enigma_nexus.core.router,route));
}
}));

(enigma_nexus.core.path_for.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(enigma_nexus.core.path_for.cljs$lang$applyTo = (function (seq77664){
var G__77665 = cljs.core.first(seq77664);
var seq77664__$1 = cljs.core.next(seq77664);
var self__5751__auto__ = this;
return self__5751__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77665,seq77664__$1);
}));

enigma_nexus.core.draw_table_array = (function enigma_nexus$core$draw_table_array(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"table"], null);
});
enigma_nexus.core.draw_tree_array = (function enigma_nexus$core$draw_tree_array(props){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"tree"], null);
});
enigma_nexus.core.array_of_maps = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(10),new cljs.core.Keyword(null,"b","b",1482224470),(20)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(10),new cljs.core.Keyword(null,"b","b",1482224470),(20)], null)], null);
enigma_nexus.core.complex_data_1 = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["q","w","e"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["q","w","e"], null)], null),"d"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","f",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3)], null),"h"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"likes","likes",792554542),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2),(3),(4)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"better","better",851615697),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),(10),new cljs.core.Keyword(null,"tree","tree",-196312028),(5)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),(20),new cljs.core.Keyword(null,"tree","tree",-196312028),(7)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table","table",-564943036),(30),new cljs.core.Keyword(null,"tree","tree",-196312028),(9)], null)], null)], null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last","last",1105735132),(999)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(10),new cljs.core.Keyword(null,"b","b",1482224470),(1)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(20),new cljs.core.Keyword(null,"b","b",1482224470),(2)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),(30),new cljs.core.Keyword(null,"b","b",1482224470),(3)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["m","n","o","p"], null)], null);
enigma_nexus.core.complex_data_2 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(19),(22),(74)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [":q",":w"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9)], null)], null),(80),(90)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["2",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"q","q",689001697),(8),new cljs.core.Keyword(null,"w","w",354169001),(9)], null),(100),(120)], null)], null);
enigma_nexus.core.sut_data = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"PDU","PDU",2003326534),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"hostname","hostname",2105669933),new cljs.core.Keyword(null,"iscsi","iscsi",-511317330),new cljs.core.Keyword(null,"locationIIS","locationIIS",1442780975),new cljs.core.Keyword(null,"preDeployedOS","preDeployedOS",-1104643533),new cljs.core.Keyword(null,"bmc","bmc",1253441204),new cljs.core.Keyword(null,"duts","duts",410647029),new cljs.core.Keyword(null,"rpi","rpi",1691044055),new cljs.core.Keyword(null,"os","os",795021913),new cljs.core.Keyword(null,"appSettings","appSettings",225698843),new cljs.core.Keyword(null,"location","location",1815599388),new cljs.core.Keyword(null,"user","user",1532431356)],["SystemUnderTest",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vendor","vendor",1931975424),"Eaton",new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"172.2.22.1",new cljs.core.Keyword(null,"outlet","outlet",749659379),"12"], null),"null","172.2.21.31",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hostname","hostname",2105669933),"172.16.0.12",new cljs.core.Keyword(null,"user","user",1532431356),"administrator",new cljs.core.Keyword(null,"password","password",417022471),""], null),"null","null",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"idrac9",new cljs.core.Keyword(null,"hostname","hostname",2105669933),"172.2.21.33",new cljs.core.Keyword(null,"user","user",1532431356),"admin",new cljs.core.Keyword(null,"password","password",417022471),"root0000"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"name","name",1843675177),"StanleyChannelQP_Fused",new cljs.core.Keyword(null,"vendor","vendor",1931975424),"OemGen",new cljs.core.Keyword(null,"PBA","PBA",1680357636),"N32446-001",new cljs.core.Keyword(null,"slot","slot",240229571),"2",new cljs.core.Keyword(null,"PCIeGen","PCIeGen",-859783185),"4",new cljs.core.Keyword(null,"NumOfLanes","NumOfLanes",-110160290),"x8",new cljs.core.Keyword(null,"Chips","Chips",-139388555),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"index","index",-1531685915),(1),new cljs.core.Keyword(null,"rpi","rpi",1691044055),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"172.2.21.35",new cljs.core.Keyword(null,"port","port",1534937262),"1",new cljs.core.Keyword(null,"em100SN","em100SN",1001882570),"EM147649",new cljs.core.Keyword(null,"PDU","PDU",2003326534),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"vendor","vendor",1931975424),"Eaton",new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"172.2.21.2",new cljs.core.Keyword(null,"outlet","outlet",749659379),"11"], null)], null),new cljs.core.Keyword(null,"ports","ports",-1014790862),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deviceIndex","deviceIndex",-283203429),(1),new cljs.core.Keyword(null,"linkPartner","linkPartner",-852680648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"switch","switch",71881310),"NEOR2W2RK2-A-LP",new cljs.core.Keyword(null,"port","port",1534937262),"37"], null),new cljs.core.Keyword(null,"applicationPartner","applicationPartner",-1011631243),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"1.2.3.4",new cljs.core.Keyword(null,"user","user",1532431356),"linkUser",new cljs.core.Keyword(null,"password","password",417022471),"linkPassword"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deviceIndex","deviceIndex",-283203429),(2),new cljs.core.Keyword(null,"linkPartner","linkPartner",-852680648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"switch","switch",71881310),"NEOR2W2RK2-A-LP",new cljs.core.Keyword(null,"port","port",1534937262),"40"], null),new cljs.core.Keyword(null,"applicationPartner","applicationPartner",-1011631243),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"1.2.3.4",new cljs.core.Keyword(null,"user","user",1532431356),"linkUser",new cljs.core.Keyword(null,"password","password",417022471),"linkPassword"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deviceIndex","deviceIndex",-283203429),(3),new cljs.core.Keyword(null,"linkPartner","linkPartner",-852680648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"switch","switch",71881310),"NEOR2W2RK2-A-LP",new cljs.core.Keyword(null,"port","port",1534937262),"43"], null),new cljs.core.Keyword(null,"applicationPartner","applicationPartner",-1011631243),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"1.2.3.4",new cljs.core.Keyword(null,"user","user",1532431356),"linkUser",new cljs.core.Keyword(null,"password","password",417022471),"linkPassword"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deviceIndex","deviceIndex",-283203429),(4),new cljs.core.Keyword(null,"linkPartner","linkPartner",-852680648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"switch","switch",71881310),"NEOR2W2RK2-A-LP",new cljs.core.Keyword(null,"port","port",1534937262),"46"], null),new cljs.core.Keyword(null,"applicationPartner","applicationPartner",-1011631243),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"1.2.3.4",new cljs.core.Keyword(null,"user","user",1532431356),"linkUser",new cljs.core.Keyword(null,"password","password",417022471),"linkPassword"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deviceIndex","deviceIndex",-283203429),(5),new cljs.core.Keyword(null,"linkPartner","linkPartner",-852680648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"switch","switch",71881310),"NEOR2W2RK2-A-LP",new cljs.core.Keyword(null,"port","port",1534937262),"37"], null),new cljs.core.Keyword(null,"applicationPartner","applicationPartner",-1011631243),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"1.2.3.4",new cljs.core.Keyword(null,"user","user",1532431356),"linkUser",new cljs.core.Keyword(null,"password","password",417022471),"linkPassword"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deviceIndex","deviceIndex",-283203429),(6),new cljs.core.Keyword(null,"linkPartner","linkPartner",-852680648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"switch","switch",71881310),"NEOR2W2RK2-A-LP",new cljs.core.Keyword(null,"port","port",1534937262),"40"], null),new cljs.core.Keyword(null,"applicationPartner","applicationPartner",-1011631243),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"1.2.3.4",new cljs.core.Keyword(null,"user","user",1532431356),"linkUser",new cljs.core.Keyword(null,"password","password",417022471),"linkPassword"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deviceIndex","deviceIndex",-283203429),(7),new cljs.core.Keyword(null,"linkPartner","linkPartner",-852680648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"switch","switch",71881310),"NEOR2W2RK2-A-LP",new cljs.core.Keyword(null,"port","port",1534937262),"43"], null),new cljs.core.Keyword(null,"applicationPartner","applicationPartner",-1011631243),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"1.2.3.4",new cljs.core.Keyword(null,"user","user",1532431356),"linkUser",new cljs.core.Keyword(null,"password","password",417022471),"linkPassword"], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deviceIndex","deviceIndex",-283203429),(8),new cljs.core.Keyword(null,"linkPartner","linkPartner",-852680648),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"switch","switch",71881310),"NEOR2W2RK2-A-LP",new cljs.core.Keyword(null,"port","port",1534937262),"46"], null),new cljs.core.Keyword(null,"applicationPartner","applicationPartner",-1011631243),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"1.2.3.4",new cljs.core.Keyword(null,"user","user",1532431356),"linkUser",new cljs.core.Keyword(null,"password","password",417022471),"linkPassword"], null)], null)], null)], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ipAddress","ipAddress",843176249),"172.2.21.35",new cljs.core.Keyword(null,"user","user",1532431356),"lab",new cljs.core.Keyword(null,"password","password",417022471),"root00",new cljs.core.Keyword(null,"serial","serial",-860213615),"ttyUSB0",new cljs.core.Keyword(null,"speed","speed",1257663751),"115200"], null),"null",cljs.core.PersistentArrayMap.EMPTY,"PTK","null"]);
console.log(cljs.core.clj__GT_js(enigma_nexus.table.skins.compile_to_table(enigma_nexus.core.sut_data)));
enigma_nexus.core.main_menu = (function enigma_nexus$core$main_menu(props){
var with_let77672 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77672","with-let77672",-1151145432));
var temp__5808__auto___77683 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77683 == null)){
} else {
var c__59044__auto___77684 = temp__5808__auto___77683;
if((with_let77672.generation === c__59044__auto___77684.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77672.generation = c__59044__auto___77684.ratomGeneration);
}

var init77673 = (with_let77672.length === (0));
var res77674 = (function (){var map__77675 = props;
var map__77675__$1 = cljs.core.__destructure_map(map__77675);
var page_STAR_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77675__$1,new cljs.core.Keyword(null,"page*","page*",-26389174));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"main-menu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.tree.state.compile_to_tree(enigma_nexus.core.sut_data))], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.tree.tree.tree_widget], null));
})], null),"Add Tree"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (ev){
var reader = (new FileReader());
var file = cljs.core.first(ev.target.files);
(reader.onload = (function (e){
var doc = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(e.target.result));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.tree.state.compile_to_tree(doc))], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.tree.tree.tree_widget], null));
}));

return reader.readAsText(file);
})], null)], null),(cljs.core.truth_(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77670_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77670_SHARP_),new cljs.core.Keyword(null,"file","file",-1269645878));
}),cljs.core.deref(page_STAR_))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["data:text/json;charset=utf-8,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(JSON.stringify(cljs.core.clj__GT_js(enigma_nexus.tree.state.decompile_from_tree(cljs.core.deref(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77671_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77671_SHARP_),new cljs.core.Keyword(null,"file","file",-1269645878));
}),cljs.core.deref(page_STAR_))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"tree*","tree*",1569275947)], null))))),null,(2))))].join(''),new cljs.core.Keyword(null,"download","download",-300081668),"data.json"], null),"Download"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.table.skins.compile_to_table(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),(10),new cljs.core.Keyword(null,"b","b",1482224470),(20),new cljs.core.Keyword(null,"c","c",-1763192079),(30)], null))),new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.table.table.table], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"table-data*","table-data*",1671610004),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(enigma_nexus.table.skins.compile_to_table(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"c","c",-1763192079)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(20),(30)], null)], null))),new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.table.table.table], null));
})], null),"Add Table"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var empty_table_STAR_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
enigma_nexus.tabs.state.add_new_tab(empty_table_STAR_,(4),(4));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832),empty_table_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.tabs.tabs.tabs], null));
})], null),"Add Table"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"component","component",1555936782),(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Hello World"], null);
})], null));
})], null),"Add Text"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(page_STAR_,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"side","side",389652279),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),enigma_nexus.tree.state.demo_data_from_figma], null),new cljs.core.Keyword(null,"component","component",1555936782),enigma_nexus.tree.tree.tree_widget], null));
})], null),"Add Tree 2"], null)], null)], null);
})();
return res77674;
});
enigma_nexus.core.home_page = (function enigma_nexus$core$home_page(){
var with_let77676 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let77676","with-let77676",1924590064));
var temp__5808__auto___77685 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___77685 == null)){
} else {
var c__59044__auto___77686 = temp__5808__auto___77685;
if((with_let77676.generation === c__59044__auto___77686.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let77676.generation = c__59044__auto___77686.ratomGeneration);
}

var init77677 = (with_let77676.length === (0));
var main_table_STAR_ = ((((init77677) || (cljs.core.not(with_let77676.hasOwnProperty((0))))))?(with_let77676[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.state.figma_tab("Test Matrix"),enigma_nexus.tabs.state.empty_tab((8),(4),"Team"),enigma_nexus.tabs.state.empty_tab((2),(2),"Other"),enigma_nexus.tabs.state.empty_tab((2),(2),"Task Board"),enigma_nexus.tabs.state.empty_tab((2),(2),"Projects"),enigma_nexus.tabs.state.empty_tab((2),(2),"Task 2.1.1")], null))):(with_let77676[(0)]));
var res77678 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.left","div.left",1530800130),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tree.tree.tree_widget,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tree*","tree*",1569275947),enigma_nexus.tree.state.demo_data_from_figma], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.right","div.right",1671235139),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Table View"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.tabs.tabs.tabs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"multi-tab-table*","multi-tab-table*",1165715832),main_table_STAR_,new cljs.core.Keyword(null,"class","class",-2030961996),"main-table"], null)], null)], null)], null);
return res77678;
});
enigma_nexus.core.items_page = (function enigma_nexus$core$items_page(){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"The items of enigma-nexus"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item_id){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item_id)].join('')], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),enigma_nexus.core.path_for.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"item","item",249373802),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),item_id], null)], 0))], null),"Item: ",item_id], null)], null);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(60)))], null)], null);
});
});
enigma_nexus.core.item_page = (function enigma_nexus$core$item_page(){
return (function (){
var routing_data = reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309));
var item = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(routing_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-params","route-params",2111411055),new cljs.core.Keyword(null,"item-id","item-id",-1804511607)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),["Item ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(item)," of enigma-nexus"].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),enigma_nexus.core.path_for(new cljs.core.Keyword(null,"items","items",1031954938))], null),"Back to the list of items"], null)], null)], null);
});
});
enigma_nexus.core.about_page = (function enigma_nexus$core$about_page(){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.main","span.main",-358707614),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"About enigma-nexus"], null)], null);
});
});
enigma_nexus.core.page_for = (function enigma_nexus$core$page_for(route){
var G__77679 = route;
var G__77679__$1 = (((G__77679 instanceof cljs.core.Keyword))?G__77679.fqn:null);
switch (G__77679__$1) {
case "index":
return new cljs.core.Var(function(){return enigma_nexus.core.home_page;},new cljs.core.Symbol("enigma-nexus.core","home-page","enigma-nexus.core/home-page",115086665,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"enigma-nexus.core","enigma-nexus.core",98428082,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"enigma_nexus/core.cljs",16,1,228,228,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(enigma_nexus.core.home_page)?enigma_nexus.core.home_page.cljs$lang$test:null)]));

break;
case "about":
return new cljs.core.Var(function(){return enigma_nexus.core.about_page;},new cljs.core.Symbol("enigma-nexus.core","about-page","enigma-nexus.core/about-page",1000983241,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"enigma-nexus.core","enigma-nexus.core",98428082,null),new cljs.core.Symbol(null,"about-page","about-page",2116788009,null),"enigma_nexus/core.cljs",17,1,265,265,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(enigma_nexus.core.about_page)?enigma_nexus.core.about_page.cljs$lang$test:null)]));

break;
case "items":
return new cljs.core.Var(function(){return enigma_nexus.core.items_page;},new cljs.core.Symbol("enigma-nexus.core","items-page","enigma-nexus.core/items-page",-387887578,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"enigma-nexus.core","enigma-nexus.core",98428082,null),new cljs.core.Symbol(null,"items-page","items-page",-1402798074,null),"enigma_nexus/core.cljs",17,1,246,246,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(enigma_nexus.core.items_page)?enigma_nexus.core.items_page.cljs$lang$test:null)]));

break;
case "item":
return new cljs.core.Var(function(){return enigma_nexus.core.item_page;},new cljs.core.Symbol("enigma-nexus.core","item-page","enigma-nexus.core/item-page",-1997988004,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"enigma-nexus.core","enigma-nexus.core",98428082,null),new cljs.core.Symbol(null,"item-page","item-page",1282130364,null),"enigma_nexus/core.cljs",16,1,256,256,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(enigma_nexus.core.item_page)?enigma_nexus.core.item_page.cljs$lang$test:null)]));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77679__$1)].join('')));

}
});
enigma_nexus.core.current_page = (function enigma_nexus$core$current_page(){
return (function (){
var page = new cljs.core.Keyword(null,"current-page","current-page",-101294180).cljs$core$IFn$_invoke$arity$1(reagent.session.get(new cljs.core.Keyword(null,"route","route",329891309)));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [page], null);
});
});
enigma_nexus.core.mount_root = (function enigma_nexus$core$mount_root(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [enigma_nexus.core.current_page], null),document.getElementById("app"));
});
enigma_nexus.core.init_BANG_ = (function enigma_nexus$core$init_BANG_(){
clerk.core.initialize_BANG_();

accountant.core.configure_navigation_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484),(function (path){
var match = reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(enigma_nexus.core.router,path);
var current_page = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match));
var route_params = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match);
reagent.core.after_render(clerk.core.after_render_BANG_);

reagent.session.put_BANG_(new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"current-page","current-page",-101294180),enigma_nexus.core.page_for(current_page),new cljs.core.Keyword(null,"route-params","route-params",2111411055),route_params], null));

return clerk.core.navigate_page_BANG_(path);
}),new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514),(function (path){
return cljs.core.boolean$(reitit.frontend.match_by_path.cljs$core$IFn$_invoke$arity$2(enigma_nexus.core.router,path));
})], null));

accountant.core.dispatch_current_BANG_();

return enigma_nexus.core.mount_root();
});
enigma_nexus.core.reload_BANG_ = (function enigma_nexus$core$reload_BANG_(){
return enigma_nexus.core.mount_root();
});

//# sourceMappingURL=enigma_nexus.core.js.map
