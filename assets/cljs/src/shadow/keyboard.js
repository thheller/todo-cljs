goog.provide('shadow.keyboard');
goog.require('cljs.core');
goog.require('shadow.object');
goog.require('shadow.object');
goog.require('shadow.dom');
goog.require('shadow.dom');
shadow.keyboard.mod_keys = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [16,null,17,null,18,null,91,null], null), null);
shadow.keyboard.char_names = cljs.core.PersistentHashMap.fromArrays([32,192,33,34,35,36,37,38,39,8,40,9,13,46,112,113,114,115,116,117,118,119,120,121,122,186,27,123,187,219,188,220,189,221,190,222,191],["space","`","pageup","pagedown","end","home","left","up","right","backspace","down","tab","enter","delete","f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11",";","escape","f12","=","[",",","\\","-","]",".","'","/"]);
shadow.keyboard.FLAG_SHIFT = 1;
shadow.keyboard.FLAG_CTRL = 2;
shadow.keyboard.FLAG_ALT = 4;
shadow.keyboard.FLAG_META = 8;

/**
* @constructor
* @param {*} key
* @param {*} flags
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
shadow.keyboard.KeyId = (function (key,flags,__meta,__extmap){
this.key = key;
this.flags = flags;
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
shadow.keyboard.KeyId.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4688__auto__){var self__ = this;
var this__4688__auto____$1 = this;var h__4542__auto__ = self__.__hash;if(!((h__4542__auto__ == null)))
{return h__4542__auto__;
} else
{var h__4542__auto____$1 = cljs.core.hash_imap(this__4688__auto____$1);self__.__hash = h__4542__auto____$1;
return h__4542__auto____$1;
}
});
shadow.keyboard.KeyId.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4693__auto__,k__4694__auto__){var self__ = this;
var this__4693__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4693__auto____$1,k__4694__auto__,null);
});
shadow.keyboard.KeyId.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4695__auto__,k14142,else__4696__auto__){var self__ = this;
var this__4695__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k14142,new cljs.core.Keyword(null,"key","key",1014010321)))
{return self__.key;
} else
{if(cljs.core.keyword_identical_QMARK_(k14142,new cljs.core.Keyword(null,"flags","flags",1111417337)))
{return self__.flags;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14142,else__4696__auto__);
} else
{return null;
}
}
}
});
shadow.keyboard.KeyId.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4700__auto__,k__4701__auto__,G__14141){var self__ = this;
var this__4700__auto____$1 = this;var pred__14144 = cljs.core.keyword_identical_QMARK_;var expr__14145 = k__4701__auto__;if(cljs.core.truth_((pred__14144.cljs$core$IFn$_invoke$arity$2 ? pred__14144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",1014010321),expr__14145) : pred__14144.call(null,new cljs.core.Keyword(null,"key","key",1014010321),expr__14145))))
{return (new shadow.keyboard.KeyId(G__14141,self__.flags,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__14144.cljs$core$IFn$_invoke$arity$2 ? pred__14144.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flags","flags",1111417337),expr__14145) : pred__14144.call(null,new cljs.core.Keyword(null,"flags","flags",1111417337),expr__14145))))
{return (new shadow.keyboard.KeyId(self__.key,G__14141,self__.__meta,self__.__extmap,null));
} else
{return (new shadow.keyboard.KeyId(self__.key,self__.flags,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4701__auto__,G__14141),null));
}
}
});
shadow.keyboard.KeyId.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4707__auto__,writer__4708__auto__,opts__4709__auto__){var self__ = this;
var this__4707__auto____$1 = this;var pr_pair__4710__auto__ = (function (keyval__4711__auto__){return cljs.core.pr_sequential_writer(writer__4708__auto__,cljs.core.pr_writer,""," ","",opts__4709__auto__,keyval__4711__auto__);
});return cljs.core.pr_sequential_writer(writer__4708__auto__,pr_pair__4710__auto__,"#shadow.keyboard.KeyId{",", ","}",opts__4709__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",1014010321),self__.key],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flags","flags",1111417337),self__.flags],null))], null),self__.__extmap));
});
shadow.keyboard.KeyId.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4698__auto__,entry__4699__auto__){var self__ = this;
var this__4698__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4699__auto__))
{return cljs.core._assoc(this__4698__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4699__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4699__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4698__auto____$1,entry__4699__auto__);
}
});
shadow.keyboard.KeyId.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4705__auto__){var self__ = this;
var this__4705__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",1014010321),self__.key],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"flags","flags",1111417337),self__.flags],null))], null),self__.__extmap));
});
shadow.keyboard.KeyId.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4697__auto__){var self__ = this;
var this__4697__auto____$1 = this;return (2 + cljs.core.count(self__.__extmap));
});
shadow.keyboard.KeyId.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4689__auto__,other__4690__auto__){var self__ = this;
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
shadow.keyboard.KeyId.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4692__auto__,G__14141){var self__ = this;
var this__4692__auto____$1 = this;return (new shadow.keyboard.KeyId(self__.key,self__.flags,G__14141,self__.__extmap,self__.__hash));
});
shadow.keyboard.KeyId.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4691__auto__){var self__ = this;
var this__4691__auto____$1 = this;return self__.__meta;
});
shadow.keyboard.KeyId.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4702__auto__,k__4703__auto__){var self__ = this;
var this__4702__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),null,new cljs.core.Keyword(null,"flags","flags",1111417337),null], null), null),k__4703__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4702__auto____$1),self__.__meta),k__4703__auto__);
} else
{return (new shadow.keyboard.KeyId(self__.key,self__.flags,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4703__auto__)),null));
}
});
shadow.keyboard.KeyId.cljs$lang$type = true;
shadow.keyboard.KeyId.cljs$lang$ctorPrSeq = (function (this__4727__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"shadow.keyboard/KeyId");
});
shadow.keyboard.KeyId.cljs$lang$ctorPrWriter = (function (this__4727__auto__,writer__4728__auto__){return cljs.core._write(writer__4728__auto__,"shadow.keyboard/KeyId");
});
shadow.keyboard.__GT_KeyId = (function __GT_KeyId(key,flags){return (new shadow.keyboard.KeyId(key,flags));
});
shadow.keyboard.map__GT_KeyId = (function map__GT_KeyId(G__14143){return (new shadow.keyboard.KeyId(new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(G__14143),new cljs.core.Keyword(null,"flags","flags",1111417337).cljs$core$IFn$_invoke$arity$1(G__14143),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14143,new cljs.core.Keyword(null,"key","key",1014010321),cljs.core.array_seq([new cljs.core.Keyword(null,"flags","flags",1111417337)], 0))));
});
shadow.keyboard.pretty_key_name = (function pretty_key_name(k){var or__4126__auto__ = (shadow.keyboard.char_names.cljs$core$IFn$_invoke$arity$1 ? shadow.keyboard.char_names.cljs$core$IFn$_invoke$arity$1(k) : shadow.keyboard.char_names.call(null,k));if(cljs.core.truth_(or__4126__auto__))
{return or__4126__auto__;
} else
{return (String.fromCharCode.cljs$core$IFn$_invoke$arity$1 ? String.fromCharCode.cljs$core$IFn$_invoke$arity$1(k) : String.fromCharCode.call(null,k)).toLowerCase();
}
});
shadow.keyboard.key_id_from_event = (function key_id_from_event(e){var flags = 0;var flags__$1 = (cljs.core.truth_(e.shiftKey)?(flags | shadow.keyboard.FLAG_SHIFT):flags);var flags__$2 = (cljs.core.truth_(e.ctrlKey)?(flags__$1 | shadow.keyboard.FLAG_CTRL):flags__$1);var flags__$3 = (cljs.core.truth_(e.altKey)?(flags__$2 | shadow.keyboard.FLAG_ALT):flags__$2);var flags__$4 = (cljs.core.truth_(e.metaKey)?(flags__$3 | shadow.keyboard.FLAG_META):flags__$3);return (new shadow.keyboard.KeyId(shadow.keyboard.pretty_key_name(e.keyCode),flags__$4));
});
shadow.keyboard.key_handlers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
shadow.keyboard.ignore_key_events = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, ["A",null,"INPUT",null,"BUTTON",null,"SELECT",null], null), null);
shadow.keyboard.handle_key_up = (function handle_key_up(e){var key = e.keyCode;if((cljs.core.contains_QMARK_(shadow.keyboard.mod_keys,key)) || (cljs.core.contains_QMARK_(shadow.keyboard.ignore_key_events,e.target.nodeName)))
{return null;
} else
{shadow.object.log.cljs$core$IFn$_invoke$arity$2("keyboard/handle-key-up",e);
var key_id = shadow.keyboard.key_id_from_event(e);var handlers = cljs.core.deref(shadow.keyboard.key_handlers);while(true){
if(cljs.core.empty_QMARK_(handlers))
{return null;
} else
{var map__14148 = cljs.core.first(handlers);var map__14148__$1 = ((cljs.core.seq_QMARK_(map__14148))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14148):map__14148);var keymap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14148__$1,new cljs.core.Keyword(null,"keymap","keymap",4174211599));var oref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14148__$1,new cljs.core.Keyword(null,"oref","oref",1017323830));var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(keymap,key_id);if(cljs.core.truth_(handler))
{shadow.object.log.cljs$core$IFn$_invoke$arity$5("keyboard handler: ",key_id,e,oref,handler);
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(oref,e) : handler.call(null,oref,e));
} else
{{
var G__14149 = cljs.core.rest(handlers);
handlers = G__14149;
continue;
}
}
}
break;
}
}
});
shadow.keyboard.parse_key_id = (function parse_key_id(s){var parts = s.toLowerCase().split(/-|\+|\s/);var mods = cljs.core.set(cljs.core.butlast(parts));var key = cljs.core.last(parts);var flags = 0;var flags__$1 = ((cljs.core.contains_QMARK_(mods,"shift"))?(flags | shadow.keyboard.FLAG_SHIFT):flags);var flags__$2 = ((cljs.core.contains_QMARK_(mods,"ctrl"))?(flags__$1 | shadow.keyboard.FLAG_CTRL):flags__$1);var flags__$3 = ((cljs.core.contains_QMARK_(mods,"alt"))?(flags__$2 | shadow.keyboard.FLAG_ALT):flags__$2);var flags__$4 = ((cljs.core.contains_QMARK_(mods,"meta"))?(flags__$3 | shadow.keyboard.FLAG_META):flags__$3);return (new shadow.keyboard.KeyId(key,flags__$4));
});
shadow.keyboard.remove_focus = (function remove_focus(oref){return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.keyboard.key_handlers,(function (x){return cljs.core.remove((function (p1__14150_SHARP_){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"oref","oref",1017323830).cljs$core$IFn$_invoke$arity$1(p1__14150_SHARP_));
}),x);
}));
});
shadow.keyboard.push_focus = (function push_focus(oref){var handlers = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"keyboard","keyboard",1517643609));if(cljs.core.seq(handlers))
{var keymap = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,p__14154){var vec__14155 = p__14154;var key_string = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14155,0,null);var handler_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14155,1,null);return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,shadow.keyboard.parse_key_id(key_string),handler_fn);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2(2,handlers));cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.keyboard.key_handlers,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",1017323830),oref,new cljs.core.Keyword(null,"keymap","keymap",4174211599),keymap], null));
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3(oref,new cljs.core.Keyword(null,"destroy","destroy",2571277164),(function (p1__14151_SHARP_){return shadow.keyboard.remove_focus(p1__14151_SHARP_);
}));
} else
{return null;
}
});
shadow.keyboard.hook_BANG_ = (function hook_BANG_(){return null;
});
shadow.keyboard.hook_BANG_();
//# sourceMappingURL=keyboard.js.map