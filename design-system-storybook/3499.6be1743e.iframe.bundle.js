(self.webpackChunk_siteed_design_system=self.webpackChunk_siteed_design_system||[]).push([[3499,2317],{"./src/components/DynInput/DynInput.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Text=exports.SelectButtons=exports.Number=exports.Custom=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_mock_data=__webpack_require__("./src/_mocks/mock_data.tsx"),_ColorItem=__webpack_require__("./src/components/Colors/ColorItem/ColorItem.tsx"),_DynInput=__webpack_require__("./src/components/DynInput/DynInput.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DynInputMeta={component:_DynInput.DynInput,argTypes:{},args:{data:"test",inputType:"text"}};exports.default=DynInputMeta,exports.Text={args:{},parameters:{docs:{source:{code:'<DynInput data="test" inputType="text" />'}}}},exports.Number={args:{data:123,inputType:"number"},parameters:{docs:{source:{code:'<DynInput data={123} inputType="number" />'}}}},exports.SelectButtons={args:{data:_mock_data.randomSelectValues,inputType:"select-button",multiSelect:!0,max:2},parameters:{docs:{source:{code:`<DynInput data={${JSON.stringify(_mock_data.randomSelectValues)}} inputType="select-button" multiSelect={true} max={2} />`}}}},exports.Custom={args:{data:_mock_data.colorOptions,inputType:"custom",customRender:function customRender(value,_onChange){return Array.isArray(value)?(0,_jsxRuntime.jsx)(_View.default,{children:value.map((function(option,index){return(0,_jsxRuntime.jsx)(_Pressable.default,{onPress:function onPress(){return function handlePress(pressed){console.log("pressed",pressed)}(option)},children:(0,_jsxRuntime.jsx)(_ColorItem.ColorItem,{color:option.value})},`${option.label}-${index}`)}))}):(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{children:JSON.stringify(value)})}},parameters:{docs:{source:{code:'// Custom render function example\n<DynInput\n  data={colorOptions}\n  inputType="custom"\n  customRender={(value, _onChange) => {\n    const handlePress = (pressed) => {\n      console.log("pressed", pressed);\n    };\n\n    if (Array.isArray(value)) {\n      return (\n        <View>\n          {value.map((option, index) => (\n            <Pressable key={`${option.label}-${index}`} onPress={() => handlePress(option)}>\n              <ColorItem color={option.value} />\n            </Pressable>\n          ))}\n        </View>\n      );\n    }\n\n    return <PaperText>{JSON.stringify(value)}</PaperText>;\n  }}\n/>'}}}};module.exports.__namedExportsOrder=["Text","SelectButtons","Number","Custom"]},"./src/components/Colors/ColorItem/ColorItem.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ColorItem=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}(exports.ColorItem=function ColorItem(_ref){var color=_ref.color,labelStyle=_ref.labelStyle,label=_ref.label,_ref$previewSize=_ref.previewSize,previewSize=void 0===_ref$previewSize?20:_ref$previewSize,styles=(0,_react.useMemo)((function(){return function getStyles(){return _StyleSheet.default.create({container:{width:"100%",flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:10},colorPreview:{borderWidth:1,minWidth:20,minHeight:20},labelContainer:{flexDirection:"row",gap:5,alignItems:"center",justifyContent:"center"},textStyle:{}})}()}),[]);return(0,_jsxRuntime.jsxs)(_View.default,{style:styles.container,children:[(0,_jsxRuntime.jsx)(_View.default,{style:[styles.colorPreview,{backgroundColor:color,width:previewSize,height:previewSize}]}),label?(0,_jsxRuntime.jsxs)(_View.default,{style:styles.labelContainer,children:[(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:[styles.textStyle,labelStyle],children:label}),(0,_jsxRuntime.jsxs)(_reactNativePaper.Text,{style:[styles.textStyle,labelStyle],children:["( ",color," )"]})]}):(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:[styles.textStyle,labelStyle],children:color})]})}).__docgenInfo={description:"",methods:[],displayName:"ColorItem",props:{label:{required:!1,tsType:{name:"string"},description:""},labelStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"TextStyle"}],raw:"StyleProp<TextStyle>"},description:""},color:{required:!0,tsType:{name:"string"},description:""},previewSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}}}}]);