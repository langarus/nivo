import{useCallback as o,createElement as e,useState as r,useMemo as t,Fragment as i}from"react";import{useMotionConfig as n,useAnimatedPath as l,useCurveInterpolation as a,stackOffsetFromProp as d,stackOrderFromProp as c,useTheme as s,usePropertyAccessor as u,useValueFormatter as f,Container as h,useDimensions as p,bindDefs as v,SvgWrapper as m,ResponsiveWrapper as y}from"@nivo/core";import{Grid as g,Axes as b}from"@nivo/axes";import{BoxLegendSvg as x}from"@nivo/legends";import{useSpring as C,animated as B}from"@react-spring/web";import{useTooltip as W,BasicTooltip as k,Chip as S,TableTooltip as O}from"@nivo/tooltip";import{jsx as T,Fragment as w,jsxs as I}from"react/jsx-runtime";import{area as D,stack as L}from"d3-shape";import{useOrdinalColorScale as M,useInheritedColor as z}from"@nivo/colors";import{createPointScale as F,createLinearScale as G}from"@nivo/scales";function j(){return j=Object.assign?Object.assign.bind():function(o){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(o[t]=r[t])}return o},j.apply(this,arguments)}var E=function(r){var t=r.layer,i=r.fillOpacity,a=r.borderWidth,d=r.getBorderColor,c=r.isInteractive,s=r.tooltip,u=W(),f=u.showTooltipFromEvent,h=u.hideTooltip,p=o((function(o){f(e(s,{layer:t}),o,"left")}),[f,t]),v=n(),m=v.animate,y=v.config,g=l(t.path),b=C({color:t.color,config:y,immediate:!m});return T(B.path,{d:g,fill:t.fill?t.fill:b.color,fillOpacity:i,stroke:d(t),strokeWidth:a,onMouseMove:c?p:void 0,onMouseEnter:c?p:void 0,onMouseLeave:c?h:void 0})},P=function(o){var e=o.layers,r=o.fillOpacity,t=o.borderWidth,i=o.getBorderColor,n=o.isInteractive,l=o.tooltip;return T("g",{children:e.map((function(o,e){return T(E,{layer:o,getBorderColor:i,borderWidth:t,fillOpacity:r,isInteractive:n,tooltip:l},e)}))})},H=function(o,e){var r=o.y2;return"center"===e?r=o.y1+(o.y2-o.y1)/2:"start"===e&&(r=o.y1),r},X=function(o){var r=o.data,t=o.dotComponent,i=o.position,n=o.getSize,l=o.getColor,a=o.getBorderWidth,d=o.getBorderColor;return T(w,{children:r.map((function(o,r){return e(t,{key:r,datum:o,x:o.x,y:H(o,i),size:n(o),color:l(o),borderWidth:a(o),borderColor:d(o)})}))})},Y=function(t){var i=t.slice,n=t.height,l=t.tooltip,a=r(!1),d=a[0],c=a[1],s=W(),u=s.showTooltipFromEvent,f=s.hideTooltip,h=o((function(o){c(!0),u(e(l,{slice:i}),o,"left")}),[c,u,l,i]),p=o((function(){c(!1),f()}),[c,f]);return I("g",{transform:"translate("+i.x+", 0)",children:[d&&T("line",{x1:0,x2:0,y1:0,y2:n,stroke:"#000",strokeOpacity:.35,strokeWidth:1}),T("rect",{x:-20,width:40,height:n,fill:"#000",fillOpacity:0,onMouseEnter:h,onMouseMove:h,onMouseLeave:p})]})},A=function(o){var e=o.slices,r=o.height,t=o.tooltip;return T("g",{children:e.map((function(o){return T(Y,{slice:o,height:r,tooltip:t},o.index)}))})},R={label:"id",order:"none",offsetType:"wiggle",curve:"catmullRom",axisBottom:{},axisLeft:{},enableGridX:!1,enableGridY:!0,colors:{scheme:"nivo"},fillOpacity:1,borderWidth:0,borderColor:{from:"color",modifiers:[["darker",1]]},enableDots:!1,dotPosition:"center",dotComponent:function(o){var e=o.x,r=o.y,t=o.size,i=o.color,l=o.borderWidth,a=o.borderColor,d=n(),c=d.animate,s=d.config,u=C({x:e,y:r,radius:.5*t,color:i,config:s,immediate:!c});return T(B.circle,{cx:u.x,cy:u.y,r:u.radius,fill:u.color,strokeWidth:l,stroke:a})},dotSize:6,dotColor:{from:"color"},dotBorderWidth:0,dotBorderColor:{from:"color"},isInteractive:!0,tooltip:function(o){var e=o.layer;return T(k,{id:e.label,enableChip:!0,color:e.color})},enableStackTooltip:!0,stackTooltip:function(o){var e=o.slice,r=t((function(){return e.stack.map((function(o){return[T(S,{color:o.color},o.layerId),o.layerLabel,o.formattedValue]}))}),[e]);return T(O,{rows:r})},legends:[],legendLabel:"id",role:"application"},V=j({},R,{layers:["grid","axes","layers","dots","slices","legends"],defs:[],fill:[],animate:!0,motionConfig:"default",role:"img",isFocusable:!1}),q=["isInteractive","animate","motionConfig","theme","renderWrapper"],J=function(o){var r=o.data,n=o.keys,l=o.label,h=o.valueFormat,y=o.offsetType,C=o.order,B=o.curve,W=o.layers,k=void 0===W?V.layers:W,S=o.width,O=o.height,w=o.margin,I=o.axisTop,E=o.axisRight,H=o.axisBottom,Y=void 0===H?V.axisBottom:H,q=o.axisLeft,J=void 0===q?V.axisLeft:q,K=o.enableGridX,N=void 0===K?V.enableGridX:K,Q=o.enableGridY,U=void 0===Q?V.enableGridY:Q,Z=o.colors,$=o.fillOpacity,_=void 0===$?V.fillOpacity:$,oo=o.borderWidth,eo=void 0===oo?V.borderWidth:oo,ro=o.borderColor,to=o.defs,io=void 0===to?V.defs:to,no=o.fill,lo=void 0===no?V.fill:no,ao=o.enableDots,co=void 0===ao?V.enableDots:ao,so=o.dotPosition,uo=void 0===so?V.dotPosition:so,fo=o.dotComponent,ho=void 0===fo?V.dotComponent:fo,po=o.dotSize,vo=o.dotColor,mo=o.dotBorderWidth,yo=o.dotBorderColor,go=o.isInteractive,bo=void 0===go?V.isInteractive:go,xo=o.tooltip,Co=void 0===xo?V.tooltip:xo,Bo=o.enableStackTooltip,Wo=void 0===Bo?V.enableStackTooltip:Bo,ko=o.stackTooltip,So=void 0===ko?V.stackTooltip:ko,Oo=o.legends,To=void 0===Oo?V.legends:Oo,wo=o.role,Io=o.ariaLabel,Do=o.ariaLabelledBy,Lo=o.ariaDescribedBy,Mo=p(S,O,w),zo=Mo.margin,Fo=Mo.innerWidth,Go=Mo.innerHeight,jo=Mo.outerWidth,Eo=Mo.outerHeight,Po=function(o){var e=o.width,r=o.height,i=o.data,n=o.keys,l=o.label,h=void 0===l?R.label:l,p=o.valueFormat,v=o.offsetType,m=void 0===v?R.offsetType:v,y=o.order,g=void 0===y?R.order:y,b=o.curve,x=void 0===b?R.curve:b,C=o.colors,B=void 0===C?R.colors:C,W=o.borderColor,k=void 0===W?R.borderColor:W,S=o.dotSize,O=void 0===S?R.dotSize:S,T=o.dotColor,w=void 0===T?R.dotColor:T,I=o.dotBorderWidth,E=void 0===I?R.dotBorderWidth:I,P=o.dotBorderColor,H=void 0===P?R.dotBorderColor:P,X=a(x),Y=t((function(){return D().x((function(o){return o.x})).y0((function(o){return o.y1})).y1((function(o){return o.y2})).curve(X)}),[X]),A=t((function(){return L().keys(n).offset(d(m)).order(c(g))}),[n,m,g]),V=t((function(){var o=[],t=[],n=A(i).map((function(e){return e.map((function(r){return o.push(r[0]),t.push(r[1]),j({},r,{value:r.data[e.key]})}))})),l=Math.min.apply(Math,o),a=Math.max.apply(Math,t);return[n,F({type:"point"},{all:Array.from({length:i.length},(function(o,e){return e})),min:0,max:i.length},e),G({type:"linear",min:l},{all:[l,a],min:l,max:a},r,"y")]}),[A,i,e,r]),q=V[0],J=V[1],K=V[2],N=s(),Q=M(B,"id"),U=z(k,N),Z=t((function(){return"function"==typeof O?O:function(){return O}}),[O]),$=z(w,N),_=t((function(){return"function"==typeof E?E:function(){return E}}),[E]),oo=z(H,N),eo=u(h),ro=f(p),to=t((function(){return q.map((function(o,e){var r=o.map((function(o,r){return{layerId:n[e],layerLabel:"",index:r,color:"",x:J(r),value:o.value,formattedValue:ro(o.value),y1:K(o[0]),y2:K(o[1])}})),t={id:n[e],path:Y(r)},i=j({},t,{label:eo(t),color:Q(t)});return j({},i,{data:r.map((function(o){return o.layerLabel=i.label,o.color=i.color,o}))})}))}),[q,n,eo,Y,Q,J,K,ro]),io=t((function(){return Array.from({length:i.length},(function(o,e){var r=to.map((function(o){return o.data[e]})).sort((function(o,e){return o.y2-e.y2}));return{index:e,x:to[0].data[e].x,stack:r}}))}),[i.length,to]),no=t((function(){return{xScale:J,yScale:K,layers:to,slices:io}}),[J,K,to,io]);return{xScale:J,yScale:K,layers:to,slices:io,getBorderColor:U,getDotSize:Z,getDotColor:$,getDotBorderWidth:_,getDotBorderColor:oo,layerContext:no}}({width:Fo,height:Go,data:r,keys:n,label:l,valueFormat:h,offsetType:y,order:C,curve:B,colors:Z,borderColor:ro,dotSize:po,dotColor:vo,dotBorderWidth:mo,dotBorderColor:yo}),Ho=Po.xScale,Xo=Po.yScale,Yo=Po.layers,Ao=Po.slices,Ro=Po.getBorderColor,Vo=Po.getDotSize,qo=Po.getDotColor,Jo=Po.getDotBorderWidth,Ko=Po.getDotBorderColor,No=Po.layerContext,Qo=v(io,Yo,lo),Uo={grid:null,axes:null,layers:null,dots:null,slices:null,legends:null};return k.includes("grid")&&(Uo.grid=T(g,{width:Fo,height:Go,xScale:N?Ho:null,yScale:U?Xo:null},"grid")),k.includes("axes")&&(Uo.axes=T(b,{xScale:Ho,yScale:Xo,width:Fo,height:Go,top:I,right:E,bottom:Y,left:J},"axes")),k.includes("layers")&&(Uo.layers=T(P,{layers:Yo,fillOpacity:_,borderWidth:eo,getBorderColor:Ro,isInteractive:bo,tooltip:Co},"layers")),k.includes("dots")&&co&&(Uo.dots=T(i,{children:Yo.map((function(o){return T(X,{id:o.id,color:o.color,data:o.data,dotComponent:ho,position:uo,getSize:Vo,getColor:qo,getBorderWidth:Jo,getBorderColor:Ko},o.id)}))},"dots")),k.includes("slices")&&bo&&Wo&&(Uo.slices=T(A,{slices:Ao,height:Go,tooltip:So},"slices")),k.includes("legends")&&(Uo.legends=T(i,{children:To.map((function(o,e){var r=Yo.map((function(o){return{id:o.id,label:o.label,color:o.color,fill:o.fill}})).reverse();return T(x,j({},o,{containerWidth:Fo,containerHeight:Go,data:r}),e)}))},"legends")),T(m,{width:jo,height:Eo,margin:zo,defs:Qo,role:wo,ariaLabel:Io,ariaLabelledBy:Do,ariaDescribedBy:Lo,children:k.map((function(o,r){var t;return"function"==typeof o?T(i,{children:e(o,No)},r):null!=(t=null==Uo?void 0:Uo[o])?t:null}))})},K=function(o){var e=o.isInteractive,r=void 0===e?V.isInteractive:e,t=o.animate,i=void 0===t?V.animate:t,n=o.motionConfig,l=void 0===n?V.motionConfig:n,a=o.theme,d=o.renderWrapper,c=function(o,e){if(null==o)return{};var r,t,i={},n=Object.keys(o);for(t=0;t<n.length;t++)r=n[t],e.indexOf(r)>=0||(i[r]=o[r]);return i}(o,q);return T(h,{animate:i,isInteractive:r,motionConfig:l,renderWrapper:d,theme:a,children:T(J,j({isInteractive:r},c))})},N=function(o){return T(y,{children:function(e){var r=e.width,t=e.height;return T(K,j({width:r,height:t},o))}})};export{N as ResponsiveStream,K as Stream,R as defaultProps,V as svgDefaultProps};
//# sourceMappingURL=nivo-stream.es.js.map
