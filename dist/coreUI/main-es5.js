(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\frenk\WORK_AREA\coreui-free-angular-admin-template\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2ayI":
    /*!**********************************************!*\
      !*** ./src/app/services/tutorial.service.ts ***!
      \**********************************************/

    /*! exports provided: TutorialService */

    /***/
    function ayI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TutorialService", function () {
        return TutorialService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "wD+u");

      var TutorialService = /*#__PURE__*/function () {
        function TutorialService(db) {
          _classCallCheck(this, TutorialService);

          this.db = db;
          this.dbPath = '/itemsList';
          this.tutorialsRef = db.collection(this.dbPath);
          console.log("TEST: " + this.tutorialsRef);
        }

        _createClass(TutorialService, [{
          key: "getAll",
          value: function getAll() {
            return this.tutorialsRef;
          }
        }, {
          key: "create",
          value: function create(tutorial) {
            return this.tutorialsRef.add(Object.assign({}, tutorial));
          }
        }, {
          key: "update",
          value: function update(id, data) {
            return this.tutorialsRef.doc(id).update(data);
          }
        }, {
          key: "delete",
          value: function _delete(id) {
            return this.tutorialsRef.doc(id)["delete"]();
          }
        }]);

        return TutorialService;
      }();

      TutorialService.ctorParameters = function () {
        return [{
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]
        }];
      };

      TutorialService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])], TutorialService);
      /***/
    },

    /***/
    "4Fcd":
    /*!******************************************************!*\
      !*** ./src/app/task-dialog/task-dialog.component.ts ***!
      \******************************************************/

    /*! exports provided: TaskDialogComponent */

    /***/
    function Fcd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TaskDialogComponent", function () {
        return TaskDialogComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_task_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./task-dialog.component.html */
      "DM8E");
      /* harmony import */


      var _task_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./task-dialog.component.css */
      "UQEc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");

      var TaskDialogComponent = /*#__PURE__*/function () {
        function TaskDialogComponent(dialogRef, data) {
          _classCallCheck(this, TaskDialogComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.backupTask = Object.assign({}, this.data.task);
        }

        _createClass(TaskDialogComponent, [{
          key: "cancel",
          value: function cancel() {
            this.data.task.title = this.backupTask.title;
            this.data.task.description = this.backupTask.description;
            this.dialogRef.close(this.data);
          }
        }]);

        return TaskDialogComponent;
      }();

      TaskDialogComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
          }]
        }];
      };

      TaskDialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-task-dialog',
        template: _raw_loader_task_dialog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_task_dialog_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])], TaskDialogComponent);
      /***/
    },

    /***/
    "4XPS":
    /*!******************************************************!*\
      !*** ./src/app/views/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "bVw4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var RegisterComponent = function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      };

      RegisterComponent.ctorParameters = function () {
        return [];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RegisterComponent);
      /***/
    },

    /***/
    "8gg5":
    /*!**********************************************!*\
      !*** ./src/app/views/error/404.component.ts ***!
      \**********************************************/

    /*! exports provided: P404Component */

    /***/
    function gg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./404.component.html */
      "nAJl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P404Component = function P404Component() {
        _classCallCheck(this, P404Component);
      };

      P404Component.ctorParameters = function () {
        return [];
      };

      P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P404Component);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        firebase: {
          apiKey: "AIzaSyBKhVDuTZEDlZFqMj_aW7-otDbk87e2dqs",
          authDomain: "provacontainer001.firebaseapp.com",
          databaseURL: "https://provacontainer001-default-rtdb.firebaseio.com",
          projectId: "provacontainer001",
          storageBucket: "provacontainer001.appspot.com",
          messagingSenderId: "595800346753",
          appId: "1:595800346753:web:b16f29d6b4d632c2a67d80",
          measurementId: "G-VXC33SX5GQ"
        }
      };
      /***/
    },

    /***/
    "DM8E":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/task-dialog/task-dialog.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function DM8E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<mat-form-field>\n    <mat-label>Title</mat-label>\n    <input matInput cdkFocusInitial [(ngModel)]=\"data.task.title\" />\n</mat-form-field>\n\n<mat-form-field>\n    <mat-label>Description</mat-label>\n    <textarea matInput [(ngModel)]=\"data.task.description\"></textarea>\n</mat-form-field>\n\n<div mat-dialog-actions>\n    <button mat-button [mat-dialog-close]=\"{ task: data.task }\">OK</button>\n    <button mat-button (click)=\"cancel()\">Cancel</button>\n    <button *ngIf=\"data.enableDelete\" mat-fab color=\"primary\" aria-label=\"Delete\"\n        [mat-dialog-close]=\"{ task: data.task, delete: true }\">\n        <mat-icon>delete</mat-icon>\n    </button>\n</div>";
      /***/
    },

    /***/
    "DodC":
    /*!****************************************************!*\
      !*** ./src/app/containers/default-layout/index.ts ***!
      \****************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function DodC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout.component */
      "JPqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "G/4p":
    /*!*************************************!*\
      !*** ./src/app/containers/index.ts ***!
      \*************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function G4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout */
      "DodC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "JPqG":
    /*!***********************************************************************!*\
      !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
      \***********************************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function JPqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return DefaultLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./default-layout.component.html */
      "lm8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_nav */
      "c2Qq");

      var DefaultLayoutComponent = /*#__PURE__*/function () {
        function DefaultLayoutComponent() {
          _classCallCheck(this, DefaultLayoutComponent);

          this.sidebarMinimized = false;
          this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        }

        _createClass(DefaultLayoutComponent, [{
          key: "toggleMinimize",
          value: function toggleMinimize(e) {
            this.sidebarMinimized = e;
          }
        }]);

        return DefaultLayoutComponent;
      }();

      DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], DefaultLayoutComponent);
      /***/
    },

    /***/
    "KpwC":
    /*!******************************************************************!*\
      !*** ./src/app/views/tutorials-list/tutorials-list.component.ts ***!
      \******************************************************************/

    /*! exports provided: TutorialsListComponent */

    /***/
    function KpwC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TutorialsListComponent", function () {
        return TutorialsListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tutorials_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tutorials-list.component.html */
      "kciH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _services_tutorial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./../../services/tutorial.service */
      "2ayI");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var TutorialsListComponent = /*#__PURE__*/function () {
        function TutorialsListComponent(tutorialService) {
          _classCallCheck(this, TutorialsListComponent);

          this.tutorialService = tutorialService;
          this.currentIndex = -1;
          this.title = '';
          this.HEROES = [{
            id: 1,
            name: 'Superman'
          }, {
            id: 2,
            name: 'Batman'
          }, {
            id: 5,
            name: 'BatGirl'
          }, {
            id: 3,
            name: 'Robin'
          }, {
            id: 4,
            name: 'Flash'
          }];
        }

        _createClass(TutorialsListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.retrieveTutorials();
          }
        }, {
          key: "refreshList",
          value: function refreshList() {
            this.currentTutorial = undefined;
            this.currentIndex = -1;
            this.retrieveTutorials();
          }
        }, {
          key: "retrieveTutorials",
          value: function retrieveTutorials() {
            var _this = this;

            this.tutorialService.getAll().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  id: c.payload.doc.id
                }, c.payload.doc.data());
              });
            })).subscribe(function (data) {
              _this.tutorials = data;
            });
          }
        }, {
          key: "setActiveTutorial",
          value: function setActiveTutorial(tutorial, index) {
            this.currentTutorial = tutorial;
            this.currentIndex = index;
          }
        }]);

        return TutorialsListComponent;
      }();

      TutorialsListComponent.ctorParameters = function () {
        return [{
          type: _services_tutorial_service__WEBPACK_IMPORTED_MODULE_3__["TutorialService"]
        }];
      };

      TutorialsListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-tutorials-list',
        template: _raw_loader_tutorials_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_tutorial_service__WEBPACK_IMPORTED_MODULE_3__["TutorialService"]])], TutorialsListComponent);
      /***/
    },

    /***/
    "Lrxh":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lrxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "QB/w":
    /*!************************************************!*\
      !*** ./src/app/views/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "nSew");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var LoginComponent = function LoginComponent() {
        _classCallCheck(this, LoginComponent);
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], LoginComponent);
      /***/
    },

    /***/
    "QHEE":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kaban-list/kaban-list.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function QHEE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!--\n Copyright 2020 Google LLC\n\n Licensed under the Apache License, Version 2.0 (the \"License\");\n you may not use this file except in compliance with the License.\n You may obtain a copy of the License at\n\n      http://www.apache.org/licenses/LICENSE-2.0\n\n Unless required by applicable law or agreed to in writing, software\n distributed under the License is distributed on an \"AS IS\" BASIS,\n WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n See the License for the specific language governing permissions and\n limitations under the License.\n-->\n\n<mat-toolbar color=\"primary\">\n    <mat-icon>local_fire_department</mat-icon>\n    <span>Kanban Fire</span>\n  </mat-toolbar>\n  \n  <div class=\"content-wrapper\">\n    <button (click)=\"newTask()\" mat-button>\n      <mat-icon>add</mat-icon> Add Task\n    </button>\n  \n    <div class=\"container-wrapper\">\n      <div class=\"container\">\n        <h2>Backlog</h2>\n  \n        <mat-card\n          cdkDropList\n          id=\"todo\"\n          orientation=\"horizontal\"\n          #todoList=\"cdkDropList\"\n          [cdkDropListData]=\"todo | async\"\n          [cdkDropListConnectedTo]=\"[doneList, inProgressList]\"\n          (cdkDropListDropped)=\"drop($event)\"\n          class=\"list\">\n          <p class=\"empty-label\" *ngIf=\"(todo | async)?.length === 0\">Lista vuota</p>\n          <app-task (edit)=\"editTask('todo', $event)\" *ngFor=\"let task of todo | async\" cdkDrag ></app-task>\n        </mat-card>\n      </div>\n  \n      <div class=\"container\">\n        <h2>In corso</h2>\n  \n        <mat-card\n          cdkDropList\n          id=\"inProgress\"\n          #inProgressList=\"cdkDropList\"\n          [cdkDropListData]=\"inProgress | async\"\n          [cdkDropListConnectedTo]=\"[todoList, doneList]\"\n          (cdkDropListDropped)=\"drop($event)\"\n          class=\"list\">\n          <p class=\"empty-label\" *ngIf=\"(inProgress | async)?.length === 0\">Empty list</p>\n         \n        </mat-card>\n      </div>\n  \n      <div class=\"container\">\n        <h2>Done</h2>\n  \n        <mat-card\n          cdkDropList\n          id=\"done\"\n          #doneList=\"cdkDropList\"\n          [cdkDropListData]=\"done | async\"\n          [cdkDropListConnectedTo]=\"[todoList, inProgressList]\"\n          (cdkDropListDropped)=\"drop($event)\"\n          class=\"list\">\n          <p class=\"empty-label\" *ngIf=\"(done | async)?.length === 0\">Empty list</p>\n          <app-task (edit)=\"editTask('done', $event)\" *ngFor=\"let task of done | async\" cdkDrag [task]=\"task\"></app-task>\n        </mat-card>\n      </div>\n    </div>\n  </div>";
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons */
      "t17N");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, iconSet) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.iconSet = iconSet; // iconSet singleton

          iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: 'body',
        template: '<router-outlet></router-outlet>',
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])], AppComponent);
      /***/
    },

    /***/
    "UQEc":
    /*!*******************************************************!*\
      !*** ./src/app/task-dialog/task-dialog.component.css ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function UQEc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "UflT":
    /*!****************************************************!*\
      !*** ./src/app/kaban-list/kaban-list.component.ts ***!
      \****************************************************/

    /*! exports provided: KabanListComponent */

    /***/
    function UflT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KabanListComponent", function () {
        return KabanListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_kaban_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./kaban-list.component.html */
      "QHEE");
      /* harmony import */


      var _kaban_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./kaban-list.component.scss */
      "kDZj");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../task-dialog/task-dialog.component */
      "4Fcd");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "wD+u");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      "qCKp");

      var getObservable = function getObservable(collection) {
        var subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]([]);
        collection.valueChanges({
          idField: 'id'
        }).subscribe(function (val) {
          subject.next(val);
        });
        return subject;
      };

      var KabanListComponent = /*#__PURE__*/function () {
        function KabanListComponent(dialog, store) {
          _classCallCheck(this, KabanListComponent);

          this.dialog = dialog;
          this.store = store;
          this.todo = getObservable(this.store.collection('todo'));
          this.inProgress = getObservable(this.store.collection('inProgress'));
          this.done = getObservable(this.store.collection('done'));
        }

        _createClass(KabanListComponent, [{
          key: "newTask",
          value: function newTask() {
            var _this2 = this;

            var dialogRef = this.dialog.open(_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TaskDialogComponent"], {
              width: '270px',
              data: {
                task: {}
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (!result) {
                return;
              }

              _this2.store.collection('todo').add(result.task);
            });
          }
        }, {
          key: "editTask",
          value: function editTask(list, task) {
            var _this3 = this;

            var dialogRef = this.dialog.open(_task_dialog_task_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TaskDialogComponent"], {
              width: '270px',
              data: {
                task: task,
                enableDelete: true
              }
            });
            dialogRef.afterClosed().subscribe(function (result) {
              if (!result) {
                return;
              }

              if (result["delete"]) {
                _this3.store.collection(list).doc(task.id)["delete"]();
              } else {
                _this3.store.collection(list).doc(task.id).update(task);
              }
            });
          }
        }, {
          key: "drop",
          value: function drop(event) {
            var _this4 = this;

            if (event.previousContainer === event.container) {
              return;
            }

            if (!event.previousContainer.data || !event.container.data) {
              return;
            }

            var item = event.previousContainer.data[event.previousIndex];
            this.store.firestore.runTransaction(function () {
              var promise = Promise.all([_this4.store.collection(event.previousContainer.id).doc(item.id)["delete"](), _this4.store.collection(event.container.id).add(item)]);
              return promise;
            });
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          }
        }]);

        return KabanListComponent;
      }();

      KabanListComponent.ctorParameters = function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
        }, {
          type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
        }];
      };

      KabanListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-kaban-list',
        template: _raw_loader_kaban_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_kaban_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]])], KabanListComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _angular_fire__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/fire */
      "jmUF");
      /* harmony import */


      var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/fire/firestore */
      "wD+u");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../environments/environment */
      "AytR");
      /* harmony import */


      var _views_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/tutorials-list/tutorials-list.component */
      "KpwC");
      /* harmony import */


      var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/toolbar */
      "l0rg");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/cdk/drag-drop */
      "ltgo");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _kaban_list_kaban_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./kaban-list/kaban-list.component */
      "UflT");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      }; // Import containers

      var APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutComponent"]]; // Import routing module
      // Import 3rd party components

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_25__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_25__["AppBreadcrumbModule"].forRoot(), _coreui_angular__WEBPACK_IMPORTED_MODULE_25__["AppFooterModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_25__["AppHeaderModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_25__["AppSidebarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_27__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_28__["TabsModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_29__["ChartsModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetModule"].forRoot(), _angular_fire__WEBPACK_IMPORTED_MODULE_7__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase), _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_8__["AngularFirestoreModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["DragDropModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInputModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]].concat(APP_CONTAINERS, [_views_error_404_component__WEBPACK_IMPORTED_MODULE_21__["P404Component"], _views_error_500_component__WEBPACK_IMPORTED_MODULE_22__["P500Component"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_23__["LoginComponent"], _views_register_register_component__WEBPACK_IMPORTED_MODULE_24__["RegisterComponent"], _views_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_10__["TutorialsListComponent"], _kaban_list_kaban_list_component__WEBPACK_IMPORTED_MODULE_30__["KabanListComponent"]]),
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"]
        }, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "bVw4":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bVw4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\r\n  <main class=\"main d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n          <div class=\"card mx-4\">\r\n            <div class=\"card-body p-4\">\r\n              <form>\r\n                <h1>Register</h1>\r\n                <p class=\"text-muted\">Create your account</p>\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\r\n                </div>\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">@</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" required>\r\n                </div>\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                  </div>\r\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"new-password\" required>\r\n                </div>\r\n                <div class=\"input-group mb-4\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                  </div>\r\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" autocomplete=\"new-password\" required>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\r\n              </form>\r\n            </div>\r\n            <div class=\"card-footer p-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n";
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS");
      /* harmony import */


      var _views_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/tutorials-list/tutorials-list.component */
      "KpwC");
      /* harmony import */


      var _kaban_list_kaban_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./kaban-list/kaban-list.component */
      "UflT"); // Import Containers


      var routes = [{
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }, {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
          title: 'Page 404'
        }
      }, {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
          title: 'Page 500'
        }
      }, {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
          title: 'Login Page'
        }
      }, {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
        data: {
          title: 'Register Page'
        }
      }, {
        path: 'testpage001',
        component: _views_tutorials_list_tutorials_list_component__WEBPACK_IMPORTED_MODULE_8__["TutorialsListComponent"],
        data: {
          title: 'Tutorials List Component'
        }
      }, {
        path: 'testpage002',
        component: _kaban_list_kaban_list_component__WEBPACK_IMPORTED_MODULE_9__["KabanListComponent"],
        data: {
          title: 'Kaban List Component'
        }
      }, {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
          title: 'Home'
        },
        children: [{
          path: 'base',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-base-base-module */
            "views-base-base-module").then(__webpack_require__.bind(null,
            /*! ./views/base/base.module */
            "Cvcy")).then(function (m) {
              return m.BaseModule;
            });
          }
        }, {
          path: 'buttons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-buttons-buttons-module */
            "views-buttons-buttons-module").then(__webpack_require__.bind(null,
            /*! ./views/buttons/buttons.module */
            "Reju")).then(function (m) {
              return m.ButtonsModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-chartjs-chartjs-module */
            "views-chartjs-chartjs-module").then(__webpack_require__.bind(null,
            /*! ./views/chartjs/chartjs.module */
            "Y+KY")).then(function (m) {
              return m.ChartJSModule;
            });
          }
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-dashboard-dashboard-module */
            [__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("common"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./views/dashboard/dashboard.module */
            "6dU7")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-icons-icons-module */
            "views-icons-icons-module").then(__webpack_require__.bind(null,
            /*! ./views/icons/icons.module */
            "aPNi")).then(function (m) {
              return m.IconsModule;
            });
          }
        }, {
          path: 'notifications',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-notifications-notifications-module */
            "views-notifications-notifications-module").then(__webpack_require__.bind(null,
            /*! ./views/notifications/notifications.module */
            "KpDv")).then(function (m) {
              return m.NotificationsModule;
            });
          }
        }, {
          path: 'theme',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-theme-theme-module */
            [__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("views-theme-theme-module")]).then(__webpack_require__.bind(null,
            /*! ./views/theme/theme.module */
            "AgMk")).then(function (m) {
              return m.ThemeModule;
            });
          }
        }, {
          path: 'widgets',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-widgets-widgets-module */
            [__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("common"), __webpack_require__.e("views-widgets-widgets-module")]).then(__webpack_require__.bind(null,
            /*! ./views/widgets/widgets.module */
            "XVX6")).then(function (m) {
              return m.WidgetsModule;
            });
          }
        }]
      }, {
        path: '**',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "c2Qq":
    /*!*************************!*\
      !*** ./src/app/_nav.ts ***!
      \*************************/

    /*! exports provided: navItems */

    /***/
    function c2Qq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navItems", function () {
        return navItems;
      });

      var navItems = [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }, {
        title: true,
        name: 'Theme'
      }, {
        name: 'Colors',
        url: '/theme/colors',
        icon: 'icon-drop'
      }, {
        name: 'Typography',
        url: '/theme/typography',
        icon: 'icon-pencil'
      }, {
        title: true,
        name: 'Components'
      }, {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [{
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle'
        }, {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        }, {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle'
        }, {
          name: 'Forms',
          url: '/base/forms',
          icon: 'icon-puzzle'
        }, {
          name: 'Navbars',
          url: '/base/navbars',
          icon: 'icon-puzzle'
        }, {
          name: 'Pagination',
          url: '/base/paginations',
          icon: 'icon-puzzle'
        }, {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle'
        }, {
          name: 'Progress',
          url: '/base/progress',
          icon: 'icon-puzzle'
        }, {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle'
        }, {
          name: 'Tables',
          url: '/base/tables',
          icon: 'icon-puzzle'
        }, {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle'
        }, {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle'
        }]
      }, {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [{
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor'
        }, {
          name: 'Dropdowns',
          url: '/buttons/dropdowns',
          icon: 'icon-cursor'
        }, {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'icon-cursor'
        }]
      }, {
        name: 'Charts',
        url: '/charts',
        icon: 'icon-pie-chart'
      }, {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [{
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'icon-star',
          badge: {
            variant: 'success',
            text: 'NEW'
          }
        }, {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star'
        }, {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        }, {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }]
      }, {
        name: 'Notifications',
        url: '/notifications',
        icon: 'icon-bell',
        children: [{
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        }, {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell'
        }, {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell'
        }]
      }, {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }, {
        divider: true
      }, {
        title: true,
        name: 'Extras'
      }, {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [{
          name: 'Login',
          url: '/login',
          icon: 'icon-star'
        }, {
          name: 'Register',
          url: '/register',
          icon: 'icon-star'
        }, {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star'
        }, {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star'
        }]
      }, {
        name: 'Disabled',
        url: '/dashboard',
        icon: 'icon-ban',
        badge: {
          variant: 'secondary',
          text: 'NEW'
        },
        attributes: {
          disabled: true
        }
      }, {
        name: 'Download CoreUI',
        url: 'http://coreui.io/angular/',
        icon: 'icon-cloud-download',
        "class": 'mt-auto',
        variant: 'success',
        attributes: {
          target: '_blank',
          rel: 'noopener'
        }
      }, {
        name: 'Try CoreUI PRO',
        url: 'http://coreui.io/pro/angular/',
        icon: 'icon-layers',
        variant: 'danger',
        attributes: {
          target: '_blank',
          rel: 'noopener'
        }
      }];
      /***/
    },

    /***/
    "dxhq":
    /*!**********************************************!*\
      !*** ./src/app/views/error/500.component.ts ***!
      \**********************************************/

    /*! exports provided: P500Component */

    /***/
    function dxhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P500Component", function () {
        return P500Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./500.component.html */
      "Lrxh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P500Component = function P500Component() {
        _classCallCheck(this, P500Component);
      };

      P500Component.ctorParameters = function () {
        return [];
      };

      P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P500Component);
      /***/
    },

    /***/
    "kDZj":
    /*!******************************************************!*\
      !*** ./src/app/kaban-list/kaban-list.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function kDZj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrYWJhbi1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "kciH":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/tutorials-list/tutorials-list.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function kciH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"animated fadeIn\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\">\r\n          Traffic &amp; Sales\r\n        </div>\r\n        <div class=\"card-body\">\r\n\r\n          <br>\r\n          <table class=\"table table-responsive-sm table-hover table-outline mb-0\">\r\n            <thead class=\"thead-light\">\r\n              <tr>\r\n                <th class=\"text-center\"><i class=\"icon-people\"></i></th>\r\n                <th>User</th>\r\n                <th class=\"text-center\">Country</th>\r\n                <th>Usage</th>\r\n                <th class=\"text-center\">Payment Method</th>\r\n                <th>Activity</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let tutorial of tutorials; let i = index\"\r\n              >\r\n\r\n                <td class=\"text-center\">\r\n                  <div class=\"avatar\">\r\n                    <img src=\"assets/img/avatars/1.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                    <span class=\"avatar-status badge-success\"></span>\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div>{{ i + ' - ' +tutorial.title }}</div>\r\n                  <div class=\"small text-muted\">\r\n                    <span>New</span> | Registered: Jan 1, 2015\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"flag-icon flag-icon-us h4 mb-0\" title=\"us\" id=\"us\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"clearfix\">\r\n                    <div class=\"float-left\">\r\n                      <strong>50%</strong>\r\n                    </div>\r\n                    <div class=\"float-right\">\r\n                      <small class=\"text-muted\">{{ i + ' - ' +tutorial.description }}</small>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"progress progress-xs\">\r\n                    <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 50%\" aria-valuenow=\"50\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n                  </div>\r\n                </td>\r\n                <td class=\"text-center\">\r\n                  <i class=\"fa fa-cc-mastercard\" style=\"font-size:24px\"></i>\r\n                </td>\r\n                <td>\r\n                  <div class=\"small text-muted\">Last login</div>\r\n                  <strong>10 sec ago</strong>\r\n                </td>\r\n              </tr>\r\n \r\n            </tbody>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div><!--/.col-->\r\n  </div><!--/.row-->\r\n</div>\r\n\r\n\r\n";
      /***/
    },

    /***/
    "lm8q":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lm8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header\r\n  [navbarBrandRouterLink]=\"['/dashboard']\"\r\n  [fixed]=\"true\"\r\n  [navbarBrandFull]=\"{src: 'assets/img/brand/logo.svg', width: 89, height: 25, alt: 'CoreUI Logo'}\"\r\n  [navbarBrandMinimized]=\"{src: 'assets/img/brand/sygnet.svg', width: 30, height: 30, alt: 'CoreUI Logo'}\"\r\n  [sidebarToggler]=\"'lg'\"\r\n  [asideMenuToggler]=\"'lg'\">\r\n  <ul class=\"nav navbar-nav d-md-down-none\">\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Dashboard</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Users</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#\">Settings</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#/testpage001\">PROVA_001</a>\r\n    </li>\r\n    <li class=\"nav-item px-3\">\r\n      <a class=\"nav-link\" href=\"#/testpage002\">PROVA_002</a>\r\n    </li>\r\n  </ul>\r\n  <ul class=\"nav navbar-nav ml-auto\">\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-bell\"></i><span class=\"badge badge-pill badge-danger\">5</span></a>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-list\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item d-md-down-none\">\r\n      <a class=\"nav-link\" href=\"#\"><i class=\"icon-location-pin\"></i></a>\r\n    </li>\r\n    <li class=\"nav-item dropdown\" dropdown placement=\"bottom right\">\r\n      <a class=\"nav-link\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\" dropdownToggle (click)=\"false\">\r\n        <img src=\"assets/img/avatars/6.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\"/>\r\n      </a>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" *dropdownMenu aria-labelledby=\"simple-dropdown\">\r\n        <div class=\"dropdown-header text-center\"><strong>Account</strong></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-bell-o\"></i> Updates<span class=\"badge badge-info\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-envelope-o\"></i> Messages<span class=\"badge badge-success\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-tasks\"></i> Tasks<span class=\"badge badge-danger\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-comments\"></i> Comment<span class=\"badge badge-warning\">42</span></a>\r\n        <div class=\"dropdown-header text-center\"><strong>Settings</strong></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-user\"></i> Profile</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-wrench\"></i> Setting</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-usd\"></i> Payments<span class=\"badge badge-dark\">42</span></a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-file\"></i> Projects<span class=\"badge badge-primary\">42</span></a>\r\n        <div class=\"divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-shield\"></i> Lock account</a>\r\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\"></i> Logout</a>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\r\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\r\n    <app-sidebar-minimizer></app-sidebar-minimizer>\r\n  </app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n    <!-- Breadcrumb -->\r\n    <!-- breaking change 'cui-breadcrumb' -->\r\n    <cui-breadcrumb>\r\n      <!-- Breadcrumb Menu-->\r\n      <li class=\"breadcrumb-menu d-md-down-none\">\r\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>\r\n          <a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>\r\n          <a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>\r\n        </div>\r\n      </li>\r\n    </cui-breadcrumb>\r\n    <!-- deprecation warning for 'app-breadcrumb' -->\r\n    <!--<ol class=\"breadcrumb\">-->\r\n      <!--<app-breadcrumb></app-breadcrumb>-->\r\n      <!--&lt;!&ndash; Breadcrumb Menu&ndash;&gt;-->\r\n      <!--<li class=\"breadcrumb-menu d-md-down-none\">-->\r\n        <!--<div class=\"btn-group\" role=\"group\" aria-label=\"Button group with nested dropdown\">-->\r\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-speech\"></i></a>-->\r\n          <!--<a class=\"btn\" [routerLink]=\"['/dashboard']\"><i class=\"icon-graph\"></i> &nbsp;Dashboard</a>-->\r\n          <!--<a class=\"btn\" href=\"#\"><i class=\"icon-settings\"></i> &nbsp;Settings</a>-->\r\n        <!--</div>-->\r\n      <!--</li>-->\r\n    <!--</ol>-->\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.container-fluid -->\r\n  </main>\r\n  <app-aside [fixed]=\"true\" [display]=\"false\" [ngClass]=\"'test'\">\r\n    <tabset>\r\n      <tab>\r\n        <ng-template tabHeading><i class=\"icon-list\"></i></ng-template>\r\n        <div class=\"list-group list-group-accent\">\r\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Today</div>\r\n          <div class=\"list-group-item list-group-item-accent-warning list-group-item-divider\">\r\n            <div class=\"avatar float-right\">\r\n              <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div>Meeting with\r\n              <strong>Lucas</strong>\r\n            </div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\r\n          </div>\r\n          <div class=\"list-group-item list-group-item-accent-info\">\r\n            <div class=\"avatar float-right\">\r\n              <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n            </div>\r\n            <div>Skype with\r\n              <strong>Megan</strong>\r\n            </div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  4 - 5pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-social-skype\"></i>  On-line</small>\r\n          </div>\r\n          <div class=\"list-group-item list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small\">Tomorrow</div>\r\n          <div class=\"list-group-item list-group-item-accent-danger list-group-item-divider\">\r\n            <div>New UI Project -\r\n              <strong>deadline</strong>\r\n            </div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  10 - 11pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\r\n            <div class=\"avatars-stack mt-2\">\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"list-group-item list-group-item-accent-success list-group-item-divider\">\r\n            <div>\r\n              <strong>#10 Startups.Garden</strong> Meetup</div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  1 - 3pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-location-pin\"></i>  Palo Alto, CA</small>\r\n          </div>\r\n          <div class=\"list-group-item list-group-item-accent-primary list-group-item-divider\">\r\n            <div>\r\n              <strong>Team meeting</strong>\r\n            </div>\r\n            <small class=\"text-muted mr-3\">\r\n              <i class=\"icon-calendar\"></i>  4 - 6pm</small>\r\n            <small class=\"text-muted\">\r\n              <i class=\"icon-home\"></i>  creativeLabs HQ</small>\r\n            <div class=\"avatars-stack mt-2\">\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/2.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/3.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/4.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/5.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/6.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/7.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n              <div class=\"avatar avatar-xs\">\r\n                <img class=\"img-avatar\" src=\"assets/img/avatars/8.jpg\" alt=\"admin@bootstrapmaster.com\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab>\r\n        <ng-template tabHeading><i class=\"icon-speech\"></i></ng-template>\r\n        <div class=\"p-3\">\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n          <hr>\r\n          <div class=\"message\">\r\n            <div class=\"py-3 pb-5 mr-3 float-left\">\r\n              <div class=\"avatar\">\r\n                <img src=\"assets/img/avatars/7.jpg\" class=\"img-avatar\" alt=\"admin@bootstrapmaster.com\">\r\n                <span class=\"avatar-status badge-success\"></span>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lukasz Holeczek</small>\r\n              <small class=\"text-muted float-right mt-1\">1:52 PM</small>\r\n            </div>\r\n            <div class=\"text-truncate font-weight-bold\">Lorem ipsum dolor sit amet</div>\r\n            <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...</small>\r\n          </div>\r\n        </div>\r\n      </tab>\r\n      <tab>\r\n        <ng-template tabHeading><i class=\"icon-settings\"></i></ng-template>\r\n        <div class=\"p-3\">\r\n          <h6>Settings</h6>\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-4\">\r\n              <small><b>Option 1</b></small>\r\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-3\">\r\n              <small><b>Option 2</b></small>\r\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n              </label>\r\n            </div>\r\n            <div>\r\n              <small class=\"text-muted\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>\r\n            </div>\r\n          </div>\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-3\">\r\n              <small><b>Option 3</b></small>\r\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\">\r\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n                <span class=\"switch-handle\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <div class=\"aside-options\">\r\n            <div class=\"clearfix mt-3\">\r\n              <small><b>Option 4</b></small>\r\n              <label class=\"switch switch-label switch-pill switch-success switch-sm float-right\">\r\n                <input type=\"checkbox\" class=\"switch-input\" checked>\r\n                <span class=\"switch-slider\" data-checked=\"On\" data-unchecked=\"Off\"></span>\r\n              </label>\r\n            </div>\r\n          </div>\r\n          <hr>\r\n          <h6>System Utilization</h6>\r\n          <div class=\"text-uppercase mb-1 mt-4\"><small><b>CPU Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-info\" role=\"progressbar\" style=\"width: 25%\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">348 Processes. 1/4 Cores.</small>\r\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>Memory Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-warning\" role=\"progressbar\" style=\"width: 70%\" aria-valuenow=\"70\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">11444GB/16384MB</small>\r\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 1 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-danger\" role=\"progressbar\" style=\"width: 95%\" aria-valuenow=\"95\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">243GB/256GB</small>\r\n          <div class=\"text-uppercase mb-1 mt-2\"><small><b>SSD 2 Usage</b></small></div>\r\n          <div class=\"progress progress-xs\">\r\n            <div class=\"progress-bar bg-success\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\r\n          </div>\r\n          <small class=\"text-muted\">25GB/256GB</small>\r\n        </div>\r\n      </tab>\r\n    </tabset>\r\n  </app-aside>\r\n</div>\r\n<app-footer>\r\n  <span><a href=\"https://coreui.io\">CoreUI</a> &copy; 2021 creativeLabs.</span>\r\n  <span class=\"ml-auto\">Powered by <a href=\"https://coreui.io/angular\">CoreUI for Angular</a></span>\r\n</app-footer>\r\n";
      /***/
    },

    /***/
    "nAJl":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function nAJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "nSew":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function nSew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\r\n  <main class=\"main d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 mx-auto\">\r\n          <div class=\"card-group\">\r\n            <div class=\"card p-4\">\r\n              <div class=\"card-body\">\r\n                <form>\r\n                  <h1>Login</h1>\r\n                  <p class=\"text-muted\">Sign In to your account</p>\r\n                  <div class=\"input-group mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                    </div>\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\r\n                  </div>\r\n                  <div class=\"input-group mb-4\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                    </div>\r\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\" required>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                      <button type=\"button\" class=\"btn btn-primary px-4\">Login</button>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n            <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\r\n              <div class=\"card-body text-center\">\r\n                <div>\r\n                  <h2>Sign up</h2>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\r\n                  <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        useJit: true,
        preserveWhitespaces: true
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map