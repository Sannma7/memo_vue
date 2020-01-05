<template>
  <div class="TodoList">
    <el-row>
      <el-col :span="20">
        <div>
          <h1>Todo List</h1>
        </div>
      </el-col>
      <el-col :span="4">
        <el-button
          circle
          icon="el-icon-plus"
          @click="addFormVisible = true"
        ></el-button>
      </el-col>
    </el-row>
    <el-table :data="todoData" style="width: 100%">
      <el-table-column type="index"></el-table-column>
      <el-table-column prop="title" label="Title" width="360">
      </el-table-column>
      <el-table-column prop="prograss" label="Prograss" width="120">
      </el-table-column>
      <el-table-column prop="amount" label="Amount" width="120">
      </el-table-column>
      <el-table-column prop="note" label="Note">
      </el-table-column>
      <el-table-column label="Option" fixed="right" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >View</el-button
          >
          <el-button type="text" size="small">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="Add a new item"
      :visible.sync="addFormVisible"
      width="60%"
      :before-close="handleClose"
    >
      <span>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-input v-model="title" placeholder="Title"></el-input>
          </el-col>
          <el-col :span="8">
            <el-input v-model="total" placeholder="Amount"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button round>Add</el-button>
          </el-col>
        </el-row>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      total: null,
      addFormVisible: false,
      dialogVisible: false,
      todoData: [
        {
          title: 'Something',
          prograss: '0',
          amount: '10000',
          note: 'Some notes'
        },
        {
          title: 'Something',
          prograss: '0',
          amount: '10000',
          note: 'Some notes'
        },
        {
          title: 'Something',
          prograss: '0',
          amount: '10000',
          note: 'Some notes'
        }
      ]
    }
  }
}
</script>
<style>
.bg-purple-light {
  background: #e5e9f2;
  min-height: 36px;
}
</style>
