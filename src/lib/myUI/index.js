import Magnifier from './components/Magnifier/Magnifier.vue';
import Stars from './components/Stars/Stars.vue';
import Select from './components/Selector/index.vue';


let myUI = {}
myUI.install = Vue => {
    Vue.component(Magnifier.name, Magnifier)
    Vue.component(Stars.name, Stars)
    Vue.component(Select.name, Select)
}

export default myUI