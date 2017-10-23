import CdrMediaObject from './cdrMediaObject.vue';

function install(Vue) {
  Vue.component('cdr-media-object', CdrMediaObject);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrMediaObject };
