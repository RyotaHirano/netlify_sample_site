import Vue from 'vue'
import '../html/index.pug'
import '../css/style.scss'

import TypeCount from './components/TypeCount'

document.addEventListener('DOMContentLoaded', () => {
  // Sum Component
  if (document.getElementById('typeCount')) {
    /* eslint-disable no-new */
    new Vue({
      el: '#typeCount',
      template: '<TypeCount/>',
      components: { TypeCount }
    })
  }
})
