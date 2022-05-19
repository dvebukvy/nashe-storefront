import Vue from 'vue'
import Vuex from 'vuex'
import VShowSlide from 'v-show-slide'
import VModal from 'vue-js-modal'
import Paginate from "vuejs-paginate";
import VueMask from 'v-mask';
import vClickOutside from 'v-click-outside'
import vSelect from "vue-select";

Vue.use(Vuex)
Vue.component("paginate", Paginate)
Vue.use(VModal)
Vue.use(VueMask)
Vue.use(vClickOutside)
Vue.component("v-select", vSelect);
Vue.use(VShowSlide, {
  customEasing: {
    exampleEasing: 'ease'
  }
})
