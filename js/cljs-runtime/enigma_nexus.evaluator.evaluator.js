goog.provide('enigma_nexus.evaluator.evaluator');
enigma_nexus.evaluator.evaluator.get_code_from_form = (function enigma_nexus$evaluator$evaluator$get_code_from_form(ev){
var form_element = ev.target;
var form_data = (new FormData(form_element));
var code = form_data.get("code");
return code;
});
enigma_nexus.evaluator.evaluator.fetch_eval = (function enigma_nexus$evaluator$evaluator$fetch_eval(code){
var encoded_code = encodeURIComponent(code);
var url = ["/eval?code=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encoded_code)].join('');
return fetch(url).then((function (response){
return response.json();
})).then(cljs.core.js__GT_clj);
});
enigma_nexus.evaluator.evaluator.evaluator = (function enigma_nexus$evaluator$evaluator$evaluator(props){
var with_let69998 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let69998","with-let69998",-1687582298));
var temp__5808__auto___70008 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5808__auto___70008 == null)){
} else {
var c__67734__auto___70009 = temp__5808__auto___70008;
if((with_let69998.generation === c__67734__auto___70009.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let69998.generation = c__67734__auto___70009.ratomGeneration);
}

var init69999 = (with_let69998.length === (0));
var last_result_STAR_ = ((((init69999) || (cljs.core.not(with_let69998.hasOwnProperty((0))))))?(with_let69998[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null)):(with_let69998[(0)]));
var handle_eval = ((((init69999) || (cljs.core.not(with_let69998.hasOwnProperty((1))))))?(with_let69998[(1)] = (function (ev){
var code = enigma_nexus.evaluator.evaluator.get_code_from_form(ev);
ev.preventDefault();

return enigma_nexus.evaluator.evaluator.fetch_eval(code).then((function (result){
return cljs.core.reset_BANG_(last_result_STAR_,cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,"result"));
}));
})):(with_let69998[(1)]));
var res70000 = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),handle_eval], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Code",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"code"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),"Eval"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Result:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(last_result_STAR_))], null)], null);
return res70000;
});

//# sourceMappingURL=enigma_nexus.evaluator.evaluator.js.map
