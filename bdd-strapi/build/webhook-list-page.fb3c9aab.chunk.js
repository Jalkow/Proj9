(self.webpackChunkproj_9=self.webpackChunkproj_9||[]).push([[4121],{36825:(e,t,n)=>{"use strict";e.exports=n(32800)},32800:function(e,t,n){var r,o;e.exports=(r=n(53547),o=n(78384),function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=120)}({0:function(e,t,n){e.exports=n(17)()},1:function(e,t){e.exports=r},10:function(e,t,n){var r=n(23),o=n(24),a=n(20),i=n(25);e.exports=function(e,t){return r(e)||o(e,t)||a(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},120:function(e,t,n){"use strict";n.r(t),n.d(t,"Switch",(function(){return x}));var r,o,a=n(5),i=n.n(a),u=n(6),l=n.n(u),s=n(3),c=n.n(s),d=n(1),f=n.n(d),p=n(0),b=n.n(p),h=n(2),m=n.n(h),g=n(9),v=n(4),y=["label","onChange","onLabel","offLabel","selected","visibleLabels"],E=m.a.div(r||(r=c()(["\n  background: ",";\n  border: none;\n  border-radius: 16px;\n  position: relative;\n  height: ","rem;\n  width: ","rem;\n\n  & span {\n    font-size: ",";\n  }\n\n  &:before {\n    content: '';\n    background: ",";\n    width: 1rem;\n    height: 1rem;\n    border-radius: 50%;\n    position: absolute;\n    transition: all 0.5s;\n    left: ",";\n    top: ",";\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    &:before {\n      transition: none;\n    }\n  }\n"])),(function(e){return e.theme.colors.danger500}),1.5,2.5,(function(e){return e.visibleLabels?"1rem":0}),(function(e){return e.theme.colors.neutral0}),(function(e){return e.theme.spaces[1]}),(function(e){return e.theme.spaces[1]})),w=m.a.button(o||(o=c()(["\n  background: transparent;\n  padding: 0;\n  border: none;\n\n  &[aria-checked='true'] "," {\n    background: ",";\n  }\n\n  &[aria-checked='true'] ",":before {\n    transform: translateX(1rem);\n  }\n"])),E,(function(e){return e.theme.colors.success500}),E),x=f.a.forwardRef((function(e,t){var n=e.label,r=e.onChange,o=e.onLabel,a=e.offLabel,u=e.selected,s=e.visibleLabels,c=l()(e,y);return f.a.createElement(w,i()({ref:t,role:"switch","aria-checked":u,"aria-label":n,onClick:r,visibleLabels:s,type:"button"},c),f.a.createElement(g.Flex,null,f.a.createElement(E,null,f.a.createElement("span",null,o),f.a.createElement("span",null,a)),s&&f.a.createElement(v.Box,{as:"span","aria-hidden":!0,paddingLeft:2,color:u?"success600":"danger600"},u?o:a)))}));x.defaultProps={onLabel:"On",offLabel:"Off",visibleLabels:!1},x.propTypes={label:b.a.string.isRequired,offLabel:b.a.string,onChange:b.a.func.isRequired,onLabel:b.a.string,selected:b.a.bool.isRequired,visibleLabels:b.a.bool},x.displayName="Switch"},13:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},17:function(e,t,n){"use strict";var r=n(18);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,a,i){if(i!==r){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return n.PropTypes=n,n}},18:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},19:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},2:function(e,t){e.exports=o},20:function(e,t,n){var r=n(19);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},22:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o},e.exports.default=e.exports,e.exports.__esModule=!0},23:function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},24:function(e,t){e.exports=function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],i=!0,u=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);i=!0);}catch(e){u=!0,o=e}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return a}},e.exports.default=e.exports,e.exports.__esModule=!0},25:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))},e.exports.default=e.exports,e.exports.__esModule=!0},4:function(e,t,n){"use strict";n.r(t),n.d(t,"Box",(function(){return f}));var r,o=n(3),a=n.n(o),i=n(0),u=n.n(i),l=n(2),s=n.n(l),c=n(7),d={color:!0},f=s.a.div.withConfig({shouldForwardProp:function(e,t){return!d[e]&&t(e)}})(r||(r=a()(["\n  // Font\n  font-size: ",";\n\n  // Colors\n  background: ",";\n  color: ",";\n\n  // Spaces\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n  ","\n\n  // Responsive hiding\n  ","\n  ","\n  \n\n  // Borders\n  border-radius: ",";\n  border-style: ",";\n  border-width: ",";\n  border-color: ",";\n  border: ",";\n\n  // Shadows\n  box-shadow: ",";\n\n  // Handlers\n  pointer-events: ",";\n  &:hover {\n    ","\n  }\n\n  // Display\n  display: ",";\n\n  // Position\n  position: ",";\n  left: ",";\n  right: ",";\n  top: ",";\n  bottom: ",";\n  z-index: ",";\n  overflow: ",";\n  cursor: ",";\n\n  // Size\n  width: ",";\n  max-width: ",";\n  min-width: ",";\n  height: ",";\n  max-height: ",";\n  min-height: ",";\n\n  // Animation\n  transition: ",";\n  transform: ",";\n  animation: ",";\n\n  //Flexbox children props\n  flex-shrink: ",";\n  flex-grow: ",";\n  flex-basis: ",";\n  flex: ",";\n\n  // Text\n  text-align: ",";\n  text-transform: ",";\n  line-height: ",";\n\n  // Cursor\n  cursor: ",";\n"])),(function(e){var t=e.fontSize;return e.theme.fontSizes[t]||t}),(function(e){var t=e.theme,n=e.background;return t.colors[n]}),(function(e){var t=e.theme,n=e.color;return t.colors[n]}),(function(e){var t=e.theme,n=e.padding;return Object(c.a)("padding",n,t)}),(function(e){var t=e.theme,n=e.paddingTop;return Object(c.a)("padding-top",n,t)}),(function(e){var t=e.theme,n=e.paddingRight;return Object(c.a)("padding-right",n,t)}),(function(e){var t=e.theme,n=e.paddingBottom;return Object(c.a)("padding-bottom",n,t)}),(function(e){var t=e.theme,n=e.paddingLeft;return Object(c.a)("padding-left",n,t)}),(function(e){var t=e.theme,n=e.marginLeft;return Object(c.a)("margin-left",n,t)}),(function(e){var t=e.theme,n=e.marginRight;return Object(c.a)("margin-right",n,t)}),(function(e){var t=e.theme,n=e.marginTop;return Object(c.a)("margin-top",n,t)}),(function(e){var t=e.theme,n=e.marginBottom;return Object(c.a)("margin-bottom",n,t)}),(function(e){var t=e.theme;return e.hiddenS?"".concat(t.mediaQueries.tablet," { display: none; }"):void 0}),(function(e){var t=e.theme;return e.hiddenXS?"".concat(t.mediaQueries.mobile," { display: none; }"):void 0}),(function(e){var t=e.theme,n=e.hasRadius,r=e.borderRadius;return n?t.borderRadius:r}),(function(e){return e.borderStyle}),(function(e){return e.borderWidth}),(function(e){var t=e.borderColor;return e.theme.colors[t]}),(function(e){var t=e.theme,n=e.borderColor,r=e.borderStyle,o=e.borderWidth;if(n&&!r&&!o)return"1px solid ".concat(t.colors[n])}),(function(e){var t=e.theme,n=e.shadow;return t.shadows[n]}),(function(e){return e.pointerEvents}),(function(e){var t=e._hover,n=e.theme;return t?t(n):void 0}),(function(e){return e.display}),(function(e){return e.position}),(function(e){var t=e.left;return e.theme.spaces[t]||t}),(function(e){var t=e.right;return e.theme.spaces[t]||t}),(function(e){var t=e.top;return e.theme.spaces[t]||t}),(function(e){var t=e.bottom;return e.theme.spaces[t]||t}),(function(e){return e.zIndex}),(function(e){return e.overflow}),(function(e){return e.cursor}),(function(e){var t=e.width;return e.theme.spaces[t]||t}),(function(e){var t=e.maxWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.minWidth;return e.theme.spaces[t]||t}),(function(e){var t=e.height;return e.theme.spaces[t]||t}),(function(e){var t=e.maxHeight;return e.theme.spaces[t]||t}),(function(e){var t=e.minHeight;return e.theme.spaces[t]||t}),(function(e){return e.transition}),(function(e){return e.transform}),(function(e){return e.animation}),(function(e){return e.shrink}),(function(e){return e.grow}),(function(e){return e.basis}),(function(e){return e.flex}),(function(e){return e.textAlign}),(function(e){return e.textTransform}),(function(e){return e.lineHeight}),(function(e){return e.cursor}));f.displayName="Box",f.defaultProps={background:void 0,borderColor:void 0,color:void 0,hiddenS:!1,hiddenXS:!1,padding:void 0,paddingTop:void 0,paddingRight:void 0,paddingBottom:void 0,paddingLeft:void 0,hasRadius:!1,shadow:void 0,children:null,shrink:void 0,grow:void 0,basis:void 0,flex:void 0,_hover:function(){}},f.propTypes={_hover:u.a.func,background:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.string]),borderColor:u.a.string,children:u.a.oneOfType([u.a.node,u.a.string]),color:u.a.string,flex:u.a.oneOfType([u.a.string,u.a.string]),grow:u.a.oneOfType([u.a.string,u.a.string]),hasRadius:u.a.bool,hiddenS:u.a.bool,hiddenXS:u.a.bool,padding:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingBottom:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingLeft:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingRight:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),paddingTop:u.a.oneOfType([u.a.number,u.a.arrayOf(u.a.number)]),shadow:u.a.string,shrink:u.a.oneOfType([u.a.string,u.a.string])}},5:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,n.apply(this,arguments)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},6:function(e,t,n){var r=n(22);e.exports=function(e,t){if(null==e)return{};var n,o,a=r(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a},e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t,n){"use strict";var r=n(10),o=n.n(r),a=n(13),i=n.n(a);t.a=function(e,t,n){var r=t;if(Array.isArray(t)||"object"!==i()(t)||(r=[null==t?void 0:t.desktop,null==t?void 0:t.tablet,null==t?void 0:t.mobile]),void 0!==r){if(Array.isArray(r)){var a=r,u=o()(a,3),l=u[0],s=u[1],c=u[2],d="".concat(e,": ").concat(n.spaces[l],";");return void 0!==s&&(d+="".concat(n.mediaQueries.tablet,"{\n          ").concat(e,": ").concat(n.spaces[s],";\n        }")),void 0!==c&&(d+="".concat(n.mediaQueries.mobile,"{\n          ").concat(e,": ").concat(n.spaces[c],";\n        }")),d}var f=n.spaces[r]||r;return"".concat(e,": ").concat(f,";")}}},9:function(e,t,n){"use strict";n.r(t),n.d(t,"Flex",(function(){return f}));var r,o=n(3),a=n.n(o),i=n(0),u=n.n(i),l=n(2),s=n.n(l),c=n(4),d={direction:!0},f=s()(c.Box).withConfig({shouldForwardProp:function(e,t){return!d[e]&&t(e)}})(r||(r=a()(["\n  display: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  flex-wrap: ",";\n"])),(function(e){return e.inline?"inline-flex":"flex"}),(function(e){return e.direction}),(function(e){return e.justifyContent}),(function(e){return e.alignItems}),(function(e){return e.wrap}));f.defaultProps={alignItems:"center",basis:void 0,direction:"row",inline:!1,justifyContent:void 0,reverse:!1,wrap:void 0},f.propTypes={alignItems:u.a.string,basis:u.a.oneOfType([u.a.string,u.a.number]),direction:u.a.string,inline:u.a.bool,justifyContent:u.a.string,reverse:u.a.bool,wrap:u.a.string}}}))},72251:(e,t,n)=>{"use strict";var r=n(25108),o=n(95318),a=n(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=o(n(87757)),u=o(n(67154)),l=o(n(59713)),s=o(n(48926)),c=o(n(63038)),d=R(n(53547)),f=n(39711),p=n(97132),b=n(68547),h=n(35395),m=n(92543),g=n(40264),v=n(9524),y=n(49549),E=n(46458),w=n(43546),x=n(33483),O=n(64459),k=n(19631),T=n(36825),_=n(80117),S=n(31512),L=n(67422),j=n(94117),D=o(n(89326)),C=o(n(56204)),M=o(n(62982)),P=o(n(26485)),B=R(n(71681)),W=o(n(13240));function A(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(A=function(e){return e?n:t})(e)}function R(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var n=A(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var u=o?Object.getOwnPropertyDescriptor(e,i):null;u&&(u.get||u.set)?Object.defineProperty(r,i,u):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function H(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(){var e=(0,b.useRBAC)(W.default.settings.webhooks),t=e.isLoading,n=e.allowedActions,o=n.canCreate,a=n.canRead,l=n.canUpdate,A=n.canDelete,R=(0,b.useNotification)(),I=(0,d.useRef)(!0),z=(0,p.useIntl)().formatMessage,K=(0,d.useState)(!1),N=(0,c.default)(K,2),F=N[0],G=N[1],U=(0,d.useReducer)(B.default,B.initialState),q=(0,c.default)(U,2),Q=q[0],V=Q.webhooks,X=Q.webhooksToDelete,Y=Q.webhookToDelete,$=Q.loadingWebhooks,J=q[1],Z=(0,L.useNotifyAT)().notifyStatus;(0,b.useFocusWhenNavigate)();var ee=(0,f.useHistory)().push,te=(0,f.useLocation)().pathname,ne=V.length,re=X.length,oe=function(e){return V.findIndex((function(t){return t.id===e}))};(0,d.useEffect)((function(){return I.current=!0,function(){I.current=!1}}),[]),(0,d.useEffect)((function(){a&&ae()}),[a]);var ae=function(){var e=(0,s.default)(i.default.mark((function e(){var t,n;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.request)("/admin/webhooks",{method:"GET"});case 3:t=e.sent,n=t.data,I.current&&(J({type:"GET_DATA_SUCCEEDED",data:n}),Z("webhooks have been loaded")),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),r.log(e.t0),I.current&&(20!==e.t0.code&&R({type:"warning",message:{id:"notification.error"}}),J({type:"TOGGLE_LOADING"}));case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ie=function(){var e=(0,s.default)(i.default.mark((function e(){return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.request)("/admin/webhooks/".concat(Y),{method:"DELETE"});case 3:J({type:"WEBHOOK_DELETED",index:oe(Y)}),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),20!==e.t0.code&&R({type:"warning",message:{id:"notification.error"}});case 9:G(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),ue=function(){var e=(0,s.default)(i.default.mark((function e(){var t;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={ids:X},e.prev=1,e.next=4,(0,b.request)("/admin/webhooks/batch-delete",{method:"POST",body:t});case 4:I.current&&J({type:"WEBHOOKS_DELETED"}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),I.current&&20!==e.t0.code&&R({type:"warning",message:{id:"notification.error"}});case 10:G(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(){return e.apply(this,arguments)}}(),le=function(e){G(!0),"all"!==e&&J({type:"SET_WEBHOOK_TO_DELETE",id:e})},se=function(){var e=(0,s.default)(i.default.mark((function e(t,n){var r,o,a,u;return i.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=oe(n),o=V[r],a=[r,"isEnabled"],delete(u=H(H({},o),{},{isEnabled:t})).id,e.prev=5,J({type:"SET_WEBHOOK_ENABLED",keys:a,value:t}),e.next=9,(0,b.request)("/admin/webhooks/".concat(n),{method:"PUT",body:u});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(5),I.current&&(J({type:"SET_WEBHOOK_ENABLED",keys:a,value:!t}),20!==e.t0.code&&R({type:"warning",message:{id:"notification.error"}}));case 14:case"end":return e.stop()}}),e,null,[[5,11]])})));return function(t,n){return e.apply(this,arguments)}}(),ce=function(e){ee("".concat(te,"/").concat(e))};return d.default.createElement(h.Layout,null,d.default.createElement(b.SettingsPageTitle,{name:"Webhooks"}),d.default.createElement(_.Main,{"aria-busy":t||$},d.default.createElement(h.HeaderLayout,{title:z({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:z({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:o&&!$&&d.default.createElement(S.LinkButton,{startIcon:d.default.createElement(D.default,null),variant:"default",to:"".concat(te,"/create"),size:"L"},z({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))}),re>0&&A&&d.default.createElement(h.ActionLayout,{startActions:d.default.createElement(d.default.Fragment,null,d.default.createElement(x.Typography,{variant:"epsilon",textColor:"neutral600"},z({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# asset} other {# assets}} selected"},{webhooksToDeleteLength:re})),d.default.createElement(O.Button,{onClick:function(){return le("all")},startIcon:d.default.createElement(M.default,null),size:"L",variant:"danger-light"},z({id:"Settings.webhooks.events.delete",defaultMessage:"Delete"})))}),d.default.createElement(h.ContentLayout,null,t||$?d.default.createElement(j.Box,{background:"neutral0",padding:6,shadow:"filterShadow",hasRadius:!0},d.default.createElement(b.LoadingIndicatorPage,null)):d.default.createElement(d.default.Fragment,null,ne>0?d.default.createElement(w.Table,{colCount:5,rowCount:ne+1,footer:d.default.createElement(w.TFooter,{onClick:function(){return o?ce("create"):{}},icon:d.default.createElement(D.default,null)},z({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))},d.default.createElement(w.Thead,null,d.default.createElement(w.Tr,null,d.default.createElement(w.Th,null,d.default.createElement(E.BaseCheckbox,{"aria-label":z({id:"Settings.webhooks.list.all-entries.select",defaultMessage:"Select all entries"}),indeterminate:re>0&&re<ne,value:re===ne,onValueChange:function(){J({type:"SET_ALL_WEBHOOKS_TO_DELETE"})}})),d.default.createElement(w.Th,{width:"20%"},d.default.createElement(x.Typography,{variant:"sigma",textColor:"neutral600"},z({id:"Settings.webhooks.form.name",defaultMessage:"Name"}))),d.default.createElement(w.Th,{width:"60%"},d.default.createElement(x.Typography,{variant:"sigma",textColor:"neutral600"},z({id:"Settings.webhooks.form.url",defaultMessage:"URL"}))),d.default.createElement(w.Th,{width:"20%"},d.default.createElement(x.Typography,{variant:"sigma",textColor:"neutral600"},z({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"}))),d.default.createElement(w.Th,null,d.default.createElement(k.VisuallyHidden,null,z({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"}))))),d.default.createElement(w.Tbody,null,V.map((function(e){return d.default.createElement(w.Tr,(0,u.default)({key:e.id},(0,b.onRowClick)({fn:function(){return ce(e.id)},condition:l})),d.default.createElement(w.Td,b.stopPropagation,d.default.createElement(E.BaseCheckbox,{"aria-label":"".concat(z({id:"Settings.webhooks.list.select",defaultMessage:"Select"})," ").concat(e.name),value:null===X||void 0===X?void 0:X.includes(e.id),onValueChange:function(t){return function(e,t){J({type:"SET_WEBHOOKS_TO_DELETE",value:e,id:t})}(t,e.id)},id:"select",name:"select"})),d.default.createElement(w.Td,null,d.default.createElement(x.Typography,{fontWeight:"semiBold",textColor:"neutral800"},e.name)),d.default.createElement(w.Td,null,d.default.createElement(x.Typography,{textColor:"neutral800"},e.url)),d.default.createElement(w.Td,null,d.default.createElement(g.Flex,b.stopPropagation,d.default.createElement(T.Switch,{onLabel:z({id:"Settings.webhooks.enabled",defaultMessage:"Enabled"}),offLabel:z({id:"Settings.webhooks.disabled",defaultMessage:"Disabled"}),label:"".concat(e.name," ").concat(z({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})),selected:e.isEnabled,onChange:function(){return se(!e.isEnabled,e.id)},visibleLabels:!0}))),d.default.createElement(w.Td,null,d.default.createElement(v.Stack,(0,u.default)({horizontal:!0,size:1},b.stopPropagation),l&&d.default.createElement(y.IconButton,{onClick:function(){ce(e.id)},label:z({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),icon:d.default.createElement(C.default,null),noBorder:!0}),A&&d.default.createElement(y.IconButton,{onClick:function(){return le(e.id)},label:z({id:"Settings.webhooks.events.delete",defaultMessage:"Delete"}),icon:d.default.createElement(M.default,null),noBorder:!0,id:"delete-".concat(e.id)}))))})))):d.default.createElement(m.EmptyStateLayout,{icon:d.default.createElement(P.default,{width:"160px"}),content:z({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:d.default.createElement(O.Button,{variant:"secondary",startIcon:d.default.createElement(D.default,null),onClick:function(){return o?ce("create"):{}}},z({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"}))})))),d.default.createElement(b.ConfirmDialog,{isOpen:F,onToggleDialog:function(){G((function(e){return!e}))},onConfirm:function(){Y?ie():ue()}}))};t.default=z},71681:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.initialState=t.default=void 0;var o=r(n(319)),a=r(n(66312)),i=r(n(36968));t.initialState={webhooks:[],webhooksToDelete:[],webhookToDelete:null,loadingWebhooks:!0};var u=function(e,t){return(0,a.default)(e,(function(n){switch(t.type){case"GET_DATA_SUCCEEDED":n.webhooks=t.data,n.loadingWebhooks=!1;break;case"TOGGLE_LOADING":n.loadingWebhooks=!e.loadingWebhooks;break;case"SET_WEBHOOK_ENABLED":(0,i.default)(n,["webhooks"].concat((0,o.default)(t.keys)),t.value);break;case"SET_WEBHOOK_TO_DELETE":n.webhookToDelete=t.id;break;case"SET_WEBHOOKS_TO_DELETE":t.value?n.webhooksToDelete.push(t.id):n.webhooksToDelete=e.webhooksToDelete.filter((function(e){return e!==t.id}));break;case"SET_ALL_WEBHOOKS_TO_DELETE":0===e.webhooksToDelete.length?n.webhooksToDelete=e.webhooks.map((function(e){return e.id})):n.webhooksToDelete=[];break;case"WEBHOOKS_DELETED":n.webhooks=e.webhooks.filter((function(t){return!e.webhooksToDelete.includes(t.id)})),n.webhooksToDelete=[];break;case"WEBHOOK_DELETED":n.webhooks=e.webhooks.filter((function(e,n){return n!==t.index})),n.webhookToDelete=null;break;default:return n}}))};t.default=u},94859:(e,t,n)=>{"use strict";var r=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(53547)),a=n(68547),i=r(n(13240)),u=r(n(72251)),l=function(){return o.default.createElement(a.CheckPagePermissions,{permissions:i.default.settings.webhooks.main},o.default.createElement(u.default,null))};t.default=l}}]);