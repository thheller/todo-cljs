goog.provide('shadow.object');
goog.require('cljs.core');
goog.require('clojure.data');
goog.require('clojure.data');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('shadow.dom');
goog.require('shadow.dom');
shadow.object.console_friendly = (function console_friendly(a){if((a == null))
{return "nil";
} else
{if((a instanceof cljs.core.Keyword))
{return [cljs.core.str(a)].join('');
} else
{if(typeof a === 'string')
{return a;
} else
{if(typeof a === 'number')
{return a;
} else
{if((function (){var G__13521 = a;if(G__13521)
{var bit__4757__auto__ = (G__13521.cljs$lang$protocol_mask$partition0$ & 2147483648);if((bit__4757__auto__) || (G__13521.cljs$core$IPrintWithWriter$))
{return true;
} else
{if((!G__13521.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__13521);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IPrintWithWriter,G__13521);
}
})())
{return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([a], 0));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return a;
} else
{return null;
}
}
}
}
}
}
});
shadow.object.console_QMARK_ = !(((window["console"]) == null));
/**
* @param {...*} var_args
*/
shadow.object.log = (function() {
var log = null;
var log__1 = (function (a1){if(cljs.core.truth_(shadow.object.console_QMARK_))
{return console.log(shadow.object.console_friendly(a1));
} else
{return null;
}
});
var log__2 = (function (a1,a2){if(cljs.core.truth_(shadow.object.console_QMARK_))
{return console.log(shadow.object.console_friendly(a1),shadow.object.console_friendly(a2));
} else
{return null;
}
});
var log__3 = (function (a1,a2,a3){if(cljs.core.truth_(shadow.object.console_QMARK_))
{return console.log(shadow.object.console_friendly(a1),shadow.object.console_friendly(a2),shadow.object.console_friendly(a3));
} else
{return null;
}
});
var log__4 = (function (a1,a2,a3,a4){if(cljs.core.truth_(shadow.object.console_QMARK_))
{return console.log(shadow.object.console_friendly(a1),shadow.object.console_friendly(a2),shadow.object.console_friendly(a3),shadow.object.console_friendly(a4));
} else
{return null;
}
});
var log__5 = (function (a1,a2,a3,a4,a5){if(cljs.core.truth_(shadow.object.console_QMARK_))
{return console.log(shadow.object.console_friendly(a1),shadow.object.console_friendly(a2),shadow.object.console_friendly(a3),shadow.object.console_friendly(a4),shadow.object.console_friendly(a5));
} else
{return null;
}
});
var log__6 = (function (a1,a2,a3,a4,a5,a6){if(cljs.core.truth_(shadow.object.console_QMARK_))
{return console.log(shadow.object.console_friendly(a1),shadow.object.console_friendly(a2),shadow.object.console_friendly(a3),shadow.object.console_friendly(a4),shadow.object.console_friendly(a5),shadow.object.console_friendly(a6));
} else
{return null;
}
});
var log__7 = (function() { 
var G__13522__delegate = function (a1,a2,a3,a4,a5,a6,more){if(cljs.core.truth_(shadow.object.console_QMARK_))
{return console.log(shadow.object.console_friendly(a1),shadow.object.console_friendly(a2),shadow.object.console_friendly(a3),shadow.object.console_friendly(a4),shadow.object.console_friendly(a5),shadow.object.console_friendly(a6),"more:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([more], 0)));
} else
{return null;
}
};
var G__13522 = function (a1,a2,a3,a4,a5,a6,var_args){
var more = null;if (arguments.length > 6) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return G__13522__delegate.call(this,a1,a2,a3,a4,a5,a6,more);};
G__13522.cljs$lang$maxFixedArity = 6;
G__13522.cljs$lang$applyTo = (function (arglist__13523){
var a1 = cljs.core.first(arglist__13523);
arglist__13523 = cljs.core.next(arglist__13523);
var a2 = cljs.core.first(arglist__13523);
arglist__13523 = cljs.core.next(arglist__13523);
var a3 = cljs.core.first(arglist__13523);
arglist__13523 = cljs.core.next(arglist__13523);
var a4 = cljs.core.first(arglist__13523);
arglist__13523 = cljs.core.next(arglist__13523);
var a5 = cljs.core.first(arglist__13523);
arglist__13523 = cljs.core.next(arglist__13523);
var a6 = cljs.core.first(arglist__13523);
var more = cljs.core.rest(arglist__13523);
return G__13522__delegate(a1,a2,a3,a4,a5,a6,more);
});
G__13522.cljs$core$IFn$_invoke$arity$variadic = G__13522__delegate;
return G__13522;
})()
;
log = function(a1,a2,a3,a4,a5,a6,var_args){
var more = var_args;
switch(arguments.length){
case 1:
return log__1.call(this,a1);
case 2:
return log__2.call(this,a1,a2);
case 3:
return log__3.call(this,a1,a2,a3);
case 4:
return log__4.call(this,a1,a2,a3,a4);
case 5:
return log__5.call(this,a1,a2,a3,a4,a5);
case 6:
return log__6.call(this,a1,a2,a3,a4,a5,a6);
default:
return log__7.cljs$core$IFn$_invoke$arity$variadic(a1,a2,a3,a4,a5,a6, cljs.core.array_seq(arguments, 6));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
log.cljs$lang$maxFixedArity = 6;
log.cljs$lang$applyTo = log__7.cljs$lang$applyTo;
log.cljs$core$IFn$_invoke$arity$1 = log__1;
log.cljs$core$IFn$_invoke$arity$2 = log__2;
log.cljs$core$IFn$_invoke$arity$3 = log__3;
log.cljs$core$IFn$_invoke$arity$4 = log__4;
log.cljs$core$IFn$_invoke$arity$5 = log__5;
log.cljs$core$IFn$_invoke$arity$6 = log__6;
log.cljs$core$IFn$_invoke$arity$variadic = log__7.cljs$core$IFn$_invoke$arity$variadic;
return log;
})()
;
shadow.object.debug = shadow.object.log;
shadow.object.info = shadow.object.log;
shadow.object.warn = shadow.object.log;
shadow.object.error = shadow.object.log;
shadow.object.default_ex_info = cljs.core.ex_info;
cljs.core.ex_info = (function() {
var shadow_ex_info = null;
var shadow_ex_info__2 = (function (msg,map){shadow.object.log.cljs$core$IFn$_invoke$arity$3("EX-INFO:",msg,map);
return (shadow.object.default_ex_info.cljs$core$IFn$_invoke$arity$2 ? shadow.object.default_ex_info.cljs$core$IFn$_invoke$arity$2(msg,map) : shadow.object.default_ex_info.call(null,msg,map));
});
var shadow_ex_info__3 = (function (msg,map,cause){shadow.object.log.cljs$core$IFn$_invoke$arity$4("EX-INFO:",msg,map,cause);
return (shadow.object.default_ex_info.cljs$core$IFn$_invoke$arity$3 ? shadow.object.default_ex_info.cljs$core$IFn$_invoke$arity$3(msg,map,cause) : shadow.object.default_ex_info.call(null,msg,map,cause));
});
shadow_ex_info = function(msg,map,cause){
switch(arguments.length){
case 2:
return shadow_ex_info__2.call(this,msg,map);
case 3:
return shadow_ex_info__3.call(this,msg,map,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow_ex_info.cljs$core$IFn$_invoke$arity$2 = shadow_ex_info__2;
shadow_ex_info.cljs$core$IFn$_invoke$arity$3 = shadow_ex_info__3;
return shadow_ex_info;
})()
;
goog.asserts.doAssertFailure_ = (function (default_message,default_args,given_message,given_args){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("ASSERT FAILED",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dm","dm",1013907451),default_message,new cljs.core.Keyword(null,"da","da",1013907439),default_args,new cljs.core.Keyword(null,"gm","gm",1013907544),given_message,new cljs.core.Keyword(null,"ga","ga",1013907532),given_args], null));
});
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(0);
shadow.object.next_id = (function next_id(){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function define_event(event_name,desc,args){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),event_name,new cljs.core.Keyword(null,"description","description",3584325486),desc,new cljs.core.Keyword(null,"args","args",1016906831),args], null));
});
shadow.object.unmunge = (function unmunge(s){return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.get_func_signature = (function get_func_signature(func){var name = func.name;if(cljs.core.seq(name))
{var vec__13525 = cljs.core.re_find(/fn_(.+)_SLASH_(.+)_(\d+)/,name);var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,0,null);var ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,1,null);var fn_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,2,null);var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13525,3,null);var x = vec__13525;if(cljs.core.truth_(x))
{return [cljs.core.str(shadow.object.unmunge(ns)),cljs.core.str("/"),cljs.core.str(shadow.object.unmunge(fn_name)),cljs.core.str(" line:"),cljs.core.str(line)].join('');
} else
{return name;
}
} else
{return null;
}
});
(cljs.core.IPrintWithWriter["function"] = true);
(cljs.core._pr_writer["function"] = (function (this$,writer,opts){var temp__4090__auto__ = shadow.object.get_func_signature(this$);if(cljs.core.truth_(temp__4090__auto__))
{var sig = temp__4090__auto__;return cljs.core._write(writer,[cljs.core.str("#<function "),cljs.core.str(sig),cljs.core.str(">")].join(''));
} else
{return cljs.core._write(writer,[cljs.core.str("#<"),cljs.core.str(this$),cljs.core.str(">")].join(''));
}
}));
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",1017141378),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",2571277164),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",1108338651),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",1023578004),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",1014003892),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",3723224571),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",2782549561),"need to rethink this",cljs.core.PersistentVector.EMPTY);
shadow.object.IObject = (function (){var obj13527 = {};return obj13527;
})();
shadow.object._id = (function _id(this$){if((function (){var and__4114__auto__ = this$;if(and__4114__auto__)
{return this$.shadow$object$IObject$_id$arity$1;
} else
{return and__4114__auto__;
}
})())
{return this$.shadow$object$IObject$_id$arity$1(this$);
} else
{var x__4734__auto__ = (((this$ == null))?null:this$);return (function (){var or__4126__auto__ = (shadow.object._id[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (shadow.object._id["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
})().call(null,this$);
}
});
shadow.object._type = (function _type(this$){if((function (){var and__4114__auto__ = this$;if(and__4114__auto__)
{return this$.shadow$object$IObject$_type$arity$1;
} else
{return and__4114__auto__;
}
})())
{return this$.shadow$object$IObject$_type$arity$1(this$);
} else
{var x__4734__auto__ = (((this$ == null))?null:this$);return (function (){var or__4126__auto__ = (shadow.object._type[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (shadow.object._type["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
})().call(null,this$);
}
});
shadow.object._data = (function _data(this$){if((function (){var and__4114__auto__ = this$;if(and__4114__auto__)
{return this$.shadow$object$IObject$_data$arity$1;
} else
{return and__4114__auto__;
}
})())
{return this$.shadow$object$IObject$_data$arity$1(this$);
} else
{var x__4734__auto__ = (((this$ == null))?null:this$);return (function (){var or__4126__auto__ = (shadow.object._data[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (shadow.object._data["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
})().call(null,this$);
}
});
shadow.object._update = (function _update(this$,update_fn){if((function (){var and__4114__auto__ = this$;if(and__4114__auto__)
{return this$.shadow$object$IObject$_update$arity$2;
} else
{return and__4114__auto__;
}
})())
{return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else
{var x__4734__auto__ = (((this$ == null))?null:this$);return (function (){var or__4126__auto__ = (shadow.object._update[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (shadow.object._update["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
})().call(null,this$,update_fn);
}
});
shadow.object.get_type = (function get_type(this$){return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function() {
var get_type_attr = null;
var get_type_attr__2 = (function (oref,key){if((oref == null))
{return null;
} else
{var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
});
var get_type_attr__3 = (function (oref,key,default$){if((oref == null))
{return default$;
} else
{var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
});
get_type_attr = function(oref,key,default$){
switch(arguments.length){
case 2:
return get_type_attr__2.call(this,oref,key);
case 3:
return get_type_attr__3.call(this,oref,key,default$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_type_attr.cljs$core$IFn$_invoke$arity$2 = get_type_attr__2;
get_type_attr.cljs$core$IFn$_invoke$arity$3 = get_type_attr__3;
return get_type_attr;
})()
;
shadow.object.get_dom = (function get_dom(oref){return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",4076816540).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function get_by_id(id){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function get_from_dom(dom){var oid = (shadow.dom.data.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.data.cljs$core$IFn$_invoke$arity$2(dom,new cljs.core.Keyword(null,"oid","oid",1014014268)) : shadow.dom.data.call(null,dom,new cljs.core.Keyword(null,"oid","oid",1014014268)));if(cljs.core.truth_(oid))
{return shadow.object.get_by_id(parseInt(oid));
} else
{return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.get_parent = (function get_parent(oref){var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));if(cljs.core.truth_(temp__4092__auto__))
{var parent_id = temp__4092__auto__;return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else
{return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function get_parent_of_type(oref,parent_type){var parent = new cljs.core.Keyword(null,"parent","parent",4313447452).cljs$core$IFn$_invoke$arity$1(oref);while(true){
if(cljs.core.truth_(parent))
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type))
{return parent;
} else
{{
var G__13528 = new cljs.core.Keyword(null,"parent","parent",4313447452).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__13528;
continue;
}
}
} else
{return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function get_children(parent){var parent_id = shadow.object._id(parent);var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);var instances = cljs.core.deref(shadow.object.instances);return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13529_SHARP_){return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__13529_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function() {
var tree_seq = null;
var tree_seq__1 = (function (root){return tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){return true;
}));
});
var tree_seq__2 = (function (root,branch_QMARK_){return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
});
tree_seq = function(root,branch_QMARK_){
switch(arguments.length){
case 1:
return tree_seq__1.call(this,root);
case 2:
return tree_seq__2.call(this,root,branch_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tree_seq.cljs$core$IFn$_invoke$arity$1 = tree_seq__1;
tree_seq.cljs$core$IFn$_invoke$arity$2 = tree_seq__2;
return tree_seq;
})()
;
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);
shadow.object.get_children_of_type = (function get_children_of_type(oref,type){var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));return cljs.core.filter((function (p1__13530_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__13530_SHARP_));
}),shadow.object.get_children(oref));
});
/**
* basically (get-children (:parent this))
*/
shadow.object.get_siblings = (function get_siblings(p__13531){var map__13533 = p__13531;var map__13533__$1 = ((cljs.core.seq_QMARK_(map__13533))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13533):map__13533);var oref = map__13533__$1;var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13533__$1,new cljs.core.Keyword(null,"parent","parent",4313447452));if(cljs.core.truth_(parent))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",1017323830),oref], null));
}
return shadow.object.get_children(parent);
});
/**
* returns set of all siblings of a common type
*/
shadow.object.get_siblings_of_type = (function() {
var get_siblings_of_type = null;
var get_siblings_of_type__1 = (function (oref){return get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
});
var get_siblings_of_type__2 = (function (oref,type){var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));return cljs.core.filter((function (p1__13534_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__13534_SHARP_));
}),shadow.object.get_siblings(oref));
});
get_siblings_of_type = function(oref,type){
switch(arguments.length){
case 1:
return get_siblings_of_type__1.call(this,oref);
case 2:
return get_siblings_of_type__2.call(this,oref,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = get_siblings_of_type__1;
get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = get_siblings_of_type__2;
return get_siblings_of_type;
})()
;
shadow.object.get_collection_item = (function get_collection_item(oref){var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",994073432).cljs$core$IFn$_invoke$arity$1(oref);return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
* @param {...*} var_args
*/
shadow.object.notify_BANG_ = (function() { 
var notify_BANG___delegate = function (oref,ev,args){var temp__4092__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1210948180),ev], null));if(cljs.core.truth_(temp__4092__auto__))
{var reactions_to_trigger = temp__4092__auto__;var seq__13539 = cljs.core.seq(reactions_to_trigger);var chunk__13540 = null;var count__13541 = 0;var i__13542 = 0;while(true){
if((i__13542 < count__13541))
{var rfn = chunk__13540.cljs$core$IIndexed$_nth$arity$2(null,i__13542);cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));
{
var G__13543 = seq__13539;
var G__13544 = chunk__13540;
var G__13545 = count__13541;
var G__13546 = (i__13542 + 1);
seq__13539 = G__13543;
chunk__13540 = G__13544;
count__13541 = G__13545;
i__13542 = G__13546;
continue;
}
} else
{var temp__4092__auto____$1 = cljs.core.seq(seq__13539);if(temp__4092__auto____$1)
{var seq__13539__$1 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_(seq__13539__$1))
{var c__4855__auto__ = cljs.core.chunk_first(seq__13539__$1);{
var G__13547 = cljs.core.chunk_rest(seq__13539__$1);
var G__13548 = c__4855__auto__;
var G__13549 = cljs.core.count(c__4855__auto__);
var G__13550 = 0;
seq__13539 = G__13547;
chunk__13540 = G__13548;
count__13541 = G__13549;
i__13542 = G__13550;
continue;
}
} else
{var rfn = cljs.core.first(seq__13539__$1);cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));
{
var G__13551 = cljs.core.next(seq__13539__$1);
var G__13552 = null;
var G__13553 = 0;
var G__13554 = 0;
seq__13539 = G__13551;
chunk__13540 = G__13552;
count__13541 = G__13553;
i__13542 = G__13554;
continue;
}
}
} else
{return null;
}
}
break;
}
} else
{return null;
}
};
var notify_BANG_ = function (oref,ev,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return notify_BANG___delegate.call(this,oref,ev,args);};
notify_BANG_.cljs$lang$maxFixedArity = 2;
notify_BANG_.cljs$lang$applyTo = (function (arglist__13555){
var oref = cljs.core.first(arglist__13555);
arglist__13555 = cljs.core.next(arglist__13555);
var ev = cljs.core.first(arglist__13555);
var args = cljs.core.rest(arglist__13555);
return notify_BANG___delegate(oref,ev,args);
});
notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = notify_BANG___delegate;
return notify_BANG_;
})()
;
shadow.object.do_notify_tree = (function do_notify_tree(current_obj,ev,notify_fn){var seq__13560_13564 = cljs.core.seq(shadow.object.get_children(current_obj));var chunk__13561_13565 = null;var count__13562_13566 = 0;var i__13563_13567 = 0;while(true){
if((i__13563_13567 < count__13562_13566))
{var child_13568 = chunk__13561_13565.cljs$core$IIndexed$_nth$arity$2(null,i__13563_13567);do_notify_tree(child_13568,ev,notify_fn);
{
var G__13569 = seq__13560_13564;
var G__13570 = chunk__13561_13565;
var G__13571 = count__13562_13566;
var G__13572 = (i__13563_13567 + 1);
seq__13560_13564 = G__13569;
chunk__13561_13565 = G__13570;
count__13562_13566 = G__13571;
i__13563_13567 = G__13572;
continue;
}
} else
{var temp__4092__auto___13573 = cljs.core.seq(seq__13560_13564);if(temp__4092__auto___13573)
{var seq__13560_13574__$1 = temp__4092__auto___13573;if(cljs.core.chunked_seq_QMARK_(seq__13560_13574__$1))
{var c__4855__auto___13575 = cljs.core.chunk_first(seq__13560_13574__$1);{
var G__13576 = cljs.core.chunk_rest(seq__13560_13574__$1);
var G__13577 = c__4855__auto___13575;
var G__13578 = cljs.core.count(c__4855__auto___13575);
var G__13579 = 0;
seq__13560_13564 = G__13576;
chunk__13561_13565 = G__13577;
count__13562_13566 = G__13578;
i__13563_13567 = G__13579;
continue;
}
} else
{var child_13580 = cljs.core.first(seq__13560_13574__$1);do_notify_tree(child_13580,ev,notify_fn);
{
var G__13581 = cljs.core.next(seq__13560_13574__$1);
var G__13582 = null;
var G__13583 = 0;
var G__13584 = 0;
seq__13560_13564 = G__13581;
chunk__13561_13565 = G__13582;
count__13562_13566 = G__13583;
i__13563_13567 = G__13584;
continue;
}
}
} else
{}
}
break;
}
return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
/**
* @param {...*} var_args
*/
shadow.object.notify_tree_BANG_ = (function() { 
var notify_tree_BANG___delegate = function (oref,ev,args){var notify_fn = (function (obj){return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});return shadow.object.do_notify_tree(oref,ev,notify_fn);
};
var notify_tree_BANG_ = function (oref,ev,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return notify_tree_BANG___delegate.call(this,oref,ev,args);};
notify_tree_BANG_.cljs$lang$maxFixedArity = 2;
notify_tree_BANG_.cljs$lang$applyTo = (function (arglist__13585){
var oref = cljs.core.first(arglist__13585);
arglist__13585 = cljs.core.next(arglist__13585);
var ev = cljs.core.first(arglist__13585);
var args = cljs.core.rest(arglist__13585);
return notify_tree_BANG___delegate(oref,ev,args);
});
notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = notify_tree_BANG___delegate;
return notify_tree_BANG_;
})()
;
shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
/**
* @param {...*} var_args
*/
shadow.object.notify_up_BANG_ = (function() { 
var notify_up_BANG___delegate = function (oref,ev,args){var current = shadow.object.get_parent(oref);while(true){
if(cljs.core.truth_(current))
{cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);
{
var G__13586 = shadow.object.get_parent(current);
current = G__13586;
continue;
}
} else
{return null;
}
break;
}
};
var notify_up_BANG_ = function (oref,ev,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return notify_up_BANG___delegate.call(this,oref,ev,args);};
notify_up_BANG_.cljs$lang$maxFixedArity = 2;
notify_up_BANG_.cljs$lang$applyTo = (function (arglist__13587){
var oref = cljs.core.first(arglist__13587);
arglist__13587 = cljs.core.next(arglist__13587);
var ev = cljs.core.first(arglist__13587);
var args = cljs.core.rest(arglist__13587);
return notify_up_BANG___delegate(oref,ev,args);
});
notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = notify_up_BANG___delegate;
return notify_up_BANG_;
})()
;
/**
* @param {...*} var_args
*/
shadow.object.update_BANG_ = (function() { 
var update_BANG___delegate = function (oref,update_fn,args){if(cljs.core.fn_QMARK_(update_fn))
{} else
{throw [cljs.core.str("update! expects a fn as second arg, not "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([update_fn], 0)))].join('');
}
var id = shadow.object._id(oref);var data = shadow.object._data(oref);var work_fn = ((function (id,data){
return (function (data__$1){return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});})(id,data))
;return shadow.object._update(oref,work_fn);
};
var update_BANG_ = function (oref,update_fn,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return update_BANG___delegate.call(this,oref,update_fn,args);};
update_BANG_.cljs$lang$maxFixedArity = 2;
update_BANG_.cljs$lang$applyTo = (function (arglist__13588){
var oref = cljs.core.first(arglist__13588);
arglist__13588 = cljs.core.next(arglist__13588);
var update_fn = cljs.core.first(arglist__13588);
var args = cljs.core.rest(arglist__13588);
return update_BANG___delegate(oref,update_fn,args);
});
update_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_BANG___delegate;
return update_BANG_;
})()
;
shadow.object.set_parent_BANG_ = (function set_parent_BANG_(child,parent){var child_id = shadow.object._id(child);var parent_id = shadow.object._id(parent);cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));
return true;
});
shadow.object.dom_destroy = (function dom_destroy(this$,cause){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",4313447452)))
{return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",4076816540).cljs$core$IFn$_invoke$arity$1(this$));
} else
{var temp__4090__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",4380760840));if(cljs.core.truth_(temp__4090__auto__))
{var custom_remove = temp__4090__auto__;return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",4076816540).cljs$core$IFn$_invoke$arity$1(this$)) : custom_remove.call(null,this$,new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",4076816540).cljs$core$IFn$_invoke$arity$1(this$)));
} else
{return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",4076816540).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function() {
var destroy_BANG_ = null;
var destroy_BANG___1 = (function (oref){return destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",3977285467));
});
var destroy_BANG___2 = (function (oref,cause){var obj_id = shadow.object._id(oref);var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),obj_id);var seq__13593_13597 = cljs.core.seq(shadow.object.get_children(oref));var chunk__13594_13598 = null;var count__13595_13599 = 0;var i__13596_13600 = 0;while(true){
if((i__13596_13600 < count__13595_13599))
{var child_13601 = chunk__13594_13598.cljs$core$IIndexed$_nth$arity$2(null,i__13596_13600);destroy_BANG_.cljs$core$IFn$_invoke$arity$2(child_13601,new cljs.core.Keyword(null,"parent","parent",4313447452));
{
var G__13602 = seq__13593_13597;
var G__13603 = chunk__13594_13598;
var G__13604 = count__13595_13599;
var G__13605 = (i__13596_13600 + 1);
seq__13593_13597 = G__13602;
chunk__13594_13598 = G__13603;
count__13595_13599 = G__13604;
i__13596_13600 = G__13605;
continue;
}
} else
{var temp__4092__auto___13606 = cljs.core.seq(seq__13593_13597);if(temp__4092__auto___13606)
{var seq__13593_13607__$1 = temp__4092__auto___13606;if(cljs.core.chunked_seq_QMARK_(seq__13593_13607__$1))
{var c__4855__auto___13608 = cljs.core.chunk_first(seq__13593_13607__$1);{
var G__13609 = cljs.core.chunk_rest(seq__13593_13607__$1);
var G__13610 = c__4855__auto___13608;
var G__13611 = cljs.core.count(c__4855__auto___13608);
var G__13612 = 0;
seq__13593_13597 = G__13609;
chunk__13594_13598 = G__13610;
count__13595_13599 = G__13611;
i__13596_13600 = G__13612;
continue;
}
} else
{var child_13613 = cljs.core.first(seq__13593_13607__$1);destroy_BANG_.cljs$core$IFn$_invoke$arity$2(child_13613,new cljs.core.Keyword(null,"parent","parent",4313447452));
{
var G__13614 = cljs.core.next(seq__13593_13607__$1);
var G__13615 = null;
var G__13616 = 0;
var G__13617 = 0;
seq__13593_13597 = G__13614;
chunk__13594_13598 = G__13615;
count__13595_13599 = G__13616;
i__13596_13600 = G__13617;
continue;
}
}
} else
{}
}
break;
}
shadow.object.dom_destroy(oref,cause);
shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword(null,"destroy","destroy",2571277164),cljs.core.array_seq([cause], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,obj_id);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,obj_id);
if(cljs.core.truth_(parent_id))
{return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$5(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,obj_id);
} else
{return null;
}
});
destroy_BANG_ = function(oref,cause){
switch(arguments.length){
case 1:
return destroy_BANG___1.call(this,oref);
case 2:
return destroy_BANG___2.call(this,oref,cause);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = destroy_BANG___1;
destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = destroy_BANG___2;
return destroy_BANG_;
})()
;
shadow.object.bind_dom_events = (function bind_dom_events(oref,dom,dom_events){if((cljs.core.rem(cljs.core.count(dom_events),2) === 0))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",3985518714),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",4023911321),dom_events], null));
}
var seq__13624 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,dom_events));var chunk__13625 = null;var count__13626 = 0;var i__13627 = 0;while(true){
if((i__13627 < count__13626))
{var vec__13628 = chunk__13625.cljs$core$IIndexed$_nth$arity$2(null,i__13627);var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13628,0,null);var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13628,1,null);var ev_def = vec__13628;if((handler == null))
{throw [cljs.core.str("ev with nil handler "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev], 0)))].join('');
} else
{}
var handler_13630__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__13624,chunk__13625,count__13626,i__13627,vec__13628,ev,handler,ev_def){
return (function (this$,e,el){return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.array_seq([e,el], 0));
});})(seq__13624,chunk__13625,count__13626,i__13627,vec__13628,ev,handler,ev_def))
:handler);shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__13624,chunk__13625,count__13626,i__13627,handler_13630__$1,vec__13628,ev,handler,ev_def){
return (function dom_event_handler(e,el){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName))
{shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else
{}
return (handler_13630__$1.cljs$core$IFn$_invoke$arity$3 ? handler_13630__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_13630__$1.call(null,oref,e,el));
});})(seq__13624,chunk__13625,count__13626,i__13627,handler_13630__$1,vec__13628,ev,handler,ev_def))
);
{
var G__13631 = seq__13624;
var G__13632 = chunk__13625;
var G__13633 = count__13626;
var G__13634 = (i__13627 + 1);
seq__13624 = G__13631;
chunk__13625 = G__13632;
count__13626 = G__13633;
i__13627 = G__13634;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13624);if(temp__4092__auto__)
{var seq__13624__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13624__$1))
{var c__4855__auto__ = cljs.core.chunk_first(seq__13624__$1);{
var G__13635 = cljs.core.chunk_rest(seq__13624__$1);
var G__13636 = c__4855__auto__;
var G__13637 = cljs.core.count(c__4855__auto__);
var G__13638 = 0;
seq__13624 = G__13635;
chunk__13625 = G__13636;
count__13626 = G__13637;
i__13627 = G__13638;
continue;
}
} else
{var vec__13629 = cljs.core.first(seq__13624__$1);var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629,0,null);var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13629,1,null);var ev_def = vec__13629;if((handler == null))
{throw [cljs.core.str("ev with nil handler "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ev], 0)))].join('');
} else
{}
var handler_13639__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__13624,chunk__13625,count__13626,i__13627,vec__13629,ev,handler,ev_def,seq__13624__$1,temp__4092__auto__){
return (function (this$,e,el){return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.array_seq([e,el], 0));
});})(seq__13624,chunk__13625,count__13626,i__13627,vec__13629,ev,handler,ev_def,seq__13624__$1,temp__4092__auto__))
:handler);shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__13624,chunk__13625,count__13626,i__13627,handler_13639__$1,vec__13629,ev,handler,ev_def,seq__13624__$1,temp__4092__auto__){
return (function dom_event_handler(e,el){if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName))
{shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else
{}
return (handler_13639__$1.cljs$core$IFn$_invoke$arity$3 ? handler_13639__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_13639__$1.call(null,oref,e,el));
});})(seq__13624,chunk__13625,count__13626,i__13627,handler_13639__$1,vec__13629,ev,handler,ev_def,seq__13624__$1,temp__4092__auto__))
);
{
var G__13640 = cljs.core.next(seq__13624__$1);
var G__13641 = null;
var G__13642 = 0;
var G__13643 = 0;
seq__13624 = G__13640;
chunk__13625 = G__13641;
count__13626 = G__13642;
i__13627 = G__13643;
continue;
}
}
} else
{return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function reaction_merge(result,p__13644){var vec__13646 = p__13644;var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,0,null);var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13646,1,null);if(cljs.core.truth_((function (){var and__4114__auto__ = event;if(cljs.core.truth_(and__4114__auto__))
{return handler;
} else
{return and__4114__auto__;
}
})()))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),event,new cljs.core.Keyword(null,"handler","handler",1706707644),handler], null));
}
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function merge_reactions(result,behavior){if(cljs.core.vector_QMARK_(behavior))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",2524816836),behavior], null));
}
if(cljs.core.even_QMARK_(cljs.core.count(behavior)))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",2524816836),behavior], null));
}
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,behavior)));
});
shadow.object.merge_behaviors = (function merge_behaviors(result,behavior){if(cljs.core.vector_QMARK_(behavior))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1210948180)], null),shadow.object.merge_reactions,behavior);
} else
{if(cljs.core.map_QMARK_(behavior))
{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1210948180)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",1013907793).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",4023911321)], null),(function (default$){return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",4023911321).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",2524816836),behavior], null));
} else
{return null;
}
}
}
});
/**
* @param {...*} var_args
*/
shadow.object.define = (function() { 
var define__delegate = function (id,args){if((id instanceof cljs.core.Keyword))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"args","args",1016906831),args], null));
}
if(cljs.core.even_QMARK_(cljs.core.count(args)))
{} else
{throw [cljs.core.str("invalid object definition "),cljs.core.str([cljs.core.str(id)].join('')),cljs.core.str(" args: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([args], 0)))].join('');
}
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id))
{throw [cljs.core.str("object already defined "),cljs.core.str(id)].join('');
} else
{}
try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",1013907793).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",4076716163),id,cljs.core.array_seq([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1210948180),reactions], 0));var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",607554515).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);
return odef__$2;
}catch (e13648){if((e13648 instanceof Object))
{var e = e13648;throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"args","args",1016906831),args], null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13648;
} else
{return null;
}
}
}};
var define = function (id,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return define__delegate.call(this,id,args);};
define.cljs$lang$maxFixedArity = 1;
define.cljs$lang$applyTo = (function (arglist__13649){
var id = cljs.core.first(arglist__13649);
var args = cljs.core.rest(arglist__13649);
return define__delegate(id,args);
});
define.cljs$core$IFn$_invoke$arity$variadic = define__delegate;
return define;
})()
;
shadow.object.merge_defaults = (function merge_defaults(data,type){var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",1658185156)], null));if((defaults == null))
{return data;
} else
{if(cljs.core.map_QMARK_(defaults))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([defaults,data], 0));
} else
{if(cljs.core.fn_QMARK_(defaults))
{return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",1658185156),defaults,new cljs.core.Keyword(null,"type","type",1017479852),type], null));
} else
{return null;
}
}
}
}
});
shadow.object.make_dom = (function() {
var make_dom = null;
var make_dom__3 = (function (oref,dom_key,events_key){return make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
});
var make_dom__4 = (function (oref,dom_key,events_key,value){var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);var dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1((dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value))) : shadow.dom.build.call(null,(dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value))));shadow.object.bind_dom_events(oref,dom,events);
return dom;
});
make_dom = function(oref,dom_key,events_key,value){
switch(arguments.length){
case 3:
return make_dom__3.call(this,oref,dom_key,events_key);
case 4:
return make_dom__4.call(this,oref,dom_key,events_key,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
make_dom.cljs$core$IFn$_invoke$arity$3 = make_dom__3;
make_dom.cljs$core$IFn$_invoke$arity$4 = make_dom__4;
return make_dom;
})()
;
shadow.object.alive_QMARK_ = (function alive_QMARK_(obj){return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
});

/**
* @constructor
* @param {*} key
* @param {*} handler
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
shadow.object.Watch = (function (key,handler,__meta,__extmap){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4688__auto__){var self__ = this;
var this__4688__auto____$1 = this;var h__4542__auto__ = self__.__hash;if(!((h__4542__auto__ == null)))
{return h__4542__auto__;
} else
{var h__4542__auto____$1 = cljs.core.hash_imap(this__4688__auto____$1);self__.__hash = h__4542__auto____$1;
return h__4542__auto____$1;
}
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4693__auto__,k__4694__auto__){var self__ = this;
var this__4693__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4693__auto____$1,k__4694__auto__,null);
});
shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4695__auto__,k13651,else__4696__auto__){var self__ = this;
var this__4695__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k13651,new cljs.core.Keyword(null,"key","key",1014010321)))
{return self__.key;
} else
{if(cljs.core.keyword_identical_QMARK_(k13651,new cljs.core.Keyword(null,"handler","handler",1706707644)))
{return self__.handler;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13651,else__4696__auto__);
} else
{return null;
}
}
}
});
shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4700__auto__,k__4701__auto__,G__13650){var self__ = this;
var this__4700__auto____$1 = this;var pred__13653 = cljs.core.keyword_identical_QMARK_;var expr__13654 = k__4701__auto__;if(cljs.core.truth_((pred__13653.cljs$core$IFn$_invoke$arity$2 ? pred__13653.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",1014010321),expr__13654) : pred__13653.call(null,new cljs.core.Keyword(null,"key","key",1014010321),expr__13654))))
{return (new shadow.object.Watch(G__13650,self__.handler,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__13653.cljs$core$IFn$_invoke$arity$2 ? pred__13653.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",1706707644),expr__13654) : pred__13653.call(null,new cljs.core.Keyword(null,"handler","handler",1706707644),expr__13654))))
{return (new shadow.object.Watch(self__.key,G__13650,self__.__meta,self__.__extmap,null));
} else
{return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4701__auto__,G__13650),null));
}
}
});
shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4707__auto__,writer__4708__auto__,opts__4709__auto__){var self__ = this;
var this__4707__auto____$1 = this;var pr_pair__4710__auto__ = (function (keyval__4711__auto__){return cljs.core.pr_sequential_writer(writer__4708__auto__,cljs.core.pr_writer,""," ","",opts__4709__auto__,keyval__4711__auto__);
});return cljs.core.pr_sequential_writer(writer__4708__auto__,pr_pair__4710__auto__,"#shadow.object.Watch{",", ","}",opts__4709__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",1014010321),self__.key],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",1706707644),self__.handler],null))], null),self__.__extmap));
});
shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4698__auto__,entry__4699__auto__){var self__ = this;
var this__4698__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4699__auto__))
{return cljs.core._assoc(this__4698__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4699__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4699__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4698__auto____$1,entry__4699__auto__);
}
});
shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4705__auto__){var self__ = this;
var this__4705__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",1014010321),self__.key],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",1706707644),self__.handler],null))], null),self__.__extmap));
});
shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4697__auto__){var self__ = this;
var this__4697__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4689__auto__,other__4690__auto__){var self__ = this;
var this__4689__auto____$1 = this;if(cljs.core.truth_((function (){var and__4114__auto__ = other__4690__auto__;if(cljs.core.truth_(and__4114__auto__))
{return ((this__4689__auto____$1.constructor === other__4690__auto__.constructor)) && (cljs.core.equiv_map(this__4689__auto____$1,other__4690__auto__));
} else
{return and__4114__auto__;
}
})()))
{return true;
} else
{return false;
}
});
shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4692__auto__,G__13650){var self__ = this;
var this__4692__auto____$1 = this;return (new shadow.object.Watch(self__.key,self__.handler,G__13650,self__.__extmap,self__.__hash));
});
shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4691__auto__){var self__ = this;
var this__4691__auto____$1 = this;return self__.__meta;
});
shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4702__auto__,k__4703__auto__){var self__ = this;
var this__4702__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),null,new cljs.core.Keyword(null,"handler","handler",1706707644),null], null), null),k__4703__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4702__auto____$1),self__.__meta),k__4703__auto__);
} else
{return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4703__auto__)),null));
}
});
shadow.object.Watch.cljs$lang$type = true;
shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__4727__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"shadow.object/Watch");
});
shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__4727__auto__,writer__4728__auto__){return cljs.core._write(writer__4728__auto__,"shadow.object/Watch");
});
shadow.object.__GT_Watch = (function __GT_Watch(key,handler){return (new shadow.object.Watch(key,handler));
});
shadow.object.map__GT_Watch = (function map__GT_Watch(G__13652){return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(G__13652),new cljs.core.Keyword(null,"handler","handler",1706707644).cljs$core$IFn$_invoke$arity$1(G__13652),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13652,new cljs.core.Keyword(null,"key","key",1014010321),cljs.core.array_seq([new cljs.core.Keyword(null,"handler","handler",1706707644)], 0))));
});

/**
* @constructor
*/
shadow.object.ObjectRef = (function (id,type,data,watches){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
shadow.object.ObjectRef.cljs$lang$type = true;
shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef";
shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"shadow.object/ObjectRef");
});
shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = true;
shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",4076816540).cljs$core$IFn$_invoke$arity$1(self__.data);
});
shadow.object.ObjectRef.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([this$], 0));
});
shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",4313447452),k))
{return shadow.object.get_parent(this$__$1);
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
});
shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){var self__ = this;
var this$__$1 = this;if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",4313447452),k))
{return shadow.object.get_parent(this$__$1);
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
});
shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;throw (new Error("who be calling?"));
});
shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f)));
});
shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.remove((function (p1__13656_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(p1__13656_SHARP_));
}),self__.watches);
});
shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._write(writer,[cljs.core.str("#<ObjectRef {:id "),cljs.core.str(self__.id),cljs.core.str(", :type "),cljs.core.str(self__.type),cljs.core.str("}>")].join(''));
});
shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.data;
});
shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var self__ = this;
var this$__$1 = this;return ((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(this$__$1),shadow.object._id(other)));
});
shadow.object.ObjectRef.prototype.shadow$object$IObject$ = true;
shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.id;
});
shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.type;
});
shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.data;
});
shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){var self__ = this;
var this$__$1 = this;var old = self__.data;var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));self__.data = new$;
var seq__13657 = cljs.core.seq(self__.watches);var chunk__13658 = null;var count__13659 = 0;var i__13660 = 0;while(true){
if((i__13660 < count__13659))
{var map__13661 = chunk__13658.cljs$core$IIndexed$_nth$arity$2(null,i__13660);var map__13661__$1 = ((cljs.core.seq_QMARK_(map__13661))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13661):map__13661);var watch = map__13661__$1;var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,new cljs.core.Keyword(null,"handler","handler",1706707644));var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13661__$1,new cljs.core.Keyword(null,"key","key",1014010321));if(shadow.object.alive_QMARK_(this$__$1))
{(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else
{}
{
var G__13663 = seq__13657;
var G__13664 = chunk__13658;
var G__13665 = count__13659;
var G__13666 = (i__13660 + 1);
seq__13657 = G__13663;
chunk__13658 = G__13664;
count__13659 = G__13665;
i__13660 = G__13666;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13657);if(temp__4092__auto__)
{var seq__13657__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13657__$1))
{var c__4855__auto__ = cljs.core.chunk_first(seq__13657__$1);{
var G__13667 = cljs.core.chunk_rest(seq__13657__$1);
var G__13668 = c__4855__auto__;
var G__13669 = cljs.core.count(c__4855__auto__);
var G__13670 = 0;
seq__13657 = G__13667;
chunk__13658 = G__13668;
count__13659 = G__13669;
i__13660 = G__13670;
continue;
}
} else
{var map__13662 = cljs.core.first(seq__13657__$1);var map__13662__$1 = ((cljs.core.seq_QMARK_(map__13662))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13662):map__13662);var watch = map__13662__$1;var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13662__$1,new cljs.core.Keyword(null,"handler","handler",1706707644));var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13662__$1,new cljs.core.Keyword(null,"key","key",1014010321));if(shadow.object.alive_QMARK_(this$__$1))
{(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else
{}
{
var G__13671 = cljs.core.next(seq__13657__$1);
var G__13672 = null;
var G__13673 = 0;
var G__13674 = 0;
seq__13657 = G__13671;
chunk__13658 = G__13672;
count__13659 = G__13673;
i__13660 = G__13674;
continue;
}
}
} else
{return null;
}
}
break;
}
});
shadow.object.__GT_ObjectRef = (function __GT_ObjectRef(id,type,data,watches){return (new shadow.object.ObjectRef(id,type,data,watches));
});
shadow.object.add_reaction_BANG_ = (function() {
var add_reaction_BANG_ = null;
var add_reaction_BANG___2 = (function (oref,list){return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.array_seq([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1210948180)], null),shadow.object.merge_reactions,list], 0));
});
var add_reaction_BANG___3 = (function (oref,ev,handler_fn){return add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
});
add_reaction_BANG_ = function(oref,ev,handler_fn){
switch(arguments.length){
case 2:
return add_reaction_BANG___2.call(this,oref,ev);
case 3:
return add_reaction_BANG___3.call(this,oref,ev,handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = add_reaction_BANG___2;
add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = add_reaction_BANG___3;
return add_reaction_BANG_;
})()
;
shadow.object.bind_change = (function() {
var bind_change = null;
var bind_change__3 = (function (oref,attr,callback){return bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
});
var bind_change__4 = (function (oref,attr,callback,watch_key){if((function (){var G__13676 = oref;if(G__13676)
{var bit__4757__auto__ = null;if(cljs.core.truth_((function (){var or__4126__auto__ = bit__4757__auto__;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return G__13676.shadow$object$IObject$;
}
})()))
{return true;
} else
{if((!G__13676.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(shadow.object.IObject,G__13676);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(shadow.object.IObject,G__13676);
}
})())
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",1017323830),oref,new cljs.core.Keyword(null,"attr","attr",1016909155),attr], null));
}
var attr__$1 = ((cljs.core.vector_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));return cljs.core.add_watch(oref,watch_key,(function bind_change_watch(_,___$1,old,new$){var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv))
{return null;
} else
{return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
});
bind_change = function(oref,attr,callback,watch_key){
switch(arguments.length){
case 3:
return bind_change__3.call(this,oref,attr,callback);
case 4:
return bind_change__4.call(this,oref,attr,callback,watch_key);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bind_change.cljs$core$IFn$_invoke$arity$3 = bind_change__3;
bind_change.cljs$core$IFn$_invoke$arity$4 = bind_change__4;
return bind_change;
})()
;
shadow.object.dom_enter = (function dom_enter(parent,child){shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);
if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)))
{return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",3723224571));
} else
{return null;
}
});
shadow.object.create = (function create(type,args){if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str("cannot create unknown child type: "),cljs.core.str(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"args","args",1016906831),args], null));
}
if(cljs.core.map_QMARK_(args))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1016906831),args], null));
}
var oid = shadow.object.next_id();var parent = new cljs.core.Keyword(null,"parent","parent",4313447452).cljs$core$IFn$_invoke$arity$1(args);var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",1514870609),oid,cljs.core.array_seq([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1210948180),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1210948180),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",4313447452),cljs.core.array_seq([new cljs.core.Keyword(null,"dom","dom",1014003892)], 0));var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);
if(cljs.core.truth_(parent))
{shadow.object.set_parent_BANG_(oref,parent);
} else
{}
shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",1017141378));
var dom_events_13689 = new cljs.core.Keyword("dom","events","dom/events",4023911321).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);var temp__4090__auto___13690 = new cljs.core.Keyword(null,"dom","dom",1014003892).cljs$core$IFn$_invoke$arity$1(args);if(cljs.core.truth_(temp__4090__auto___13690))
{var dom_13691 = temp__4090__auto___13690;(shadow.dom.set_data.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.set_data.cljs$core$IFn$_invoke$arity$3(dom_13691,new cljs.core.Keyword(null,"oid","oid",1014014268),oid) : shadow.dom.set_data.call(null,dom_13691,new cljs.core.Keyword(null,"oid","oid",1014014268),oid));
shadow.object.bind_dom_events(oref,dom_13691,dom_events_13689);
shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.array_seq([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",4076816540),dom_13691], 0));
shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",1023578004),cljs.core.array_seq([dom_13691], 0));
} else
{var temp__4092__auto___13692 = new cljs.core.Keyword(null,"dom","dom",1014003892).cljs$core$IFn$_invoke$arity$1(odef);if(cljs.core.truth_(temp__4092__auto___13692))
{var dom_fn_13693 = temp__4092__auto___13692;var dom_13694 = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1((dom_fn_13693.cljs$core$IFn$_invoke$arity$1 ? dom_fn_13693.cljs$core$IFn$_invoke$arity$1(oref) : dom_fn_13693.call(null,oref))) : shadow.dom.build.call(null,(dom_fn_13693.cljs$core$IFn$_invoke$arity$1 ? dom_fn_13693.cljs$core$IFn$_invoke$arity$1(oref) : dom_fn_13693.call(null,oref))));(shadow.dom.set_data.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.set_data.cljs$core$IFn$_invoke$arity$3(dom_13694,new cljs.core.Keyword(null,"oid","oid",1014014268),oid) : shadow.dom.set_data.call(null,dom_13694,new cljs.core.Keyword(null,"oid","oid",1014014268),oid));
shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.array_seq([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",4076816540),dom_13694], 0));
shadow.object.bind_dom_events(oref,dom_13694,dom_events_13689);
shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",1023578004),cljs.core.array_seq([dom_13694], 0));
} else
{}
}
var temp__4092__auto___13695 = new cljs.core.Keyword(null,"watch","watch",1126807617).cljs$core$IFn$_invoke$arity$1(odef);if(cljs.core.truth_(temp__4092__auto___13695))
{var watches_13696 = temp__4092__auto___13695;var seq__13683_13697 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,watches_13696));var chunk__13684_13698 = null;var count__13685_13699 = 0;var i__13686_13700 = 0;while(true){
if((i__13686_13700 < count__13685_13699))
{var vec__13687_13701 = chunk__13684_13698.cljs$core$IIndexed$_nth$arity$2(null,i__13686_13700);var attr_13702 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687_13701,0,null);var handler_13703 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13687_13701,1,null);shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_13702,((function (seq__13683_13697,chunk__13684_13698,count__13685_13699,i__13686_13700,vec__13687_13701,attr_13702,handler_13703){
return (function (old,new$){return (handler_13703.cljs$core$IFn$_invoke$arity$3 ? handler_13703.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_13703.call(null,oref,old,new$));
});})(seq__13683_13697,chunk__13684_13698,count__13685_13699,i__13686_13700,vec__13687_13701,attr_13702,handler_13703))
);
{
var G__13704 = seq__13683_13697;
var G__13705 = chunk__13684_13698;
var G__13706 = count__13685_13699;
var G__13707 = (i__13686_13700 + 1);
seq__13683_13697 = G__13704;
chunk__13684_13698 = G__13705;
count__13685_13699 = G__13706;
i__13686_13700 = G__13707;
continue;
}
} else
{var temp__4092__auto___13708__$1 = cljs.core.seq(seq__13683_13697);if(temp__4092__auto___13708__$1)
{var seq__13683_13709__$1 = temp__4092__auto___13708__$1;if(cljs.core.chunked_seq_QMARK_(seq__13683_13709__$1))
{var c__4855__auto___13710 = cljs.core.chunk_first(seq__13683_13709__$1);{
var G__13711 = cljs.core.chunk_rest(seq__13683_13709__$1);
var G__13712 = c__4855__auto___13710;
var G__13713 = cljs.core.count(c__4855__auto___13710);
var G__13714 = 0;
seq__13683_13697 = G__13711;
chunk__13684_13698 = G__13712;
count__13685_13699 = G__13713;
i__13686_13700 = G__13714;
continue;
}
} else
{var vec__13688_13715 = cljs.core.first(seq__13683_13709__$1);var attr_13716 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688_13715,0,null);var handler_13717 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13688_13715,1,null);shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_13716,((function (seq__13683_13697,chunk__13684_13698,count__13685_13699,i__13686_13700,vec__13688_13715,attr_13716,handler_13717,seq__13683_13709__$1,temp__4092__auto___13708__$1){
return (function (old,new$){return (handler_13717.cljs$core$IFn$_invoke$arity$3 ? handler_13717.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_13717.call(null,oref,old,new$));
});})(seq__13683_13697,chunk__13684_13698,count__13685_13699,i__13686_13700,vec__13688_13715,attr_13716,handler_13717,seq__13683_13709__$1,temp__4092__auto___13708__$1))
);
{
var G__13718 = cljs.core.next(seq__13683_13709__$1);
var G__13719 = null;
var G__13720 = 0;
var G__13721 = 0;
seq__13683_13697 = G__13718;
chunk__13684_13698 = G__13719;
count__13685_13699 = G__13720;
i__13686_13700 = G__13721;
continue;
}
}
} else
{}
}
break;
}
} else
{}
return oref;
});
/**
* [oref attr node-gen] produces a node via (node-gen new-value)
* watches obj for changes and replaces the generated node on change (node-gen defaults to str)
* 
* only use if the node has no attached behavior like clicks, use bind with an extra object for those
*/
shadow.object.bind_simple = (function() {
var bind_simple = null;
var bind_simple__2 = (function (oref,attr){return bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
});
var bind_simple__3 = (function (oref,attr,node_gen){var attr__$1 = ((cljs.core.vector_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));var node_get = ((function (attr__$1){
return (function (p1__13722_SHARP_){return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1((node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__13722_SHARP_) : node_gen.call(null,p1__13722_SHARP_))) : shadow.dom.build.call(null,(node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__13722_SHARP_) : node_gen.call(null,p1__13722_SHARP_))));
});})(attr__$1))
;var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){var new_node = node_get(new$);var current_node = cljs.core.deref(node);shadow.dom.replace_node(current_node,new_node);
return cljs.core.reset_BANG_(node,new_node);
}));
return cljs.core.deref(node);
});
bind_simple = function(oref,attr,node_gen){
switch(arguments.length){
case 2:
return bind_simple__2.call(this,oref,attr);
case 3:
return bind_simple__3.call(this,oref,attr,node_gen);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bind_simple.cljs$core$IFn$_invoke$arity$2 = bind_simple__2;
bind_simple.cljs$core$IFn$_invoke$arity$3 = bind_simple__3;
return bind_simple;
})()
;
/**
* bind the given attribute a child item
* the item will be recreated whenever the value changes (old one will be destroyed)
*/
shadow.object.bind = (function bind(oref,attr,item_type,item_key,item_attrs){var attr__$1 = ((cljs.core.vector_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);var make_child_fn = ((function (attr__$1,curval){
return (function (value){return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([item_attrs,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"parent","parent",4313447452),oref,item_key,value], true, false)], 0)));
});})(attr__$1,curval))
;var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){var new_child = make_child_fn(new$);var current_node = cljs.core.deref(child);shadow.dom.replace_node(current_node,new_child);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));
return cljs.core.reset_BANG_(child,new_child);
}));
return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function coll_destroy_children(children,c,diff){var seq__13727_13731 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));var chunk__13728_13732 = null;var count__13729_13733 = 0;var i__13730_13734 = 0;while(true){
if((i__13730_13734 < count__13729_13733))
{var obj_13735 = chunk__13728_13732.cljs$core$IIndexed$_nth$arity$2(null,i__13730_13734);var obj_13736__$1 = shadow.object.get_from_dom(obj_13735);shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_13736__$1);
{
var G__13737 = seq__13727_13731;
var G__13738 = chunk__13728_13732;
var G__13739 = count__13729_13733;
var G__13740 = (i__13730_13734 + 1);
seq__13727_13731 = G__13737;
chunk__13728_13732 = G__13738;
count__13729_13733 = G__13739;
i__13730_13734 = G__13740;
continue;
}
} else
{var temp__4092__auto___13741 = cljs.core.seq(seq__13727_13731);if(temp__4092__auto___13741)
{var seq__13727_13742__$1 = temp__4092__auto___13741;if(cljs.core.chunked_seq_QMARK_(seq__13727_13742__$1))
{var c__4855__auto___13743 = cljs.core.chunk_first(seq__13727_13742__$1);{
var G__13744 = cljs.core.chunk_rest(seq__13727_13742__$1);
var G__13745 = c__4855__auto___13743;
var G__13746 = cljs.core.count(c__4855__auto___13743);
var G__13747 = 0;
seq__13727_13731 = G__13744;
chunk__13728_13732 = G__13745;
count__13729_13733 = G__13746;
i__13730_13734 = G__13747;
continue;
}
} else
{var obj_13748 = cljs.core.first(seq__13727_13742__$1);var obj_13749__$1 = shadow.object.get_from_dom(obj_13748);shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_13749__$1);
{
var G__13750 = cljs.core.next(seq__13727_13742__$1);
var G__13751 = null;
var G__13752 = 0;
var G__13753 = 0;
seq__13727_13731 = G__13750;
chunk__13728_13732 = G__13751;
count__13729_13733 = G__13752;
i__13730_13734 = G__13753;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,0,(c + diff));
});
shadow.object.bind_children = (function() {
var bind_children = null;
var bind_children__5 = (function (node,parent,attr,item_type,item_key){return bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__13754_SHARP_){return cljs.core.map_indexed(cljs.core.vector,p1__13754_SHARP_);
}));
});
var bind_children__6 = (function (node,parent,attr,item_type,item_key,coll_transform){var attr__$1 = ((cljs.core.vector_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));var make_item_fn = ((function (attr__$1,update_children,coll_dom){
return (function (p__13771){var vec__13772 = p__13771;var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,0,null);var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13772,1,null);var obj = shadow.object.create(item_type,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"parent","parent",4313447452),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",2554952536),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",760519136),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",994073432),item_key,item_key,val], true, false));shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,((function (obj,vec__13772,key,val,attr__$1,update_children,coll_dom){
return (function (old,new$){var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",760519136).cljs$core$IFn$_invoke$arity$1(obj));shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$);
cljs.core.reset_BANG_(update_children,false);
shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.array_seq([parent_key,new$], 0));
return cljs.core.reset_BANG_(update_children,true);
});})(obj,vec__13772,key,val,attr__$1,update_children,coll_dom))
);
return obj;
});})(attr__$1,update_children,coll_dom))
;var seq__13773_13787 = cljs.core.seq((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1)) : coll_transform.call(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1))));var chunk__13774_13788 = null;var count__13775_13789 = 0;var i__13776_13790 = 0;while(true){
if((i__13776_13790 < count__13775_13789))
{var item_13791 = chunk__13774_13788.cljs$core$IIndexed$_nth$arity$2(null,i__13776_13790);shadow.object.dom_enter(coll_dom,make_item_fn(item_13791));
{
var G__13792 = seq__13773_13787;
var G__13793 = chunk__13774_13788;
var G__13794 = count__13775_13789;
var G__13795 = (i__13776_13790 + 1);
seq__13773_13787 = G__13792;
chunk__13774_13788 = G__13793;
count__13775_13789 = G__13794;
i__13776_13790 = G__13795;
continue;
}
} else
{var temp__4092__auto___13796 = cljs.core.seq(seq__13773_13787);if(temp__4092__auto___13796)
{var seq__13773_13797__$1 = temp__4092__auto___13796;if(cljs.core.chunked_seq_QMARK_(seq__13773_13797__$1))
{var c__4855__auto___13798 = cljs.core.chunk_first(seq__13773_13797__$1);{
var G__13799 = cljs.core.chunk_rest(seq__13773_13797__$1);
var G__13800 = c__4855__auto___13798;
var G__13801 = cljs.core.count(c__4855__auto___13798);
var G__13802 = 0;
seq__13773_13787 = G__13799;
chunk__13774_13788 = G__13800;
count__13775_13789 = G__13801;
i__13776_13790 = G__13802;
continue;
}
} else
{var item_13803 = cljs.core.first(seq__13773_13797__$1);shadow.object.dom_enter(coll_dom,make_item_fn(item_13803));
{
var G__13804 = cljs.core.next(seq__13773_13797__$1);
var G__13805 = null;
var G__13806 = 0;
var G__13807 = 0;
seq__13773_13787 = G__13804;
chunk__13774_13788 = G__13805;
count__13775_13789 = G__13806;
i__13776_13790 = G__13807;
continue;
}
}
} else
{}
}
break;
}
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function bind_children_watch(old,new$){if(cljs.core.truth_(cljs.core.deref(update_children)))
{var children = cljs.core.into(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));var count_children = cljs.core.count(children);var count_new = cljs.core.count(new$);var diff = (count_new - count_children);var children__$1 = (((diff < 0))?shadow.object.coll_destroy_children(children,count_children,diff):children);var count_children__$1 = (function (){var x__4445__auto__ = count_new;var y__4446__auto__ = count_children;return ((x__4445__auto__ < y__4446__auto__) ? x__4445__auto__ : y__4446__auto__);
})();var n__4954__auto___13808 = count_children__$1;var idx_13809 = 0;while(true){
if((idx_13809 < n__4954__auto___13808))
{var cn_13810 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_13809);var cc_13811 = shadow.object.get_from_dom(cn_13810);var ckey_13812 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",760519136).cljs$core$IFn$_invoke$arity$1(cc_13811);var cval_13813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_13811,item_key);var vec__13782_13814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_13809);var nkey_13815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13782_13814,0,null);var nval_13816 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13782_13814,1,null);if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_13812,nkey_13815)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_13813,nval_13816)))
{} else
{var new_obj_13817 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_13815,nval_13816], null));shadow.dom.replace_node(cn_13810,new_obj_13817);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_13811);
shadow.object.notify_tree_BANG_(new_obj_13817,new cljs.core.Keyword("dom","entered","dom/entered",3723224571));
}
{
var G__13818 = (idx_13809 + 1);
idx_13809 = G__13818;
continue;
}
} else
{}
break;
}
if((diff > 0))
{var seq__13783_13819 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));var chunk__13784_13820 = null;var count__13785_13821 = 0;var i__13786_13822 = 0;while(true){
if((i__13786_13822 < count__13785_13821))
{var item_13823 = chunk__13784_13820.cljs$core$IIndexed$_nth$arity$2(null,i__13786_13822);shadow.object.dom_enter(coll_dom,make_item_fn(item_13823));
{
var G__13824 = seq__13783_13819;
var G__13825 = chunk__13784_13820;
var G__13826 = count__13785_13821;
var G__13827 = (i__13786_13822 + 1);
seq__13783_13819 = G__13824;
chunk__13784_13820 = G__13825;
count__13785_13821 = G__13826;
i__13786_13822 = G__13827;
continue;
}
} else
{var temp__4092__auto___13828 = cljs.core.seq(seq__13783_13819);if(temp__4092__auto___13828)
{var seq__13783_13829__$1 = temp__4092__auto___13828;if(cljs.core.chunked_seq_QMARK_(seq__13783_13829__$1))
{var c__4855__auto___13830 = cljs.core.chunk_first(seq__13783_13829__$1);{
var G__13831 = cljs.core.chunk_rest(seq__13783_13829__$1);
var G__13832 = c__4855__auto___13830;
var G__13833 = cljs.core.count(c__4855__auto___13830);
var G__13834 = 0;
seq__13783_13819 = G__13831;
chunk__13784_13820 = G__13832;
count__13785_13821 = G__13833;
i__13786_13822 = G__13834;
continue;
}
} else
{var item_13835 = cljs.core.first(seq__13783_13829__$1);shadow.object.dom_enter(coll_dom,make_item_fn(item_13835));
{
var G__13836 = cljs.core.next(seq__13783_13829__$1);
var G__13837 = null;
var G__13838 = 0;
var G__13839 = 0;
seq__13783_13819 = G__13836;
chunk__13784_13820 = G__13837;
count__13785_13821 = G__13838;
i__13786_13822 = G__13839;
continue;
}
}
} else
{}
}
break;
}
} else
{}
return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",2782549561));
} else
{return null;
}
}));
return coll_dom;
});
bind_children = function(node,parent,attr,item_type,item_key,coll_transform){
switch(arguments.length){
case 5:
return bind_children__5.call(this,node,parent,attr,item_type,item_key);
case 6:
return bind_children__6.call(this,node,parent,attr,item_type,item_key,coll_transform);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bind_children.cljs$core$IFn$_invoke$arity$5 = bind_children__5;
bind_children.cljs$core$IFn$_invoke$arity$6 = bind_children__6;
return bind_children;
})()
;
shadow.object.remove_from_vector = (function remove_from_vector(coll,key){shadow.object.log.cljs$core$IFn$_invoke$arity$3("remove-from-vector",key,coll);
var c = cljs.core.count(coll);if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(0,key))
{return cljs.core.vec(cljs.core.rest(coll));
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((c - 1),key))
{return cljs.core.vec(cljs.core.butlast(coll));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,0,key),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(coll,(key + 1),c)));
} else
{return null;
}
}
}
});
shadow.object.remove_item_from_coll = (function remove_item_from_coll(coll,key,value){if((function (){var G__13843 = coll;if(G__13843)
{var bit__4757__auto__ = (G__13843.cljs$lang$protocol_mask$partition0$ & 16384);if((bit__4757__auto__) || (G__13843.cljs$core$IVector$))
{return true;
} else
{if((!G__13843.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__13843);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IVector,G__13843);
}
})())
{return shadow.object.remove_from_vector(coll,key);
} else
{if((function (){var G__13844 = coll;if(G__13844)
{var bit__4757__auto__ = (G__13844.cljs$lang$protocol_mask$partition0$ & 1024);if((bit__4757__auto__) || (G__13844.cljs$core$IMap$))
{return true;
} else
{if((!G__13844.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__13844);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.IMap,G__13844);
}
})())
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(coll,key);
} else
{if((function (){var G__13845 = coll;if(G__13845)
{var bit__4757__auto__ = (G__13845.cljs$lang$protocol_mask$partition0$ & 4096);if((bit__4757__auto__) || (G__13845.cljs$core$ISet$))
{return true;
} else
{if((!G__13845.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__13845);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISet,G__13845);
}
})())
{return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(coll,value);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unknown coll type",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"coll","coll",1016963678),coll,new cljs.core.Keyword(null,"key","key",1014010321),key,new cljs.core.Keyword(null,"value","value",1125876963),value], null));
} else
{return null;
}
}
}
}
});
shadow.object.remove_in_parent_BANG_ = (function remove_in_parent_BANG_(oref){var parent = shadow.object.get_parent(oref);var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",760519136).cljs$core$IFn$_invoke$arity$1(oref);var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",994073432).cljs$core$IFn$_invoke$arity$1(oref));var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",2554952536).cljs$core$IFn$_invoke$arity$1(oref);if(cljs.core.truth_((function (){var and__4114__auto__ = key;if(cljs.core.truth_(and__4114__auto__))
{return path;
} else
{return and__4114__auto__;
}
})()))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",1017323830),oref], null));
}
var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);var new_coll = shadow.object.remove_item_from_coll(coll,key,value);return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",4665764005),cljs.core.array_seq([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function inspect_BANG_(oref){return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4("inspect!",shadow.object._id(oref),[cljs.core.str(shadow.object._type(oref))].join(''),cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)))) : shadow.object.info.call(null,"inspect!",shadow.object._id(oref),[cljs.core.str(shadow.object._type(oref))].join(''),cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)))));
});
shadow.object.dump_BANG_ = (function dump_BANG_(){(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));
var seq__13852_13858 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));var chunk__13853_13859 = null;var count__13854_13860 = 0;var i__13855_13861 = 0;while(true){
if((i__13855_13861 < count__13854_13860))
{var vec__13856_13862 = chunk__13853_13859.cljs$core$IIndexed$_nth$arity$2(null,i__13855_13861);var id_13863 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13856_13862,0,null);var oref_13864 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13856_13862,1,null);(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4("dump",id_13863,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shadow.object._type(oref_13864)], 0)),cljs.core.deref(shadow.object._data(oref_13864))) : shadow.object.info.call(null,"dump",id_13863,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shadow.object._type(oref_13864)], 0)),cljs.core.deref(shadow.object._data(oref_13864))));
{
var G__13865 = seq__13852_13858;
var G__13866 = chunk__13853_13859;
var G__13867 = count__13854_13860;
var G__13868 = (i__13855_13861 + 1);
seq__13852_13858 = G__13865;
chunk__13853_13859 = G__13866;
count__13854_13860 = G__13867;
i__13855_13861 = G__13868;
continue;
}
} else
{var temp__4092__auto___13869 = cljs.core.seq(seq__13852_13858);if(temp__4092__auto___13869)
{var seq__13852_13870__$1 = temp__4092__auto___13869;if(cljs.core.chunked_seq_QMARK_(seq__13852_13870__$1))
{var c__4855__auto___13871 = cljs.core.chunk_first(seq__13852_13870__$1);{
var G__13872 = cljs.core.chunk_rest(seq__13852_13870__$1);
var G__13873 = c__4855__auto___13871;
var G__13874 = cljs.core.count(c__4855__auto___13871);
var G__13875 = 0;
seq__13852_13858 = G__13872;
chunk__13853_13859 = G__13873;
count__13854_13860 = G__13874;
i__13855_13861 = G__13875;
continue;
}
} else
{var vec__13857_13876 = cljs.core.first(seq__13852_13870__$1);var id_13877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857_13876,0,null);var oref_13878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13857_13876,1,null);(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4("dump",id_13877,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shadow.object._type(oref_13878)], 0)),cljs.core.deref(shadow.object._data(oref_13878))) : shadow.object.info.call(null,"dump",id_13877,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([shadow.object._type(oref_13878)], 0)),cljs.core.deref(shadow.object._data(oref_13878))));
{
var G__13879 = cljs.core.next(seq__13852_13870__$1);
var G__13880 = null;
var G__13881 = 0;
var G__13882 = 0;
seq__13852_13858 = G__13879;
chunk__13853_13859 = G__13880;
count__13854_13860 = G__13881;
i__13855_13861 = G__13882;
continue;
}
}
} else
{}
}
break;
}
return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);
//# sourceMappingURL=object.js.map