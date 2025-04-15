"use strict";var e=require("react"),o=require("@nivo/core"),n=require("d3-scale"),t=require("d3-delaunay"),i=require("@nivo/tooltip"),r=require("react/jsx-runtime");function l(){return l=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},l.apply(this,arguments)}var u={xDomain:[0,1],yDomain:[0,1],layers:["links","cells","points","bounds"],enableLinks:!1,linkLineWidth:1,linkLineColor:"#bbbbbb",enableCells:!0,cellLineWidth:2,cellLineColor:"#000000",enablePoints:!0,pointSize:4,pointColor:"#666666",role:"img"},a=function(e){return[e.x,e.y]},s=o.defaultMargin,d="cursor",c="top",h=function(e){var o=e.points,n=e.getNodePosition,t=void 0===n?a:n,i=e.margin,r=void 0===i?s:i;return o.map((function(e){var o=t(e),n=o[0],i=o[1];return[n+r.left,i+r.top]}))},v=function(e){var o=e.points,n=e.width,i=e.height,r=e.margin,l=void 0===r?s:r,u=e.debug,a=t.Delaunay.from(o),d=u?a.voronoi([0,0,l.left+n+l.right,l.top+i+l.bottom]):void 0;return{points:o,delaunay:a,voronoi:d}},p=function(o){var n=o.points,t=o.getNodePosition,i=void 0===t?a:t,r=o.width,l=o.height,u=o.margin,d=void 0===u?s:u,c=o.debug;return e.useMemo((function(){return v({points:h({points:n,margin:d,getNodePosition:i}),width:r,height:l,margin:d,debug:c})}),[n,r,l,d,c])},f=function(o){var i=o.data,r=o.width,l=o.height,u=o.xDomain,a=o.yDomain,s=e.useMemo((function(){return n.scaleLinear().domain(u).range([0,r])}),[u,r]),d=e.useMemo((function(){return n.scaleLinear().domain(a).range([0,l])}),[a,l]),c=e.useMemo((function(){return i.map((function(e){return{x:s(e.x),y:d(e.y),data:e}}))}),[i,s,d]);return e.useMemo((function(){var e=t.Delaunay.from(c.map((function(e){return[e.x,e.y]}))),o=e.voronoi([0,0,r,l]);return{points:c,delaunay:e,voronoi:o}}),[c,r,l])},g=function(o){var n=o.points,t=o.delaunay,i=o.voronoi;return e.useMemo((function(){return{points:n,delaunay:t,voronoi:i}}),[n,t,i])},m=function(n){var t=n.elementRef,r=n.nodes,l=n.getNodePosition,u=void 0===l?a:l,h=n.delaunay,v=n.setCurrent,p=n.margin,f=void 0===p?s:p,g=n.detectionRadius,m=void 0===g?1/0:g,M=n.isInteractive,b=void 0===M||M,k=n.onMouseEnter,C=n.onMouseMove,x=n.onMouseLeave,y=n.onClick,T=n.onTouchStart,L=n.onTouchMove,P=n.onTouchEnd,j=n.enableTouchCrosshair,E=void 0!==j&&j,w=n.tooltip,W=n.tooltipPosition,D=void 0===W?d:W,R=n.tooltipAnchor,S=void 0===R?c:R,A=e.useState(null),N=A[0],V=A[1],q=e.useRef(null);e.useEffect((function(){q.current=N}),[q,N]);var O=e.useCallback((function(e){if(!t.current||0===r.length)return null;var n=o.getRelativeCursor(t.current,e),i=n[0],l=n[1],a=h.find(i,l),s=void 0!==a?r[a]:null;if(s&&m!==1/0){var d=u(s),c=d[0],v=d[1];o.getDistance(i,l,c+f.left,v+f.top)>m&&(a=null,s=null)}return null===a||null===s?null:[a,s]}),[t,h,r,u,f,m]),I=i.useTooltip(),z=I.showTooltipAt,F=I.showTooltipFromEvent,H=I.hideTooltip,B=e.useMemo((function(){if(w)return"cursor"===D?function(e,o){F(w(e),o,S)}:function(e){var o=u(e),n=o[0],t=o[1];z(w(e),[n+f.left,t+f.top],S)}}),[z,F,w,D,S,u,f]),G=e.useCallback((function(e){var o=O(e);if(V(o),null==v||v(o?o[1]:null),o){var n=o[1];null==B||B(n,e),null==k||k(o[1],e)}}),[O,V,v,B,k]),J=e.useCallback((function(e){var o=O(e);if(V(o),o){var n=o[0],t=o[1];if(null==v||v(t),null==B||B(t,e),q.current){var i=q.current,r=i[0],l=i[1];n!==r?null==x||x(l,e):null==C||C(t,e)}else null==k||k(t,e)}else null==v||v(null),null==H||H(),q.current&&(null==x||x(q.current[1],e))}),[O,V,q,k,C,x,B,H]),K=e.useCallback((function(e){V(null),null==v||v(null),H(),x&&q.current&&x(q.current[1],e)}),[V,v,q,H,x]),Q=e.useCallback((function(e){var o=O(e);V(o),o&&(null==y||y(o[1],e))}),[O,V,y]),U=e.useCallback((function(e){var o=O(e);E&&(V(o),null==v||v(o?o[1]:null)),o&&(null==T||T(o[1],e))}),[O,V,v,E,T]),X=e.useCallback((function(e){var o=O(e);E&&(V(o),null==v||v(o?o[1]:null)),o&&(null==L||L(o[1],e))}),[O,V,v,E,L]),Y=e.useCallback((function(e){E&&(V(null),null==v||v(null)),P&&q.current&&P(q.current[1],e)}),[E,V,v,P,q]);return{current:N,handleMouseEnter:b?G:void 0,handleMouseMove:b?J:void 0,handleMouseLeave:b?K:void 0,handleClick:b?Q:void 0,handleTouchStart:b?U:void 0,handleTouchMove:b?X:void 0,handleTouchEnd:b?Y:void 0}},M=["theme"],b=function(n){var t=n.data,i=n.width,l=n.height,a=n.margin,s=n.layers,d=void 0===s?u.layers:s,c=n.xDomain,h=void 0===c?u.xDomain:c,v=n.yDomain,p=void 0===v?u.yDomain:v,m=n.enableLinks,M=void 0===m?u.enableLinks:m,b=n.linkLineWidth,k=void 0===b?u.linkLineWidth:b,C=n.linkLineColor,x=void 0===C?u.linkLineColor:C,y=n.enableCells,T=void 0===y?u.enableCells:y,L=n.cellLineWidth,P=void 0===L?u.cellLineWidth:L,j=n.cellLineColor,E=void 0===j?u.cellLineColor:j,w=n.enablePoints,W=void 0===w?u.enableCells:w,D=n.pointSize,R=void 0===D?u.pointSize:D,S=n.pointColor,A=void 0===S?u.pointColor:S,N=n.role,V=void 0===N?u.role:N,q=o.useDimensions(i,l,a),O=q.outerWidth,I=q.outerHeight,z=q.margin,F=q.innerWidth,H=q.innerHeight,B=f({data:t,width:F,height:H,xDomain:h,yDomain:p}),G=B.points,J=B.delaunay,K=B.voronoi,Q={links:null,cells:null,points:null,bounds:null};M&&d.includes("links")&&(Q.links=r.jsx("path",{stroke:x,strokeWidth:k,fill:"none",d:J.render()},"links")),T&&d.includes("cells")&&(Q.cells=r.jsx("path",{d:K.render(),fill:"none",stroke:E,strokeWidth:P},"cells")),W&&d.includes("points")&&(Q.points=r.jsx("path",{stroke:"none",fill:A,d:J.renderPoints(void 0,R/2)},"points")),d.includes("bounds")&&(Q.bounds=r.jsx("path",{fill:"none",stroke:E,strokeWidth:P,d:K.renderBounds()},"bounds"));var U=g({points:G,delaunay:J,voronoi:K});return r.jsx(o.SvgWrapper,{width:O,height:I,margin:z,role:V,children:d.map((function(o,n){return void 0!==Q[o]?Q[o]:"function"==typeof o?r.jsx(e.Fragment,{children:e.createElement(o,U)},n):null}))})},k=function(e){var n=e.theme,t=function(e,o){if(null==e)return{};var n,t,i={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],o.indexOf(n)>=0||(i[n]=e[n]);return i}(e,M);return r.jsx(o.Container,{isInteractive:!1,animate:!1,theme:n,children:r.jsx(b,l({},t))})},C=function(e,o){e.save(),e.globalAlpha=.75,e.beginPath(),o.render(e),e.strokeStyle="red",e.lineWidth=1,e.stroke(),e.restore()},x=function(e,o,n){e.save(),e.globalAlpha=.15,e.beginPath(),o.renderPoints(e,n),e.strokeStyle="red",e.lineWidth=1,e.stroke(),e.restore()},y=function(e,o,n){e.save(),e.globalAlpha=.35,e.beginPath(),o.renderCell(n,e),e.fillStyle="pink",e.fill(),e.restore()};exports.Mesh=function(o){var n=o.nodes,t=o.width,i=o.height,l=o.margin,u=void 0===l?s:l,a=o.getNodePosition,h=o.setCurrent,v=o.onMouseEnter,f=o.onMouseMove,g=o.onMouseLeave,M=o.onClick,b=o.onTouchStart,k=o.onTouchMove,C=o.onTouchEnd,x=o.enableTouchCrosshair,y=void 0!==x&&x,T=o.detectionRadius,L=void 0===T?1/0:T,P=o.tooltip,j=o.tooltipPosition,E=void 0===j?d:j,w=o.tooltipAnchor,W=void 0===w?c:w,D=o.debug,R=e.useRef(null),S=p({points:n,getNodePosition:a,width:t,height:i,margin:u,debug:D}),A=S.delaunay,N=S.voronoi,V=m({elementRef:R,nodes:n,delaunay:A,margin:u,detectionRadius:L,setCurrent:h,onMouseEnter:v,onMouseMove:f,onMouseLeave:g,onClick:M,onTouchStart:b,onTouchMove:k,onTouchEnd:C,enableTouchCrosshair:y,tooltip:P,tooltipPosition:E,tooltipAnchor:W}),q=V.current,O=V.handleMouseEnter,I=V.handleMouseMove,z=V.handleMouseLeave,F=V.handleClick,H=V.handleTouchStart,B=V.handleTouchMove,G=V.handleTouchEnd,J=e.useMemo((function(){if(D&&N)return N.render()}),[D,N]);return r.jsxs("g",{ref:R,transform:"translate("+-u.left+","+-u.top+")",children:[D&&N&&r.jsxs(r.Fragment,{children:[r.jsx("path",{d:J,stroke:"red",strokeWidth:1,opacity:.75}),L<1/0&&r.jsx("path",{stroke:"red",strokeWidth:.35,fill:"none",d:A.renderPoints(void 0,L)}),q&&r.jsx("path",{fill:"pink",opacity:.35,d:N.renderCell(q[0])})]}),r.jsx("rect",{"data-ref":"mesh-interceptor",width:u.left+t+u.right,height:u.top+i+u.bottom,fill:"red",opacity:0,style:{cursor:"auto"},onMouseEnter:O,onMouseMove:I,onMouseLeave:z,onTouchStart:H,onTouchMove:B,onTouchEnd:G,onClick:F})]})},exports.ResponsiveVoronoi=function(e){return r.jsx(o.ResponsiveWrapper,{children:function(o){var n=o.width,t=o.height;return r.jsx(k,l({width:n,height:t},e))}})},exports.Voronoi=k,exports.computeMesh=v,exports.computeMeshPoints=h,exports.defaultVoronoiProps=u,exports.renderDebugToCanvas=function(e,o){var n=o.delaunay,t=o.voronoi,i=o.detectionRadius,r=o.index;C(e,t),i<1/0&&x(e,n,i),null!==r&&y(e,t,r)},exports.renderDelaunayPointsToCanvas=x,exports.renderVoronoiCellToCanvas=y,exports.renderVoronoiToCanvas=C,exports.useMesh=function(e){var o=e.elementRef,n=e.nodes,t=e.getNodePosition,i=e.width,r=e.height,l=e.margin,u=void 0===l?s:l,a=e.isInteractive,h=void 0===a||a,v=e.detectionRadius,f=void 0===v?1/0:v,g=e.setCurrent,M=e.onMouseEnter,b=e.onMouseMove,k=e.onMouseLeave,C=e.onClick,x=e.tooltip,y=e.tooltipPosition,T=void 0===y?d:y,L=e.tooltipAnchor,P=void 0===L?c:L,j=e.debug,E=p({points:n,getNodePosition:t,width:i,height:r,margin:u,debug:void 0!==j&&j}),w=E.delaunay,W=E.voronoi,D=m({elementRef:o,nodes:n,margin:u,setCurrent:g,delaunay:w,detectionRadius:f,isInteractive:h,onMouseEnter:M,onMouseMove:b,onMouseLeave:k,onClick:C,tooltip:x,tooltipPosition:T,tooltipAnchor:P}),R=D.handleMouseEnter,S=D.handleMouseMove,A=D.handleMouseLeave,N=D.handleClick;return{delaunay:w,voronoi:W,current:D.current,handleMouseEnter:R,handleMouseMove:S,handleMouseLeave:A,handleClick:N}},exports.useMeshEvents=m,exports.useVoronoi=f,exports.useVoronoiLayerContext=g,exports.useVoronoiMesh=p;
//# sourceMappingURL=nivo-voronoi.cjs.js.map
