<template>
  <div class="AddForm">
    <h2>{{ title }}</h2>
    <input
      half
      id="title"
      name="title"
      type="text"
      v-model="todo.name"
      placeholder="Going to do"
    />
    <input
      third
      id="total"
      name="total"
      type="text"
      v-model="todo.total"
      oninput="this.value=this.value.replace(/[^0-9]/g,'');"
      placeholder="Total amount"
    />
    <input
      type="button"
      id="add"
      name="addButton"
      value="ADD"
      onclick="addData($(this))"
    />
  </div>
</template>
<script>
export default {
  name: 'AddForm',
  props: {
    type: Number
  },
  data () {
    return {}
  }
}
</script>
<style scpoed>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
form {
  margin: 10px;
  padding: 20px 10px 0px 40px;
  width: 70%;
  max-width: 700px;
  border-radius: 20px;
  border: 2px solid #d09b52;
}

input[type="text"] {
  width: calc(100% - 30px);
  margin-bottom: 30px;
  border: 2px solid #868283;
}

input[type="text"][half] {
  width: calc(50% - 30px);
  margin-right: 30px;
  float: left;
}

input[type="text"][third] {
  width: calc(33% - 15px);
  margin-right: 15px;
  float: left;
}

input[type="text"][quarter] {
  width: calc(25% - 10px);
  margin-right: 10px;
  float: left;
}

input[type="text"]:placeholder-shown {
  border: 2px solid #eae4da;
}

input[type="text"]::placeholder {
  color: #a3a5aa;
}

input:focus {
  outline: 0;
}
</style>
