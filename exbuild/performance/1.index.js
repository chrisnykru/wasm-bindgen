(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: run, __wbg_log_2f31b209cebeaf7d, __wbindgen_object_drop_ref, __wbg_instanceof_Window_04bba8b54ef81db0, __wbg_performance_9d639ac65758f7fe, __wbg_requestStart_c09d570f6aa79e17, __wbg_responseEnd_577daaf47372184a, __wbg_timing_fc96c1432f67876e, __wbg_now_0a117b544a88778f, __wbindgen_is_undefined, __wbindgen_object_clone_ref, __wbg_newnoargs_4f6527054d7f1f1d, __wbg_call_183c0b733b35a027, __wbg_globalThis_eb9027a878db64ad, __wbg_self_69a78003cf074413, __wbg_window_db757fdea9443777, __wbg_global_8efdae4f126ac8b4, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_log_2f31b209cebeaf7d\", function() { return __wbg_log_2f31b209cebeaf7d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_04bba8b54ef81db0\", function() { return __wbg_instanceof_Window_04bba8b54ef81db0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_performance_9d639ac65758f7fe\", function() { return __wbg_performance_9d639ac65758f7fe; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_requestStart_c09d570f6aa79e17\", function() { return __wbg_requestStart_c09d570f6aa79e17; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_responseEnd_577daaf47372184a\", function() { return __wbg_responseEnd_577daaf47372184a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_timing_fc96c1432f67876e\", function() { return __wbg_timing_fc96c1432f67876e; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_now_0a117b544a88778f\", function() { return __wbg_now_0a117b544a88778f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_4f6527054d7f1f1d\", function() { return __wbg_newnoargs_4f6527054d7f1f1d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_183c0b733b35a027\", function() { return __wbg_call_183c0b733b35a027; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_eb9027a878db64ad\", function() { return __wbg_globalThis_eb9027a878db64ad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_69a78003cf074413\", function() { return __wbg_self_69a78003cf074413; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_db757fdea9443777\", function() { return __wbg_window_db757fdea9443777; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_8efdae4f126ac8b4\", function() { return __wbg_global_8efdae4f126ac8b4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet heap_next = heap.length;\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nfunction logError(e) {\n    let error = (function () {\n        try {\n            return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n/**\n*/\nfunction run() {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run\"]();\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction handleError(e) {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n}\n\nconst __wbg_log_2f31b209cebeaf7d = function(arg0, arg1) {\n    try {\n        console.log(getStringFromWasm0(arg0, arg1));\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_instanceof_Window_04bba8b54ef81db0 = function(arg0) {\n    try {\n        var ret = getObject(arg0) instanceof Window;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_performance_9d639ac65758f7fe = function(arg0) {\n    try {\n        var ret = getObject(arg0).performance;\n        return isLikeNone(ret) ? 0 : addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_requestStart_c09d570f6aa79e17 = function(arg0) {\n    try {\n        var ret = getObject(arg0).requestStart;\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_responseEnd_577daaf47372184a = function(arg0) {\n    try {\n        var ret = getObject(arg0).responseEnd;\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_timing_fc96c1432f67876e = function(arg0) {\n    try {\n        var ret = getObject(arg0).timing;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_now_0a117b544a88778f = function(arg0) {\n    try {\n        var ret = getObject(arg0).now();\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbg_newnoargs_4f6527054d7f1f1d = function(arg0, arg1) {\n    try {\n        var ret = new Function(getStringFromWasm0(arg0, arg1));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_call_183c0b733b35a027 = function(arg0, arg1) {\n    try {\n        try {\n            var ret = getObject(arg0).call(getObject(arg1));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_globalThis_eb9027a878db64ad = function() {\n    try {\n        try {\n            var ret = globalThis.globalThis;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_self_69a78003cf074413 = function() {\n    try {\n        try {\n            var ret = self.self;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_window_db757fdea9443777 = function() {\n    try {\n        try {\n            var ret = window.window;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_global_8efdae4f126ac8b4 = function() {\n    try {\n        try {\n            var ret = global.global;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\n_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_start\"]();\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, run, __wbindgen_exn_store, __wbindgen_start */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index.js */ \"./pkg/index.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);