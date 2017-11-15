import axios from 'axios'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

import CommentList from './components/comments/Comment-list.vue'
import CommentForm from './components/comments/Comment-form.vue'

window.Vue = Vue
Vue.use(BootstrapVue)
window.Event = new Vue()

const app = new Vue({
  el: '#app',
  components: {
    CommentList,
    CommentForm
  },
  mounted () {
    $('[data-confirm]').on('click', function () {
      return confirm($(this).data('confirm'))
    })
  }
})
