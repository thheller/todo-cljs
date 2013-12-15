goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10497 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10497 = (function (f,fn_handler,meta10498){
this.f = f;
this.fn_handler = fn_handler;
this.meta10498 = meta10498;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10497.cljs$lang$type = true;
cljs.core.async.t10497.cljs$lang$ctorStr = "cljs.core.async/t10497";
cljs.core.async.t10497.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t10497");
});
cljs.core.async.t10497.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10497.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10497.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10499){var self__ = this;
var _10499__$1 = this;return self__.meta10498;
});
cljs.core.async.t10497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10499,meta10498__$1){var self__ = this;
var _10499__$1 = this;return (new cljs.core.async.t10497(self__.f,self__.fn_handler,meta10498__$1));
});
cljs.core.async.__GT_t10497 = (function __GT_t10497(f__$1,fn_handler__$1,meta10498){return (new cljs.core.async.t10497(f__$1,fn_handler__$1,meta10498));
});
}
return (new cljs.core.async.t10497(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10501 = buff;if(G__10501)
{var bit__4757__auto__ = null;if(cljs.core.truth_((function (){var or__4126__auto__ = bit__4757__auto__;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return G__10501.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10501.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__10501);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__10501);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.cljs$core$IFn$_invoke$arity$1(null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout(msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));if(cljs.core.truth_(ret))
{var val_10502 = cljs.core.deref(ret);if(cljs.core.truth_(on_caller_QMARK_))
{(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10502) : fn1.call(null,val_10502));
} else
{cljs.core.async.impl.dispatch.run((function (){return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_10502) : fn1.call(null,val_10502));
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.cljs$core$IFn$_invoke$arity$3(port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn0));if(cljs.core.truth_((function (){var and__4114__auto__ = ret;if(cljs.core.truth_(and__4114__auto__))
{return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fn0,cljs.core.async.nop);
} else
{return and__4114__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{(fn0.cljs$core$IFn$_invoke$arity$0 ? fn0.cljs$core$IFn$_invoke$arity$0() : fn0.call(null));
} else
{cljs.core.async.impl.dispatch.run(fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4954__auto___10503 = n;var x_10504 = 0;while(true){
if((x_10504 < n__4954__auto___10503))
{(a[x_10504] = 0);
{
var G__10505 = (x_10504 + 1);
x_10504 = G__10505;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n))
{return a;
} else
{var j = cljs.core.rand_int(i);(a[i] = (a[j]));
(a[j] = i);
{
var G__10506 = (i + 1);
i = G__10506;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);if(typeof cljs.core.async.t10510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10510 = (function (flag,alt_flag,meta10511){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10511 = meta10511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10510.cljs$lang$type = true;
cljs.core.async.t10510.cljs$lang$ctorStr = "cljs.core.async/t10510";
cljs.core.async.t10510.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t10510");
});
cljs.core.async.t10510.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10510.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref(self__.flag);
});
cljs.core.async.t10510.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.flag,null);
return true;
});
cljs.core.async.t10510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10512){var self__ = this;
var _10512__$1 = this;return self__.meta10511;
});
cljs.core.async.t10510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10512,meta10511__$1){var self__ = this;
var _10512__$1 = this;return (new cljs.core.async.t10510(self__.flag,self__.alt_flag,meta10511__$1));
});
cljs.core.async.__GT_t10510 = (function __GT_t10510(flag__$1,alt_flag__$1,meta10511){return (new cljs.core.async.t10510(flag__$1,alt_flag__$1,meta10511));
});
}
return (new cljs.core.async.t10510(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10516 = (function (cb,flag,alt_handler,meta10517){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10517 = meta10517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10516.cljs$lang$type = true;
cljs.core.async.t10516.cljs$lang$ctorStr = "cljs.core.async/t10516";
cljs.core.async.t10516.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t10516");
});
cljs.core.async.t10516.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});
cljs.core.async.t10516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit(self__.flag);
return self__.cb;
});
cljs.core.async.t10516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10518){var self__ = this;
var _10518__$1 = this;return self__.meta10517;
});
cljs.core.async.t10516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10518,meta10517__$1){var self__ = this;
var _10518__$1 = this;return (new cljs.core.async.t10516(self__.cb,self__.flag,self__.alt_handler,meta10517__$1));
});
cljs.core.async.__GT_t10516 = (function __GT_t10516(cb__$1,flag__$1,alt_handler__$1,meta10517){return (new cljs.core.async.t10516(cb__$1,flag__$1,alt_handler__$1,meta10517));
});
}
return (new cljs.core.async.t10516(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag();var n = cljs.core.count(ports);var idxs = cljs.core.async.random_array(n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(0) : port.call(null,0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(1) : port.call(null,1));return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null)));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__10519_SHARP_){return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10519_SHARP_,port], null)) : fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10519_SHARP_,port], null)));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__10520 = (i + 1);
i = G__10520;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4126__auto__ = ret;if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4114__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);if(cljs.core.truth_(and__4114__auto__))
{return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else
{return and__4114__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__10521){var map__10523 = p__10521;var map__10523__$1 = ((cljs.core.seq_QMARK_(map__10523))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10523):map__10523);var opts = map__10523__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([null], 0)))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10521 = null;if (arguments.length > 1) {
  p__10521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10521);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10524){
var ports = cljs.core.first(arglist__10524);
var p__10521 = cljs.core.rest(arglist__10524);
return alts_BANG___delegate(ports,p__10521);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10532 = (function (ch,f,map_LT_,meta10533){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10533 = meta10533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10532.cljs$lang$type = true;
cljs.core.async.t10532.cljs$lang$ctorStr = "cljs.core.async/t10532";
cljs.core.async.t10532.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t10532");
});
cljs.core.async.t10532.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
});
cljs.core.async.t10532.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){if(typeof cljs.core.async.t10535 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10535 = (function (fn1,_,meta10533,ch,f,map_LT_,meta10536){
this.fn1 = fn1;
this._ = _;
this.meta10533 = meta10533;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10536 = meta10536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10535.cljs$lang$type = true;
cljs.core.async.t10535.cljs$lang$ctorStr = "cljs.core.async/t10535";
cljs.core.async.t10535.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t10535");
});
cljs.core.async.t10535.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10535.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});
cljs.core.async.t10535.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return (cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1 ? cljs.core.async.impl.protocols.lock_id.cljs$core$IFn$_invoke$arity$1(self__.fn1) : cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1));
});
cljs.core.async.t10535.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);return ((function (f1,___$4){
return (function (p1__10525_SHARP_){return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1((((p1__10525_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10525_SHARP_) : self__.f.call(null,p1__10525_SHARP_)))) : f1.call(null,(((p1__10525_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__10525_SHARP_) : self__.f.call(null,p1__10525_SHARP_)))));
});
;})(f1,___$4))
});
cljs.core.async.t10535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10537){var self__ = this;
var _10537__$1 = this;return self__.meta10536;
});
cljs.core.async.t10535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10537,meta10536__$1){var self__ = this;
var _10537__$1 = this;return (new cljs.core.async.t10535(self__.fn1,self__._,self__.meta10533,self__.ch,self__.f,self__.map_LT_,meta10536__$1));
});
cljs.core.async.__GT_t10535 = (function __GT_t10535(fn1__$1,___$2,meta10533__$1,ch__$2,f__$2,map_LT___$2,meta10536){return (new cljs.core.async.t10535(fn1__$1,___$2,meta10533__$1,ch__$2,f__$2,map_LT___$2,meta10536));
});
}
return (new cljs.core.async.t10535(fn1,___$1,self__.meta10533,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4114__auto__ = ret;if(cljs.core.truth_(and__4114__auto__))
{return !((cljs.core.deref(ret) == null));
} else
{return and__4114__auto__;
}
})()))
{return cljs.core.async.impl.channels.box((self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(ret)) : self__.f.call(null,cljs.core.deref(ret))));
} else
{return ret;
}
});
cljs.core.async.t10532.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t10532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10534){var self__ = this;
var _10534__$1 = this;return self__.meta10533;
});
cljs.core.async.t10532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10534,meta10533__$1){var self__ = this;
var _10534__$1 = this;return (new cljs.core.async.t10532(self__.ch,self__.f,self__.map_LT_,meta10533__$1));
});
cljs.core.async.__GT_t10532 = (function __GT_t10532(ch__$1,f__$1,map_LT___$1,meta10533){return (new cljs.core.async.t10532(ch__$1,f__$1,map_LT___$1,meta10533));
});
}
return (new cljs.core.async.t10532(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10541 = (function (ch,f,map_GT_,meta10542){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10542 = meta10542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10541.cljs$lang$type = true;
cljs.core.async.t10541.cljs$lang$ctorStr = "cljs.core.async/t10541";
cljs.core.async.t10541.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t10541");
});
cljs.core.async.t10541.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10541.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn0);
});
cljs.core.async.t10541.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10541.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t10541.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10541.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t10541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10543){var self__ = this;
var _10543__$1 = this;return self__.meta10542;
});
cljs.core.async.t10541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10543,meta10542__$1){var self__ = this;
var _10543__$1 = this;return (new cljs.core.async.t10541(self__.ch,self__.f,self__.map_GT_,meta10542__$1));
});
cljs.core.async.__GT_t10541 = (function __GT_t10541(ch__$1,f__$1,map_GT___$1,meta10542){return (new cljs.core.async.t10541(ch__$1,f__$1,map_GT___$1,meta10542));
});
}
return (new cljs.core.async.t10541(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10547 = (function (ch,p,filter_GT_,meta10548){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10548 = meta10548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10547.cljs$lang$type = true;
cljs.core.async.t10547.cljs$lang$ctorStr = "cljs.core.async/t10547";
cljs.core.async.t10547.cljs$lang$ctorPrWriter = (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t10547");
});
cljs.core.async.t10547.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val))))
{return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box(null);
}
});
cljs.core.async.t10547.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});
cljs.core.async.t10547.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});
cljs.core.async.t10547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10549){var self__ = this;
var _10549__$1 = this;return self__.meta10548;
});
cljs.core.async.t10547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10549,meta10548__$1){var self__ = this;
var _10549__$1 = this;return (new cljs.core.async.t10547(self__.ch,self__.p,self__.filter_GT_,meta10548__$1));
});
cljs.core.async.__GT_t10547 = (function __GT_t10547(ch__$1,p__$1,filter_GT___$1,meta10548){return (new cljs.core.async.t10547(ch__$1,p__$1,filter_GT___$1,meta10548));
});
}
return (new cljs.core.async.t10547(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__7345__auto___10632 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_10611){var state_val_10612 = (state_10611[1]);if((state_val_10612 === 1))
{var state_10611__$1 = state_10611;var statearr_10613_10633 = state_10611__$1;(statearr_10613_10633[2] = null);
(statearr_10613_10633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10612 === 2))
{var state_10611__$1 = state_10611;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10611__$1,4,ch);
} else
{if((state_val_10612 === 3))
{var inst_10609 = (state_10611[2]);var state_10611__$1 = state_10611;return cljs.core.async.impl.ioc_helpers.return_chan(state_10611__$1,inst_10609);
} else
{if((state_val_10612 === 4))
{var inst_10593 = (state_10611[7]);var inst_10593__$1 = (state_10611[2]);var inst_10594 = (inst_10593__$1 == null);var state_10611__$1 = (function (){var statearr_10614 = state_10611;(statearr_10614[7] = inst_10593__$1);
return statearr_10614;
})();if(cljs.core.truth_(inst_10594))
{var statearr_10615_10634 = state_10611__$1;(statearr_10615_10634[1] = 5);
} else
{var statearr_10616_10635 = state_10611__$1;(statearr_10616_10635[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10612 === 5))
{var inst_10596 = cljs.core.async.close_BANG_(out);var state_10611__$1 = state_10611;var statearr_10617_10636 = state_10611__$1;(statearr_10617_10636[2] = inst_10596);
(statearr_10617_10636[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10612 === 6))
{var inst_10593 = (state_10611[7]);var inst_10598 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10593) : p.call(null,inst_10593));var state_10611__$1 = state_10611;if(cljs.core.truth_(inst_10598))
{var statearr_10618_10637 = state_10611__$1;(statearr_10618_10637[1] = 8);
} else
{var statearr_10619_10638 = state_10611__$1;(statearr_10619_10638[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10612 === 7))
{var inst_10607 = (state_10611[2]);var state_10611__$1 = state_10611;var statearr_10620_10639 = state_10611__$1;(statearr_10620_10639[2] = inst_10607);
(statearr_10620_10639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10612 === 8))
{var inst_10593 = (state_10611[7]);var state_10611__$1 = state_10611;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10611__$1,11,out,inst_10593);
} else
{if((state_val_10612 === 9))
{var state_10611__$1 = state_10611;var statearr_10621_10640 = state_10611__$1;(statearr_10621_10640[2] = null);
(statearr_10621_10640[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10612 === 10))
{var inst_10604 = (state_10611[2]);var state_10611__$1 = (function (){var statearr_10622 = state_10611;(statearr_10622[8] = inst_10604);
return statearr_10622;
})();var statearr_10623_10641 = state_10611__$1;(statearr_10623_10641[2] = null);
(statearr_10623_10641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10612 === 11))
{var inst_10601 = (state_10611[2]);var state_10611__$1 = state_10611;var statearr_10624_10642 = state_10611__$1;(statearr_10624_10642[2] = inst_10601);
(statearr_10624_10642[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_10628 = [null,null,null,null,null,null,null,null,null];(statearr_10628[0] = state_machine__7276__auto__);
(statearr_10628[1] = 1);
return statearr_10628;
});
var state_machine__7276__auto____1 = (function (state_10611){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_10611);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e10629){if((e10629 instanceof Object))
{var ex__7279__auto__ = e10629;var statearr_10630_10643 = state_10611;(statearr_10630_10643[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10611);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10644 = state_10611;
state_10611 = G__10644;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_10611){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_10611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_10631 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_10631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___10632);
return statearr_10631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7345__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_10796){var state_val_10797 = (state_10796[1]);if((state_val_10797 === 1))
{var state_10796__$1 = state_10796;var statearr_10798_10835 = state_10796__$1;(statearr_10798_10835[2] = null);
(statearr_10798_10835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 2))
{var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10796__$1,4,in$);
} else
{if((state_val_10797 === 3))
{var inst_10794 = (state_10796[2]);var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.return_chan(state_10796__$1,inst_10794);
} else
{if((state_val_10797 === 4))
{var inst_10742 = (state_10796[7]);var inst_10742__$1 = (state_10796[2]);var inst_10743 = (inst_10742__$1 == null);var state_10796__$1 = (function (){var statearr_10799 = state_10796;(statearr_10799[7] = inst_10742__$1);
return statearr_10799;
})();if(cljs.core.truth_(inst_10743))
{var statearr_10800_10836 = state_10796__$1;(statearr_10800_10836[1] = 5);
} else
{var statearr_10801_10837 = state_10796__$1;(statearr_10801_10837[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 5))
{var inst_10745 = cljs.core.async.close_BANG_(out);var state_10796__$1 = state_10796;var statearr_10802_10838 = state_10796__$1;(statearr_10802_10838[2] = inst_10745);
(statearr_10802_10838[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 6))
{var inst_10742 = (state_10796[7]);var inst_10747 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_10742) : f.call(null,inst_10742));var inst_10752 = cljs.core.seq(inst_10747);var inst_10753 = inst_10752;var inst_10754 = null;var inst_10755 = 0;var inst_10756 = 0;var state_10796__$1 = (function (){var statearr_10803 = state_10796;(statearr_10803[8] = inst_10753);
(statearr_10803[9] = inst_10754);
(statearr_10803[10] = inst_10755);
(statearr_10803[11] = inst_10756);
return statearr_10803;
})();var statearr_10804_10839 = state_10796__$1;(statearr_10804_10839[2] = null);
(statearr_10804_10839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 7))
{var inst_10792 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10805_10840 = state_10796__$1;(statearr_10805_10840[2] = inst_10792);
(statearr_10805_10840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 8))
{var inst_10755 = (state_10796[10]);var inst_10756 = (state_10796[11]);var inst_10758 = (inst_10756 < inst_10755);var inst_10759 = inst_10758;var state_10796__$1 = state_10796;if(cljs.core.truth_(inst_10759))
{var statearr_10806_10841 = state_10796__$1;(statearr_10806_10841[1] = 10);
} else
{var statearr_10807_10842 = state_10796__$1;(statearr_10807_10842[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 9))
{var inst_10789 = (state_10796[2]);var state_10796__$1 = (function (){var statearr_10808 = state_10796;(statearr_10808[12] = inst_10789);
return statearr_10808;
})();var statearr_10809_10843 = state_10796__$1;(statearr_10809_10843[2] = null);
(statearr_10809_10843[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 10))
{var inst_10754 = (state_10796[9]);var inst_10756 = (state_10796[11]);var inst_10761 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_10754,inst_10756);var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10796__$1,13,out,inst_10761);
} else
{if((state_val_10797 === 11))
{var inst_10753 = (state_10796[8]);var inst_10767 = (state_10796[13]);var inst_10767__$1 = cljs.core.seq(inst_10753);var state_10796__$1 = (function (){var statearr_10813 = state_10796;(statearr_10813[13] = inst_10767__$1);
return statearr_10813;
})();if(inst_10767__$1)
{var statearr_10814_10844 = state_10796__$1;(statearr_10814_10844[1] = 14);
} else
{var statearr_10815_10845 = state_10796__$1;(statearr_10815_10845[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 12))
{var inst_10787 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10816_10846 = state_10796__$1;(statearr_10816_10846[2] = inst_10787);
(statearr_10816_10846[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 13))
{var inst_10753 = (state_10796[8]);var inst_10754 = (state_10796[9]);var inst_10755 = (state_10796[10]);var inst_10756 = (state_10796[11]);var inst_10763 = (state_10796[2]);var inst_10764 = (inst_10756 + 1);var tmp10810 = inst_10753;var tmp10811 = inst_10754;var tmp10812 = inst_10755;var inst_10753__$1 = tmp10810;var inst_10754__$1 = tmp10811;var inst_10755__$1 = tmp10812;var inst_10756__$1 = inst_10764;var state_10796__$1 = (function (){var statearr_10817 = state_10796;(statearr_10817[14] = inst_10763);
(statearr_10817[8] = inst_10753__$1);
(statearr_10817[9] = inst_10754__$1);
(statearr_10817[10] = inst_10755__$1);
(statearr_10817[11] = inst_10756__$1);
return statearr_10817;
})();var statearr_10818_10847 = state_10796__$1;(statearr_10818_10847[2] = null);
(statearr_10818_10847[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 14))
{var inst_10767 = (state_10796[13]);var inst_10769 = cljs.core.chunked_seq_QMARK_(inst_10767);var state_10796__$1 = state_10796;if(inst_10769)
{var statearr_10819_10848 = state_10796__$1;(statearr_10819_10848[1] = 17);
} else
{var statearr_10820_10849 = state_10796__$1;(statearr_10820_10849[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 15))
{var state_10796__$1 = state_10796;var statearr_10821_10850 = state_10796__$1;(statearr_10821_10850[2] = null);
(statearr_10821_10850[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 16))
{var inst_10785 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10822_10851 = state_10796__$1;(statearr_10822_10851[2] = inst_10785);
(statearr_10822_10851[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 17))
{var inst_10767 = (state_10796[13]);var inst_10771 = cljs.core.chunk_first(inst_10767);var inst_10772 = cljs.core.chunk_rest(inst_10767);var inst_10773 = cljs.core.count(inst_10771);var inst_10753 = inst_10772;var inst_10754 = inst_10771;var inst_10755 = inst_10773;var inst_10756 = 0;var state_10796__$1 = (function (){var statearr_10823 = state_10796;(statearr_10823[8] = inst_10753);
(statearr_10823[9] = inst_10754);
(statearr_10823[10] = inst_10755);
(statearr_10823[11] = inst_10756);
return statearr_10823;
})();var statearr_10824_10852 = state_10796__$1;(statearr_10824_10852[2] = null);
(statearr_10824_10852[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 18))
{var inst_10767 = (state_10796[13]);var inst_10776 = cljs.core.first(inst_10767);var state_10796__$1 = state_10796;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10796__$1,20,out,inst_10776);
} else
{if((state_val_10797 === 19))
{var inst_10782 = (state_10796[2]);var state_10796__$1 = state_10796;var statearr_10825_10853 = state_10796__$1;(statearr_10825_10853[2] = inst_10782);
(statearr_10825_10853[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10797 === 20))
{var inst_10767 = (state_10796[13]);var inst_10778 = (state_10796[2]);var inst_10779 = cljs.core.next(inst_10767);var inst_10753 = inst_10779;var inst_10754 = null;var inst_10755 = 0;var inst_10756 = 0;var state_10796__$1 = (function (){var statearr_10826 = state_10796;(statearr_10826[15] = inst_10778);
(statearr_10826[8] = inst_10753);
(statearr_10826[9] = inst_10754);
(statearr_10826[10] = inst_10755);
(statearr_10826[11] = inst_10756);
return statearr_10826;
})();var statearr_10827_10854 = state_10796__$1;(statearr_10827_10854[2] = null);
(statearr_10827_10854[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_10831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10831[0] = state_machine__7276__auto__);
(statearr_10831[1] = 1);
return statearr_10831;
});
var state_machine__7276__auto____1 = (function (state_10796){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_10796);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e10832){if((e10832 instanceof Object))
{var ex__7279__auto__ = e10832;var statearr_10833_10855 = state_10796;(statearr_10833_10855[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10796);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10856 = state_10796;
state_10796 = G__10856;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_10796){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_10796);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_10834 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_10834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto__);
return statearr_10834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return c__7345__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);cljs.core.async.mapcat_STAR_(f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7345__auto___10937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_10916){var state_val_10917 = (state_10916[1]);if((state_val_10917 === 1))
{var state_10916__$1 = state_10916;var statearr_10918_10938 = state_10916__$1;(statearr_10918_10938[2] = null);
(statearr_10918_10938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 2))
{var state_10916__$1 = state_10916;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_10916__$1,4,from);
} else
{if((state_val_10917 === 3))
{var inst_10914 = (state_10916[2]);var state_10916__$1 = state_10916;return cljs.core.async.impl.ioc_helpers.return_chan(state_10916__$1,inst_10914);
} else
{if((state_val_10917 === 4))
{var inst_10899 = (state_10916[7]);var inst_10899__$1 = (state_10916[2]);var inst_10900 = (inst_10899__$1 == null);var state_10916__$1 = (function (){var statearr_10919 = state_10916;(statearr_10919[7] = inst_10899__$1);
return statearr_10919;
})();if(cljs.core.truth_(inst_10900))
{var statearr_10920_10939 = state_10916__$1;(statearr_10920_10939[1] = 5);
} else
{var statearr_10921_10940 = state_10916__$1;(statearr_10921_10940[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 5))
{var state_10916__$1 = state_10916;if(cljs.core.truth_(close_QMARK_))
{var statearr_10922_10941 = state_10916__$1;(statearr_10922_10941[1] = 8);
} else
{var statearr_10923_10942 = state_10916__$1;(statearr_10923_10942[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 6))
{var inst_10899 = (state_10916[7]);var state_10916__$1 = state_10916;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_10916__$1,11,to,inst_10899);
} else
{if((state_val_10917 === 7))
{var inst_10912 = (state_10916[2]);var state_10916__$1 = state_10916;var statearr_10924_10943 = state_10916__$1;(statearr_10924_10943[2] = inst_10912);
(statearr_10924_10943[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 8))
{var inst_10903 = cljs.core.async.close_BANG_(to);var state_10916__$1 = state_10916;var statearr_10925_10944 = state_10916__$1;(statearr_10925_10944[2] = inst_10903);
(statearr_10925_10944[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 9))
{var state_10916__$1 = state_10916;var statearr_10926_10945 = state_10916__$1;(statearr_10926_10945[2] = null);
(statearr_10926_10945[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 10))
{var inst_10906 = (state_10916[2]);var state_10916__$1 = state_10916;var statearr_10927_10946 = state_10916__$1;(statearr_10927_10946[2] = inst_10906);
(statearr_10927_10946[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10917 === 11))
{var inst_10909 = (state_10916[2]);var state_10916__$1 = (function (){var statearr_10928 = state_10916;(statearr_10928[8] = inst_10909);
return statearr_10928;
})();var statearr_10929_10947 = state_10916__$1;(statearr_10929_10947[2] = null);
(statearr_10929_10947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_10933 = [null,null,null,null,null,null,null,null,null];(statearr_10933[0] = state_machine__7276__auto__);
(statearr_10933[1] = 1);
return statearr_10933;
});
var state_machine__7276__auto____1 = (function (state_10916){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_10916);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e10934){if((e10934 instanceof Object))
{var ex__7279__auto__ = e10934;var statearr_10935_10948 = state_10916;(statearr_10935_10948[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_10916);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10934;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10949 = state_10916;
state_10916 = G__10949;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_10916){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_10916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_10936 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_10936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___10937);
return statearr_10936;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);var c__7345__auto___11036 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_11014){var state_val_11015 = (state_11014[1]);if((state_val_11015 === 1))
{var state_11014__$1 = state_11014;var statearr_11016_11037 = state_11014__$1;(statearr_11016_11037[2] = null);
(statearr_11016_11037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11015 === 2))
{var state_11014__$1 = state_11014;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11014__$1,4,ch);
} else
{if((state_val_11015 === 3))
{var inst_11012 = (state_11014[2]);var state_11014__$1 = state_11014;return cljs.core.async.impl.ioc_helpers.return_chan(state_11014__$1,inst_11012);
} else
{if((state_val_11015 === 4))
{var inst_10995 = (state_11014[7]);var inst_10995__$1 = (state_11014[2]);var inst_10996 = (inst_10995__$1 == null);var state_11014__$1 = (function (){var statearr_11017 = state_11014;(statearr_11017[7] = inst_10995__$1);
return statearr_11017;
})();if(cljs.core.truth_(inst_10996))
{var statearr_11018_11038 = state_11014__$1;(statearr_11018_11038[1] = 5);
} else
{var statearr_11019_11039 = state_11014__$1;(statearr_11019_11039[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11015 === 5))
{var inst_10998 = cljs.core.async.close_BANG_(tc);var inst_10999 = cljs.core.async.close_BANG_(fc);var state_11014__$1 = (function (){var statearr_11020 = state_11014;(statearr_11020[8] = inst_10998);
return statearr_11020;
})();var statearr_11021_11040 = state_11014__$1;(statearr_11021_11040[2] = inst_10999);
(statearr_11021_11040[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11015 === 6))
{var inst_10995 = (state_11014[7]);var inst_11001 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_10995) : p.call(null,inst_10995));var state_11014__$1 = state_11014;if(cljs.core.truth_(inst_11001))
{var statearr_11022_11041 = state_11014__$1;(statearr_11022_11041[1] = 9);
} else
{var statearr_11023_11042 = state_11014__$1;(statearr_11023_11042[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11015 === 7))
{var inst_11010 = (state_11014[2]);var state_11014__$1 = state_11014;var statearr_11024_11043 = state_11014__$1;(statearr_11024_11043[2] = inst_11010);
(statearr_11024_11043[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11015 === 8))
{var inst_11007 = (state_11014[2]);var state_11014__$1 = (function (){var statearr_11025 = state_11014;(statearr_11025[9] = inst_11007);
return statearr_11025;
})();var statearr_11026_11044 = state_11014__$1;(statearr_11026_11044[2] = null);
(statearr_11026_11044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11015 === 9))
{var state_11014__$1 = state_11014;var statearr_11027_11045 = state_11014__$1;(statearr_11027_11045[2] = tc);
(statearr_11027_11045[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11015 === 10))
{var state_11014__$1 = state_11014;var statearr_11028_11046 = state_11014__$1;(statearr_11028_11046[2] = fc);
(statearr_11028_11046[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11015 === 11))
{var inst_10995 = (state_11014[7]);var inst_11005 = (state_11014[2]);var state_11014__$1 = state_11014;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11014__$1,8,inst_11005,inst_10995);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_11032 = [null,null,null,null,null,null,null,null,null,null];(statearr_11032[0] = state_machine__7276__auto__);
(statearr_11032[1] = 1);
return statearr_11032;
});
var state_machine__7276__auto____1 = (function (state_11014){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_11014);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e11033){if((e11033 instanceof Object))
{var ex__7279__auto__ = e11033;var statearr_11034_11047 = state_11014;(statearr_11034_11047[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11014);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11048 = state_11014;
state_11014 = G__11048;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_11014){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_11014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_11035 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_11035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___11036);
return statearr_11035;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7345__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_11095){var state_val_11096 = (state_11095[1]);if((state_val_11096 === 7))
{var inst_11091 = (state_11095[2]);var state_11095__$1 = state_11095;var statearr_11097_11113 = state_11095__$1;(statearr_11097_11113[2] = inst_11091);
(statearr_11097_11113[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11096 === 6))
{var inst_11081 = (state_11095[7]);var inst_11084 = (state_11095[8]);var inst_11088 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_11081,inst_11084) : f.call(null,inst_11081,inst_11084));var inst_11081__$1 = inst_11088;var state_11095__$1 = (function (){var statearr_11098 = state_11095;(statearr_11098[7] = inst_11081__$1);
return statearr_11098;
})();var statearr_11099_11114 = state_11095__$1;(statearr_11099_11114[2] = null);
(statearr_11099_11114[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11096 === 5))
{var inst_11081 = (state_11095[7]);var state_11095__$1 = state_11095;var statearr_11100_11115 = state_11095__$1;(statearr_11100_11115[2] = inst_11081);
(statearr_11100_11115[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11096 === 4))
{var inst_11084 = (state_11095[8]);var inst_11084__$1 = (state_11095[2]);var inst_11085 = (inst_11084__$1 == null);var state_11095__$1 = (function (){var statearr_11101 = state_11095;(statearr_11101[8] = inst_11084__$1);
return statearr_11101;
})();if(cljs.core.truth_(inst_11085))
{var statearr_11102_11116 = state_11095__$1;(statearr_11102_11116[1] = 5);
} else
{var statearr_11103_11117 = state_11095__$1;(statearr_11103_11117[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11096 === 3))
{var inst_11093 = (state_11095[2]);var state_11095__$1 = state_11095;return cljs.core.async.impl.ioc_helpers.return_chan(state_11095__$1,inst_11093);
} else
{if((state_val_11096 === 2))
{var state_11095__$1 = state_11095;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11095__$1,4,ch);
} else
{if((state_val_11096 === 1))
{var inst_11081 = init;var state_11095__$1 = (function (){var statearr_11104 = state_11095;(statearr_11104[7] = inst_11081);
return statearr_11104;
})();var statearr_11105_11118 = state_11095__$1;(statearr_11105_11118[2] = null);
(statearr_11105_11118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_11109 = [null,null,null,null,null,null,null,null,null];(statearr_11109[0] = state_machine__7276__auto__);
(statearr_11109[1] = 1);
return statearr_11109;
});
var state_machine__7276__auto____1 = (function (state_11095){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_11095);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e11110){if((e11110 instanceof Object))
{var ex__7279__auto__ = e11110;var statearr_11111_11119 = state_11095;(statearr_11111_11119[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11120 = state_11095;
state_11095 = G__11120;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_11095){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_11095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_11112 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_11112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto__);
return statearr_11112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return c__7345__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7345__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_11182){var state_val_11183 = (state_11182[1]);if((state_val_11183 === 1))
{var inst_11162 = cljs.core.seq(coll);var inst_11163 = inst_11162;var state_11182__$1 = (function (){var statearr_11184 = state_11182;(statearr_11184[7] = inst_11163);
return statearr_11184;
})();var statearr_11185_11203 = state_11182__$1;(statearr_11185_11203[2] = null);
(statearr_11185_11203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11183 === 2))
{var inst_11163 = (state_11182[7]);var state_11182__$1 = state_11182;if(cljs.core.truth_(inst_11163))
{var statearr_11186_11204 = state_11182__$1;(statearr_11186_11204[1] = 4);
} else
{var statearr_11187_11205 = state_11182__$1;(statearr_11187_11205[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11183 === 3))
{var inst_11180 = (state_11182[2]);var state_11182__$1 = state_11182;return cljs.core.async.impl.ioc_helpers.return_chan(state_11182__$1,inst_11180);
} else
{if((state_val_11183 === 4))
{var inst_11163 = (state_11182[7]);var inst_11166 = cljs.core.first(inst_11163);var state_11182__$1 = state_11182;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11182__$1,7,ch,inst_11166);
} else
{if((state_val_11183 === 5))
{var state_11182__$1 = state_11182;if(cljs.core.truth_(close_QMARK_))
{var statearr_11188_11206 = state_11182__$1;(statearr_11188_11206[1] = 8);
} else
{var statearr_11189_11207 = state_11182__$1;(statearr_11189_11207[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11183 === 6))
{var inst_11178 = (state_11182[2]);var state_11182__$1 = state_11182;var statearr_11190_11208 = state_11182__$1;(statearr_11190_11208[2] = inst_11178);
(statearr_11190_11208[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11183 === 7))
{var inst_11163 = (state_11182[7]);var inst_11168 = (state_11182[2]);var inst_11169 = cljs.core.next(inst_11163);var inst_11163__$1 = inst_11169;var state_11182__$1 = (function (){var statearr_11191 = state_11182;(statearr_11191[8] = inst_11168);
(statearr_11191[7] = inst_11163__$1);
return statearr_11191;
})();var statearr_11192_11209 = state_11182__$1;(statearr_11192_11209[2] = null);
(statearr_11192_11209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11183 === 8))
{var inst_11173 = cljs.core.async.close_BANG_(ch);var state_11182__$1 = state_11182;var statearr_11193_11210 = state_11182__$1;(statearr_11193_11210[2] = inst_11173);
(statearr_11193_11210[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11183 === 9))
{var state_11182__$1 = state_11182;var statearr_11194_11211 = state_11182__$1;(statearr_11194_11211[2] = null);
(statearr_11194_11211[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11183 === 10))
{var inst_11176 = (state_11182[2]);var state_11182__$1 = state_11182;var statearr_11195_11212 = state_11182__$1;(statearr_11195_11212[2] = inst_11176);
(statearr_11195_11212[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_11199 = [null,null,null,null,null,null,null,null,null];(statearr_11199[0] = state_machine__7276__auto__);
(statearr_11199[1] = 1);
return statearr_11199;
});
var state_machine__7276__auto____1 = (function (state_11182){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_11182);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e11200){if((e11200 instanceof Object))
{var ex__7279__auto__ = e11200;var statearr_11201_11213 = state_11182;(statearr_11201_11213[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11182);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11200;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11214 = state_11182;
state_11182 = G__11214;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_11182){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_11182);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_11202 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_11202[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto__);
return statearr_11202;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return c__7345__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count(100,coll));cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj11216 = {};return obj11216;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4114__auto__ = _;if(and__4114__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4114__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4734__auto__ = (((_ == null))?null:_);return (function (){var or__4126__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj11218 = {};return obj11218;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4114__auto__ = m;if(and__4114__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4114__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4734__auto__ = (((m == null))?null:m);return (function (){var or__4126__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4114__auto__ = m;if(and__4114__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4114__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4734__auto__ = (((m == null))?null:m);return (function (){var or__4126__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4114__auto__ = m;if(and__4114__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4114__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4734__auto__ = (((m == null))?null:m);return (function (){var or__4126__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11442 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11442 = (function (cs,ch,mult,meta11443){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11443 = meta11443;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11442.cljs$lang$type = true;
cljs.core.async.t11442.cljs$lang$ctorStr = "cljs.core.async/t11442";
cljs.core.async.t11442.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t11442");
});})(cs))
;
cljs.core.async.t11442.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11442.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11442.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11442.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11442.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11442.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11444){var self__ = this;
var _11444__$1 = this;return self__.meta11443;
});})(cs))
;
cljs.core.async.t11442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11444,meta11443__$1){var self__ = this;
var _11444__$1 = this;return (new cljs.core.async.t11442(self__.cs,self__.ch,self__.mult,meta11443__$1));
});})(cs))
;
cljs.core.async.__GT_t11442 = ((function (cs){
return (function __GT_t11442(cs__$1,ch__$1,mult__$1,meta11443){return (new cljs.core.async.t11442(cs__$1,ch__$1,mult__$1,meta11443));
});})(cs))
;
}
return (new cljs.core.async.t11442(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7345__auto___11665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_11579){var state_val_11580 = (state_11579[1]);if((state_val_11580 === 32))
{var inst_11523 = (state_11579[7]);var inst_11447 = (state_11579[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11579,31,Object,null,30);var inst_11530 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11523,inst_11447,done);var state_11579__$1 = state_11579;var statearr_11581_11666 = state_11579__$1;(statearr_11581_11666[2] = inst_11530);
cljs.core.async.impl.ioc_helpers.process_exception(state_11579__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 1))
{var state_11579__$1 = state_11579;var statearr_11582_11667 = state_11579__$1;(statearr_11582_11667[2] = null);
(statearr_11582_11667[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 33))
{var inst_11536 = (state_11579[9]);var inst_11538 = cljs.core.chunked_seq_QMARK_(inst_11536);var state_11579__$1 = state_11579;if(inst_11538)
{var statearr_11583_11668 = state_11579__$1;(statearr_11583_11668[1] = 36);
} else
{var statearr_11584_11669 = state_11579__$1;(statearr_11584_11669[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 2))
{var state_11579__$1 = state_11579;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11579__$1,4,ch);
} else
{if((state_val_11580 === 34))
{var state_11579__$1 = state_11579;var statearr_11585_11670 = state_11579__$1;(statearr_11585_11670[2] = null);
(statearr_11585_11670[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 3))
{var inst_11577 = (state_11579[2]);var state_11579__$1 = state_11579;return cljs.core.async.impl.ioc_helpers.return_chan(state_11579__$1,inst_11577);
} else
{if((state_val_11580 === 35))
{var inst_11561 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11586_11671 = state_11579__$1;(statearr_11586_11671[2] = inst_11561);
(statearr_11586_11671[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 4))
{var inst_11447 = (state_11579[8]);var inst_11447__$1 = (state_11579[2]);var inst_11448 = (inst_11447__$1 == null);var state_11579__$1 = (function (){var statearr_11587 = state_11579;(statearr_11587[8] = inst_11447__$1);
return statearr_11587;
})();if(cljs.core.truth_(inst_11448))
{var statearr_11588_11672 = state_11579__$1;(statearr_11588_11672[1] = 5);
} else
{var statearr_11589_11673 = state_11579__$1;(statearr_11589_11673[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 36))
{var inst_11536 = (state_11579[9]);var inst_11540 = cljs.core.chunk_first(inst_11536);var inst_11541 = cljs.core.chunk_rest(inst_11536);var inst_11542 = cljs.core.count(inst_11540);var inst_11515 = inst_11541;var inst_11516 = inst_11540;var inst_11517 = inst_11542;var inst_11518 = 0;var state_11579__$1 = (function (){var statearr_11590 = state_11579;(statearr_11590[10] = inst_11516);
(statearr_11590[11] = inst_11515);
(statearr_11590[12] = inst_11518);
(statearr_11590[13] = inst_11517);
return statearr_11590;
})();var statearr_11591_11674 = state_11579__$1;(statearr_11591_11674[2] = null);
(statearr_11591_11674[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 5))
{var inst_11454 = cljs.core.deref(cs);var inst_11455 = cljs.core.seq(inst_11454);var inst_11456 = inst_11455;var inst_11457 = null;var inst_11458 = 0;var inst_11459 = 0;var state_11579__$1 = (function (){var statearr_11592 = state_11579;(statearr_11592[14] = inst_11456);
(statearr_11592[15] = inst_11457);
(statearr_11592[16] = inst_11458);
(statearr_11592[17] = inst_11459);
return statearr_11592;
})();var statearr_11593_11675 = state_11579__$1;(statearr_11593_11675[2] = null);
(statearr_11593_11675[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 37))
{var inst_11536 = (state_11579[9]);var inst_11545 = cljs.core.first(inst_11536);var state_11579__$1 = (function (){var statearr_11594 = state_11579;(statearr_11594[18] = inst_11545);
return statearr_11594;
})();var statearr_11595_11676 = state_11579__$1;(statearr_11595_11676[2] = null);
(statearr_11595_11676[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 6))
{var inst_11507 = (state_11579[19]);var inst_11506 = cljs.core.deref(cs);var inst_11507__$1 = cljs.core.keys(inst_11506);var inst_11508 = cljs.core.count(inst_11507__$1);var inst_11509 = cljs.core.reset_BANG_(dctr,inst_11508);var inst_11514 = cljs.core.seq(inst_11507__$1);var inst_11515 = inst_11514;var inst_11516 = null;var inst_11517 = 0;var inst_11518 = 0;var state_11579__$1 = (function (){var statearr_11596 = state_11579;(statearr_11596[19] = inst_11507__$1);
(statearr_11596[20] = inst_11509);
(statearr_11596[10] = inst_11516);
(statearr_11596[11] = inst_11515);
(statearr_11596[12] = inst_11518);
(statearr_11596[13] = inst_11517);
return statearr_11596;
})();var statearr_11597_11677 = state_11579__$1;(statearr_11597_11677[2] = null);
(statearr_11597_11677[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 38))
{var inst_11558 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11598_11678 = state_11579__$1;(statearr_11598_11678[2] = inst_11558);
(statearr_11598_11678[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 7))
{var inst_11575 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11599_11679 = state_11579__$1;(statearr_11599_11679[2] = inst_11575);
(statearr_11599_11679[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 39))
{var inst_11536 = (state_11579[9]);var inst_11554 = (state_11579[2]);var inst_11555 = cljs.core.next(inst_11536);var inst_11515 = inst_11555;var inst_11516 = null;var inst_11517 = 0;var inst_11518 = 0;var state_11579__$1 = (function (){var statearr_11600 = state_11579;(statearr_11600[10] = inst_11516);
(statearr_11600[11] = inst_11515);
(statearr_11600[12] = inst_11518);
(statearr_11600[13] = inst_11517);
(statearr_11600[21] = inst_11554);
return statearr_11600;
})();var statearr_11601_11680 = state_11579__$1;(statearr_11601_11680[2] = null);
(statearr_11601_11680[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 8))
{var inst_11458 = (state_11579[16]);var inst_11459 = (state_11579[17]);var inst_11461 = (inst_11459 < inst_11458);var inst_11462 = inst_11461;var state_11579__$1 = state_11579;if(cljs.core.truth_(inst_11462))
{var statearr_11602_11681 = state_11579__$1;(statearr_11602_11681[1] = 10);
} else
{var statearr_11603_11682 = state_11579__$1;(statearr_11603_11682[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 40))
{var inst_11545 = (state_11579[18]);var inst_11546 = (state_11579[2]);var inst_11547 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_11548 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11545);var state_11579__$1 = (function (){var statearr_11604 = state_11579;(statearr_11604[22] = inst_11546);
(statearr_11604[23] = inst_11547);
return statearr_11604;
})();var statearr_11605_11683 = state_11579__$1;(statearr_11605_11683[2] = inst_11548);
cljs.core.async.impl.ioc_helpers.process_exception(state_11579__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 9))
{var inst_11504 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11606_11684 = state_11579__$1;(statearr_11606_11684[2] = inst_11504);
(statearr_11606_11684[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 41))
{var inst_11447 = (state_11579[8]);var inst_11545 = (state_11579[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_11579,40,Object,null,39);var inst_11552 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_11545,inst_11447,done);var state_11579__$1 = state_11579;var statearr_11607_11685 = state_11579__$1;(statearr_11607_11685[2] = inst_11552);
cljs.core.async.impl.ioc_helpers.process_exception(state_11579__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 10))
{var inst_11457 = (state_11579[15]);var inst_11459 = (state_11579[17]);var inst_11465 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11457,inst_11459);var inst_11466 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11465,0,null);var inst_11467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11465,1,null);var state_11579__$1 = (function (){var statearr_11608 = state_11579;(statearr_11608[24] = inst_11466);
return statearr_11608;
})();if(cljs.core.truth_(inst_11467))
{var statearr_11609_11686 = state_11579__$1;(statearr_11609_11686[1] = 13);
} else
{var statearr_11610_11687 = state_11579__$1;(statearr_11610_11687[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 42))
{var state_11579__$1 = state_11579;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_11579__$1,45,dchan);
} else
{if((state_val_11580 === 11))
{var inst_11456 = (state_11579[14]);var inst_11476 = (state_11579[25]);var inst_11476__$1 = cljs.core.seq(inst_11456);var state_11579__$1 = (function (){var statearr_11611 = state_11579;(statearr_11611[25] = inst_11476__$1);
return statearr_11611;
})();if(inst_11476__$1)
{var statearr_11612_11688 = state_11579__$1;(statearr_11612_11688[1] = 16);
} else
{var statearr_11613_11689 = state_11579__$1;(statearr_11613_11689[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 43))
{var state_11579__$1 = state_11579;var statearr_11614_11690 = state_11579__$1;(statearr_11614_11690[2] = null);
(statearr_11614_11690[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 12))
{var inst_11502 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11615_11691 = state_11579__$1;(statearr_11615_11691[2] = inst_11502);
(statearr_11615_11691[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 44))
{var inst_11572 = (state_11579[2]);var state_11579__$1 = (function (){var statearr_11616 = state_11579;(statearr_11616[26] = inst_11572);
return statearr_11616;
})();var statearr_11617_11692 = state_11579__$1;(statearr_11617_11692[2] = null);
(statearr_11617_11692[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 13))
{var inst_11466 = (state_11579[24]);var inst_11469 = cljs.core.async.close_BANG_(inst_11466);var state_11579__$1 = state_11579;var statearr_11618_11693 = state_11579__$1;(statearr_11618_11693[2] = inst_11469);
(statearr_11618_11693[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 45))
{var inst_11569 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11622_11694 = state_11579__$1;(statearr_11622_11694[2] = inst_11569);
(statearr_11622_11694[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 14))
{var state_11579__$1 = state_11579;var statearr_11623_11695 = state_11579__$1;(statearr_11623_11695[2] = null);
(statearr_11623_11695[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 15))
{var inst_11456 = (state_11579[14]);var inst_11457 = (state_11579[15]);var inst_11458 = (state_11579[16]);var inst_11459 = (state_11579[17]);var inst_11472 = (state_11579[2]);var inst_11473 = (inst_11459 + 1);var tmp11619 = inst_11456;var tmp11620 = inst_11457;var tmp11621 = inst_11458;var inst_11456__$1 = tmp11619;var inst_11457__$1 = tmp11620;var inst_11458__$1 = tmp11621;var inst_11459__$1 = inst_11473;var state_11579__$1 = (function (){var statearr_11624 = state_11579;(statearr_11624[14] = inst_11456__$1);
(statearr_11624[15] = inst_11457__$1);
(statearr_11624[16] = inst_11458__$1);
(statearr_11624[17] = inst_11459__$1);
(statearr_11624[27] = inst_11472);
return statearr_11624;
})();var statearr_11625_11696 = state_11579__$1;(statearr_11625_11696[2] = null);
(statearr_11625_11696[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 16))
{var inst_11476 = (state_11579[25]);var inst_11478 = cljs.core.chunked_seq_QMARK_(inst_11476);var state_11579__$1 = state_11579;if(inst_11478)
{var statearr_11626_11697 = state_11579__$1;(statearr_11626_11697[1] = 19);
} else
{var statearr_11627_11698 = state_11579__$1;(statearr_11627_11698[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 17))
{var state_11579__$1 = state_11579;var statearr_11628_11699 = state_11579__$1;(statearr_11628_11699[2] = null);
(statearr_11628_11699[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 18))
{var inst_11500 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11629_11700 = state_11579__$1;(statearr_11629_11700[2] = inst_11500);
(statearr_11629_11700[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 19))
{var inst_11476 = (state_11579[25]);var inst_11480 = cljs.core.chunk_first(inst_11476);var inst_11481 = cljs.core.chunk_rest(inst_11476);var inst_11482 = cljs.core.count(inst_11480);var inst_11456 = inst_11481;var inst_11457 = inst_11480;var inst_11458 = inst_11482;var inst_11459 = 0;var state_11579__$1 = (function (){var statearr_11630 = state_11579;(statearr_11630[14] = inst_11456);
(statearr_11630[15] = inst_11457);
(statearr_11630[16] = inst_11458);
(statearr_11630[17] = inst_11459);
return statearr_11630;
})();var statearr_11631_11701 = state_11579__$1;(statearr_11631_11701[2] = null);
(statearr_11631_11701[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 20))
{var inst_11476 = (state_11579[25]);var inst_11486 = cljs.core.first(inst_11476);var inst_11487 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11486,0,null);var inst_11488 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11486,1,null);var state_11579__$1 = (function (){var statearr_11632 = state_11579;(statearr_11632[28] = inst_11487);
return statearr_11632;
})();if(cljs.core.truth_(inst_11488))
{var statearr_11633_11702 = state_11579__$1;(statearr_11633_11702[1] = 22);
} else
{var statearr_11634_11703 = state_11579__$1;(statearr_11634_11703[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 21))
{var inst_11497 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11635_11704 = state_11579__$1;(statearr_11635_11704[2] = inst_11497);
(statearr_11635_11704[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 22))
{var inst_11487 = (state_11579[28]);var inst_11490 = cljs.core.async.close_BANG_(inst_11487);var state_11579__$1 = state_11579;var statearr_11636_11705 = state_11579__$1;(statearr_11636_11705[2] = inst_11490);
(statearr_11636_11705[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 23))
{var state_11579__$1 = state_11579;var statearr_11637_11706 = state_11579__$1;(statearr_11637_11706[2] = null);
(statearr_11637_11706[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 24))
{var inst_11476 = (state_11579[25]);var inst_11493 = (state_11579[2]);var inst_11494 = cljs.core.next(inst_11476);var inst_11456 = inst_11494;var inst_11457 = null;var inst_11458 = 0;var inst_11459 = 0;var state_11579__$1 = (function (){var statearr_11638 = state_11579;(statearr_11638[29] = inst_11493);
(statearr_11638[14] = inst_11456);
(statearr_11638[15] = inst_11457);
(statearr_11638[16] = inst_11458);
(statearr_11638[17] = inst_11459);
return statearr_11638;
})();var statearr_11639_11707 = state_11579__$1;(statearr_11639_11707[2] = null);
(statearr_11639_11707[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 25))
{var inst_11518 = (state_11579[12]);var inst_11517 = (state_11579[13]);var inst_11520 = (inst_11518 < inst_11517);var inst_11521 = inst_11520;var state_11579__$1 = state_11579;if(cljs.core.truth_(inst_11521))
{var statearr_11640_11708 = state_11579__$1;(statearr_11640_11708[1] = 27);
} else
{var statearr_11641_11709 = state_11579__$1;(statearr_11641_11709[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 26))
{var inst_11507 = (state_11579[19]);var inst_11565 = (state_11579[2]);var inst_11566 = cljs.core.seq(inst_11507);var state_11579__$1 = (function (){var statearr_11642 = state_11579;(statearr_11642[30] = inst_11565);
return statearr_11642;
})();if(inst_11566)
{var statearr_11643_11710 = state_11579__$1;(statearr_11643_11710[1] = 42);
} else
{var statearr_11644_11711 = state_11579__$1;(statearr_11644_11711[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 27))
{var inst_11516 = (state_11579[10]);var inst_11518 = (state_11579[12]);var inst_11523 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_11516,inst_11518);var state_11579__$1 = (function (){var statearr_11645 = state_11579;(statearr_11645[7] = inst_11523);
return statearr_11645;
})();var statearr_11646_11712 = state_11579__$1;(statearr_11646_11712[2] = null);
(statearr_11646_11712[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 28))
{var inst_11536 = (state_11579[9]);var inst_11515 = (state_11579[11]);var inst_11536__$1 = cljs.core.seq(inst_11515);var state_11579__$1 = (function (){var statearr_11650 = state_11579;(statearr_11650[9] = inst_11536__$1);
return statearr_11650;
})();if(inst_11536__$1)
{var statearr_11651_11713 = state_11579__$1;(statearr_11651_11713[1] = 33);
} else
{var statearr_11652_11714 = state_11579__$1;(statearr_11652_11714[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 29))
{var inst_11563 = (state_11579[2]);var state_11579__$1 = state_11579;var statearr_11653_11715 = state_11579__$1;(statearr_11653_11715[2] = inst_11563);
(statearr_11653_11715[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 30))
{var inst_11516 = (state_11579[10]);var inst_11515 = (state_11579[11]);var inst_11518 = (state_11579[12]);var inst_11517 = (state_11579[13]);var inst_11532 = (state_11579[2]);var inst_11533 = (inst_11518 + 1);var tmp11647 = inst_11516;var tmp11648 = inst_11515;var tmp11649 = inst_11517;var inst_11515__$1 = tmp11648;var inst_11516__$1 = tmp11647;var inst_11517__$1 = tmp11649;var inst_11518__$1 = inst_11533;var state_11579__$1 = (function (){var statearr_11654 = state_11579;(statearr_11654[10] = inst_11516__$1);
(statearr_11654[11] = inst_11515__$1);
(statearr_11654[12] = inst_11518__$1);
(statearr_11654[13] = inst_11517__$1);
(statearr_11654[31] = inst_11532);
return statearr_11654;
})();var statearr_11655_11716 = state_11579__$1;(statearr_11655_11716[2] = null);
(statearr_11655_11716[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11580 === 31))
{var inst_11523 = (state_11579[7]);var inst_11524 = (state_11579[2]);var inst_11525 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var inst_11526 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_11523);var state_11579__$1 = (function (){var statearr_11656 = state_11579;(statearr_11656[32] = inst_11524);
(statearr_11656[33] = inst_11525);
return statearr_11656;
})();var statearr_11657_11717 = state_11579__$1;(statearr_11657_11717[2] = inst_11526);
cljs.core.async.impl.ioc_helpers.process_exception(state_11579__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_11661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11661[0] = state_machine__7276__auto__);
(statearr_11661[1] = 1);
return statearr_11661;
});
var state_machine__7276__auto____1 = (function (state_11579){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_11579);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e11662){if((e11662 instanceof Object))
{var ex__7279__auto__ = e11662;var statearr_11663_11718 = state_11579;(statearr_11663_11718[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11579);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11662;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11719 = state_11579;
state_11579 = G__11719;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_11579){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_11579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_11664 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_11664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___11665);
return statearr_11664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_(mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_(mult);
});
cljs.core.async.Mix = (function (){var obj11721 = {};return obj11721;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4114__auto__ = m;if(and__4114__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4114__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4734__auto__ = (((m == null))?null:m);return (function (){var or__4126__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4114__auto__ = m;if(and__4114__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4114__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4734__auto__ = (((m == null))?null:m);return (function (){var or__4126__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4114__auto__ = m;if(and__4114__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4114__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4734__auto__ = (((m == null))?null:m);return (function (){var or__4126__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4114__auto__ = m;if(and__4114__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4114__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4734__auto__ = (((m == null))?null:m);return (function (){var or__4126__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4114__auto__ = m;if(and__4114__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4114__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4734__auto__ = (((m == null))?null:m);return (function (){var or__4126__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v))))
{return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref(cs);var mode = cljs.core.deref(solo_mode);var solos = pick(new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick(new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick(new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11831 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11831 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11832){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta11832 = meta11832;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11831.cljs$lang$type = true;
cljs.core.async.t11831.cljs$lang$ctorStr = "cljs.core.async/t11831";
cljs.core.async.t11831.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t11831");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11831.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11831.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11831.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11831.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11831.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11831.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode))))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))], 0)))].join('')));
}
cljs.core.reset_BANG_(self__.solo_mode,mode);
return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11831.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11831.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11831.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11833){var self__ = this;
var _11833__$1 = this;return self__.meta11832;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11831.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11833,meta11832__$1){var self__ = this;
var _11833__$1 = this;return (new cljs.core.async.t11831(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11832__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11831 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11831(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11832){return (new cljs.core.async.t11831(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11832));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11831(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__7345__auto___11940 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_11898){var state_val_11899 = (state_11898[1]);if((state_val_11899 === 1))
{var inst_11837 = (state_11898[7]);var inst_11837__$1 = calc_state();var inst_11838 = cljs.core.seq_QMARK_(inst_11837__$1);var state_11898__$1 = (function (){var statearr_11900 = state_11898;(statearr_11900[7] = inst_11837__$1);
return statearr_11900;
})();if(inst_11838)
{var statearr_11901_11941 = state_11898__$1;(statearr_11901_11941[1] = 2);
} else
{var statearr_11902_11942 = state_11898__$1;(statearr_11902_11942[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 2))
{var inst_11837 = (state_11898[7]);var inst_11840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11837);var state_11898__$1 = state_11898;var statearr_11903_11943 = state_11898__$1;(statearr_11903_11943[2] = inst_11840);
(statearr_11903_11943[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 3))
{var inst_11837 = (state_11898[7]);var state_11898__$1 = state_11898;var statearr_11904_11944 = state_11898__$1;(statearr_11904_11944[2] = inst_11837);
(statearr_11904_11944[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 4))
{var inst_11837 = (state_11898[7]);var inst_11843 = (state_11898[2]);var inst_11844 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11843,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11845 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11843,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11846 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11843,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11847 = inst_11837;var state_11898__$1 = (function (){var statearr_11905 = state_11898;(statearr_11905[8] = inst_11844);
(statearr_11905[9] = inst_11846);
(statearr_11905[10] = inst_11845);
(statearr_11905[11] = inst_11847);
return statearr_11905;
})();var statearr_11906_11945 = state_11898__$1;(statearr_11906_11945[2] = null);
(statearr_11906_11945[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 5))
{var inst_11847 = (state_11898[11]);var inst_11850 = cljs.core.seq_QMARK_(inst_11847);var state_11898__$1 = state_11898;if(inst_11850)
{var statearr_11907_11946 = state_11898__$1;(statearr_11907_11946[1] = 7);
} else
{var statearr_11908_11947 = state_11898__$1;(statearr_11908_11947[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 6))
{var inst_11896 = (state_11898[2]);var state_11898__$1 = state_11898;return cljs.core.async.impl.ioc_helpers.return_chan(state_11898__$1,inst_11896);
} else
{if((state_val_11899 === 7))
{var inst_11847 = (state_11898[11]);var inst_11852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_11847);var state_11898__$1 = state_11898;var statearr_11909_11948 = state_11898__$1;(statearr_11909_11948[2] = inst_11852);
(statearr_11909_11948[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 8))
{var inst_11847 = (state_11898[11]);var state_11898__$1 = state_11898;var statearr_11910_11949 = state_11898__$1;(statearr_11910_11949[2] = inst_11847);
(statearr_11910_11949[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 9))
{var inst_11855 = (state_11898[12]);var inst_11855__$1 = (state_11898[2]);var inst_11856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11855__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11855__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11858 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_11855__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11898__$1 = (function (){var statearr_11911 = state_11898;(statearr_11911[12] = inst_11855__$1);
(statearr_11911[13] = inst_11857);
(statearr_11911[14] = inst_11858);
return statearr_11911;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_11898__$1,10,inst_11856);
} else
{if((state_val_11899 === 10))
{var inst_11862 = (state_11898[15]);var inst_11863 = (state_11898[16]);var inst_11861 = (state_11898[2]);var inst_11862__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11861,0,null);var inst_11863__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_11861,1,null);var inst_11864 = (inst_11862__$1 == null);var inst_11865 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_11863__$1,change);var inst_11866 = (inst_11864) || (inst_11865);var state_11898__$1 = (function (){var statearr_11912 = state_11898;(statearr_11912[15] = inst_11862__$1);
(statearr_11912[16] = inst_11863__$1);
return statearr_11912;
})();if(cljs.core.truth_(inst_11866))
{var statearr_11913_11950 = state_11898__$1;(statearr_11913_11950[1] = 11);
} else
{var statearr_11914_11951 = state_11898__$1;(statearr_11914_11951[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 11))
{var inst_11862 = (state_11898[15]);var inst_11868 = (inst_11862 == null);var state_11898__$1 = state_11898;if(cljs.core.truth_(inst_11868))
{var statearr_11915_11952 = state_11898__$1;(statearr_11915_11952[1] = 14);
} else
{var statearr_11916_11953 = state_11898__$1;(statearr_11916_11953[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 12))
{var inst_11877 = (state_11898[17]);var inst_11858 = (state_11898[14]);var inst_11863 = (state_11898[16]);var inst_11877__$1 = (inst_11858.cljs$core$IFn$_invoke$arity$1 ? inst_11858.cljs$core$IFn$_invoke$arity$1(inst_11863) : inst_11858.call(null,inst_11863));var state_11898__$1 = (function (){var statearr_11917 = state_11898;(statearr_11917[17] = inst_11877__$1);
return statearr_11917;
})();if(cljs.core.truth_(inst_11877__$1))
{var statearr_11918_11954 = state_11898__$1;(statearr_11918_11954[1] = 17);
} else
{var statearr_11919_11955 = state_11898__$1;(statearr_11919_11955[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 13))
{var inst_11894 = (state_11898[2]);var state_11898__$1 = state_11898;var statearr_11920_11956 = state_11898__$1;(statearr_11920_11956[2] = inst_11894);
(statearr_11920_11956[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 14))
{var inst_11863 = (state_11898[16]);var inst_11870 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_11863);var state_11898__$1 = state_11898;var statearr_11921_11957 = state_11898__$1;(statearr_11921_11957[2] = inst_11870);
(statearr_11921_11957[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 15))
{var state_11898__$1 = state_11898;var statearr_11922_11958 = state_11898__$1;(statearr_11922_11958[2] = null);
(statearr_11922_11958[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 16))
{var inst_11873 = (state_11898[2]);var inst_11874 = calc_state();var inst_11847 = inst_11874;var state_11898__$1 = (function (){var statearr_11923 = state_11898;(statearr_11923[11] = inst_11847);
(statearr_11923[18] = inst_11873);
return statearr_11923;
})();var statearr_11924_11959 = state_11898__$1;(statearr_11924_11959[2] = null);
(statearr_11924_11959[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 17))
{var inst_11877 = (state_11898[17]);var state_11898__$1 = state_11898;var statearr_11925_11960 = state_11898__$1;(statearr_11925_11960[2] = inst_11877);
(statearr_11925_11960[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 18))
{var inst_11857 = (state_11898[13]);var inst_11858 = (state_11898[14]);var inst_11863 = (state_11898[16]);var inst_11880 = cljs.core.empty_QMARK_(inst_11858);var inst_11881 = (inst_11857.cljs$core$IFn$_invoke$arity$1 ? inst_11857.cljs$core$IFn$_invoke$arity$1(inst_11863) : inst_11857.call(null,inst_11863));var inst_11882 = cljs.core.not(inst_11881);var inst_11883 = (inst_11880) && (inst_11882);var state_11898__$1 = state_11898;var statearr_11926_11961 = state_11898__$1;(statearr_11926_11961[2] = inst_11883);
(statearr_11926_11961[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 19))
{var inst_11885 = (state_11898[2]);var state_11898__$1 = state_11898;if(cljs.core.truth_(inst_11885))
{var statearr_11927_11962 = state_11898__$1;(statearr_11927_11962[1] = 20);
} else
{var statearr_11928_11963 = state_11898__$1;(statearr_11928_11963[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 20))
{var inst_11862 = (state_11898[15]);var state_11898__$1 = state_11898;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_11898__$1,23,out,inst_11862);
} else
{if((state_val_11899 === 21))
{var state_11898__$1 = state_11898;var statearr_11929_11964 = state_11898__$1;(statearr_11929_11964[2] = null);
(statearr_11929_11964[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 22))
{var inst_11855 = (state_11898[12]);var inst_11891 = (state_11898[2]);var inst_11847 = inst_11855;var state_11898__$1 = (function (){var statearr_11930 = state_11898;(statearr_11930[19] = inst_11891);
(statearr_11930[11] = inst_11847);
return statearr_11930;
})();var statearr_11931_11965 = state_11898__$1;(statearr_11931_11965[2] = null);
(statearr_11931_11965[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 23))
{var inst_11888 = (state_11898[2]);var state_11898__$1 = state_11898;var statearr_11932_11966 = state_11898__$1;(statearr_11932_11966[2] = inst_11888);
(statearr_11932_11966[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_11936 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11936[0] = state_machine__7276__auto__);
(statearr_11936[1] = 1);
return statearr_11936;
});
var state_machine__7276__auto____1 = (function (state_11898){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_11898);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e11937){if((e11937 instanceof Object))
{var ex__7279__auto__ = e11937;var statearr_11938_11967 = state_11898;(statearr_11938_11967[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_11898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11968 = state_11898;
state_11898 = G__11968;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_11898){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_11898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_11939 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_11939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___11940);
return statearr_11939;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_(mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_(mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_(mix,mode);
});
cljs.core.async.Pub = (function (){var obj11970 = {};return obj11970;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4114__auto__ = p;if(and__4114__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4114__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4734__auto__ = (((p == null))?null:p);return (function (){var or__4126__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4114__auto__ = p;if(and__4114__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4734__auto__ = (((p == null))?null:p);return (function (){var or__4126__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4114__auto__ = p;if(and__4114__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4734__auto__ = (((p == null))?null:p);return (function (){var or__4126__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4114__auto__ = p;if(and__4114__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4114__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4734__auto__ = (((p == null))?null:p);return (function (){var or__4126__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4734__auto__)]);if(or__4126__auto__)
{return or__4126__auto__;
} else
{var or__4126__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4126__auto____$1)
{return or__4126__auto____$1;
} else
{throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4126__auto__,mults){
return (function (p1__11971_SHARP_){if(cljs.core.truth_((p1__11971_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__11971_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__11971_SHARP_.call(null,topic))))
{return p1__11971_SHARP_;
} else
{return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__11971_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
});})(or__4126__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t12096 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12096 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta12097){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta12097 = meta12097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12096.cljs$lang$type = true;
cljs.core.async.t12096.cljs$lang$ctorStr = "cljs.core.async/t12096";
cljs.core.async.t12096.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4675__auto__,writer__4676__auto__,opt__4677__auto__){return cljs.core._write(writer__4676__auto__,"cljs.core.async/t12096");
});})(mults,ensure_mult))
;
cljs.core.async.t12096.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t12096.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t12096.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap(m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t12096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t12096.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t12096.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12096.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t12096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_12098){var self__ = this;
var _12098__$1 = this;return self__.meta12097;
});})(mults,ensure_mult))
;
cljs.core.async.t12096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_12098,meta12097__$1){var self__ = this;
var _12098__$1 = this;return (new cljs.core.async.t12096(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta12097__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t12096 = ((function (mults,ensure_mult){
return (function __GT_t12096(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12097){return (new cljs.core.async.t12096(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta12097));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t12096(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7345__auto___12220 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_12172){var state_val_12173 = (state_12172[1]);if((state_val_12173 === 1))
{var state_12172__$1 = state_12172;var statearr_12174_12221 = state_12172__$1;(statearr_12174_12221[2] = null);
(statearr_12174_12221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 2))
{var state_12172__$1 = state_12172;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12172__$1,4,ch);
} else
{if((state_val_12173 === 3))
{var inst_12170 = (state_12172[2]);var state_12172__$1 = state_12172;return cljs.core.async.impl.ioc_helpers.return_chan(state_12172__$1,inst_12170);
} else
{if((state_val_12173 === 4))
{var inst_12101 = (state_12172[7]);var inst_12101__$1 = (state_12172[2]);var inst_12102 = (inst_12101__$1 == null);var state_12172__$1 = (function (){var statearr_12175 = state_12172;(statearr_12175[7] = inst_12101__$1);
return statearr_12175;
})();if(cljs.core.truth_(inst_12102))
{var statearr_12176_12222 = state_12172__$1;(statearr_12176_12222[1] = 5);
} else
{var statearr_12177_12223 = state_12172__$1;(statearr_12177_12223[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 5))
{var inst_12108 = cljs.core.deref(mults);var inst_12109 = cljs.core.vals(inst_12108);var inst_12110 = cljs.core.seq(inst_12109);var inst_12111 = inst_12110;var inst_12112 = null;var inst_12113 = 0;var inst_12114 = 0;var state_12172__$1 = (function (){var statearr_12178 = state_12172;(statearr_12178[8] = inst_12114);
(statearr_12178[9] = inst_12113);
(statearr_12178[10] = inst_12112);
(statearr_12178[11] = inst_12111);
return statearr_12178;
})();var statearr_12179_12224 = state_12172__$1;(statearr_12179_12224[2] = null);
(statearr_12179_12224[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 6))
{var inst_12149 = (state_12172[12]);var inst_12151 = (state_12172[13]);var inst_12101 = (state_12172[7]);var inst_12149__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_12101) : topic_fn.call(null,inst_12101));var inst_12150 = cljs.core.deref(mults);var inst_12151__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_12150,inst_12149__$1);var state_12172__$1 = (function (){var statearr_12180 = state_12172;(statearr_12180[12] = inst_12149__$1);
(statearr_12180[13] = inst_12151__$1);
return statearr_12180;
})();if(cljs.core.truth_(inst_12151__$1))
{var statearr_12181_12225 = state_12172__$1;(statearr_12181_12225[1] = 19);
} else
{var statearr_12182_12226 = state_12172__$1;(statearr_12182_12226[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 7))
{var inst_12168 = (state_12172[2]);var state_12172__$1 = state_12172;var statearr_12183_12227 = state_12172__$1;(statearr_12183_12227[2] = inst_12168);
(statearr_12183_12227[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 8))
{var inst_12114 = (state_12172[8]);var inst_12113 = (state_12172[9]);var inst_12116 = (inst_12114 < inst_12113);var inst_12117 = inst_12116;var state_12172__$1 = state_12172;if(cljs.core.truth_(inst_12117))
{var statearr_12187_12228 = state_12172__$1;(statearr_12187_12228[1] = 10);
} else
{var statearr_12188_12229 = state_12172__$1;(statearr_12188_12229[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 9))
{var inst_12147 = (state_12172[2]);var state_12172__$1 = state_12172;var statearr_12189_12230 = state_12172__$1;(statearr_12189_12230[2] = inst_12147);
(statearr_12189_12230[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 10))
{var inst_12114 = (state_12172[8]);var inst_12113 = (state_12172[9]);var inst_12112 = (state_12172[10]);var inst_12111 = (state_12172[11]);var inst_12119 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_12112,inst_12114);var inst_12120 = cljs.core.async.muxch_STAR_(inst_12119);var inst_12121 = cljs.core.async.close_BANG_(inst_12120);var inst_12122 = (inst_12114 + 1);var tmp12184 = inst_12113;var tmp12185 = inst_12112;var tmp12186 = inst_12111;var inst_12111__$1 = tmp12186;var inst_12112__$1 = tmp12185;var inst_12113__$1 = tmp12184;var inst_12114__$1 = inst_12122;var state_12172__$1 = (function (){var statearr_12190 = state_12172;(statearr_12190[8] = inst_12114__$1);
(statearr_12190[9] = inst_12113__$1);
(statearr_12190[10] = inst_12112__$1);
(statearr_12190[11] = inst_12111__$1);
(statearr_12190[14] = inst_12121);
return statearr_12190;
})();var statearr_12191_12231 = state_12172__$1;(statearr_12191_12231[2] = null);
(statearr_12191_12231[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 11))
{var inst_12111 = (state_12172[11]);var inst_12125 = (state_12172[15]);var inst_12125__$1 = cljs.core.seq(inst_12111);var state_12172__$1 = (function (){var statearr_12192 = state_12172;(statearr_12192[15] = inst_12125__$1);
return statearr_12192;
})();if(inst_12125__$1)
{var statearr_12193_12232 = state_12172__$1;(statearr_12193_12232[1] = 13);
} else
{var statearr_12194_12233 = state_12172__$1;(statearr_12194_12233[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 12))
{var inst_12145 = (state_12172[2]);var state_12172__$1 = state_12172;var statearr_12195_12234 = state_12172__$1;(statearr_12195_12234[2] = inst_12145);
(statearr_12195_12234[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 13))
{var inst_12125 = (state_12172[15]);var inst_12127 = cljs.core.chunked_seq_QMARK_(inst_12125);var state_12172__$1 = state_12172;if(inst_12127)
{var statearr_12196_12235 = state_12172__$1;(statearr_12196_12235[1] = 16);
} else
{var statearr_12197_12236 = state_12172__$1;(statearr_12197_12236[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 14))
{var state_12172__$1 = state_12172;var statearr_12198_12237 = state_12172__$1;(statearr_12198_12237[2] = null);
(statearr_12198_12237[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 15))
{var inst_12143 = (state_12172[2]);var state_12172__$1 = state_12172;var statearr_12199_12238 = state_12172__$1;(statearr_12199_12238[2] = inst_12143);
(statearr_12199_12238[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 16))
{var inst_12125 = (state_12172[15]);var inst_12129 = cljs.core.chunk_first(inst_12125);var inst_12130 = cljs.core.chunk_rest(inst_12125);var inst_12131 = cljs.core.count(inst_12129);var inst_12111 = inst_12130;var inst_12112 = inst_12129;var inst_12113 = inst_12131;var inst_12114 = 0;var state_12172__$1 = (function (){var statearr_12200 = state_12172;(statearr_12200[8] = inst_12114);
(statearr_12200[9] = inst_12113);
(statearr_12200[10] = inst_12112);
(statearr_12200[11] = inst_12111);
return statearr_12200;
})();var statearr_12201_12239 = state_12172__$1;(statearr_12201_12239[2] = null);
(statearr_12201_12239[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 17))
{var inst_12125 = (state_12172[15]);var inst_12134 = cljs.core.first(inst_12125);var inst_12135 = cljs.core.async.muxch_STAR_(inst_12134);var inst_12136 = cljs.core.async.close_BANG_(inst_12135);var inst_12137 = cljs.core.next(inst_12125);var inst_12111 = inst_12137;var inst_12112 = null;var inst_12113 = 0;var inst_12114 = 0;var state_12172__$1 = (function (){var statearr_12202 = state_12172;(statearr_12202[8] = inst_12114);
(statearr_12202[9] = inst_12113);
(statearr_12202[10] = inst_12112);
(statearr_12202[11] = inst_12111);
(statearr_12202[16] = inst_12136);
return statearr_12202;
})();var statearr_12203_12240 = state_12172__$1;(statearr_12203_12240[2] = null);
(statearr_12203_12240[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 18))
{var inst_12140 = (state_12172[2]);var state_12172__$1 = state_12172;var statearr_12204_12241 = state_12172__$1;(statearr_12204_12241[2] = inst_12140);
(statearr_12204_12241[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 19))
{var state_12172__$1 = state_12172;var statearr_12205_12242 = state_12172__$1;(statearr_12205_12242[2] = null);
(statearr_12205_12242[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 20))
{var state_12172__$1 = state_12172;var statearr_12206_12243 = state_12172__$1;(statearr_12206_12243[2] = null);
(statearr_12206_12243[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 21))
{var inst_12165 = (state_12172[2]);var state_12172__$1 = (function (){var statearr_12207 = state_12172;(statearr_12207[17] = inst_12165);
return statearr_12207;
})();var statearr_12208_12244 = state_12172__$1;(statearr_12208_12244[2] = null);
(statearr_12208_12244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 22))
{var inst_12162 = (state_12172[2]);var state_12172__$1 = state_12172;var statearr_12209_12245 = state_12172__$1;(statearr_12209_12245[2] = inst_12162);
(statearr_12209_12245[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 23))
{var inst_12149 = (state_12172[12]);var inst_12153 = (state_12172[2]);var inst_12154 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_12149);var state_12172__$1 = (function (){var statearr_12210 = state_12172;(statearr_12210[18] = inst_12153);
return statearr_12210;
})();var statearr_12211_12246 = state_12172__$1;(statearr_12211_12246[2] = inst_12154);
cljs.core.async.impl.ioc_helpers.process_exception(state_12172__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12173 === 24))
{var inst_12151 = (state_12172[13]);var inst_12101 = (state_12172[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_12172,23,Object,null,22);var inst_12158 = cljs.core.async.muxch_STAR_(inst_12151);var state_12172__$1 = state_12172;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12172__$1,25,inst_12158,inst_12101);
} else
{if((state_val_12173 === 25))
{var inst_12160 = (state_12172[2]);var state_12172__$1 = state_12172;var statearr_12212_12247 = state_12172__$1;(statearr_12212_12247[2] = inst_12160);
cljs.core.async.impl.ioc_helpers.process_exception(state_12172__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_12216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12216[0] = state_machine__7276__auto__);
(statearr_12216[1] = 1);
return statearr_12216;
});
var state_machine__7276__auto____1 = (function (state_12172){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_12172);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e12217){if((e12217 instanceof Object))
{var ex__7279__auto__ = e12217;var statearr_12218_12248 = state_12172;(statearr_12218_12248[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12172);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12249 = state_12172;
state_12172 = G__12249;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_12172){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_12172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_12219 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_12219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___12220);
return statearr_12219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec(chs);var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var cnt = cljs.core.count(chs__$1);var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));var c__7345__auto___12386 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_12356){var state_val_12357 = (state_12356[1]);if((state_val_12357 === 1))
{var state_12356__$1 = state_12356;var statearr_12358_12387 = state_12356__$1;(statearr_12358_12387[2] = null);
(statearr_12358_12387[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 2))
{var inst_12319 = cljs.core.reset_BANG_(dctr,cnt);var inst_12320 = 0;var state_12356__$1 = (function (){var statearr_12359 = state_12356;(statearr_12359[7] = inst_12319);
(statearr_12359[8] = inst_12320);
return statearr_12359;
})();var statearr_12360_12388 = state_12356__$1;(statearr_12360_12388[2] = null);
(statearr_12360_12388[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 3))
{var inst_12354 = (state_12356[2]);var state_12356__$1 = state_12356;return cljs.core.async.impl.ioc_helpers.return_chan(state_12356__$1,inst_12354);
} else
{if((state_val_12357 === 4))
{var inst_12320 = (state_12356[8]);var inst_12322 = (inst_12320 < cnt);var state_12356__$1 = state_12356;if(cljs.core.truth_(inst_12322))
{var statearr_12361_12389 = state_12356__$1;(statearr_12361_12389[1] = 6);
} else
{var statearr_12362_12390 = state_12356__$1;(statearr_12362_12390[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 5))
{var inst_12340 = (state_12356[2]);var state_12356__$1 = (function (){var statearr_12363 = state_12356;(statearr_12363[9] = inst_12340);
return statearr_12363;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12356__$1,12,dchan);
} else
{if((state_val_12357 === 6))
{var state_12356__$1 = state_12356;var statearr_12364_12391 = state_12356__$1;(statearr_12364_12391[2] = null);
(statearr_12364_12391[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 7))
{var state_12356__$1 = state_12356;var statearr_12365_12392 = state_12356__$1;(statearr_12365_12392[2] = null);
(statearr_12365_12392[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 8))
{var inst_12338 = (state_12356[2]);var state_12356__$1 = state_12356;var statearr_12366_12393 = state_12356__$1;(statearr_12366_12393[2] = inst_12338);
(statearr_12366_12393[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 9))
{var inst_12320 = (state_12356[8]);var inst_12333 = (state_12356[2]);var inst_12334 = (inst_12320 + 1);var inst_12320__$1 = inst_12334;var state_12356__$1 = (function (){var statearr_12367 = state_12356;(statearr_12367[8] = inst_12320__$1);
(statearr_12367[10] = inst_12333);
return statearr_12367;
})();var statearr_12368_12394 = state_12356__$1;(statearr_12368_12394[2] = null);
(statearr_12368_12394[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 10))
{var inst_12324 = (state_12356[2]);var inst_12325 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);var state_12356__$1 = (function (){var statearr_12369 = state_12356;(statearr_12369[11] = inst_12324);
return statearr_12369;
})();var statearr_12370_12395 = state_12356__$1;(statearr_12370_12395[2] = inst_12325);
cljs.core.async.impl.ioc_helpers.process_exception(state_12356__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 11))
{var inst_12320 = (state_12356[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_12356,10,Object,null,9);var inst_12329 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_12320) : chs__$1.call(null,inst_12320));var inst_12330 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_12320) : done.call(null,inst_12320));var inst_12331 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_12329,inst_12330);var state_12356__$1 = state_12356;var statearr_12371_12396 = state_12356__$1;(statearr_12371_12396[2] = inst_12331);
cljs.core.async.impl.ioc_helpers.process_exception(state_12356__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 12))
{var inst_12342 = (state_12356[12]);var inst_12342__$1 = (state_12356[2]);var inst_12343 = cljs.core.some(cljs.core.nil_QMARK_,inst_12342__$1);var state_12356__$1 = (function (){var statearr_12372 = state_12356;(statearr_12372[12] = inst_12342__$1);
return statearr_12372;
})();if(cljs.core.truth_(inst_12343))
{var statearr_12373_12397 = state_12356__$1;(statearr_12373_12397[1] = 13);
} else
{var statearr_12374_12398 = state_12356__$1;(statearr_12374_12398[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 13))
{var inst_12345 = cljs.core.async.close_BANG_(out);var state_12356__$1 = state_12356;var statearr_12375_12399 = state_12356__$1;(statearr_12375_12399[2] = inst_12345);
(statearr_12375_12399[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 14))
{var inst_12342 = (state_12356[12]);var inst_12347 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_12342);var state_12356__$1 = state_12356;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12356__$1,16,out,inst_12347);
} else
{if((state_val_12357 === 15))
{var inst_12352 = (state_12356[2]);var state_12356__$1 = state_12356;var statearr_12376_12400 = state_12356__$1;(statearr_12376_12400[2] = inst_12352);
(statearr_12376_12400[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12357 === 16))
{var inst_12349 = (state_12356[2]);var state_12356__$1 = (function (){var statearr_12377 = state_12356;(statearr_12377[13] = inst_12349);
return statearr_12377;
})();var statearr_12378_12401 = state_12356__$1;(statearr_12378_12401[2] = null);
(statearr_12378_12401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_12382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12382[0] = state_machine__7276__auto__);
(statearr_12382[1] = 1);
return statearr_12382;
});
var state_machine__7276__auto____1 = (function (state_12356){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_12356);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e12383){if((e12383 instanceof Object))
{var ex__7279__auto__ = e12383;var statearr_12384_12402 = state_12356;(statearr_12384_12402[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12356);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12383;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12403 = state_12356;
state_12356 = G__12403;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_12356){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_12356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_12385 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_12385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___12386);
return statearr_12385;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__7345__auto___12511 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_12487){var state_val_12488 = (state_12487[1]);if((state_val_12488 === 1))
{var inst_12458 = cljs.core.vec(chs);var inst_12459 = inst_12458;var state_12487__$1 = (function (){var statearr_12489 = state_12487;(statearr_12489[7] = inst_12459);
return statearr_12489;
})();var statearr_12490_12512 = state_12487__$1;(statearr_12490_12512[2] = null);
(statearr_12490_12512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 2))
{var inst_12459 = (state_12487[7]);var inst_12461 = cljs.core.count(inst_12459);var inst_12462 = (inst_12461 > 0);var state_12487__$1 = state_12487;if(cljs.core.truth_(inst_12462))
{var statearr_12491_12513 = state_12487__$1;(statearr_12491_12513[1] = 4);
} else
{var statearr_12492_12514 = state_12487__$1;(statearr_12492_12514[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 3))
{var inst_12485 = (state_12487[2]);var state_12487__$1 = state_12487;return cljs.core.async.impl.ioc_helpers.return_chan(state_12487__$1,inst_12485);
} else
{if((state_val_12488 === 4))
{var inst_12459 = (state_12487[7]);var state_12487__$1 = state_12487;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_(state_12487__$1,7,inst_12459);
} else
{if((state_val_12488 === 5))
{var inst_12481 = cljs.core.async.close_BANG_(out);var state_12487__$1 = state_12487;var statearr_12493_12515 = state_12487__$1;(statearr_12493_12515[2] = inst_12481);
(statearr_12493_12515[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 6))
{var inst_12483 = (state_12487[2]);var state_12487__$1 = state_12487;var statearr_12494_12516 = state_12487__$1;(statearr_12494_12516[2] = inst_12483);
(statearr_12494_12516[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 7))
{var inst_12467 = (state_12487[8]);var inst_12466 = (state_12487[9]);var inst_12466__$1 = (state_12487[2]);var inst_12467__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12466__$1,0,null);var inst_12468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_12466__$1,1,null);var inst_12469 = (inst_12467__$1 == null);var state_12487__$1 = (function (){var statearr_12495 = state_12487;(statearr_12495[10] = inst_12468);
(statearr_12495[8] = inst_12467__$1);
(statearr_12495[9] = inst_12466__$1);
return statearr_12495;
})();if(cljs.core.truth_(inst_12469))
{var statearr_12496_12517 = state_12487__$1;(statearr_12496_12517[1] = 8);
} else
{var statearr_12497_12518 = state_12487__$1;(statearr_12497_12518[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 8))
{var inst_12468 = (state_12487[10]);var inst_12467 = (state_12487[8]);var inst_12466 = (state_12487[9]);var inst_12459 = (state_12487[7]);var inst_12471 = (function (){var c = inst_12468;var v = inst_12467;var vec__12464 = inst_12466;var cs = inst_12459;return ((function (c,v,vec__12464,cs,inst_12468,inst_12467,inst_12466,inst_12459,state_val_12488){
return (function (p1__12404_SHARP_){return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__12404_SHARP_);
});
;})(c,v,vec__12464,cs,inst_12468,inst_12467,inst_12466,inst_12459,state_val_12488))
})();var inst_12472 = cljs.core.filterv(inst_12471,inst_12459);var inst_12459__$1 = inst_12472;var state_12487__$1 = (function (){var statearr_12498 = state_12487;(statearr_12498[7] = inst_12459__$1);
return statearr_12498;
})();var statearr_12499_12519 = state_12487__$1;(statearr_12499_12519[2] = null);
(statearr_12499_12519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 9))
{var inst_12467 = (state_12487[8]);var state_12487__$1 = state_12487;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12487__$1,11,out,inst_12467);
} else
{if((state_val_12488 === 10))
{var inst_12479 = (state_12487[2]);var state_12487__$1 = state_12487;var statearr_12501_12520 = state_12487__$1;(statearr_12501_12520[2] = inst_12479);
(statearr_12501_12520[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12488 === 11))
{var inst_12459 = (state_12487[7]);var inst_12476 = (state_12487[2]);var tmp12500 = inst_12459;var inst_12459__$1 = tmp12500;var state_12487__$1 = (function (){var statearr_12502 = state_12487;(statearr_12502[11] = inst_12476);
(statearr_12502[7] = inst_12459__$1);
return statearr_12502;
})();var statearr_12503_12521 = state_12487__$1;(statearr_12503_12521[2] = null);
(statearr_12503_12521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_12507 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12507[0] = state_machine__7276__auto__);
(statearr_12507[1] = 1);
return statearr_12507;
});
var state_machine__7276__auto____1 = (function (state_12487){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_12487);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e12508){if((e12508 instanceof Object))
{var ex__7279__auto__ = e12508;var statearr_12509_12522 = state_12487;(statearr_12509_12522[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12487);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12523 = state_12487;
state_12487 = G__12523;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_12487){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_12487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_12510 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_12510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___12511);
return statearr_12510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__7345__auto___12616 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_12593){var state_val_12594 = (state_12593[1]);if((state_val_12594 === 1))
{var inst_12570 = 0;var state_12593__$1 = (function (){var statearr_12595 = state_12593;(statearr_12595[7] = inst_12570);
return statearr_12595;
})();var statearr_12596_12617 = state_12593__$1;(statearr_12596_12617[2] = null);
(statearr_12596_12617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 2))
{var inst_12570 = (state_12593[7]);var inst_12572 = (inst_12570 < n);var state_12593__$1 = state_12593;if(cljs.core.truth_(inst_12572))
{var statearr_12597_12618 = state_12593__$1;(statearr_12597_12618[1] = 4);
} else
{var statearr_12598_12619 = state_12593__$1;(statearr_12598_12619[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 3))
{var inst_12590 = (state_12593[2]);var inst_12591 = cljs.core.async.close_BANG_(out);var state_12593__$1 = (function (){var statearr_12599 = state_12593;(statearr_12599[8] = inst_12590);
return statearr_12599;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_12593__$1,inst_12591);
} else
{if((state_val_12594 === 4))
{var state_12593__$1 = state_12593;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12593__$1,7,ch);
} else
{if((state_val_12594 === 5))
{var state_12593__$1 = state_12593;var statearr_12600_12620 = state_12593__$1;(statearr_12600_12620[2] = null);
(statearr_12600_12620[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 6))
{var inst_12588 = (state_12593[2]);var state_12593__$1 = state_12593;var statearr_12601_12621 = state_12593__$1;(statearr_12601_12621[2] = inst_12588);
(statearr_12601_12621[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 7))
{var inst_12575 = (state_12593[9]);var inst_12575__$1 = (state_12593[2]);var inst_12576 = (inst_12575__$1 == null);var inst_12577 = cljs.core.not(inst_12576);var state_12593__$1 = (function (){var statearr_12602 = state_12593;(statearr_12602[9] = inst_12575__$1);
return statearr_12602;
})();if(inst_12577)
{var statearr_12603_12622 = state_12593__$1;(statearr_12603_12622[1] = 8);
} else
{var statearr_12604_12623 = state_12593__$1;(statearr_12604_12623[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 8))
{var inst_12575 = (state_12593[9]);var state_12593__$1 = state_12593;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12593__$1,11,out,inst_12575);
} else
{if((state_val_12594 === 9))
{var state_12593__$1 = state_12593;var statearr_12605_12624 = state_12593__$1;(statearr_12605_12624[2] = null);
(statearr_12605_12624[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 10))
{var inst_12585 = (state_12593[2]);var state_12593__$1 = state_12593;var statearr_12606_12625 = state_12593__$1;(statearr_12606_12625[2] = inst_12585);
(statearr_12606_12625[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12594 === 11))
{var inst_12570 = (state_12593[7]);var inst_12580 = (state_12593[2]);var inst_12581 = (inst_12570 + 1);var inst_12570__$1 = inst_12581;var state_12593__$1 = (function (){var statearr_12607 = state_12593;(statearr_12607[10] = inst_12580);
(statearr_12607[7] = inst_12570__$1);
return statearr_12607;
})();var statearr_12608_12626 = state_12593__$1;(statearr_12608_12626[2] = null);
(statearr_12608_12626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_12612 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12612[0] = state_machine__7276__auto__);
(statearr_12612[1] = 1);
return statearr_12612;
});
var state_machine__7276__auto____1 = (function (state_12593){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_12593);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e12613){if((e12613 instanceof Object))
{var ex__7279__auto__ = e12613;var statearr_12614_12627 = state_12593;(statearr_12614_12627[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12593);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12628 = state_12593;
state_12593 = G__12628;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_12593){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_12593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_12615 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_12615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___12616);
return statearr_12615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__7345__auto___12725 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_12700){var state_val_12701 = (state_12700[1]);if((state_val_12701 === 1))
{var inst_12677 = null;var state_12700__$1 = (function (){var statearr_12702 = state_12700;(statearr_12702[7] = inst_12677);
return statearr_12702;
})();var statearr_12703_12726 = state_12700__$1;(statearr_12703_12726[2] = null);
(statearr_12703_12726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 2))
{var state_12700__$1 = state_12700;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12700__$1,4,ch);
} else
{if((state_val_12701 === 3))
{var inst_12697 = (state_12700[2]);var inst_12698 = cljs.core.async.close_BANG_(out);var state_12700__$1 = (function (){var statearr_12704 = state_12700;(statearr_12704[8] = inst_12697);
return statearr_12704;
})();return cljs.core.async.impl.ioc_helpers.return_chan(state_12700__$1,inst_12698);
} else
{if((state_val_12701 === 4))
{var inst_12680 = (state_12700[9]);var inst_12680__$1 = (state_12700[2]);var inst_12681 = (inst_12680__$1 == null);var inst_12682 = cljs.core.not(inst_12681);var state_12700__$1 = (function (){var statearr_12705 = state_12700;(statearr_12705[9] = inst_12680__$1);
return statearr_12705;
})();if(inst_12682)
{var statearr_12706_12727 = state_12700__$1;(statearr_12706_12727[1] = 5);
} else
{var statearr_12707_12728 = state_12700__$1;(statearr_12707_12728[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 5))
{var inst_12680 = (state_12700[9]);var inst_12677 = (state_12700[7]);var inst_12684 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12680,inst_12677);var state_12700__$1 = state_12700;if(inst_12684)
{var statearr_12708_12729 = state_12700__$1;(statearr_12708_12729[1] = 8);
} else
{var statearr_12709_12730 = state_12700__$1;(statearr_12709_12730[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 6))
{var state_12700__$1 = state_12700;var statearr_12711_12731 = state_12700__$1;(statearr_12711_12731[2] = null);
(statearr_12711_12731[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 7))
{var inst_12695 = (state_12700[2]);var state_12700__$1 = state_12700;var statearr_12712_12732 = state_12700__$1;(statearr_12712_12732[2] = inst_12695);
(statearr_12712_12732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 8))
{var inst_12677 = (state_12700[7]);var tmp12710 = inst_12677;var inst_12677__$1 = tmp12710;var state_12700__$1 = (function (){var statearr_12713 = state_12700;(statearr_12713[7] = inst_12677__$1);
return statearr_12713;
})();var statearr_12714_12733 = state_12700__$1;(statearr_12714_12733[2] = null);
(statearr_12714_12733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 9))
{var inst_12680 = (state_12700[9]);var state_12700__$1 = state_12700;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12700__$1,11,out,inst_12680);
} else
{if((state_val_12701 === 10))
{var inst_12692 = (state_12700[2]);var state_12700__$1 = state_12700;var statearr_12715_12734 = state_12700__$1;(statearr_12715_12734[2] = inst_12692);
(statearr_12715_12734[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12701 === 11))
{var inst_12680 = (state_12700[9]);var inst_12689 = (state_12700[2]);var inst_12677 = inst_12680;var state_12700__$1 = (function (){var statearr_12716 = state_12700;(statearr_12716[10] = inst_12689);
(statearr_12716[7] = inst_12677);
return statearr_12716;
})();var statearr_12717_12735 = state_12700__$1;(statearr_12717_12735[2] = null);
(statearr_12717_12735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_12721 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12721[0] = state_machine__7276__auto__);
(statearr_12721[1] = 1);
return statearr_12721;
});
var state_machine__7276__auto____1 = (function (state_12700){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_12700);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e12722){if((e12722 instanceof Object))
{var ex__7279__auto__ = e12722;var statearr_12723_12736 = state_12700;(statearr_12723_12736[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12700);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12722;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12737 = state_12700;
state_12700 = G__12737;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_12700){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_12700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_12724 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_12724[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___12725);
return statearr_12724;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__7345__auto___12872 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_12842){var state_val_12843 = (state_12842[1]);if((state_val_12843 === 1))
{var inst_12805 = (new Array(n));var inst_12806 = inst_12805;var inst_12807 = 0;var state_12842__$1 = (function (){var statearr_12844 = state_12842;(statearr_12844[7] = inst_12806);
(statearr_12844[8] = inst_12807);
return statearr_12844;
})();var statearr_12845_12873 = state_12842__$1;(statearr_12845_12873[2] = null);
(statearr_12845_12873[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 2))
{var state_12842__$1 = state_12842;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_12842__$1,4,ch);
} else
{if((state_val_12843 === 3))
{var inst_12840 = (state_12842[2]);var state_12842__$1 = state_12842;return cljs.core.async.impl.ioc_helpers.return_chan(state_12842__$1,inst_12840);
} else
{if((state_val_12843 === 4))
{var inst_12810 = (state_12842[9]);var inst_12810__$1 = (state_12842[2]);var inst_12811 = (inst_12810__$1 == null);var inst_12812 = cljs.core.not(inst_12811);var state_12842__$1 = (function (){var statearr_12846 = state_12842;(statearr_12846[9] = inst_12810__$1);
return statearr_12846;
})();if(inst_12812)
{var statearr_12847_12874 = state_12842__$1;(statearr_12847_12874[1] = 5);
} else
{var statearr_12848_12875 = state_12842__$1;(statearr_12848_12875[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 5))
{var inst_12810 = (state_12842[9]);var inst_12806 = (state_12842[7]);var inst_12807 = (state_12842[8]);var inst_12815 = (state_12842[10]);var inst_12814 = (inst_12806[inst_12807] = inst_12810);var inst_12815__$1 = (inst_12807 + 1);var inst_12816 = (inst_12815__$1 < n);var state_12842__$1 = (function (){var statearr_12849 = state_12842;(statearr_12849[11] = inst_12814);
(statearr_12849[10] = inst_12815__$1);
return statearr_12849;
})();if(cljs.core.truth_(inst_12816))
{var statearr_12850_12876 = state_12842__$1;(statearr_12850_12876[1] = 8);
} else
{var statearr_12851_12877 = state_12842__$1;(statearr_12851_12877[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 6))
{var inst_12807 = (state_12842[8]);var inst_12828 = (inst_12807 > 0);var state_12842__$1 = state_12842;if(cljs.core.truth_(inst_12828))
{var statearr_12853_12878 = state_12842__$1;(statearr_12853_12878[1] = 12);
} else
{var statearr_12854_12879 = state_12842__$1;(statearr_12854_12879[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 7))
{var inst_12838 = (state_12842[2]);var state_12842__$1 = state_12842;var statearr_12855_12880 = state_12842__$1;(statearr_12855_12880[2] = inst_12838);
(statearr_12855_12880[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 8))
{var inst_12806 = (state_12842[7]);var inst_12815 = (state_12842[10]);var tmp12852 = inst_12806;var inst_12806__$1 = tmp12852;var inst_12807 = inst_12815;var state_12842__$1 = (function (){var statearr_12856 = state_12842;(statearr_12856[7] = inst_12806__$1);
(statearr_12856[8] = inst_12807);
return statearr_12856;
})();var statearr_12857_12881 = state_12842__$1;(statearr_12857_12881[2] = null);
(statearr_12857_12881[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 9))
{var inst_12806 = (state_12842[7]);var inst_12820 = cljs.core.vec(inst_12806);var state_12842__$1 = state_12842;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12842__$1,11,out,inst_12820);
} else
{if((state_val_12843 === 10))
{var inst_12826 = (state_12842[2]);var state_12842__$1 = state_12842;var statearr_12858_12882 = state_12842__$1;(statearr_12858_12882[2] = inst_12826);
(statearr_12858_12882[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 11))
{var inst_12822 = (state_12842[2]);var inst_12823 = (new Array(n));var inst_12806 = inst_12823;var inst_12807 = 0;var state_12842__$1 = (function (){var statearr_12859 = state_12842;(statearr_12859[12] = inst_12822);
(statearr_12859[7] = inst_12806);
(statearr_12859[8] = inst_12807);
return statearr_12859;
})();var statearr_12860_12883 = state_12842__$1;(statearr_12860_12883[2] = null);
(statearr_12860_12883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 12))
{var inst_12806 = (state_12842[7]);var inst_12830 = cljs.core.vec(inst_12806);var state_12842__$1 = state_12842;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_12842__$1,15,out,inst_12830);
} else
{if((state_val_12843 === 13))
{var state_12842__$1 = state_12842;var statearr_12861_12884 = state_12842__$1;(statearr_12861_12884[2] = null);
(statearr_12861_12884[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 14))
{var inst_12835 = (state_12842[2]);var inst_12836 = cljs.core.async.close_BANG_(out);var state_12842__$1 = (function (){var statearr_12862 = state_12842;(statearr_12862[13] = inst_12835);
return statearr_12862;
})();var statearr_12863_12885 = state_12842__$1;(statearr_12863_12885[2] = inst_12836);
(statearr_12863_12885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12843 === 15))
{var inst_12832 = (state_12842[2]);var state_12842__$1 = state_12842;var statearr_12864_12886 = state_12842__$1;(statearr_12864_12886[2] = inst_12832);
(statearr_12864_12886[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_12868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12868[0] = state_machine__7276__auto__);
(statearr_12868[1] = 1);
return statearr_12868;
});
var state_machine__7276__auto____1 = (function (state_12842){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_12842);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e12869){if((e12869 instanceof Object))
{var ex__7279__auto__ = e12869;var statearr_12870_12887 = state_12842;(statearr_12870_12887[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_12842);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12888 = state_12842;
state_12842 = G__12888;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_12842){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_12842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_12871 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_12871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___12872);
return statearr_12871;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);var c__7345__auto___13031 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(1);cljs.core.async.impl.dispatch.run((function (){var f__7346__auto__ = (function (){var switch__7275__auto__ = (function (state_13001){var state_val_13002 = (state_13001[1]);if((state_val_13002 === 1))
{var inst_12960 = [];var inst_12961 = inst_12960;var inst_12962 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_13001__$1 = (function (){var statearr_13003 = state_13001;(statearr_13003[7] = inst_12962);
(statearr_13003[8] = inst_12961);
return statearr_13003;
})();var statearr_13004_13032 = state_13001__$1;(statearr_13004_13032[2] = null);
(statearr_13004_13032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 2))
{var state_13001__$1 = state_13001;return cljs.core.async.impl.ioc_helpers.take_BANG_(state_13001__$1,4,ch);
} else
{if((state_val_13002 === 3))
{var inst_12999 = (state_13001[2]);var state_13001__$1 = state_13001;return cljs.core.async.impl.ioc_helpers.return_chan(state_13001__$1,inst_12999);
} else
{if((state_val_13002 === 4))
{var inst_12965 = (state_13001[9]);var inst_12965__$1 = (state_13001[2]);var inst_12966 = (inst_12965__$1 == null);var inst_12967 = cljs.core.not(inst_12966);var state_13001__$1 = (function (){var statearr_13005 = state_13001;(statearr_13005[9] = inst_12965__$1);
return statearr_13005;
})();if(inst_12967)
{var statearr_13006_13033 = state_13001__$1;(statearr_13006_13033[1] = 5);
} else
{var statearr_13007_13034 = state_13001__$1;(statearr_13007_13034[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 5))
{var inst_12969 = (state_13001[10]);var inst_12965 = (state_13001[9]);var inst_12962 = (state_13001[7]);var inst_12969__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_12965) : f.call(null,inst_12965));var inst_12970 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_12969__$1,inst_12962);var inst_12971 = cljs.core.keyword_identical_QMARK_(inst_12962,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12972 = (inst_12970) || (inst_12971);var state_13001__$1 = (function (){var statearr_13008 = state_13001;(statearr_13008[10] = inst_12969__$1);
return statearr_13008;
})();if(cljs.core.truth_(inst_12972))
{var statearr_13009_13035 = state_13001__$1;(statearr_13009_13035[1] = 8);
} else
{var statearr_13010_13036 = state_13001__$1;(statearr_13010_13036[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 6))
{var inst_12961 = (state_13001[8]);var inst_12986 = inst_12961.length;var inst_12987 = (inst_12986 > 0);var state_13001__$1 = state_13001;if(cljs.core.truth_(inst_12987))
{var statearr_13012_13037 = state_13001__$1;(statearr_13012_13037[1] = 12);
} else
{var statearr_13013_13038 = state_13001__$1;(statearr_13013_13038[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 7))
{var inst_12997 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13014_13039 = state_13001__$1;(statearr_13014_13039[2] = inst_12997);
(statearr_13014_13039[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 8))
{var inst_12969 = (state_13001[10]);var inst_12965 = (state_13001[9]);var inst_12961 = (state_13001[8]);var inst_12974 = inst_12961.push(inst_12965);var tmp13011 = inst_12961;var inst_12961__$1 = tmp13011;var inst_12962 = inst_12969;var state_13001__$1 = (function (){var statearr_13015 = state_13001;(statearr_13015[11] = inst_12974);
(statearr_13015[7] = inst_12962);
(statearr_13015[8] = inst_12961__$1);
return statearr_13015;
})();var statearr_13016_13040 = state_13001__$1;(statearr_13016_13040[2] = null);
(statearr_13016_13040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 9))
{var inst_12961 = (state_13001[8]);var inst_12977 = cljs.core.vec(inst_12961);var state_13001__$1 = state_13001;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13001__$1,11,out,inst_12977);
} else
{if((state_val_13002 === 10))
{var inst_12984 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13017_13041 = state_13001__$1;(statearr_13017_13041[2] = inst_12984);
(statearr_13017_13041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 11))
{var inst_12969 = (state_13001[10]);var inst_12965 = (state_13001[9]);var inst_12979 = (state_13001[2]);var inst_12980 = [];var inst_12981 = inst_12980.push(inst_12965);var inst_12961 = inst_12980;var inst_12962 = inst_12969;var state_13001__$1 = (function (){var statearr_13018 = state_13001;(statearr_13018[12] = inst_12981);
(statearr_13018[13] = inst_12979);
(statearr_13018[7] = inst_12962);
(statearr_13018[8] = inst_12961);
return statearr_13018;
})();var statearr_13019_13042 = state_13001__$1;(statearr_13019_13042[2] = null);
(statearr_13019_13042[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 12))
{var inst_12961 = (state_13001[8]);var inst_12989 = cljs.core.vec(inst_12961);var state_13001__$1 = state_13001;return cljs.core.async.impl.ioc_helpers.put_BANG_(state_13001__$1,15,out,inst_12989);
} else
{if((state_val_13002 === 13))
{var state_13001__$1 = state_13001;var statearr_13020_13043 = state_13001__$1;(statearr_13020_13043[2] = null);
(statearr_13020_13043[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 14))
{var inst_12994 = (state_13001[2]);var inst_12995 = cljs.core.async.close_BANG_(out);var state_13001__$1 = (function (){var statearr_13021 = state_13001;(statearr_13021[14] = inst_12994);
return statearr_13021;
})();var statearr_13022_13044 = state_13001__$1;(statearr_13022_13044[2] = inst_12995);
(statearr_13022_13044[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13002 === 15))
{var inst_12991 = (state_13001[2]);var state_13001__$1 = state_13001;var statearr_13023_13045 = state_13001__$1;(statearr_13023_13045[2] = inst_12991);
(statearr_13023_13045[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__7275__auto__){
return (function() {
var state_machine__7276__auto__ = null;
var state_machine__7276__auto____0 = (function (){var statearr_13027 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13027[0] = state_machine__7276__auto__);
(statearr_13027[1] = 1);
return statearr_13027;
});
var state_machine__7276__auto____1 = (function (state_13001){while(true){
var ret_value__7277__auto__ = (function (){try{while(true){
var result__7278__auto__ = switch__7275__auto__(state_13001);if(cljs.core.keyword_identical_QMARK_(result__7278__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__7278__auto__;
}
break;
}
}catch (e13028){if((e13028 instanceof Object))
{var ex__7279__auto__ = e13028;var statearr_13029_13046 = state_13001;(statearr_13029_13046[5] = ex__7279__auto__);
cljs.core.async.impl.ioc_helpers.process_exception(state_13001);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13028;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_(ret_value__7277__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13047 = state_13001;
state_13001 = G__13047;
continue;
}
} else
{return ret_value__7277__auto__;
}
break;
}
});
state_machine__7276__auto__ = function(state_13001){
switch(arguments.length){
case 0:
return state_machine__7276__auto____0.call(this);
case 1:
return state_machine__7276__auto____1.call(this,state_13001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7276__auto____0;
state_machine__7276__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7276__auto____1;
return state_machine__7276__auto__;
})()
;})(switch__7275__auto__))
})();var state__7347__auto__ = (function (){var statearr_13030 = (f__7346__auto__.cljs$core$IFn$_invoke$arity$0 ? f__7346__auto__.cljs$core$IFn$_invoke$arity$0() : f__7346__auto__.call(null));(statearr_13030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7345__auto___13031);
return statearr_13030;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__7347__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;
//# sourceMappingURL=async.js.map