<template>
  <div id="app">
    <dg-table
      :configs="configs"
      tableId='account'
      @filter-change="filterChange"

      :data="tableData"
      height="600"
      @row-click='rowClick'
      @selection-change="handleSelectionChange"
      stripe
      show-summary
      highlight-current-row
      :default-sort = "{prop: 'date', order: 'descending'}"
    ></dg-table>
  </div>
</template>

<script>
import Address from './components/Address'
import Gender from './components/Gender'
import MyDatePicker from './components/MyDatePicker'
import MyCascader from './components/MyCascader'
import MyInput from './components/myFilter/MyInput'
import Buttons from './components/Buttons'
import Expand from './components/Expand'
import {
  createTableDataByRandom
} from './assets/js/simulationapi.js'
export default {
  name: "app",
  components: {},
  mounted() {
    const res = createTableDataByRandom(10)
    this.tableData = res.data
  },
  data() {
    return {
      value1: '',
      tableData: [],
      search: "",
      configs: [
        {
          columnConfig: {
            type: 'index'
          }
        },
        {
          columnConfig: {
            type:"expand"
          },
          component: Expand
        },
        {
          columnConfig: {
            type: 'selection'
          }
        },
        {
          columnConfig: {
            prop: "name",
            label: "姓名",
            sortable: true
          }
        },
        {
          columnConfig: {
            prop: "gender",
            label: "性别",
            filters: [
              {text: '男', value: '1'},
              {text: '女', value: '2'}
            ],
            filterMethod: (value, row, column) => {
              const property = column['property'];
              return row[property] === value;
            }
          },
          component: Gender,
        },
        {
          columnConfig: {
            prop: "birthPlace",
            label: "出生地"
          },
          component: Address,
          filterConfig: {
            type: 'cascader',
            component: MyCascader
          }
        },
        {
          columnConfig: {
            prop: "birthDay",
            label: "出生日期"
          },
          filterConfig: {
            type: 'date',
            component: MyDatePicker
          }
        },
        {
          columnConfig: {
            prop: "phone",
            label: "手机号"
          },
          filterConfig: {
            type: 'custom',
            component: MyInput
          }
        },
        {
          columnConfig: {
            prop: "age",
            label: "年龄"
          }
        },
        {
          columnConfig: {
            prop: "createAt",
            label: "创建时间"
          },
          filterConfig: {
            type: 'date'
          }
        },
        {
          columnConfig: {
            label: '操作',
            fixed: 'right'
          },
          component: Buttons
        }
      ]
    };
  },
  methods: {
    rowClick (row, column) {
      console.log(row, column)
    },
    filterChange (res) {
      console.log(res)
    },
    handleSelectionChange(val) {
      console.log(val)
    }
  }
};
</script>

<style>
body{
  padding-top: 1px;
}
#app {
  margin-top: 80px;
}
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
