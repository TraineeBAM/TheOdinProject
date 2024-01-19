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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_todo__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ (() => {

eval("const newToDo = document.getElementById('newToDo');\nnewToDo.addEventListener('click', (e) =>\ndocument.getElementById('formOverlay').style.display = 'flex')\n\nconst closeForm = document.getElementById('cancelFormBtn')\ncloseForm.addEventListener('click', (e) =>{\n    document.getElementById('formOverlay').style.display = 'none';\n    document.getElementById('title').value = '';\n    document.getElementById('description').value = '';\n    document.getElementById('dueDate').value = '';\n})\n\n\nconst submitForm = document.getElementById('submitFormBtn')\nsubmitForm.addEventListener('click', (e) => {\n    const title = document.getElementById('title').value;\n    const priority = document.getElementById('priority').value;\n    const description = document.getElementById('description').value;\n    const dueDate = document.getElementById('dueDate').value;\n    // Ensure form contains info\n    if (title.trim() === '' || priority.trim() === '' || dueDate.trim() === '') {\n        alert('Please fill in all required fields (Title, Description, Due Date).');\n        return;\n    }\n    const toDoItem = createToDoItem(title, priority, description, dueDate);\n    console.log(toDoItem)\n\n    //Creating the content card\n    const contentCardContainer = document.getElementById('contentCardContainer');\n    const contentCard = document.createElement('div');\n    contentCard.classList.add('contentCard')\n    contentCardContainer.appendChild(contentCard);\n    //creating the content card information\n    //title\n    const toDoTitle = document.createElement('div');\n    toDoTitle.classList.add('toDoTitle');\n    toDoTitle.innerText = title;\n    contentCard.appendChild(toDoTitle);\n    //priority\n    const toDoPriority = document.createElement('div');\n    toDoPriority.classList.add('toDoPriority');\n    toDoPriority.innerText = priority;\n    contentCard.appendChild(toDoPriority);\n    //description\n    const toDoText = document.createElement('div');\n    toDoText.classList.add('toDoText');\n    toDoText.innerText = description;\n    contentCard.appendChild(toDoText);\n    //due date\n    const toDoDue = document.createElement('div');\n    toDoDue.classList.add('toDoDue');\n    toDoDue.innerText = dueDate;\n    contentCard.appendChild(toDoDue);\n    //delete button\n    const svgNamespace = 'http://www.w3.org/2000/svg';\n    const toDoDeleteButton = document.createElement('div');\n    toDoDeleteButton.classList.add('toDoDeleteButton');\n    contentCard.appendChild(toDoDeleteButton);\n    const toDoDeleteButtonSVG = document.createElementNS(svgNamespace, 'svg');\n    toDoDeleteButtonSVG.setAttribute('width', '24');\n    toDoDeleteButtonSVG.setAttribute('height', '24');\n    toDoDeleteButtonSVG.setAttribute('viewBox', '0 0 24 24');\n    toDoDeleteButtonSVG.setAttribute('fill', 'none');\n    toDoDeleteButtonSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg');\n    const path = document.createElementNS(svgNamespace, 'path');\n    path.setAttribute('d', 'M16 8L8 16M8.00001 8L16 16M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z');\n    path.setAttribute('stroke', '#000000');\n    path.setAttribute('stroke-width', '1.5');\n    path.setAttribute('stroke-linecap', 'round');\n    path.setAttribute('stroke-linejoin', 'round');\n    toDoDeleteButtonSVG.appendChild(path);\n    toDoDeleteButton.appendChild(toDoDeleteButtonSVG);\n\n    toDoDeleteButtonSVG.addEventListener('click', (e) => {\n        contentCard.remove();\n    })\n    \n    // Clear the form\n    document.getElementById('formOverlay').style.display = 'none';\n    document.getElementById('title').value = '';\n    document.getElementById('description').value = '';\n    document.getElementById('dueDate').value = '';\n})\n\nfunction createToDoItem(title, priority, description, dueDate){\n    return {\n        title : title,\n        priority : priority,\n        description : description,\n        dueDate : dueDate,\n    }\n}\n\n//# sourceURL=webpack://todo/./src/todo.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;