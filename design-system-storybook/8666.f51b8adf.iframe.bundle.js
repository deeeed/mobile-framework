(self.webpackChunk_siteed_design_system=self.webpackChunk_siteed_design_system||[]).push([[8666,8348,3574],{"./src/components/pagination/pagination-item.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.PaginationItem=void 0;var _react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Dimensions=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Dimensions/index.js")),_Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}var windowWidth=_Dimensions.default.get("window").width;(exports.PaginationItem=function PaginationItem(_ref){var page=_ref.page,label=_ref.label,isCurrent=_ref.isCurrent,_ref$disabled=_ref.disabled,disabled=void 0!==_ref$disabled&&_ref$disabled,_onPress=_ref.onPress,styles=(0,_react.useMemo)((function(){return function getStyles(){var isMobile=windowWidth<480;return _StyleSheet.default.create({container:{flexDirection:"row",alignItems:"center",padding:10},pageItem:{marginHorizontal:8,paddingVertical:4,paddingHorizontal:12,minWidth:isMobile?44:void 0,minHeight:isMobile?44:void 0,borderRadius:4,borderWidth:1,borderColor:"transparent"},currentPageItem:{borderColor:"blue",backgroundColor:"#f0f8ff"},ellipsis:{fontSize:16},arrow:{fontSize:16,fontWeight:"bold"},pageText:{fontSize:16},pageSizeSelector:{marginLeft:16,padding:4,borderWidth:1,borderRadius:4,borderColor:"gray"}})}()}),[]);return(0,_jsxRuntime.jsx)(_Pressable.default,{style:[styles.pageItem,isCurrent&&styles.currentPageItem],onPress:function onPress(){return _onPress(page)},disabled,children:(0,_jsxRuntime.jsx)(_Text.default,{style:styles.pageText,children:null!=label?label:page})})}).__docgenInfo={description:"",methods:[],displayName:"PaginationItem",props:{page:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},isCurrent:{required:!0,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onPress:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""}}}},"./src/components/pagination/pagination.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.Pagination=void 0;var _slicedToArray2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/slicedToArray.js")),_react=function _interopRequireWildcard(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=_getRequireWildcardCache(r);if(t&&t.has(e))return t.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&{}.hasOwnProperty.call(e,u)){var i=a?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,t&&t.set(e,n),n}(__webpack_require__("./node_modules/react/index.js")),_Keyboard=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Keyboard/index.js")),_Pressable=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Pressable/index.js")),_StyleSheet=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/StyleSheet/index.js")),_Text=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/Text/index.js")),_View=_interopRequireDefault(__webpack_require__("./node_modules/react-native-web/dist/exports/View/index.js")),_useScreenWidth=__webpack_require__("./src/hooks/use-screen-width.tsx"),_textInput=__webpack_require__("./src/components/text-input/text-input.tsx"),_paginationItem=__webpack_require__("./src/components/pagination/pagination-item.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,t=new WeakMap;return(_getRequireWildcardCache=function _getRequireWildcardCache(e){return e?t:r})(e)}(exports.Pagination=function Pagination(_ref2){var current=_ref2.current,_ref2$defaultCurrent=_ref2.defaultCurrent,defaultCurrent=void 0===_ref2$defaultCurrent?1:_ref2$defaultCurrent,pageSize=_ref2.pageSize,_ref2$defaultPageSize=_ref2.defaultPageSize,defaultPageSize=void 0===_ref2$defaultPageSize?10:_ref2$defaultPageSize,_ref2$maxVisiblePages=_ref2.maxVisiblePages,maxVisiblePages=void 0===_ref2$maxVisiblePages?5:_ref2$maxVisiblePages,_ref2$disabled=_ref2.disabled,disabled=void 0!==_ref2$disabled&&_ref2$disabled,_ref2$hideOnSinglePag=_ref2.hideOnSinglePage,hideOnSinglePage=void 0!==_ref2$hideOnSinglePag&&_ref2$hideOnSinglePag,itemRender=_ref2.itemRender,_ref2$pageSizeOptions=_ref2.pageSizeOptions,pageSizeOptions=void 0===_ref2$pageSizeOptions?[10,20,50,100]:_ref2$pageSizeOptions,_ref2$showSizeChanger=_ref2.showSizeChanger,showSizeChanger=void 0!==_ref2$showSizeChanger&&_ref2$showSizeChanger,_ref2$showQuickJumper=_ref2.showQuickJumper,showQuickJumper=void 0!==_ref2$showQuickJumper&&_ref2$showQuickJumper,showTotal=_ref2.showTotal,_ref2$total=_ref2.total,total=void 0===_ref2$total?0:_ref2$total,onChange=_ref2.onChange,onPageSizeChange=_ref2.onPageSizeChange,isMobile=(0,_useScreenWidth.useScreenWidth)()<480,styles=(0,_react.useMemo)((function(){return function getStyles(_ref){var isMobile=_ref.isMobile;return _StyleSheet.default.create({container:{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:10},pageSizeOptionsContainer:{flexDirection:"row",flexWrap:isMobile?"wrap":"nowrap"},pageSizeOption:{marginHorizontal:4,padding:8},paginationContainer:{flexDirection:"row",alignItems:"center",gap:5},pageNumber:{marginHorizontal:4,padding:8},currentPage:{},currentPageText:{fontWeight:"bold",textDecorationLine:"underline"},ellipsis:{fontSize:16},pageIndicator:{fontSize:isMobile?16:14},arrow:{fontSize:isMobile?20:16,fontWeight:"bold",padding:isMobile?16:8},quickJumperContainer:{flexDirection:"row",alignItems:"center"},quickJumperInput:{borderWidth:1,borderColor:"gray",padding:8,marginRight:8,minWidth:60}})}({isMobile})}),[isMobile]),_useState=(0,_react.useState)(null!=current?current:defaultCurrent),_useState2=(0,_slicedToArray2.default)(_useState,2),currentPage=_useState2[0],setCurrentPage=_useState2[1],_useState3=(0,_react.useState)(null!=pageSize?pageSize:defaultPageSize),_useState4=(0,_slicedToArray2.default)(_useState3,2),currentPageSize=_useState4[0],setCurrentPageSize=_useState4[1];(0,_react.useEffect)((function(){void 0!==current&&setCurrentPage(current)}),[current]),(0,_react.useEffect)((function(){void 0!==pageSize&&setCurrentPageSize(pageSize)}),[pageSize]);var totalPages=Math.ceil(total/currentPageSize),_useState5=(0,_react.useState)(""),_useState6=(0,_slicedToArray2.default)(_useState5,2),jumperPage=_useState6[0],setJumperPage=_useState6[1],inputRef=(0,_react.useRef)(null),visiblePages=(0,_react.useMemo)((function(){var startPage,endPage,totalVisiblePages=Math.min(maxVisiblePages,totalPages);if(totalPages<=totalVisiblePages)startPage=1,endPage=totalPages;else{var visiblePagesBeforeCurrent=Math.floor((totalVisiblePages-1)/2);startPage=Math.max(currentPage-visiblePagesBeforeCurrent,1),(endPage=Math.min(startPage+totalVisiblePages-1,totalPages))-startPage<totalVisiblePages-1&&(startPage=Math.max(endPage-(totalVisiblePages-1),1))}var range=Array.from({length:endPage-startPage+1},(function(_,index){return startPage+index}));return startPage>1&&(range.unshift(-1),range.unshift(1)),endPage<totalPages&&(range.push(-1),range.push(totalPages)),range}),[currentPage,totalPages,maxVisiblePages]),handlePageChange=function handlePageChange(page){setCurrentPage(page),null==onChange||onChange(page,currentPageSize)};if(hideOnSinglePage&&totalPages<=1)return null;var renderItem=function renderItem(page,label){return itemRender?itemRender({page,label,originalElement:(0,_jsxRuntime.jsx)(_paginationItem.PaginationItem,{page,label,isCurrent:currentPage===page,onPress:function onPress(){return handlePageChange(page)}},page)}):(0,_jsxRuntime.jsx)(_paginationItem.PaginationItem,{page,label,isCurrent:currentPage===page,onPress:function onPress(){return handlePageChange(page)}},page)},renderTotal=function renderTotal(){if(showTotal){var start=currentPageSize*(currentPage-1)+1,end=Math.min(currentPageSize*currentPage,total);return showTotal(total,[start,end])}return null},handleJump=function handleJump(){var page=Number(jumperPage);page&&page!==currentPage&&page>=1&&page<=totalPages&&(handlePageChange(page),setJumperPage(""),_Keyboard.default.dismiss())};return isMobile?(0,_jsxRuntime.jsxs)(_View.default,{style:styles.container,children:[currentPage>1&&renderItem(currentPage-1,"<"),showTotal?renderTotal():(0,_jsxRuntime.jsxs)(_Text.default,{style:styles.pageIndicator,children:["Page ",currentPage," of ",totalPages]}),currentPage<totalPages&&renderItem(currentPage+1,">")]}):(0,_jsxRuntime.jsxs)(_View.default,{style:styles.container,children:[(0,_jsxRuntime.jsxs)(_View.default,{style:styles.paginationContainer,children:[renderTotal(),renderItem(currentPage-1,"<"),visiblePages.map((function(page){return-1===page?renderItem(page,"..."):renderItem(page)})),renderItem(currentPage+1,">")]}),function renderQuickJumper(){return showQuickJumper?(0,_jsxRuntime.jsxs)(_View.default,{style:styles.quickJumperContainer,children:[(0,_jsxRuntime.jsx)(_textInput.TextInput,{ref:inputRef,style:styles.quickJumperInput,onChangeText:setJumperPage,value:jumperPage,keyboardType:"number-pad",placeholder:"Jump to page",returnKeyType:"go",onSubmitEditing:handleJump,editable:!disabled}),"object"==typeof showQuickJumper&&showQuickJumper.goButton?(0,_jsxRuntime.jsx)(_Pressable.default,{onPress:handleJump,children:showQuickJumper.goButton}):(0,_jsxRuntime.jsx)(_Pressable.default,{onPress:handleJump,disabled,children:(0,_jsxRuntime.jsx)(_Text.default,{children:"Go"})})]}):null}(),function renderPageSizeOptions(){return showSizeChanger?(0,_jsxRuntime.jsx)(_View.default,{style:styles.pageSizeOptionsContainer,children:pageSizeOptions.map((function(size){return(0,_jsxRuntime.jsx)(_Pressable.default,{style:styles.pageSizeOption,onPress:function onPress(){return function handlePageSizeChange(size){setCurrentPageSize(size),null==onPageSizeChange||onPageSizeChange(null!=current?current:1,size)}(Number(size))},disabled,children:(0,_jsxRuntime.jsxs)(_Text.default,{children:[size," / Page"]})},size)}))}):null}()]})}).__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{current:{required:!1,tsType:{name:"number"},description:""},defaultCurrent:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},defaultPageSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxVisiblePages:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}},hideOnSinglePage:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},itemRender:{required:!1,tsType:{name:"signature",type:"function",raw:"(_: {\n  page: number;\n  label?: string;\n  originalElement: React.ReactNode;\n}) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{\n  page: number;\n  label?: string;\n  originalElement: React.ReactNode;\n}",signature:{properties:[{key:"page",value:{name:"number",required:!0}},{key:"label",value:{name:"string",required:!1}},{key:"originalElement",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}},name:"_"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},pageSize:{required:!1,tsType:{name:"number"},description:""},pageSizeOptions:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"Array<number>"},description:"",defaultValue:{value:"[10, 20, 50, 100]",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:""},showQuickJumper:{required:!1,tsType:{name:"union",raw:"boolean | { goButton: React.ReactNode }",elements:[{name:"boolean"},{name:"signature",type:"object",raw:"{ goButton: React.ReactNode }",signature:{properties:[{key:"goButton",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}}]}}]},description:"",defaultValue:{value:"false",computed:!1}},showSizeChanger:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTotal:{required:!1,tsType:{name:"signature",type:"function",raw:"(total: number, range: [number, number]) => React.ReactNode",signature:{arguments:[{type:{name:"number"},name:"total"},{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"range"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},simple:{required:!1,tsType:{name:"boolean"},description:""},size:{required:!1,tsType:{name:"union",raw:"'default' | 'small'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'small'"}]},description:""},total:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number, pageSize: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"pageSize"}],return:{name:"void"}}},description:""},onPageSizeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(current: number, size: number) => void",signature:{arguments:[{type:{name:"number"},name:"current"},{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""}}}},"./src/components/text-input/text-input.tsx":(__unused_webpack_module,exports,__webpack_require__)=>{var _interopRequireDefault=__webpack_require__("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(exports,"__esModule",{value:!0}),exports.TextInput=void 0;var _objectWithoutProperties2=_interopRequireDefault(__webpack_require__("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),_reactNativePaper=(_interopRequireDefault(__webpack_require__("./node_modules/react/index.js")),__webpack_require__("./node_modules/react-native-paper/lib/module/index.js")),_themeProvider=__webpack_require__("./src/providers/theme-provider.tsx"),_jsxRuntime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["mandatory","label"];(exports.TextInput=function TextInput(_ref){var mandatory=_ref.mandatory,label=_ref.label,rest=(0,_objectWithoutProperties2.default)(_ref,_excluded),colors=(0,_themeProvider.useTheme)().colors;return mandatory?(0,_jsxRuntime.jsx)(_reactNativePaper.TextInput,Object.assign({},rest,{style:{color:colors.text},label:(0,_jsxRuntime.jsxs)(_reactNativePaper.Text,{children:[label,(0,_jsxRuntime.jsx)(_reactNativePaper.Text,{style:{color:"red",paddingLeft:5},children:"*"})]})})):(0,_jsxRuntime.jsx)(_reactNativePaper.TextInput,Object.assign({},rest,{label}))}).__docgenInfo={description:"",methods:[],displayName:"TextInput",props:{mandatory:{required:!1,tsType:{name:"boolean"},description:""}},composes:["PTextInputProps"]}}}]);