import{useMemo as r,useState as e,createElement as t,Fragment as o}from"react";import{motionDefaultProps as n,useTheme as a,useValueFormatter as i,useMotionConfig as s,useAnimatedPath as p,Container as d,useDimensions as l,SvgWrapper as u,ResponsiveWrapper as f}from"@nivo/core";import{area as c,curveBasis as h,curveLinear as v,line as y}from"d3-shape";import{scaleLinear as b,scaleOrdinal as x}from"d3-scale";import{useOrdinalColorScale as m,useInheritedColor as g}from"@nivo/colors";import{useAnnotations as S,Annotation as P}from"@nivo/annotations";import{BasicTooltip as C,useTooltip as O}from"@nivo/tooltip";import{jsx as M,jsxs as I,Fragment as L}from"react/jsx-runtime";import w from"lodash/isPlainObject";import B from"lodash/get";import{useSpring as E,animated as W}from"@react-spring/web";function z(){return z=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},z.apply(this,arguments)}var G={layers:["separators","parts","labels","annotations"],direction:"vertical",interpolation:"smooth",spacing:0,shapeBlending:.66,colors:{scheme:"nivo"},size:void 0,fillOpacity:1,borderWidth:6,borderColor:{from:"color"},borderOpacity:.66,enableLabel:!0,labelColor:{theme:"background"},enableBeforeSeparators:!0,beforeSeparatorLength:0,beforeSeparatorOffset:0,enableAfterSeparators:!0,afterSeparatorLength:0,afterSeparatorOffset:0,annotations:[],isInteractive:!0,currentPartSizeExtension:0,role:"img",animate:n.animate,motionConfig:n.config},k=function(r){var e=r.part;return M(C,{id:e.data.label,value:e.formattedValue,color:e.color,enableChip:!0})},A=function(r,e){var t=c();return"vertical"===e?t.curve("smooth"===r?h:v).x0((function(r){return r.x0})).x1((function(r){return r.x1})).y((function(r){return r.y})):t.curve("smooth"===r?h:v).y0((function(r){return r.y0})).y1((function(r){return r.y1})).x((function(r){return r.x})),[t,y().defined((function(r){return null!==r})).x((function(r){return r.x})).y((function(r){return r.y})).curve("smooth"===r?h:v)]},j=function(r){var e,t,o=r.data,n=r.direction,a=r.width,i=r.height,s=r.spacing;"vertical"===n?(e=i,t=a):(e=a,t=i);var p=(e-s*(o.length-1))/o.length,d=function(r){return s*r+p*r};d.bandwidth=p;var l=o.map((function(r){return r.value}));return[d,b().domain([0,Math.max.apply(Math,l)]).range([0,t])]},F=function(r){var e=r.parts,t=r.direction,o=r.width,n=r.height,a=r.spacing,i=r.enableBeforeSeparators,s=r.beforeSeparatorOffset,p=r.enableAfterSeparators,d=r.afterSeparatorOffset,l=[],u=[],f=e[e.length-1];if("vertical"===t){e.forEach((function(r){var e=r.y0-a/2;i&&l.push({partId:r.data.id,x0:0,x1:r.x0-s,y0:e,y1:e}),p&&u.push({partId:r.data.id,x0:r.x1+d,x1:o,y0:e,y1:e})}));var c=f.y1;i&&l.push(z({},l[l.length-1],{partId:"none",y0:c,y1:c})),p&&u.push(z({},u[u.length-1],{partId:"none",y0:c,y1:c}))}else if("horizontal"===t){e.forEach((function(r){var e=r.x0-a/2;l.push({partId:r.data.id,x0:e,x1:e,y0:0,y1:r.y0-s}),u.push({partId:r.data.id,x0:e,x1:e,y0:r.y1+d,y1:n})}));var h=f.x1;l.push(z({},l[l.length-1],{partId:"none",x0:h,x1:h})),u.push(z({},u[u.length-1],{partId:"none",x0:h,x1:h}))}return[l,u]},T=function(r){var e=r.parts,o=r.setCurrentPartId,n=r.isInteractive,a=r.onMouseEnter,i=r.onMouseLeave,s=r.onMouseMove,p=r.onClick,d=r.showTooltipFromEvent,l=r.hideTooltip,u=r.tooltip,f=void 0===u?k:u;return n?e.map((function(r){return z({},r,{onMouseEnter:function(e){o(r.data.id),d(t(f,{part:r}),e),void 0!==a&&a(r,e)},onMouseLeave:function(e){o(null),l(),void 0!==i&&i(r,e)},onMouseMove:function(e){d(t(f,{part:r}),e),void 0!==s&&s(r,e)},onClick:void 0!==p?function(e){p(r,e)}:void 0})})):e},D=function(r,e){if("function"==typeof r)return r;if(Array.isArray(r)){var t=x(r);return function(r){return Number(t(String(r.id)))}}if(w(r)){if(function(r){return void 0!==r.datum}(r))return function(e){var t=B(e,r.datum);return"number"==typeof t?t:0};throw new Error("Invalid size, when using an object, you should specify a 'datum' property")}return function(r){return e(r.value)}},V=function(e,t){return r((function(){return D(e,t)}),[e,t])},H=function(t){var o,n,s=t.data,p=t.width,d=t.height,l=t.direction,u=void 0===l?G.direction:l,f=t.interpolation,c=void 0===f?G.interpolation:f,h=t.spacing,v=void 0===h?G.spacing:h,y=t.shapeBlending,b=void 0===y?G.shapeBlending:y,x=t.valueFormat,S=t.colors,P=void 0===S?G.colors:S,C=t.size,M=void 0===C?G.size:C,I=t.fillOpacity,L=void 0===I?G.fillOpacity:I,w=t.borderWidth,B=void 0===w?G.borderWidth:w,E=t.borderColor,W=void 0===E?G.borderColor:E,k=t.borderOpacity,D=void 0===k?G.borderOpacity:k,H=t.labelColor,N=void 0===H?G.labelColor:H,q=t.enableBeforeSeparators,J=void 0===q?G.enableBeforeSeparators:q,K=t.beforeSeparatorLength,Q=void 0===K?G.beforeSeparatorLength:K,R=t.beforeSeparatorOffset,U=void 0===R?G.beforeSeparatorOffset:R,X=t.enableAfterSeparators,Y=void 0===X?G.enableAfterSeparators:X,Z=t.afterSeparatorLength,$=void 0===Z?G.afterSeparatorLength:Z,_=t.afterSeparatorOffset,rr=void 0===_?G.afterSeparatorOffset:_,er=t.isInteractive,tr=void 0===er?G.isInteractive:er,or=t.currentPartSizeExtension,nr=void 0===or?G.currentPartSizeExtension:or,ar=t.currentBorderWidth,ir=t.onMouseEnter,sr=t.onMouseMove,pr=t.onMouseLeave,dr=t.onClick,lr=t.tooltip,ur=a(),fr=m(P,"id"),cr=g(W,ur),hr=g(N,ur),vr=i(x),yr=r((function(){return A(c,u)}),[c,u]),br=yr[0],xr=yr[1],mr=J?Q+U:0,gr=Y?$+rr:0;"vertical"===u?(o=p-mr-gr,n=d):(o=p,n=d-mr-gr);var Sr=r((function(){return j({data:s,direction:u,width:o,height:n,spacing:v})}),[s,u,o,n,v]),Pr=Sr[0],Cr=Sr[1],Or=V(M,Cr),Mr=e(null),Ir=Mr[0],Lr=Mr[1],wr=r((function(){var r=s.map((function(r,e){var t,a,i,s,p=r.id===Ir,d=Or(r);"vertical"===u?(t=d,a=Pr.bandwidth,s=mr+.5*(o-t),i=Pr(e)):(t=Pr.bandwidth,a=d,s=Pr(e),i=mr+.5*(n-a));var l=s+t,f=s+.5*t,c=i+a,h=i+.5*a,v={data:r,width:t,height:a,color:fr(r),fillOpacity:L,borderWidth:p&&void 0!==ar?ar:B,borderOpacity:D,formattedValue:vr(r.value),isCurrent:p,x:f,x0:s,x1:l,y:h,y0:i,y1:c,borderColor:"",labelColor:"",points:[],areaPoints:[],borderPoints:[]};return v.borderColor=cr(v),v.labelColor=hr(v),v})),e=b/2;return r.forEach((function(t,o){var n=r[o+1];if("vertical"===u){t.points.push({x:t.x0,y:t.y0}),t.points.push({x:t.x1,y:t.y0}),n?(t.points.push({x:n.x1,y:t.y1}),t.points.push({x:n.x0,y:t.y1})):(t.points.push({x:t.points[1].x,y:t.y1}),t.points.push({x:t.points[0].x,y:t.y1})),t.isCurrent&&(t.points[0].x-=nr,t.points[1].x+=nr,t.points[2].x+=nr,t.points[3].x-=nr),t.areaPoints=[{x:0,x0:t.points[0].x,x1:t.points[1].x,y:t.y0,y0:0,y1:0}],t.areaPoints.push(z({},t.areaPoints[0],{y:t.y0+t.height*e}));var a={x:0,x0:t.points[3].x,x1:t.points[2].x,y:t.y1,y0:0,y1:0};t.areaPoints.push(z({},a,{y:t.y1-t.height*e})),t.areaPoints.push(a),[0,1,2,3].map((function(r){t.borderPoints.push({x:t.areaPoints[r].x0,y:t.areaPoints[r].y})})),t.borderPoints.push(null),[3,2,1,0].map((function(r){t.borderPoints.push({x:t.areaPoints[r].x1,y:t.areaPoints[r].y})}))}else{t.points.push({x:t.x0,y:t.y0}),n?(t.points.push({x:t.x1,y:n.y0}),t.points.push({x:t.x1,y:n.y1})):(t.points.push({x:t.x1,y:t.y0}),t.points.push({x:t.x1,y:t.y1})),t.points.push({x:t.x0,y:t.y1}),t.isCurrent&&(t.points[0].y-=nr,t.points[1].y-=nr,t.points[2].y+=nr,t.points[3].y+=nr),t.areaPoints=[{x:t.x0,x0:0,x1:0,y:0,y0:t.points[0].y,y1:t.points[3].y}],t.areaPoints.push(z({},t.areaPoints[0],{x:t.x0+t.width*e}));var i={x:t.x1,x0:0,x1:0,y:0,y0:t.points[1].y,y1:t.points[2].y};t.areaPoints.push(z({},i,{x:t.x1-t.width*e})),t.areaPoints.push(i),[0,1,2,3].map((function(r){t.borderPoints.push({x:t.areaPoints[r].x,y:t.areaPoints[r].y0})})),t.borderPoints.push(null),[3,2,1,0].map((function(r){t.borderPoints.push({x:t.areaPoints[r].x,y:t.areaPoints[r].y1})}))}})),r}),[s,u,Cr,Pr,o,n,mr,gr,b,fr,vr,cr,hr,Ir]),Br=O(),Er=Br.showTooltipFromEvent,Wr=Br.hideTooltip,zr=r((function(){return T({parts:wr,setCurrentPartId:Lr,isInteractive:tr,onMouseEnter:ir,onMouseLeave:pr,onMouseMove:sr,onClick:dr,showTooltipFromEvent:Er,hideTooltip:Wr,tooltip:lr})}),[wr,Lr,tr,ir,pr,sr,dr,Er,Wr,lr]),Gr=r((function(){return F({parts:wr,direction:u,width:p,height:d,spacing:v,enableBeforeSeparators:J,beforeSeparatorOffset:U,enableAfterSeparators:Y,afterSeparatorOffset:rr})}),[wr,u,p,d,v,J,U,Y,rr]),kr=Gr[0],Ar=Gr[1],jr=r((function(){return{width:p,height:d,parts:zr,areaGenerator:br,borderGenerator:xr,beforeSeparators:kr,afterSeparators:Ar,setCurrentPartId:Lr}}),[p,d,zr,br,xr,kr,Ar,Lr]);return{parts:zr,areaGenerator:br,borderGenerator:xr,beforeSeparators:kr,afterSeparators:Ar,setCurrentPartId:Lr,currentPartId:Ir,customLayerProps:jr}},N=function(r,e){return S({data:r,annotations:e,getPosition:function(r){return{x:r.x,y:r.y}},getDimensions:function(r){var e=r.width,t=r.height;return{size:Math.max(e,t),width:e,height:t}}})},q=function(r){var e=r.part,t=r.areaGenerator,o=r.borderGenerator,n=s(),a=n.animate,i=n.config,d=p(t(e.areaPoints)),l=p(o(e.borderPoints)),u=E({areaColor:e.color,borderWidth:e.borderWidth,borderColor:e.borderColor,config:i,immediate:!a});return I(L,{children:[e.borderWidth>0&&M(W.path,{d:l,stroke:u.borderColor,strokeWidth:u.borderWidth,strokeOpacity:e.borderOpacity,fill:"none"}),M(W.path,{d:d,fill:u.areaColor,fillOpacity:e.fillOpacity,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,onMouseMove:e.onMouseMove,onClick:e.onClick})]})},J=function(r){var e=r.parts,t=r.areaGenerator,o=r.borderGenerator;return M(L,{children:e.map((function(r){return M(q,{part:r,areaGenerator:t,borderGenerator:o},r.data.id)}))})},K=function(r){var e=r.part,t=a(),o=s(),n=o.animate,i=o.config,p=E({transform:"translate("+e.x+", "+e.y+")",color:e.labelColor,config:i,immediate:!n});return M(W.g,{transform:p.transform,children:M(W.text,{textAnchor:"middle",dominantBaseline:"central",style:z({},t.labels.text,{fill:p.color,pointerEvents:"none"}),children:e.formattedValue})})},Q=function(r){var e=r.parts;return M(L,{children:e.map((function(r){return M(K,{part:r},r.data.id)}))})},R=function(r){var e=r.separator,t=a(),o=s(),n=o.animate,i=o.config,p=E({x1:e.x0,x2:e.x1,y1:e.y0,y2:e.y1,config:i,immediate:!n});return M(W.line,z({x1:p.x1,x2:p.x2,y1:p.y1,y2:p.y2,fill:"none"},t.grid.line))},U=function(r){var e=r.beforeSeparators,t=r.afterSeparators;return I(L,{children:[e.map((function(r){return M(R,{separator:r},r.partId)})),t.map((function(r){return M(R,{separator:r},r.partId)}))]})},X=function(r){var e=r.parts,t=r.annotations,o=N(e,t);return M(L,{children:o.map((function(r,e){return M(P,z({},r),e)}))})},Y=["isInteractive","animate","motionConfig","theme","renderWrapper"],Z=function(r){var e=r.data,n=r.width,a=r.height,i=r.margin,s=r.direction,p=void 0===s?G.direction:s,d=r.interpolation,f=void 0===d?G.interpolation:d,c=r.spacing,h=void 0===c?G.spacing:c,v=r.shapeBlending,y=void 0===v?G.shapeBlending:v,b=r.valueFormat,x=r.colors,m=void 0===x?G.colors:x,g=r.size,S=void 0===g?G.size:g,P=r.fillOpacity,C=void 0===P?G.fillOpacity:P,O=r.borderWidth,I=void 0===O?G.borderWidth:O,L=r.borderColor,w=void 0===L?G.borderColor:L,B=r.borderOpacity,E=void 0===B?G.borderOpacity:B,W=r.enableLabel,z=void 0===W?G.enableLabel:W,k=r.labelColor,A=void 0===k?G.labelColor:k,j=r.enableBeforeSeparators,F=void 0===j?G.enableBeforeSeparators:j,T=r.beforeSeparatorLength,D=void 0===T?G.beforeSeparatorLength:T,V=r.beforeSeparatorOffset,N=void 0===V?G.beforeSeparatorOffset:V,q=r.enableAfterSeparators,K=void 0===q?G.enableAfterSeparators:q,R=r.afterSeparatorLength,Y=void 0===R?G.afterSeparatorLength:R,Z=r.afterSeparatorOffset,$=void 0===Z?G.afterSeparatorOffset:Z,_=r.layers,rr=void 0===_?G.layers:_,er=r.annotations,tr=void 0===er?G.annotations:er,or=r.isInteractive,nr=void 0===or?G.isInteractive:or,ar=r.currentPartSizeExtension,ir=void 0===ar?G.currentPartSizeExtension:ar,sr=r.currentBorderWidth,pr=r.onMouseEnter,dr=r.onMouseMove,lr=r.onMouseLeave,ur=r.onClick,fr=r.tooltip,cr=r.role,hr=void 0===cr?G.role:cr,vr=r.ariaLabel,yr=r.ariaLabelledBy,br=r.ariaDescribedBy,xr=l(n,a,i),mr=xr.margin,gr=xr.innerWidth,Sr=xr.innerHeight,Pr=xr.outerWidth,Cr=xr.outerHeight,Or=H({data:e,width:gr,height:Sr,direction:p,interpolation:f,spacing:h,shapeBlending:y,valueFormat:b,colors:m,size:S,fillOpacity:C,borderWidth:I,borderColor:w,borderOpacity:E,labelColor:A,enableBeforeSeparators:F,beforeSeparatorLength:D,beforeSeparatorOffset:N,enableAfterSeparators:K,afterSeparatorLength:Y,afterSeparatorOffset:$,isInteractive:nr,currentPartSizeExtension:ir,currentBorderWidth:sr,onMouseEnter:pr,onMouseMove:dr,onMouseLeave:lr,onClick:ur,tooltip:fr}),Mr=Or.areaGenerator,Ir=Or.borderGenerator,Lr=Or.parts,wr=Or.beforeSeparators,Br=Or.afterSeparators,Er=Or.customLayerProps,Wr={separators:null,parts:null,annotations:null,labels:null};return rr.includes("separators")&&(Wr.separators=M(U,{beforeSeparators:wr,afterSeparators:Br},"separators")),rr.includes("parts")&&(Wr.parts=M(J,{parts:Lr,areaGenerator:Mr,borderGenerator:Ir},"parts")),null!=rr&&rr.includes("annotations")&&(Wr.annotations=M(X,{parts:Lr,annotations:tr},"annotations")),rr.includes("labels")&&z&&(Wr.labels=M(Q,{parts:Lr},"labels")),M(u,{width:Pr,height:Cr,margin:mr,role:hr,ariaLabel:vr,ariaLabelledBy:yr,ariaDescribedBy:br,children:rr.map((function(r,e){var n;return"function"==typeof r?M(o,{children:t(r,Er)},e):null!=(n=null==Wr?void 0:Wr[r])?n:null}))})},$=function(r){var e=r.isInteractive,t=void 0===e?G.isInteractive:e,o=r.animate,n=void 0===o?G.animate:o,a=r.motionConfig,i=void 0===a?G.motionConfig:a,s=r.theme,p=r.renderWrapper,l=function(r,e){if(null==r)return{};var t,o,n={},a=Object.keys(r);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(n[t]=r[t]);return n}(r,Y);return M(d,{animate:n,isInteractive:t,motionConfig:i,renderWrapper:p,theme:s,children:M(Z,z({isInteractive:t},l))})},_=function(r){return M(f,{children:function(e){var t=e.width,o=e.height;return M($,z({width:t,height:o},r))}})};export{$ as Funnel,_ as ResponsiveFunnel,T as computePartsHandlers,j as computeScales,F as computeSeparators,A as computeShapeGenerators,D as getSizeGenerator,G as svgDefaultProps,H as useFunnel,N as useFunnelAnnotations,V as useSize};
//# sourceMappingURL=nivo-funnel.es.js.map
