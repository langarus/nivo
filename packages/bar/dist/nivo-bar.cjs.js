"use strict";var e=require("@nivo/axes"),a=require("@nivo/core"),t=require("@react-spring/web"),i=require("react"),n=require("@nivo/annotations"),r=require("react/jsx-runtime"),l=require("@nivo/legends"),o=require("@nivo/colors"),d=require("@nivo/tooltip"),u=require("@nivo/scales"),s=require("d3-shape"),c=require("lodash/uniqBy");function h(){return h=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},h.apply(this,arguments)}function f(e,a){if(null==e)return{};var t,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],a.indexOf(t)>=0||(n[t]=e[t]);return n}var v,b=function(e){var a=e.bars,t=e.annotations,i=n.useAnnotations({data:a,annotations:t,getPosition:function(e){return{x:e.x+e.width/2,y:e.y+e.height/2}},getDimensions:function(e){var a=e.height,t=e.width;return{width:t,height:a,size:Math.max(t,a)}}});return r.jsx(r.Fragment,{children:i.map((function(e,a){return r.jsx(n.Annotation,h({},e),a)}))})},g=function(e){var a=e.width,t=e.height,i=e.legends,n=e.toggleSerie;return r.jsx(r.Fragment,{children:i.map((function(e,i){var o,d=e[0],u=e[1];return r.jsx(l.BoxLegendSvg,h({},d,{containerWidth:a,containerHeight:t,data:null!=(o=d.data)?o:u,toggleSerie:d.toggleSerie&&"keys"===d.dataFrom?n:void 0}),i)}))})},m=["data"],x=function(e){var n,l=e.bar,o=l.data,u=f(l,m),s=e.style,c=s.borderColor,v=s.color,b=s.height,g=s.labelColor,x=s.labelOpacity,p=s.labelX,y=s.labelY,k=s.transform,S=s.width,C=s.textAnchor,w=e.borderRadius,L=e.borderWidth,V=e.label,T=e.shouldRenderLabel,M=e.isInteractive,B=e.onClick,W=e.onMouseEnter,O=e.onMouseLeave,I=e.tooltip,P=e.isFocusable,R=e.ariaLabel,j=e.ariaLabelledBy,E=e.ariaDescribedBy,A=e.ariaDisabled,F=e.ariaHidden,H=a.useTheme(),D=d.useTooltip(),q=D.showTooltipFromEvent,X=D.showTooltipAt,Y=D.hideTooltip,G=i.useMemo((function(){return function(){return i.createElement(I,h({},u,o))}}),[I,u,o]),z=i.useCallback((function(e){null==B||B(h({color:u.color},o),e)}),[u,o,B]),N=i.useCallback((function(e){return q(G(),e)}),[q,G]),K=i.useCallback((function(e){null==W||W(o,e),q(G(),e)}),[o,W,q,G]),_=i.useCallback((function(e){null==O||O(o,e),Y()}),[o,Y,O]),J=i.useCallback((function(){X(G(),[u.absX+u.width/2,u.absY])}),[X,G,u]),Q=i.useCallback((function(){Y()}),[Y]);return r.jsxs(t.animated.g,{transform:k,children:[r.jsx(t.animated.rect,{width:t.to(S,(function(e){return Math.max(e,0)})),height:t.to(b,(function(e){return Math.max(e,0)})),rx:w,ry:w,fill:null!=(n=o.fill)?n:v,strokeWidth:L,stroke:c,focusable:P,tabIndex:P?0:void 0,"aria-label":R?R(o):void 0,"aria-labelledby":j?j(o):void 0,"aria-describedby":E?E(o):void 0,"aria-disabled":A?A(o):void 0,"aria-hidden":F?F(o):void 0,onMouseEnter:M?K:void 0,onMouseMove:M?N:void 0,onMouseLeave:M?_:void 0,onClick:M?z:void 0,onFocus:M&&P?J:void 0,onBlur:M&&P?Q:void 0}),T&&r.jsx(t.animated.text,{x:p,y:y,textAnchor:C,dominantBaseline:"central",fillOpacity:x,style:h({},H.labels.text,{pointerEvents:"none",fill:g}),children:V})]})},p=["color","label"],y=function(e){var a=e.color,t=e.label,i=f(e,p);return r.jsx(d.BasicTooltip,{id:t,value:i.formattedValue,enableChip:!0,color:a})},k={indexBy:"id",keys:["value"],groupMode:"stacked",layout:"vertical",reverse:!1,minValue:"auto",maxValue:"auto",valueScale:{type:"linear"},indexScale:{type:"band",round:!0},padding:.1,innerPadding:0,axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,enableLabel:!0,label:"formattedValue",labelPosition:"middle",labelOffset:0,labelSkipWidth:0,labelSkipHeight:0,labelTextColor:{from:"theme",theme:"labels.text.fill"},colorBy:"id",colors:{scheme:"nivo"},borderRadius:0,borderWidth:0,borderColor:{from:"color"},isInteractive:!0,tooltip:y,tooltipLabel:function(e){return e.id+" - "+e.indexValue},legends:[],initialHiddenIds:[],annotations:[],markers:[],enableTotals:!1,totalsOffset:10},S=h({},k,{layers:["grid","axes","bars","totals","markers","legends","annotations"],barComponent:x,defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),C=h({},k,{layers:["grid","axes","bars","totals","legends","annotations"],pixelRatio:"undefined"!=typeof window&&null!=(v=window.devicePixelRatio)?v:1}),w=function(e,a,t,i,n,r){return u.computeScale(i,{all:e.map(a),min:0,max:0},n,r).padding(t)},L=function(e,a){return e.map((function(e){return h({},a.reduce((function(e,a){return e[a]=null,e}),{}),e)}))},V=function(e){return Object.keys(e).reduce((function(a,t){return e[t]&&(a[t]=e[t]),a}),{})},T=function(e){return[e,Number(e)]};function M(e,a,t,i){return void 0===e&&(e=k.layout),void 0===a&&(a=k.reverse),void 0===t&&(t=k.labelPosition),void 0===i&&(i=k.labelOffset),function(n,r){var l=i*(a?-1:1);if("horizontal"===e){var o=n/2;return"start"===t?o=a?n:0:"end"===t&&(o=a?0:n),{labelX:o+l,labelY:r/2,textAnchor:"middle"===t?"middle":a?"end":"start"}}var d=r/2;return"start"===t?d=a?0:r:"end"===t&&(d=a?r:0),{labelX:n/2,labelY:d-l,textAnchor:"middle"}}}var B=["layout","minValue","maxValue","reverse","width","height","padding","innerPadding","valueScale","indexScale","hiddenIds"],W=function(e,a){return e>a},O=function(e,a){return e<a},I=function(e,a){return Array.from(" ".repeat(a-e),(function(a,t){return e+t}))},P=function(e){return W(e,0)?0:e},R=function(e,a,t,i){var n=e.data,r=e.formatValue,l=e.getColor,o=e.getIndex,d=e.getTooltipLabel,u=e.innerPadding,s=void 0===u?0:u,c=e.keys,h=e.xScale,f=e.yScale,v=e.margin,b=t?O:W,g=n.map(V),m=[];return c.forEach((function(e,t){return I(0,h.domain().length).forEach((function(u){var c,x,p,y=T(n[u][e]),k=y[0],S=y[1],C=o(n[u]),w=(null!=(c=h(C))?c:0)+a*t+s*t,L=b(x=S,0)?null!=(p=f(x))?p:0:i,V=function(e,a){var t;return b(e,0)?i-a:(null!=(t=f(e))?t:0)-i}(S,L),M={id:e,value:null===k?k:S,formattedValue:r(S),hidden:!1,index:u,indexValue:C,data:g[u]};m.push({key:e+"."+M.indexValue,index:m.length,data:M,x:w,y:L,absX:v.left+w,absY:v.top+L,width:a,height:V,color:l(M),label:d(M)})}))})),m},j=function(e,a,t,i){var n=e.data,r=e.formatValue,l=e.getIndex,o=e.getColor,d=e.getTooltipLabel,u=e.keys,s=e.innerPadding,c=void 0===s?0:s,h=e.xScale,f=e.yScale,v=e.margin,b=t?O:W,g=n.map(V),m=[];return u.forEach((function(e,t){return I(0,f.domain().length).forEach((function(u){var s,x,p,y=T(n[u][e]),k=y[0],S=y[1],C=l(n[u]),w=b(x=S,0)?i:null!=(p=h(x))?p:0,L=(null!=(s=f(C))?s:0)+a*t+c*t,V=function(e,a){var t;return b(e,0)?(null!=(t=h(e))?t:0)-i:i-a}(S,w),M={id:e,value:null===k?k:S,formattedValue:r(S),hidden:!1,index:u,indexValue:C,data:g[u]};m.push({key:e+"."+M.indexValue,index:m.length,data:M,x:w,y:L,absX:v.left+w,absY:v.top+L,width:V,height:a,color:o(M),label:d(M)})}))})),m},E=function(e){var a,t,i=e.layout,n=e.minValue,r=e.maxValue,l=e.reverse,o=e.width,d=e.height,s=e.padding,c=void 0===s?0:s,v=e.innerPadding,b=void 0===v?0:v,g=e.valueScale,m=e.indexScale,x=e.hiddenIds,p=void 0===x?[]:x,y=f(e,B),k=y.keys.filter((function(e){return!p.includes(e)})),S=L(y.data,k),C="vertical"===i?["y","x",o]:["x","y",d],V=C[0],T=C[1],M=C[2],W=w(S,y.getIndex,c,m,M,T),O=h({max:r,min:n,reverse:l},g),I="auto"===O.min?P:function(e){return e},E=S.reduce((function(e,a){return[].concat(e,k.map((function(e){return a[e]})))}),[]).filter(Boolean),A=I(Math.min.apply(Math,E)),F=(t=Math.max.apply(Math,E),isFinite(t)?t:0),H=u.computeScale(O,{all:E,min:A,max:F},"x"===V?o:d,V),D="vertical"===i?[W,H]:[H,W],q=D[0],X=D[1],Y=(W.bandwidth()-b*(k.length-1))/k.length,G=[h({},y,{data:S,keys:k,innerPadding:b,xScale:q,yScale:X}),Y,O.reverse,null!=(a=H(0))?a:0];return{xScale:q,yScale:X,bars:Y>0?"vertical"===i?R.apply(void 0,G):j.apply(void 0,G):[]}},A=["data","layout","minValue","maxValue","reverse","width","height","padding","valueScale","indexScale","hiddenIds"],F=function e(a){var t;return a.some(Array.isArray)?e((t=[]).concat.apply(t,a)):a},H=function(e,a,t){var i=e.formatValue,n=e.getColor,r=e.getIndex,l=e.getTooltipLabel,o=e.innerPadding,d=e.stackedData,u=e.xScale,s=e.yScale,c=e.margin,h=[];return d.forEach((function(e){return u.domain().forEach((function(d,f){var v,b,g=e[f],m=null!=(v=u(r(g.data)))?v:0,x=(null!=(b=function(e){return s(e[t?0:1])}(g))?b:0)+.5*o,p=function(e,a){var i;return(null!=(i=s(e[t?1:0]))?i:0)-a}(g,x)-o,y=T(g.data[e.key]),k=y[0],S=y[1],C={id:e.key,value:null===k?k:S,formattedValue:i(S),hidden:!1,index:f,indexValue:d,data:V(g.data)};h.push({key:e.key+"."+d,index:h.length,data:C,x:m,y:x,absX:c.left+m,absY:c.top+x,width:a,height:p,color:n(C),label:l(C)})}))})),h},D=function(e,a,t){var i=e.formatValue,n=e.getColor,r=e.getIndex,l=e.getTooltipLabel,o=e.innerPadding,d=e.stackedData,u=e.xScale,s=e.yScale,c=e.margin,h=[];return d.forEach((function(e){return s.domain().forEach((function(d,f){var v,b,g=e[f],m=null!=(v=s(r(g.data)))?v:0,x=(null!=(b=function(e){return u(e[t?1:0])}(g))?b:0)+.5*o,p=function(e,a){var i;return(null!=(i=u(e[t?0:1]))?i:0)-a}(g,x)-o,y=T(g.data[e.key]),k=y[0],S=y[1],C={id:e.key,value:null===k?k:S,formattedValue:i(S),hidden:!1,index:f,indexValue:d,data:V(g.data)};h.push({key:e.key+"."+d,index:h.length,data:C,x:x,y:m,absX:c.left+x,absY:c.top+m,width:p,height:a,color:n(C),label:l(C)})}))})),h},q=function(e){var a,t=e.data,i=e.layout,n=e.minValue,r=e.maxValue,l=e.reverse,o=e.width,d=e.height,c=e.padding,v=void 0===c?0:c,b=e.valueScale,g=e.indexScale,m=e.hiddenIds,x=void 0===m?[]:m,p=f(e,A),y=p.keys.filter((function(e){return!x.includes(e)})),k=s.stack().keys(y).offset(s.stackOffsetDiverging)(L(t,y)),S="vertical"===i?["y","x",o]:["x","y",d],C=S[0],V=S[1],T=S[2],M=w(t,p.getIndex,v,g,T,V),B=h({max:r,min:n,reverse:l},b),W=(a=F(k),"log"===b.type?a.filter((function(e){return 0!==e})):a),O=Math.min.apply(Math,W),I=Math.max.apply(Math,W),P=u.computeScale(B,{all:W,min:O,max:I},"x"===C?o:d,C),R="vertical"===i?[M,P]:[P,M],j=R[0],E=R[1],q=p.innerPadding>0?p.innerPadding:0,X=M.bandwidth(),Y=[h({},p,{innerPadding:q,stackedData:k,xScale:j,yScale:E}),X,B.reverse];return{xScale:j,yScale:E,bars:X>0?"vertical"===i?H.apply(void 0,Y):D.apply(void 0,Y):[]}},X=function(e){var t=e.bars,i=e.direction,n=e.from,r=e.groupMode,l=e.layout,o=e.legendLabel,d=e.reverse,u=a.getPropertyAccessor(null!=o?o:"indexes"===n?"indexValue":"id");return"indexes"===n?function(e,a,t){var i=c(e.map((function(e){var a,i;return{id:null!=(a=e.data.indexValue)?a:"",label:t(e.data),hidden:e.data.hidden,color:null!=(i=e.color)?i:"#000"}})),(function(e){return e.id}));return"horizontal"===a&&i.reverse(),i}(t,l,u):function(e,a,t,i,n,r){var l=c(e.map((function(e){var a;return{id:e.data.id,label:r(e.data),hidden:e.data.hidden,color:null!=(a=e.color)?a:"#000"}})),(function(e){return e.id}));return("vertical"===a&&"stacked"===i&&"column"===t&&!0!==n||"horizontal"===a&&"stacked"===i&&!0===n)&&l.reverse(),l}(t,l,i,r,d,u)},Y=function(e,a,t){var i=e.get(a)||0;e.set(a,i+t)},G=function(e,a,t){var i=e.get(a)||0;e.set(a,i+(t>0?t:0))},z=function(e,a,t){var i=e.get(a)||0;e.set(a,Math.max(i,Number(t)))},N=function(e,a){var t=e.get(a)||0;e.set(a,t+1)},K=function(e){var t=e.indexBy,n=void 0===t?k.indexBy:t,r=e.keys,l=void 0===r?k.keys:r,d=e.label,u=void 0===d?k.label:d,s=e.tooltipLabel,c=void 0===s?k.tooltipLabel:s,f=e.valueFormat,v=e.colors,b=void 0===v?k.colors:v,g=e.colorBy,m=void 0===g?k.colorBy:g,x=e.borderColor,p=void 0===x?k.borderColor:x,y=e.labelTextColor,S=void 0===y?k.labelTextColor:y,C=e.groupMode,w=void 0===C?k.groupMode:C,L=e.layout,V=void 0===L?k.layout:L,T=e.reverse,M=void 0===T?k.reverse:T,B=e.data,W=e.minValue,O=void 0===W?k.minValue:W,I=e.maxValue,P=void 0===I?k.maxValue:I,R=e.margin,j=e.width,A=e.height,F=e.padding,H=void 0===F?k.padding:F,D=e.innerPadding,K=void 0===D?k.innerPadding:D,_=e.valueScale,J=void 0===_?k.valueScale:_,Q=e.indexScale,U=void 0===Q?k.indexScale:Q,Z=e.initialHiddenIds,$=void 0===Z?k.initialHiddenIds:Z,ee=e.enableLabel,ae=void 0===ee?k.enableLabel:ee,te=e.labelSkipWidth,ie=void 0===te?k.labelSkipWidth:te,ne=e.labelSkipHeight,re=void 0===ne?k.labelSkipHeight:ne,le=e.legends,oe=void 0===le?k.legends:le,de=e.legendLabel,ue=e.totalsOffset,se=void 0===ue?k.totalsOffset:ue,ce=i.useState(null!=$?$:[]),he=ce[0],fe=ce[1],ve=i.useCallback((function(e){fe((function(a){return a.indexOf(e)>-1?a.filter((function(a){return a!==e})):[].concat(a,[e])}))}),[]),be=a.usePropertyAccessor(n),ge=a.usePropertyAccessor(u),me=a.usePropertyAccessor(c),xe=a.useValueFormatter(f),pe=a.useTheme(),ye=o.useOrdinalColorScale(b,m),ke=o.useInheritedColor(p,pe),Se=o.useInheritedColor(S,pe),Ce=("grouped"===w?E:q)({layout:V,reverse:M,data:B,getIndex:be,keys:l,minValue:O,maxValue:P,width:j,height:A,getColor:ye,padding:H,innerPadding:K,valueScale:J,indexScale:U,hiddenIds:he,formatValue:xe,getTooltipLabel:me,margin:R}),we=Ce.bars,Le=Ce.xScale,Ve=Ce.yScale,Te=i.useMemo((function(){return we.filter((function(e){return null!==e.data.value})).map((function(e,a){return h({},e,{index:a})}))}),[we]),Me=i.useCallback((function(e){var a=e.width,t=e.height;return!!ae&&(!(ie>0&&a<ie)&&!(re>0&&t<re))}),[ae,ie,re]),Be=i.useMemo((function(){return l.map((function(e){var a=we.find((function(a){return a.data.id===e}));return h({},a,{data:h({id:e},null==a?void 0:a.data,{hidden:he.includes(e)})})}))}),[he,l,we]),We=i.useMemo((function(){return oe.map((function(e){return[e,X({bars:"keys"===e.dataFrom?Be:we,direction:e.direction,from:e.dataFrom,groupMode:w,layout:V,legendLabel:de,reverse:M})]}))}),[oe,Be,we,w,V,de,M]),Oe=i.useMemo((function(){return function(e,a,t,i,n,r,l){void 0===i&&(i=k.layout),void 0===n&&(n=k.groupMode);var o=[];if(0===e.length)return o;var d=new Map,u=e[0].width,s=e[0].height;if("stacked"===n){var c=new Map;e.forEach((function(e){var a=e.data,t=a.indexValue,i=a.value;Y(d,t,Number(i)),G(c,t,Number(i))})),c.forEach((function(e,n){var c,h,f,v=d.get(n)||0;"vertical"===i?(c=a(n),h=t(e),f=t(e/2)):(c=a(e),h=t(n),f=a(e/2)),c+="vertical"===i?u/2:r,h+="vertical"===i?-r:s/2,o.push({key:"total_"+n,x:c,y:h,value:v,formattedValue:l(v),animationOffset:f})}))}else if("grouped"===n){var h=new Map,f=new Map;e.forEach((function(e){var a=e.data,t=a.indexValue,i=a.value;Y(d,t,Number(i)),z(h,t,Number(i)),N(f,t)})),h.forEach((function(e,n){var c,h,v,b=d.get(n)||0,g=f.get(n);"vertical"===i?(c=a(n),h=t(e),v=t(e/2)):(c=a(e),h=t(n),v=a(e/2)),c+="vertical"===i?g*u/2:r,h+="vertical"===i?-r:g*s/2,o.push({key:"total_"+n,x:c,y:h,value:b,formattedValue:l(b),animationOffset:v})}))}return o}(we,Le,Ve,V,w,se,xe)}),[we,Le,Ve,V,w,se,xe]);return{bars:we,barsWithValue:Te,xScale:Le,yScale:Ve,getIndex:be,getLabel:ge,getTooltipLabel:me,formatValue:xe,getColor:ye,getBorderColor:ke,getLabelColor:Se,shouldRenderBarLabel:Me,hiddenIds:he,toggleSerie:ve,legendsWithData:We,barTotals:Oe}},_=function(e){var i=e.data,n=e.springConfig,l=e.animate,o=e.layout,d=void 0===o?S.layout:o,u=a.useTheme();return t.useTransition(i,{keys:function(e){return e.key},from:function(e){return{x:"vertical"===d?e.x:e.animationOffset,y:"vertical"===d?e.animationOffset:e.y,labelOpacity:0}},enter:function(e){return{x:e.x,y:e.y,labelOpacity:1}},update:function(e){return{x:e.x,y:e.y,labelOpacity:1}},leave:function(e){return{x:"vertical"===d?e.x:e.animationOffset,y:"vertical"===d?e.animationOffset:e.y,labelOpacity:0}},config:n,immediate:!l,initial:l?void 0:null})((function(e,a){return r.jsx(t.animated.text,{x:e.x,y:e.y,fillOpacity:e.labelOpacity,style:h({},u.labels.text,{pointerEvents:"none"}),fontWeight:"bold",fontSize:u.labels.text.fontSize,fontFamily:u.labels.text.fontFamily,textAnchor:"vertical"===d?"middle":"start",alignmentBaseline:"vertical"===d?"alphabetic":"middle",children:a.formattedValue},a.key)}))},J=["isInteractive","animate","motionConfig","theme","renderWrapper"],Q=function(n){var l=n.data,o=n.indexBy,d=n.keys,u=n.margin,s=n.width,c=n.height,f=n.groupMode,v=n.layout,m=n.reverse,x=n.minValue,p=n.maxValue,y=n.valueScale,k=n.indexScale,C=n.padding,w=n.innerPadding,L=n.axisTop,V=n.axisRight,T=n.axisBottom,B=void 0===T?S.axisBottom:T,W=n.axisLeft,O=void 0===W?S.axisLeft:W,I=n.enableGridX,P=void 0===I?S.enableGridX:I,R=n.enableGridY,j=void 0===R?S.enableGridY:R,E=n.gridXValues,A=n.gridYValues,F=n.layers,H=void 0===F?S.layers:F,D=n.barComponent,q=void 0===D?S.barComponent:D,X=n.enableLabel,Y=void 0===X?S.enableLabel:X,G=n.label,z=n.labelSkipWidth,N=void 0===z?S.labelSkipWidth:z,J=n.labelSkipHeight,Q=void 0===J?S.labelSkipHeight:J,U=n.labelTextColor,Z=n.labelPosition,$=void 0===Z?S.labelPosition:Z,ee=n.labelOffset,ae=void 0===ee?S.labelOffset:ee,te=n.markers,ie=void 0===te?S.markers:te,ne=n.colorBy,re=n.colors,le=n.defs,oe=void 0===le?S.defs:le,de=n.fill,ue=void 0===de?S.fill:de,se=n.borderRadius,ce=void 0===se?S.borderRadius:se,he=n.borderWidth,fe=void 0===he?S.borderWidth:he,ve=n.borderColor,be=n.annotations,ge=void 0===be?S.annotations:be,me=n.legendLabel,xe=n.tooltipLabel,pe=n.valueFormat,ye=n.isInteractive,ke=void 0===ye?S.isInteractive:ye,Se=n.tooltip,Ce=void 0===Se?S.tooltip:Se,we=n.onClick,Le=n.onMouseEnter,Ve=n.onMouseLeave,Te=n.legends,Me=n.role,Be=void 0===Me?S.role:Me,We=n.ariaLabel,Oe=n.ariaLabelledBy,Ie=n.ariaDescribedBy,Pe=n.isFocusable,Re=void 0===Pe?S.isFocusable:Pe,je=n.barAriaLabel,Ee=n.barAriaLabelledBy,Ae=n.barAriaDescribedBy,Fe=n.barAriaHidden,He=n.barAriaDisabled,De=n.initialHiddenIds,qe=n.enableTotals,Xe=void 0===qe?S.enableTotals:qe,Ye=n.totalsOffset,Ge=void 0===Ye?S.totalsOffset:Ye,ze=a.useMotionConfig(),Ne=ze.animate,Ke=ze.config,_e=a.useDimensions(s,c,u),Je=_e.outerWidth,Qe=_e.outerHeight,Ue=_e.margin,Ze=_e.innerWidth,$e=_e.innerHeight,ea=K({indexBy:o,label:G,tooltipLabel:xe,valueFormat:pe,colors:re,colorBy:ne,borderColor:ve,labelTextColor:U,groupMode:f,layout:v,reverse:m,data:l,keys:d,minValue:x,maxValue:p,margin:Ue,width:Ze,height:$e,padding:C,innerPadding:w,valueScale:y,indexScale:k,enableLabel:Y,labelSkipWidth:N,labelSkipHeight:Q,legends:Te,legendLabel:me,initialHiddenIds:De,totalsOffset:Ge}),aa=ea.bars,ta=ea.barsWithValue,ia=ea.xScale,na=ea.yScale,ra=ea.getLabel,la=ea.getTooltipLabel,oa=ea.getBorderColor,da=ea.getLabelColor,ua=ea.shouldRenderBarLabel,sa=ea.toggleSerie,ca=ea.legendsWithData,ha=ea.barTotals,fa=ea.getColor,va=M(v,m,$,ae),ba=t.useTransition(ta,{keys:function(e){return e.key},from:function(e){return h({borderColor:oa(e),color:e.color,height:0,labelColor:da(e),labelOpacity:0},va(e.width,e.height),{transform:"translate("+e.x+", "+(e.y+e.height)+")",width:e.width},"vertical"===v?{}:{height:e.height,transform:"translate("+e.x+", "+e.y+")",width:0})},enter:function(e){return h({borderColor:oa(e),color:e.color,height:e.height,labelColor:da(e),labelOpacity:1},va(e.width,e.height),{transform:"translate("+e.x+", "+e.y+")",width:e.width})},update:function(e){return h({borderColor:oa(e),color:e.color,height:e.height,labelColor:da(e),labelOpacity:1},va(e.width,e.height),{transform:"translate("+e.x+", "+e.y+")",width:e.width})},leave:function(e){return h({borderColor:oa(e),color:e.color,height:0,labelColor:da(e),labelOpacity:0},va(e.width,e.height),{labelY:0,transform:"translate("+e.x+", "+(e.y+e.height)+")",width:e.width},"vertical"===v?{}:h({},va(e.width,e.height),{labelX:0,height:e.height,transform:"translate("+e.x+", "+e.y+")",width:0}))},config:Ke,immediate:!Ne,initial:Ne?void 0:null}),ga=i.useMemo((function(){return{borderRadius:ce,borderWidth:fe,enableLabel:Y,isInteractive:ke,labelSkipWidth:N,labelSkipHeight:Q,onClick:we,onMouseEnter:Le,onMouseLeave:Ve,getTooltipLabel:la,tooltip:Ce,isFocusable:Re,ariaLabel:je,ariaLabelledBy:Ee,ariaDescribedBy:Ae,ariaHidden:Fe,ariaDisabled:He}}),[ce,fe,Y,la,ke,Q,N,we,Le,Ve,Ce,Re,je,Ee,Ae,Fe,He]),ma=a.bindDefs(oe,aa,ue,{dataKey:"data",targetKey:"data.fill"}),xa={annotations:null,axes:null,bars:null,grid:null,legends:null,markers:null,totals:null};H.includes("annotations")&&(xa.annotations=r.jsx(b,{bars:aa,annotations:ge},"annotations")),H.includes("axes")&&(xa.axes=r.jsx(e.Axes,{xScale:ia,yScale:na,width:Ze,height:$e,top:L,right:V,bottom:B,left:O},"axes")),H.includes("bars")&&(xa.bars=r.jsx(i.Fragment,{children:ba((function(e,a){return i.createElement(q,h({},ga,{bar:a,style:e,shouldRenderLabel:ua(a),label:ra(a.data)}))}))},"bars")),H.includes("grid")&&(xa.grid=r.jsx(e.Grid,{width:Ze,height:$e,xScale:P?ia:null,yScale:j?na:null,xValues:E,yValues:A},"grid")),H.includes("legends")&&(xa.legends=r.jsx(g,{width:Ze,height:$e,legends:ca,toggleSerie:sa},"legends")),H.includes("markers")&&(xa.markers=r.jsx(a.CartesianMarkers,{markers:ie,width:Ze,height:$e,xScale:ia,yScale:na},"markers")),H.includes("totals")&&Xe&&(xa.totals=r.jsx(_,{data:ha,springConfig:Ke,animate:Ne,layout:v},"totals"));var pa=i.useMemo((function(){return h({},ga,{margin:Ue,width:s,height:c,innerWidth:Ze,innerHeight:$e,bars:aa,legendData:ca,enableLabel:Y,xScale:ia,yScale:na,tooltip:Ce,getTooltipLabel:la,onClick:we,onMouseEnter:Le,onMouseLeave:Ve,getColor:fa})}),[ga,Ue,s,c,Ze,$e,aa,ca,Y,ia,na,Ce,la,we,Le,Ve,fa]);return r.jsx(a.SvgWrapper,{width:Je,height:Qe,margin:Ue,defs:ma,role:Be,ariaLabel:We,ariaLabelledBy:Oe,ariaDescribedBy:Ie,isFocusable:Re,children:H.map((function(e,a){var t;return"function"==typeof e?r.jsx(i.Fragment,{children:i.createElement(e,pa)},a):null!=(t=null==xa?void 0:xa[e])?t:null}))})},U=function(e){var t=e.isInteractive,i=void 0===t?S.isInteractive:t,n=e.animate,l=void 0===n?S.animate:n,o=e.motionConfig,d=void 0===o?S.motionConfig:o,u=e.theme,s=e.renderWrapper,c=f(e,J);return r.jsx(a.Container,{animate:l,isInteractive:i,motionConfig:d,renderWrapper:s,theme:u,children:r.jsx(Q,h({isInteractive:i},c))})},Z=["isInteractive","renderWrapper","theme"],$=function(e,t,i,n){return e.find((function(e){return a.isCursorInRect(e.x+t.left,e.y+t.top,e.width,e.height,i,n)}))};var ee=function(t){var o=t.data,u=t.indexBy,s=t.keys,c=t.margin,f=t.width,v=t.height,b=t.groupMode,g=t.layout,m=t.reverse,x=t.minValue,p=t.maxValue,y=t.valueScale,k=t.indexScale,S=t.padding,w=t.innerPadding,L=t.axisTop,V=t.axisRight,T=t.axisBottom,B=void 0===T?C.axisBottom:T,W=t.axisLeft,O=void 0===W?C.axisLeft:W,I=t.enableGridX,P=void 0===I?C.enableGridX:I,R=t.enableGridY,j=void 0===R?C.enableGridY:R,E=t.gridXValues,A=t.gridYValues,F=t.labelPosition,H=void 0===F?C.labelPosition:F,D=t.labelOffset,q=void 0===D?C.labelOffset:D,X=t.layers,Y=void 0===X?C.layers:X,G=t.renderBar,z=void 0===G?function(e,a){var t=a.bar,i=t.color,n=t.height,r=t.width,l=t.x,o=t.y,d=a.borderColor,u=a.borderRadius,s=a.borderWidth,c=a.label,h=a.labelColor,f=a.shouldRenderLabel,v=a.labelX,b=a.labelY,g=a.textAnchor;if(e.fillStyle=i,s>0&&(e.strokeStyle=d,e.lineWidth=s),e.beginPath(),u>0){var m=Math.min(u,n);e.moveTo(l+m,o),e.lineTo(l+r-m,o),e.quadraticCurveTo(l+r,o,l+r,o+m),e.lineTo(l+r,o+n-m),e.quadraticCurveTo(l+r,o+n,l+r-m,o+n),e.lineTo(l+m,o+n),e.quadraticCurveTo(l,o+n,l,o+n-m),e.lineTo(l,o+m),e.quadraticCurveTo(l,o,l+m,o),e.closePath()}else e.rect(l,o,r,n);e.fill(),s>0&&e.stroke(),f&&(e.textBaseline="middle",e.textAlign="middle"===g?"center":g,e.fillStyle=h,e.fillText(c,l+v,o+b))}:G,N=t.enableLabel,_=void 0===N?C.enableLabel:N,J=t.label,Q=t.labelSkipWidth,U=void 0===Q?C.labelSkipWidth:Q,Z=t.labelSkipHeight,ee=void 0===Z?C.labelSkipHeight:Z,ae=t.labelTextColor,te=t.colorBy,ie=t.colors,ne=t.borderRadius,re=void 0===ne?C.borderRadius:ne,le=t.borderWidth,oe=void 0===le?C.borderWidth:le,de=t.borderColor,ue=t.annotations,se=void 0===ue?C.annotations:ue,ce=t.legendLabel,he=t.tooltipLabel,fe=t.valueFormat,ve=t.isInteractive,be=void 0===ve?C.isInteractive:ve,ge=t.tooltip,me=void 0===ge?C.tooltip:ge,xe=t.onClick,pe=t.onMouseEnter,ye=t.onMouseLeave,ke=t.legends,Se=t.pixelRatio,Ce=void 0===Se?C.pixelRatio:Se,we=t.canvasRef,Le=t.enableTotals,Ve=void 0===Le?C.enableTotals:Le,Te=t.totalsOffset,Me=void 0===Te?C.totalsOffset:Te,Be=i.useRef(null),We=a.useTheme(),Oe=a.useDimensions(f,v,c),Ie=Oe.margin,Pe=Oe.innerWidth,Re=Oe.innerHeight,je=Oe.outerWidth,Ee=Oe.outerHeight,Ae=K({indexBy:u,label:J,tooltipLabel:he,valueFormat:fe,colors:ie,colorBy:te,borderColor:de,labelTextColor:ae,groupMode:b,layout:g,reverse:m,data:o,keys:s,minValue:x,maxValue:p,margin:Ie,width:Pe,height:Re,padding:S,innerPadding:w,valueScale:y,indexScale:k,enableLabel:_,labelSkipWidth:U,labelSkipHeight:ee,legends:ke,legendLabel:ce,totalsOffset:Me}),Fe=Ae.bars,He=Ae.barsWithValue,De=Ae.xScale,qe=Ae.yScale,Xe=Ae.getLabel,Ye=Ae.getTooltipLabel,Ge=Ae.getBorderColor,ze=Ae.getLabelColor,Ne=Ae.shouldRenderBarLabel,Ke=Ae.legendsWithData,_e=Ae.barTotals,Je=Ae.getColor,Qe=d.useTooltip(),Ue=Qe.showTooltipFromEvent,Ze=Qe.hideTooltip,$e=n.useComputedAnnotations({annotations:n.useAnnotations({data:Fe,annotations:se,getPosition:function(e){return{x:e.x,y:e.y}},getDimensions:function(e){var a=e.width,t=e.height;return{width:a,height:t,size:Math.max(a,t)}}})}),ea=i.useMemo((function(){return{borderRadius:re,borderWidth:oe,isInteractive:be,isFocusable:!1,labelSkipWidth:U,labelSkipHeight:ee,margin:Ie,width:f,height:v,innerWidth:Pe,innerHeight:Re,bars:Fe,legendData:Ke,enableLabel:_,xScale:De,yScale:qe,tooltip:me,getTooltipLabel:Ye,onClick:xe,onMouseEnter:pe,onMouseLeave:ye,getColor:Je}}),[re,oe,be,U,ee,Ie,f,v,Pe,Re,Fe,Ke,_,De,qe,me,Ye,xe,pe,ye,Je]),aa=a.useValueFormatter(fe),ta=M(g,m,H,q);i.useEffect((function(){var a,t=null==(a=Be.current)?void 0:a.getContext("2d");Be.current&&t&&(Be.current.width=je*Ce,Be.current.height=Ee*Ce,t.scale(Ce,Ce),t.fillStyle=We.background,t.fillRect(0,0,je,Ee),t.translate(Ie.left,Ie.top),Y.forEach((function(a){"grid"===a?"number"==typeof We.grid.line.strokeWidth&&We.grid.line.strokeWidth>0&&(t.lineWidth=We.grid.line.strokeWidth,t.strokeStyle=We.grid.line.stroke,P&&e.renderGridLinesToCanvas(t,{width:Pe,height:Re,scale:De,axis:"x",values:E}),j&&e.renderGridLinesToCanvas(t,{width:Pe,height:Re,scale:qe,axis:"y",values:A})):"axes"===a?e.renderAxesToCanvas(t,{xScale:De,yScale:qe,width:Pe,height:Re,top:L,right:V,bottom:B,left:O,theme:We}):"bars"===a?He.forEach((function(e){z(t,h({bar:e,borderColor:Ge(e),borderRadius:re,borderWidth:oe,label:Xe(e.data),labelColor:ze(e),shouldRenderLabel:Ne(e)},ta(e.width,e.height)))})):"legends"===a?Ke.forEach((function(e){var a=e[0],i=e[1];l.renderLegendToCanvas(t,h({},a,{data:i,containerWidth:Pe,containerHeight:Re,theme:We}))})):"annotations"===a?n.renderAnnotationsToCanvas(t,{annotations:$e,theme:We}):"totals"===a&&Ve?function(e,a,t,i){void 0===i&&(i=C.layout),e.fillStyle=t.text.fill,e.font="bold "+t.labels.text.fontSize+"px "+t.labels.text.fontFamily,e.textBaseline="vertical"===i?"alphabetic":"middle",e.textAlign="vertical"===i?"center":"start",a.forEach((function(a){e.fillText(a.formattedValue,a.x,a.y)}))}(t,_e,We,g):"function"==typeof a&&a(t,ea)})),t.save())}),[B,O,V,L,He,re,oe,$e,P,j,Ge,Xe,ze,E,A,b,v,Re,Pe,ea,Y,g,Ke,Ie.left,Ie.top,Ee,je,Ce,z,De,qe,m,Ne,We,f,_e,Ve,aa,ta]);var ia=i.useCallback((function(e){if(Fe&&Be.current){var t=a.getRelativeCursor(Be.current,e),n=t[0],r=t[1],l=$(Fe,Ie,n,r);void 0!==l?(Ue(i.createElement(me,h({},l.data,{color:l.color,label:l.label,value:Number(l.data.value)})),e),"mouseenter"===e.type&&(null==pe||pe(l.data,e))):Ze()}}),[Ze,Ie,pe,Fe,Ue,me]),na=i.useCallback((function(e){if(Fe&&Be.current){Ze();var t=a.getRelativeCursor(Be.current,e),i=t[0],n=t[1],r=$(Fe,Ie,i,n);r&&(null==ye||ye(r.data,e))}}),[Ze,Ie,ye,Fe]),ra=i.useCallback((function(e){if(Fe&&Be.current){var t=a.getRelativeCursor(Be.current,e),i=t[0],n=t[1],r=$(Fe,Ie,i,n);void 0!==r&&(null==xe||xe(h({},r.data,{color:r.color}),e))}}),[Ie,xe,Fe]);return r.jsx("canvas",{ref:function(e){Be.current=e,we&&"current"in we&&(we.current=e)},width:je*Ce,height:Ee*Ce,style:{width:je,height:Ee,cursor:be?"auto":"normal"},onMouseEnter:be?ia:void 0,onMouseMove:be?ia:void 0,onMouseLeave:be?na:void 0,onClick:be?ra:void 0})},ae=i.forwardRef((function(e,t){var i=e.isInteractive,n=e.renderWrapper,l=e.theme,o=f(e,Z);return r.jsx(a.Container,{isInteractive:i,renderWrapper:n,theme:l,animate:!1,children:r.jsx(ee,h({},o,{canvasRef:t}))})})),te=i.forwardRef((function(e,t){return r.jsx(a.ResponsiveWrapper,{children:function(a){var i=a.width,n=a.height;return r.jsx(ae,h({width:i,height:n},e,{ref:t}))}})}));exports.Bar=U,exports.BarCanvas=ae,exports.BarItem=x,exports.BarTooltip=y,exports.BarTotals=_,exports.ResponsiveBar=function(e){return r.jsx(a.ResponsiveWrapper,{children:function(a){var t=a.width,i=a.height;return r.jsx(U,h({width:t,height:i},e))}})},exports.ResponsiveBarCanvas=te,exports.canvasDefaultProps=C,exports.defaultProps=k,exports.svgDefaultProps=S;
//# sourceMappingURL=nivo-bar.cjs.js.map
