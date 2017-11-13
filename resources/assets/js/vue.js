import Vue from 'vue'

window.Vue = Vue
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'

Vue.use(BootstrapVue)

import Comment from './components/comments/Comment.vue'
import CommentList from './components/comments/Comment-list.vue'
import CommentForm from './components/comments/Comment-form.vue'

// Vue.component('comment', require('./components/comments/Comment.vue'));
// Vue.component('comment-list', require('./components/comments/Comment-list.vue'));
// Vue.component('comment-form', require('./components/comments/Comment-form.vue'));

window.Event = new Vue()

const app = new Vue({
  el: '#app',
  component: {
    Comment,
    CommentList,
    CommentForm
  },
  mounted () {
    $('[data-confirm]').on('click', function () {
      return confirm($(this).data('confirm'))
    })
  }
})
