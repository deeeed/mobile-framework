(self.webpackChunk_siteed_design_system=self.webpackChunk_siteed_design_system||[]).push([[5850,6853,1175],{"./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>DocsRenderer});var react=__webpack_require__("./node_modules/react/index.js"),client=__webpack_require__("./node_modules/react-dom/client.js"),nodes=new Map,WithCallback=({callback,children})=>{let once=(0,react.useRef)();return(0,react.useLayoutEffect)((()=>{once.current!==callback&&(once.current=callback,callback())}),[callback]),children},getReactRoot=async(el,rootOptions)=>{let root=nodes.get(el);return root||(root=client.createRoot(el,rootOptions),nodes.set(el,root)),root},dist=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:dist.XA,a:dist.zE,...dist.Sw},ErrorBoundary=class extends react.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException}=this.props;showException(err)}render(){let{hasError}=this.state,{children}=this.props;return hasError?null:react.createElement(react.Fragment,null,children)}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=dist.kQ;return new Promise(((resolve,reject)=>{__webpack_require__.e(8109).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider})=>(async(node,el,rootOptions)=>{let root=await getReactRoot(el,rootOptions);return new Promise((resolve=>{root.render(react.createElement(WithCallback,{callback:()=>resolve(null)},node))}))})(react.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react.createElement(MDXProvider,{components},react.createElement(TDocs,{context,docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{((el,shouldUseNewRootApi)=>{let root=nodes.get(el);root&&(root.unmount(),nodes.delete(el))})(element)}}}},"./src/components/dyn-input/dyn-input.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),dyn_input_stories=(__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs"),__webpack_require__("./src/components/dyn-input/dyn-input.stories.tsx"));function _createMdxContent(props){const _components={code:"code",h1:"h1",h3:"h3",p:"p",...(0,lib.R)(),...props.components};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:dyn_input_stories}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"definition",children:"Definition"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.code,{children:"DynInput"})," is a versatile input handler for React applications, supporting various input types like text, textarea, number, radio, select-button, and custom render types.\nIt provides a flexible interface for handling different forms of user input."]}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"text-input",children:"Text Input"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Use the ",(0,jsx_runtime.jsx)(_components.code,{children:"DynInput"})," for basic text input:"]}),"\n","\n",(0,jsx_runtime.jsx)(dist.gG,{of:dyn_input_stories.Text}),"\n",(0,jsx_runtime.jsx)(dist.H2,{})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,lib.R)(),...props.components};return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./src/components/dyn-input/dyn-input.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Text=exports.SelectButtons=exports.Number=exports.Custom=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_mock_data=__webpack_require__("./src/_mocks/mock_data.tsx"),_colorItem=__webpack_require__("./src/components/colors/color-item/color-item.tsx"),_dynInput=__webpack_require__("./src/components/dyn-input/dyn-input.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),DynInputMeta={component:_dynInput.DynInput,argTypes:{},args:{data:"test",inputType:"text"}};exports.default=DynInputMeta,exports.Text={args:{},parameters:{docs:{source:{code:'<DynInput data="test" inputType="text" />'}}}},exports.Number={args:{data:123,inputType:"number"},parameters:{docs:{source:{code:'<DynInput data={123} inputType="number" />'}}}},exports.SelectButtons={args:{data:_mock_data.randomSelectValues,inputType:"select-button",multiSelect:!0,max:2},parameters:{docs:{source:{code:`<DynInput data={${JSON.stringify(_mock_data.randomSelectValues)}} inputType="select-button" multiSelect={true} max={2} />`}}}},exports.Custom={args:{data:_mock_data.colorOptions,inputType:"custom",customRender:function customRender(value,_onChange){return Array.isArray(value)?(0,_jsxRuntime.jsx)(_View.default,{children:value.map((function(option,index){return(0,_jsxRuntime.jsx)(_Pressable.default,{onPress:function onPress(){return function handlePress(pressed){console.log("pressed",pressed)}(option)},children:(0,_jsxRuntime.jsx)(_colorItem.ColorItem,{color:option.value})},`${option.label}-${index}`)}))}):(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{children:JSON.stringify(value)})}},parameters:{docs:{source:{code:'// Custom render function example\n<DynInput\n  data={colorOptions}\n  inputType="custom"\n  customRender={(value, _onChange) => {\n    const handlePress = (pressed) => {\n      console.log("pressed", pressed);\n    };\n\n    if (Array.isArray(value)) {\n      return (\n        <View>\n          {value.map((option, index) => (\n            <Pressable key={`${option.label}-${index}`} onPress={() => handlePress(option)}>\n              <ColorItem color={option.value} />\n            </Pressable>\n          ))}\n        </View>\n      );\n    }\n\n    return <PaperText>{JSON.stringify(value)}</PaperText>;\n  }}\n/>'}}}};module.exports.__namedExportsOrder=["Text","SelectButtons","Number","Custom"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./src/components/colors/color-item/color-item.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.ColorItem=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_reactNativePaper=__webpack_require__("./node_modules/react-native-paper/lib/module/index.js"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}(exports.ColorItem=function ColorItem(_ref){var color=_ref.color,labelStyle=_ref.labelStyle,label=_ref.label,_ref$previewSize=_ref.previewSize,previewSize=void 0===_ref$previewSize?20:_ref$previewSize,styles=(0,_react.useMemo)((function(){return function getStyles(){return _StyleSheet.default.create({container:{width:"100%",flex:1,flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gap:10},colorPreview:{borderWidth:1,minWidth:20,minHeight:20},labelContainer:{flexDirection:"row",gap:5,alignItems:"center",justifyContent:"center"},textStyle:{}})}()}),[]);return(0,_jsxRuntime.jsxs)(_View.default,{style:styles.container,children:[(0,_jsxRuntime.jsx)(_View.default,{style:[styles.colorPreview,{backgroundColor:color,width:previewSize,height:previewSize}]}),label?(0,_jsxRuntime.jsxs)(_View.default,{style:styles.labelContainer,children:[(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:[styles.textStyle,labelStyle],children:label}),(0,_jsxRuntime.jsxs)(_reactNativePaper.Text,{style:[styles.textStyle,labelStyle],children:["( ",color," )"]})]}):(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:[styles.textStyle,labelStyle],children:color})]})}).__docgenInfo={description:"",methods:[],displayName:"ColorItem",props:{label:{required:!1,tsType:{name:"string"},description:""},labelStyle:{required:!1,tsType:{name:"StyleProp",elements:[{name:"TextStyle"}],raw:"StyleProp<TextStyle>"},description:""},color:{required:!0,tsType:{name:"string"},description:""},previewSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"20",computed:!1}}}}}}]);