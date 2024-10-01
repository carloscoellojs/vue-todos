(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"73cf":function(t,e,a){"use strict";a.r(e);a("7f7f");var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container my-5"},[e("form",{on:{submit:t.createUser}},[e("div",{staticClass:"form-row align-items-center"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputGroup"}},[t._v("Name")]),e("div",{staticClass:"input-group mb-2"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",class:{"is-invalid":t.inputValidation.name,"is-valid":t.name&&!t.inputValidation.name},attrs:{type:"text",name:"name",placeholder:"Name"},domProps:{value:t.name},on:{keyup:t.handleKeyUp,input:function(e){e.target.composing||(t.name=e.target.value)}}})]),e("small",{staticClass:"form-text text-muted"},[t._v("Name must be at least 2 characters")])])]),e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputGroup"}},[t._v("Email")]),e("div",{staticClass:"input-group mb-2"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.inputValidation.email,"is-valid":t.email&&!t.inputValidation.email},attrs:{type:"text",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{keyup:t.handleKeyUp,input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("small",{staticClass:"form-text text-muted"},[t._v("Email format example: john@example.com")])])]),e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputGroup"}},[t._v("Password")]),e("div",{staticClass:"input-group mb-2"},[t._m(2),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.inputValidation.password,"is-valid":t.password&&!t.inputValidation.password},attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:t.handleKeyUp,input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("small",{staticClass:"form-text text-muted"},[t._v("Password must be at least 6 characters")])])]),t._m(3)])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-user-circle"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-envelope"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-key"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-12"},[e("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},[t._v("Submit")])])}],o=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),r=a("2f62");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={name:"register",data:function(){return{name:"",email:"",password:"",inputValidation:{name:!1,email:!1,password:!1}}},computed:l({},Object(r["d"])(["register"])),methods:l(l({},Object(r["b"])(["registerUser"])),{},{handleKeyUp:function(t){var e=t.target,a=e.name,s=e.value,i="";switch(a){case"name":i=/[a-z]{2,}$/gi,this.inputValidation=l(l({},this.inputValidation),{},{name:s.length&&!i.test(s)});break;case"email":i=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi,this.inputValidation=l(l({},this.inputValidation),{},{email:s.length&&!i.test(s)});break;case"password":i=/.{6,}/gi,this.inputValidation=l(l({},this.inputValidation),{},{password:s.length&&!i.test(s)});break;default:break}},createUser:function(t){var e=this;t.preventDefault(),this.inputValidation.name||this.inputValidation.email||this.inputValidation.password||this.registerUser({name:this.name,email:this.email,password:this.password}).then((function(){e.register.success?(e.name="",e.email="",e.password="",e.flash(e.register.message,"alert alert-success",{timeout:2e3,importante:!1}),setTimeout((function(){return e.$router.push("login")}),2e3)):e.flash(e.register.message,"alert alert-danger",{timeout:2e3,importante:!1})}))}})},u=c,d=a("2877"),p=Object(d["a"])(u,s,i,!1,null,null,null);e["default"]=p.exports},"75cf":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container my-5"},[t.edit?t._e():e("form",{on:{submit:t.createTodo}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"}],staticClass:"form-control",attrs:{type:"text",placeholder:"write your todo here"},domProps:{value:t.todo},on:{input:function(e){e.target.composing||(t.todo=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{staticClass:"btn btn-success",attrs:{type:"submit",value:"upload",disabled:!t.todo.length}})])]),t.edit?e("form",{on:{submit:t.updateTodo}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.todo,expression:"todo"},{name:"",rawName:"v-"}],staticClass:"form-control",attrs:{type:"text",placeholder:"write your todo here"},domProps:{value:t.todo},on:{input:function(e){e.target.composing||(t.todo=e.target.value)}}})]),e("div",{staticClass:"form-group"},[e("input",{staticClass:"btn btn-primary",attrs:{type:"submit",value:"update",disabled:!this.todo}}),e("button",{staticClass:"btn btn-warning ml-2",attrs:{type:"button"},on:{click:t.cancelEdit}},[t._v("\n        cancel update\n      ")])])]):t._e(),t.todos.length?e("div",[e("p",{staticClass:"lead"},[t._v("Your Todo List")]),e("ul",{staticClass:"list-group"},t._l(t.todos,(function(a,s){return e("li",{key:s,staticClass:"list-group-item my-2 bg-light d-flex justify-content-between"},[t._v("\n        "+t._s(a.todo)+"\n        "),e("span",{staticClass:"text-info"},[t._v(t._s(a.created))]),e("div",[e("i",{staticClass:"far fa-edit mx-2 text-primary pointer",on:{click:function(e){return t.editTodo(a.todo,s)}}}),e("i",{staticClass:"far fa-times-circle mx-2 text-danger pointer",on:{click:function(e){return t.deleteTodo(s)}}})])])})),0)]):t._e()])},i=[],o=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),r=a("2f62");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={name:"todos",data:function(){return{todo:"",edit:!1,index:""}},computed:l({},Object(r["d"])(["todos"])),methods:l(l({},Object(r["b"])(["addTodo","editSingleTodo","removeTodo"])),{},{createTodo:function(t){t.preventDefault(),this.addTodo({todo:this.todo,created:(new Date).toLocaleString()}),this.todo=""},updateTodo:function(t){t.preventDefault(),this.editSingleTodo({t:this.todo,i:this.index}),this.todo="",this.id="",this.edit=!1},editTodo:function(t,e){this.todo=t,this.index=e,this.edit=!0},cancelEdit:function(){this.todo="",this.index="",this.edit=!1},deleteTodo:function(t){this.removeTodo(t)}})},u=c,d=(a("a9ae"),a("2877")),p=Object(d["a"])(u,s,i,!1,null,"43e9cbf4",null);e["default"]=p.exports},"7f7f":function(t,e,a){var s=a("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,r="name";r in i||a("9e1e")&&s(i,r,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"908f":function(t,e,a){},a55b:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container my-5"},[e("form",{attrs:{novalidate:""},on:{submit:t.logMeIn}},[e("div",{staticClass:"form-row align-items-center"},[e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputGroup"}},[t._v("Email")]),e("div",{staticClass:"input-group mb-2"},[t._m(0),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":t.inputValidation.email,"is-valid":t.email&&!t.inputValidation.email},attrs:{type:"email",name:"email",placeholder:"Email"},domProps:{value:t.email},on:{keyup:t.handleKeyUp,input:function(e){e.target.composing||(t.email=e.target.value)}}})]),e("small",{staticClass:"form-text text-muted"},[t._v("Email format example: john@example.com")])])]),e("div",{staticClass:"col-sm-12"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"sr-only",attrs:{for:"inlineFormInputGroup"}},[t._v("Password")]),e("div",{staticClass:"input-group mb-2"},[t._m(1),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":t.inputValidation.password,"is-valid":t.password&&!t.inputValidation.email},attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{keyup:t.handleKeyUp,input:function(e){e.target.composing||(t.password=e.target.value)}}})]),e("small",{staticClass:"form-text text-muted"},[t._v("Password must be at least 6 characters")])])]),t._m(2)])])])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-envelope"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"input-group-prepend"},[e("div",{staticClass:"input-group-text"},[e("i",{staticClass:"fas fa-key"})])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-sm-12 col-md-2"},[e("button",{staticClass:"btn btn-primary mb-2",attrs:{type:"submit"}},[t._v("Submit")])])}],o=(a("8e6e"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),r=a("2f62");function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,s)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var c={name:"login",data:function(){return{email:"",password:"",inputValidation:{email:!1,password:!1}}},computed:l({},Object(r["d"])(["login"])),methods:l(l({},Object(r["b"])(["loginUser"])),{},{handleKeyUp:function(t){var e=t.target,a=e.name,s=e.value,i="";switch(a){case"email":i=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/gi,this.inputValidation=l(l({},this.inputValidation),{},{email:s.length&&!i.test(s)});break;case"password":i=/.{6,}/gi,this.inputValidation=l(l({},this.inputValidation),{},{password:s.length&&!i.test(s)});break;default:break}},logMeIn:function(t){var e=this;t.preventDefault(),this.inputValidation.email||this.inputValidation.password||this.loginUser({email:this.email,password:this.password}).then((function(){e.login.success?(e.email="",e.password="",e.flash(e.login.message,"alert alert-success",{timeout:2e3,important:!1}),setTimeout((function(){return e.$router.push("todos")}),2e3)):e.flash(e.login.message,"alert alert-danger",{timeout:2e3,importante:!1})}))}})},u=c,d=a("2877"),p=Object(d["a"])(u,s,i,!1,null,null,null);e["default"]=p.exports},a9ae:function(t,e,a){"use strict";a("908f")},f820:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this;t._self._c;return t._m(0)},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"container my-5"},[e("header",[e("h1",[t._v("This is an about page")])])])}],o=a("2877"),r={},n=Object(o["a"])(r,s,i,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=about.1eed7ab7.js.map