goog.provide('shadow.ui');
goog.require('cljs.core');
goog.require('shadow.object');
goog.require('shadow.dom');
goog.require('shadow.keyboard');
goog.require('cljs.reader');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('goog.dom.forms');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('shadow.keyboard');
goog.require('goog.dom.forms');
shadow.ui.as_path = (function as_path(k){if((k instanceof cljs.core.Keyword))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null);
} else
{return k;
}
});
shadow.ui.update_on_change = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","change","input/change",1724873674),(function (obj,attr,value){return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(obj,cljs.core.assoc_in,cljs.core.array_seq([attr,value], 0));
})], null);
shadow.ui.IInputType = (function (){var obj14157 = {};return obj14157;
})();
shadow.ui._decode = (function _decode(this$,string){if((function (){var and__4114__auto__ = this$;if(and__4114__auto__)
{return this$.shadow$ui$IInputType$_decode$arity$2;
} else
{return and__4114__auto__;
}
})())
{return this$.shadow$ui$IInputType$_decode$arity$2(this$,string);
} else
{var x__4734__auto__ = (((this$ == null))?null:this$);return (function (){var or__4126__auto__ = (shadow.ui._decode[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (shadow.ui._decode["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("IInputType.-decode",this$);
}
}
})().call(null,this$,string);
}
});
shadow.ui._encode = (function _encode(this$,val){if((function (){var and__4114__auto__ = this$;if(and__4114__auto__)
{return this$.shadow$ui$IInputType$_encode$arity$2;
} else
{return and__4114__auto__;
}
})())
{return this$.shadow$ui$IInputType$_encode$arity$2(this$,val);
} else
{var x__4734__auto__ = (((this$ == null))?null:this$);return (function (){var or__4126__auto__ = (shadow.ui._encode[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (shadow.ui._encode["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("IInputType.-encode",this$);
}
}
})().call(null,this$,val);
}
});
/**
* lazily create a dom node when attr first appears on object
*/
shadow.ui.future_node = (function future_node(oref,attr,dom_key,events_key,placeholder){var node_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var attr__$1 = ((cljs.core.vector_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));var watch_id = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();var placeholder_node = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(placeholder) : shadow.dom.build.call(null,placeholder));cljs.core.add_watch(oref,watch_id,(function (_,___$1,___$2,new$){var temp__4092__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);if(cljs.core.truth_(temp__4092__auto__))
{var value = temp__4092__auto__;var node_14158 = shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,value);shadow.dom.replace_node(placeholder_node,node_14158);
return cljs.core.remove_watch(oref,watch_id);
} else
{return null;
}
}));
return placeholder_node;
});
shadow.ui.int_type = (function (){if(typeof shadow.ui.t14159 !== 'undefined')
{} else
{
/**
* @constructor
*/
shadow.ui.t14159 = (function (meta14160){
this.meta14160 = meta14160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shadow.ui.t14159.cljs$lang$type = true;
shadow.ui.t14159.cljs$lang$ctorStr = "shadow.ui/t14159";
shadow.ui.t14159.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"shadow.ui/t14159");
});
shadow.ui.t14159.prototype.shadow$ui$IInputType$ = true;
shadow.ui.t14159.prototype.shadow$ui$IInputType$_decode$arity$2 = (function (this$,value){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(cljs.core.re_find(/^\d+$/,value)))
{return parseInt(value);
} else
{return null;
}
});
shadow.ui.t14159.prototype.shadow$ui$IInputType$_encode$arity$2 = (function (this$,val){var self__ = this;
var this$__$1 = this;return [cljs.core.str(val)].join('');
});
shadow.ui.t14159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14161){var self__ = this;
var _14161__$1 = this;return self__.meta14160;
});
shadow.ui.t14159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14161,meta14160__$1){var self__ = this;
var _14161__$1 = this;return (new shadow.ui.t14159(meta14160__$1));
});
shadow.ui.__GT_t14159 = (function __GT_t14159(meta14160){return (new shadow.ui.t14159(meta14160));
});
}
return (new shadow.ui.t14159(null));
})();
shadow.ui.text_type = (function (){if(typeof shadow.ui.t14162 !== 'undefined')
{} else
{
/**
* @constructor
*/
shadow.ui.t14162 = (function (meta14163){
this.meta14163 = meta14163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shadow.ui.t14162.cljs$lang$type = true;
shadow.ui.t14162.cljs$lang$ctorStr = "shadow.ui/t14162";
shadow.ui.t14162.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"shadow.ui/t14162");
});
shadow.ui.t14162.prototype.shadow$ui$IInputType$ = true;
shadow.ui.t14162.prototype.shadow$ui$IInputType$_decode$arity$2 = (function (this$,string){var self__ = this;
var this$__$1 = this;return clojure.string.trim(string);
});
shadow.ui.t14162.prototype.shadow$ui$IInputType$_encode$arity$2 = (function (this$,val){var self__ = this;
var this$__$1 = this;return [cljs.core.str(val)].join('');
});
shadow.ui.t14162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14164){var self__ = this;
var _14164__$1 = this;return self__.meta14163;
});
shadow.ui.t14162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14164,meta14163__$1){var self__ = this;
var _14164__$1 = this;return (new shadow.ui.t14162(meta14163__$1));
});
shadow.ui.__GT_t14162 = (function __GT_t14162(meta14163){return (new shadow.ui.t14162(meta14163));
});
}
return (new shadow.ui.t14162(null));
})();
shadow.ui.keyword_type = (function (){if(typeof shadow.ui.t14165 !== 'undefined')
{} else
{
/**
* @constructor
*/
shadow.ui.t14165 = (function (meta14166){
this.meta14166 = meta14166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
shadow.ui.t14165.cljs$lang$type = true;
shadow.ui.t14165.cljs$lang$ctorStr = "shadow.ui/t14165";
shadow.ui.t14165.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"shadow.ui/t14165");
});
shadow.ui.t14165.prototype.shadow$ui$IInputType$ = true;
shadow.ui.t14165.prototype.shadow$ui$IInputType$_decode$arity$2 = (function (this$,string){var self__ = this;
var this$__$1 = this;if((typeof string === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",string)))
{return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(string.substring(1));
} else
{return null;
}
});
shadow.ui.t14165.prototype.shadow$ui$IInputType$_encode$arity$2 = (function (this$,val){var self__ = this;
var this$__$1 = this;return [cljs.core.str(val)].join('');
});
shadow.ui.t14165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14167){var self__ = this;
var _14167__$1 = this;return self__.meta14166;
});
shadow.ui.t14165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14167,meta14166__$1){var self__ = this;
var _14167__$1 = this;return (new shadow.ui.t14165(meta14166__$1));
});
shadow.ui.__GT_t14165 = (function __GT_t14165(meta14166){return (new shadow.ui.t14165(meta14166));
});
}
return (new shadow.ui.t14165(null));
})();
shadow.object.define_event(new cljs.core.Keyword("input","change","input/change",1724873674),"when an input is changed and its value was validated",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",1016909155),"the attr arg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),"the new value"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),"the dom input?"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("input","blur","input/blur",3111690001),"when the user leaves an input field, should follow :input/validated unlike :input/change will also fire when input wasnt changed",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",1016909155),"the attr arg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),"the new value"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),"the dom input?"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("input","focus","input/focus",3219012226),"when the user focuses an input",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",1016909155),"the attr arg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),"the input"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("input","enter","input/enter",3219888258),"when enter was pressed and the value validated",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",1016909155),"attr"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),"value"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),"input"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("input","validated","input/validated",2010420652),"whenever the input was validated to be correct",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",1016909155),"attr eg. [:some :attr]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",1125876963),"the value"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom-input","dom-input",4472793841),"the dom node the value came from"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("input","error","input/error",3219242418),"whenever the input was validated to be falsy",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",1016909155),"attr eg. [:some :attr]"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",1014012659),"the error msg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom-input","dom-input",4472793841),"the dom node the string value came from"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("input","force-validation","input/force-validation",2605590213),"trigger a validation and thus resulting in input-validated/input-error",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword("input","set-values","input/set-values",541255307),"update the dom with new values",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-values","new-values",4698094945),"a map containing the values to set, each input should check for its own attribute and only update if included in the map, otherwise ignore the event"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("input","set-options","input/set-options",719072077),"update the dom with new options, probably only interesting for select boxes",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"new-options","new-options",2073585379),"a map containing the options to set, each input should check for its own attribute and only update if included in the map, otherwise ignore the event"], null)], null));
shadow.ui.index_of = (function index_of(items,check_fn){var items__$1 = items;var idx = 0;while(true){
if(cljs.core.empty_QMARK_(items__$1))
{return null;
} else
{var f = cljs.core.first(items__$1);if(cljs.core.truth_((check_fn.cljs$core$IFn$_invoke$arity$1 ? check_fn.cljs$core$IFn$_invoke$arity$1(f) : check_fn.call(null,f))))
{return idx;
} else
{{
var G__14168 = cljs.core.rest(items__$1);
var G__14169 = (idx + 1);
items__$1 = G__14168;
idx = G__14169;
continue;
}
}
}
break;
}
});
shadow.ui.dom_name = (function dom_name(attr){return clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,attr));
});
shadow.ui.with_timeout = (function with_timeout(ms,callback){return window.setTimeout(callback,ms);
});
/**
* transforms a list of maps into [[group-key [[value-key label] [value-key label]]] ...]
*/
shadow.ui.group_select_options = (function group_select_options(items,group_key,value_key,label_fn){return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__14172){var vec__14173 = p__14172;var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,0,null);var items__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14173,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,value_key),(label_fn.cljs$core$IFn$_invoke$arity$1 ? label_fn.cljs$core$IFn$_invoke$arity$1(item) : label_fn.call(null,item))], null);
}),items__$1))], null);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.group_by(group_key,items))));
});
shadow.ui.never_has_errors = (function never_has_errors(obj,field,value){return null;
});
/**
* get error message for value (nil if value is accepted)
*/
shadow.ui.get_error = (function get_error(p__14174,value){var map__14176 = p__14174;var map__14176__$1 = ((cljs.core.seq_QMARK_(map__14176))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14176):map__14176);var input = map__14176__$1;var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14176__$1,new cljs.core.Keyword(null,"a","a",1013904339));var get_error_fn = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(parent,new cljs.core.Keyword("input","get-error","input/get-error",2808972015),shadow.ui.never_has_errors);return (get_error_fn.cljs$core$IFn$_invoke$arity$3 ? get_error_fn.cljs$core$IFn$_invoke$arity$3(parent,a,value) : get_error_fn.call(null,parent,a,value));
});
/**
* validate value and notify parent
* notifies obj with [:input/error attr error-msg input] when an error is found
* notifies obj with [:input/validated attr value input] when no error is found
*/
shadow.ui.do_validation = (function do_validation(p__14177,value){var map__14179 = p__14177;var map__14179__$1 = ((cljs.core.seq_QMARK_(map__14179))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14179):map__14179);var input = map__14179__$1;var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14179__$1,new cljs.core.Keyword(null,"a","a",1013904339));var get_error_fn = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(parent,new cljs.core.Keyword("input","get-error","input/get-error",2808972015),shadow.ui.never_has_errors);var temp__4090__auto__ = shadow.ui.get_error(input,value);if(cljs.core.truth_(temp__4090__auto__))
{var msg = temp__4090__auto__;shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","error","input/error",3219242418),cljs.core.array_seq([a,msg,input], 0));
return false;
} else
{shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","validated","input/validated",2010420652),cljs.core.array_seq([a,value,input], 0));
return true;
}
});
shadow.ui.quick_validation = (function quick_validation(p__14180){var map__14182 = p__14180;var map__14182__$1 = ((cljs.core.seq_QMARK_(map__14182))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14182):map__14182);var this$ = map__14182__$1;var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14182__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var sval = shadow.dom.get_value(this$);var value = shadow.ui._decode(input_type,sval);return shadow.ui.do_validation(this$,value);
});
shadow.ui.dom_input_behavior = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","force-validation","input/force-validation",2605590213),shadow.ui.quick_validation,new cljs.core.Keyword("input","set-values","input/set-values",541255307),(function (p__14183,new_values){var map__14184 = p__14183;var map__14184__$1 = ((cljs.core.seq_QMARK_(map__14184))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14184):map__14184);var this$ = map__14184__$1;var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14184__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14184__$1,new cljs.core.Keyword(null,"a","a",1013904339));var temp__4092__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_values,a);if(cljs.core.truth_(temp__4092__auto__))
{var nv = temp__4092__auto__;shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.assoc,cljs.core.array_seq([new cljs.core.Keyword(null,"v","v",1013904360),nv], 0));
return shadow.dom.set_value(this$,shadow.ui._encode(input_type,nv));
} else
{return null;
}
})], null);
shadow.ui.dom_select_options_grouped = (function dom_select_options_grouped(input_type,options){var iter__4824__auto__ = (function iter__14225(s__14226){return (new cljs.core.LazySeq(null,(function (){var s__14226__$1 = s__14226;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14226__$1);if(temp__4092__auto__)
{var s__14226__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14226__$2))
{var c__4822__auto__ = cljs.core.chunk_first(s__14226__$2);var size__4823__auto__ = cljs.core.count(c__4822__auto__);var b__14228 = cljs.core.chunk_buffer(size__4823__auto__);if((function (){var i__14227 = 0;while(true){
if((i__14227 < size__4823__auto__))
{var vec__14247 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4822__auto__,i__14227);var group_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,0,null);var group_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14247,1,null);cljs.core.chunk_append(b__14228,((typeof group_options === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),shadow.ui._encode(input_type,group_label)], null),group_options], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),group_label], null),(function (){var iter__4824__auto__ = ((function (i__14227,vec__14247,group_label,group_options,c__4822__auto__,size__4823__auto__,b__14228,s__14226__$2,temp__4092__auto__){
return (function iter__14248(s__14249){return (new cljs.core.LazySeq(null,((function (i__14227,vec__14247,group_label,group_options,c__4822__auto__,size__4823__auto__,b__14228,s__14226__$2,temp__4092__auto__){
return (function (){var s__14249__$1 = s__14249;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__14249__$1);if(temp__4092__auto____$1)
{var s__14249__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__14249__$2))
{var c__4822__auto____$1 = cljs.core.chunk_first(s__14249__$2);var size__4823__auto____$1 = cljs.core.count(c__4822__auto____$1);var b__14251 = cljs.core.chunk_buffer(size__4823__auto____$1);if((function (){var i__14250 = 0;while(true){
if((i__14250 < size__4823__auto____$1))
{var vec__14254 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4822__auto____$1,i__14250);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14254,0,null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14254,1,null);cljs.core.chunk_append(b__14251,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),shadow.ui._encode(input_type,value)], null),[cljs.core.str(label)].join('')], null));
{
var G__14265 = (i__14250 + 1);
i__14250 = G__14265;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14251),iter__14248(cljs.core.chunk_rest(s__14249__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14251),null);
}
} else
{var vec__14255 = cljs.core.first(s__14249__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14255,0,null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14255,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),shadow.ui._encode(input_type,value)], null),[cljs.core.str(label)].join('')], null),iter__14248(cljs.core.rest(s__14249__$2)));
}
} else
{return null;
}
break;
}
});})(i__14227,vec__14247,group_label,group_options,c__4822__auto__,size__4823__auto__,b__14228,s__14226__$2,temp__4092__auto__))
,null,null));
});})(i__14227,vec__14247,group_label,group_options,c__4822__auto__,size__4823__auto__,b__14228,s__14226__$2,temp__4092__auto__))
;return iter__4824__auto__(group_options);
})()], null)));
{
var G__14266 = (i__14227 + 1);
i__14227 = G__14266;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14228),iter__14225(cljs.core.chunk_rest(s__14226__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14228),null);
}
} else
{var vec__14256 = cljs.core.first(s__14226__$2);var group_label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14256,0,null);var group_options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14256,1,null);return cljs.core.cons(((typeof group_options === 'string')?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),shadow.ui._encode(input_type,group_label)], null),group_options], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),group_label], null),(function (){var iter__4824__auto__ = ((function (vec__14256,group_label,group_options,s__14226__$2,temp__4092__auto__){
return (function iter__14257(s__14258){return (new cljs.core.LazySeq(null,((function (vec__14256,group_label,group_options,s__14226__$2,temp__4092__auto__){
return (function (){var s__14258__$1 = s__14258;while(true){
var temp__4092__auto____$1 = cljs.core.seq(s__14258__$1);if(temp__4092__auto____$1)
{var s__14258__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(s__14258__$2))
{var c__4822__auto__ = cljs.core.chunk_first(s__14258__$2);var size__4823__auto__ = cljs.core.count(c__4822__auto__);var b__14260 = cljs.core.chunk_buffer(size__4823__auto__);if((function (){var i__14259 = 0;while(true){
if((i__14259 < size__4823__auto__))
{var vec__14263 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4822__auto__,i__14259);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14263,0,null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14263,1,null);cljs.core.chunk_append(b__14260,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),shadow.ui._encode(input_type,value)], null),[cljs.core.str(label)].join('')], null));
{
var G__14267 = (i__14259 + 1);
i__14259 = G__14267;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14260),iter__14257(cljs.core.chunk_rest(s__14258__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14260),null);
}
} else
{var vec__14264 = cljs.core.first(s__14258__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14264,0,null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14264,1,null);return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),shadow.ui._encode(input_type,value)], null),[cljs.core.str(label)].join('')], null),iter__14257(cljs.core.rest(s__14258__$2)));
}
} else
{return null;
}
break;
}
});})(vec__14256,group_label,group_options,s__14226__$2,temp__4092__auto__))
,null,null));
});})(vec__14256,group_label,group_options,s__14226__$2,temp__4092__auto__))
;return iter__4824__auto__(group_options);
})()], null)),iter__14225(cljs.core.rest(s__14226__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4824__auto__(options);
});
shadow.ui.dom_select_options_flat = (function dom_select_options_flat(input_type,options){var iter__4824__auto__ = (function iter__14276(s__14277){return (new cljs.core.LazySeq(null,(function (){var s__14277__$1 = s__14277;while(true){
var temp__4092__auto__ = cljs.core.seq(s__14277__$1);if(temp__4092__auto__)
{var s__14277__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(s__14277__$2))
{var c__4822__auto__ = cljs.core.chunk_first(s__14277__$2);var size__4823__auto__ = cljs.core.count(c__4822__auto__);var b__14279 = cljs.core.chunk_buffer(size__4823__auto__);if((function (){var i__14278 = 0;while(true){
if((i__14278 < size__4823__auto__))
{var vec__14282 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4822__auto__,i__14278);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14282,0,null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14282,1,null);var label__$1 = (function (){var or__4126__auto__ = label;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return value;
}
})();cljs.core.chunk_append(b__14279,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),shadow.ui._encode(input_type,value)], null),[cljs.core.str(label__$1)].join('')], null));
{
var G__14284 = (i__14278 + 1);
i__14278 = G__14284;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons(cljs.core.chunk(b__14279),iter__14276(cljs.core.chunk_rest(s__14277__$2)));
} else
{return cljs.core.chunk_cons(cljs.core.chunk(b__14279),null);
}
} else
{var vec__14283 = cljs.core.first(s__14277__$2);var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14283,0,null);var label = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14283,1,null);var label__$1 = (function (){var or__4126__auto__ = label;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return value;
}
})();return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",1125876963),shadow.ui._encode(input_type,value)], null),[cljs.core.str(label__$1)].join('')], null),iter__14276(cljs.core.rest(s__14277__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4824__auto__(options);
});
shadow.ui.dom_select_options = (function dom_select_options(p__14285,options){var map__14287 = p__14285;var map__14287__$1 = ((cljs.core.seq_QMARK_(map__14287))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14287):map__14287);var this$ = map__14287__$1;var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14287__$1,new cljs.core.Keyword(null,"group","group",1112533489));var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14287__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));if(cljs.core.truth_(group))
{return shadow.ui.dom_select_options_grouped(input_type,options);
} else
{return shadow.ui.dom_select_options_flat(input_type,options);
}
});
shadow.object.define.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("shadow.ui","dom-select","shadow.ui/dom-select",1211478339),cljs.core.array_seq([new cljs.core.Keyword(null,"dom","dom",1014003892),(function (p__14288){var map__14289 = p__14288;var map__14289__$1 = ((cljs.core.seq_QMARK_(map__14289))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14289):map__14289);var this$ = map__14289__$1;var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14289__$1,new cljs.core.Keyword(null,"options","options",4059396624));var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14289__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660),cljs.core.PersistentArrayMap.EMPTY);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),attrs,shadow.ui.dom_select_options(this$,options)], null);
}),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.ui.dom_input_behavior], null),new cljs.core.Keyword(null,"on","on",1013907793),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","init","dom/init",1023578004),(function (p__14290){var map__14291 = p__14290;var map__14291__$1 = ((cljs.core.seq_QMARK_(map__14291))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14291):map__14291);var this$ = map__14291__$1;var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14291__$1,new cljs.core.Keyword(null,"v","v",1013904360));var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14291__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));return shadow.dom.set_value(this$,shadow.ui._encode(input_type,v));
}),new cljs.core.Keyword("input","set-options","input/set-options",719072077),(function (p__14292,new_options){var map__14293 = p__14292;var map__14293__$1 = ((cljs.core.seq_QMARK_(map__14293))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14293):map__14293);var this$ = map__14293__$1;var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14293__$1,new cljs.core.Keyword(null,"v","v",1013904360));var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14293__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14293__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14293__$1,new cljs.core.Keyword(null,"a","a",1013904339));var temp__4092__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_options,a);if(cljs.core.truth_(temp__4092__auto__))
{var nv = temp__4092__auto__;shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.assoc,cljs.core.array_seq([new cljs.core.Keyword(null,"options","options",4059396624),nv], 0));
var curval = shadow.ui._encode(input_type,v);shadow.dom.reset(this$);
var seq__14294_14300 = cljs.core.seq(shadow.ui.dom_select_options(this$,nv));var chunk__14295_14301 = null;var count__14296_14302 = 0;var i__14297_14303 = 0;while(true){
if((i__14297_14303 < count__14296_14302))
{var opt_14304 = chunk__14295_14301.cljs$core$IIndexed$_nth$arity$2(null,i__14297_14303);shadow.dom.append.cljs$core$IFn$_invoke$arity$2(this$,opt_14304);
{
var G__14305 = seq__14294_14300;
var G__14306 = chunk__14295_14301;
var G__14307 = count__14296_14302;
var G__14308 = (i__14297_14303 + 1);
seq__14294_14300 = G__14305;
chunk__14295_14301 = G__14306;
count__14296_14302 = G__14307;
i__14297_14303 = G__14308;
continue;
}
} else
{var temp__4092__auto___14309__$1 = cljs.core.seq(seq__14294_14300);if(temp__4092__auto___14309__$1)
{var seq__14294_14310__$1 = temp__4092__auto___14309__$1;if(cljs.core.chunked_seq_QMARK_(seq__14294_14310__$1))
{var c__4855__auto___14311 = cljs.core.chunk_first(seq__14294_14310__$1);{
var G__14312 = cljs.core.chunk_rest(seq__14294_14310__$1);
var G__14313 = c__4855__auto___14311;
var G__14314 = cljs.core.count(c__4855__auto___14311);
var G__14315 = 0;
seq__14294_14300 = G__14312;
chunk__14295_14301 = G__14313;
count__14296_14302 = G__14314;
i__14297_14303 = G__14315;
continue;
}
} else
{var opt_14316 = cljs.core.first(seq__14294_14310__$1);shadow.dom.append.cljs$core$IFn$_invoke$arity$2(this$,opt_14316);
{
var G__14317 = cljs.core.next(seq__14294_14310__$1);
var G__14318 = null;
var G__14319 = 0;
var G__14320 = 0;
seq__14294_14300 = G__14317;
chunk__14295_14301 = G__14318;
count__14296_14302 = G__14319;
i__14297_14303 = G__14320;
continue;
}
}
} else
{}
}
break;
}
var values = shadow.dom.select_option_values(this$);var value_set = cljs.core.set(values);if(cljs.core.truth_((function (){var and__4114__auto__ = curval;if(cljs.core.truth_(and__4114__auto__))
{return cljs.core.contains_QMARK_(value_set,curval);
} else
{return and__4114__auto__;
}
})()))
{return shadow.dom.set_value(this$,curval);
} else
{var temp__4092__auto____$1 = cljs.core.first(values);if(cljs.core.truth_(temp__4092__auto____$1))
{var n_val = temp__4092__auto____$1;shadow.dom.set_value(this$,n_val);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","change","input/change",1724873674),cljs.core.array_seq([a,shadow.ui._decode(input_type,n_val),this$], 0));
} else
{return null;
}
}
} else
{return null;
}
})], null),new cljs.core.Keyword("dom","events","dom/events",4023911321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),(function (p__14298,ev){var map__14299 = p__14298;var map__14299__$1 = ((cljs.core.seq_QMARK_(map__14299))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14299):map__14299);var this$ = map__14299__$1;var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14299__$1,new cljs.core.Keyword(null,"a","a",1013904339));var sval = shadow.dom.get_value(this$);var value = shadow.ui._decode(input_type,sval);if(shadow.ui.do_validation(this$,value))
{return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","change","input/change",1724873674),cljs.core.array_seq([a,value,this$], 0));
} else
{return null;
}
})], null)], 0));
shadow.ui.dom_select = (function() {
var dom_select = null;
var dom_select__4 = (function (obj,attr,type,options){return dom_select.cljs$core$IFn$_invoke$arity$5(obj,attr,type,options,cljs.core.PersistentArrayMap.EMPTY);
});
var dom_select__5 = (function (obj,attr,type,options,select_attrs){if((function (){var G__14322 = type;if(G__14322)
{var bit__4757__auto__ = null;if(cljs.core.truth_((function (){var or__4126__auto__ = bit__4757__auto__;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return G__14322.shadow$ui$IInputType$;
}
})()))
{return true;
} else
{if((!G__14322.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(shadow.ui.IInputType,G__14322);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(shadow.ui.IInputType,G__14322);
}
})())
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("dom select type must support protocol InputType",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),type], null));
}
if(cljs.core.vector_QMARK_(options))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("select options should be a vector",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"parent","parent",4313447452),obj,new cljs.core.Keyword(null,"attr","attr",1016909155),attr,new cljs.core.Keyword(null,"options","options",4059396624),options], null));
}
var a = shadow.ui.as_path(attr);var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(obj,a);return shadow.object.create(new cljs.core.Keyword("shadow.ui","dom-select","shadow.ui/dom-select",1211478339),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"parent","parent",4313447452),obj,new cljs.core.Keyword(null,"attrs","attrs",1107056660),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(select_attrs,new cljs.core.Keyword(null,"group","group",1112533489)),new cljs.core.Keyword(null,"options","options",4059396624),options,new cljs.core.Keyword(null,"group","group",1112533489),new cljs.core.Keyword(null,"group","group",1112533489).cljs$core$IFn$_invoke$arity$1(select_attrs),new cljs.core.Keyword(null,"a","a",1013904339),a,new cljs.core.Keyword(null,"v","v",1013904360),v,new cljs.core.Keyword(null,"input-type","input-type",2354420431),type], null));
});
dom_select = function(obj,attr,type,options,select_attrs){
switch(arguments.length){
case 4:
return dom_select__4.call(this,obj,attr,type,options);
case 5:
return dom_select__5.call(this,obj,attr,type,options,select_attrs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_select.cljs$core$IFn$_invoke$arity$4 = dom_select__4;
dom_select.cljs$core$IFn$_invoke$arity$5 = dom_select__5;
return dom_select;
})()
;
shadow.ui.dom_select_grouped = (function() {
var dom_select_grouped = null;
var dom_select_grouped__4 = (function (obj,attr,type,options){return shadow.ui.dom_select.cljs$core$IFn$_invoke$arity$5(obj,attr,type,options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",1112533489),true], null));
});
var dom_select_grouped__5 = (function (obj,attr,type,options,select_attrs){return shadow.ui.dom_select.cljs$core$IFn$_invoke$arity$5(obj,attr,type,options,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(select_attrs,new cljs.core.Keyword(null,"group","group",1112533489),true));
});
dom_select_grouped = function(obj,attr,type,options,select_attrs){
switch(arguments.length){
case 4:
return dom_select_grouped__4.call(this,obj,attr,type,options);
case 5:
return dom_select_grouped__5.call(this,obj,attr,type,options,select_attrs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_select_grouped.cljs$core$IFn$_invoke$arity$4 = dom_select_grouped__4;
dom_select_grouped.cljs$core$IFn$_invoke$arity$5 = dom_select_grouped__5;
return dom_select_grouped;
})()
;
shadow.ui.process_dom_input = (function process_dom_input(p__14323,ev_type){var map__14325 = p__14323;var map__14325__$1 = ((cljs.core.seq_QMARK_(map__14325))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14325):map__14325);var this$ = map__14325__$1;var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14325__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14325__$1,new cljs.core.Keyword(null,"a","a",1013904339));var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14325__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var sval = shadow.dom.get_value(this$);var value = shadow.ui._decode(input_type,sval);if(shadow.ui.do_validation(this$,value))
{return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,ev_type,cljs.core.array_seq([a,value,this$], 0));
} else
{return null;
}
});
shadow.object.define.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("shadow.ui","dom-input","shadow.ui/dom-input",4271645979),cljs.core.array_seq([new cljs.core.Keyword(null,"dom","dom",1014003892),(function (p__14326){var map__14327 = p__14326;var map__14327__$1 = ((cljs.core.seq_QMARK_(map__14327))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14327):map__14327);var this$ = map__14327__$1;var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14327__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"text"], null),attrs], 0))], null);
}),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.ui.dom_input_behavior], null),new cljs.core.Keyword(null,"on","on",1013907793),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","init","dom/init",1023578004),(function (p__14328){var map__14329 = p__14328;var map__14329__$1 = ((cljs.core.seq_QMARK_(map__14329))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14329):map__14329);var this$ = map__14329__$1;var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"v","v",1013904360));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14329__$1,new cljs.core.Keyword(null,"a","a",1013904339));if(cljs.core.truth_(v))
{return shadow.dom.set_value(this$,shadow.ui._encode(input_type,v));
} else
{return null;
}
}),new cljs.core.Keyword("dom","entered","dom/entered",3723224571),(function (p__14330){var map__14331 = p__14330;var map__14331__$1 = ((cljs.core.seq_QMARK_(map__14331))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14331):map__14331);var this$ = map__14331__$1;var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14331__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14331__$1,new cljs.core.Keyword(null,"v","v",1013904360));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14331__$1,new cljs.core.Keyword(null,"a","a",1013904339));var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14331__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("off",shadow.dom.attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword(null,"autocomplete","autocomplete",4470924122))))
{return null;
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,""))
{return window.setTimeout((function (){var sv = shadow.dom.get_value(this$);if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(sv,""))
{var new_value = shadow.ui._decode(input_type,sv);if(shadow.ui.do_validation(this$,new_value))
{shadow.object.log.cljs$core$IFn$_invoke$arity$3("found autocomplete field",parent,a);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","change","input/change",1724873674),cljs.core.array_seq([a,new_value,this$], 0));
} else
{return null;
}
} else
{return null;
}
}),250);
} else
{return null;
}
}
}),new cljs.core.Keyword("dom","init","dom/init",1023578004),(function (p__14332){var map__14333 = p__14332;var map__14333__$1 = ((cljs.core.seq_QMARK_(map__14333))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14333):map__14333);var this$ = map__14333__$1;var capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14333__$1,new cljs.core.Keyword(null,"capture","capture",1566489272));var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14333__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14333__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14333__$1,new cljs.core.Keyword(null,"a","a",1013904339));if(cljs.core.contains_QMARK_(capture,new cljs.core.Keyword(null,"enter","enter",1110571594)))
{return shadow.dom.on.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword(null,"keyup","keyup",1115849900),(function (e){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(13,e.keyCode))
{var sval = shadow.dom.get_value(this$);var new_value = shadow.ui._decode(input_type,sval);if(shadow.ui.do_validation(this$,new_value))
{return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","enter","input/enter",3219888258),cljs.core.array_seq([a,new_value,this$], 0));
} else
{return null;
}
} else
{return null;
}
}));
} else
{return null;
}
})], null),new cljs.core.Keyword("dom","events","dom/events",4023911321),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"focus","focus",1111509066),(function (p__14334,ev){var map__14335 = p__14334;var map__14335__$1 = ((cljs.core.seq_QMARK_(map__14335))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14335):map__14335);var this$ = map__14335__$1;var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14335__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14335__$1,new cljs.core.Keyword(null,"a","a",1013904339));return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","focus","input/focus",3219012226),cljs.core.array_seq([a,this$], 0));
}),new cljs.core.Keyword(null,"change","change",3947235106),(function (p__14336,ev){var map__14337 = p__14336;var map__14337__$1 = ((cljs.core.seq_QMARK_(map__14337))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14337):map__14337);var this$ = map__14337__$1;var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14337__$1,new cljs.core.Keyword(null,"v","v",1013904360));var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14337__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14337__$1,new cljs.core.Keyword(null,"a","a",1013904339));var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14337__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var sval = shadow.dom.get_value(this$);var new_value = shadow.ui._decode(input_type,sval);if(shadow.ui.do_validation(this$,new_value))
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_value,v))
{shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.assoc,cljs.core.array_seq([new cljs.core.Keyword(null,"v","v",1013904360),new_value], 0));
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","change","input/change",1724873674),cljs.core.array_seq([a,new_value,this$], 0));
} else
{return null;
}
} else
{return null;
}
}),new cljs.core.Keyword(null,"blur","blur",1016931289),(function (p__14338,ev){var map__14339 = p__14338;var map__14339__$1 = ((cljs.core.seq_QMARK_(map__14339))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14339):map__14339);var this$ = map__14339__$1;var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,new cljs.core.Keyword(null,"v","v",1013904360));var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,new cljs.core.Keyword(null,"a","a",1013904339));var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14339__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","blur","input/blur",3111690001),cljs.core.array_seq([a,this$], 0));
var sval = shadow.dom.get_value(this$);var new_value = shadow.ui._decode(input_type,sval);return shadow.ui.do_validation(this$,new_value);
})], null)], 0));
shadow.ui.dom_input = (function dom_input(obj,attr,type,attrs){if((function (){var G__14341 = type;if(G__14341)
{var bit__4757__auto__ = null;if(cljs.core.truth_((function (){var or__4126__auto__ = bit__4757__auto__;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return G__14341.shadow$ui$IInputType$;
}
})()))
{return true;
} else
{if((!G__14341.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(shadow.ui.IInputType,G__14341);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(shadow.ui.IInputType,G__14341);
}
})())
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("dom input type must support protocol InputType",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),type], null));
}
var attr__$1 = shadow.ui.as_path(attr);var capture = new cljs.core.Keyword(null,"capture","capture",1566489272).cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change","change",3947235106),null], null), null));var init_val = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(obj,attr__$1);if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$2(attrs,"");
}
})();var input_attrs = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"capture","capture",1566489272),cljs.core.array_seq([new cljs.core.Keyword(null,"default","default",2558708147)], 0));var input_attrs__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1017277949),shadow.ui.dom_name(attr__$1)], null),input_attrs], 0));return shadow.object.create(new cljs.core.Keyword("shadow.ui","dom-input","shadow.ui/dom-input",4271645979),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"parent","parent",4313447452),obj,new cljs.core.Keyword(null,"attrs","attrs",1107056660),input_attrs__$1,new cljs.core.Keyword(null,"capture","capture",1566489272),capture,new cljs.core.Keyword(null,"input-type","input-type",2354420431),type,new cljs.core.Keyword(null,"a","a",1013904339),attr__$1,new cljs.core.Keyword(null,"v","v",1013904360),init_val], null));
});
shadow.object.define.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("shadow.ui","dom-checkbox","shadow.ui/dom-checkbox",796350790),cljs.core.array_seq([new cljs.core.Keyword(null,"dom","dom",1014003892),(function (p__14342){var map__14343 = p__14342;var map__14343__$1 = ((cljs.core.seq_QMARK_(map__14343))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14343):map__14343);var this$ = map__14343__$1;var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14343__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),attrs], null);
}),new cljs.core.Keyword(null,"on","on",1013907793),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("input","force-validation","input/force-validation",2605590213),(function (this$){return shadow.ui.do_validation(this$,new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(this$));
}),new cljs.core.Keyword("input","set-values","input/set-values",541255307),(function (p__14344,new_values){var map__14345 = p__14344;var map__14345__$1 = ((cljs.core.seq_QMARK_(map__14345))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14345):map__14345);var this$ = map__14345__$1;var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14345__$1,new cljs.core.Keyword(null,"negated","negated",2844732692));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14345__$1,new cljs.core.Keyword(null,"a","a",1013904339));var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_values,a);if((nv == null))
{return null;
} else
{shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.assoc,cljs.core.array_seq([new cljs.core.Keyword(null,"v","v",1013904360),nv], 0));
var dv = (cljs.core.truth_(negated)?cljs.core.not(nv):nv);return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(this$,dv);
}
})], null),new cljs.core.Keyword("dom","events","dom/events",4023911321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),(function (p__14346,e){var map__14347 = p__14346;var map__14347__$1 = ((cljs.core.seq_QMARK_(map__14347))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14347):map__14347);var this$ = map__14347__$1;var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14347__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14347__$1,new cljs.core.Keyword(null,"negated","negated",2844732692));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14347__$1,new cljs.core.Keyword(null,"a","a",1013904339));var nv = shadow.dom.checked_QMARK_(this$);var nv__$1 = (cljs.core.truth_(negated)?cljs.core.not(nv):nv);shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.assoc,cljs.core.array_seq([new cljs.core.Keyword(null,"v","v",1013904360),nv__$1], 0));
if(shadow.ui.do_validation(this$,nv__$1))
{return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","change","input/change",1724873674),cljs.core.array_seq([a,nv__$1,this$], 0));
} else
{return null;
}
})], null)], 0));
shadow.ui.dom_checkbox = (function() {
var dom_checkbox = null;
var dom_checkbox__2 = (function (obj,attr){return dom_checkbox.cljs$core$IFn$_invoke$arity$3(obj,attr,cljs.core.PersistentArrayMap.EMPTY);
});
var dom_checkbox__3 = (function (obj,attr,attrs){var a = shadow.ui.as_path(attr);var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(obj,a,false);var negated = new cljs.core.Keyword(null,"negated","negated",2844732692).cljs$core$IFn$_invoke$arity$2(attrs,false);var v__$1 = (cljs.core.truth_(negated)?cljs.core.not(v):v);var attrs__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"negated","negated",2844732692));var attrs__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,new cljs.core.Keyword(null,"type","type",1017479852),"checkbox");var attrs__$3 = (cljs.core.truth_(v__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$2,new cljs.core.Keyword(null,"checked","checked",1756218137),true):attrs__$2);return shadow.object.create(new cljs.core.Keyword("shadow.ui","dom-checkbox","shadow.ui/dom-checkbox",796350790),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"parent","parent",4313447452),obj,new cljs.core.Keyword(null,"negated","negated",2844732692),negated,new cljs.core.Keyword(null,"a","a",1013904339),a,new cljs.core.Keyword(null,"v","v",1013904360),v__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660),attrs__$3], null));
});
dom_checkbox = function(obj,attr,attrs){
switch(arguments.length){
case 2:
return dom_checkbox__2.call(this,obj,attr);
case 3:
return dom_checkbox__3.call(this,obj,attr,attrs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_checkbox.cljs$core$IFn$_invoke$arity$2 = dom_checkbox__2;
dom_checkbox.cljs$core$IFn$_invoke$arity$3 = dom_checkbox__3;
return dom_checkbox;
})()
;
shadow.object.define.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("shadow.ui","dom-radio","shadow.ui/dom-radio",4280609036),cljs.core.array_seq([new cljs.core.Keyword(null,"dom","dom",1014003892),(function (p__14348){var map__14349 = p__14348;var map__14349__$1 = ((cljs.core.seq_QMARK_(map__14349))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14349):map__14349);var this$ = map__14349__$1;var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14349__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"checked","checked",1756218137))], null);
}),new cljs.core.Keyword(null,"on","on",1013907793),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","init","dom/init",1023578004),(function (p__14350){var map__14351 = p__14350;var map__14351__$1 = ((cljs.core.seq_QMARK_(map__14351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14351):map__14351);var this$ = map__14351__$1;var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14351__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660));if(cljs.core.truth_(new cljs.core.Keyword(null,"checked","checked",1756218137).cljs$core$IFn$_invoke$arity$1(attrs)))
{return shadow.ui.with_timeout(1,(function (){return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(this$,true);
}));
} else
{return null;
}
}),new cljs.core.Keyword("input","force-validation","input/force-validation",2605590213),(function (this$){return shadow.ui.do_validation(this$,new cljs.core.Keyword(null,"v","v",1013904360).cljs$core$IFn$_invoke$arity$1(this$));
}),new cljs.core.Keyword("input","set-values","input/set-values",541255307),(function (p__14352,new_values){var map__14353 = p__14352;var map__14353__$1 = ((cljs.core.seq_QMARK_(map__14353))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14353):map__14353);var this$ = map__14353__$1;var negated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14353__$1,new cljs.core.Keyword(null,"negated","negated",2844732692));var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14353__$1,new cljs.core.Keyword(null,"v","v",1013904360));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14353__$1,new cljs.core.Keyword(null,"a","a",1013904339));var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_values,a);return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(this$,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nv,v));
})], null),new cljs.core.Keyword("dom","events","dom/events",4023911321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),(function (p__14354,e){var map__14355 = p__14354;var map__14355__$1 = ((cljs.core.seq_QMARK_(map__14355))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14355):map__14355);var this$ = map__14355__$1;var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"v","v",1013904360));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14355__$1,new cljs.core.Keyword(null,"a","a",1013904339));if(cljs.core.truth_(shadow.dom.checked_QMARK_(this$)))
{if(shadow.ui.do_validation(this$,v))
{return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","change","input/change",1724873674),cljs.core.array_seq([a,v,this$], 0));
} else
{return null;
}
} else
{return null;
}
})], null)], 0));
shadow.ui.dom_radio = (function() {
var dom_radio = null;
var dom_radio__4 = (function (obj,attr,input_type,v){return dom_radio.cljs$core$IFn$_invoke$arity$5(obj,attr,input_type,v,cljs.core.PersistentArrayMap.EMPTY);
});
var dom_radio__5 = (function (obj,attr,input_type,v,attrs){var a = shadow.ui.as_path(attr);var cv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(obj,a,false);var attrs__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(attrs,new cljs.core.Keyword(null,"type","type",1017479852),"radio",cljs.core.array_seq([new cljs.core.Keyword(null,"name","name",1017277949),shadow.ui.dom_name(a)], 0));var attrs__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cv,v))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(attrs__$1,new cljs.core.Keyword(null,"checked","checked",1756218137),true):attrs__$1);shadow.object.log.cljs$core$IFn$_invoke$arity$5("dom-radio",a,v,cv,attrs__$2);
return shadow.object.create(new cljs.core.Keyword("shadow.ui","dom-radio","shadow.ui/dom-radio",4280609036),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"parent","parent",4313447452),obj,new cljs.core.Keyword(null,"a","a",1013904339),a,new cljs.core.Keyword(null,"v","v",1013904360),v,new cljs.core.Keyword(null,"attrs","attrs",1107056660),attrs__$2], null));
});
dom_radio = function(obj,attr,input_type,v,attrs){
switch(arguments.length){
case 4:
return dom_radio__4.call(this,obj,attr,input_type,v);
case 5:
return dom_radio__5.call(this,obj,attr,input_type,v,attrs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dom_radio.cljs$core$IFn$_invoke$arity$4 = dom_radio__4;
dom_radio.cljs$core$IFn$_invoke$arity$5 = dom_radio__5;
return dom_radio;
})()
;
shadow.object.define.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("shadow.ui","dom-textarea","shadow.ui/dom-textarea",2813861053),cljs.core.array_seq([new cljs.core.Keyword(null,"dom","dom",1014003892),(function (p__14356){var map__14357 = p__14356;var map__14357__$1 = ((cljs.core.seq_QMARK_(map__14357))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14357):map__14357);var this$ = map__14357__$1;var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14357__$1,new cljs.core.Keyword(null,"v","v",1013904360));var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14357__$1,new cljs.core.Keyword(null,"attrs","attrs",1107056660));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),attrs,v], null);
}),new cljs.core.Keyword(null,"behaviors","behaviors",607554515),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow.ui.dom_input_behavior], null),new cljs.core.Keyword("dom","events","dom/events",4023911321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"change","change",3947235106),(function (p__14358,e){var map__14359 = p__14358;var map__14359__$1 = ((cljs.core.seq_QMARK_(map__14359))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14359):map__14359);var this$ = map__14359__$1;var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14359__$1,new cljs.core.Keyword(null,"input-type","input-type",2354420431));var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14359__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14359__$1,new cljs.core.Keyword(null,"a","a",1013904339));var sval = shadow.dom.get_value(this$);var value = shadow.ui._decode(input_type,sval);if(shadow.ui.do_validation(this$,value))
{return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("input","change","input/change",1724873674),cljs.core.array_seq([a,value,this$], 0));
} else
{return null;
}
})], null)], 0));
shadow.ui.dom_textarea = (function dom_textarea(obj,attr,type,attrs){if((function (){var G__14361 = type;if(G__14361)
{var bit__4757__auto__ = null;if(cljs.core.truth_((function (){var or__4126__auto__ = bit__4757__auto__;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return G__14361.shadow$ui$IInputType$;
}
})()))
{return true;
} else
{if((!G__14361.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(shadow.ui.IInputType,G__14361);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(shadow.ui.IInputType,G__14361);
}
})())
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("dom input type must support protocol InputType",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"attr","attr",1016909155),attr,new cljs.core.Keyword(null,"attrs","attrs",1107056660),attrs], null));
}
var a = shadow.ui.as_path(attr);var v = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(obj,a,"");shadow.object.log.cljs$core$IFn$_invoke$arity$3("dom-textarea",a,v);
return shadow.object.create(new cljs.core.Keyword("shadow.ui","dom-textarea","shadow.ui/dom-textarea",2813861053),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"parent","parent",4313447452),obj,new cljs.core.Keyword(null,"a","a",1013904339),a,new cljs.core.Keyword(null,"v","v",1013904360),v,new cljs.core.Keyword(null,"input-type","input-type",2354420431),type,new cljs.core.Keyword(null,"attrs","attrs",1107056660),attrs], null));
});
shadow.ui.timeouts = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.ui.timeout = (function timeout(delay,callback){return window.setTimeout(callback,delay);
});
shadow.ui.keyed_timeout = (function() {
var keyed_timeout = null;
var keyed_timeout__2 = (function (key,callback){return keyed_timeout.cljs$core$IFn$_invoke$arity$3(key,callback,3000);
});
var keyed_timeout__3 = (function (key,callback,time_ms){var cur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.ui.timeouts),key);if(cljs.core.truth_(cur))
{window.clearTimeout(cur);
} else
{}
var timeout_fn = (function (){cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.ui.timeouts,cljs.core.dissoc,key);
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
});var timeout_id = window.setTimeout(timeout_fn,time_ms);return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.ui.timeouts,cljs.core.assoc,key,timeout_id);
});
keyed_timeout = function(key,callback,time_ms){
switch(arguments.length){
case 2:
return keyed_timeout__2.call(this,key,callback);
case 3:
return keyed_timeout__3.call(this,key,callback,time_ms);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keyed_timeout.cljs$core$IFn$_invoke$arity$2 = keyed_timeout__2;
keyed_timeout.cljs$core$IFn$_invoke$arity$3 = keyed_timeout__3;
return keyed_timeout;
})()
;
shadow.ui.local_storage = window.localStorage;
shadow.ui.store_locally = (function store_locally(atm,name){var stored_value = (shadow.ui.local_storage[name]);if(cljs.core.truth_(stored_value))
{cljs.core.reset_BANG_(atm,cljs.reader.read_string(stored_value));
} else
{}
cljs.core.add_watch(atm,new cljs.core.Keyword(null,"store-locally","store-locally",4486339774),(function (_,___$1,___$2,new$){return (shadow.ui.local_storage[name] = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new$], 0)));
}));
return atm;
});
/**
* Returns a lazy sequence of the (ex elements) of coll with duplicates removed
*/
shadow.ui.distinct_by = (function distinct_by(ex,coll){var step = (function step(xs,seen){return (new cljs.core.LazySeq(null,(function (){return (function (p__14368,seen__$1){while(true){
var vec__14369 = p__14368;var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14369,0,null);var xs__$1 = vec__14369;var fex = (ex.cljs$core$IFn$_invoke$arity$1 ? ex.cljs$core$IFn$_invoke$arity$1(f) : ex.call(null,f));var temp__4092__auto__ = cljs.core.seq(xs__$1);if(temp__4092__auto__)
{var s = temp__4092__auto__;if(cljs.core.contains_QMARK_(seen__$1,fex))
{{
var G__14370 = cljs.core.rest(s);
var G__14371 = seen__$1;
p__14368 = G__14370;
seen__$1 = G__14371;
continue;
}
} else
{return cljs.core.cons(f,step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fex)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
/**
* behavior to self destruct objects on click or timeout
* 
* useful for notifications and such
* 
* Example:
* (so/define ::my-object
* :dom (fn ...)
* :behaviors [(ui/self-destruct 3000)])
* 
* this will so/destroy! (the default) the object 3000ms after it entered the dom
*/
shadow.ui.self_destruct = (function() {
var self_destruct = null;
var self_destruct__1 = (function (timeout){return self_destruct.cljs$core$IFn$_invoke$arity$2(timeout,shadow.object.destroy_BANG_);
});
var self_destruct__2 = (function (timeout,destruct_fn){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","entered","dom/entered",3723224571),(function (this$){var timer = (ui.with_timeout.cljs$core$IFn$_invoke$arity$2 ? ui.with_timeout.cljs$core$IFn$_invoke$arity$2(timeout,(function (){return (destruct_fn.cljs$core$IFn$_invoke$arity$1 ? destruct_fn.cljs$core$IFn$_invoke$arity$1(this$) : destruct_fn.call(null,this$));
})) : ui.with_timeout.call(null,timeout,(function (){return (destruct_fn.cljs$core$IFn$_invoke$arity$1 ? destruct_fn.cljs$core$IFn$_invoke$arity$1(this$) : destruct_fn.call(null,this$));
})));return shadow.dom.on.cljs$core$IFn$_invoke$arity$3(this$,new cljs.core.Keyword(null,"click","click",1108654330),(function (e){window.clearTimeout(timer);
return (destruct_fn.cljs$core$IFn$_invoke$arity$1 ? destruct_fn.cljs$core$IFn$_invoke$arity$1(this$) : destruct_fn.call(null,this$));
}));
})], null);
});
self_destruct = function(timeout,destruct_fn){
switch(arguments.length){
case 1:
return self_destruct__1.call(this,timeout);
case 2:
return self_destruct__2.call(this,timeout,destruct_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
self_destruct.cljs$core$IFn$_invoke$arity$1 = self_destruct__1;
self_destruct.cljs$core$IFn$_invoke$arity$2 = self_destruct__2;
return self_destruct;
})()
;
//# sourceMappingURL=ui.js.map