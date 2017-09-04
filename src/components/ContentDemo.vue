<template>
  <div>
    <collapse></collapse>
    <card class="card"></card>
  </div>
</template>
<script>
  import card from './common/card'
  import collapse from './common/collapse'

  export default {
    data: function () {
      return {}
    },
    computed: {},
    components: {
      card,
      collapse
    },
    methods: {}
  }
</script>
<style lang="stylus" scoped>
  .card
    margin-top:20px;
</style>
