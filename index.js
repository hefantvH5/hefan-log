'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_createClass=function(){function a(b,c){for(var f,e=0;e<c.length;e++)f=c[e],f.enumerable=f.enumerable||!1,f.configurable=!0,'value'in f&&(f.writable=!0),Object.defineProperty(b,f.key,f)}return function(b,c,e){return c&&a(b.prototype,c),e&&a(b,e),b}}();function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var created=!1,instance=null,Log=function(){function a(){return _classCallCheck(this,a),this.envArray=['development','testing','preproduction','production'],created||(created=!0,this._jsErrorHandler(),instance=new a),this.config(),instance}return _createClass(a,[{key:'config',value:function config(){var _ref=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},_ref$projectName=_ref.projectName,o=void 0===_ref$projectName?'undefined'!=typeof _PROJECTNAME&&_PROJECTNAME?_PROJECTNAME:'\u9879\u76EE\u540D\u79F0\u672A\u914D\u7F6E':_ref$projectName,_ref$env=_ref.env,p=void 0===_ref$env?process.env.NODE_ENV:_ref$env,_ref$level=_ref.level,q=void 0===_ref$level?'debug':_ref$level;this.projectName=o,this.enable=!0,this.typeArray=['debug','log','info','warn','error'];var r=this.envArray.indexOf(p);-1<r?this.env=p:this.enable=!1;var s=this.typeArray.indexOf(q);-1<s&&(this.typeArray=this.typeArray.splice(s))}},{key:'debug',value:function debug(o){for(var q=arguments.length,p=Array(1<q?q-1:0),r=1;r<q;r++)p[r-1]=arguments[r];this._consolePrint('debug',o,p)}},{key:'log',value:function log(o){for(var q=arguments.length,p=Array(1<q?q-1:0),r=1;r<q;r++)p[r-1]=arguments[r];this._consolePrint('log',o,p)}},{key:'info',value:function info(o){for(var q=arguments.length,p=Array(1<q?q-1:0),r=1;r<q;r++)p[r-1]=arguments[r];this._consolePrint('info',o,p)}},{key:'warn',value:function warn(o){for(var q=arguments.length,p=Array(1<q?q-1:0),r=1;r<q;r++)p[r-1]=arguments[r];this._consolePrint('warn',o,p)}},{key:'error',value:function error(o){for(var q=arguments.length,p=Array(1<q?q-1:0),r=1;r<q;r++)p[r-1]=arguments[r];this._consolePrint('error',o,p)}},{key:'_ajax',value:function _ajax(o,p){var q=null;q=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject('Microsoft.XMLHTTP');Math.random();if('object'==('undefined'==typeof p?'undefined':_typeof(p))){var s='';for(var t in p)s+=t+'='+p[t]+'&';p=s.replace(/&$/,'')}q.open('POST',o,!0),q.setRequestHeader('Content-type','application/x-www-form-urlencoded'),q.send(p)}},{key:'_consolePrint',value:function _consolePrint(o,p,q){if(this.enable&&-1<this.typeArray.indexOf(o)){var r=window.console[o];r&&(r.apply(window.console,this._formatMsg(o,q)),this._debugHandler(o,p,q))}}},{key:'_debugHandler',value:function _debugHandler(o,p,q){var r=this._paramFormat({projectName:this.projectName,type:o,env:this.env,action:'4001',pageName:p,logData:q});this._ajax('http://debug.hefantv.com/api/postDebug',r)}},{key:'_getTime',value:function _getTime(){var o=new Date;return o.getHours()+':'+(o.getMinutes()+':')+(o.getSeconds()+'')}},{key:'_paramFormat',value:function _paramFormat(o){var p={data:JSON.stringify(o)};return p}},{key:'_formatMsg',value:function _formatMsg(o,p){return p.unshift(this._getTime()+' ['+o+'] > '),p}},{key:'_jsErrorHandler',value:function _jsErrorHandler(){var o=this;'undefined'==typeof window||window.onerror||(window.onerror=function(p,q,r,s,t){o._debugHandler('error',q,{errorMessage:{meaning:'\u9519\u8BEF\u4FE1\u606F\uFF1A',msg:p},scriptURI:{meaning:'\u51FA\u9519\u6587\u4EF6\uFF1A',msg:q},lineNumber:{meaning:'\u51FA\u9519\u884C\u53F7\uFF1A',msg:r},columnNumber:{meaning:'\u51FA\u9519\u5217\u53F7\uFF1A',msg:s},errorObj:{meaning:'\u9519\u8BEF\u8BE6\u60C5\uFF1A',msg:t}})})}}]),a}();module.exports=new Log;