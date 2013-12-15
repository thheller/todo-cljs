goog.provide('shadow.xhr');
goog.require('cljs.core');
goog.require('goog.json');
goog.require('goog.uri.utils');
goog.require('goog.result');
goog.require('goog.result');
goog.require('goog.labs.net.xhr');
goog.require('cljs.reader');
goog.require('goog.uri.utils');
goog.require('goog.json');
goog.require('cljs.reader');
goog.require('goog.labs.net.xhr');
shadow.xhr.result_chain = (function result_chain(res,handler){return goog.result.chain(res,handler);
});
/**
* @param {...*} var_args
*/
shadow.xhr.result_combine = (function() { 
var result_combine__delegate = function (results){return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.result.combine,results);
};
var result_combine = function (var_args){
var results = null;if (arguments.length > 0) {
  results = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return result_combine__delegate.call(this,results);};
result_combine.cljs$lang$maxFixedArity = 0;
result_combine.cljs$lang$applyTo = (function (arglist__13986){
var results = cljs.core.seq(arglist__13986);
return result_combine__delegate(results);
});
result_combine.cljs$core$IFn$_invoke$arity$variadic = result_combine__delegate;
return result_combine;
})()
;
shadow.xhr.result_wait_on_success = (function result_wait_on_success(res,callback){return goog.result.waitOnSuccess(res,callback);
});
shadow.xhr.result_success_QMARK_ = (function result_success_QMARK_(res){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(goog.result.Result.State.SUCCESS,res.getState());
});
shadow.xhr.result_value = (function result_value(res){return res.getValue();
});
shadow.xhr.result_immediate = (function result_immediate(value){return goog.result.successfulResult(value);
});
shadow.xhr.result_error = (function result_error(res,callback){return goog.result.waitOnError(res,callback);
});
shadow.xhr.edn_transform = (function edn_transform(body){return cljs.reader.read_string(body);
});
shadow.xhr.json_transform = (function json_transform(body){return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(body));
});
shadow.xhr.goog_keys = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"timeout","timeout",3994960083),"timeoutMs",new cljs.core.Keyword(null,"with-credentials","with-credentials",2607341543),"withCredentials",new cljs.core.Keyword(null,"headers","headers",1809212152),"headers",new cljs.core.Keyword(null,"mime-type","mime-type",771686565),"mimeType"], null);
shadow.xhr.make_request_options = (function make_request_options(options){var obj = (function (){var obj13996 = {};return obj13996;
})();var seq__13997_14003 = cljs.core.seq(options);var chunk__13998_14004 = null;var count__13999_14005 = 0;var i__14000_14006 = 0;while(true){
if((i__14000_14006 < count__13999_14005))
{var vec__14001_14007 = chunk__13998_14004.cljs$core$IIndexed$_nth$arity$2(null,i__14000_14006);var k_14008 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14001_14007,0,null);var v_14009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14001_14007,1,null);(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_14008)] = cljs.core.clj__GT_js(v_14009));
{
var G__14010 = seq__13997_14003;
var G__14011 = chunk__13998_14004;
var G__14012 = count__13999_14005;
var G__14013 = (i__14000_14006 + 1);
seq__13997_14003 = G__14010;
chunk__13998_14004 = G__14011;
count__13999_14005 = G__14012;
i__14000_14006 = G__14013;
continue;
}
} else
{var temp__4092__auto___14014 = cljs.core.seq(seq__13997_14003);if(temp__4092__auto___14014)
{var seq__13997_14015__$1 = temp__4092__auto___14014;if(cljs.core.chunked_seq_QMARK_(seq__13997_14015__$1))
{var c__4855__auto___14016 = cljs.core.chunk_first(seq__13997_14015__$1);{
var G__14017 = cljs.core.chunk_rest(seq__13997_14015__$1);
var G__14018 = c__4855__auto___14016;
var G__14019 = cljs.core.count(c__4855__auto___14016);
var G__14020 = 0;
seq__13997_14003 = G__14017;
chunk__13998_14004 = G__14018;
count__13999_14005 = G__14019;
i__14000_14006 = G__14020;
continue;
}
} else
{var vec__14002_14021 = cljs.core.first(seq__13997_14015__$1);var k_14022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14002_14021,0,null);var v_14023 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14002_14021,1,null);(obj[cljs.core.get.cljs$core$IFn$_invoke$arity$2(shadow.xhr.goog_keys,k_14022)] = cljs.core.clj__GT_js(v_14023));
{
var G__14024 = cljs.core.next(seq__13997_14015__$1);
var G__14025 = null;
var G__14026 = 0;
var G__14027 = 0;
seq__13997_14003 = G__14024;
chunk__13998_14004 = G__14025;
count__13999_14005 = G__14026;
i__14000_14006 = G__14027;
continue;
}
}
} else
{}
}
break;
}
return obj;
});
shadow.xhr.auto_transform = (function auto_transform(req){var content_type = req.getResponseHeader("Content-Type");if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(-1,content_type.indexOf("text/edn")))
{return shadow.xhr.edn_transform(req.responseText);
} else
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(-1,content_type.indexOf("json")))
{return shadow.xhr.json_transform(req.responseText);
} else
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(-1,content_type.indexOf("text/html")))
{return req.responseText;
} else
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(-1,content_type.indexOf("text/plain")))
{return req.responseText;
} else
{if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(-1,content_type.indexOf("javascript")))
{return req.responseText;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unsupported content-type",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"req","req",1014017040),req,new cljs.core.Keyword(null,"content-type","content-type",1799574400),content_type], null));
} else
{return null;
}
}
}
}
}
}
});
shadow.xhr.make_url = (function make_url(url,params){return goog.uri.utils.appendParamsFromMap(url,cljs.core.clj__GT_js(params));
});
shadow.xhr.request = (function() {
var request = null;
var request__2 = (function (method,url){return request.cljs$core$IFn$_invoke$arity$4(method,url,null,cljs.core.PersistentArrayMap.EMPTY);
});
var request__3 = (function (method,url,data){return request.cljs$core$IFn$_invoke$arity$4(method,url,data,cljs.core.PersistentArrayMap.EMPTY);
});
var request__4 = (function (method,url,data,options){if((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"DELETE","DELETE",3026742557),null,new cljs.core.Keyword(null,"GET","GET",1013974696),null], null), null),method))) && ((data == null)))
{throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("request needs data",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",4231316563),method,new cljs.core.Keyword(null,"url","url",1014020321),url,new cljs.core.Keyword(null,"data","data",1016980252),data,new cljs.core.Keyword(null,"options","options",4059396624),options], null));
} else
{}
var body_QMARK_ = !((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1013974696),method)) || ((data == null)));var req = goog.labs.net.xhr.send(cljs.core.name(method),(cljs.core.truth_((function (){var and__4114__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"GET","GET",1013974696),method);if(and__4114__auto__)
{return data;
} else
{return and__4114__auto__;
}
})())?shadow.xhr.make_url(url,data):url),((body_QMARK_)?cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0)):null),shadow.xhr.make_request_options(((body_QMARK_)?cljs.core.assoc_in(options,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"Content-Type"], null),"text/edn; charset=utf-8"):options)));return goog.result.transform(req,shadow.xhr.auto_transform);
});
request = function(method,url,data,options){
switch(arguments.length){
case 2:
return request__2.call(this,method,url);
case 3:
return request__3.call(this,method,url,data);
case 4:
return request__4.call(this,method,url,data,options);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
request.cljs$core$IFn$_invoke$arity$2 = request__2;
request.cljs$core$IFn$_invoke$arity$3 = request__3;
request.cljs$core$IFn$_invoke$arity$4 = request__4;
return request;
})()
;
shadow.xhr.get_edn = (function get_edn(url){return shadow.xhr.request.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"GET","GET",1013974696),url,null,cljs.core.PersistentArrayMap.EMPTY);
});
shadow.xhr.xhr_post = (function xhr_post(p__14028,data){var map__14030 = p__14028;var map__14030__$1 = ((cljs.core.seq_QMARK_(map__14030))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14030):map__14030);var req = map__14030__$1;var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,new cljs.core.Keyword(null,"params","params",4313443576));var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14030__$1,new cljs.core.Keyword(null,"url","url",1014020321));return goog.labs.net.xhr.post(goog.uri.utils.appendParamsFromMap(url,cljs.core.clj__GT_js(params)),data,cljs.core.clj__GT_js(req));
});
shadow.xhr.post_edn = (function post_edn(req,data){var req__$1 = ((cljs.core.map_QMARK_(req))?req:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",1014020321),req], null));var req__$2 = cljs.core.assoc_in(req__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"Content-Type"], null),"text-edn");return goog.result.transform(shadow.xhr.xhr_post(req__$2,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([data], 0))),shadow.xhr.edn_transform);
});
/**
* @param {...*} var_args
*/
shadow.xhr.upload = (function() { 
var upload__delegate = function (url,file,events){var xhr = (new XMLHttpRequest());var seq__14040_14049 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,events));var chunk__14042_14050 = null;var count__14043_14051 = 0;var i__14044_14052 = 0;while(true){
if((i__14044_14052 < count__14043_14051))
{var vec__14046_14053 = chunk__14042_14050.cljs$core$IIndexed$_nth$arity$2(null,i__14044_14052);var ev_id_14054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046_14053,0,null);var ev_handler_14055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046_14053,1,null);var target_14056 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",4307793311),ev_id_14054))?(xhr["upload"]):xhr);target_14056.addEventListener(cljs.core.name(ev_id_14054),ev_handler_14055);
{
var G__14057 = seq__14040_14049;
var G__14058 = chunk__14042_14050;
var G__14059 = count__14043_14051;
var G__14060 = (i__14044_14052 + 1);
seq__14040_14049 = G__14057;
chunk__14042_14050 = G__14058;
count__14043_14051 = G__14059;
i__14044_14052 = G__14060;
continue;
}
} else
{var temp__4092__auto___14061 = cljs.core.seq(seq__14040_14049);if(temp__4092__auto___14061)
{var seq__14040_14062__$1 = temp__4092__auto___14061;if(cljs.core.chunked_seq_QMARK_(seq__14040_14062__$1))
{var c__4855__auto___14063 = cljs.core.chunk_first(seq__14040_14062__$1);{
var G__14064 = cljs.core.chunk_rest(seq__14040_14062__$1);
var G__14065 = c__4855__auto___14063;
var G__14066 = cljs.core.count(c__4855__auto___14063);
var G__14067 = 0;
seq__14040_14049 = G__14064;
chunk__14042_14050 = G__14065;
count__14043_14051 = G__14066;
i__14044_14052 = G__14067;
continue;
}
} else
{var vec__14047_14068 = cljs.core.first(seq__14040_14062__$1);var ev_id_14069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14047_14068,0,null);var ev_handler_14070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14047_14068,1,null);var target_14071 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"progress","progress",4307793311),ev_id_14069))?(xhr["upload"]):xhr);target_14071.addEventListener(cljs.core.name(ev_id_14069),ev_handler_14070);
{
var G__14072 = cljs.core.next(seq__14040_14062__$1);
var G__14073 = null;
var G__14074 = 0;
var G__14075 = 0;
seq__14040_14049 = G__14072;
chunk__14042_14050 = G__14073;
count__14043_14051 = G__14074;
i__14044_14052 = G__14075;
continue;
}
}
} else
{}
}
break;
}
var G__14048 = xhr;G__14048.open("PUT",url);
G__14048.send(file);
return G__14048;
};
var upload = function (url,file,var_args){
var events = null;if (arguments.length > 2) {
  events = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return upload__delegate.call(this,url,file,events);};
upload.cljs$lang$maxFixedArity = 2;
upload.cljs$lang$applyTo = (function (arglist__14076){
var url = cljs.core.first(arglist__14076);
arglist__14076 = cljs.core.next(arglist__14076);
var file = cljs.core.first(arglist__14076);
var events = cljs.core.rest(arglist__14076);
return upload__delegate(url,file,events);
});
upload.cljs$core$IFn$_invoke$arity$variadic = upload__delegate;
return upload;
})()
;
//# sourceMappingURL=xhr.js.map