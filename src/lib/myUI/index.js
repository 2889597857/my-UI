import Magnifier from './components/Magnifier.vue';
let myUI = {}
myUI.install = Vue => {
    Vue.component(Magnifier.name, Magnifier)
}

export default myUI