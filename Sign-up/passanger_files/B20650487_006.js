document.write('\x3cdiv class="GoogleActiveViewElement" ' +'id="DfaVisibilityIdentifier_1906766063"\x3e');document.write('\x3cdiv class="GoogleCreativeContainerClass" ' +'id="gcc_amfzYfzFM_6Ez7sP0_WqkA8"\x3e');(function() {var m = document.createElement('meta');m.setAttribute('data-jc', '82');m.setAttribute('data-jc-version', 'r20220126');var ss = document.getElementsByTagName('script')[0];if (ss && ss.parentNode) {ss.parentNode.insertBefore(m, ss);}})();(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ var h=this||self;/*  SPDX-License-Identifier: Apache-2.0 */ function l(a,d,b){if(a)for(var c=0;null!=a&&500>c&&!b(a);++c)a=d(a)}function m(a,d){l(a,function(b){try{return b===b.parent?null:b.parent}catch(c){}return null},d)}function n(a,d){if("IFRAME"==a.tagName)d(a);else{a=a.querySelectorAll("IFRAME");for(var b=0;b<a.length&&!d(a[b]);++b);}}function p(a){return(a=a.ownerDocument)&&(a.parentWindow||a.defaultView)||null} function q(a,d,b){try{var c=JSON.parse(b.data)}catch(f){}if("object"===typeof c&&c&&"creativeLoad"===c.type){var g=p(a);if(b.source&&g){var e;m(b.source,function(f){try{if(f.parent===g)return e=f,!0}catch(k){}});e&&n(a,function(f){if(f.contentWindow===e)return d(c),!0})}}}function r(a){return"string"===typeof a?document.getElementById(a):a};var t;t=void 0===t?window:t;t.clsn=function(a,d){var b=r(a);if(b)if(b.onCreativeLoad)b.onCreativeLoad(d);else{var c=d?[d]:[],g=function(e){for(var f=0;f<c.length;++f)try{c[f](1,e)}catch(k){}c={push:function(k){k(1,e)}}};b.onCreativeLoad=function(e){c.push(e)};b.setAttribute("data-creative-load-listener","");b.addEventListener("creativeLoad",function(e){g(e.detail)});h.addEventListener("message",function(e){q(b,g,e)})}};}).call(this); clsn("gcc_amfzYfzFM_6Ez7sP0_WqkA8");
(function() { /* Template version: 2 */
  var engines = new Array();
  var i = 0;

engines[i++]=new Array(".msn.&.live.&.bing.","q&text","https://ad.doubleclick.net/ddm/clk/412197107;213039774;d;~ns=1","[.]msn[.].*/<incl>$&[.]live[.].*/<incl>$&[.]bing[.].*/<incl>$",".*","mkt&scope");
engines[i++]=new Array(".yahoo.","p&q","https://ad.doubleclick.net/ddm/clk/412196789;213035709;m;~ns=1","[.]yahoo[.].*/<incl>$",".*","");
engines[i++]=new Array(".google.","q","https://ad.doubleclick.net/ddm/clk/412197095;212946488;r;~ns=1","[.]google[.].*/<incl>$",".*","");
engines[i++]=new Array(".ask.","q&a","https://ad.doubleclick.net/ddm/clk/412230937;213039777;f;~ns=1","[.]ask[.].*/<incl>$",".*","");
engines[i++]=new Array(".baidu.","wd","https://ad.doubleclick.net/ddm/clk/412196804;212993434;h;~ns=1","[.]baidu[.].*/<incl>$",".*","");
engines[i++]=new Array(".aol.","q&query&encquery&k","https://ad.doubleclick.net/ddm/clk/412197236;213040677;a;~ns=1","[.]aol[.].*/<incl>$",".*","");


  var flArr = new Array("^gclid[=].*$");

  var th = '^^';

  var RFR = document.referrer;
  var LOC = location.href;
  var PROTOCOL = location.protocol;
  var SEARCH = location.search;
  var HOST = location.host;
  var PATH = location.pathname;
  var HASH = location.hash;
  var RFR_QS = RFR.substring(RFR.indexOf('?') + 1);
  var RFR_DP = RFR.substring(0, RFR.indexOf('?'));
  if (RFR_DP) {
    if (RFR_DP.indexOf(';') > 0) {
      RFR_DP = RFR_DP.substring(0, RFR_DP.indexOf(';'));
    }
  } else {
    RFR_DP = RFR;
  }
  if (RFR && LOC) {
    if (PROTOCOL == 'http:' || PROTOCOL == 'https:') {
      convertHttps();
      analyzeClick();
    }
  }
  function getParameterValue(searchString, key) {
    var dataArr = searchString.split('&');
    for (var j = 0; j < dataArr.length; j++) {
      var ar = dataArr[j].split('=');
      if (ar[0] == key) {
        if (ar[1]) {
          return trim(ar[1]);
        } else {
          return '';
        }
      }
    }
    return '';
  }
  function formatSearchTerm(searchTerm) {
    return searchTerm.replace(/\s{1,}/g, ' ');
  }
  function trim(sval) {
    return sval.replace(/^\s*/, '').replace(/\s*$/, '');
  }
  function convertHttps() {
    if (PROTOCOL == 'https:') {
      for (var i = 0; i < engines.length; i++) {
        var engineUrl = engines[i][2];
        var updatedEngineUrl = engineUrl.replace(/^http:/i, "https:");
        engines[i][2] = updatedEngineUrl;
      }
    }
  }
  function analyzeClick() {
    if (clickIsExcluded()) {
      return;
    }
    for (var i = 0; i < engines.length; i++) {
      var seArr = engines[i][0].split('&');
      for (var j = 0; j < seArr.length; j++) {
        if (RFR_DP.indexOf(seArr[j]) > 0) {
          var searchQueryParameterNamesArr = engines[i][1].split('&');
          var clickCommandUrl = engines[i][2];
          if (RFR_QS) {
            for (var x = 0; x < searchQueryParameterNamesArr.length; x++) {
              referringSearchQuery = getParameterValue(RFR_QS, searchQueryParameterNamesArr[x]);
              if (referringSearchQuery) {
                var p = engines[i][5];
                processSearchQuery(referringSearchQuery, searchQueryParameterNamesArr[x], clickCommandUrl, p);
                return;
              }
            }
          }
          processSearchQuery("Not Provided", "q", clickCommandUrl, "");
          return;
        }
      }
    }
  }
  function clickIsExcluded() {
    var qs = SEARCH;
    if (qs) {
      qs = qs.substring(1);
      if (flArr.length > 0) {
        var qsArr = qs.split('&');
        for (var i = 0; i < qsArr.length; i++) {
          for (var j = 0; j < flArr.length; j++) {
            var m = new RegExp(flArr[j], 'i');
            if (qsArr[i].match(m)) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }
  function processSearchQuery(referringSearchQuery, searchQueryParameterName, clickCommandUrl, p) {
    referringSearchQuery = formatSearchTerm(referringSearchQuery);
    var formattedReferringDomainAndPath = '';
    if (RFR_DP.indexOf('://') > 0) {
      formattedReferringDomainAndPath = RFR_DP.substring(RFR_DP.indexOf('://') + 3);
    } else {
      formattedReferringDomainAndPath = RFR_DP;
    }
    if (p) {
      var c = '';
      var propArr = p.split('&');
      for (var z = 0; z < propArr.length; z++) {
        c = getParameterValue(RFR_QS, propArr[z]);
        if (c) {
          formattedReferringDomainAndPath = formattedReferringDomainAndPath + '&' + propArr[z] + '=' + c;
        }
      }
    }
    if (searchQueryParameterName == 'encquery') {
      referringSearchQuery = referringSearchQuery + '_aolencquery';
    }
    referringSearchQuery = referringSearchQuery.replace(/\?/g, escape('?'));
    referringSearchQuery = referringSearchQuery.replace(/\,/g, escape(','));
    referringSearchQuery = referringSearchQuery.replace(/;/g, escape(';'));
    var u = escape(referringSearchQuery) + th + escape(formattedReferringDomainAndPath) + th +
        escape('://' + HOST + PATH + HASH) +
        th + escape(SEARCH);
    u = u.replace(/http/g, 'ptth');
    pix = new Image();
    pix.src = clickCommandUrl + ';u=' + u + ';?https://s0.2mdn.net/dot.gif';
  }
})();

// -->
document.write('\x3c/div\x3e');document.write('\x3c/div\x3e');(function() {var avDiv = document.getElementById("DfaVisibilityIdentifier_1906766063");var avMarkup = {'active_view_class_name': 'GoogleActiveViewElement','data-google-av-cxn': 'https://pagead2.googlesyndication.com/pcs/activeview?xai\x3dAKAOjsumvcXvC2c6fmFR61wmSsfGd-a6CZmlzXR-XKDnIt1ufEkQWkObFhWOr1Ogx3fAPHwj7KIBJkkvvND5NImwlB0\x26sig\x3dCg0ArKJSzDhRMN8c4t9iEAE','data-google-av-adk': '0','data-google-av-metadata': 'la\x3d0\x26','data-google-av-override': '-1','data-google-av-immediate': 'true','data-google-av-aid': '0','data-google-av-naid': '1','data-google-av-slift': '','data-google-av-cpmav': '','data-google-av-btr': '','data-google-av-itpl': '32','data-google-av-rs': '6','data-google-av-dm':'2','data-google-av-flags':'[\x22x%278440\x279efotm(\x26753374%2bejvf/%27844\x3e\x279wuvb$\x2656533\x3e!\x3d|vqc)!273794\x26\x3cqqvb/%\x3c1735020!\x3dnehu`/!364\x3d5051!9abk{a($160210:3\x26\x3ccbotf+*0150034:%2bejvf/%72;17613!\x3defdwa*\x2776463;21$?ebkpb$\x260366717\x3e*\x3ebgipf+!3\x3d712363%9aihwc)!7202\x3c217\x279efotm(\x2620061;48\x26\x3e`dopb/%\x3c1707200!\x3d8(\x262005575?\x26\x3e`dopb/%\x3c170642?!\x3dnehu`/!364\x3e7\x3d73!9abk{ay\x22]'};if (avDiv) {for (var key in avMarkup) {if (avMarkup.hasOwnProperty(key)) {avDiv.setAttribute(key, avMarkup[key]);}}}})();(function() {var glidar = document.createElement('script');glidar.type = 'text/javascript';glidar.async = true;glidar.src = 'https://www.googletagservices.com/activeview/js/current/rx_lidar.js?cache=r20110914';document.body.insertBefore(glidar, document.body.firstChild)})();(function() {(function(){var s = document.createElement('script');s.setAttribute('data-jc', '86');s.src = 'https://pagead2.googlesyndication.com/pagead/js/r20220126/r20110914/elements/html/omrhp.js';s.setAttribute('data-jc-version', 'r20220126');var ss = document.getElementsByTagName('script')[0];if (ss && ss.parentNode) {ss.parentNode.insertBefore(s, ss);}})();window.dicnf = {eavp: true,ebrp: true,apfa: true,atsb: true,bvst: 'r20220126',eeid: 'amfzYfzFM_6Ez7sP0_WqkA8',opxb: true,aunb: true,};(function(){/*  Copyright The Closure Library Authors. SPDX-License-Identifier: Apache-2.0 */ function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a}; function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var da=ca(this);function ea(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}} var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},n;if("function"==typeof Object.setPrototypeOf)n=Object.setPrototypeOf;else{var ha;a:{var ia={a:!0},ja={};try{ja.__proto__=ia;ha=ja.a;break a}catch(a){}ha=!1}n=ha?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=n; function t(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(ka)ka(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.V=b.prototype}function la(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b} var ma="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};ea("Object.assign",function(a){return a||ma});ea("globalThis",function(a){return a||da});var v=this||self;var na=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};function oa(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}};function pa(a){pa[" "](a);return a}pa[" "]=function(){};var qa={},z=null; function ra(a,b){void 0===b&&(b=0);if(!z){z={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));qa[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===z[h]&&(z[h]=g)}}}b=qa[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=g+k+l+h}g=0;h=d;switch(a.length-f){case 2:g= a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")};var sa="function"===typeof Uint8Array;var A="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function B(a){Object.isFrozen(a)||(A?a[A]|=1:void 0!==a.g?a.g|=1:Object.defineProperties(a,{g:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a};function ta(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var ua,va=Object.freeze(B([]));function C(a,b,c,d){b<a.i&&(void 0===d||!d)?a.g[b+a.h]=c:(a.j||(a.j=a.g[a.i+a.h]={}))[b]=c;return a};function wa(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&sa&&null!=a&&a instanceof Uint8Array)return ra(a)}return a};function xa(a,b){if(null!=a){if(Array.isArray(a))a=ya(a,b);else if(ta(a)){var c={},d;for(d in a)c[d]=xa(a[d],b);a=c}else a=b(a);return a}}function ya(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=xa(c[d],b);if(b=Array.isArray(a)){var e;A?e=a[A]:e=a.g;b=(null==e?0:e)&1}b&&B(c);return c}function za(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=wa(a);return Array.isArray(a)?ya(a,za):a};var Aa;function D(a,b,c){var d=Aa;Aa=null;a||(a=d);d=this.constructor.U;a||(a=d?[d]:[]);this.h=(d?0:-1)-(this.constructor.T||0);this.l=void 0;this.g=a;a:{d=this.g.length;a=d-1;if(d&&(d=this.g[a],ta(d))){this.i=a-this.h;this.j=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.h),this.j=void 0):this.i=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.h,(d=this.g[a])?Array.isArray(d)&&B(d):this.g[a]=va;else{d=this.j||(this.j=this.g[this.i+this.h]={});var e=d[a];e?Array.isArray(e)&& B(e):d[a]=va}}D.prototype.toJSON=function(){var a=this.g;return ua?a:ya(a,za)};function Ba(a,b){return wa(b)}D.prototype.toString=function(){return this.g.toString()};function E(){D.apply(this,arguments)}t(E,D);function Ca(a){this.key=a}function F(a,b){this.key=a;this.defaultValue=void 0===b?!1:b}t(F,Ca);var Da=new F("100000"),Ea=new F("45357156"),Fa=new F("45350890");function Ga(a,b){return"&adurl="==a.substring(a.length-7)?a.substring(0,a.length-7)+b+"&adurl=":a+b};function G(a){return a=void 0===a?window:a};var H=v.dicnf||{};/*  SPDX-License-Identifier: Apache-2.0 */ function I(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function Ha(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)};var Ia=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ja(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{pa(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ka(a){var b=!0;b=void 0===b?!1:b;var c=void 0===c?v:c;for(var d=0;c&&40>d++&&(!b&&!Ja(c)||!a(c));)a:{try{var e=c.parent;if(e&&e!=c){c=e;break a}}catch(f){}c=null}}function La(){if(!globalThis.crypto)return Math.random();try{var a=new Uint32Array(1);globalThis.crypto.getRandomValues(a);return a[0]/65536/65536}catch(b){return Math.random()}} function Ma(a,b){if(a)for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(a[c],c,a)}var K=[];function Na(){var a=K;K=[];var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];a=b?b.call(a):{next:aa(a)};for(b=a.next();!b.done;b=a.next()){b=b.value;try{b()}catch(c){}}} function Oa(a,b){"complete"===a.readyState||"interactive"===a.readyState?(K.push(b),1==K.length&&(window.Promise?Promise.resolve().then(Na):window.setImmediate?setImmediate(Na):setTimeout(Na,0))):a.addEventListener("DOMContentLoaded",b)}function Pa(a,b){b=void 0===b?document:b;return b.createElement(String(a).toLowerCase())};function L(a,b){Qa(v,a,void 0===b?null:b,!1)}function Qa(a,b,c,d){a.google_image_requests||(a.google_image_requests=[]);var e=Pa("IMG",a.document);if(c){var f=function(g){c&&c(g);Ha(e,"load",f);Ha(e,"error",f)};I(e,"load",f);I(e,"error",f)}d&&(e.referrerPolicy="no-referrer");e.src=b;a.google_image_requests.push(e)}function Ra(a){var b;if(b=v.navigator)b=v.navigator.userAgent,b=/Chrome/.test(b)&&!/Edge/.test(b)?!0:!1;b&&v.navigator.sendBeacon?v.navigator.sendBeacon(a):L(a)} var Va=oa(function(){return"referrerPolicy"in Pa("IMG")});function Wa(){this.g={}}function Xa(a){Ya||(Ya=new Za);var b=Ya.g[a.key];if(a instanceof F)return"boolean"===typeof b?b:a.defaultValue;throw Error();};function Za(){this.g={};var a=document.currentScript;a=(a=(a=void 0===a?null:a)&&"0"===a.getAttribute("data-jc")?a:document.querySelector('[data-jc="0"]'))&&a.getAttribute("data-jc-flags")||"";try{var b=JSON.parse(a)[0];a="";for(var c=0;c<b.length;c++)a+=String.fromCharCode(b.charCodeAt(c)^"\u0003\u0007\u0003\u0007\b\u0004\u0004\u0006\u0005\u0003".charCodeAt(c%10));this.g=JSON.parse(a)}catch(d){}}var Ya;t(Za,Wa);var $a=window;function ab(a,b){var c=void 0===c?{}:c;this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c};var bb=RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");function cb(a,b){this.g=a;this.h=b}function db(a,b){this.url=a;this.O=!!b;this.depth=null};function eb(){this.i="&";this.h={};this.j=0;this.g=[]}function M(a,b){var c={};c[a]=b;return[c]}function fb(a,b,c,d,e){var f=[];Ma(a,function(g,h){(g=gb(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)} function gb(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){for(var f=[],g=0;g<a.length;g++)f.push(gb(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(fb(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))} function hb(a,b,c){b=b+"//pagead2.googlesyndication.com"+c;var d=ib(a)-c.length;if(0>d)return"";a.g.sort(function(m,p){return m-p});c=null;for(var e="",f=0;f<a.g.length;f++)for(var g=a.g[f],h=a.h[g],k=0;k<h.length;k++){if(!d){c=null==c?g:c;break}var l=fb(h[k],a.i,",$");if(l){l=e+l;if(d>=l.length){d-=l.length;b+=l;e=a.i;break}c=null==c?g:c}}a="";null!=c&&(a=e+"trn="+c);return b+a}function ib(a){var b=1,c;for(c in a.h)b=c.length>b?c.length:b;return 3997-b-a.i.length-1};function jb(){var a=void 0===a?$a:a;this.h="http:"===a.location.protocol?"http:":"https:";this.g=Math.random()}function kb(){var a=N,b=O.google_srt;0<=b&&1>=b&&(a.g=b)}function lb(a,b,c,d,e,f){if((d?a.g:Math.random())<(e||.01))try{if(c instanceof eb)var g=c;else g=new eb,Ma(c,function(k,l){var m=g,p=m.j++;k=M(l,k);m.g.push(p);m.h[p]=k});var h=hb(g,a.h,"/pagead/gen_204?id="+b+"&");h&&("undefined"!==typeof f?L(h,f):L(h))}catch(k){}};var P=null;function mb(){var a=void 0===a?v:a;return(a=a.performance)&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):Date.now()}function nb(){var a=void 0===a?v:a;return(a=a.performance)&&a.now?a.now():null};function ob(a,b){var c=nb()||mb();this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var Q=v.performance,pb=!!(Q&&Q.mark&&Q.measure&&Q.clearMarks),R=oa(function(){var a;if(a=pb){var b;if(null===P){P="";try{a="";try{a=v.top.location.hash}catch(c){a=v.location.hash}a&&(P=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=P;a=!!b.indexOf&&0<=b.indexOf("1337")}return a}); function qb(){var a=O;this.h=[];this.i=a||v;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.h=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.g=R()||(null!=b?b:1>Math.random())}function rb(a){a&&Q&&R()&&(Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),Q.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}qb.prototype.start=function(a,b){if(!this.g)return null;a=new ob(a,b);b="goog_"+a.label+"_"+a.uniqueId+"_start";Q&&R()&&Q.mark(b);return a}; qb.prototype.end=function(a){if(this.g&&"number"===typeof a.value){a.duration=(nb()||mb())-a.value;var b="goog_"+a.label+"_"+a.uniqueId+"_end";Q&&R()&&Q.mark(b);!this.g||2048<this.h.length||this.h.push(a)}};function sb(){var a=tb;this.i=N;this.h=null;this.m=this.l;this.g=void 0===a?null:a;this.j=!1}sb.prototype.pinger=function(){return this.i};function ub(a,b){try{if(a.g&&a.g.g){var c=a.g.start((903).toString(),3);var d=b();a.g.end(c)}else d=b()}catch(g){b=!0;try{rb(c),b=a.m(903,new ab(g,{message:vb(g)}),void 0,void 0)}catch(h){a.l(217,h)}if(b){var e,f;null==(e=window.console)||null==(f=e.error)||f.call(e,g)}else throw g;}return d} function wb(a){var b=S;return function(){var c=la.apply(0,arguments);return ub(b,function(){return a.apply(void 0,c)})}} sb.prototype.l=function(a,b,c,d,e){e=e||"jserror";try{var f=new eb;f.g.push(1);f.h[1]=M("context",a);b.error&&b.meta&&b.id||(b=new ab(b,{message:vb(b)}));if(b.msg){var g=b.msg.substring(0,512);f.g.push(2);f.h[2]=M("msg",g)}var h=b.meta||{};if(this.h)try{this.h(h)}catch(V){}if(d)try{d(h)}catch(V){}b=[h];f.g.push(3);f.h[3]=b;d=v;b=[];g=null;do{var k=d;if(Ja(k)){var l=k.location.href;g=k.document&&k.document.referrer||null}else l=g,g=null;b.push(new db(l||""));try{d=k.parent}catch(V){d=null}}while(d&& k!=d);l=0;for(var m=b.length-1;l<=m;++l)b[l].depth=m-l;k=v;if(k.location&&k.location.ancestorOrigins&&k.location.ancestorOrigins.length==b.length-1)for(m=1;m<b.length;++m){var p=b[m];p.url||(p.url=k.location.ancestorOrigins[m-1]||"",p.O=!0)}var r=new db(v.location.href,!1);k=null;var w=b.length-1;for(p=w;0<=p;--p){var u=b[p];!k&&bb.test(u.url)&&(k=u);if(u.url&&!u.O){r=u;break}}u=null;var q=b.length&&b[w].url;0!=r.depth&&q&&(u=b[w]);var x=new cb(r,u);if(x.h){var W=x.h.url||"";f.g.push(4);f.h[4]=M("top", W)}var y={url:x.g.url||""};if(x.g.url){var J=x.g.url.match(Ia),X=J[1],Sa=J[3],Ta=J[4];r="";X&&(r+=X+":");Sa&&(r+="//",r+=Sa,Ta&&(r+=":"+Ta));var Ua=r}else Ua="";y=[y,{url:Ua}];f.g.push(5);f.h[5]=y;lb(this.i,e,f,this.j,c)}catch(V){try{lb(this.i,e,{context:"ecmserr",rctx:a,msg:vb(V),url:x&&x.g.url},this.j,c)}catch(vc){}}return!0}; function vb(a){var b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);for(var c;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(d){}}return b};function T(a){var b="H";if(a.H&&a.hasOwnProperty(b))return a.H;b=new a;return a.H=b};function xb(){this.g=function(){return[]}};var N,S,O=window,tb=new qb;function yb(){if(!O.google_measure_js_timing){var a=tb;a.g=!1;a.h!=a.i.google_js_reporting_queue&&(R()&&na(a.h,rb),a.h.length=0)}}(function(a){N=null!=a?a:new jb;"number"!==typeof O.google_srt&&(O.google_srt=Math.random());kb();S=new sb;S.h=function(){};S.j=!0;"complete"==O.document.readyState?yb():tb.g&&I(O,"load",function(){yb()})})();function zb(a,b){function c(h){try{var k="object"===typeof h.data?h.data:JSON.parse(h.data);f===k.paw_id&&(window.clearTimeout(g),window.removeEventListener("message",c),k.signal?b(k.signal):k.error&&e(k.error))}catch(l){h={msg:"postmessageError",err:l instanceof Error?l.message:"nonError",data:null==h.data?"null":500<h.data.length?h.data.substring(0,500):h.data},k=T(xb).g(),!h.eid&&k.length&&(h.eid=k.toString()),lb(N,"paw_sigs",h,!0,void 0,void 0)}}var d={};d=void 0===d?{}:d;b=void 0===b?function(){}: b;var e=void 0===e?function(){}:e;var f=String(Math.floor(2147483647*La())),g=0;window.addEventListener("message",wb(function(h){c(h)}));a.postMessage(Object.assign({paw_id:f},d));g=window.setTimeout(function(){window.removeEventListener("message",c);e("PAW GMA postmessage timed out.")},200)} function Ab(){var a,b,c=window;if(c.gmaSdk||(null===(a=c.webkit)||void 0===a?0:a.messageHandlers.getGmaViewSignals))return c;try{var d=window.parent;if(d.gmaSdk||(null===(b=d.webkit)||void 0===b?0:b.messageHandlers.getGmaViewSignals))return d}catch(e){}return null};var Bb=["FRAME","IMG","IFRAME"],Cb=/^[01](px)?$/;function Db(a){return"string"===typeof a?document.getElementById(a):a} function Eb(a,b,c,d,e,f){c=void 0===c?!0:c;d=void 0===d?!1:d;f=void 0===f?!1:f;if(a=Db(a)){e||(e=function(y,J,X){y.addEventListener(J,X)});for(var g=!1,h=function(y){g||(g=!0,b(y))},k,l,m=0;m<Bb.length;++m)if(Bb[m]==a.tagName){l=3;k=[a];break}k||(k=a.querySelectorAll(Bb.join(",")),l=2);var p=0,r=0,w=a=!1;m={};for(var u=0;u<k.length;m={s:m.s},u++){var q=k[u];if(!("IMG"!=q.tagName||!q.complete||q.naturalWidth&&q.naturalHeight?Cb.test(q.getAttribute("width"))&&Cb.test(q.getAttribute("height")):1)){if("IMG"== q.tagName)var x=q.naturalWidth&&q.naturalHeight?!0:!1;else try{x="complete"===(q.readyState?q.readyState:q.contentWindow&&q.contentWindow.document&&q.contentWindow.document.readyState)?!0:!1}catch(y){x=void 0===d?!1:d}if(x)a=!0;else{p++;m.s="IMG"===q.tagName;var W=function(y){return function(){p--;p||h(l);y.s&&(r--,!r&&w&&h(l))}}(m);e(q,"load",W);m.s&&(r++,e(q,"error",W))}}}k=null;if(0===p&&!a&&"complete"===v.document.readyState)l=5;else if(p||!a){e(v,"load",function(){f&&r?w=!0:h(4)});return}c&& h(l)}};function Fb(a,b,c){if(a)for(var d=0;null!=a&&500>d&&!c(a);++d)a=b(a)}function Gb(a,b){Fb(a,function(c){try{return c===c.parent?null:c.parent}catch(d){}return null},b)}function Hb(a,b){if("IFRAME"==a.tagName)b(a);else{a=a.querySelectorAll("IFRAME");for(var c=0;c<a.length&&!b(a[c]);++c);}}function Ib(a){return(a=a.ownerDocument)&&(a.parentWindow||a.defaultView)||null} function Jb(a,b,c){try{var d=JSON.parse(c.data)}catch(g){}if("object"===typeof d&&d&&"creativeLoad"===d.type){var e=Ib(a);if(c.source&&e){var f;Gb(c.source,function(g){try{if(g.parent===e)return f=g,!0}catch(h){}});f&&Hb(a,function(g){if(g.contentWindow===f)return b(d),!0})}}}function Kb(a){return"string"===typeof a?document.getElementById(a):a} function Lb(a,b){var c=Kb(a);if(c)if(c.onCreativeLoad)c.onCreativeLoad(b);else{var d=b?[b]:[],e=function(f){for(var g=0;g<d.length;++g)try{d[g](1,f)}catch(h){}d={push:function(h){h(1,f)}}};c.onCreativeLoad=function(f){d.push(f)};c.setAttribute("data-creative-load-listener","");c.addEventListener("creativeLoad",function(f){e(f.detail)});v.addEventListener("message",function(f){Jb(c,e,f)})}};function U(a){var b=this;this.h=!1;this.g=[];a(function(c){Mb(b,c)})}function Mb(a,b){if(!a.h)if(b instanceof U)b.then(function(c){Mb(a,c)});else{a.h=!0;a.i=b;for(b=0;b<a.g.length;++b)Nb(a,a.g[b]);a.g=[]}}function Nb(a,b){a.h?b(a.i):a.g.push(b)}U.prototype.then=function(a){var b=this;return new U(function(c){Nb(b,function(d){c(a(d))})})}; function Ob(a){var b=a.length,c=0;return new U(function(d){if(0==b)d([]);else for(var e=[],f={o:0};f.o<b;f={o:f.o},++f.o)a[f.o].then(function(g){return function(h){e[g.o]=h;++c==b&&d(e)}}(f))})}function Pb(){var a,b=new U(function(c){a=c});return new Qb(b,a)}function Qb(a,b){this.promise=a;this.resolve=b};var Rb=new function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b}(1959);function Sb(){var a={};this.g=function(){var b=Rb.g,c=Rb.defaultValue;return null!=a[b]?a[b]:c}};function Tb(a){return T(Sb).g()&&a.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0}function Ub(a){var b;a.visibilityState?b="visibilitychange":a.mozVisibilityState?b="mozvisibilitychange":a.webkitVisibilityState&&(b="webkitvisibilitychange");return b};function Vb(a){E.call(this,a,-1,Wb)}t(Vb,E);function Xb(a,b){return C(a,2,b)}function Yb(a,b){return C(a,3,b)}function Zb(a,b){return C(a,4,b)}function $b(a,b){return C(a,5,b)}function ac(a,b){return C(a,9,b)}function bc(a,b){var c=void 0===c?!1:c;if(b){var d=B([]);for(var e=0;e<b.length;e++)d[e]=b[e].g;a.l||(a.l={});a.l[10]=b}else a.l&&(a.l[10]=void 0),d=va;return C(a,10,d,c)}function cc(a,b){return C(a,1,b)}function dc(a){E.call(this,a)}t(dc,E);var Wb=[10,6];var ec="platform platformVersion architecture model uaFullVersion bitness fullVersionList".split(" "); function fc(a){var b,c;return"function"!==typeof(null===(c=null===(b=null===a||void 0===a?void 0:a.navigator)||void 0===b?void 0:b.userAgentData)||void 0===c?void 0:c.getHighEntropyValues)?null:a.navigator.userAgentData.getHighEntropyValues(ec).then(function(d){var e;return bc(ac($b(Zb(Yb(Xb(cc(new Vb,d.platform),d.platformVersion),d.architecture),d.model),d.uaFullVersion),d.bitness),null===(e=d.fullVersionList)||void 0===e?void 0:e.map(function(f){var g=new dc;g=C(g,1,f.brand);return C(g,2,f.version)}))})} ;function gc(){this.g=v.document;this.m=v;this.h=null;this.i=this.j="";hc(this)} function hc(a){var b=[],c=Xa(Fa)||!!H.aub;if(c||H.aunb){var d=fc(a.m);null!=d&&(d=d.then(function(l){a:{ua=!0;try{var m=JSON.stringify(l.toJSON(),Ba);break a}finally{ua=!1}m=void 0}l=m;m=[];for(var p=0,r=0;r<l.length;r++){var w=l.charCodeAt(r);255<w&&(m[p++]=w&255,w>>=8);m[p++]=w}l=ra(m,3);a.j=l}),c&&b.push(d))}if(Xa(Ea)){c=Ab();var e;if(null!=(null==c?void 0:null==(e=c.gmaSdk)?void 0:e.getViewSignals)){var f;if(e=null==c?void 0:null==(f=c.gmaSdk)?void 0:f.getViewSignals())a.i="&ms="+e}else{var g; if(null!=(null==c?void 0:null==(g=c.webkit)?void 0:g.messageHandlers.getGmaViewSignals)){var h;zb(null==c?void 0:null==(h=c.webkit)?void 0:h.messageHandlers.getGmaViewSignals,function(l){a.i="&"+l})}}}H.umi&&(f=new U(function(l){a.h=l}),b.push(f));if(H.ebrpfa||Xa(Da)){var k=Pb();b.push(k.promise);Oa(a.g,function(){Eb(a.g.body,k.resolve)})}3==Tb(a.g)&&3==Tb(a.g)&&b.push(ic(a));a.l=Ob(b)} function ic(a){return new U(function(b){var c=Ub(a.g);if(c){var d=function(){3!=Tb(a.g)&&(Ha(a.g,c,d),b())};I(a.g,c,d)}})};function Y(){return(new Date).getTime()}function jc(a,b){this.G=a;this.u=this.i=this.g=!1;this.L=1;this.l=H.eavp?1:0;this.h=H.ebrp?1:0;this.S=!!H.opxb;this.C=this.v=null;this.N=Pb();this.K=Y();this.J=null;this.P=!!H.dhbr;this.M=H.eeid||"";this.B=this.m=null;this.R=(Math.random()+"").slice(-5);this.j=!1;this.A=null;this.I=0;this.D=this.F=null;kc(this,b)}var lc;function mc(a,b){b&&0!==a.h&&(a.B=Y()-a.K,nc(a,b).then(function(c){c&&(a.v=c);a.u=!0;Z(a)}))} function kc(a,b){mc(a,b);0!==a.h||0!==a.l?oc(a)?pc(a).then(function(){qc(a)}):qc(a):a.A=1;T(gc).l.then(function(){a.g=!0;Z(a)});rc(a);Z(a)}function nc(a,b){return new U(function(c){function d(e,f){a.C=e;c(f)}Lb(b,d);Eb(b,d,!0,!1,void 0,!0)})}function oc(a){a.j=sc();a.A=a.j?4:1;return a.j} function pc(a){return new U(function(b){function c(e){a.A=3;e&&(a.F=e.src,a.D=e.sdk);b()}var d=v.omrhp;"function"===typeof d?d(c):(d=v.document.querySelector("script[data-jc='86']"))&&d.addEventListener("load",function(){v.omrhp(c)})})}function qc(a){a.i=!0;Z(a)} function Z(a){if(a.g){var b=null,c=0;2!==a.L?b=0:1===a.l&&a.g&&a.i?b=12:1===a.h&&a.g&&a.i&&a.u&&(b=11);if(null!=b)a:{if(0===b?1===a.h&&a.g&&a.i&&a.u?c=2:1===a.l&&a.g&&a.i&&(c=1):12===b&&1===a.h&&a.g&&a.i&&a.u&&(c=2),a.S&&(a.P&&""!==a.G&&a.j&&(a.m||0!==b||tc(a,!0),12!==b&&1!==c&&2!==c||tc(a,!1)),0===b&&0===c))break a;var d=Y(),e=uc(a,b,c,d);0===b&&(a.L=2,a.J=d);if(12===b||c)a.l=2;if(11===b||2===c)a.h=2;e&&(H.atsb?Ra(e):L(e));0===b&&a.N.resolve()}}} function tc(a,b){var c=null;b?a.m=Y():c=a.m?Y()-a.m:"?";a="https://pagead2.googlesyndication.com/pagead/gen_204?id=opxhb&evt="+(b?"d":"o")+("&eid="+encodeURIComponent(a.M))+(null==c?"":"&ttp="+c);H.atsb?Ra(a):L(a)} function uc(a,b,c,d){if(""===a.G)return null;var e={omid:a.j?1:0,rm:a.A,ctpt:d-a.K};0!==b&&(e.vt=b,e.dtpt=d-(a.J||0));0!==c&&(e.cbvp=c);a.C&&(e.dett=a.C);a.v&&(e.beid=a.v.eventId,e.vend=a.v.vendor);null!=a.B&&(e.cstd=a.B);(b=H.bvst)&&(e.cisv=b+("."+a.R));0!==a.I&&(e.vwbs=a.I);a.F&&(e.oprs=a.F);a.D&&(e.opsd=a.D);(b=T(gc).j)&&(e.uach=b);var f="";Ma(e,function(g,h){f+="&"+h+"="+encodeURIComponent(g)});return Ga(a.G,f)} function rc(a){var b=a.M;if(b&&(b=v["bllsn"+b],"function"===typeof b))try{b(function(c){c&&(a.I=c.block?2:1)})}catch(c){}}function sc(){var a=G(v).omid3p,b=!!a&&"function"===typeof a.registerSessionObserver&&"function"===typeof a.addEventListener;b||Ka(function(c){try{var d=c.frames?!!c.frames.omid_v1_present:!1}catch(e){d=!1}d&&(b=!0);return b});return b};G().btrp=function(a,b){var c=lc=new jc(a,b);return function(d){mc(c,d)}};G().pdib3=function(a,b){lc.N.promise.then(function(){if(b)if(Va())Qa(window,a,null,!0);else{var c=v.document;if(c.body){var d=c.getElementById("goog-srcless-iframe");d||(d=Pa("IFRAME"),d.style.display="none",d.id="goog-srcless-iframe",c.body.appendChild(d));c=d}else c=null;c&&c.contentWindow&&Qa(c.contentWindow,a,null,!0)}else L(a)})};G().vv=function(){var a=T(gc);if(!a.h)throw Error("aiv::err");a.h()};}).call(this);window.stcc = btrp("https://googleads4.g.doubleclick.net/pcs/view?xai\x3dAKAOjsu7x27ea8rwAUI4FnSHYUAdaQ9GXlSvzVqOYhi2G8tbkthw4I5zDVeNA1aeaS0_wWqqVqEPow_OZSr3G-2ffXiFK2omTwmqxhYClZSSnSHo8hdwwoZypFTq_1EP5YAbScjNbtdQEg\x26sig\x3dCg0ArKJSzL8TL60nWb2MEAE\x26uach_m\x3d[UACH]\x26cry\x3d1\x26fbs_aeid\x3d[gw_fbsaeid]\x26urlfix\x3d1\x26adurl\x3d", document.getElementById("gcc_amfzYfzFM_6Ez7sP0_WqkA8"));})();