goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.style.transition');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style.transition');
goog.require('goog.dom.classlist');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('goog.string');
goog.require('cljs.core.async');
goog.require('goog.style');
goog.require('goog.dom.forms');
shadow.dom.transition_supported_QMARK_ = goog.style.transition.isSupported();
shadow.dom.IElement = (function (){var obj13049 = {};return obj13049;
})();
shadow.dom._to_dom = (function _to_dom(this$){if((function (){var and__4114__auto__ = this$;if(and__4114__auto__)
{return this$.shadow$dom$IElement$_to_dom$arity$1;
} else
{return and__4114__auto__;
}
})())
{return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else
{var x__4734__auto__ = (((this$ == null))?null:this$);return (function (){var or__4126__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (shadow.dom._to_dom["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
})().call(null,this$);
}
});
shadow.dom.SVGElement = (function (){var obj13051 = {};return obj13051;
})();
shadow.dom._to_svg = (function _to_svg(this$){if((function (){var and__4114__auto__ = this$;if(and__4114__auto__)
{return this$.shadow$dom$SVGElement$_to_svg$arity$1;
} else
{return and__4114__auto__;
}
})())
{return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else
{var x__4734__auto__ = (((this$ == null))?null:this$);return (function (){var or__4126__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (shadow.dom._to_svg["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
})().call(null,this$);
}
});
shadow.dom.lazy_native_coll_seq = (function lazy_native_coll_seq(coll,idx){if((idx < coll.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons((coll[idx]),lazy_native_coll_seq(coll,(idx + 1)));
}),null,null));
} else
{return null;
}
});

/**
* @constructor
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
})
shadow.dom.NativeColl.cljs$lang$type = true;
shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl";
shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"shadow.dom/NativeColl");
});
shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = true;
shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.coll;
});
shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return shadow.dom.lazy_native_coll_seq(self__.coll,0);
});
shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.coll.length;
});
shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){var self__ = this;
var this$__$1 = this;return (self__.coll[n]);
});
shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){var self__ = this;
var this$__$1 = this;var or__4126__auto__ = (self__.coll[n]);if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return not_found;
}
});
shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.coll;
});
shadow.dom.__GT_NativeColl = (function __GT_NativeColl(coll){return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function dom_node(el){if((el == null))
{return null;
} else
{if((function (){var G__13053 = el;if(G__13053)
{var bit__4757__auto__ = null;if(cljs.core.truth_((function (){var or__4126__auto__ = bit__4757__auto__;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return G__13053.shadow$dom$IElement$;
}
})()))
{return true;
} else
{if((!G__13053.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(shadow.dom.IElement,G__13053);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(shadow.dom.IElement,G__13053);
}
})())
{return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else
{if(typeof el === 'string')
{return document.createTextNode(el);
} else
{if(typeof el === 'number')
{return document.createTextNode([cljs.core.str(el)].join(''));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return el;
} else
{return null;
}
}
}
}
}
});
shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function() {
var ev_stop = null;
var ev_stop__1 = (function (e){if(cljs.core.truth_(e.stopPropagation))
{e.stopPropagation();
e.preventDefault();
} else
{e.cancelBubble = true;
e.returnValue = false;
}
return e;
});
var ev_stop__2 = (function (e,el){ev_stop.cljs$core$IFn$_invoke$arity$1(e);
return el;
});
ev_stop = function(e,el){
switch(arguments.length){
case 1:
return ev_stop__1.call(this,e);
case 2:
return ev_stop__2.call(this,e,el);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ev_stop.cljs$core$IFn$_invoke$arity$1 = ev_stop__1;
ev_stop.cljs$core$IFn$_invoke$arity$2 = ev_stop__2;
return ev_stop;
})()
;
/**
* check wether a parent node (or the document) contains the child
*/
shadow.dom.contains_QMARK_ = (function() {
var contains_QMARK_ = null;
var contains_QMARK___1 = (function (el){return goog.dom.contains(document,shadow.dom.dom_node(el));
});
var contains_QMARK___2 = (function (parent,el){return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
});
contains_QMARK_ = function(parent,el){
switch(arguments.length){
case 1:
return contains_QMARK___1.call(this,parent);
case 2:
return contains_QMARK___2.call(this,parent,el);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = contains_QMARK___1;
contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = contains_QMARK___2;
return contains_QMARK_;
})()
;
shadow.dom.add_class = (function add_class(el,cls){return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function remove_class(el,cls){return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function() {
var toggle_class = null;
var toggle_class__2 = (function (el,cls){return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
});
var toggle_class__3 = (function (el,cls,v){if(cljs.core.truth_(v))
{return shadow.dom.add_class(el,cls);
} else
{return shadow.dom.remove_class(el,cls);
}
});
toggle_class = function(el,cls,v){
switch(arguments.length){
case 2:
return toggle_class__2.call(this,el,cls);
case 3:
return toggle_class__3.call(this,el,cls,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
toggle_class.cljs$core$IFn$_invoke$arity$2 = toggle_class__2;
toggle_class.cljs$core$IFn$_invoke$arity$3 = toggle_class__3;
return toggle_class;
})()
;
shadow.dom.has_class_QMARK_ = (function has_class_QMARK_(el,cls){return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function merge_class_string(current,extra_class){if(cljs.core.seq(current))
{return [cljs.core.str(current),cljs.core.str(" "),cljs.core.str(extra_class)].join('');
} else
{return extra_class;
}
});
shadow.dom.parse_tag = (function parse_tag(spec){var spec__$1 = cljs.core.name(spec);var fdot = spec__$1.indexOf(".");var fhash = spec__$1.indexOf("#");if((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,fhash)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,fhash))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring(0,fdot),null,clojure.string.replace(spec__$1.substring((fdot + 1)),/\./," ")], null);
} else
{if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(-1,fdot))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring(0,fhash),spec__$1.substring((fhash + 1)),null], null);
} else
{if((fhash > fdot))
{throw [cljs.core.str("cant have id after class?"),cljs.core.str(spec__$1)].join('');
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring(0,fhash),spec__$1.substring((fhash + 1),fdot),clojure.string.replace(spec__$1.substring((fdot + 1)),/\./," ")], null);
} else
{return null;
}
}
}
}
}
});
shadow.dom.create_dom_node = (function create_dom_node(tag_def,props){var props__$1 = cljs.core.clj__GT_js(props);var vec__13055 = shadow.dom.parse_tag(tag_def);var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13055,0,null);var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13055,1,null);var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13055,2,null);if(cljs.core.truth_(tag_id))
{(props__$1["id"] = tag_id);
} else
{}
if(cljs.core.truth_(tag_classes))
{(props__$1["class"] = shadow.dom.merge_class_string((props__$1["class"]),tag_classes));
} else
{}
return goog.dom.createDom(tag_name,props__$1);
});
shadow.dom.destructure_node = (function destructure_node(create_fn,p__13056){var vec__13058 = p__13056;var nn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058,0,null);var np = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13058,1,null);var nc = cljs.core.nthnext(vec__13058,2);var node = vec__13058;if((nn instanceof cljs.core.Keyword))
{} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",1017291124),node], null));
}
if(((np == null)) && ((nc == null)))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,cljs.core.PersistentArrayMap.EMPTY) : create_fn.call(null,nn,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.List.EMPTY], null);
} else
{if(cljs.core.map_QMARK_(np))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,cljs.core.PersistentArrayMap.EMPTY) : create_fn.call(null,nn,cljs.core.PersistentArrayMap.EMPTY)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);
} else
{return null;
}
}
}
});
/**
* @param {...*} var_args
*/
shadow.dom.macro_node = (function() { 
var macro_node__delegate = function (tag_name,tag_id,tag_classes,attrs,body){var vec__13072 = ((cljs.core.map_QMARK_(attrs))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,body], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.cons(attrs,body)], null));var attrs__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,0,null);var body__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,1,null);var props = cljs.core.clj__GT_js(attrs__$1);if(cljs.core.truth_(tag_id))
{(props["id"] = tag_id);
} else
{}
if(cljs.core.truth_(tag_classes))
{(props["class"] = shadow.dom.merge_class_string((props["class"]),tag_classes));
} else
{}
var node = goog.dom.createDom(tag_name,props);var seq__13073_13085 = cljs.core.seq(body__$1);var chunk__13074_13086 = null;var count__13075_13087 = 0;var i__13076_13088 = 0;while(true){
if((i__13076_13088 < count__13075_13087))
{var child_struct_13089 = chunk__13074_13086.cljs$core$IIndexed$_nth$arity$2(null,i__13076_13088);if(cljs.core.seq_QMARK_(child_struct_13089))
{var seq__13077_13090 = cljs.core.seq(child_struct_13089);var chunk__13078_13091 = null;var count__13079_13092 = 0;var i__13080_13093 = 0;while(true){
if((i__13080_13093 < count__13079_13092))
{var child_13094 = chunk__13078_13091.cljs$core$IIndexed$_nth$arity$2(null,i__13080_13093);goog.dom.append(node,shadow.dom.dom_node(child_13094));
{
var G__13095 = seq__13077_13090;
var G__13096 = chunk__13078_13091;
var G__13097 = count__13079_13092;
var G__13098 = (i__13080_13093 + 1);
seq__13077_13090 = G__13095;
chunk__13078_13091 = G__13096;
count__13079_13092 = G__13097;
i__13080_13093 = G__13098;
continue;
}
} else
{var temp__4092__auto___13099 = cljs.core.seq(seq__13077_13090);if(temp__4092__auto___13099)
{var seq__13077_13100__$1 = temp__4092__auto___13099;if(cljs.core.chunked_seq_QMARK_(seq__13077_13100__$1))
{var c__4855__auto___13101 = cljs.core.chunk_first(seq__13077_13100__$1);{
var G__13102 = cljs.core.chunk_rest(seq__13077_13100__$1);
var G__13103 = c__4855__auto___13101;
var G__13104 = cljs.core.count(c__4855__auto___13101);
var G__13105 = 0;
seq__13077_13090 = G__13102;
chunk__13078_13091 = G__13103;
count__13079_13092 = G__13104;
i__13080_13093 = G__13105;
continue;
}
} else
{var child_13106 = cljs.core.first(seq__13077_13100__$1);goog.dom.append(node,shadow.dom.dom_node(child_13106));
{
var G__13107 = cljs.core.next(seq__13077_13100__$1);
var G__13108 = null;
var G__13109 = 0;
var G__13110 = 0;
seq__13077_13090 = G__13107;
chunk__13078_13091 = G__13108;
count__13079_13092 = G__13109;
i__13080_13093 = G__13110;
continue;
}
}
} else
{}
}
break;
}
} else
{goog.dom.append(node,shadow.dom.dom_node(child_struct_13089));
}
{
var G__13111 = seq__13073_13085;
var G__13112 = chunk__13074_13086;
var G__13113 = count__13075_13087;
var G__13114 = (i__13076_13088 + 1);
seq__13073_13085 = G__13111;
chunk__13074_13086 = G__13112;
count__13075_13087 = G__13113;
i__13076_13088 = G__13114;
continue;
}
} else
{var temp__4092__auto___13115 = cljs.core.seq(seq__13073_13085);if(temp__4092__auto___13115)
{var seq__13073_13116__$1 = temp__4092__auto___13115;if(cljs.core.chunked_seq_QMARK_(seq__13073_13116__$1))
{var c__4855__auto___13117 = cljs.core.chunk_first(seq__13073_13116__$1);{
var G__13118 = cljs.core.chunk_rest(seq__13073_13116__$1);
var G__13119 = c__4855__auto___13117;
var G__13120 = cljs.core.count(c__4855__auto___13117);
var G__13121 = 0;
seq__13073_13085 = G__13118;
chunk__13074_13086 = G__13119;
count__13075_13087 = G__13120;
i__13076_13088 = G__13121;
continue;
}
} else
{var child_struct_13122 = cljs.core.first(seq__13073_13116__$1);if(cljs.core.seq_QMARK_(child_struct_13122))
{var seq__13081_13123 = cljs.core.seq(child_struct_13122);var chunk__13082_13124 = null;var count__13083_13125 = 0;var i__13084_13126 = 0;while(true){
if((i__13084_13126 < count__13083_13125))
{var child_13127 = chunk__13082_13124.cljs$core$IIndexed$_nth$arity$2(null,i__13084_13126);goog.dom.append(node,shadow.dom.dom_node(child_13127));
{
var G__13128 = seq__13081_13123;
var G__13129 = chunk__13082_13124;
var G__13130 = count__13083_13125;
var G__13131 = (i__13084_13126 + 1);
seq__13081_13123 = G__13128;
chunk__13082_13124 = G__13129;
count__13083_13125 = G__13130;
i__13084_13126 = G__13131;
continue;
}
} else
{var temp__4092__auto___13132__$1 = cljs.core.seq(seq__13081_13123);if(temp__4092__auto___13132__$1)
{var seq__13081_13133__$1 = temp__4092__auto___13132__$1;if(cljs.core.chunked_seq_QMARK_(seq__13081_13133__$1))
{var c__4855__auto___13134 = cljs.core.chunk_first(seq__13081_13133__$1);{
var G__13135 = cljs.core.chunk_rest(seq__13081_13133__$1);
var G__13136 = c__4855__auto___13134;
var G__13137 = cljs.core.count(c__4855__auto___13134);
var G__13138 = 0;
seq__13081_13123 = G__13135;
chunk__13082_13124 = G__13136;
count__13083_13125 = G__13137;
i__13084_13126 = G__13138;
continue;
}
} else
{var child_13139 = cljs.core.first(seq__13081_13133__$1);goog.dom.append(node,shadow.dom.dom_node(child_13139));
{
var G__13140 = cljs.core.next(seq__13081_13133__$1);
var G__13141 = null;
var G__13142 = 0;
var G__13143 = 0;
seq__13081_13123 = G__13140;
chunk__13082_13124 = G__13141;
count__13083_13125 = G__13142;
i__13084_13126 = G__13143;
continue;
}
}
} else
{}
}
break;
}
} else
{goog.dom.append(node,shadow.dom.dom_node(child_struct_13122));
}
{
var G__13144 = cljs.core.next(seq__13073_13116__$1);
var G__13145 = null;
var G__13146 = 0;
var G__13147 = 0;
seq__13073_13085 = G__13144;
chunk__13074_13086 = G__13145;
count__13075_13087 = G__13146;
i__13076_13088 = G__13147;
continue;
}
}
} else
{}
}
break;
}
return node;
};
var macro_node = function (tag_name,tag_id,tag_classes,attrs,var_args){
var body = null;if (arguments.length > 4) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return macro_node__delegate.call(this,tag_name,tag_id,tag_classes,attrs,body);};
macro_node.cljs$lang$maxFixedArity = 4;
macro_node.cljs$lang$applyTo = (function (arglist__13148){
var tag_name = cljs.core.first(arglist__13148);
arglist__13148 = cljs.core.next(arglist__13148);
var tag_id = cljs.core.first(arglist__13148);
arglist__13148 = cljs.core.next(arglist__13148);
var tag_classes = cljs.core.first(arglist__13148);
arglist__13148 = cljs.core.next(arglist__13148);
var attrs = cljs.core.first(arglist__13148);
var body = cljs.core.rest(arglist__13148);
return macro_node__delegate(tag_name,tag_id,tag_classes,attrs,body);
});
macro_node.cljs$core$IFn$_invoke$arity$variadic = macro_node__delegate;
return macro_node;
})()
;
shadow.dom.make_dom_node = (function make_dom_node(structure){var vec__13162 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13162,0,null);var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13162,1,null);var seq__13163_13175 = cljs.core.seq(node_children);var chunk__13164_13176 = null;var count__13165_13177 = 0;var i__13166_13178 = 0;while(true){
if((i__13166_13178 < count__13165_13177))
{var child_struct_13179 = chunk__13164_13176.cljs$core$IIndexed$_nth$arity$2(null,i__13166_13178);var children_13180 = shadow.dom.dom_node(child_struct_13179);if(cljs.core.seq_QMARK_(children_13180))
{var seq__13167_13181 = cljs.core.seq(children_13180);var chunk__13168_13182 = null;var count__13169_13183 = 0;var i__13170_13184 = 0;while(true){
if((i__13170_13184 < count__13169_13183))
{var child_13185 = chunk__13168_13182.cljs$core$IIndexed$_nth$arity$2(null,i__13170_13184);if(cljs.core.truth_(child_13185))
{goog.dom.append(node,child_13185);
} else
{}
{
var G__13186 = seq__13167_13181;
var G__13187 = chunk__13168_13182;
var G__13188 = count__13169_13183;
var G__13189 = (i__13170_13184 + 1);
seq__13167_13181 = G__13186;
chunk__13168_13182 = G__13187;
count__13169_13183 = G__13188;
i__13170_13184 = G__13189;
continue;
}
} else
{var temp__4092__auto___13190 = cljs.core.seq(seq__13167_13181);if(temp__4092__auto___13190)
{var seq__13167_13191__$1 = temp__4092__auto___13190;if(cljs.core.chunked_seq_QMARK_(seq__13167_13191__$1))
{var c__4855__auto___13192 = cljs.core.chunk_first(seq__13167_13191__$1);{
var G__13193 = cljs.core.chunk_rest(seq__13167_13191__$1);
var G__13194 = c__4855__auto___13192;
var G__13195 = cljs.core.count(c__4855__auto___13192);
var G__13196 = 0;
seq__13167_13181 = G__13193;
chunk__13168_13182 = G__13194;
count__13169_13183 = G__13195;
i__13170_13184 = G__13196;
continue;
}
} else
{var child_13197 = cljs.core.first(seq__13167_13191__$1);if(cljs.core.truth_(child_13197))
{goog.dom.append(node,child_13197);
} else
{}
{
var G__13198 = cljs.core.next(seq__13167_13191__$1);
var G__13199 = null;
var G__13200 = 0;
var G__13201 = 0;
seq__13167_13181 = G__13198;
chunk__13168_13182 = G__13199;
count__13169_13183 = G__13200;
i__13170_13184 = G__13201;
continue;
}
}
} else
{}
}
break;
}
} else
{goog.dom.append(node,children_13180);
}
{
var G__13202 = seq__13163_13175;
var G__13203 = chunk__13164_13176;
var G__13204 = count__13165_13177;
var G__13205 = (i__13166_13178 + 1);
seq__13163_13175 = G__13202;
chunk__13164_13176 = G__13203;
count__13165_13177 = G__13204;
i__13166_13178 = G__13205;
continue;
}
} else
{var temp__4092__auto___13206 = cljs.core.seq(seq__13163_13175);if(temp__4092__auto___13206)
{var seq__13163_13207__$1 = temp__4092__auto___13206;if(cljs.core.chunked_seq_QMARK_(seq__13163_13207__$1))
{var c__4855__auto___13208 = cljs.core.chunk_first(seq__13163_13207__$1);{
var G__13209 = cljs.core.chunk_rest(seq__13163_13207__$1);
var G__13210 = c__4855__auto___13208;
var G__13211 = cljs.core.count(c__4855__auto___13208);
var G__13212 = 0;
seq__13163_13175 = G__13209;
chunk__13164_13176 = G__13210;
count__13165_13177 = G__13211;
i__13166_13178 = G__13212;
continue;
}
} else
{var child_struct_13213 = cljs.core.first(seq__13163_13207__$1);var children_13214 = shadow.dom.dom_node(child_struct_13213);if(cljs.core.seq_QMARK_(children_13214))
{var seq__13171_13215 = cljs.core.seq(children_13214);var chunk__13172_13216 = null;var count__13173_13217 = 0;var i__13174_13218 = 0;while(true){
if((i__13174_13218 < count__13173_13217))
{var child_13219 = chunk__13172_13216.cljs$core$IIndexed$_nth$arity$2(null,i__13174_13218);if(cljs.core.truth_(child_13219))
{goog.dom.append(node,child_13219);
} else
{}
{
var G__13220 = seq__13171_13215;
var G__13221 = chunk__13172_13216;
var G__13222 = count__13173_13217;
var G__13223 = (i__13174_13218 + 1);
seq__13171_13215 = G__13220;
chunk__13172_13216 = G__13221;
count__13173_13217 = G__13222;
i__13174_13218 = G__13223;
continue;
}
} else
{var temp__4092__auto___13224__$1 = cljs.core.seq(seq__13171_13215);if(temp__4092__auto___13224__$1)
{var seq__13171_13225__$1 = temp__4092__auto___13224__$1;if(cljs.core.chunked_seq_QMARK_(seq__13171_13225__$1))
{var c__4855__auto___13226 = cljs.core.chunk_first(seq__13171_13225__$1);{
var G__13227 = cljs.core.chunk_rest(seq__13171_13225__$1);
var G__13228 = c__4855__auto___13226;
var G__13229 = cljs.core.count(c__4855__auto___13226);
var G__13230 = 0;
seq__13171_13215 = G__13227;
chunk__13172_13216 = G__13228;
count__13173_13217 = G__13229;
i__13174_13218 = G__13230;
continue;
}
} else
{var child_13231 = cljs.core.first(seq__13171_13225__$1);if(cljs.core.truth_(child_13231))
{goog.dom.append(node,child_13231);
} else
{}
{
var G__13232 = cljs.core.next(seq__13171_13225__$1);
var G__13233 = null;
var G__13234 = 0;
var G__13235 = 0;
seq__13171_13215 = G__13232;
chunk__13172_13216 = G__13233;
count__13173_13217 = G__13234;
i__13174_13218 = G__13235;
continue;
}
}
} else
{}
}
break;
}
} else
{goog.dom.append(node,children_13214);
}
{
var G__13236 = cljs.core.next(seq__13163_13207__$1);
var G__13237 = null;
var G__13238 = 0;
var G__13239 = 0;
seq__13163_13175 = G__13236;
chunk__13164_13176 = G__13237;
count__13165_13177 = G__13238;
i__13166_13178 = G__13239;
continue;
}
}
} else
{}
}
break;
}
return node;
});
cljs.core.LazySeq.prototype.shadow$dom$IElement$ = true;
cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
});
cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = true;
cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){var this$__$1 = this;return shadow.dom.make_dom_node(this$__$1);
});
cljs.core.Keyword.prototype.shadow$dom$IElement$ = true;
cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){var this$__$1 = this;return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
});
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined')))
{HTMLElement.prototype.shadow$dom$IElement$ = true;
HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined')))
{DocumentFragment.prototype.shadow$dom$IElement$ = true;
DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){var this$__$1 = this;return this$__$1;
});
} else
{}
shadow.dom.append = (function() {
var append = null;
var append__1 = (function (node){return goog.dom.append(document.body,shadow.dom.dom_node(node));
});
var append__2 = (function (el,node){return goog.dom.append(shadow.dom.dom_node(el),shadow.dom.dom_node(node));
});
append = function(el,node){
switch(arguments.length){
case 1:
return append__1.call(this,el);
case 2:
return append__2.call(this,el,node);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
append.cljs$core$IFn$_invoke$arity$1 = append__1;
append.cljs$core$IFn$_invoke$arity$2 = append__2;
return append;
})()
;
shadow.dom.query_one = (function() {
var query_one = null;
var query_one__1 = (function (sel){return document.querySelector(sel);
});
var query_one__2 = (function (sel,root){return shadow.dom.dom_node(root).querySelector(sel);
});
query_one = function(sel,root){
switch(arguments.length){
case 1:
return query_one__1.call(this,sel);
case 2:
return query_one__2.call(this,sel,root);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
query_one.cljs$core$IFn$_invoke$arity$1 = query_one__1;
query_one.cljs$core$IFn$_invoke$arity$2 = query_one__2;
return query_one;
})()
;
shadow.dom.query = (function() {
var query = null;
var query__1 = (function (sel){return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
});
var query__2 = (function (sel,root){return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
});
query = function(sel,root){
switch(arguments.length){
case 1:
return query__1.call(this,sel);
case 2:
return query__2.call(this,sel,root);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
query.cljs$core$IFn$_invoke$arity$1 = query__1;
query.cljs$core$IFn$_invoke$arity$2 = query__2;
return query;
})()
;
shadow.dom.dom_listen = (cljs.core.truth_(document.addEventListener)?(function dom_listen_good(el,ev,handler){return el.addEventListener(ev,handler,false);
}):(function dom_listen_ie(el,ev,handler){try{return el.attachEvent([cljs.core.str("on"),cljs.core.str(ev)].join(''),(function (e){return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e13241){if((e13241 instanceof Object))
{var e = e13241;return console.log("didnt support attachEvent",el,e);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13241;
} else
{return null;
}
}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_(document.removeEventListener)?(function dom_listen_remove_good(el,ev,handler){return el.removeEventListener(ev,handler,false);
}):(function dom_listen_remove_ie(el,ev,handler){return el.detachEvent([cljs.core.str("on"),cljs.core.str(ev)].join(''),handler);
}));
shadow.dom.on_query = (function on_query(root_el,ev,selector,handler){var seq__13246 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));var chunk__13247 = null;var count__13248 = 0;var i__13249 = 0;while(true){
if((i__13249 < count__13248))
{var el = chunk__13247.cljs$core$IIndexed$_nth$arity$2(null,i__13249);var handler_13250__$1 = ((function (seq__13246,chunk__13247,count__13248,i__13249,el){
return (function (e){return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13246,chunk__13247,count__13248,i__13249,el))
;(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(el,cljs.core.name(ev),handler_13250__$1) : shadow.dom.dom_listen.call(null,el,cljs.core.name(ev),handler_13250__$1));
{
var G__13251 = seq__13246;
var G__13252 = chunk__13247;
var G__13253 = count__13248;
var G__13254 = (i__13249 + 1);
seq__13246 = G__13251;
chunk__13247 = G__13252;
count__13248 = G__13253;
i__13249 = G__13254;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13246);if(temp__4092__auto__)
{var seq__13246__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13246__$1))
{var c__4855__auto__ = cljs.core.chunk_first(seq__13246__$1);{
var G__13255 = cljs.core.chunk_rest(seq__13246__$1);
var G__13256 = c__4855__auto__;
var G__13257 = cljs.core.count(c__4855__auto__);
var G__13258 = 0;
seq__13246 = G__13255;
chunk__13247 = G__13256;
count__13248 = G__13257;
i__13249 = G__13258;
continue;
}
} else
{var el = cljs.core.first(seq__13246__$1);var handler_13259__$1 = ((function (seq__13246,chunk__13247,count__13248,i__13249,el,seq__13246__$1,temp__4092__auto__){
return (function (e){return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__13246,chunk__13247,count__13248,i__13249,el,seq__13246__$1,temp__4092__auto__))
;(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(el,cljs.core.name(ev),handler_13259__$1) : shadow.dom.dom_listen.call(null,el,cljs.core.name(ev),handler_13259__$1));
{
var G__13260 = cljs.core.next(seq__13246__$1);
var G__13261 = null;
var G__13262 = 0;
var G__13263 = 0;
seq__13246 = G__13260;
chunk__13247 = G__13261;
count__13248 = G__13262;
i__13249 = G__13263;
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
shadow.dom.on = (function() {
var on = null;
var on__3 = (function (el,ev,handler){return on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
});
var on__4 = (function (el,ev,handler,capture){if(cljs.core.vector_QMARK_(ev))
{return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else
{var handler__$1 = (function (e){return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1) : shadow.dom.dom_listen.call(null,shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1));
}
});
on = function(el,ev,handler,capture){
switch(arguments.length){
case 3:
return on__3.call(this,el,ev,handler);
case 4:
return on__4.call(this,el,ev,handler,capture);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
on.cljs$core$IFn$_invoke$arity$3 = on__3;
on.cljs$core$IFn$_invoke$arity$4 = on__4;
return on;
})()
;
shadow.dom.remove_event_handler = (function remove_event_handler(el,ev,handler){return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(shadow.dom.dom_node(el),cljs.core.name(ev),handler) : shadow.dom.dom_listen_remove.call(null,shadow.dom.dom_node(el),cljs.core.name(ev),handler));
});
shadow.dom.by_id = (function() {
var by_id = null;
var by_id__1 = (function (id){return document.getElementById(id);
});
var by_id__2 = (function (id,el){return shadow.dom.dom_node(el).getElementById(id);
});
by_id = function(id,el){
switch(arguments.length){
case 1:
return by_id__1.call(this,id);
case 2:
return by_id__2.call(this,id,el);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
by_id.cljs$core$IFn$_invoke$arity$1 = by_id__1;
by_id.cljs$core$IFn$_invoke$arity$2 = by_id__2;
return by_id;
})()
;
/**
* clear node children
*/
shadow.dom.reset = (function reset(node){return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function remove(node){if((function (){var G__13269 = node;if(G__13269)
{var bit__4757__auto__ = (G__13269.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4757__auto__) || (G__13269.cljs$core$ISeqable$))
{return true;
} else
{if((!G__13269.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__13269);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.ISeqable,G__13269);
}
})())
{var seq__13270 = cljs.core.seq(node);var chunk__13271 = null;var count__13272 = 0;var i__13273 = 0;while(true){
if((i__13273 < count__13272))
{var n = chunk__13271.cljs$core$IIndexed$_nth$arity$2(null,i__13273);remove(n);
{
var G__13274 = seq__13270;
var G__13275 = chunk__13271;
var G__13276 = count__13272;
var G__13277 = (i__13273 + 1);
seq__13270 = G__13274;
chunk__13271 = G__13275;
count__13272 = G__13276;
i__13273 = G__13277;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13270);if(temp__4092__auto__)
{var seq__13270__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13270__$1))
{var c__4855__auto__ = cljs.core.chunk_first(seq__13270__$1);{
var G__13278 = cljs.core.chunk_rest(seq__13270__$1);
var G__13279 = c__4855__auto__;
var G__13280 = cljs.core.count(c__4855__auto__);
var G__13281 = 0;
seq__13270 = G__13278;
chunk__13271 = G__13279;
count__13272 = G__13280;
i__13273 = G__13281;
continue;
}
} else
{var n = cljs.core.first(seq__13270__$1);remove(n);
{
var G__13282 = cljs.core.next(seq__13270__$1);
var G__13283 = null;
var G__13284 = 0;
var G__13285 = 0;
seq__13270 = G__13282;
chunk__13271 = G__13283;
count__13272 = G__13284;
i__13273 = G__13285;
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
{return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function replace_node(old,new$){return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function() {
var text = null;
var text__1 = (function (el){return shadow.dom.dom_node(el).innerText;
});
var text__2 = (function (el,new_text){return shadow.dom.dom_node(el).innerText = new_text;
});
text = function(el,new_text){
switch(arguments.length){
case 1:
return text__1.call(this,el);
case 2:
return text__2.call(this,el,new_text);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$core$IFn$_invoke$arity$1 = text__1;
text.cljs$core$IFn$_invoke$arity$2 = text__2;
return text;
})()
;
shadow.dom.check = (function() {
var check = null;
var check__1 = (function (el){return check.cljs$core$IFn$_invoke$arity$2(el,true);
});
var check__2 = (function (el,checked){return shadow.dom.dom_node(el).checked = checked;
});
check = function(el,checked){
switch(arguments.length){
case 1:
return check__1.call(this,el);
case 2:
return check__2.call(this,el,checked);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check.cljs$core$IFn$_invoke$arity$1 = check__1;
check.cljs$core$IFn$_invoke$arity$2 = check__2;
return check;
})()
;
shadow.dom.checked_QMARK_ = (function checked_QMARK_(el){return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function form_elements(el){return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function children(el){return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.attr = (function() {
var attr = null;
var attr__2 = (function (el,key){return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
});
var attr__3 = (function (el,key,default$){var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return default$;
}
});
attr = function(el,key,default$){
switch(arguments.length){
case 2:
return attr__2.call(this,el,key);
case 3:
return attr__3.call(this,el,key,default$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
attr.cljs$core$IFn$_invoke$arity$2 = attr__2;
attr.cljs$core$IFn$_invoke$arity$3 = attr__3;
return attr;
})()
;
shadow.dom.set_attr = (function set_attr(el,key,value){return goog.dom.setProperties(shadow.dom.dom_node(el),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap.fromArray([key,value], true, false)));
});
shadow.dom.del_attr = (function del_attr(el,key){return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (cljs.core.truth_(document.body.dataset)?(function data_dataset(el,key){return (shadow.dom.dom_node(el).dataset[goog.string.toCamelCase(cljs.core.name(key))]);
}):(function data_get_attribute(el,key){return shadow.dom.dom_node(el).getAttribute([cljs.core.str("data-"),cljs.core.str(cljs.core.name(key))].join(''));
}));
shadow.dom.set_data = (cljs.core.truth_(document.body.dataset)?(function set_data_dataset(el,key,value){return (shadow.dom.dom_node(el).dataset[goog.string.toCamelCase(cljs.core.name(key))] = [cljs.core.str(value)].join(''));
}):(function set_data_set_attribute(el,key,value){return shadow.dom.dom_node(el).setAttribute([cljs.core.str("data-"),cljs.core.str(cljs.core.name(key))].join(''),[cljs.core.str(value)].join(''));
}));
shadow.dom.set_html = (function set_html(node,text){return shadow.dom.dom_node(node).innerHTML = text;
});
shadow.dom.get_html = (function get_html(node){return shadow.dom.dom_node(node).innerHTML;
});
/**
* @param {...*} var_args
*/
shadow.dom.fragment = (function() { 
var fragment__delegate = function (nodes){var fragment__$1 = document.createDocumentFragment();var seq__13290_13294 = cljs.core.seq(nodes);var chunk__13291_13295 = null;var count__13292_13296 = 0;var i__13293_13297 = 0;while(true){
if((i__13293_13297 < count__13292_13296))
{var node_13298 = chunk__13291_13295.cljs$core$IIndexed$_nth$arity$2(null,i__13293_13297);fragment__$1.appendChild(shadow.dom._to_dom(node_13298));
{
var G__13299 = seq__13290_13294;
var G__13300 = chunk__13291_13295;
var G__13301 = count__13292_13296;
var G__13302 = (i__13293_13297 + 1);
seq__13290_13294 = G__13299;
chunk__13291_13295 = G__13300;
count__13292_13296 = G__13301;
i__13293_13297 = G__13302;
continue;
}
} else
{var temp__4092__auto___13303 = cljs.core.seq(seq__13290_13294);if(temp__4092__auto___13303)
{var seq__13290_13304__$1 = temp__4092__auto___13303;if(cljs.core.chunked_seq_QMARK_(seq__13290_13304__$1))
{var c__4855__auto___13305 = cljs.core.chunk_first(seq__13290_13304__$1);{
var G__13306 = cljs.core.chunk_rest(seq__13290_13304__$1);
var G__13307 = c__4855__auto___13305;
var G__13308 = cljs.core.count(c__4855__auto___13305);
var G__13309 = 0;
seq__13290_13294 = G__13306;
chunk__13291_13295 = G__13307;
count__13292_13296 = G__13308;
i__13293_13297 = G__13309;
continue;
}
} else
{var node_13310 = cljs.core.first(seq__13290_13304__$1);fragment__$1.appendChild(shadow.dom._to_dom(node_13310));
{
var G__13311 = cljs.core.next(seq__13290_13304__$1);
var G__13312 = null;
var G__13313 = 0;
var G__13314 = 0;
seq__13290_13294 = G__13311;
chunk__13291_13295 = G__13312;
count__13292_13296 = G__13313;
i__13293_13297 = G__13314;
continue;
}
}
} else
{}
}
break;
}
return (new shadow.dom.NativeColl(fragment__$1));
};
var fragment = function (var_args){
var nodes = null;if (arguments.length > 0) {
  nodes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return fragment__delegate.call(this,nodes);};
fragment.cljs$lang$maxFixedArity = 0;
fragment.cljs$lang$applyTo = (function (arglist__13315){
var nodes = cljs.core.seq(arglist__13315);
return fragment__delegate(nodes);
});
fragment.cljs$core$IFn$_invoke$arity$variadic = fragment__delegate;
return fragment;
})()
;
/**
* given a html string, eval all <script> tags and return the html without the scripts
* don't do this for everything, only content you trust.
*/
shadow.dom.eval_scripts = (function eval_scripts(s){var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);var seq__13324_13332 = cljs.core.seq(scripts);var chunk__13325_13333 = null;var count__13326_13334 = 0;var i__13327_13335 = 0;while(true){
if((i__13327_13335 < count__13326_13334))
{var vec__13328_13336 = chunk__13325_13333.cljs$core$IIndexed$_nth$arity$2(null,i__13327_13335);var script_tag_13337 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13328_13336,0,null);var script_body_13338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13328_13336,1,null);eval(script_body_13338);
{
var G__13339 = seq__13324_13332;
var G__13340 = chunk__13325_13333;
var G__13341 = count__13326_13334;
var G__13342 = (i__13327_13335 + 1);
seq__13324_13332 = G__13339;
chunk__13325_13333 = G__13340;
count__13326_13334 = G__13341;
i__13327_13335 = G__13342;
continue;
}
} else
{var temp__4092__auto___13343 = cljs.core.seq(seq__13324_13332);if(temp__4092__auto___13343)
{var seq__13324_13344__$1 = temp__4092__auto___13343;if(cljs.core.chunked_seq_QMARK_(seq__13324_13344__$1))
{var c__4855__auto___13345 = cljs.core.chunk_first(seq__13324_13344__$1);{
var G__13346 = cljs.core.chunk_rest(seq__13324_13344__$1);
var G__13347 = c__4855__auto___13345;
var G__13348 = cljs.core.count(c__4855__auto___13345);
var G__13349 = 0;
seq__13324_13332 = G__13346;
chunk__13325_13333 = G__13347;
count__13326_13334 = G__13348;
i__13327_13335 = G__13349;
continue;
}
} else
{var vec__13329_13350 = cljs.core.first(seq__13324_13344__$1);var script_tag_13351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13329_13350,0,null);var script_body_13352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13329_13350,1,null);eval(script_body_13352);
{
var G__13353 = cljs.core.next(seq__13324_13344__$1);
var G__13354 = null;
var G__13355 = 0;
var G__13356 = 0;
seq__13324_13332 = G__13353;
chunk__13325_13333 = G__13354;
count__13326_13334 = G__13355;
i__13327_13335 = G__13356;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__13330){var vec__13331 = p__13330;var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13331,0,null);var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13331,1,null);return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function str__GT_fragment(s){return (new shadow.dom.NativeColl(goog.dom.htmlToDocumentFragment(s)));
});
shadow.dom.ancestor_by_class = (function ancestor_by_class(el,cls){return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function() {
var ancestor_by_tag = null;
var ancestor_by_tag__2 = (function (el,tag){return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
});
var ancestor_by_tag__3 = (function (el,tag,cls){return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
});
ancestor_by_tag = function(el,tag,cls){
switch(arguments.length){
case 2:
return ancestor_by_tag__2.call(this,el,tag);
case 3:
return ancestor_by_tag__3.call(this,el,tag,cls);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = ancestor_by_tag__2;
ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = ancestor_by_tag__3;
return ancestor_by_tag;
})()
;
shadow.dom.get_value = (function get_value(dom){return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function set_value(dom,value){return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.set_style = (function set_style(el,styles){return goog.style.setStyle(shadow.dom.dom_node(el),cljs.core.clj__GT_js(styles));
});
shadow.dom.remove_style = (function remove_style(el,style){return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_styles = (function remove_styles(el,style_keys){var seq__13361 = cljs.core.seq(style_keys);var chunk__13362 = null;var count__13363 = 0;var i__13364 = 0;while(true){
if((i__13364 < count__13363))
{var it = chunk__13362.cljs$core$IIndexed$_nth$arity$2(null,i__13364);shadow.dom.remove_style(el,it);
{
var G__13365 = seq__13361;
var G__13366 = chunk__13362;
var G__13367 = count__13363;
var G__13368 = (i__13364 + 1);
seq__13361 = G__13365;
chunk__13362 = G__13366;
count__13363 = G__13367;
i__13364 = G__13368;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__13361);if(temp__4092__auto__)
{var seq__13361__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__13361__$1))
{var c__4855__auto__ = cljs.core.chunk_first(seq__13361__$1);{
var G__13369 = cljs.core.chunk_rest(seq__13361__$1);
var G__13370 = c__4855__auto__;
var G__13371 = cljs.core.count(c__4855__auto__);
var G__13372 = 0;
seq__13361 = G__13369;
chunk__13362 = G__13370;
count__13363 = G__13371;
i__13364 = G__13372;
continue;
}
} else
{var it = cljs.core.first(seq__13361__$1);shadow.dom.remove_style(el,it);
{
var G__13373 = cljs.core.next(seq__13361__$1);
var G__13374 = null;
var G__13375 = 0;
var G__13376 = 0;
seq__13361 = G__13373;
chunk__13362 = G__13374;
count__13363 = G__13375;
i__13364 = G__13376;
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
shadow.dom.get_position = (function get_position(el){var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",1013904362),pos.x,new cljs.core.Keyword(null,"y","y",1013904363),pos.y], null);
});

/**
* @constructor
* @param {*} w
* @param {*} h
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
shadow.dom.Size = (function (w,h,__meta,__extmap){
this.w = w;
this.h = h;
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
shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4688__auto__){var self__ = this;
var this__4688__auto____$1 = this;var h__4542__auto__ = self__.__hash;if(!((h__4542__auto__ == null)))
{return h__4542__auto__;
} else
{var h__4542__auto____$1 = cljs.core.hash_imap(this__4688__auto____$1);self__.__hash = h__4542__auto____$1;
return h__4542__auto____$1;
}
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4693__auto__,k__4694__auto__){var self__ = this;
var this__4693__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4693__auto____$1,k__4694__auto__,null);
});
shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4695__auto__,k13378,else__4696__auto__){var self__ = this;
var this__4695__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k13378,new cljs.core.Keyword(null,"w","w",1013904361)))
{return self__.w;
} else
{if(cljs.core.keyword_identical_QMARK_(k13378,new cljs.core.Keyword(null,"h","h",1013904346)))
{return self__.h;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13378,else__4696__auto__);
} else
{return null;
}
}
}
});
shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4700__auto__,k__4701__auto__,G__13377){var self__ = this;
var this__4700__auto____$1 = this;var pred__13380 = cljs.core.keyword_identical_QMARK_;var expr__13381 = k__4701__auto__;if(cljs.core.truth_((pred__13380.cljs$core$IFn$_invoke$arity$2 ? pred__13380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",1013904361),expr__13381) : pred__13380.call(null,new cljs.core.Keyword(null,"w","w",1013904361),expr__13381))))
{return (new shadow.dom.Size(G__13377,self__.h,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__13380.cljs$core$IFn$_invoke$arity$2 ? pred__13380.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1013904346),expr__13381) : pred__13380.call(null,new cljs.core.Keyword(null,"h","h",1013904346),expr__13381))))
{return (new shadow.dom.Size(self__.w,G__13377,self__.__meta,self__.__extmap,null));
} else
{return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4701__auto__,G__13377),null));
}
}
});
shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4707__auto__,writer__4708__auto__,opts__4709__auto__){var self__ = this;
var this__4707__auto____$1 = this;var pr_pair__4710__auto__ = (function (keyval__4711__auto__){return cljs.core.pr_sequential_writer(writer__4708__auto__,cljs.core.pr_writer,""," ","",opts__4709__auto__,keyval__4711__auto__);
});return cljs.core.pr_sequential_writer(writer__4708__auto__,pr_pair__4710__auto__,"#shadow.dom.Size{",", ","}",opts__4709__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1013904346),self__.h],null))], null),self__.__extmap));
});
shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4698__auto__,entry__4699__auto__){var self__ = this;
var this__4698__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4699__auto__))
{return cljs.core._assoc(this__4698__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4699__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4699__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4698__auto____$1,entry__4699__auto__);
}
});
shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4705__auto__){var self__ = this;
var this__4705__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",1013904361),self__.w],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1013904346),self__.h],null))], null),self__.__extmap));
});
shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4697__auto__){var self__ = this;
var this__4697__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4689__auto__,other__4690__auto__){var self__ = this;
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
shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4692__auto__,G__13377){var self__ = this;
var this__4692__auto____$1 = this;return (new shadow.dom.Size(self__.w,self__.h,G__13377,self__.__extmap,self__.__hash));
});
shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4691__auto__){var self__ = this;
var this__4691__auto____$1 = this;return self__.__meta;
});
shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4702__auto__,k__4703__auto__){var self__ = this;
var this__4702__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"h","h",1013904346),null,new cljs.core.Keyword(null,"w","w",1013904361),null], null), null),k__4703__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4702__auto____$1),self__.__meta),k__4703__auto__);
} else
{return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4703__auto__)),null));
}
});
shadow.dom.Size.cljs$lang$type = true;
shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4727__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"shadow.dom/Size");
});
shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4727__auto__,writer__4728__auto__){return cljs.core._write(writer__4728__auto__,"shadow.dom/Size");
});
shadow.dom.__GT_Size = (function __GT_Size(w,h){return (new shadow.dom.Size(w,h));
});
shadow.dom.map__GT_Size = (function map__GT_Size(G__13379){return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",1013904361).cljs$core$IFn$_invoke$arity$1(G__13379),new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(G__13379),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13379,new cljs.core.Keyword(null,"w","w",1013904361),cljs.core.array_seq([new cljs.core.Keyword(null,"h","h",1013904346)], 0))));
});
shadow.dom.size__GT_clj = (function size__GT_clj(size){return (new shadow.dom.Size(size.width,size.height));
});
shadow.dom.get_size = (function get_size(el){return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function get_height(el){return new cljs.core.Keyword(null,"h","h",1013904346).cljs$core$IFn$_invoke$arity$1(shadow.dom.get_size(el));
});
shadow.dom.get_viewport_size = (function get_viewport_size(){return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function first_child(el){return (shadow.dom.dom_node(el).children[0]);
});
shadow.dom.select_option_values = (function select_option_values(el){var native$ = shadow.dom.dom_node(el);var opts = (native$["options"]);var a__4948__auto__ = opts;var i = 0;var ret = cljs.core.PersistentVector.EMPTY;while(true){
if((i < a__4948__auto__.length))
{{
var G__13383 = (i + 1);
var G__13384 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13383;
ret = G__13384;
continue;
}
} else
{return ret;
}
break;
}
});
shadow.dom.build_url = (function build_url(path,query_params){if(cljs.core.empty_QMARK_(query_params))
{return path;
} else
{return [cljs.core.str(path),cljs.core.str("?"),cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13387){var vec__13388 = p__13387;var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13388,0,null);var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13388,1,null);return [cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(encodeURIComponent([cljs.core.str(v)].join('')))].join('');
}),query_params)))].join('');
}
});
shadow.dom.redirect = (function() {
var redirect = null;
var redirect__1 = (function (path){return redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
});
var redirect__2 = (function (path,query_params){return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
});
redirect = function(path,query_params){
switch(arguments.length){
case 1:
return redirect__1.call(this,path);
case 2:
return redirect__2.call(this,path,query_params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
redirect.cljs$core$IFn$_invoke$arity$1 = redirect__1;
redirect.cljs$core$IFn$_invoke$arity$2 = redirect__2;
return redirect;
})()
;
shadow.dom.tag_name = (function tag_name(el){var dom = shadow.dom.dom_node(el);return dom.tagName;
});
shadow.dom.insert_after = (function insert_after(ref,new$){return goog.dom.insertSiblingAfter(shadow.dom.dom_node(new$),shadow.dom.dom_node(ref));
});
shadow.dom.insert_before = (function insert_before(ref,new$){return goog.dom.insertSiblingBefore(shadow.dom.dom_node(new$),shadow.dom.dom_node(ref));
});
shadow.dom.get_parent = (function get_parent(el){return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.get_next_sibling = (function get_next_sibling(el){return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function get_previous_sibling(el){return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.create_svg_node = (function create_svg_node(tag_def,props){var vec__13396 = shadow.dom.parse_tag(tag_def);var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13396,0,null);var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13396,1,null);var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13396,2,null);var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);if(cljs.core.truth_(tag_id))
{el.setAttribute("id",tag_id);
} else
{}
if(cljs.core.truth_(tag_classes))
{el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else
{}
var seq__13397_13403 = cljs.core.seq(props);var chunk__13398_13404 = null;var count__13399_13405 = 0;var i__13400_13406 = 0;while(true){
if((i__13400_13406 < count__13399_13405))
{var vec__13401_13407 = chunk__13398_13404.cljs$core$IIndexed$_nth$arity$2(null,i__13400_13406);var k_13408 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13401_13407,0,null);var v_13409 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13401_13407,1,null);el.setAttribute(cljs.core.name(k_13408),v_13409);
{
var G__13410 = seq__13397_13403;
var G__13411 = chunk__13398_13404;
var G__13412 = count__13399_13405;
var G__13413 = (i__13400_13406 + 1);
seq__13397_13403 = G__13410;
chunk__13398_13404 = G__13411;
count__13399_13405 = G__13412;
i__13400_13406 = G__13413;
continue;
}
} else
{var temp__4092__auto___13414 = cljs.core.seq(seq__13397_13403);if(temp__4092__auto___13414)
{var seq__13397_13415__$1 = temp__4092__auto___13414;if(cljs.core.chunked_seq_QMARK_(seq__13397_13415__$1))
{var c__4855__auto___13416 = cljs.core.chunk_first(seq__13397_13415__$1);{
var G__13417 = cljs.core.chunk_rest(seq__13397_13415__$1);
var G__13418 = c__4855__auto___13416;
var G__13419 = cljs.core.count(c__4855__auto___13416);
var G__13420 = 0;
seq__13397_13403 = G__13417;
chunk__13398_13404 = G__13418;
count__13399_13405 = G__13419;
i__13400_13406 = G__13420;
continue;
}
} else
{var vec__13402_13421 = cljs.core.first(seq__13397_13415__$1);var k_13422 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402_13421,0,null);var v_13423 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13402_13421,1,null);el.setAttribute(cljs.core.name(k_13422),v_13423);
{
var G__13424 = cljs.core.next(seq__13397_13415__$1);
var G__13425 = null;
var G__13426 = 0;
var G__13427 = 0;
seq__13397_13403 = G__13424;
chunk__13398_13404 = G__13425;
count__13399_13405 = G__13426;
i__13400_13406 = G__13427;
continue;
}
}
} else
{}
}
break;
}
return el;
});
shadow.dom.make_svg_node = (function make_svg_node(structure){var vec__13441 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13441,0,null);var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13441,1,null);var seq__13442_13454 = cljs.core.seq(node_children);var chunk__13443_13455 = null;var count__13444_13456 = 0;var i__13445_13457 = 0;while(true){
if((i__13445_13457 < count__13444_13456))
{var child_struct_13458 = chunk__13443_13455.cljs$core$IIndexed$_nth$arity$2(null,i__13445_13457);var children_13459 = shadow.dom._to_svg(child_struct_13458);if(cljs.core.seq_QMARK_(children_13459))
{var seq__13446_13460 = cljs.core.seq(children_13459);var chunk__13447_13461 = null;var count__13448_13462 = 0;var i__13449_13463 = 0;while(true){
if((i__13449_13463 < count__13448_13462))
{var child_13464 = chunk__13447_13461.cljs$core$IIndexed$_nth$arity$2(null,i__13449_13463);if(cljs.core.truth_(child_13464))
{node.appendChild(child_13464);
} else
{}
{
var G__13465 = seq__13446_13460;
var G__13466 = chunk__13447_13461;
var G__13467 = count__13448_13462;
var G__13468 = (i__13449_13463 + 1);
seq__13446_13460 = G__13465;
chunk__13447_13461 = G__13466;
count__13448_13462 = G__13467;
i__13449_13463 = G__13468;
continue;
}
} else
{var temp__4092__auto___13469 = cljs.core.seq(seq__13446_13460);if(temp__4092__auto___13469)
{var seq__13446_13470__$1 = temp__4092__auto___13469;if(cljs.core.chunked_seq_QMARK_(seq__13446_13470__$1))
{var c__4855__auto___13471 = cljs.core.chunk_first(seq__13446_13470__$1);{
var G__13472 = cljs.core.chunk_rest(seq__13446_13470__$1);
var G__13473 = c__4855__auto___13471;
var G__13474 = cljs.core.count(c__4855__auto___13471);
var G__13475 = 0;
seq__13446_13460 = G__13472;
chunk__13447_13461 = G__13473;
count__13448_13462 = G__13474;
i__13449_13463 = G__13475;
continue;
}
} else
{var child_13476 = cljs.core.first(seq__13446_13470__$1);if(cljs.core.truth_(child_13476))
{node.appendChild(child_13476);
} else
{}
{
var G__13477 = cljs.core.next(seq__13446_13470__$1);
var G__13478 = null;
var G__13479 = 0;
var G__13480 = 0;
seq__13446_13460 = G__13477;
chunk__13447_13461 = G__13478;
count__13448_13462 = G__13479;
i__13449_13463 = G__13480;
continue;
}
}
} else
{}
}
break;
}
} else
{node.appendChild(children_13459);
}
{
var G__13481 = seq__13442_13454;
var G__13482 = chunk__13443_13455;
var G__13483 = count__13444_13456;
var G__13484 = (i__13445_13457 + 1);
seq__13442_13454 = G__13481;
chunk__13443_13455 = G__13482;
count__13444_13456 = G__13483;
i__13445_13457 = G__13484;
continue;
}
} else
{var temp__4092__auto___13485 = cljs.core.seq(seq__13442_13454);if(temp__4092__auto___13485)
{var seq__13442_13486__$1 = temp__4092__auto___13485;if(cljs.core.chunked_seq_QMARK_(seq__13442_13486__$1))
{var c__4855__auto___13487 = cljs.core.chunk_first(seq__13442_13486__$1);{
var G__13488 = cljs.core.chunk_rest(seq__13442_13486__$1);
var G__13489 = c__4855__auto___13487;
var G__13490 = cljs.core.count(c__4855__auto___13487);
var G__13491 = 0;
seq__13442_13454 = G__13488;
chunk__13443_13455 = G__13489;
count__13444_13456 = G__13490;
i__13445_13457 = G__13491;
continue;
}
} else
{var child_struct_13492 = cljs.core.first(seq__13442_13486__$1);var children_13493 = shadow.dom._to_svg(child_struct_13492);if(cljs.core.seq_QMARK_(children_13493))
{var seq__13450_13494 = cljs.core.seq(children_13493);var chunk__13451_13495 = null;var count__13452_13496 = 0;var i__13453_13497 = 0;while(true){
if((i__13453_13497 < count__13452_13496))
{var child_13498 = chunk__13451_13495.cljs$core$IIndexed$_nth$arity$2(null,i__13453_13497);if(cljs.core.truth_(child_13498))
{node.appendChild(child_13498);
} else
{}
{
var G__13499 = seq__13450_13494;
var G__13500 = chunk__13451_13495;
var G__13501 = count__13452_13496;
var G__13502 = (i__13453_13497 + 1);
seq__13450_13494 = G__13499;
chunk__13451_13495 = G__13500;
count__13452_13496 = G__13501;
i__13453_13497 = G__13502;
continue;
}
} else
{var temp__4092__auto___13503__$1 = cljs.core.seq(seq__13450_13494);if(temp__4092__auto___13503__$1)
{var seq__13450_13504__$1 = temp__4092__auto___13503__$1;if(cljs.core.chunked_seq_QMARK_(seq__13450_13504__$1))
{var c__4855__auto___13505 = cljs.core.chunk_first(seq__13450_13504__$1);{
var G__13506 = cljs.core.chunk_rest(seq__13450_13504__$1);
var G__13507 = c__4855__auto___13505;
var G__13508 = cljs.core.count(c__4855__auto___13505);
var G__13509 = 0;
seq__13450_13494 = G__13506;
chunk__13451_13495 = G__13507;
count__13452_13496 = G__13508;
i__13453_13497 = G__13509;
continue;
}
} else
{var child_13510 = cljs.core.first(seq__13450_13504__$1);if(cljs.core.truth_(child_13510))
{node.appendChild(child_13510);
} else
{}
{
var G__13511 = cljs.core.next(seq__13450_13504__$1);
var G__13512 = null;
var G__13513 = 0;
var G__13514 = 0;
seq__13450_13494 = G__13511;
chunk__13451_13495 = G__13512;
count__13452_13496 = G__13513;
i__13453_13497 = G__13514;
continue;
}
}
} else
{}
}
break;
}
} else
{node.appendChild(children_13493);
}
{
var G__13515 = cljs.core.next(seq__13442_13486__$1);
var G__13516 = null;
var G__13517 = 0;
var G__13518 = 0;
seq__13442_13454 = G__13515;
chunk__13443_13455 = G__13516;
count__13444_13456 = G__13517;
i__13445_13457 = G__13518;
continue;
}
}
} else
{}
}
break;
}
return node;
});
(shadow.dom.SVGElement["null"] = true);
(shadow.dom._to_svg["null"] = (function (_){return null;
}));
cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = true;
cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){var this$__$1 = this;return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
});
cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = true;
cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){var this$__$1 = this;return shadow.dom.make_svg_node(this$__$1);
});
(shadow.dom.SVGElement["string"] = true);
(shadow.dom._to_svg["string"] = (function (this$){if((this$ instanceof cljs.core.Keyword))
{return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",1017463312),this$], null));
}
}));
/**
* @param {...*} var_args
*/
shadow.dom.svg = (function() { 
var svg__delegate = function (attrs,children){return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",1014018518),attrs], null),children)));
};
var svg = function (attrs,var_args){
var children = null;if (arguments.length > 1) {
  children = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return svg__delegate.call(this,attrs,children);};
svg.cljs$lang$maxFixedArity = 1;
svg.cljs$lang$applyTo = (function (arglist__13519){
var attrs = cljs.core.first(arglist__13519);
var children = cljs.core.rest(arglist__13519);
return svg__delegate(attrs,children);
});
svg.cljs$core$IFn$_invoke$arity$variadic = svg__delegate;
return svg;
})()
;
/**
* returns a channel for events on el
* transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
* once? true to listen only once and close the channel after (also remove event handler)
*/
shadow.dom.event_chan = (function() {
var event_chan = null;
var event_chan__2 = (function (el,event){return event_chan.cljs$core$IFn$_invoke$arity$4(el,event,(function (e,el__$1){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,el__$1], null);
}),false);
});
var event_chan__3 = (function (el,event,transform_fn){return event_chan.cljs$core$IFn$_invoke$arity$4(el,event,transform_fn,false);
});
var event_chan__4 = (function (el,event,transform_fn,once_QMARK_){var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer(1));(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(shadow.dom.dom_node(el),cljs.core.name(event),(function event_fn(e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,(transform_fn.cljs$core$IFn$_invoke$arity$2 ? transform_fn.cljs$core$IFn$_invoke$arity$2(e,el) : transform_fn.call(null,e,el)));
if(cljs.core.truth_(once_QMARK_))
{cljs.core.async.close_BANG_(chan);
return shadow.dom.remove_event_handler(el,event,event_fn);
} else
{return null;
}
})) : shadow.dom.dom_listen.call(null,shadow.dom.dom_node(el),cljs.core.name(event),(function event_fn(e){cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,(transform_fn.cljs$core$IFn$_invoke$arity$2 ? transform_fn.cljs$core$IFn$_invoke$arity$2(e,el) : transform_fn.call(null,e,el)));
if(cljs.core.truth_(once_QMARK_))
{cljs.core.async.close_BANG_(chan);
return shadow.dom.remove_event_handler(el,event,event_fn);
} else
{return null;
}
})));
return chan;
});
event_chan = function(el,event,transform_fn,once_QMARK_){
switch(arguments.length){
case 2:
return event_chan__2.call(this,el,event);
case 3:
return event_chan__3.call(this,el,event,transform_fn);
case 4:
return event_chan__4.call(this,el,event,transform_fn,once_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
event_chan.cljs$core$IFn$_invoke$arity$2 = event_chan__2;
event_chan.cljs$core$IFn$_invoke$arity$3 = event_chan__3;
event_chan.cljs$core$IFn$_invoke$arity$4 = event_chan__4;
return event_chan;
})()
;
//# sourceMappingURL=dom.js.map