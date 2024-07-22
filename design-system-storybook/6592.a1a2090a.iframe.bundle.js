(self.webpackChunk_siteed_design_system=self.webpackChunk_siteed_design_system||[]).push([[6592],{"./src/components/list-item/list-item.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ListItem=void 0;var _vectorIcons=__webpack_require__("./node_modules/@expo/vector-icons/build/Icons.js"),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_themeProvider=__webpack_require__("./src/providers/theme-provider.tsx"),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}(exports.ListItem=function ListItem(_ref){var label=_ref.label,labelStyle=_ref.labelStyle,subLabel=_ref.subLabel,contentContainerStyle=_ref.contentContainerStyle,textContentContainerStyle=_ref.textContentContainerStyle,subLabelStyle=_ref.subLabelStyle,onPress=_ref.onPress,theme=(0,_themeProvider.useTheme)(),styles=(0,_react.useMemo)((function(){return function getStyle(theme){return _StyleSheet.default.create({container:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:10,margin:10,backgroundColor:theme.colors.background},textContainer:{flex:1},label:{paddingRight:10,fontWeight:"bold"},subLabel:{color:theme.colors.text}})}(theme)}),[theme]);return(0,_jsxRuntime.jsxs)(_Pressable.default,{style:[styles.container,contentContainerStyle],onPress,children:[(0,_jsxRuntime.jsxs)(_View.default,{style:[styles.textContainer,textContentContainerStyle],children:[(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:[styles.label,labelStyle],children:label}),subLabel?(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:[styles.subLabel,subLabelStyle],children:subLabel}):null]}),(0,_jsxRuntime.jsx)(_vectorIcons.MaterialCommunityIcons,{name:"chevron-right",size:24,color:theme.colors.text})]})}).__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{contentContainerStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},textContentContainerStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"ViewStyle"}],raw:"StyleProp<ViewStyle>"},description:""},label:{required:!0,tsType:{name:"string"},description:""},labelStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"TextStyle"}],raw:"StyleProp<TextStyle>"},description:""},subLabel:{required:!1,tsType:{name:"string"},description:""},subLabelStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"TextStyle"}],raw:"StyleProp<TextStyle>"},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}}}]);