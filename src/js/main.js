import Vue from 'vue'
import '../html/index.pug'
import '../css/style.scss'

import typeCount from './components/typeCount'

document.addEventListener('DOMContentLoaded', () => {
  // Sum Component
  if (document.getElementById('typeCount')) {
    /* eslint-disable no-new */
    new Vue({
      el: '#typeCount',
      template: '<typeCount/>',
      components: { typeCount }
    })
  }
})
