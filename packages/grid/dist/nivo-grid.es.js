var t=function(t,r){var o=t.left<=r.right&&r.left<=t.right,n=t.top<=r.bottom&&r.top<=t.bottom;return o&&n},r=function(t){var r=t.width,o=t.height,n=t.rows,e=t.columns,i=t.padding,u=(r-(e-1)*i)/e,a=(o-(n-1)*i)/n;if(!t.square)return[u,a];var c=Math.min(u,a);return[c,c]},o=function(t){for(var o=t.width,n=t.height,e=t.columns,i=t.rows,u=t.padding,a=void 0===u?0:u,c=t.fillDirection,f=void 0===c?"bottom":c,d=t.square,l=void 0===d||d,h=t.extend,m=r({width:o,height:n,rows:i,columns:e,padding:a,square:l}),p=m[0],s=m[1],v=[(o-(p*e+a*(e-1)))/2,(n-(s*i+a*(i-1)))/2],g=[],y=0;y<i;y++)for(var w=0;w<e;w++){var b=w*p,x=y*s,A=y+"."+w;g.push({key:A,index:0,column:w,row:y,x:b,y:x,width:p,height:s})}switch(f){case"left":g.sort((function(t,r){return t.column!==r.column?r.column-t.column:r.row-t.row}));break;case"top":g.sort((function(t,r){return t.row!==r.row?r.row-t.row:r.column-t.column}));break;case"right":g.sort((function(t,r){return t.column!==r.column?t.column-r.column:t.row-r.row}))}g.forEach((function(t,r){t.index=r}));var S="function"==typeof h?g.map((function(t){return h(t,v)})):g;return{x:v[0],y:v[1],cellWidth:p,cellHeight:s,cells:S}};function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var o=0,n=new Array(r);o<r;o++)n[o]=t[o];return n}function e(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(o)return(o=o.call(t)).next.bind(o);if(Array.isArray(t)||(o=function(t,r){if(t){if("string"==typeof t)return n(t,r);var o=Object.prototype.toString.call(t).slice(8,-1);return"Object"===o&&t.constructor&&(o=t.constructor.name),"Map"===o||"Set"===o?Array.from(t):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){o&&(t=o);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(){var t=[],r=[];function o(){return[].concat(r,t)}return o.addRight=function(){r.push.apply(r,arguments)},o.addLeft=function(){t.unshift.apply(t,arguments)},o.debug=function(){return{right:r,left:t}},o}var u=function(r){for(var o,n=[].concat(r).sort((function(t,r){return t.y!==r.y?t.y-r.y:t.x-r.x})),u=[],a=void 0,c=e(n);!(o=c()).done;){var f=o.value;void 0===a||f.y!==a.top?(a={top:f.y,right:f.x+f.width,bottom:f.y+f.height,left:f.x},u.push(a)):a.right=f.x+f.width}var d=[],l=void 0;return u.forEach((function(r,o){var n=o>0?u[o-1]:void 0;void 0!==n&&t(r,n)||((l=i()).addLeft([r.left,r.top]),l.addRight([r.right,r.top]),d.push(l)),void 0!==n&&r.left!==n.left&&l.addLeft([r.left,r.top]),void 0!==n&&r.right!==n.right&&l.addRight([r.right,r.top]),l.addLeft([r.left,r.bottom]),l.addRight([r.right,r.bottom])})),d.map((function(t){return t()}))};export{t as areBoundingBoxTouching,r as computeCellDimensions,o as generateGrid,u as getCellsPolygons,i as perpendicularPolygon};
//# sourceMappingURL=nivo-grid.es.js.map
