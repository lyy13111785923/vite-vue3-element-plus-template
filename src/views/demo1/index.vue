<template>
  <el-card class="box-card">
    <el-card class="box-card-form">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="formInline.user" placeholder="Approved by" clearable />
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formInline.region" placeholder="Activity zone" clearable>
            <el-option label="Zone one" value="shanghai" />
            <el-option label="Zone two" value="beijing" />
          </el-select>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker v-model="formInline.date" type="date" placeholder="Pick a date" clearable />
        </el-form-item>
        <el-form-item style="float:right;margin:8px 10px 0 0;">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button>重置</el-button>
          <el-button type="primary" @click="addDialog">添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="box-card-table">
      <div style="width: 100%;height:100%;">
        <el-table :data="tableData" border height="100%" style="width: 100%">
          <el-table-column fixed type="index" width="60" label="序号" align="center" />
          <el-table-column fixed prop="date" label="Date" min-width="150" header-align="center" show-overflow-tooltip />
          <el-table-column prop="name" label="Name" min-width="120" header-align="center" show-overflow-tooltip />
          <el-table-column prop="state" label="State" min-width="120" header-align="center" show-overflow-tooltip />
          <el-table-column prop="city" label="City" min-width="120" header-align="center" show-overflow-tooltip />
          <el-table-column prop="address" label="Address" min-width="600" header-align="center" show-overflow-tooltip />
          <el-table-column prop="zip" label="Zip" min-width="120" header-align="center" show-overflow-tooltip />
          <el-table-column fixed="right" label="Operations" min-width="120" align="center" show-overflow-tooltip>
            <template #default>
              <el-button link type="primary" size="small" @click="addDialog">修改</el-button>
              <el-button link type="danger" size="small" @click="handleClick">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin:10px 0;float:right;">
          <el-pagination v-model:current-page="currentPage4" v-model:page-size="pageSize4" :page-sizes="[100, 200, 300, 400]" :small="small" :disabled="disabled" :background="background" layout="total, sizes, prev, pager, next, jumper" :total="400" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
        </div>
      </div>
    </el-card>
    <!-- add edit dialog -->
    <addOrEditDialog v-if="addOrEditDialogFlag" :data="addOrEditDialogData" @close="addOrEditDialogClose"></addOrEditDialog>
  </el-card>
</template>

<script setup>
import addOrEditDialog from './dialog/addOrEditDialog.vue';
import { ref, reactive } from 'vue'

// form
const formInline = reactive({
  user: '',
  region: '',
  date: '',
})
const onSubmit = () => {
  console.log('submit!')
}


// table
const handleClick = () => {
  console.log('click')
}
const tableData = [{
  date: '2016-05-03',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Home',
},
{
  date: '2016-05-02',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Office',
},
{
  date: '2016-05-04',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Home',
},
{
  date: '2016-05-01',
  name: 'Tom',
  state: 'California',
  city: 'Los Angeles',
  address: 'No. 189, Grove St, Los Angeles',
  zip: 'CA 90036',
  tag: 'Office',
},
]

// table page
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
const currentPage4 = ref(4)
const pageSize4 = ref(100)

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}

// add edit dialog
const addOrEditDialogFlag = ref(false)
let addOrEditDialogData = reactive({})
const addDialog = () => {
  addOrEditDialogFlag.value = true
}
const addOrEditDialogClose = () => {
  console.log(1);
  addOrEditDialogFlag.value = false
}

</script>


<style scoped >
.box-card {
  width: 100%;
  height: calc(100vh - 120px);
  margin: 10px;
}
.box-card-form {
  height: 50px;
}
.box-card-form :deep(.el-card__body) {
  padding: 0 10px !important;
  line-height: 62px;
}
.box-card-table {
  margin-top: 10px;
}
.box-card-table :deep(.el-card__body) {
  height: calc(100vh - 250px);
}
</style>
