goog.provide('shadow.api');
goog.require('cljs.core');
goog.require('shadow.object');
goog.require('shadow.dom');
goog.require('cljs.reader');
goog.require('shadow.dom');
goog.require('shadow.object');
goog.require('shadow.xhr');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('clojure.set');
goog.require('shadow.xhr');
/**
* a <script type="shadow/run" data-module="mod-name" data-fn="js-fn">args</script> tag is meant to embed calls to javascript in html
* instead of writing the javascript inline, we only define the call and its args + the location in the dom
* we want to reference. this allows the javascript to be loaded as late as possible, avoids unknown reference errors,
* does not litter the html with $(function() {}); and since a dom reference point is provided it makes it more
* logical to reference dom elements via the server, no need to mess with id/class selectors.
* 
* script tags will be executed as soon as the js module is loaded (assuming it called module-ready), not on dom ready
* which means it triggers earlier
*/
shadow.api.run_script_tag = (function run_script_tag(script){var init_fn = (shadow.dom.data.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.data.cljs$core$IFn$_invoke$arity$2(script,new cljs.core.Keyword(null,"fn","fn",1013907514)) : shadow.dom.data.call(null,script,new cljs.core.Keyword(null,"fn","fn",1013907514)));var dom_ref = (shadow.dom.data.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.data.cljs$core$IFn$_invoke$arity$2(script,new cljs.core.Keyword(null,"ref","ref",1014017029)) : shadow.dom.data.call(null,script,new cljs.core.Keyword(null,"ref","ref",1014017029)));var args = shadow.dom.get_html(script);var args__$1 = (cljs.core.truth_((function (){var and__4114__auto__ = args;if(cljs.core.truth_(and__4114__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",args);
} else
{return and__4114__auto__;
}
})())?cljs.reader.read_string(args):null);var args__$2 = (function (){var pred__14080 = cljs.core._EQ_;var expr__14081 = dom_ref;if(cljs.core.truth_((pred__14080.cljs$core$IFn$_invoke$arity$2 ? pred__14080.cljs$core$IFn$_invoke$arity$2(null,expr__14081) : pred__14080.call(null,null,expr__14081))))
{return args__$1;
} else
{if(cljs.core.truth_((pred__14080.cljs$core$IFn$_invoke$arity$2 ? pred__14080.cljs$core$IFn$_invoke$arity$2("none",expr__14081) : pred__14080.call(null,"none",expr__14081))))
{return args__$1;
} else
{if(cljs.core.truth_((pred__14080.cljs$core$IFn$_invoke$arity$2 ? pred__14080.cljs$core$IFn$_invoke$arity$2("self",expr__14081) : pred__14080.call(null,"self",expr__14081))))
{return cljs.core.cons(script,args__$1);
} else
{if(cljs.core.truth_((pred__14080.cljs$core$IFn$_invoke$arity$2 ? pred__14080.cljs$core$IFn$_invoke$arity$2("parent",expr__14081) : pred__14080.call(null,"parent",expr__14081))))
{return cljs.core.cons(shadow.dom.get_parent(script),args__$1);
} else
{if(cljs.core.truth_((pred__14080.cljs$core$IFn$_invoke$arity$2 ? pred__14080.cljs$core$IFn$_invoke$arity$2("previous-sibling",expr__14081) : pred__14080.call(null,"previous-sibling",expr__14081))))
{return cljs.core.cons(shadow.dom.get_previous_sibling(script),args__$1);
} else
{if(cljs.core.truth_((pred__14080.cljs$core$IFn$_invoke$arity$2 ? pred__14080.cljs$core$IFn$_invoke$arity$2("next-sibling",expr__14081) : pred__14080.call(null,"next-sibling",expr__14081))))
{return cljs.core.cons(shadow.dom.get_next_sibling(script),args__$1);
} else
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("script tag with invalid dom ref",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dom-ref","dom-ref",2849912058),dom_ref,new cljs.core.Keyword(null,"init-fn","init-fn",2962188823),init_fn,new cljs.core.Keyword(null,"script","script",4401185853),script], null));
}
}
}
}
}
}
})();var queued_fn = goog.getObjectByName(init_fn);if(cljs.core.truth_(queued_fn))
{shadow.object.log.cljs$core$IFn$_invoke$arity$2("init",init_fn);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(queued_fn,args__$2);
} else
{return shadow.object.log.cljs$core$IFn$_invoke$arity$3("unknown init function",init_fn,args__$2);
}
});
shadow.api.modules = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
/**
* use after calling (dom/set-html node html) and that html may contain embedded script tags
* 
* only runs tags where the module is already loaded, if the module is not yet loaded to module-ready function
* will pick remaining tags
*/
shadow.api.run_embedded_tags = (function run_embedded_tags(node){var seq__14087 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2("script[type=\"shadow/run\"]",node));var chunk__14088 = null;var count__14089 = 0;var i__14090 = 0;while(true){
if((i__14090 < count__14089))
{var script = chunk__14088.cljs$core$IIndexed$_nth$arity$2(null,i__14090);var module_14091 = (shadow.dom.data.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.data.cljs$core$IFn$_invoke$arity$2(script,new cljs.core.Keyword(null,"module","module",4240087518)) : shadow.dom.data.call(null,script,new cljs.core.Keyword(null,"module","module",4240087518)));if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.api.modules),module_14091))
{shadow.api.run_script_tag(script);
} else
{}
{
var G__14092 = seq__14087;
var G__14093 = chunk__14088;
var G__14094 = count__14089;
var G__14095 = (i__14090 + 1);
seq__14087 = G__14092;
chunk__14088 = G__14093;
count__14089 = G__14094;
i__14090 = G__14095;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__14087);if(temp__4092__auto__)
{var seq__14087__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14087__$1))
{var c__4855__auto__ = cljs.core.chunk_first(seq__14087__$1);{
var G__14096 = cljs.core.chunk_rest(seq__14087__$1);
var G__14097 = c__4855__auto__;
var G__14098 = cljs.core.count(c__4855__auto__);
var G__14099 = 0;
seq__14087 = G__14096;
chunk__14088 = G__14097;
count__14089 = G__14098;
i__14090 = G__14099;
continue;
}
} else
{var script = cljs.core.first(seq__14087__$1);var module_14100 = (shadow.dom.data.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.data.cljs$core$IFn$_invoke$arity$2(script,new cljs.core.Keyword(null,"module","module",4240087518)) : shadow.dom.data.call(null,script,new cljs.core.Keyword(null,"module","module",4240087518)));if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.api.modules),module_14100))
{shadow.api.run_script_tag(script);
} else
{}
{
var G__14101 = cljs.core.next(seq__14087__$1);
var G__14102 = null;
var G__14103 = 0;
var G__14104 = 0;
seq__14087 = G__14101;
chunk__14088 = G__14102;
count__14089 = G__14103;
i__14090 = G__14104;
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
shadow.api.module_ready = (function module_ready(module_name){shadow.object.log.cljs$core$IFn$_invoke$arity$2("module-ready",module_name);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.api.modules,cljs.core.conj,module_name);
return null;
});
goog.exportSymbol('shadow.api.module_ready', shadow.api.module_ready);
shadow.api.ns_ready = (function ns_ready(ns_name){shadow.object.log.cljs$core$IFn$_invoke$arity$2("ns-ready",ns_name);
var ns_name__$1 = clojure.string.replace(ns_name,/-/,"_");var seq__14113 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$1("script[type=\"shadow/run\"]"));var chunk__14116 = null;var count__14117 = 0;var i__14118 = 0;while(true){
if((i__14118 < count__14117))
{var script = chunk__14116.cljs$core$IIndexed$_nth$arity$2(null,i__14118);var fn = (shadow.dom.data.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.data.cljs$core$IFn$_invoke$arity$2(script,new cljs.core.Keyword(null,"fn","fn",1013907514)) : shadow.dom.data.call(null,script,new cljs.core.Keyword(null,"fn","fn",1013907514)));var fn_ns = fn.substring(0,fn.lastIndexOf("."));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_name__$1,fn_ns))
{shadow.api.run_script_tag(script);
{
var G__14121 = seq__14113;
var G__14122 = chunk__14116;
var G__14123 = count__14117;
var G__14124 = (i__14118 + 1);
seq__14113 = G__14121;
chunk__14116 = G__14122;
count__14117 = G__14123;
i__14118 = G__14124;
continue;
}
} else
{{
var G__14125 = seq__14113;
var G__14126 = chunk__14116;
var G__14127 = count__14117;
var G__14128 = (i__14118 + 1);
seq__14113 = G__14125;
chunk__14116 = G__14126;
count__14117 = G__14127;
i__14118 = G__14128;
continue;
}
}
} else
{var temp__4092__auto__ = cljs.core.seq(seq__14113);if(temp__4092__auto__)
{var seq__14113__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_(seq__14113__$1))
{var c__4855__auto__ = cljs.core.chunk_first(seq__14113__$1);{
var G__14129 = cljs.core.chunk_rest(seq__14113__$1);
var G__14130 = c__4855__auto__;
var G__14131 = cljs.core.count(c__4855__auto__);
var G__14132 = 0;
seq__14113 = G__14129;
chunk__14116 = G__14130;
count__14117 = G__14131;
i__14118 = G__14132;
continue;
}
} else
{var script = cljs.core.first(seq__14113__$1);var fn = (shadow.dom.data.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.data.cljs$core$IFn$_invoke$arity$2(script,new cljs.core.Keyword(null,"fn","fn",1013907514)) : shadow.dom.data.call(null,script,new cljs.core.Keyword(null,"fn","fn",1013907514)));var fn_ns = fn.substring(0,fn.lastIndexOf("."));if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ns_name__$1,fn_ns))
{shadow.api.run_script_tag(script);
{
var G__14133 = cljs.core.next(seq__14113__$1);
var G__14134 = null;
var G__14135 = 0;
var G__14136 = 0;
seq__14113 = G__14133;
chunk__14116 = G__14134;
count__14117 = G__14135;
i__14118 = G__14136;
continue;
}
} else
{{
var G__14137 = cljs.core.next(seq__14113__$1);
var G__14138 = null;
var G__14139 = 0;
var G__14140 = 0;
seq__14113 = G__14137;
chunk__14116 = G__14138;
count__14117 = G__14139;
i__14118 = G__14140;
continue;
}
}
}
} else
{return null;
}
}
break;
}
});
goog.exportSymbol('shadow.api.ns_ready', shadow.api.ns_ready);
//# sourceMappingURL=api.js.map