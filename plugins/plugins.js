import Vue from 'vue'
import Vuex from 'vuex'
import VShowSlide from 'v-show-slide'
import VModal from 'vue-js-modal'

Vue.use(Vuex)
Vue.use(VModal)
Vue.use(VShowSlide, {
  customEasing: {
    exampleEasing: 'ease'
  }
})
