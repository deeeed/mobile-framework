(self.webpackChunk_siteed_design_system=self.webpackChunk_siteed_design_system||[]).push([[5463],{"./src/components/toast/toast.stories.tsx":(module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.Warning=exports.SuccessWithAction=exports.Success=exports.Loading=exports.Info=exports.Error=void 0;_interopRequireDefault(__webpack_require__("./node_modules/react/index.js"));var _toast=__webpack_require__("./src/components/toast/toast.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ToastMeta={component:_toast.Toast,tags:["autodocs"],argTypes:{onDismiss:{action:"dismissed"},action:{action:"clicked"}},args:{message:"Information message",subMessage:"More details about the info",type:"info",position:"top",duration:3e3,visibility:!0,iconVisible:!0,onDismiss:function onDismiss(){console.log("this is dismissed")},action:void 0,loading:!1}};exports.default=ToastMeta,exports.Info=function Info(args){return(0,_jsxRuntime.jsx)(_toast.Toast,Object.assign({},args))},exports.Success=function Success(args){return(0,_jsxRuntime.jsx)(_toast.Toast,Object.assign({},args,{message:"Success message",type:"success"}))},exports.SuccessWithAction=function SuccessWithAction(args){return(0,_jsxRuntime.jsx)(_toast.Toast,Object.assign({},args,{message:"Success message",type:"success",action:function action(){}}))},exports.Warning=function Warning(args){return(0,_jsxRuntime.jsx)(_toast.Toast,Object.assign({},args,{message:"Warning message",type:"warning"}))},exports.Error=function Error(args){return(0,_jsxRuntime.jsx)(_toast.Toast,Object.assign({},args,{message:"Error message",type:"error"}))},exports.Loading=function Loading(args){return(0,_jsxRuntime.jsx)(_toast.Toast,Object.assign({},args,{message:"Loading message",loading:!0}))};module.exports.__namedExportsOrder=["Warning","SuccessWithAction","Success","Loading","Info","Error"]}}]);