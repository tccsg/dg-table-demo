<template>
  <div style="display: flex; justify-content: center">
    <el-button
      size="mini"
      @click.stop="clickme">
      点我
    </el-button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String,
    row: Object
  },
  mounted() {
    // console.log(this.row)
  },
  methods: {
    clickme() {
      console.log(this.row)
    }
  }
}
</script>

