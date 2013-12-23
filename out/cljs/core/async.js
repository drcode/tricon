// Compiled by ClojureScript 0.0-2127
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14965 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14965 = (function (f,fn_handler,meta14966){
this.f = f;
this.fn_handler = fn_handler;
this.meta14966 = meta14966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14965.cljs$lang$type = true;
cljs.core.async.t14965.cljs$lang$ctorStr = "cljs.core.async/t14965";
cljs.core.async.t14965.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t14965");
});
cljs.core.async.t14965.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14967){var self__ = this;
var _14967__$1 = this;return self__.meta14966;
});
cljs.core.async.t14965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14967,meta14966__$1){var self__ = this;
var _14967__$1 = this;return (new cljs.core.async.t14965(self__.f,self__.fn_handler,meta14966__$1));
});
cljs.core.async.__GT_t14965 = (function __GT_t14965(f__$1,fn_handler__$1,meta14966){return (new cljs.core.async.t14965(f__$1,fn_handler__$1,meta14966));
});
}
return (new cljs.core.async.t14965(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14969 = buff;if(G__14969)
{var bit__4036__auto__ = null;if(cljs.core.truth_((function (){var or__3405__auto__ = bit__4036__auto__;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return G__14969.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14969.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14969);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14969);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_14970 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14970);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_14970);
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3393__auto__ = ret;if(cljs.core.truth_(and__3393__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3393__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
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
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4233__auto___14971 = n;var x_14972 = 0;while(true){
if((x_14972 < n__4233__auto___14971))
{(a[x_14972] = 0);
{
var G__14973 = (x_14972 + 1);
x_14972 = G__14973;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__14974 = (i + 1);
i = G__14974;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14978 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14978 = (function (flag,alt_flag,meta14979){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14979 = meta14979;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14978.cljs$lang$type = true;
cljs.core.async.t14978.cljs$lang$ctorStr = "cljs.core.async/t14978";
cljs.core.async.t14978.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t14978");
});
cljs.core.async.t14978.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t14978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t14978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14980){var self__ = this;
var _14980__$1 = this;return self__.meta14979;
});
cljs.core.async.t14978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14980,meta14979__$1){var self__ = this;
var _14980__$1 = this;return (new cljs.core.async.t14978(self__.flag,self__.alt_flag,meta14979__$1));
});
cljs.core.async.__GT_t14978 = (function __GT_t14978(flag__$1,alt_flag__$1,meta14979){return (new cljs.core.async.t14978(flag__$1,alt_flag__$1,meta14979));
});
}
return (new cljs.core.async.t14978(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14984 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14984 = (function (cb,flag,alt_handler,meta14985){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14985 = meta14985;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14984.cljs$lang$type = true;
cljs.core.async.t14984.cljs$lang$ctorStr = "cljs.core.async/t14984";
cljs.core.async.t14984.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t14984");
});
cljs.core.async.t14984.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14984.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14984.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14986){var self__ = this;
var _14986__$1 = this;return self__.meta14985;
});
cljs.core.async.t14984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14986,meta14985__$1){var self__ = this;
var _14986__$1 = this;return (new cljs.core.async.t14984(self__.cb,self__.flag,self__.alt_handler,meta14985__$1));
});
cljs.core.async.__GT_t14984 = (function __GT_t14984(cb__$1,flag__$1,alt_handler__$1,meta14985){return (new cljs.core.async.t14984(cb__$1,flag__$1,alt_handler__$1,meta14985));
});
}
return (new cljs.core.async.t14984(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14987_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14987_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3405__auto__ = wport;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__14988 = (i + 1);
i = G__14988;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3405__auto__ = ret;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3393__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3393__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3393__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__14989){var map__14991 = p__14989;var map__14991__$1 = ((cljs.core.seq_QMARK_.call(null,map__14991))?cljs.core.apply.call(null,cljs.core.hash_map,map__14991):map__14991);var opts = map__14991__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14989 = null;if (arguments.length > 1) {
  p__14989 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14989);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14992){
var ports = cljs.core.first(arglist__14992);
var p__14989 = cljs.core.rest(arglist__14992);
return alts_BANG___delegate(ports,p__14989);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15000 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15000 = (function (ch,f,map_LT_,meta15001){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15001 = meta15001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15000.cljs$lang$type = true;
cljs.core.async.t15000.cljs$lang$ctorStr = "cljs.core.async/t15000";
cljs.core.async.t15000.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t15000");
});
cljs.core.async.t15000.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15000.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15003 = (function (fn1,_,meta15001,ch,f,map_LT_,meta15004){
this.fn1 = fn1;
this._ = _;
this.meta15001 = meta15001;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15004 = meta15004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15003.cljs$lang$type = true;
cljs.core.async.t15003.cljs$lang$ctorStr = "cljs.core.async/t15003";
cljs.core.async.t15003.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t15003");
});
cljs.core.async.t15003.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15003.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15003.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15003.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14993_SHARP_){return f1.call(null,(((p1__14993_SHARP_ == null))?null:self__.f.call(null,p1__14993_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15005){var self__ = this;
var _15005__$1 = this;return self__.meta15004;
});
cljs.core.async.t15003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15005,meta15004__$1){var self__ = this;
var _15005__$1 = this;return (new cljs.core.async.t15003(self__.fn1,self__._,self__.meta15001,self__.ch,self__.f,self__.map_LT_,meta15004__$1));
});
cljs.core.async.__GT_t15003 = (function __GT_t15003(fn1__$1,___$2,meta15001__$1,ch__$2,f__$2,map_LT___$2,meta15004){return (new cljs.core.async.t15003(fn1__$1,___$2,meta15001__$1,ch__$2,f__$2,map_LT___$2,meta15004));
});
}
return (new cljs.core.async.t15003(fn1,___$1,self__.meta15001,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3393__auto__ = ret;if(cljs.core.truth_(and__3393__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3393__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15000.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15002){var self__ = this;
var _15002__$1 = this;return self__.meta15001;
});
cljs.core.async.t15000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15002,meta15001__$1){var self__ = this;
var _15002__$1 = this;return (new cljs.core.async.t15000(self__.ch,self__.f,self__.map_LT_,meta15001__$1));
});
cljs.core.async.__GT_t15000 = (function __GT_t15000(ch__$1,f__$1,map_LT___$1,meta15001){return (new cljs.core.async.t15000(ch__$1,f__$1,map_LT___$1,meta15001));
});
}
return (new cljs.core.async.t15000(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15009 = (function (ch,f,map_GT_,meta15010){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15010 = meta15010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15009.cljs$lang$type = true;
cljs.core.async.t15009.cljs$lang$ctorStr = "cljs.core.async/t15009";
cljs.core.async.t15009.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t15009");
});
cljs.core.async.t15009.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15009.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15009.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15009.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15009.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15009.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15009.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15011){var self__ = this;
var _15011__$1 = this;return self__.meta15010;
});
cljs.core.async.t15009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15011,meta15010__$1){var self__ = this;
var _15011__$1 = this;return (new cljs.core.async.t15009(self__.ch,self__.f,self__.map_GT_,meta15010__$1));
});
cljs.core.async.__GT_t15009 = (function __GT_t15009(ch__$1,f__$1,map_GT___$1,meta15010){return (new cljs.core.async.t15009(ch__$1,f__$1,map_GT___$1,meta15010));
});
}
return (new cljs.core.async.t15009(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15015 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15015 = (function (ch,p,filter_GT_,meta15016){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15016 = meta15016;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15015.cljs$lang$type = true;
cljs.core.async.t15015.cljs$lang$ctorStr = "cljs.core.async/t15015";
cljs.core.async.t15015.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t15015");
});
cljs.core.async.t15015.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15015.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15015.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15015.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15015.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15015.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15017){var self__ = this;
var _15017__$1 = this;return self__.meta15016;
});
cljs.core.async.t15015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15017,meta15016__$1){var self__ = this;
var _15017__$1 = this;return (new cljs.core.async.t15015(self__.ch,self__.p,self__.filter_GT_,meta15016__$1));
});
cljs.core.async.__GT_t15015 = (function __GT_t15015(ch__$1,p__$1,filter_GT___$1,meta15016){return (new cljs.core.async.t15015(ch__$1,p__$1,filter_GT___$1,meta15016));
});
}
return (new cljs.core.async.t15015(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
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
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6652__auto___15100 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15079){var state_val_15080 = (state_15079[1]);if((state_val_15080 === 1))
{var state_15079__$1 = state_15079;var statearr_15081_15101 = state_15079__$1;(statearr_15081_15101[2] = null);
(statearr_15081_15101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 2))
{var state_15079__$1 = state_15079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15079__$1,4,ch);
} else
{if((state_val_15080 === 3))
{var inst_15077 = (state_15079[2]);var state_15079__$1 = state_15079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15079__$1,inst_15077);
} else
{if((state_val_15080 === 4))
{var inst_15061 = (state_15079[7]);var inst_15061__$1 = (state_15079[2]);var inst_15062 = (inst_15061__$1 == null);var state_15079__$1 = (function (){var statearr_15082 = state_15079;(statearr_15082[7] = inst_15061__$1);
return statearr_15082;
})();if(cljs.core.truth_(inst_15062))
{var statearr_15083_15102 = state_15079__$1;(statearr_15083_15102[1] = 5);
} else
{var statearr_15084_15103 = state_15079__$1;(statearr_15084_15103[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 5))
{var inst_15064 = cljs.core.async.close_BANG_.call(null,out);var state_15079__$1 = state_15079;var statearr_15085_15104 = state_15079__$1;(statearr_15085_15104[2] = inst_15064);
(statearr_15085_15104[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 6))
{var inst_15061 = (state_15079[7]);var inst_15066 = p.call(null,inst_15061);var state_15079__$1 = state_15079;if(cljs.core.truth_(inst_15066))
{var statearr_15086_15105 = state_15079__$1;(statearr_15086_15105[1] = 8);
} else
{var statearr_15087_15106 = state_15079__$1;(statearr_15087_15106[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 7))
{var inst_15075 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15088_15107 = state_15079__$1;(statearr_15088_15107[2] = inst_15075);
(statearr_15088_15107[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 8))
{var inst_15061 = (state_15079[7]);var state_15079__$1 = state_15079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15079__$1,11,out,inst_15061);
} else
{if((state_val_15080 === 9))
{var state_15079__$1 = state_15079;var statearr_15089_15108 = state_15079__$1;(statearr_15089_15108[2] = null);
(statearr_15089_15108[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 10))
{var inst_15072 = (state_15079[2]);var state_15079__$1 = (function (){var statearr_15090 = state_15079;(statearr_15090[8] = inst_15072);
return statearr_15090;
})();var statearr_15091_15109 = state_15079__$1;(statearr_15091_15109[2] = null);
(statearr_15091_15109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15080 === 11))
{var inst_15069 = (state_15079[2]);var state_15079__$1 = state_15079;var statearr_15092_15110 = state_15079__$1;(statearr_15092_15110[2] = inst_15069);
(statearr_15092_15110[1] = 10);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_15096 = [null,null,null,null,null,null,null,null,null];(statearr_15096[0] = state_machine__6583__auto__);
(statearr_15096[1] = 1);
return statearr_15096;
});
var state_machine__6583__auto____1 = (function (state_15079){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15097){if((e15097 instanceof Object))
{var ex__6586__auto__ = e15097;var statearr_15098_15111 = state_15079;(statearr_15098_15111[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15079);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15112 = state_15079;
state_15079 = G__15112;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15079){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15099 = f__6653__auto__.call(null);(statearr_15099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___15100);
return statearr_15099;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6652__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15264){var state_val_15265 = (state_15264[1]);if((state_val_15265 === 1))
{var state_15264__$1 = state_15264;var statearr_15266_15303 = state_15264__$1;(statearr_15266_15303[2] = null);
(statearr_15266_15303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 2))
{var state_15264__$1 = state_15264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15264__$1,4,in$);
} else
{if((state_val_15265 === 3))
{var inst_15262 = (state_15264[2]);var state_15264__$1 = state_15264;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15264__$1,inst_15262);
} else
{if((state_val_15265 === 4))
{var inst_15210 = (state_15264[7]);var inst_15210__$1 = (state_15264[2]);var inst_15211 = (inst_15210__$1 == null);var state_15264__$1 = (function (){var statearr_15267 = state_15264;(statearr_15267[7] = inst_15210__$1);
return statearr_15267;
})();if(cljs.core.truth_(inst_15211))
{var statearr_15268_15304 = state_15264__$1;(statearr_15268_15304[1] = 5);
} else
{var statearr_15269_15305 = state_15264__$1;(statearr_15269_15305[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 5))
{var inst_15213 = cljs.core.async.close_BANG_.call(null,out);var state_15264__$1 = state_15264;var statearr_15270_15306 = state_15264__$1;(statearr_15270_15306[2] = inst_15213);
(statearr_15270_15306[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 6))
{var inst_15210 = (state_15264[7]);var inst_15215 = f.call(null,inst_15210);var inst_15220 = cljs.core.seq.call(null,inst_15215);var inst_15221 = inst_15220;var inst_15222 = null;var inst_15223 = 0;var inst_15224 = 0;var state_15264__$1 = (function (){var statearr_15271 = state_15264;(statearr_15271[8] = inst_15223);
(statearr_15271[9] = inst_15224);
(statearr_15271[10] = inst_15221);
(statearr_15271[11] = inst_15222);
return statearr_15271;
})();var statearr_15272_15307 = state_15264__$1;(statearr_15272_15307[2] = null);
(statearr_15272_15307[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 7))
{var inst_15260 = (state_15264[2]);var state_15264__$1 = state_15264;var statearr_15273_15308 = state_15264__$1;(statearr_15273_15308[2] = inst_15260);
(statearr_15273_15308[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 8))
{var inst_15223 = (state_15264[8]);var inst_15224 = (state_15264[9]);var inst_15226 = (inst_15224 < inst_15223);var inst_15227 = inst_15226;var state_15264__$1 = state_15264;if(cljs.core.truth_(inst_15227))
{var statearr_15274_15309 = state_15264__$1;(statearr_15274_15309[1] = 10);
} else
{var statearr_15275_15310 = state_15264__$1;(statearr_15275_15310[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 9))
{var inst_15257 = (state_15264[2]);var state_15264__$1 = (function (){var statearr_15276 = state_15264;(statearr_15276[12] = inst_15257);
return statearr_15276;
})();var statearr_15277_15311 = state_15264__$1;(statearr_15277_15311[2] = null);
(statearr_15277_15311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 10))
{var inst_15224 = (state_15264[9]);var inst_15222 = (state_15264[11]);var inst_15229 = cljs.core._nth.call(null,inst_15222,inst_15224);var state_15264__$1 = state_15264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15264__$1,13,out,inst_15229);
} else
{if((state_val_15265 === 11))
{var inst_15221 = (state_15264[10]);var inst_15235 = (state_15264[13]);var inst_15235__$1 = cljs.core.seq.call(null,inst_15221);var state_15264__$1 = (function (){var statearr_15281 = state_15264;(statearr_15281[13] = inst_15235__$1);
return statearr_15281;
})();if(inst_15235__$1)
{var statearr_15282_15312 = state_15264__$1;(statearr_15282_15312[1] = 14);
} else
{var statearr_15283_15313 = state_15264__$1;(statearr_15283_15313[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 12))
{var inst_15255 = (state_15264[2]);var state_15264__$1 = state_15264;var statearr_15284_15314 = state_15264__$1;(statearr_15284_15314[2] = inst_15255);
(statearr_15284_15314[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 13))
{var inst_15223 = (state_15264[8]);var inst_15224 = (state_15264[9]);var inst_15221 = (state_15264[10]);var inst_15222 = (state_15264[11]);var inst_15231 = (state_15264[2]);var inst_15232 = (inst_15224 + 1);var tmp15278 = inst_15223;var tmp15279 = inst_15221;var tmp15280 = inst_15222;var inst_15221__$1 = tmp15279;var inst_15222__$1 = tmp15280;var inst_15223__$1 = tmp15278;var inst_15224__$1 = inst_15232;var state_15264__$1 = (function (){var statearr_15285 = state_15264;(statearr_15285[8] = inst_15223__$1);
(statearr_15285[9] = inst_15224__$1);
(statearr_15285[10] = inst_15221__$1);
(statearr_15285[11] = inst_15222__$1);
(statearr_15285[14] = inst_15231);
return statearr_15285;
})();var statearr_15286_15315 = state_15264__$1;(statearr_15286_15315[2] = null);
(statearr_15286_15315[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 14))
{var inst_15235 = (state_15264[13]);var inst_15237 = cljs.core.chunked_seq_QMARK_.call(null,inst_15235);var state_15264__$1 = state_15264;if(inst_15237)
{var statearr_15287_15316 = state_15264__$1;(statearr_15287_15316[1] = 17);
} else
{var statearr_15288_15317 = state_15264__$1;(statearr_15288_15317[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 15))
{var state_15264__$1 = state_15264;var statearr_15289_15318 = state_15264__$1;(statearr_15289_15318[2] = null);
(statearr_15289_15318[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 16))
{var inst_15253 = (state_15264[2]);var state_15264__$1 = state_15264;var statearr_15290_15319 = state_15264__$1;(statearr_15290_15319[2] = inst_15253);
(statearr_15290_15319[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 17))
{var inst_15235 = (state_15264[13]);var inst_15239 = cljs.core.chunk_first.call(null,inst_15235);var inst_15240 = cljs.core.chunk_rest.call(null,inst_15235);var inst_15241 = cljs.core.count.call(null,inst_15239);var inst_15221 = inst_15240;var inst_15222 = inst_15239;var inst_15223 = inst_15241;var inst_15224 = 0;var state_15264__$1 = (function (){var statearr_15291 = state_15264;(statearr_15291[8] = inst_15223);
(statearr_15291[9] = inst_15224);
(statearr_15291[10] = inst_15221);
(statearr_15291[11] = inst_15222);
return statearr_15291;
})();var statearr_15292_15320 = state_15264__$1;(statearr_15292_15320[2] = null);
(statearr_15292_15320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 18))
{var inst_15235 = (state_15264[13]);var inst_15244 = cljs.core.first.call(null,inst_15235);var state_15264__$1 = state_15264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15264__$1,20,out,inst_15244);
} else
{if((state_val_15265 === 19))
{var inst_15250 = (state_15264[2]);var state_15264__$1 = state_15264;var statearr_15293_15321 = state_15264__$1;(statearr_15293_15321[2] = inst_15250);
(statearr_15293_15321[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 20))
{var inst_15235 = (state_15264[13]);var inst_15246 = (state_15264[2]);var inst_15247 = cljs.core.next.call(null,inst_15235);var inst_15221 = inst_15247;var inst_15222 = null;var inst_15223 = 0;var inst_15224 = 0;var state_15264__$1 = (function (){var statearr_15294 = state_15264;(statearr_15294[8] = inst_15223);
(statearr_15294[9] = inst_15224);
(statearr_15294[10] = inst_15221);
(statearr_15294[11] = inst_15222);
(statearr_15294[15] = inst_15246);
return statearr_15294;
})();var statearr_15295_15322 = state_15264__$1;(statearr_15295_15322[2] = null);
(statearr_15295_15322[1] = 8);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_15299 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15299[0] = state_machine__6583__auto__);
(statearr_15299[1] = 1);
return statearr_15299;
});
var state_machine__6583__auto____1 = (function (state_15264){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15264);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15300){if((e15300 instanceof Object))
{var ex__6586__auto__ = e15300;var statearr_15301_15323 = state_15264;(statearr_15301_15323[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15264);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15300;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15324 = state_15264;
state_15264 = G__15324;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15264){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15302 = f__6653__auto__.call(null);(statearr_15302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto__);
return statearr_15302;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
}));
return c__6652__auto__;
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
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
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
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6652__auto___15405 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15384){var state_val_15385 = (state_15384[1]);if((state_val_15385 === 1))
{var state_15384__$1 = state_15384;var statearr_15386_15406 = state_15384__$1;(statearr_15386_15406[2] = null);
(statearr_15386_15406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15385 === 2))
{var state_15384__$1 = state_15384;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15384__$1,4,from);
} else
{if((state_val_15385 === 3))
{var inst_15382 = (state_15384[2]);var state_15384__$1 = state_15384;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15384__$1,inst_15382);
} else
{if((state_val_15385 === 4))
{var inst_15367 = (state_15384[7]);var inst_15367__$1 = (state_15384[2]);var inst_15368 = (inst_15367__$1 == null);var state_15384__$1 = (function (){var statearr_15387 = state_15384;(statearr_15387[7] = inst_15367__$1);
return statearr_15387;
})();if(cljs.core.truth_(inst_15368))
{var statearr_15388_15407 = state_15384__$1;(statearr_15388_15407[1] = 5);
} else
{var statearr_15389_15408 = state_15384__$1;(statearr_15389_15408[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15385 === 5))
{var state_15384__$1 = state_15384;if(cljs.core.truth_(close_QMARK_))
{var statearr_15390_15409 = state_15384__$1;(statearr_15390_15409[1] = 8);
} else
{var statearr_15391_15410 = state_15384__$1;(statearr_15391_15410[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15385 === 6))
{var inst_15367 = (state_15384[7]);var state_15384__$1 = state_15384;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15384__$1,11,to,inst_15367);
} else
{if((state_val_15385 === 7))
{var inst_15380 = (state_15384[2]);var state_15384__$1 = state_15384;var statearr_15392_15411 = state_15384__$1;(statearr_15392_15411[2] = inst_15380);
(statearr_15392_15411[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15385 === 8))
{var inst_15371 = cljs.core.async.close_BANG_.call(null,to);var state_15384__$1 = state_15384;var statearr_15393_15412 = state_15384__$1;(statearr_15393_15412[2] = inst_15371);
(statearr_15393_15412[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15385 === 9))
{var state_15384__$1 = state_15384;var statearr_15394_15413 = state_15384__$1;(statearr_15394_15413[2] = null);
(statearr_15394_15413[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15385 === 10))
{var inst_15374 = (state_15384[2]);var state_15384__$1 = state_15384;var statearr_15395_15414 = state_15384__$1;(statearr_15395_15414[2] = inst_15374);
(statearr_15395_15414[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15385 === 11))
{var inst_15377 = (state_15384[2]);var state_15384__$1 = (function (){var statearr_15396 = state_15384;(statearr_15396[8] = inst_15377);
return statearr_15396;
})();var statearr_15397_15415 = state_15384__$1;(statearr_15397_15415[2] = null);
(statearr_15397_15415[1] = 2);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_15401 = [null,null,null,null,null,null,null,null,null];(statearr_15401[0] = state_machine__6583__auto__);
(statearr_15401[1] = 1);
return statearr_15401;
});
var state_machine__6583__auto____1 = (function (state_15384){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15384);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15402){if((e15402 instanceof Object))
{var ex__6586__auto__ = e15402;var statearr_15403_15416 = state_15384;(statearr_15403_15416[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15384);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15402;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15417 = state_15384;
state_15384 = G__15417;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15384){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15384);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15404 = f__6653__auto__.call(null);(statearr_15404[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___15405);
return statearr_15404;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6652__auto___15504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15482){var state_val_15483 = (state_15482[1]);if((state_val_15483 === 1))
{var state_15482__$1 = state_15482;var statearr_15484_15505 = state_15482__$1;(statearr_15484_15505[2] = null);
(statearr_15484_15505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 2))
{var state_15482__$1 = state_15482;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15482__$1,4,ch);
} else
{if((state_val_15483 === 3))
{var inst_15480 = (state_15482[2]);var state_15482__$1 = state_15482;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15482__$1,inst_15480);
} else
{if((state_val_15483 === 4))
{var inst_15463 = (state_15482[7]);var inst_15463__$1 = (state_15482[2]);var inst_15464 = (inst_15463__$1 == null);var state_15482__$1 = (function (){var statearr_15485 = state_15482;(statearr_15485[7] = inst_15463__$1);
return statearr_15485;
})();if(cljs.core.truth_(inst_15464))
{var statearr_15486_15506 = state_15482__$1;(statearr_15486_15506[1] = 5);
} else
{var statearr_15487_15507 = state_15482__$1;(statearr_15487_15507[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 5))
{var inst_15466 = cljs.core.async.close_BANG_.call(null,tc);var inst_15467 = cljs.core.async.close_BANG_.call(null,fc);var state_15482__$1 = (function (){var statearr_15488 = state_15482;(statearr_15488[8] = inst_15466);
return statearr_15488;
})();var statearr_15489_15508 = state_15482__$1;(statearr_15489_15508[2] = inst_15467);
(statearr_15489_15508[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 6))
{var inst_15463 = (state_15482[7]);var inst_15469 = p.call(null,inst_15463);var state_15482__$1 = state_15482;if(cljs.core.truth_(inst_15469))
{var statearr_15490_15509 = state_15482__$1;(statearr_15490_15509[1] = 9);
} else
{var statearr_15491_15510 = state_15482__$1;(statearr_15491_15510[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 7))
{var inst_15478 = (state_15482[2]);var state_15482__$1 = state_15482;var statearr_15492_15511 = state_15482__$1;(statearr_15492_15511[2] = inst_15478);
(statearr_15492_15511[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 8))
{var inst_15475 = (state_15482[2]);var state_15482__$1 = (function (){var statearr_15493 = state_15482;(statearr_15493[9] = inst_15475);
return statearr_15493;
})();var statearr_15494_15512 = state_15482__$1;(statearr_15494_15512[2] = null);
(statearr_15494_15512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 9))
{var state_15482__$1 = state_15482;var statearr_15495_15513 = state_15482__$1;(statearr_15495_15513[2] = tc);
(statearr_15495_15513[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 10))
{var state_15482__$1 = state_15482;var statearr_15496_15514 = state_15482__$1;(statearr_15496_15514[2] = fc);
(statearr_15496_15514[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15483 === 11))
{var inst_15463 = (state_15482[7]);var inst_15473 = (state_15482[2]);var state_15482__$1 = state_15482;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15482__$1,8,inst_15473,inst_15463);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_15500 = [null,null,null,null,null,null,null,null,null,null];(statearr_15500[0] = state_machine__6583__auto__);
(statearr_15500[1] = 1);
return statearr_15500;
});
var state_machine__6583__auto____1 = (function (state_15482){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15482);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15501){if((e15501 instanceof Object))
{var ex__6586__auto__ = e15501;var statearr_15502_15515 = state_15482;(statearr_15502_15515[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15482);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15516 = state_15482;
state_15482 = G__15516;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15482){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15482);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15503 = f__6653__auto__.call(null);(statearr_15503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___15504);
return statearr_15503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6652__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15563){var state_val_15564 = (state_15563[1]);if((state_val_15564 === 7))
{var inst_15559 = (state_15563[2]);var state_15563__$1 = state_15563;var statearr_15565_15581 = state_15563__$1;(statearr_15565_15581[2] = inst_15559);
(statearr_15565_15581[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15564 === 6))
{var inst_15552 = (state_15563[7]);var inst_15549 = (state_15563[8]);var inst_15556 = f.call(null,inst_15549,inst_15552);var inst_15549__$1 = inst_15556;var state_15563__$1 = (function (){var statearr_15566 = state_15563;(statearr_15566[8] = inst_15549__$1);
return statearr_15566;
})();var statearr_15567_15582 = state_15563__$1;(statearr_15567_15582[2] = null);
(statearr_15567_15582[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15564 === 5))
{var inst_15549 = (state_15563[8]);var state_15563__$1 = state_15563;var statearr_15568_15583 = state_15563__$1;(statearr_15568_15583[2] = inst_15549);
(statearr_15568_15583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15564 === 4))
{var inst_15552 = (state_15563[7]);var inst_15552__$1 = (state_15563[2]);var inst_15553 = (inst_15552__$1 == null);var state_15563__$1 = (function (){var statearr_15569 = state_15563;(statearr_15569[7] = inst_15552__$1);
return statearr_15569;
})();if(cljs.core.truth_(inst_15553))
{var statearr_15570_15584 = state_15563__$1;(statearr_15570_15584[1] = 5);
} else
{var statearr_15571_15585 = state_15563__$1;(statearr_15571_15585[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15564 === 3))
{var inst_15561 = (state_15563[2]);var state_15563__$1 = state_15563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15563__$1,inst_15561);
} else
{if((state_val_15564 === 2))
{var state_15563__$1 = state_15563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15563__$1,4,ch);
} else
{if((state_val_15564 === 1))
{var inst_15549 = init;var state_15563__$1 = (function (){var statearr_15572 = state_15563;(statearr_15572[8] = inst_15549);
return statearr_15572;
})();var statearr_15573_15586 = state_15563__$1;(statearr_15573_15586[2] = null);
(statearr_15573_15586[1] = 2);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_15577 = [null,null,null,null,null,null,null,null,null];(statearr_15577[0] = state_machine__6583__auto__);
(statearr_15577[1] = 1);
return statearr_15577;
});
var state_machine__6583__auto____1 = (function (state_15563){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15563);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15578){if((e15578 instanceof Object))
{var ex__6586__auto__ = e15578;var statearr_15579_15587 = state_15563;(statearr_15579_15587[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15563);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15578;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15588 = state_15563;
state_15563 = G__15588;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15563){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15580 = f__6653__auto__.call(null);(statearr_15580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto__);
return statearr_15580;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
}));
return c__6652__auto__;
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6652__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15650){var state_val_15651 = (state_15650[1]);if((state_val_15651 === 1))
{var inst_15630 = cljs.core.seq.call(null,coll);var inst_15631 = inst_15630;var state_15650__$1 = (function (){var statearr_15652 = state_15650;(statearr_15652[7] = inst_15631);
return statearr_15652;
})();var statearr_15653_15671 = state_15650__$1;(statearr_15653_15671[2] = null);
(statearr_15653_15671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15651 === 2))
{var inst_15631 = (state_15650[7]);var state_15650__$1 = state_15650;if(cljs.core.truth_(inst_15631))
{var statearr_15654_15672 = state_15650__$1;(statearr_15654_15672[1] = 4);
} else
{var statearr_15655_15673 = state_15650__$1;(statearr_15655_15673[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15651 === 3))
{var inst_15648 = (state_15650[2]);var state_15650__$1 = state_15650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15650__$1,inst_15648);
} else
{if((state_val_15651 === 4))
{var inst_15631 = (state_15650[7]);var inst_15634 = cljs.core.first.call(null,inst_15631);var state_15650__$1 = state_15650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15650__$1,7,ch,inst_15634);
} else
{if((state_val_15651 === 5))
{var state_15650__$1 = state_15650;if(cljs.core.truth_(close_QMARK_))
{var statearr_15656_15674 = state_15650__$1;(statearr_15656_15674[1] = 8);
} else
{var statearr_15657_15675 = state_15650__$1;(statearr_15657_15675[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15651 === 6))
{var inst_15646 = (state_15650[2]);var state_15650__$1 = state_15650;var statearr_15658_15676 = state_15650__$1;(statearr_15658_15676[2] = inst_15646);
(statearr_15658_15676[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15651 === 7))
{var inst_15631 = (state_15650[7]);var inst_15636 = (state_15650[2]);var inst_15637 = cljs.core.next.call(null,inst_15631);var inst_15631__$1 = inst_15637;var state_15650__$1 = (function (){var statearr_15659 = state_15650;(statearr_15659[7] = inst_15631__$1);
(statearr_15659[8] = inst_15636);
return statearr_15659;
})();var statearr_15660_15677 = state_15650__$1;(statearr_15660_15677[2] = null);
(statearr_15660_15677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15651 === 8))
{var inst_15641 = cljs.core.async.close_BANG_.call(null,ch);var state_15650__$1 = state_15650;var statearr_15661_15678 = state_15650__$1;(statearr_15661_15678[2] = inst_15641);
(statearr_15661_15678[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15651 === 9))
{var state_15650__$1 = state_15650;var statearr_15662_15679 = state_15650__$1;(statearr_15662_15679[2] = null);
(statearr_15662_15679[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15651 === 10))
{var inst_15644 = (state_15650[2]);var state_15650__$1 = state_15650;var statearr_15663_15680 = state_15650__$1;(statearr_15663_15680[2] = inst_15644);
(statearr_15663_15680[1] = 6);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_15667 = [null,null,null,null,null,null,null,null,null];(statearr_15667[0] = state_machine__6583__auto__);
(statearr_15667[1] = 1);
return statearr_15667;
});
var state_machine__6583__auto____1 = (function (state_15650){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15650);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15668){if((e15668 instanceof Object))
{var ex__6586__auto__ = e15668;var statearr_15669_15681 = state_15650;(statearr_15669_15681[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15650);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15668;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15682 = state_15650;
state_15650 = G__15682;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15650){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15670 = f__6653__auto__.call(null);(statearr_15670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto__);
return statearr_15670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
}));
return c__6652__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj15684 = {};return obj15684;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3393__auto__ = _;if(and__3393__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3393__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4013__auto__ = (((_ == null))?null:_);return (function (){var or__3405__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15686 = {};return obj15686;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3393__auto__ = m;if(and__3393__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3393__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4013__auto__ = (((m == null))?null:m);return (function (){var or__3405__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3393__auto__ = m;if(and__3393__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3393__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4013__auto__ = (((m == null))?null:m);return (function (){var or__3405__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3393__auto__ = m;if(and__3393__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3393__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4013__auto__ = (((m == null))?null:m);return (function (){var or__3405__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15910 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15910 = (function (cs,ch,mult,meta15911){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15911 = meta15911;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15910.cljs$lang$type = true;
cljs.core.async.t15910.cljs$lang$ctorStr = "cljs.core.async/t15910";
cljs.core.async.t15910.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t15910");
});})(cs))
;
cljs.core.async.t15910.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15910.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15910.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15910.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15910.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15910.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15910.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15912){var self__ = this;
var _15912__$1 = this;return self__.meta15911;
});})(cs))
;
cljs.core.async.t15910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15912,meta15911__$1){var self__ = this;
var _15912__$1 = this;return (new cljs.core.async.t15910(self__.cs,self__.ch,self__.mult,meta15911__$1));
});})(cs))
;
cljs.core.async.__GT_t15910 = ((function (cs){
return (function __GT_t15910(cs__$1,ch__$1,mult__$1,meta15911){return (new cljs.core.async.t15910(cs__$1,ch__$1,mult__$1,meta15911));
});})(cs))
;
}
return (new cljs.core.async.t15910(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6652__auto___16133 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_16047){var state_val_16048 = (state_16047[1]);if((state_val_16048 === 32))
{var inst_15915 = (state_16047[7]);var inst_15991 = (state_16047[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16047,31,Object,null,30);var inst_15998 = cljs.core.async.put_BANG_.call(null,inst_15991,inst_15915,done);var state_16047__$1 = state_16047;var statearr_16049_16134 = state_16047__$1;(statearr_16049_16134[2] = inst_15998);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16047__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 1))
{var state_16047__$1 = state_16047;var statearr_16050_16135 = state_16047__$1;(statearr_16050_16135[2] = null);
(statearr_16050_16135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 33))
{var inst_16004 = (state_16047[9]);var inst_16006 = cljs.core.chunked_seq_QMARK_.call(null,inst_16004);var state_16047__$1 = state_16047;if(inst_16006)
{var statearr_16051_16136 = state_16047__$1;(statearr_16051_16136[1] = 36);
} else
{var statearr_16052_16137 = state_16047__$1;(statearr_16052_16137[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 2))
{var state_16047__$1 = state_16047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16047__$1,4,ch);
} else
{if((state_val_16048 === 34))
{var state_16047__$1 = state_16047;var statearr_16053_16138 = state_16047__$1;(statearr_16053_16138[2] = null);
(statearr_16053_16138[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 3))
{var inst_16045 = (state_16047[2]);var state_16047__$1 = state_16047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16047__$1,inst_16045);
} else
{if((state_val_16048 === 35))
{var inst_16029 = (state_16047[2]);var state_16047__$1 = state_16047;var statearr_16054_16139 = state_16047__$1;(statearr_16054_16139[2] = inst_16029);
(statearr_16054_16139[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 4))
{var inst_15915 = (state_16047[7]);var inst_15915__$1 = (state_16047[2]);var inst_15916 = (inst_15915__$1 == null);var state_16047__$1 = (function (){var statearr_16055 = state_16047;(statearr_16055[7] = inst_15915__$1);
return statearr_16055;
})();if(cljs.core.truth_(inst_15916))
{var statearr_16056_16140 = state_16047__$1;(statearr_16056_16140[1] = 5);
} else
{var statearr_16057_16141 = state_16047__$1;(statearr_16057_16141[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 36))
{var inst_16004 = (state_16047[9]);var inst_16008 = cljs.core.chunk_first.call(null,inst_16004);var inst_16009 = cljs.core.chunk_rest.call(null,inst_16004);var inst_16010 = cljs.core.count.call(null,inst_16008);var inst_15983 = inst_16009;var inst_15984 = inst_16008;var inst_15985 = inst_16010;var inst_15986 = 0;var state_16047__$1 = (function (){var statearr_16058 = state_16047;(statearr_16058[10] = inst_15986);
(statearr_16058[11] = inst_15985);
(statearr_16058[12] = inst_15984);
(statearr_16058[13] = inst_15983);
return statearr_16058;
})();var statearr_16059_16142 = state_16047__$1;(statearr_16059_16142[2] = null);
(statearr_16059_16142[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 5))
{var inst_15922 = cljs.core.deref.call(null,cs);var inst_15923 = cljs.core.seq.call(null,inst_15922);var inst_15924 = inst_15923;var inst_15925 = null;var inst_15926 = 0;var inst_15927 = 0;var state_16047__$1 = (function (){var statearr_16060 = state_16047;(statearr_16060[14] = inst_15924);
(statearr_16060[15] = inst_15925);
(statearr_16060[16] = inst_15927);
(statearr_16060[17] = inst_15926);
return statearr_16060;
})();var statearr_16061_16143 = state_16047__$1;(statearr_16061_16143[2] = null);
(statearr_16061_16143[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 37))
{var inst_16004 = (state_16047[9]);var inst_16013 = cljs.core.first.call(null,inst_16004);var state_16047__$1 = (function (){var statearr_16062 = state_16047;(statearr_16062[18] = inst_16013);
return statearr_16062;
})();var statearr_16063_16144 = state_16047__$1;(statearr_16063_16144[2] = null);
(statearr_16063_16144[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 6))
{var inst_15975 = (state_16047[19]);var inst_15974 = cljs.core.deref.call(null,cs);var inst_15975__$1 = cljs.core.keys.call(null,inst_15974);var inst_15976 = cljs.core.count.call(null,inst_15975__$1);var inst_15977 = cljs.core.reset_BANG_.call(null,dctr,inst_15976);var inst_15982 = cljs.core.seq.call(null,inst_15975__$1);var inst_15983 = inst_15982;var inst_15984 = null;var inst_15985 = 0;var inst_15986 = 0;var state_16047__$1 = (function (){var statearr_16064 = state_16047;(statearr_16064[20] = inst_15977);
(statearr_16064[10] = inst_15986);
(statearr_16064[11] = inst_15985);
(statearr_16064[12] = inst_15984);
(statearr_16064[13] = inst_15983);
(statearr_16064[19] = inst_15975__$1);
return statearr_16064;
})();var statearr_16065_16145 = state_16047__$1;(statearr_16065_16145[2] = null);
(statearr_16065_16145[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 38))
{var inst_16026 = (state_16047[2]);var state_16047__$1 = state_16047;var statearr_16066_16146 = state_16047__$1;(statearr_16066_16146[2] = inst_16026);
(statearr_16066_16146[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 7))
{var inst_16043 = (state_16047[2]);var state_16047__$1 = state_16047;var statearr_16067_16147 = state_16047__$1;(statearr_16067_16147[2] = inst_16043);
(statearr_16067_16147[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 39))
{var inst_16004 = (state_16047[9]);var inst_16022 = (state_16047[2]);var inst_16023 = cljs.core.next.call(null,inst_16004);var inst_15983 = inst_16023;var inst_15984 = null;var inst_15985 = 0;var inst_15986 = 0;var state_16047__$1 = (function (){var statearr_16068 = state_16047;(statearr_16068[10] = inst_15986);
(statearr_16068[11] = inst_15985);
(statearr_16068[21] = inst_16022);
(statearr_16068[12] = inst_15984);
(statearr_16068[13] = inst_15983);
return statearr_16068;
})();var statearr_16069_16148 = state_16047__$1;(statearr_16069_16148[2] = null);
(statearr_16069_16148[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 8))
{var inst_15927 = (state_16047[16]);var inst_15926 = (state_16047[17]);var inst_15929 = (inst_15927 < inst_15926);var inst_15930 = inst_15929;var state_16047__$1 = state_16047;if(cljs.core.truth_(inst_15930))
{var statearr_16070_16149 = state_16047__$1;(statearr_16070_16149[1] = 10);
} else
{var statearr_16071_16150 = state_16047__$1;(statearr_16071_16150[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 40))
{var inst_16013 = (state_16047[18]);var inst_16014 = (state_16047[2]);var inst_16015 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16016 = cljs.core.async.untap_STAR_.call(null,m,inst_16013);var state_16047__$1 = (function (){var statearr_16072 = state_16047;(statearr_16072[22] = inst_16015);
(statearr_16072[23] = inst_16014);
return statearr_16072;
})();var statearr_16073_16151 = state_16047__$1;(statearr_16073_16151[2] = inst_16016);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16047__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 9))
{var inst_15972 = (state_16047[2]);var state_16047__$1 = state_16047;var statearr_16074_16152 = state_16047__$1;(statearr_16074_16152[2] = inst_15972);
(statearr_16074_16152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 41))
{var inst_15915 = (state_16047[7]);var inst_16013 = (state_16047[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16047,40,Object,null,39);var inst_16020 = cljs.core.async.put_BANG_.call(null,inst_16013,inst_15915,done);var state_16047__$1 = state_16047;var statearr_16075_16153 = state_16047__$1;(statearr_16075_16153[2] = inst_16020);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16047__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 10))
{var inst_15925 = (state_16047[15]);var inst_15927 = (state_16047[16]);var inst_15933 = cljs.core._nth.call(null,inst_15925,inst_15927);var inst_15934 = cljs.core.nth.call(null,inst_15933,0,null);var inst_15935 = cljs.core.nth.call(null,inst_15933,1,null);var state_16047__$1 = (function (){var statearr_16076 = state_16047;(statearr_16076[24] = inst_15934);
return statearr_16076;
})();if(cljs.core.truth_(inst_15935))
{var statearr_16077_16154 = state_16047__$1;(statearr_16077_16154[1] = 13);
} else
{var statearr_16078_16155 = state_16047__$1;(statearr_16078_16155[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 42))
{var state_16047__$1 = state_16047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16047__$1,45,dchan);
} else
{if((state_val_16048 === 11))
{var inst_15924 = (state_16047[14]);var inst_15944 = (state_16047[25]);var inst_15944__$1 = cljs.core.seq.call(null,inst_15924);var state_16047__$1 = (function (){var statearr_16079 = state_16047;(statearr_16079[25] = inst_15944__$1);
return statearr_16079;
})();if(inst_15944__$1)
{var statearr_16080_16156 = state_16047__$1;(statearr_16080_16156[1] = 16);
} else
{var statearr_16081_16157 = state_16047__$1;(statearr_16081_16157[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 43))
{var state_16047__$1 = state_16047;var statearr_16082_16158 = state_16047__$1;(statearr_16082_16158[2] = null);
(statearr_16082_16158[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 12))
{var inst_15970 = (state_16047[2]);var state_16047__$1 = state_16047;var statearr_16083_16159 = state_16047__$1;(statearr_16083_16159[2] = inst_15970);
(statearr_16083_16159[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 44))
{var inst_16040 = (state_16047[2]);var state_16047__$1 = (function (){var statearr_16084 = state_16047;(statearr_16084[26] = inst_16040);
return statearr_16084;
})();var statearr_16085_16160 = state_16047__$1;(statearr_16085_16160[2] = null);
(statearr_16085_16160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 13))
{var inst_15934 = (state_16047[24]);var inst_15937 = cljs.core.async.close_BANG_.call(null,inst_15934);var state_16047__$1 = state_16047;var statearr_16086_16161 = state_16047__$1;(statearr_16086_16161[2] = inst_15937);
(statearr_16086_16161[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 45))
{var inst_16037 = (state_16047[2]);var state_16047__$1 = state_16047;var statearr_16090_16162 = state_16047__$1;(statearr_16090_16162[2] = inst_16037);
(statearr_16090_16162[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 14))
{var state_16047__$1 = state_16047;var statearr_16091_16163 = state_16047__$1;(statearr_16091_16163[2] = null);
(statearr_16091_16163[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 15))
{var inst_15924 = (state_16047[14]);var inst_15925 = (state_16047[15]);var inst_15927 = (state_16047[16]);var inst_15926 = (state_16047[17]);var inst_15940 = (state_16047[2]);var inst_15941 = (inst_15927 + 1);var tmp16087 = inst_15924;var tmp16088 = inst_15925;var tmp16089 = inst_15926;var inst_15924__$1 = tmp16087;var inst_15925__$1 = tmp16088;var inst_15926__$1 = tmp16089;var inst_15927__$1 = inst_15941;var state_16047__$1 = (function (){var statearr_16092 = state_16047;(statearr_16092[27] = inst_15940);
(statearr_16092[14] = inst_15924__$1);
(statearr_16092[15] = inst_15925__$1);
(statearr_16092[16] = inst_15927__$1);
(statearr_16092[17] = inst_15926__$1);
return statearr_16092;
})();var statearr_16093_16164 = state_16047__$1;(statearr_16093_16164[2] = null);
(statearr_16093_16164[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 16))
{var inst_15944 = (state_16047[25]);var inst_15946 = cljs.core.chunked_seq_QMARK_.call(null,inst_15944);var state_16047__$1 = state_16047;if(inst_15946)
{var statearr_16094_16165 = state_16047__$1;(statearr_16094_16165[1] = 19);
} else
{var statearr_16095_16166 = state_16047__$1;(statearr_16095_16166[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 17))
{var state_16047__$1 = state_16047;var statearr_16096_16167 = state_16047__$1;(statearr_16096_16167[2] = null);
(statearr_16096_16167[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 18))
{var inst_15968 = (state_16047[2]);var state_16047__$1 = state_16047;var statearr_16097_16168 = state_16047__$1;(statearr_16097_16168[2] = inst_15968);
(statearr_16097_16168[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 19))
{var inst_15944 = (state_16047[25]);var inst_15948 = cljs.core.chunk_first.call(null,inst_15944);var inst_15949 = cljs.core.chunk_rest.call(null,inst_15944);var inst_15950 = cljs.core.count.call(null,inst_15948);var inst_15924 = inst_15949;var inst_15925 = inst_15948;var inst_15926 = inst_15950;var inst_15927 = 0;var state_16047__$1 = (function (){var statearr_16098 = state_16047;(statearr_16098[14] = inst_15924);
(statearr_16098[15] = inst_15925);
(statearr_16098[16] = inst_15927);
(statearr_16098[17] = inst_15926);
return statearr_16098;
})();var statearr_16099_16169 = state_16047__$1;(statearr_16099_16169[2] = null);
(statearr_16099_16169[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 20))
{var inst_15944 = (state_16047[25]);var inst_15954 = cljs.core.first.call(null,inst_15944);var inst_15955 = cljs.core.nth.call(null,inst_15954,0,null);var inst_15956 = cljs.core.nth.call(null,inst_15954,1,null);var state_16047__$1 = (function (){var statearr_16100 = state_16047;(statearr_16100[28] = inst_15955);
return statearr_16100;
})();if(cljs.core.truth_(inst_15956))
{var statearr_16101_16170 = state_16047__$1;(statearr_16101_16170[1] = 22);
} else
{var statearr_16102_16171 = state_16047__$1;(statearr_16102_16171[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 21))
{var inst_15965 = (state_16047[2]);var state_16047__$1 = state_16047;var statearr_16103_16172 = state_16047__$1;(statearr_16103_16172[2] = inst_15965);
(statearr_16103_16172[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 22))
{var inst_15955 = (state_16047[28]);var inst_15958 = cljs.core.async.close_BANG_.call(null,inst_15955);var state_16047__$1 = state_16047;var statearr_16104_16173 = state_16047__$1;(statearr_16104_16173[2] = inst_15958);
(statearr_16104_16173[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 23))
{var state_16047__$1 = state_16047;var statearr_16105_16174 = state_16047__$1;(statearr_16105_16174[2] = null);
(statearr_16105_16174[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 24))
{var inst_15944 = (state_16047[25]);var inst_15961 = (state_16047[2]);var inst_15962 = cljs.core.next.call(null,inst_15944);var inst_15924 = inst_15962;var inst_15925 = null;var inst_15926 = 0;var inst_15927 = 0;var state_16047__$1 = (function (){var statearr_16106 = state_16047;(statearr_16106[14] = inst_15924);
(statearr_16106[15] = inst_15925);
(statearr_16106[16] = inst_15927);
(statearr_16106[17] = inst_15926);
(statearr_16106[29] = inst_15961);
return statearr_16106;
})();var statearr_16107_16175 = state_16047__$1;(statearr_16107_16175[2] = null);
(statearr_16107_16175[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 25))
{var inst_15986 = (state_16047[10]);var inst_15985 = (state_16047[11]);var inst_15988 = (inst_15986 < inst_15985);var inst_15989 = inst_15988;var state_16047__$1 = state_16047;if(cljs.core.truth_(inst_15989))
{var statearr_16108_16176 = state_16047__$1;(statearr_16108_16176[1] = 27);
} else
{var statearr_16109_16177 = state_16047__$1;(statearr_16109_16177[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 26))
{var inst_15975 = (state_16047[19]);var inst_16033 = (state_16047[2]);var inst_16034 = cljs.core.seq.call(null,inst_15975);var state_16047__$1 = (function (){var statearr_16110 = state_16047;(statearr_16110[30] = inst_16033);
return statearr_16110;
})();if(inst_16034)
{var statearr_16111_16178 = state_16047__$1;(statearr_16111_16178[1] = 42);
} else
{var statearr_16112_16179 = state_16047__$1;(statearr_16112_16179[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 27))
{var inst_15986 = (state_16047[10]);var inst_15984 = (state_16047[12]);var inst_15991 = cljs.core._nth.call(null,inst_15984,inst_15986);var state_16047__$1 = (function (){var statearr_16113 = state_16047;(statearr_16113[8] = inst_15991);
return statearr_16113;
})();var statearr_16114_16180 = state_16047__$1;(statearr_16114_16180[2] = null);
(statearr_16114_16180[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 28))
{var inst_15983 = (state_16047[13]);var inst_16004 = (state_16047[9]);var inst_16004__$1 = cljs.core.seq.call(null,inst_15983);var state_16047__$1 = (function (){var statearr_16118 = state_16047;(statearr_16118[9] = inst_16004__$1);
return statearr_16118;
})();if(inst_16004__$1)
{var statearr_16119_16181 = state_16047__$1;(statearr_16119_16181[1] = 33);
} else
{var statearr_16120_16182 = state_16047__$1;(statearr_16120_16182[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 29))
{var inst_16031 = (state_16047[2]);var state_16047__$1 = state_16047;var statearr_16121_16183 = state_16047__$1;(statearr_16121_16183[2] = inst_16031);
(statearr_16121_16183[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 30))
{var inst_15986 = (state_16047[10]);var inst_15985 = (state_16047[11]);var inst_15984 = (state_16047[12]);var inst_15983 = (state_16047[13]);var inst_16000 = (state_16047[2]);var inst_16001 = (inst_15986 + 1);var tmp16115 = inst_15985;var tmp16116 = inst_15984;var tmp16117 = inst_15983;var inst_15983__$1 = tmp16117;var inst_15984__$1 = tmp16116;var inst_15985__$1 = tmp16115;var inst_15986__$1 = inst_16001;var state_16047__$1 = (function (){var statearr_16122 = state_16047;(statearr_16122[10] = inst_15986__$1);
(statearr_16122[11] = inst_15985__$1);
(statearr_16122[12] = inst_15984__$1);
(statearr_16122[13] = inst_15983__$1);
(statearr_16122[31] = inst_16000);
return statearr_16122;
})();var statearr_16123_16184 = state_16047__$1;(statearr_16123_16184[2] = null);
(statearr_16123_16184[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16048 === 31))
{var inst_15991 = (state_16047[8]);var inst_15992 = (state_16047[2]);var inst_15993 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15994 = cljs.core.async.untap_STAR_.call(null,m,inst_15991);var state_16047__$1 = (function (){var statearr_16124 = state_16047;(statearr_16124[32] = inst_15993);
(statearr_16124[33] = inst_15992);
return statearr_16124;
})();var statearr_16125_16185 = state_16047__$1;(statearr_16125_16185[2] = inst_15994);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16047__$1);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_16129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16129[0] = state_machine__6583__auto__);
(statearr_16129[1] = 1);
return statearr_16129;
});
var state_machine__6583__auto____1 = (function (state_16047){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_16047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e16130){if((e16130 instanceof Object))
{var ex__6586__auto__ = e16130;var statearr_16131_16186 = state_16047;(statearr_16131_16186[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16047);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16187 = state_16047;
state_16047 = G__16187;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_16047){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_16047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_16132 = f__6653__auto__.call(null);(statearr_16132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___16133);
return statearr_16132;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
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
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj16189 = {};return obj16189;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3393__auto__ = m;if(and__3393__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3393__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4013__auto__ = (((m == null))?null:m);return (function (){var or__3405__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3393__auto__ = m;if(and__3393__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3393__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4013__auto__ = (((m == null))?null:m);return (function (){var or__3405__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3393__auto__ = m;if(and__3393__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3393__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4013__auto__ = (((m == null))?null:m);return (function (){var or__3405__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3393__auto__ = m;if(and__3393__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3393__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4013__auto__ = (((m == null))?null:m);return (function (){var or__3405__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3393__auto__ = m;if(and__3393__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3393__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4013__auto__ = (((m == null))?null:m);return (function (){var or__3405__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t16299 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16299 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16300){
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
this.meta16300 = meta16300;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16299.cljs$lang$type = true;
cljs.core.async.t16299.cljs$lang$ctorStr = "cljs.core.async/t16299";
cljs.core.async.t16299.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t16299");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16299.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16299.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16299.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16299.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16299.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16299.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16299.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16299.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16299.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16301){var self__ = this;
var _16301__$1 = this;return self__.meta16300;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16301,meta16300__$1){var self__ = this;
var _16301__$1 = this;return (new cljs.core.async.t16299(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16300__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16299 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16299(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16300){return (new cljs.core.async.t16299(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16300));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16299(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6652__auto___16408 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_16366){var state_val_16367 = (state_16366[1]);if((state_val_16367 === 1))
{var inst_16305 = (state_16366[7]);var inst_16305__$1 = calc_state.call(null);var inst_16306 = cljs.core.seq_QMARK_.call(null,inst_16305__$1);var state_16366__$1 = (function (){var statearr_16368 = state_16366;(statearr_16368[7] = inst_16305__$1);
return statearr_16368;
})();if(inst_16306)
{var statearr_16369_16409 = state_16366__$1;(statearr_16369_16409[1] = 2);
} else
{var statearr_16370_16410 = state_16366__$1;(statearr_16370_16410[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 2))
{var inst_16305 = (state_16366[7]);var inst_16308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16305);var state_16366__$1 = state_16366;var statearr_16371_16411 = state_16366__$1;(statearr_16371_16411[2] = inst_16308);
(statearr_16371_16411[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 3))
{var inst_16305 = (state_16366[7]);var state_16366__$1 = state_16366;var statearr_16372_16412 = state_16366__$1;(statearr_16372_16412[2] = inst_16305);
(statearr_16372_16412[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 4))
{var inst_16305 = (state_16366[7]);var inst_16311 = (state_16366[2]);var inst_16312 = cljs.core.get.call(null,inst_16311,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16313 = cljs.core.get.call(null,inst_16311,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16314 = cljs.core.get.call(null,inst_16311,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16315 = inst_16305;var state_16366__$1 = (function (){var statearr_16373 = state_16366;(statearr_16373[8] = inst_16315);
(statearr_16373[9] = inst_16314);
(statearr_16373[10] = inst_16312);
(statearr_16373[11] = inst_16313);
return statearr_16373;
})();var statearr_16374_16413 = state_16366__$1;(statearr_16374_16413[2] = null);
(statearr_16374_16413[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 5))
{var inst_16315 = (state_16366[8]);var inst_16318 = cljs.core.seq_QMARK_.call(null,inst_16315);var state_16366__$1 = state_16366;if(inst_16318)
{var statearr_16375_16414 = state_16366__$1;(statearr_16375_16414[1] = 7);
} else
{var statearr_16376_16415 = state_16366__$1;(statearr_16376_16415[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 6))
{var inst_16364 = (state_16366[2]);var state_16366__$1 = state_16366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16366__$1,inst_16364);
} else
{if((state_val_16367 === 7))
{var inst_16315 = (state_16366[8]);var inst_16320 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16315);var state_16366__$1 = state_16366;var statearr_16377_16416 = state_16366__$1;(statearr_16377_16416[2] = inst_16320);
(statearr_16377_16416[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 8))
{var inst_16315 = (state_16366[8]);var state_16366__$1 = state_16366;var statearr_16378_16417 = state_16366__$1;(statearr_16378_16417[2] = inst_16315);
(statearr_16378_16417[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 9))
{var inst_16323 = (state_16366[12]);var inst_16323__$1 = (state_16366[2]);var inst_16324 = cljs.core.get.call(null,inst_16323__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16325 = cljs.core.get.call(null,inst_16323__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16326 = cljs.core.get.call(null,inst_16323__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16366__$1 = (function (){var statearr_16379 = state_16366;(statearr_16379[12] = inst_16323__$1);
(statearr_16379[13] = inst_16326);
(statearr_16379[14] = inst_16325);
return statearr_16379;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16366__$1,10,inst_16324);
} else
{if((state_val_16367 === 10))
{var inst_16331 = (state_16366[15]);var inst_16330 = (state_16366[16]);var inst_16329 = (state_16366[2]);var inst_16330__$1 = cljs.core.nth.call(null,inst_16329,0,null);var inst_16331__$1 = cljs.core.nth.call(null,inst_16329,1,null);var inst_16332 = (inst_16330__$1 == null);var inst_16333 = cljs.core._EQ_.call(null,inst_16331__$1,change);var inst_16334 = (inst_16332) || (inst_16333);var state_16366__$1 = (function (){var statearr_16380 = state_16366;(statearr_16380[15] = inst_16331__$1);
(statearr_16380[16] = inst_16330__$1);
return statearr_16380;
})();if(cljs.core.truth_(inst_16334))
{var statearr_16381_16418 = state_16366__$1;(statearr_16381_16418[1] = 11);
} else
{var statearr_16382_16419 = state_16366__$1;(statearr_16382_16419[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 11))
{var inst_16330 = (state_16366[16]);var inst_16336 = (inst_16330 == null);var state_16366__$1 = state_16366;if(cljs.core.truth_(inst_16336))
{var statearr_16383_16420 = state_16366__$1;(statearr_16383_16420[1] = 14);
} else
{var statearr_16384_16421 = state_16366__$1;(statearr_16384_16421[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 12))
{var inst_16345 = (state_16366[17]);var inst_16331 = (state_16366[15]);var inst_16326 = (state_16366[13]);var inst_16345__$1 = inst_16326.call(null,inst_16331);var state_16366__$1 = (function (){var statearr_16385 = state_16366;(statearr_16385[17] = inst_16345__$1);
return statearr_16385;
})();if(cljs.core.truth_(inst_16345__$1))
{var statearr_16386_16422 = state_16366__$1;(statearr_16386_16422[1] = 17);
} else
{var statearr_16387_16423 = state_16366__$1;(statearr_16387_16423[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 13))
{var inst_16362 = (state_16366[2]);var state_16366__$1 = state_16366;var statearr_16388_16424 = state_16366__$1;(statearr_16388_16424[2] = inst_16362);
(statearr_16388_16424[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 14))
{var inst_16331 = (state_16366[15]);var inst_16338 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16331);var state_16366__$1 = state_16366;var statearr_16389_16425 = state_16366__$1;(statearr_16389_16425[2] = inst_16338);
(statearr_16389_16425[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 15))
{var state_16366__$1 = state_16366;var statearr_16390_16426 = state_16366__$1;(statearr_16390_16426[2] = null);
(statearr_16390_16426[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 16))
{var inst_16341 = (state_16366[2]);var inst_16342 = calc_state.call(null);var inst_16315 = inst_16342;var state_16366__$1 = (function (){var statearr_16391 = state_16366;(statearr_16391[8] = inst_16315);
(statearr_16391[18] = inst_16341);
return statearr_16391;
})();var statearr_16392_16427 = state_16366__$1;(statearr_16392_16427[2] = null);
(statearr_16392_16427[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 17))
{var inst_16345 = (state_16366[17]);var state_16366__$1 = state_16366;var statearr_16393_16428 = state_16366__$1;(statearr_16393_16428[2] = inst_16345);
(statearr_16393_16428[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 18))
{var inst_16331 = (state_16366[15]);var inst_16326 = (state_16366[13]);var inst_16325 = (state_16366[14]);var inst_16348 = cljs.core.empty_QMARK_.call(null,inst_16326);var inst_16349 = inst_16325.call(null,inst_16331);var inst_16350 = cljs.core.not.call(null,inst_16349);var inst_16351 = (inst_16348) && (inst_16350);var state_16366__$1 = state_16366;var statearr_16394_16429 = state_16366__$1;(statearr_16394_16429[2] = inst_16351);
(statearr_16394_16429[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 19))
{var inst_16353 = (state_16366[2]);var state_16366__$1 = state_16366;if(cljs.core.truth_(inst_16353))
{var statearr_16395_16430 = state_16366__$1;(statearr_16395_16430[1] = 20);
} else
{var statearr_16396_16431 = state_16366__$1;(statearr_16396_16431[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 20))
{var inst_16330 = (state_16366[16]);var state_16366__$1 = state_16366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16366__$1,23,out,inst_16330);
} else
{if((state_val_16367 === 21))
{var state_16366__$1 = state_16366;var statearr_16397_16432 = state_16366__$1;(statearr_16397_16432[2] = null);
(statearr_16397_16432[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 22))
{var inst_16323 = (state_16366[12]);var inst_16359 = (state_16366[2]);var inst_16315 = inst_16323;var state_16366__$1 = (function (){var statearr_16398 = state_16366;(statearr_16398[19] = inst_16359);
(statearr_16398[8] = inst_16315);
return statearr_16398;
})();var statearr_16399_16433 = state_16366__$1;(statearr_16399_16433[2] = null);
(statearr_16399_16433[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16367 === 23))
{var inst_16356 = (state_16366[2]);var state_16366__$1 = state_16366;var statearr_16400_16434 = state_16366__$1;(statearr_16400_16434[2] = inst_16356);
(statearr_16400_16434[1] = 22);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_16404 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16404[0] = state_machine__6583__auto__);
(statearr_16404[1] = 1);
return statearr_16404;
});
var state_machine__6583__auto____1 = (function (state_16366){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_16366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e16405){if((e16405 instanceof Object))
{var ex__6586__auto__ = e16405;var statearr_16406_16435 = state_16366;(statearr_16406_16435[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16405;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16436 = state_16366;
state_16366 = G__16436;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_16366){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_16366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_16407 = f__6653__auto__.call(null);(statearr_16407[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___16408);
return statearr_16407;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj16438 = {};return obj16438;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3393__auto__ = p;if(and__3393__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3393__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4013__auto__ = (((p == null))?null:p);return (function (){var or__3405__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3393__auto__ = p;if(and__3393__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3393__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4013__auto__ = (((p == null))?null:p);return (function (){var or__3405__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3393__auto__ = p;if(and__3393__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3393__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4013__auto__ = (((p == null))?null:p);return (function (){var or__3405__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3393__auto__ = p;if(and__3393__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3393__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4013__auto__ = (((p == null))?null:p);return (function (){var or__3405__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3405__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3405__auto__,mults){
return (function (p1__16439_SHARP_){if(cljs.core.truth_(p1__16439_SHARP_.call(null,topic)))
{return p1__16439_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16439_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3405__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16564 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16564 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16565){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16565 = meta16565;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16564.cljs$lang$type = true;
cljs.core.async.t16564.cljs$lang$ctorStr = "cljs.core.async/t16564";
cljs.core.async.t16564.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"cljs.core.async/t16564");
});})(mults,ensure_mult))
;
cljs.core.async.t16564.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16564.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16564.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16564.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16564.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16564.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16564.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16564.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16566){var self__ = this;
var _16566__$1 = this;return self__.meta16565;
});})(mults,ensure_mult))
;
cljs.core.async.t16564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16566,meta16565__$1){var self__ = this;
var _16566__$1 = this;return (new cljs.core.async.t16564(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16565__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16564 = ((function (mults,ensure_mult){
return (function __GT_t16564(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16565){return (new cljs.core.async.t16564(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16565));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16564(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6652__auto___16688 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_16640){var state_val_16641 = (state_16640[1]);if((state_val_16641 === 1))
{var state_16640__$1 = state_16640;var statearr_16642_16689 = state_16640__$1;(statearr_16642_16689[2] = null);
(statearr_16642_16689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 2))
{var state_16640__$1 = state_16640;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16640__$1,4,ch);
} else
{if((state_val_16641 === 3))
{var inst_16638 = (state_16640[2]);var state_16640__$1 = state_16640;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16640__$1,inst_16638);
} else
{if((state_val_16641 === 4))
{var inst_16569 = (state_16640[7]);var inst_16569__$1 = (state_16640[2]);var inst_16570 = (inst_16569__$1 == null);var state_16640__$1 = (function (){var statearr_16643 = state_16640;(statearr_16643[7] = inst_16569__$1);
return statearr_16643;
})();if(cljs.core.truth_(inst_16570))
{var statearr_16644_16690 = state_16640__$1;(statearr_16644_16690[1] = 5);
} else
{var statearr_16645_16691 = state_16640__$1;(statearr_16645_16691[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 5))
{var inst_16576 = cljs.core.deref.call(null,mults);var inst_16577 = cljs.core.vals.call(null,inst_16576);var inst_16578 = cljs.core.seq.call(null,inst_16577);var inst_16579 = inst_16578;var inst_16580 = null;var inst_16581 = 0;var inst_16582 = 0;var state_16640__$1 = (function (){var statearr_16646 = state_16640;(statearr_16646[8] = inst_16582);
(statearr_16646[9] = inst_16581);
(statearr_16646[10] = inst_16579);
(statearr_16646[11] = inst_16580);
return statearr_16646;
})();var statearr_16647_16692 = state_16640__$1;(statearr_16647_16692[2] = null);
(statearr_16647_16692[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 6))
{var inst_16617 = (state_16640[12]);var inst_16619 = (state_16640[13]);var inst_16569 = (state_16640[7]);var inst_16617__$1 = topic_fn.call(null,inst_16569);var inst_16618 = cljs.core.deref.call(null,mults);var inst_16619__$1 = cljs.core.get.call(null,inst_16618,inst_16617__$1);var state_16640__$1 = (function (){var statearr_16648 = state_16640;(statearr_16648[12] = inst_16617__$1);
(statearr_16648[13] = inst_16619__$1);
return statearr_16648;
})();if(cljs.core.truth_(inst_16619__$1))
{var statearr_16649_16693 = state_16640__$1;(statearr_16649_16693[1] = 19);
} else
{var statearr_16650_16694 = state_16640__$1;(statearr_16650_16694[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 7))
{var inst_16636 = (state_16640[2]);var state_16640__$1 = state_16640;var statearr_16651_16695 = state_16640__$1;(statearr_16651_16695[2] = inst_16636);
(statearr_16651_16695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 8))
{var inst_16582 = (state_16640[8]);var inst_16581 = (state_16640[9]);var inst_16584 = (inst_16582 < inst_16581);var inst_16585 = inst_16584;var state_16640__$1 = state_16640;if(cljs.core.truth_(inst_16585))
{var statearr_16655_16696 = state_16640__$1;(statearr_16655_16696[1] = 10);
} else
{var statearr_16656_16697 = state_16640__$1;(statearr_16656_16697[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 9))
{var inst_16615 = (state_16640[2]);var state_16640__$1 = state_16640;var statearr_16657_16698 = state_16640__$1;(statearr_16657_16698[2] = inst_16615);
(statearr_16657_16698[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 10))
{var inst_16582 = (state_16640[8]);var inst_16581 = (state_16640[9]);var inst_16579 = (state_16640[10]);var inst_16580 = (state_16640[11]);var inst_16587 = cljs.core._nth.call(null,inst_16580,inst_16582);var inst_16588 = cljs.core.async.muxch_STAR_.call(null,inst_16587);var inst_16589 = cljs.core.async.close_BANG_.call(null,inst_16588);var inst_16590 = (inst_16582 + 1);var tmp16652 = inst_16581;var tmp16653 = inst_16579;var tmp16654 = inst_16580;var inst_16579__$1 = tmp16653;var inst_16580__$1 = tmp16654;var inst_16581__$1 = tmp16652;var inst_16582__$1 = inst_16590;var state_16640__$1 = (function (){var statearr_16658 = state_16640;(statearr_16658[8] = inst_16582__$1);
(statearr_16658[9] = inst_16581__$1);
(statearr_16658[14] = inst_16589);
(statearr_16658[10] = inst_16579__$1);
(statearr_16658[11] = inst_16580__$1);
return statearr_16658;
})();var statearr_16659_16699 = state_16640__$1;(statearr_16659_16699[2] = null);
(statearr_16659_16699[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 11))
{var inst_16593 = (state_16640[15]);var inst_16579 = (state_16640[10]);var inst_16593__$1 = cljs.core.seq.call(null,inst_16579);var state_16640__$1 = (function (){var statearr_16660 = state_16640;(statearr_16660[15] = inst_16593__$1);
return statearr_16660;
})();if(inst_16593__$1)
{var statearr_16661_16700 = state_16640__$1;(statearr_16661_16700[1] = 13);
} else
{var statearr_16662_16701 = state_16640__$1;(statearr_16662_16701[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 12))
{var inst_16613 = (state_16640[2]);var state_16640__$1 = state_16640;var statearr_16663_16702 = state_16640__$1;(statearr_16663_16702[2] = inst_16613);
(statearr_16663_16702[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 13))
{var inst_16593 = (state_16640[15]);var inst_16595 = cljs.core.chunked_seq_QMARK_.call(null,inst_16593);var state_16640__$1 = state_16640;if(inst_16595)
{var statearr_16664_16703 = state_16640__$1;(statearr_16664_16703[1] = 16);
} else
{var statearr_16665_16704 = state_16640__$1;(statearr_16665_16704[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 14))
{var state_16640__$1 = state_16640;var statearr_16666_16705 = state_16640__$1;(statearr_16666_16705[2] = null);
(statearr_16666_16705[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 15))
{var inst_16611 = (state_16640[2]);var state_16640__$1 = state_16640;var statearr_16667_16706 = state_16640__$1;(statearr_16667_16706[2] = inst_16611);
(statearr_16667_16706[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 16))
{var inst_16593 = (state_16640[15]);var inst_16597 = cljs.core.chunk_first.call(null,inst_16593);var inst_16598 = cljs.core.chunk_rest.call(null,inst_16593);var inst_16599 = cljs.core.count.call(null,inst_16597);var inst_16579 = inst_16598;var inst_16580 = inst_16597;var inst_16581 = inst_16599;var inst_16582 = 0;var state_16640__$1 = (function (){var statearr_16668 = state_16640;(statearr_16668[8] = inst_16582);
(statearr_16668[9] = inst_16581);
(statearr_16668[10] = inst_16579);
(statearr_16668[11] = inst_16580);
return statearr_16668;
})();var statearr_16669_16707 = state_16640__$1;(statearr_16669_16707[2] = null);
(statearr_16669_16707[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 17))
{var inst_16593 = (state_16640[15]);var inst_16602 = cljs.core.first.call(null,inst_16593);var inst_16603 = cljs.core.async.muxch_STAR_.call(null,inst_16602);var inst_16604 = cljs.core.async.close_BANG_.call(null,inst_16603);var inst_16605 = cljs.core.next.call(null,inst_16593);var inst_16579 = inst_16605;var inst_16580 = null;var inst_16581 = 0;var inst_16582 = 0;var state_16640__$1 = (function (){var statearr_16670 = state_16640;(statearr_16670[8] = inst_16582);
(statearr_16670[9] = inst_16581);
(statearr_16670[16] = inst_16604);
(statearr_16670[10] = inst_16579);
(statearr_16670[11] = inst_16580);
return statearr_16670;
})();var statearr_16671_16708 = state_16640__$1;(statearr_16671_16708[2] = null);
(statearr_16671_16708[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 18))
{var inst_16608 = (state_16640[2]);var state_16640__$1 = state_16640;var statearr_16672_16709 = state_16640__$1;(statearr_16672_16709[2] = inst_16608);
(statearr_16672_16709[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 19))
{var state_16640__$1 = state_16640;var statearr_16673_16710 = state_16640__$1;(statearr_16673_16710[2] = null);
(statearr_16673_16710[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 20))
{var state_16640__$1 = state_16640;var statearr_16674_16711 = state_16640__$1;(statearr_16674_16711[2] = null);
(statearr_16674_16711[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 21))
{var inst_16633 = (state_16640[2]);var state_16640__$1 = (function (){var statearr_16675 = state_16640;(statearr_16675[17] = inst_16633);
return statearr_16675;
})();var statearr_16676_16712 = state_16640__$1;(statearr_16676_16712[2] = null);
(statearr_16676_16712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 22))
{var inst_16630 = (state_16640[2]);var state_16640__$1 = state_16640;var statearr_16677_16713 = state_16640__$1;(statearr_16677_16713[2] = inst_16630);
(statearr_16677_16713[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 23))
{var inst_16617 = (state_16640[12]);var inst_16621 = (state_16640[2]);var inst_16622 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16617);var state_16640__$1 = (function (){var statearr_16678 = state_16640;(statearr_16678[18] = inst_16621);
return statearr_16678;
})();var statearr_16679_16714 = state_16640__$1;(statearr_16679_16714[2] = inst_16622);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16640__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16641 === 24))
{var inst_16619 = (state_16640[13]);var inst_16569 = (state_16640[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16640,23,Object,null,22);var inst_16626 = cljs.core.async.muxch_STAR_.call(null,inst_16619);var state_16640__$1 = state_16640;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16640__$1,25,inst_16626,inst_16569);
} else
{if((state_val_16641 === 25))
{var inst_16628 = (state_16640[2]);var state_16640__$1 = state_16640;var statearr_16680_16715 = state_16640__$1;(statearr_16680_16715[2] = inst_16628);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16640__$1);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_16684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16684[0] = state_machine__6583__auto__);
(statearr_16684[1] = 1);
return statearr_16684;
});
var state_machine__6583__auto____1 = (function (state_16640){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_16640);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e16685){if((e16685 instanceof Object))
{var ex__6586__auto__ = e16685;var statearr_16686_16716 = state_16640;(statearr_16686_16716[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16640);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16717 = state_16640;
state_16640 = G__16717;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_16640){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_16640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_16687 = f__6653__auto__.call(null);(statearr_16687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___16688);
return statearr_16687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
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
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6652__auto___16854 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_16824){var state_val_16825 = (state_16824[1]);if((state_val_16825 === 1))
{var state_16824__$1 = state_16824;var statearr_16826_16855 = state_16824__$1;(statearr_16826_16855[2] = null);
(statearr_16826_16855[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 2))
{var inst_16787 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16788 = 0;var state_16824__$1 = (function (){var statearr_16827 = state_16824;(statearr_16827[7] = inst_16788);
(statearr_16827[8] = inst_16787);
return statearr_16827;
})();var statearr_16828_16856 = state_16824__$1;(statearr_16828_16856[2] = null);
(statearr_16828_16856[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 3))
{var inst_16822 = (state_16824[2]);var state_16824__$1 = state_16824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16824__$1,inst_16822);
} else
{if((state_val_16825 === 4))
{var inst_16788 = (state_16824[7]);var inst_16790 = (inst_16788 < cnt);var state_16824__$1 = state_16824;if(cljs.core.truth_(inst_16790))
{var statearr_16829_16857 = state_16824__$1;(statearr_16829_16857[1] = 6);
} else
{var statearr_16830_16858 = state_16824__$1;(statearr_16830_16858[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 5))
{var inst_16808 = (state_16824[2]);var state_16824__$1 = (function (){var statearr_16831 = state_16824;(statearr_16831[9] = inst_16808);
return statearr_16831;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16824__$1,12,dchan);
} else
{if((state_val_16825 === 6))
{var state_16824__$1 = state_16824;var statearr_16832_16859 = state_16824__$1;(statearr_16832_16859[2] = null);
(statearr_16832_16859[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 7))
{var state_16824__$1 = state_16824;var statearr_16833_16860 = state_16824__$1;(statearr_16833_16860[2] = null);
(statearr_16833_16860[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 8))
{var inst_16806 = (state_16824[2]);var state_16824__$1 = state_16824;var statearr_16834_16861 = state_16824__$1;(statearr_16834_16861[2] = inst_16806);
(statearr_16834_16861[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 9))
{var inst_16788 = (state_16824[7]);var inst_16801 = (state_16824[2]);var inst_16802 = (inst_16788 + 1);var inst_16788__$1 = inst_16802;var state_16824__$1 = (function (){var statearr_16835 = state_16824;(statearr_16835[7] = inst_16788__$1);
(statearr_16835[10] = inst_16801);
return statearr_16835;
})();var statearr_16836_16862 = state_16824__$1;(statearr_16836_16862[2] = null);
(statearr_16836_16862[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 10))
{var inst_16792 = (state_16824[2]);var inst_16793 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16824__$1 = (function (){var statearr_16837 = state_16824;(statearr_16837[11] = inst_16792);
return statearr_16837;
})();var statearr_16838_16863 = state_16824__$1;(statearr_16838_16863[2] = inst_16793);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16824__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 11))
{var inst_16788 = (state_16824[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16824,10,Object,null,9);var inst_16797 = chs__$1.call(null,inst_16788);var inst_16798 = done.call(null,inst_16788);var inst_16799 = cljs.core.async.take_BANG_.call(null,inst_16797,inst_16798);var state_16824__$1 = state_16824;var statearr_16839_16864 = state_16824__$1;(statearr_16839_16864[2] = inst_16799);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16824__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 12))
{var inst_16810 = (state_16824[12]);var inst_16810__$1 = (state_16824[2]);var inst_16811 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16810__$1);var state_16824__$1 = (function (){var statearr_16840 = state_16824;(statearr_16840[12] = inst_16810__$1);
return statearr_16840;
})();if(cljs.core.truth_(inst_16811))
{var statearr_16841_16865 = state_16824__$1;(statearr_16841_16865[1] = 13);
} else
{var statearr_16842_16866 = state_16824__$1;(statearr_16842_16866[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 13))
{var inst_16813 = cljs.core.async.close_BANG_.call(null,out);var state_16824__$1 = state_16824;var statearr_16843_16867 = state_16824__$1;(statearr_16843_16867[2] = inst_16813);
(statearr_16843_16867[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 14))
{var inst_16810 = (state_16824[12]);var inst_16815 = cljs.core.apply.call(null,f,inst_16810);var state_16824__$1 = state_16824;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16824__$1,16,out,inst_16815);
} else
{if((state_val_16825 === 15))
{var inst_16820 = (state_16824[2]);var state_16824__$1 = state_16824;var statearr_16844_16868 = state_16824__$1;(statearr_16844_16868[2] = inst_16820);
(statearr_16844_16868[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16825 === 16))
{var inst_16817 = (state_16824[2]);var state_16824__$1 = (function (){var statearr_16845 = state_16824;(statearr_16845[13] = inst_16817);
return statearr_16845;
})();var statearr_16846_16869 = state_16824__$1;(statearr_16846_16869[2] = null);
(statearr_16846_16869[1] = 2);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_16850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16850[0] = state_machine__6583__auto__);
(statearr_16850[1] = 1);
return statearr_16850;
});
var state_machine__6583__auto____1 = (function (state_16824){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_16824);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e16851){if((e16851 instanceof Object))
{var ex__6586__auto__ = e16851;var statearr_16852_16870 = state_16824;(statearr_16852_16870[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16824);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16851;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16871 = state_16824;
state_16824 = G__16871;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_16824){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_16824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_16853 = f__6653__auto__.call(null);(statearr_16853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___16854);
return statearr_16853;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6652__auto___16979 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_16955){var state_val_16956 = (state_16955[1]);if((state_val_16956 === 1))
{var inst_16926 = cljs.core.vec.call(null,chs);var inst_16927 = inst_16926;var state_16955__$1 = (function (){var statearr_16957 = state_16955;(statearr_16957[7] = inst_16927);
return statearr_16957;
})();var statearr_16958_16980 = state_16955__$1;(statearr_16958_16980[2] = null);
(statearr_16958_16980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16956 === 2))
{var inst_16927 = (state_16955[7]);var inst_16929 = cljs.core.count.call(null,inst_16927);var inst_16930 = (inst_16929 > 0);var state_16955__$1 = state_16955;if(cljs.core.truth_(inst_16930))
{var statearr_16959_16981 = state_16955__$1;(statearr_16959_16981[1] = 4);
} else
{var statearr_16960_16982 = state_16955__$1;(statearr_16960_16982[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16956 === 3))
{var inst_16953 = (state_16955[2]);var state_16955__$1 = state_16955;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16955__$1,inst_16953);
} else
{if((state_val_16956 === 4))
{var inst_16927 = (state_16955[7]);var state_16955__$1 = state_16955;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16955__$1,7,inst_16927);
} else
{if((state_val_16956 === 5))
{var inst_16949 = cljs.core.async.close_BANG_.call(null,out);var state_16955__$1 = state_16955;var statearr_16961_16983 = state_16955__$1;(statearr_16961_16983[2] = inst_16949);
(statearr_16961_16983[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16956 === 6))
{var inst_16951 = (state_16955[2]);var state_16955__$1 = state_16955;var statearr_16962_16984 = state_16955__$1;(statearr_16962_16984[2] = inst_16951);
(statearr_16962_16984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16956 === 7))
{var inst_16934 = (state_16955[8]);var inst_16935 = (state_16955[9]);var inst_16934__$1 = (state_16955[2]);var inst_16935__$1 = cljs.core.nth.call(null,inst_16934__$1,0,null);var inst_16936 = cljs.core.nth.call(null,inst_16934__$1,1,null);var inst_16937 = (inst_16935__$1 == null);var state_16955__$1 = (function (){var statearr_16963 = state_16955;(statearr_16963[8] = inst_16934__$1);
(statearr_16963[9] = inst_16935__$1);
(statearr_16963[10] = inst_16936);
return statearr_16963;
})();if(cljs.core.truth_(inst_16937))
{var statearr_16964_16985 = state_16955__$1;(statearr_16964_16985[1] = 8);
} else
{var statearr_16965_16986 = state_16955__$1;(statearr_16965_16986[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16956 === 8))
{var inst_16927 = (state_16955[7]);var inst_16934 = (state_16955[8]);var inst_16935 = (state_16955[9]);var inst_16936 = (state_16955[10]);var inst_16939 = (function (){var c = inst_16936;var v = inst_16935;var vec__16932 = inst_16934;var cs = inst_16927;return ((function (c,v,vec__16932,cs,inst_16927,inst_16934,inst_16935,inst_16936,state_val_16956){
return (function (p1__16872_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16872_SHARP_);
});
;})(c,v,vec__16932,cs,inst_16927,inst_16934,inst_16935,inst_16936,state_val_16956))
})();var inst_16940 = cljs.core.filterv.call(null,inst_16939,inst_16927);var inst_16927__$1 = inst_16940;var state_16955__$1 = (function (){var statearr_16966 = state_16955;(statearr_16966[7] = inst_16927__$1);
return statearr_16966;
})();var statearr_16967_16987 = state_16955__$1;(statearr_16967_16987[2] = null);
(statearr_16967_16987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16956 === 9))
{var inst_16935 = (state_16955[9]);var state_16955__$1 = state_16955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16955__$1,11,out,inst_16935);
} else
{if((state_val_16956 === 10))
{var inst_16947 = (state_16955[2]);var state_16955__$1 = state_16955;var statearr_16969_16988 = state_16955__$1;(statearr_16969_16988[2] = inst_16947);
(statearr_16969_16988[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16956 === 11))
{var inst_16927 = (state_16955[7]);var inst_16944 = (state_16955[2]);var tmp16968 = inst_16927;var inst_16927__$1 = tmp16968;var state_16955__$1 = (function (){var statearr_16970 = state_16955;(statearr_16970[7] = inst_16927__$1);
(statearr_16970[11] = inst_16944);
return statearr_16970;
})();var statearr_16971_16989 = state_16955__$1;(statearr_16971_16989[2] = null);
(statearr_16971_16989[1] = 2);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_16975 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16975[0] = state_machine__6583__auto__);
(statearr_16975[1] = 1);
return statearr_16975;
});
var state_machine__6583__auto____1 = (function (state_16955){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_16955);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e16976){if((e16976 instanceof Object))
{var ex__6586__auto__ = e16976;var statearr_16977_16990 = state_16955;(statearr_16977_16990[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16955);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16991 = state_16955;
state_16955 = G__16991;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_16955){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_16955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_16978 = f__6653__auto__.call(null);(statearr_16978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___16979);
return statearr_16978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6652__auto___17084 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_17061){var state_val_17062 = (state_17061[1]);if((state_val_17062 === 1))
{var inst_17038 = 0;var state_17061__$1 = (function (){var statearr_17063 = state_17061;(statearr_17063[7] = inst_17038);
return statearr_17063;
})();var statearr_17064_17085 = state_17061__$1;(statearr_17064_17085[2] = null);
(statearr_17064_17085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17062 === 2))
{var inst_17038 = (state_17061[7]);var inst_17040 = (inst_17038 < n);var state_17061__$1 = state_17061;if(cljs.core.truth_(inst_17040))
{var statearr_17065_17086 = state_17061__$1;(statearr_17065_17086[1] = 4);
} else
{var statearr_17066_17087 = state_17061__$1;(statearr_17066_17087[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17062 === 3))
{var inst_17058 = (state_17061[2]);var inst_17059 = cljs.core.async.close_BANG_.call(null,out);var state_17061__$1 = (function (){var statearr_17067 = state_17061;(statearr_17067[8] = inst_17058);
return statearr_17067;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17061__$1,inst_17059);
} else
{if((state_val_17062 === 4))
{var state_17061__$1 = state_17061;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17061__$1,7,ch);
} else
{if((state_val_17062 === 5))
{var state_17061__$1 = state_17061;var statearr_17068_17088 = state_17061__$1;(statearr_17068_17088[2] = null);
(statearr_17068_17088[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17062 === 6))
{var inst_17056 = (state_17061[2]);var state_17061__$1 = state_17061;var statearr_17069_17089 = state_17061__$1;(statearr_17069_17089[2] = inst_17056);
(statearr_17069_17089[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17062 === 7))
{var inst_17043 = (state_17061[9]);var inst_17043__$1 = (state_17061[2]);var inst_17044 = (inst_17043__$1 == null);var inst_17045 = cljs.core.not.call(null,inst_17044);var state_17061__$1 = (function (){var statearr_17070 = state_17061;(statearr_17070[9] = inst_17043__$1);
return statearr_17070;
})();if(inst_17045)
{var statearr_17071_17090 = state_17061__$1;(statearr_17071_17090[1] = 8);
} else
{var statearr_17072_17091 = state_17061__$1;(statearr_17072_17091[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17062 === 8))
{var inst_17043 = (state_17061[9]);var state_17061__$1 = state_17061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17061__$1,11,out,inst_17043);
} else
{if((state_val_17062 === 9))
{var state_17061__$1 = state_17061;var statearr_17073_17092 = state_17061__$1;(statearr_17073_17092[2] = null);
(statearr_17073_17092[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17062 === 10))
{var inst_17053 = (state_17061[2]);var state_17061__$1 = state_17061;var statearr_17074_17093 = state_17061__$1;(statearr_17074_17093[2] = inst_17053);
(statearr_17074_17093[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17062 === 11))
{var inst_17038 = (state_17061[7]);var inst_17048 = (state_17061[2]);var inst_17049 = (inst_17038 + 1);var inst_17038__$1 = inst_17049;var state_17061__$1 = (function (){var statearr_17075 = state_17061;(statearr_17075[7] = inst_17038__$1);
(statearr_17075[10] = inst_17048);
return statearr_17075;
})();var statearr_17076_17094 = state_17061__$1;(statearr_17076_17094[2] = null);
(statearr_17076_17094[1] = 2);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_17080 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17080[0] = state_machine__6583__auto__);
(statearr_17080[1] = 1);
return statearr_17080;
});
var state_machine__6583__auto____1 = (function (state_17061){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_17061);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e17081){if((e17081 instanceof Object))
{var ex__6586__auto__ = e17081;var statearr_17082_17095 = state_17061;(statearr_17082_17095[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17096 = state_17061;
state_17061 = G__17096;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_17061){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_17061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_17083 = f__6653__auto__.call(null);(statearr_17083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___17084);
return statearr_17083;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6652__auto___17193 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_17168){var state_val_17169 = (state_17168[1]);if((state_val_17169 === 1))
{var inst_17145 = null;var state_17168__$1 = (function (){var statearr_17170 = state_17168;(statearr_17170[7] = inst_17145);
return statearr_17170;
})();var statearr_17171_17194 = state_17168__$1;(statearr_17171_17194[2] = null);
(statearr_17171_17194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 2))
{var state_17168__$1 = state_17168;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17168__$1,4,ch);
} else
{if((state_val_17169 === 3))
{var inst_17165 = (state_17168[2]);var inst_17166 = cljs.core.async.close_BANG_.call(null,out);var state_17168__$1 = (function (){var statearr_17172 = state_17168;(statearr_17172[8] = inst_17165);
return statearr_17172;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17168__$1,inst_17166);
} else
{if((state_val_17169 === 4))
{var inst_17148 = (state_17168[9]);var inst_17148__$1 = (state_17168[2]);var inst_17149 = (inst_17148__$1 == null);var inst_17150 = cljs.core.not.call(null,inst_17149);var state_17168__$1 = (function (){var statearr_17173 = state_17168;(statearr_17173[9] = inst_17148__$1);
return statearr_17173;
})();if(inst_17150)
{var statearr_17174_17195 = state_17168__$1;(statearr_17174_17195[1] = 5);
} else
{var statearr_17175_17196 = state_17168__$1;(statearr_17175_17196[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 5))
{var inst_17148 = (state_17168[9]);var inst_17145 = (state_17168[7]);var inst_17152 = cljs.core._EQ_.call(null,inst_17148,inst_17145);var state_17168__$1 = state_17168;if(inst_17152)
{var statearr_17176_17197 = state_17168__$1;(statearr_17176_17197[1] = 8);
} else
{var statearr_17177_17198 = state_17168__$1;(statearr_17177_17198[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 6))
{var state_17168__$1 = state_17168;var statearr_17179_17199 = state_17168__$1;(statearr_17179_17199[2] = null);
(statearr_17179_17199[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 7))
{var inst_17163 = (state_17168[2]);var state_17168__$1 = state_17168;var statearr_17180_17200 = state_17168__$1;(statearr_17180_17200[2] = inst_17163);
(statearr_17180_17200[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 8))
{var inst_17145 = (state_17168[7]);var tmp17178 = inst_17145;var inst_17145__$1 = tmp17178;var state_17168__$1 = (function (){var statearr_17181 = state_17168;(statearr_17181[7] = inst_17145__$1);
return statearr_17181;
})();var statearr_17182_17201 = state_17168__$1;(statearr_17182_17201[2] = null);
(statearr_17182_17201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 9))
{var inst_17148 = (state_17168[9]);var state_17168__$1 = state_17168;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17168__$1,11,out,inst_17148);
} else
{if((state_val_17169 === 10))
{var inst_17160 = (state_17168[2]);var state_17168__$1 = state_17168;var statearr_17183_17202 = state_17168__$1;(statearr_17183_17202[2] = inst_17160);
(statearr_17183_17202[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17169 === 11))
{var inst_17148 = (state_17168[9]);var inst_17157 = (state_17168[2]);var inst_17145 = inst_17148;var state_17168__$1 = (function (){var statearr_17184 = state_17168;(statearr_17184[10] = inst_17157);
(statearr_17184[7] = inst_17145);
return statearr_17184;
})();var statearr_17185_17203 = state_17168__$1;(statearr_17185_17203[2] = null);
(statearr_17185_17203[1] = 2);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_17189 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17189[0] = state_machine__6583__auto__);
(statearr_17189[1] = 1);
return statearr_17189;
});
var state_machine__6583__auto____1 = (function (state_17168){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_17168);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e17190){if((e17190 instanceof Object))
{var ex__6586__auto__ = e17190;var statearr_17191_17204 = state_17168;(statearr_17191_17204[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17168);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17190;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17205 = state_17168;
state_17168 = G__17205;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_17168){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_17168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_17192 = f__6653__auto__.call(null);(statearr_17192[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___17193);
return statearr_17192;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6652__auto___17340 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_17310){var state_val_17311 = (state_17310[1]);if((state_val_17311 === 1))
{var inst_17273 = (new Array(n));var inst_17274 = inst_17273;var inst_17275 = 0;var state_17310__$1 = (function (){var statearr_17312 = state_17310;(statearr_17312[7] = inst_17275);
(statearr_17312[8] = inst_17274);
return statearr_17312;
})();var statearr_17313_17341 = state_17310__$1;(statearr_17313_17341[2] = null);
(statearr_17313_17341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 2))
{var state_17310__$1 = state_17310;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17310__$1,4,ch);
} else
{if((state_val_17311 === 3))
{var inst_17308 = (state_17310[2]);var state_17310__$1 = state_17310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17310__$1,inst_17308);
} else
{if((state_val_17311 === 4))
{var inst_17278 = (state_17310[9]);var inst_17278__$1 = (state_17310[2]);var inst_17279 = (inst_17278__$1 == null);var inst_17280 = cljs.core.not.call(null,inst_17279);var state_17310__$1 = (function (){var statearr_17314 = state_17310;(statearr_17314[9] = inst_17278__$1);
return statearr_17314;
})();if(inst_17280)
{var statearr_17315_17342 = state_17310__$1;(statearr_17315_17342[1] = 5);
} else
{var statearr_17316_17343 = state_17310__$1;(statearr_17316_17343[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 5))
{var inst_17278 = (state_17310[9]);var inst_17275 = (state_17310[7]);var inst_17274 = (state_17310[8]);var inst_17283 = (state_17310[10]);var inst_17282 = (inst_17274[inst_17275] = inst_17278);var inst_17283__$1 = (inst_17275 + 1);var inst_17284 = (inst_17283__$1 < n);var state_17310__$1 = (function (){var statearr_17317 = state_17310;(statearr_17317[11] = inst_17282);
(statearr_17317[10] = inst_17283__$1);
return statearr_17317;
})();if(cljs.core.truth_(inst_17284))
{var statearr_17318_17344 = state_17310__$1;(statearr_17318_17344[1] = 8);
} else
{var statearr_17319_17345 = state_17310__$1;(statearr_17319_17345[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 6))
{var inst_17275 = (state_17310[7]);var inst_17296 = (inst_17275 > 0);var state_17310__$1 = state_17310;if(cljs.core.truth_(inst_17296))
{var statearr_17321_17346 = state_17310__$1;(statearr_17321_17346[1] = 12);
} else
{var statearr_17322_17347 = state_17310__$1;(statearr_17322_17347[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 7))
{var inst_17306 = (state_17310[2]);var state_17310__$1 = state_17310;var statearr_17323_17348 = state_17310__$1;(statearr_17323_17348[2] = inst_17306);
(statearr_17323_17348[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 8))
{var inst_17274 = (state_17310[8]);var inst_17283 = (state_17310[10]);var tmp17320 = inst_17274;var inst_17274__$1 = tmp17320;var inst_17275 = inst_17283;var state_17310__$1 = (function (){var statearr_17324 = state_17310;(statearr_17324[7] = inst_17275);
(statearr_17324[8] = inst_17274__$1);
return statearr_17324;
})();var statearr_17325_17349 = state_17310__$1;(statearr_17325_17349[2] = null);
(statearr_17325_17349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 9))
{var inst_17274 = (state_17310[8]);var inst_17288 = cljs.core.vec.call(null,inst_17274);var state_17310__$1 = state_17310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17310__$1,11,out,inst_17288);
} else
{if((state_val_17311 === 10))
{var inst_17294 = (state_17310[2]);var state_17310__$1 = state_17310;var statearr_17326_17350 = state_17310__$1;(statearr_17326_17350[2] = inst_17294);
(statearr_17326_17350[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 11))
{var inst_17290 = (state_17310[2]);var inst_17291 = (new Array(n));var inst_17274 = inst_17291;var inst_17275 = 0;var state_17310__$1 = (function (){var statearr_17327 = state_17310;(statearr_17327[7] = inst_17275);
(statearr_17327[8] = inst_17274);
(statearr_17327[12] = inst_17290);
return statearr_17327;
})();var statearr_17328_17351 = state_17310__$1;(statearr_17328_17351[2] = null);
(statearr_17328_17351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 12))
{var inst_17274 = (state_17310[8]);var inst_17298 = cljs.core.vec.call(null,inst_17274);var state_17310__$1 = state_17310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17310__$1,15,out,inst_17298);
} else
{if((state_val_17311 === 13))
{var state_17310__$1 = state_17310;var statearr_17329_17352 = state_17310__$1;(statearr_17329_17352[2] = null);
(statearr_17329_17352[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 14))
{var inst_17303 = (state_17310[2]);var inst_17304 = cljs.core.async.close_BANG_.call(null,out);var state_17310__$1 = (function (){var statearr_17330 = state_17310;(statearr_17330[13] = inst_17303);
return statearr_17330;
})();var statearr_17331_17353 = state_17310__$1;(statearr_17331_17353[2] = inst_17304);
(statearr_17331_17353[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17311 === 15))
{var inst_17300 = (state_17310[2]);var state_17310__$1 = state_17310;var statearr_17332_17354 = state_17310__$1;(statearr_17332_17354[2] = inst_17300);
(statearr_17332_17354[1] = 14);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_17336 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17336[0] = state_machine__6583__auto__);
(statearr_17336[1] = 1);
return statearr_17336;
});
var state_machine__6583__auto____1 = (function (state_17310){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_17310);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e17337){if((e17337 instanceof Object))
{var ex__6586__auto__ = e17337;var statearr_17338_17355 = state_17310;(statearr_17338_17355[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17310);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17356 = state_17310;
state_17310 = G__17356;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_17310){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_17310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_17339 = f__6653__auto__.call(null);(statearr_17339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___17340);
return statearr_17339;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6652__auto___17499 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_17469){var state_val_17470 = (state_17469[1]);if((state_val_17470 === 1))
{var inst_17428 = [];var inst_17429 = inst_17428;var inst_17430 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17469__$1 = (function (){var statearr_17471 = state_17469;(statearr_17471[7] = inst_17430);
(statearr_17471[8] = inst_17429);
return statearr_17471;
})();var statearr_17472_17500 = state_17469__$1;(statearr_17472_17500[2] = null);
(statearr_17472_17500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 2))
{var state_17469__$1 = state_17469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17469__$1,4,ch);
} else
{if((state_val_17470 === 3))
{var inst_17467 = (state_17469[2]);var state_17469__$1 = state_17469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17469__$1,inst_17467);
} else
{if((state_val_17470 === 4))
{var inst_17433 = (state_17469[9]);var inst_17433__$1 = (state_17469[2]);var inst_17434 = (inst_17433__$1 == null);var inst_17435 = cljs.core.not.call(null,inst_17434);var state_17469__$1 = (function (){var statearr_17473 = state_17469;(statearr_17473[9] = inst_17433__$1);
return statearr_17473;
})();if(inst_17435)
{var statearr_17474_17501 = state_17469__$1;(statearr_17474_17501[1] = 5);
} else
{var statearr_17475_17502 = state_17469__$1;(statearr_17475_17502[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 5))
{var inst_17433 = (state_17469[9]);var inst_17430 = (state_17469[7]);var inst_17437 = (state_17469[10]);var inst_17437__$1 = f.call(null,inst_17433);var inst_17438 = cljs.core._EQ_.call(null,inst_17437__$1,inst_17430);var inst_17439 = cljs.core.keyword_identical_QMARK_.call(null,inst_17430,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17440 = (inst_17438) || (inst_17439);var state_17469__$1 = (function (){var statearr_17476 = state_17469;(statearr_17476[10] = inst_17437__$1);
return statearr_17476;
})();if(cljs.core.truth_(inst_17440))
{var statearr_17477_17503 = state_17469__$1;(statearr_17477_17503[1] = 8);
} else
{var statearr_17478_17504 = state_17469__$1;(statearr_17478_17504[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 6))
{var inst_17429 = (state_17469[8]);var inst_17454 = inst_17429.length;var inst_17455 = (inst_17454 > 0);var state_17469__$1 = state_17469;if(cljs.core.truth_(inst_17455))
{var statearr_17480_17505 = state_17469__$1;(statearr_17480_17505[1] = 12);
} else
{var statearr_17481_17506 = state_17469__$1;(statearr_17481_17506[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 7))
{var inst_17465 = (state_17469[2]);var state_17469__$1 = state_17469;var statearr_17482_17507 = state_17469__$1;(statearr_17482_17507[2] = inst_17465);
(statearr_17482_17507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 8))
{var inst_17433 = (state_17469[9]);var inst_17429 = (state_17469[8]);var inst_17437 = (state_17469[10]);var inst_17442 = inst_17429.push(inst_17433);var tmp17479 = inst_17429;var inst_17429__$1 = tmp17479;var inst_17430 = inst_17437;var state_17469__$1 = (function (){var statearr_17483 = state_17469;(statearr_17483[7] = inst_17430);
(statearr_17483[8] = inst_17429__$1);
(statearr_17483[11] = inst_17442);
return statearr_17483;
})();var statearr_17484_17508 = state_17469__$1;(statearr_17484_17508[2] = null);
(statearr_17484_17508[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 9))
{var inst_17429 = (state_17469[8]);var inst_17445 = cljs.core.vec.call(null,inst_17429);var state_17469__$1 = state_17469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17469__$1,11,out,inst_17445);
} else
{if((state_val_17470 === 10))
{var inst_17452 = (state_17469[2]);var state_17469__$1 = state_17469;var statearr_17485_17509 = state_17469__$1;(statearr_17485_17509[2] = inst_17452);
(statearr_17485_17509[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 11))
{var inst_17433 = (state_17469[9]);var inst_17437 = (state_17469[10]);var inst_17447 = (state_17469[2]);var inst_17448 = [];var inst_17449 = inst_17448.push(inst_17433);var inst_17429 = inst_17448;var inst_17430 = inst_17437;var state_17469__$1 = (function (){var statearr_17486 = state_17469;(statearr_17486[12] = inst_17449);
(statearr_17486[7] = inst_17430);
(statearr_17486[13] = inst_17447);
(statearr_17486[8] = inst_17429);
return statearr_17486;
})();var statearr_17487_17510 = state_17469__$1;(statearr_17487_17510[2] = null);
(statearr_17487_17510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 12))
{var inst_17429 = (state_17469[8]);var inst_17457 = cljs.core.vec.call(null,inst_17429);var state_17469__$1 = state_17469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17469__$1,15,out,inst_17457);
} else
{if((state_val_17470 === 13))
{var state_17469__$1 = state_17469;var statearr_17488_17511 = state_17469__$1;(statearr_17488_17511[2] = null);
(statearr_17488_17511[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 14))
{var inst_17462 = (state_17469[2]);var inst_17463 = cljs.core.async.close_BANG_.call(null,out);var state_17469__$1 = (function (){var statearr_17489 = state_17469;(statearr_17489[14] = inst_17462);
return statearr_17489;
})();var statearr_17490_17512 = state_17469__$1;(statearr_17490_17512[2] = inst_17463);
(statearr_17490_17512[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17470 === 15))
{var inst_17459 = (state_17469[2]);var state_17469__$1 = state_17469;var statearr_17491_17513 = state_17469__$1;(statearr_17491_17513[2] = inst_17459);
(statearr_17491_17513[1] = 14);
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
});return ((function (switch__6582__auto__){
return (function() {
var state_machine__6583__auto__ = null;
var state_machine__6583__auto____0 = (function (){var statearr_17495 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17495[0] = state_machine__6583__auto__);
(statearr_17495[1] = 1);
return statearr_17495;
});
var state_machine__6583__auto____1 = (function (state_17469){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_17469);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e17496){if((e17496 instanceof Object))
{var ex__6586__auto__ = e17496;var statearr_17497_17514 = state_17469;(statearr_17497_17514[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17515 = state_17469;
state_17469 = G__17515;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_17469){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_17469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_17498 = f__6653__auto__.call(null);(statearr_17498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___17499);
return statearr_17498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
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