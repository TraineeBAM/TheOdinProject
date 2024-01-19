/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createToDoItem: () => (/* binding */ createToDoItem)\n/* harmony export */ });\nconst newToDo = document.getElementById('newToDo');\nnewToDo.addEventListener('click', (e) =>\ndocument.getElementById('formOverlay').style.display = 'flex')\n\nconst closeForm = document.getElementById('cancelFormBtn')\ncloseForm.addEventListener('click', (e) =>{\n    document.getElementById('formOverlay').style.display = 'none';\n    document.getElementById('title').value = '';\n    document.getElementById('description').value = '';\n    document.getElementById('dueDate').value = '';\n})\n\n\nconst submitForm = document.getElementById('submitFormBtn')\nsubmitForm.addEventListener('click', (e) => {\n    const title = document.getElementById('title').value;\n    const priority = document.getElementById('priority').value;\n    const description = document.getElementById('description').value;\n    const dueDate = document.getElementById('dueDate').value;\n    // Ensure form contains info\n    if (title.trim() === '' || priority.trim() === '' || dueDate.trim() === '') {\n        alert('Please fill in all required fields (Title, Priority, Due Date).');\n        return;\n    }\n    const toDoItem = createToDoItem(title, priority, description, dueDate);\n    console.log(toDoItem)\n\n    //Creating the content card\n    const contentCardContainer = document.getElementById('contentCardContainer');\n    const contentCard = document.createElement('div');\n    contentCard.classList.add('contentCard')\n    contentCardContainer.appendChild(contentCard);\n    //creating the content card information\n    //title\n    const toDoTitle = document.createElement('div');\n    toDoTitle.classList.add('toDoTitle');\n    toDoTitle.innerText = title;\n    contentCard.appendChild(toDoTitle);\n    //priority\n    const toDoPriority = document.createElement('div');\n    toDoPriority.classList.add('toDoPriority');\n    toDoPriority.innerText = priority;\n    contentCard.appendChild(toDoPriority);\n    //description\n    const toDoText = document.createElement('div');\n    toDoText.classList.add('toDoText');\n    toDoText.innerText = description;\n    contentCard.appendChild(toDoText);\n    //due date\n    const toDoDue = document.createElement('div');\n    toDoDue.classList.add('toDoDue');\n    toDoDue.innerText = dueDate;\n    contentCard.appendChild(toDoDue);\n\n    \n    \n    // Clear the form\n    document.getElementById('formOverlay').style.display = 'none';\n    document.getElementById('title').value = '';\n    document.getElementById('description').value = '';\n    document.getElementById('dueDate').value = '';\n})\n\nfunction createToDoItem(title, priority, description, dueDate){\n    return {\n        title : title,\n        priority : priority,\n        description : description,\n        dueDate : dueDate,\n    }\n}\n\n\n\n//# sourceURL=webpack://todo/./src/todo.js?");

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