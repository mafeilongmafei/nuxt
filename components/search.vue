<template>
  <div class="el-search" ref="el_search">
    <input type="text" @blur="loseFocus" @focus="getFocus" placeholder="请输入楼盘名称进行找房" />
    <div class="input_search">
      <i class="el-icon-search"></i>
      <span>搜索</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  methods: {
    loseFocus() {
      this.$refs.el_search.className = "el-search";
    },
    getFocus() {
      this.$refs.el_search.className = "el-search blue";
    }
  }
};
</script>
<style lang="scss" scoped>
.el-search {
  width: 840px;
  height: 60px;
  border-radius: 30px;
  border: 1px solid #dcdfe6;
  display: flex;
  align-items: center;

  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);

  input {
    width: 78%;
    height: 100%;
    border: none;
    outline: none;
    margin-left: 25px;
    font-size: 16px;
  }
  .input_search {
    width: 15%;
    height: 90%;
    display: inline-block;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #409eff;
    border-radius: 34px;
    margin-left: 30px;
    color: #fff;
    span {
      margin-left: 2px;
    }
    &:hover {
      opacity: 0.5;
    }
  }
}
.blue {
  border-color: #409eff;
}
</style>