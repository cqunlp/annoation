(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{693:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"d",(function(){return o})),r.d(e,"j",(function(){return l})),r.d(e,"h",(function(){return c})),r.d(e,"f",(function(){return d})),r.d(e,"b",(function(){return h})),r.d(e,"g",(function(){return f})),r.d(e,"c",(function(){return v})),r.d(e,"i",(function(){return m})),r.d(e,"e",(function(){return _}));var n=[function(t){return!!t||"Color is required"}],o=[function(t){return!!t||"Label name is required"},function(t){return t&&t.length<=30||"Label name must be less than 30 characters"}],l=[function(t){return!!t||"User name is required"},function(t){return t&&t.length<=30||"User name must be less than 30 characters"}],c=[function(t){return!!t||"Role is required"}],d=[function(t){return!!t||"Project name is required"},function(t){return t&&t.length<=30||"Project name must be less than 30 characters"}],h=[function(t){return!!t||"Description is required"},function(t){return t&&t.length<=100||"Description must be less than 100 characters"}],f=[function(t){return!!t||"Project type is required"}],v=[function(t){return!!t||"File format is required"}],m=[function(t){return!!t||"File is required"},function(t){return!t||t.size<1e6||"File size should be less than 1 MB!"}],_=[function(t){return!!t||"Password is required"},function(t){return t&&t.length<=30||"Password must be less than 30 characters"}]},702:function(t,e,r){var content=r(703);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("5db1c400",content,!0,{sourceMap:!1})},703:function(t,e,r){(e=r(12)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-alert{font-size:16px;margin-bottom:16px;padding:16px}.v-alert>.v-alert__content,.v-alert>.v-icon{margin-right:16px}.v-alert>.v-alert__content+.v-icon,.v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-right:0;margin-left:16px}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon,.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--right{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-application--is-rtl .v-alert__border--left{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:inherit;border-bottom-right-radius:inherit;left:auto;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;border-top-right-radius:0;border-bottom-right-radius:0;left:0;right:auto}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;margin-right:16px;min-width:24px;position:relative}.v-application--is-rtl .v-alert__icon{margin-right:0;margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;right:0;top:0}',""]),t.exports=e},709:function(t,e,r){"use strict";r(8),r(6),r(7);var n=r(1),o=(r(55),r(5),r(3),r(153),r(33),r(38),r(86));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.b)("form").extend({name:"v-form",inheritAttrs:!1,props:{lazyValidation:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:c({novalidate:!0},this.$attrs),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},862:function(t,e,r){"use strict";r(8),r(6),r(5),r(3),r(7);var n=r(1),o=(r(33),r(38),r(702),r(92)),l=r(39),c=r(24),d=r(29),h=r(11),f=r(2).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),v=r(4),m=r(10);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(v.a)(o.a,d.a,f).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},"$vuetify.icons.cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},o.a.options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){if(!1===this.icon)return!1;if("string"==typeof this.icon&&this.icon)return this.icon;switch(this.type){case"info":return"$vuetify.icons.info";case"error":return"$vuetify.icons.error";case"success":return"$vuetify.icons.success";case"warning":return"$vuetify.icons.warning";default:return!1}},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},917:function(t,e,r){"use strict";r.r(e);r(8),r(6),r(5),r(3),r(7);var n=r(1),o=r(18),l=r(693),c={components:{BaseCard:r(189).a},props:{login:{type:Function,default:function(){}}},data:function(){return{valid:!1,username:"",password:"",userNameRules:l.j,passwordRules:l.e,showError:!1}},methods:{validate:function(){return this.$refs.form.validate()},tryLogin:function(){var t=this;this.validate()&&this.login({username:this.username,password:this.password}).then((function(e){t.$router.push("/projects")})).catch((function(){t.showError=!0}))}}},d=r(14),h=r(16),f=r.n(h),v=r(862),m=r(709),_=r(78),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("base-card",{attrs:{disabled:!t.valid,title:"Login","agree-text":"Login"},on:{agree:t.tryLogin},scopedSlots:t._u([{key:"content",fn:function(){return[r("v-form",{ref:"form",model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[r("v-alert",{directives:[{name:"show",rawName:"v-show",value:t.showError,expression:"showError"}],attrs:{type:"error",dismissible:""},model:{value:t.showError,callback:function(e){t.showError=e},expression:"showError"}},[t._v("\n        Incorrect username or password.\n      ")]),t._v(" "),r("v-text-field",{attrs:{rules:t.userNameRules,label:"Username",name:"username","prepend-icon":"person",type:"text",autofocus:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.tryLogin(e)}},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),r("v-text-field",{attrs:{id:"password",rules:t.passwordRules,label:"Password",name:"password","prepend-icon":"lock",type:"password"},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.tryLogin(e)}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)]},proxy:!0}])})}),[],!1,null,null,null),y=component.exports;function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}f()(component,{VAlert:v.a,VForm:m.a,VTextField:_.a});var O={components:{LoginForm:y},methods:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)("auth",["authenticateUser"]))},x=r(674),j=r(684),k=r(675),B=r(685),P=r(686),$=Object(d.a)(O,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{id:"inspire"}},[e("v-content",[e("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"8",md:"4"}},[e("login-form",{attrs:{login:this.authenticateUser}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=$.exports;f()($,{VApp:x.a,VCol:j.a,VContainer:k.a,VContent:B.a,VRow:P.a})}}]);