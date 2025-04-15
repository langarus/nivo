"use strict";var t=function(t,r){var o=t.left<=r.right&&r.left<=t.right,n=t.top<=r.bottom&&r.top<=t.bottom;return o&&n},r=function(t){var r=t.width,o=t.height,n=t.rows,e=t.columns,i=t.padding,u=(r-(e-1)*i)/e,a=(o-(n-1)*i)/n;if(!t.square)return[u,a];var c=Math.min(u,a);return[c,c]};function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var o=0,n=new Array(r);o<r;o++)n[o]=t[o];return n}function n(t,r){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(n)return(n=n.call(t)).next.bind(n);if(Array.isArray(t)||(n=function(t,r){if(t){if("string"==typeof t)return o(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(t,r):void 0}}(t))||r&&t&&"number"==typeof t.length){n&&(t=n);var e=0;return function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function e(){var t=[],r=[];function o(){return[].concat(r,t)}return o.addRight=function(){r.push.apply(r,arguments)},o.addLeft=function(){t.unshift.apply(t,arguments)},o.debug=function(){return{right:r,left:t}},o}exports.areBoundingBoxTouching=t,exports.computeCellDimensions=r,exports.generateGrid=function(t){for(var o=t.width,n=t.height,e=t.columns,i=t.rows,u=t.padding,a=void 0===u?0:u,c=t.fillDirection,l=void 0===c?"bottom":c,d=t.square,f=void 0===d||d,h=t.extend,s=r({width:o,height:n,rows:i,columns:e,padding:a,square:f}),p=s[0],g=s[1],m=[(o-(p*e+a*(e-1)))/2,(n-(g*i+a*(i-1)))/2],v=[],y=0;y<i;y++)for(var w=0;w<e;w++){var b=w*p,x=y*g,A=y+"."+w;v.push({key:A,index:0,column:w,row:y,x:b,y:x,width:p,height:g})}switch(l){case"left":v.sort((function(t,r){return t.column!==r.column?r.column-t.column:r.row-t.row}));break;case"top":v.sort((function(t,r){return t.row!==r.row?r.row-t.row:r.column-t.column}));break;case"right":v.sort((function(t,r){return t.column!==r.column?t.column-r.column:t.row-r.row}))}v.forEach((function(t,r){t.index=r}));var S="function"==typeof h?v.map((function(t){return h(t,m)})):v;return{x:m[0],y:m[1],cellWidth:p,cellHeight:g,cells:S}},exports.getCellsPolygons=function(r){for(var o,i=[].concat(r).sort((function(t,r){return t.y!==r.y?t.y-r.y:t.x-r.x})),u=[],a=void 0,c=n(i);!(o=c()).done;){var l=o.value;void 0===a||l.y!==a.top?(a={top:l.y,right:l.x+l.width,bottom:l.y+l.height,left:l.x},u.push(a)):a.right=l.x+l.width}var d=[],f=void 0;return u.forEach((function(r,o){var n=o>0?u[o-1]:void 0;void 0!==n&&t(r,n)||((f=e()).addLeft([r.left,r.top]),f.addRight([r.right,r.top]),d.push(f)),void 0!==n&&r.left!==n.left&&f.addLeft([r.left,r.top]),void 0!==n&&r.right!==n.right&&f.addRight([r.right,r.top]),f.addLeft([r.left,r.bottom]),f.addRight([r.right,r.bottom])})),d.map((function(t){return t()}))},exports.perpendicularPolygon=e;
//# sourceMappingURL=nivo-grid.cjs.js.map
