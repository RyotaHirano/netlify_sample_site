import Vue from 'vue'
import '../html/index.pug'
import '../css/style.scss'

import Sum from './components/Sum'

const a = ['aaaa', '1212121', 'assasaasa']
console.log(a)

document.addEventListener('DOMContentLoaded', () => {
  // Sum Component
  if (document.getElementById('sum')) {
    /* eslint-disable no-new */
    new Vue({
      el: '#sum',
      template: '<Sum/>',
      components: { Sum }
    })
  }
})
