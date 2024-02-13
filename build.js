/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

  "use strict";
  module.exports = require("dotenv");
  
  /***/ }),
  
  /***/ "express":
  /*!**************************!*\
    !*** external "express" ***!
    \**************************/
  /***/ ((module) => {
  
  "use strict";
  module.exports = require("express");
  
  /***/ }),
  
  /***/ "fs":
  /*!*********************!*\
    !*** external "fs" ***!
    \*********************/
  /***/ ((module) => {
  
  "use strict";
  module.exports = require("fs");
  
  /***/ }),
  
  /***/ "http":
  /*!***********************!*\
    !*** external "http" ***!
    \***********************/
  /***/ ((module) => {
  
  "use strict";
  module.exports = require("http");
  
  /***/ }),
  
  /***/ "path":
  /*!***********************!*\
    !*** external "path" ***!
    \***********************/
  /***/ ((module) => {
  
  "use strict";
  module.exports = require("path");
  
  /***/ }),
  
  /***/ "./index.js":
  /*!******************!*\
    !*** ./index.js ***!
    \******************/
  /***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
  
  eval("var express = __webpack_require__(/*! express */ \"express\");\nvar http = __webpack_require__(/*! http */ \"http\");\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nvar updateEnv = __webpack_require__(/*! ./update */ \"./update.js\");\nvar path = __webpack_require__(/*! path */ \"path\");\ndotenv.config({\n  path: './env'\n});\nupdateEnv();\nvar app = express();\nvar port = process.env.PORT || 1010;\napp.get('/get', function (req, res) {\n  res.status(200).send('app is listening');\n});\nvar server = http.createServer(app);\nserver.listen(port, function () {\n  console.log(\"Server is listening on port \".concat(port));\n});\n\n//# sourceURL=webpack://example/./index.js?");
  
  /***/ }),
  
  /***/ "./update.js":
  /*!*******************!*\
    !*** ./update.js ***!
    \*******************/
  /***/ ((module, __unused_webpack_exports, __webpack_require__) => {
  
  eval("var fs = __webpack_require__(/*! fs */ \"fs\");\nvar path = __webpack_require__(/*! path */ \"path\");\nmodule.exports = function () {\n  var configPath = path.join(process.cwd(), 'config.json');\n  console.log('Config path:', configPath);\n  try {\n    var configContent = fs.readFileSync(configPath, 'utf-8');\n    var config = JSON.parse(configContent);\n    for (var key in config) {\n      process.env[key] = config[key];\n    }\n  } catch (error) {\n    console.error('Error reading or parsing config file:', error.message);\n    process.exit(1);\n  }\n};\n\n//# sourceURL=webpack://example/./update.js?");
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	
  /******/ 	// startup
  /******/ 	// Load entry module and return exports
  /******/ 	// This entry module can't be inlined because the eval devtool is used.
  /******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
  /******/ 	module.exports = __webpack_exports__;
  /******/ 	
  /******/ })()
  ;