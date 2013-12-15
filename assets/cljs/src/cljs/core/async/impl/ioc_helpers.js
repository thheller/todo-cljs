goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),new cljs.core.Keyword(null,"finished","finished",4635210724));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t10406 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t10406 = (function (f,fn_handler,meta10407){
this.f = f;
this.fn_handler = fn_handler;
this.meta10407 = meta10407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t10406.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t10406.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t10406";
cljs.core.async.impl.ioc_helpers.t10406.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async.impl.ioc-helpers/t10406");
});
cljs.core.async.impl.ioc_helpers.t10406.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t10406.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t10406.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t10406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10408){var self__ = this;
var _10408__$1 = this;return self__.meta10407;
});
cljs.core.async.impl.ioc_helpers.t10406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10408,meta10407__$1){var self__ = this;
var _10408__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t10406(self__.f,self__.fn_handler,meta10407__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t10406 = (function __GT_t10406(f__$1,fn_handler__$1,meta10407){return (new cljs.core.async.impl.ioc_helpers.t10406(f__$1,fn_handler__$1,meta10407));
});
}
return (new cljs.core.async.impl.ioc_helpers.t10406(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e10410){if((e10410 instanceof Object))
{var ex = e10410;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10410;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_10413_10415 = state;(statearr_10413_10415[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_10413_10415[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_10414_10416 = state;(statearr_10414_10416[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_10414_10416[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_10419_10421 = state;(statearr_10419_10421[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_10419_10421[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_10420_10422 = state;(statearr_10420_10422[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_10420_10422[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__10423){var map__10428 = p__10423;var map__10428__$1 = ((cljs.core.seq_QMARK_(map__10428))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10428):map__10428);var opts = map__10428__$1;var statearr_10429_10432 = state;(statearr_10429_10432[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts((function (val){var statearr_10430_10433 = state;(statearr_10430_10433[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_10431_10434 = state;(statearr_10431_10434[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__10423 = null;if (arguments.length > 3) {
  p__10423 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__10423);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__10435){
var state = cljs.core.first(arglist__10435);
arglist__10435 = cljs.core.next(arglist__10435);
var cont_block = cljs.core.first(arglist__10435);
arglist__10435 = cljs.core.next(arglist__10435);
var ports = cljs.core.first(arglist__10435);
var p__10423 = cljs.core.rest(arglist__10435);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__10423);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){return null;
})));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4688__auto__){var self__ = this;
var this__4688__auto____$1 = this;var h__4542__auto__ = self__.__hash;if(!((h__4542__auto__ == null)))
{return h__4542__auto__;
} else
{var h__4542__auto____$1 = cljs.core.hash_imap(this__4688__auto____$1);self__.__hash = h__4542__auto____$1;
return h__4542__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4693__auto__,k__4694__auto__){var self__ = this;
var this__4693__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4693__auto____$1,k__4694__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4695__auto__,k10437,else__4696__auto__){var self__ = this;
var this__4695__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k10437,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893)))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k10437,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687)))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k10437,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429)))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k10437,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097)))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k10437,new cljs.core.Keyword(null,"prev","prev",1017353637)))
{return self__.prev;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k10437,else__4696__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4700__auto__,k__4701__auto__,G__10436){var self__ = this;
var this__4700__auto____$1 = this;var pred__10439 = cljs.core.keyword_identical_QMARK_;var expr__10440 = k__4701__auto__;if(cljs.core.truth_((pred__10439.cljs$core$IFn$_invoke$arity$2 ? pred__10439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__10440) : pred__10439.call(null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),expr__10440))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__10436,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__10439.cljs$core$IFn$_invoke$arity$2 ? pred__10439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__10440) : pred__10439.call(null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),expr__10440))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__10436,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__10439.cljs$core$IFn$_invoke$arity$2 ? pred__10439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__10440) : pred__10439.call(null,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),expr__10440))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__10436,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__10439.cljs$core$IFn$_invoke$arity$2 ? pred__10439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__10440) : pred__10439.call(null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),expr__10440))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__10436,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__10439.cljs$core$IFn$_invoke$arity$2 ? pred__10439.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prev","prev",1017353637),expr__10440) : pred__10439.call(null,new cljs.core.Keyword(null,"prev","prev",1017353637),expr__10440))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__10436,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4701__auto__,G__10436),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4707__auto__,writer__4708__auto__,opts__4709__auto__){var self__ = this;
var this__4707__auto____$1 = this;var pr_pair__4710__auto__ = (function (keyval__4711__auto__){return cljs.core.pr_sequential_writer(writer__4708__auto__,cljs.core.pr_writer,""," ","",opts__4709__auto__,keyval__4711__auto__);
});return cljs.core.pr_sequential_writer(writer__4708__auto__,pr_pair__4710__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4709__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4698__auto__,entry__4699__auto__){var self__ = this;
var this__4698__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4699__auto__))
{return cljs.core._assoc(this__4698__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4699__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4699__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4698__auto____$1,entry__4699__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4705__auto__){var self__ = this;
var this__4705__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prev","prev",1017353637),self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4697__auto__){var self__ = this;
var this__4697__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4689__auto__,other__4690__auto__){var self__ = this;
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4692__auto__,G__10436){var self__ = this;
var this__4692__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__10436,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4691__auto__){var self__ = this;
var this__4691__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4702__auto__,k__4703__auto__){var self__ = this;
var this__4702__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null,new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),null,new cljs.core.Keyword(null,"prev","prev",1017353637),null], null), null),k__4703__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4702__auto____$1),self__.__meta),k__4703__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4703__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4727__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4727__auto__,writer__4728__auto__){return cljs.core._write(writer__4728__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__10438){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(G__10438),new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(G__10438),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(G__10438),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(G__10438),new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(G__10438),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__10438,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),new cljs.core.Keyword(null,"continue-block","continue-block",1486987097),new cljs.core.Keyword(null,"prev","prev",1017353637)], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_10443 = state;(statearr_10443[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_10443;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = new cljs.core.Keyword(null,"catch-block","catch-block",2343862893).cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687).cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__4114__auto__ = exception;if(cljs.core.truth_(and__4114__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__4114__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__4114__auto__ = exception;if(cljs.core.truth_(and__4114__auto__))
{var and__4114__auto____$1 = catch_block;if(cljs.core.truth_(and__4114__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__4114__auto____$1;
}
} else
{return and__4114__auto__;
}
})()))
{var statearr_10449 = state;(statearr_10449[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_10449[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_10449[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_10449[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,new cljs.core.Keyword(null,"catch-block","catch-block",2343862893),null,cljs.core.array_seq([new cljs.core.Keyword(null,"catch-exception","catch-exception",1686480687),null], 0)));
return statearr_10449;
} else
{if(cljs.core.truth_((function (){var and__4114__auto__ = exception;if(cljs.core.truth_(and__4114__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__4114__auto__;
}
})()))
{var statearr_10450_10454 = state;(statearr_10450_10454[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__10455 = state;
state = G__10455;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__4114__auto__ = exception;if(cljs.core.truth_(and__4114__auto__))
{var and__4114__auto____$1 = cljs.core.not(catch_block);if(and__4114__auto____$1)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4114__auto____$1;
}
} else
{return and__4114__auto__;
}
})()))
{var statearr_10451 = state;(statearr_10451[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_10451[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_10451;
} else
{if(cljs.core.truth_((function (){var and__4114__auto__ = cljs.core.not(exception);if(and__4114__auto__)
{return new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__4114__auto__;
}
})()))
{var statearr_10452 = state;(statearr_10452[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_10452[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,new cljs.core.Keyword(null,"finally-block","finally-block",2846533429),null));
return statearr_10452;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(new cljs.core.Keyword(null,"finally-block","finally-block",2846533429).cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_10453 = state;(statearr_10453[cljs.core.async.impl.ioc_helpers.STATE_IDX] = new cljs.core.Keyword(null,"continue-block","continue-block",1486987097).cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_10453[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = new cljs.core.Keyword(null,"prev","prev",1017353637).cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_10453;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});
//# sourceMappingURL=ioc_helpers.js.map