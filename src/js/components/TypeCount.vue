<template lang="pug">
  .type-count
    p type count component
    input(:value="inputString", @input="updateStringCount($event.target.value)")
    span {{count}}文字
</template>

<script>
import strLength from './../modules/strLength'

export default {
  name: 'typeCount',

  data: function() {
    return {
      inputString: '',
      count: 0
    }
  },

  methods: {
    updateStringCount: function(value) {
      this.inputString = value
      this.count = strLength(value)
    }
  }
}
</script>