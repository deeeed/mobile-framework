(self.webpackChunk_siteed_design_system=self.webpackChunk_siteed_design_system||[]).push([[5934,3574],{"./src/components/lock-input/lock-input.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.LockInput=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _textInput=__webpack_require__("./src/components/text-input/text-input.tsx"),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");(exports.LockInput=function LockInput(_ref){var locked=_ref.locked,label=_ref.label,text=_ref.text,onPress=_ref.onPress;return(0,_jsxRuntime.jsx)(_textInput.TextInput,{label,value:text,disabled:locked,right:(0,_jsxRuntime.jsx)(_reactNativePaper.TextInput.Icon,{icon:locked?"lock":"lock-open-variant-outline",onPress})})}).__docgenInfo={description:"",methods:[],displayName:"LockInput",props:{locked:{required:!0,tsType:{name:"boolean"},description:""},label:{required:!1,tsType:{name:"string"},description:""},text:{required:!0,tsType:{name:"string"},description:""},onPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}}},"./src/components/text-input/text-input.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextInput=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_reactNativePaper=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./node_modules/react-native-paper/lib/module/index.js")),_themeProvider=__webpack_require__("./src/providers/theme-provider.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["mandatory","label"];(exports.TextInput=function TextInput(_ref){var mandatory=_ref.mandatory,label=_ref.label,rest=(0,_objectWithoutProperties2.default)(_ref,_excluded),colors=(0,_themeProvider.useTheme)().colors;return mandatory?(0,_jsxRuntime.jsx)(_reactNativePaper.TextInput,Object.assign({},rest,{style:{color:colors.text},label:(0,_jsxRuntime.jsxs)(_reactNativePaper.Text,{children:[label,(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:{color:"red",paddingLeft:5},children:"*"})]})})):(0,_jsxRuntime.jsx)(_reactNativePaper.TextInput,Object.assign({},rest,{label}))}).__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{mandatory:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PTextInputProps"]}}}]);