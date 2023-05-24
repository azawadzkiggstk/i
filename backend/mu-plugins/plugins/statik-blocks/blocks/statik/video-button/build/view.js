var StatikVideoButtonBlock;!function(){"use strict";var e={d:function(t,o){for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}e.d(t,{default:function(){return u}});var i,a,r,l,s,d=(i=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","[contenteditable]",'[tabindex]:not([tabindex^="-"])'],a=function(){function e(t){var n=t.targetModal,i=t.triggers,a=void 0===i?[]:i,r=t.onShow,l=void 0===r?function(){}:r,s=t.onClose,d=void 0===s?function(){}:s,c=t.openTrigger,u=void 0===c?"data-micromodal-trigger":c,h=t.closeTrigger,f=void 0===h?"data-micromodal-close":h,m=t.openClass,v=void 0===m?"is-open":m,g=t.disableScroll,b=void 0!==g&&g,y=t.disableFocus,p=void 0!==y&&y,w=t.awaitCloseAnimation,k=void 0!==w&&w,E=t.awaitOpenAnimation,C=void 0!==E&&E,M=t.debugMode,L=void 0!==M&&M;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.modal=document.getElementById(n),this.config={debugMode:L,disableScroll:b,openTrigger:u,closeTrigger:f,openClass:v,onShow:l,onClose:d,awaitCloseAnimation:k,awaitOpenAnimation:C,disableFocus:p},a.length>0&&this.registerTriggers.apply(this,o(a)),this.onClick=this.onClick.bind(this),this.onKeydown=this.onKeydown.bind(this)}var t;return(t=[{key:"registerTriggers",value:function(){for(var e=this,t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];o.filter(Boolean).forEach((function(t){t.addEventListener("click",(function(t){return e.showModal(t)}))}))}},{key:"showModal",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;this.activeElement=document.activeElement,this.modal.setAttribute("aria-hidden","false"),this.modal.classList.add(this.config.openClass),this.scrollBehaviour("disable"),this.addEventListeners(),this.config.awaitOpenAnimation?this.modal.addEventListener("animationend",(function t(){e.modal.removeEventListener("animationend",t,!1),e.setFocusToFirstNode()}),!1):this.setFocusToFirstNode(),this.config.onShow(this.modal,this.activeElement,t)}},{key:"closeModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=this.modal;if(this.modal.setAttribute("aria-hidden","true"),this.removeEventListeners(),this.scrollBehaviour("enable"),this.activeElement&&this.activeElement.focus&&this.activeElement.focus(),this.config.onClose(this.modal,this.activeElement,e),this.config.awaitCloseAnimation){var o=this.config.openClass;this.modal.addEventListener("animationend",(function e(){t.classList.remove(o),t.removeEventListener("animationend",e,!1)}),!1)}else t.classList.remove(this.config.openClass)}},{key:"closeModalById",value:function(e){this.modal=document.getElementById(e),this.modal&&this.closeModal()}},{key:"scrollBehaviour",value:function(e){if(this.config.disableScroll){var t=document.querySelector("body");switch(e){case"enable":Object.assign(t.style,{overflow:""});break;case"disable":Object.assign(t.style,{overflow:"hidden"})}}}},{key:"addEventListeners",value:function(){this.modal.addEventListener("touchstart",this.onClick),this.modal.addEventListener("click",this.onClick),document.addEventListener("keydown",this.onKeydown)}},{key:"removeEventListeners",value:function(){this.modal.removeEventListener("touchstart",this.onClick),this.modal.removeEventListener("click",this.onClick),document.removeEventListener("keydown",this.onKeydown)}},{key:"onClick",value:function(e){(e.target.hasAttribute(this.config.closeTrigger)||e.target.parentNode.hasAttribute(this.config.closeTrigger))&&(e.preventDefault(),e.stopPropagation(),this.closeModal(e))}},{key:"onKeydown",value:function(e){27===e.keyCode&&this.closeModal(e),9===e.keyCode&&this.retainFocus(e)}},{key:"getFocusableNodes",value:function(){var e=this.modal.querySelectorAll(i);return Array.apply(void 0,o(e))}},{key:"setFocusToFirstNode",value:function(){var e=this;if(!this.config.disableFocus){var t=this.getFocusableNodes();if(0!==t.length){var o=t.filter((function(t){return!t.hasAttribute(e.config.closeTrigger)}));o.length>0&&o[0].focus(),0===o.length&&t[0].focus()}}}},{key:"retainFocus",value:function(e){var t=this.getFocusableNodes();if(0!==t.length)if(t=t.filter((function(e){return null!==e.offsetParent})),this.modal.contains(document.activeElement)){var o=t.indexOf(document.activeElement);e.shiftKey&&0===o&&(t[t.length-1].focus(),e.preventDefault()),!e.shiftKey&&t.length>0&&o===t.length-1&&(t[0].focus(),e.preventDefault())}else t[0].focus()}}])&&function(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(e.prototype,t),e}(),r=null,l=function(e){if(!document.getElementById(e))return console.warn("MicroModal: ❗Seems like you have missed %c'".concat(e,"'"),"background-color: #f8f9fa;color: #50596c;font-weight: bold;","ID somewhere in your code. Refer example below to resolve it."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<div class="modal" id="'.concat(e,'"></div>')),!1},s=function(e,t){if(function(e){e.length<=0&&(console.warn("MicroModal: ❗Please specify at least one %c'micromodal-trigger'","background-color: #f8f9fa;color: #50596c;font-weight: bold;","data attribute."),console.warn("%cExample:","background-color: #f8f9fa;color: #50596c;font-weight: bold;",'<a href="#" data-micromodal-trigger="my-modal"></a>'))}(e),!t)return!0;for(var o in t)l(o);return!0},{init:function(e){var t=Object.assign({},{openTrigger:"data-micromodal-trigger"},e),n=o(document.querySelectorAll("[".concat(t.openTrigger,"]"))),i=function(e,t){var o=[];return e.forEach((function(e){var n=e.attributes[t].value;void 0===o[n]&&(o[n]=[]),o[n].push(e)})),o}(n,t.openTrigger);if(!0!==t.debugMode||!1!==s(n,i))for(var l in i){var d=i[l];t.targetModal=l,t.triggers=o(d),r=new a(t)}},show:function(e,t){var o=t||{};o.targetModal=e,!0===o.debugMode&&!1===l(e)||(r&&r.removeEventListeners(),(r=new a(o)).showModal())},close:function(e){e?r.closeModalById(e):r.closeModal()}});"undefined"!=typeof window&&(window.MicroModal=d);var c=d;function u(e){let{attributes:t}=e;document.addEventListener("DOMContentLoaded",(()=>{new h(document.querySelector(`.wp-block-${t.blockId}`),t).init()}))}class h{constructor(e,t){this.element=e,this.attributes=t,this.button=this.element.querySelector(".wp-block-statik-video-button__link"),this.blockId=this.attributes.blockId,this.modalUrl=this.attributes.blockAtts.url,this.modalContainerElement=null}init(){this.registerEffects()}registerEffects(){this.button.addEventListener("click",(e=>{e.preventDefault(),this.appendModal(),this.openModal()}))}appendModal(){if(this.modalContainerElement)return;const e=this.getModalHtml(),t=document.createElement("template");t.innerHTML=e.trim(),this.modalContainerElement=t.content.firstChild,document.body.appendChild(this.modalContainerElement)}openModal(){const e=this.getModalConfig();c.show(`modal-video-${this.blockId}`,e)}destroyModal(){this.modalContainerElement&&(this.modalContainerElement.remove(),this.modalContainerElement=null)}getModalHtml(){return`\n\t\t<div id="modal-video-${this.blockId}" class="modal micromodal-slide" aria-hidden="true">\n\t\t\t<div class="modal__overlay">\n\t\t\t\t<div class="modal__content"> \n\t\t\t\t\t<button class="modal__close" aria-label="Close modal" data-micromodal-close></button> \n\t\t\t\t\t<iframe id="modal-iframe-${this.blockId}" width="560" height="315" src="${this.modalUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t`}getModalConfig(){return{disableScroll:!0,awaitCloseAnimation:!0,onClose:e=>{const t=this;e.addEventListener("animationend",(function o(){t.destroyModal(),e.removeEventListener("animationend",o,!1)}),!1)}}}}StatikVideoButtonBlock=t.default}();