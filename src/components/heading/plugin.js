import CdrHeading from './cdrHeading';

function install(Vue) {
  Vue.component('cdr-heading', CdrHeading);
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(install);
}

export default install;

export { CdrHeading };
