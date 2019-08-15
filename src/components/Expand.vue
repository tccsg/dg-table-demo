<template>
  <div>
    <el-form label-position="left" inline class="demo-table-expand">
      <el-form-item label="姓名">
        <span>{{ row.name }}</span>
      </el-form-item>
      <el-form-item label="性别">
        <span>{{ row.gender }}</span>
      </el-form-item>
      <el-form-item label="出生地">
        <span>{{ row.birthPlace }}</span>
      </el-form-item>
      <el-form-item label="出生日期">
        <span>{{ row.birthDay }}</span>
      </el-form-item>
      <el-form-item label="手机号">
        <span>{{ row.phone }}</span>
      </el-form-item>
      <el-form-item label="年龄">
        <span>{{ row.age }}</span>
      </el-form-item>
      <el-form-item label="创建时间">
        <span>{{ row.createAt }}</span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props:['row', 'column']
}
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
