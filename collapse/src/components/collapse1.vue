<template>
    <div class="container">
      <label @click="toggleDropdown" tabindex="0" @blur="closeDropdown">{{ years[0] }}</label>
      <div v-if="showDropdown" class="dropdown">
        <div @click="selectYear(year)" v-for="year in years" :key="year">{{ year }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const years = ref([2002, 2003, 2004]);
  const showDropdown = ref(false);
  
  const toggleDropdown = () => {
    showDropdown.value = !showDropdown.value;
  };
  const closeDropdown = () => {
    showDropdown.value = false;
  };
  const selectYear = (year) => {
    // 更新 label 内容为选中的年份
    years.value[0] = year;
    showDropdown.value = false; // 点击选项后立即关闭下拉框
  };
  </script>
  
  <style scoped>
  .container {
    display: inline-block;
  }
  
  .label {
    cursor: pointer;
  }
  
  .dropdown {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 100px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  .dropdown div {
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    cursor: pointer;
  }
  
  .dropdown div:hover {
    background-color: #f1f1f1;
  }
  </style>
  