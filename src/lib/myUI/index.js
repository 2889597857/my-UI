import Magnifier from './components/Magnifier/Magnifier.vue';
import Stars from './components/Stars/Stars.vue';
import Select from './components/Selector/index.vue';
import IInput from './components/Input/index.vue';
import IFormItem from './components/formItem/index.vue';
import IButton from './components/button/index.vue';
import IForm from './components/Form/index.vue';
import ITabs from './components/tabs/index.vue';
import ITabPan from './components/tabpan/index.vue';

let myUI = {}
myUI.install = Vue => {
    Vue.component(Magnifier.name, Magnifier)
    Vue.component(Stars.name, Stars)
    Vue.component(Select.name, Select)
    Vue.component(IInput.name, IInput)
    Vue.component(IFormItem.name, IFormItem)
    Vue.component(IForm.name, IForm)
    Vue.component(IButton.name, IButton)
    Vue.component(ITabs.name, ITabs)
    Vue.component(ITabPan.name, ITabPan)
}
export default myUI