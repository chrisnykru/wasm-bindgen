(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./pkg/index.js":
/*!**********************!*\
  !*** ./pkg/index.js ***!
  \**********************/
/*! exports provided: run, __wbindgen_json_parse, __wbindgen_json_serialize, __wbindgen_object_drop_ref, __wbg_headers_ec2dccbbe29ab556, __wbg_newwithstrandinit_4394f5ba7917f979, __wbg_instanceof_Response_f3ffd534e3e335b2, __wbg_json_977a052f44c56318, __wbindgen_string_new, __wbindgen_object_clone_ref, __wbg_instanceof_Window_04bba8b54ef81db0, __wbg_fetch_3de3c7312223114f, __wbg_set_c2a0afd8b1103899, __wbindgen_cb_drop, __wbindgen_is_undefined, __wbg_set_a6eff7b20941127b, __wbg_newnoargs_4f6527054d7f1f1d, __wbg_call_183c0b733b35a027, __wbg_call_283f884995dd89e7, __wbg_new_fe8db0c1c4a81234, __wbg_new_4b4544fc91638f83, __wbg_resolve_a77ae6f272249390, __wbg_then_695aa7e1c262b929, __wbg_then_bca69bfa503c3179, __wbg_globalThis_eb9027a878db64ad, __wbg_self_69a78003cf074413, __wbg_window_db757fdea9443777, __wbg_global_8efdae4f126ac8b4, __wbindgen_debug_string, __wbindgen_throw, __wbindgen_closure_wrapper1108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"run\", function() { return run; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_parse\", function() { return __wbindgen_json_parse; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_json_serialize\", function() { return __wbindgen_json_serialize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_headers_ec2dccbbe29ab556\", function() { return __wbg_headers_ec2dccbbe29ab556; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newwithstrandinit_4394f5ba7917f979\", function() { return __wbg_newwithstrandinit_4394f5ba7917f979; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Response_f3ffd534e3e335b2\", function() { return __wbg_instanceof_Response_f3ffd534e3e335b2; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_json_977a052f44c56318\", function() { return __wbg_json_977a052f44c56318; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_new\", function() { return __wbindgen_string_new; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_instanceof_Window_04bba8b54ef81db0\", function() { return __wbg_instanceof_Window_04bba8b54ef81db0; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_fetch_3de3c7312223114f\", function() { return __wbg_fetch_3de3c7312223114f; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_c2a0afd8b1103899\", function() { return __wbg_set_c2a0afd8b1103899; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_cb_drop\", function() { return __wbindgen_cb_drop; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_a6eff7b20941127b\", function() { return __wbg_set_a6eff7b20941127b; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_4f6527054d7f1f1d\", function() { return __wbg_newnoargs_4f6527054d7f1f1d; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_183c0b733b35a027\", function() { return __wbg_call_183c0b733b35a027; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_283f884995dd89e7\", function() { return __wbg_call_283f884995dd89e7; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_fe8db0c1c4a81234\", function() { return __wbg_new_fe8db0c1c4a81234; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_new_4b4544fc91638f83\", function() { return __wbg_new_4b4544fc91638f83; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_resolve_a77ae6f272249390\", function() { return __wbg_resolve_a77ae6f272249390; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_695aa7e1c262b929\", function() { return __wbg_then_695aa7e1c262b929; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_then_bca69bfa503c3179\", function() { return __wbg_then_bca69bfa503c3179; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_globalThis_eb9027a878db64ad\", function() { return __wbg_globalThis_eb9027a878db64ad; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_self_69a78003cf074413\", function() { return __wbg_self_69a78003cf074413; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_window_db757fdea9443777\", function() { return __wbg_window_db757fdea9443777; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_global_8efdae4f126ac8b4\", function() { return __wbg_global_8efdae4f126ac8b4; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_debug_string\", function() { return __wbindgen_debug_string; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_closure_wrapper1108\", function() { return __wbindgen_closure_wrapper1108; });\n/* harmony import */ var _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index_bg.wasm */ \"./pkg/index_bg.wasm\");\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachegetUint8Memory0 = null;\nfunction getUint8Memory0() {\n    if (cachegetUint8Memory0 === null || cachegetUint8Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory0 = new Uint8Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n\nconst heap = new Array(32).fill(undefined);\n\nheap.push(undefined, null, true, false);\n\nlet heap_next = heap.length;\n\nfunction addHeapObject(obj) {\n    if (heap_next === heap.length) heap.push(heap.length + 1);\n    const idx = heap_next;\n    heap_next = heap[idx];\n\n    if (typeof(heap_next) !== 'number') throw new Error('corrupt heap');\n\n    heap[idx] = obj;\n    return idx;\n}\n\nfunction getObject(idx) { return heap[idx]; }\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (typeof(arg) !== 'string') throw new Error('expected a string argument');\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length);\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len);\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n        if (ret.read !== arg.length) throw new Error('failed to pass whole string');\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachegetInt32Memory0 = null;\nfunction getInt32Memory0() {\n    if (cachegetInt32Memory0 === null || cachegetInt32Memory0.buffer !== _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory0 = new Int32Array(_index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory0;\n}\n\nfunction dropObject(idx) {\n    if (idx < 36) return;\n    heap[idx] = heap_next;\n    heap_next = idx;\n}\n\nfunction takeObject(idx) {\n    const ret = getObject(idx);\n    dropObject(idx);\n    return ret;\n}\n\nfunction _assertBoolean(n) {\n    if (typeof(n) !== 'boolean') {\n        throw new Error('expected a boolean argument');\n    }\n}\n\nfunction debugString(val) {\n    // primitive types\n    const type = typeof val;\n    if (type == 'number' || type == 'boolean' || val == null) {\n        return  `${val}`;\n    }\n    if (type == 'string') {\n        return `\"${val}\"`;\n    }\n    if (type == 'symbol') {\n        const description = val.description;\n        if (description == null) {\n            return 'Symbol';\n        } else {\n            return `Symbol(${description})`;\n        }\n    }\n    if (type == 'function') {\n        const name = val.name;\n        if (typeof name == 'string' && name.length > 0) {\n            return `Function(${name})`;\n        } else {\n            return 'Function';\n        }\n    }\n    // objects\n    if (Array.isArray(val)) {\n        const length = val.length;\n        let debug = '[';\n        if (length > 0) {\n            debug += debugString(val[0]);\n        }\n        for(let i = 1; i < length; i++) {\n            debug += ', ' + debugString(val[i]);\n        }\n        debug += ']';\n        return debug;\n    }\n    // Test for built-in\n    const builtInMatches = /\\[object ([^\\]]+)\\]/.exec(toString.call(val));\n    let className;\n    if (builtInMatches.length > 1) {\n        className = builtInMatches[1];\n    } else {\n        // Failed to match the standard '[object ClassName]'\n        return toString.call(val);\n    }\n    if (className == 'Object') {\n        // we're a user defined class or Object\n        // JSON.stringify avoids problems with cycles, and is generally much\n        // easier than looping through ownProperties of `val`.\n        try {\n            return 'Object(' + JSON.stringify(val) + ')';\n        } catch (_) {\n            return 'Object';\n        }\n    }\n    // errors\n    if (val instanceof Error) {\n        return `${val.name}: ${val.message}\\n${val.stack}`;\n    }\n    // TODO we could test for more things here, like `Set`s and `Map`s.\n    return className;\n}\n\nfunction makeMutClosure(arg0, arg1, dtor, f) {\n    const state = { a: arg0, b: arg1, cnt: 1 };\n    const real = (...args) => {\n        // First up with a closure we increment the internal reference\n        // count. This ensures that the Rust closure environment won't\n        // be deallocated while we're invoking it.\n        state.cnt++;\n        const a = state.a;\n        state.a = 0;\n        try {\n            return f(a, state.b, ...args);\n        } finally {\n            if (--state.cnt === 0) _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_export_2\"].get(dtor)(a, state.b);\n            else state.a = a;\n        }\n    };\n    real.original = state;\n    return real;\n}\n\nfunction logError(e) {\n    let error = (function () {\n        try {\n            return e instanceof Error ? `${e.message}\\n\\nStack:\\n${e.stack}` : e.toString();\n        } catch(_) {\n            return \"<failed to stringify thrown value>\";\n        }\n    }());\n    console.error(\"wasm-bindgen: imported JS function that was not marked as `catch` threw an error:\", error);\n    throw e;\n}\n\nfunction _assertNum(n) {\n    if (typeof(n) !== 'number') throw new Error('expected a number argument');\n}\nfunction __wbg_adapter_20(arg0, arg1, arg2) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"_dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h61004711d2f9d43e\"](arg0, arg1, addHeapObject(arg2));\n}\n\n/**\n* @param {string} repo\n* @returns {any}\n*/\nfunction run(repo) {\n    var ptr0 = passStringToWasm0(repo, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    var ret = _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"run\"](ptr0, len0);\n    return takeObject(ret);\n}\n\nfunction handleError(e) {\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_exn_store\"](addHeapObject(e));\n}\nfunction __wbg_adapter_46(arg0, arg1, arg2, arg3) {\n    _assertNum(arg0);\n    _assertNum(arg1);\n    _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"wasm_bindgen__convert__closures__invoke2_mut__h06510de029f50dc6\"](arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));\n}\n\nconst __wbindgen_json_parse = function(arg0, arg1) {\n    var ret = JSON.parse(getStringFromWasm0(arg0, arg1));\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_json_serialize = function(arg0, arg1) {\n    const obj = getObject(arg1);\n    var ret = JSON.stringify(obj === undefined ? null : obj);\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_object_drop_ref = function(arg0) {\n    takeObject(arg0);\n};\n\nconst __wbg_headers_ec2dccbbe29ab556 = function(arg0) {\n    try {\n        var ret = getObject(arg0).headers;\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_newwithstrandinit_4394f5ba7917f979 = function(arg0, arg1, arg2) {\n    try {\n        try {\n            var ret = new Request(getStringFromWasm0(arg0, arg1), getObject(arg2));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_instanceof_Response_f3ffd534e3e335b2 = function(arg0) {\n    try {\n        var ret = getObject(arg0) instanceof Response;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_json_977a052f44c56318 = function(arg0) {\n    try {\n        try {\n            var ret = getObject(arg0).json();\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_string_new = function(arg0, arg1) {\n    var ret = getStringFromWasm0(arg0, arg1);\n    return addHeapObject(ret);\n};\n\nconst __wbindgen_object_clone_ref = function(arg0) {\n    var ret = getObject(arg0);\n    return addHeapObject(ret);\n};\n\nconst __wbg_instanceof_Window_04bba8b54ef81db0 = function(arg0) {\n    try {\n        var ret = getObject(arg0) instanceof Window;\n        _assertBoolean(ret);\n        return ret;\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_fetch_3de3c7312223114f = function(arg0, arg1) {\n    try {\n        var ret = getObject(arg0).fetch(getObject(arg1));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_set_c2a0afd8b1103899 = function(arg0, arg1, arg2, arg3, arg4) {\n    try {\n        try {\n            getObject(arg0).set(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_cb_drop = function(arg0) {\n    const obj = takeObject(arg0).original;\n    if (obj.cnt-- == 1) {\n        obj.a = 0;\n        return true;\n    }\n    var ret = false;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbindgen_is_undefined = function(arg0) {\n    var ret = getObject(arg0) === undefined;\n    _assertBoolean(ret);\n    return ret;\n};\n\nconst __wbg_set_a6eff7b20941127b = function(arg0, arg1, arg2) {\n    try {\n        try {\n            var ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));\n            _assertBoolean(ret);\n            return ret;\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_newnoargs_4f6527054d7f1f1d = function(arg0, arg1) {\n    try {\n        var ret = new Function(getStringFromWasm0(arg0, arg1));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_call_183c0b733b35a027 = function(arg0, arg1) {\n    try {\n        try {\n            var ret = getObject(arg0).call(getObject(arg1));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_call_283f884995dd89e7 = function(arg0, arg1, arg2) {\n    try {\n        try {\n            var ret = getObject(arg0).call(getObject(arg1), getObject(arg2));\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_new_fe8db0c1c4a81234 = function() {\n    try {\n        var ret = new Object();\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_new_4b4544fc91638f83 = function(arg0, arg1) {\n    try {\n        try {\n            var state0 = {a: arg0, b: arg1};\n            var cb0 = (arg0, arg1) => {\n                const a = state0.a;\n                state0.a = 0;\n                try {\n                    return __wbg_adapter_46(a, state0.b, arg0, arg1);\n                } finally {\n                    state0.a = a;\n                }\n            };\n            var ret = new Promise(cb0);\n            return addHeapObject(ret);\n        } finally {\n            state0.a = state0.b = 0;\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_resolve_a77ae6f272249390 = function(arg0) {\n    try {\n        var ret = Promise.resolve(getObject(arg0));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_then_695aa7e1c262b929 = function(arg0, arg1) {\n    try {\n        var ret = getObject(arg0).then(getObject(arg1));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_then_bca69bfa503c3179 = function(arg0, arg1, arg2) {\n    try {\n        var ret = getObject(arg0).then(getObject(arg1), getObject(arg2));\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_globalThis_eb9027a878db64ad = function() {\n    try {\n        try {\n            var ret = globalThis.globalThis;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_self_69a78003cf074413 = function() {\n    try {\n        try {\n            var ret = self.self;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_window_db757fdea9443777 = function() {\n    try {\n        try {\n            var ret = window.window;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbg_global_8efdae4f126ac8b4 = function() {\n    try {\n        try {\n            var ret = global.global;\n            return addHeapObject(ret);\n        } catch (e) {\n            handleError(e)\n        }\n    } catch (e) {\n        logError(e)\n    }\n};\n\nconst __wbindgen_debug_string = function(arg0, arg1) {\n    var ret = debugString(getObject(arg1));\n    var ptr0 = passStringToWasm0(ret, _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"], _index_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"]);\n    var len0 = WASM_VECTOR_LEN;\n    getInt32Memory0()[arg0 / 4 + 1] = len0;\n    getInt32Memory0()[arg0 / 4 + 0] = ptr0;\n};\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm0(arg0, arg1));\n};\n\nconst __wbindgen_closure_wrapper1108 = function(arg0, arg1, arg2) {\n    try {\n        var ret = makeMutClosure(arg0, arg1, 42, __wbg_adapter_20);\n        return addHeapObject(ret);\n    } catch (e) {\n        logError(e)\n    }\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"], __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"../../node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./pkg/index.js?");

/***/ }),

/***/ "./pkg/index_bg.wasm":
/*!***************************!*\
  !*** ./pkg/index_bg.wasm ***!
  \***************************/
/*! exports provided: memory, run, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_export_2, _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h61004711d2f9d43e, __wbindgen_exn_store, wasm_bindgen__convert__closures__invoke2_mut__h06510de029f50dc6 */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./index.js */ \"./pkg/index.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./pkg/index_bg.wasm?");

/***/ })

}]);