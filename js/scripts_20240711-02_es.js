
		/*! jQuery v3.6.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,y=n.hasOwnProperty,a=y.toString,l=a.call(Object),v={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.1",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=y.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:v}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,y,s,c,v,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&v(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!y||!y.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ve(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ye(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ve(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],y=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||y.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||y.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||y.push(".#.+[+~]"),e.querySelectorAll("\\\f"),y.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),y=y.length&&new RegExp(y.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),v=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&v(p,e)?-1:t==C||t.ownerDocument==p&&v(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!y||!y.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),v(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace($," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,y){var v="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===y?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=v!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(v){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=y)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ye(function(){return[0]}),last:ye(function(e,t){return[t-1]}),eq:ye(function(e,t,n){return[n<0?n+t:n]}),even:ye(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ye(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ye(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ye(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,y,v,e){return y&&!y[S]&&(y=Ce(y)),v&&!v[S]&&(v=Ce(v,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?v||(e?d:l||y)?[]:t:f;if(g&&g(f,p,n,r),y){i=Te(p,u),y(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(v||d){if(v){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);v(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=v?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),v?v(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,y,v,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(y=o,m=0<(v=i).length,x=0<y.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=y[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=v[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+v.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ve(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ve(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function $(){E.removeEventListener("DOMContentLoaded",$),C.removeEventListener("load",$),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",$),C.addEventListener("load",$));var B=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)B(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):B(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),v.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",v.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",v.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,v.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=y.events)||(u=y.events=Object.create(null)),(a=y.handle)||(a=y.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=Y.hasData(e)&&Y.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||S.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(t,e){S.event.special[t]={setup:function(){return Se(this,t,Ce),!1},trigger:function(){return Se(this,t),!0},_default:function(e){return Y.get(e.target,t)},delegateType:e}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!v.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ye(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ye(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ye(r)),r.parentNode&&(n&&ie(r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(v.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ye(c),r=0,i=(o=ye(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ye(e),a=a||ye(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ye(c,"script")).length&&ve(a,!f&&ye(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return B(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return B(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ye(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=/^--/,Me=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Ie=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},We=new RegExp(ne.join("|"),"i"),Fe="[\\x20\\t\\r\\n\\f]",$e=new RegExp("^"+Fe+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Fe+"+$","g");function Be(e,t,n){var r,i,o,a,s=Re.test(t),u=e.style;return(n=n||Me(e))&&(a=n.getPropertyValue(t)||n[t],s&&(a=a.replace($e,"$1")),""!==a||ie(e)||(a=S.style(e,t)),!v.pixelBoxStyles()&&Pe.test(a)&&We.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",v.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(v,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var ze=["Webkit","Moz","ms"],Ue=E.createElement("div").style,Xe={};function Ve(e){var t=S.cssProps[e]||Xe[e];return t||(e in Ue?e:Xe[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=ze.length;while(n--)if((e=ze[n]+t)in Ue)return e}(e)||e)}var Ge=/^(none|table(?!-c[ea]).+)/,Ye={position:"absolute",visibility:"hidden",display:"block"},Qe={letterSpacing:"0",fontWeight:"400"};function Je(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ke(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Ze(e,t,n){var r=Me(e),i=(!v.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=Be(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!v.boxSizingReliable()&&i||!v.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Ke(e,t,n||(i?"border":"content"),o,r,a)+"px"}function et(e,t,n,r,i){return new et.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Be(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Re.test(t),l=e.style;if(u||(t=Ve(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),v.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Re.test(t)||(t=Ve(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Be(e,t,r)),"normal"===i&&t in Qe&&(i=Qe[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ge.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Ze(e,u,n):Ie(e,Ye,function(){return Ze(e,u,n)})},set:function(e,t,n){var r,i=Me(e),o=!v.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Ke(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Ke(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Je(0,t,s)}}}),S.cssHooks.marginLeft=_e(v.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Be(e,"marginLeft"))||e.getBoundingClientRect().left-Ie(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Je)}),S.fn.extend({css:function(e,t){return B(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Me(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=et).prototype={constructor:et,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=et.propHooks[this.prop];return e&&e.get?e.get(this):et.propHooks._default.get(this)},run:function(e){var t,n=et.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):et.propHooks._default.set(this),this}}).init.prototype=et.prototype,(et.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[Ve(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=et.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=et.prototype.init,S.fx.step={};var tt,nt,rt,it,ot=/^(?:toggle|show|hide)$/,at=/queueHooks$/;function st(){nt&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(st):C.setTimeout(st,S.fx.interval),S.fx.tick())}function ut(){return C.setTimeout(function(){tt=void 0}),tt=Date.now()}function lt(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ct(e,t,n){for(var r,i=(ft.tweeners[t]||[]).concat(ft.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ft(o,e,t){var n,a,r=0,i=ft.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=tt||ut(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:tt||ut(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=ft.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ct,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(ft,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],ft.tweeners[n]=ft.tweeners[n]||[],ft.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],ot.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(y?"hidden"in y&&(g=y.hidden):y=Y.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ct(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?ft.prefilters.unshift(e):ft.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=ft(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&at.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(lt(r,!0),e,t,n)}}),S.each({slideDown:lt("show"),slideUp:lt("hide"),slideToggle:lt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(tt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),tt=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){nt||(nt=!0,st())},S.fx.stop=function(){nt=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},rt=E.createElement("input"),it=E.createElement("select").appendChild(E.createElement("option")),rt.type="checkbox",v.checkOn=""!==rt.value,v.optSelected=it.selected,(rt=E.createElement("input")).value="t",rt.type="radio",v.radioValue="t"===rt.value;var pt,dt=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return B(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?pt:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!v.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),pt={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=dt[t]||S.find.attr;dt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=dt[o],dt[o]=r,r=null!=a(e,t,n)?o:null,dt[o]=i),r}});var ht=/^(?:input|select|textarea|button)$/i,gt=/^(?:a|area)$/i;function yt(e){return(e.match(P)||[]).join(" ")}function vt(e){return e.getAttribute&&e.getAttribute("class")||""}function mt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return B(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):ht.test(e.nodeName)||gt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),v.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).addClass(t.call(this,e,vt(this)))}):(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++)i=e[o],n.indexOf(" "+i+" ")<0&&(n+=i+" ");a=yt(n),r!==a&&this.setAttribute("class",a)}}):this},removeClass:function(t){var e,n,r,i,o,a;return m(t)?this.each(function(e){S(this).removeClass(t.call(this,e,vt(this)))}):arguments.length?(e=mt(t)).length?this.each(function(){if(r=vt(this),n=1===this.nodeType&&" "+yt(r)+" "){for(o=0;o<e.length;o++){i=e[o];while(-1<n.indexOf(" "+i+" "))n=n.replace(" "+i+" "," ")}a=yt(n),r!==a&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(t,n){var e,r,i,o,a=typeof t,s="string"===a||Array.isArray(t);return m(t)?this.each(function(e){S(this).toggleClass(t.call(this,e,vt(this),n),n)}):"boolean"==typeof n&&s?n?this.addClass(t):this.removeClass(t):(e=mt(t),this.each(function(){if(s)for(o=S(this),i=0;i<e.length;i++)r=e[i],o.hasClass(r)?o.removeClass(r):o.addClass(r);else void 0!==t&&"boolean"!==a||((r=vt(this))&&Y.set(this,"__className__",r),this.setAttribute&&this.setAttribute("class",r||!1===t?"":Y.get(this,"__className__")||""))}))},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+yt(vt(n))+" ").indexOf(t))return!0;return!1}});var xt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(xt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:yt(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},v.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),v.focusin="onfocusin"in C;var bt=/^(?:focusinfocus|focusoutblur)$/,wt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=y.call(e,"type")?e.type:e,h=y.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!bt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,bt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,wt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,wt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),v.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var Tt=C.location,Ct={guid:Date.now()},Et=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var St=/\[\]$/,kt=/\r?\n/g,At=/^(?:submit|button|image|reset|file)$/i,Nt=/^(?:input|select|textarea|keygen)/i;function jt(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||St.test(n)?i(n,t):jt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)jt(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&Nt.test(this.nodeName)&&!At.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(kt,"\r\n")}}):{name:t.name,value:n.replace(kt,"\r\n")}}).get()}});var Dt=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=E.createElement("a");function Ft(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function $t(t,i,o,a){var s={},u=t===Mt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Bt(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Wt.href=Tt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Bt(Bt(e,S.ajaxSettings),t):Bt(S.ajaxSettings,e)},ajaxPrefilter:Ft(Rt),ajaxTransport:Ft(Mt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,y=S.ajaxSetup({},t),v=y.context||y,m=y.context&&(v.nodeType||v.jquery)?S(v):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=y.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Ht.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(y.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),y.url=((e||y.url||Tt.href)+"").replace(Pt,Tt.protocol+"//"),y.type=t.method||t.type||y.method||y.type,y.dataTypes=(y.dataType||"*").toLowerCase().match(P)||[""],null==y.crossDomain){r=E.createElement("a");try{r.href=y.url,r.href=r.href,y.crossDomain=Wt.protocol+"//"+Wt.host!=r.protocol+"//"+r.host}catch(e){y.crossDomain=!0}}if(y.data&&y.processData&&"string"!=typeof y.data&&(y.data=S.param(y.data,y.traditional)),$t(Rt,y,t,T),h)return T;for(i in(g=S.event&&y.global)&&0==S.active++&&S.event.trigger("ajaxStart"),y.type=y.type.toUpperCase(),y.hasContent=!Ot.test(y.type),f=y.url.replace(qt,""),y.hasContent?y.data&&y.processData&&0===(y.contentType||"").indexOf("application/x-www-form-urlencoded")&&(y.data=y.data.replace(Dt,"+")):(o=y.url.slice(f.length),y.data&&(y.processData||"string"==typeof y.data)&&(f+=(Et.test(f)?"&":"?")+y.data,delete y.data),!1===y.cache&&(f=f.replace(Lt,"$1"),o=(Et.test(f)?"&":"?")+"_="+Ct.guid+++o),y.url=f+o),y.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(y.data&&y.hasContent&&!1!==y.contentType||t.contentType)&&T.setRequestHeader("Content-Type",y.contentType),T.setRequestHeader("Accept",y.dataTypes[0]&&y.accepts[y.dataTypes[0]]?y.accepts[y.dataTypes[0]]+("*"!==y.dataTypes[0]?", "+It+"; q=0.01":""):y.accepts["*"]),y.headers)T.setRequestHeader(i,y.headers[i]);if(y.beforeSend&&(!1===y.beforeSend.call(v,T,y)||h))return T.abort();if(u="abort",b.add(y.complete),T.done(y.success),T.fail(y.error),c=$t(Mt,y,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,y]),h)return T;y.async&&0<y.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},y.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(y,T,n)),!i&&-1<S.inArray("script",y.dataTypes)&&S.inArray("json",y.dataTypes)<0&&(y.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(y,s,T,i),i?(y.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===y.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(v,[o,l,T]):x.rejectWith(v,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,y,i?o:a]),b.fireWith(v,[T,l]),g&&(m.trigger("ajaxComplete",[T,y]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var _t={0:200,1223:204},zt=S.ajaxSettings.xhr();v.cors=!!zt&&"withCredentials"in zt,v.ajax=zt=!!zt,S.ajaxTransport(function(i){var o,a;if(v.cors||zt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(_t[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Ut,Xt=[],Vt=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||S.expando+"_"+Ct.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Vt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Vt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Vt,"$1"+r):!1!==e.jsonp&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Xt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),v.createHTMLDocument=((Ut=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Ut.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(v.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=yt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return B(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=_e(v.pixelPosition,function(e,t){if(t)return t=Be(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return B(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Gt=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Gt,"$1")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Yt=C.jQuery,Qt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Qt),e&&C.jQuery===S&&(C.jQuery=Yt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

		(function($, window, undefined) {
    //is onprogress supported by browser?
    var hasOnProgress = ("onprogress" in $.ajaxSettings.xhr());

    //If not supported, do nothing
    if (!hasOnProgress) {
        return;
    }
    
    //patch ajax settings to call a progress callback
    var oldXHR = $.ajaxSettings.xhr;
    $.ajaxSettings.xhr = function() {
        var xhr = oldXHR.apply(this, arguments);
        if(xhr instanceof window.XMLHttpRequest) {
            xhr.addEventListener('progress', this.progress, false);
        }
        
        if(xhr.upload) {
            xhr.upload.addEventListener('progress', this.progress, false);
        }
        
        return xhr;
    };
})(jQuery, window);

		/*
 * jQuery Plugin: Tokenizing Autocomplete Text Entry
 * Version 1.6.2
 *
 * Copyright (c) 2009 James Smith (http://loopj.com)
 * Licensed jointly under the GPL and MIT licenses,
 * choose which one suits your project best!
 *
 */
;(function ($) {
  var DEFAULT_SETTINGS = {
    // Search settings
    method: "GET",
    queryParam: "q",
    searchDelay: 300,
    minChars: 1,
    propertyToSearch: "name",
    jsonContainer: null,
    contentType: "json",
    excludeCurrent: false,
    excludeCurrentParameter: "x",

    // Prepopulation settings
    prePopulate: null,
    processPrePopulate: false,

    // Display settings
    hintText: "Type in a search term",
    noResultsText: "No results",
    searchingText: "Searching...",
    deleteText: "&#215;",
    animateDropdown: true,
    placeholder: null,
    theme: null,
    zindex: 999,
    resultsLimit: null,

    enableHTML: false,

    resultsFormatter: function(item) {
      var string = item[this.propertyToSearch];
      return "<li>" + (this.enableHTML ? string : _escapeHTML(string)) + "</li>";
    },

    tokenFormatter: function(item) {
      var string = item[this.propertyToSearch];
      return "<li><p>" + (this.enableHTML ? string : _escapeHTML(string)) + "</p></li>";
    },

    // Tokenization settings
    tokenLimit: null,
    tokenDelimiter: ",",
    preventDuplicates: false,
    tokenValue: "id",

    // Behavioral settings
    allowFreeTagging: false,
    allowTabOut: false,
    autoSelectFirstResult: false,

    // Callbacks
    onResult: null,
    onCachedResult: null,
    onAdd: null,
    onFreeTaggingAdd: null,
    onDelete: null,
    onReady: null,

    // Other settings
    idPrefix: "token-input-",

    // Keep track if the input is currently in disabled mode
    disabled: false
  };

  // Default classes to use when theming
  var DEFAULT_CLASSES = {
    tokenList            : "token-input-list",
    token                : "token-input-token",
    tokenReadOnly        : "token-input-token-readonly",
    tokenDelete          : "token-input-delete-token",
    selectedToken        : "token-input-selected-token",
    highlightedToken     : "token-input-highlighted-token",
    dropdown             : "token-input-dropdown",
    dropdownItem         : "token-input-dropdown-item",
    dropdownItem2        : "token-input-dropdown-item2",
    selectedDropdownItem : "token-input-selected-dropdown-item",
    inputToken           : "token-input-input-token",
    focused              : "token-input-focused",
    disabled             : "token-input-disabled"
  };

  // Input box position "enum"
  var POSITION = {
    BEFORE : 0,
    AFTER  : 1,
    END    : 2
  };

  // Keys "enum"
  var KEY = {
    BACKSPACE    : 8,
    TAB          : 9,
    ENTER        : 13,
    ESCAPE       : 27,
    SPACE        : 32,
    PAGE_UP      : 33,
    PAGE_DOWN    : 34,
    END          : 35,
    HOME         : 36,
    LEFT         : 37,
    UP           : 38,
    RIGHT        : 39,
    DOWN         : 40,
    NUMPAD_ENTER : 108,
    COMMA        : 188
  };

  var HTML_ESCAPES = {
    '&' : '&amp;',
    '<' : '&lt;',
    '>' : '&gt;',
    '"' : '&quot;',
    "'" : '&#x27;',
    '/' : '&#x2F;'
  };

  var HTML_ESCAPE_CHARS = /[&<>"'\/]/g;

  function coerceToString(val) {
    return String((val === null || val === undefined) ? '' : val);
  }

  function _escapeHTML(text) {
    return coerceToString(text).replace(HTML_ESCAPE_CHARS, function(match) {
      return HTML_ESCAPES[match];
    });
  }

  // Additional public (exposed) methods
  var methods = {
      init: function(url_or_data_or_function, options) {
          var settings = $.extend({}, DEFAULT_SETTINGS, options || {});

          return this.each(function () {
              $(this).data("settings", settings);
              $(this).data("tokenInputObject", new $.TokenList(this, url_or_data_or_function, settings));
          });
      },
      clear: function() {
          this.data("tokenInputObject").clear();
          return this;
      },
      add: function(item) {
          this.data("tokenInputObject").add(item);
          return this;
      },
      remove: function(item) {
          this.data("tokenInputObject").remove(item);
          return this;
      },
      get: function() {
          return this.data("tokenInputObject").getTokens();
      },
      toggleDisabled: function(disable) {
          this.data("tokenInputObject").toggleDisabled(disable);
          return this;
      },
      setOptions: function(options){
          $(this).data("settings", $.extend({}, $(this).data("settings"), options || {}));
          return this;
      },
      destroy: function () {
        if (this.data("tokenInputObject")) {
          this.data("tokenInputObject").clear();
          var tmpInput = this;
          var closest = this.parent();
          closest.empty();
          tmpInput.show();
          closest.append(tmpInput);
          return tmpInput;
        }
      }
  };

  // Expose the .tokenInput function to jQuery as a plugin
  $.fn.tokenInput = function (method) {
      // Method calling and initialization logic
      if (methods[method]) {
          return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
      } else {
          return methods.init.apply(this, arguments);
      }
  };

  // TokenList class for each input
  $.TokenList = function (input, url_or_data, settings) {
      //
      // Initialization
      //

      // Configure the data source
      if (typeof(url_or_data) === "string" || typeof(url_or_data) === "function") {
          // Set the url to query against
          $(input).data("settings").url = url_or_data;

          // If the URL is a function, evaluate it here to do our initalization work
          var url = computeURL();

          // Make a smart guess about cross-domain if it wasn't explicitly specified
          if ($(input).data("settings").crossDomain === undefined && typeof url === "string") {
              if(url.indexOf("://") === -1) {
                  $(input).data("settings").crossDomain = false;
              } else {
                  $(input).data("settings").crossDomain = (location.href.split(/\/+/g)[1] !== url.split(/\/+/g)[1]);
              }
          }
      } else if (typeof(url_or_data) === "object") {
          // Set the local data to search through
          $(input).data("settings").local_data = url_or_data;
      }

      // Build class names
      if($(input).data("settings").classes) {
          // Use custom class names
          $(input).data("settings").classes = $.extend({}, DEFAULT_CLASSES, $(input).data("settings").classes);
      } else if($(input).data("settings").theme) {
          // Use theme-suffixed default class names
          $(input).data("settings").classes = {};
          $.each(DEFAULT_CLASSES, function(key, value) {
              $(input).data("settings").classes[key] = value + "-" + $(input).data("settings").theme;
          });
      } else {
          $(input).data("settings").classes = DEFAULT_CLASSES;
      }

      // Save the tokens
      var saved_tokens = [];

      // Keep track of the number of tokens in the list
      var token_count = 0;

      // Basic cache to save on db hits
      var cache = new $.TokenList.Cache();

      // Keep track of the timeout, old vals
      var timeout;
      var input_val;

      // Create a new text input an attach keyup events
      var input_box = $("<input type=\"text\" autocomplete=\"off\" autocapitalize=\"off\"/>")
          .css({
              outline: "none"
          })
          .attr("id", $(input).data("settings").idPrefix + input.id)
          .focus(function () {
              if ($(input).data("settings").disabled) {
                  return false;
              } else
              if ($(input).data("settings").tokenLimit === null || $(input).data("settings").tokenLimit !== token_count) {
                  show_dropdown_hint();
              }
              token_list.addClass($(input).data("settings").classes.focused);
          })
          .blur(function () {
              hide_dropdown();

              if ($(input).data("settings").allowFreeTagging) {
                add_freetagging_tokens();
              }

              $(this).val("");
              token_list.removeClass($(input).data("settings").classes.focused);
          })
          .bind("keyup keydown blur update", resize_input)
          .keydown(function (event) {
              var previous_token;
              var next_token;

              switch(event.keyCode) {
                  case KEY.LEFT:
                  case KEY.RIGHT:
                  case KEY.UP:
                  case KEY.DOWN:
                    if(this.value.length === 0) {
                        previous_token = input_token.prev();
                        next_token = input_token.next();

                        if((previous_token.length && previous_token.get(0) === selected_token) ||
						   (next_token.length && next_token.get(0) === selected_token)) {
                            // Check if there is a previous/next token and it is selected
                            if(event.keyCode === KEY.LEFT || event.keyCode === KEY.UP) {
                                deselect_token($(selected_token), POSITION.BEFORE);
                            } else {
                                deselect_token($(selected_token), POSITION.AFTER);
                            }
                        } else if((event.keyCode === KEY.LEFT || event.keyCode === KEY.UP) && previous_token.length) {
                            // We are moving left, select the previous token if it exists
                            select_token($(previous_token.get(0)));
                        } else if((event.keyCode === KEY.RIGHT || event.keyCode === KEY.DOWN) && next_token.length) {
                            // We are moving right, select the next token if it exists
                            select_token($(next_token.get(0)));
                        }
                    } else {
                      var dropdown_item = null;

                      if (event.keyCode === KEY.DOWN || event.keyCode === KEY.RIGHT) {
                        dropdown_item = $(dropdown).find('li').first();

                        if (selected_dropdown_item) {
                          dropdown_item = $(selected_dropdown_item).next();
                        }
                      } else {
                        dropdown_item = $(dropdown).find('li').last();

                        if (selected_dropdown_item) {
                          dropdown_item = $(selected_dropdown_item).prev();
                        }
                      }

                      select_dropdown_item(dropdown_item);
                    }

                    break;

                  case KEY.BACKSPACE:
                      previous_token = input_token.prev();

                      if (this.value.length === 0) {
                        if (selected_token) {
                          delete_token($(selected_token));
                          hiddenInput.change();
                        } else if(previous_token.length) {
                          select_token($(previous_token.get(0)));
                        }

                        return false;
                      } else if($(this).val().length === 1) {
                          hide_dropdown();
                      } else {
                          // set a timeout just long enough to let this function finish.
                          setTimeout(function(){ do_search(); }, 5);
                      }
                      break;

                  case KEY.TAB:
                  case KEY.ENTER:
                  case KEY.NUMPAD_ENTER:
                  case KEY.COMMA:
                    if(selected_dropdown_item) {
                      add_token($(selected_dropdown_item).data("tokeninput"));
                      hiddenInput.change();
                    } else {
                      if ($(input).data("settings").allowFreeTagging) {
                        if($(input).data("settings").allowTabOut && $(this).val() === "") {
                          return true;
                        } else {
                          add_freetagging_tokens();
                        }
                      } else {
                        $(this).val("");
                        if($(input).data("settings").allowTabOut) {
                          return true;
                        }
                      }
                      event.stopPropagation();
                      event.preventDefault();
                    }
                    return false;

                  case KEY.ESCAPE:
                    hide_dropdown();
                    return true;

                  default:
                    if (String.fromCharCode(event.which)) {
                      // set a timeout just long enough to let this function finish.
                      setTimeout(function(){ do_search(); }, 5);
                    }
                    break;
              }
          });

      // Keep reference for placeholder
      if (settings.placeholder) {
        input_box.attr("placeholder", settings.placeholder);
      }

      // Keep a reference to the original input box
      var hiddenInput = $(input)
        .hide()
        .val("")
        .focus(function () {
          focusWithTimeout(input_box);
        })
        .blur(function () {
          input_box.blur();

          //return the object to this can be referenced in the callback functions.
          return hiddenInput;
        })
      ;

      // Keep a reference to the selected token and dropdown item
      var selected_token = null;
      var selected_token_index = 0;
      var selected_dropdown_item = null;

      // The list to store the token items in
      var token_list = $("<ul />")
          .addClass($(input).data("settings").classes.tokenList)
          .click(function (event) {
              var li = $(event.target).closest("li");
              if(li && li.get(0) && $.data(li.get(0), "tokeninput")) {
                  toggle_select_token(li);
              } else {
                  // Deselect selected token
                  if(selected_token) {
                      deselect_token($(selected_token), POSITION.END);
                  }

                  // Focus input box
                  focusWithTimeout(input_box);
              }
          })
          .mouseover(function (event) {
              var li = $(event.target).closest("li");
              if(li && selected_token !== this) {
                  li.addClass($(input).data("settings").classes.highlightedToken);
              }
          })
          .mouseout(function (event) {
              var li = $(event.target).closest("li");
              if(li && selected_token !== this) {
                  li.removeClass($(input).data("settings").classes.highlightedToken);
              }
          })
          .insertBefore(hiddenInput);

      // The token holding the input box
      var input_token = $("<li />")
          .addClass($(input).data("settings").classes.inputToken)
          .appendTo(token_list)
          .append(input_box);

      // The list to store the dropdown items in
      var dropdown = $("<div/>")
          .addClass($(input).data("settings").classes.dropdown)
          .appendTo("body")
          .hide();

      // Magic element to help us resize the text input
      var input_resizer = $("<tester/>")
          .insertAfter(input_box)
          .css({
              position: "absolute",
              top: -9999,
              left: -9999,
              width: "auto",
              fontSize: input_box.css("fontSize"),
              fontFamily: input_box.css("fontFamily"),
              fontWeight: input_box.css("fontWeight"),
              letterSpacing: input_box.css("letterSpacing"),
              whiteSpace: "nowrap"
          });

      // Pre-populate list if items exist
      hiddenInput.val("");
      var li_data = $(input).data("settings").prePopulate || hiddenInput.data("pre");

      if ($(input).data("settings").processPrePopulate && $.isFunction($(input).data("settings").onResult)) {
          li_data = $(input).data("settings").onResult.call(hiddenInput, li_data);
      }

      if (li_data && li_data.length) {
          $.each(li_data, function (index, value) {
              insert_token(value);
              checkTokenLimit();
              input_box.attr("placeholder", null)
          });
      }

      // Check if widget should initialize as disabled
      if ($(input).data("settings").disabled) {
          toggleDisabled(true);
      }

      // Initialization is done
      if (typeof($(input).data("settings").onReady) === "function") {
        $(input).data("settings").onReady.call();
      }

      //
      // Public functions
      //

      this.clear = function() {
          token_list.children("li").each(function() {
              if ($(this).children("input").length === 0) {
                  delete_token($(this));
              }
          });
      };

      this.add = function(item) {
          add_token(item);
      };

      this.remove = function(item) {
          token_list.children("li").each(function() {
              if ($(this).children("input").length === 0) {
                  var currToken = $(this).data("tokeninput");
                  var match = true;
                  for (var prop in item) {
                      if (item[prop] !== currToken[prop]) {
                          match = false;
                          break;
                      }
                  }
                  if (match) {
                      delete_token($(this));
                  }
              }
          });
      };

      this.getTokens = function() {
          return saved_tokens;
      };

      this.toggleDisabled = function(disable) {
          toggleDisabled(disable);
      };

      // Resize input to maximum width so the placeholder can be seen
      resize_input();

      //
      // Private functions
      //

      function escapeHTML(text) {
        return $(input).data("settings").enableHTML ? text : _escapeHTML(text);
      }

      // Toggles the widget between enabled and disabled state, or according
      // to the [disable] parameter.
      function toggleDisabled(disable) {
          if (typeof disable === 'boolean') {
              $(input).data("settings").disabled = disable
          } else {
              $(input).data("settings").disabled = !$(input).data("settings").disabled;
          }
          input_box.attr('disabled', $(input).data("settings").disabled);
          token_list.toggleClass($(input).data("settings").classes.disabled, $(input).data("settings").disabled);
          // if there is any token selected we deselect it
          if(selected_token) {
              deselect_token($(selected_token), POSITION.END);
          }
          hiddenInput.attr('disabled', $(input).data("settings").disabled);
      }

      function checkTokenLimit() {
          if($(input).data("settings").tokenLimit !== null && token_count >= $(input).data("settings").tokenLimit) {
              input_box.hide();
              hide_dropdown();
              return;
          }
      }

      function resize_input() {
          if(input_val === (input_val = input_box.val())) {return;}

          // Get width left on the current line
          var width_left = token_list.width() - input_box.offset().left - token_list.offset().left;
          // Enter new content into resizer and resize input accordingly
          input_resizer.html(_escapeHTML(input_val) || _escapeHTML(settings.placeholder));
          // Get maximum width, minimum the size of input and maximum the widget's width
          input_box.width(Math.min(token_list.width(),
                                   Math.max(width_left, input_resizer.width() + 30)));
      }

      function add_freetagging_tokens() {
          var value = $.trim(input_box.val());
          var tokens = value.split($(input).data("settings").tokenDelimiter);
          $.each(tokens, function(i, token) {
            if (!token) {
              return;
            }

            if ($.isFunction($(input).data("settings").onFreeTaggingAdd)) {
              token = $(input).data("settings").onFreeTaggingAdd.call(hiddenInput, token);
            }
            var object = {};
            object[$(input).data("settings").tokenValue] = object[$(input).data("settings").propertyToSearch] = token;
            add_token(object);
          });
      }

      // Inner function to a token to the list
      function insert_token(item) {
          var $this_token = $($(input).data("settings").tokenFormatter(item));
          var readonly = item.readonly === true;

          if(readonly) $this_token.addClass($(input).data("settings").classes.tokenReadOnly);

          $this_token.addClass($(input).data("settings").classes.token).insertBefore(input_token);

          // The 'delete token' button
          if(!readonly) {
            $("<span>" + $(input).data("settings").deleteText + "</span>")
                .addClass($(input).data("settings").classes.tokenDelete)
                .appendTo($this_token)
                .click(function () {
                    if (!$(input).data("settings").disabled) {
                        delete_token($(this).parent());
                        hiddenInput.change();
                        return false;
                    }
                });
          }

          // Store data on the token
          var token_data = item;
          $.data($this_token.get(0), "tokeninput", item);

          // Save this token for duplicate checking
          saved_tokens = saved_tokens.slice(0,selected_token_index).concat([token_data]).concat(saved_tokens.slice(selected_token_index));
          selected_token_index++;

          // Update the hidden input
          update_hiddenInput(saved_tokens, hiddenInput);

          token_count += 1;

          // Check the token limit
          if($(input).data("settings").tokenLimit !== null && token_count >= $(input).data("settings").tokenLimit) {
              input_box.hide();
              hide_dropdown();
          }

          return $this_token;
      }

      // Add a token to the token list based on user input
      function add_token (item) {
          var callback = $(input).data("settings").onAdd;

          // See if the token already exists and select it if we don't want duplicates
          if(token_count > 0 && $(input).data("settings").preventDuplicates) {
              var found_existing_token = null;
              token_list.children().each(function () {
                  var existing_token = $(this);
                  var existing_data = $.data(existing_token.get(0), "tokeninput");
                  if(existing_data && existing_data[settings.tokenValue] === item[settings.tokenValue]) {
                      found_existing_token = existing_token;
                      return false;
                  }
              });

              if(found_existing_token) {
                  select_token(found_existing_token);
                  input_token.insertAfter(found_existing_token);
                  focusWithTimeout(input_box);
                  return;
              }
          }

          // Squeeze input_box so we force no unnecessary line break
          input_box.width(1);

          // Insert the new tokens
          if($(input).data("settings").tokenLimit == null || token_count < $(input).data("settings").tokenLimit) {
              insert_token(item);
              // Remove the placeholder so it's not seen after you've added a token
              input_box.attr("placeholder", null);
              checkTokenLimit();
          }

          // Clear input box
          input_box.val("");

          // Don't show the help dropdown, they've got the idea
          hide_dropdown();

          // Execute the onAdd callback if defined
          if($.isFunction(callback)) {
              callback.call(hiddenInput,item);
          }
      }

      // Select a token in the token list
      function select_token (token) {
          if (!$(input).data("settings").disabled) {
              token.addClass($(input).data("settings").classes.selectedToken);
              selected_token = token.get(0);

              // Hide input box
              input_box.val("");

              // Hide dropdown if it is visible (eg if we clicked to select token)
              hide_dropdown();
          }
      }

      // Deselect a token in the token list
      function deselect_token (token, position) {
          token.removeClass($(input).data("settings").classes.selectedToken);
          selected_token = null;

          if(position === POSITION.BEFORE) {
              input_token.insertBefore(token);
              selected_token_index--;
          } else if(position === POSITION.AFTER) {
              input_token.insertAfter(token);
              selected_token_index++;
          } else {
              input_token.appendTo(token_list);
              selected_token_index = token_count;
          }

          // Show the input box and give it focus again
          focusWithTimeout(input_box);
      }

      // Toggle selection of a token in the token list
      function toggle_select_token(token) {
          var previous_selected_token = selected_token;

          if(selected_token) {
              deselect_token($(selected_token), POSITION.END);
          }

          if(previous_selected_token === token.get(0)) {
              deselect_token(token, POSITION.END);
          } else {
              select_token(token);
          }
      }

      // Delete a token from the token list
      function delete_token (token) {
          // Remove the id from the saved list
          var token_data = $.data(token.get(0), "tokeninput");
          var callback = $(input).data("settings").onDelete;

          var index = token.prevAll().length;
          if(index > selected_token_index) index--;

          // Delete the token
          token.remove();
          selected_token = null;

          // Show the input box and give it focus again
          focusWithTimeout(input_box);

          // Remove this token from the saved list
          saved_tokens = saved_tokens.slice(0,index).concat(saved_tokens.slice(index+1));
          if (saved_tokens.length == 0) {
              input_box.attr("placeholder", settings.placeholder)
          }
          if(index < selected_token_index) selected_token_index--;

          // Update the hidden input
          update_hiddenInput(saved_tokens, hiddenInput);

          token_count -= 1;

          if($(input).data("settings").tokenLimit !== null) {
              input_box
                  .show()
                  .val("");
              focusWithTimeout(input_box);
          }

          // Execute the onDelete callback if defined
          if($.isFunction(callback)) {
              callback.call(hiddenInput,token_data);
          }
      }

      // Update the hidden input box value
      function update_hiddenInput(saved_tokens, hiddenInput) {
          var token_values = $.map(saved_tokens, function (el) {
              if(typeof $(input).data("settings").tokenValue == 'function')
                return $(input).data("settings").tokenValue.call(this, el);

              return el[$(input).data("settings").tokenValue];
          });
          hiddenInput.val(token_values.join($(input).data("settings").tokenDelimiter));

      }

      // Hide and clear the results dropdown
      function hide_dropdown () {
          dropdown.hide().empty();
          selected_dropdown_item = null;
      }

      function show_dropdown() {
          dropdown
              .css({
                  position: "absolute",
                  top: token_list.offset().top + token_list.outerHeight(true) - 10,
                  left: token_list.offset().left,
                  width: token_list.width() + 10,
                  'z-index': $(input).data("settings").zindex
              })
              .show();
      }

      function show_dropdown_searching () {
          if($(input).data("settings").searchingText) {
              dropdown.html("<p>" + escapeHTML($(input).data("settings").searchingText) + "</p>");
              show_dropdown();
          }
      }

      function show_dropdown_hint () {
          if($(input).data("settings").hintText) {
              dropdown.html("<p>" + escapeHTML($(input).data("settings").hintText) + "</p>");
              show_dropdown();
          }
      }

      var regexp_special_chars = new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g');
      function regexp_escape(term) {
          return term.replace(regexp_special_chars, '\\$&');
      }

      // Highlight the query part of the search term
      function highlight_term(value, term) {
          return value.replace(
            new RegExp(
              "(?![^&;]+;)(?!<[^<>]*)(" + regexp_escape(term) + ")(?![^<>]*>)(?![^&;]+;)",
              "gi"
            ), function(match, p1) {
              return "<b>" + escapeHTML(p1) + "</b>";
            }
          );
      }

      function find_value_and_highlight_term(template, value, term) {
          return template.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)(" + regexp_escape(value) + ")(?![^<>]*>)(?![^&;]+;)", "g"), highlight_term(value, term));
      }

      // exclude existing tokens from dropdown, so the list is clearer
      function excludeCurrent(results) {
          if ($(input).data("settings").excludeCurrent) {
              var currentTokens = $(input).data("tokenInputObject").getTokens(),
                  trimmedList = [];
              if (currentTokens.length) {
                  $.each(results, function(index, value) {
                      var notFound = true;
                      $.each(currentTokens, function(cIndex, cValue) {
                          if (value[$(input).data("settings").propertyToSearch] == cValue[$(input).data("settings").propertyToSearch]) {
                              notFound = false;
                              return false;
                          }
                      });

                      if (notFound) {
                          trimmedList.push(value);
                      }
                  });
                  results = trimmedList;
              }
          }

          return results;
      }

      // Populate the results dropdown with some results
      function populateDropdown (query, results) {
          // exclude current tokens if configured
		  
          results = excludeCurrent(results);

          if(results && results.length) {
              dropdown.empty();
              var dropdown_ul = $("<ul/>")
                  .appendTo(dropdown)
                  .mouseover(function (event) {
                      select_dropdown_item($(event.target).closest("li"));
                  })
                  .mousedown(function (event) {
                      add_token($(event.target).closest("li").data("tokeninput"));
                      hiddenInput.change();
                      return false;
                  })
                  .hide();

              if ($(input).data("settings").resultsLimit && results.length > $(input).data("settings").resultsLimit) {
                  results = results.slice(0, $(input).data("settings").resultsLimit);
              }

              $.each(results, function(index, value) {
                  var this_li = $(input).data("settings").resultsFormatter(value);

                  this_li = find_value_and_highlight_term(this_li ,value[$(input).data("settings").propertyToSearch], query);
                  this_li = $(this_li).appendTo(dropdown_ul);

                  if(index % 2) {
                      this_li.addClass($(input).data("settings").classes.dropdownItem);
                  } else {
                      this_li.addClass($(input).data("settings").classes.dropdownItem2);
                  }

                  if(index === 0 && $(input).data("settings").autoSelectFirstResult) {
                      select_dropdown_item(this_li);
                  }

                  $.data(this_li.get(0), "tokeninput", value);
              });

              show_dropdown();

              if($(input).data("settings").animateDropdown) {
                  dropdown_ul.slideDown("fast");
              } else {
                  dropdown_ul.show();
              }
          } else {
              if($(input).data("settings").noResultsText) {
                  dropdown.html("<p>" + escapeHTML($(input).data("settings").noResultsText) + "</p>");
                  show_dropdown();
              }
          }
      }

      // Highlight an item in the results dropdown
      function select_dropdown_item (item) {
          if(item) {
              if(selected_dropdown_item) {
                  deselect_dropdown_item($(selected_dropdown_item));
              }

              item.addClass($(input).data("settings").classes.selectedDropdownItem);
              selected_dropdown_item = item.get(0);
          }
      }

      // Remove highlighting from an item in the results dropdown
      function deselect_dropdown_item (item) {
          item.removeClass($(input).data("settings").classes.selectedDropdownItem);
          selected_dropdown_item = null;
      }

      // Do a search and show the "searching" dropdown if the input is longer
      // than $(input).data("settings").minChars
      function do_search() {
          var query = input_box.val();

          if(query && query.length) {
              if(selected_token) {
                  deselect_token($(selected_token), POSITION.AFTER);
              }

              if(query.length >= $(input).data("settings").minChars) {
                  show_dropdown_searching();
                  clearTimeout(timeout);

                  timeout = setTimeout(function(){
                      run_search(query);
                  }, $(input).data("settings").searchDelay);
              } else {
                  hide_dropdown();
              }
          }
      }

      // Do the actual search
      function run_search(query) {
          var cache_key = query + computeURL();
          var cached_results = cache.get(cache_key);
		  
		  console.log(query);
		  
          if (cached_results) {
			  console.log('cached_results');
              if ($.isFunction($(input).data("settings").onCachedResult)) {
                cached_results = $(input).data("settings").onCachedResult.call(hiddenInput, cached_results);
              }
              populateDropdown(query, cached_results);
          } else {
			  
              // Are we doing an ajax search or local data search?
              if($(input).data("settings").url) {
				  console.log('url');
                  var url = computeURL();
                  // Extract existing get params
                  var ajax_params = {};
                  ajax_params.data = {};
                  if(url.indexOf("?") > -1) {
                      var parts = url.split("?");
                      ajax_params.url = parts[0];

                      var param_array = parts[1].split("&");
                      $.each(param_array, function (index, value) {
                          var kv = value.split("=");
                          ajax_params.data[kv[0]] = kv[1];
                      });
                  } else {
                      ajax_params.url = url;
                  }

                  // Prepare the request
                  ajax_params.data[$(input).data("settings").queryParam] = query;
                  ajax_params.type = $(input).data("settings").method;
                  ajax_params.dataType = $(input).data("settings").contentType;
                  if ($(input).data("settings").crossDomain) {
                      ajax_params.dataType = "jsonp";
                  }

                  // exclude current tokens?
                  // send exclude list to the server, so it can also exclude existing tokens
                  if ($(input).data("settings").excludeCurrent) {
                      var currentTokens = $(input).data("tokenInputObject").getTokens();
                      var tokenList = $.map(currentTokens, function (el) {
                          if(typeof $(input).data("settings").tokenValue == 'function')
                              return $(input).data("settings").tokenValue.call(this, el);

                          return el[$(input).data("settings").tokenValue];
                      });

                      ajax_params.data[$(input).data("settings").excludeCurrentParameter] = tokenList.join($(input).data("settings").tokenDelimiter);
                  }

                  // Attach the success callback
                  ajax_params.success = function(results) {
                    cache.add(cache_key, $(input).data("settings").jsonContainer ? results[$(input).data("settings").jsonContainer] : results);
                    if($.isFunction($(input).data("settings").onResult)) {
                        results = $(input).data("settings").onResult.call(hiddenInput, results);
                    }

                    // only populate the dropdown if the results are associated with the active search query
                    if(input_box.val() === query) {
                        populateDropdown(query, $(input).data("settings").jsonContainer ? results[$(input).data("settings").jsonContainer] : results);
                    }
                  };

                  // Provide a beforeSend callback
                  if (settings.onSend) {
                    settings.onSend(ajax_params);
                  }

                  // Make the request
                  $.ajax(ajax_params);
              } else if($(input).data("settings").local_data) {
				  console.log('local_data', $(input).data("settings").propertyToSearch);
                  // Do the search through local data
                  var results = $.grep($(input).data("settings").local_data, function (row) {
					  var temp_local = quitarAcentos(row[$(input).data("settings").propertyToSearch].toLowerCase());
					  var temp_query = quitarAcentos(query.toLowerCase());
					  
                      return temp_local.indexOf(temp_query) > -1;
					  
					  //return row[$(input).data("settings").propertyToSearch].toLowerCase().indexOf(query.toLowerCase()) > -1;
                  });

                  cache.add(cache_key, results);
                  if($.isFunction($(input).data("settings").onResult)) {
                      results = $(input).data("settings").onResult.call(hiddenInput, results);
                  }
                  populateDropdown(query, results);
              }
          }
      }
	  function quitarAcentos(texto){
		  	/*
			var accentsMap = [
				["a", "á|à|ã|â|ä"],
				["e", "é|è|ê|ë"],
				["i", "í|ì|î|ï"],
				["o", "ó|ò|ô|õ|ö"],
				["u", "ú|ù|û|ü"],
				["c", "ç"],
				["n", "ñ"]
			];
			*/
			/*
		  	texto.replaceAll(/á|à|ã|â|ä/gi, "a");
			texto.replaceAll(/é|è|ê|ë/gi, "e");
			texto.replaceAll(/í|ì|î|ï/gi, "i");
			texto.replaceAll(/ó|ò|ô|õ|ö/gi, "o");
			texto.replaceAll(/ú|ù|û|ü/gi, "u");
			texto.replaceAll(/ç/gi, "c");
			texto.replaceAll(/ñ/gi, "n");
		 	return texto;
			*/
			return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"");
	  }
	  
      // compute the dynamic URL
      function computeURL() {
          var settings = $(input).data("settings");
          return typeof settings.url == 'function' ? settings.url.call(settings) : settings.url;
      }

      // Bring browser focus to the specified object.
      // Use of setTimeout is to get around an IE bug.
      // (See, e.g., http://stackoverflow.com/questions/2600186/focus-doesnt-work-in-ie)
      //
      // obj: a jQuery object to focus()
      function focusWithTimeout(object) {
          setTimeout(
            function() {
			  object.focus();
            },
			50
		  );
      }
  };

  // Really basic cache for the results
  $.TokenList.Cache = function (options) {
    var settings, data = {}, size = 0, flush;

    settings = $.extend({ max_size: 500 }, options);

    flush = function () {
      data = {};
      size = 0;
    };

    this.add = function (query, results) {
      if (size > settings.max_size) {
        flush();
      }

      if (!data[query]) {
        size += 1;
      }

      data[query] = results;
    };

    this.get = function (query) {
      return data[query];
    };
  };

}(jQuery));

		/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(u,p){var d={},l=d.lib={},s=function(){},t=l.Base={extend:function(a){s.prototype=this;var c=new s;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
r=l.WordArray=t.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=p?c:4*a.length},toString:function(a){return(a||v).stringify(this)},concat:function(a){var c=this.words,e=a.words,j=this.sigBytes;a=a.sigBytes;this.clamp();if(j%4)for(var k=0;k<a;k++)c[j+k>>>2]|=(e[k>>>2]>>>24-8*(k%4)&255)<<24-8*((j+k)%4);else if(65535<e.length)for(k=0;k<a;k+=4)c[j+k>>>2]=e[k>>>2];else c.push.apply(c,e);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
32-8*(c%4);a.length=u.ceil(c/4)},clone:function(){var a=t.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],e=0;e<a;e+=4)c.push(4294967296*u.random()|0);return new r.init(c,a)}}),w=d.enc={},v=w.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++){var k=c[j>>>2]>>>24-8*(j%4)&255;e.push((k>>>4).toString(16));e.push((k&15).toString(16))}return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j+=2)e[j>>>3]|=parseInt(a.substr(j,
2),16)<<24-4*(j%8);return new r.init(e,c/2)}},b=w.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var e=[],j=0;j<a;j++)e.push(String.fromCharCode(c[j>>>2]>>>24-8*(j%4)&255));return e.join("")},parse:function(a){for(var c=a.length,e=[],j=0;j<c;j++)e[j>>>2]|=(a.charCodeAt(j)&255)<<24-8*(j%4);return new r.init(e,c)}},x=w.Utf8={stringify:function(a){try{return decodeURIComponent(escape(b.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return b.parse(unescape(encodeURIComponent(a)))}},
q=l.BufferedBlockAlgorithm=t.extend({reset:function(){this._data=new r.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=x.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,e=c.words,j=c.sigBytes,k=this.blockSize,b=j/(4*k),b=a?u.ceil(b):u.max((b|0)-this._minBufferSize,0);a=b*k;j=u.min(4*a,j);if(a){for(var q=0;q<a;q+=k)this._doProcessBlock(e,q);q=e.splice(0,a);c.sigBytes-=j}return new r.init(q,j)},clone:function(){var a=t.clone.call(this);
a._data=this._data.clone();return a},_minBufferSize:0});l.Hasher=q.extend({cfg:t.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){q.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(b,e){return(new a.init(e)).finalize(b)}},_createHmacHelper:function(a){return function(b,e){return(new n.HMAC.init(a,
e)).finalize(b)}}});var n=d.algo={};return d}(Math);
(function(){var u=CryptoJS,p=u.lib.WordArray;u.enc.Base64={stringify:function(d){var l=d.words,p=d.sigBytes,t=this._map;d.clamp();d=[];for(var r=0;r<p;r+=3)for(var w=(l[r>>>2]>>>24-8*(r%4)&255)<<16|(l[r+1>>>2]>>>24-8*((r+1)%4)&255)<<8|l[r+2>>>2]>>>24-8*((r+2)%4)&255,v=0;4>v&&r+0.75*v<p;v++)d.push(t.charAt(w>>>6*(3-v)&63));if(l=t.charAt(64))for(;d.length%4;)d.push(l);return d.join("")},parse:function(d){var l=d.length,s=this._map,t=s.charAt(64);t&&(t=d.indexOf(t),-1!=t&&(l=t));for(var t=[],r=0,w=0;w<
l;w++)if(w%4){var v=s.indexOf(d.charAt(w-1))<<2*(w%4),b=s.indexOf(d.charAt(w))>>>6-2*(w%4);t[r>>>2]|=(v|b)<<24-8*(r%4);r++}return p.create(t,r)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}})();
(function(u){function p(b,n,a,c,e,j,k){b=b+(n&a|~n&c)+e+k;return(b<<j|b>>>32-j)+n}function d(b,n,a,c,e,j,k){b=b+(n&c|a&~c)+e+k;return(b<<j|b>>>32-j)+n}function l(b,n,a,c,e,j,k){b=b+(n^a^c)+e+k;return(b<<j|b>>>32-j)+n}function s(b,n,a,c,e,j,k){b=b+(a^(n|~c))+e+k;return(b<<j|b>>>32-j)+n}for(var t=CryptoJS,r=t.lib,w=r.WordArray,v=r.Hasher,r=t.algo,b=[],x=0;64>x;x++)b[x]=4294967296*u.abs(u.sin(x+1))|0;r=r.MD5=v.extend({_doReset:function(){this._hash=new w.init([1732584193,4023233417,2562383102,271733878])},
_doProcessBlock:function(q,n){for(var a=0;16>a;a++){var c=n+a,e=q[c];q[c]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360}var a=this._hash.words,c=q[n+0],e=q[n+1],j=q[n+2],k=q[n+3],z=q[n+4],r=q[n+5],t=q[n+6],w=q[n+7],v=q[n+8],A=q[n+9],B=q[n+10],C=q[n+11],u=q[n+12],D=q[n+13],E=q[n+14],x=q[n+15],f=a[0],m=a[1],g=a[2],h=a[3],f=p(f,m,g,h,c,7,b[0]),h=p(h,f,m,g,e,12,b[1]),g=p(g,h,f,m,j,17,b[2]),m=p(m,g,h,f,k,22,b[3]),f=p(f,m,g,h,z,7,b[4]),h=p(h,f,m,g,r,12,b[5]),g=p(g,h,f,m,t,17,b[6]),m=p(m,g,h,f,w,22,b[7]),
f=p(f,m,g,h,v,7,b[8]),h=p(h,f,m,g,A,12,b[9]),g=p(g,h,f,m,B,17,b[10]),m=p(m,g,h,f,C,22,b[11]),f=p(f,m,g,h,u,7,b[12]),h=p(h,f,m,g,D,12,b[13]),g=p(g,h,f,m,E,17,b[14]),m=p(m,g,h,f,x,22,b[15]),f=d(f,m,g,h,e,5,b[16]),h=d(h,f,m,g,t,9,b[17]),g=d(g,h,f,m,C,14,b[18]),m=d(m,g,h,f,c,20,b[19]),f=d(f,m,g,h,r,5,b[20]),h=d(h,f,m,g,B,9,b[21]),g=d(g,h,f,m,x,14,b[22]),m=d(m,g,h,f,z,20,b[23]),f=d(f,m,g,h,A,5,b[24]),h=d(h,f,m,g,E,9,b[25]),g=d(g,h,f,m,k,14,b[26]),m=d(m,g,h,f,v,20,b[27]),f=d(f,m,g,h,D,5,b[28]),h=d(h,f,
m,g,j,9,b[29]),g=d(g,h,f,m,w,14,b[30]),m=d(m,g,h,f,u,20,b[31]),f=l(f,m,g,h,r,4,b[32]),h=l(h,f,m,g,v,11,b[33]),g=l(g,h,f,m,C,16,b[34]),m=l(m,g,h,f,E,23,b[35]),f=l(f,m,g,h,e,4,b[36]),h=l(h,f,m,g,z,11,b[37]),g=l(g,h,f,m,w,16,b[38]),m=l(m,g,h,f,B,23,b[39]),f=l(f,m,g,h,D,4,b[40]),h=l(h,f,m,g,c,11,b[41]),g=l(g,h,f,m,k,16,b[42]),m=l(m,g,h,f,t,23,b[43]),f=l(f,m,g,h,A,4,b[44]),h=l(h,f,m,g,u,11,b[45]),g=l(g,h,f,m,x,16,b[46]),m=l(m,g,h,f,j,23,b[47]),f=s(f,m,g,h,c,6,b[48]),h=s(h,f,m,g,w,10,b[49]),g=s(g,h,f,m,
E,15,b[50]),m=s(m,g,h,f,r,21,b[51]),f=s(f,m,g,h,u,6,b[52]),h=s(h,f,m,g,k,10,b[53]),g=s(g,h,f,m,B,15,b[54]),m=s(m,g,h,f,e,21,b[55]),f=s(f,m,g,h,v,6,b[56]),h=s(h,f,m,g,x,10,b[57]),g=s(g,h,f,m,t,15,b[58]),m=s(m,g,h,f,D,21,b[59]),f=s(f,m,g,h,z,6,b[60]),h=s(h,f,m,g,C,10,b[61]),g=s(g,h,f,m,j,15,b[62]),m=s(m,g,h,f,A,21,b[63]);a[0]=a[0]+f|0;a[1]=a[1]+m|0;a[2]=a[2]+g|0;a[3]=a[3]+h|0},_doFinalize:function(){var b=this._data,n=b.words,a=8*this._nDataBytes,c=8*b.sigBytes;n[c>>>5]|=128<<24-c%32;var e=u.floor(a/
4294967296);n[(c+64>>>9<<4)+15]=(e<<8|e>>>24)&16711935|(e<<24|e>>>8)&4278255360;n[(c+64>>>9<<4)+14]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(n.length+1);this._process();b=this._hash;n=b.words;for(a=0;4>a;a++)c=n[a],n[a]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360;return b},clone:function(){var b=v.clone.call(this);b._hash=this._hash.clone();return b}});t.MD5=v._createHelper(r);t.HmacMD5=v._createHmacHelper(r)})(Math);
(function(){var u=CryptoJS,p=u.lib,d=p.Base,l=p.WordArray,p=u.algo,s=p.EvpKDF=d.extend({cfg:d.extend({keySize:4,hasher:p.MD5,iterations:1}),init:function(d){this.cfg=this.cfg.extend(d)},compute:function(d,r){for(var p=this.cfg,s=p.hasher.create(),b=l.create(),u=b.words,q=p.keySize,p=p.iterations;u.length<q;){n&&s.update(n);var n=s.update(d).finalize(r);s.reset();for(var a=1;a<p;a++)n=s.finalize(n),s.reset();b.concat(n)}b.sigBytes=4*q;return b}});u.EvpKDF=function(d,l,p){return s.create(p).compute(d,
l)}})();
CryptoJS.lib.Cipher||function(u){var p=CryptoJS,d=p.lib,l=d.Base,s=d.WordArray,t=d.BufferedBlockAlgorithm,r=p.enc.Base64,w=p.algo.EvpKDF,v=d.Cipher=t.extend({cfg:l.extend(),createEncryptor:function(e,a){return this.create(this._ENC_XFORM_MODE,e,a)},createDecryptor:function(e,a){return this.create(this._DEC_XFORM_MODE,e,a)},init:function(e,a,b){this.cfg=this.cfg.extend(b);this._xformMode=e;this._key=a;this.reset()},reset:function(){t.reset.call(this);this._doReset()},process:function(e){this._append(e);return this._process()},
finalize:function(e){e&&this._append(e);return this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(e){return{encrypt:function(b,k,d){return("string"==typeof k?c:a).encrypt(e,b,k,d)},decrypt:function(b,k,d){return("string"==typeof k?c:a).decrypt(e,b,k,d)}}}});d.StreamCipher=v.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var b=p.mode={},x=function(e,a,b){var c=this._iv;c?this._iv=u:c=this._prevBlock;for(var d=0;d<b;d++)e[a+d]^=
c[d]},q=(d.BlockCipherMode=l.extend({createEncryptor:function(e,a){return this.Encryptor.create(e,a)},createDecryptor:function(e,a){return this.Decryptor.create(e,a)},init:function(e,a){this._cipher=e;this._iv=a}})).extend();q.Encryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize;x.call(this,e,a,c);b.encryptBlock(e,a);this._prevBlock=e.slice(a,a+c)}});q.Decryptor=q.extend({processBlock:function(e,a){var b=this._cipher,c=b.blockSize,d=e.slice(a,a+c);b.decryptBlock(e,a);x.call(this,
e,a,c);this._prevBlock=d}});b=b.CBC=q;q=(p.pad={}).Pkcs7={pad:function(a,b){for(var c=4*b,c=c-a.sigBytes%c,d=c<<24|c<<16|c<<8|c,l=[],n=0;n<c;n+=4)l.push(d);c=s.create(l,c);a.concat(c)},unpad:function(a){a.sigBytes-=a.words[a.sigBytes-1>>>2]&255}};d.BlockCipher=v.extend({cfg:v.cfg.extend({mode:b,padding:q}),reset:function(){v.reset.call(this);var a=this.cfg,b=a.iv,a=a.mode;if(this._xformMode==this._ENC_XFORM_MODE)var c=a.createEncryptor;else c=a.createDecryptor,this._minBufferSize=1;this._mode=c.call(a,
this,b&&b.words)},_doProcessBlock:function(a,b){this._mode.processBlock(a,b)},_doFinalize:function(){var a=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){a.pad(this._data,this.blockSize);var b=this._process(!0)}else b=this._process(!0),a.unpad(b);return b},blockSize:4});var n=d.CipherParams=l.extend({init:function(a){this.mixIn(a)},toString:function(a){return(a||this.formatter).stringify(this)}}),b=(p.format={}).OpenSSL={stringify:function(a){var b=a.ciphertext;a=a.salt;return(a?s.create([1398893684,
1701076831]).concat(a).concat(b):b).toString(r)},parse:function(a){a=r.parse(a);var b=a.words;if(1398893684==b[0]&&1701076831==b[1]){var c=s.create(b.slice(2,4));b.splice(0,4);a.sigBytes-=16}return n.create({ciphertext:a,salt:c})}},a=d.SerializableCipher=l.extend({cfg:l.extend({format:b}),encrypt:function(a,b,c,d){d=this.cfg.extend(d);var l=a.createEncryptor(c,d);b=l.finalize(b);l=l.cfg;return n.create({ciphertext:b,key:c,iv:l.iv,algorithm:a,mode:l.mode,padding:l.padding,blockSize:a.blockSize,formatter:d.format})},
decrypt:function(a,b,c,d){d=this.cfg.extend(d);b=this._parse(b,d.format);return a.createDecryptor(c,d).finalize(b.ciphertext)},_parse:function(a,b){return"string"==typeof a?b.parse(a,this):a}}),p=(p.kdf={}).OpenSSL={execute:function(a,b,c,d){d||(d=s.random(8));a=w.create({keySize:b+c}).compute(a,d);c=s.create(a.words.slice(b),4*c);a.sigBytes=4*b;return n.create({key:a,iv:c,salt:d})}},c=d.PasswordBasedCipher=a.extend({cfg:a.cfg.extend({kdf:p}),encrypt:function(b,c,d,l){l=this.cfg.extend(l);d=l.kdf.execute(d,
b.keySize,b.ivSize);l.iv=d.iv;b=a.encrypt.call(this,b,c,d.key,l);b.mixIn(d);return b},decrypt:function(b,c,d,l){l=this.cfg.extend(l);c=this._parse(c,l.format);d=l.kdf.execute(d,b.keySize,b.ivSize,c.salt);l.iv=d.iv;return a.decrypt.call(this,b,c,d.key,l)}})}();
(function(){for(var u=CryptoJS,p=u.lib.BlockCipher,d=u.algo,l=[],s=[],t=[],r=[],w=[],v=[],b=[],x=[],q=[],n=[],a=[],c=0;256>c;c++)a[c]=128>c?c<<1:c<<1^283;for(var e=0,j=0,c=0;256>c;c++){var k=j^j<<1^j<<2^j<<3^j<<4,k=k>>>8^k&255^99;l[e]=k;s[k]=e;var z=a[e],F=a[z],G=a[F],y=257*a[k]^16843008*k;t[e]=y<<24|y>>>8;r[e]=y<<16|y>>>16;w[e]=y<<8|y>>>24;v[e]=y;y=16843009*G^65537*F^257*z^16843008*e;b[k]=y<<24|y>>>8;x[k]=y<<16|y>>>16;q[k]=y<<8|y>>>24;n[k]=y;e?(e=z^a[a[a[G^z]]],j^=a[a[j]]):e=j=1}var H=[0,1,2,4,8,
16,32,64,128,27,54],d=d.AES=p.extend({_doReset:function(){for(var a=this._key,c=a.words,d=a.sigBytes/4,a=4*((this._nRounds=d+6)+1),e=this._keySchedule=[],j=0;j<a;j++)if(j<d)e[j]=c[j];else{var k=e[j-1];j%d?6<d&&4==j%d&&(k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255]):(k=k<<8|k>>>24,k=l[k>>>24]<<24|l[k>>>16&255]<<16|l[k>>>8&255]<<8|l[k&255],k^=H[j/d|0]<<24);e[j]=e[j-d]^k}c=this._invKeySchedule=[];for(d=0;d<a;d++)j=a-d,k=d%4?e[j]:e[j-4],c[d]=4>d||4>=j?k:b[l[k>>>24]]^x[l[k>>>16&255]]^q[l[k>>>
8&255]]^n[l[k&255]]},encryptBlock:function(a,b){this._doCryptBlock(a,b,this._keySchedule,t,r,w,v,l)},decryptBlock:function(a,c){var d=a[c+1];a[c+1]=a[c+3];a[c+3]=d;this._doCryptBlock(a,c,this._invKeySchedule,b,x,q,n,s);d=a[c+1];a[c+1]=a[c+3];a[c+3]=d},_doCryptBlock:function(a,b,c,d,e,j,l,f){for(var m=this._nRounds,g=a[b]^c[0],h=a[b+1]^c[1],k=a[b+2]^c[2],n=a[b+3]^c[3],p=4,r=1;r<m;r++)var q=d[g>>>24]^e[h>>>16&255]^j[k>>>8&255]^l[n&255]^c[p++],s=d[h>>>24]^e[k>>>16&255]^j[n>>>8&255]^l[g&255]^c[p++],t=
d[k>>>24]^e[n>>>16&255]^j[g>>>8&255]^l[h&255]^c[p++],n=d[n>>>24]^e[g>>>16&255]^j[h>>>8&255]^l[k&255]^c[p++],g=q,h=s,k=t;q=(f[g>>>24]<<24|f[h>>>16&255]<<16|f[k>>>8&255]<<8|f[n&255])^c[p++];s=(f[h>>>24]<<24|f[k>>>16&255]<<16|f[n>>>8&255]<<8|f[g&255])^c[p++];t=(f[k>>>24]<<24|f[n>>>16&255]<<16|f[g>>>8&255]<<8|f[h&255])^c[p++];n=(f[n>>>24]<<24|f[g>>>16&255]<<16|f[h>>>8&255]<<8|f[k&255])^c[p++];a[b]=q;a[b+1]=s;a[b+2]=t;a[b+3]=n},keySize:8});u.AES=p._createHelper(d)})();

		/*
 * This combined file was created by the DataTables downloader builder:
 *   https://datatables.net/download
 *
 * To rebuild or modify this file with the latest versions of the included
 * software please visit:
 *   https://datatables.net/download/#dt/dt-1.13.4/r-2.4.1/rg-1.3.1
 *
 * Included libraries:
 *   DataTables 1.13.4, Responsive 2.4.1, RowGroup 1.3.1
 */

/*! DataTables 1.13.4
 * ©2008-2023 SpryMedia Ltd - datatables.net/license
 */
!function(n){"use strict";var a;"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,window,document)}):"object"==typeof exports?(a=require("jquery"),"undefined"!=typeof window?module.exports=function(t,e){return t=t||window,e=e||a(t),n(e,t,t.document)}:n(a,window,window.document)):window.DataTable=n(jQuery,window,document)}(function(P,j,y,N){"use strict";function d(t){var e=parseInt(t,10);return!isNaN(e)&&isFinite(t)?e:null}function l(t,e,n){var a=typeof t,r="string"==a;return"number"==a||"bigint"==a||!!h(t)||(e&&r&&(t=G(t,e)),n&&r&&(t=t.replace(q,"")),!isNaN(parseFloat(t))&&isFinite(t))}function a(t,e,n){var a;return!!h(t)||(h(a=t)||"string"==typeof a)&&!!l(t.replace(V,""),e,n)||null}function m(t,e,n,a){var r=[],o=0,i=e.length;if(a!==N)for(;o<i;o++)t[e[o]][n]&&r.push(t[e[o]][n][a]);else for(;o<i;o++)r.push(t[e[o]][n]);return r}function f(t,e){var n,a=[];e===N?(e=0,n=t):(n=e,e=t);for(var r=e;r<n;r++)a.push(r);return a}function _(t){for(var e=[],n=0,a=t.length;n<a;n++)t[n]&&e.push(t[n]);return e}function s(t,e){return-1!==this.indexOf(t,e=e===N?0:e)}var p,e,t,w=function(t,v){if(w.factory(t,v))return w;if(this instanceof w)return P(t).DataTable(v);v=t,this.$=function(t,e){return this.api(!0).$(t,e)},this._=function(t,e){return this.api(!0).rows(t,e).data()},this.api=function(t){return new B(t?ge(this[p.iApiIndex]):this)},this.fnAddData=function(t,e){var n=this.api(!0),t=(Array.isArray(t)&&(Array.isArray(t[0])||P.isPlainObject(t[0]))?n.rows:n.row).add(t);return e!==N&&!e||n.draw(),t.flatten().toArray()},this.fnAdjustColumnSizing=function(t){var e=this.api(!0).columns.adjust(),n=e.settings()[0],a=n.oScroll;t===N||t?e.draw(!1):""===a.sX&&""===a.sY||Qt(n)},this.fnClearTable=function(t){var e=this.api(!0).clear();t!==N&&!t||e.draw()},this.fnClose=function(t){this.api(!0).row(t).child.hide()},this.fnDeleteRow=function(t,e,n){var a=this.api(!0),t=a.rows(t),r=t.settings()[0],o=r.aoData[t[0][0]];return t.remove(),e&&e.call(this,r,o),n!==N&&!n||a.draw(),o},this.fnDestroy=function(t){this.api(!0).destroy(t)},this.fnDraw=function(t){this.api(!0).draw(t)},this.fnFilter=function(t,e,n,a,r,o){var i=this.api(!0);(null===e||e===N?i:i.column(e)).search(t,n,a,o),i.draw()},this.fnGetData=function(t,e){var n,a=this.api(!0);return t!==N?(n=t.nodeName?t.nodeName.toLowerCase():"",e!==N||"td"==n||"th"==n?a.cell(t,e).data():a.row(t).data()||null):a.data().toArray()},this.fnGetNodes=function(t){var e=this.api(!0);return t!==N?e.row(t).node():e.rows().nodes().flatten().toArray()},this.fnGetPosition=function(t){var e=this.api(!0),n=t.nodeName.toUpperCase();return"TR"==n?e.row(t).index():"TD"==n||"TH"==n?[(n=e.cell(t).index()).row,n.columnVisible,n.column]:null},this.fnIsOpen=function(t){return this.api(!0).row(t).child.isShown()},this.fnOpen=function(t,e,n){return this.api(!0).row(t).child(e,n).show().child()[0]},this.fnPageChange=function(t,e){t=this.api(!0).page(t);e!==N&&!e||t.draw(!1)},this.fnSetColumnVis=function(t,e,n){t=this.api(!0).column(t).visible(e);n!==N&&!n||t.columns.adjust().draw()},this.fnSettings=function(){return ge(this[p.iApiIndex])},this.fnSort=function(t){this.api(!0).order(t).draw()},this.fnSortListener=function(t,e,n){this.api(!0).order.listener(t,e,n)},this.fnUpdate=function(t,e,n,a,r){var o=this.api(!0);return(n===N||null===n?o.row(e):o.cell(e,n)).data(t),r!==N&&!r||o.columns.adjust(),a!==N&&!a||o.draw(),0},this.fnVersionCheck=p.fnVersionCheck;var e,y=this,D=v===N,_=this.length;for(e in D&&(v={}),this.oApi=this.internal=p.internal,w.ext.internal)e&&(this[e]=Ge(e));return this.each(function(){var r=1<_?be({},v,!0):v,o=0,t=this.getAttribute("id"),i=!1,e=w.defaults,l=P(this);if("table"!=this.nodeName.toLowerCase())W(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{K(e),Q(e.column),C(e,e,!0),C(e.column,e.column,!0),C(e,P.extend(r,l.data()),!0);for(var n=w.settings,o=0,s=n.length;o<s;o++){var a=n[o];if(a.nTable==this||a.nTHead&&a.nTHead.parentNode==this||a.nTFoot&&a.nTFoot.parentNode==this){var u=(r.bRetrieve!==N?r:e).bRetrieve,c=(r.bDestroy!==N?r:e).bDestroy;if(D||u)return a.oInstance;if(c){a.oInstance.fnDestroy();break}return void W(a,0,"Cannot reinitialise DataTable",3)}if(a.sTableId==this.id){n.splice(o,1);break}}null!==t&&""!==t||(t="DataTables_Table_"+w.ext._unique++,this.id=t);var f,d,h=P.extend(!0,{},w.models.oSettings,{sDestroyWidth:l[0].style.width,sInstance:t,sTableId:t}),p=(h.nTable=this,h.oApi=y.internal,h.oInit=r,n.push(h),h.oInstance=1===y.length?y:l.dataTable(),K(r),Z(r.oLanguage),r.aLengthMenu&&!r.iDisplayLength&&(r.iDisplayLength=(Array.isArray(r.aLengthMenu[0])?r.aLengthMenu[0]:r.aLengthMenu)[0]),r=be(P.extend(!0,{},e),r),F(h.oFeatures,r,["bPaginate","bLengthChange","bFilter","bSort","bSortMulti","bInfo","bProcessing","bAutoWidth","bSortClasses","bServerSide","bDeferRender"]),F(h,r,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp","iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"]]),F(h.oScroll,r,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]),F(h.oLanguage,r,"fnInfoCallback"),L(h,"aoDrawCallback",r.fnDrawCallback,"user"),L(h,"aoServerParams",r.fnServerParams,"user"),L(h,"aoStateSaveParams",r.fnStateSaveParams,"user"),L(h,"aoStateLoadParams",r.fnStateLoadParams,"user"),L(h,"aoStateLoaded",r.fnStateLoaded,"user"),L(h,"aoRowCallback",r.fnRowCallback,"user"),L(h,"aoRowCreatedCallback",r.fnCreatedRow,"user"),L(h,"aoHeaderCallback",r.fnHeaderCallback,"user"),L(h,"aoFooterCallback",r.fnFooterCallback,"user"),L(h,"aoInitComplete",r.fnInitComplete,"user"),L(h,"aoPreDrawCallback",r.fnPreDrawCallback,"user"),h.rowIdFn=A(r.rowId),tt(h),h.oClasses),g=(P.extend(p,w.ext.classes,r.oClasses),l.addClass(p.sTable),h.iInitDisplayStart===N&&(h.iInitDisplayStart=r.iDisplayStart,h._iDisplayStart=r.iDisplayStart),null!==r.iDeferLoading&&(h.bDeferLoading=!0,t=Array.isArray(r.iDeferLoading),h._iRecordsDisplay=t?r.iDeferLoading[0]:r.iDeferLoading,h._iRecordsTotal=t?r.iDeferLoading[1]:r.iDeferLoading),h.oLanguage),t=(P.extend(!0,g,r.oLanguage),g.sUrl?(P.ajax({dataType:"json",url:g.sUrl,success:function(t){C(e.oLanguage,t),Z(t),P.extend(!0,g,t,h.oInit.oLanguage),R(h,null,"i18n",[h]),Jt(h)},error:function(){Jt(h)}}),i=!0):R(h,null,"i18n",[h]),null===r.asStripeClasses&&(h.asStripeClasses=[p.sStripeOdd,p.sStripeEven]),h.asStripeClasses),b=l.children("tbody").find("tr").eq(0),m=(-1!==P.inArray(!0,P.map(t,function(t,e){return b.hasClass(t)}))&&(P("tbody tr",this).removeClass(t.join(" ")),h.asDestroyStripes=t.slice()),[]),t=this.getElementsByTagName("thead");if(0!==t.length&&(wt(h.aoHeader,t[0]),m=Ct(h)),null===r.aoColumns)for(f=[],o=0,s=m.length;o<s;o++)f.push(null);else f=r.aoColumns;for(o=0,s=f.length;o<s;o++)nt(h,m?m[o]:null);st(h,r.aoColumnDefs,f,function(t,e){at(h,t,e)}),b.length&&(d=function(t,e){return null!==t.getAttribute("data-"+e)?e:null},P(b[0]).children("th, td").each(function(t,e){var n,a=h.aoColumns[t];a||W(h,0,"Incorrect column count",18),a.mData===t&&(n=d(e,"sort")||d(e,"order"),e=d(e,"filter")||d(e,"search"),null===n&&null===e||(a.mData={_:t+".display",sort:null!==n?t+".@data-"+n:N,type:null!==n?t+".@data-"+n:N,filter:null!==e?t+".@data-"+e:N},a._isArrayHost=!0,at(h,t)))}));var S=h.oFeatures,t=function(){if(r.aaSorting===N){var t=h.aaSorting;for(o=0,s=t.length;o<s;o++)t[o][1]=h.aoColumns[o].asSorting[0]}ce(h),S.bSort&&L(h,"aoDrawCallback",function(){var t,n;h.bSorted&&(t=I(h),n={},P.each(t,function(t,e){n[e.src]=e.dir}),R(h,null,"order",[h,t,n]),le(h))}),L(h,"aoDrawCallback",function(){(h.bSorted||"ssp"===E(h)||S.bDeferRender)&&ce(h)},"sc");var e=l.children("caption").each(function(){this._captionSide=P(this).css("caption-side")}),n=l.children("thead"),a=(0===n.length&&(n=P("<thead/>").appendTo(l)),h.nTHead=n[0],l.children("tbody")),n=(0===a.length&&(a=P("<tbody/>").insertAfter(n)),h.nTBody=a[0],l.children("tfoot"));if(0===(n=0===n.length&&0<e.length&&(""!==h.oScroll.sX||""!==h.oScroll.sY)?P("<tfoot/>").appendTo(l):n).length||0===n.children().length?l.addClass(p.sNoFooter):0<n.length&&(h.nTFoot=n[0],wt(h.aoFooter,h.nTFoot)),r.aaData)for(o=0;o<r.aaData.length;o++)x(h,r.aaData[o]);else!h.bDeferLoading&&"dom"!=E(h)||ut(h,P(h.nTBody).children("tr"));h.aiDisplay=h.aiDisplayMaster.slice(),!(h.bInitialised=!0)===i&&Jt(h)};L(h,"aoDrawCallback",de,"state_save"),r.bStateSave?(S.bStateSave=!0,he(h,0,t)):t()}}),y=null,this},c={},U=/[\r\n\u2028]/g,V=/<.*?>/g,X=/^\d{2,4}[\.\/\-]\d{1,2}[\.\/\-]\d{1,2}([T ]{1}\d{1,2}[:\.]\d{2}([\.:]\d{2})?)?$/,J=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^","-"].join("|\\")+")","g"),q=/['\u00A0,$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfkɃΞ]/gi,h=function(t){return!t||!0===t||"-"===t},G=function(t,e){return c[e]||(c[e]=new RegExp(Ot(e),"g")),"string"==typeof t&&"."!==e?t.replace(/\./g,"").replace(c[e],"."):t},H=function(t,e,n){var a=[],r=0,o=t.length;if(n!==N)for(;r<o;r++)t[r]&&t[r][e]&&a.push(t[r][e][n]);else for(;r<o;r++)t[r]&&a.push(t[r][e]);return a},$=function(t){if(!(t.length<2))for(var e=t.slice().sort(),n=e[0],a=1,r=e.length;a<r;a++){if(e[a]===n)return!1;n=e[a]}return!0},z=function(t){if($(t))return t.slice();var e,n,a,r=[],o=t.length,i=0;t:for(n=0;n<o;n++){for(e=t[n],a=0;a<i;a++)if(r[a]===e)continue t;r.push(e),i++}return r},Y=function(t,e){if(Array.isArray(e))for(var n=0;n<e.length;n++)Y(t,e[n]);else t.push(e);return t};function i(n){var a,r,o={};P.each(n,function(t,e){(a=t.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(a[1]+" ")&&(r=t.replace(a[0],a[2].toLowerCase()),o[r]=t,"o"===a[1])&&i(n[t])}),n._hungarianMap=o}function C(n,a,r){var o;n._hungarianMap||i(n),P.each(a,function(t,e){(o=n._hungarianMap[t])===N||!r&&a[o]!==N||("o"===o.charAt(0)?(a[o]||(a[o]={}),P.extend(!0,a[o],a[t]),C(n[o],a[o],r)):a[o]=a[t])})}function Z(t){var e,n=w.defaults.oLanguage,a=n.sDecimal;a&&Me(a),t&&(e=t.sZeroRecords,!t.sEmptyTable&&e&&"No data available in table"===n.sEmptyTable&&F(t,t,"sZeroRecords","sEmptyTable"),!t.sLoadingRecords&&e&&"Loading..."===n.sLoadingRecords&&F(t,t,"sZeroRecords","sLoadingRecords"),t.sInfoThousands&&(t.sThousands=t.sInfoThousands),e=t.sDecimal)&&a!==e&&Me(e)}Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),Array.prototype.includes||(Array.prototype.includes=s),String.prototype.trim||(String.prototype.trim=function(){return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")}),String.prototype.includes||(String.prototype.includes=s),w.util={throttle:function(a,t){var r,o,i=t!==N?t:200;return function(){var t=this,e=+new Date,n=arguments;r&&e<r+i?(clearTimeout(o),o=setTimeout(function(){r=N,a.apply(t,n)},i)):(r=e,a.apply(t,n))}},escapeRegex:function(t){return t.replace(J,"\\$1")},set:function(a){var d;return P.isPlainObject(a)?w.util.set(a._):null===a?function(){}:"function"==typeof a?function(t,e,n){a(t,"set",e,n)}:"string"!=typeof a||-1===a.indexOf(".")&&-1===a.indexOf("[")&&-1===a.indexOf("(")?function(t,e){t[a]=e}:(d=function(t,e,n){for(var a,r,o,i,l=dt(n),n=l[l.length-1],s=0,u=l.length-1;s<u;s++){if("__proto__"===l[s]||"constructor"===l[s])throw new Error("Cannot set prototype values");if(a=l[s].match(ft),r=l[s].match(g),a){if(l[s]=l[s].replace(ft,""),t[l[s]]=[],(a=l.slice()).splice(0,s+1),i=a.join("."),Array.isArray(e))for(var c=0,f=e.length;c<f;c++)d(o={},e[c],i),t[l[s]].push(o);else t[l[s]]=e;return}r&&(l[s]=l[s].replace(g,""),t=t[l[s]](e)),null!==t[l[s]]&&t[l[s]]!==N||(t[l[s]]={}),t=t[l[s]]}n.match(g)?t[n.replace(g,"")](e):t[n.replace(ft,"")]=e},function(t,e){return d(t,e,a)})},get:function(r){var o,d;return P.isPlainObject(r)?(o={},P.each(r,function(t,e){e&&(o[t]=w.util.get(e))}),function(t,e,n,a){var r=o[e]||o._;return r!==N?r(t,e,n,a):t}):null===r?function(t){return t}:"function"==typeof r?function(t,e,n,a){return r(t,e,n,a)}:"string"!=typeof r||-1===r.indexOf(".")&&-1===r.indexOf("[")&&-1===r.indexOf("(")?function(t,e){return t[r]}:(d=function(t,e,n){var a,r,o;if(""!==n)for(var i=dt(n),l=0,s=i.length;l<s;l++){if(f=i[l].match(ft),a=i[l].match(g),f){if(i[l]=i[l].replace(ft,""),""!==i[l]&&(t=t[i[l]]),r=[],i.splice(0,l+1),o=i.join("."),Array.isArray(t))for(var u=0,c=t.length;u<c;u++)r.push(d(t[u],e,o));var f=f[0].substring(1,f[0].length-1);t=""===f?r:r.join(f);break}if(a)i[l]=i[l].replace(g,""),t=t[i[l]]();else{if(null===t||t[i[l]]===N)return N;t=t[i[l]]}}return t},function(t,e){return d(t,e,r)})}};var r=function(t,e,n){t[e]!==N&&(t[n]=t[e])};function K(t){r(t,"ordering","bSort"),r(t,"orderMulti","bSortMulti"),r(t,"orderClasses","bSortClasses"),r(t,"orderCellsTop","bSortCellsTop"),r(t,"order","aaSorting"),r(t,"orderFixed","aaSortingFixed"),r(t,"paging","bPaginate"),r(t,"pagingType","sPaginationType"),r(t,"pageLength","iDisplayLength"),r(t,"searching","bFilter"),"boolean"==typeof t.sScrollX&&(t.sScrollX=t.sScrollX?"100%":""),"boolean"==typeof t.scrollX&&(t.scrollX=t.scrollX?"100%":"");var e=t.aoSearchCols;if(e)for(var n=0,a=e.length;n<a;n++)e[n]&&C(w.models.oSearch,e[n])}function Q(t){r(t,"orderable","bSortable"),r(t,"orderData","aDataSort"),r(t,"orderSequence","asSorting"),r(t,"orderDataType","sortDataType");var e=t.aDataSort;"number"!=typeof e||Array.isArray(e)||(t.aDataSort=[e])}function tt(t){var e,n,a,r;w.__browser||(w.__browser=e={},r=(a=(n=P("<div/>").css({position:"fixed",top:0,left:-1*P(j).scrollLeft(),height:1,width:1,overflow:"hidden"}).append(P("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(P("<div/>").css({width:"100%",height:10}))).appendTo("body")).children()).children(),e.barWidth=a[0].offsetWidth-a[0].clientWidth,e.bScrollOversize=100===r[0].offsetWidth&&100!==a[0].clientWidth,e.bScrollbarLeft=1!==Math.round(r.offset().left),e.bBounding=!!n[0].getBoundingClientRect().width,n.remove()),P.extend(t.oBrowser,w.__browser),t.oScroll.iBarWidth=w.__browser.barWidth}function et(t,e,n,a,r,o){var i,l=a,s=!1;for(n!==N&&(i=n,s=!0);l!==r;)t.hasOwnProperty(l)&&(i=s?e(i,t[l],l,t):t[l],s=!0,l+=o);return i}function nt(t,e){var n=w.defaults.column,a=t.aoColumns.length,n=P.extend({},w.models.oColumn,n,{nTh:e||y.createElement("th"),sTitle:n.sTitle||(e?e.innerHTML:""),aDataSort:n.aDataSort||[a],mData:n.mData||a,idx:a}),n=(t.aoColumns.push(n),t.aoPreSearchCols);n[a]=P.extend({},w.models.oSearch,n[a]),at(t,a,P(e).data())}function at(t,e,n){function a(t){return"string"==typeof t&&-1!==t.indexOf("@")}var e=t.aoColumns[e],r=t.oClasses,o=P(e.nTh),i=(!e.sWidthOrig&&(e.sWidthOrig=o.attr("width")||null,u=(o.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/))&&(e.sWidthOrig=u[1]),n!==N&&null!==n&&(Q(n),C(w.defaults.column,n,!0),n.mDataProp===N||n.mData||(n.mData=n.mDataProp),n.sType&&(e._sManualType=n.sType),n.className&&!n.sClass&&(n.sClass=n.className),n.sClass&&o.addClass(n.sClass),u=e.sClass,P.extend(e,n),F(e,n,"sWidth","sWidthOrig"),u!==e.sClass&&(e.sClass=u+" "+e.sClass),n.iDataSort!==N&&(e.aDataSort=[n.iDataSort]),F(e,n,"aDataSort")),e.mData),l=A(i),s=e.mRender?A(e.mRender):null,u=(e._bAttrSrc=P.isPlainObject(i)&&(a(i.sort)||a(i.type)||a(i.filter)),e._setter=null,e.fnGetData=function(t,e,n){var a=l(t,e,N,n);return s&&e?s(a,e,t,n):a},e.fnSetData=function(t,e,n){return b(i)(t,e,n)},"number"==typeof i||e._isArrayHost||(t._rowReadObject=!0),t.oFeatures.bSort||(e.bSortable=!1,o.addClass(r.sSortableNone)),-1!==P.inArray("asc",e.asSorting)),n=-1!==P.inArray("desc",e.asSorting);e.bSortable&&(u||n)?u&&!n?(e.sSortingClass=r.sSortableAsc,e.sSortingClassJUI=r.sSortJUIAscAllowed):!u&&n?(e.sSortingClass=r.sSortableDesc,e.sSortingClassJUI=r.sSortJUIDescAllowed):(e.sSortingClass=r.sSortable,e.sSortingClassJUI=r.sSortJUI):(e.sSortingClass=r.sSortableNone,e.sSortingClassJUI="")}function O(t){if(!1!==t.oFeatures.bAutoWidth){var e=t.aoColumns;ee(t);for(var n=0,a=e.length;n<a;n++)e[n].nTh.style.width=e[n].sWidth}var r=t.oScroll;""===r.sY&&""===r.sX||Qt(t),R(t,null,"column-sizing",[t])}function rt(t,e){t=it(t,"bVisible");return"number"==typeof t[e]?t[e]:null}function ot(t,e){t=it(t,"bVisible"),e=P.inArray(e,t);return-1!==e?e:null}function T(t){var n=0;return P.each(t.aoColumns,function(t,e){e.bVisible&&"none"!==P(e.nTh).css("display")&&n++}),n}function it(t,n){var a=[];return P.map(t.aoColumns,function(t,e){t[n]&&a.push(e)}),a}function lt(t){for(var e,n,a,r,o,i,l,s=t.aoColumns,u=t.aoData,c=w.ext.type.detect,f=0,d=s.length;f<d;f++)if(l=[],!(o=s[f]).sType&&o._sManualType)o.sType=o._sManualType;else if(!o.sType){for(e=0,n=c.length;e<n;e++){for(a=0,r=u.length;a<r&&(l[a]===N&&(l[a]=S(t,a,f,"type")),(i=c[e](l[a],t))||e===c.length-1)&&("html"!==i||h(l[a]));a++);if(i){o.sType=i;break}}o.sType||(o.sType="string")}}function st(t,e,n,a){var r,o,i,l,s=t.aoColumns;if(e)for(r=e.length-1;0<=r;r--)for(var u,c=(u=e[r]).target!==N?u.target:u.targets!==N?u.targets:u.aTargets,f=0,d=(c=Array.isArray(c)?c:[c]).length;f<d;f++)if("number"==typeof c[f]&&0<=c[f]){for(;s.length<=c[f];)nt(t);a(c[f],u)}else if("number"==typeof c[f]&&c[f]<0)a(s.length+c[f],u);else if("string"==typeof c[f])for(i=0,l=s.length;i<l;i++)"_all"!=c[f]&&!P(s[i].nTh).hasClass(c[f])||a(i,u);if(n)for(r=0,o=n.length;r<o;r++)a(r,n[r])}function x(t,e,n,a){for(var r=t.aoData.length,o=P.extend(!0,{},w.models.oRow,{src:n?"dom":"data",idx:r}),i=(o._aData=e,t.aoData.push(o),t.aoColumns),l=0,s=i.length;l<s;l++)i[l].sType=null;t.aiDisplayMaster.push(r);e=t.rowIdFn(e);return e!==N&&(t.aIds[e]=o),!n&&t.oFeatures.bDeferRender||St(t,r,n,a),r}function ut(n,t){var a;return(t=t instanceof P?t:P(t)).map(function(t,e){return a=mt(n,e),x(n,a.data,e,a.cells)})}function S(t,e,n,a){"search"===a?a="filter":"order"===a&&(a="sort");var r=t.iDraw,o=t.aoColumns[n],i=t.aoData[e]._aData,l=o.sDefaultContent,s=o.fnGetData(i,a,{settings:t,row:e,col:n});if(s===N)return t.iDrawError!=r&&null===l&&(W(t,0,"Requested unknown parameter "+("function"==typeof o.mData?"{function}":"'"+o.mData+"'")+" for row "+e+", column "+n,4),t.iDrawError=r),l;if(s!==i&&null!==s||null===l||a===N){if("function"==typeof s)return s.call(i)}else s=l;return null===s&&"display"===a?"":"filter"===a&&(e=w.ext.type.search)[o.sType]?e[o.sType](s):s}function ct(t,e,n,a){var r=t.aoColumns[n],o=t.aoData[e]._aData;r.fnSetData(o,a,{settings:t,row:e,col:n})}var ft=/\[.*?\]$/,g=/\(\)$/;function dt(t){return P.map(t.match(/(\\.|[^\.])+/g)||[""],function(t){return t.replace(/\\\./g,".")})}var A=w.util.get,b=w.util.set;function ht(t){return H(t.aoData,"_aData")}function pt(t){t.aoData.length=0,t.aiDisplayMaster.length=0,t.aiDisplay.length=0,t.aIds={}}function gt(t,e,n){for(var a=-1,r=0,o=t.length;r<o;r++)t[r]==e?a=r:t[r]>e&&t[r]--;-1!=a&&n===N&&t.splice(a,1)}function bt(n,a,t,e){function r(t,e){for(;t.childNodes.length;)t.removeChild(t.firstChild);t.innerHTML=S(n,a,e,"display")}var o,i,l=n.aoData[a];if("dom"!==t&&(t&&"auto"!==t||"dom"!==l.src)){var s=l.anCells;if(s)if(e!==N)r(s[e],e);else for(o=0,i=s.length;o<i;o++)r(s[o],o)}else l._aData=mt(n,l,e,e===N?N:l._aData).data;l._aSortData=null,l._aFilterData=null;var u=n.aoColumns;if(e!==N)u[e].sType=null;else{for(o=0,i=u.length;o<i;o++)u[o].sType=null;vt(n,l)}}function mt(t,e,n,a){function r(t,e){var n;"string"==typeof t&&-1!==(n=t.indexOf("@"))&&(n=t.substring(n+1),b(t)(a,e.getAttribute(n)))}function o(t){n!==N&&n!==f||(l=d[f],s=t.innerHTML.trim(),l&&l._bAttrSrc?(b(l.mData._)(a,s),r(l.mData.sort,t),r(l.mData.type,t),r(l.mData.filter,t)):h?(l._setter||(l._setter=b(l.mData)),l._setter(a,s)):a[f]=s),f++}var i,l,s,u=[],c=e.firstChild,f=0,d=t.aoColumns,h=t._rowReadObject;a=a!==N?a:h?{}:[];if(c)for(;c;)"TD"!=(i=c.nodeName.toUpperCase())&&"TH"!=i||(o(c),u.push(c)),c=c.nextSibling;else for(var p=0,g=(u=e.anCells).length;p<g;p++)o(u[p]);var e=e.firstChild?e:e.nTr;return e&&(e=e.getAttribute("id"))&&b(t.rowId)(a,e),{data:a,cells:u}}function St(t,e,n,a){var r,o,i,l,s,u,c=t.aoData[e],f=c._aData,d=[];if(null===c.nTr){for(r=n||y.createElement("tr"),c.nTr=r,c.anCells=d,r._DT_RowIndex=e,vt(t,c),l=0,s=t.aoColumns.length;l<s;l++)i=t.aoColumns[l],(o=(u=!n)?y.createElement(i.sCellType):a[l])||W(t,0,"Incorrect column count",18),o._DT_CellIndex={row:e,column:l},d.push(o),!u&&(!i.mRender&&i.mData===l||P.isPlainObject(i.mData)&&i.mData._===l+".display")||(o.innerHTML=S(t,e,l,"display")),i.sClass&&(o.className+=" "+i.sClass),i.bVisible&&!n?r.appendChild(o):!i.bVisible&&n&&o.parentNode.removeChild(o),i.fnCreatedCell&&i.fnCreatedCell.call(t.oInstance,o,S(t,e,l),f,e,l);R(t,"aoRowCreatedCallback",null,[r,f,e,d])}}function vt(t,e){var n=e.nTr,a=e._aData;n&&((t=t.rowIdFn(a))&&(n.id=t),a.DT_RowClass&&(t=a.DT_RowClass.split(" "),e.__rowc=e.__rowc?z(e.__rowc.concat(t)):t,P(n).removeClass(e.__rowc.join(" ")).addClass(a.DT_RowClass)),a.DT_RowAttr&&P(n).attr(a.DT_RowAttr),a.DT_RowData)&&P(n).data(a.DT_RowData)}function yt(t){var e,n,a,r=t.nTHead,o=t.nTFoot,i=0===P("th, td",r).length,l=t.oClasses,s=t.aoColumns;for(i&&(n=P("<tr/>").appendTo(r)),c=0,f=s.length;c<f;c++)a=s[c],e=P(a.nTh).addClass(a.sClass),i&&e.appendTo(n),t.oFeatures.bSort&&(e.addClass(a.sSortingClass),!1!==a.bSortable)&&(e.attr("tabindex",t.iTabIndex).attr("aria-controls",t.sTableId),ue(t,a.nTh,c)),a.sTitle!=e[0].innerHTML&&e.html(a.sTitle),ve(t,"header")(t,e,a,l);if(i&&wt(t.aoHeader,r),P(r).children("tr").children("th, td").addClass(l.sHeaderTH),P(o).children("tr").children("th, td").addClass(l.sFooterTH),null!==o)for(var u=t.aoFooter[0],c=0,f=u.length;c<f;c++)(a=s[c])?(a.nTf=u[c].cell,a.sClass&&P(a.nTf).addClass(a.sClass)):W(t,0,"Incorrect column count",18)}function Dt(t,e,n){var a,r,o,i,l,s,u,c,f,d=[],h=[],p=t.aoColumns.length;if(e){for(n===N&&(n=!1),a=0,r=e.length;a<r;a++){for(d[a]=e[a].slice(),d[a].nTr=e[a].nTr,o=p-1;0<=o;o--)t.aoColumns[o].bVisible||n||d[a].splice(o,1);h.push([])}for(a=0,r=d.length;a<r;a++){if(u=d[a].nTr)for(;s=u.firstChild;)u.removeChild(s);for(o=0,i=d[a].length;o<i;o++)if(f=c=1,h[a][o]===N){for(u.appendChild(d[a][o].cell),h[a][o]=1;d[a+c]!==N&&d[a][o].cell==d[a+c][o].cell;)h[a+c][o]=1,c++;for(;d[a][o+f]!==N&&d[a][o].cell==d[a][o+f].cell;){for(l=0;l<c;l++)h[a+l][o+f]=1;f++}P(d[a][o].cell).attr("rowspan",c).attr("colspan",f)}}}}function v(t,e){n="ssp"==E(s=t),(l=s.iInitDisplayStart)!==N&&-1!==l&&(s._iDisplayStart=!n&&l>=s.fnRecordsDisplay()?0:l,s.iInitDisplayStart=-1);var n=R(t,"aoPreDrawCallback","preDraw",[t]);if(-1!==P.inArray(!1,n))D(t,!1);else{var a=[],r=0,o=t.asStripeClasses,i=o.length,l=t.oLanguage,s="ssp"==E(t),u=t.aiDisplay,n=t._iDisplayStart,c=t.fnDisplayEnd();if(t.bDrawing=!0,t.bDeferLoading)t.bDeferLoading=!1,t.iDraw++,D(t,!1);else if(s){if(!t.bDestroying&&!e)return void xt(t)}else t.iDraw++;if(0!==u.length)for(var f=s?t.aoData.length:c,d=s?0:n;d<f;d++){var h,p=u[d],g=t.aoData[p],b=(null===g.nTr&&St(t,p),g.nTr);0!==i&&(h=o[r%i],g._sRowStripe!=h)&&(P(b).removeClass(g._sRowStripe).addClass(h),g._sRowStripe=h),R(t,"aoRowCallback",null,[b,g._aData,r,d,p]),a.push(b),r++}else{e=l.sZeroRecords;1==t.iDraw&&"ajax"==E(t)?e=l.sLoadingRecords:l.sEmptyTable&&0===t.fnRecordsTotal()&&(e=l.sEmptyTable),a[0]=P("<tr/>",{class:i?o[0]:""}).append(P("<td />",{valign:"top",colSpan:T(t),class:t.oClasses.sRowEmpty}).html(e))[0]}R(t,"aoHeaderCallback","header",[P(t.nTHead).children("tr")[0],ht(t),n,c,u]),R(t,"aoFooterCallback","footer",[P(t.nTFoot).children("tr")[0],ht(t),n,c,u]);s=P(t.nTBody);s.children().detach(),s.append(P(a)),R(t,"aoDrawCallback","draw",[t]),t.bSorted=!1,t.bFiltered=!1,t.bDrawing=!1}}function u(t,e){var n=t.oFeatures,a=n.bSort,n=n.bFilter;a&&ie(t),n?Rt(t,t.oPreviousSearch):t.aiDisplay=t.aiDisplayMaster.slice(),!0!==e&&(t._iDisplayStart=0),t._drawHold=e,v(t),t._drawHold=!1}function _t(t){for(var e,n,a,r,o,i,l,s=t.oClasses,u=P(t.nTable),u=P("<div/>").insertBefore(u),c=t.oFeatures,f=P("<div/>",{id:t.sTableId+"_wrapper",class:s.sWrapper+(t.nTFoot?"":" "+s.sNoFooter)}),d=(t.nHolding=u[0],t.nTableWrapper=f[0],t.nTableReinsertBefore=t.nTable.nextSibling,t.sDom.split("")),h=0;h<d.length;h++){if(e=null,"<"==(n=d[h])){if(a=P("<div/>")[0],"'"==(r=d[h+1])||'"'==r){for(o="",i=2;d[h+i]!=r;)o+=d[h+i],i++;"H"==o?o=s.sJUIHeader:"F"==o&&(o=s.sJUIFooter),-1!=o.indexOf(".")?(l=o.split("."),a.id=l[0].substr(1,l[0].length-1),a.className=l[1]):"#"==o.charAt(0)?a.id=o.substr(1,o.length-1):a.className=o,h+=i}f.append(a),f=P(a)}else if(">"==n)f=f.parent();else if("l"==n&&c.bPaginate&&c.bLengthChange)e=$t(t);else if("f"==n&&c.bFilter)e=Lt(t);else if("r"==n&&c.bProcessing)e=Zt(t);else if("t"==n)e=Kt(t);else if("i"==n&&c.bInfo)e=Ut(t);else if("p"==n&&c.bPaginate)e=zt(t);else if(0!==w.ext.feature.length)for(var p=w.ext.feature,g=0,b=p.length;g<b;g++)if(n==p[g].cFeature){e=p[g].fnInit(t);break}e&&((l=t.aanFeatures)[n]||(l[n]=[]),l[n].push(e),f.append(e))}u.replaceWith(f),t.nHolding=null}function wt(t,e){var n,a,r,o,i,l,s,u,c,f,d=P(e).children("tr");for(t.splice(0,t.length),r=0,l=d.length;r<l;r++)t.push([]);for(r=0,l=d.length;r<l;r++)for(a=(n=d[r]).firstChild;a;){if("TD"==a.nodeName.toUpperCase()||"TH"==a.nodeName.toUpperCase())for(u=(u=+a.getAttribute("colspan"))&&0!=u&&1!=u?u:1,c=(c=+a.getAttribute("rowspan"))&&0!=c&&1!=c?c:1,s=function(t,e,n){for(var a=t[e];a[n];)n++;return n}(t,r,0),f=1==u,i=0;i<u;i++)for(o=0;o<c;o++)t[r+o][s+i]={cell:a,unique:f},t[r+o].nTr=n;a=a.nextSibling}}function Ct(t,e,n){var a=[];n||(n=t.aoHeader,e&&wt(n=[],e));for(var r=0,o=n.length;r<o;r++)for(var i=0,l=n[r].length;i<l;i++)!n[r][i].unique||a[i]&&t.bSortCellsTop||(a[i]=n[r][i].cell);return a}function Tt(r,t,n){function e(t){var e=r.jqXHR?r.jqXHR.status:null;(null===t||"number"==typeof e&&204==e)&&Ft(r,t={},[]),(e=t.error||t.sError)&&W(r,0,e),r.json=t,R(r,null,"xhr",[r,t,r.jqXHR]),n(t)}R(r,"aoServerParams","serverParams",[t]),t&&Array.isArray(t)&&(a={},o=/(.*?)\[\]$/,P.each(t,function(t,e){var n=e.name.match(o);n?(n=n[0],a[n]||(a[n]=[]),a[n].push(e.value)):a[e.name]=e.value}),t=a);var a,o,i,l=r.ajax,s=r.oInstance,u=(P.isPlainObject(l)&&l.data&&(u="function"==typeof(i=l.data)?i(t,r):i,t="function"==typeof i&&u?u:P.extend(!0,t,u),delete l.data),{data:t,success:e,dataType:"json",cache:!1,type:r.sServerMethod,error:function(t,e,n){var a=R(r,null,"xhr",[r,null,r.jqXHR]);-1===P.inArray(!0,a)&&("parsererror"==e?W(r,0,"Invalid JSON response",1):4===t.readyState&&W(r,0,"Ajax error",7)),D(r,!1)}});r.oAjaxData=t,R(r,null,"preXhr",[r,t]),r.fnServerData?r.fnServerData.call(s,r.sAjaxSource,P.map(t,function(t,e){return{name:e,value:t}}),e,r):r.sAjaxSource||"string"==typeof l?r.jqXHR=P.ajax(P.extend(u,{url:l||r.sAjaxSource})):"function"==typeof l?r.jqXHR=l.call(s,t,e,r):(r.jqXHR=P.ajax(P.extend(u,l)),l.data=i)}function xt(e){e.iDraw++,D(e,!0),Tt(e,At(e),function(t){It(e,t)})}function At(t){for(var e,n,a,r=t.aoColumns,o=r.length,i=t.oFeatures,l=t.oPreviousSearch,s=t.aoPreSearchCols,u=[],c=I(t),f=t._iDisplayStart,d=!1!==i.bPaginate?t._iDisplayLength:-1,h=function(t,e){u.push({name:t,value:e})},p=(h("sEcho",t.iDraw),h("iColumns",o),h("sColumns",H(r,"sName").join(",")),h("iDisplayStart",f),h("iDisplayLength",d),{draw:t.iDraw,columns:[],order:[],start:f,length:d,search:{value:l.sSearch,regex:l.bRegex}}),g=0;g<o;g++)n=r[g],a=s[g],e="function"==typeof n.mData?"function":n.mData,p.columns.push({data:e,name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:a.sSearch,regex:a.bRegex}}),h("mDataProp_"+g,e),i.bFilter&&(h("sSearch_"+g,a.sSearch),h("bRegex_"+g,a.bRegex),h("bSearchable_"+g,n.bSearchable)),i.bSort&&h("bSortable_"+g,n.bSortable);i.bFilter&&(h("sSearch",l.sSearch),h("bRegex",l.bRegex)),i.bSort&&(P.each(c,function(t,e){p.order.push({column:e.col,dir:e.dir}),h("iSortCol_"+t,e.col),h("sSortDir_"+t,e.dir)}),h("iSortingCols",c.length));f=w.ext.legacy.ajax;return null===f?t.sAjaxSource?u:p:f?u:p}function It(t,n){function e(t,e){return n[t]!==N?n[t]:n[e]}var a=Ft(t,n),r=e("sEcho","draw"),o=e("iTotalRecords","recordsTotal"),i=e("iTotalDisplayRecords","recordsFiltered");if(r!==N){if(+r<t.iDraw)return;t.iDraw=+r}a=a||[],pt(t),t._iRecordsTotal=parseInt(o,10),t._iRecordsDisplay=parseInt(i,10);for(var l=0,s=a.length;l<s;l++)x(t,a[l]);t.aiDisplay=t.aiDisplayMaster.slice(),v(t,!0),t._bInitComplete||qt(t,n),D(t,!1)}function Ft(t,e,n){t=P.isPlainObject(t.ajax)&&t.ajax.dataSrc!==N?t.ajax.dataSrc:t.sAjaxDataProp;if(!n)return"data"===t?e.aaData||e[t]:""!==t?A(t)(e):e;b(t)(e,n)}function Lt(n){function e(t){i.f;var e=this.value||"";o.return&&"Enter"!==t.key||e!=o.sSearch&&(Rt(n,{sSearch:e,bRegex:o.bRegex,bSmart:o.bSmart,bCaseInsensitive:o.bCaseInsensitive,return:o.return}),n._iDisplayStart=0,v(n))}var t=n.oClasses,a=n.sTableId,r=n.oLanguage,o=n.oPreviousSearch,i=n.aanFeatures,l='<input type="search" class="'+t.sFilterInput+'"/>',s=(s=r.sSearch).match(/_INPUT_/)?s.replace("_INPUT_",l):s+l,l=P("<div/>",{id:i.f?null:a+"_filter",class:t.sFilter}).append(P("<label/>").append(s)),t=null!==n.searchDelay?n.searchDelay:"ssp"===E(n)?400:0,u=P("input",l).val(o.sSearch).attr("placeholder",r.sSearchPlaceholder).on("keyup.DT search.DT input.DT paste.DT cut.DT",t?ne(e,t):e).on("mouseup",function(t){setTimeout(function(){e.call(u[0],t)},10)}).on("keypress.DT",function(t){if(13==t.keyCode)return!1}).attr("aria-controls",a);return P(n.nTable).on("search.dt.DT",function(t,e){if(n===e)try{u[0]!==y.activeElement&&u.val(o.sSearch)}catch(t){}}),l[0]}function Rt(t,e,n){function a(t){o.sSearch=t.sSearch,o.bRegex=t.bRegex,o.bSmart=t.bSmart,o.bCaseInsensitive=t.bCaseInsensitive,o.return=t.return}function r(t){return t.bEscapeRegex!==N?!t.bEscapeRegex:t.bRegex}var o=t.oPreviousSearch,i=t.aoPreSearchCols;if(lt(t),"ssp"!=E(t)){Nt(t,e.sSearch,n,r(e),e.bSmart,e.bCaseInsensitive,e.return),a(e);for(var l=0;l<i.length;l++)jt(t,i[l].sSearch,l,r(i[l]),i[l].bSmart,i[l].bCaseInsensitive);Pt(t)}else a(e);t.bFiltered=!0,R(t,null,"search",[t])}function Pt(t){for(var e,n,a=w.ext.search,r=t.aiDisplay,o=0,i=a.length;o<i;o++){for(var l=[],s=0,u=r.length;s<u;s++)n=r[s],e=t.aoData[n],a[o](t,e._aFilterData,n,e._aData,s)&&l.push(n);r.length=0,P.merge(r,l)}}function jt(t,e,n,a,r,o){if(""!==e){for(var i,l=[],s=t.aiDisplay,u=Ht(e,a,r,o),c=0;c<s.length;c++)i=t.aoData[s[c]]._aFilterData[n],u.test(i)&&l.push(s[c]);t.aiDisplay=l}}function Nt(t,e,n,a,r,o){var i,l,s,u=Ht(e,a,r,o),r=t.oPreviousSearch.sSearch,o=t.aiDisplayMaster,c=[];if(0!==w.ext.search.length&&(n=!0),l=Wt(t),e.length<=0)t.aiDisplay=o.slice();else{for((l||n||a||r.length>e.length||0!==e.indexOf(r)||t.bSorted)&&(t.aiDisplay=o.slice()),i=t.aiDisplay,s=0;s<i.length;s++)u.test(t.aoData[i[s]]._sFilterRow)&&c.push(i[s]);t.aiDisplay=c}}function Ht(t,e,n,a){return t=e?t:Ot(t),n&&(t="^(?=.*?"+P.map(t.match(/"[^"]+"|[^ ]+/g)||[""],function(t){var e;return(t='"'===t.charAt(0)?(e=t.match(/^"(.*)"$/))?e[1]:t:t).replace('"',"")}).join(")(?=.*?")+").*$"),new RegExp(t,a?"i":"")}var Ot=w.util.escapeRegex,kt=P("<div>")[0],Mt=kt.textContent!==N;function Wt(t){for(var e,n,a,r,o,i=t.aoColumns,l=!1,s=0,u=t.aoData.length;s<u;s++)if(!(o=t.aoData[s])._aFilterData){for(a=[],e=0,n=i.length;e<n;e++)i[e].bSearchable?"string"!=typeof(r=null===(r=S(t,s,e,"filter"))?"":r)&&r.toString&&(r=r.toString()):r="",r.indexOf&&-1!==r.indexOf("&")&&(kt.innerHTML=r,r=Mt?kt.textContent:kt.innerText),r.replace&&(r=r.replace(/[\r\n\u2028]/g,"")),a.push(r);o._aFilterData=a,o._sFilterRow=a.join("  "),l=!0}return l}function Et(t){return{search:t.sSearch,smart:t.bSmart,regex:t.bRegex,caseInsensitive:t.bCaseInsensitive}}function Bt(t){return{sSearch:t.search,bSmart:t.smart,bRegex:t.regex,bCaseInsensitive:t.caseInsensitive}}function Ut(t){var e=t.sTableId,n=t.aanFeatures.i,a=P("<div/>",{class:t.oClasses.sInfo,id:n?null:e+"_info"});return n||(t.aoDrawCallback.push({fn:Vt,sName:"information"}),a.attr("role","status").attr("aria-live","polite"),P(t.nTable).attr("aria-describedby",e+"_info")),a[0]}function Vt(t){var e,n,a,r,o,i,l=t.aanFeatures.i;0!==l.length&&(i=t.oLanguage,e=t._iDisplayStart+1,n=t.fnDisplayEnd(),a=t.fnRecordsTotal(),o=(r=t.fnRecordsDisplay())?i.sInfo:i.sInfoEmpty,r!==a&&(o+=" "+i.sInfoFiltered),o=Xt(t,o+=i.sInfoPostFix),null!==(i=i.fnInfoCallback)&&(o=i.call(t.oInstance,t,e,n,a,r,o)),P(l).html(o))}function Xt(t,e){var n=t.fnFormatNumber,a=t._iDisplayStart+1,r=t._iDisplayLength,o=t.fnRecordsDisplay(),i=-1===r;return e.replace(/_START_/g,n.call(t,a)).replace(/_END_/g,n.call(t,t.fnDisplayEnd())).replace(/_MAX_/g,n.call(t,t.fnRecordsTotal())).replace(/_TOTAL_/g,n.call(t,o)).replace(/_PAGE_/g,n.call(t,i?1:Math.ceil(a/r))).replace(/_PAGES_/g,n.call(t,i?1:Math.ceil(o/r)))}function Jt(n){var a,t,e,r=n.iInitDisplayStart,o=n.aoColumns,i=n.oFeatures,l=n.bDeferLoading;if(n.bInitialised){for(_t(n),yt(n),Dt(n,n.aoHeader),Dt(n,n.aoFooter),D(n,!0),i.bAutoWidth&&ee(n),a=0,t=o.length;a<t;a++)(e=o[a]).sWidth&&(e.nTh.style.width=M(e.sWidth));R(n,null,"preInit",[n]),u(n);i=E(n);"ssp"==i&&!l||("ajax"==i?Tt(n,[],function(t){var e=Ft(n,t);for(a=0;a<e.length;a++)x(n,e[a]);n.iInitDisplayStart=r,u(n),D(n,!1),qt(n,t)}):(D(n,!1),qt(n)))}else setTimeout(function(){Jt(n)},200)}function qt(t,e){t._bInitComplete=!0,(e||t.oInit.aaData)&&O(t),R(t,null,"plugin-init",[t,e]),R(t,"aoInitComplete","init",[t,e])}function Gt(t,e){e=parseInt(e,10);t._iDisplayLength=e,Se(t),R(t,null,"length",[t,e])}function $t(a){for(var t=a.oClasses,e=a.sTableId,n=a.aLengthMenu,r=Array.isArray(n[0]),o=r?n[0]:n,i=r?n[1]:n,l=P("<select/>",{name:e+"_length","aria-controls":e,class:t.sLengthSelect}),s=0,u=o.length;s<u;s++)l[0][s]=new Option("number"==typeof i[s]?a.fnFormatNumber(i[s]):i[s],o[s]);var c=P("<div><label/></div>").addClass(t.sLength);return a.aanFeatures.l||(c[0].id=e+"_length"),c.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",l[0].outerHTML)),P("select",c).val(a._iDisplayLength).on("change.DT",function(t){Gt(a,P(this).val()),v(a)}),P(a.nTable).on("length.dt.DT",function(t,e,n){a===e&&P("select",c).val(n)}),c[0]}function zt(t){function c(t){v(t)}var e=t.sPaginationType,f=w.ext.pager[e],d="function"==typeof f,e=P("<div/>").addClass(t.oClasses.sPaging+e)[0],h=t.aanFeatures;return d||f.fnInit(t,e,c),h.p||(e.id=t.sTableId+"_paginate",t.aoDrawCallback.push({fn:function(t){if(d)for(var e=t._iDisplayStart,n=t._iDisplayLength,a=t.fnRecordsDisplay(),r=-1===n,o=r?0:Math.ceil(e/n),i=r?1:Math.ceil(a/n),l=f(o,i),s=0,u=h.p.length;s<u;s++)ve(t,"pageButton")(t,h.p[s],s,l,o,i);else f.fnUpdate(t,c)},sName:"pagination"})),e}function Yt(t,e,n){var a=t._iDisplayStart,r=t._iDisplayLength,o=t.fnRecordsDisplay(),o=(0===o||-1===r?a=0:"number"==typeof e?o<(a=e*r)&&(a=0):"first"==e?a=0:"previous"==e?(a=0<=r?a-r:0)<0&&(a=0):"next"==e?a+r<o&&(a+=r):"last"==e?a=Math.floor((o-1)/r)*r:W(t,0,"Unknown paging action: "+e,5),t._iDisplayStart!==a);return t._iDisplayStart=a,o?(R(t,null,"page",[t]),n&&v(t)):R(t,null,"page-nc",[t]),o}function Zt(t){return P("<div/>",{id:t.aanFeatures.r?null:t.sTableId+"_processing",class:t.oClasses.sProcessing,role:"status"}).html(t.oLanguage.sProcessing).append("<div><div></div><div></div><div></div><div></div></div>").insertBefore(t.nTable)[0]}function D(t,e){t.oFeatures.bProcessing&&P(t.aanFeatures.r).css("display",e?"block":"none"),R(t,null,"processing",[t,e])}function Kt(t){var e,n,a,r,o,i,l,s,u,c,f,d,h=P(t.nTable),p=t.oScroll;return""===p.sX&&""===p.sY?t.nTable:(e=p.sX,n=p.sY,a=t.oClasses,o=(r=h.children("caption")).length?r[0]._captionSide:null,s=P(h[0].cloneNode(!1)),i=P(h[0].cloneNode(!1)),u=function(t){return t?M(t):null},(l=h.children("tfoot")).length||(l=null),s=P(f="<div/>",{class:a.sScrollWrapper}).append(P(f,{class:a.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:e?u(e):"100%"}).append(P(f,{class:a.sScrollHeadInner}).css({"box-sizing":"content-box",width:p.sXInner||"100%"}).append(s.removeAttr("id").css("margin-left",0).append("top"===o?r:null).append(h.children("thead"))))).append(P(f,{class:a.sScrollBody}).css({position:"relative",overflow:"auto",width:u(e)}).append(h)),l&&s.append(P(f,{class:a.sScrollFoot}).css({overflow:"hidden",border:0,width:e?u(e):"100%"}).append(P(f,{class:a.sScrollFootInner}).append(i.removeAttr("id").css("margin-left",0).append("bottom"===o?r:null).append(h.children("tfoot"))))),u=s.children(),c=u[0],f=u[1],d=l?u[2]:null,e&&P(f).on("scroll.DT",function(t){var e=this.scrollLeft;c.scrollLeft=e,l&&(d.scrollLeft=e)}),P(f).css("max-height",n),p.bCollapse||P(f).css("height",n),t.nScrollHead=c,t.nScrollBody=f,t.nScrollFoot=d,t.aoDrawCallback.push({fn:Qt,sName:"scrolling"}),s[0])}function Qt(n){function t(t){(t=t.style).paddingTop="0",t.paddingBottom="0",t.borderTopWidth="0",t.borderBottomWidth="0",t.height=0}var e,a,r,o,i,l=n.oScroll,s=l.sX,u=l.sXInner,c=l.sY,l=l.iBarWidth,f=P(n.nScrollHead),d=f[0].style,h=f.children("div"),p=h[0].style,h=h.children("table"),g=n.nScrollBody,b=P(g),m=g.style,S=P(n.nScrollFoot).children("div"),v=S.children("table"),y=P(n.nTHead),D=P(n.nTable),_=D[0],w=_.style,C=n.nTFoot?P(n.nTFoot):null,T=n.oBrowser,x=T.bScrollOversize,A=(H(n.aoColumns,"nTh"),[]),I=[],F=[],L=[],R=g.scrollHeight>g.clientHeight;n.scrollBarVis!==R&&n.scrollBarVis!==N?(n.scrollBarVis=R,O(n)):(n.scrollBarVis=R,D.children("thead, tfoot").remove(),C&&(R=C.clone().prependTo(D),i=C.find("tr"),a=R.find("tr"),R.find("[id]").removeAttr("id")),R=y.clone().prependTo(D),y=y.find("tr"),e=R.find("tr"),R.find("th, td").removeAttr("tabindex"),R.find("[id]").removeAttr("id"),s||(m.width="100%",f[0].style.width="100%"),P.each(Ct(n,R),function(t,e){r=rt(n,t),e.style.width=n.aoColumns[r].sWidth}),C&&k(function(t){t.style.width=""},a),f=D.outerWidth(),""===s?(w.width="100%",x&&(D.find("tbody").height()>g.offsetHeight||"scroll"==b.css("overflow-y"))&&(w.width=M(D.outerWidth()-l)),f=D.outerWidth()):""!==u&&(w.width=M(u),f=D.outerWidth()),k(t,e),k(function(t){var e=j.getComputedStyle?j.getComputedStyle(t).width:M(P(t).width());F.push(t.innerHTML),A.push(e)},e),k(function(t,e){t.style.width=A[e]},y),P(e).css("height",0),C&&(k(t,a),k(function(t){L.push(t.innerHTML),I.push(M(P(t).css("width")))},a),k(function(t,e){t.style.width=I[e]},i),P(a).height(0)),k(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+F[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=A[e]},e),C&&k(function(t,e){t.innerHTML='<div class="dataTables_sizing">'+L[e]+"</div>",t.childNodes[0].style.height="0",t.childNodes[0].style.overflow="hidden",t.style.width=I[e]},a),Math.round(D.outerWidth())<Math.round(f)?(o=g.scrollHeight>g.offsetHeight||"scroll"==b.css("overflow-y")?f+l:f,x&&(g.scrollHeight>g.offsetHeight||"scroll"==b.css("overflow-y"))&&(w.width=M(o-l)),""!==s&&""===u||W(n,1,"Possible column misalignment",6)):o="100%",m.width=M(o),d.width=M(o),C&&(n.nScrollFoot.style.width=M(o)),c||x&&(m.height=M(_.offsetHeight+l)),R=D.outerWidth(),h[0].style.width=M(R),p.width=M(R),y=D.height()>g.clientHeight||"scroll"==b.css("overflow-y"),p[i="padding"+(T.bScrollbarLeft?"Left":"Right")]=y?l+"px":"0px",C&&(v[0].style.width=M(R),S[0].style.width=M(R),S[0].style[i]=y?l+"px":"0px"),D.children("colgroup").insertBefore(D.children("thead")),b.trigger("scroll"),!n.bSorted&&!n.bFiltered||n._drawHold||(g.scrollTop=0))}function k(t,e,n){for(var a,r,o=0,i=0,l=e.length;i<l;){for(a=e[i].firstChild,r=n?n[i].firstChild:null;a;)1===a.nodeType&&(n?t(a,r,o):t(a,o),o++),a=a.nextSibling,r=n?r.nextSibling:null;i++}}var te=/<.*?>/g;function ee(t){var e,n,a=t.nTable,r=t.aoColumns,o=t.oScroll,i=o.sY,l=o.sX,o=o.sXInner,s=r.length,u=it(t,"bVisible"),c=P("th",t.nTHead),f=a.getAttribute("width"),d=a.parentNode,h=!1,p=t.oBrowser,g=p.bScrollOversize,b=a.style.width;for(b&&-1!==b.indexOf("%")&&(f=b),D=0;D<u.length;D++)null!==(e=r[u[D]]).sWidth&&(e.sWidth=ae(e.sWidthOrig,d),h=!0);if(g||!h&&!l&&!i&&s==T(t)&&s==c.length)for(D=0;D<s;D++){var m=rt(t,D);null!==m&&(r[m].sWidth=M(c.eq(D).width()))}else{var b=P(a).clone().css("visibility","hidden").removeAttr("id"),S=(b.find("tbody tr").remove(),P("<tr/>").appendTo(b.find("tbody")));for(b.find("thead, tfoot").remove(),b.append(P(t.nTHead).clone()).append(P(t.nTFoot).clone()),b.find("tfoot th, tfoot td").css("width",""),c=Ct(t,b.find("thead")[0]),D=0;D<u.length;D++)e=r[u[D]],c[D].style.width=null!==e.sWidthOrig&&""!==e.sWidthOrig?M(e.sWidthOrig):"",e.sWidthOrig&&l&&P(c[D]).append(P("<div/>").css({width:e.sWidthOrig,margin:0,padding:0,border:0,height:1}));if(t.aoData.length)for(D=0;D<u.length;D++)e=r[n=u[D]],P(re(t,n)).clone(!1).append(e.sContentPadding).appendTo(S);P("[name]",b).removeAttr("name");for(var v=P("<div/>").css(l||i?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(b).appendTo(d),y=(l&&o?b.width(o):l?(b.css("width","auto"),b.removeAttr("width"),b.width()<d.clientWidth&&f&&b.width(d.clientWidth)):i?b.width(d.clientWidth):f&&b.width(f),0),D=0;D<u.length;D++){var _=P(c[D]),w=_.outerWidth()-_.width(),_=p.bBounding?Math.ceil(c[D].getBoundingClientRect().width):_.outerWidth();y+=_,r[u[D]].sWidth=M(_-w)}a.style.width=M(y),v.remove()}f&&(a.style.width=M(f)),!f&&!l||t._reszEvt||(o=function(){P(j).on("resize.DT-"+t.sInstance,ne(function(){O(t)}))},g?setTimeout(o,1e3):o(),t._reszEvt=!0)}var ne=w.util.throttle;function ae(t,e){return t?(e=(t=P("<div/>").css("width",M(t)).appendTo(e||y.body))[0].offsetWidth,t.remove(),e):0}function re(t,e){var n,a=oe(t,e);return a<0?null:(n=t.aoData[a]).nTr?n.anCells[e]:P("<td/>").html(S(t,a,e,"display"))[0]}function oe(t,e){for(var n,a=-1,r=-1,o=0,i=t.aoData.length;o<i;o++)(n=(n=(n=S(t,o,e,"display")+"").replace(te,"")).replace(/&nbsp;/g," ")).length>a&&(a=n.length,r=o);return r}function M(t){return null===t?"0px":"number"==typeof t?t<0?"0px":t+"px":t.match(/\d$/)?t+"px":t}function I(t){function e(t){t.length&&!Array.isArray(t[0])?h.push(t):P.merge(h,t)}var n,a,r,o,i,l,s,u=[],c=t.aoColumns,f=t.aaSortingFixed,d=P.isPlainObject(f),h=[];for(Array.isArray(f)&&e(f),d&&f.pre&&e(f.pre),e(t.aaSorting),d&&f.post&&e(f.post),n=0;n<h.length;n++)for(r=(o=c[s=h[n][a=0]].aDataSort).length;a<r;a++)l=c[i=o[a]].sType||"string",h[n]._idx===N&&(h[n]._idx=P.inArray(h[n][1],c[i].asSorting)),u.push({src:s,col:i,dir:h[n][1],index:h[n]._idx,type:l,formatter:w.ext.type.order[l+"-pre"]});return u}function ie(t){var e,n,a,r,c,f=[],u=w.ext.type.order,d=t.aoData,o=(t.aoColumns,0),i=t.aiDisplayMaster;for(lt(t),e=0,n=(c=I(t)).length;e<n;e++)(r=c[e]).formatter&&o++,fe(t,r.col);if("ssp"!=E(t)&&0!==c.length){for(e=0,a=i.length;e<a;e++)f[i[e]]=e;o===c.length?i.sort(function(t,e){for(var n,a,r,o,i=c.length,l=d[t]._aSortData,s=d[e]._aSortData,u=0;u<i;u++)if(0!=(r=(n=l[(o=c[u]).col])<(a=s[o.col])?-1:a<n?1:0))return"asc"===o.dir?r:-r;return(n=f[t])<(a=f[e])?-1:a<n?1:0}):i.sort(function(t,e){for(var n,a,r,o=c.length,i=d[t]._aSortData,l=d[e]._aSortData,s=0;s<o;s++)if(n=i[(r=c[s]).col],a=l[r.col],0!==(r=(u[r.type+"-"+r.dir]||u["string-"+r.dir])(n,a)))return r;return(n=f[t])<(a=f[e])?-1:a<n?1:0})}t.bSorted=!0}function le(t){for(var e=t.aoColumns,n=I(t),a=t.oLanguage.oAria,r=0,o=e.length;r<o;r++){var i=e[r],l=i.asSorting,s=i.ariaTitle||i.sTitle.replace(/<.*?>/g,""),u=i.nTh;u.removeAttribute("aria-sort"),i=i.bSortable?s+("asc"===(0<n.length&&n[0].col==r&&(u.setAttribute("aria-sort","asc"==n[0].dir?"ascending":"descending"),l[n[0].index+1])||l[0])?a.sSortAscending:a.sSortDescending):s,u.setAttribute("aria-label",i)}}function se(t,e,n,a){function r(t,e){var n=t._idx;return(n=n===N?P.inArray(t[1],s):n)+1<s.length?n+1:e?null:0}var o,i=t.aoColumns[e],l=t.aaSorting,s=i.asSorting;"number"==typeof l[0]&&(l=t.aaSorting=[l]),n&&t.oFeatures.bSortMulti?-1!==(i=P.inArray(e,H(l,"0")))?null===(o=null===(o=r(l[i],!0))&&1===l.length?0:o)?l.splice(i,1):(l[i][1]=s[o],l[i]._idx=o):(l.push([e,s[0],0]),l[l.length-1]._idx=0):l.length&&l[0][0]==e?(o=r(l[0]),l.length=1,l[0][1]=s[o],l[0]._idx=o):(l.length=0,l.push([e,s[0]]),l[0]._idx=0),u(t),"function"==typeof a&&a(t)}function ue(e,t,n,a){var r=e.aoColumns[n];me(t,{},function(t){!1!==r.bSortable&&(e.oFeatures.bProcessing?(D(e,!0),setTimeout(function(){se(e,n,t.shiftKey,a),"ssp"!==E(e)&&D(e,!1)},0)):se(e,n,t.shiftKey,a))})}function ce(t){var e,n,a,r=t.aLastSort,o=t.oClasses.sSortColumn,i=I(t),l=t.oFeatures;if(l.bSort&&l.bSortClasses){for(e=0,n=r.length;e<n;e++)a=r[e].src,P(H(t.aoData,"anCells",a)).removeClass(o+(e<2?e+1:3));for(e=0,n=i.length;e<n;e++)a=i[e].src,P(H(t.aoData,"anCells",a)).addClass(o+(e<2?e+1:3))}t.aLastSort=i}function fe(t,e){for(var n,a,r,o=t.aoColumns[e],i=w.ext.order[o.sSortDataType],l=(i&&(n=i.call(t.oInstance,t,e,ot(t,e))),w.ext.type.order[o.sType+"-pre"]),s=0,u=t.aoData.length;s<u;s++)(a=t.aoData[s])._aSortData||(a._aSortData=[]),a._aSortData[e]&&!i||(r=i?n[s]:S(t,s,e,"sort"),a._aSortData[e]=l?l(r):r)}function de(n){var t;n._bLoadingState||(t={time:+new Date,start:n._iDisplayStart,length:n._iDisplayLength,order:P.extend(!0,[],n.aaSorting),search:Et(n.oPreviousSearch),columns:P.map(n.aoColumns,function(t,e){return{visible:t.bVisible,search:Et(n.aoPreSearchCols[e])}})},n.oSavedState=t,R(n,"aoStateSaveParams","stateSaveParams",[n,t]),n.oFeatures.bStateSave&&!n.bDestroying&&n.fnStateSaveCallback.call(n.oInstance,n,t))}function he(e,t,n){var a;if(e.oFeatures.bStateSave)return(a=e.fnStateLoadCallback.call(e.oInstance,e,function(t){pe(e,t,n)}))!==N&&pe(e,a,n),!0;n()}function pe(n,t,e){var a,r,o=n.aoColumns,i=(n._bLoadingState=!0,n._bInitComplete?new w.Api(n):null);if(t&&t.time){var l=R(n,"aoStateLoadParams","stateLoadParams",[n,t]);if(-1!==P.inArray(!1,l))n._bLoadingState=!1;else{l=n.iStateDuration;if(0<l&&t.time<+new Date-1e3*l)n._bLoadingState=!1;else if(t.columns&&o.length!==t.columns.length)n._bLoadingState=!1;else{if(n.oLoadedState=P.extend(!0,{},t),t.length!==N&&(i?i.page.len(t.length):n._iDisplayLength=t.length),t.start!==N&&(null===i?(n._iDisplayStart=t.start,n.iInitDisplayStart=t.start):Yt(n,t.start/n._iDisplayLength)),t.order!==N&&(n.aaSorting=[],P.each(t.order,function(t,e){n.aaSorting.push(e[0]>=o.length?[0,e[1]]:e)})),t.search!==N&&P.extend(n.oPreviousSearch,Bt(t.search)),t.columns){for(a=0,r=t.columns.length;a<r;a++){var s=t.columns[a];s.visible!==N&&(i?i.column(a).visible(s.visible,!1):o[a].bVisible=s.visible),s.search!==N&&P.extend(n.aoPreSearchCols[a],Bt(s.search))}i&&i.columns.adjust()}n._bLoadingState=!1,R(n,"aoStateLoaded","stateLoaded",[n,t])}}}else n._bLoadingState=!1;e()}function ge(t){var e=w.settings,t=P.inArray(t,H(e,"nTable"));return-1!==t?e[t]:null}function W(t,e,n,a){if(n="DataTables warning: "+(t?"table id="+t.sTableId+" - ":"")+n,a&&(n+=". For more information about this error, please see http://datatables.net/tn/"+a),e)j.console&&console.log&&console.log(n);else{e=w.ext,e=e.sErrMode||e.errMode;if(t&&R(t,null,"error",[t,a,n]),"alert"==e)alert(n);else{if("throw"==e)throw new Error(n);"function"==typeof e&&e(t,a,n)}}}function F(n,a,t,e){Array.isArray(t)?P.each(t,function(t,e){Array.isArray(e)?F(n,a,e[0],e[1]):F(n,a,e)}):(e===N&&(e=t),a[t]!==N&&(n[e]=a[t]))}function be(t,e,n){var a,r;for(r in e)e.hasOwnProperty(r)&&(a=e[r],P.isPlainObject(a)?(P.isPlainObject(t[r])||(t[r]={}),P.extend(!0,t[r],a)):n&&"data"!==r&&"aaData"!==r&&Array.isArray(a)?t[r]=a.slice():t[r]=a);return t}function me(e,t,n){P(e).on("click.DT",t,function(t){P(e).trigger("blur"),n(t)}).on("keypress.DT",t,function(t){13===t.which&&(t.preventDefault(),n(t))}).on("selectstart.DT",function(){return!1})}function L(t,e,n,a){n&&t[e].push({fn:n,sName:a})}function R(n,t,e,a){var r=[];return t&&(r=P.map(n[t].slice().reverse(),function(t,e){return t.fn.apply(n.oInstance,a)})),null!==e&&(t=P.Event(e+".dt"),(e=P(n.nTable)).trigger(t,a),0===e.parents("body").length&&P("body").trigger(t,a),r.push(t.result)),r}function Se(t){var e=t._iDisplayStart,n=t.fnDisplayEnd(),a=t._iDisplayLength;n<=e&&(e=n-a),e-=e%a,t._iDisplayStart=e=-1===a||e<0?0:e}function ve(t,e){var t=t.renderer,n=w.ext.renderer[e];return P.isPlainObject(t)&&t[e]?n[t[e]]||n._:"string"==typeof t&&n[t]||n._}function E(t){return t.oFeatures.bServerSide?"ssp":t.ajax||t.sAjaxSource?"ajax":"dom"}function ye(t,n){var a;return Array.isArray(t)?P.map(t,function(t){return ye(t,n)}):"number"==typeof t?[n[t]]:(a=P.map(n,function(t,e){return t.nTable}),P(a).filter(t).map(function(t){var e=P.inArray(this,a);return n[e]}).toArray())}function De(r,o,t){var e,n;t&&(e=new B(r)).one("draw",function(){t(e.ajax.json())}),"ssp"==E(r)?u(r,o):(D(r,!0),(n=r.jqXHR)&&4!==n.readyState&&n.abort(),Tt(r,[],function(t){pt(r);for(var e=Ft(r,t),n=0,a=e.length;n<a;n++)x(r,e[n]);u(r,o),D(r,!1)}))}function _e(t,e,n,a,r){for(var o,i,l,s,u=[],c=typeof e,f=0,d=(e=e&&"string"!=c&&"function"!=c&&e.length!==N?e:[e]).length;f<d;f++)for(l=0,s=(i=e[f]&&e[f].split&&!e[f].match(/[\[\(:]/)?e[f].split(","):[e[f]]).length;l<s;l++)(o=n("string"==typeof i[l]?i[l].trim():i[l]))&&o.length&&(u=u.concat(o));var h=p.selector[t];if(h.length)for(f=0,d=h.length;f<d;f++)u=h[f](a,r,u);return z(u)}function we(t){return(t=t||{}).filter&&t.search===N&&(t.search=t.filter),P.extend({search:"none",order:"current",page:"all"},t)}function Ce(t){for(var e=0,n=t.length;e<n;e++)if(0<t[e].length)return t[0]=t[e],t[0].length=1,t.length=1,t.context=[t.context[e]],t;return t.length=0,t}function Te(o,t,e,n){function i(t,e){var n;if(Array.isArray(t)||t instanceof P)for(var a=0,r=t.length;a<r;a++)i(t[a],e);else t.nodeName&&"tr"===t.nodeName.toLowerCase()?l.push(t):(n=P("<tr><td></td></tr>").addClass(e),P("td",n).addClass(e).html(t)[0].colSpan=T(o),l.push(n[0]))}var l=[];i(e,n),t._details&&t._details.detach(),t._details=P(l),t._detailsShow&&t._details.insertAfter(t.nTr)}function xe(t,e){var n=t.context;if(n.length&&t.length){var a=n[0].aoData[t[0]];if(a._details){(a._detailsShow=e)?(a._details.insertAfter(a.nTr),P(a.nTr).addClass("dt-hasChild")):(a._details.detach(),P(a.nTr).removeClass("dt-hasChild")),R(n[0],null,"childRow",[e,t.row(t[0])]);var s=n[0],r=new B(s),a=".dt.DT_details",e="draw"+a,t="column-sizing"+a,a="destroy"+a,u=s.aoData;if(r.off(e+" "+t+" "+a),H(u,"_details").length>0){r.on(e,function(t,e){if(s!==e)return;r.rows({page:"current"}).eq(0).each(function(t){var e=u[t];if(e._detailsShow)e._details.insertAfter(e.nTr)})});r.on(t,function(t,e,n,a){if(s!==e)return;var r,o=T(e);for(var i=0,l=u.length;i<l;i++){r=u[i];if(r._details)r._details.children("td[colspan]").attr("colspan",o)}});r.on(a,function(t,e){if(s!==e)return;for(var n=0,a=u.length;n<a;n++)if(u[n]._details)Re(r,n)})}Le(n)}}}function Ae(t,e,n,a,r){for(var o=[],i=0,l=r.length;i<l;i++)o.push(S(t,r[i],e));return o}var Ie=[],o=Array.prototype,B=function(t,e){if(!(this instanceof B))return new B(t,e);function n(t){var e,n,a,r;t=t,a=w.settings,r=P.map(a,function(t,e){return t.nTable}),(t=t?t.nTable&&t.oApi?[t]:t.nodeName&&"table"===t.nodeName.toLowerCase()?-1!==(e=P.inArray(t,r))?[a[e]]:null:t&&"function"==typeof t.settings?t.settings().toArray():("string"==typeof t?n=P(t):t instanceof P&&(n=t),n?n.map(function(t){return-1!==(e=P.inArray(this,r))?a[e]:null}).toArray():void 0):[])&&o.push.apply(o,t)}var o=[];if(Array.isArray(t))for(var a=0,r=t.length;a<r;a++)n(t[a]);else n(t);this.context=z(o),e&&P.merge(this,e),this.selector={rows:null,cols:null,opts:null},B.extend(this,this,Ie)},Fe=(w.Api=B,P.extend(B.prototype,{any:function(){return 0!==this.count()},concat:o.concat,context:[],count:function(){return this.flatten().length},each:function(t){for(var e=0,n=this.length;e<n;e++)t.call(this,this[e],e,this);return this},eq:function(t){var e=this.context;return e.length>t?new B(e[t],this[t]):null},filter:function(t){var e=[];if(o.filter)e=o.filter.call(this,t,this);else for(var n=0,a=this.length;n<a;n++)t.call(this,this[n],n,this)&&e.push(this[n]);return new B(this.context,e)},flatten:function(){var t=[];return new B(this.context,t.concat.apply(t,this.toArray()))},join:o.join,indexOf:o.indexOf||function(t,e){for(var n=e||0,a=this.length;n<a;n++)if(this[n]===t)return n;return-1},iterator:function(t,e,n,a){var r,o,i,l,s,u,c,f,d=[],h=this.context,p=this.selector;for("string"==typeof t&&(a=n,n=e,e=t,t=!1),o=0,i=h.length;o<i;o++){var g=new B(h[o]);if("table"===e)(r=n.call(g,h[o],o))!==N&&d.push(r);else if("columns"===e||"rows"===e)(r=n.call(g,h[o],this[o],o))!==N&&d.push(r);else if("column"===e||"column-rows"===e||"row"===e||"cell"===e)for(c=this[o],"column-rows"===e&&(u=Fe(h[o],p.opts)),l=0,s=c.length;l<s;l++)f=c[l],(r="cell"===e?n.call(g,h[o],f.row,f.column,o,l):n.call(g,h[o],f,o,l,u))!==N&&d.push(r)}return d.length||a?((t=(a=new B(h,t?d.concat.apply([],d):d)).selector).rows=p.rows,t.cols=p.cols,t.opts=p.opts,a):this},lastIndexOf:o.lastIndexOf||function(t,e){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(t){var e=[];if(o.map)e=o.map.call(this,t,this);else for(var n=0,a=this.length;n<a;n++)e.push(t.call(this,this[n],n));return new B(this.context,e)},pluck:function(t){var e=w.util.get(t);return this.map(function(t){return e(t)})},pop:o.pop,push:o.push,reduce:o.reduce||function(t,e){return et(this,t,e,0,this.length,1)},reduceRight:o.reduceRight||function(t,e){return et(this,t,e,this.length-1,-1,-1)},reverse:o.reverse,selector:null,shift:o.shift,slice:function(){return new B(this.context,this)},sort:o.sort,splice:o.splice,toArray:function(){return o.slice.call(this)},to$:function(){return P(this)},toJQuery:function(){return P(this)},unique:function(){return new B(this.context,z(this))},unshift:o.unshift}),B.extend=function(t,e,n){if(n.length&&e&&(e instanceof B||e.__dt_wrapper))for(var a,r=0,o=n.length;r<o;r++)e[(a=n[r]).name]="function"===a.type?function(e,n,a){return function(){var t=n.apply(e,arguments);return B.extend(t,t,a.methodExt),t}}(t,a.val,a):"object"===a.type?{}:a.val,e[a.name].__dt_wrapper=!0,B.extend(t,e[a.name],a.propExt)},B.register=e=function(t,e){if(Array.isArray(t))for(var n=0,a=t.length;n<a;n++)B.register(t[n],e);else for(var r=t.split("."),o=Ie,i=0,l=r.length;i<l;i++){var s,u,c=function(t,e){for(var n=0,a=t.length;n<a;n++)if(t[n].name===e)return t[n];return null}(o,u=(s=-1!==r[i].indexOf("()"))?r[i].replace("()",""):r[i]);c||o.push(c={name:u,val:{},methodExt:[],propExt:[],type:"object"}),i===l-1?(c.val=e,c.type="function"==typeof e?"function":P.isPlainObject(e)?"object":"other"):o=s?c.methodExt:c.propExt}},B.registerPlural=t=function(t,e,n){B.register(t,n),B.register(e,function(){var t=n.apply(this,arguments);return t===this?this:t instanceof B?t.length?Array.isArray(t[0])?new B(t.context,t[0]):t[0]:N:t})},e("tables()",function(t){return t!==N&&null!==t?new B(ye(t,this.context)):this}),e("table()",function(t){var t=this.tables(t),e=t.context;return e.length?new B(e[0]):t}),t("tables().nodes()","table().node()",function(){return this.iterator("table",function(t){return t.nTable},1)}),t("tables().body()","table().body()",function(){return this.iterator("table",function(t){return t.nTBody},1)}),t("tables().header()","table().header()",function(){return this.iterator("table",function(t){return t.nTHead},1)}),t("tables().footer()","table().footer()",function(){return this.iterator("table",function(t){return t.nTFoot},1)}),t("tables().containers()","table().container()",function(){return this.iterator("table",function(t){return t.nTableWrapper},1)}),e("draw()",function(e){return this.iterator("table",function(t){"page"===e?v(t):u(t,!1===(e="string"==typeof e?"full-hold"!==e:e))})}),e("page()",function(e){return e===N?this.page.info().page:this.iterator("table",function(t){Yt(t,e)})}),e("page.info()",function(t){var e,n,a,r,o;return 0===this.context.length?N:(n=(e=this.context[0])._iDisplayStart,a=e.oFeatures.bPaginate?e._iDisplayLength:-1,r=e.fnRecordsDisplay(),{page:(o=-1===a)?0:Math.floor(n/a),pages:o?1:Math.ceil(r/a),start:n,end:e.fnDisplayEnd(),length:a,recordsTotal:e.fnRecordsTotal(),recordsDisplay:r,serverSide:"ssp"===E(e)})}),e("page.len()",function(e){return e===N?0!==this.context.length?this.context[0]._iDisplayLength:N:this.iterator("table",function(t){Gt(t,e)})}),e("ajax.json()",function(){var t=this.context;if(0<t.length)return t[0].json}),e("ajax.params()",function(){var t=this.context;if(0<t.length)return t[0].oAjaxData}),e("ajax.reload()",function(e,n){return this.iterator("table",function(t){De(t,!1===n,e)})}),e("ajax.url()",function(e){var t=this.context;return e===N?0===t.length?N:(t=t[0]).ajax?P.isPlainObject(t.ajax)?t.ajax.url:t.ajax:t.sAjaxSource:this.iterator("table",function(t){P.isPlainObject(t.ajax)?t.ajax.url=e:t.ajax=e})}),e("ajax.url().load()",function(e,n){return this.iterator("table",function(t){De(t,!1===n,e)})}),function(t,e){var n,a=[],r=t.aiDisplay,o=t.aiDisplayMaster,i=e.search,l=e.order,e=e.page;if("ssp"==E(t))return"removed"===i?[]:f(0,o.length);if("current"==e)for(u=t._iDisplayStart,c=t.fnDisplayEnd();u<c;u++)a.push(r[u]);else if("current"==l||"applied"==l){if("none"==i)a=o.slice();else if("applied"==i)a=r.slice();else if("removed"==i){for(var s={},u=0,c=r.length;u<c;u++)s[r[u]]=null;a=P.map(o,function(t){return s.hasOwnProperty(t)?null:t})}}else if("index"==l||"original"==l)for(u=0,c=t.aoData.length;u<c;u++)("none"==i||-1===(n=P.inArray(u,r))&&"removed"==i||0<=n&&"applied"==i)&&a.push(u);return a}),Le=(e("rows()",function(e,n){e===N?e="":P.isPlainObject(e)&&(n=e,e=""),n=we(n);var t=this.iterator("table",function(t){return _e("row",e,function(n){var t=d(n),a=r.aoData;if(null!==t&&!o)return[t];if(i=i||Fe(r,o),null!==t&&-1!==P.inArray(t,i))return[t];if(null===n||n===N||""===n)return i;if("function"==typeof n)return P.map(i,function(t){var e=a[t];return n(t,e._aData,e.nTr)?t:null});if(n.nodeName)return t=n._DT_RowIndex,e=n._DT_CellIndex,t!==N?a[t]&&a[t].nTr===n?[t]:[]:e?a[e.row]&&a[e.row].nTr===n.parentNode?[e.row]:[]:(t=P(n).closest("*[data-dt-row]")).length?[t.data("dt-row")]:[];if("string"==typeof n&&"#"===n.charAt(0)){var e=r.aIds[n.replace(/^#/,"")];if(e!==N)return[e.idx]}t=_(m(r.aoData,i,"nTr"));return P(t).filter(n).map(function(){return this._DT_RowIndex}).toArray()},r=t,o=n);var r,o,i},1);return t.selector.rows=e,t.selector.opts=n,t}),e("rows().nodes()",function(){return this.iterator("row",function(t,e){return t.aoData[e].nTr||N},1)}),e("rows().data()",function(){return this.iterator(!0,"rows",function(t,e){return m(t.aoData,e,"_aData")},1)}),t("rows().cache()","row().cache()",function(n){return this.iterator("row",function(t,e){t=t.aoData[e];return"search"===n?t._aFilterData:t._aSortData},1)}),t("rows().invalidate()","row().invalidate()",function(n){return this.iterator("row",function(t,e){bt(t,e,n)})}),t("rows().indexes()","row().index()",function(){return this.iterator("row",function(t,e){return e},1)}),t("rows().ids()","row().id()",function(t){for(var e=[],n=this.context,a=0,r=n.length;a<r;a++)for(var o=0,i=this[a].length;o<i;o++){var l=n[a].rowIdFn(n[a].aoData[this[a][o]]._aData);e.push((!0===t?"#":"")+l)}return new B(n,e)}),t("rows().remove()","row().remove()",function(){var f=this;return this.iterator("row",function(t,e,n){var a,r,o,i,l,s,u=t.aoData,c=u[e];for(u.splice(e,1),a=0,r=u.length;a<r;a++)if(s=(l=u[a]).anCells,null!==l.nTr&&(l.nTr._DT_RowIndex=a),null!==s)for(o=0,i=s.length;o<i;o++)s[o]._DT_CellIndex.row=a;gt(t.aiDisplayMaster,e),gt(t.aiDisplay,e),gt(f[n],e,!1),0<t._iRecordsDisplay&&t._iRecordsDisplay--,Se(t);n=t.rowIdFn(c._aData);n!==N&&delete t.aIds[n]}),this.iterator("table",function(t){for(var e=0,n=t.aoData.length;e<n;e++)t.aoData[e].idx=e}),this}),e("rows.add()",function(o){var t=this.iterator("table",function(t){for(var e,n=[],a=0,r=o.length;a<r;a++)(e=o[a]).nodeName&&"TR"===e.nodeName.toUpperCase()?n.push(ut(t,e)[0]):n.push(x(t,e));return n},1),e=this.rows(-1);return e.pop(),P.merge(e,t),e}),e("row()",function(t,e){return Ce(this.rows(t,e))}),e("row().data()",function(t){var e,n=this.context;return t===N?n.length&&this.length?n[0].aoData[this[0]]._aData:N:((e=n[0].aoData[this[0]])._aData=t,Array.isArray(t)&&e.nTr&&e.nTr.id&&b(n[0].rowId)(t,e.nTr.id),bt(n[0],this[0],"data"),this)}),e("row().node()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]].nTr||null}),e("row.add()",function(e){e instanceof P&&e.length&&(e=e[0]);var t=this.iterator("table",function(t){return e.nodeName&&"TR"===e.nodeName.toUpperCase()?ut(t,e)[0]:x(t,e)});return this.row(t[0])}),P(y).on("plugin-init.dt",function(t,e){var n=new B(e),a="on-plugin-init",r="stateSaveParams."+a,o="destroy. "+a,a=(n.on(r,function(t,e,n){for(var a=e.rowIdFn,r=e.aoData,o=[],i=0;i<r.length;i++)r[i]._detailsShow&&o.push("#"+a(r[i]._aData));n.childRows=o}),n.on(o,function(){n.off(r+" "+o)}),n.state.loaded());a&&a.childRows&&n.rows(P.map(a.childRows,function(t){return t.replace(/:/g,"\\:")})).every(function(){R(e,null,"requestChild",[this])})}),w.util.throttle(function(t){de(t[0])},500)),Re=function(t,e){var n=t.context;n.length&&(e=n[0].aoData[e!==N?e:t[0]])&&e._details&&(e._details.remove(),e._detailsShow=N,e._details=N,P(e.nTr).removeClass("dt-hasChild"),Le(n))},Pe="row().child",je=Pe+"()",Ne=(e(je,function(t,e){var n=this.context;return t===N?n.length&&this.length?n[0].aoData[this[0]]._details:N:(!0===t?this.child.show():!1===t?Re(this):n.length&&this.length&&Te(n[0],n[0].aoData[this[0]],t,e),this)}),e([Pe+".show()",je+".show()"],function(t){return xe(this,!0),this}),e([Pe+".hide()",je+".hide()"],function(){return xe(this,!1),this}),e([Pe+".remove()",je+".remove()"],function(){return Re(this),this}),e(Pe+".isShown()",function(){var t=this.context;return t.length&&this.length&&t[0].aoData[this[0]]._detailsShow||!1}),/^([^:]+):(name|visIdx|visible)$/),He=(e("columns()",function(n,a){n===N?n="":P.isPlainObject(n)&&(a=n,n=""),a=we(a);var t=this.iterator("table",function(t){return e=n,l=a,s=(i=t).aoColumns,u=H(s,"sName"),c=H(s,"nTh"),_e("column",e,function(n){var a,t=d(n);if(""===n)return f(s.length);if(null!==t)return[0<=t?t:s.length+t];if("function"==typeof n)return a=Fe(i,l),P.map(s,function(t,e){return n(e,Ae(i,e,0,0,a),c[e])?e:null});var r="string"==typeof n?n.match(Ne):"";if(r)switch(r[2]){case"visIdx":case"visible":var e,o=parseInt(r[1],10);return o<0?[(e=P.map(s,function(t,e){return t.bVisible?e:null}))[e.length+o]]:[rt(i,o)];case"name":return P.map(u,function(t,e){return t===r[1]?e:null});default:return[]}return n.nodeName&&n._DT_CellIndex?[n._DT_CellIndex.column]:(t=P(c).filter(n).map(function(){return P.inArray(this,c)}).toArray()).length||!n.nodeName?t:(t=P(n).closest("*[data-dt-column]")).length?[t.data("dt-column")]:[]},i,l);var i,e,l,s,u,c},1);return t.selector.cols=n,t.selector.opts=a,t}),t("columns().header()","column().header()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTh},1)}),t("columns().footer()","column().footer()",function(t,e){return this.iterator("column",function(t,e){return t.aoColumns[e].nTf},1)}),t("columns().data()","column().data()",function(){return this.iterator("column-rows",Ae,1)}),t("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",function(t,e){return t.aoColumns[e].mData},1)}),t("columns().cache()","column().cache()",function(o){return this.iterator("column-rows",function(t,e,n,a,r){return m(t.aoData,r,"search"===o?"_aFilterData":"_aSortData",e)},1)}),t("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(t,e,n,a,r){return m(t.aoData,r,"anCells",e)},1)}),t("columns().visible()","column().visible()",function(f,n){var e=this,t=this.iterator("column",function(t,e){if(f===N)return t.aoColumns[e].bVisible;var n,a,r=e,e=f,o=t.aoColumns,i=o[r],l=t.aoData;if(e===N)i.bVisible;else if(i.bVisible!==e){if(e)for(var s=P.inArray(!0,H(o,"bVisible"),r+1),u=0,c=l.length;u<c;u++)a=l[u].nTr,n=l[u].anCells,a&&a.insertBefore(n[r],n[s]||null);else P(H(t.aoData,"anCells",r)).detach();i.bVisible=e}});return f!==N&&this.iterator("table",function(t){Dt(t,t.aoHeader),Dt(t,t.aoFooter),t.aiDisplay.length||P(t.nTBody).find("td[colspan]").attr("colspan",T(t)),de(t),e.iterator("column",function(t,e){R(t,null,"column-visibility",[t,e,f,n])}),n!==N&&!n||e.columns.adjust()}),t}),t("columns().indexes()","column().index()",function(n){return this.iterator("column",function(t,e){return"visible"===n?ot(t,e):e},1)}),e("columns.adjust()",function(){return this.iterator("table",function(t){O(t)},1)}),e("column.index()",function(t,e){var n;if(0!==this.context.length)return n=this.context[0],"fromVisible"===t||"toData"===t?rt(n,e):"fromData"===t||"toVisible"===t?ot(n,e):void 0}),e("column()",function(t,e){return Ce(this.columns(t,e))}),e("cells()",function(g,t,b){var a,r,o,i,l,s,e;return P.isPlainObject(g)&&(g.row===N?(b=g,g=null):(b=t,t=null)),P.isPlainObject(t)&&(b=t,t=null),null===t||t===N?this.iterator("table",function(t){return a=t,t=g,e=we(b),f=a.aoData,d=Fe(a,e),n=_(m(f,d,"anCells")),h=P(Y([],n)),p=a.aoColumns.length,_e("cell",t,function(t){var e,n="function"==typeof t;if(null===t||t===N||n){for(o=[],i=0,l=d.length;i<l;i++)for(r=d[i],s=0;s<p;s++)u={row:r,column:s},(!n||(c=f[r],t(u,S(a,r,s),c.anCells?c.anCells[s]:null)))&&o.push(u);return o}return P.isPlainObject(t)?t.column!==N&&t.row!==N&&-1!==P.inArray(t.row,d)?[t]:[]:(e=h.filter(t).map(function(t,e){return{row:e._DT_CellIndex.row,column:e._DT_CellIndex.column}}).toArray()).length||!t.nodeName?e:(c=P(t).closest("*[data-dt-row]")).length?[{row:c.data("dt-row"),column:c.data("dt-column")}]:[]},a,e);var a,e,r,o,i,l,s,u,c,f,d,n,h,p}):(e=b?{page:b.page,order:b.order,search:b.search}:{},a=this.columns(t,e),r=this.rows(g,e),e=this.iterator("table",function(t,e){var n=[];for(o=0,i=r[e].length;o<i;o++)for(l=0,s=a[e].length;l<s;l++)n.push({row:r[e][o],column:a[e][l]});return n},1),e=b&&b.selected?this.cells(e,b):e,P.extend(e.selector,{cols:t,rows:g,opts:b}),e)}),t("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(t,e,n){t=t.aoData[e];return t&&t.anCells?t.anCells[n]:N},1)}),e("cells().data()",function(){return this.iterator("cell",function(t,e,n){return S(t,e,n)},1)}),t("cells().cache()","cell().cache()",function(a){return a="search"===a?"_aFilterData":"_aSortData",this.iterator("cell",function(t,e,n){return t.aoData[e][a][n]},1)}),t("cells().render()","cell().render()",function(a){return this.iterator("cell",function(t,e,n){return S(t,e,n,a)},1)}),t("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(t,e,n){return{row:e,column:n,columnVisible:ot(t,n)}},1)}),t("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(t,e,n){bt(t,e,a,n)})}),e("cell()",function(t,e,n){return Ce(this.cells(t,e,n))}),e("cell().data()",function(t){var e=this.context,n=this[0];return t===N?e.length&&n.length?S(e[0],n[0].row,n[0].column):N:(ct(e[0],n[0].row,n[0].column,t),bt(e[0],n[0].row,"data",n[0].column),this)}),e("order()",function(e,t){var n=this.context;return e===N?0!==n.length?n[0].aaSorting:N:("number"==typeof e?e=[[e,t]]:e.length&&!Array.isArray(e[0])&&(e=Array.prototype.slice.call(arguments)),this.iterator("table",function(t){t.aaSorting=e.slice()}))}),e("order.listener()",function(e,n,a){return this.iterator("table",function(t){ue(t,e,n,a)})}),e("order.fixed()",function(e){var t;return e?this.iterator("table",function(t){t.aaSortingFixed=P.extend(!0,{},e)}):(t=(t=this.context).length?t[0].aaSortingFixed:N,Array.isArray(t)?{pre:t}:t)}),e(["columns().order()","column().order()"],function(a){var r=this;return this.iterator("table",function(t,e){var n=[];P.each(r[e],function(t,e){n.push([e,a])}),t.aaSorting=n})}),e("search()",function(e,n,a,r){var t=this.context;return e===N?0!==t.length?t[0].oPreviousSearch.sSearch:N:this.iterator("table",function(t){t.oFeatures.bFilter&&Rt(t,P.extend({},t.oPreviousSearch,{sSearch:e+"",bRegex:null!==n&&n,bSmart:null===a||a,bCaseInsensitive:null===r||r}),1)})}),t("columns().search()","column().search()",function(a,r,o,i){return this.iterator("column",function(t,e){var n=t.aoPreSearchCols;if(a===N)return n[e].sSearch;t.oFeatures.bFilter&&(P.extend(n[e],{sSearch:a+"",bRegex:null!==r&&r,bSmart:null===o||o,bCaseInsensitive:null===i||i}),Rt(t,t.oPreviousSearch,1))})}),e("state()",function(){return this.context.length?this.context[0].oSavedState:null}),e("state.clear()",function(){return this.iterator("table",function(t){t.fnStateSaveCallback.call(t.oInstance,t,{})})}),e("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null}),e("state.save()",function(){return this.iterator("table",function(t){de(t)})}),w.use=function(t,e){"lib"===e||t.fn?P=t:"win"!=e&&!t.document||(y=(j=t).document)},w.factory=function(t,e){var n=!1;return t&&t.document&&(y=(j=t).document),e&&e.fn&&e.fn.jquery&&(P=e,n=!0),n},w.versionCheck=w.fnVersionCheck=function(t){for(var e,n,a=w.version.split("."),r=t.split("."),o=0,i=r.length;o<i;o++)if((e=parseInt(a[o],10)||0)!==(n=parseInt(r[o],10)||0))return n<e;return!0},w.isDataTable=w.fnIsDataTable=function(t){var r=P(t).get(0),o=!1;return t instanceof w.Api||(P.each(w.settings,function(t,e){var n=e.nScrollHead?P("table",e.nScrollHead)[0]:null,a=e.nScrollFoot?P("table",e.nScrollFoot)[0]:null;e.nTable!==r&&n!==r&&a!==r||(o=!0)}),o)},w.tables=w.fnTables=function(e){var t=!1,n=(P.isPlainObject(e)&&(t=e.api,e=e.visible),P.map(w.settings,function(t){if(!e||P(t.nTable).is(":visible"))return t.nTable}));return t?new B(n):n},w.camelToHungarian=C,e("$()",function(t,e){e=this.rows(e).nodes(),e=P(e);return P([].concat(e.filter(t).toArray(),e.find(t).toArray()))}),P.each(["on","one","off"],function(t,n){e(n+"()",function(){var t=Array.prototype.slice.call(arguments),e=(t[0]=P.map(t[0].split(/\s/),function(t){return t.match(/\.dt\b/)?t:t+".dt"}).join(" "),P(this.tables().nodes()));return e[n].apply(e,t),this})}),e("clear()",function(){return this.iterator("table",function(t){pt(t)})}),e("settings()",function(){return new B(this.context,this.context)}),e("init()",function(){var t=this.context;return t.length?t[0].oInit:null}),e("data()",function(){return this.iterator("table",function(t){return H(t.aoData,"_aData")}).flatten()}),e("destroy()",function(c){return c=c||!1,this.iterator("table",function(e){var n,t=e.oClasses,a=e.nTable,r=e.nTBody,o=e.nTHead,i=e.nTFoot,l=P(a),r=P(r),s=P(e.nTableWrapper),u=P.map(e.aoData,function(t){return t.nTr}),i=(e.bDestroying=!0,R(e,"aoDestroyCallback","destroy",[e]),c||new B(e).columns().visible(!0),s.off(".DT").find(":not(tbody *)").off(".DT"),P(j).off(".DT-"+e.sInstance),a!=o.parentNode&&(l.children("thead").detach(),l.append(o)),i&&a!=i.parentNode&&(l.children("tfoot").detach(),l.append(i)),e.aaSorting=[],e.aaSortingFixed=[],ce(e),P(u).removeClass(e.asStripeClasses.join(" ")),P("th, td",o).removeClass(t.sSortable+" "+t.sSortableAsc+" "+t.sSortableDesc+" "+t.sSortableNone),r.children().detach(),r.append(u),e.nTableWrapper.parentNode),o=c?"remove":"detach",u=(l[o](),s[o](),!c&&i&&(i.insertBefore(a,e.nTableReinsertBefore),l.css("width",e.sDestroyWidth).removeClass(t.sTable),n=e.asDestroyStripes.length)&&r.children().each(function(t){P(this).addClass(e.asDestroyStripes[t%n])}),P.inArray(e,w.settings));-1!==u&&w.settings.splice(u,1)})}),P.each(["column","row","cell"],function(t,s){e(s+"s().every()",function(o){var i=this.selector.opts,l=this;return this.iterator(s,function(t,e,n,a,r){o.call(l[s](e,"cell"===s?n:i,"cell"===s?i:N),e,n,a,r)})})}),e("i18n()",function(t,e,n){var a=this.context[0],t=A(t)(a.oLanguage);return t===N&&(t=e),(t=n!==N&&P.isPlainObject(t)?t[n]!==N?t[n]:t._:t).replace("%d",n)}),w.version="1.13.4",w.settings=[],w.models={},w.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0,return:!1},w.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,idx:-1},w.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null},w.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,25,50,100],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(t){return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(t){try{return JSON.parse((-1===t.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+t.sInstance+"_"+location.pathname))}catch(t){return{}}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(t,e){try{(-1===t.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+t.sInstance+"_"+location.pathname,JSON.stringify(e))}catch(t){}},fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": activate to sort column ascending",sSortDescending:": activate to sort column descending"},oPaginate:{sFirst:"First",sLast:"Last",sNext:"Next",sPrevious:"Previous"},sEmptyTable:"No data available in table",sInfo:"Showing _START_ to _END_ of _TOTAL_ entries",sInfoEmpty:"Showing 0 to 0 of 0 entries",sInfoFiltered:"(filtered from _MAX_ total entries)",sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Show _MENU_ entries",sLoadingRecords:"Loading...",sProcessing:"",sSearch:"Search:",sSearchPlaceholder:"",sUrl:"",sZeroRecords:"No matching records found"},oSearch:P.extend({},w.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"},i(w.defaults),w.defaults.column={aDataSort:null,iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null},i(w.defaults.column),w.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,jqXHR:null,json:N,oAjaxData:N,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==E(this)?+this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==E(this)?+this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var t=this._iDisplayLength,e=this._iDisplayStart,n=e+t,a=this.aiDisplay.length,r=this.oFeatures,o=r.bPaginate;return r.bServerSide?!1===o||-1===t?e+a:Math.min(e+t,this._iRecordsDisplay):!o||a<n||-1===t?a:n},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null},w.ext=p={buttons:{},classes:{},build:"dt/dt-1.13.4/r-2.4.1/rg-1.3.1",errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:w.fnVersionCheck,iApiIndex:0,oJUIClasses:{},sVersion:w.version},P.extend(p,{afnFiltering:p.search,aTypes:p.type.detect,ofnSearch:p.type.search,oSort:p.type.order,afnSortData:p.order,aoFeatures:p.feature,oApi:p.internal,oStdClasses:p.classes,oPagination:p.pager}),P.extend(w.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_desc_disabled",sSortableDesc:"sorting_asc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""}),w.ext.pager);function Oe(t,e){var n=[],a=He.numbers_length,r=Math.floor(a/2);return e<=a?n=f(0,e):t<=r?((n=f(0,a-2)).push("ellipsis"),n.push(e-1)):((e-1-r<=t?n=f(e-(a-2),e):((n=f(t-r+2,t+r-1)).push("ellipsis"),n.push(e-1),n)).splice(0,0,"ellipsis"),n.splice(0,0,0)),n.DT_el="span",n}P.extend(He,{simple:function(t,e){return["previous","next"]},full:function(t,e){return["first","previous","next","last"]},numbers:function(t,e){return[Oe(t,e)]},simple_numbers:function(t,e){return["previous",Oe(t,e),"next"]},full_numbers:function(t,e){return["first","previous",Oe(t,e),"next","last"]},first_last_numbers:function(t,e){return["first",Oe(t,e),"last"]},_numbers:Oe,numbers_length:7}),P.extend(!0,w.ext.renderer,{pageButton:{_:function(c,t,f,e,d,h){function p(t,e){for(var n,a,r,o=m.sPageButtonDisabled,i=function(t){Yt(c,t.data.action,!0)},l=0,s=e.length;l<s;l++)if(n=e[l],Array.isArray(n)){var u=P("<"+(n.DT_el||"div")+"/>").appendTo(t);p(u,n)}else{switch(g=null,b=n,a=c.iTabIndex,n){case"ellipsis":t.append('<span class="ellipsis">&#x2026;</span>');break;case"first":g=S.sFirst,0===d&&(a=-1,b+=" "+o);break;case"previous":g=S.sPrevious,0===d&&(a=-1,b+=" "+o);break;case"next":g=S.sNext,0!==h&&d!==h-1||(a=-1,b+=" "+o);break;case"last":g=S.sLast,0!==h&&d!==h-1||(a=-1,b+=" "+o);break;default:g=c.fnFormatNumber(n+1),b=d===n?m.sPageButtonActive:""}null!==g&&(u=c.oInit.pagingTag||"a",r=-1!==b.indexOf(o),me(P("<"+u+">",{class:m.sPageButton+" "+b,"aria-controls":c.sTableId,"aria-disabled":r?"true":null,"aria-label":v[n],"aria-role":"link","aria-current":b===m.sPageButtonActive?"page":null,"data-dt-idx":n,tabindex:a,id:0===f&&"string"==typeof n?c.sTableId+"_"+n:null}).html(g).appendTo(t),{action:n},i))}}var g,b,n,m=c.oClasses,S=c.oLanguage.oPaginate,v=c.oLanguage.oAria.paginate||{};try{n=P(t).find(y.activeElement).data("dt-idx")}catch(t){}p(P(t).empty(),e),n!==N&&P(t).find("[data-dt-idx="+n+"]").trigger("focus")}}}),P.extend(w.ext.type.detect,[function(t,e){e=e.oLanguage.sDecimal;return l(t,e)?"num"+e:null},function(t,e){var n;return(!t||t instanceof Date||X.test(t))&&(null!==(n=Date.parse(t))&&!isNaN(n)||h(t))?"date":null},function(t,e){e=e.oLanguage.sDecimal;return l(t,e,!0)?"num-fmt"+e:null},function(t,e){e=e.oLanguage.sDecimal;return a(t,e)?"html-num"+e:null},function(t,e){e=e.oLanguage.sDecimal;return a(t,e,!0)?"html-num-fmt"+e:null},function(t,e){return h(t)||"string"==typeof t&&-1!==t.indexOf("<")?"html":null}]),P.extend(w.ext.type.search,{html:function(t){return h(t)?t:"string"==typeof t?t.replace(U," ").replace(V,""):""},string:function(t){return!h(t)&&"string"==typeof t?t.replace(U," "):t}});function ke(t,e,n,a){var r;return 0===t||t&&"-"!==t?"number"==(r=typeof t)||"bigint"==r?t:+(t=(t=e?G(t,e):t).replace&&(n&&(t=t.replace(n,"")),a)?t.replace(a,""):t):-1/0}function Me(n){P.each({num:function(t){return ke(t,n)},"num-fmt":function(t){return ke(t,n,q)},"html-num":function(t){return ke(t,n,V)},"html-num-fmt":function(t){return ke(t,n,V,q)}},function(t,e){p.type.order[t+n+"-pre"]=e,t.match(/^html\-/)&&(p.type.search[t+n]=p.type.search.html)})}P.extend(p.type.order,{"date-pre":function(t){t=Date.parse(t);return isNaN(t)?-1/0:t},"html-pre":function(t){return h(t)?"":t.replace?t.replace(/<.*?>/g,"").toLowerCase():t+""},"string-pre":function(t){return h(t)?"":"string"==typeof t?t.toLowerCase():t.toString?t.toString():""},"string-asc":function(t,e){return t<e?-1:e<t?1:0},"string-desc":function(t,e){return t<e?1:e<t?-1:0}}),Me(""),P.extend(!0,w.ext.renderer,{header:{_:function(r,o,i,l){P(r.nTable).on("order.dt.DT",function(t,e,n,a){r===e&&(e=i.idx,o.removeClass(l.sSortAsc+" "+l.sSortDesc).addClass("asc"==a[e]?l.sSortAsc:"desc"==a[e]?l.sSortDesc:i.sSortingClass))})},jqueryui:function(r,o,i,l){P("<div/>").addClass(l.sSortJUIWrapper).append(o.contents()).append(P("<span/>").addClass(l.sSortIcon+" "+i.sSortingClassJUI)).appendTo(o),P(r.nTable).on("order.dt.DT",function(t,e,n,a){r===e&&(e=i.idx,o.removeClass(l.sSortAsc+" "+l.sSortDesc).addClass("asc"==a[e]?l.sSortAsc:"desc"==a[e]?l.sSortDesc:i.sSortingClass),o.find("span."+l.sSortIcon).removeClass(l.sSortJUIAsc+" "+l.sSortJUIDesc+" "+l.sSortJUI+" "+l.sSortJUIAscAllowed+" "+l.sSortJUIDescAllowed).addClass("asc"==a[e]?l.sSortJUIAsc:"desc"==a[e]?l.sSortJUIDesc:i.sSortingClassJUI))})}}});function We(t){return"string"==typeof(t=Array.isArray(t)?t.join(","):t)?t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):t}function Ee(t,e,n,a,r){return j.moment?t[e](r):j.luxon?t[n](r):a?t[a](r):t}var Be=!1;function Ue(t,e,n){var a;if(j.moment){if(!(a=j.moment.utc(t,e,n,!0)).isValid())return null}else if(j.luxon){if(!(a=e&&"string"==typeof t?j.luxon.DateTime.fromFormat(t,e):j.luxon.DateTime.fromISO(t)).isValid)return null;a.setLocale(n)}else e?(Be||alert("DataTables warning: Formatted date without Moment.js or Luxon - https://datatables.net/tn/17"),Be=!0):a=new Date(t);return a}function Ve(s){return function(a,r,o,i){0===arguments.length?(o="en",a=r=null):1===arguments.length?(o="en",r=a,a=null):2===arguments.length&&(o=r,r=a,a=null);var l="datetime-"+r;return w.ext.type.order[l]||(w.ext.type.detect.unshift(function(t){return t===l&&l}),w.ext.type.order[l+"-asc"]=function(t,e){t=t.valueOf(),e=e.valueOf();return t===e?0:t<e?-1:1},w.ext.type.order[l+"-desc"]=function(t,e){t=t.valueOf(),e=e.valueOf();return t===e?0:e<t?-1:1}),function(t,e){var n;return null!==t&&t!==N||(t="--now"===i?(n=new Date,new Date(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds()))):""),"type"===e?l:""===t?"sort"!==e?"":Ue("0000-01-01 00:00:00",null,o):!(null===r||a!==r||"sort"===e||"type"===e||t instanceof Date)||null===(n=Ue(t,a,o))?t:"sort"===e?n:(t=null===r?Ee(n,"toDate","toJSDate","")[s]():Ee(n,"format","toFormat","toISOString",r),"display"===e?We(t):t)}}}var Xe=",",Je=".";if(Intl)try{for(var qe=(new Intl.NumberFormat).formatToParts(100000.1),n=0;n<qe.length;n++)"group"===qe[n].type?Xe=qe[n].value:"decimal"===qe[n].type&&(Je=qe[n].value)}catch(t){}function Ge(e){return function(){var t=[ge(this[w.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return w.ext.internal[e].apply(this,t)}}return w.datetime=function(n,a){var r="datetime-detect-"+n;a=a||"en",w.ext.type.order[r]||(w.ext.type.detect.unshift(function(t){var e=Ue(t,n,a);return!(""!==t&&!e)&&r}),w.ext.type.order[r+"-pre"]=function(t){return Ue(t,n,a)||0})},w.render={date:Ve("toLocaleDateString"),datetime:Ve("toLocaleString"),time:Ve("toLocaleTimeString"),number:function(a,r,o,i,l){return null!==a&&a!==N||(a=Xe),null!==r&&r!==N||(r=Je),{display:function(t){if("number"!=typeof t&&"string"!=typeof t)return t;if(""===t||null===t)return t;var e=t<0?"-":"",n=parseFloat(t);if(isNaN(n))return We(t);n=n.toFixed(o),t=Math.abs(n);n=parseInt(t,10),t=o?r+(t-n).toFixed(o).substring(2):"";return(e=0===n&&0===parseFloat(t)?"":e)+(i||"")+n.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+t+(l||"")}}},text:function(){return{display:We,filter:We}}},P.extend(w.ext.internal,{_fnExternApiFunc:Ge,_fnBuildAjax:Tt,_fnAjaxUpdate:xt,_fnAjaxParameters:At,_fnAjaxUpdateDraw:It,_fnAjaxDataSrc:Ft,_fnAddColumn:nt,_fnColumnOptions:at,_fnAdjustColumnSizing:O,_fnVisibleToColumnIndex:rt,_fnColumnIndexToVisible:ot,_fnVisbleColumns:T,_fnGetColumns:it,_fnColumnTypes:lt,_fnApplyColumnDefs:st,_fnHungarianMap:i,_fnCamelToHungarian:C,_fnLanguageCompat:Z,_fnBrowserDetect:tt,_fnAddData:x,_fnAddTr:ut,_fnNodeToDataIndex:function(t,e){return e._DT_RowIndex!==N?e._DT_RowIndex:null},_fnNodeToColumnIndex:function(t,e,n){return P.inArray(n,t.aoData[e].anCells)},_fnGetCellData:S,_fnSetCellData:ct,_fnSplitObjNotation:dt,_fnGetObjectDataFn:A,_fnSetObjectDataFn:b,_fnGetDataMaster:ht,_fnClearTable:pt,_fnDeleteIndex:gt,_fnInvalidate:bt,_fnGetRowElements:mt,_fnCreateTr:St,_fnBuildHead:yt,_fnDrawHead:Dt,_fnDraw:v,_fnReDraw:u,_fnAddOptionsHtml:_t,_fnDetectHeader:wt,_fnGetUniqueThs:Ct,_fnFeatureHtmlFilter:Lt,_fnFilterComplete:Rt,_fnFilterCustom:Pt,_fnFilterColumn:jt,_fnFilter:Nt,_fnFilterCreateSearch:Ht,_fnEscapeRegex:Ot,_fnFilterData:Wt,_fnFeatureHtmlInfo:Ut,_fnUpdateInfo:Vt,_fnInfoMacros:Xt,_fnInitialise:Jt,_fnInitComplete:qt,_fnLengthChange:Gt,_fnFeatureHtmlLength:$t,_fnFeatureHtmlPaginate:zt,_fnPageChange:Yt,_fnFeatureHtmlProcessing:Zt,_fnProcessingDisplay:D,_fnFeatureHtmlTable:Kt,_fnScrollDraw:Qt,_fnApplyToChildren:k,_fnCalculateColumnWidths:ee,_fnThrottle:ne,_fnConvertToWidth:ae,_fnGetWidestNode:re,_fnGetMaxLenString:oe,_fnStringToCss:M,_fnSortFlatten:I,_fnSort:ie,_fnSortAria:le,_fnSortListener:se,_fnSortAttachListener:ue,_fnSortingClasses:ce,_fnSortData:fe,_fnSaveState:de,_fnLoadState:he,_fnImplementState:pe,_fnSettingsFromNode:ge,_fnLog:W,_fnMap:F,_fnBindAction:me,_fnCallbackReg:L,_fnCallbackFire:R,_fnLengthOverflow:Se,_fnRenderer:ve,_fnDataSource:E,_fnRowAttributes:vt,_fnExtend:be,_fnCalculateEnd:function(){}}),((P.fn.dataTable=w).$=P).fn.dataTableSettings=w.settings,P.fn.dataTableExt=w.ext,P.fn.DataTable=function(t){return P(this).dataTable(t).api()},P.each(w,function(t,e){P.fn.DataTable[t]=e}),w});

/*! DataTables styling integration
 * ©2018 SpryMedia Ltd - datatables.net/license
 */
!function(t){var o,d;"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(e){return t(e,window,document)}):"object"==typeof exports?(o=require("jquery"),d=function(e,n){n.fn.dataTable||require("datatables.net")(e,n)},"undefined"!=typeof window?module.exports=function(e,n){return e=e||window,n=n||o(e),d(e,n),t(n,0,e.document)}:(d(window,o),module.exports=t(o,window,window.document))):t(jQuery,window,document)}(function(e,n,t,o){"use strict";return e.fn.dataTable});

/*! Responsive 2.4.1
 * © SpryMedia Ltd - datatables.net/license
 */
!function(n){var i,r;"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(e){return n(e,window,document)}):"object"==typeof exports?(i=require("jquery"),r=function(e,t){t.fn.dataTable||require("datatables.net")(e,t)},"undefined"!=typeof window?module.exports=function(e,t){return e=e||window,t=t||i(e),r(e,t),n(t,e,e.document)}:(r(window,i),module.exports=n(i,window,window.document))):n(jQuery,window,document)}(function(f,m,o,h){"use strict";function d(e,t){if(!r.versionCheck||!r.versionCheck("1.10.10"))throw"DataTables Responsive requires DataTables 1.10.10 or newer";this.s={childNodeStore:{},columns:[],current:[],dt:new r.Api(e)},this.s.dt.settings()[0].responsive||(t&&"string"==typeof t.details?t.details={type:t.details}:t&&!1===t.details?t.details={type:!1}:t&&!0===t.details&&(t.details={type:"inline"}),this.c=f.extend(!0,{},d.defaults,r.defaults.responsive,t),(e.responsive=this)._constructor())}var r=f.fn.dataTable,e=(f.extend(d.prototype,{_constructor:function(){var s=this,i=this.s.dt,e=i.settings()[0],t=f(m).innerWidth(),e=(i.settings()[0]._responsive=this,f(m).on("resize.dtr orientationchange.dtr",r.util.throttle(function(){var e=f(m).innerWidth();e!==t&&(s._resize(),t=e)})),e.oApi._fnCallbackReg(e,"aoRowCreatedCallback",function(e,t,n){-1!==f.inArray(!1,s.s.current)&&f(">td, >th",e).each(function(e){e=i.column.index("toData",e);!1===s.s.current[e]&&f(this).css("display","none")})}),i.on("destroy.dtr",function(){i.off(".dtr"),f(i.table().body()).off(".dtr"),f(m).off("resize.dtr orientationchange.dtr"),i.cells(".dtr-control").nodes().to$().removeClass("dtr-control"),f.each(s.s.current,function(e,t){!1===t&&s._setColumnVis(e,!0)})}),this.c.breakpoints.sort(function(e,t){return e.width<t.width?1:e.width>t.width?-1:0}),this._classLogic(),this._resizeAuto(),this.c.details);!1!==e.type&&(s._detailsInit(),i.on("column-visibility.dtr",function(){s._timer&&clearTimeout(s._timer),s._timer=setTimeout(function(){s._timer=null,s._classLogic(),s._resizeAuto(),s._resize(!0),s._redrawChildren()},100)}),i.on("draw.dtr",function(){s._redrawChildren()}),f(i.table().node()).addClass("dtr-"+e.type)),i.on("column-reorder.dtr",function(e,t,n){s._classLogic(),s._resizeAuto(),s._resize(!0)}),i.on("column-sizing.dtr",function(){s._resizeAuto(),s._resize()}),i.on("column-calc.dt",function(e,t){for(var n=s.s.current,i=0;i<n.length;i++){var r=t.visible.indexOf(i);!1===n[i]&&0<=r&&t.visible.splice(r,1)}}),i.on("preXhr.dtr",function(){var e=[];i.rows().every(function(){this.child.isShown()&&e.push(this.id(!0))}),i.one("draw.dtr",function(){s._resizeAuto(),s._resize(),i.rows(e).every(function(){s._detailsDisplay(this,!1)})})}),i.on("draw.dtr",function(){s._controlClass()}).on("init.dtr",function(e,t,n){"dt"===e.namespace&&(s._resizeAuto(),s._resize(),f.inArray(!1,s.s.current))&&i.columns.adjust()}),this._resize()},_childNodes:function(e,t,n){var i=t+"-"+n;if(this.s.childNodeStore[i])return this.s.childNodeStore[i];for(var r=[],s=e.cell(t,n).node().childNodes,o=0,d=s.length;o<d;o++)r.push(s[o]);return this.s.childNodeStore[i]=r},_childNodesRestore:function(e,t,n){var i=t+"-"+n;if(this.s.childNodeStore[i]){for(var r=e.cell(t,n).node(),s=this.s.childNodeStore[i][0].parentNode.childNodes,o=[],d=0,a=s.length;d<a;d++)o.push(s[d]);for(var l=0,c=o.length;l<c;l++)r.appendChild(o[l]);this.s.childNodeStore[i]=h}},_columnsVisiblity:function(n){for(var i=this.s.dt,e=this.s.columns,t=e.map(function(e,t){return{columnIdx:t,priority:e.priority}}).sort(function(e,t){return e.priority!==t.priority?e.priority-t.priority:e.columnIdx-t.columnIdx}),r=f.map(e,function(e,t){return!1===i.column(t).visible()?"not-visible":(!e.auto||null!==e.minWidth)&&(!0===e.auto?"-":-1!==f.inArray(n,e.includeIn))}),s=0,o=0,d=r.length;o<d;o++)!0===r[o]&&(s+=e[o].minWidth);var a=i.settings()[0].oScroll,a=a.sY||a.sX?a.iBarWidth:0,l=i.table().container().offsetWidth-a-s;for(o=0,d=r.length;o<d;o++)e[o].control&&(l-=e[o].minWidth);var c=!1;for(o=0,d=t.length;o<d;o++){var u=t[o].columnIdx;"-"===r[u]&&!e[u].control&&e[u].minWidth&&(c||l-e[u].minWidth<0?r[u]=!(c=!0):r[u]=!0,l-=e[u].minWidth)}var h=!1;for(o=0,d=e.length;o<d;o++)if(!e[o].control&&!e[o].never&&!1===r[o]){h=!0;break}for(o=0,d=e.length;o<d;o++)e[o].control&&(r[o]=h),"not-visible"===r[o]&&(r[o]=!1);return-1===f.inArray(!0,r)&&(r[0]=!0),r},_classLogic:function(){function d(e,t,n,i){var r,s,o;if(n){if("max-"===n)for(r=a._find(t).width,s=0,o=l.length;s<o;s++)l[s].width<=r&&u(e,l[s].name);else if("min-"===n)for(r=a._find(t).width,s=0,o=l.length;s<o;s++)l[s].width>=r&&u(e,l[s].name);else if("not-"===n)for(s=0,o=l.length;s<o;s++)-1===l[s].name.indexOf(i)&&u(e,l[s].name)}else c[e].includeIn.push(t)}var a=this,l=this.c.breakpoints,i=this.s.dt,c=i.columns().eq(0).map(function(e){var t=this.column(e),n=t.header().className,e=i.settings()[0].aoColumns[e].responsivePriority,t=t.header().getAttribute("data-priority");return e===h&&(e=t===h||null===t?1e4:+t),{className:n,includeIn:[],auto:!1,control:!1,never:!!n.match(/\b(dtr\-)?never\b/),priority:e}}),u=function(e,t){e=c[e].includeIn;-1===f.inArray(t,e)&&e.push(t)};c.each(function(e,r){for(var t=e.className.split(" "),s=!1,n=0,i=t.length;n<i;n++){var o=t[n].trim();if("all"===o||"dtr-all"===o)return s=!0,void(e.includeIn=f.map(l,function(e){return e.name}));if("none"===o||"dtr-none"===o||e.never)return void(s=!0);if("control"===o||"dtr-control"===o)return s=!0,void(e.control=!0);f.each(l,function(e,t){var n=t.name.split("-"),i=new RegExp("(min\\-|max\\-|not\\-)?("+n[0]+")(\\-[_a-zA-Z0-9])?"),i=o.match(i);i&&(s=!0,i[2]===n[0]&&i[3]==="-"+n[1]?d(r,t.name,i[1],i[2]+i[3]):i[2]!==n[0]||i[3]||d(r,t.name,i[1],i[2]))})}s||(e.auto=!0)}),this.s.columns=c},_controlClass:function(){var e,t,n;"inline"===this.c.details.type&&(e=this.s.dt,t=this.s.current,n=f.inArray(!0,t),e.cells(null,function(e){return e!==n},{page:"current"}).nodes().to$().filter(".dtr-control").removeClass("dtr-control"),e.cells(null,n,{page:"current"}).nodes().to$().addClass("dtr-control"))},_detailsDisplay:function(e,t){var n,i=this,r=this.s.dt,s=this.c.details;s&&!1!==s.type&&(n="string"==typeof s.renderer?d.renderer[s.renderer]():s.renderer,!0!==(s=s.display(e,t,function(){return n.call(i,r,e[0],i._detailsObj(e[0]))}))&&!1!==s||f(r.table().node()).triggerHandler("responsive-display.dt",[r,e,s,t]))},_detailsInit:function(){var n=this,i=this.s.dt,e=this.c.details,r=("inline"===e.type&&(e.target="td.dtr-control, th.dtr-control"),i.on("draw.dtr",function(){n._tabIndexes()}),n._tabIndexes(),f(i.table().body()).on("keyup.dtr","td, th",function(e){13===e.keyCode&&f(this).data("dtr-keyboard")&&f(this).click()}),e.target),e="string"==typeof r?r:"td, th";r===h&&null===r||f(i.table().body()).on("click.dtr mousedown.dtr mouseup.dtr",e,function(e){if(f(i.table().node()).hasClass("collapsed")&&-1!==f.inArray(f(this).closest("tr").get(0),i.rows().nodes().toArray())){if("number"==typeof r){var t=r<0?i.columns().eq(0).length+r:r;if(i.cell(this).index().column!==t)return}t=i.row(f(this).closest("tr"));"click"===e.type?n._detailsDisplay(t,!1):"mousedown"===e.type?f(this).css("outline","none"):"mouseup"===e.type&&f(this).trigger("blur").css("outline","")}})},_detailsObj:function(n){var i=this,r=this.s.dt;return f.map(this.s.columns,function(e,t){if(!e.never&&!e.control)return{className:(e=r.settings()[0].aoColumns[t]).sClass,columnIndex:t,data:r.cell(n,t).render(i.c.orthogonal),hidden:r.column(t).visible()&&!i.s.current[t],rowIndex:n,title:null!==e.sTitle?e.sTitle:f(r.column(t).header()).text()}})},_find:function(e){for(var t=this.c.breakpoints,n=0,i=t.length;n<i;n++)if(t[n].name===e)return t[n]},_redrawChildren:function(){var n=this,i=this.s.dt;i.rows({page:"current"}).iterator("row",function(e,t){i.row(t);n._detailsDisplay(i.row(t),!0)})},_resize:function(n){for(var e,i=this,t=this.s.dt,r=f(m).innerWidth(),s=this.c.breakpoints,o=s[0].name,d=this.s.columns,a=this.s.current.slice(),l=s.length-1;0<=l;l--)if(r<=s[l].width){o=s[l].name;break}var c=this._columnsVisiblity(o),u=(this.s.current=c,!1);for(l=0,e=d.length;l<e;l++)if(!1===c[l]&&!d[l].never&&!d[l].control&&!1==!t.column(l).visible()){u=!0;break}f(t.table().node()).toggleClass("collapsed",u);var h=!1,p=0;t.columns().eq(0).each(function(e,t){!0===c[t]&&p++,!n&&c[t]===a[t]||(h=!0,i._setColumnVis(e,c[t]))}),this._redrawChildren(),h&&(f(t.table().node()).trigger("responsive-resize.dt",[t,this.s.current]),0===t.page.info().recordsDisplay)&&f("td",t.table().body()).eq(0).attr("colspan",p),i._controlClass()},_resizeAuto:function(){var e,t,n,i,r,s=this.s.dt,o=this.s.columns,d=this;this.c.auto&&-1!==f.inArray(!0,f.map(o,function(e){return e.auto}))&&(f.isEmptyObject(this.s.childNodeStore)||f.each(this.s.childNodeStore,function(e){e=e.split("-");d._childNodesRestore(s,+e[0],+e[1])}),s.table().node().offsetWidth,s.columns,e=s.table().node().cloneNode(!1),t=f(s.table().header().cloneNode(!1)).appendTo(e),i=f(s.table().body()).clone(!1,!1).empty().appendTo(e),e.style.width="auto",n=s.columns().header().filter(function(e){return s.column(e).visible()}).to$().clone(!1).css("display","table-cell").css("width","auto").css("min-width",0),f(i).append(f(s.rows({page:"current"}).nodes()).clone(!1)).find("th, td").css("display",""),(i=s.table().footer())&&(i=f(i.cloneNode(!1)).appendTo(e),r=s.columns().footer().filter(function(e){return s.column(e).visible()}).to$().clone(!1).css("display","table-cell"),f("<tr/>").append(r).appendTo(i)),f("<tr/>").append(n).appendTo(t),"inline"===this.c.details.type&&f(e).addClass("dtr-inline collapsed"),f(e).find("[name]").removeAttr("name"),f(e).css("position","relative"),(r=f("<div/>").css({width:1,height:1,overflow:"hidden",clear:"both"}).append(e)).insertBefore(s.table().node()),n.each(function(e){e=s.column.index("fromVisible",e);o[e].minWidth=this.offsetWidth||0}),r.remove())},_responsiveOnlyHidden:function(){var n=this.s.dt;return f.map(this.s.current,function(e,t){return!1===n.column(t).visible()||e})},_setColumnVis:function(e,t){var n=this,i=this.s.dt,r=t?"":"none";f(i.column(e).header()).css("display",r).toggleClass("dtr-hidden",!t),f(i.column(e).footer()).css("display",r).toggleClass("dtr-hidden",!t),i.column(e).nodes().to$().css("display",r).toggleClass("dtr-hidden",!t),f.isEmptyObject(this.s.childNodeStore)||i.cells(null,e).indexes().each(function(e){n._childNodesRestore(i,e.row,e.column)})},_tabIndexes:function(){var e=this.s.dt,t=e.cells({page:"current"}).nodes().to$(),n=e.settings()[0],i=this.c.details.target;t.filter("[data-dtr-keyboard]").removeData("[data-dtr-keyboard]"),("number"==typeof i?e.cells(null,i,{page:"current"}).nodes().to$():f(i="td:first-child, th:first-child"===i?">td:first-child, >th:first-child":i,e.rows({page:"current"}).nodes())).attr("tabIndex",n.iTabIndex).data("dtr-keyboard",1)}}),d.defaults={breakpoints:d.breakpoints=[{name:"desktop",width:1/0},{name:"tablet-l",width:1024},{name:"tablet-p",width:768},{name:"mobile-l",width:480},{name:"mobile-p",width:320}],auto:!0,details:{display:(d.display={childRow:function(e,t,n){return t?f(e.node()).hasClass("parent")?(e.child(n(),"child").show(),!0):void 0:e.child.isShown()?(e.child(!1),f(e.node()).removeClass("parent"),!1):(e.child(n(),"child").show(),f(e.node()).addClass("parent"),!0)},childRowImmediate:function(e,t,n){return!t&&e.child.isShown()||!e.responsive.hasHidden()?(e.child(!1),f(e.node()).removeClass("parent"),!1):(e.child(n(),"child").show(),f(e.node()).addClass("parent"),!0)},modal:function(s){return function(e,t,n){var i,r;t?f("div.dtr-modal-content").empty().append(n()):(i=function(){r.remove(),f(o).off("keypress.dtr")},r=f('<div class="dtr-modal"/>').append(f('<div class="dtr-modal-display"/>').append(f('<div class="dtr-modal-content"/>').append(n())).append(f('<div class="dtr-modal-close">&times;</div>').click(function(){i()}))).append(f('<div class="dtr-modal-background"/>').click(function(){i()})).appendTo("body"),f(o).on("keyup.dtr",function(e){27===e.keyCode&&(e.stopPropagation(),i())})),s&&s.header&&f("div.dtr-modal-content").prepend("<h2>"+s.header(e)+"</h2>")}}}).childRow,renderer:(d.renderer={listHiddenNodes:function(){return function(i,e,t){var r=this,s=f('<ul data-dtr-index="'+e+'" class="dtr-details"/>'),o=!1;f.each(t,function(e,t){var n;t.hidden&&(n=t.className?'class="'+t.className+'"':"",f("<li "+n+' data-dtr-index="'+t.columnIndex+'" data-dt-row="'+t.rowIndex+'" data-dt-column="'+t.columnIndex+'"><span class="dtr-title">'+t.title+"</span> </li>").append(f('<span class="dtr-data"/>').append(r._childNodes(i,t.rowIndex,t.columnIndex))).appendTo(s),o=!0)});return!!o&&s}},listHidden:function(){return function(e,t,n){n=f.map(n,function(e){var t=e.className?'class="'+e.className+'"':"";return e.hidden?"<li "+t+' data-dtr-index="'+e.columnIndex+'" data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><span class="dtr-title">'+e.title+'</span> <span class="dtr-data">'+e.data+"</span></li>":""}).join("");return!!n&&f('<ul data-dtr-index="'+t+'" class="dtr-details"/>').append(n)}},tableAll:function(i){return i=f.extend({tableClass:""},i),function(e,t,n){n=f.map(n,function(e){return"<tr "+(e.className?'class="'+e.className+'"':"")+' data-dt-row="'+e.rowIndex+'" data-dt-column="'+e.columnIndex+'"><td>'+e.title+":</td> <td>"+e.data+"</td></tr>"}).join("");return f('<table class="'+i.tableClass+' dtr-details" width="100%"/>').append(n)}}}).listHidden(),target:0,type:"inline"},orthogonal:"display"},f.fn.dataTable.Api);return e.register("responsive()",function(){return this}),e.register("responsive.index()",function(e){return{column:(e=f(e)).data("dtr-index"),row:e.parent().data("dtr-index")}}),e.register("responsive.rebuild()",function(){return this.iterator("table",function(e){e._responsive&&e._responsive._classLogic()})}),e.register("responsive.recalc()",function(){return this.iterator("table",function(e){e._responsive&&(e._responsive._resizeAuto(),e._responsive._resize())})}),e.register("responsive.hasHidden()",function(){var e=this.context[0];return!!e._responsive&&-1!==f.inArray(!1,e._responsive._responsiveOnlyHidden())}),e.registerPlural("columns().responsiveHidden()","column().responsiveHidden()",function(){return this.iterator("column",function(e,t){return!!e._responsive&&e._responsive._responsiveOnlyHidden()[t]},1)}),d.version="2.4.1",f.fn.dataTable.Responsive=d,f.fn.DataTable.Responsive=d,f(o).on("preInit.dt.dtr",function(e,t,n){"dt"===e.namespace&&(f(t.nTable).hasClass("responsive")||f(t.nTable).hasClass("dt-responsive")||t.oInit.responsive||r.defaults.responsive)&&!1!==(e=t.oInit.responsive)&&new d(t,f.isPlainObject(e)?e:{})}),r});

/*! DataTables styling wrapper for Responsive
 * © SpryMedia Ltd - datatables.net/license
 */

(function( factory ){
	if ( typeof define === 'function' && define.amd ) {
		// AMD
		define( ['jquery', 'datatables.net-dt', 'datatables.net-responsive'], function ( $ ) {
			return factory( $, window, document );
		} );
	}
	else if ( typeof exports === 'object' ) {
		// CommonJS
		var jq = require('jquery');
		var cjsRequires = function (root, $) {
			if ( ! $.fn.dataTable ) {
				require('datatables.net-dt')(root, $);
			}

			if ( ! $.fn.dataTable.Responsive ) {
				require('datatables.net-responsive')(root, $);
			}
		};

		if (typeof window !== 'undefined') {
			module.exports = function (root, $) {
				if ( ! root ) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}

				if ( ! $ ) {
					$ = jq( root );
				}

				cjsRequires( root, $ );
				return factory( $, root, root.document );
			};
		}
		else {
			cjsRequires( window, jq );
			module.exports = factory( jq, window, window.document );
		}
	}
	else {
		// Browser
		factory( jQuery, window, document );
	}
}(function( $, window, document, undefined ) {
'use strict';
var DataTable = $.fn.dataTable;




return DataTable;
}));


/*! RowGroup 1.3.1
 * © SpryMedia Ltd - datatables.net/license
 */
!function(e){var n,o;"function"==typeof define&&define.amd?define(["jquery","datatables.net"],function(t){return e(t,window,document)}):"object"==typeof exports?(n=require("jquery"),o=function(t,r){r.fn.dataTable||require("datatables.net")(t,r)},"undefined"!=typeof window?module.exports=function(t,r){return t=t||window,r=r||n(t),o(t,r),e(r,0,t.document)}:(o(window,n),module.exports=e(n,window,window.document))):e(jQuery,window,document)}(function(a,t,r,l){"use strict";function s(t,r){if(!p.versionCheck||!p.versionCheck("1.10.8"))throw"RowGroup requires DataTables 1.10.8 or newer";if(this.c=a.extend(!0,{},p.defaults.rowGroup,s.defaults,r),this.s={dt:new p.Api(t)},this.dom={},r=this.s.dt.settings()[0],t=r.rowGroup)return t;(r.rowGroup=this)._constructor()}var p=a.fn.dataTable;return a.extend(s.prototype,{dataSrc:function(t){var r;return t===l?this.c.dataSrc:(r=this.s.dt,this.c.dataSrc=t,a(r.table().node()).triggerHandler("rowgroup-datasrc.dt",[r,t]),this)},disable:function(){return this.c.enable=!1,this},enable:function(t){return!1===t?this.disable():(this.c.enable=!0,this)},enabled:function(){return this.c.enable},_constructor:function(){var e=this,t=this.s.dt,n=t.settings()[0];t.on("draw.dtrg",function(t,r){e.c.enable&&n===r&&e._draw()}),t.on("column-visibility.dt.dtrg responsive-resize.dt.dtrg",function(){e._adjustColspan()}),t.on("destroy",function(){t.off(".dtrg")})},_adjustColspan:function(){a("tr."+this.c.className,this.s.dt.table().body()).find("td:visible").attr("colspan",this._colspan())},_colspan:function(){return this.s.dt.columns().visible().reduce(function(t,r){return t+r},0)},_draw:function(){var t=this.s.dt,t=this._group(0,t.rows({page:"current"}).indexes());this._groupDisplay(0,t)},_group:function(t,r){for(var e,n=Array.isArray(this.c.dataSrc)?this.c.dataSrc:[this.c.dataSrc],o=p.ext.oApi._fnGetObjectDataFn(n[t]),a=this.s.dt,s=[],i=0,u=r.length;i<u;i++){var d,c=r[i];null!==(d=o(a.row(c).data()))&&d!==l||(d=this.c.emptyDataGroup),e!==l&&d===e||(s.push({dataPoint:d,rows:[]}),e=d),s[s.length-1].rows.push(c)}if(n[t+1]!==l)for(i=0,u=s.length;i<u;i++)s[i].children=this._group(t+1,s[i].rows);return s},_groupDisplay:function(t,r){for(var e,n=this.s.dt,o=0,a=r.length;o<a;o++){var s,i=r[o],u=i.dataPoint,d=i.rows;this.c.startRender&&(e=this.c.startRender.call(this,n.rows(d),u,t),s=this._rowWrap(e,this.c.startClassName,t))&&s.insertBefore(n.row(d[0]).node()),this.c.endRender&&(e=this.c.endRender.call(this,n.rows(d),u,t),s=this._rowWrap(e,this.c.endClassName,t))&&s.insertAfter(n.row(d[d.length-1]).node()),i.children&&this._groupDisplay(t+1,i.children)}},_rowWrap:function(t,r,e){return(t=null!==t&&""!==t?t:this.c.emptyDataGroup)===l||null===t?null:("object"==typeof t&&t.nodeName&&"tr"===t.nodeName.toLowerCase()?a(t):t instanceof a&&t.length&&"tr"===t[0].nodeName.toLowerCase()?t:a("<tr/>").append(a("<th/>").attr("colspan",this._colspan()).attr("scope","row").append(t))).addClass(this.c.className).addClass(r).addClass("dtrg-level-"+e)}}),s.defaults={className:"dtrg-group",dataSrc:0,emptyDataGroup:"No group",enable:!0,endClassName:"dtrg-end",endRender:null,startClassName:"dtrg-start",startRender:function(t,r){return r}},s.version="1.3.1",a.fn.dataTable.RowGroup=s,a.fn.DataTable.RowGroup=s,p.Api.register("rowGroup()",function(){return this}),p.Api.register("rowGroup().disable()",function(){return this.iterator("table",function(t){t.rowGroup&&t.rowGroup.enable(!1)})}),p.Api.register("rowGroup().enable()",function(r){return this.iterator("table",function(t){t.rowGroup&&t.rowGroup.enable(r===l||r)})}),p.Api.register("rowGroup().enabled()",function(){var t=this.context;return!(!t.length||!t[0].rowGroup)&&t[0].rowGroup.enabled()}),p.Api.register("rowGroup().dataSrc()",function(r){return r===l?this.context[0].rowGroup.dataSrc():this.iterator("table",function(t){t.rowGroup&&t.rowGroup.dataSrc(r)})}),a(r).on("preInit.dt.dtrg",function(t,r,e){var n,o;"dt"===t.namespace&&(t=r.oInit.rowGroup,n=p.defaults.rowGroup,t||n)&&(o=a.extend({},n,t),!1!==t)&&new s(r,o)}),p});



		/*!
 * pickadate.js v3.6.3, 2019/04/03
 * By Amsul, http://amsul.ca
 * Hosted on http://amsul.github.io/pickadate.js
 * Licensed under MIT
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( 'picker', ['jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('jquery') )

    // Browser globals.
    else if ( typeof window == 'object' )
        window.Picker = factory( jQuery )
    
    else this.Picker = factory( jQuery )

}(function( $ ) {

var $window = $( window )
var $document = $( document )
var $html = $( document.documentElement )
var supportsTransitions = document.documentElement.style.transition != null


/**
 * The picker constructor that creates a blank picker.
 */
function PickerConstructor( ELEMENT, NAME, COMPONENT, OPTIONS ) {

    // If there’s no element, return the picker constructor.
    if ( !ELEMENT ) return PickerConstructor


    var
        IS_DEFAULT_THEME = false,


        // The state of the picker.
        STATE = {
            id: ELEMENT.id || 'P' + Math.abs( ~~(Math.random() * new Date()) ),
            handlingOpen: false,
        },


        // Merge the defaults and options passed.
        SETTINGS = COMPONENT ? $.extend( true, {}, COMPONENT.defaults, OPTIONS ) : OPTIONS || {},


        // Merge the default classes with the settings classes.
        CLASSES = $.extend( {}, PickerConstructor.klasses(), SETTINGS.klass ),


        // The element node wrapper into a jQuery object.
        $ELEMENT = $( ELEMENT ),


        // Pseudo picker constructor.
        PickerInstance = function() {
            return this.start()
        },


        // The picker prototype.
        P = PickerInstance.prototype = {

            constructor: PickerInstance,

            $node: $ELEMENT,


            /**
             * Initialize everything
             */
            start: function() {

                // If it’s already started, do nothing.
                if ( STATE && STATE.start ) return P


                // Update the picker states.
                STATE.methods = {}
                STATE.start = true
                STATE.open = false
                STATE.type = ELEMENT.type


                // Confirm focus state, convert into text input to remove UA stylings,
                // and set as readonly to prevent keyboard popup.
                ELEMENT.autofocus = ELEMENT == getActiveElement()
                ELEMENT.readOnly = !SETTINGS.editable
                ELEMENT.id = ELEMENT.id || STATE.id
                if ( ELEMENT.type != 'text' ) {
                    ELEMENT.type = 'text'
                }


                // Create a new picker component with the settings.
                P.component = new COMPONENT(P, SETTINGS)


                // Create the picker root and then prepare it.
                P.$root = $( '<div class="' + CLASSES.picker + '" id="' + ELEMENT.id + '_root" />' )
                prepareElementRoot()


                // Create the picker holder and then prepare it.
                P.$holder = $( createWrappedComponent() ).appendTo( P.$root )
                prepareElementHolder()


                // If there’s a format for the hidden input element, create the element.
                if ( SETTINGS.formatSubmit ) {
                    prepareElementHidden()
                }


                // Prepare the input element.
                prepareElement()


                // Insert the hidden input as specified in the settings.
                if ( SETTINGS.containerHidden ) $( SETTINGS.containerHidden ).append( P._hidden )
                else $ELEMENT.after( P._hidden )


                // Insert the root as specified in the settings.
                if ( SETTINGS.container ) $( SETTINGS.container ).append( P.$root )
                else $ELEMENT.after( P.$root )


                // Bind the default component and settings events.
                P.on({
                    start: P.component.onStart,
                    render: P.component.onRender,
                    stop: P.component.onStop,
                    open: P.component.onOpen,
                    close: P.component.onClose,
                    set: P.component.onSet
                }).on({
                    start: SETTINGS.onStart,
                    render: SETTINGS.onRender,
                    stop: SETTINGS.onStop,
                    open: SETTINGS.onOpen,
                    close: SETTINGS.onClose,
                    set: SETTINGS.onSet
                })


                // Once we’re all set, check the theme in use.
                IS_DEFAULT_THEME = isUsingDefaultTheme( P.$holder[0] )


                // If the element has autofocus, open the picker.
                if ( ELEMENT.autofocus ) {
                    P.open()
                }


                // Trigger queued the “start” and “render” events.
                return P.trigger( 'start' ).trigger( 'render' )
            }, //start


            /**
             * Render a new picker
             */
            render: function( entireComponent ) {

                // Insert a new component holder in the root or box.
                if ( entireComponent ) {
                    P.$holder = $( createWrappedComponent() )
                    prepareElementHolder()
                    P.$root.html( P.$holder )
                }
                else P.$root.find( '.' + CLASSES.box ).html( P.component.nodes( STATE.open ) )

                // Trigger the queued “render” events.
                return P.trigger( 'render' )
            }, //render


            /**
             * Destroy everything
             */
            stop: function() {

                // If it’s already stopped, do nothing.
                if ( !STATE.start ) return P

                // Then close the picker.
                P.close()

                // Remove the hidden field.
                if ( P._hidden ) {
                    P._hidden.parentNode.removeChild( P._hidden )
                }

                // Remove the root.
                P.$root.remove()

                // Remove the input class, remove the stored data, and unbind
                // the events (after a tick for IE - see `P.close`).
                $ELEMENT.removeClass( CLASSES.input ).removeData( NAME )
                setTimeout( function() {
                    $ELEMENT.off( '.' + STATE.id )
                }, 0)

                // Restore the element state
                ELEMENT.type = STATE.type
                ELEMENT.readOnly = false

                // Trigger the queued “stop” events.
                P.trigger( 'stop' )

                // Reset the picker states.
                STATE.methods = {}
                STATE.start = false

                return P
            }, //stop


            /**
             * Open up the picker
             */
            open: function( dontGiveFocus ) {

                // If it’s already open, do nothing.
                if ( STATE.open ) return P

                // Add the “active” class.
                $ELEMENT.addClass( CLASSES.active )
                aria( ELEMENT, 'expanded', true )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So add the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Add the “opened” class to the picker root.
                    P.$root.addClass( CLASSES.opened )
                    aria( P.$root[0], 'hidden', false )

                }, 0 )

                // If we have to give focus, bind the element and doc events.
                if ( dontGiveFocus !== false ) {

                    // Set it as open.
                    STATE.open = true

                    // Prevent the page from scrolling.
                    if ( IS_DEFAULT_THEME ) {
                        $('body').
                            css( 'overflow', 'hidden' ).
                            css( 'padding-right', '+=' + getScrollbarWidth() )
                    }

                    // Pass focus to the root element’s jQuery object.
                    focusPickerOnceOpened()

                    // Bind the document events.
                    $document.on( 'click.' + STATE.id + ' focusin.' + STATE.id, function( event ) {
                        // If the picker is currently midway through processing
                        // the opening sequence of events then don't handle clicks
                        // on any part of the DOM. This is caused by a bug in Chrome 73
                        // where a click event is being generated with the incorrect
                        // path in it.
                        // In short, if someone does a click that finishes after the
                        // new element is created then the path contains only the
                        // parent element and not the input element itself.
                        if (STATE.handlingOpen) {
                          return;
                        }

                        var target = getRealEventTarget( event, ELEMENT )

                        // If the target of the event is not the element, close the picker picker.
                        // * Don’t worry about clicks or focusins on the root because those don’t bubble up.
                        //   Also, for Firefox, a click on an `option` element bubbles up directly
                        //   to the doc. So make sure the target wasn't the doc.
                        // * In Firefox stopPropagation() doesn’t prevent right-click events from bubbling,
                        //   which causes the picker to unexpectedly close when right-clicking it. So make
                        //   sure the event wasn’t a right-click.
                        // * In Chrome 62 and up, password autofill causes a simulated focusin event which
                        //   closes the picker.
                        if ( ! event.isSimulated && target != ELEMENT && target != document && event.which != 3 ) {

                            // If the target was the holder that covers the screen,
                            // keep the element focused to maintain tabindex.
                            P.close( target === P.$holder[0] )
                        }

                    }).on( 'keydown.' + STATE.id, function( event ) {

                        var
                            // Get the keycode.
                            keycode = event.keyCode,

                            // Translate that to a selection change.
                            keycodeToMove = P.component.key[ keycode ],

                            // Grab the target.
                            target = getRealEventTarget( event, ELEMENT )


                        // On escape, close the picker and give focus.
                        if ( keycode == 27 ) {
                            P.close( true )
                        }


                        // Check if there is a key movement or “enter” keypress on the element.
                        else if ( target == P.$holder[0] && ( keycodeToMove || keycode == 13 ) ) {

                            // Prevent the default action to stop page movement.
                            event.preventDefault()

                            // Trigger the key movement action.
                            if ( keycodeToMove ) {
                                PickerConstructor._.trigger( P.component.key.go, P, [ PickerConstructor._.trigger( keycodeToMove ) ] )
                            }

                            // On “enter”, if the highlighted item isn’t disabled, set the value and close.
                            else if ( !P.$root.find( '.' + CLASSES.highlighted ).hasClass( CLASSES.disabled ) ) {
                                P.set( 'select', P.component.item.highlight )
                                if ( SETTINGS.closeOnSelect ) {
                                    P.close( true )
                                }
                            }
                        }


                        // If the target is within the root and “enter” is pressed,
                        // prevent the default action and trigger a click on the target instead.
                        else if ( $.contains( P.$root[0], target ) && keycode == 13 ) {
                            event.preventDefault()
                            target.click()
                        }
                    })
                }

                // Trigger the queued “open” events.
                return P.trigger( 'open' )
            }, //open


            /**
             * Close the picker
             */
            close: function( giveFocus ) {

                // If we need to give focus, do it before changing states.
                if ( giveFocus ) {
                    if ( SETTINGS.editable ) {
                        ELEMENT.focus()
                    }
                    else {
                        // ....ah yes! It would’ve been incomplete without a crazy workaround for IE :|
                        // The focus is triggered *after* the close has completed - causing it
                        // to open again. So unbind and rebind the event at the next tick.
                        P.$holder.off( 'focus.toOpen' ).focus()
                        setTimeout( function() {
                            P.$holder.on( 'focus.toOpen', handleFocusToOpenEvent )
                        }, 0 )
                    }
                }

                // Remove the “active” class.
                $ELEMENT.removeClass( CLASSES.active )
                aria( ELEMENT, 'expanded', false )

                // * A Firefox bug, when `html` has `overflow:hidden`, results in
                //   killing transitions :(. So remove the “opened” state on the next tick.
                //   Bug: https://bugzilla.mozilla.org/show_bug.cgi?id=625289
                setTimeout( function() {

                    // Remove the “opened” and “focused” class from the picker root.
                    P.$root.removeClass( CLASSES.opened + ' ' + CLASSES.focused )
                    aria( P.$root[0], 'hidden', true )

                }, 0 )

                // If it’s already closed, do nothing more.
                if ( !STATE.open ) return P

                // Set it as closed.
                STATE.open = false

                // Allow the page to scroll.
                if ( IS_DEFAULT_THEME ) {
                    $('body').
                        css( 'overflow', '' ).
                        css( 'padding-right', '-=' + getScrollbarWidth() )
                }

                // Unbind the document events.
                $document.off( '.' + STATE.id )

                // Trigger the queued “close” events.
                return P.trigger( 'close' )
            }, //close


            /**
             * Clear the values
             */
            clear: function( options ) {
                return P.set( 'clear', null, options )
            }, //clear


            /**
             * Set something
             */
            set: function( thing, value, options ) {

                var thingItem, thingValue,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                // Make sure we have usable options.
                options = thingIsObject && $.isPlainObject( value ) ? value : options || {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = value
                    }

                    // Go through the things of items to set.
                    for ( thingItem in thingObject ) {

                        // Grab the value of the thing.
                        thingValue = thingObject[ thingItem ]

                        // First, if the item exists and there’s a value, set it.
                        if ( thingItem in P.component.item ) {
                            if ( thingValue === undefined ) thingValue = null
                            P.component.set( thingItem, thingValue, options )
                        }

                        // Then, check to update the element value and broadcast a change.
                        if ( ( thingItem == 'select' || thingItem == 'clear' ) && SETTINGS.updateInput ) {
                            $ELEMENT.
                                val( thingItem == 'clear' ? '' : P.get( thingItem, SETTINGS.format ) ).
                                trigger( 'change' )
                        }
                    }

                    // Render a new picker.
                    P.render()
                }

                // When the method isn’t muted, trigger queued “set” events and pass the `thingObject`.
                return options.muted ? P : P.trigger( 'set', thingObject )
            }, //set


            /**
             * Get something
             */
            get: function( thing, format ) {

                // Make sure there’s something to get.
                thing = thing || 'value'

                // If a picker state exists, return that.
                if ( STATE[ thing ] != null ) {
                    return STATE[ thing ]
                }

                // Return the submission value, if that.
                if ( thing == 'valueSubmit' ) {
                    if ( P._hidden ) {
                        return P._hidden.value
                    }
                    thing = 'value'
                }

                // Return the value, if that.
                if ( thing == 'value' ) {
                    return ELEMENT.value
                }

                // Check if a component item exists, return that.
                if ( thing in P.component.item ) {
                    if ( typeof format == 'string' ) {
                        var thingValue = P.component.get( thing )
                        return thingValue ?
                            PickerConstructor._.trigger(
                                P.component.formats.toString,
                                P.component,
                                [ format, thingValue ]
                            ) : ''
                    }
                    return P.component.get( thing )
                }
            }, //get



            /**
             * Bind events on the things.
             */
            on: function( thing, method, internal ) {

                var thingName, thingMethod,
                    thingIsObject = $.isPlainObject( thing ),
                    thingObject = thingIsObject ? thing : {}

                if ( thing ) {

                    // If the thing isn’t an object, make it one.
                    if ( !thingIsObject ) {
                        thingObject[ thing ] = method
                    }

                    // Go through the things to bind to.
                    for ( thingName in thingObject ) {

                        // Grab the method of the thing.
                        thingMethod = thingObject[ thingName ]

                        // If it was an internal binding, prefix it.
                        if ( internal ) {
                            thingName = '_' + thingName
                        }

                        // Make sure the thing methods collection exists.
                        STATE.methods[ thingName ] = STATE.methods[ thingName ] || []

                        // Add the method to the relative method collection.
                        STATE.methods[ thingName ].push( thingMethod )
                    }
                }

                return P
            }, //on



            /**
             * Unbind events on the things.
             */
            off: function() {
                var i, thingName,
                    names = arguments;
                for ( i = 0, namesCount = names.length; i < namesCount; i += 1 ) {
                    thingName = names[i]
                    if ( thingName in STATE.methods ) {
                        delete STATE.methods[thingName]
                    }
                }
                return P
            },


            /**
             * Fire off method events.
             */
            trigger: function( name, data ) {
                var _trigger = function( name ) {
                    var methodList = STATE.methods[ name ]
                    if ( methodList ) {
                        methodList.map( function( method ) {
                            PickerConstructor._.trigger( method, P, [ data ] )
                        })
                    }
                }
                _trigger( '_' + name )
                _trigger( name )
                return P
            } //trigger
        } //PickerInstance.prototype


    /**
     * Wrap the picker holder components together.
     */
    function createWrappedComponent() {

        // Create a picker wrapper holder
        return PickerConstructor._.node( 'div',

            // Create a picker wrapper node
            PickerConstructor._.node( 'div',

                // Create a picker frame
                PickerConstructor._.node( 'div',

                    // Create a picker box node
                    PickerConstructor._.node( 'div',

                        // Create the components nodes.
                        P.component.nodes( STATE.open ),

                        // The picker box class
                        CLASSES.box
                    ),

                    // Picker wrap class
                    CLASSES.wrap
                ),

                // Picker frame class
                CLASSES.frame
            ),

            // Picker holder class
            CLASSES.holder,

            'tabindex="-1"'
        ) //endreturn
    } //createWrappedComponent

    /**
     * Prepare the input element with all bindings.
     */
    function prepareElement() {

        $ELEMENT.

            // Store the picker data by component name.
            data(NAME, P).

            // Add the “input” class name.
            addClass(CLASSES.input).

            // If there’s a `data-value`, update the value of the element.
            val( $ELEMENT.data('value') ?
                P.get('select', SETTINGS.format) :
                ELEMENT.value
            ).

            // On focus/click, open the picker.
            on( 'focus.' + STATE.id + ' click.' + STATE.id,
            debounce(function(event) {
                event.preventDefault()
                P.open()
            }, 100))

            // Mousedown handler to capture when the user starts interacting
            // with the picker. This is used in working around a bug in Chrome 73.
            .on('mousedown', function() {
              STATE.handlingOpen = true;
              var handler = function() {
                // By default mouseup events are fired before a click event.
                // By using a timeout we can force the mouseup to be handled
                // after the corresponding click event is handled.
                setTimeout(function() {
                  $(document).off('mouseup', handler);
                  STATE.handlingOpen = false;
                }, 0);
              };
              $(document).on('mouseup', handler);
            });


        // Only bind keydown events if the element isn’t editable.
        if ( !SETTINGS.editable ) {

            $ELEMENT.

                // Handle keyboard event based on the picker being opened or not.
                on( 'keydown.' + STATE.id, handleKeydownEvent )
        }


        // Update the aria attributes.
        aria(ELEMENT, {
            haspopup: true,
            expanded: false,
            readonly: false,
            owns: ELEMENT.id + '_root'
        })
    }


    /**
     * Prepare the root picker element with all bindings.
     */
    function prepareElementRoot() {
        aria( P.$root[0], 'hidden', true )
    }


     /**
      * Prepare the holder picker element with all bindings.
      */
    function prepareElementHolder() {

        P.$holder.

            on({

                // For iOS8.
                keydown: handleKeydownEvent,

                'focus.toOpen': handleFocusToOpenEvent,

                blur: function() {
                    // Remove the “target” class.
                    $ELEMENT.removeClass( CLASSES.target )
                },

                // When something within the holder is focused, stop from bubbling
                // to the doc and remove the “focused” state from the root.
                focusin: function( event ) {
                    P.$root.removeClass( CLASSES.focused )
                    event.stopPropagation()
                },

                // When something within the holder is clicked, stop it
                // from bubbling to the doc.
                'mousedown click': function( event ) {

                    var target = getRealEventTarget( event, ELEMENT )

                    // Make sure the target isn’t the root holder so it can bubble up.
                    if ( target != P.$holder[0] ) {

                        event.stopPropagation()

                        // * For mousedown events, cancel the default action in order to
                        //   prevent cases where focus is shifted onto external elements
                        //   when using things like jQuery mobile or MagnificPopup (ref: #249 & #120).
                        //   Also, for Firefox, don’t prevent action on the `option` element.
                        if ( event.type == 'mousedown' && !$( target ).is( 'input, select, textarea, button, option' )) {

                            event.preventDefault()

                            // Re-focus onto the holder so that users can click away
                            // from elements focused within the picker.
                            P.$holder.eq(0).focus()
                        }
                    }
                }

            }).

            // If there’s a click on an actionable element, carry out the actions.
            on( 'click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {

                var $target = $( this ),
                    targetData = $target.data(),
                    targetDisabled = $target.hasClass( CLASSES.navDisabled ) || $target.hasClass( CLASSES.disabled ),

                    // * For IE, non-focusable elements can be active elements as well
                    //   (http://stackoverflow.com/a/2684561).
                    activeElement = getActiveElement()
                    activeElement = activeElement && ( (activeElement.type || activeElement.href ) ? activeElement : null);

                // If it’s disabled or nothing inside is actively focused, re-focus the element.
                if ( targetDisabled || activeElement && !$.contains( P.$root[0], activeElement ) ) {
                    P.$holder.eq(0).focus()
                }

                // If something is superficially changed, update the `highlight` based on the `nav`.
                if ( !targetDisabled && targetData.nav ) {
                    P.set( 'highlight', P.component.item.highlight, { nav: targetData.nav } )
                }

                // If something is picked, set `select` then close with focus.
                else if ( !targetDisabled && 'pick' in targetData ) {
                    P.set( 'select', targetData.pick )
                    if ( SETTINGS.closeOnSelect ) {
                        P.close( true )
                    }
                }

                // If a “clear” button is pressed, empty the values and close with focus.
                else if ( targetData.clear ) {
                    P.clear()
                    if ( SETTINGS.closeOnClear ) {
                        P.close( true )
                    }
                }

                else if ( targetData.close ) {
                    P.close( true )
                }

            }) //P.$holder

    }


     /**
      * Prepare the hidden input element along with all bindings.
      */
    function prepareElementHidden() {

        var name

        if ( SETTINGS.hiddenName === true ) {
            name = ELEMENT.name
            ELEMENT.name = ''
        }
        else {
            name = [
                typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '',
                typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'
            ]
            name = name[0] + ELEMENT.name + name[1]
        }

        P._hidden = $(
            '<input ' +
            'type=hidden ' +

            // Create the name using the original input’s with a prefix and suffix.
            'name="' + name + '"' +

            // If the element has a value, set the hidden value as well.
            (
                $ELEMENT.data('value') || ELEMENT.value ?
                    ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' :
                    ''
            ) +
            '>'
        )[0]

        $ELEMENT.

            // If the value changes, update the hidden input with the correct format.
            on('change.' + STATE.id, function() {
                P._hidden.value = ELEMENT.value ?
                    P.get('select', SETTINGS.formatSubmit) :
                    ''
            })
    }


    // Wait for transitions to end before focusing the holder. Otherwise, while
    // using the `container` option, the view jumps to the container.
    function focusPickerOnceOpened() {

        if (IS_DEFAULT_THEME && supportsTransitions) {
            P.$holder.find('.' + CLASSES.frame).one('transitionend', function() {
                P.$holder.eq(0).focus()
            })
        }
        else {
            setTimeout(function() {
                P.$holder.eq(0).focus()
            }, 0)
        }
    }


    function handleFocusToOpenEvent(event) {

        // Stop the event from propagating to the doc.
        event.stopPropagation()

        // Add the “target” class.
        $ELEMENT.addClass( CLASSES.target )

        // Add the “focused” class to the root.
        P.$root.addClass( CLASSES.focused )

        // And then finally open the picker.
        P.open()
    }


    // For iOS8.
    function handleKeydownEvent( event ) {

        var keycode = event.keyCode,

            // Check if one of the delete keys was pressed.
            isKeycodeDelete = /^(8|46)$/.test(keycode)

        // For some reason IE clears the input value on “escape”.
        if ( keycode == 27 ) {
            P.close( true )
            return false
        }

        // Check if `space` or `delete` was pressed or the picker is closed with a key movement.
        if ( keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode] ) {

            // Prevent it from moving the page and bubbling to doc.
            event.preventDefault()
            event.stopPropagation()

            // If `delete` was pressed, clear the values and close the picker.
            // Otherwise open the picker.
            if ( isKeycodeDelete ) { P.clear().close() }
            else { P.open() }
        }
    }


    // Return a new picker instance.
    return new PickerInstance()
} //PickerConstructor



/**
 * The default classes and prefix to use for the HTML classes.
 */
PickerConstructor.klasses = function( prefix ) {
    prefix = prefix || 'picker'
    return {

        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',

        input: prefix + '__input',
        active: prefix + '__input--active',
        target: prefix + '__input--target',

        holder: prefix + '__holder',

        frame: prefix + '__frame',
        wrap: prefix + '__wrap',

        box: prefix + '__box'
    }
} //PickerConstructor.klasses



/**
 * Check if the default theme is being used.
 */
function isUsingDefaultTheme( element ) {

    var theme,
        prop = 'position'

    // For IE.
    if ( element.currentStyle ) {
        theme = element.currentStyle[prop]
    }

    // For normal browsers.
    else if ( window.getComputedStyle ) {
        theme = getComputedStyle( element )[prop]
    }

    return theme == 'fixed'
}



/**
 * Get the width of the browser’s scrollbar.
 * Taken from: https://github.com/VodkaBears/Remodal/blob/master/src/jquery.remodal.js
 */
function getScrollbarWidth() {

    if ( $html.height() <= $window.height() ) {
        return 0
    }

    var $outer = $( '<div style="visibility:hidden;width:100px" />' ).
        appendTo( 'body' )

    // Get the width without scrollbars.
    var widthWithoutScroll = $outer[0].offsetWidth

    // Force adding scrollbars.
    $outer.css( 'overflow', 'scroll' )

    // Add the inner div.
    var $inner = $( '<div style="width:100%" />' ).appendTo( $outer )

    // Get the width with scrollbars.
    var widthWithScroll = $inner[0].offsetWidth

    // Remove the divs.
    $outer.remove()

    // Return the difference between the widths.
    return widthWithoutScroll - widthWithScroll
}



/**
 * Get the target element from the event.
 * If ELEMENT is supplied and present in the event path (ELEMENT is ancestor of the target),
 * returns ELEMENT instead
 */
function getRealEventTarget( event, ELEMENT ) {

    var path = []

    if ( event.path ) {
        path = event.path
    }

    if ( event.originalEvent && event.originalEvent.path ) {
        path = event.originalEvent.path
    }

    if ( path && path.length > 0 ) {
        if ( ELEMENT && path.indexOf( ELEMENT ) >= 0 ) {
            return ELEMENT
        } else {
            return path[0]
        }
    }

    return event.target
}

// taken from https://davidwalsh.name/javascript-debounce-function
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/**
 * PickerConstructor helper methods.
 */
PickerConstructor._ = {

    /**
     * Create a group of nodes. Expects:
     * `
        {
            min:    {Integer},
            max:    {Integer},
            i:      {Integer},
            node:   {String},
            item:   {Function}
        }
     * `
     */
    group: function( groupObject ) {

        var
            // Scope for the looped object
            loopObjectScope,

            // Create the nodes list
            nodesList = '',

            // The counter starts from the `min`
            counter = PickerConstructor._.trigger( groupObject.min, groupObject )


        // Loop from the `min` to `max`, incrementing by `i`
        for ( ; counter <= PickerConstructor._.trigger( groupObject.max, groupObject, [ counter ] ); counter += groupObject.i ) {

            // Trigger the `item` function within scope of the object
            loopObjectScope = PickerConstructor._.trigger( groupObject.item, groupObject, [ counter ] )

            // Splice the subgroup and create nodes out of the sub nodes
            nodesList += PickerConstructor._.node(
                groupObject.node,
                loopObjectScope[ 0 ],   // the node
                loopObjectScope[ 1 ],   // the classes
                loopObjectScope[ 2 ]    // the attributes
            )
        }

        // Return the list of nodes
        return nodesList
    }, //group


    /**
     * Create a dom node string
     */
    node: function( wrapper, item, klass, attribute ) {

        // If the item is false-y, just return an empty string
        if ( !item ) return ''

        // If the item is an array, do a join
        item = $.isArray( item ) ? item.join( '' ) : item

        // Check for the class
        klass = klass ? ' class="' + klass + '"' : ''

        // Check for any attributes
        attribute = attribute ? ' ' + attribute : ''

        // Return the wrapped item
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>'
    }, //node


    /**
     * Lead numbers below 10 with a zero.
     */
    lead: function( number ) {
        return ( number < 10 ? '0': '' ) + number
    },


    /**
     * Trigger a function otherwise return the value.
     */
    trigger: function( callback, scope, args ) {
        return typeof callback == 'function' ? callback.apply( scope, args || [] ) : callback
    },


    /**
     * If the second character is a digit, length is 2 otherwise 1.
     */
    digits: function( string ) {
        return ( /\d/ ).test( string[ 1 ] ) ? 2 : 1
    },


    /**
     * Tell if something is a date object.
     */
    isDate: function( value ) {
        return {}.toString.call( value ).indexOf( 'Date' ) > -1 && this.isInteger( value.getDate() )
    },


    /**
     * Tell if something is an integer.
     */
    isInteger: function( value ) {
        return {}.toString.call( value ).indexOf( 'Number' ) > -1 && value % 1 === 0
    },


    /**
     * Create ARIA attribute strings.
     */
    ariaAttr: ariaAttr
} //PickerConstructor._



/**
 * Extend the picker with a component and defaults.
 */
PickerConstructor.extend = function( name, Component ) {

    // Extend jQuery.
    $.fn[ name ] = function( options, action ) {

        // Grab the component data.
        var componentData = this.data( name )

        // If the picker is requested, return the data object.
        if ( options == 'picker' ) {
            return componentData
        }

        // If the component data exists and `options` is a string, carry out the action.
        if ( componentData && typeof options == 'string' ) {
            return PickerConstructor._.trigger( componentData[ options ], componentData, [ action ] )
        }

        // Otherwise go through each matched element and if the component
        // doesn’t exist, create a new picker using `this` element
        // and merging the defaults and options with a deep copy.
        return this.each( function() {
            var $this = $( this )
            if ( !$this.data( name ) ) {
                new PickerConstructor( this, name, Component, options )
            }
        })
    }

    // Set the defaults.
    $.fn[ name ].defaults = Component.defaults
} //PickerConstructor.extend



function aria(element, attribute, value) {
    if ( $.isPlainObject(attribute) ) {
        for ( var key in attribute ) {
            ariaSet(element, key, attribute[key])
        }
    }
    else {
        ariaSet(element, attribute, value)
    }
}
function ariaSet(element, attribute, value) {
    element.setAttribute(
        (attribute == 'role' ? '' : 'aria-') + attribute,
        value
    )
}
function ariaAttr(attribute, data) {
    if ( !$.isPlainObject(attribute) ) {
        attribute = { attribute: data }
    }
    data = ''
    for ( var key in attribute ) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key]
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"'
    }
    return data
}

// IE8 bug throws an error for activeElements within iframes.
function getActiveElement() {
    try {
        return document.activeElement
    } catch ( err ) { }
}



// Expose the picker constructor.
return PickerConstructor


}));

		/*!
 * Date picker for pickadate.js v3.6.3
 * http://amsul.github.io/pickadate.js/date.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['./picker', 'jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var DAYS_IN_WEEK = 7,
    WEEKS_IN_CALENDAR = 6,
    _ = Picker._



/**
 * The date picker constructor
 */
function DatePicker( picker, settings ) {

    var calendar = this,
        element = picker.$node[ 0 ],
        elementValue = element.value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format,
        isRTL = function() {

            return element.currentStyle ?

                // For IE.
                element.currentStyle.direction == 'rtl' :

                // For normal browsers.
                getComputedStyle( picker.$root[0] ).direction == 'rtl'
        }

    calendar.settings = settings
    calendar.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    calendar.item = {}

    calendar.item.clear = null
    calendar.item.disable = ( settings.disable || [] ).slice( 0 )
    calendar.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( calendar.item.disable )

    calendar.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        calendar.set( 'select', valueString, {
            format: formatString,
            defaultValue: true
        })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        calendar.
            set( 'select', null ).
            set( 'highlight', calendar.item.now )
    }


    // The keycode to movement mapping.
    calendar.key = {
        40: 7, // Down
        38: -7, // Up
        39: function() { return isRTL() ? -1 : 1 }, // Right
        37: function() { return isRTL() ? 1 : -1 }, // Left
        go: function( timeChange ) {
            var highlightedObject = calendar.item.highlight,
                targetDate = new Date( highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange )
            calendar.set(
                'highlight',
                targetDate,
                { interval: timeChange }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            picker.$root.find( '.' + settings.klass.selectMonth ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ picker.get( 'view' ).year, value, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectMonth ).trigger( 'focus' )
                }
            })
            picker.$root.find( '.' + settings.klass.selectYear ).on( 'change', function() {
                var value = this.value
                if ( value ) {
                    picker.set( 'highlight', [ value, picker.get( 'view' ).month, picker.get( 'highlight' ).date ] )
                    picker.$root.find( '.' + settings.klass.selectYear ).trigger( 'focus' )
                }
            })
        }, 1 ).
        on( 'open', function() {
            var includeToday = ''
            if ( calendar.disabled( calendar.get('now') ) ) {
                includeToday = ':not(.' + settings.klass.buttonToday + ')'
            }
            picker.$root.find( 'button' + includeToday + ', select' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button, select' ).attr( 'disabled', true )
        }, 1 )

} //DatePicker


/**
 * Set a datepicker item object.
 */
DatePicker.prototype.set = function( type, value, options ) {

    var calendar = this,
        calendarItem = calendar.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        calendarItem[ type ] = value
        return calendar
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    calendarItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = calendar.queue[ type ].split( ' ' ).map( function( method ) {
        value = calendar[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        calendar.set( 'highlight', calendarItem.select, options )
    }
    else if ( type == 'highlight' ) {
        calendar.set( 'view', calendarItem.highlight, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( calendarItem.select && calendar.disabled( calendarItem.select ) ) {
            calendar.set( 'select', calendarItem.select, options )
        }
        if ( calendarItem.highlight && calendar.disabled( calendarItem.highlight ) ) {
            calendar.set( 'highlight', calendarItem.highlight, options )
        }
    }

    return calendar
} //DatePicker.prototype.set


/**
 * Get a datepicker item object.
 */
DatePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //DatePicker.prototype.get


/**
 * Create a picker date object.
 */
DatePicker.prototype.create = function( type, value, options ) {

    var isInfiniteValue,
        calendar = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value


    // If it’s infinity, update the value.
    if ( value == -Infinity || value == Infinity ) {
        isInfiniteValue = value
    }

    // If it’s an object, use the native date object.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.obj
    }

    // If it’s an array, convert it into a date and make sure
    // that it’s a valid date – otherwise default to today.
    else if ( $.isArray( value ) ) {
        value = new Date( value[ 0 ], value[ 1 ], value[ 2 ] )
        value = _.isDate( value ) ? value : calendar.create().obj
    }

    // If it’s a number or date object, make a normalized date.
    else if ( _.isInteger( value ) || _.isDate( value ) ) {
        value = calendar.normalize( new Date( value ), options )
    }

    // If it’s a literal true or any other case, set it to now.
    else /*if ( value === true )*/ {
        value = calendar.now( type, value, options )
    }

    // Return the compiled object.
    return {
        year: isInfiniteValue || value.getFullYear(),
        month: isInfiniteValue || value.getMonth(),
        date: isInfiniteValue || value.getDate(),
        day: isInfiniteValue || value.getDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
    }
} //DatePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
DatePicker.prototype.createRange = function( from, to ) {

    var calendar = this,
        createDate = function( date ) {
            if ( date === true || $.isArray( date ) || _.isDate( date ) ) {
                return calendar.create( date )
            }
            return date
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createDate( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createDate( to )
    }

    // Create relative dates.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.year, to.month, to.date + from ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.year, from.month, from.date + to ];
    }

    return {
        from: createDate( from ),
        to: createDate( to )
    }
} //DatePicker.prototype.createRange


/**
 * Check if a date unit falls within a date range object.
 */
DatePicker.prototype.withinRange = function( range, dateUnit ) {
    range = this.createRange(range.from, range.to)
    return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick
}


/**
 * Check if two date range objects overlap.
 */
DatePicker.prototype.overlapRanges = function( one, two ) {

    var calendar = this

    // Convert the ranges into comparable dates.
    one = calendar.createRange( one.from, one.to )
    two = calendar.createRange( two.from, two.to )

    return calendar.withinRange( one, two.from ) || calendar.withinRange( one, two.to ) ||
        calendar.withinRange( two, one.from ) || calendar.withinRange( two, one.to )
}


/**
 * Get the date today.
 */
DatePicker.prototype.now = function( type, value, options ) {
    value = new Date()
    if ( options && options.rel ) {
        value.setDate( value.getDate() + options.rel )
    }
    return this.normalize( value, options )
}


/**
 * Navigate to next/prev month.
 */
DatePicker.prototype.navigate = function( type, value, options ) {

    var targetDateObject,
        targetYear,
        targetMonth,
        targetDate,
        isTargetArray = $.isArray( value ),
        isTargetObject = $.isPlainObject( value ),
        viewsetObject = this.item.view/*,
        safety = 100*/


    if ( isTargetArray || isTargetObject ) {

        if ( isTargetObject ) {
            targetYear = value.year
            targetMonth = value.month
            targetDate = value.date
        }
        else {
            targetYear = +value[0]
            targetMonth = +value[1]
            targetDate = +value[2]
        }

        // If we’re navigating months but the view is in a different
        // month, navigate to the view’s year and month.
        if ( options && options.nav && viewsetObject && viewsetObject.month !== targetMonth ) {
            targetYear = viewsetObject.year
            targetMonth = viewsetObject.month
        }

        // Figure out the expected target year and month.
        targetDateObject = new Date( targetYear, targetMonth + ( options && options.nav ? options.nav : 0 ), 1 )
        targetYear = targetDateObject.getFullYear()
        targetMonth = targetDateObject.getMonth()

        // If the month we’re going to doesn’t have enough days,
        // keep decreasing the date until we reach the month’s last date.
        while ( /*safety &&*/ new Date( targetYear, targetMonth, targetDate ).getMonth() !== targetMonth ) {
            targetDate -= 1
            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while navigating to ' + new Date( targetYear, targetMonth, targetDate ) + '.'
            }*/
        }

        value = [ targetYear, targetMonth, targetDate ]
    }

    return value
} //DatePicker.prototype.navigate


/**
 * Normalize a date by setting the hours to midnight.
 */
DatePicker.prototype.normalize = function( value/*, options*/ ) {
    value.setHours( 0, 0, 0, 0 )
    return value
}


/**
 * Measure the range of dates.
 */
DatePicker.prototype.measure = function( type, value/*, options*/ ) {

    var calendar = this
    
    // If it's an integer, get a date relative to today.
    if ( _.isInteger( value ) ) {
        value = calendar.now( type, value, { rel: value } )
    }

    // If it’s anything false-y, remove the limits.
    else if ( !value ) {
        value = type == 'min' ? -Infinity : Infinity
    }

    // If it’s a string, parse it.
    else if ( typeof value == 'string' ) {
        value = calendar.parse( type, value )
    }

    return value
} ///DatePicker.prototype.measure


/**
 * Create a viewset object based on navigation.
 */
DatePicker.prototype.viewset = function( type, dateObject/*, options*/ ) {
    return this.create([ dateObject.year, dateObject.month, 1 ])
}


/**
 * Validate a date as enabled and shift if needed.
 */
DatePicker.prototype.validate = function( type, dateObject, options ) {

    var calendar = this,

        // Keep a reference to the original date.
        originalDateObject = dateObject,

        // Make sure we have an interval.
        interval = options && options.interval ? options.interval : 1,

        // Check if the calendar enabled dates are inverted.
        isFlippedBase = calendar.item.enable === -1,

        // Check if we have any enabled dates after/before now.
        hasEnabledBeforeTarget, hasEnabledAfterTarget,

        // The min & max limits.
        minLimitObject = calendar.item.min,
        maxLimitObject = calendar.item.max,

        // Check if we’ve reached the limit during shifting.
        reachedMin, reachedMax,

        // Check if the calendar is inverted and at least one weekday is enabled.
        hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter( function( value ) {

            // If there’s a date, check where it is relative to the target.
            if ( $.isArray( value ) ) {
                var dateTime = calendar.create( value ).pick
                if ( dateTime < dateObject.pick ) hasEnabledBeforeTarget = true
                else if ( dateTime > dateObject.pick ) hasEnabledAfterTarget = true
            }

            // Return only integers for enabled weekdays.
            return _.isInteger( value )
        }).length/*,

        safety = 100*/



    // Cases to validate for:
    // [1] Not inverted and date disabled.
    // [2] Inverted and some dates enabled.
    // [3] Not inverted and out of range.
    //
    // Cases to **not** validate for:
    // • Navigating months.
    // • Not inverted and date enabled.
    // • Inverted and all dates disabled.
    // • ..and anything else.
    if ( !options || (!options.nav && !options.defaultValue) ) if (
        /* 1 */ ( !isFlippedBase && calendar.disabled( dateObject ) ) ||
        /* 2 */ ( isFlippedBase && calendar.disabled( dateObject ) && ( hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget ) ) ||
        /* 3 */ ( !isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick) )
    ) {


        // When inverted, flip the direction if there aren’t any enabled weekdays
        // and there are no enabled dates in the direction of the interval.
        if ( isFlippedBase && !hasEnabledWeekdays && ( ( !hasEnabledAfterTarget && interval > 0 ) || ( !hasEnabledBeforeTarget && interval < 0 ) ) ) {
            interval *= -1
        }


        // Keep looping until we reach an enabled date.
        while ( /*safety &&*/ calendar.disabled( dateObject ) ) {

            /*safety -= 1
            if ( !safety ) {
                throw 'Fell into an infinite loop while validating ' + dateObject.obj + '.'
            }*/


            // If we’ve looped into the next/prev month with a large interval, return to the original date and flatten the interval.
            if ( Math.abs( interval ) > 1 && ( dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month ) ) {
                dateObject = originalDateObject
                interval = interval > 0 ? 1 : -1
            }


            // If we’ve reached the min/max limit, reverse the direction, flatten the interval and set it to the limit.
            if ( dateObject.pick <= minLimitObject.pick ) {
                reachedMin = true
                interval = 1
                dateObject = calendar.create([
                    minLimitObject.year,
                    minLimitObject.month,
                    minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)
                ])
            }
            else if ( dateObject.pick >= maxLimitObject.pick ) {
                reachedMax = true
                interval = -1
                dateObject = calendar.create([
                    maxLimitObject.year,
                    maxLimitObject.month,
                    maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)
                ])
            }


            // If we’ve reached both limits, just break out of the loop.
            if ( reachedMin && reachedMax ) {
                break
            }


            // Finally, create the shifted date using the interval and keep looping.
            dateObject = calendar.create([ dateObject.year, dateObject.month, dateObject.date + interval ])
        }

    } //endif


    // Return the date object settled on.
    return dateObject
} //DatePicker.prototype.validate


/**
 * Check if a date is disabled.
 */
DatePicker.prototype.disabled = function( dateToVerify ) {

    var
        calendar = this,

        // Filter through the disabled dates to check if this is one.
        isDisabledMatch = calendar.item.disable.filter( function( dateToDisable ) {

            // If the date is a number, match the weekday with 0index and `firstDay` check.
            if ( _.isInteger( dateToDisable ) ) {
                return dateToVerify.day === ( calendar.settings.firstDay ? dateToDisable : dateToDisable - 1 ) % 7
            }

            // If it’s an array or a native JS date, create and match the exact date.
            if ( $.isArray( dateToDisable ) || _.isDate( dateToDisable ) ) {
                return dateToVerify.pick === calendar.create( dateToDisable ).pick
            }

            // If it’s an object, match a date within the “from” and “to” range.
            if ( $.isPlainObject( dateToDisable ) ) {
                return calendar.withinRange( dateToDisable, dateToVerify )
            }
        })

    // If this date matches a disabled date, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( dateToDisable ) {
        return $.isArray( dateToDisable ) && dateToDisable[3] == 'inverted' ||
            $.isPlainObject( dateToDisable ) && dateToDisable.inverted
    }).length

    // Check the calendar “enabled” flag and respectively flip the
    // disabled state. Then also check if it’s beyond the min/max limits.
    return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        dateToVerify.pick < calendar.item.min.pick ||
        dateToVerify.pick > calendar.item.max.pick

} //DatePicker.prototype.disabled


/**
 * Parse a string into a usable type.
 */
DatePicker.prototype.parse = function( type, value, options ) {

    var calendar = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = calendar.settings.format
    }

    // Convert the format into an array and then map through it.
    calendar.formats.toArray( options.format ).map( function( label ) {

        var
            // Grab the formatting label.
            formattingLabel = calendar.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ? _.trigger( formattingLabel, calendar, [ value, parsingObject ] ) : label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            parsingObject[ label ] = value.substr( 0, formatLength )
        }

        // Update the value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Compensate for month 0index.
    return [
        parsingObject.yyyy || parsingObject.yy,
        +( parsingObject.mm || parsingObject.m ) - 1,
        parsingObject.dd || parsingObject.d
    ]
} //DatePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
DatePicker.prototype.formats = (function() {

    // Return the length of the first word in a collection.
    function getWordLengthFromCollection( string, collection, dateObject ) {

        // Grab the first word from the string.
        // Regex pattern from http://stackoverflow.com/q/150033
        var word = string.match( /[^\x00-\x7F]+|\w+/ )[ 0 ]

        // If there's no month index, add it to the date object
        if ( !dateObject.mm && !dateObject.m ) {
            dateObject.m = collection.indexOf( word ) + 1
        }

        // Return the length of the word.
        return word.length
    }

    // Get the length of the first word in a string.
    function getFirstWordLength( string ) {
        return string.match( /\w+/ )[ 0 ].length
    }

    return {

        d: function( string, dateObject ) {

            // If there's string, then get the digits length.
            // Otherwise return the selected date.
            return string ? _.digits( string ) : dateObject.date
        },
        dd: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected date with a leading zero.
            return string ? 2 : _.lead( dateObject.date )
        },
        ddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the short selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysShort[ dateObject.day ]
        },
        dddd: function( string, dateObject ) {

            // If there's a string, then get the length of the first word.
            // Otherwise return the full selected weekday.
            return string ? getFirstWordLength( string ) : this.settings.weekdaysFull[ dateObject.day ]
        },
        m: function( string, dateObject ) {

            // If there's a string, then get the length of the digits
            // Otherwise return the selected month with 0index compensation.
            return string ? _.digits( string ) : dateObject.month + 1
        },
        mm: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected month with 0index and leading zero.
            return string ? 2 : _.lead( dateObject.month + 1 )
        },
        mmm: function( string, dateObject ) {

            var collection = this.settings.monthsShort

            // If there's a string, get length of the relevant month from the short
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        mmmm: function( string, dateObject ) {

            var collection = this.settings.monthsFull

            // If there's a string, get length of the relevant month from the full
            // months collection. Otherwise return the selected month from that collection.
            return string ? getWordLengthFromCollection( string, collection, dateObject ) : collection[ dateObject.month ]
        },
        yy: function( string, dateObject ) {

            // If there's a string, then the length is always 2.
            // Otherwise return the selected year by slicing out the first 2 digits.
            return string ? 2 : ( '' + dateObject.year ).slice( 2 )
        },
        yyyy: function( string, dateObject ) {

            // If there's a string, then the length is always 4.
            // Otherwise return the selected year.
            return string ? 4 : dateObject.year
        },

        // Create an array by splitting the formatting string passed.
        toArray: function( formatString ) { return formatString.split( /(d{1,4}|m{1,4}|y{4}|yy|!.)/g ) },

        // Format an object into a string using the formatting options.
        toString: function ( formatString, itemObject ) {
            var calendar = this
            return calendar.formats.toArray( formatString ).map( function( label ) {
                return _.trigger( calendar.formats[ label ], calendar, [ 0, itemObject ] ) || label.replace( /^!/, '' )
            }).join( '' )
        }
    }
})() //DatePicker.prototype.formats




/**
 * Check if two date units are the exact.
 */
DatePicker.prototype.isDateExact = function( one, two ) {

    var calendar = this

    // When we’re working with weekdays, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with date representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return calendar.create( one ).pick === calendar.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.isDateExact( one.from, two.from ) && calendar.isDateExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two date units overlap.
 */
DatePicker.prototype.isDateOverlap = function( one, two ) {

    var calendar = this,
        firstDay = calendar.settings.firstDay ? 1 : 0

    // When we’re working with a weekday index, compare the days.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        one = one % 7 + firstDay
        return one === calendar.create( two ).day + 1
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        two = two % 7 + firstDay
        return two === calendar.create( one ).day + 1
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return calendar.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
DatePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of dates as “disabled”.
 */
DatePicker.prototype.deactivate = function( type, datesToDisable ) {

    var calendar = this,
        disabledItems = calendar.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( datesToDisable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToDisable === false ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToDisable === true ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the dates to disable.
    else {

        datesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( calendar.isDateExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //DatePicker.prototype.deactivate


/**
 * Mark a collection of dates as “enabled”.
 */
DatePicker.prototype.activate = function( type, datesToEnable ) {

    var calendar = this,
        disabledItems = calendar.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( datesToEnable == 'flip' ) {
        calendar.flipEnable()
    }

    else if ( datesToEnable === true ) {
        calendar.flipEnable(1)
        disabledItems = []
    }

    else if ( datesToEnable === false ) {
        calendar.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled dates.
    else {

        datesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isExactRange

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( calendar.isDateExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isExactRange = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( calendar.isDateOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[3] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an exact range of dates,
            // make sure there are no “inverted” dates because of it.
            if ( isExactRange ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( calendar.isDateOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //DatePicker.prototype.activate


/**
 * Create a string for the nodes in the picker.
 */
DatePicker.prototype.nodes = function( isOpen ) {

    var
        calendar = this,
        settings = calendar.settings,
        calendarItem = calendar.item,
        nowObject = calendarItem.now,
        selectedObject = calendarItem.select,
        highlightedObject = calendarItem.highlight,
        viewsetObject = calendarItem.view,
        disabledCollection = calendarItem.disable,
        minLimitObject = calendarItem.min,
        maxLimitObject = calendarItem.max,


        // Create the calendar table head using a copy of weekday labels collection.
        // * We do a copy so we don't mutate the original array.
        tableHead = (function( collection, fullCollection ) {

            // If the first day should be Monday, move Sunday to the end.
            if ( settings.firstDay ) {
                collection.push( collection.shift() )
                fullCollection.push( fullCollection.shift() )
            }

            // Create and return the table head group.
            return _.node(
                'thead',
                _.node(
                    'tr',
                    _.group({
                        min: 0,
                        max: DAYS_IN_WEEK - 1,
                        i: 1,
                        node: 'th',
                        item: function( counter ) {
                            return [
                                collection[ counter ],
                                settings.klass.weekdays,
                                'scope=col title="' + fullCollection[ counter ] + '"'
                            ]
                        }
                    })
                )
            ) //endreturn
        })( ( settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysShort ).slice( 0 ), settings.weekdaysFull.slice( 0 ) ), //tableHead


        // Create the nav for next/prev month.
        createMonthNav = function( next ) {

            // Otherwise, return the created month tag.
            return _.node(
                'div',
                ' ',
                settings.klass[ 'nav' + ( next ? 'Next' : 'Prev' ) ] + (

                    // If the focused month is outside the range, disabled the button.
                    ( next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month ) ||
                    ( !next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month ) ?
                    ' ' + settings.klass.navDisabled : ''
                ),
                'data-nav=' + ( next || -1 ) + ' ' +
                _.ariaAttr({
                    role: 'button',
                    controls: calendar.$node[0].id + '_table'
                }) + ' ' +
                'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev ) + '"'
            ) //endreturn
        }, //createMonthNav


        // Create the month label.
        createMonthLabel = function() {

            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull

            // If there are months to select, add a dropdown menu.
            if ( settings.selectMonths ) {

                return _.node( 'select',
                    _.group({
                        min: 0,
                        max: 11,
                        i: 1,
                        node: 'option',
                        item: function( loopedMonth ) {

                            return [

                                // The looped month and no classes.
                                monthsCollection[ loopedMonth ], 0,

                                // Set the value and selected index.
                                'value=' + loopedMonth +
                                ( viewsetObject.month == loopedMonth ? ' selected' : '' ) +
                                (
                                    (
                                        ( viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month ) ||
                                        ( viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month )
                                    ) ?
                                    ' disabled' : ''
                                )
                            ]
                        }
                    }),
                    settings.klass.selectMonth,
                    ( isOpen ? '' : 'disabled' ) + ' ' +
                    _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelMonthSelect + '"'
                )
            }

            // If there's a need for a month selector
            return _.node( 'div', monthsCollection[ viewsetObject.month ], settings.klass.month )
        }, //createMonthLabel


        // Create the year label.
        createYearLabel = function() {

            var focusedYear = viewsetObject.year,

            // If years selector is set to a literal "true", set it to 5. Otherwise
            // divide in half to get half before and half after focused year.
            numberYears = settings.selectYears === true ? 5 : ~~( settings.selectYears / 2 )

            // If there are years to select, add a dropdown menu.
            if ( numberYears ) {

                var
                    minYear = minLimitObject.year,
                    maxYear = maxLimitObject.year,
                    lowestYear = focusedYear - numberYears,
                    highestYear = focusedYear + numberYears

                // If the min year is greater than the lowest year, increase the highest year
                // by the difference and set the lowest year to the min year.
                if ( minYear > lowestYear ) {
                    highestYear += minYear - lowestYear
                    lowestYear = minYear
                }

                // If the max year is less than the highest year, decrease the lowest year
                // by the lower of the two: available and needed years. Then set the
                // highest year to the max year.
                if ( maxYear < highestYear ) {

                    var availableYears = lowestYear - minYear,
                        neededYears = highestYear - maxYear

                    lowestYear -= availableYears > neededYears ? neededYears : availableYears
                    highestYear = maxYear
                }

                return _.node( 'select',
                    _.group({
                        min: lowestYear,
                        max: highestYear,
                        i: 1,
                        node: 'option',
                        item: function( loopedYear ) {
                            return [

                                // The looped year and no classes.
                                loopedYear, 0,

                                // Set the value and selected index.
                                'value=' + loopedYear + ( focusedYear == loopedYear ? ' selected' : '' )
                            ]
                        }
                    }),
                    settings.klass.selectYear,
                    ( isOpen ? '' : 'disabled' ) + ' ' + _.ariaAttr({ controls: calendar.$node[0].id + '_table' }) + ' ' +
                    'title="' + settings.labelYearSelect + '"'
                )
            }

            // Otherwise just return the year focused
            return _.node( 'div', focusedYear, settings.klass.year )
        } //createYearLabel


    // Create and return the entire calendar.
    return _.node(
        'div',
        ( settings.selectYears ? createYearLabel() + createMonthLabel() : createMonthLabel() + createYearLabel() ) +
        createMonthNav() + createMonthNav( 1 ),
        settings.klass.header
    ) + _.node(
        'table',
        tableHead +
        _.node(
            'tbody',
            _.group({
                min: 0,
                max: WEEKS_IN_CALENDAR - 1,
                i: 1,
                node: 'tr',
                item: function( rowCounter ) {

                    // If Monday is the first day and the month starts on Sunday, shift the date back a week.
                    var shiftDateBy = settings.firstDay && calendar.create([ viewsetObject.year, viewsetObject.month, 1 ]).day === 0 ? -7 : 0

                    return [
                        _.group({
                            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1, // Add 1 for weekday 0index
                            max: function() {
                                return this.min + DAYS_IN_WEEK - 1
                            },
                            i: 1,
                            node: 'td',
                            item: function( targetDate ) {

                                // Convert the time date from a relative date to a target date.
                                targetDate = calendar.create([ viewsetObject.year, viewsetObject.month, targetDate + ( settings.firstDay ? 1 : 0 ) ])

                                var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                                    isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                                    isDisabled = disabledCollection && calendar.disabled( targetDate ) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                                    formattedDate = _.trigger( calendar.formats.toString, calendar, [ settings.format, targetDate ] )

                                return [
                                    _.node(
                                        'div',
                                        targetDate.date,
                                        (function( klasses ) {

                                            // Add the `infocus` or `outfocus` classes based on month in view.
                                            klasses.push( viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus )

                                            // Add the `today` class if needed.
                                            if ( nowObject.pick == targetDate.pick ) {
                                                klasses.push( settings.klass.now )
                                            }

                                            // Add the `selected` class if something's selected and the time matches.
                                            if ( isSelected ) {
                                                klasses.push( settings.klass.selected )
                                            }

                                            // Add the `highlighted` class if something's highlighted and the time matches.
                                            if ( isHighlighted ) {
                                                klasses.push( settings.klass.highlighted )
                                            }

                                            // Add the `disabled` class if something's disabled and the object matches.
                                            if ( isDisabled ) {
                                                klasses.push( settings.klass.disabled )
                                            }

                                            return klasses.join( ' ' )
                                        })([ settings.klass.day ]),
                                        'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                                            role: 'gridcell',
                                            label: formattedDate,
                                            selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                                            activedescendant: isHighlighted ? true : null,
                                            disabled: isDisabled ? true : null
                                        })
                                    ),
                                    '',
                                    _.ariaAttr({ role: 'presentation' })
                                ] //endreturn
                            }
                        })
                    ] //endreturn
                }
            })
        ),
        settings.klass.table,
        'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
            role: 'grid',
            controls: calendar.$node[0].id,
            readonly: true
        })
    ) +

    // * For Firefox forms to submit, make sure to set the buttons’ `type` attributes as “button”.
    _.node(
        'div',
        _.node( 'button', settings.today, settings.klass.buttonToday,
            'type=button data-pick=' + nowObject.pick +
            ( isOpen && !calendar.disabled(nowObject) ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node( 'button', settings.clear, settings.klass.buttonClear,
            'type=button data-clear=1' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ) +
        _.node('button', settings.close, settings.klass.buttonClose,
            'type=button data-close=true ' +
            ( isOpen ? '' : ' disabled' ) + ' ' +
            _.ariaAttr({ controls: calendar.$node[0].id }) ),
        settings.klass.footer
    ) //endreturn
} //DatePicker.prototype.nodes




/**
 * The date picker defaults.
 */
DatePicker.defaults = (function( prefix ) {

    return {

        // The title label to use for the month nav buttons
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',

        // The title label to use for the dropdown selectors
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',

        // Months and weekdays
        monthsFull: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
        monthsShort: [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ],
        weekdaysShort: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],

        // Today and clear
        today: 'Today',
        clear: 'Clear',
        close: 'Close',

        // Picker close behavior
        closeOnSelect: true,
        closeOnClear: true,

        // Update input value on select/clear
        updateInput: true,

        // The format to show on the `input` element
        format: 'd mmmm, yyyy',

        // Classes
        klass: {

            table: prefix + 'table',

            header: prefix + 'header',

            navPrev: prefix + 'nav--prev',
            navNext: prefix + 'nav--next',
            navDisabled: prefix + 'nav--disabled',

            month: prefix + 'month',
            year: prefix + 'year',

            selectMonth: prefix + 'select--month',
            selectYear: prefix + 'select--year',

            weekdays: prefix + 'weekday',

            day: prefix + 'day',
            disabled: prefix + 'day--disabled',
            selected: prefix + 'day--selected',
            highlighted: prefix + 'day--highlighted',
            now: prefix + 'day--today',
            infocus: prefix + 'day--infocus',
            outfocus: prefix + 'day--outfocus',

            footer: prefix + 'footer',

            buttonClear: prefix + 'button--clear',
            buttonToday: prefix + 'button--today',
            buttonClose: prefix + 'button--close'
        }
    }
})( Picker.klasses().picker + '__' )





/**
 * Extend the picker to add the date picker.
 */
Picker.extend( 'pickadate', DatePicker )


}));




		/*!
 * Time picker for pickadate.js v3.6.3
 * http://amsul.github.io/pickadate.js/time.htm
 */

(function ( factory ) {

    // AMD.
    if ( typeof define == 'function' && define.amd )
        define( ['./picker', 'jquery'], factory )

    // Node.js/browserify.
    else if ( typeof exports == 'object' )
        module.exports = factory( require('./picker.js'), require('jquery') )

    // Browser globals.
    else factory( Picker, jQuery )

}(function( Picker, $ ) {


/**
 * Globals and constants
 */
var HOURS_IN_DAY = 24,
    MINUTES_IN_HOUR = 60,
    HOURS_TO_NOON = 12,
    MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR,
    _ = Picker._



/**
 * The time picker constructor
 */
function TimePicker( picker, settings ) {

    var clock = this,
        elementValue = picker.$node[ 0 ].value,
        elementDataValue = picker.$node.data( 'value' ),
        valueString = elementDataValue || elementValue,
        formatString = elementDataValue ? settings.formatSubmit : settings.format

    clock.settings = settings
    clock.$node = picker.$node

    // The queue of methods that will be used to build item objects.
    clock.queue = {
        interval: 'i',
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse create validate',
        view: 'parse create validate',
        disable: 'deactivate',
        enable: 'activate'
    }

    // The component's item object.
    clock.item = {}

    clock.item.clear = null
    clock.item.interval = settings.interval || 30
    clock.item.disable = ( settings.disable || [] ).slice( 0 )
    clock.item.enable = -(function( collectionDisabled ) {
        return collectionDisabled[ 0 ] === true ? collectionDisabled.shift() : -1
    })( clock.item.disable )

    clock.
        set( 'min', settings.min ).
        set( 'max', settings.max ).
        set( 'now' )

    // When there’s a value, set the `select`, which in turn
    // also sets the `highlight` and `view`.
    if ( valueString ) {
        clock.set( 'select', valueString, {
            format: formatString
        })
    }

    // If there’s no value, default to highlighting “today”.
    else {
        clock.
            set( 'select', null ).
            set( 'highlight', clock.item.now )
    }

    // The keycode to movement mapping.
    clock.key = {
        40: 1, // Down
        38: -1, // Up
        39: 1, // Right
        37: -1, // Left
        go: function( timeChange ) {
            clock.set(
                'highlight',
                clock.item.highlight.pick + timeChange * clock.item.interval,
                { interval: timeChange * clock.item.interval }
            )
            this.render()
        }
    }


    // Bind some picker events.
    picker.
        on( 'render', function() {
            var $pickerHolder = picker.$root.children(),
                $viewset = $pickerHolder.find( '.' + settings.klass.viewset ),
                vendors = function( prop ) {
                    return ['webkit', 'moz', 'ms', 'o', ''].map(function( vendor ) {
                        return ( vendor ? '-' + vendor + '-' : '' ) + prop
                    })
                },
                animations = function( $el, state ) {
                    vendors( 'transform' ).map(function( prop ) {
                        $el.css( prop, state )
                    })
                    vendors( 'transition' ).map(function( prop ) {
                        $el.css( prop, state )
                    })
                }
            if ( $viewset.length ) {
                animations( $pickerHolder, 'none' )
                $pickerHolder[ 0 ].scrollTop = ~~$viewset.position().top - ( $viewset[ 0 ].clientHeight * 2 )
                animations( $pickerHolder, '' )
            }
        }, 1 ).
        on( 'open', function() {
            picker.$root.find( 'button' ).attr( 'disabled', false )
        }, 1 ).
        on( 'close', function() {
            picker.$root.find( 'button' ).attr( 'disabled', true )
        }, 1 )

} //TimePicker


/**
 * Set a timepicker item object.
 */
TimePicker.prototype.set = function( type, value, options ) {

    var clock = this,
        clockItem = clock.item

    // If the value is `null` just set it immediately.
    if ( value === null ) {
        if ( type == 'clear' ) type = 'select'
        clockItem[ type ] = value
        return clock
    }

    // Otherwise go through the queue of methods, and invoke the functions.
    // Update this as the time unit, and set the final value as this item.
    // * In the case of `enable`, keep the queue but set `disable` instead.
    //   And in the case of `flip`, keep the queue but set `enable` instead.
    clockItem[ ( type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type ) ] = clock.queue[ type ].split( ' ' ).map( function( method ) {
        value = clock[ method ]( type, value, options )
        return value
    }).pop()

    // Check if we need to cascade through more updates.
    if ( type == 'select' ) {
        clock.set( 'highlight', clockItem.select, options )
    }
    else if ( type == 'highlight' ) {
        clock.set( 'view', clockItem.highlight, options )
    }
    else if ( type == 'interval' ) {
        clock.
            set( 'min', clockItem.min, options ).
            set( 'max', clockItem.max, options )
    }
    else if ( type.match( /^(flip|min|max|disable|enable)$/ ) ) {
        if ( clockItem.select && clock.disabled( clockItem.select ) ) {
            clock.set( 'select', value, options )
        }
        if ( clockItem.highlight && clock.disabled( clockItem.highlight ) ) {
            clock.set( 'highlight', value, options )
        }
        if ( type == 'min' ) {
            clock.set( 'max', clockItem.max, options )
        }
    }

    return clock
} //TimePicker.prototype.set


/**
 * Get a timepicker item object.
 */
TimePicker.prototype.get = function( type ) {
    return this.item[ type ]
} //TimePicker.prototype.get


/**
 * Create a picker time object.
 */
TimePicker.prototype.create = function( type, value, options ) {

    var clock = this

    // If there’s no value, use the type as the value.
    value = value === undefined ? type : value

    // If it’s a date object, convert it into an array.
    if ( _.isDate( value ) ) {
        value = [ value.getHours(), value.getMinutes() ]
    }

    // If it’s an object, use the “pick” value.
    if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = value.pick
    }

    // If it’s an array, convert it into minutes.
    else if ( $.isArray( value ) ) {
        value = +value[ 0 ] * MINUTES_IN_HOUR + (+value[ 1 ])
    }

    // If no valid value is passed, set it to “now”.
    else if ( !_.isInteger( value ) ) {
        value = clock.now( type, value, options )
    }

    // If we’re setting the max, make sure it’s greater than the min.
    if ( type == 'max' && value < clock.item.min.pick ) {
        value += MINUTES_IN_DAY
    }

    // If the value doesn’t fall directly on the interval,
    // add one interval to indicate it as “passed”.
    if ( type != 'min' && type != 'max' && (value - clock.item.min.pick) % clock.item.interval !== 0 ) {
        value += clock.item.interval
    }

    // Normalize it into a “reachable” interval.
    value = clock.normalize( type, value, options )

    // Return the compiled object.
    return {

        // Divide to get hours from minutes.
        hour: ~~( HOURS_IN_DAY + value / MINUTES_IN_HOUR ) % HOURS_IN_DAY,

        // The remainder is the minutes.
        mins: ( MINUTES_IN_HOUR + value % MINUTES_IN_HOUR ) % MINUTES_IN_HOUR,

        // The time in total minutes.
        time: ( MINUTES_IN_DAY + value ) % MINUTES_IN_DAY,

        // Reference to the “relative” value to pick.
        pick: value % MINUTES_IN_DAY
    }
} //TimePicker.prototype.create


/**
 * Create a range limit object using an array, date object,
 * literal “true”, or integer relative to another time.
 */
TimePicker.prototype.createRange = function( from, to ) {

    var clock = this,
        createTime = function( time ) {
            if ( time === true || $.isArray( time ) || _.isDate( time ) ) {
                return clock.create( time )
            }
            return time
        }

    // Create objects if possible.
    if ( !_.isInteger( from ) ) {
        from = createTime( from )
    }
    if ( !_.isInteger( to ) ) {
        to = createTime( to )
    }

    // Create relative times.
    if ( _.isInteger( from ) && $.isPlainObject( to ) ) {
        from = [ to.hour, to.mins + ( from * clock.settings.interval ) ];
    }
    else if ( _.isInteger( to ) && $.isPlainObject( from ) ) {
        to = [ from.hour, from.mins + ( to * clock.settings.interval ) ];
    }

    return {
        from: createTime( from ),
        to: createTime( to )
    }
} //TimePicker.prototype.createRange


/**
 * Check if a time unit falls within a time range object.
 */
TimePicker.prototype.withinRange = function( range, timeUnit ) {
    range = this.createRange(range.from, range.to)
    return timeUnit.pick >= range.from.pick && timeUnit.pick <= range.to.pick
}


/**
 * Check if two time range objects overlap.
 */
TimePicker.prototype.overlapRanges = function( one, two ) {

    var clock = this

    // Convert the ranges into comparable times.
    one = clock.createRange( one.from, one.to )
    two = clock.createRange( two.from, two.to )

    return clock.withinRange( one, two.from ) || clock.withinRange( one, two.to ) ||
        clock.withinRange( two, one.from ) || clock.withinRange( two, one.to )
}


/**
 * Get the time relative to now.
 */
TimePicker.prototype.now = function( type, value/*, options*/ ) {

    var interval = this.item.interval,
        date = new Date(),
        nowMinutes = date.getHours() * MINUTES_IN_HOUR + date.getMinutes(),
        isValueInteger = _.isInteger( value ),
        isBelowInterval

    // Make sure “now” falls within the interval range.
    nowMinutes -= nowMinutes % interval

    // Check if the difference is less than the interval itself.
    isBelowInterval = value < 0 && interval * value + nowMinutes <= -interval

    // Add an interval because the time has “passed”.
    nowMinutes += type == 'min' && isBelowInterval ? 0 : interval

    // If the value is a number, adjust by that many intervals.
    if ( isValueInteger ) {
        nowMinutes += interval * (
            isBelowInterval && type != 'max' ?
                value + 1 :
                value
            )
    }

    // Return the final calculation.
    return nowMinutes
} //TimePicker.prototype.now


/**
 * Normalize minutes to be “reachable” based on the min and interval.
 */
TimePicker.prototype.normalize = function( type, value/*, options*/ ) {

    var interval = this.item.interval,
        minTime = this.item.min && this.item.min.pick || 0

    // If setting min time, don’t shift anything.
    // Otherwise get the value and min difference and then
    // normalize the difference with the interval.
    value -= type == 'min' ? 0 : ( value - minTime ) % interval

    // Return the adjusted value.
    return value
} //TimePicker.prototype.normalize


/**
 * Measure the range of minutes.
 */
TimePicker.prototype.measure = function( type, value, options ) {

    var clock = this

    // If it’s anything false-y, set it to the default.
    if ( !value ) {
        value = type == 'min' ? [ 0, 0 ] : [ HOURS_IN_DAY - 1, MINUTES_IN_HOUR - 1 ]
    }

    // If it’s a string, parse it.
    if ( typeof value == 'string' ) {
        value = clock.parse( type, value )
    }

    // If it’s a literal true, or an integer, make it relative to now.
    else if ( value === true || _.isInteger( value ) ) {
        value = clock.now( type, value, options )
    }

    // If it’s an object already, just normalize it.
    else if ( $.isPlainObject( value ) && _.isInteger( value.pick ) ) {
        value = clock.normalize( type, value.pick, options )
    }

    return value
} ///TimePicker.prototype.measure


/**
 * Validate an object as enabled.
 */
TimePicker.prototype.validate = function( type, timeObject, options ) {

    var clock = this,
        interval = options && options.interval ? options.interval : clock.item.interval

    // Check if the object is disabled.
    if ( clock.disabled( timeObject ) ) {

        // Shift with the interval until we reach an enabled time.
        timeObject = clock.shift( timeObject, interval )
    }

    // Scope the object into range.
    timeObject = clock.scope( timeObject )

    // Do a second check to see if we landed on a disabled min/max.
    // In that case, shift using the opposite interval as before.
    if ( clock.disabled( timeObject ) ) {
        timeObject = clock.shift( timeObject, interval * -1 )
    }

    // Return the final object.
    return timeObject
} //TimePicker.prototype.validate


/**
 * Check if an object is disabled.
 */
TimePicker.prototype.disabled = function( timeToVerify ) {

    var clock = this,

        // Filter through the disabled times to check if this is one.
        isDisabledMatch = clock.item.disable.filter( function( timeToDisable ) {

            // If the time is a number, match the hours.
            if ( _.isInteger( timeToDisable ) ) {
                return timeToVerify.hour == timeToDisable
            }

            // If it’s an array, create the object and match the times.
            if ( $.isArray( timeToDisable ) || _.isDate( timeToDisable ) ) {
                return timeToVerify.pick == clock.create( timeToDisable ).pick
            }

            // If it’s an object, match a time within the “from” and “to” range.
            if ( $.isPlainObject( timeToDisable ) ) {
                return clock.withinRange( timeToDisable, timeToVerify )
            }
        })

    // If this time matches a disabled time, confirm it’s not inverted.
    isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function( timeToDisable ) {
        return $.isArray( timeToDisable ) && timeToDisable[2] == 'inverted' ||
            $.isPlainObject( timeToDisable ) && timeToDisable.inverted
    }).length

    // If the clock is "enabled" flag is flipped, flip the condition.
    return clock.item.enable === -1 ? !isDisabledMatch : isDisabledMatch ||
        timeToVerify.pick < clock.item.min.pick ||
        timeToVerify.pick > clock.item.max.pick
} //TimePicker.prototype.disabled


/**
 * Shift an object by an interval until we reach an enabled object.
 */
TimePicker.prototype.shift = function( timeObject, interval ) {

    var clock = this,
        minLimit = clock.item.min.pick,
        maxLimit = clock.item.max.pick/*,
        safety = 1000*/

    interval = interval || clock.item.interval

    // Keep looping as long as the time is disabled.
    while ( /*safety &&*/ clock.disabled( timeObject ) ) {

        /*safety -= 1
        if ( !safety ) {
            throw 'Fell into an infinite loop while shifting to ' + timeObject.hour + ':' + timeObject.mins + '.'
        }*/

        // Increase/decrease the time by the interval and keep looping.
        timeObject = clock.create( timeObject.pick += interval )

        // If we've looped beyond the limits, break out of the loop.
        if ( timeObject.pick <= minLimit || timeObject.pick >= maxLimit ) {
            break
        }
    }

    // Return the final object.
    return timeObject
} //TimePicker.prototype.shift


/**
 * Scope an object to be within range of min and max.
 */
TimePicker.prototype.scope = function( timeObject ) {
    var minLimit = this.item.min.pick,
        maxLimit = this.item.max.pick
    return this.create( timeObject.pick > maxLimit ? maxLimit : timeObject.pick < minLimit ? minLimit : timeObject )
} //TimePicker.prototype.scope


/**
 * Parse a string into a usable type.
 */
TimePicker.prototype.parse = function( type, value, options ) {

    var hour, minutes, isPM, item, parseValue,
        clock = this,
        parsingObject = {}

    // If it’s already parsed, we’re good.
    if ( !value || typeof value != 'string' ) {
        return value
    }

    // We need a `.format` to parse the value with.
    if ( !( options && options.format ) ) {
        options = options || {}
        options.format = clock.settings.format
    }

    // Convert the format into an array and then map through it.
    clock.formats.toArray( options.format ).map( function( label ) {

        var
            substring,

            // Grab the formatting label.
            formattingLabel = clock.formats[ label ],

            // The format length is from the formatting label function or the
            // label length without the escaping exclamation (!) mark.
            formatLength = formattingLabel ?
                _.trigger( formattingLabel, clock, [ value, parsingObject ] ) :
                label.replace( /^!/, '' ).length

        // If there's a format label, split the value up to the format length.
        // Then add it to the parsing object with appropriate label.
        if ( formattingLabel ) {
            substring = value.substr( 0, formatLength )
            parsingObject[ label ] = substring.match(/^\d+$/) ? +substring : substring
        }

        // Update the time value as the substring from format length to end.
        value = value.substr( formatLength )
    })

    // Grab the hour and minutes from the parsing object.
    for ( item in parsingObject ) {
        parseValue = parsingObject[item]
        if ( _.isInteger(parseValue) ) {
            if ( item.match(/^(h|hh)$/i) ) {
                hour = parseValue
                if ( item == 'h' || item == 'hh' ) {
                    hour %= 12
                }
            }
            else if ( item == 'i' ) {
                minutes = parseValue
            }
        }
        else if ( item.match(/^a$/i) && parseValue.match(/^p/i) && ('h' in parsingObject || 'hh' in parsingObject) ) {
            isPM = true
        }
    }

    // Calculate it in minutes and return.
    return (isPM ? hour + 12 : hour) * MINUTES_IN_HOUR + minutes
} //TimePicker.prototype.parse


/**
 * Various formats to display the object in.
 */
TimePicker.prototype.formats = {

    h: function( string, timeObject ) {

        // If there's string, then get the digits length.
        // Otherwise return the selected hour in "standard" format.
        return string ? _.digits( string ) : timeObject.hour % HOURS_TO_NOON || HOURS_TO_NOON
    },
    hh: function( string, timeObject ) {

        // If there's a string, then the length is always 2.
        // Otherwise return the selected hour in "standard" format with a leading zero.
        return string ? 2 : _.lead( timeObject.hour % HOURS_TO_NOON || HOURS_TO_NOON )
    },
    H: function( string, timeObject ) {

        // If there's string, then get the digits length.
        // Otherwise return the selected hour in "military" format as a string.
        return string ? _.digits( string ) : '' + ( timeObject.hour % 24 )
    },
    HH: function( string, timeObject ) {

        // If there's string, then get the digits length.
        // Otherwise return the selected hour in "military" format with a leading zero.
        return string ? _.digits( string ) : _.lead( timeObject.hour % 24 )
    },
    i: function( string, timeObject ) {

        // If there's a string, then the length is always 2.
        // Otherwise return the selected minutes.
        return string ? 2 : _.lead( timeObject.mins )
    },
    a: function( string, timeObject ) {

        // If there's a string, then the length is always 4.
        // Otherwise check if it's more than "noon" and return either am/pm.
        return string ? 4 : MINUTES_IN_DAY / 2 > timeObject.time % MINUTES_IN_DAY ? 'a.m.' : 'p.m.'
    },
    A: function( string, timeObject ) {

        // If there's a string, then the length is always 2.
        // Otherwise check if it's more than "noon" and return either am/pm.
        return string ? 2 : MINUTES_IN_DAY / 2 > timeObject.time % MINUTES_IN_DAY ? 'AM' : 'PM'
    },

    // Create an array by splitting the formatting string passed.
    toArray: function( formatString ) { return formatString.split( /(h{1,2}|H{1,2}|i|a|A|!.)/g ) },

    // Format an object into a string using the formatting options.
    toString: function ( formatString, itemObject ) {
        var clock = this
        return clock.formats.toArray( formatString ).map( function( label ) {
            return _.trigger( clock.formats[ label ], clock, [ 0, itemObject ] ) || label.replace( /^!/, '' )
        }).join( '' )
    }
} //TimePicker.prototype.formats




/**
 * Check if two time units are the exact.
 */
TimePicker.prototype.isTimeExact = function( one, two ) {

    var clock = this

    // When we’re working with minutes, do a direct comparison.
    if (
        ( _.isInteger( one ) && _.isInteger( two ) ) ||
        ( typeof one == 'boolean' && typeof two == 'boolean' )
     ) {
        return one === two
    }

    // When we’re working with time representations, compare the “pick” value.
    if (
        ( _.isDate( one ) || $.isArray( one ) ) &&
        ( _.isDate( two ) || $.isArray( two ) )
    ) {
        return clock.create( one ).pick === clock.create( two ).pick
    }

    // When we’re working with range objects, compare the “from” and “to”.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return clock.isTimeExact( one.from, two.from ) && clock.isTimeExact( one.to, two.to )
    }

    return false
}


/**
 * Check if two time units overlap.
 */
TimePicker.prototype.isTimeOverlap = function( one, two ) {

    var clock = this

    // When we’re working with an integer, compare the hours.
    if ( _.isInteger( one ) && ( _.isDate( two ) || $.isArray( two ) ) ) {
        return one === clock.create( two ).hour
    }
    if ( _.isInteger( two ) && ( _.isDate( one ) || $.isArray( one ) ) ) {
        return two === clock.create( one ).hour
    }

    // When we’re working with range objects, check if the ranges overlap.
    if ( $.isPlainObject( one ) && $.isPlainObject( two ) ) {
        return clock.overlapRanges( one, two )
    }

    return false
}


/**
 * Flip the “enabled” state.
 */
TimePicker.prototype.flipEnable = function(val) {
    var itemObject = this.item
    itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1)
}


/**
 * Mark a collection of times as “disabled”.
 */
TimePicker.prototype.deactivate = function( type, timesToDisable ) {

    var clock = this,
        disabledItems = clock.item.disable.slice(0)


    // If we’re flipping, that’s all we need to do.
    if ( timesToDisable == 'flip' ) {
        clock.flipEnable()
    }

    else if ( timesToDisable === false ) {
        clock.flipEnable(1)
        disabledItems = []
    }

    else if ( timesToDisable === true ) {
        clock.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the times to disable.
    else {

        timesToDisable.map(function( unitToDisable ) {

            var matchFound

            // When we have disabled items, check for matches.
            // If something is matched, immediately break out.
            for ( var index = 0; index < disabledItems.length; index += 1 ) {
                if ( clock.isTimeExact( unitToDisable, disabledItems[index] ) ) {
                    matchFound = true
                    break
                }
            }

            // If nothing was found, add the validated unit to the collection.
            if ( !matchFound ) {
                if (
                    _.isInteger( unitToDisable ) ||
                    _.isDate( unitToDisable ) ||
                    $.isArray( unitToDisable ) ||
                    ( $.isPlainObject( unitToDisable ) && unitToDisable.from && unitToDisable.to )
                ) {
                    disabledItems.push( unitToDisable )
                }
            }
        })
    }

    // Return the updated collection.
    return disabledItems
} //TimePicker.prototype.deactivate


/**
 * Mark a collection of times as “enabled”.
 */
TimePicker.prototype.activate = function( type, timesToEnable ) {

    var clock = this,
        disabledItems = clock.item.disable,
        disabledItemsCount = disabledItems.length

    // If we’re flipping, that’s all we need to do.
    if ( timesToEnable == 'flip' ) {
        clock.flipEnable()
    }

    else if ( timesToEnable === true ) {
        clock.flipEnable(1)
        disabledItems = []
    }

    else if ( timesToEnable === false ) {
        clock.flipEnable(-1)
        disabledItems = []
    }

    // Otherwise go through the disabled times.
    else {

        timesToEnable.map(function( unitToEnable ) {

            var matchFound,
                disabledUnit,
                index,
                isRangeMatched

            // Go through the disabled items and try to find a match.
            for ( index = 0; index < disabledItemsCount; index += 1 ) {

                disabledUnit = disabledItems[index]

                // When an exact match is found, remove it from the collection.
                if ( clock.isTimeExact( disabledUnit, unitToEnable ) ) {
                    matchFound = disabledItems[index] = null
                    isRangeMatched = true
                    break
                }

                // When an overlapped match is found, add the “inverted” state to it.
                else if ( clock.isTimeOverlap( disabledUnit, unitToEnable ) ) {
                    if ( $.isPlainObject( unitToEnable ) ) {
                        unitToEnable.inverted = true
                        matchFound = unitToEnable
                    }
                    else if ( $.isArray( unitToEnable ) ) {
                        matchFound = unitToEnable
                        if ( !matchFound[2] ) matchFound.push( 'inverted' )
                    }
                    else if ( _.isDate( unitToEnable ) ) {
                        matchFound = [ unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted' ]
                    }
                    break
                }
            }

            // If a match was found, remove a previous duplicate entry.
            if ( matchFound ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( clock.isTimeExact( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // In the event that we’re dealing with an overlap of range times,
            // make sure there are no “inverted” times because of it.
            if ( isRangeMatched ) for ( index = 0; index < disabledItemsCount; index += 1 ) {
                if ( clock.isTimeOverlap( disabledItems[index], unitToEnable ) ) {
                    disabledItems[index] = null
                    break
                }
            }

            // If something is still matched, add it into the collection.
            if ( matchFound ) {
                disabledItems.push( matchFound )
            }
        })
    }

    // Return the updated collection.
    return disabledItems.filter(function( val ) { return val != null })
} //TimePicker.prototype.activate


/**
 * The division to use for the range intervals.
 */
TimePicker.prototype.i = function( type, value/*, options*/ ) {
    return _.isInteger( value ) && value > 0 ? value : this.item.interval
}


/**
 * Create a string for the nodes in the picker.
 */
TimePicker.prototype.nodes = function( isOpen ) {

    var
        clock = this,
        settings = clock.settings,
        selectedObject = clock.item.select,
        highlightedObject = clock.item.highlight,
        viewsetObject = clock.item.view,
        disabledCollection = clock.item.disable

    return _.node(
        'ul',
        _.group({
            min: clock.item.min.pick,
            max: clock.item.max.pick,
            i: clock.item.interval,
            node: 'li',
            item: function( loopedTime ) {
                loopedTime = clock.create( loopedTime )
                var timeMinutes = loopedTime.pick,
                    isSelected = selectedObject && selectedObject.pick == timeMinutes,
                    isHighlighted = highlightedObject && highlightedObject.pick == timeMinutes,
                    isDisabled = disabledCollection && clock.disabled( loopedTime ),
                    formattedTime = _.trigger( clock.formats.toString, clock, [ settings.format, loopedTime ] )
                return [
                    _.trigger( clock.formats.toString, clock, [ _.trigger( settings.formatLabel, clock, [ loopedTime ] ) || settings.format, loopedTime ] ),
                    (function( klasses ) {

                        if ( isSelected ) {
                            klasses.push( settings.klass.selected )
                        }

                        if ( isHighlighted ) {
                            klasses.push( settings.klass.highlighted )
                        }

                        if ( viewsetObject && viewsetObject.pick == timeMinutes ) {
                            klasses.push( settings.klass.viewset )
                        }

                        if ( isDisabled ) {
                            klasses.push( settings.klass.disabled )
                        }

                        return klasses.join( ' ' )
                    })( [ settings.klass.listItem ] ),
                    'data-pick=' + loopedTime.pick + ' ' + _.ariaAttr({
                        role: 'option',
                        label: formattedTime,
                        selected: isSelected && clock.$node.val() === formattedTime ? true : null,
                        activedescendant: isHighlighted ? true : null,
                        disabled: isDisabled ? true : null
                    })
                ]
            }
        }) +

        // * For Firefox forms to submit, make sure to set the button’s `type` attribute as “button”.
        _.node(
            'li',
            _.node(
                'button',
                settings.clear,
                settings.klass.buttonClear,
                'type=button data-clear=1' + ( isOpen ? '' : ' disabled' ) + ' ' +
                _.ariaAttr({ controls: clock.$node[0].id })
            ),
            '', _.ariaAttr({ role: 'presentation' })
        ),
        settings.klass.list,
        _.ariaAttr({ role: 'listbox', controls: clock.$node[0].id })
    )
} //TimePicker.prototype.nodes







/**
 * Extend the picker to add the component with the defaults.
 */
TimePicker.defaults = (function( prefix ) {

    return {

        // Clear
        clear: 'Clear',

        // The format to show on the `input` element
        format: 'h:i A',

        // The interval between each time
        interval: 30,

        // Picker close behavior
        closeOnSelect: true,
        closeOnClear: true,

        // Update input value on select/clear
        updateInput: true,

        // Classes
        klass: {

            picker: prefix + ' ' + prefix + '--time',
            holder: prefix + '__holder',

            list: prefix + '__list',
            listItem: prefix + '__list-item',

            disabled: prefix + '__list-item--disabled',
            selected: prefix + '__list-item--selected',
            highlighted: prefix + '__list-item--highlighted',
            viewset: prefix + '__list-item--viewset',
            now: prefix + '__list-item--now',

            buttonClear: prefix + '__button--clear'
        }
    }
})( Picker.klasses().picker )





/**
 * Extend the picker to add the time picker.
 */
Picker.extend( 'pickatime', TimePicker )


}));




		
/*jshint
   asi: true,
   unused: true,
   boss: true,
   loopfunc: true,
   eqnull: true
 */


/*!
 * Legacy browser support
 */


// Map array support
if ( ![].map ) {
    Array.prototype.map = function ( callback, self ) {
        var array = this, len = array.length, newArray = new Array( len )
        for ( var i = 0; i < len; i++ ) {
            if ( i in array ) {
                newArray[ i ] = callback.call( self, array[ i ], i, array )
            }
        }
        return newArray
    }
}


// Filter array support
if ( ![].filter ) {
    Array.prototype.filter = function( callback ) {
        if ( this == null ) throw new TypeError()
        var t = Object( this ), len = t.length >>> 0
        if ( typeof callback != 'function' ) throw new TypeError()
        var newArray = [], thisp = arguments[ 1 ]
        for ( var i = 0; i < len; i++ ) {
          if ( i in t ) {
            var val = t[ i ]
            if ( callback.call( thisp, val, i, t ) ) newArray.push( val )
          }
        }
        return newArray
    }
}


// Index of array support
if ( ![].indexOf ) {
    Array.prototype.indexOf = function( searchElement ) {
        if ( this == null ) throw new TypeError()
        var t = Object( this ), len = t.length >>> 0
        if ( len === 0 ) return -1
        var n = 0
        if ( arguments.length > 1 ) {
            n = Number( arguments[ 1 ] )
            if ( n != n ) {
                n = 0
            }
            else if ( n !== 0 && n != Infinity && n != -Infinity ) {
                n = ( n > 0 || -1 ) * Math.floor( Math.abs( n ) )
            }
        }
        if ( n >= len ) return -1
        var k = n >= 0 ? n : Math.max( len - Math.abs( n ), 0 )
        for ( ; k < len; k++ ) {
            if ( k in t && t[ k ] === searchElement ) return k
        }
        return -1
    }
}


/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * http://blog.stevenlevithan.com/archives/cross-browser-split
 */
var nativeSplit = String.prototype.split, compliantExecNpcg = /()??/.exec('')[1] === undefined
String.prototype.split = function(separator, limit) {
    var str = this
    if (Object.prototype.toString.call(separator) !== '[object RegExp]') {
        return nativeSplit.call(str, separator, limit)
    }
    var output = [],
        flags = (separator.ignoreCase ? 'i' : '') +
                (separator.multiline  ? 'm' : '') +
                (separator.extended   ? 'x' : '') +
                (separator.sticky     ? 'y' : ''),
        lastLastIndex = 0,
        separator2, match, lastIndex, lastLength
    separator = new RegExp(separator.source, flags + 'g')
    str += ''
    if (!compliantExecNpcg) {
        separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags)
    }
    limit = limit === undefined ? -1 >>> 0 : limit >>> 0
    while (match = separator.exec(str)) {
        lastIndex = match.index + match[0].length
        if (lastIndex > lastLastIndex) {
            output.push(str.slice(lastLastIndex, match.index))
            if (!compliantExecNpcg && match.length > 1) {
                match[0].replace(separator2, function () {
                    for (var i = 1; i < arguments.length - 2; i++) {
                        if (arguments[i] === undefined) {
                            match[i] = undefined
                        }
                    }
                })
            }
            if (match.length > 1 && match.index < str.length) {
                Array.prototype.push.apply(output, match.slice(1))
            }
            lastLength = match[0].length
            lastLastIndex = lastIndex
            if (output.length >= limit) {
                break
            }
        }
        if (separator.lastIndex === match.index) {
            separator.lastIndex++
        }
    }
    if (lastLastIndex === str.length) {
        if (lastLength || !separator.test('')) {
            output.push('')
        }
    } else {
        output.push(str.slice(lastLastIndex))
    }
    return output.length > limit ? output.slice(0, limit) : output
};

		// Spanish

jQuery.extend( jQuery.fn.pickadate.defaults, {
    monthsFull: [ 'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre' ],
    monthsShort: [ 'ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ],
    weekdaysFull: [ 'domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado' ],
    weekdaysShort: [ 'dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb' ],
    today: 'hoy',
    clear: 'borrar',
    close: 'cerrar',
    firstDay: 1,
    format: 'dddd d !de mmmm !de yyyy',
    formatSubmit: 'yyyy/mm/dd'
});

jQuery.extend( jQuery.fn.pickatime.defaults, {
    clear: 'borrar'
});

		
		var _iDB_config = {
	inicial: null,
	version: 1,
	database: 'database'
}

//constructor
function _indexedDB(config) {
	console.log('_indexedDB', config);
	this.estatus = 1;
	this.dbIn = null;
	this.inicial = (config.hasOwnProperty('inicial'))?config.inicial:null;
	this.version = (config.hasOwnProperty('version'))?config.version:1;
	this.database = (config.hasOwnProperty('database'))?config.database:'database';
}

_indexedDB.prototype.init = function(validar) {
	console.log('_indexedDB -> init', validar);
	
	if(validar){
		window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
		window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
		window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
		if (window.indexedDB) { } else {
			console.log('no _indexedDB -> init');
			if(this.inicial != null && typeof this.inicial === 'function'){ this.inicial(false); }	
			return false;
		}
	}
	
	var request = indexedDB.open(this.database, this.version);
	request.onerror = function(event) {
		console.log("indexedDB -> onerror");
	};
	request.onsuccess = function(event) {
		console.log("indexedDB -> onsuccess");
		_iDB.dbIn = request.result;
		_iDB.dbIn.onerror = function(event) { console.log("Database error: ",  event); };
		if(_iDB.inicial != null && typeof _iDB.inicial === 'function'){ 
			_iDB.inicial({ ok: _iDB.estatus}); 
		} 
	};	
	request.onupgradeneeded = function(event) {
		console.log("indexedDB -> onupgradeneeded");
		console.log("indexedDB -> onupgradeneeded -> old: " + event.oldVersion);
		console.log("indexedDB -> onupgradeneeded -> new: " + event.newVersion);
		_iDB.estatus = 0;
		_iDB.dbIn = event.target.result;
		var objectStore;
		if(event.oldVersion < 1 && _iDB.version >= 1){ 
			objectStore = _iDB.dbIn.createObjectStore("preferencia", {keyPath: "id"}); 
			objectStore = _iDB.dbIn.createObjectStore("avisos", {keyPath: "id", autoIncrement: true});
		}
		if(event.oldVersion != 0){
			var respuesta = { ok: 0, accion: 'reload',  msj: "<h1>Nueva actualización disponible</h1> Da clic en \"Recargar\" para contar con la versión más reciente." };
			if(_iDB.inicial != null && typeof _iDB.inicial === 'function'){ _iDB.inicial(respuesta); }
		}
	}
	
}

_indexedDB.prototype.addData = function(table, data, funcion) {
	console.log('_indexedDB -> addData');
	if(this.dbIn != null){
		console.log("_indexedDB -> addData -> db");
		var request = this.dbIn.transaction([table], "readwrite").objectStore(table).add(data);
		request.onsuccess = function(event) {
			console.log("_indexedDB -> addData -> db -> success -> " + event.target.result);
			if(funcion != null && typeof funcion === 'function'){ funcion({ok:true, id:event.target.result}); }
		};
		request.onerror = function(event) {
			console.log("_indexedDB -> addData -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion({ok:false, id:null}); }
		}
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion({ok:false, id:null}); }
	}
}

_indexedDB.prototype.updateData = function(table, data, funcion) {
	console.log('_indexedDB -> updateData');
	if(this.dbIn != null){
		console.log("_indexedDB -> updateData -> db");
		
		var request = this.dbIn.transaction([table], "readwrite").objectStore(table).put(data);
		request.onsuccess = function(event) {
			console.log("_indexedDB -> updateData -> db -> success -> " + event.target.result);
			if(funcion != null && typeof funcion === 'function'){ funcion({ok:true, id:event.target.result}); }
		};
		request.onerror = function(event) {
			console.log("_indexedDB -> updateData -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion({ok:false, id:null}); }
		}
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion({ok:false, id:null}); }
	}
}

_indexedDB.prototype.readData = function(table, id, funcion) {
	console.log('_indexedDB -> readData');
	if(this.dbIn != null){
		console.log("_indexedDB -> readData -> " + id);
		var request = this.dbIn.transaction([table], 'readonly').objectStore(table).get(id);
		request.onerror = function(event) {
			console.log("_indexedDB -> readData -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion(null); }
		};
		request.onsuccess = function(event) {
			console.log("_indexedDB -> readData -> db -> success");
			if(typeof(request.result) !== "undefined"){ 
				if(funcion != null && typeof funcion === 'function'){ funcion(request.result); } 
			} else {
				if(funcion != null && typeof funcion === 'function'){ funcion(null); } 
			}
		};
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion(null); }
	}
}

_indexedDB.prototype.readAll = function(table, funcion){
	console.log('_indexedDB -> readAll');
	data = [];
	if(this.dbIn != null){
		console.log("_indexedDB -> readAll -> db");
		var objectStore = this.dbIn.transaction([table], 'readonly').objectStore(table);
		objectStore.openCursor().onsuccess = function(event) {
			//console.log("_indexedDB -> readAll -> db -> success");
			var cursor = event.target.result;
			if (cursor) {
				data.push(cursor.value);
				cursor.continue();
			} else { 
				console.log("_indexedDB -> readAll -> db -> success -> finish");
				if(funcion != null && typeof funcion === 'function'){ funcion(data); }
			}
		};
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion(data); }
	}
}

_indexedDB.prototype.removeData = function(table, id, funcion) {
	console.log('_indexedDB -> removeData');
	if(this.dbIn != null){
		console.log("_indexedDB -> removeData -> db");
		var request = this.dbIn.transaction([table], "readwrite").objectStore(table).delete(id);
		request.onsuccess = function(event) {
			console.log("_indexedDB -> removeData -> db -> success");
			if(funcion != null && typeof funcion === 'function'){ funcion(true); }
		};
		request.onerror = function(event) {
			console.log("_indexedDB -> removeData -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion(false); }
		};
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion(false); }
	}
}

_indexedDB.prototype.removeAll = function(table, funcion) {
	console.log('_indexedDB -> removeAll');
	if(this.dbIn != null){
		console.log("_indexedDB -> removeAll -> db");
		var request = this.dbIn.transaction([table], "readwrite").objectStore(table).clear();
		request.onsuccess = function(event) {
			console.log("_indexedDB -> removeAll -> db -> success");
			if(funcion != null && typeof funcion === 'function'){ funcion(true); }
		};
		request.onerror = function(event) {
			console.log("_indexedDB -> removeAll -> db -> error");
			if(funcion != null && typeof funcion === 'function'){ funcion(false); }
		};
	} else {
		if(funcion != null && typeof funcion === 'function'){ funcion(false); }
	}
}
		function tablaJSON(config){
	this.tabla = null;
	this.obj = null;
	this.base = (config.hasOwnProperty('base'))?config["base"]:null; 
	this.columns = (config.hasOwnProperty('columns'))?config["columns"]:[]; 
	this.columns_type = (config.hasOwnProperty('columns_type'))?config["columns_type"]:{}; 
	this.columns_ver = (config.hasOwnProperty('columns_ver'))?config["columns_ver"]:{}; 
	
	this.arr = (config.hasOwnProperty('arr'))?config["arr"]:[];
	this.foreign = (config.hasOwnProperty('foreign'))?config["foreign"]:[];
	this.permisos = (config.hasOwnProperty('permissions'))?config["permissions"]:{
		"create" : ["1"],
		"read" : ["1"],
		"update" : ["1"],
		"delete" : ["1"]
	};
	
	this.tabla_orden = (config.hasOwnProperty('tabla_orden'))?config["tabla_orden"]:[ 0, "asc" ];
	
	this.ajax = (config.hasOwnProperty('ajax'))?config["ajax"]:{
		"save" : "tablaJSON.php",
		"file" : "tablaJSONFile.php",
		"other" : "tablaJSON.php",
		"loadData" : "tablaJSON.php"
	};
	this.txt = {
		"activar" : {
			"1": "activar",
			"0": "desactivar"
		},
		"activado" : {
			"0": "desactivado",
			"1": "activado"
		}
	}
	this.onEvent = (config.hasOwnProperty('onEvent'))?config["onEvent"]:{
		"update" : null
	};
}

tablaJSON.prototype.resize = function() {
	var instancia = this;
	setTimeout(function(){ 
		scripts_resize();
	}, 100);
}

tablaJSON.prototype.init = function() {
	var instancia = this;
	instancia.forma();
	instancia.table();

	$("ul.nav.int a").each(function(index, element) {
        $(this).unbind("click").bind("click", function(){
			instancia.nav($(this).attr("data-view"));
			return false;
		});
    });
}

tablaJSON.prototype.nav = function(vista){
	var instancia = this;
	$(".view.datos, .view.formulario").hide();
	$("ul.nav.int a").removeClass("activo");
	switch(vista){
		case "datos":
			ele = ".view.datos";
			break;
		case "forma":
			ele = ".view.formulario";
			instancia.forma();
			$('html, body').animate({
				scrollTop: $(ele).offset().top
			}, 'fast');
			break;
		case "ver":
			ele = ".view.ver";
			$('html, body').animate({
				scrollTop: $(ele).offset().top
			}, 'fast');
			break;
	}
	$(ele).show();
	$('ul.nav.int a[data-view="' + vista + '"]').addClass("activo");
	instancia.resize();
}

tablaJSON.prototype.forma = function(){
	var instancia = this;
	this.obj = null;
	this.arr = form_clean(instancia.arr);
	form_init(instancia.arr);
	
	$("#btn_guardar").unbind('click').bind('click', function(){
		instancia.validar();
		return false;
	});	
	$("#btn_limpiar").unbind('click').bind('click', function(){
		instancia.forma();
		return false;
	});	
}

tablaJSON.prototype.validar = function(){
	var instancia = this;
	
	respuesta = form_validar(instancia.arr);
	if(respuesta.i == 0){ 
		instancia.servicio(respuesta.valores); 
	} else {
		if(respuesta.hasOwnProperty('alerta')){ 
			lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>' + respuesta.alerta, {
				"cancelar" : {
					"txt": "Ok",
					"fn": null
				} 
			}, {});
			event_google_analytics(instancia.base, 'validar', 'error');
		}
	}
}

tablaJSON.prototype.servicio = function(valores){
	var instancia = this;

	event_google_analytics(instancia.base, 'servicio', 'iniciar');	
	var properties = {};
	var callbacks = {};

	var action = "ins";
	if(instancia.obj != null){ 
		properties["id" + instancia.base] = instancia.obj["id" + instancia.base];
		action = "upd";
	}
	properties["action"] = action;
	
	valores = form_input_valores(valores, instancia.arr);
	for(x in valores){ 
		var valor = valores[x];
		if(valor != null && valor.constructor === Object){ valor = JSON.stringify(valor); }
		properties[x] = valor; 
	}
	callbacks["ajax"] = instancia.ajax["save"];
	callbacks["ok"] = function(respuesta){		
		event_google_analytics(instancia.base, 'servicio', 'ok');
		
		var funcion = function(response){
			var html = '<div align="center"><b>Se guardo la información correctamente</b></div>';
			if(response != null && response.hasOwnProperty('msj')){
				if(response["ok"] != response["total"]){ 
					html = '<div align="center"><p><b>Se guarda la información pero con los siguientes errores:</b></p></div>' + '<p>' + response["msj"] + '</p>';
				}
			}
			lightbox_abrir(
				html, 
				{
					"aceptar" : {
						"txt": "Ok",
						"fn": function(){ 
							instancia.forma();
							instancia.table();	
						}
					}	
				}, 
				{}
			);
		}
		var files = form_input_file_enviar(instancia.arr);
		if(Object.keys(files).length > 0){
			var data = {};
			if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
				data["id"] = sesion_data["id"]; 
				data["token"] = sesion_data["token"]; 
				data["dispositivo"] = sesion_data["dispositivo"]; 
				data["perfil"] = sesion_data["perfil"]; 
			} else {
				data["token"] = "";
			}
			
			data["base"] = instancia.base;
			data["id" + instancia.base] = respuesta.id
			data["action"] = 'upload';
			data["base"] = instancia.base;
			data["base_arr"] = "indicadores";
			ajax_archivos(0, data, files, url_sitio + "ajax/sitio/" + instancia.ajax["file"], funcion, false);
		} else { funcion(null); }		
	};
	instancia.ajax_enviar(properties, callbacks);
}

tablaJSON.prototype.get = function(id, callback){
	var instancia = this;

	if(!sesion_permisos(instancia.permisos["read"])){ return false; }
	
	var properties = {};
	var callbacks = {};
	
	properties["action"] = "get";
	properties["id" + instancia.base] = id;
	
	callbacks["ajax"] = instancia.ajax["other"];
	callbacks["ok"] = function(respuesta){
		event_google_analytics(instancia.base, 'get', 'ok');
		instancia.nav("forma");
		if(callback != null  && typeof callback === 'function') { callback(respuesta); }
	};
	
	instancia.ajax_enviar(properties, callbacks);
}

tablaJSON.prototype.active = function(id, status, callback){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["create"])){ return false; }

	var properties = {};
	var callbacks = {};

	properties["action"] = "act";
	properties["id" + instancia.base] = id;
	properties["status"] = status;

	callbacks["ajax"] = instancia.ajax["other"];
	callbacks["ok"] = function(respuesta){
		event_google_analytics(instancia.base, 'act', 'ok');
		var html = '<div align="center"><b>Se ha ' + instancia.txt.activado[status] + ' la información correctamente</b></div>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						instancia.forma();
						instancia.table();	
						if(callback != null  && typeof callback === 'function') { callback(); }
					}
				}	
			}, 
			{}
		);
	};

	instancia.ajax_enviar(properties, callbacks);	
}

tablaJSON.prototype.delete = function(id, callback){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["delete"])){ return false; }

	var properties = {};
	var callbacks = {};

	properties["action"] = "del";
	properties["id" + instancia.base] = id;
	
	callbacks["ajax"] = instancia.ajax["other"];
	callbacks["ok"] = function(respuesta){
		event_google_analytics(instancia.base, 'del', 'ok');
		var html = '<div align="center"><b>Se elimino la información correctamente</b></div>';
		lightbox_abrir(
			html, 
			{
				"aceptar" : {
					"txt": "Ok",
					"fn": function(){ 
						instancia.forma();
						instancia.table();	
						if(callback != null  && typeof callback === 'function') { callback(); }
					}
				}	
			}, 
			{}
		);
	};

	instancia.ajax_enviar(properties, callbacks);	
}

tablaJSON.prototype.loadData = function(action, input, type, vars, callback, columns){
	var instancia = this;	
	var base = instancia.base;

	var properties = {};
	var callbacks = {};

	properties["action"] = action;

	if(vars !== undefined && vars != null  && typeof vars == "object") {
		for(x in vars){ 
			//properties[x] = vars[x]; 
			
			var valor = vars[x]; 
			if(valor != null && valor.constructor === Object){ 
				valor = JSON.stringify(valor); 
			} else if(Array.isArray(valor)){
				valor = JSON.stringify(valor);	
			}
			properties[x] = valor;
		}
	}

	if(action == "filter"){
		properties["col"] = columns;
	}

	callbacks["ajax"] = instancia.ajax["loadData"];
	callbacks["ok"] = function(data){
		var values = [];
		if(type == "data"){
			for(var i in data[base]){
				values.push(data[base][i]); 
			}
		} else if(type == "select"){
			$(input + ' option:not(:first)').remove();
			for(var i in data[base]){
				$(input).append('<option value="' + data[base][i]["id" + base] + '">' + data[base][i][base + '_data'][base] + '</option>');
				values.push(data[base][i]); 
			}
			
			var attr = $(input).attr('data-value');
			if (typeof attr !== 'undefined' && attr !== false && attr !== "") {
				$(input).val(attr); 
			}
			
		} else if(type == "tokens"){
			for(var i in data[base]){
				var str = data[base][i][base + '_data'][base];
				if(columns !== undefined && columns != null  && typeof columns == "object") {
					str = { "id" : data[base][i]["id" + base] };
					for(var j in columns){
						str["name" + (( j == 0 )?'':j)] = data[base][i][base + '_data'][columns[j]];
					}
				}
				values.push(str); 
			}
		} else if(type == "radio" || type == "checkbox"){
			var html = '';
			for(var i in data[base]){
				data[base][i][base + '_data'][base]
				html += '<label> <input type="radio" name="input_' + input + '" value="' + data[base][i]["id" + base] + '" /> ' + data[base][i][base + '_data'][base] + '</label>';

				values.push({ 
					"id" : data[base][i]["id" + base],
					"name" : data[base][i][base + '_data'][base]
				}); 
			}
			$('#div_' + input).html(html);
		}
		if(callback != null  && typeof callback === 'function') { callback(values); }
	};
	
	instancia.ajax_enviar(properties, callbacks);
}

tablaJSON.prototype.ajax_enviar = function(properties, callbacks){
	var instancia = this;	
	var data = new FormData();
	if(sesion_data.hasOwnProperty('id') && sesion_data["id"] != null){
		data.append("id", sesion_data["id"]); 
		data.append("token", sesion_data["token"]); 
		data.append("dispositivo", sesion_data["dispositivo"]); 
		data.append("perfil", sesion_data["perfil"]);
	} else {
		data.append("token", ""); 
	}
	
	data.append("base", instancia.base);
	if(properties !== undefined && properties != null  && typeof properties == "object") {
		for(x in properties){ 
			data.append(x, properties[x]); 
		}
	}
	
	ajax_enviar(
		data, 
		url_sitio + "ajax/sitio/" + callbacks["ajax"],
		{
			"ok" : callbacks["ok"],
		},
		{}
	);
}

tablaJSON.prototype.table = function(){
	var instancia = this;
	instancia.nav("datos");	
	if(!sesion_permisos(instancia.permisos["read"])){ return false; }

	var columnas = [];
	columnas.push({ data: 'id' + instancia.base, title: "ID", "orderable": true, className: "dt-head-center dt-body-left" });
	for(i in instancia.columns){
		for(j in instancia.arr){
			var columna = instancia.arr[j]
			if(instancia.columns[i] == columna['key']){
				columnas.push(instancia.table_data_column(columna, j));		
			}
		}
	}
	if(instancia.base == "usuario"){		
		//columnas.push({ data: 'municipio', title: "Municipio", "orderable": false, className: "dt-head-center dt-body-left" });
	}
	
	columnas.push({ data: 'acciones', title: "Acciones", "orderable": false, className: "dt-head-center dt-body-center no_wrap" });
		
	if(instancia.tabla != null){ 	
		instancia.tabla.clear();
		instancia.tabla.destroy();
		$('#table_data').empty();
		instancia.tabla = null;
	}

	instancia.tabla = $('#table_data').DataTable({
		"language": datatable_lang,
		"pageLength": 50,
		responsive: true,
		columns: columnas,
		ordering: true,
		//order: [[ 0, "asc" ]],
		order: [instancia.tabla_orden],
		processing: true,
		serverSide: true,
		serverMethod: 'post',
		"fnDrawCallback": function(){
			instancia.resize();
		},
		"fnInitComplete": function(){
			instancia.resize();
		},
		ajax: {
			url: url_sitio + "ajax/sitio/" + instancia.ajax["other"],
			method: "POST",
			data: {
				"action" : "datatable", 
				"id" : sesion_data["id"],
				"token" : sesion_data["token"],
				"dispositivo" : sesion_data["dispositivo"],
				"perfil" : sesion_data["perfil"],
				"base" : instancia.base,
				"cols" : JSON.stringify(instancia.columns),
				"cols_type" : JSON.stringify(instancia.columns_type),
				"foreign" : JSON.stringify(instancia.foreign)
			},
		}
	});	
	
	$('#table_data').off('click', '.a_activo');
	$('#table_data').off('click', '.a_ver');
	$('#table_data').off('click', '.a_editar');
	$('#table_data').off('click', '.a_eliminar');
	$('#table_data').on('click', '.a_ver', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		instancia.consultar(id);
		return false;
	});
	$('#table_data').on('click', '.a_editar', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		var txt = $(this).attr("data-txt");
		instancia.editar(id, txt);
		return false;
	});
	$('#table_data').on('click', '.a_activo', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		var txt = $(this).attr("data-txt");
		var estatus = $(this).attr("data-status");
		instancia.activar(id, txt, estatus);
		return false;
	});
	$('#table_data').on('click', '.a_eliminar', function (evt) {
		var id = parseInt($(this).attr("data-id"), 10);
		var txt = $(this).attr("data-txt");
		instancia.eliminar(id, txt);
		return false;
	});
	instancia.resize();
}

tablaJSON.prototype.table_data_column = function(columna, index){
	var instancia = this;
	var tipo = "string";
	if(columna['validar'] == "entero"){
		
	} else if(columna['validar'] == "numero"){
		tipo = "num";
	}
	
	return { 
		"data": columna['key'], 
		"title": columna['nombre'], 
		"type":tipo,
		"className": (columna.hasOwnProperty("className")?columna['className']:"dt-head-center dt-body-left"),
		"render": function(data, type, row) {
			return instancia.table_data_render({
				'data' : data, 
				'type' : type, 
				'row' : row,
				'index' : index
			});
		},
	}
}

tablaJSON.prototype.table_data_render = function(data){
	var instancia = this;
	var columna = instancia.arr[data["index"]]

	if(columna.hasOwnProperty('valores') && columna["valores"] != null  && typeof columna["valores"] == "object"){
		if(data["data"] != null && data["data"].constructor === Object){ 
			if( columna["tipo"] == "tokens" || columna["tipo"] == "radio" || columna["tipo"] == "check" ){
				var str = [];
				for(k in data["data"]["v"]){		
					var index = columna["valores"].findIndex(function(elemento){ 
						if(data["data"]["v"][k].constructor === Object){
							return elemento.id === data["data"]["v"][k]["id"]; 
						} else {
							return elemento.id === data["data"]["v"][k]; 
						}
					});
					if(columna["valores"].hasOwnProperty(index)){
						str.push(columna["valores"][index]["name"]); 
					}
					
				}
				data.data = str.join(', ');
			}
		} 
	} else {
		
		if(columna['validar'] == "entero"){
			
		} else if(columna['validar'] == "numero"){
			data.data = parseFloat(data["data"]);
		}
		
	}
	return data.data;
}

tablaJSON.prototype.consultar = function(id){
	var instancia = this;
	instancia.get(id, function(data){
		instancia.nav("ver");
		
		$("#view_data").html("");
		instancia.obj = data[instancia.base];
		for(x in instancia.obj[instancia.base + '_data']){
			var index = instancia.columns_ver.findIndex(function(elemento){ return elemento.key === x; });
			if(index >= 0){ 
				$("#view_data").append('<div class="col margin-yb"><b class="big">' + instancia.columns_ver[index].nombre + ': </b><br>' + instancia.obj[instancia.base + '_data'][x] + '</div>');
			}
		}
		
		instancia.resize();
	});
}

tablaJSON.prototype.editar = function(id, txt){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["create"])){ return false; }

	lightbox_abrir('<h1>Editar</h1>¿Estas seguro de editar el registro: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b>', {
		"aceptar" : {
			"txt": "Editar",
			"fn": function(){
				instancia.get(id, function(data){
					lightbox_cerrar();
					instancia.forma();
					
					instancia.obj = data[instancia.base];

					if(instancia.onEvent["update"] != null  && typeof instancia.onEvent["update"] === 'function') {
						instancia.onEvent["update"]();
					}

					for(x in instancia.obj[instancia.base + '_data']){
						var index = instancia.arr.findIndex(function(elemento){ return elemento.key === x; });
						if(index >= 0){ 
							if(instancia.arr[index]['tipo'] == "tokens"){ 
								var str = {v:[]};
								for(k in instancia.obj[instancia.base + '_data'][x]["v"]){
									var index2 = instancia.arr[index]["valores"].findIndex(function(elemento){ 
										return elemento.id === instancia.obj[instancia.base + '_data'][x]["v"][k]["id"]; 
									});
									if(index2 >= 0){ 
										str.v.push(instancia.arr[index]["valores"][index2]); 
									}
								}
								instancia.arr[index]["value"] = str;
							} else {
								instancia.arr[index]["value"] = instancia.obj[instancia.base + '_data'][x]; 
							}
						}
					}
					form_init(instancia.arr);
				});
			}
		},
		"cancelar" : {
			"txt": "Cerrar",
			"fn": null
		} 
	}, {});
}

tablaJSON.prototype.eliminar = function(id, txt){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["delete"])){ return false; }
	lightbox_abrir('<h1>Eliminar</h1><p>¿Estas seguro de eliminar el registro: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b></p>Sí eliminas este registro no podrás recuperarlo posteriormente.', {
		"aceptar" : {
			"txt": "Eliminar",
			"fn": function(){
				instancia.delete(id, function(){
					
				});
			}
		},
		"cancelar" : {
			"txt": "Cerrar",
			"fn": null
		} 
	}, {});	
}
tablaJSON.prototype.activar = function(id, txt, estatus){
	var instancia = this;
	if(!sesion_permisos(instancia.permisos["create"])){ return false; }
	var capitalize = instancia.txt.activar[estatus];
	capitalize = capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
	lightbox_abrir('<h1>' + capitalize + '</h1>¿Estas seguro de <b>' + instancia.txt.activar[estatus] + '</b> el registro: <b>' +  txt.replace(/(<([^>]+)>)/gi, "") + '?</b>', {
		"aceptar" : {
			"txt": capitalize,
			"fn": function(){
				instancia.active(id, estatus, function(){
					
				});
			}
		},
		"cancelar" : {
			"txt": "Cerrar",
			"fn": null
		} 
	}, {});	
}
	var langTXT={ingresar:"Por favor, ingrese lo siguiente:",continuar:"Continuar",cerrar:"Cerrar",cerrar_sesion:"cerrando sesión...",cargando:"cargando...",enviando:"enviando...",eliminando:"eliminando...",problemas:"Problemas al comunicarnos con el servidor. Intente nuevamente.",correo_valido:"Correo electrónico válido",mensaje:"Mensaje",contacto_gracias:"Gracias por su mensaje, en breve nos pondremos en contacto con usted.",advertencia:"Advertencia",problemas_enviar:"Problemas al enviar la información.",problemas_dato:"No recibimos ningún dato. Intente nuevamente.",problemas_usuario:"Tuvimos problemas al identificar tu usuario, inicie sesión nuevamente.",problemas_incorrectos:"Datos incorrectos. Intente nuevamente.",problemas_procesar:"Problemas al procesar tu solicitud. Intente nuevamente.",problemas_registrar:"Problemas al registrar los datos. Intente nuevamente.",problemas_login_1:"Cuenta bloqueada. verifique su usuario y contraseña e intente más tarde.",problemas_login_2:"Cuenta bloqueada temporalmente. Intente más tarde.",problemas_login_3:"Usuario y contraseña no coinciden. Intente nuevamente.",problemas_login_4:"No se logró procesar la respuesta. Intente nuevamente.",problemas_registro_1:"Esta dirección de correo electrónico ya se encuentra registrada. Inicie sesión o recupere su password.",cancelar:"Cancelar",reintentar:"Reintentar",iniciar_sesion:"Iniciar sesión",robot_validar:"Debe validar que usted no es un robot.",nueva_contrasena:"La nueva contraseña ha sido enviada a su correo electrónico.",error_contrasena:"No se generó correctamente su nueva contraseña, verifique sus datos e intente nuevamente. Si persiste el problema ponte en contacto con nosotros.",enviando_imagenes:"enviando imagenes...",enviando_archivos:"enviando archivos...",de:"de",enviando_archivo:"Enviando archivo",guardando_archivo:"Guardando archivo.",tiempo_archivo:"Puede tardar un tiempo.",no:"No",sesion_finalizo:"Su sesión se finalizó por inactividad. Para continuar inicie sesión nuevamente.",siguiente:"Siguiente",permisos_geolocalizacion:"Para mejorar tu experiencia debes aceptar el permiso de geolocalización",permisos_sin_geolocalizacion:"Para mejorar tu experiencia debes cambiar los ajustes de ubicación predeterminados",permisos_camara:"Para mejorar tu experiencia debes aceptar el permiso de cámara",permisos_sin_camara:"Para mejorar tu experiencia debes cambiar los ajustes de camara predeterminados",solo_numeros:"(sólo números)",salir:"Salir"},webTXT={txt_bienvenido:"Bienvenidos",txt_ingresa_edad:"Por favor ingrese su año de nacimiento",txt_edad_legal:"Debes ser mayor de edad para ingresar a este sitio.",txt_recordarme:"Recuérdame",txt_entrar:"Entrar",txt_dia:"Día",txt_mes:"Mes",txt_anio:"Año",txt_permiso_camara:"<h1>Para continuar debes permitir el siguiente permiso:</h1> Acceder a la camara para captura de imagen o video",txt_compatible:"Este navegador no es compatible",txt_no_camara:"No se encontró una cámara web activa.",txt_uso_camara:"El navegador intenta acceder a la cámara web pero ya está en uso.",txt_hardware_camera:"El hardware disponible no puede satisfacer el servicio.",txt_denego_camara:"Denegó (o ha denegado previamente) el acceso a la cámara web.",txt_saludar:"¡Hola! Soy Robot, tu asistente virtual.",txt_despedirse:"¡Hasta luego!"},datatable_lang={sProcessing:"Procesando...",sLengthMenu:"Mostrar _MENU_ registros",sZeroRecords:"No se encontraron resultados",sEmptyTable:"Ningún dato disponible en esta tabla",sInfo:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",sInfoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",sInfoFiltered:"(filtrado de un total de _MAX_ registros)",sInfoPostFix:"",sSearch:"Buscar:",sUrl:"",sInfoThousands:",",sLoadingRecords:"Cargando...",oPaginate:{sFirst:"Primero",sLast:"Último",sNext:"Siguiente",sPrevious:"Anterior"},oAria:{sSortAscending:": Activar para ordenar la columna de manera ascendente",sSortDescending:": Activar para ordenar la columna de manera descendente"}},scripts_w=0,scripts_task_in_progress=false;scripts_width();$(document).ready(function(){scripts_init()});$(window).on('load',function(){scripts_load()});$(window).on('resize',function(){scripts_width();scripts_resize()})
function scripts_init(){sesion_init();sesion_verificar(function(){console.log('fnTrue');if(sesion_verificar_ini!=null&&typeof sesion_verificar_ini==='function')sesion_verificar_ini()},function(){console.log('fnFalse');if(sesion_verificar_no!=null&&typeof sesion_verificar_no==='function')sesion_verificar_no()});$('.btn_cerrar_sesion').each(function(index,element){$(this).unbind('click').bind('click',function(){sesion_cerrar_aviso();return false})});$(".hamburger").click(function(){if($(".hamburger ").hasClass("is-active")){$(".hamburger").removeClass("is-active");$(".contenido .header .menu.principal").hide()}else{$(".hamburger").addClass("is-active");$(".contenido .header .menu.principal").show()};return false})}
function scripts_load(){scripts_resize()}
function scripts_width(){scripts_w=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}
function scripts_resize(){console.log('scripts_resize');fn_renglon_iguales('.renglon.iguales .renglon.iguales .renglon.iguales','.col');fn_renglon_iguales('.renglon.iguales .renglon.iguales','.col');fn_renglon_iguales('.renglon.iguales','.col');if(scripts_w>980){$(".contenido .header .menu.principal").show();$(".hamburgesa").hide();$(".hamburger ").removeClass("is-active")}else{$(".contenido .header .menu.principal").hide();$(".hamburgesa").show();$(".hamburger ").removeClass("is-active")}}
function fn_renglon_iguales(ele,tag){$(ele).each(function(index,element){var w=0,attr=$(this).attr("data-w");if(typeof attr!=='undefined'&&attr!==false)w=parseInt($(this).attr("data-w"),10);var altura=0;$(this).find(' > '+tag).css('height','auto');if(scripts_w>w){$(this).find(' > '+tag).each(function(index,element){if($(this).height()>altura)altura=$(this).height()});$(this).find(' > '+tag).height(altura)}})}
function fn_misma_altura(ele,tag){$(ele).each(function(index,element){var w=0,attr=$(this).attr("data-w");if(typeof attr!=='undefined'&&attr!==false)w=parseInt($(this).attr("data-w"),10);var altura=0;$(this).find(tag).css('height','auto');if(scripts_w>w){$(this).find(tag).each(function(index,element){if($(this).height()>altura)altura=$(this).height()});$(this).find(tag).height(altura)}})}
function event_google_analytics(pagina,boton,descripcion){console.log(pagina,boton,descripcion);if(typeof gtag!=='undefined'&&gtag!==null)gtag('event',pagina,{event_category:boton,event_label:descripcion})}
function setCookie(cname,cvalue,exdays){var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1e3));var expires="expires="+d.toUTCString();document.cookie=cname+"="+btoa(cvalue)+";"+expires+";path=/; SameSite=None; Secure"}
function getCookie(cname){var name=cname+"=",decodedCookie=decodeURIComponent(document.cookie),ca=decodedCookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1);if(c.indexOf(name)==0)return atob(c.substring(name.length,c.length))};return""};window.onbeforeunload=scripts_confirm_exit
function scripts_confirm_exit(){if(scripts_task_in_progress)return"Some task is in progress. Are you sure, you want to close?"};var ajax_config={},ajax_ok=0
function ajax_init(){ajax_config={intentos:0,max_intentos:1,ligthbox:true,file:false,timeout:25e3}}
function ajax_enviar(data,file,callback,config){ajax_init();for(key in ajax_config)if(config.hasOwnProperty(key))ajax_config[key]=config[key];ajax_enviar_intentos(data,file,callback)}
function ajax_enviar_intentos(data,file,callback){ajax_config.intentos++;if(ajax_config.file)ajax_config.timeout=0;if(ajax_config.ligthbox)lightbox_abrir('<div class="align-center">enviando...</div>',{},{});if(ajax_config.intentos<=ajax_config.max_intentos){$.ajax({type:"POST",url:file,data:data,processData:false,contentType:false,timeout:ajax_config.timeout,dataType:"json",success:function(data){if(ajax_respuesta(data)){if(ajax_config.ligthbox)lightbox_cerrar();if(callback!=null&&callback.hasOwnProperty('ok')&&typeof callback.ok==='function')callback.ok(data)}else if(callback!=null&&callback.hasOwnProperty('err')&&typeof callback.err==='function')callback.err(data)},error:function(errMsg){ajax_enviar(data,file,callback,{intentos:ajax_config.intentos})},progress:function(e){if(ajax_config.file)if(e.lengthComputable)ajax_progress(Math.round((e.loaded/e.total)*100),'.lightbox_caja.activo .estatus')}})}else{var funcion=function(){ajax_enviar(data,file,callback,{})};lightbox_abrir('<div class="align-center big margin-yb"><b>Advertencia</b></div>Problemas al enviar la información.',{aceptar:{txt:"Reintentar",fn:funcion},cancelar:{txt:"Cancelar",fn:null}},{})}}
function ajax_respuesta(data){var exito=false,html="",botones={aceptar:{txt:"Continuar",fn:null}},config={};if(data!=null&&data.hasOwnProperty('ok')){var ok=parseInt(data.ok,10);switch(ok){case 1:exito=true;break;case 0:html='<div class="align-center big margin-yb"><b>Advertencia</b></div>Problemas al procesar tu solicitud. Intente nuevamente.';break;case -1:html='<div class="align-center big margin-yb"><b>Advertencia</b></div>Datos incorrectos. Intente nuevamente.';break;case -2:html='<div class="align-center big margin-yb"><b>Advertencia</b></div>Tuvimos problemas al identificar tu usuario, inicie sesión nuevamente.';botones={aceptar:{txt:"Iniciar sesión",fn:function(){sesion_cerrar(sesion_url)}},cancelar:{txt:"Cerrar",fn:function(){sesion_cerrar_sin()}}};break;case -3:html='<div class="align-center big margin-yb"><b>Advertencia</b></div>No recibimos ningún dato. Intente nuevamente.';break;case -4:html='<div class="align-center big margin-yb"><b>Advertencia</b></div>Debe validar que usted no es un robot.';break;case -5:html='<div class="align-center big margin-yb"><b>Advertencia</b></div>El usuario actualmente se encuentra registrado, intenta con otro o recupera tu contraseña para acceder.';break;case -6:html='<div class="align-center big margin-yb"><b>Advertencia</b></div>El usuario ingresado ya se encuentra registrado, intenta con otro.';break;case -7:var error=new Array(),error_txt='';if(data.hasOwnProperty('error'))for(x in data.error)error_txt+=data.error[x]+'.<br>';html='<div class="align-center big margin-yb"><b>Advertencia</b></div><p><b>Problemas al procesar los datos.</b></p>'+error_txt;break;case -8:html='<div class="align-center big margin-yb"><b>Mensaje</b></div>No se realizó ningún cambio en la información.';break;case -9:html='<div class="align-center big margin-yb"><b>Advertencia</b></div>Usuario y contraseña no coinciden. Intente nuevamente.';break;default:html='<div class="align-center big margin-yb"><b>Advertencia</b></div>Problemas al comunicarnos con el servidor. Intente nuevamente.';break}}else html='<div class="align-center big margin-yb"><b>Advertencia</b></div>Problemas al comunicarnos con el servidor. Intente nuevamente.';if(html!='')lightbox_abrir(html,botones,config);return exito}
function ajax_progress(pct,ele){var html="";if(pct<100){html='<div class="align-center">Enviando archivo:<br><b>'+pct+'%</b></div>'}else html='<div class="align-center">Guardando archivo.<br>Puede tardar un tiempo.</div>';$(ele).html(html)}
function ajax_archivos(pos,data,files,url,callback,avisar){if(pos==0)ajax_ok=0;if(pos<files.length){var datos=new FormData();for(var key in data)datos.append(key,data[key]);datos.append("name",files[pos].name);datos.append("file",files[pos].file);datos.append("index",files[pos].index);datos.append("key",files[pos].key);var fun=function(respuesta){if(respuesta!=null&&respuesta.hasOwnProperty('ok')&&parseInt(respuesta.ok,10)==1)ajax_ok++;ajax_archivos(++pos,data,files,url,callback)};ajax_enviar(datos,url,{ok:fun,err:fun},{file:true,ligthbox:false});lightbox_abrir('<div class="align-center">Enviando archivo <b>'+(pos+1)+' de '+files.length+'</b>.</div><div class="estatus" align="center">--<br>--</div>',{},{})}else{var respuesta={total:files.length,ok:ajax_ok,msj:"Se han subido <b>"+ajax_ok+" de "+files.length+" archivo"+((files.length!=1)?"s":"")+"</b>."};if(avisar){lightbox_abrir('<div class="align-center">'+respuesta.msj+'</div>',{aceptar:{txt:"Ok",fn:function(){lightbox_cerrar();callback(respuesta)}}},{})}else callback(respuesta)}};var speak_voice=[],speak_voice_current=0,speak_synth=null
function speak_voces(lang,callback){speak_voice_current=0;speak_voice=[];var voice=[],voices_arr=["es-MX","es_US","en-US"];for(var i=0;i<voices_arr.length;i++)if(voices_arr[i].indexOf(lang)>=0)voice.push(voices_arr[i]);if(window.speechSynthesis){var iniciar=function(voices){for(var i=0;i<voices.length;i++)for(var j=0;j<voice.length;j++)if(voice[j]==voices[i].lang)speak_voice.push(voices[i]);if(speak_voice.length>0)console.log(' speak_voces -> '+speak_voice);if(callback!=null&&typeof callback==='function')callback()},voices=window.speechSynthesis.getVoices();if(voices.length!==0){iniciar(voices)}else window.speechSynthesis.addEventListener("voiceschanged",function(){voices=window.speechSynthesis.getVoices();iniciar(voices)})}}
function speak_hablar(lang,ele,callback){console.log('speak_hablar');var gender=null;if(speak_voice.length==0)speak_voces(lang);if(speak_synth!=null)speak_synth.cancel();if(speak_voice.length>0){console.log('speak_hablar -> '+speak_voice[speak_voice_current].lang);gender=speak_voice[speak_voice_current].name;speak_synth=window.speechSynthesis;utterance=new SpeechSynthesisUtterance();utterance.text=$(ele).text();utterance.lang=speak_voice[speak_voice_current].lang;utterance.rate=1;utterance.voice=speak_voice[speak_voice_current];speak_synth.speak(utterance);speak_voice_current++;if(speak_voice.length<=speak_voice_current)speak_voice_current=0;utterance.onboundary=function(event){if(callback!=null&&callback.hasOwnProperty('fnBoundary')&&callback.fnBoundary!=null&&typeof callback.fnBoundary==='function')callback.fnBoundary(event.charIndex)};utterance.onstart=function(event){if(ele!=null)$(ele).addClass("speak_hablar");if(callback!=null&&callback.hasOwnProperty('fnStart')&&callback.fnStart!=null&&typeof callback.fnStart==='function')callback.fnStart()};utterance.onresume=function(event){if(ele!=null)$(ele).addClass("speak_hablar");if(callback!=null&&callback.hasOwnProperty('fnResume')&&callback.fnResume!=null&&typeof callback.fnResume==='function')callback.fnResume()};utterance.onend=function(event){if(ele!=null)$(ele).removeClass("speak_hablar");if(callback!=null&&callback.hasOwnProperty('fnEnd')&&callback.fnEnd!=null&&typeof callback.fnEnd==='function')callback.fnEnd()};utterance.onerror=function(event){if(ele!=null)$(ele).removeClass("speak_hablar");if(callback!=null&&callback.hasOwnProperty('fnError')&&callback.fnError!=null&&typeof callback.fnError==='function')callback.fnError()};utterance.onpause=function(event){if(ele!=null)$(ele).removeClass("speak_hablar");if(callback!=null&&callback.hasOwnProperty('fnPause')&&callback.fnPause!=null&&typeof callback.fnPause==='function')callback.fnPause()}};return gender}
function speak_detener(){if(speak_synth!=null)speak_synth.cancel()};var sesion_data={},sesion_url='',_iDB=null,_iDBConfig=_iDB_config;_iDBConfig.version=1;_iDBConfig.database='SanLuisPotosi';var sesion_db=false,sesion_verificar_ini=null,sesion_verificar_no=null
function sesion_init(){sesion_url=url_sitio+'iniciar-sesion';sesion_data={id:null,token:null,dispositivo:null,perfil:null}}
function sesion_elementos(logeado){console.log('sesion_botones',logeado);if(logeado){$('*[data-sesion="true"]').each(function(index,element){var attr=$(this).attr('se-data');if(typeof attr!=='undefined'&&attr!==false){$(this).css('display',attr)}else $(this).show()});$('*[data-sesion="false"]').each(function(index,element){$(this).hide()})}else{$('*[data-sesion="true"]').each(function(index,element){$(this).hide()});$('*[data-sesion="false"]').each(function(index,element){var attr=$(this).attr('se-data');if(typeof attr!=='undefined'&&attr!==false){$(this).css('display',attr)}else $(this).show()})}}
function sesion_permisos(permitir_arr){var permiso=false;for(var i in permitir_arr)if(parseInt(sesion_data.perfil,10)==parseInt(permitir_arr[i],10))permiso=true;return permiso}
function sesion_verificar(fnTrue,fnFalse){console.log('sesion_verificar');sesion_elementos(false);_iDBConfig.inicial=function(respuesta){if(respuesta!==false)if(respuesta.ok==1){_iDB.readData("preferencia","01",function(elemento){if(elemento!=null){sesion_db=true;sesion_data.id=elemento.sesion_id;sesion_data.token=elemento.sesion_token;sesion_data.dispositivo=elemento.sesion_dispositivo;sesion_data.perfil=elemento.sesion_perfil;sesion_token(function(){sesion_elementos(true);if(fnTrue!=null&&typeof fnTrue==='function')fnTrue()},function(){sesion_limpiar(function(){sesion_aviso()})},false)}else if(fnFalse!=null&&typeof fnFalse==='function')fnFalse()})}else if(respuesta.ok==0&&respuesta.hasOwnProperty('accion')&&respuesta.accion=='reload'){lightbox_abrir(respuesta.msj,{aceptar:{txt:"Recargar",fn:function(){window.location.reload()}}},{})}else if(fnFalse!=null&&typeof fnFalse==='function')fnFalse()};_iDB=new _indexedDB(_iDBConfig);_iDB.init(true)}
function sesion_limpiar(funcion){console.log('sesion_limpiar');sesion_init();sesion_elementos(false);_iDB.removeAll("preferencia",function(){_iDB.removeAll("avisos",function(){if(funcion!=null&&typeof funcion==='function')funcion()})})}
function sesion_cerrar_aviso(){console.log('sesion_cerrar_aviso');lightbox_abrir('<h1>Cerrar sesión</h1>¿Estas seguro de salir?',{aceptar:{txt:"Cerrar sesión",fn:function(){sesion_cerrar(url_sitio)}},cancelar:{txt:"Regresar",fn:null}},{})}
function sesion_cerrar(url){console.log('sesion_cerrar');var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);sesion_limpiar(null)}else data.append("token","");var funcion=function(respuesta){if(url!=null){window.location.href=url}else window.location.reload()};lightbox_abrir('<div align="center">cerrando sesión...</div>',{},{});ajax_enviar(data,url_sitio+"ajax/gnl/cerrar_sesion.php",{ok:funcion},{ligthbox:false})}
function sesion_cerrar_sin(){var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);sesion_limpiar(null)}else data.append("token","");var funcion=function(respuesta){};ajax_enviar(data,url_sitio+"ajax/gnl/cerrar_sesion.php",{ok:funcion},{ligthbox:false})}
function sesion_aviso(){console.log('sesion_aviso');lightbox_abrir('<h1>Advertencia</h1>Tuvimos problemas al identificar tu usuario, inicie sesión nuevamente.',{aceptar:{txt:"Iniciar sesión",fn:function(){sesion_cerrar(sesion_url)}},cancelar:{txt:"Cerrar",fn:function(){sesion_cerrar_sin()}}},{})}
function sesion_token(fnTrue,fnFalse,light){console.log('sesion_token');var data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);if(light)lightbox_abrir('<div align="center">ingresando...</div>',{},{});ajax_enviar(data,url_sitio+"ajax/gnl/iniciar_token.php",{ok:function(datos){sesion_datos(datos,fnTrue,light)},err:function(datos){sesion_limpiar(null);if(light)lightbox_cerrar();if(fnFalse!=null&&typeof fnFalse==='function')fnFalse(datos)}},{ligthbox:false})}
function sesion_datos(datos,fnTrue,light){console.log('sesion_data');var usuario=datos.usuario;sesion_data.id=parseInt(datos.id,10);sesion_data.token=datos.salt;sesion_data.dispositivo=datos.dispositivo;sesion_data.perfil=datos.perfil;sesion_data.perfil_txt=datos.perfil_txt;sesion_data.txt_perfil=datos.txt_perfil;var data={id:"01",sesion_id:sesion_data.id,sesion_token:sesion_data.token,sesion_dispositivo:sesion_data.dispositivo,sesion_perfil:sesion_data.perfil},funcion=function(){sesion_elementos(true);if(fnTrue!=null&&typeof fnTrue==='function'){fnTrue(light)}else if(light)lightbox_cerrar();$(".txt_perfil").each(function(index,element){$(this).html(datos.perfil_txt+'<br>'+datos.txt_perfil)})};if(!sesion_db){_iDB.addData("preferencia",data,funcion)}else _iDB.updateData("preferencia",data,funcion)};var var_form_archivos={},var_form_file_size=0,var_form_meses={'01':'Enero','02':'Febrero','03':'Marzo','04':'Abril','05':'Mayo','06':'Junio','07':'Julio','08':'Agosto','09':'Septiembre','10':'Octubre','11':'Noviembre','12':'Diciembre','1':'Enero','2':'Febrero','3':'Marzo','4':'Abril','5':'Mayo','6':'Junio','7':'Julio','8':'Agosto','9':'Septiembre'},var_form_passphrase=null,var_form_passphrase_c='secret'
function form_resize(){scripts_resize()}
function form_fecha(fecha){var fecha_txt;fecha=fecha.split(" ");var tiempo=fecha[0],hora=fecha[1];tiempo=tiempo.split("-");hora=hora.split(":");var year=tiempo[0],month=tiempo[1],day=tiempo[2],hours=hora[0],minutes=hora[1],seconds=hora[2],mes_n=var_form_meses[month],formato=day+' '+mes_n+', '+year+'. '+hours+':'+minutes+' hrs.',formato_min=day+' '+mes_n.substring(0,3)+', '+year+'. '+hours+':'+minutes+' hrs.';return{formato:formato,formato_min:formato_min,fecha:fecha[0],hora:fecha[1]}}
function form_validar(objetos){var i=0,alerta="",valores={};for(var j in objetos){var respuesta=form_input_validar(objetos[j]);if(respuesta.ok==true){valores[objetos[j].key]=respuesta.valor}else if(respuesta.ok==false){i=1;alerta+=" - "+respuesta.info+"<br>"}};return{i:i,alerta:alerta,valores:valores}}
function form_calificar(objetos){var ok=0,err=0;for(var j in objetos){var respuesta=form_input_validar(objetos[j]);if(respuesta.ok==true){var r=form_input_calificar(objetos[j],respuesta.valor);if(r.correcto){ok++}else err++}else if(respuesta.ok==false)err++};return{ok:ok,err:err,total:Object.keys(objetos).length,porcentaje:Math.round((ok*100)/Object.keys(objetos).length)}}
function form_input_calificar(objeto,value){var correcto=false,ele=(objeto.hasOwnProperty('ele'))?objeto.ele:null,tipo=(objeto.hasOwnProperty('tipo'))?objeto.tipo:null;switch(tipo){case"text":case"textarea":case"select":break;case"fecha":break;case"file":break;case"switch":break;case"check":break;case"radio":if(value!=null)for(zz in value.v)if($(ele+'[value="'+value.v[zz]+'"]').is(':checked')&&$(ele+'[value="'+value.v[zz]+'"]').attr("data-ok")=="true")correcto=true;break};return{correcto:correcto}}
function form_retroalimentacion(objetos){var resumen={ok:0,err:0,total:0};for(var j in objetos){resumen.total++;var ele=(objetos[j].hasOwnProperty('ele'))?objetos[j].ele:null,respuesta=form_input_validar(objetos[j]),r=form_input_calificar(objetos[j],respuesta.valor),item=$(ele).parents(".item"),retro=$(item).attr("data-retro");$(item).find(".retro").text('');$(item).find(".retro").removeClass("correcto, incorrecto");$(item).find(".retro").hide();if(typeof retro!=='undefined'&&retro!==false){$(item).find(".retro").text(retro)}else retro=null;$(item).find(".retro").show();if(r.correcto){resumen.ok++;$(item).find(".retro").addClass("correcto");if(retro==null)$(item).find(".retro").text("Correcto")}else{resumen.err++;$(item).find(".retro").addClass("incorrecto");if(retro==null)$(item).find(".retro").text("Incorrecto")}};return resumen}
function form_encode(valor){console.log('form_encode',valor);var encrypted=CryptoJS.AES.encrypt(valor,var_form_passphrase);encrypted=encrypted.toString();return encrypted.toString()}
function form_decode(valor){var decrypted=CryptoJS.AES.decrypt(valor,var_form_passphrase);decrypted=decrypted.toString(CryptoJS.enc.Utf8);return decrypted}
function form_values(objetos){var values={};for(var j in objetos){var respuesta=form_input_validar(objetos[j]);if(respuesta.ok)values[objetos[j].key]=respuesta.valor};return values}
function form_input_file_enviar(objetos){var files=[];for(var j in objetos){var objeto=objetos[j],ele=(objeto.hasOwnProperty('ele'))?objeto.ele:null,key=(objeto.hasOwnProperty('key'))?objeto.key:null,tipo=(objeto.hasOwnProperty('tipo'))?objeto.tipo:null;if(tipo=="file"){var unique=$(ele).attr('data-id');for(index in var_form_archivos[unique])if(var_form_archivos[unique][index]instanceof File)files.push({index:index,name:(var_form_archivos[unique][index].name),file:var_form_archivos[unique][index],key:key})}};return files}
function form_input_files(input_arr,data,callback){var files=form_input_file_enviar(input_arr);if(files.length>0){guardarAjaxArchivos(0,data,files,url_sitio+"ajax/archivos.php",function(response){if(callback!=null&&typeof callback==='function')callback(response)})}else if(callback!=null&&typeof callback==='function')callback(null)}
function form_init(objetos){for(var j in objetos)form_input_init(objetos[j])}
function form_clean(objetos){for(var j in objetos){if(objetos[j].hasOwnProperty('value'))delete objetos[j].value;if(objetos[j].hasOwnProperty('txt_default'))objetos[j].value=objetos[j].txt_default;if(objetos[j].hasOwnProperty('ele')){var ele=(objetos[j].hasOwnProperty('ele'))?objetos[j].ele:null;$(ele).attr('rel','')}};return objetos}
function form_input_error(ele,tipo,error){switch(tipo){case"text":case"textarea":case"select":case"fecha":case"file":if(error){$(ele).parent().find('span.normal').addClass('error');$(ele).addClass('error_i')}else{$(ele).parent().find('span.normal').removeClass('error');$(ele).removeClass('error_i')};break;case"switch":case"radio":case"check":$(ele).each(function(index,element){if(error){$(this).closest('.input_espacio').find('span.normal').addClass('error');$(this).closest('.input_espacio').find('.input_sim').addClass('error_i');$(this).addClass('error_i')}else{$(this).closest('.input_espacio').find('span.normal').removeClass('error');$(this).closest('.input_espacio').find('.input_sim').removeClass('error_i');$(this).removeClass('error_i')}});break;case"_txt":case"_fecha":case"hidden":break}}
function form_input_init(objeto){var key=(objeto.hasOwnProperty('key'))?objeto.key:null,ele=(objeto.hasOwnProperty('ele'))?objeto.ele:null,tipo=(objeto.hasOwnProperty('tipo'))?objeto.tipo:null,variable=(objeto.hasOwnProperty('variable'))?objeto.variable:null,especificar=(objeto.hasOwnProperty('especificar'))?objeto.especificar:null,especificar_validar=(objeto.hasOwnProperty('especificar_validar'))?objeto.especificar_validar:null,txt_default=(objeto.hasOwnProperty('txt_default'))?objeto.txt_default:null,value=(objeto.hasOwnProperty('value'))?objeto.value:'',valores=(objeto.hasOwnProperty('valores'))?objeto.valores:[],confirmar=(objeto.hasOwnProperty('confirmar'))?objeto.confirmar:null,confirmar_value=(objeto.hasOwnProperty('confirmar_value'))?objeto.confirmar_value:'',callback=(objeto.hasOwnProperty('callback'))?objeto.callback:null,url_files=(objeto.hasOwnProperty('url_files'))?objeto.url_files:null,limite=(objeto.hasOwnProperty('limite'))?objeto.limite:2500,limite_tipo=(objeto.hasOwnProperty('limite_tipo'))?objeto.limite_tipo:'letras',maxlength=(objeto.hasOwnProperty('maxlength'))?objeto.maxlength:null,encode=(objeto.hasOwnProperty('encode'))?objeto.encode:null,onChange=(objeto.hasOwnProperty('onChange'))?objeto.onChange:null;form_input_error(ele,tipo,false);if(confirmar!=null)form_input_error(confirmar,"text",false);value=form_input_valor(objeto);switch(tipo){case"text":case"textarea":case"select":if(value!=''){if(tipo=="select"){if($(ele+' option[value="'+value+'"]').length==0)$(ele).append('<option value="'+value+'">'+value+'</option>');$(ele).attr('rel',value)};$(ele).val(value);if(onChange!=null&&typeof onChange==='function'){onChange();form_resize()}}else $(ele).val('');var dataType=$(ele).attr('data-type');if(typeof dataType!=='undefined'&&dataType!==false)switch(dataType){case"numero":form_comma_number(ele);form_comma_number_evento(ele);break};if(tipo=="textarea")if(limite!=null){$(ele).addClass("auto");$(ele).unbind('keydown').bind('keydown',function(e){if(limite_tipo=='letras'){form_limit_text(this,limite)}else if(limite_tipo=='palabras')form_limit_words(e,this,limite)});$(ele).unbind('keyup').bind('keyup',function(e){if(limite_tipo=='letras'){form_limit_text(this,limite)}else if(limite_tipo=='palabras')form_limit_words(e,this,limite);form_textarea_resize(this,callback)});form_textarea_resize($(ele)[0],callback)};if(tipo=="select"){var temp_function=function(element){if($(element).val()!=""){$(element).removeClass("placeholder")}else $(element).addClass("placeholder")};temp_function(ele);$(ele).unbind('change.style').bind('change.style',function(e){temp_function(this)})};if(maxlength!=null)$(ele).attr('maxlength',maxlength);if(onChange!=null&&typeof onChange==='function')$(ele).unbind("change.form").bind("change.form",function(){onChange();form_resize()});break;case"fecha":if(value!=''){$(ele).val(value)}else $(ele).val('');if(maxlength!=null)$(ele).attr('maxlength',maxlength);var picker=$(ele).pickadate({format:'d mmmm, yyyy',formatSubmit:'yyyy-mm-dd',selectMonths:true,selectYears:60});picker=picker.pickadate('picker');if(value!=""){picker.set('select',value,{format:'yyyy-mm-dd'})}else picker.clear();case"file":$(ele+" .input_file").val("");$(ele+" .files").html("");var unique=$(ele).attr('data-id');var_form_archivos[unique]=[];if(value!=null)for(zz in value.v){var enlace='';if(value.hasOwnProperty('l')&&value.l.hasOwnProperty(zz))enlace=value.l[zz];form_input_file_list(unique,zz,{name:value.v[zz],enlace:enlace},url_files,function(){if(callback!=null&&typeof callback==='function')callback()})};$(ele+" .input_add").unbind('click').bind('click',function(){var limite=parseInt($(this).parent().attr('data-limit'),10);if(Object.keys(var_form_archivos[unique]).length>=limite){lightbox_abrir('<div class="align-left"><b>Máximo '+limite+' archivos</b></div>',{cancelar:{txt:"Ok",fn:null}},{})}else $(ele+" .input_file").click();return false});$(ele+" .input_file").unbind('change').bind('change',function(){var limite=parseInt($(this).parent().attr('data-limit'),10),extensiones=$(this).parent().attr('data-ext');extensiones=extensiones.split(",");if($(this).val()!="")form_input_file_read(this,unique,limite,extensiones,url_files,function(){if(callback!=null&&typeof callback==='function')callback()})});break;case"switch":$(ele).each(function(index,element){var valor=$(this).val();$(this).prop('checked',false);if(value!=null)for(zz in value.v)if($(this).val()==value.v[zz])$(this).prop('checked',true);form_input_init_switch(this,especificar,txt_default);if(onChange!=null&&typeof onChange==='function'){onChange();form_resize()};if(especificar!=null){var especificar_value=(objeto.hasOwnProperty('especificar_value'))?objeto.especificar_value:'',dataType=$(especificar).attr('data-type');if(typeof dataType!=='undefined'&&dataType!==false)switch(dataType){case"numero":form_comma_number(especificar);form_comma_number_evento(especificar);break};$(especificar).val(especificar_value)};var dataType=$(ele).attr('data-type');if(typeof dataType!=='undefined'&&dataType!==false)switch(dataType){case"switch":$(this).unbind('click.form').bind('click.form',function(){form_input_init_switch(this,especificar,txt_default)});form_input_init_switch(this,especificar,txt_default);break};if(onChange!=null&&typeof onChange==='function')$(this).unbind("change.form").bind("change.form",function(){onChange();form_resize()})});break;case"radio":case"check":$(ele).each(function(index,element){var valor=$(this).val();$(this).prop('checked',false);if($(this).closest('.r').find('#extra_'+valor).length>0)$(this).closest('.r').find('#extra_'+valor).html('');var filtros=$(this).closest('.r').find('#extra_'+valor).attr('data-filto'),name=$(this).closest('.r').find('#extra_'+valor).attr('data-name');if(typeof filtros!=='undefined'&&filtros!==false&&$(this).closest('.r').find('#extra_'+valor).length>0&&$(this).closest('.r').find('#extra_'+valor).html()==''){try{filtros=JSON.parse(filtros)}catch(e){filtros=null};if(filtros!=null&&filtros.hasOwnProperty('especificar')&&filtros.especificar==true){var html='<input type="text" value="" id="extra_input_'+valor+'"  class="input gris" maxlength="250" placeholder="Especifique: '+name+'" />';$(this).closest('.r').find('#extra_'+valor).html(html);$(this).closest('.r').find('#extra_'+valor).hide()}};$(this).unbind('click.form').bind('click.form',function(){$(ele).each(function(index,element){var valor=$(this).val();if($(this).is(':checked')){$(this).closest('.r').find('#extra_'+valor).show()}else $(this).closest('.r').find('#extra_'+valor).hide()})});if(onChange!=null&&typeof onChange==='function')$(this).unbind("change.form").bind("change.form",function(){onChange();form_resize()})});if(value!=null){if(value.constructor!==Object)try{value=JSON.parse(value)}catch(e){value={v:[],e:{}}};for(zz in value.v){$(ele+'[value="'+value.v[zz]+'"]').prop('checked',true);if($(ele+'[value="'+value.v[zz]+'"]').closest('.r').find('#extra_'+value.v[zz]).length>0){$(ele+'[value="'+value.v[zz]+'"]').closest('.r').find('#extra_'+value.v[zz]).show();$(ele+'[value="'+value.v[zz]+'"]').closest('.r').find('#extra_input_'+value.v[zz]).val(value.e[value.v[zz]])};if(onChange!=null&&typeof onChange==='function'){onChange();form_resize()}}};break;case"_txt":case"_fecha":break;case"hidden":if(value!=null){$(ele).val(value)}else $(ele).val('');break;case"tokens":$(ele).tokenInput('destroy');var settings={hintText:"...",noResultsText:"Sin resultados",searchingText:"Buscando...",preventDuplicates:true,excludeCurrent:true,prePopulate:[],theme:"facebook",onAdd:function(item){form_resize()},onReady:function(item){form_resize()}};if(value!=null){if(value.constructor!==Object)try{value=JSON.parse(value)}catch(e){value={v:[],e:{}}};settings.prePopulate=form_input_init_tokens(value.v)};$(ele).tokenInput(form_input_init_tokens(valores),settings);break};if(confirmar!=null){$(confirmar).on('paste',function(e){return false});$(confirmar).val(confirmar_value)}}
function form_input_init_tokens(valores){var populate=[];for(zz in valores){var obj={id:valores[zz]["id"]},name=[valores[zz]["name"]],conta=1;while(valores[zz].hasOwnProperty('name'+conta)){name.push(valores[zz]['name'+conta]);conta++};obj.name=name.join(', ');populate.push(obj)};return populate}
function form_input_init_switch(ele,especificar,txt_default){console.log('form_input_init_switch',ele,especificar,txt_default);if($(ele).is(':checked')){$(ele).parent().find('.switch').addClass('on');if(especificar!=null)$(especificar).show();if(txt_default!=null)$(txt_default).hide()}else{$(ele).parent().find('.switch').removeClass('on');if(especificar!=null)$(especificar).hide();if(txt_default!=null)$(txt_default).show()}}
function form_input_valores(datos,objetos){for(x in datos){var index=objetos.findIndex(function(ele){return ele.key===x});if(index>=0){objetos[index]["value"]=datos[x];datos[x]=form_input_valor(objetos[index])}};return datos}
function form_input_valor(objeto){var encode=(objeto.hasOwnProperty('encode'))?objeto.encode:null,value=(objeto.hasOwnProperty('value'))?objeto.value:'',tipo=(objeto.hasOwnProperty('tipo'))?objeto.tipo:null;if(value!=null&&value!=''&&encode==true)switch(tipo){case"file":case"radio":case"check":case"switch":case"tokens":value=JSON.parse(form_decode(value));break;default:value=form_decode(value);break};return value}
function form_object_data(data){if(data!=null&&data.constructor===Object){var text=[];for(i in data.v)text.push(data.v[i]);return text.toString()};return data}
function form_input_validar(objeto){var nombre=(objeto.hasOwnProperty('nombre'))?objeto.nombre:null,ele=(objeto.hasOwnProperty('ele'))?objeto.ele:null,tipo=(objeto.hasOwnProperty('tipo'))?objeto.tipo:null,tipo_txt=(objeto.hasOwnProperty('tipo_txt'))?objeto.tipo_txt:null,validar=(objeto.hasOwnProperty('validar'))?objeto.validar:null,opcional=(objeto.hasOwnProperty('opcional'))?objeto.opcional:null,value=(objeto.hasOwnProperty('value'))?objeto.value:'',confirmar=(objeto.hasOwnProperty('confirmar'))?objeto.confirmar:null,especificar=(objeto.hasOwnProperty('especificar'))?objeto.especificar:null,especificar_validar=(objeto.hasOwnProperty('especificar_validar'))?objeto.especificar_validar:null,encode=(objeto.hasOwnProperty('encode'))?objeto.encode:null,ok=false,info='',valor=null;switch(tipo){case"text":case"textarea":case"select":case"hidden":if(form_trim($(ele).val())!=""){ok=true;valor=$(ele).val();var datoInf=form_input_validar_dato(valor,validar,ok,info,nombre,ele);valor=datoInf.valor;ok=datoInf.ok;info=datoInf.info;if(ok==true){if(confirmar!=null)if(form_trim($(ele).val())!=form_trim($(confirmar).val())){ok=false;info+=nombre+' y su confirmación no coincide.';form_input_error(confirmar,"text",true)}else form_input_error(confirmar,"text",false)}else if(confirmar!=null)form_input_error(confirmar,"text",true)}else{if(opcional==true){ok=true}else info+=nombre+'.';if(confirmar!=null)form_input_error(confirmar,"text",true)};break;case"file":var arr_values={v:{},l:{}},unique=$(ele).attr('data-id');if(Object.keys(var_form_archivos[unique]).length>0){ok=true;for(x in var_form_archivos[unique]){arr_values.v[x]=var_form_archivos[unique][x].name;var archivo=null;if(var_form_archivos[unique][x].hasOwnProperty('enlace'))archivo=var_form_archivos[unique][x].enlace;arr_values.l[x]=archivo}}else if(opcional==true){ok=true}else info+=nombre+'.';valor=arr_values;break;case"fecha":var picker=$(ele).pickadate();picker=picker.pickadate('picker');valor=picker.get('select');if(valor!=null){ok=true;valor=picker.get('select','yyyy-mm-dd')}else if(opcional==true){ok=true}else info+=nombre+'.';break;case"switch":var arr_values={v:[],e:{}};if($(ele+':checked').length==0){if(opcional==true){ok=true}else info+=nombre+'.'}else{$(ele+':checked').each(function(index,element){arr_values.v.push($(this).val())});if(especificar!=null){var especificar_valor=form_trim($(especificar).val());if(especificar_valor!=""){ok=true;if(especificar_validar!=null){var datoInf=form_input_validar_dato(especificar_valor,especificar_validar,ok,info,nombre,especificar);especificar_valor=datoInf.valor;ok=datoInf.ok;info=datoInf.info;arr_values.e[valor]=especificar_valor}}else info+=nombre+' (especifique).';if(ok==true){form_input_error(especificar,'especificar',false)}else form_input_error(especificar,'especificar',true)}else ok=true};valor=arr_values;break;case"radio":case"check":var arr_values={v:[],e:{}},arr_especifique=[];if($(ele+':checked').length==0){if(opcional==true){ok=true}else info+=nombre+'.'}else{ok=true;$(ele+':checked').each(function(index,element){arr_values.v.push($(this).val())})};$(ele).each(function(index,element){if($(this).is(':checked')){var valor=$(this).val(),filtros=$(this).closest('.r').find('#extra_'+valor).attr('data-filto'),name=$(this).closest('.r').find('#extra_'+valor).attr('data-name'),unique=Math.random().toString(36).substr(2,9);$(this).closest('.r').find('#extra_input_'+valor).addClass(unique);if(typeof filtros!=='undefined'&&filtros!==false){try{filtros=JSON.parse(filtros)}catch(e){filtros=null};if(filtros!=null&&filtros.hasOwnProperty('especificar')&&filtros.especificar==true)if($(this).closest('.r').find('#extra_input_'+valor).length>0){var especificar_valor=form_trim($(this).closest('.r').find('#extra_input_'+valor).val());if(especificar_valor==""){arr_especifique.push(name);ok=false}else{var datoInf=form_input_validar_dato(especificar_valor,especificar_validar,true,'',name+'<small>','#extra_input_'+valor+"."+unique);if(datoInf.ok){arr_values.e[valor]=datoInf.valor}else{ok=false;arr_especifique.push(datoInf.info+'</small>')}}}}}});if(arr_especifique.length>0)info+=nombre+'. Especifique: '+arr_especifique.join(", ");valor=arr_values;break;case"_txt":ok=true;if(tipo_txt=="select"){valor=$(ele+" option:selected").text()}else if(tipo_txt=="radio"||tipo_txt=="check")valor=$(ele+":checked").parent().text();break;case"_fecha":ok=true;var _fecha=new Date();valor=_fecha.getFullYear()+'-'+pad((_fecha.getMonth()+1),2)+'-'+pad(_fecha.getDate(),2)+' '+pad(_fecha.getHours(),2)+':'+pad(_fecha.getMinutes(),2)+':'+pad(_fecha.getSeconds(),2);if(value!=''&&validar=='fecha')valor=value;break;case"tokens":var arr_values={v:[]},tokens=$(ele).tokenInput('get');if(Object.keys(tokens).length>0){ok=true;for(var i in tokens)arr_values.v.push({id:tokens[i].id})}else if(opcional==true){ok=true}else info+=nombre+'.';valor=arr_values;break};if(!ok){form_input_error(ele,tipo,true)}else form_input_error(ele,tipo,false);if(encode==true&&valor!=null)switch(tipo){case"file":case"radio":case"check":case"switch":valor=form_encode(JSON.stringify(valor));break;default:valor=form_encode(valor);break};return{ok:ok,valor:valor,info:info}}
function form_input_validar_info(validar){var txt='';switch(validar){case"url":txt='p. ej: https://iluminemosdeazul.org.';break;case"telefono":txt='';break;case"mail":txt='';break;case"numero":txt='';break;case"entero":txt='';break;case"contrasena":txt='';break;case"cp":txt='';break;case"anio":txt='';break;case"porcentaje":txt='Porcentaje de avance';break;default:txt='';break};return txt}
function form_input_validar_dato(valor,validar,ok,info,nombre,ele){var v_correo=/^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/,v_entero=/^\d+$/,v_horario=/^(0[0-9]|1[0-9]|2[0-3])(:)([0-5][0-9])$/;if(typeof valor!=="undefined"&&valor!=null){switch(validar){case"url":if(!form_validUrl(valor)){ok=false;info+=nombre+' (dirección web no válida).'};break;case"telefono":if(!v_entero.test(valor)){ok=false;info+=nombre+' (sólo números).'}else if(valor.length!=10){ok=false;info+=nombre+' (10 dígitos).'};break;case"mail":if(!v_correo.test(valor)){ok=false;info+=nombre+' no válido.'};break;case"numero":var attr=$(ele).attr("data-valor");if(typeof attr!=='undefined'&&attr!==false)valor=parseFloat(attr);if(!form_isNumber(valor)){ok=false;info+=nombre+' (sólo números).'};break;case"entero":if(!v_entero.test(valor)){ok=false;info+=nombre+' (sólo números enteros).'};break;case"contrasena":if(valor.length<8){ok=false;info+=nombre+' debe tener al menos 8 caracteres.'};break;case"cp":if(!v_entero.test(valor)){ok=false;info+=nombre+' (sólo números).'}else if(valor.length!=5){ok=false;info+=nombre+' (5 dígitos).'};break;case"porcentaje":if(!v_entero.test(valor)){ok=false;info+=nombre+' (sólo números).'}else if(valor>100||valor<0){ok=false;info+=nombre+' (Porcentaje 0% al 100%).'};break;case"anio":if(!v_entero.test(valor)){ok=false;info+=nombre+' (sólo números).'}else if(valor.length!=4){ok=false;info+=nombre+' (4 dígitos).'};break;case"horario":if(!v_horario.test(valor)){ok=false;info+=nombre+' (horario válido).'}else if(valor.length!=5){ok=false;info+=nombre+' (5 caracteres: HH:MM).'};break;case"mayor_edad":if(!v_entero.test(valor)){ok=false;info+=nombre+' (sólo números).'}else if(parseInt(valor,10)<18){ok=false;info+=nombre+' (sólo personas mayores de edad).'};break;default:break}}else{ok=false;info+=nombre+' (no definido).'};return{valor:valor,ok:ok,info:info}}
function form_input_file_read(input,id,limite,extensiones,url_files,fun_resize){var i=0,alerta="";if(input.files&&input.files.length>0){for(var j=0,f;file=input.files[j];j++){var resultado=form_input_file_valid(file,false,extensiones,var_form_file_size);if(resultado==""){if(Object.keys(var_form_archivos[id]).length<limite){form_input_file_list(id,Math.random().toString(36).substr(2,9),file,url_files,fun_resize)}else{i=1;alerta+='Máximo '+limite+' archivos.<br>';break}}else{i=1;alerta+=resultado+"<br>"}};if(i==1)lightbox_abrir('<div class="align-left"><b>Advertencia</b></div>'+alerta,{cancelar:{txt:"Ok",fn:null}},{})}}
function form_input_file_valid(file,mostrar,extensiones){var alerta="",nombre=file.name,temp=[];for(x in extensiones){temp.push(extensiones[x]);temp.push((extensiones[x]).toUpperCase())};if(!(new RegExp('('+temp.join('|').replace(/\./g,'\\.')+')$')).test(nombre))alerta+="El archivo: "+nombre+" no tiene una extensión válida. <br />Las extensiones válidas son: "+extensiones.join(", ")+".";if(file.size>var_form_file_size){if(alerta!="")alerta+="<br>";alerta+="El archivo: "+nombre+" excede el límite permitido de "+(var_form_file_size/1024/1024)+"MB. Favor de ajustar el archivo o seleccionar otro."};if(mostrar&&alerta!="")lightbox_abrir('<div class="align-left"><b>Advertencia</b></div>'+alerta,{cancelar:{txt:"Ok",fn:null}},{});return alerta}
function form_input_file_list(id,pos,file,url_files,fun_resize){var name='';if(file instanceof File){name=(file.name)}else{name=file.name;if(typeof index_modo!=='undefined'&&index_modo=="offline"){name='<a href="#" class="a_localFile" data-file="'+file.name+'" target="_blank">'+file.name+'</a>'}else if(file.hasOwnProperty('enlace')&&file.enlace!=null)name='<a href="'+url_sitio+url_files+file.enlace+'" target="_blank">'+file.name+'</a>'};var html=$(".machotes #archivo").html(),archivo=$(html).appendTo('.archivos[data-id="'+id+'"] .files');$(archivo).attr('data-pos',pos);$(archivo).find(".nombre").html(name);$(archivo).find(".acciones .quitar").attr('data-id',id);$(archivo).find(".acciones .quitar").attr('data-pos',pos);$(archivo).find(".acciones .quitar").unbind('click').bind('click',function(){var id=$(this).attr('data-id'),pos=$(this).attr('data-pos');lightbox_abrir('<div class="align-left"><b>¿Seguro deseas eliminar el archivo: '+(var_form_archivos[id][pos].name)+'?</b></div>',{aceptar:{txt:"Sí",fn:function(){delete var_form_archivos[id][pos];$('.archivos[data-id="'+id+'"] .files .archivo[data-pos="'+pos+'"]').remove();lightbox_cerrar();fun_resize()}},cancelar:{txt:"No",fn:null}},{});return false});if(!var_form_archivos.hasOwnProperty(id))var_form_archivos[id]=[];var_form_archivos[id][pos]=file;fun_resize()}
function form_uniqID(length){var resultado='',caracteres='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',contador=0;while(contador<length){resultado+=caracteres.charAt(Math.floor(Math.random()*caracteres.length));contador+=1};return resultado}
function form_validUrl(str){try{var url=new URL(str);return url.protocol==="http:"||url.protocol==="https:"}catch(e){return false}}
function form_trim(str){if(typeof str!=="undefined"&&str!=null){return str.replace(/^\s+|\s+$/g,"")}else return null}
function form_comma_number(ele){var n=$(ele).val();n+='';n=n.replace(/,/g,'');var x=n.split('.'),x1=x[0],x2=x.length>1?'0.'+x[1]:'',rgx=/(\d+)(\d{3})/;while(rgx.test(x1))x1=x1.replace(rgx,'$1,$2');if(x2!=''){x2=x2.split('.');var recortar=false;if(x2[1].length>1)recortar=true;if(recortar){x2=parseFloat(x2[0]+'.'+x2[1]).toFixed(2);x2=x2.split('.')};x2="."+x2[1]};$(ele).val(x1+x2);form_comma_number_reverse(ele)}
function form_comma_number_evento(ele){$(ele).unbind('keypress keyup blur').bind('keypress keyup blur',function(event){if(event.which==44)return true;if((event.which!=46||$(this).val().indexOf('.')!=-1)&&(event.which<48||event.which>57))event.preventDefault();form_comma_number(ele)})}
function form_comma_number_reverse(ele){var n=$(ele).val();n+='';n=n.replace(/,/g,'');$(ele).attr('data-valor',n)}
function form_isNumber(n){return!isNaN(parseFloat(n))&&isFinite(n)}
function form_limit_text(limitField,limitNum){if(limitField.value.length>limitNum)limitField.value=limitField.value.substring(0,limitNum);var div_error=$(limitField).next();if(div_error.hasClass("error"))div_error.children('span.maximo').html(limitNum-limitField.value.length)}
function form_limit_words(e,limitField,MAX_WORDS){var BACKSPACE=8,DELETE=46,valid_keys=[BACKSPACE,DELETE],words=limitField.value.split(' ');if(words.length>=MAX_WORDS&&valid_keys.indexOf(e.keyCode)==-1){e.preventDefault();words.length=MAX_WORDS;limitField.value=words.join(' ')}}
function form_textarea_resize(elemento,funcion){if(form_trim($(elemento).val())!=""){var altura=0;$(elemento).css("height","auto");while(altura<$(elemento)[0].scrollHeight+parseFloat($(elemento).css("borderTopWidth"))+parseFloat($(elemento).css("borderBottomWidth")))altura=altura+1;if(altura!=0)$(elemento).height(altura)}else{$(elemento).css("height","28px");$(elemento).val("")};form_resize();if(funcion!=null)funcion()}
function form_index(arr,key){return arr.findIndex(function(elemento){return elemento.key===key})}
function form_opcional(arr,key,opcional,visible){var index=form_index(arr,key),element=null;if(arr.hasOwnProperty(index)){arr[index]["opcional"]=opcional;element=arr[index]["ele"]};if($(element).closest('.item').length>0){$(element).closest('.item').attr("data-obligatorio",!opcional);$(element).closest('.item').show();if(!visible)if(opcional){$(element).closest('.item').hide();$(element).val('')}}}
function form_rel(ele){var attr=$(ele).attr('rel');if(typeof attr!=='undefined'&&attr!==false&&$(ele+" option[value='"+attr+"']").length!=0)$(ele).val(attr)}
function form_nl2br(str,is_xhtml){if(typeof str==='undefined'||str===null)return'';var breakTag=(is_xhtml||typeof is_xhtml==='undefined')?'<br />':'<br>';return(str+'').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g,'$1'+breakTag+'$2')};var lightbox_config={}
function lightbox_init(){lightbox_config={ele:'#lightbox_caja',size:'normal',close:true,close_btn:false}}
function lightbox_abrir(contenido,botones,config){lightbox_init();for(key in lightbox_config)if(config.hasOwnProperty(key))lightbox_config[key]=config[key];$(lightbox_config.ele).addClass("activo");document.activeElement.blur();lightbox_size();$(lightbox_config.ele+' .contenido').scrollTop(0);$(lightbox_config.ele+' .contenido').html(contenido);$(lightbox_config.ele+' .botones').hide();$(lightbox_config.ele+' .boton').each(function(index,element){$(this).parent().hide();$(this).hide();$(this).unbind("click")});if(lightbox_config.close_btn){$(lightbox_config.ele+' .btn_cerrar').show()}else $(lightbox_config.ele+' .btn_cerrar').hide();$(lightbox_config.ele+' .btn_cerrar').unbind('click').bind('click',function(){lightbox_cerrar()});if(botones!=null){if(botones.hasOwnProperty('aceptar')){$(lightbox_config.ele+' .boton.aceptar').show();$(lightbox_config.ele+' .boton.aceptar').parent().show();$(lightbox_config.ele+' .boton.aceptar').val(botones.aceptar["txt"]);$(lightbox_config.ele+' .boton.aceptar').unbind('click').bind('click',function(){if(lightbox_config.close)lightbox_cerrar();if(botones.aceptar.hasOwnProperty('fn')&&botones.aceptar["fn"]!=null&&typeof botones.aceptar["fn"]==='function')botones.aceptar["fn"]()})};if(botones.hasOwnProperty('cancelar')){$(lightbox_config.ele+' .boton.cancelar').show();$(lightbox_config.ele+' .boton.cancelar').parent().show();$(lightbox_config.ele+' .boton.cancelar').val(botones.cancelar["txt"]);$(lightbox_config.ele+' .boton.cancelar').unbind('click').bind('click',function(){if(lightbox_config.close)lightbox_cerrar();if(botones.cancelar.hasOwnProperty('fn')&&botones.cancelar["fn"]!=null&&typeof botones.cancelar["fn"]==='function')botones.cancelar["fn"]()})};if(Object.keys(botones).length>0){$(lightbox_config.ele+' .botones').show();if(Object.keys(botones).length==1)$(lightbox_config.ele+' .botones .col').removeClass('col2');if(Object.keys(botones).length==2)$(lightbox_config.ele+' .botones .col').addClass('col2')}}}
function lightbox_size(){$(lightbox_config.ele+' .margen').removeClass('normal');$(lightbox_config.ele+' .margen').removeClass('grande');switch(lightbox_config.size){case"normal":$(lightbox_config.ele+' .margen').addClass('normal');break;case"grande":$(lightbox_config.ele+' .margen').addClass('grande');break}}
function lightbox_cerrar(){$(lightbox_config.ele).removeClass("activo");$(lightbox_config.ele+' .boton').each(function(index,element){$(this).hide();$(this).unbind("click")})};var iniciar_sesion_arr=[{key:"usuario",nombre:"Usuario",ele:"#input_usuario",tipo:"text",validar:"texto",opcional:false},{key:"contrasena",nombre:"Contraseña",ele:"#input_contrasena",tipo:"text",validar:"contrasena",opcional:false}]
function iniciar_sesion_ready(){sesion_verificar_ini=function(){window.location.href=url_sitio};sesion_verificar_no=function(){iniciar_sesion_forma()}}
function iniciar_sesion_load(){iniciar_sesion_resize()}
function iniciar_sesion_resize(){}
function iniciar_sesion_forma(){form_init(iniciar_sesion_arr);$("#btn_iniciar_sesion").unbind('click').bind('click',function(){iniciar_sesion_validar();return false});$('input[name="input_contrasena_ver"]').unbind('click').bind('click',function(){if($('input[name="input_contrasena_ver"]').is(':checked')){$("#input_contrasena").attr("type","text")}else $("#input_contrasena").attr("type","password")})}
function iniciar_sesion_validar(){respuesta=form_validar(iniciar_sesion_arr);if(respuesta.i==0){iniciar_sesion_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('iniciar_sesion','validar','error')}}
function iniciar_sesion_servicio(valores){event_google_analytics('iniciar_sesion','servicio','iniciar');var data=new FormData();data.append("token","");valores=form_input_valores(valores,iniciar_sesion_arr);for(x in valores){var valor=valores[x];if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};ajax_enviar(data,url_sitio+"ajax/gnl/iniciar_sesion.php",{ok:function(respuesta){event_google_analytics('iniciar_sesion','servicio','ok');lightbox_abrir('<div align="center">iniciando sesión...</div>',{},{});sesion_datos(respuesta,function(light){window.location.href=$('#form_iniciar_sesion').attr('data-action')},false)}},{})};var recuperar_contrasena_arr=[{key:"usuario",nombre:"Usuario",ele:"#input_usuario",tipo:"text",validar:"mail",opcional:false}]
function recuperar_contrasena_ready(){sesion_verificar_ini=function(){window.location.href=url_sitio};sesion_verificar_no=function(){recuperar_contrasena_forma()}}
function recuperar_contrasena_load(){recuperar_contrasena_resize()}
function recuperar_contrasena_resize(){}
function recuperar_contrasena_forma(){form_init(recuperar_contrasena_arr);$("#btn_recuperar").unbind('click').bind('click',function(){recuperar_contrasena_validar();return false})}
function recuperar_contrasena_validar(){respuesta=form_validar(recuperar_contrasena_arr);if(respuesta.i==0){recuperar_contrasena_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('recuperar_contrasena','validar','error')}}
function recuperar_contrasena_servicio(valores){event_google_analytics('recuperar_contrasena','servicio','iniciar');var data=new FormData();data.append("token","");valores=form_input_valores(valores,recuperar_contrasena_arr);for(x in valores){var valor=valores[x];if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};var funcion=function(respuesta){event_google_analytics('recuperar_contrasena','servicio','ok');lightbox_abrir("<h1>Mensaje</h1>La nueva contraseña ha sido enviada a su correo electrónico.",{aceptar:{txt:"Ok",fn:function(){window.location.href=$("#form_recuperar").attr("data-action")}}},{})};ajax_enviar(data,url_sitio+"ajax/gnl/recuperar_contrasena.php",{ok:funcion},{timeout:6e4})};var registro_arr=[{key:"nombre",nombre:"Nombre",ele:"#input_registro_nombre",tipo:"text",validar:"nombre",opcional:false},{key:"apellidos",nombre:"Apellidos",ele:"#input_registro_apellidos",tipo:"text",validar:"nombre",opcional:false},{key:"actor",nombre:"Actor responsable",ele:"#input_registro_actor",tipo:"select",validar:"texto",opcional:false},{key:"correo",nombre:"Correo electrónico",ele:"#input_registro_correo",tipo:"text",validar:"mail",opcional:false,confirmar:"#input_registro_correo_confirmar"},{key:"contrasena",nombre:"Contraseña",ele:"#input_registro_contrasena",tipo:"text",validar:"contrasena",opcional:false,confirmar:"#input_registro_contrasena_confirmar"}]
function registro_ready(){sesion_verificar_ini=function(){window.location.href=url_sitio};sesion_verificar_no=function(){registro_forma()}}
function registro_load(){registro_resize()}
function registro_resize(){}
function registro_forma(){form_init(registro_arr);$("#btn_registro").unbind('click').bind('click',function(){registro_validar();return false})}
function registro_validar(){respuesta=form_validar(registro_arr);if(respuesta.i==0){registro_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('registro','validar','error')}}
function registro_servicio(valores){event_google_analytics('registro','servicio','iniciar');var data=new FormData();data.append("token","");valores=form_input_valores(valores,registro_arr);for(x in valores){var valor=valores[x];if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};var funcion=function(respuesta){event_google_analytics('registro','servicio','ok');var html='';html+='<h1>Le damos la más cordial bienvenida.</h1>';html+='<div>';html+='<p>Este es su usuario y contraseña. Es necesario resguardarlos en un lugar seguro para poder usarlos cada vez que accedas al portal.</p>';html+='<p style="font-family:Monaco, monospace;">Usuario: <b>'+respuesta.u+'</b><br/>Contraseña:<b> '+respuesta.p+'</b></p>';html+='<label><input type="checkbox" class="auto radio input_registro_ok" value="1" id="input_light_ok"> He copiado este usuario y contraseña.</label>';html+='<span style="color:#F00;" id="error_light_ok"></span>';html+='</div>';lightbox_abrir(html,{aceptar:{txt:"Continuar",fn:function(){var i=0;if($('#lightbox_caja #input_light_ok:checked').length==0){i=1;$('#lightbox_caja #error_light_ok').html('<br><small>Debes confirmar que has copiado este usuario y contraseña.</small>')};if(i==0)registro_servicio_iniciar(respuesta.u,respuesta.p)}}},{size:"grande",close:false})};ajax_enviar(data,url_sitio+"ajax/gnl/registro.php",{ok:funcion},{timeout:6e4})}
function registro_servicio_iniciar(correo,contrasena){var data=new FormData();data.append("token","");data.append("usuario",correo);data.append("contrasena",contrasena);ajax_enviar(data,url_sitio+"ajax/gnl/iniciar_sesion.php",{ok:function(respuesta){event_google_analytics('registro','iniciar','ok');lightbox_abrir('<div align="center">iniciando sesión...</div>',{},{});sesion_datos(respuesta,function(light){window.location.href=$('#form_registro').attr('data-action')},false)}},{})};var contacto_arr=[{key:"motivo",nombre:"Motivo",ele:"#input_contacto_motivo",tipo:"text",validar:"texto",opcional:false},{key:"mensaje",nombre:"Mensaje",ele:"#input_contacto_mensaje",tipo:"textarea",validar:"texto",opcional:false},{key:"nombre",nombre:"Nombre completo",ele:"#input_contacto_nombre",tipo:"text",validar:"nombre",opcional:false},{key:"correo",nombre:"Correo electrónico",ele:"#input_contacto_correo",tipo:"text",validar:"mail",opcional:false}]
function contacto_ready(){sesion_verificar_ini=function(){};sesion_verificar_no=function(){};contacto_forma()}
function contacto_load(){contacto_resize()}
function contacto_resize(){}
function contacto_forma(){form_init(contacto_arr);$("#btn_contacto").unbind('click').bind('click',function(){contacto_validar();return false})}
function contacto_validar(){respuesta=form_validar(contacto_arr);if(respuesta.i==0){contacto_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('contacto','validar','error')}}
function contacto_servicio(valores){event_google_analytics('contacto','servicio','iniciar');var data=new FormData();data.append("token","");valores=form_input_valores(valores,contacto_arr);for(x in valores){var valor=valores[x];if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};var funcion=function(respuesta){event_google_analytics('contacto','servicio','ok');var html='<div class="align-center big"><b>Gracias por su mensaje</b></div>En breve nos pondremos en contacto.';lightbox_abrir(html,{aceptar:{txt:"Ok",fn:function(){window.location.href=$('#form_contacto').attr('data-action')}}},{})};ajax_enviar(data,url_sitio+"ajax/gnl/contacto.php",{ok:funcion},{timeout:6e4})};var slider_obj=[]
function slider_resize(seccion){switch(slider_obj[seccion]["tipo"]){case'fade':break;case'slide':$(seccion+' .slide').addClass("slideLeft");$(seccion+" .items .anim").width($(seccion+' .slide .item').length*$(seccion+' .slide .items').width());$(seccion+' .slide .item').each(function(){$(this).width($(seccion+' .slide .items').width())});break;default:break};$(seccion+" .items").css("min-height","inherit");var altura=0;$(seccion+' .slide .item .tabla').each(function(){if(altura<$(this).outerHeight())altura=$(this).outerHeight()});slider_obj[seccion]["altura"]=altura;if(altura>0&&$(seccion+" .items").height()<altura)$(seccion+" .items").css("min-height",slider_obj[seccion]["altura"]+'px')}
function slider(seccion,obj){if(typeof slider_obj[seccion]!=='undefined'&&typeof slider_obj[seccion]["intervalo"]!=='undefined')if(slider_obj[seccion]["intervalo"]!=null)clearTimeout(slider_obj[seccion]["intervalo"]);slider_obj[seccion]={intervalo:null,transicion:obj.tiempo,tiempo:obj.duracion,tipo:obj.tipo,pos:0};slider_resize(seccion);if($(seccion+' .puntos').length){var puntos="";for(var i=0;i<$(seccion+' .slide .item').length;i++)puntos+='<div class="punto"></div>';$(seccion+' .slide .puntos .centro').html(puntos);$(seccion+" .slide .puntos .punto").each(function(i){$(this).unbind('click').bind('click',function(){slider_obj[seccion]["pos"]=i;slider_activar(seccion)})})};if($(seccion+' .slide .item').length>1){var hammer=new Hammer($(seccion+" .items .anim").get(0));hammer.on('swipeleft',function(){slider_der(seccion)});hammer.on('swiperight',function(){slider_izq(seccion)});if($(seccion+' .izq').length)$(seccion+' .flecha .izq').unbind('click').bind('click',function(){slider_izq(seccion)});if($(seccion+' .der').length)$(seccion+' .flecha .der').unbind('click').bind('click',function(){slider_der(seccion)})}else{$(seccion+' .puntos').hide();$(seccion+' .izq').hide();$(seccion+' .der').hide()};if($(seccion+' .slide .item').length>0)slider_activar(seccion)}
function slider_izq(seccion){slider_obj[seccion]["pos"]--;if(slider_obj[seccion]["pos"]<0)slider_obj[seccion]["pos"]=$(seccion+' .slide .item').length-1;slider_activar(seccion)}
function slider_der(seccion){slider_obj[seccion]["pos"]++;if(slider_obj[seccion]["pos"]>=$(seccion+' .slide .item').length)slider_obj[seccion]["pos"]=0;slider_activar(seccion)}
function slider_activar(seccion){$(seccion+' .puntos .punto').each(function(index,element){$(this).removeClass('activo')});switch(slider_obj[seccion]["tipo"]){case'fade':$(seccion+" .slide .item").each(function(index){if(index!=slider_obj[seccion]["pos"]){$(this).fadeTo(slider_obj[seccion]["transicion"],0,function(){});$(this).css("z-index",1)}else{$(this).fadeTo(slider_obj[seccion]["transicion"],1,function(){});$(this).css("z-index",2)}});break;case'slide':$(seccion+" .items .anim").animate({marginLeft:-($(seccion+' .slide .items').width()*slider_obj[seccion]["pos"])+"px"},slider_obj[seccion]["transicion"]);break;default:break};$(seccion+" .slide .puntos .punto:nth-child("+(slider_obj[seccion]["pos"]+1)+")").addClass("activo");slider_interval(seccion)}
function slider_interval(seccion){if(slider_obj[seccion]["tiempo"]!=0){if(slider_obj[seccion]["intervalo"]!=null)clearTimeout(slider_obj[seccion]["intervalo"]);slider_obj[seccion]["intervalo"]=setTimeout(function(){slider_obj[seccion]["pos"]++;if(slider_obj[seccion]["pos"]>=$(seccion+' .slide .item').length)slider_obj[seccion]["pos"]=0;slider_activar(seccion)},slider_obj[seccion]["tiempo"])}};var slider_widget_obj=[]
function slider_widget_botones(seccion){if(slider_widget_obj[seccion]["pos"]<=0){$('.'+seccion+'_slider_widget .flecha.izq').css("opacity",0.5)}else $('.'+seccion+'_slider_widget .flecha.izq').css("opacity",1);if(slider_widget_obj[seccion]["pos"]+slider_widget_obj[seccion]["visible_items"]>=$('.'+seccion+'_slider_widget .slider_widget_items .slider_widget_item').length){$('.'+seccion+'_slider_widget .flecha.der').css("opacity",0.5)}else $('.'+seccion+'_slider_widget .flecha.der').css("opacity",1)}
function slider_widget_resize(seccion){switch(seccion){case"logos":if(920<scripts_w){slider_widget_obj[seccion]["ancho"]=$('.'+seccion+'_slider_widget').width()/5;slider_widget_obj[seccion]["visible_items"]=5}else if(640<scripts_w){slider_widget_obj[seccion]["ancho"]=$('.'+seccion+'_slider_widget').width()/3;slider_widget_obj[seccion]["visible_items"]=3}else{slider_widget_obj[seccion]["ancho"]=$('.'+seccion+'_slider_widget').width()/2;slider_widget_obj[seccion]["visible_items"]=2};break};$('.'+seccion+'_slider_widget .slider_widget_items').width($('.'+seccion+'_slider_widget .slider_widget_items .slider_widget_item').length*slider_widget_obj[seccion]["ancho"]);$('.'+seccion+'_slider_widget .slider_widget_items .slider_widget_item').each(function(){$(this).width(slider_widget_obj[seccion]["ancho"])})}
function slider_widget(seccion,obj){if(typeof slider_widget_obj[seccion]!=='undefined'&&typeof slider_widget_obj[seccion]["intervalo"]!=='undefined')if(slider_widget_obj[seccion]["intervalo"]!=null)clearTimeout(slider_widget_obj[seccion]["intervalo"]);slider_widget_obj[seccion]={intervalo:null,transicion:500,tiempo:1e3,pos:0,items:$('.'+seccion+'_slider_widget .slider_widget_items .slider_widget_item').length,visible_items:2,ancho:$('.'+seccion+'_slider_widget').width()/2};slider_widget_resize(seccion);var html=$("."+seccion+"_slider_widget .slider_widget_items").html();$("."+seccion+"_slider_widget .slider_widget_items").append(html);$('.'+seccion+'_slider_widget .slider_widget_items').width($('.'+seccion+'_slider_widget .slider_widget_items .slider_widget_item').length*slider_widget_obj[seccion]["ancho"]);$("."+seccion+"_slider_widget .slider_widget_items").css('marginLeft',"0px");slider_widget_botones(seccion);$('.'+seccion+'_slider_widget .flecha.izq').unbind("click").bind("click",(function(){if(slider_widget_obj[seccion]["pos"]<=0){$('.'+seccion+'_slider_widget .flecha.izq').css("opacity",0.5)}else{slider_widget_obj[seccion]["pos"]--;$("."+seccion+"_slider_widget .slider_widget_items").animate({marginLeft:"+="+(slider_widget_obj[seccion]["ancho"])+"px"},'slow');slider_widget_botones(seccion);slider_widget_acciones(seccion)}}));$('.'+seccion+'_slider_widget .flecha.der').unbind("click").bind("click",(function(){if((slider_widget_obj[seccion]["pos"]+slider_widget_obj[seccion]["visible_items"])>=$('.'+seccion+'_slider_widget .slider_widget_items .slider_widget_item').length);else{slider_widget_obj[seccion]["pos"]++;$("."+seccion+"_slider_widget .slider_widget_items").animate({marginLeft:"-="+(slider_widget_obj[seccion]["ancho"])+"px"},'slow');slider_widget_botones(seccion);slider_widget_acciones(seccion)}}));slider_widget_acciones(seccion);slider_widget_interval(seccion)}
function slider_widget_acciones(seccion){}
function slider_widget_interval(seccion){if(slider_widget_obj[seccion]["intervalo"]!=null)clearTimeout(slider_widget_obj[seccion]["intervalo"]);slider_widget_obj[seccion]["intervalo"]=setTimeout(function(){slider_widget_obj[seccion]["pos"]++;if((slider_widget_obj[seccion]["pos"]+slider_widget_obj[seccion]["visible_items"])>$('.'+seccion+'_slider_widget .slider_widget_items .slider_widget_item').length)slider_widget_obj[seccion]["pos"]=0;var valor=-(slider_widget_obj[seccion]["ancho"]*slider_widget_obj[seccion]["pos"]);$("."+seccion+"_slider_widget .slider_widget_items").animate({marginLeft:valor+"px"},'slow',function(){if(slider_widget_obj[seccion]["pos"]>=slider_widget_obj[seccion]["items"]){slider_widget_obj[seccion]["pos"]=0;$("."+seccion+"_slider_widget .slider_widget_items").css('marginLeft',"0px")}});slider_widget_botones(seccion);slider_widget_acciones(seccion);slider_widget_interval(seccion)},1500)}
function index_ready(){sesion_verificar_ini=function(){};sesion_verificar_no=function(){};$(".elementos .elemento").each(function(index,element){$(this).hide()});$(".sobre a").each(function(index,element){$(this).bind('click',function(){$(".elementos .elemento").each(function(index,element){$(this).hide()});$(".sobre a").each(function(index,element){$(this).removeClass("activo")});$(this).addClass("activo");var clase=$(this).attr('href');$(".elementos "+clase).show('fast',function(){index_resize();if(scripts_w<=840)$("html, body").animate({scrollTop:$(".elementos "+clase).offset().top},"fast")});return false})});$(".sobre a").eq(0).addClass("activo");$(".elementos .elemento").eq(0).show();scripts_resize();fn_misma_altura('.slider_widget_items','.slider_widget_item')}
function index_load(){slider_widget('logos',{});index_resize()}
function index_resize(){fn_misma_altura('.slider_widget_items','.slider_widget_item');slider_widget_resize('logos');scripts_resize()};var ejes_columns=['eje','color'],ejes_columns_tipo={eje:'texto'},ejes_arr=[{key:"eje",nombre:"Eje",ele:"#input_eje",tipo:"text",validar:"texto",opcional:false},{key:"color",nombre:"Color hexadecimal",ele:"#input_color",tipo:"text",validar:"hexadecimal",opcional:false}]
function ejes_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1])){var _tabla=new tablaJSON({base:"eje",columns:ejes_columns,columns_type:ejes_columns_tipo,arr:ejes_arr,tabla_orden:[1,"asc"]});_tabla.init()}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function ejes_load(){ejes_resize()}
function ejes_resize(){};var plazos_columns=['plazo'],plazos_arr=[{key:"plazo",nombre:"Plazo (temporalidad)",ele:"#input_plazo",tipo:"text",validar:"texto",opcional:false}]
function plazos_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1])){var _tabla=new tablaJSON({base:"plazo",columns:plazos_columns,arr:plazos_arr});_tabla.init()}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function plazos_load(){plazos_resize()}
function plazos_resize(){};var estrategias_columns=['identificador','estrategia','instituciones','fecha'],estrategias_columns_tipo={identificador:'numero'},estrategias_arr=[{key:"eje",nombre:"Eje",ele:"#input_eje",tipo:"select",validar:"entero",opcional:false,onChange:function(){var _tabla=new tablaJSON({base:"prioridad"});_tabla.loadData("filter","#input_prioridad","select",{ident:$("#input_eje").val(),orden:[{col:"prioridad",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_prioridad")},'eje')}},{key:"prioridad",nombre:"Prioridad",ele:"#input_prioridad",tipo:"select",validar:"entero",opcional:false},{key:"identificador",nombre:"#",ele:"#input_identificador",tipo:"text",validar:"numero",opcional:false},{key:"estrategia",nombre:"Estrategia",ele:"#input_estrategia",tipo:"text",validar:"texto",opcional:false},{key:"instituciones",nombre:"Instituciones coordinadoras",ele:"#input_instituciones",tipo:"tokens",validar:"texto",opcional:false,valores:[]}]
function estrategias_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1])){var _tabla_institucion=new tablaJSON({base:"institucion"});_tabla_institucion.loadData("all","#input_instituciones","tokens",null,function(values){var index=form_index(estrategias_arr,"instituciones");if(estrategias_arr.hasOwnProperty(index))estrategias_arr[index]["valores"]=values;var _tabla_data=new tablaJSON({base:"eje"});_tabla_data.loadData("all","#input_eje","select",{orden:[{col:"eje",tipo:"texto",dir:"asc"}]});var _tabla=new tablaJSON({base:"estrategia",columns:estrategias_columns,columns_type:estrategias_columns_tipo,arr:estrategias_arr,tabla_orden:[1,"asc"]});_tabla.init()},['siglas','institucion'])}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function estrategias_load(){estrategias_resize()}
function estrategias_resize(){};var indicadores_columns=['estrategia','indicador','meta','meta_al'],indicadores_columns_tipo={identificador:'texto'},indicadores_foreign=[{column:'eje',base:'eje'},{column:'prioridad',base:'prioridad'},{column:'estrategia',base:'estrategia',column_f:'identificador'}],indicadores_arr=[{key:"eje",nombre:"Eje",ele:"#input_eje",tipo:"select",validar:"entero",opcional:false,onChange:function(){var _tabla=new tablaJSON({base:"prioridad"});_tabla.loadData("filter","#input_prioridad","select",{ident:$("#input_eje").val(),orden:[{col:"prioridad",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_prioridad")},'eje')}},{key:"prioridad",nombre:"Prioridad",ele:"#input_prioridad",tipo:"select",validar:"entero",opcional:false,onChange:function(){var _tabla=new tablaJSON({base:"estrategia"});_tabla.loadData("filter","#input_estrategia","select",{ident:$("#input_prioridad").val(),orden:[{col:"estrategia",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_estrategia")},'prioridad')}},{key:"estrategia",nombre:"Estrategia",ele:"#input_estrategia",tipo:"select",validar:"entero",opcional:false},{key:"indicador",nombre:"Indicador",ele:"#input_indicador",tipo:"textarea",validar:"texto",opcional:false,limite:500},{key:"meta_al",nombre:"Al año",ele:"#input_meta_al",tipo:"text",validar:"anio",opcional:false},{key:"meta",nombre:"Meta",ele:"#input_meta",tipo:"text",validar:"texto",opcional:false},{key:"metodo",nombre:"Método de cálculo",ele:"#input_metodo",tipo:"textarea",validar:"texto",opcional:false,limite:500},{key:"verificacion",nombre:"Fuente de verificación",ele:"#input_verificacion",tipo:"textarea",validar:"texto",opcional:false,limite:500}]
function indicadores_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1,2])){var _tabla_data=new tablaJSON({base:"eje"});_tabla_data.loadData("all","#input_eje","select",{orden:[{col:"eje",tipo:"texto",dir:"asc"}]});var _tabla=new tablaJSON({base:"indicador",columns:indicadores_columns,columns_type:indicadores_columns_tipo,arr:indicadores_arr,foreign:indicadores_foreign,tabla_orden:[1,"asc"]});_tabla.init()}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function indicadores_load(){indicadores_resize()}
function indicadores_resize(){};var linea_de_accion_columns=['identificador','linea','eje','actores'],linea_de_accion_columns_tipo={identificador:'texto'},linea_de_accion_arr=[{key:"eje",nombre:"Eje",ele:"#input_eje",tipo:"select",validar:"entero",opcional:false,onChange:function(){var _tabla=new tablaJSON({base:"prioridad"});_tabla.loadData("filter","#input_prioridad","select",{ident:$("#input_eje").val(),orden:[{col:"prioridad",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_prioridad")},'eje')}},{key:"prioridad",nombre:"Prioridad",ele:"#input_prioridad",tipo:"select",validar:"entero",opcional:false,onChange:function(){var _tabla=new tablaJSON({base:"estrategia"});_tabla.loadData("filter","#input_estrategia","select",{ident:$("#input_prioridad").val(),orden:[{col:"estrategia",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_estrategia")},'prioridad')}},{key:"estrategia",nombre:"Estrategia",ele:"#input_estrategia",tipo:"select",validar:"entero",opcional:false},{key:"identificador",nombre:"#",ele:"#input_identificador",tipo:"text",validar:"texto",opcional:false},{key:"linea",nombre:"Línea de acción",ele:"#input_linea_de_accion",tipo:"textarea",validar:"texto",opcional:false,limite:500},{key:"actores",nombre:"Actores responsables",ele:'#input_actores',tipo:"tokens",validar:"texto",opcional:false},{key:"anexo_ata",nombre:"Anexo ATA",ele:"#input_anexo_ata",tipo:"text",validar:"numero",opcional:true}],linea_de_accion_foreign=[{column:'eje',base:'eje'},{column:'prioridad',base:'prioridad'},{column:'estrategia',base:'estrategia'}]
function linea_de_accion_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1,2])){var _tabla_actor=new tablaJSON({base:"actor"});_tabla_actor.loadData("all","#input_actores","tokens",null,function(values){var index=form_index(linea_de_accion_arr,"actores");if(linea_de_accion_arr.hasOwnProperty(index))linea_de_accion_arr[index]["valores"]=values;var _tabla_data=new tablaJSON({base:"eje"});_tabla_data.loadData("all","#input_eje","select",{orden:[{col:"eje",tipo:"texto",dir:"asc"}]});var _tabla=new tablaJSON({base:"linea",columns:linea_de_accion_columns,columns_type:linea_de_accion_columns_tipo,arr:linea_de_accion_arr,foreign:linea_de_accion_foreign,tabla_orden:[1,"asc"]});_tabla.init()},['siglas','actor'])}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function linea_de_accion_load(){linea_de_accion_resize()}
function linea_de_accion_resize(){};var prioridades_columns=['prioridad','eje','plazo'],prioridades_foreign=[{column:'eje',base:'eje'},{column:'plazo',base:'plazo'}],prioridades_arr=[{key:"eje",nombre:"Eje",ele:"#input_eje",tipo:"select",validar:"entero",opcional:false},{key:"plazo",nombre:"Plazo (temporalidad)",ele:"#input_plazo",tipo:"select",validar:"entero",opcional:false},{key:"prioridad",nombre:"Prioridad",ele:"#input_prioridad",tipo:"text",validar:"texto",opcional:false}]
function prioridades_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1])){var _tabla_eje=new tablaJSON({base:"eje"});_tabla_eje.loadData("all","#input_eje","select",{orden:[{col:"eje",tipo:"texto",dir:"asc"}]});var _tabla_plazo=new tablaJSON({base:"plazo"});_tabla_plazo.loadData("all","#input_plazo","select",{orden:[{col:"plazo",tipo:"texto",dir:"asc"}]});var _tabla=new tablaJSON({base:"prioridad",columns:prioridades_columns,arr:prioridades_arr,foreign:prioridades_foreign,tabla_orden:[1,"asc"]});_tabla.init()}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function prioridades_load(){prioridades_resize()}
function prioridades_resize(){}
function master_ready(){}
function master_load(){master_resize()}
function master_resize(){scripts_resize()};var actores_columns=['actor','siglas','catalogo_pertenece'],actores_arr=[{key:"actor",nombre:"Actor responsable",ele:"#input_actor",tipo:"text",validar:"texto",opcional:false},{key:"siglas",nombre:"Siglas",ele:"#input_siglas",tipo:"text",validar:"texto",opcional:false},{key:"municipios",nombre:"Municipios",ele:'input[name="input_municipios"]',tipo:"switch",validar:"entero",opcional:true},{key:"catalogos",nombre:"Catálogos",ele:'input[name="input_catalogos"]',tipo:"switch",validar:"entero",opcional:true,onChange:function(){if($('input[name="input_catalogos"]:checked').val()=="1"){form_opcional(actores_arr,"catalogo_pertenece",false,false)}else form_opcional(actores_arr,"catalogo_pertenece",true,false)}},{key:"catalogo_pertenece",nombre:"Catálogo al que pertenece el actor responsable",ele:"#input_catalogo_pertenece",tipo:"select",validar:"entero",opcional:true}],actores_foreign=[{column:'catalogo_pertenece',base:'catalogo',column_f:'catalogo'}]
function actores_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1,2])){$("#div_catalogo_pertenece").hide();var _tabla_catalogo=new tablaJSON({base:"catalogo"});_tabla_catalogo.loadData("all","#input_catalogo_pertenece","select",{orden:[{col:"catalogo",tipo:"texto",dir:"asc"}]});var _tabla=new tablaJSON({base:"actor",columns:actores_columns,arr:actores_arr,foreign:actores_foreign,tabla_orden:[1,"asc"]});_tabla.init()}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function actores_load(){actores_resize()}
function actores_resize(){};var actores_catalogos_columns=['catalogo'],actores_catalogos_arr=[{key:"catalogo",nombre:"Catálogo",ele:"#input_catalogo",tipo:"text",validar:"texto",opcional:false}]
function actores_catalogos_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1])){var _tabla=new tablaJSON({base:"catalogo",columns:actores_catalogos_columns,arr:actores_catalogos_arr});_tabla.init()}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function actores_catalogos_load(){actores_catalogos_resize()}
function actores_catalogos_resize(){};var actores_elementos_columns=['elemento','catalogo'],actores_elementos_foreign=[{column:'catalogo',base:'catalogo'}],actores_elementos_arr=[{key:"catalogo",nombre:"Catálogo",ele:"#input_catalogo",tipo:"select",validar:"entero",opcional:false},{key:"elemento",nombre:"Elemento",ele:"#input_elemento",tipo:"text",validar:"texto",opcional:false}]
function actores_elementos_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1])){var _tabla_catalogo=new tablaJSON({base:"catalogo"});_tabla_catalogo.loadData("all","#input_catalogo","select",{orden:[{col:"catalogo",tipo:"texto",dir:"asc"}]});var _tabla=new tablaJSON({base:"elemento",columns:actores_elementos_columns,arr:actores_elementos_arr,foreign:actores_elementos_foreign,tabla_orden:[2,"asc"]});_tabla.init()}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function actores_elementos_load(){actores_elementos_resize()}
function actores_elementos_resize(){};var usuarios_columns=['usuario','nombre','apellidos','u_perfil',"actor","institucion","actor_elemento","municipio"],usuarios_foreign=[{column:'actor',base:'actor'},{column:'institucion',base:'institucion'}],usuarios_arr=[{key:"nombre",nombre:"Nombre de la institución",ele:"#input_nombre",tipo:"text",validar:"nombre",opcional:false},{key:"apellidos",nombre:"Nombre completo",ele:"#input_apellidos",tipo:"text",validar:"nombre",opcional:true},{key:"usuario",nombre:"Usuario",ele:"#input_correo",tipo:"text",validar:"nombre",opcional:false},{key:"contrasena",nombre:"Contraseña",ele:"#input_contrasena",tipo:"text",validar:"contrasena",opcional:false},{key:"contrasena_un_uso",nombre:"Contraseña de un solo uso",ele:'input[name="input_contrasena_un_uso"]',tipo:"switch",validar:"entero",opcional:true},{key:"correo_electronico",nombre:"Correo electrónico",ele:"#input_correo_electronico",tipo:"text",validar:"mail",opcional:true},{key:"u_perfil",nombre:"Perfil",ele:'input[name="input_perfil"]',tipo:"radio",validar:"entero",opcional:false,onChange:function(){$(".change_perfil").each(function(index,value){$(this).hide()});switch($('input[name="input_perfil"]:checked').val()){case"4":form_opcional(usuarios_arr,"actor",false,false);form_opcional(usuarios_arr,"institucion",true,false);form_opcional(usuarios_arr,"institucion_municipio",true,false);$('#input_institucion').val("");$('#input_institucion_municipio').val("");break;case"5":form_opcional(usuarios_arr,"institucion",false,false);form_opcional(usuarios_arr,"actor",true,false);form_opcional(usuarios_arr,"actor_municipio",true,false);form_opcional(usuarios_arr,"actor_catalogo",true,false);form_opcional(usuarios_arr,"actor_elemento",true,false);$('#input_actor').val("");$('#input_actor_municipio').val("");$('#input_actor_catalogo').val("");$('#input_actor_elemento').val("");break;default:$('#input_institucion').val("");$('#input_institucion_municipio').val("");$('#input_actor').val("");$('#input_actor_municipio').val("");$('#input_actor_catalogo').val("");$('#input_actor_elemento').val("");form_opcional(usuarios_arr,"actor",true,false);form_opcional(usuarios_arr,"institucion",true,false);form_opcional(usuarios_arr,"actor_municipio",true,false);form_opcional(usuarios_arr,"actor_catalogo",true,false);form_opcional(usuarios_arr,"actor_elemento",true,false);form_opcional(usuarios_arr,"institucion_municipio",true,false);break}}},{key:"actor",nombre:"Actor responsable",ele:"#input_actor",tipo:"select",validar:"texto",opcional:true,onChange:function(){var municipios=$("#input_actor option:selected").attr("data-municipio");if(municipios=="1"){form_opcional(usuarios_arr,"actor_municipio",false,false)}else form_opcional(usuarios_arr,"actor_municipio",true,false);var catalogos=$("#input_actor option:selected").attr("data-catalogo");if(catalogos=="1"){form_opcional(usuarios_arr,"actor_catalogo",false,false);form_opcional(usuarios_arr,"actor_elemento",false,false);if($('#input_actor_catalogo option[value="'+$("#input_actor option:selected").attr("data-catalogo_pertenece")+'"]').length>0){$("#input_actor_catalogo").val($("#input_actor option:selected").attr("data-catalogo_pertenece"));$("#input_actor_catalogo").trigger("change.form")}}else{form_opcional(usuarios_arr,"actor_catalogo",true,false);form_opcional(usuarios_arr,"actor_elemento",true,false)}}},{key:"institucion",nombre:"Institución coordinadora",ele:"#input_institucion",tipo:"select",validar:"texto",opcional:true,onChange:function(){var municipios=$("#input_institucion option:selected").attr("data-municipio");if(municipios=="1"){form_opcional(usuarios_arr,"institucion_municipio",false,false)}else form_opcional(usuarios_arr,"institucion_municipio",true,false)}},{key:"actor_municipio",nombre:"Municipio del actor responsable",ele:"#input_actor_municipio",tipo:"select",validar:"entero",opcional:true},{key:"institucion_municipio",nombre:"Municipio de la Institución coordinadora",ele:"#input_institucion_municipio",tipo:"select",validar:"entero",opcional:true},{key:"actor_catalogo",nombre:"Catálogo del actor responsable",ele:"#input_actor_catalogo",tipo:"select",validar:"entero",opcional:true,onChange:function(){if($("#input_actor_catalogo").val()!=""){var _tabla=new tablaJSON({base:"elemento"});_tabla.loadData("filter","#input_actor_elemento","select",{ident:$("#input_actor_catalogo").val(),orden:[{col:"elemento",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_actor_elemento")},'catalogo')}}},{key:"actor_elemento",nombre:"Elemento del catálogo",ele:"#input_actor_elemento",tipo:"select",validar:"entero",opcional:true}]
function usuarios_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1])){$("#a_contrasena").unbind("click").bind("click",function(){$("#input_contrasena").val(usuarios_generarCodigo(12));return false});$(".change_perfil").each(function(index,value){$(this).hide()});$('#input_actor_municipio option:not(:first)').remove();for(var i in municipios_arr)$('#input_actor_municipio').append('<option value="'+municipios_arr[i]["id"]+'">'+municipios_arr[i]["municipio"]+'</option>');$('#input_institucion_municipio option:not(:first)').remove();for(var i in municipios_arr)$('#input_institucion_municipio').append('<option value="'+municipios_arr[i]["id"]+'">'+municipios_arr[i]["municipio"]+'</option>');var _tabla_actor=new tablaJSON({base:"actor"});_tabla_actor.loadData("all","#input_actor","select",{orden:[{col:"actor",tipo:"texto",dir:"asc"}]},function(data){for(var i in data){var actor=data[i],tiene="0";if(actor.actor_data.hasOwnProperty("municipios")&&actor.actor_data["municipios"].hasOwnProperty("v")&&actor.actor_data["municipios"]["v"][0]==1)tiene="1";$('#input_actor option[value="'+actor.idactor+'"]').attr("data-municipio",tiene);tiene="0";var tiene_es="";if(actor.actor_data.hasOwnProperty("catalogos")&&actor.actor_data["catalogos"].hasOwnProperty("v")&&actor.actor_data["catalogos"]["v"][0]==1){tiene="1";tiene_es=actor.actor_data["catalogo_pertenece"]};$('#input_actor option[value="'+actor.idactor+'"]').attr("data-catalogo",tiene);$('#input_actor option[value="'+actor.idactor+'"]').attr("data-catalogo_pertenece",tiene_es)};var _tabla_catalogo=new tablaJSON({base:"catalogo"});_tabla_catalogo.loadData("all","#input_actor_catalogo","select",{orden:[{col:"catalogo",tipo:"texto",dir:"asc"}]})});var _tabla_institucion=new tablaJSON({base:"institucion"});_tabla_institucion.loadData("all","#input_institucion","select",{orden:[{col:"institucion",tipo:"texto",dir:"asc"}]},function(data){for(var i in data){var institucion=data[i],tiene="0";if(institucion.institucion_data.hasOwnProperty("municipios")&&institucion.institucion_data["municipios"].hasOwnProperty("v")&&institucion.institucion_data["municipios"]["v"][0]==1)tiene="1";$('#input_institucion option[value="'+institucion.idinstitucion+'"]').attr("data-municipio",tiene)}});var _tabla_perfil=new tablaJSON({base:"perfil"});_tabla_perfil.loadData("all","perfil","radio",null,function(values){var index=form_index(usuarios_arr,"u_perfil");if(usuarios_arr.hasOwnProperty(index))usuarios_arr[index]["valores"]=values;var _tabla=new tablaJSON({base:"usuario",columns:usuarios_columns,arr:usuarios_arr,foreign:usuarios_foreign,ajax:{save:"usuarios.php",other:"tablaJSON.php",loadData:"tablaJSON.php"},onEvent:{update:function(){form_opcional(usuarios_arr,"contrasena",true,true)}},tabla_orden:[2,"asc"]});_tabla.init()})}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function usuarios_load(){usuarios_resize()}
function usuarios_resize(){}
function usuarios_generarCodigo(longitud){var pattern="23456789abcdefghjkmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ!;#$%&()*+-/:;=?@[]{}_",key='';for(i=0;i<longitud;i++)key+=pattern.charAt(Math.floor(Math.random()*pattern.length));return key};var periodos_correos=new Array(),periodos_dots=null,periodos_columns=['periodo','color','inicia','termina',"inicia_revision","termina_revision"],periodos_arr=[{key:"periodo",nombre:"Periodo",ele:"#input_periodo",tipo:"text",validar:"texto",opcional:false},{key:"inicia",nombre:"Inicia captura",ele:"#input_inicia",tipo:"fecha",validar:"fecha",opcional:false},{key:"termina",nombre:"Termina captura",ele:"#input_termina",tipo:"fecha",validar:"fecha",opcional:false},{key:"inicia_revision",nombre:"Inicia revisión",ele:"#input_inicia_revision",tipo:"fecha",validar:"fecha",opcional:false},{key:"termina_revision",nombre:"Termina revisión",ele:"#input_termina_revision",tipo:"fecha",validar:"fecha",opcional:false}]
function periodos_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1])){var _tabla=new tablaJSON({base:"periodo",columns:periodos_columns,arr:periodos_arr,tabla_orden:[2,"asc"]});_tabla.init();$('#table_data').off('click','.a_carga');$('#table_data').off('click','.a_revision');$('#table_data').on('click','.a_carga',function(evt){var id=parseInt($(this).attr("data-id"),10),txt=$(this).attr("data-txt");lightbox_abrir('<h1>Recordatorio de captura</h1>¿Estas seguro de enviar un <b>recordatorio de CAPTURA</b> a todos los <b>ACTORES</b> para el periodo: <b>'+txt.replace(/(<([^>]+)>)/gi,"")+'?</b>',{aceptar:{txt:"Enviar",fn:function(){periodos_recordatorios(id,txt,'captura')}},cancelar:{txt:"Cerrar",fn:null}},{});return false});$('#table_data').on('click','.a_revision',function(evt){var id=parseInt($(this).attr("data-id"),10),txt=$(this).attr("data-txt");lightbox_abrir('<h1>Recordatorio de revisión</h1>¿Estas seguro de enviar un <b>recordatorio de REVISIÓN</b> a todas las <b>INSTITUCIONES COORDINADORAS</b> para el periodo: <b>'+txt.replace(/(<([^>]+)>)/gi,"")+'?</b>',{aceptar:{txt:"Enviar",fn:function(){periodos_recordatorios(id,txt,'revision')}},cancelar:{txt:"Cerrar",fn:null}},{});return false;return false})}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function periodos_load(){periodos_resize()}
function periodos_resize(){}
function periodos_recordatorios(ident,txt,tipo){var data=new FormData();data.append("token","");if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");data.append("ident",ident);data.append("txt",txt);data.append("tipo",tipo);ajax_enviar(data,url_sitio+"ajax/sitio/recordatorios.php",{ok:function(respuesta){lightbox_abrir('<div class="align-center big margin-yb"><b>Enviando recordatorios de '+tipo+'</b></div><p>Recordatorios enviados: <b><span class="num" id="txt_num">'+"0"+'</span> de <span class="total">'+Object.keys(respuesta.correos).length+'</span></b>.</p><p>Exito: <b id="txt_exito">0</b><br /> Error: <b id="txt_error">0</b><br /></p> <div id="txt_enviando">.</div> <div id="txt_info">Espere a que el proceso termine.<br> <b>Nota: Este proceso puede tardar un tiempo</b>.</div>',{},{ele:"#lightbox_caja_enviar",size:"grande"});periodos_dots=window.setInterval(function(){var wait=document.getElementById("txt_enviando");if(wait.innerHTML.length>15){wait.innerHTML="."}else wait.innerHTML+="."},500);periodos_correos=new Array();for(var i in respuesta.correos)periodos_correos.push({correo:respuesta.correos[i].correo,nombre:respuesta.correos[i].nombre,detalle:respuesta.correos[i].detalle});periodos_recordatorios_enviar_correo(ident,txt,tipo,0)}},{})}
function periodos_recordatorios_enviar_correo(ident,txt,tipo,pos){if(pos<periodos_correos.length){var data=new FormData();data.append("token","");if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");data.append("ident",ident);data.append("txt",txt);data.append("tipo",tipo);data.append("correo",periodos_correos[pos]["correo"]);data.append("nombre",periodos_correos[pos]["nombre"]);data.append("detalle",periodos_correos[pos]["detalle"]);ajax_enviar(data,url_sitio+"ajax/sitio/recordatorios_enviar.php",{ok:function(respuesta){$("#lightbox_caja_enviar #txt_num").text((parseInt($("#lightbox_caja_enviar #txt_num").text(),10)+1));switch(parseInt(respuesta.exito,10)){case 1:$("#lightbox_caja_enviar #txt_exito").text((parseInt($("#lightbox_caja_enviar #txt_exito").text(),10)+1));break;default:$("#lightbox_caja_enviar #txt_error").text((parseInt($("#lightbox_caja_enviar #txt_error").text(),10)+1));break};pos++;if(pos<periodos_correos.length){setTimeout(function(){periodos_recordatorios_enviar_correo(ident,txt,tipo,pos)},5e3)}else periodos_recordatorios_enviar_termino()}},{ligthbox:false})}else periodos_recordatorios_enviar_termino()}
function periodos_recordatorios_enviar_termino(){$('#lightbox_caja_enviar #txt_info').hide();$('#lightbox_caja_enviar #txt_enviando').hide();if(periodos_dots!=null){clearInterval(periodos_dots);periodos_dots=null};$('#lightbox_caja_enviar .boton.aceptar').show();$('#lightbox_caja_enviar .boton.aceptar').parent().show();$('#lightbox_caja_enviar .boton.aceptar').val("Cerrar");$('#lightbox_caja_enviar .boton.aceptar').unbind('click').bind('click',function(){$("#lightbox_caja_enviar").removeClass("activo");$('#lightbox_caja_enviar .boton').each(function(index,element){$(this).hide();$(this).unbind("click")})});$('#lightbox_caja_enviar .botones').show();$('#lightbox_caja_enviar .botones .col').removeClass('col2')};var instituciones_columns=['institucion','siglas'],instituciones_arr=[{key:"institucion",nombre:"Institución coordinadora",ele:"#input_institucion",tipo:"text",validar:"texto",opcional:false},{key:"siglas",nombre:"Siglas",ele:"#input_siglas",tipo:"text",validar:"texto",opcional:false},{key:"municipios",nombre:"Municipios",ele:'input[name="input_municipios"]',tipo:"switch",validar:"entero",opcional:true}]
function instituciones_ready(){sesion_verificar_ini=function(){if(sesion_permisos([1])){var _tabla=new tablaJSON({base:"institucion",columns:instituciones_columns,arr:instituciones_arr,tabla_orden:[1,"asc"]});_tabla.init()}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function instituciones_load(){instituciones_resize()}
function instituciones_resize(){}
function captura_generales_estatus(cumplio,avance){var cumplio_txt="",cumplio_color="gray";switch(cumplio){case"1":cumplio_txt='<b style="color:red">No se ha iniciado</b>';cumplio_color="red";avance=0;break;case"2":cumplio_txt='<b style="color:orange">En planeación</b>';cumplio_color="orange";break;case"3":cumplio_txt='<b style="color:blue">En proceso</b>';cumplio_color="blue";break;case"4":cumplio_txt='<b style="color:green">Finalizado</b>';cumplio_color="springgreen";avance=100;break};return{cumplio:cumplio,cumplio_txt:cumplio_txt,avance:avance,color:cumplio_color}}
function caputra_generales_revision(valores){var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");for(x in valores){var valor=valores[x];data.append(x,valor)};ajax_enviar(data,url_sitio+"ajax/sitio/captura_revision.php",{ok:function(respuesta){event_google_analytics('caputra_generales_revision','servicio','ok');var html='<div align="center"><b>Se envió la solicitud de revisión correctamente</b></div>';lightbox_abrir(html,{aceptar:{txt:"Ok",fn:null}},{})}},{})};var captura_indicador_formulario_arr=null,captura_indicador_captura=null,captura_indicador_revision=null,captura_indicador_datos={},captura_indicador_idindicador=null
function captura_indicador_ready(){$('#filtros').hide();$('#div_estatus').hide();sesion_verificar_ini=function(){if(sesion_permisos([1,4])){var _tabla_periodos=new tablaJSON({base:"periodo",ajax:{save:"tablaJSON.php",other:"tablaJSON.php",loadData:"periodos_activos.php"}});_tabla_periodos.loadData("all","#input_periodo","select",{orden:[{col:"inicia",tipo:"fecha",dir:"asc"}]});$("#input_periodo").unbind("change.f").bind("change.f",function(){$("#input_filtro_ejes").val("");$("#input_filtro_metas_al").val("");captura_indicador_periodo($(this).val())})}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function captura_indicador_load(){captura_indicador_resize()}
function captura_indicador_resize(){scripts_resize()}
function captura_indicador_resize_(){captura_indicador_resize();setTimeout(function(){captura_indicador_resize()},200)}
function captura_indicador_periodo(periodo){if(periodo!=""){captura_indicador_periodo_servicio(periodo)}else{$('#div_estatus').hide();$('#preguntas').html("");$('#filtros').hide()}}
function captura_indicador_periodo_servicio(periodo){var data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);data.append("periodo",periodo);var funcion=function(respuesta){event_google_analytics('captura','periodo','ok');captura_indicador_formulario_arr=null;captura_indicador_idindicador=null;if(respuesta.hasOwnProperty("ejes")&&respuesta.hasOwnProperty("ejes"))captura_indicador_periodo_filtros("#input_filtro_ejes",respuesta.ejes,"data-eje");if(respuesta.hasOwnProperty("metas_al")&&respuesta.hasOwnProperty("metas_al"))captura_indicador_periodo_filtros("#input_filtro_metas_al",respuesta.metas_al,"data-meta_al");captura_indicador_captura=null;if(respuesta.hasOwnProperty("captura")&&respuesta.captura.hasOwnProperty("captura_data"))captura_indicador_captura=respuesta.captura.captura_data.indicadores;captura_indicador_revision=null;if(respuesta.hasOwnProperty("revision")&&respuesta.revision.hasOwnProperty("revision_data"))captura_indicador_revision=respuesta.revision.revision_data.indicadores;$(".btn_filtro").each(function(index,element){$(this).removeClass("activo")});$("#input_filtro_aprobado").val("");$("#input_filtro_estatus").val("");captura_indicador_periodo_preguntas(respuesta);$("#btn_copiar").unbind("click.copiar").bind("click.copiar",function(){return false});$("#btn_imprimir").unbind("click.imprimir").bind("click.imprimir",function(){var html=$('#form_captura').html(),css='',titulo=$('.seccion.navegacion .txt_perfil').html(),subtitulo='Indicadores';if($('#input_filtro_ejes').val()!=""){if(subtitulo!='')subtitulo+='<br>';subtitulo+=' Eje: '+$('#input_filtro_ejes option:selected').text()};if($('#input_filtro_metas_al').val()!=""){if(subtitulo!='')subtitulo+='<br>';subtitulo+=' Meta al año: '+$('#input_filtro_metas_al option:selected').text()};if(subtitulo!='')subtitulo='<h2>'+subtitulo+'</h2>';var fecha=new Date(),month=''+(fecha.getMonth()+1),day=''+fecha.getDate(),year=fecha.getFullYear();fecha=[year,month,day].join('-')+' '+[fecha.getHours(),fecha.getMinutes(),fecha.getSeconds()].join(':');fecha=form_fecha(fecha);var fechas='<h3>'+fecha.formato+'</h3>',mywindow=window.open('',"_blank");mywindow.document.write('<html><head><title>'+titulo+'</title>'+css);mywindow.document.write('<style> body { color:#000; font-size:1em; font-weight:400; text-align:justify; } p { margin:0 auto 1em auto; } h1, h2, h3, h4 { padding:0; margin:0; line-height:1.05em; text-transform:none; color: #000; } h1{ font-size:2em; padding-bottom:1em; text-align:center; } h2{ font-size:1.5em; padding-bottom:0.75em; } h3{ font-size:1.5em; padding-bottom:0.75em; } h4 { font-size:1.5em; padding-bottom:0.75em; } .eje div b{ color:#000; font-size:1em; }  .eje div{ padding:2px 0px !important; } .pregunta { border-bottom: 1px solid #000; padding-top:15px; margin-top:15px; } .no_imprimirs{ display:none; } .col .col2{ height:auto !important; } </style>');mywindow.document.write('<script type="text/javascript">window.onload = function() { window.print(); window.close(); };</script>');mywindow.document.write('</head><body >');mywindow.document.write('<h1>'+titulo+'</h1>'+subtitulo+fechas+html);mywindow.document.write('</body></html>');mywindow.document.close();mywindow.focus();return false})};ajax_enviar(data,url_sitio+"ajax/sitio/captura_indicadores.php",{ok:funcion},{})}
function captura_indicador_periodo_preguntas(respuesta){$('#preguntas').html("");$('#div_estatus').hide();var indicadores=respuesta.indicadores;for(var i in indicadores){var indicador=indicadores[i],html=$(".machotes #pregunta_indicador").html(),pregunta=$(html).appendTo('#preguntas');$(pregunta).attr("data-id",indicador.idindicador);$(pregunta).attr("data-eje",indicador.indicador_data.eje);$(pregunta).attr("data-plazo",indicador.idplazo);$(pregunta).attr("data-meta_al",indicador.indicador_data.meta_al);$(pregunta).attr("data-captura","false");$(pregunta).attr("data-aprobado","0");$(pregunta).attr("data-estatus","0");$(pregunta).find(".indicador b.big").html(indicador.indicador_data.indicador);$(pregunta).find(".resumen").show();$(pregunta).find(".formulario").hide();$(pregunta).find(".detalles .eje").html('<div style=" padding:2px 5px;  background-color:'+indicador.color+'; color:#FFF; margin-bottom:0.5em;"><b>'+indicador.eje+'</b></div>');$(pregunta).find(".detalles .prioridad").text(indicador.prioridad);$(pregunta).find(".detalles .plazo").text(indicador.plazo);$(pregunta).find(".detalles .estrategia").text(indicador.estrategia);$(pregunta).find(".resumen .porcentaje").text(0);$(pregunta).find(".resumen .meta").text(indicador.indicador_data.meta);$(pregunta).find(".resumen .meta_al").text(indicador.indicador_data.meta_al);$(pregunta).find(".resumen .a_retro .retro").text(0);$(pregunta).find(".resumen .a_retro").attr("data-id",indicador.idindicador);$(pregunta).find(".resumen .a_capturar").attr("data-id",indicador.idindicador);$(pregunta).find(".resumen .a_enviar").hide();$(pregunta).find(".resumen .metodo").text(indicador.indicador_data.metodo);$(pregunta).find(".resumen .cumplio").attr("data-cumplio","0");captura_indicador_periodo_preguntas_capturar(indicador.idindicador,indicador.indicador_data.metodo);captura_indicador_periodo_preguntas_retro(indicador.idindicador);$(pregunta).find(".resumen .evidencia").hide();if(captura_indicador_captura!=null&&captura_indicador_captura.hasOwnProperty(indicador.idindicador)){$(pregunta).attr("data-captura","true");if(captura_indicador_captura[indicador.idindicador].hasOwnProperty('iniciado')&&captura_indicador_captura[indicador.idindicador].iniciado!=null&&Object.keys(captura_indicador_captura[indicador.idindicador].iniciado['v']).length>0&&captura_indicador_captura[indicador.idindicador].iniciado['v'][0]=="1"){$(pregunta).find(".resumen .cumplio").html('<b style="color:blue">'+captura_indicador_captura[indicador.idindicador]["avance"]+'</b>');$(pregunta).find(".detalles .estatus_captura").css("background-color","blue");$(pregunta).attr("data-estatus","1");$(pregunta).find(".resumen .cumplio").attr("data-cumplio","1");var temp=captura_indicador_captura[indicador.idindicador]["iniciado"]["v"][0];if(temp=="1"&&captura_indicador_captura[indicador.idindicador]["iniciado"]["e"].hasOwnProperty(temp)){$(pregunta).find(".resumen .porcentaje").text(captura_indicador_captura[indicador.idindicador]["iniciado"]["e"][temp]);if(captura_indicador_captura[indicador.idindicador]["iniciado"]["e"][temp]=="100"){$(pregunta).find(".resumen .cumplio").html('<b style="color:green">'+captura_indicador_captura[indicador.idindicador]["avance"]+'</b>');$(pregunta).find(".detalles .estatus_captura").css("background-color","springgreen");$(pregunta).attr("data-estatus","3");$(pregunta).find(".resumen .cumplio").attr("data-cumplio","3")}};var evidencia=captura_indicador_captura[indicador.idindicador]["evidencia"];if(evidencia!=null&&Object.keys(evidencia.v).length>0){$(pregunta).find(".resumen .evidencia").show();var html='<ul>';for(zz in evidencia.v){var enlace='#';if(evidencia.hasOwnProperty('l')&&evidencia.l.hasOwnProperty(zz)&&evidencia.l[zz]!=null)html+='<li><a href="'+url_sitio+"files/indicadores/"+evidencia.l[zz]+'" target="_blank">'+evidencia.v[zz]+'</a></li>'};html+='</ul>';$(pregunta).find(".resumen .evidencia .listado").html(html)}}else{$(pregunta).find(".resumen .cumplio").html('<b style="color:red">El indicador no se ha iniciado</b>');$(pregunta).find(".detalles .estatus_captura").css("background-color","red");$(pregunta).attr("data-estatus","2");$(pregunta).find(".resumen .cumplio").attr("data-cumplio","2")}}else{$(pregunta).find(".resumen .cumplio").html('<b style="color:lightslategrey">No se ha iniciado la captura del avance</b>');$(pregunta).find(".resumen .evidencia").hide()};if(captura_indicador_revision!=null&&captura_indicador_revision.hasOwnProperty(indicador.idindicador)&&captura_indicador_revision[indicador.idindicador].hasOwnProperty("actual")){$(pregunta).attr("data-revision","true");var temp=captura_indicador_revision[indicador.idindicador]["actual"]["aprobo"]["v"][0],aprobo=revision_generales_estatus(temp);$(pregunta).attr("data-aprobado",temp);$(pregunta).find(".resumen .evaluacion").html(aprobo.aprobo_txt);$(pregunta).find(".resumen .retro").text(Object.keys(captura_indicador_revision[indicador.idindicador]["historico"]).length);$(pregunta).find(".detalles .estatus_revision").css("background-color",aprobo.color)}};captura_indicador_periodo_filtros_fn();captura_indicador_resize_();$(".btn_filtro").each(function(index,element){$(this).unbind("click").bind("click",function(){var tipo=$(this).attr("data-tipo"),elemento=this;$('.btn_filtro[data-tipo="'+tipo+'"]').each(function(index,element){if(element!=elemento)$(this).removeClass("activo")});$(this).toggleClass("activo");if($(this).hasClass("activo")){if(tipo=="aprobado"){$("#input_filtro_aprobado").val($(this).attr("data-value"))}else if(tipo=="estatus")$("#input_filtro_estatus").val($(this).attr("data-value"))}else if(tipo=="aprobado"){$("#input_filtro_aprobado").val("")}else if(tipo=="estatus")$("#input_filtro_estatus").val("");captura_indicador_periodo_filtros_fn();captura_indicador_resize_()})})}
function captura_indicador_periodo_preguntas_ver(idindicador){$('.seccion #preguntas .pregunta .a_ver[data-id="'+idindicador+'"]').unbind("click.mostrar").bind("click.mostrar",function(){lightbox_abrir('<div class="light_pregunta"></div>',{aceptar:{txt:"Cerrar",fn:function(){}}},{size:"grande"});var html=$(".machotes #pregunta_light").html(),pregunta=$(html).appendTo('#lightbox_caja .light_pregunta');return false})}
function captura_indicador_periodo_preguntas_capturar(idindicador,txt){$('.seccion #preguntas .pregunta .a_capturar[data-id="'+idindicador+'"]').unbind("click.mostrar").bind("click.mostrar",function(){scripts_task_in_progress=true;captura_indicador_idindicador=idindicador;$('.seccion #preguntas .pregunta').each(function(index,element){$(this).find(".resumen").show();$(this).find(".formulario").hide();$(this).find(".formulario").html("")});$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"] .resumen').hide();$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"] .formulario').show();var html=$(".machotes #pregunta_formulario_indicador").html(),forma=$(html).appendTo('.seccion #preguntas .pregunta[data-id="'+idindicador+'"] .formulario');$(forma).find("div.avance.p").text(txt);captura_indicador_resize();captura_indicador_formulario_arr=[{key:"iniciado",nombre:"El indicador ya se inició",ele:'.pregunta[data-id="'+idindicador+'"] input[name="input_iniciado"]',tipo:"radio",validar:"entero",opcional:false,especificar:true,especificar_validar:"porcentaje",onChange:function(){switch($('.pregunta[data-id="'+idindicador+'"] input[name="input_iniciado"]:checked').val()){case"1":$('.pregunta[data-id="'+idindicador+'"] #div_iniciado').show();form_opcional(captura_indicador_formulario_arr,"avance",false,true);form_opcional(captura_indicador_formulario_arr,"evidencia",false,true);break;case"2":$('.pregunta[data-id="'+idindicador+'"] #div_iniciado').hide();form_opcional(captura_indicador_formulario_arr,"avance",true,true);form_opcional(captura_indicador_formulario_arr,"evidencia",true,true);break}}},{key:"avance",nombre:txt,ele:'.pregunta[data-id="'+idindicador+'"] #input_avance',tipo:"textarea",validar:"texto",opcional:false},{key:"evidencia",nombre:"Evidencia",ele:'.pregunta[data-id="'+idindicador+'"] #input_evidencia',tipo:"file",validar:"documento",opcional:false,callback:function(){captura_indicador_resize()},url_files:"files/indicadores/"}];if(captura_indicador_captura!=null&&captura_indicador_captura.hasOwnProperty(idindicador))for(x in captura_indicador_captura[idindicador]){var index=captura_indicador_formulario_arr.findIndex(function(elemento){return elemento.key===x});if(index>=0)captura_indicador_formulario_arr[index]["value"]=captura_indicador_captura[idindicador][x]};captura_indicador_periodo_preguntas_forma();captura_indicador_resize();return false})}
function captura_indicador_periodo_preguntas_forma(){form_init(captura_indicador_formulario_arr);$("#btn_pregunta_guardar").unbind('click').bind('click',function(){captura_indicador_periodo_preguntas_validar();return false});$("#btn_pregunta_regresar").unbind('click').bind('click',function(){scripts_task_in_progress=false;$('.seccion #preguntas .pregunta').each(function(index,element){$(this).find(".resumen").show();$(this).find(".formulario").hide();$(this).find(".formulario").html("")});captura_indicador_resize_();return false})}
function captura_indicador_periodo_preguntas_validar(){respuesta=form_validar(captura_indicador_formulario_arr);if(respuesta.i==0){captura_indicador_periodo_preguntas_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<h1 class="align-left">Por favor, ingrese lo siguiente:</h1>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('captura_formulario','validar','error')}}
function captura_indicador_periodo_preguntas_servicio(valores){event_google_analytics('captura_indicador_formulario','servicio','iniciar');var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");data.append("idindicador",captura_indicador_idindicador);data.append("idperiodo",$("#input_periodo").val());valores=form_input_valores(valores,captura_indicador_formulario_arr);for(x in valores){var valor=valores[x];if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};ajax_enviar(data,url_sitio+"ajax/sitio/captura_indicadores_servicio.php",{ok:function(respuesta){event_google_analytics('captura_indicador_formulario','servicio','ok');scripts_task_in_progress=false;var funcion=function(response){var html='<div align="center"><b>Se guardo la información correctamente</b></div>';if(response!=null&&response.hasOwnProperty('msj'))if(response.ok!=response.total)html='<div align="center"><p><b>Se guarda la información pero con los siguientes errores:</b></p></div><p>'+response.msj+'</p>';lightbox_abrir(html,{aceptar:{txt:"Ok",fn:function(){captura_indicador_periodo($("#input_periodo").val())}}},{})},files=form_input_file_enviar(captura_indicador_formulario_arr);if(Object.keys(files).length>0){var data={};if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.id=sesion_data.id;data.token=sesion_data.token;data.dispositivo=sesion_data.dispositivo;data.perfil=sesion_data.perfil}else data.token="";data.action='upload';data.base='captura';data.base_arr='indicadores';data.idcaptura=respuesta.id;data.idperiodo=$("#input_periodo").val();data.idindicador=captura_indicador_idindicador;ajax_archivos(0,data,files,url_sitio+"ajax/sitio/captura_archivos.php",funcion,false)}else funcion(null)}},{})}
function captura_indicador_periodo_preguntas_retro(idindicador){$('.seccion #preguntas .pregunta .a_retro[data-id="'+idindicador+'"]').unbind("click.mostrar").bind("click.mostrar",function(){var html='';if(captura_indicador_revision!=null&&captura_indicador_revision.hasOwnProperty(idindicador)&&captura_indicador_revision[idindicador].hasOwnProperty("historico"))for(x in captura_indicador_revision[idindicador]["historico"]){html+='<div style="margin-bottom:1em; border-bottom:1px solid #ccc;">';var historia=captura_indicador_revision[idindicador]["historico"][x],temp=historia.aprobo["v"][0],aprobo=revision_generales_estatus(temp);html+='<p>'+aprobo.aprobo_txt+'</p>';if(historia.retroalimentacion!=null&&historia.retroalimentacion!="")html+='<p>'+form_nl2br(historia.retroalimentacion)+'</p>';html+='<p>Fecha: <i><b>'+historia.quien["fecha"]+'</b></i></p>';html+='</div>'};lightbox_abrir('<h1 class="align-left">Retroalimentación:</h1>'+html,{aceptar:{txt:"Cerrar",fn:function(){}}},{size:"grande",close_btn:true});return false})}
function captura_indicador_periodo_filtros(ele,datos,attr){$(ele+'  > option:nth-child(n+3)').remove();var attr=$(ele).attr('rel');if(typeof attr!=='undefined'&&attr!==false);else attr="";for(var i in datos)$(ele).append('<option value="'+i+'" '+((attr==i)?"selected":"")+'>'+datos[i]+'</option>');$(ele).unbind("change.f").bind("change.f",function(){$(this).attr("rel",$(this).val());captura_indicador_periodo_filtros_fn();captura_indicador_resize_()})}
function captura_indicador_periodo_filtros_fn(){$('.seccion #preguntas .pregunta').each(function(index,element){$(this).hide()});$('#div_estatus').hide();if($("#input_filtro_ejes").val()!=""||$("#input_filtro_metas_al").val()!=""){var filtro_eje='',filtro_metas_al='',filtro_aprobado='',filtro_estatus='';if($("#input_filtro_ejes").val()!="")if($("#input_filtro_ejes").val()=="-1"){filtro_eje='[data-eje]'}else filtro_eje='[data-eje="'+$("#input_filtro_ejes").val()+'"]';if($("#input_filtro_metas_al").val()!="")if($("#input_filtro_metas_al").val()=="-1"){filtro_metas_al='[data-meta_al]'}else filtro_metas_al='[data-meta_al="'+$("#input_filtro_metas_al").val()+'"]';if($("#input_filtro_aprobado").val()!="")filtro_aprobado='[data-aprobado="'+$("#input_filtro_aprobado").val()+'"]';if($("#input_filtro_estatus").val()!="")filtro_estatus='[data-estatus="'+$("#input_filtro_estatus").val()+'"]';if($('.seccion #preguntas .pregunta'+filtro_eje+filtro_metas_al+filtro_aprobado+filtro_estatus).length==0)lightbox_abrir('<div class="align-center big margin-yb"><b>No hay indicadores que coincidan con la búsqueda realizada.</b></div>',{cancelar:{txt:"Ok",fn:null}},{});var estatus_captura=0,estatus_revision=0,estatus_aprobados=0,estatus_rechazados=0,estatus_revision_=0,porcentaje=0,porcentaje_ok=0,cumplio_arr={"0":0,"1":0,"2":0,"3":0},estatus_total=$('.seccion #preguntas .pregunta'+filtro_eje+filtro_metas_al+filtro_aprobado+filtro_estatus).length;$('.seccion #preguntas .pregunta'+filtro_eje+filtro_metas_al+filtro_aprobado+filtro_estatus).each(function(index,element){if($(this).attr("data-captura")=="true")estatus_captura++;if($(this).attr("data-revision")=="true")estatus_revision++;if($(this).attr("data-aprobado")=="1"){estatus_aprobados++;porcentaje_ok+=parseInt($(this).find(".resumen .porcentaje").text())}else if($(this).attr("data-aprobado")=="2"){estatus_rechazados++}else if($(this).attr("data-aprobado")=="3")estatus_revision_++;cumplio_arr[$(this).find(".resumen .cumplio").attr("data-cumplio")]++;porcentaje+=parseInt($(this).find(".resumen .porcentaje").text());$(this).show()});if(estatus_total>0){porcentaje=porcentaje/estatus_total;porcentaje_ok=porcentaje_ok/estatus_total};for(var x in cumplio_arr)$('#div_estatus #cumplio_'+x).text(cumplio_arr[x]);$('#div_estatus #avance_promedio').text(porcentaje.toFixed(2));$('#div_estatus #avance_promedio_ok').text(porcentaje_ok.toFixed(2));$('#div_estatus #estatus_captura').text(estatus_captura);$('#div_estatus #estatus_total').text(estatus_total);$('#div_estatus #estatus_aprobados').text(estatus_aprobados);$('#div_estatus #estatus_rechazados').text(estatus_rechazados);$('#div_estatus #estatus_revision_').text(estatus_revision_);$('#div_estatus').show();$('#btn_revision').unbind('click').bind('click',function(){if(estatus_captura==estatus_total&&estatus_captura>0){caputra_generales_revision({tipo:"Indicadores",idperiodo:$("#input_periodo").val(),periodo:$("#input_periodo option:selected").text(),idactor:sesion_data.id,actor:sesion_data.txt_perfil,perfil_txt:sesion_data.perfil_txt,eje:$("#input_filtro_ejes option:selected").text(),filtro:$("#input_filtro_metas_al option:selected").text(),filtro_txt:"Meta al año"})}else lightbox_abrir('<div class="align-center big margin-yb"><b>Advertencia</b></div>Capture todos los indicadores para solicitar una revisión.',{cancelar:{txt:"Ok",fn:null}},{});return false});$('#filtros').show()}}
function captura_indicador_periodo_filtros_estatus(){$('.seccion #preguntas .pregunta').each(function(index,element){$(this).hide()})};var captura_linea_formulario_arr=null,captura_linea_captura=null,captura_linea_revision=null,captura_linea_datos={},captura_linea_idlinea=null
function captura_linea_ready(){$('#filtros').hide();$('#div_estatus').hide();sesion_verificar_ini=function(){if(sesion_permisos([1,4])){var _tabla_periodos=new tablaJSON({base:"periodo",ajax:{save:"tablaJSON.php",other:"tablaJSON.php",loadData:"periodos_activos.php"}});_tabla_periodos.loadData("all","#input_periodo","select",{orden:[{col:"inicia",tipo:"fecha",dir:"asc"}]});$("#input_periodo").unbind("change.f").bind("change.f",function(){$("#input_filtro_ejes").val("");$("#input_filtro_plazos").val("");captura_linea_periodo($(this).val())})}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function captura_linea_load(){captura_linea_resize()}
function captura_linea_resize(){scripts_resize()}
function captura_linea_resize_(){captura_linea_resize();setTimeout(function(){captura_linea_resize()},200)}
function captura_linea_periodo(periodo){if(periodo!=""){captura_linea_periodo_servicio(periodo)}else{$('#div_estatus').hide();$('#preguntas').html("");$('#filtros').hide()}}
function captura_linea_periodo_servicio(periodo){var data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);data.append("periodo",periodo);var funcion=function(respuesta){event_google_analytics('captura','periodo','ok');captura_linea_idlinea=null;captura_linea_formulario_arr=null;if(respuesta.hasOwnProperty("ejes")&&respuesta.hasOwnProperty("ejes"))captura_linea_periodo_filtros("#input_filtro_ejes",respuesta.ejes,"data-eje");if(respuesta.hasOwnProperty("plazos")&&respuesta.hasOwnProperty("plazos"))captura_linea_periodo_filtros("#input_filtro_plazos",respuesta.plazos,"data-plazo");captura_linea_captura=null;if(respuesta.hasOwnProperty("captura")&&respuesta.captura.hasOwnProperty("captura_data"))captura_linea_captura=respuesta.captura.captura_data.lineas;captura_linea_revision=null;if(respuesta.hasOwnProperty("revision")&&respuesta.revision.hasOwnProperty("revision_data"))captura_linea_revision=respuesta.revision.revision_data.lineas;$(".btn_filtro").each(function(index,element){$(this).removeClass("activo")});$("#input_filtro_aprobado").val("");$("#input_filtro_estatus").val("");captura_linea_periodo_preguntas(respuesta);$("#btn_copiar").unbind("click.copiar").bind("click.copiar",function(){return false});$("#btn_imprimir").unbind("click.imprimir").bind("click.imprimir",function(){var html=$('#form_captura').html(),css='',titulo=$('.seccion.navegacion .txt_perfil').html(),subtitulo='Líneas de acción';if($('#input_filtro_ejes').val()!=""){if(subtitulo!='')subtitulo+='<br>';subtitulo+=' Eje: '+$('#input_filtro_ejes option:selected').text()};if($('#input_filtro_plazos').val()!=""){if(subtitulo!='')subtitulo+='<br>';subtitulo+=' Plazo: '+$('#input_filtro_plazos option:selected').text()};if(subtitulo!='')subtitulo='<h2>'+subtitulo+'</h2>';var fecha=new Date(),month=''+(fecha.getMonth()+1),day=''+fecha.getDate(),year=fecha.getFullYear();fecha=[year,month,day].join('-')+' '+[fecha.getHours(),fecha.getMinutes(),fecha.getSeconds()].join(':');fecha=form_fecha(fecha);var fechas='<h3>'+fecha.formato+'</h3>',mywindow=window.open('',"_blank");mywindow.document.write('<html><head><title>'+titulo+'</title>'+css);mywindow.document.write('<style> body { color:#000; font-size:1em; font-weight:400; text-align:justify; } p { margin:0 auto 1em auto; } h1, h2, h3, h4 { padding:0; margin:0; line-height:1.05em; text-transform:none; color: #000; } h1{ font-size:2em; padding-bottom:1em; text-align:center; } h2{ font-size:1.5em; padding-bottom:0.75em; } h3{ font-size:1.5em; padding-bottom:0.75em; } h4 { font-size:1.5em; padding-bottom:0.75em; } .eje div b{ color:#000; font-size:1em; }  .eje div{ padding:2px 0px !important; } .pregunta { border-bottom: 1px solid #000; padding-top:15px; margin-top:15px; } .no_imprimirs{ display:none; } .col .col2{ height:auto !important; } </style>');mywindow.document.write('<script type="text/javascript">window.onload = function() { window.print(); window.close(); };</script>');mywindow.document.write('</head><body >');mywindow.document.write('<h1>'+titulo+'</h1>'+subtitulo+fechas+html);mywindow.document.write('</body></html>');mywindow.document.close();mywindow.focus();return false})};ajax_enviar(data,url_sitio+"ajax/sitio/captura_lineas.php",{ok:funcion},{})}
function captura_linea_periodo_preguntas(respuesta){$('#preguntas').html("");$('#div_estatus').hide();var lineas=respuesta.lineas;for(var i in lineas){var linea=lineas[i],html=$(".machotes #pregunta_linea").html(),pregunta=$(html).appendTo('#preguntas');$(pregunta).attr("data-id",linea.idlinea);$(pregunta).attr("data-eje",linea.linea_data.eje);$(pregunta).attr("data-plazo",linea.idplazo);$(pregunta).attr("data-captura","false");$(pregunta).attr("data-aprobado","0");$(pregunta).attr("data-estatus","0");$(pregunta).find("b.big").html(linea.linea_data.linea);$(pregunta).find(".resumen").show();$(pregunta).find(".formulario").hide();$(pregunta).find(".detalles .eje").html('<div style=" padding:2px 5px;  background-color:'+linea.color+'; color:#FFF; margin-bottom:0.5em;"><b>'+linea.eje+'</b></div>');$(pregunta).find(".detalles .prioridad").text(linea.prioridad);$(pregunta).find(".detalles .plazo").text(linea.plazo);$(pregunta).find(".detalles .estrategia").text(linea.estrategia);$(pregunta).find(".resumen .porcentaje").text(0);$(pregunta).find(".resumen .a_retro .retro").text(0);$(pregunta).find(".resumen .a_retro").attr("data-id",linea.idlinea);$(pregunta).find(".resumen .a_ver").attr("data-id",linea.idlinea);$(pregunta).find(".resumen .a_capturar").attr("data-id",linea.idlinea);$(pregunta).find(".resumen .a_enviar").hide();$(pregunta).find(".resumen .cumplio").attr("data-cumplio","0");captura_linea_periodo_preguntas_capturar(linea.idlinea);captura_linea_periodo_preguntas_retro(linea.idlinea);if(captura_linea_captura!=null&&captura_linea_captura.hasOwnProperty(linea.idlinea)){$(pregunta).attr("data-captura","true");var temp=captura_linea_captura[linea.idlinea]["cumplio"]["v"][0];$(pregunta).find(".resumen .cumplio").attr("data-cumplio",temp);var cumplio=captura_generales_estatus(temp,captura_linea_captura[linea.idlinea]["cumplio"]["e"][temp]);$(pregunta).find(".resumen .cumplio").html(cumplio.cumplio_txt);$(pregunta).find(".detalles .estatus_captura").css("background-color",cumplio.color);$(pregunta).attr("data-estatus",cumplio.cumplio);$(pregunta).find(".resumen .porcentaje").text(cumplio.avance);$(pregunta).find(".resumen .descripcion").show();$(pregunta).find(".resumen .evidencia").show();$(pregunta).find(".resumen .descripcion").html(form_nl2br(captura_linea_captura[linea.idlinea]["descripcion"]));var html='<ul>',evidencia=captura_linea_captura[linea.idlinea]["evidencia"];for(zz in evidencia.v){var enlace='#';if(evidencia.hasOwnProperty('l')&&evidencia.l.hasOwnProperty(zz)&&evidencia.l[zz]!=null)html+='<li><a href="'+url_sitio+"files/lineas/"+evidencia.l[zz]+'" target="_blank">'+evidencia.v[zz]+'</a></li>'};html+='</ul>';$(pregunta).find(".resumen .evidencia .listado").html(html)}else{$(pregunta).find(".resumen .cumplio").html('<b style="color:lightslategrey">No se ha iniciado la captura</b>');$(pregunta).find(".resumen .porcentaje").text(0);$(pregunta).find(".resumen .descripcion").hide();$(pregunta).find(".resumen .evidencia").hide()};if(captura_linea_revision!=null&&captura_linea_revision.hasOwnProperty(linea.idlinea)&&captura_linea_revision[linea.idlinea].hasOwnProperty("actual")){$(pregunta).attr("data-revision","true");var temp=captura_linea_revision[linea.idlinea]["actual"]["aprobo"]["v"][0],aprobo=revision_generales_estatus(temp);$(pregunta).attr("data-aprobado",temp);$(pregunta).find(".resumen .evaluacion").html(aprobo.aprobo_txt);$(pregunta).find(".resumen .retro").text(Object.keys(captura_linea_revision[linea.idlinea]["historico"]).length);$(pregunta).find(".detalles .estatus_revision").css("background-color",aprobo.color)}};captura_linea_periodo_filtros_fn();captura_linea_resize_();$(".btn_filtro").each(function(index,element){$(this).unbind("click").bind("click",function(){var tipo=$(this).attr("data-tipo"),elemento=this;$('.btn_filtro[data-tipo="'+tipo+'"]').each(function(index,element){if(element!=elemento)$(this).removeClass("activo")});$(this).toggleClass("activo");if($(this).hasClass("activo")){if(tipo=="aprobado"){$("#input_filtro_aprobado").val($(this).attr("data-value"))}else if(tipo=="estatus")$("#input_filtro_estatus").val($(this).attr("data-value"))}else if(tipo=="aprobado"){$("#input_filtro_aprobado").val("")}else if(tipo=="estatus")$("#input_filtro_estatus").val("");captura_linea_periodo_filtros_fn();captura_indicador_resize_()})})}
function captura_linea_periodo_preguntas_ver(idlinea){$('.seccion #preguntas .pregunta .a_ver[data-id="'+idlinea+'"]').unbind("click.mostrar").bind("click.mostrar",function(){lightbox_abrir('<div class="light_pregunta"></div>',{aceptar:{txt:"Cerrar",fn:function(){}}},{size:"grande"});var html=$(".machotes #pregunta_light").html(),pregunta=$(html).appendTo('#lightbox_caja .light_pregunta');return false})}
function captura_linea_periodo_preguntas_capturar(idlinea){$('.seccion #preguntas .pregunta .a_capturar[data-id="'+idlinea+'"]').unbind("click.mostrar").bind("click.mostrar",function(){scripts_task_in_progress=true;captura_linea_idlinea=idlinea;$('.seccion #preguntas .pregunta').each(function(index,element){$(this).find(".resumen").show();$(this).find(".formulario").hide();$(this).find(".formulario").html("")});$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"] .resumen').hide();var html=$(".machotes #pregunta_formulario").html();$(html).appendTo('.seccion #preguntas .pregunta[data-id="'+idlinea+'"] .formulario');$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"] .formulario').show();captura_linea_resize();captura_linea_formulario_arr=[{key:"cumplio",nombre:"Se cumplio la línea de acción",ele:'.pregunta[data-id="'+idlinea+'"] input[name="input_cumplio"]',tipo:"radio",validar:"entero",opcional:false,especificar:true,especificar_validar:"porcentaje",onChange:function(){switch($('.pregunta[data-id="'+idlinea+'"] input[name="input_cumplio"]:checked').val()){case"1":form_opcional(captura_linea_formulario_arr,"descripcion",true,true);form_opcional(captura_linea_formulario_arr,"evidencia",true,true);break;default:form_opcional(captura_linea_formulario_arr,"descripcion",false,true);form_opcional(captura_linea_formulario_arr,"evidencia",false,true);break}}},{key:"descripcion",nombre:"Descripción",ele:'.pregunta[data-id="'+idlinea+'"] #input_descripcion',tipo:"textarea",validar:"texto",opcional:false},{key:"evidencia",nombre:"Evidencia",ele:'.pregunta[data-id="'+idlinea+'"] #input_evidencia',tipo:"file",validar:"documento",opcional:false,callback:function(){captura_linea_resize()},url_files:"files/lineas/"}];if(captura_linea_captura!=null&&captura_linea_captura.hasOwnProperty(idlinea))for(x in captura_linea_captura[idlinea]){var index=captura_linea_formulario_arr.findIndex(function(elemento){return elemento.key===x});if(index>=0)captura_linea_formulario_arr[index]["value"]=captura_linea_captura[idlinea][x]};captura_linea_periodo_preguntas_forma();captura_linea_resize();return false})}
function captura_linea_periodo_preguntas_forma(){form_init(captura_linea_formulario_arr);$("#btn_pregunta_guardar").unbind('click').bind('click',function(){captura_linea_periodo_preguntas_validar();return false});$("#btn_pregunta_regresar").unbind('click').bind('click',function(){scripts_task_in_progress=false;$('.seccion #preguntas .pregunta').each(function(index,element){$(this).find(".resumen").show();$(this).find(".formulario").hide();$(this).find(".formulario").html("")});captura_linea_resize_();return false})}
function captura_linea_periodo_preguntas_validar(){respuesta=form_validar(captura_linea_formulario_arr);if(respuesta.i==0){captura_linea_periodo_preguntas_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<div class="align-center big margin-yb"><b>Por favor, ingrese lo siguiente:</b></div>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('captura_formulario','validar','error')}}
function captura_linea_periodo_preguntas_servicio(valores){event_google_analytics('captura_linea_formulario','servicio','iniciar');var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");data.append("idlinea",captura_linea_idlinea);data.append("idperiodo",$("#input_periodo").val());valores=form_input_valores(valores,captura_linea_formulario_arr);for(x in valores){var valor=valores[x];if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};ajax_enviar(data,url_sitio+"ajax/sitio/captura_lineas_servicio.php",{ok:function(respuesta){event_google_analytics('captura_linea_formulario','servicio','ok');scripts_task_in_progress=false;var funcion=function(response){var html='<div align="center"><b>Se guardo la información correctamente</b></div>';if(response!=null&&response.hasOwnProperty('msj'))if(response.ok!=response.total)html='<div align="center"><p><b>Se guarda la información pero con los siguientes errores:</b></p></div><p>'+response.msj+'</p>';lightbox_abrir(html,{aceptar:{txt:"Ok",fn:function(){captura_linea_periodo($("#input_periodo").val())}}},{})},files=form_input_file_enviar(captura_linea_formulario_arr);if(Object.keys(files).length>0){var data={};if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.id=sesion_data.id;data.token=sesion_data.token;data.dispositivo=sesion_data.dispositivo;data.perfil=sesion_data.perfil}else data.token="";data.action='upload';data.base='captura';data.base_arr='lineas';data.idcaptura=respuesta.id;data.idperiodo=$("#input_periodo").val();data.idindicador=captura_linea_idlinea;ajax_archivos(0,data,files,url_sitio+"ajax/sitio/captura_archivos.php",funcion,false)}else funcion(null)}},{})}
function captura_linea_periodo_preguntas_retro(idlinea){$('.seccion #preguntas .pregunta .a_retro[data-id="'+idlinea+'"]').unbind("click.mostrar").bind("click.mostrar",function(){var html='';if(captura_linea_revision!=null&&captura_linea_revision.hasOwnProperty(idlinea)&&captura_linea_revision[idlinea].hasOwnProperty("historico"))for(x in captura_linea_revision[idlinea]["historico"]){html+='<div style="margin-bottom:1em; border-bottom:1px solid #ccc;">';var historia=captura_linea_revision[idlinea]["historico"][x],temp=historia.aprobo["v"][0],aprobo=revision_generales_estatus(temp);html+='<p>'+aprobo.aprobo_txt+'</p>';if(historia.retroalimentacion!=null&&historia.retroalimentacion!="")html+='<p>'+form_nl2br(historia.retroalimentacion)+'</p>';html+='<p>Fecha: <i><b>'+historia.quien["fecha"]+'</b></i></p>';html+='</div>'};lightbox_abrir('<h1 class="align-left">Retroalimentación:</h1>'+html,{aceptar:{txt:"Cerrar",fn:function(){}}},{size:"grande",close_btn:true});return false})}
function captura_linea_periodo_filtros(ele,datos,attr){$(ele+'  > option:nth-child(n+3)').remove();var attr=$(ele).attr('rel');if(typeof attr!=='undefined'&&attr!==false);else attr="";for(var i in datos)$(ele).append('<option value="'+i+'" '+((attr==i)?"selected":"")+'>'+datos[i]+'</option>');$(ele).unbind("change.f").bind("change.f",function(){$(this).attr("rel",$(this).val());captura_linea_periodo_filtros_fn();captura_linea_resize_()})}
function captura_linea_periodo_filtros_fn(){$('.seccion #preguntas .pregunta').each(function(index,element){$(this).hide()});$('#div_estatus').hide();if($("#input_filtro_ejes").val()!=""||$("#input_filtro_plazos").val()!=""){var filtro_eje='',filtro_plazos='',filtro_aprobado='',filtro_estatus='';if($("#input_filtro_ejes").val()!="")if($("#input_filtro_ejes").val()=="-1"){filtro_eje='[data-eje]'}else filtro_eje='[data-eje="'+$("#input_filtro_ejes").val()+'"]';if($("#input_filtro_plazos").val()!="")if($("#input_filtro_plazos").val()=="-1"){filtro_plazos='[data-plazo]'}else filtro_plazos='[data-plazo="'+$("#input_filtro_plazos").val()+'"]';if($("#input_filtro_aprobado").val()!="")filtro_aprobado='[data-aprobado="'+$("#input_filtro_aprobado").val()+'"]';if($("#input_filtro_estatus").val()!="")filtro_estatus='[data-estatus="'+$("#input_filtro_estatus").val()+'"]';if($('.seccion #preguntas .pregunta'+filtro_eje+filtro_plazos+filtro_aprobado+filtro_estatus).length==0)lightbox_abrir('<div class="align-center big margin-yb"><b>No hay líneas de acción que coincidan con la búsqueda realizada.</b></div>',{cancelar:{txt:"Ok",fn:null}},{});var estatus_captura=0,estatus_revision=0,estatus_aprobados=0,estatus_rechazados=0,estatus_revision_=0,porcentaje=0,porcentaje_ok=0,cumplio_arr={"0":0,"1":0,"2":0,"3":0,"4":0},estatus_total=$('.seccion #preguntas .pregunta'+filtro_eje+filtro_plazos+filtro_aprobado+filtro_estatus).length;$('.seccion #preguntas .pregunta'+filtro_eje+filtro_plazos+filtro_aprobado+filtro_estatus).each(function(index,element){if($(this).attr("data-captura")=="true")estatus_captura++;if($(this).attr("data-revision")=="true")estatus_revision++;if($(this).attr("data-aprobado")=="1"){estatus_aprobados++;porcentaje_ok+=parseInt($(this).find(".resumen .porcentaje").text())}else if($(this).attr("data-aprobado")=="2"){estatus_rechazados++}else if($(this).attr("data-aprobado")=="3")estatus_revision_++;cumplio_arr[$(this).find(".resumen .cumplio").attr("data-cumplio")]++;porcentaje+=parseInt($(this).find(".resumen .porcentaje").text());$(this).show()});if(estatus_total>0){porcentaje=porcentaje/estatus_total;porcentaje_ok=porcentaje_ok/estatus_total};for(var x in cumplio_arr)$('#div_estatus #cumplio_'+x).text(cumplio_arr[x]);$('#div_estatus #avance_promedio').text(porcentaje.toFixed(2));$('#div_estatus #avance_promedio_ok').text(porcentaje_ok.toFixed(2));$('#div_estatus #estatus_captura').text(estatus_captura);$('#div_estatus #estatus_revision').text(estatus_revision);$('#div_estatus #estatus_total, #div_estatus #estatus_revision_total').text(estatus_total);$('#div_estatus #estatus_aprobados').text(estatus_aprobados);$('#div_estatus #estatus_rechazados').text(estatus_rechazados);$('#div_estatus #estatus_revision_').text(estatus_revision_);$('#div_estatus').show();$('#btn_revision').unbind('click').bind('click',function(){if(estatus_captura==estatus_total&&estatus_captura>0){caputra_generales_revision({tipo:"Líneas de acción",idperiodo:$("#input_periodo").val(),periodo:$("#input_periodo option:selected").text(),idactor:sesion_data.id,actor:sesion_data.txt_perfil,perfil_txt:sesion_data.perfil_txt,eje:$("#input_filtro_ejes option:selected").text(),filtro:$("#input_filtro_plazos option:selected").text(),filtro_txt:"Plazo"})}else lightbox_abrir('<div class="align-center big margin-yb"><b>Advertencia</b></div>Capture todas las líneas de acción para solicitar una revisión.',{cancelar:{txt:"Ok",fn:null}},{});return false});$('#filtros').show()}}
function revision_generales_estatus(aprobo){var aprobo_txt="",aprobo_color="gray";switch(aprobo){case"1":aprobo_txt='<b style="color:green;">Aprobado</b>';aprobo_color="springgreen";break;case"2":aprobo_txt='<b style="color:red;">Rechazado</b>';aprobo_color="red";break;case"3":aprobo_txt='<b style="color:blue;">Enviado a revisión</b>';aprobo_color="blue";break};return{aprobo:aprobo,aprobo_txt:aprobo_txt,color:aprobo_color}}
function revision_generales_notificar(valores){var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");for(x in valores){var valor=valores[x];data.append(x,valor)};ajax_enviar(data,url_sitio+"ajax/sitio/revision_notificar.php",{ok:function(respuesta){event_google_analytics('revision_generales_notificar','servicio','ok');var html='<div align="center"><b>Se envió la notificación correctamente</b></div>';lightbox_abrir(html,{aceptar:{txt:"Ok",fn:null}},{})}},{})};var revision_indicador_formulario_arr=null,revision_indicador_captura=null,revision_indicador_revision=null,revision_indicador_datos={},revision_indicador_idindicador=null,revision_indicador_enviar_retro=null
function revision_indicador_ready(){$('#filtros').hide();$('#div_actor_municipio').hide();$('#div_estatus').hide();$('#div_actor_catalogo').hide();$('#div_actor_elemento').hide();revision_indicador_inicializar();sesion_verificar_ini=function(){if(sesion_permisos([1,5])){$("#input_periodo").unbind("change.f").bind("change.f",function(){revision_indicador_inicializar();revision_indicador_periodo(null)});$("#input_actor").unbind("change.f").bind("change.f",function(){revision_indicador_inicializar();var municipios=$("#input_actor option:selected").attr("data-municipio");if(municipios=="1"){form_opcional(usuarios_arr,"actor_municipio",false,false);if($("#input_actor option:selected").attr("data-municipio")=="1")revision_indicador_periodo(true)}else{form_opcional(usuarios_arr,"actor_municipio",true,false);revision_indicador_periodo(false)};var catalogos=$("#input_actor option:selected").attr("data-catalogo");if(catalogos=="1"){form_opcional(usuarios_arr,"actor_catalogo",false,false);form_opcional(usuarios_arr,"actor_elemento",false,false);if($("#input_actor option:selected").attr("data-catalogo")=="1");if($('#input_actor_catalogo option[value="'+$("#input_actor option:selected").attr("data-catalogo_pertenece")+'"]').length>0){$("#input_actor_catalogo").val($("#input_actor option:selected").attr("data-catalogo_pertenece"));$("#input_actor_catalogo").trigger("change.f")}}else{form_opcional(usuarios_arr,"actor_catalogo",true,false);form_opcional(usuarios_arr,"actor_elemento",true,false)}});$("#input_actor_municipio").unbind("change.f").bind("change.f",function(){revision_indicador_inicializar();revision_indicador_periodo(true)});$("#input_actor_catalogo").unbind("change.f").bind("change.f",function(){var _tabla=new tablaJSON({base:"elemento"});_tabla.loadData("filter","#input_actor_elemento","select",{ident:$("#input_actor_catalogo").val(),orden:[{col:"elemento",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_actor_elemento");var attr=$('#input_actor_elemento').attr('data-value');if(typeof attr!=='undefined'&&attr!==false&&attr!==""){$('#input_actor_elemento').val(attr);$("#input_actor_elemento").trigger("change.f")}},'catalogo')});$("#input_actor_elemento").unbind("change.f").bind("change.f",function(){revision_indicador_inicializar();revision_indicador_periodo(true)});var _tabla_periodos=new tablaJSON({base:"periodo",ajax:{loadData:"periodos_activos_rev.php"}});_tabla_periodos.loadData("all","#input_periodo","select",{orden:[{col:"inicia",tipo:"fecha",dir:"asc"}]},function(respuesta){$("#input_periodo").trigger("change.f")});$('#input_actor_municipio option:not(:first)').remove();for(var i in municipios_arr)$('#input_actor_municipio').append('<option value="'+municipios_arr[i]["id"]+'">'+municipios_arr[i]["municipio"]+'</option>');var attr=$('#input_actor_municipio').attr('data-value');if(typeof attr!=='undefined'&&attr!==false&&attr!==""){$('#input_actor_municipio').val(attr);$("#input_actor_municipio").trigger("change.f")};var _tabla_catalogo=new tablaJSON({base:"catalogo"});_tabla_catalogo.loadData("all","#input_actor_catalogo","select",{orden:[{col:"catalogo",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_actor_catalogo");var attr=$('#input_actor_catalogo').attr('data-value');if(typeof attr!=='undefined'&&attr!==false&&attr!==""){$('#input_actor_catalogo').val(attr);$("#input_actor_catalogo").trigger("change.f")}});var actores_funcion=function(data){for(var i in data){var actor=data[i],tiene="0";if(actor.actor_data.hasOwnProperty("municipios")&&actor.actor_data["municipios"].hasOwnProperty("v")&&actor.actor_data["municipios"]["v"][0]==1)tiene="1";$('#input_actor option[value="'+actor.idactor+'"]').attr("data-municipio",tiene);tiene="0";tiene_es="";if(actor.actor_data.hasOwnProperty("catalogos")&&actor.actor_data["catalogos"].hasOwnProperty("v")&&actor.actor_data["catalogos"]["v"][0]==1){tiene="1";tiene_es=actor.actor_data["catalogo_pertenece"]};$('#input_actor option[value="'+actor.idactor+'"]').attr("data-catalogo",tiene);$('#input_actor option[value="'+actor.idactor+'"]').attr("data-catalogo_pertenece",tiene_es)};$('#input_actor').trigger("change.f")};if(sesion_permisos([1])){var _tabla_actores=new tablaJSON({base:"actor"});_tabla_actores.loadData("all","#input_actor","select",{orden:[{col:"actor",tipo:"texto",dir:"asc"}]},actores_funcion)}else if(sesion_permisos([5])){var data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);data.append("institucion",1);ajax_enviar(data,url_sitio+"ajax/sitio/institucion_actores.php",{ok:function(respuesta){$('#input_actor option:not(:first)').remove();for(var i in respuesta.actor)$('#input_actor').append('<option value="'+respuesta.actor[i]["idactor"]+'">'+respuesta.actor[i]['actor_data']['actor']+'</option>');actores_funcion(respuesta.actor)}},{})};$("#btn_copiar").unbind("click.copiar").bind("click.copiar",function(){return false});$("#btn_imprimir").unbind("click.imprimir").bind("click.imprimir",function(){var html=$('#form_revision').html(),css='',titulo='';titulo+=$('#input_actor option:selected').text();if($('#input_actor_municipio').val()!="")titulo+=' - '+$('#input_actor_municipio option:selected').text();if($('#input_actor_elemento').val()!="")titulo+=' - '+$('#input_actor_elemento option:selected').text();var subtitulo='Indicadores';if($('#input_filtro_ejes').val()!=""){if(subtitulo!='')subtitulo+='<br>';subtitulo+=' Eje: '+$('#input_filtro_ejes option:selected').text()};if($('#input_filtro_metas_al').val()!=""){if(subtitulo!='')subtitulo+='<br>';subtitulo+=' Meta al año: '+$('#input_filtro_metas_al option:selected').text()};if(subtitulo!='')subtitulo='<h2>'+subtitulo+'</h2>';var fecha=new Date(),month=''+(fecha.getMonth()+1),day=''+fecha.getDate(),year=fecha.getFullYear();fecha=[year,month,day].join('-')+' '+[fecha.getHours(),fecha.getMinutes(),fecha.getSeconds()].join(':');fecha=form_fecha(fecha);var fechas='<h3>'+fecha.formato+'</h3>',mywindow=window.open('',"_blank");mywindow.document.write('<html><head><title>'+titulo+'</title>'+css);mywindow.document.write('<style> body { color:#000; font-size:1em; font-weight:400; text-align:justify; } p { margin:0 auto 1em auto; } h1, h2, h3, h4 { padding:0; margin:0; line-height:1.05em; text-transform:none; color: #000; } h1{ font-size:2em; padding-bottom:1em; text-align:center; } h2{ font-size:1.5em; padding-bottom:0.75em; } h3{ font-size:1.5em; padding-bottom:0.75em; } h4 { font-size:1.5em; padding-bottom:0.75em; } .eje div b{ color:#000; font-size:1em; }  .eje div{ padding:2px 0px !important; } .pregunta { border-bottom: 1px solid #000; padding-top:15px; margin-top:15px; } .no_imprimirs{ display:none; } .col .col2{ height:auto !important; } </style>');mywindow.document.write('<script type="text/javascript">window.onload = function() { window.print(); window.close(); };</script>');mywindow.document.write('</head><body >');mywindow.document.write('<h1>'+titulo+'</h1>'+subtitulo+fechas+html);mywindow.document.write('</body></html>');mywindow.document.close();mywindow.focus();return false})}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function revision_indicador_load(){revision_indicador_resize()}
function revision_indicador_resize(){scripts_resize()}
function revision_indicador_resize_(){revision_indicador_resize();setTimeout(function(){revision_indicador_resize()},200)}
function revision_indicador_inicializar(){revision_indicador_formulario_arr=null;revision_indicador_idindicador=null;$('#preguntas').html("");$('#filtros').hide();$('#mensajes #mensaje').html("");$('#usuarios .usuarios').html("");$("#mensajes").hide();$("#q_captura_todo").hide();$("#usuarios").hide()}
function revision_indicador_periodo(municipio){var temp_actor_municipio=null,temp_actor_catalogo=null,temp_actor_elemento=null,enviar=false;if($("#input_periodo").val()!=""&&$("#input_actor").val()!="")enviar=true;if($("#input_actor option:selected").attr("data-municipio")=="1"){enviar=false;if($("#input_actor_municipio").val()!=""){temp_actor_municipio=$("#input_actor_municipio").val();enviar=true}};if($("#input_actor option:selected").attr("data-catalogo")=="1"){enviar=false;if($("#input_actor_catalogo").val()!=""){temp_actor_catalogo=$("#input_actor_catalogo").val();if($("#input_actor_elemento").val()!=""){temp_actor_elemento=$("#input_actor_elemento").val();enviar=true}}};if(enviar){revision_indicador_periodo_servicio({periodo:$("#input_periodo").val(),actor:$("#input_actor").val(),actor_municipio:temp_actor_municipio,actor_catalogo:temp_actor_catalogo,actor_elemento:temp_actor_elemento})}else{$('#preguntas').html("");$('#div_estatus').hide();$('#filtros').hide()}}
function revision_indicador_periodo_servicio(valores){var data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);for(x in valores)data.append(x,valores[x]);var funcion=function(respuesta){event_google_analytics('revision_indicador','periodo','ok');if(respuesta.hasOwnProperty("ejes")&&respuesta.hasOwnProperty("ejes")){revision_indicador_periodo_filtros("#input_filtro_ejes",respuesta.ejes,"data-eje");$("#input_filtro_ejes").attr("rel","")};if(respuesta.hasOwnProperty("metas_al")&&respuesta.hasOwnProperty("metas_al")){revision_indicador_periodo_filtros("#input_filtro_metas_al",respuesta.metas_al,"data-meta_al");$("#input_filtro_metas_al").attr("rel","")};console.log("revision_indicador_periodo_servicio");revision_indicador_captura=null;if(respuesta.hasOwnProperty("captura")&&respuesta.captura.hasOwnProperty("captura_data"))revision_indicador_captura=respuesta.captura.captura_data.indicadores;revision_indicador_revision=null;if(respuesta.hasOwnProperty("revision")&&respuesta.revision.hasOwnProperty("revision_data"))revision_indicador_revision=respuesta.revision.revision_data.indicadores;if(respuesta.hasOwnProperty("err")){if(respuesta.err.indexOf(1)>=0){$("#mensajes").show();$('#mensajes #mensaje').append('<div class="red">No hay usuarios que tengan asignado al Actor responsble.</div>')};if(respuesta.err.indexOf(2)>=0){$("#mensajes").show();$('#mensajes #mensaje').append('<div class="orange">Al momento, no existe ninguna captura realizada por el Actor responsable.</div>')}};if(respuesta.usuarios.length>0){$("#usuarios").show();for(var i in respuesta.usuarios){var usuario=respuesta.usuarios[i],html=$(".machotes #usuario").html(),user=$(html).appendTo('#usuarios .usuarios'),municipio='';if(usuario.actor_municipio!=null){var index=municipios_arr.findIndex(function(elemento){return elemento.id===usuario.actor_municipio});municipio=' '+municipios_arr[index].municipio};var catalogos='';if(usuario.actor_catalogo!=null)if(usuario.actor_elemento!=null)catalogos=' '+usuario.perfil_txt;$(user).find(".nombre").text(usuario.nombre+' '+usuario.apellidos+' <'+usuario.usuario+'>');$(user).find(".perfil").text(usuario.perfil);$(user).find(".actor").text(usuario.actor+municipio+catalogos)}};$(".btn_filtro").each(function(index,element){$(this).removeClass("activo")});$("#input_filtro_aprobado").val("");$("#input_filtro_estatus").val("");revision_indicador_periodo_preguntas(respuesta);if(revision_indicador_enviar_retro!=null){var retroalimentacion=revision_indicador_periodo_preguntas_retroalimentacion(revision_indicador_enviar_retro);revision_indicador_periodo_preguntas_notificar(revision_indicador_enviar_retro,retroalimentacion);revision_indicador_enviar_retro=null};if(sesion_permisos([1])&&revision_indicador_captura!=null){$("#q_captura_todo").show();$("#btn_eliminar_todo_indicadores").unbind("click.del").bind("click.del",function(){var txt_municipio=(($('#input_actor_municipio').val()!="")?" - "+$('#input_actor_municipio option:selected').text():""),txt_catalogo="";if($('#input_actor_catalogo').val()!=""&&$('#input_actor_elemento').val())txt_catalogo=" - "+$('#input_actor_catalogo option:selected').text()+": "+$('#input_actor_elemento option:selected').text();lightbox_abrir('<h1>Eliminar</h1><p><b>¿Estas seguro de ELIMINAR las CAPTURAS y REVISIONES de INDICADORES del actor "'+$('#input_actor option:selected').text()+txt_municipio+txt_catalogo+'" en el periodo: '+$("#input_periodo option:selected").text()+'?</b></p>Sí eliminas toda la captura de indicadores del actor no podrás recuperarla posteriormente.',{aceptar:{txt:"Eliminar",fn:function(){var json_post={idperiodo:$("#input_periodo").val(),actor:$('#input_actor').val(),actor_municipio:(($("#input_actor_municipio").val()!="")?$("#input_actor_municipio").val():null),actor_catalogo:(($("#input_actor_catalogo").val()!="")?$("#input_actor_catalogo").val():null),actor_elemento:(($("#input_actor_elemento").val()!="")?$("#input_actor_elemento").val():null)},data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);for(x in json_post)data.append(x,json_post[x]);ajax_enviar(data,url_sitio+"ajax/sitio/revision_indicadores_eliminar.php",{ok:function(){revision_indicador_inicializar();revision_indicador_periodo(null)}},{})}},cancelar:{txt:"Cerrar",fn:null}},{size:"grande"});return false})}};ajax_enviar(data,url_sitio+"ajax/sitio/revision_indicadores.php",{ok:funcion},{})}
function revision_indicador_periodo_preguntas(respuesta){$('#preguntas').html("");$('#div_estatus').hide();var indicadores=respuesta.indicadores;for(var i in indicadores){var indicador=indicadores[i],html=$(".machotes #pregunta_indicador").html(),pregunta=$(html).appendTo('#preguntas');$(pregunta).attr("data-id",indicador.idindicador);$(pregunta).attr("data-eje",indicador.indicador_data.eje);$(pregunta).attr("data-plazo",indicador.idplazo);$(pregunta).attr("data-meta_al",indicador.indicador_data.meta_al);$(pregunta).attr("data-captura","false");$(pregunta).attr("data-revision","false");$(pregunta).attr("data-aprobado","0");$(pregunta).attr("data-estatus","0");$(pregunta).find(".indicador b.big").html(indicador.indicador_data.indicador);$(pregunta).find(".resumen").show();$(pregunta).find(".formulario").hide();$(pregunta).find(".detalles .eje").html('<div style=" padding:2px 5px;  background-color:'+indicador.color+'; color:#FFF; margin-bottom:0.5em;"><b>'+indicador.eje+'</b></div>');$(pregunta).find(".detalles .prioridad").text(indicador.prioridad);$(pregunta).find(".detalles .plazo").text(indicador.plazo);$(pregunta).find(".detalles .estrategia").text(indicador.estrategia);$(pregunta).find(".resumen .meta").text(indicador.indicador_data.meta);$(pregunta).find(".resumen .meta_al").text(indicador.indicador_data.meta_al);$(pregunta).find(".resumen .a_retro .retro").text(0);$(pregunta).find(".resumen .a_retro").attr("data-id",indicador.idindicador);$(pregunta).find(".resumen .a_capturar").attr("data-id",indicador.idindicador);$(pregunta).find(".resumen .a_capturar").text("Revisar");$(pregunta).find(".resumen .metodo").text(indicador.indicador_data.metodo);$(pregunta).find(".resumen .a_enviar").attr("data-id",indicador.idindicador);$(pregunta).find(".resumen .cumplio").attr("data-cumplio","0");revision_indicador_periodo_preguntas_evaluar(indicador.idindicador,indicador.indicador_data.metodo);revision_indicador_periodo_preguntas_retro(indicador.idindicador);revision_indicador_periodo_preguntas_enviar(indicador.idindicador);if(revision_indicador_captura!=null&&revision_indicador_captura.hasOwnProperty(indicador.idindicador)){$(pregunta).attr("data-captura","true");if(revision_indicador_captura[indicador.idindicador].hasOwnProperty('iniciado')&&revision_indicador_captura[indicador.idindicador].iniciado!=null&&Object.keys(revision_indicador_captura[indicador.idindicador].iniciado['v']).length>0&&revision_indicador_captura[indicador.idindicador].iniciado['v'][0]=="1"){$(pregunta).find(".resumen .cumplio").html('<b style="color:blue">'+revision_indicador_captura[indicador.idindicador]["avance"]+'</b>');$(pregunta).find(".detalles .estatus_captura").css("background-color","blue");$(pregunta).attr("data-estatus","1");$(pregunta).find(".resumen .cumplio").attr("data-cumplio","1");var temp=revision_indicador_captura[indicador.idindicador]["iniciado"]["v"][0];$(pregunta).find(".resumen .cumplio").attr("data-cumplio",temp);if(temp=="1"&&revision_indicador_captura[indicador.idindicador]["iniciado"]["e"].hasOwnProperty(temp)){$(pregunta).find(".resumen .porcentaje").text(revision_indicador_captura[indicador.idindicador]["iniciado"]["e"][temp]);if(revision_indicador_captura[indicador.idindicador]["iniciado"]["e"][temp]=="100"){$(pregunta).find(".resumen .cumplio").html('<b style="color:green">'+revision_indicador_captura[indicador.idindicador]["avance"]+'</b>');$(pregunta).find(".detalles .estatus_captura").css("background-color","springgreen");$(pregunta).attr("data-estatus","3");$(pregunta).find(".resumen .cumplio").attr("data-cumplio","3")}};var evidencia=revision_indicador_captura[indicador.idindicador]["evidencia"];if(evidencia!=null&&Object.keys(evidencia.v).length>0){$(pregunta).find(".resumen .evidencia").show();var html='<ul>',evidencia=revision_indicador_captura[indicador.idindicador]["evidencia"];for(zz in evidencia.v){var enlace='#';if(evidencia.hasOwnProperty('l')&&evidencia.l.hasOwnProperty(zz)&&evidencia.l[zz]!=null)html+='<li><a href="'+url_sitio+"files/indicadores/"+evidencia.l[zz]+'" target="_blank">'+evidencia.v[zz]+'</a></li>'};html+='</ul>';$(pregunta).find(".resumen .evidencia .listado").html(html)}}else{$(pregunta).find(".resumen .cumplio").html('<b style="color:red">El indicador no se ha iniciado</b>');$(pregunta).find(".detalles .estatus_captura").css("background-color","red");$(pregunta).attr("data-estatus","2");$(pregunta).find(".resumen .cumplio").attr("data-cumplio","2")}}else{$(pregunta).find(".resumen .cumplio").html('<b style="color:lightslategrey">No se ha iniciado la captura del avance</b>');$(pregunta).find(".resumen .evidencia").hide()};if(revision_indicador_revision!=null&&revision_indicador_revision.hasOwnProperty(indicador.idindicador)&&revision_indicador_revision[indicador.idindicador].hasOwnProperty("actual")){$(pregunta).attr("data-revision","true");var temp=revision_indicador_revision[indicador.idindicador]["actual"]["aprobo"]["v"][0],aprobo=revision_generales_estatus(temp);$(pregunta).attr("data-aprobado",temp);$(pregunta).find(".resumen .evaluacion").html(aprobo.aprobo_txt);$(pregunta).find(".resumen .retro").text(Object.keys(revision_indicador_revision[indicador.idindicador]["historico"]).length);$(pregunta).find(".detalles .estatus_revision").css("background-color",aprobo.color)}};revision_indicador_periodo_filtros_fn();revision_indicador_resize_();$(".btn_filtro").each(function(index,element){$(this).unbind("click").bind("click",function(){var tipo=$(this).attr("data-tipo"),elemento=this;$('.btn_filtro[data-tipo="'+tipo+'"]').each(function(index,element){if(element!=elemento)$(this).removeClass("activo")});$(this).toggleClass("activo");if($(this).hasClass("activo")){if(tipo=="aprobado"){$("#input_filtro_aprobado").val($(this).attr("data-value"))}else if(tipo=="estatus")$("#input_filtro_estatus").val($(this).attr("data-value"))}else if(tipo=="aprobado"){$("#input_filtro_aprobado").val("")}else if(tipo=="estatus")$("#input_filtro_estatus").val("");revision_indicador_periodo_filtros_fn();revision_indicador_resize_()})})}
function revision_indicador_periodo_preguntas_evaluar(idindicador){$('.seccion #preguntas .pregunta .a_capturar[data-id="'+idindicador+'"]').unbind("click.mostrar").bind("click.mostrar",function(){scripts_task_in_progress=true;revision_indicador_idindicador=idindicador;$('.seccion #preguntas .pregunta').each(function(index,element){$(this).find(".formulario").hide();$(this).find(".formulario").html("")});var html=$(".machotes #evaluar_formulario_indicador").html();$(html).appendTo('.seccion #preguntas .pregunta[data-id="'+idindicador+'"] .formulario');$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"] .formulario').show();revision_indicador_resize();revision_indicador_formulario_arr=[{key:"aprobo",nombre:"Aprobar captura del indicador",ele:'.pregunta[data-id="'+idindicador+'"] input[name="input_aprobo"]',tipo:"radio",validar:"entero",opcional:false,onChange:function(){switch($('.pregunta[data-id="'+idindicador+'"] input[name="input_aprobo"]:checked').val()){case"1":form_opcional(revision_indicador_formulario_arr,"retroalimentacion",true,true);$("#btn_pregunta_guardar").text("Aprobar");break;case"2":form_opcional(revision_indicador_formulario_arr,"retroalimentacion",false,true);$("#btn_pregunta_guardar").text("Enviar a revisión");break}}},{key:"retroalimentacion",nombre:"Retroalimentación",ele:'.pregunta[data-id="'+idindicador+'"] #input_retroalimentacion',tipo:"textarea",validar:"texto",opcional:false},{key:"notificar",nombre:"Notificar via correo electrónico al actor",ele:'.pregunta[data-id="'+idindicador+'"] input[name="input_notificar"]',tipo:"check",validar:"entero",opcional:true}];if(revision_indicador_revision!=null&&revision_indicador_revision.hasOwnProperty(idindicador)&&revision_indicador_revision[idindicador].hasOwnProperty("actual"))for(x in revision_indicador_revision[idindicador]["actual"]){var index=revision_indicador_formulario_arr.findIndex(function(elemento){return elemento.key===x});if(index>=0)revision_indicador_formulario_arr[index]["value"]=revision_indicador_revision[idindicador]["actual"][x]};revision_indicador_periodo_preguntas_forma();revision_indicador_resize();return false})}
function revision_indicador_periodo_preguntas_forma(){form_init(revision_indicador_formulario_arr);$("#btn_pregunta_guardar").unbind('click').bind('click',function(){revision_indicador_periodo_preguntas_validar();return false});$("#btn_pregunta_regresar").unbind('click').bind('click',function(){scripts_task_in_progress=false;$('.seccion #preguntas .pregunta').each(function(index,element){$(this).find(".formulario").hide();$(this).find(".formulario").html("")});revision_indicador_resize_();return false})}
function revision_indicador_periodo_preguntas_validar(){respuesta=form_validar(revision_indicador_formulario_arr);if(respuesta.i==0){revision_indicador_periodo_preguntas_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<div class="align-center big margin-yb"><b>Por favor, ingrese lo siguiente:</b></div>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('revision_indicador_formulario','validar','error')}}
function revision_indicador_periodo_preguntas_servicio(valores){event_google_analytics('revision_indicador_formulario','servicio','iniciar');var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");data.append("idindicador",revision_indicador_idindicador);data.append("idperiodo",$("#input_periodo").val());data.append("actor",$("#input_actor").val());data.append("actor_municipio",($("#input_actor_municipio").val()!="")?$("#input_actor_municipio").val():null);data.append("actor_catalogo",($("#input_actor_catalogo").val()!="")?$("#input_actor_catalogo").val():null);data.append("actor_elemento",($("#input_actor_elemento").val()!="")?$("#input_actor_elemento").val():null);valores=form_input_valores(valores,revision_indicador_formulario_arr);for(x in valores){var valor=valores[x];if(x=="notificar"&&valor!=null)if(Object.keys(valor.v).length>0&&valor.v[0]==1)revision_indicador_enviar_retro=revision_indicador_idindicador;if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};ajax_enviar(data,url_sitio+"ajax/sitio/revision_indicadores_servicio.php",{ok:function(respuesta){event_google_analytics('revision_indicador_formulario','servicio','ok');scripts_task_in_progress=false;lightbox_abrir('<div align="center"><b>Se guardo la información correctamente</b></div>',{aceptar:{txt:"Continuar",fn:function(){revision_indicador_inicializar();revision_indicador_periodo(null)}}},{})}},{})}
function revision_indicador_periodo_preguntas_retro(idindicador){console.log('.seccion #preguntas .pregunta .a_retro[data-id="'+idindicador+'"]');$('.seccion #preguntas .pregunta .a_retro[data-id="'+idindicador+'"]').unbind("click.mostrar").bind("click.mostrar",function(){var html='';if(revision_indicador_revision!=null&&revision_indicador_revision.hasOwnProperty(idindicador)&&revision_indicador_revision[idindicador].hasOwnProperty("historico")){var historico=revision_indicador_revision[idindicador]["historico"].reverse();for(x in historico){html+='<div style="margin-bottom:1em; border-bottom:1px solid #ccc;">';var historia=historico[x],temp=historia.aprobo["v"][0],aprobo=revision_generales_estatus(temp);html+='<p>'+aprobo.aprobo_txt+'</p>';if(historia.retroalimentacion!=null&&historia.retroalimentacion!="")html+='<p>'+form_nl2br(historia.retroalimentacion)+'</p>';html+='<p>Fecha: <i><b>'+historia.quien["fecha"]+'</b></i></p>';html+='</div>'}};lightbox_abrir('<h1 class="align-left">Retroalimentación:</h1>'+html,{aceptar:{txt:"Cerrar",fn:function(){}}},{size:"grande",close_btn:true});return false})}
function revision_indicador_periodo_filtros(ele,datos,attr){$(ele+'  > option:nth-child(n+3)').remove();var attr=$(ele).attr('rel');if(typeof attr!=='undefined'&&attr!==false);else attr="";for(var i in datos)$(ele).append('<option value="'+i+'">'+datos[i]+'</option>');if($(ele+' option[value="'+attr+'"]').length==1)$(ele).val(attr);$(ele).unbind("change.f").bind("change.f",function(){$(this).attr("rel",$(this).val());revision_indicador_periodo_filtros_fn();revision_indicador_resize_()})}
function revision_indicador_periodo_filtros_fn(){$('.seccion #preguntas .pregunta').each(function(index,element){$(this).hide()});$('#div_estatus').hide();if($("#input_filtro_ejes").val()!=""||$("#input_filtro_metas_al").val()!=""||$("#input_filtro_aprobado").val()!=""||$("#input_filtro_estatus").val()){var filtro_eje='',filtro_metas_al='',filtro_aprobado='',filtro_estatus='';if($("#input_filtro_ejes").val()!="")if($("#input_filtro_ejes").val()=="-1"){filtro_eje='[data-eje]'}else filtro_eje='[data-eje="'+$("#input_filtro_ejes").val()+'"]';if($("#input_filtro_metas_al").val()!="")if($("#input_filtro_metas_al").val()=="-1"){filtro_metas_al='[data-meta_al]'}else filtro_metas_al='[data-meta_al="'+$("#input_filtro_metas_al").val()+'"]';if($("#input_filtro_aprobado").val()!="")filtro_aprobado='[data-aprobado="'+$("#input_filtro_aprobado").val()+'"]';if($("#input_filtro_estatus").val()!="")filtro_estatus='[data-estatus="'+$("#input_filtro_estatus").val()+'"]';if($('.seccion #preguntas .pregunta'+filtro_eje+filtro_metas_al+filtro_aprobado+filtro_estatus).length==0)lightbox_abrir('<div class="align-center big margin-yb"><b>Sin resultados</b></div>',{cancelar:{txt:"Ok",fn:null}},{});var estatus_captura=0,estatus_revision=0,estatus_aprobados=0,estatus_rechazados=0,estatus_revision_=0,porcentaje=0,porcentaje_ok=0,cumplio_arr={"0":0,"1":0,"2":0,"3":0},estatus_total=$('.seccion #preguntas .pregunta'+filtro_eje+filtro_metas_al+filtro_aprobado+filtro_estatus).length;$('.seccion #preguntas .pregunta'+filtro_eje+filtro_metas_al+filtro_aprobado+filtro_estatus).each(function(index,element){if($(this).attr("data-captura")=="true")estatus_captura++;if($(this).attr("data-revision")=="true")estatus_revision++;if($(this).attr("data-aprobado")=="1"){estatus_aprobados++;porcentaje_ok+=parseInt($(this).find(".resumen .porcentaje").text())}else if($(this).attr("data-aprobado")=="2"){estatus_rechazados++}else if($(this).attr("data-aprobado")=="3")estatus_revision_++;cumplio_arr[$(this).find(".resumen .cumplio").attr("data-cumplio")]++;porcentaje+=parseInt($(this).find(".resumen .porcentaje").text());$(this).show()});if(estatus_total>0){porcentaje=porcentaje/estatus_total;porcentaje_ok=porcentaje_ok/estatus_total};for(var x in cumplio_arr)$('#div_estatus #cumplio_'+x).text(cumplio_arr[x]);$('#div_estatus #avance_promedio').text(porcentaje.toFixed(2));$('#div_estatus #avance_promedio_ok').text(porcentaje_ok.toFixed(2));$('#div_estatus #estatus_captura').text(estatus_captura);$('#div_estatus #estatus_revision').text(estatus_revision);$('#div_estatus #estatus_total, #div_estatus #estatus_revision_total').text(estatus_total);$('#div_estatus #estatus_aprobados').text(estatus_aprobados);$('#div_estatus #estatus_rechazados').text(estatus_rechazados);$('#div_estatus #estatus_revision_').text(estatus_revision_);$('#div_estatus').show();$('#filtros').show()}}
function revision_indicador_periodo_preguntas_enviar(idindicador){$('.seccion #preguntas .pregunta .a_enviar[data-id="'+idindicador+'"]').unbind("click.enviar").bind("click.enviar",function(){lightbox_abrir('<div class="align-center big margin-yb"><b>Notificar</b></div> Se notificará al actor la últma revisión del indicador via correo electrónico.',{aceptar:{txt:"Notificar",fn:function(){var retroalimentacion=revision_indicador_periodo_preguntas_retroalimentacion(idindicador);revision_indicador_periodo_preguntas_notificar(idindicador,retroalimentacion)}},cancelar:{txt:"Cerrar",fn:null}},{});return false})}
function revision_indicador_periodo_preguntas_retroalimentacion(idindicador){var retroalimentacion="";if(revision_indicador_revision!=null&&revision_indicador_revision.hasOwnProperty(idindicador)&&revision_indicador_revision[idindicador].hasOwnProperty("historico")){var temp=revision_indicador_revision[idindicador]["historico"][revision_indicador_revision[idindicador]["historico"].length-1];if(temp.retroalimentacion!=null&&temp.retroalimentacion!="")retroalimentacion=temp.retroalimentacion};return retroalimentacion}
function revision_indicador_periodo_preguntas_notificar(idindicador,retroalimentacion){revision_generales_notificar({tipo:"Indicador",idperiodo:$("#input_periodo").val(),periodo:$("#input_periodo option:selected").text(),eje:$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"]').find(".detalles .eje").text(),prioridad:$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"]').find(".detalles .prioridad").text(),plazo:$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"]').find(".detalles .plazo").text(),estrategia:$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"]').find(".detalles .estrategia").text(),idactor:$('#input_actor').val(),actor:$('#input_actor option:selected').text(),idmunicipio:$('#input_actor_municipio').val(),municipio:(($('#input_actor_municipio').val()!="")?$('#input_actor_municipio option:selected').text():""),idcatalogo:$('#input_actor_catalogo').val(),catalogo:(($('#input_actor_catalogo').val()!="")?$('#input_actor_catalogo option:selected').text():""),idelemento:$('#input_actor_elemento').val(),elemento:(($('#input_actor_elemento').val()!="")?$('#input_actor_elemento option:selected').text():""),data_1:$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"]').find(".indicador b.big").text(),data_2:$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"]').find(".resumen .meta").text(),data_3:$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"]').find(".resumen .meta_al").text(),cumplio:$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"]').find(".resumen .cumplio_txt").text(),evaluacion:$('.seccion #preguntas .pregunta[data-id="'+idindicador+'"]').find(".resumen .evaluacion").text(),retroalimentacion:retroalimentacion})};var revision_linea_formulario_arr=null,revision_linea_captura=null,revision_linea_revision=null,revision_linea_datos={},revision_linea_idlinea=null,revision_linea_enviar_retro=null
function revision_linea_ready(){$('#filtros').hide();$('#div_estatus').hide();$('#div_actor_municipio').hide();$('#div_actor_catalogo').hide();$('#div_actor_elemento').hide();revision_linea_inicializar();sesion_verificar_ini=function(){if(sesion_permisos([1,5])){$("#input_periodo").unbind("change.f").bind("change.f",function(){revision_linea_inicializar();revision_linea_periodo(null)});$("#input_actor").unbind("change.f").bind("change.f",function(){revision_linea_inicializar();var municipios=$("#input_actor option:selected").attr("data-municipio");if(municipios=="1"){form_opcional(usuarios_arr,"actor_municipio",false,false);if($("#input_actor option:selected").attr("data-municipio")=="1")revision_linea_periodo(true)}else{form_opcional(usuarios_arr,"actor_municipio",true,false);revision_linea_periodo(false)};var catalogos=$("#input_actor option:selected").attr("data-catalogo");if(catalogos=="1"){form_opcional(usuarios_arr,"actor_catalogo",false,false);form_opcional(usuarios_arr,"actor_elemento",false,false);if($("#input_actor option:selected").attr("data-catalogo")=="1");if($('#input_actor_catalogo option[value="'+$("#input_actor option:selected").attr("data-catalogo_pertenece")+'"]').length>0){$("#input_actor_catalogo").val($("#input_actor option:selected").attr("data-catalogo_pertenece"));$("#input_actor_catalogo").trigger("change.f")}}else{form_opcional(usuarios_arr,"actor_catalogo",true,false);form_opcional(usuarios_arr,"actor_elemento",true,false)}});$("#input_actor_municipio").unbind("change.f").bind("change.f",function(){revision_linea_inicializar();revision_linea_periodo(true)});$("#input_actor_catalogo").unbind("change.f").bind("change.f",function(){var _tabla=new tablaJSON({base:"elemento"});_tabla.loadData("filter","#input_actor_elemento","select",{ident:$("#input_actor_catalogo").val(),orden:[{col:"elemento",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_actor_elemento");var attr=$('#input_actor_elemento').attr('data-value');if(typeof attr!=='undefined'&&attr!==false&&attr!==""){$('#input_actor_elemento').val(attr);$("#input_actor_elemento").trigger("change.f")}},'catalogo')});$("#input_actor_elemento").unbind("change.f").bind("change.f",function(){revision_linea_inicializar();revision_linea_periodo(true)});var _tabla_periodos=new tablaJSON({base:"periodo",ajax:{loadData:"periodos_activos_rev.php"}});_tabla_periodos.loadData("all","#input_periodo","select",{orden:[{col:"inicia",tipo:"fecha",dir:"asc"}]},function(respuesta){$("#input_periodo").trigger("change.f")});$('#input_actor_municipio option:not(:first)').remove();for(var i in municipios_arr)$('#input_actor_municipio').append('<option value="'+municipios_arr[i]["id"]+'">'+municipios_arr[i]["municipio"]+'</option>');var attr=$('#input_actor_municipio').attr('data-value');if(typeof attr!=='undefined'&&attr!==false&&attr!==""){$('#input_actor_municipio').val(attr);$("#input_actor_municipio").trigger("change.f")};var _tabla_catalogo=new tablaJSON({base:"catalogo"});_tabla_catalogo.loadData("all","#input_actor_catalogo","select",{orden:[{col:"catalogo",tipo:"texto",dir:"asc"}]},function(){form_rel("#input_actor_catalogo");var attr=$('#input_actor_catalogo').attr('data-value');if(typeof attr!=='undefined'&&attr!==false&&attr!==""){$('#input_actor_catalogo').val(attr);$("#input_actor_catalogo").trigger("change.f")}});var actores_funcion=function(data){for(var i in data){var actor=data[i],tiene="0";if(actor.actor_data.hasOwnProperty("municipios")&&actor.actor_data["municipios"].hasOwnProperty("v")&&actor.actor_data["municipios"]["v"][0]==1)tiene="1";$('#input_actor option[value="'+actor.idactor+'"]').attr("data-municipio",tiene);tiene="0";tiene_es="";if(actor.actor_data.hasOwnProperty("catalogos")&&actor.actor_data["catalogos"].hasOwnProperty("v")&&actor.actor_data["catalogos"]["v"][0]==1){tiene="1";tiene_es=actor.actor_data["catalogo_pertenece"]};$('#input_actor option[value="'+actor.idactor+'"]').attr("data-catalogo",tiene);$('#input_actor option[value="'+actor.idactor+'"]').attr("data-catalogo_pertenece",tiene_es)};$('#input_actor').trigger("change.f")};if(sesion_permisos([1])){var _tabla_actores=new tablaJSON({base:"actor"});_tabla_actores.loadData("all","#input_actor","select",{orden:[{col:"actor",tipo:"texto",dir:"asc"}]},actores_funcion)}else if(sesion_permisos([5])){var data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);data.append("institucion",1);ajax_enviar(data,url_sitio+"ajax/sitio/institucion_actores.php",{ok:function(respuesta){$('#input_actor option:not(:first)').remove();for(var i in respuesta.actor)$('#input_actor').append('<option value="'+respuesta.actor[i]["idactor"]+'">'+respuesta.actor[i]['actor_data']['actor']+'</option>');actores_funcion(respuesta.actor)}},{})};$("#btn_copiar").unbind("click.copiar").bind("click.copiar",function(){return false});$("#btn_imprimir").unbind("click.imprimir").bind("click.imprimir",function(){var html=$('#form_revision').html(),css='',titulo='';titulo+=$('#input_actor option:selected').text();if($('#input_actor_municipio').val()!="")titulo+=' - '+$('#input_actor_municipio option:selected').text();if($('#input_actor_elemento').val()!="")titulo+=' - '+$('#input_actor_elemento option:selected').text();var subtitulo='Líneas de acción';if($('#input_filtro_ejes').val()!=""){if(subtitulo!='')subtitulo+='<br>';subtitulo+=' Eje: '+$('#input_filtro_ejes option:selected').text()};if($('#input_filtro_plazos').val()!=""){if(subtitulo!='')subtitulo+='<br>';subtitulo+=' Plazo: '+$('#input_filtro_plazos option:selected').text()};if(subtitulo!='')subtitulo='<h2>'+subtitulo+'</h2>';var fecha=new Date(),month=''+(fecha.getMonth()+1),day=''+fecha.getDate(),year=fecha.getFullYear();fecha=[year,month,day].join('-')+' '+[fecha.getHours(),fecha.getMinutes(),fecha.getSeconds()].join(':');fecha=form_fecha(fecha);var fechas='<h3>'+fecha.formato+'</h3>',mywindow=window.open('',"_blank");mywindow.document.write('<html><head><title>'+titulo+'</title>'+css);mywindow.document.write('<style> body { color:#000; font-size:1em; font-weight:400; text-align:justify; } p { margin:0 auto 1em auto; } h1, h2, h3, h4 { padding:0; margin:0; line-height:1.05em; text-transform:none; color: #000; } h1{ font-size:2em; padding-bottom:1em; text-align:center; } h2{ font-size:1.5em; padding-bottom:0.75em; } h3{ font-size:1.5em; padding-bottom:0.75em; } h4 { font-size:1.5em; padding-bottom:0.75em; } .eje div b{ color:#000; font-size:1em; }  .eje div{ padding:2px 0px !important; } .pregunta { border-bottom: 1px solid #000; padding-top:15px; margin-top:15px; } .no_imprimirs{ display:none; } .col .col2{ height:auto !important; } </style>');mywindow.document.write('<script type="text/javascript">window.onload = function() { window.print(); window.close(); };</script>');mywindow.document.write('</head><body >');mywindow.document.write('<h1>'+titulo+'</h1>'+subtitulo+fechas+html);mywindow.document.write('</body></html>');mywindow.document.close();mywindow.focus();return false})}else window.location.href=$('#a_panel').attr('href')};sesion_verificar_no=function(){}}
function revision_linea_load(){revision_linea_resize()}
function revision_linea_resize(){scripts_resize()}
function revision_linea_resize_(){revision_linea_resize();setTimeout(function(){revision_linea_resize()},200)}
function revision_linea_inicializar(){revision_linea_idlinea=null;revision_linea_formulario_arr=null;$('#preguntas').html("");$('#filtros').hide();$('#mensajes #mensaje').html("");$('#usuarios .usuarios').html("");$("#mensajes").hide();$("#q_captura_todo").hide();$("#usuarios").hide()}
function revision_linea_periodo(municipio){var temp_actor_municipio=null,temp_actor_catalogo=null,temp_actor_elemento=null,enviar=false;if($("#input_periodo").val()!=""&&$("#input_actor").val()!="")enviar=true;if($("#input_actor option:selected").attr("data-municipio")=="1"){enviar=false;if($("#input_actor_municipio").val()!=""){temp_actor_municipio=$("#input_actor_municipio").val();enviar=true}};if($("#input_actor option:selected").attr("data-catalogo")=="1"){enviar=false;if($("#input_actor_catalogo").val()!=""){temp_actor_catalogo=$("#input_actor_catalogo").val();if($("#input_actor_elemento").val()!=""){temp_actor_elemento=$("#input_actor_elemento").val();enviar=true}}};if(enviar){revision_linea_periodo_servicio({periodo:$("#input_periodo").val(),actor:$("#input_actor").val(),actor_municipio:temp_actor_municipio,actor_catalogo:temp_actor_catalogo,actor_elemento:temp_actor_elemento})}else{$('#preguntas').html("");$('#div_estatus').hide();$('#filtros').hide()}}
function revision_linea_periodo_servicio(valores){var data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);for(x in valores)data.append(x,valores[x]);var funcion=function(respuesta){event_google_analytics('revision_linea','periodo','ok');if(respuesta.hasOwnProperty("ejes")&&respuesta.hasOwnProperty("ejes")){revision_linea_periodo_filtros("#input_filtro_ejes",respuesta.ejes,"data-eje");$("#input_filtro_ejes").attr("rel","")};if(respuesta.hasOwnProperty("plazos")&&respuesta.hasOwnProperty("plazos")){revision_linea_periodo_filtros("#input_filtro_plazos",respuesta.plazos,"data-plazo");$('#input_filtro_plazos option:first').remove();$('#input_filtro_plazos option:first').remove();var opciones=$("#input_filtro_plazos option");opciones.detach().sort(function(a,b){var at=$(a).text(),bt=$(b).text();return(at>bt)?1:((at<bt)?-1:0)});opciones.appendTo("#input_filtro_plazos");$("#input_filtro_plazos").prepend("<option value='-1'>Todos los plazos</option>");$("#input_filtro_plazos").prepend("<option value=''>Seleccione</option>");var attr=$("#input_filtro_plazos").attr('rel');if(typeof attr!=='undefined'&&attr!==false);else attr="";if($('#input_filtro_plazos option[value="'+attr+'"]').length==1)$("#input_filtro_plazos").val(attr);$("#input_filtro_plazos").attr("rel","")};console.log("revision_linea_periodo_servicio",$("#input_filtro_plazos").attr('rel'));revision_linea_captura=null;if(respuesta.hasOwnProperty("captura")&&respuesta.captura.hasOwnProperty("captura_data"))revision_linea_captura=respuesta.captura.captura_data.lineas;revision_linea_revision=null;if(respuesta.hasOwnProperty("revision")&&respuesta.revision.hasOwnProperty("revision_data"))revision_linea_revision=respuesta.revision.revision_data.lineas;if(respuesta.hasOwnProperty("err")){if(respuesta.err.indexOf(1)>=0){$("#mensajes").show();$('#mensajes #mensaje').append('<div class="red">No hay usuarios que tengan asignado al Actor responsble.</div>')};if(respuesta.err.indexOf(2)>=0){$("#mensajes").show();$('#mensajes #mensaje').append('<div class="orange">Al momento, no existe ninguna captura realizada por el Actor responsable.</div>')}};if(respuesta.usuarios.length>0){$("#usuarios").show();for(var i in respuesta.usuarios){var usuario=respuesta.usuarios[i],html=$(".machotes #usuario").html(),user=$(html).appendTo('#usuarios .usuarios'),municipio='';if(usuario.actor_municipio!=null){var index=municipios_arr.findIndex(function(elemento){return elemento.id===usuario.actor_municipio});municipio=' '+municipios_arr[index].municipio};var catalogos='';if(usuario.actor_catalogo!=null)if(usuario.actor_elemento!=null)catalogos=' '+usuario.perfil_txt;$(user).find(".nombre").text(usuario.nombre+' '+usuario.apellidos+' <'+usuario.usuario+'>');$(user).find(".perfil").text(usuario.perfil);$(user).find(".actor").text(usuario.actor+municipio+catalogos)}};$(".btn_filtro").each(function(index,element){$(this).removeClass("activo")});$("#input_filtro_aprobado").val("");$("#input_filtro_estatus").val("");revision_linea_periodo_preguntas(respuesta);if(revision_linea_enviar_retro!=null){var retroalimentacion=revision_linea_periodo_preguntas_retroalimentacion(revision_linea_enviar_retro);revision_linea_periodo_preguntas_notificar(revision_linea_enviar_retro,retroalimentacion);revision_linea_enviar_retro=null};if(sesion_permisos([1])&&revision_linea_captura!=null){$("#q_captura_todo").show();$("#btn_eliminar_todo_lineas").unbind("click.del").bind("click.del",function(){var txt_municipio=(($('#input_actor_municipio').val()!="")?" - "+$('#input_actor_municipio option:selected').text():""),txt_catalogo="";if($('#input_actor_catalogo').val()!=""&&$('#input_actor_elemento').val())txt_catalogo=" - "+$('#input_actor_catalogo option:selected').text()+": "+$('#input_actor_elemento option:selected').text();lightbox_abrir('<h1>Eliminar</h1><p><b>¿Estas seguro de ELIMINAR las CAPTURAS y REVISIONES de LÍNEAS DE ACCIÓN del actor "'+$('#input_actor option:selected').text()+txt_municipio+txt_catalogo+'" en el periodo: '+$("#input_periodo option:selected").text()+'?</b></p>Sí eliminas toda la captura de líneas de acción del actor no podrás recuperarla posteriormente.',{aceptar:{txt:"Eliminar",fn:function(){var json_post={idperiodo:$("#input_periodo").val(),actor:$('#input_actor').val(),actor_municipio:(($("#input_actor_municipio").val()!="")?$("#input_actor_municipio").val():null),actor_catalogo:(($("#input_actor_catalogo").val()!="")?$("#input_actor_catalogo").val():null),actor_elemento:(($("#input_actor_elemento").val()!="")?$("#input_actor_elemento").val():null)},data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);for(x in json_post)data.append(x,json_post[x]);ajax_enviar(data,url_sitio+"ajax/sitio/revision_lineas_eliminar.php",{ok:function(){revision_linea_inicializar();revision_linea_periodo(null)}},{})}},cancelar:{txt:"Cerrar",fn:null}},{size:"grande"});return false})}};ajax_enviar(data,url_sitio+"ajax/sitio/revision_lineas.php",{ok:funcion},{})}
function revision_linea_periodo_preguntas(respuesta){$('#preguntas').html("");$('#div_estatus').hide();var lineas=respuesta.lineas;for(var i in lineas){var linea=lineas[i],html=$(".machotes #pregunta_linea").html(),pregunta=$(html).appendTo('#preguntas');$(pregunta).attr("data-id",linea.idlinea);$(pregunta).attr("data-eje",linea.linea_data.eje);$(pregunta).attr("data-plazo",linea.idplazo);$(pregunta).attr("data-captura","false");$(pregunta).attr("data-revision","false");$(pregunta).attr("data-aprobado","0");$(pregunta).attr("data-estatus","0");$(pregunta).find("b.big").html(linea.linea_data.linea);$(pregunta).find(".resumen").show();$(pregunta).find(".formulario").hide();$(pregunta).find(".detalles .eje").html('<div style=" padding:2px 5px;  background-color:'+linea.color+'; color:#FFF; margin-bottom:0.5em;"><b>'+linea.eje+'</b></div>');$(pregunta).find(".detalles .prioridad").text(linea.prioridad);$(pregunta).find(".detalles .plazo").text(linea.plazo);$(pregunta).find(".detalles .estrategia").text(linea.estrategia);$(pregunta).find(".resumen .porcentaje").text(0);$(pregunta).find(".resumen .a_retro .retro").text(0);$(pregunta).find(".resumen .a_retro").attr("data-id",linea.idlinea);$(pregunta).find(".resumen .a_ver").attr("data-id",linea.idlinea);$(pregunta).find(".resumen .a_capturar").attr("data-id",linea.idlinea);$(pregunta).find(".resumen .a_capturar").text("Revisar");$(pregunta).find(".resumen .a_enviar").attr("data-id",linea.idlinea);$(pregunta).find(".resumen .cumplio").attr("data-cumplio","0");revision_linea_periodo_preguntas_evaluar(linea.idlinea);revision_linea_periodo_preguntas_retro(linea.idlinea);revision_linea_periodo_preguntas_enviar(linea.idlinea);if(revision_linea_captura!=null&&revision_linea_captura.hasOwnProperty(linea.idlinea)){$(pregunta).attr("data-captura","true");var temp=revision_linea_captura[linea.idlinea]["cumplio"]["v"][0];$(pregunta).find(".resumen .cumplio").attr("data-cumplio",temp);var cumplio=captura_generales_estatus(temp,revision_linea_captura[linea.idlinea]["cumplio"]["e"][temp]);$(pregunta).find(".resumen .cumplio").html(cumplio.cumplio_txt);$(pregunta).find(".detalles .estatus_captura").css("background-color",cumplio.color);$(pregunta).attr("data-estatus",cumplio.cumplio);$(pregunta).find(".resumen .porcentaje").text(cumplio.avance);$(pregunta).find(".resumen .descripcion").show();$(pregunta).find(".resumen .evidencia").show();$(pregunta).find(".resumen .descripcion").html(form_nl2br(revision_linea_captura[linea.idlinea]["descripcion"]));var html='<ul>',evidencia=revision_linea_captura[linea.idlinea]["evidencia"];for(zz in evidencia.v){var enlace='#';if(evidencia.hasOwnProperty('l')&&evidencia.l.hasOwnProperty(zz)&&evidencia.l[zz]!=null)html+='<li><a href="'+url_sitio+"files/lineas/"+evidencia.l[zz]+'" target="_blank">'+evidencia.v[zz]+'</a></li>'};html+='</ul>';$(pregunta).find(".resumen .evidencia .listado").html(html)}else{$(pregunta).find(".resumen .cumplio").html('<b style="color:lightslategrey">No se ha iniciado la captura</b>');$(pregunta).find(".resumen .porcentaje").text(0);$(pregunta).find(".resumen .descripcion").hide();$(pregunta).find(".resumen .evidencia").hide()};if(revision_linea_revision!=null&&revision_linea_revision.hasOwnProperty(linea.idlinea)&&revision_linea_revision[linea.idlinea].hasOwnProperty("actual")){$(pregunta).attr("data-revision","true");var temp=revision_linea_revision[linea.idlinea]["actual"]["aprobo"]["v"][0],aprobo=revision_generales_estatus(temp);$(pregunta).attr("data-aprobado",temp);$(pregunta).find(".resumen .evaluacion").html(aprobo.aprobo_txt);$(pregunta).find(".resumen .retro").text(Object.keys(revision_linea_revision[linea.idlinea]["historico"]).length);$(pregunta).find(".detalles .estatus_revision").css("background-color",aprobo.color)}};revision_linea_periodo_filtros_fn();revision_linea_resize_();$(".btn_filtro").each(function(index,element){$(this).unbind("click").bind("click",function(){var tipo=$(this).attr("data-tipo"),elemento=this;$('.btn_filtro[data-tipo="'+tipo+'"]').each(function(index,element){if(element!=elemento)$(this).removeClass("activo")});$(this).toggleClass("activo");if($(this).hasClass("activo")){if(tipo=="aprobado"){$("#input_filtro_aprobado").val($(this).attr("data-value"))}else if(tipo=="estatus")$("#input_filtro_estatus").val($(this).attr("data-value"))}else if(tipo=="aprobado"){$("#input_filtro_aprobado").val("")}else if(tipo=="estatus")$("#input_filtro_estatus").val("");revision_linea_periodo_filtros_fn();revision_linea_resize_()})})}
function revision_linea_periodo_preguntas_evaluar(idlinea){$('.seccion #preguntas .pregunta .a_capturar[data-id="'+idlinea+'"]').unbind("click.mostrar").bind("click.mostrar",function(){scripts_task_in_progress=true;revision_linea_idlinea=idlinea;$('.seccion #preguntas .pregunta').each(function(index,element){$(this).find(".formulario").hide();$(this).find(".formulario").html("")});var html=$(".machotes #evaluar_formulario").html();$(html).appendTo('.seccion #preguntas .pregunta[data-id="'+idlinea+'"] .formulario');$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"] .formulario').show();revision_linea_resize();revision_linea_formulario_arr=[{key:"aprobo",nombre:"Aprobar captura de la línea de acción",ele:'.pregunta[data-id="'+idlinea+'"] input[name="input_aprobo"]',tipo:"radio",validar:"entero",opcional:false,onChange:function(){switch($('.pregunta[data-id="'+idlinea+'"] input[name="input_aprobo"]:checked').val()){case"1":form_opcional(revision_linea_formulario_arr,"retroalimentacion",true,true);$("#btn_pregunta_guardar").text("Aprobar");break;case"2":form_opcional(revision_linea_formulario_arr,"retroalimentacion",false,true);$("#btn_pregunta_guardar").text("Enviar a revisión");break}}},{key:"retroalimentacion",nombre:"Retroalimentación",ele:'.pregunta[data-id="'+idlinea+'"] #input_retroalimentacion',tipo:"textarea",validar:"texto",opcional:false},{key:"notificar",nombre:"Notificar via correo electrónico al actor",ele:'.pregunta[data-id="'+idlinea+'"] input[name="input_notificar"]',tipo:"check",validar:"entero",opcional:true}];if(revision_linea_revision!=null&&revision_linea_revision.hasOwnProperty(idlinea)&&revision_linea_revision[idlinea].hasOwnProperty("actual"))for(x in revision_linea_revision[idlinea]["actual"]){var index=revision_linea_formulario_arr.findIndex(function(elemento){return elemento.key===x});if(index>=0)revision_linea_formulario_arr[index]["value"]=revision_linea_revision[idlinea]["actual"][x]};revision_linea_periodo_preguntas_forma();revision_linea_resize();return false})}
function revision_linea_periodo_preguntas_forma(){form_init(revision_linea_formulario_arr);$("#btn_pregunta_guardar").unbind('click').bind('click',function(){revision_linea_periodo_preguntas_validar();return false});$("#btn_pregunta_regresar").unbind('click').bind('click',function(){scripts_task_in_progress=false;$('.seccion #preguntas .pregunta').each(function(index,element){$(this).find(".formulario").hide();$(this).find(".formulario").html("")});revision_linea_resize_();return false})}
function revision_linea_periodo_preguntas_validar(){respuesta=form_validar(revision_linea_formulario_arr);if(respuesta.i==0){revision_linea_periodo_preguntas_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<div class="align-center big margin-yb"><b>Por favor, ingrese lo siguiente:</b></div>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('revision_linea_formulario','validar','error')}}
function revision_linea_periodo_preguntas_servicio(valores){event_google_analytics('revision_linea_formulario','servicio','iniciar');var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");data.append("idlinea",revision_linea_idlinea);data.append("idperiodo",$("#input_periodo").val());data.append("actor",$("#input_actor").val());data.append("actor_municipio",($("#input_actor_municipio").val()!="")?$("#input_actor_municipio").val():null);data.append("actor_catalogo",($("#input_actor_catalogo").val()!="")?$("#input_actor_catalogo").val():null);data.append("actor_elemento",($("#input_actor_elemento").val()!="")?$("#input_actor_elemento").val():null);valores=form_input_valores(valores,revision_linea_formulario_arr);for(x in valores){var valor=valores[x];if(x=="notificar"&&valor!=null)if(Object.keys(valor.v).length>0&&valor.v[0]==1)revision_linea_enviar_retro=revision_linea_idlinea;if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};ajax_enviar(data,url_sitio+"ajax/sitio/revision_lineas_servicio.php",{ok:function(respuesta){event_google_analytics('revision_linea_formulario','servicio','ok');scripts_task_in_progress=false;lightbox_abrir('<div align="center"><b>Se guardo la información correctamente</b></div>',{aceptar:{txt:"Continuar",fn:function(){revision_linea_inicializar();revision_linea_periodo(null)}}},{})}},{})}
function revision_linea_periodo_preguntas_retro(idlinea){$('.seccion #preguntas .pregunta .a_retro[data-id="'+idlinea+'"]').unbind("click.mostrar").bind("click.mostrar",function(){var html='';if(revision_linea_revision!=null&&revision_linea_revision.hasOwnProperty(idlinea)&&revision_linea_revision[idlinea].hasOwnProperty("historico")){var historico=revision_linea_revision[idlinea]["historico"].reverse();for(x in historico){html+='<div style="margin-bottom:1em; border-bottom:1px solid #ccc;">';var historia=historico[x],temp=historia.aprobo["v"][0],aprobo=revision_generales_estatus(temp);html+='<p>'+aprobo.aprobo_txt+'</p>';if(historia.retroalimentacion!=null&&historia.retroalimentacion!="")html+='<p>'+form_nl2br(historia.retroalimentacion)+'</p>';html+='<p>Fecha: <i><b>'+historia.quien["fecha"]+'</b></i></p>';html+='</div>'}};lightbox_abrir('<h1 class="align-left">Retroalimentación:</h1>'+html,{aceptar:{txt:"Cerrar",fn:function(){}}},{size:"grande",close_btn:true});return false})}
function revision_linea_periodo_filtros(ele,datos,attr){$(ele+'  > option:nth-child(n+3)').remove();var attr=$(ele).attr('rel');if(typeof attr!=='undefined'&&attr!==false);else attr="";for(var i in datos)$(ele).append('<option value="'+i+'">'+datos[i]+'</option>');if($(ele+' option[value="'+attr+'"]').length==1)$(ele).val(attr);$(ele).unbind("change.f").bind("change.f",function(){$(this).attr("rel",$(this).val());revision_linea_periodo_filtros_fn();revision_linea_resize_()})}
function revision_linea_periodo_filtros_fn(){$('.seccion #preguntas .pregunta').each(function(index,element){$(this).hide()});$('#div_estatus').hide();if($("#input_filtro_ejes").val()!=""||$("#input_filtro_plazos").val()!=""){var filtro_eje='',filtro_plazos='',filtro_aprobado='',filtro_estatus='';if($("#input_filtro_ejes").val()!="")if($("#input_filtro_ejes").val()=="-1"){filtro_eje='[data-eje]'}else filtro_eje='[data-eje="'+$("#input_filtro_ejes").val()+'"]';if($("#input_filtro_plazos").val()!="")if($("#input_filtro_plazos").val()=="-1"){filtro_plazos='[data-plazo]'}else filtro_plazos='[data-plazo="'+$("#input_filtro_plazos").val()+'"]';if($("#input_filtro_aprobado").val()!="")filtro_aprobado='[data-aprobado="'+$("#input_filtro_aprobado").val()+'"]';if($("#input_filtro_estatus").val()!="")filtro_estatus='[data-estatus="'+$("#input_filtro_estatus").val()+'"]';if($('.seccion #preguntas .pregunta'+filtro_eje+filtro_plazos+filtro_aprobado+filtro_estatus).length==0)lightbox_abrir('<div class="align-center big margin-yb"><b>No hay líneas de acción que coincidan con la búsqueda realizada.</b></div>',{cancelar:{txt:"Ok",fn:null}},{});var estatus_captura=0,estatus_revision=0,estatus_aprobados=0,estatus_rechazados=0,estatus_revision_=0,porcentaje=0,porcentaje_ok=0,cumplio_arr={"0":0,"1":0,"2":0,"3":0,"4":0},estatus_total=$('.seccion #preguntas .pregunta'+filtro_eje+filtro_plazos+filtro_aprobado+filtro_estatus).length;$('.seccion #preguntas .pregunta'+filtro_eje+filtro_plazos+filtro_aprobado+filtro_estatus).each(function(index,element){if($(this).attr("data-captura")=="true")estatus_captura++;if($(this).attr("data-revision")=="true")estatus_revision++;if($(this).attr("data-aprobado")=="1"){estatus_aprobados++;porcentaje_ok+=parseInt($(this).find(".resumen .porcentaje").text())}else if($(this).attr("data-aprobado")=="2"){estatus_rechazados++}else if($(this).attr("data-aprobado")=="3")estatus_revision_++;cumplio_arr[$(this).find(".resumen .cumplio").attr("data-cumplio")]++;porcentaje+=parseInt($(this).find(".resumen .porcentaje").text());$(this).show()});if(estatus_total>0){porcentaje=porcentaje/estatus_total;porcentaje_ok=porcentaje_ok/estatus_total};for(var x in cumplio_arr)$('#div_estatus #cumplio_'+x).text(cumplio_arr[x]);$('#div_estatus #avance_promedio').text(porcentaje.toFixed(2));$('#div_estatus #avance_promedio_ok').text(porcentaje_ok.toFixed(2));$('#div_estatus #estatus_captura').text(estatus_captura);$('#div_estatus #estatus_revision').text(estatus_revision);$('#div_estatus #estatus_total, #div_estatus #estatus_revision_total').text(estatus_total);$('#div_estatus #estatus_aprobados').text(estatus_aprobados);$('#div_estatus #estatus_rechazados').text(estatus_rechazados);$('#div_estatus #estatus_revision_').text(estatus_revision_);$('#div_estatus').show();$('#filtros').show()}}
function revision_linea_periodo_preguntas_enviar(idlinea){$('.seccion #preguntas .pregunta .a_enviar[data-id="'+idlinea+'"]').unbind("click.enviar").bind("click.enviar",function(){lightbox_abrir('<div class="align-center big margin-yb"><b>Notificar</b></div> Se notificará al actor la últma revisión de la línea de acción via correo electrónico. ',{aceptar:{txt:"Notificar",fn:function(){var retroalimentacion=revision_linea_periodo_preguntas_retroalimentacion(idlinea);revision_linea_periodo_preguntas_notificar(idlinea,retroalimentacion)}},cancelar:{txt:"Cerrar",fn:null}},{});return false})}
function revision_linea_periodo_preguntas_retroalimentacion(idlinea){var retroalimentacion="";if(revision_linea_revision!=null&&revision_linea_revision.hasOwnProperty(idlinea)&&revision_linea_revision[idlinea].hasOwnProperty("historico")){var temp=revision_linea_revision[idlinea]["historico"][revision_linea_revision[idlinea]["historico"].length-1];if(temp.retroalimentacion!=null&&temp.retroalimentacion!="")retroalimentacion=temp.retroalimentacion};return retroalimentacion}
function revision_linea_periodo_preguntas_notificar(idlinea,retroalimentacion){revision_generales_notificar({tipo:"Línea de acción",idperiodo:$("#input_periodo").val(),periodo:$("#input_periodo option:selected").text(),eje:$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"]').find(".detalles .eje").text(),prioridad:$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"]').find(".detalles .prioridad").text(),plazo:$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"]').find(".detalles .plazo").text(),estrategia:$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"]').find(".detalles .estrategia").text(),idactor:$('#input_actor').val(),actor:$('#input_actor option:selected').text(),idmunicipio:$('#input_actor_municipio').val(),municipio:(($('#input_actor_municipio').val()!="")?$('#input_actor_municipio option:selected').text():""),idcatalogo:$('#input_actor_catalogo').val(),catalogo:(($('#input_actor_catalogo').val()!="")?$('#input_actor_catalogo option:selected').text():""),idelemento:$('#input_actor_elemento').val(),elemento:(($('#input_actor_elemento').val()!="")?$('#input_actor_elemento option:selected').text():""),data_1:$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"]').find(".linea b.big").text(),data_2:"",data_3:"",cumplio:$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"]').find(".resumen .cumplio_txt").text(),evaluacion:$('.seccion #preguntas .pregunta[data-id="'+idlinea+'"]').find(".resumen .evaluacion").text(),retroalimentacion:retroalimentacion})};var reportes_tabla=null,reportes_data=null
function _toFiniteNumber(v){v=parseFloat(v);return(Number.isFinite(v)?v:null)}
function reportes_ready(){$('#download_data').hide();sesion_verificar_ini=function(){if(sesion_permisos([1,5])){var _tabla_periodos=new tablaJSON({base:"periodo"});_tabla_periodos.loadData("all","#input_periodo","select",{orden:[{col:"inicia",tipo:"fecha",dir:"asc"}]});var _tabla_periodos=new tablaJSON({base:"eje"});_tabla_periodos.loadData("all","#input_filtro_ejes","select",{orden:[{col:"eje",tipo:"texto",dir:"asc"}]});if($("#input_filtro_plazos").length>0){var _tabla_periodos=new tablaJSON({base:"plazo"});_tabla_periodos.loadData("all","#input_filtro_plazos","select",{orden:[{col:"plazo",tipo:"texto",dir:"asc"}]})};$("#input_periodo").unbind("change.f").bind("change.f",function(){if($("#input_periodo").val()!=""){$("#btn_descarga_full").attr("href",$("#btn_descarga_full").attr("data-href")+"&idperiodo="+$("#input_periodo").val());$("#input_filtro_ejes").val("");$("#input_filtro_metas_al").val("");$("#input_filtro_plazos").val("");var data=new FormData();data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil);data.append("idperiodo",$("#input_periodo").val());data.append("tipo",(($("#input_filtro_plazos").length>0)?"lineas":"indicadores"));ajax_enviar(data,url_sitio+"ajax/sitio/reportes.php",{ok:function(respuesta){if($("#input_filtro_metas_al").length>0){$('#input_filtro_metas_al  > option:nth-child(n+3)').remove();var attr=$("#input_filtro_metas_al").attr('rel');if(typeof attr!=='undefined'&&attr!==false);else attr="";for(var i in respuesta.metas_al)$("#input_filtro_metas_al").append('<option value="'+i+'" '+((attr==i)?"selected":"")+'>'+respuesta.metas_al[i]+'</option>')};reportes_data=respuesta;reportes_datos(reportes_data,(($("#input_filtro_plazos").length>0)?"lineas":"indicadores"))}},{})}else if(reportes_tabla!=null){reportes_tabla.clear();reportes_tabla.destroy();$('#table_data').empty();reportes_tabla=null}});$("#input_filtro_ejes").unbind("change.f").bind("change.f",function(){if(reportes_data!=null){lightbox_abrir('<div class="align-center">cargando datos...</div>',{},{});setTimeout(function(){reportes_datos(reportes_data,(($("#input_filtro_plazos").length>0)?"lineas":"indicadores"))},1e3)}});$("#input_filtro_plazos").unbind("change.f").bind("change.f",function(){if(reportes_data!=null){lightbox_abrir('<div class="align-center">cargando datos...</div>',{},{});setTimeout(function(){reportes_datos(reportes_data,"lineas")},1e3)}});$("#input_filtro_metas_al").unbind("change.f").bind("change.f",function(){if(reportes_data!=null){lightbox_abrir('<div class="align-center">cargando datos...</div>',{},{});setTimeout(function(){reportes_datos(reportes_data,"indicadores")},1e3)}})}};sesion_verificar_no=function(){}}
function reportes_load(){reportes_resize()}
function reportes_resize(){scripts_resize()}
function reportes_resize_(){reportes_resize();setTimeout(function(){reportes_resize()},200)}
function reportes_datos_borrar(actores,i,tipo,identificador,ident,actor,municipios_arr){var index=actores[i][tipo].findIndex(function(elemento){if(typeof elemento!=='undefined')return elemento[identificador]===ident});if(index>=0)delete actores[i][tipo][index];if(!actor.municipios){if(actor.hasOwnProperty("captura")&&actor.captura.hasOwnProperty("captura_data")&&actor.captura.captura_data[tipo].hasOwnProperty(ident))delete actores[i].captura.captura_data[tipo][ident];if(actor.hasOwnProperty("revision")&&actor.revision.hasOwnProperty("revision_data")&&actor.revision.revision_data[tipo].hasOwnProperty(ident))delete actores[i].revision.revision_data[tipo][ident]}else for(var z in municipios_arr){if(actor.hasOwnProperty("captura")&&actor.captura.hasOwnProperty(municipios_arr[z]["id"])&&actor.captura[municipios_arr[z]["id"]].hasOwnProperty("captura")&&actor.captura[municipios_arr[z]["id"]].captura.hasOwnProperty("captura_data")&&actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo].hasOwnProperty(ident))delete actores[i].captura[municipios_arr[z]["id"]].captura.captura_data[tipo][ident];if(actor.hasOwnProperty("revision")&&actor.revision.hasOwnProperty(municipios_arr[z]["id"])&&actor.revision[municipios_arr[z]["id"]].hasOwnProperty("revision")&&actor.revision[municipios_arr[z]["id"]].revision.hasOwnProperty("revision_data")&&actor.revision[municipios_arr[z]["id"]].revision.revision_data[tipo].hasOwnProperty(ident))delete actores[i].revision[municipios_arr[z]["id"]].revision.revision_data[tipo][ident]}}
function reportes_datos(respuesta,tipo){var promerdio_municipios={},actores=JSON.parse(JSON.stringify(respuesta.actores)),columnas=[];columnas.push({data:'actor',title:"Actor",orderable:true,className:"dt-head-left dt-body-left no_wrap"});columnas.push({data:'enlace',title:"Vista",orderable:true,className:"dt-head-left dt-body-left no_wrap"});columnas.push({data:'elementos',title:((tipo=="lineas")?"Líneas <br> de acción":"Indicadores"),orderable:true,className:"dt-head-left dt-body-left no_wrap"});columnas.push({data:'capturados',title:"Capturados",orderable:true,className:"dt-head-left dt-body-left no_wrap"});columnas.push({data:'aprobados',title:"Aprobados",orderable:true,className:"dt-head-left dt-body-left no_wrap"});columnas.push({data:'rechazados',title:"Rechazados",orderable:true,className:"dt-head-left dt-body-left no_wrap"});columnas.push({data:'revision',title:"En revisión",orderable:true,className:"dt-head-left dt-body-left no_wrap"});columnas.push({data:'avance',title:"Avance promedio <br> (solo aprobados)",orderable:true,className:"dt-head-left dt-body-left no_wrap"});var filtro_eje=null;if($("#input_filtro_ejes").val()!="")filtro_eje=$("#input_filtro_ejes").val();var filtro_plazos=null;if($("#input_filtro_plazos").val()!="")filtro_plazos=$("#input_filtro_plazos").val();var filtro_metas=null;if($("#input_filtro_metas_al").val()!="")filtro_metas=$("#input_filtro_metas_al").val();for(i in actores){var actor=actores[i];if(actor.hasOwnProperty("captura")&&actor.captura.hasOwnProperty("captura_data"));var datos=(tipo=="lineas")?actor.lineas:actor.indicadores,identificador=(tipo=="lineas")?"idlinea":"idindicador";if(filtro_eje!=null){for(k in datos){var ident=datos[k][identificador],suma=true;if(datos[k]["ideje"]==filtro_eje){suma=true;if(filtro_plazos!=null){suma=false;if(datos[k]["idplazo"]==filtro_plazos)suma=true};if(filtro_metas!=null){suma=false;if(datos[k]["indicador_data"]["meta_al"]==filtro_metas)suma=true}}else suma=false;if(!suma)reportes_datos_borrar(actores,i,tipo,identificador,ident,actor,municipios_arr)}}else if(filtro_plazos!=null){for(k in datos){var ident=datos[k][identificador];if(datos[k]["idplazo"]!=filtro_plazos)reportes_datos_borrar(actores,i,tipo,identificador,ident,actor,municipios_arr)}}else if(filtro_metas!=null)for(k in datos){var ident=datos[k][identificador];if(datos[k]["indicador_data"]["meta_al"]!=filtro_metas)reportes_datos_borrar(actores,i,tipo,identificador,ident,actor,municipios_arr)}};var data=[];for(i in actores){var actor=actores[i];if(actor.hasOwnProperty("captura")&&actor.captura.hasOwnProperty("captura_data"));var tiene="";if(actor.municipios||actor.catalogos)tiene='<a href="#" class="a_municipios" data-id="'+actor.idactor+'">'+form_trim(actor.actor)+'</a>';var valores={};valores.enlace='--';var temp=form_trim(actor.actor);if(tiene!=""){temp=tiene}else valores.enlace='<a href="#" class="a_ir" data-id="'+actor.idactor+'" ><img src="'+url_sitio+'img/sitio/enlace.png"></a> ';valores.actor=temp;if(actor.municipios||actor.catalogos){valores.elementos=(tipo=="lineas")?Object.keys(actor.lineas).length:Object.keys(actor.indicadores).length;valores.capturados="--";valores.aprobados="--";valores.rechazados="--";valores.revision="--";valores.avance='<span class="promedio_mun_'+actor.idactor+'">--</span>';promerdio_municipios[actor.idactor]=new Array()}else{valores.elementos=(tipo=="lineas")?Object.keys(actor.lineas).length:Object.keys(actor.indicadores).length;valores.capturados=0;valores.aprobados=0;valores.rechazados=0;valores.revision=0;valores.avance=0;if(actor.hasOwnProperty("captura"))valores.capturados=Object.keys(actor.captura.captura_data[tipo]).length;if(actor.hasOwnProperty("revision")){var elementos=actor.revision.revision_data[tipo];for(var j in elementos){var estatus=parseInt(elementos[j]["actual"]["aprobo"]["v"][0],10);switch(estatus){case 1:valores.aprobados++;if(tipo=="indicadores"&&actor.hasOwnProperty("captura")&&actor.captura.hasOwnProperty("captura_data")&&actor.captura.captura_data[tipo].hasOwnProperty(j)&&actor.captura.captura_data[tipo][j].hasOwnProperty('iniciado')&&actor.captura.captura_data[tipo][j]["iniciado"]['v'][0]=="1"&&actor.captura.captura_data[tipo][j]["iniciado"].hasOwnProperty("e")&&actor.captura.captura_data[tipo][j]["iniciado"]["e"].hasOwnProperty("1")){valores.avance+=parseInt(actor.captura.captura_data[tipo][j]["iniciado"]["e"][1])}else if(tipo=="lineas"&&actor.hasOwnProperty("captura")&&actor.captura.hasOwnProperty("captura_data")&&actor.captura.captura_data[tipo].hasOwnProperty(j)&&actor.captura.captura_data[tipo][j].hasOwnProperty('cumplio')){var temp=actor.captura.captura_data[tipo][j]["cumplio"]["v"][0],avance=0;switch(temp){case"2":case"3":avance=parseInt(actor.captura.captura_data[tipo][j]["cumplio"]["e"][temp],10);break;case"4":avance=100;break};valores.avance+=avance};break;case 2:valores.rechazados++;break;case 3:valores.revision++;break}}}};if(valores.avance>0)valores.avance=(valores.avance/valores.elementos).toFixed(2);if(valores.avance!='<span class="promedio_mun_'+actor.idactor+'">--</span>')valores.avance=valores.avance+"%";if(valores.elementos==0){valores.capturados="--";valores.aprobados="--";valores.rechazados="--";valores.revision="--";valores.avance="--"};data.push(valores);if(tiene!=""){if(actor.municipios)for(var z in municipios_arr){var valores={};valores.actor='<span data-id="'+actor.idactor+'" data-municipio="'+municipios_arr[z]["id"]+'"  class="municipios">'+form_trim(actor.actor)+" - "+municipios_arr[z]["municipio"]+"</span> ";valores.enlace='<a href="#" class="a_ir" data-id="'+actor.idactor+'" data-municipio="'+municipios_arr[z]["id"]+'" ><img src="'+url_sitio+'img/sitio/enlace.png"></a> ';valores.elementos=(tipo=="lineas")?Object.keys(actor.lineas).length:Object.keys(actor.indicadores).length;valores.capturados=0;valores.aprobados=0;valores.rechazados=0;valores.revision=0;valores.avance=0;if(actor.captura.hasOwnProperty(municipios_arr[z]["id"]))valores.capturados=Object.keys(actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo]).length;if(actor.revision.hasOwnProperty(municipios_arr[z]["id"])){var elementos=actor.revision[municipios_arr[z]["id"]].revision.revision_data[tipo];for(var j in elementos){var estatus=parseInt(elementos[j]["actual"]["aprobo"]["v"][0],10);switch(estatus){case 1:valores.aprobados++;if(tipo=="indicadores"&&actor.hasOwnProperty("captura")&&actor.captura.hasOwnProperty(municipios_arr[z]["id"])&&actor.captura[municipios_arr[z]["id"]].hasOwnProperty("captura")&&actor.captura[municipios_arr[z]["id"]].captura.hasOwnProperty("captura_data")&&actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo].hasOwnProperty(j)&&actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j].hasOwnProperty('iniciado')&&actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["iniciado"]['v'][0]=="1"&&actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["iniciado"].hasOwnProperty("e")&&actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["iniciado"]["e"].hasOwnProperty("1")){valores.avance+=parseInt(actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["iniciado"]["e"][1])}else if(tipo=="lineas"&&actor.hasOwnProperty("captura")&&actor.captura.hasOwnProperty(municipios_arr[z]["id"])&&actor.captura[municipios_arr[z]["id"]].hasOwnProperty("captura")&&actor.captura[municipios_arr[z]["id"]].captura.hasOwnProperty("captura_data")&&actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo].hasOwnProperty(j)&&actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j].hasOwnProperty('cumplio')){var temp=actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["cumplio"]["v"][0],avance=0;switch(temp){case"2":case"3":avance=parseInt(actor.captura[municipios_arr[z]["id"]].captura.captura_data[tipo][j]["cumplio"]["e"][temp],10);break;case"4":avance=100;break};valores.avance+=avance};break;case 2:valores.rechazados++;break;case 3:valores.revision++;break}}};var avance_num=null;if(valores.elementos>0)if(valores.avance>0){avance_num=parseFloat((valores.avance/valores.elementos).toFixed(2))}else avance_num=0;if(avance_num!==null&&Number.isFinite(avance_num))promerdio_municipios[actor.idactor].push(avance_num);if(avance_num===null){valores.avance="--"}else valores.avance=avance_num.toFixed(2)+"%";if(valores.elementos==0){valores.capturados="--";valores.aprobados="--";valores.rechazados="--";valores.revision="--";valores.avance="--"};data.push(valores)};if(actor.catalogos)for(var z in actor.captura){var valores={};valores.actor='<span data-id="'+actor.idactor+'" data-catalogo="'+actor.captura[z]["idcatalogo"]+'"  data-elemento="'+actor.captura[z]["idelemento"]+'"  class="catalogos">'+form_trim(actor.actor)+" - "+actor.captura[z]["elemento"]+"</span> ";valores.enlace='<a href="#" class="a_ir" data-id="'+actor.idactor+'" data-catalogo="'+actor.captura[z]["idcatalogo"]+'"  data-elemento="'+actor.captura[z]["idelemento"]+'"><img src="'+url_sitio+'img/sitio/enlace.png"></a> ';valores.elementos=(tipo=="lineas")?Object.keys(actor.lineas).length:Object.keys(actor.indicadores).length;valores.capturados=0;valores.aprobados=0;valores.rechazados=0;valores.revision=0;valores.avance=0;if(actor.captura[z].captura!=null)valores.capturados=Object.keys(actor.captura[z].captura.captura_data[tipo]).length;if(actor.captura[z].captura!=null&&actor.revision[z].revision!=null){var elementos=actor.revision[z].revision.revision_data[tipo];for(var j in elementos){var estatus=parseInt(elementos[j]["actual"]["aprobo"]["v"][0],10);switch(estatus){case 1:valores.aprobados++;if(tipo=="indicadores"&&actor.hasOwnProperty("captura")&&actor.captura[z].hasOwnProperty("captura")&&actor.captura[z].captura.hasOwnProperty("captura_data")&&actor.captura[z].captura.captura_data[tipo].hasOwnProperty(j)&&actor.captura[z].captura.captura_data[tipo][j].hasOwnProperty('iniciado')&&actor.captura[z].captura.captura_data[tipo][j]["iniciado"]['v'][0]=="1"&&actor.captura[z].captura.captura_data[tipo][j]["iniciado"].hasOwnProperty("e")&&actor.captura[z].captura.captura_data[tipo][j]["iniciado"]["e"].hasOwnProperty("1")){valores.avance+=parseInt(actor.captura[z].captura.captura_data[tipo][j]["iniciado"]["e"][1])}else if(tipo=="lineas"&&actor.hasOwnProperty("captura")&&actor.captura[z].hasOwnProperty("captura")&&actor.captura[z].captura.hasOwnProperty("captura_data")&&actor.captura[z].captura.captura_data[tipo].hasOwnProperty(j)&&actor.captura[z].captura.captura_data[tipo][j].hasOwnProperty('cumplio')){var temp=actor.captura[z].captura.captura_data[tipo][j]["cumplio"]["v"][0],avance=0;switch(temp){case"2":case"3":avance=parseInt(actor.captura[z].captura.captura_data[tipo][j]["cumplio"]["e"][temp],10);break;case"4":avance=100;break};valores.avance+=avance};break;case 2:valores.rechazados++;break;case 3:valores.revision++;break}}};var avance_num=null;if(valores.elementos>0)if(valores.avance>0){avance_num=parseFloat((valores.avance/valores.elementos).toFixed(2))}else avance_num=0;if(avance_num!==null&&Number.isFinite(avance_num))promerdio_municipios[actor.idactor].push(avance_num);if(avance_num===null){valores.avance="--"}else valores.avance=avance_num.toFixed(2)+"%";if(valores.elementos==0){valores.capturados="--";valores.aprobados="--";valores.rechazados="--";valores.revision="--";valores.avance="--"};data.push(valores)}}};if(reportes_tabla!=null){reportes_tabla.clear();reportes_tabla.destroy();$('#table_data').empty();reportes_tabla=null};reportes_tabla=$('#table_data').DataTable({language:datatable_lang,pageLength:1500,responsive:true,columns:columnas,ordering:true,data:data,order:[[0,"asc"]],fnDrawCallback:function(){reportes_resize_()},fnInitComplete:function(){reportes_resize_()}});$('#table_data').off('click','.a_municipios');$('#table_data').on('click','.a_municipios',function(evt){var id=$(this).attr("data-id");$('#table_data tr span[data-id="'+id+'"]').each(function(index,element){$(this).closest('tr').toggle('fast',function(){reportes_resize_()})});return false});$('#table_data tr a.a_ir').each(function(index,element){});$('#table_data').off('click','.a_ir');$('#table_data').on('click','.a_ir',function(evt){var actor=$(this).attr("data-id"),periodo=$("#input_periodo").val(),municipio='',catalogo='',elemento='',attr=$(this).attr('data-municipio');if(typeof attr!=='undefined'&&attr!==false)municipio='&m='+attr;attr=$(this).attr('data-catalogo');if(typeof attr!=='undefined'&&attr!==false){catalogo='&cat='+attr;elemento='&ele='+$(this).attr('data-elemento')};var eje=$("#input_filtro_ejes").val();if(eje=="")eje="-1";var adicional="";if(tipo=="lineas"){adicional=$("#input_filtro_plazos").val()}else if(tipo=="indicadores")adicional=$("#input_filtro_metas_al").val();if(adicional=="")adicional="-1";window.location.href=$('#download_data').attr("data-url")+'?a='+actor+municipio+catalogo+elemento+'&p='+periodo+'&e='+eje+'&ad='+adicional;return false});$('#table_data tr span.municipios').each(function(index,element){$(this).closest('tr').hide()});$('#table_data tr span.catalogos').each(function(index,element){$(this).closest('tr').hide()});for(var j in promerdio_municipios){var avances=promerdio_municipios[j]||[],suma=0,count=0;for(var z=0;z<avances.length;z++){var n=_toFiniteNumber(avances[z]);if(n!==null){suma+=n;count++}};var html="--";if(count>0)html=(suma/count).toFixed(2)+"%";$('#table_data tr span.promedio_mun_'+j).html(html)};$("#btn_descarga").unbind("click").bind("click",function(){reportes_descarga(columnas,data,tipo);false});lightbox_cerrar();$('#download_data').show();reportes_resize_()}
function reportes_descarga(columnas,data,tipo){var csv='',subtitulo='';if(tipo=="lineas"){subtitulo='Líneas de acción'}else if(tipo=='indicadores')subtitulo='Indicadores';csv+=subtitulo+'\n';csv+='\n';csv+='\"'+$('<div>Eje: '+$('#input_filtro_ejes option:selected').text()+'</div>').text()+'\"\n';if($("#input_filtro_plazos").length>0)csv+='\"'+$('<div>Plazo: '+$('#input_filtro_plazos option:selected').text()+'</div>').text()+'\"\n';if($("#input_filtro_metas_al").length>0)csv+='\"'+$('<div>Meta al año: '+$('#input_filtro_metas_al option:selected').text()+'</div>').text()+'\"\n';var fecha=new Date(),month=''+(fecha.getMonth()+1),day=''+fecha.getDate(),year=fecha.getFullYear();fecha=[year,month,day].join('-')+' '+[fecha.getHours(),fecha.getMinutes(),fecha.getSeconds()].join(':');fecha=form_fecha(fecha);csv+='\"'+$('<div>'+fecha.formato+'</div>').text()+'\"\n';csv+='\n';var header=new Array();for(var i in columnas)if(columnas[i].title!="Vista")header.push('\"'+$('<div>'+columnas[i].title+'</div>').text()+'\"');header=header.join(',');csv+=header+'\n';for(var i in data){var row=data[i],keys=Object.keys(row),values=new Array();for(var j in keys)if(keys[j]!="enlace")values.push('\"'+$('<div>'+row[keys[j]]+'</div>').text()+'\"');values=values.join(',');csv+=values+'\n'};var blob=new Blob(["\uFEFF"+csv],{type:'application/csv; charset=UTF-8'}),url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.setAttribute('download',"reporte_"+convertToSlug($('<div>'+subtitulo+'</div>').text())+"_"+convertToSlug($('<div>'+fecha.formato+'</div>').text())+".csv");document.body.appendChild(link);link.click();document.body.removeChild(link);URL.revokeObjectURL(url)}
function convertToSlug(Text){return Text.toLowerCase().replace(/ /g,"-").replace(/[^\w-]+/g,"")};var municipios_arr=[{id:"1",municipio:"Ahualulco"},{id:"2",municipio:"Alaquines"},{id:"3",municipio:"Aquismón"},{id:"4",municipio:"Armadillo de los Infantes"},{id:"5",municipio:"Cárdenas"},{id:"6",municipio:"Catorce"},{id:"7",municipio:"Cedral"},{id:"8",municipio:"Cerritos"},{id:"9",municipio:"Cerro de San Pedro"},{id:"10",municipio:"Ciudad del Maíz"},{id:"11",municipio:"Ciudad Fernández"},{id:"12",municipio:"Tancanhuitz"},{id:"13",municipio:"Ciudad Valles"},{id:"14",municipio:"Coxcatlán"},{id:"15",municipio:"Charcas"},{id:"16",municipio:"Ebano"},{id:"17",municipio:"Guadalcázar"},{id:"18",municipio:"Huehuetlán"},{id:"19",municipio:"Lagunillas"},{id:"20",municipio:"Matehuala"},{id:"21",municipio:"Mexquitic de Carmona"},{id:"22",municipio:"Moctezuma"},{id:"23",municipio:"Rayón"},{id:"24",municipio:"Rioverde"},{id:"25",municipio:"Salinas"},{id:"26",municipio:"San Antonio"},{id:"27",municipio:"San Ciro de Acosta"},{id:"28",municipio:"San Luis Potosí"},{id:"29",municipio:"San Martín Chalchicuahutla"},{id:"30",municipio:"San Nicolás Tolentino"},{id:"31",municipio:"Santa Catarina"},{id:"32",municipio:"Santa María del Río"},{id:"33",municipio:"Santo Domingo"},{id:"34",municipio:"San Vicente Tancuayalab"},{id:"35",municipio:"Soledad de Gracaino Sánchez"},{id:"36",municipio:"Tamasopo"},{id:"37",municipio:"Tamazunchale"},{id:"38",municipio:"Tampacán"},{id:"39",municipio:"Tampamolón Corona"},{id:"40",municipio:"Tamuín"},{id:"41",municipio:"Tanlajás"},{id:"42",municipio:"Tanquián de Escobedo"},{id:"43",municipio:"Tierra Nueva"},{id:"44",municipio:"Vanegas"},{id:"45",municipio:"Venado"},{id:"46",municipio:"Villa de Arriaga"},{id:"47",municipio:"Villa de Guadalupe"},{id:"48",municipio:"Villa de la Paz"},{id:"49",municipio:"Villa de Ramos"},{id:"50",municipio:"Villa de Reyes"},{id:"51",municipio:"Villa Hidalgo"},{id:"52",municipio:"Villa Juárez"},{id:"53",municipio:"Axtla de Terrazas"},{id:"54",municipio:"Xilitla"},{id:"55",municipio:"Zaragoza"},{id:"56",municipio:"Villa de Arista"},{id:"57",municipio:"Matlapa"},{id:"58",municipio:"El Naranjo"}],dashboard_arr=[{key:"correo_electronico",nombre:"Correo electrónico",ele:"#input_correo_electronico",tipo:"text",validar:"mail",opcional:false}]
function dashboard_ready(){sesion_verificar_ini=function(){dashboard_forma()};sesion_verificar_no=function(){}}
function dashboard_load(){dashboard_resize()}
function dashboard_resize(){}
function dashboard_forma(){dashboard_arr=[{key:"correo_electronico",nombre:"Correo electrónico",ele:"#input_correo_electronico",tipo:"text",validar:"mail",opcional:false,value:$("#input_correo_electronico").val()}];form_init(dashboard_arr);$("#btn_guardar").unbind('click').bind('click',function(){dashboard_validar();return false})}
function dashboard_validar(){respuesta=form_validar(dashboard_arr);if(respuesta.i==0){dashboard_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('dashboard','validar','error')}}
function dashboard_servicio(valores){event_google_analytics('dashboard','servicio','iniciar');var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");valores=form_input_valores(valores,dashboard_arr);for(x in valores){var valor=valores[x];if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};var funcion=function(respuesta){event_google_analytics('dashboard','servicio','ok');var html='<div class="align-center"><b>Tu CORREO ELECTRÓNICO para recibir notificaciones se ha guardado correctamente.</b></div>';lightbox_abrir(html,{aceptar:{txt:"Ok",fn:function(){window.location.href=$('#form_dashboard').attr('data-action')}}},{})};ajax_enviar(data,url_sitio+"ajax/sitio/dashboard.php",{ok:funcion},{})};var cambiar_contrasena_arr=[{key:"contrasena",nombre:"Contraseña actual",ele:"#input_contrasena",tipo:"text",validar:"contrasena",opcional:false},{key:"contrasena_nueva",nombre:"Contraseña nueva",ele:"#input_contrasena_nueva",tipo:"text",validar:"contrasena",opcional:false,confirmar:"#input_contrasena_nueva_c"}]
function cambiar_contrasena_ready(){sesion_verificar_ini=function(){cambiar_contrasena_forma()};sesion_verificar_no=function(){}}
function cambiar_contrasena_load(){cambiar_contrasena_resize()}
function cambiar_contrasena_resize(){}
function cambiar_contrasena_forma(){form_init(cambiar_contrasena_arr);$("#btn_guardar").unbind('click').bind('click',function(){cambiar_contrasena_validar();return false});$('input.ver_contrasena').each(function(index,element){$(this).unbind('click').bind('click',function(){if($(this).is(':checked')){$('#'+$(this).attr("data-id")).attr("type","text")}else $('#'+$(this).attr("data-id")).attr("type","password")})})}
function cambiar_contrasena_validar(){respuesta=form_validar(cambiar_contrasena_arr);if(respuesta.i==0){cambiar_contrasena_servicio(respuesta.valores)}else if(respuesta.hasOwnProperty('alerta')){lightbox_abrir('<h1>Por favor, ingrese lo siguiente:</h1>'+respuesta.alerta,{cancelar:{txt:"Ok",fn:null}},{});event_google_analytics('cambiar_contrasena','validar','error')}}
function cambiar_contrasena_servicio(valores){event_google_analytics('cambiar_contrasena','servicio','iniciar');var data=new FormData();if(sesion_data.hasOwnProperty('id')&&sesion_data.id!=null){data.append("id",sesion_data.id);data.append("token",sesion_data.token);data.append("dispositivo",sesion_data.dispositivo);data.append("perfil",sesion_data.perfil)}else data.append("token","");valores=form_input_valores(valores,cambiar_contrasena_arr);for(x in valores){var valor=valores[x];if(valor!=null&&valor.constructor===Object)valor=JSON.stringify(valor);data.append(x,valor)};var funcion=function(respuesta){event_google_analytics('cambiar_contrasena','servicio','ok');var html='<div class="align-center"><b>Tu nueva contraseña se ha guardado correctamente. Inicia sesión con tu nuevo acceso.</b></div>';lightbox_abrir(html,{aceptar:{txt:"Ok",fn:function(){sesion_cerrar(url_sitio)}}},{})};ajax_enviar(data,url_sitio+"ajax/sitio/cambiar_contrasena.php",{ok:funcion},{})}