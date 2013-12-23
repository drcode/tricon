// Compiled by ClojureScript 0.0-2127
goog.provide('client.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs.core.async');
React.initializeTouchEvents(true);
client.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",4517781250),cljs.core.repeatedly.call(null,72,cljs.core.partial.call(null,cljs.core.rand_int,9)),new cljs.core.Keyword(null,"index","index",1114250308),0], null));
client.core.icon_resolution = 6;
client.core.colors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white","silver","orange"], null);
client.core.polygon = (function polygon(context,color,points){var vec__15142 = points;var cur = cljs.core.nth.call(null,vec__15142,0,null);var more = cljs.core.nthnext.call(null,vec__15142,1);context.fillStyle = color;
context.strokeStyle = color;
context.beginPath();
context.moveTo(cljs.core.first.call(null,cur),cljs.core.second.call(null,cur));
var seq__15143_15147 = cljs.core.seq.call(null,more);var chunk__15144_15148 = null;var count__15145_15149 = 0;var i__15146_15150 = 0;while(true){
if((i__15146_15150 < count__15145_15149))
{var pt_15151 = cljs.core._nth.call(null,chunk__15144_15148,i__15146_15150);context.lineTo(cljs.core.first.call(null,pt_15151),cljs.core.second.call(null,pt_15151));
{
var G__15152 = seq__15143_15147;
var G__15153 = chunk__15144_15148;
var G__15154 = count__15145_15149;
var G__15155 = (i__15146_15150 + 1);
seq__15143_15147 = G__15152;
chunk__15144_15148 = G__15153;
count__15145_15149 = G__15154;
i__15146_15150 = G__15155;
continue;
}
} else
{var temp__4092__auto___15156 = cljs.core.seq.call(null,seq__15143_15147);if(temp__4092__auto___15156)
{var seq__15143_15157__$1 = temp__4092__auto___15156;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15143_15157__$1))
{var c__4134__auto___15158 = cljs.core.chunk_first.call(null,seq__15143_15157__$1);{
var G__15159 = cljs.core.chunk_rest.call(null,seq__15143_15157__$1);
var G__15160 = c__4134__auto___15158;
var G__15161 = cljs.core.count.call(null,c__4134__auto___15158);
var G__15162 = 0;
seq__15143_15147 = G__15159;
chunk__15144_15148 = G__15160;
count__15145_15149 = G__15161;
i__15146_15150 = G__15162;
continue;
}
} else
{var pt_15163 = cljs.core.first.call(null,seq__15143_15157__$1);context.lineTo(cljs.core.first.call(null,pt_15163),cljs.core.second.call(null,pt_15163));
{
var G__15164 = cljs.core.next.call(null,seq__15143_15157__$1);
var G__15165 = null;
var G__15166 = 0;
var G__15167 = 0;
seq__15143_15147 = G__15164;
chunk__15144_15148 = G__15165;
count__15145_15149 = G__15166;
i__15146_15150 = G__15167;
continue;
}
}
} else
{}
}
break;
}
context.closePath();
context.fill();
return context.stroke();
});
client.core.draw_icon = (function draw_icon(context,size,pattern){var triangle = (function (n,col){var box = Math.floor.call(null,(n / 4));var cell = cljs.core.mod.call(null,n,4);var x_top = cljs.core.mod.call(null,box,client.core.icon_resolution);var y_top = Math.floor.call(null,(box / client.core.icon_resolution));return client.core.polygon.call(null,context,col,cljs.core.map.call(null,((function (box,cell,x_top,y_top){
return (function (p__15180){var vec__15181 = p__15180;var x = cljs.core.nth.call(null,vec__15181,0,null);var y = cljs.core.nth.call(null,vec__15181,1,null);var f = ((function (vec__15181,x,y,box,cell,x_top,y_top){
return (function (q){return ((q * size) / client.core.icon_resolution);
});})(vec__15181,x,y,box,cell,x_top,y_top))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,(x_top + x)),f.call(null,(y_top + y))], null);
});})(box,cell,x_top,y_top))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null)], null).call(null,cell)));
});var seq__15182 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (index,c){var z = parseInt([cljs.core.str(c)].join(''));var m = (index * 2);var g = (function (){var iter__4103__auto__ = ((function (z,m){
return (function iter__15186(s__15187){return (new cljs.core.LazySeq(null,((function (z,m){
return (function (){var s__15187__$1 = s__15187;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15187__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var o = cljs.core.first.call(null,xs__4579__auto__);var iterys__4099__auto__ = ((function (s__15187__$1,o,xs__4579__auto__,temp__4092__auto__,z,m){
return (function iter__15188(s__15189){return (new cljs.core.LazySeq(null,((function (s__15187__$1,o,xs__4579__auto__,temp__4092__auto__,z,m){
return (function (){var s__15189__$1 = s__15189;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__15189__$1);if(temp__4092__auto____$1)
{var s__15189__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__15189__$2))
{var c__4101__auto__ = cljs.core.chunk_first.call(null,s__15189__$2);var size__4102__auto__ = cljs.core.count.call(null,c__4101__auto__);var b__15191 = cljs.core.chunk_buffer.call(null,size__4102__auto__);if((function (){var i__15190 = 0;while(true){
if((i__15190 < size__4102__auto__))
{var p = cljs.core._nth.call(null,c__4101__auto__,i__15190);cljs.core.chunk_append.call(null,b__15191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,p], null));
{
var G__15192 = (i__15190 + 1);
i__15190 = G__15192;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15191),iter__15188.call(null,cljs.core.chunk_rest.call(null,s__15189__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15191),null);
}
} else
{var p = cljs.core.first.call(null,s__15189__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,p], null),iter__15188.call(null,cljs.core.rest.call(null,s__15189__$2)));
}
} else
{return null;
}
break;
}
});})(s__15187__$1,o,xs__4579__auto__,temp__4092__auto__,z,m))
,null,null));
});})(s__15187__$1,o,xs__4579__auto__,temp__4092__auto__,z,m))
;var fs__4100__auto__ = cljs.core.seq.call(null,iterys__4099__auto__.call(null,cljs.core.range.call(null,3)));if(fs__4100__auto__)
{return cljs.core.concat.call(null,fs__4100__auto__,iter__15186.call(null,cljs.core.rest.call(null,s__15187__$1)));
} else
{{
var G__15193 = cljs.core.rest.call(null,s__15187__$1);
s__15187__$1 = G__15193;
continue;
}
}
} else
{return null;
}
break;
}
});})(z,m))
,null,null));
});})(z,m))
;return iter__4103__auto__.call(null,cljs.core.range.call(null,3));
})();var u = cljs.core.nth.call(null,g,z);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,client.core.colors.call(null,u.call(null,0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(m + 1),client.core.colors.call(null,u.call(null,1))], null)], null);
}),pattern)));var chunk__15183 = null;var count__15184 = 0;var i__15185 = 0;while(true){
if((i__15185 < count__15184))
{var j = cljs.core._nth.call(null,chunk__15183,i__15185);cljs.core.apply.call(null,triangle,j);
{
var G__15194 = seq__15182;
var G__15195 = chunk__15183;
var G__15196 = count__15184;
var G__15197 = (i__15185 + 1);
seq__15182 = G__15194;
chunk__15183 = G__15195;
count__15184 = G__15196;
i__15185 = G__15197;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__15182);if(temp__4092__auto__)
{var seq__15182__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15182__$1))
{var c__4134__auto__ = cljs.core.chunk_first.call(null,seq__15182__$1);{
var G__15198 = cljs.core.chunk_rest.call(null,seq__15182__$1);
var G__15199 = c__4134__auto__;
var G__15200 = cljs.core.count.call(null,c__4134__auto__);
var G__15201 = 0;
seq__15182 = G__15198;
chunk__15183 = G__15199;
count__15184 = G__15200;
i__15185 = G__15201;
continue;
}
} else
{var j = cljs.core.first.call(null,seq__15182__$1);cljs.core.apply.call(null,triangle,j);
{
var G__15202 = cljs.core.next.call(null,seq__15182__$1);
var G__15203 = null;
var G__15204 = 0;
var G__15205 = 0;
seq__15182 = G__15202;
chunk__15183 = G__15203;
count__15184 = G__15204;
i__15185 = G__15205;
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
client.core.icon_coordinates = (function icon_coordinates(size,pos){var vec__15208 = pos;var x = cljs.core.nth.call(null,vec__15208,0,null);var y = cljs.core.nth.call(null,vec__15208,1,null);var box_wid = (size / client.core.icon_resolution);var box = (Math.floor.call(null,(x / box_wid)) + (Math.floor.call(null,(y / box_wid)) * client.core.icon_resolution));var x_remainder = (cljs.core.mod.call(null,x,box_wid) / box_wid);var y_remainder = (cljs.core.mod.call(null,y,box_wid) / box_wid);var slice_1 = (x_remainder > y_remainder);var slice_2 = ((x_remainder + y_remainder) > 1);var cell = (function (){var G__15209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slice_1,slice_2], null);if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__15209))
{return 3;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__15209))
{return 0;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__15209))
{return 2;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__15209))
{return 1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slice_1,slice_2], null))].join('')));
} else
{return null;
}
}
}
}
}
})();return ((box * 4) + cell);
});
client.core.update_pattern = (function update_pattern(pattern,col,icon_coordinate){var n = Math.floor.call(null,(icon_coordinate / 2));var off = cljs.core.odd_QMARK_.call(null,icon_coordinate);var vpat = cljs.core.vec.call(null,pattern);var prev = parseInt([cljs.core.str(vpat.call(null,n))].join(''));return cljs.core.apply.call(null,cljs.core.str,cljs.core.assoc.call(null,vpat,n,cljs.core.first.call(null,[cljs.core.str(((off)?((col * 3) + cljs.core.mod.call(null,prev,3)):(col + (3 * Math.floor.call(null,(prev / 3))))))].join(''))));
});
client.core.convert_mouse_movements = (function convert_mouse_movements(app,mouse_chan,opts){var paint_chan = cljs.core.async.chan.call(null);var c__6652__auto___15430 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15361){var state_val_15362 = (state_15361[1]);if((state_val_15362 === 1))
{var state_15361__$1 = state_15361;var statearr_15363_15431 = state_15361__$1;(statearr_15363_15431[2] = null);
(statearr_15363_15431[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 2))
{var state_15361__$1 = state_15361;if(true)
{var statearr_15364_15432 = state_15361__$1;(statearr_15364_15432[1] = 4);
} else
{var statearr_15365_15433 = state_15361__$1;(statearr_15365_15433[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 3))
{var inst_15359 = (state_15361[2]);var state_15361__$1 = state_15361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15361__$1,inst_15359);
} else
{if((state_val_15362 === 4))
{var state_15361__$1 = state_15361;var statearr_15366_15434 = state_15361__$1;(statearr_15366_15434[2] = null);
(statearr_15366_15434[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 5))
{var state_15361__$1 = state_15361;var statearr_15367_15435 = state_15361__$1;(statearr_15367_15435[2] = null);
(statearr_15367_15435[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 6))
{var inst_15357 = (state_15361[2]);var state_15361__$1 = state_15361;var statearr_15368_15436 = state_15361__$1;(statearr_15368_15436[2] = inst_15357);
(statearr_15368_15436[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 7))
{var state_15361__$1 = state_15361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15361__$1,9,mouse_chan);
} else
{if((state_val_15362 === 8))
{var inst_15337 = (state_15361[2]);var state_15361__$1 = (function (){var statearr_15369 = state_15361;(statearr_15369[7] = inst_15337);
return statearr_15369;
})();var statearr_15370_15437 = state_15361__$1;(statearr_15370_15437[2] = null);
(statearr_15370_15437[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 9))
{var inst_15325 = (state_15361[2]);var inst_15326 = cljs.core.nth.call(null,inst_15325,0,null);var inst_15327 = cljs.core.nth.call(null,inst_15325,1,null);var inst_15328 = cljs.core._EQ_.call(null,inst_15326,new cljs.core.Keyword(null,"down","down",1016993812));var state_15361__$1 = (function (){var statearr_15371 = state_15361;(statearr_15371[8] = inst_15327);
return statearr_15371;
})();if(inst_15328)
{var statearr_15372_15438 = state_15361__$1;(statearr_15372_15438[1] = 10);
} else
{var statearr_15373_15439 = state_15361__$1;(statearr_15373_15439[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 10))
{var inst_15327 = (state_15361[8]);var state_15361__$1 = state_15361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15361__$1,13,paint_chan,inst_15327);
} else
{if((state_val_15362 === 11))
{var state_15361__$1 = state_15361;var statearr_15374_15440 = state_15361__$1;(statearr_15374_15440[2] = null);
(statearr_15374_15440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 12))
{var inst_15335 = (state_15361[2]);var state_15361__$1 = state_15361;var statearr_15375_15441 = state_15361__$1;(statearr_15375_15441[2] = inst_15335);
(statearr_15375_15441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 13))
{var inst_15331 = (state_15361[2]);var state_15361__$1 = state_15361;var statearr_15376_15442 = state_15361__$1;(statearr_15376_15442[2] = inst_15331);
(statearr_15376_15442[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 14))
{var state_15361__$1 = state_15361;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15361__$1,16,mouse_chan);
} else
{if((state_val_15362 === 15))
{var inst_15353 = (state_15361[2]);var state_15361__$1 = (function (){var statearr_15377 = state_15361;(statearr_15377[9] = inst_15353);
return statearr_15377;
})();var statearr_15378_15443 = state_15361__$1;(statearr_15378_15443[2] = null);
(statearr_15378_15443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 16))
{var inst_15341 = (state_15361[2]);var inst_15342 = cljs.core.nth.call(null,inst_15341,0,null);var inst_15343 = cljs.core.nth.call(null,inst_15341,1,null);var inst_15344 = cljs.core._EQ_.call(null,inst_15342,new cljs.core.Keyword(null,"move","move",1017261891));var state_15361__$1 = (function (){var statearr_15379 = state_15361;(statearr_15379[10] = inst_15343);
return statearr_15379;
})();if(inst_15344)
{var statearr_15380_15444 = state_15361__$1;(statearr_15380_15444[1] = 17);
} else
{var statearr_15381_15445 = state_15361__$1;(statearr_15381_15445[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 17))
{var inst_15343 = (state_15361[10]);var state_15361__$1 = state_15361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15361__$1,20,paint_chan,inst_15343);
} else
{if((state_val_15362 === 18))
{var state_15361__$1 = state_15361;var statearr_15382_15446 = state_15361__$1;(statearr_15382_15446[2] = null);
(statearr_15382_15446[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 19))
{var inst_15351 = (state_15361[2]);var state_15361__$1 = state_15361;var statearr_15383_15447 = state_15361__$1;(statearr_15383_15447[2] = inst_15351);
(statearr_15383_15447[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15362 === 20))
{var inst_15347 = (state_15361[2]);var state_15361__$1 = (function (){var statearr_15384 = state_15361;(statearr_15384[11] = inst_15347);
return statearr_15384;
})();var statearr_15385_15448 = state_15361__$1;(statearr_15385_15448[2] = null);
(statearr_15385_15448[1] = 14);
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
var state_machine__6583__auto____0 = (function (){var statearr_15389 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15389[0] = state_machine__6583__auto__);
(statearr_15389[1] = 1);
return statearr_15389;
});
var state_machine__6583__auto____1 = (function (state_15361){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15361);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15390){if((e15390 instanceof Object))
{var ex__6586__auto__ = e15390;var statearr_15391_15449 = state_15361;(statearr_15391_15449[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15361);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15450 = state_15361;
state_15361 = G__15450;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15361){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15392 = f__6653__auto__.call(null);(statearr_15392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___15430);
return statearr_15392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
}));
var c__6652__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15411){var state_val_15412 = (state_15411[1]);if((state_val_15412 === 7))
{var inst_15398 = (state_15411[7]);var inst_15406 = (state_15411[2]);var inst_15393 = inst_15398;var state_15411__$1 = (function (){var statearr_15413 = state_15411;(statearr_15413[8] = inst_15406);
(statearr_15413[9] = inst_15393);
return statearr_15413;
})();var statearr_15414_15451 = state_15411__$1;(statearr_15414_15451[2] = null);
(statearr_15414_15451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15412 === 6))
{var state_15411__$1 = state_15411;var statearr_15415_15452 = state_15411__$1;(statearr_15415_15452[2] = null);
(statearr_15415_15452[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15412 === 5))
{var inst_15398 = (state_15411[7]);var inst_15393 = (state_15411[9]);var inst_15396 = (state_15411[10]);var inst_15402 = (function (){var ic = inst_15398;var pos = inst_15396;var prev = inst_15393;return ((function (ic,pos,prev,inst_15398,inst_15393,inst_15396,state_val_15412){
return (function (p__15401){var map__15416 = p__15401;var map__15416__$1 = ((cljs.core.seq_QMARK_.call(null,map__15416))?cljs.core.apply.call(null,cljs.core.hash_map,map__15416):map__15416);var state = map__15416__$1;var index = cljs.core.get.call(null,map__15416__$1,new cljs.core.Keyword(null,"index","index",1114250308));var pattern = cljs.core.get.call(null,map__15416__$1,new cljs.core.Keyword(null,"pattern","pattern",4517781250));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",4517781250)], null),client.core.update_pattern,index,ic);
});
;})(ic,pos,prev,inst_15398,inst_15393,inst_15396,state_val_15412))
})();var inst_15403 = om.core.update_BANG_.call(null,app,inst_15402);var state_15411__$1 = state_15411;var statearr_15417_15453 = state_15411__$1;(statearr_15417_15453[2] = inst_15403);
(statearr_15417_15453[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15412 === 4))
{var inst_15398 = (state_15411[7]);var inst_15393 = (state_15411[9]);var inst_15396 = (state_15411[10]);var inst_15396__$1 = (state_15411[2]);var inst_15397 = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(opts);var inst_15398__$1 = client.core.icon_coordinates.call(null,inst_15397,inst_15396__$1);var inst_15399 = cljs.core.not_EQ_.call(null,inst_15398__$1,inst_15393);var state_15411__$1 = (function (){var statearr_15418 = state_15411;(statearr_15418[7] = inst_15398__$1);
(statearr_15418[10] = inst_15396__$1);
return statearr_15418;
})();if(inst_15399)
{var statearr_15419_15454 = state_15411__$1;(statearr_15419_15454[1] = 5);
} else
{var statearr_15420_15455 = state_15411__$1;(statearr_15420_15455[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15412 === 3))
{var inst_15409 = (state_15411[2]);var state_15411__$1 = state_15411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15411__$1,inst_15409);
} else
{if((state_val_15412 === 2))
{var state_15411__$1 = state_15411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15411__$1,4,paint_chan);
} else
{if((state_val_15412 === 1))
{var inst_15393 = null;var state_15411__$1 = (function (){var statearr_15421 = state_15411;(statearr_15421[9] = inst_15393);
return statearr_15421;
})();var statearr_15422_15456 = state_15411__$1;(statearr_15422_15456[2] = null);
(statearr_15422_15456[1] = 2);
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
var state_machine__6583__auto____0 = (function (){var statearr_15426 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15426[0] = state_machine__6583__auto__);
(statearr_15426[1] = 1);
return statearr_15426;
});
var state_machine__6583__auto____1 = (function (state_15411){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15411);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15427){if((e15427 instanceof Object))
{var ex__6586__auto__ = e15427;var statearr_15428_15457 = state_15411;(statearr_15428_15457[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15411);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15427;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15458 = state_15411;
state_15411 = G__15458;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15411){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15429 = f__6653__auto__.call(null);(statearr_15429[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto__);
return statearr_15429;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
}));
return c__6652__auto__;
});
client.core.get_relative_pos = (function get_relative_pos(e){var target = e.target;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.pageX - target.offsetLeft),(e.pageY - target.offsetTop)], null);
});
client.core.icon = (function icon(app,opts){var refresh_icon = (function refresh_icon(owner){var context = om.core.get_node.call(null,owner,"canvas").getContext("2d");var size = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(opts);return client.core.draw_icon.call(null,context,size,new cljs.core.Keyword(null,"pattern","pattern",4517781250).cljs$core$IFn$_invoke$arity$1(app));
});
if(typeof client.core.t15462 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t15462 = (function (refresh_icon,opts,app,icon,meta15463){
this.refresh_icon = refresh_icon;
this.opts = opts;
this.app = app;
this.icon = icon;
this.meta15463 = meta15463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t15462.cljs$lang$type = true;
client.core.t15462.cljs$lang$ctorStr = "client.core/t15462";
client.core.t15462.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"client.core/t15462");
});
client.core.t15462.prototype.om$core$IRender$ = true;
client.core.t15462.prototype.om$core$IRender$render$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;var mouse_chan = om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460)], null));var mouse_fn = ((function (mouse_chan){
return (function (typ){return ((function (mouse_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,mouse_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [typ,client.core.get_relative_pos.call(null,e)], null));
});
;})(mouse_chan))
});})(mouse_chan))
;return om.dom.canvas.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,self__.opts,new cljs.core.Keyword(null,"ref","ref",1014017029),"canvas",new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),mouse_fn.call(null,new cljs.core.Keyword(null,"down","down",1016993812)),new cljs.core.Keyword(null,"onMouseMove","onMouseMove",1569276521),mouse_fn.call(null,new cljs.core.Keyword(null,"move","move",1017261891)),new cljs.core.Keyword(null,"onMouseUp","onMouseUp",3593250483),mouse_fn.call(null,new cljs.core.Keyword(null,"up","up",1013907981)))));
});
client.core.t15462.prototype.om$core$IDidMount$ = true;
client.core.t15462.prototype.om$core$IDidMount$did_mount$arity$3 = (function (_,owner,___$1){var self__ = this;
var ___$2 = this;return self__.refresh_icon.call(null,owner);
});
client.core.t15462.prototype.om$core$IDidUpdate$ = true;
client.core.t15462.prototype.om$core$IDidUpdate$did_update$arity$5 = (function (_,owner,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;return self__.refresh_icon.call(null,owner);
});
client.core.t15462.prototype.om$core$IWillMount$ = true;
client.core.t15462.prototype.om$core$IWillMount$will_mount$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;var mouse_chan = cljs.core.async.chan.call(null);om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460)], null),mouse_chan);
return client.core.convert_mouse_movements.call(null,self__.app,mouse_chan,self__.opts);
});
client.core.t15462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15464){var self__ = this;
var _15464__$1 = this;return self__.meta15463;
});
client.core.t15462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15464,meta15463__$1){var self__ = this;
var _15464__$1 = this;return (new client.core.t15462(self__.refresh_icon,self__.opts,self__.app,self__.icon,meta15463__$1));
});
client.core.__GT_t15462 = (function __GT_t15462(refresh_icon__$1,opts__$1,app__$1,icon__$1,meta15463){return (new client.core.t15462(refresh_icon__$1,opts__$1,app__$1,icon__$1,meta15463));
});
}
return (new client.core.t15462(refresh_icon,opts,app,icon,null));
});
client.core.swatch = (function swatch(app,opts){var index = opts.call(null,new cljs.core.Keyword(null,"index","index",1114250308));if(typeof client.core.t15468 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t15468 = (function (index,opts,app,swatch,meta15469){
this.index = index;
this.opts = opts;
this.app = app;
this.swatch = swatch;
this.meta15469 = meta15469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t15468.cljs$lang$type = true;
client.core.t15468.cljs$lang$ctorStr = "client.core/t15468";
client.core.t15468.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"client.core/t15468");
});
client.core.t15468.prototype.om$core$IRender$ = true;
client.core.t15468.prototype.om$core$IRender$render$arity$2 = (function (this__5351__auto__,___5352__auto__){var self__ = this;
var this__5351__auto____$1 = this;return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(self__.app),self__.index))?"selected":null),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),client.core.colors.call(null,self__.index)], null),new cljs.core.Keyword(null,"onClick","onClick",3956969051),cljs.core.partial.call(null,om.core.update_BANG_,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",1114250308)], null),cljs.core.constantly.call(null,self__.index))], null)));
});
client.core.t15468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15470){var self__ = this;
var _15470__$1 = this;return self__.meta15469;
});
client.core.t15468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15470,meta15469__$1){var self__ = this;
var _15470__$1 = this;return (new client.core.t15468(self__.index,self__.opts,self__.app,self__.swatch,meta15469__$1));
});
client.core.__GT_t15468 = (function __GT_t15468(index__$1,opts__$1,app__$1,swatch__$1,meta15469){return (new client.core.t15468(index__$1,opts__$1,app__$1,swatch__$1,meta15469));
});
}
return (new client.core.t15468(index,opts,app,swatch,null));
});
client.core.screen = (function screen__$1(app){if(typeof client.core.t15478 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t15478 = (function (app,screen,meta15479){
this.app = app;
this.screen = screen;
this.meta15479 = meta15479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t15478.cljs$lang$type = true;
client.core.t15478.cljs$lang$ctorStr = "client.core/t15478";
client.core.t15478.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"client.core/t15478");
});
client.core.t15478.prototype.om$core$IRender$ = true;
client.core.t15478.prototype.om$core$IRender$render$arity$2 = (function (this__5351__auto__,___5352__auto__){var self__ = this;
var this__5351__auto____$1 = this;return om.dom.div.call(null,{"id": "main"},om.core.build.call(null,client.core.icon,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),400,new cljs.core.Keyword(null,"height","height",4087841945),400,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"big-canvas","big-canvas",1462351415)], null)], null)),om.dom.p.call(null,null,"Palette"),cljs.core.apply.call(null,om.dom.div,{"id": "pallete"},(function (){var iter__4103__auto__ = (function iter__15481(s__15482){return (new cljs.core.LazySeq(null,(function (){var s__15482__$1 = s__15482;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15482__$1);if(temp__4092__auto__)
{var s__15482__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15482__$2))
{var c__4101__auto__ = cljs.core.chunk_first.call(null,s__15482__$2);var size__4102__auto__ = cljs.core.count.call(null,c__4101__auto__);var b__15484 = cljs.core.chunk_buffer.call(null,size__4102__auto__);if((function (){var i__15483 = 0;while(true){
if((i__15483 < size__4102__auto__))
{var index = cljs.core._nth.call(null,c__4101__auto__,i__15483);cljs.core.chunk_append.call(null,b__15484,om.core.build.call(null,client.core.swatch,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",1114250308),index], null)], null)));
{
var G__15485 = (i__15483 + 1);
i__15483 = G__15485;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15484),iter__15481.call(null,cljs.core.chunk_rest.call(null,s__15482__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15484),null);
}
} else
{var index = cljs.core.first.call(null,s__15482__$2);return cljs.core.cons.call(null,om.core.build.call(null,client.core.swatch,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",1114250308),index], null)], null)),iter__15481.call(null,cljs.core.rest.call(null,s__15482__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4103__auto__.call(null,cljs.core.range.call(null,3));
})()),om.dom.p.call(null,null,"Preview"),om.core.build.call(null,client.core.icon,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),60,new cljs.core.Keyword(null,"height","height",4087841945),60,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"little-canvas","little-canvas",2955095937)], null)], null)));
});
client.core.t15478.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15480){var self__ = this;
var _15480__$1 = this;return self__.meta15479;
});
client.core.t15478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15480,meta15479__$1){var self__ = this;
var _15480__$1 = this;return (new client.core.t15478(self__.app,self__.screen,meta15479__$1));
});
client.core.__GT_t15478 = (function __GT_t15478(app__$1,screen__$1,meta15479){return (new client.core.t15478(app__$1,screen__$1,meta15479));
});
}
return (new client.core.t15478(app,screen__$1,null));
});
om.core.root.call(null,client.core.app_state,client.core.screen,document.body);

//# sourceMappingURL=core.js.map