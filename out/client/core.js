// Compiled by ClojureScript 0.0-2127
goog.provide('client.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.core');
goog.require('cljs.core.async');
client.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pattern","pattern",4517781250),cljs.core.repeatedly.call(null,72,cljs.core.partial.call(null,cljs.core.rand_int,9)),new cljs.core.Keyword(null,"index","index",1114250308),0], null));
client.core.icon_resolution = 6;
client.core.colors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["white","silver","orange"], null);
client.core.polygon = (function polygon(context,color,points){var vec__14793 = points;var cur = cljs.core.nth.call(null,vec__14793,0,null);var more = cljs.core.nthnext.call(null,vec__14793,1);context.fillStyle = color;
context.strokeStyle = color;
context.beginPath();
context.moveTo(cljs.core.first.call(null,cur),cljs.core.second.call(null,cur));
var seq__14794_14798 = cljs.core.seq.call(null,more);var chunk__14795_14799 = null;var count__14796_14800 = 0;var i__14797_14801 = 0;while(true){
if((i__14797_14801 < count__14796_14800))
{var pt_14802 = cljs.core._nth.call(null,chunk__14795_14799,i__14797_14801);context.lineTo(cljs.core.first.call(null,pt_14802),cljs.core.second.call(null,pt_14802));
{
var G__14803 = seq__14794_14798;
var G__14804 = chunk__14795_14799;
var G__14805 = count__14796_14800;
var G__14806 = (i__14797_14801 + 1);
seq__14794_14798 = G__14803;
chunk__14795_14799 = G__14804;
count__14796_14800 = G__14805;
i__14797_14801 = G__14806;
continue;
}
} else
{var temp__4092__auto___14807 = cljs.core.seq.call(null,seq__14794_14798);if(temp__4092__auto___14807)
{var seq__14794_14808__$1 = temp__4092__auto___14807;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14794_14808__$1))
{var c__4134__auto___14809 = cljs.core.chunk_first.call(null,seq__14794_14808__$1);{
var G__14810 = cljs.core.chunk_rest.call(null,seq__14794_14808__$1);
var G__14811 = c__4134__auto___14809;
var G__14812 = cljs.core.count.call(null,c__4134__auto___14809);
var G__14813 = 0;
seq__14794_14798 = G__14810;
chunk__14795_14799 = G__14811;
count__14796_14800 = G__14812;
i__14797_14801 = G__14813;
continue;
}
} else
{var pt_14814 = cljs.core.first.call(null,seq__14794_14808__$1);context.lineTo(cljs.core.first.call(null,pt_14814),cljs.core.second.call(null,pt_14814));
{
var G__14815 = cljs.core.next.call(null,seq__14794_14808__$1);
var G__14816 = null;
var G__14817 = 0;
var G__14818 = 0;
seq__14794_14798 = G__14815;
chunk__14795_14799 = G__14816;
count__14796_14800 = G__14817;
i__14797_14801 = G__14818;
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
return (function (p__14831){var vec__14832 = p__14831;var x = cljs.core.nth.call(null,vec__14832,0,null);var y = cljs.core.nth.call(null,vec__14832,1,null);var f = ((function (vec__14832,x,y,box,cell,x_top,y_top){
return (function (q){return ((q * size) / client.core.icon_resolution);
});})(vec__14832,x,y,box,cell,x_top,y_top))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,(x_top + x)),f.call(null,(y_top + y))], null);
});})(box,cell,x_top,y_top))
,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.5,0.5], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,1], null)], null)], null).call(null,cell)));
});var seq__14833 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map_indexed.call(null,(function (index,c){var z = parseInt([cljs.core.str(c)].join(''));var m = (index * 2);var g = (function (){var iter__4103__auto__ = ((function (z,m){
return (function iter__14837(s__14838){return (new cljs.core.LazySeq(null,((function (z,m){
return (function (){var s__14838__$1 = s__14838;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__14838__$1);if(temp__4092__auto__)
{var xs__4579__auto__ = temp__4092__auto__;var o = cljs.core.first.call(null,xs__4579__auto__);var iterys__4099__auto__ = ((function (s__14838__$1,o,xs__4579__auto__,temp__4092__auto__,z,m){
return (function iter__14839(s__14840){return (new cljs.core.LazySeq(null,((function (s__14838__$1,o,xs__4579__auto__,temp__4092__auto__,z,m){
return (function (){var s__14840__$1 = s__14840;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__14840__$1);if(temp__4092__auto____$1)
{var s__14840__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14840__$2))
{var c__4101__auto__ = cljs.core.chunk_first.call(null,s__14840__$2);var size__4102__auto__ = cljs.core.count.call(null,c__4101__auto__);var b__14842 = cljs.core.chunk_buffer.call(null,size__4102__auto__);if((function (){var i__14841 = 0;while(true){
if((i__14841 < size__4102__auto__))
{var p = cljs.core._nth.call(null,c__4101__auto__,i__14841);cljs.core.chunk_append.call(null,b__14842,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,p], null));
{
var G__14843 = (i__14841 + 1);
i__14841 = G__14843;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14842),iter__14839.call(null,cljs.core.chunk_rest.call(null,s__14840__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14842),null);
}
} else
{var p = cljs.core.first.call(null,s__14840__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,p], null),iter__14839.call(null,cljs.core.rest.call(null,s__14840__$2)));
}
} else
{return null;
}
break;
}
});})(s__14838__$1,o,xs__4579__auto__,temp__4092__auto__,z,m))
,null,null));
});})(s__14838__$1,o,xs__4579__auto__,temp__4092__auto__,z,m))
;var fs__4100__auto__ = cljs.core.seq.call(null,iterys__4099__auto__.call(null,cljs.core.range.call(null,3)));if(fs__4100__auto__)
{return cljs.core.concat.call(null,fs__4100__auto__,iter__14837.call(null,cljs.core.rest.call(null,s__14838__$1)));
} else
{{
var G__14844 = cljs.core.rest.call(null,s__14838__$1);
s__14838__$1 = G__14844;
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
}),pattern)));var chunk__14834 = null;var count__14835 = 0;var i__14836 = 0;while(true){
if((i__14836 < count__14835))
{var j = cljs.core._nth.call(null,chunk__14834,i__14836);cljs.core.apply.call(null,triangle,j);
{
var G__14845 = seq__14833;
var G__14846 = chunk__14834;
var G__14847 = count__14835;
var G__14848 = (i__14836 + 1);
seq__14833 = G__14845;
chunk__14834 = G__14846;
count__14835 = G__14847;
i__14836 = G__14848;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__14833);if(temp__4092__auto__)
{var seq__14833__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14833__$1))
{var c__4134__auto__ = cljs.core.chunk_first.call(null,seq__14833__$1);{
var G__14849 = cljs.core.chunk_rest.call(null,seq__14833__$1);
var G__14850 = c__4134__auto__;
var G__14851 = cljs.core.count.call(null,c__4134__auto__);
var G__14852 = 0;
seq__14833 = G__14849;
chunk__14834 = G__14850;
count__14835 = G__14851;
i__14836 = G__14852;
continue;
}
} else
{var j = cljs.core.first.call(null,seq__14833__$1);cljs.core.apply.call(null,triangle,j);
{
var G__14853 = cljs.core.next.call(null,seq__14833__$1);
var G__14854 = null;
var G__14855 = 0;
var G__14856 = 0;
seq__14833 = G__14853;
chunk__14834 = G__14854;
count__14835 = G__14855;
i__14836 = G__14856;
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
client.core.icon_coordinates = (function icon_coordinates(size,pos){var vec__14859 = pos;var x = cljs.core.nth.call(null,vec__14859,0,null);var y = cljs.core.nth.call(null,vec__14859,1,null);var box_wid = (size / client.core.icon_resolution);var box = (Math.floor.call(null,(x / box_wid)) + (Math.floor.call(null,(y / box_wid)) * client.core.icon_resolution));var x_remainder = (cljs.core.mod.call(null,x,box_wid) / box_wid);var y_remainder = (cljs.core.mod.call(null,y,box_wid) / box_wid);var slice_1 = (x_remainder > y_remainder);var slice_2 = ((x_remainder + y_remainder) > 1);var cell = (function (){var G__14860 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [slice_1,slice_2], null);if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,true], null),G__14860))
{return 3;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__14860))
{return 0;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__14860))
{return 2;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,false], null),G__14860))
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
client.core.convert_mouse_movements = (function convert_mouse_movements(app,mouse_chan,opts){var paint_chan = cljs.core.async.chan.call(null);var c__6652__auto___15081 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15012){var state_val_15013 = (state_15012[1]);if((state_val_15013 === 1))
{var state_15012__$1 = state_15012;var statearr_15014_15082 = state_15012__$1;(statearr_15014_15082[2] = null);
(statearr_15014_15082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 2))
{var state_15012__$1 = state_15012;if(true)
{var statearr_15015_15083 = state_15012__$1;(statearr_15015_15083[1] = 4);
} else
{var statearr_15016_15084 = state_15012__$1;(statearr_15016_15084[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 3))
{var inst_15010 = (state_15012[2]);var state_15012__$1 = state_15012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15012__$1,inst_15010);
} else
{if((state_val_15013 === 4))
{var state_15012__$1 = state_15012;var statearr_15017_15085 = state_15012__$1;(statearr_15017_15085[2] = null);
(statearr_15017_15085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 5))
{var state_15012__$1 = state_15012;var statearr_15018_15086 = state_15012__$1;(statearr_15018_15086[2] = null);
(statearr_15018_15086[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 6))
{var inst_15008 = (state_15012[2]);var state_15012__$1 = state_15012;var statearr_15019_15087 = state_15012__$1;(statearr_15019_15087[2] = inst_15008);
(statearr_15019_15087[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 7))
{var state_15012__$1 = state_15012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15012__$1,9,mouse_chan);
} else
{if((state_val_15013 === 8))
{var inst_14988 = (state_15012[2]);var state_15012__$1 = (function (){var statearr_15020 = state_15012;(statearr_15020[7] = inst_14988);
return statearr_15020;
})();var statearr_15021_15088 = state_15012__$1;(statearr_15021_15088[2] = null);
(statearr_15021_15088[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 9))
{var inst_14976 = (state_15012[2]);var inst_14977 = cljs.core.nth.call(null,inst_14976,0,null);var inst_14978 = cljs.core.nth.call(null,inst_14976,1,null);var inst_14979 = cljs.core._EQ_.call(null,inst_14977,new cljs.core.Keyword(null,"down","down",1016993812));var state_15012__$1 = (function (){var statearr_15022 = state_15012;(statearr_15022[8] = inst_14978);
return statearr_15022;
})();if(inst_14979)
{var statearr_15023_15089 = state_15012__$1;(statearr_15023_15089[1] = 10);
} else
{var statearr_15024_15090 = state_15012__$1;(statearr_15024_15090[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 10))
{var inst_14978 = (state_15012[8]);var state_15012__$1 = state_15012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15012__$1,13,paint_chan,inst_14978);
} else
{if((state_val_15013 === 11))
{var state_15012__$1 = state_15012;var statearr_15025_15091 = state_15012__$1;(statearr_15025_15091[2] = null);
(statearr_15025_15091[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 12))
{var inst_14986 = (state_15012[2]);var state_15012__$1 = state_15012;var statearr_15026_15092 = state_15012__$1;(statearr_15026_15092[2] = inst_14986);
(statearr_15026_15092[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 13))
{var inst_14982 = (state_15012[2]);var state_15012__$1 = state_15012;var statearr_15027_15093 = state_15012__$1;(statearr_15027_15093[2] = inst_14982);
(statearr_15027_15093[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 14))
{var state_15012__$1 = state_15012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15012__$1,16,mouse_chan);
} else
{if((state_val_15013 === 15))
{var inst_15004 = (state_15012[2]);var state_15012__$1 = (function (){var statearr_15028 = state_15012;(statearr_15028[9] = inst_15004);
return statearr_15028;
})();var statearr_15029_15094 = state_15012__$1;(statearr_15029_15094[2] = null);
(statearr_15029_15094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 16))
{var inst_14992 = (state_15012[2]);var inst_14993 = cljs.core.nth.call(null,inst_14992,0,null);var inst_14994 = cljs.core.nth.call(null,inst_14992,1,null);var inst_14995 = cljs.core._EQ_.call(null,inst_14993,new cljs.core.Keyword(null,"move","move",1017261891));var state_15012__$1 = (function (){var statearr_15030 = state_15012;(statearr_15030[10] = inst_14994);
return statearr_15030;
})();if(inst_14995)
{var statearr_15031_15095 = state_15012__$1;(statearr_15031_15095[1] = 17);
} else
{var statearr_15032_15096 = state_15012__$1;(statearr_15032_15096[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 17))
{var inst_14994 = (state_15012[10]);var state_15012__$1 = state_15012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15012__$1,20,paint_chan,inst_14994);
} else
{if((state_val_15013 === 18))
{var state_15012__$1 = state_15012;var statearr_15033_15097 = state_15012__$1;(statearr_15033_15097[2] = null);
(statearr_15033_15097[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 19))
{var inst_15002 = (state_15012[2]);var state_15012__$1 = state_15012;var statearr_15034_15098 = state_15012__$1;(statearr_15034_15098[2] = inst_15002);
(statearr_15034_15098[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15013 === 20))
{var inst_14998 = (state_15012[2]);var state_15012__$1 = (function (){var statearr_15035 = state_15012;(statearr_15035[11] = inst_14998);
return statearr_15035;
})();var statearr_15036_15099 = state_15012__$1;(statearr_15036_15099[2] = null);
(statearr_15036_15099[1] = 14);
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
var state_machine__6583__auto____0 = (function (){var statearr_15040 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15040[0] = state_machine__6583__auto__);
(statearr_15040[1] = 1);
return statearr_15040;
});
var state_machine__6583__auto____1 = (function (state_15012){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15012);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15041){if((e15041 instanceof Object))
{var ex__6586__auto__ = e15041;var statearr_15042_15100 = state_15012;(statearr_15042_15100[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15101 = state_15012;
state_15012 = G__15101;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15012){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15043 = f__6653__auto__.call(null);(statearr_15043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto___15081);
return statearr_15043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
}));
var c__6652__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6653__auto__ = (function (){var switch__6582__auto__ = (function (state_15062){var state_val_15063 = (state_15062[1]);if((state_val_15063 === 7))
{var inst_15049 = (state_15062[7]);var inst_15057 = (state_15062[2]);var inst_15044 = inst_15049;var state_15062__$1 = (function (){var statearr_15064 = state_15062;(statearr_15064[8] = inst_15057);
(statearr_15064[9] = inst_15044);
return statearr_15064;
})();var statearr_15065_15102 = state_15062__$1;(statearr_15065_15102[2] = null);
(statearr_15065_15102[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15063 === 6))
{var state_15062__$1 = state_15062;var statearr_15066_15103 = state_15062__$1;(statearr_15066_15103[2] = null);
(statearr_15066_15103[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15063 === 5))
{var inst_15049 = (state_15062[7]);var inst_15047 = (state_15062[10]);var inst_15044 = (state_15062[9]);var inst_15053 = (function (){var ic = inst_15049;var pos = inst_15047;var prev = inst_15044;return ((function (ic,pos,prev,inst_15049,inst_15047,inst_15044,state_val_15063){
return (function (p__15052){var map__15067 = p__15052;var map__15067__$1 = ((cljs.core.seq_QMARK_.call(null,map__15067))?cljs.core.apply.call(null,cljs.core.hash_map,map__15067):map__15067);var state = map__15067__$1;var index = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"index","index",1114250308));var pattern = cljs.core.get.call(null,map__15067__$1,new cljs.core.Keyword(null,"pattern","pattern",4517781250));return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pattern","pattern",4517781250)], null),client.core.update_pattern,index,ic);
});
;})(ic,pos,prev,inst_15049,inst_15047,inst_15044,state_val_15063))
})();var inst_15054 = om.core.update_BANG_.call(null,app,inst_15053);var state_15062__$1 = state_15062;var statearr_15068_15104 = state_15062__$1;(statearr_15068_15104[2] = inst_15054);
(statearr_15068_15104[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15063 === 4))
{var inst_15049 = (state_15062[7]);var inst_15047 = (state_15062[10]);var inst_15044 = (state_15062[9]);var inst_15047__$1 = (state_15062[2]);var inst_15048 = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(opts);var inst_15049__$1 = client.core.icon_coordinates.call(null,inst_15048,inst_15047__$1);var inst_15050 = cljs.core.not_EQ_.call(null,inst_15049__$1,inst_15044);var state_15062__$1 = (function (){var statearr_15069 = state_15062;(statearr_15069[7] = inst_15049__$1);
(statearr_15069[10] = inst_15047__$1);
return statearr_15069;
})();if(inst_15050)
{var statearr_15070_15105 = state_15062__$1;(statearr_15070_15105[1] = 5);
} else
{var statearr_15071_15106 = state_15062__$1;(statearr_15071_15106[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15063 === 3))
{var inst_15060 = (state_15062[2]);var state_15062__$1 = state_15062;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15062__$1,inst_15060);
} else
{if((state_val_15063 === 2))
{var state_15062__$1 = state_15062;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15062__$1,4,paint_chan);
} else
{if((state_val_15063 === 1))
{var inst_15044 = null;var state_15062__$1 = (function (){var statearr_15072 = state_15062;(statearr_15072[9] = inst_15044);
return statearr_15072;
})();var statearr_15073_15107 = state_15062__$1;(statearr_15073_15107[2] = null);
(statearr_15073_15107[1] = 2);
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
var state_machine__6583__auto____0 = (function (){var statearr_15077 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15077[0] = state_machine__6583__auto__);
(statearr_15077[1] = 1);
return statearr_15077;
});
var state_machine__6583__auto____1 = (function (state_15062){while(true){
var ret_value__6584__auto__ = (function (){try{while(true){
var result__6585__auto__ = switch__6582__auto__.call(null,state_15062);if(cljs.core.keyword_identical_QMARK_.call(null,result__6585__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6585__auto__;
}
break;
}
}catch (e15078){if((e15078 instanceof Object))
{var ex__6586__auto__ = e15078;var statearr_15079_15108 = state_15062;(statearr_15079_15108[5] = ex__6586__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15062);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15078;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6584__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15109 = state_15062;
state_15062 = G__15109;
continue;
}
} else
{return ret_value__6584__auto__;
}
break;
}
});
state_machine__6583__auto__ = function(state_15062){
switch(arguments.length){
case 0:
return state_machine__6583__auto____0.call(this);
case 1:
return state_machine__6583__auto____1.call(this,state_15062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6583__auto____0;
state_machine__6583__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6583__auto____1;
return state_machine__6583__auto__;
})()
;})(switch__6582__auto__))
})();var state__6654__auto__ = (function (){var statearr_15080 = f__6653__auto__.call(null);(statearr_15080[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6652__auto__);
return statearr_15080;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6654__auto__);
}));
return c__6652__auto__;
});
client.core.get_relative_pos = (function get_relative_pos(e){var target = e.target;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(e.pageX - target.offsetLeft),(e.pageY - target.offsetTop)], null);
});
client.core.icon = (function icon(app,opts){var refresh_icon = (function refresh_icon(owner){var context = om.core.get_node.call(null,owner,"canvas").getContext("2d");var size = new cljs.core.Keyword(null,"width","width",1127031096).cljs$core$IFn$_invoke$arity$1(opts);return client.core.draw_icon.call(null,context,size,new cljs.core.Keyword(null,"pattern","pattern",4517781250).cljs$core$IFn$_invoke$arity$1(app));
});
if(typeof client.core.t15113 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t15113 = (function (refresh_icon,opts,app,icon,meta15114){
this.refresh_icon = refresh_icon;
this.opts = opts;
this.app = app;
this.icon = icon;
this.meta15114 = meta15114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t15113.cljs$lang$type = true;
client.core.t15113.cljs$lang$ctorStr = "client.core/t15113";
client.core.t15113.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"client.core/t15113");
});
client.core.t15113.prototype.om$core$IRender$ = true;
client.core.t15113.prototype.om$core$IRender$render$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;var mouse_chan = om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460)], null));var mouse_fn = ((function (mouse_chan){
return (function (typ){return ((function (mouse_chan){
return (function (e){return cljs.core.async.put_BANG_.call(null,mouse_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [typ,client.core.get_relative_pos.call(null,e)], null));
});
;})(mouse_chan))
});})(mouse_chan))
;return om.dom.canvas.call(null,cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,self__.opts,new cljs.core.Keyword(null,"ref","ref",1014017029),"canvas",new cljs.core.Keyword(null,"onMouseDown","onMouseDown",1569008442),mouse_fn.call(null,new cljs.core.Keyword(null,"down","down",1016993812)),new cljs.core.Keyword(null,"onMouseMove","onMouseMove",1569276521),mouse_fn.call(null,new cljs.core.Keyword(null,"move","move",1017261891)),new cljs.core.Keyword(null,"onMouseUp","onMouseUp",3593250483),mouse_fn.call(null,new cljs.core.Keyword(null,"up","up",1013907981)))));
});
client.core.t15113.prototype.om$core$IDidMount$ = true;
client.core.t15113.prototype.om$core$IDidMount$did_mount$arity$3 = (function (_,owner,___$1){var self__ = this;
var ___$2 = this;return self__.refresh_icon.call(null,owner);
});
client.core.t15113.prototype.om$core$IDidUpdate$ = true;
client.core.t15113.prototype.om$core$IDidUpdate$did_update$arity$5 = (function (_,owner,___$1,___$2,___$3){var self__ = this;
var ___$4 = this;return self__.refresh_icon.call(null,owner);
});
client.core.t15113.prototype.om$core$IWillMount$ = true;
client.core.t15113.prototype.om$core$IWillMount$will_mount$arity$2 = (function (_,owner){var self__ = this;
var ___$1 = this;var mouse_chan = cljs.core.async.chan.call(null);om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse-chan","mouse-chan",1975028460)], null),mouse_chan);
return client.core.convert_mouse_movements.call(null,self__.app,mouse_chan,self__.opts);
});
client.core.t15113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15115){var self__ = this;
var _15115__$1 = this;return self__.meta15114;
});
client.core.t15113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15115,meta15114__$1){var self__ = this;
var _15115__$1 = this;return (new client.core.t15113(self__.refresh_icon,self__.opts,self__.app,self__.icon,meta15114__$1));
});
client.core.__GT_t15113 = (function __GT_t15113(refresh_icon__$1,opts__$1,app__$1,icon__$1,meta15114){return (new client.core.t15113(refresh_icon__$1,opts__$1,app__$1,icon__$1,meta15114));
});
}
return (new client.core.t15113(refresh_icon,opts,app,icon,null));
});
client.core.swatch = (function swatch(app,opts){var index = opts.call(null,new cljs.core.Keyword(null,"index","index",1114250308));if(typeof client.core.t15119 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t15119 = (function (index,opts,app,swatch,meta15120){
this.index = index;
this.opts = opts;
this.app = app;
this.swatch = swatch;
this.meta15120 = meta15120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t15119.cljs$lang$type = true;
client.core.t15119.cljs$lang$ctorStr = "client.core/t15119";
client.core.t15119.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"client.core/t15119");
});
client.core.t15119.prototype.om$core$IRender$ = true;
client.core.t15119.prototype.om$core$IRender$render$arity$2 = (function (this__5351__auto__,___5352__auto__){var self__ = this;
var this__5351__auto____$1 = this;return om.dom.div.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",1004015509),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"index","index",1114250308).cljs$core$IFn$_invoke$arity$1(self__.app),self__.index))?"selected":null),new cljs.core.Keyword(null,"style","style",1123684643),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",1619226998),client.core.colors.call(null,self__.index)], null),new cljs.core.Keyword(null,"onClick","onClick",3956969051),cljs.core.partial.call(null,om.core.update_BANG_,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",1114250308)], null),cljs.core.constantly.call(null,self__.index))], null)));
});
client.core.t15119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15121){var self__ = this;
var _15121__$1 = this;return self__.meta15120;
});
client.core.t15119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15121,meta15120__$1){var self__ = this;
var _15121__$1 = this;return (new client.core.t15119(self__.index,self__.opts,self__.app,self__.swatch,meta15120__$1));
});
client.core.__GT_t15119 = (function __GT_t15119(index__$1,opts__$1,app__$1,swatch__$1,meta15120){return (new client.core.t15119(index__$1,opts__$1,app__$1,swatch__$1,meta15120));
});
}
return (new client.core.t15119(index,opts,app,swatch,null));
});
client.core.screen = (function screen__$1(app){if(typeof client.core.t15129 !== 'undefined')
{} else
{
/**
* @constructor
*/
client.core.t15129 = (function (app,screen,meta15130){
this.app = app;
this.screen = screen;
this.meta15130 = meta15130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
client.core.t15129.cljs$lang$type = true;
client.core.t15129.cljs$lang$ctorStr = "client.core/t15129";
client.core.t15129.cljs$lang$ctorPrWriter = (function (this__3954__auto__,writer__3955__auto__,opt__3956__auto__){return cljs.core._write.call(null,writer__3955__auto__,"client.core/t15129");
});
client.core.t15129.prototype.om$core$IRender$ = true;
client.core.t15129.prototype.om$core$IRender$render$arity$2 = (function (this__5351__auto__,___5352__auto__){var self__ = this;
var this__5351__auto____$1 = this;return om.dom.div.call(null,{"id": "main"},om.core.build.call(null,client.core.icon,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",1127031096),400,new cljs.core.Keyword(null,"height","height",4087841945),400,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"big-canvas","big-canvas",1462351415)], null)], null)),om.dom.p.call(null,null,"Palette"),cljs.core.apply.call(null,om.dom.div,{"id": "pallete"},(function (){var iter__4103__auto__ = (function iter__15132(s__15133){return (new cljs.core.LazySeq(null,(function (){var s__15133__$1 = s__15133;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__15133__$1);if(temp__4092__auto__)
{var s__15133__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15133__$2))
{var c__4101__auto__ = cljs.core.chunk_first.call(null,s__15133__$2);var size__4102__auto__ = cljs.core.count.call(null,c__4101__auto__);var b__15135 = cljs.core.chunk_buffer.call(null,size__4102__auto__);if((function (){var i__15134 = 0;while(true){
if((i__15134 < size__4102__auto__))
{var index = cljs.core._nth.call(null,c__4101__auto__,i__15134);cljs.core.chunk_append.call(null,b__15135,om.core.build.call(null,client.core.swatch,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",1114250308),index], null)], null)));
{
var G__15136 = (i__15134 + 1);
i__15134 = G__15136;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15135),iter__15132.call(null,cljs.core.chunk_rest.call(null,s__15133__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15135),null);
}
} else
{var index = cljs.core.first.call(null,s__15133__$2);return cljs.core.cons.call(null,om.core.build.call(null,client.core.swatch,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",1114250308),index], null)], null)),iter__15132.call(null,cljs.core.rest.call(null,s__15133__$2)));
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
client.core.t15129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15131){var self__ = this;
var _15131__$1 = this;return self__.meta15130;
});
client.core.t15129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15131,meta15130__$1){var self__ = this;
var _15131__$1 = this;return (new client.core.t15129(self__.app,self__.screen,meta15130__$1));
});
client.core.__GT_t15129 = (function __GT_t15129(app__$1,screen__$1,meta15130){return (new client.core.t15129(app__$1,screen__$1,meta15130));
});
}
return (new client.core.t15129(app,screen__$1,null));
});
om.core.root.call(null,client.core.app_state,client.core.screen,document.body);

//# sourceMappingURL=core.js.map