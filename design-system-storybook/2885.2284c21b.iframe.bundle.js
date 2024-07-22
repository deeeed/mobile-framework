(self.webpackChunk_siteed_design_system=self.webpackChunk_siteed_design_system||[]).push([[2885,6853],{"./src/components/colors/color-item/color-item.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ColorItem=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}(exports.ColorItem=function ColorItem(_ref){var color=_ref.color,labelStyle=_ref.labelStyle,label=_ref.label,_ref$previewSize=_ref.previewSize,previewSize=void 0===_ref$previewSize?20:_ref$previewSize,styles=(0,_react.useMemo)((function(){return function getStyles(){return _StyleSheet.default.create({container:{width:"100%",flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:10},colorPreview:{borderWidth:1,minWidth:20,minHeight:20},labelContainer:{flexDirection:"row",gap:5,alignItems:"center",justifyContent:"center"},textStyle:{}})}()}),[]);return(0,_jsxRuntime.jsxs)(_View.default,{style:styles.container,children:[(0,_jsxRuntime.jsx)(_View.default,{style:[styles.colorPreview,{backgroundColor:color,width:previewSize,height:previewSize}]}),label?(0,_jsxRuntime.jsxs)(_View.default,{style:styles.labelContainer,children:[(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:[styles.textStyle,labelStyle],children:label}),(0,_jsxRuntime.jsxs)(_reactNativePaper.Text,{style:[styles.textStyle,labelStyle],children:["( ",color," )"]})]}):(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:[styles.textStyle,labelStyle],children:color})]})}).__docgenInfo={description:"",methods:[],displayName:"ColorItem",props:{label:{required:!1,tsType:{name:"string"},description:""},labelStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"TextStyle"}],raw:"StyleProp<TextStyle>"},description:""},color:{required:!0,tsType:{name:"string"},description:""},previewSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}}},"./src/settings/theme-viewer/theme-viewer.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ThemeViewer=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_ScrollView=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/ScrollView/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_colorItem=__webpack_require__("./src/components/colors/color-item/color-item.tsx"),_themeProvider=__webpack_require__("./src/providers/theme-provider.tsx"),_uiProvider=__webpack_require__("./src/providers/ui-provider.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}(exports.ThemeViewer=function ThemeViewer(_){var _useTheme=(0,_themeProvider.useTheme)(),colors=_useTheme.colors,dark=_useTheme.dark,styles=(0,_react.useMemo)((function(){return function getStyles(){return _StyleSheet.default.create({container:{flex:1},scrollView:{maxWidth:"100%"}})}()}),[]),colorEntries=Object.entries(colors).filter((function(_ref){return"string"==typeof(0,_slicedToArray2.default)(_ref,2)[1]})),darkThemeEntries=Object.entries(_uiProvider.DefaultDarkTheme.colors).filter((function(_ref3){return"string"==typeof(0,_slicedToArray2.default)(_ref3,2)[1]})),lightThemeEntries=Object.entries(_uiProvider.DefaultLightTheme.colors).filter((function(_ref5){return"string"==typeof(0,_slicedToArray2.default)(_ref5,2)[1]}));return(0,_jsxRuntime.jsxs)(_View.default,{style:styles.container,children:[(0,_jsxRuntime.jsxs)(_reactNativePaper.Text,{children:["DarkMode: ",dark?"YES":"NO"]}),(0,_jsxRuntime.jsx)(_colorItem.ColorItem,{color:colors.background,label:"colors.background"}),(0,_jsxRuntime.jsx)(_colorItem.ColorItem,{color:colors.backdrop,label:"colors.backdrop"}),(0,_jsxRuntime.jsxs)(_ScrollView.default,{style:styles.scrollView,contentContainerStyle:{flexDirection:"row"},children:[(0,_jsxRuntime.jsxs)(_View.default,{style:{borderWidth:1,padding:5,width:"30%"},children:[(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{children:"Active Theme Colors"}),colorEntries.map((function(_ref7){var _ref8=(0,_slicedToArray2.default)(_ref7,2),key=_ref8[0],value=_ref8[1];return(0,_jsxRuntime.jsx)(_colorItem.ColorItem,{color:value,label:`colors.${key}`},key)}))]}),(0,_jsxRuntime.jsxs)(_View.default,{style:{borderWidth:1,padding:5,width:"30%",backgroundColor:_uiProvider.DefaultDarkTheme.colors.background},children:[(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:{color:_uiProvider.DefaultDarkTheme.colors.text},children:"Dark Theme Colors"}),darkThemeEntries.map((function(_ref9){var _ref10=(0,_slicedToArray2.default)(_ref9,2),key=_ref10[0],value=_ref10[1];return(0,_jsxRuntime.jsx)(_colorItem.ColorItem,{color:value,labelStyle:{color:_uiProvider.DefaultDarkTheme.colors.text},label:`colors.${key}`},key)}))]}),(0,_jsxRuntime.jsxs)(_View.default,{style:{borderWidth:1,padding:5,width:"30%",backgroundColor:_uiProvider.DefaultLightTheme.colors.background},children:[(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:{color:_uiProvider.DefaultLightTheme.colors.text},children:"Light Theme Colors"}),lightThemeEntries.map((function(_ref11){var _ref12=(0,_slicedToArray2.default)(_ref11,2),key=_ref12[0],value=_ref12[1];return(0,_jsxRuntime.jsx)(_colorItem.ColorItem,{color:value,labelStyle:{color:_uiProvider.DefaultLightTheme.colors.text},label:`colors.${key}`},key)}))]})]})]})}).__docgenInfo={description:"",methods:[],displayName:"ThemeViewer"}}}]);