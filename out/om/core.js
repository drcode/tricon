// Compiled by ClojureScript 0.0-2127
goog.provide('om.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
om.core.IInitState = (function (){var obj14820 = {};return obj14820;
})();
om.core.init_state = (function init_state(this$,owner){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.om$core$IInitState$init_state$arity$2;
} else
{return and__3393__auto__;
}
})())
{return this$.om$core$IInitState$init_state$arity$2(this$,owner);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (om.core.init_state[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (om.core.init_state["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IInitState.init-state",this$);
}
}
})().call(null,this$,owner);
}
});
om.core.IShouldUpdate = (function (){var obj14822 = {};return obj14822;
})();
om.core.should_update = (function should_update(this$,owner,next_props,next_state){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.om$core$IShouldUpdate$should_update$arity$4;
} else
{return and__3393__auto__;
}
})())
{return this$.om$core$IShouldUpdate$should_update$arity$4(this$,owner,next_props,next_state);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (om.core.should_update[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (om.core.should_update["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IShouldUpdate.should-update",this$);
}
}
})().call(null,this$,owner,next_props,next_state);
}
});
om.core.IWillMount = (function (){var obj14824 = {};return obj14824;
})();
om.core.will_mount = (function will_mount(this$,owner){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.om$core$IWillMount$will_mount$arity$2;
} else
{return and__3393__auto__;
}
})())
{return this$.om$core$IWillMount$will_mount$arity$2(this$,owner);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (om.core.will_mount[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (om.core.will_mount["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillMount.will-mount",this$);
}
}
})().call(null,this$,owner);
}
});
om.core.IDidMount = (function (){var obj14826 = {};return obj14826;
})();
om.core.did_mount = (function did_mount(this$,owner,node){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.om$core$IDidMount$did_mount$arity$3;
} else
{return and__3393__auto__;
}
})())
{return this$.om$core$IDidMount$did_mount$arity$3(this$,owner,node);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (om.core.did_mount[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (om.core.did_mount["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidMount.did-mount",this$);
}
}
})().call(null,this$,owner,node);
}
});
om.core.IWillUnmount = (function (){var obj14828 = {};return obj14828;
})();
om.core.will_unmount = (function will_unmount(this$,owner){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.om$core$IWillUnmount$will_unmount$arity$2;
} else
{return and__3393__auto__;
}
})())
{return this$.om$core$IWillUnmount$will_unmount$arity$2(this$,owner);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (om.core.will_unmount[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (om.core.will_unmount["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUnmount.will-unmount",this$);
}
}
})().call(null,this$,owner);
}
});
om.core.IWillUpdate = (function (){var obj14830 = {};return obj14830;
})();
om.core.will_update = (function will_update(this$,owner,next_props,next_state){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.om$core$IWillUpdate$will_update$arity$4;
} else
{return and__3393__auto__;
}
})())
{return this$.om$core$IWillUpdate$will_update$arity$4(this$,owner,next_props,next_state);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (om.core.will_update[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (om.core.will_update["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IWillUpdate.will-update",this$);
}
}
})().call(null,this$,owner,next_props,next_state);
}
});
om.core.IDidUpdate = (function (){var obj14832 = {};return obj14832;
})();
om.core.did_update = (function did_update(this$,owner,prev_props,prev_state,root_node){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.om$core$IDidUpdate$did_update$arity$5;
} else
{return and__3393__auto__;
}
})())
{return this$.om$core$IDidUpdate$did_update$arity$5(this$,owner,prev_props,prev_state,root_node);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (om.core.did_update[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (om.core.did_update["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDidUpdate.did-update",this$);
}
}
})().call(null,this$,owner,prev_props,prev_state,root_node);
}
});
om.core.IRender = (function (){var obj14834 = {};return obj14834;
})();
om.core.render = (function render(this$,owner){if((function (){var and__3393__auto__ = this$;if(and__3393__auto__)
{return this$.om$core$IRender$render$arity$2;
} else
{return and__3393__auto__;
}
})())
{return this$.om$core$IRender$render$arity$2(this$,owner);
} else
{var x__4013__auto__ = (((this$ == null))?null:this$);return (function (){var or__3405__auto__ = (om.core.render[goog.typeOf(x__4013__auto__)]);if(or__3405__auto__)
{return or__3405__auto__;
} else
{var or__3405__auto____$1 = (om.core.render["_"]);if(or__3405__auto____$1)
{return or__3405__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRender.render",this$);
}
}
})().call(null,this$,owner);
}
});
om.core.Pure = React.createClass({"render": (function (){var this$ = this;return om.core.render.call(null,this$.props.children,this$);
}), "componentDidUpdate": (function (prev_props,prev_state,root_node){var this$ = this;var c = this$.props.children;if((function (){var G__14841 = c;if(G__14841)
{var bit__4036__auto__ = null;if(cljs.core.truth_((function (){var or__3405__auto__ = bit__4036__auto__;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return G__14841.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__14841.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14841);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__14841);
}
})())
{return om.core.did_update.call(null,c,this$,prev_props,prev_state,root_node);
} else
{return null;
}
}), "componentWillUpdate": (function (next_props,next_state){var this$ = this;var c = this$.props.children;if((function (){var G__14840 = c;if(G__14840)
{var bit__4036__auto__ = null;if(cljs.core.truth_((function (){var or__3405__auto__ = bit__4036__auto__;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return G__14840.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__14840.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14840);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__14840);
}
})())
{return om.core.will_update.call(null,c,this$,next_props,next_state);
} else
{return null;
}
}), "componentWillUnmount": (function (){var this$ = this;var c = this$.props.children;if((function (){var G__14839 = c;if(G__14839)
{var bit__4036__auto__ = null;if(cljs.core.truth_((function (){var or__3405__auto__ = bit__4036__auto__;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return G__14839.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__14839.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14839);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__14839);
}
})())
{return om.core.will_unmount.call(null,c,this$);
} else
{return null;
}
}), "componentDidMount": (function (node){var this$ = this;var c = this$.props.children;if((function (){var G__14838 = c;if(G__14838)
{var bit__4036__auto__ = null;if(cljs.core.truth_((function (){var or__3405__auto__ = bit__4036__auto__;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return G__14838.om$core$IDidMount$;
}
})()))
{return true;
} else
{if((!G__14838.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__14838);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidMount,G__14838);
}
})())
{return om.core.did_mount.call(null,c,this$,node);
} else
{return null;
}
}), "componentWillMount": (function (){var this$ = this;var c = this$.props.children;if((function (){var G__14837 = c;if(G__14837)
{var bit__4036__auto__ = null;if(cljs.core.truth_((function (){var or__3405__auto__ = bit__4036__auto__;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return G__14837.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__14837.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14837);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__14837);
}
})())
{return om.core.will_mount.call(null,c,this$);
} else
{return null;
}
}), "shouldComponentUpdate": (function (next_props,next_state){var this$ = this;var c = this$.props.children;if((function (){var G__14836 = c;if(G__14836)
{var bit__4036__auto__ = null;if(cljs.core.truth_((function (){var or__3405__auto__ = bit__4036__auto__;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return G__14836.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__14836.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__14836);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__14836);
}
})())
{return om.core.should_update.call(null,c,this$,next_props,next_state);
} else
{return !(((this$.props["value"]) === (next_props["value"])));
}
}), "getInitialState": (function (){var this$ = this;var c = this$.props.children;return {"__om_state": cljs.core.merge.call(null,cljs.core.PersistentArrayMap.EMPTY,(((function (){var G__14835 = c;if(G__14835)
{var bit__4036__auto__ = null;if(cljs.core.truth_((function (){var or__3405__auto__ = bit__4036__auto__;if(cljs.core.truth_(or__3405__auto__))
{return or__3405__auto__;
} else
{return G__14835.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__14835.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14835);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__14835);
}
})())?om.core.init_state.call(null,c,this$):null))};
})});
om.core.refresh_queued = false;
/**
* Takes an immutable value or value wrapped in an atom, an initial
* function f, and a DOM target. Installs an Om/React render loop. f
* must return an instance that at a minimum implements IRender (it
* may implement other React life cycle protocols). f must take a
* single argument which will be the root cursor. A cursor is simply
* data that has been annotated via metadata with state and path
* information - :om.core/state and :om.core/path respectively.
* 
* Example:
* 
* (root {:message :hello}
* (fn [data]
* ...)
* js/document.body)
*/
om.core.root = (function root(value,f,target){var state = (((value instanceof cljs.core.Atom))?value:cljs.core.atom.call(null,value));var rootf = ((function (state){
return (function (){om.core.refresh_queued = false;
var path = cljs.core.PersistentVector.EMPTY;return React.renderComponent((new om.core.Pure({"value": cljs.core.deref.call(null,state)},f.call(null,cljs.core.with_meta.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("om.core","state","om.core/state",3158836371),state,new cljs.core.Keyword("om.core","path","om.core/path",2667619423),path], null))))),target);
});})(state))
;cljs.core.add_watch.call(null,state,new cljs.core.Keyword("om.core","root","om.core/root",2668054562),(function (_,___$1,___$2,___$3){if(cljs.core.truth_(om.core.refresh_queued))
{return null;
} else
{om.core.refresh_queued = true;
if(typeof requestAnimationFrame !== 'undefined')
{return requestAnimationFrame(rootf);
} else
{return setTimeout(rootf,16);
}
}
}));
return rootf.call(null);
});
/**
* Builds a Om component. Takes an IRender instance returning function
* f, a cursor, and an optional third argument which may be a vector
* representing the path or a map of build specifications.
* 
* f - is a function of two arguments the first argument will be the
* cursor and the second argument will be a map of optional values
* passed to build. f must return at a minimum an IRender instance,
* this instance may implement other React life cycle protocols.
* 
* cursor - an immutable value annotated with :om.core/state and
* :om.core/path
* 
* sorm - If a vector, specifies the relative path into the tree that
* the component will be built from. If a map the following
* keys are allowed:
* 
* :path      - the relative path in the tree to build the component with
* :key       - a keyword that should be used to look up the key used by
* React itself when rendering sequential things.
* :react-key - an explicit react key
* :fn        - a function to apply to the data at the relative path before
* invoking f.
* :opts      - a map of options to pass to the component.
* 
* Example:
* 
* (build list-of-gadgets cursor
* {:path [:gadgets]
* :opts {:event-chan ...
* :narble ...}})
* 
*/
om.core.build = (function() {
var build = null;
var build__2 = (function (f,cursor){return build.call(null,f,cursor,null);
});
var build__3 = (function (f,cursor,sorm){if((sorm == null))
{return (new om.core.Pure({"value": cursor},f.call(null,cursor)));
} else
{if(cljs.core.sequential_QMARK_.call(null,sorm))
{var data = cljs.core.get_in.call(null,cursor,sorm);var cursor_SINGLEQUOTE_ = cljs.core.with_meta.call(null,data,cljs.core.update_in.call(null,cljs.core.meta.call(null,cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.core","path","om.core/path",2667619423)], null),cljs.core.into,sorm));return (new om.core.Pure({"value": data},f.call(null,cursor)));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var map__14843 = sorm;var map__14843__$1 = ((cljs.core.seq_QMARK_.call(null,map__14843))?cljs.core.apply.call(null,cljs.core.hash_map,map__14843):map__14843);var opts = cljs.core.get.call(null,map__14843__$1,new cljs.core.Keyword(null,"opts","opts",1017322386));var react_key = cljs.core.get.call(null,map__14843__$1,new cljs.core.Keyword(null,"react-key","react-key",4184082563));var key = cljs.core.get.call(null,map__14843__$1,new cljs.core.Keyword(null,"key","key",1014010321));var path = cljs.core.get.call(null,map__14843__$1,new cljs.core.Keyword(null,"path","path",1017337751));var dataf = cljs.core.get.call(null,sorm,new cljs.core.Keyword(null,"fn","fn",1013907514));var data = cljs.core.get_in.call(null,cursor,path);var data__$1 = ((!((dataf == null)))?dataf.call(null,data):data);var rkey = ((!((key == null)))?cljs.core.get.call(null,data__$1,key):((!((react_key == null)))?react_key:null));var cursor_SINGLEQUOTE_ = cljs.core.with_meta.call(null,data__$1,cljs.core.update_in.call(null,cljs.core.meta.call(null,cursor),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.core","path","om.core/path",2667619423)], null),cljs.core.into,path));return (new om.core.Pure({"key": rkey, "value": data__$1},(((opts == null))?f.call(null,cursor_SINGLEQUOTE_):f.call(null,cursor_SINGLEQUOTE_,opts))));
} else
{return null;
}
}
}
});
build = function(f,cursor,sorm){
switch(arguments.length){
case 2:
return build__2.call(this,f,cursor);
case 3:
return build__3.call(this,f,cursor,sorm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
build.cljs$core$IFn$_invoke$arity$2 = build__2;
build.cljs$core$IFn$_invoke$arity$3 = build__3;
return build;
})()
;
/**
* Given a cursor, a list of keys ks, mutate the tree at the path
* specified by the cursor + the keys by applying f to the specified
* value in the tree. If only given two arguments, assumed no list
* of keys was specified. An Om re-render will be triggered.
* @param {...*} var_args
*/
om.core.update_BANG_ = (function() {
var update_BANG_ = null;
var update_BANG___2 = (function (cursor,f){var m = cljs.core.meta.call(null,cursor);var path = new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m);if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),f);
} else
{return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,path,f);
}
});
var update_BANG___3 = (function (cursor,ks,f){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f);
});
var update_BANG___4 = (function (cursor,ks,f,a){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a);
});
var update_BANG___5 = (function (cursor,ks,f,a,b){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b);
});
var update_BANG___6 = (function (cursor,ks,f,a,b,c){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b,c);
});
var update_BANG___7 = (function (cursor,ks,f,a,b,c,d){var m = cljs.core.meta.call(null,cursor);return cljs.core.swap_BANG_.call(null,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b,c,d);
});
var update_BANG___8 = (function() { 
var G__14844__delegate = function (cursor,ks,f,a,b,c,d,args){var m = cljs.core.meta.call(null,cursor);return cljs.core.apply.call(null,cljs.core.swap_BANG_,new cljs.core.Keyword("om.core","state","om.core/state",3158836371).cljs$core$IFn$_invoke$arity$1(m),cljs.core.update_in,cljs.core.into.call(null,new cljs.core.Keyword("om.core","path","om.core/path",2667619423).cljs$core$IFn$_invoke$arity$1(m),ks),f,a,b,c,d,args);
};
var G__14844 = function (cursor,ks,f,a,b,c,d,var_args){
var args = null;if (arguments.length > 7) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return G__14844__delegate.call(this,cursor,ks,f,a,b,c,d,args);};
G__14844.cljs$lang$maxFixedArity = 7;
G__14844.cljs$lang$applyTo = (function (arglist__14845){
var cursor = cljs.core.first(arglist__14845);
arglist__14845 = cljs.core.next(arglist__14845);
var ks = cljs.core.first(arglist__14845);
arglist__14845 = cljs.core.next(arglist__14845);
var f = cljs.core.first(arglist__14845);
arglist__14845 = cljs.core.next(arglist__14845);
var a = cljs.core.first(arglist__14845);
arglist__14845 = cljs.core.next(arglist__14845);
var b = cljs.core.first(arglist__14845);
arglist__14845 = cljs.core.next(arglist__14845);
var c = cljs.core.first(arglist__14845);
arglist__14845 = cljs.core.next(arglist__14845);
var d = cljs.core.first(arglist__14845);
var args = cljs.core.rest(arglist__14845);
return G__14844__delegate(cursor,ks,f,a,b,c,d,args);
});
G__14844.cljs$core$IFn$_invoke$arity$variadic = G__14844__delegate;
return G__14844;
})()
;
update_BANG_ = function(cursor,ks,f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return update_BANG___2.call(this,cursor,ks);
case 3:
return update_BANG___3.call(this,cursor,ks,f);
case 4:
return update_BANG___4.call(this,cursor,ks,f,a);
case 5:
return update_BANG___5.call(this,cursor,ks,f,a,b);
case 6:
return update_BANG___6.call(this,cursor,ks,f,a,b,c);
case 7:
return update_BANG___7.call(this,cursor,ks,f,a,b,c,d);
default:
return update_BANG___8.cljs$core$IFn$_invoke$arity$variadic(cursor,ks,f,a,b,c,d, cljs.core.array_seq(arguments, 7));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update_BANG_.cljs$lang$maxFixedArity = 7;
update_BANG_.cljs$lang$applyTo = update_BANG___8.cljs$lang$applyTo;
update_BANG_.cljs$core$IFn$_invoke$arity$2 = update_BANG___2;
update_BANG_.cljs$core$IFn$_invoke$arity$3 = update_BANG___3;
update_BANG_.cljs$core$IFn$_invoke$arity$4 = update_BANG___4;
update_BANG_.cljs$core$IFn$_invoke$arity$5 = update_BANG___5;
update_BANG_.cljs$core$IFn$_invoke$arity$6 = update_BANG___6;
update_BANG_.cljs$core$IFn$_invoke$arity$7 = update_BANG___7;
update_BANG_.cljs$core$IFn$_invoke$arity$variadic = update_BANG___8.cljs$core$IFn$_invoke$arity$variadic;
return update_BANG_;
})()
;
/**
* A helper function to get at React refs. Given a owning pure node
* extract the ref specified by name. Note the life cycle protocol methods
* all pass the owner as an argument, ie. IRender.
*/
om.core.get_node = (function get_node(owner,name){return (owner.refs[name]).getDOMNode();
});
/**
* EXPERIMENTAL
*/
om.core.set_state_BANG_ = (function set_state_BANG_(owner,ks,v){return (owner.state["__om_state"] = cljs.core.assoc_in.call(null,(owner.state["__om_state"]),ks,v));
});
/**
* EXPERIMENTAL
*/
om.core.get_state = (function get_state(owner,ks){return cljs.core.get_in.call(null,(owner.state["__om_state"]),ks);
});

//# sourceMappingURL=core.js.map
