<template>
  <div class="container" ref="container">
    <div class="select-box" :class="{ 'selected': selectedValue === 'year' }" @click="toggleYearDropdown"
          tabindex="0" @blur="closeDropdown">
          Year: {{ selectedYear }}
          <div v-if="showYearDropdown" class="dropdown">
              <div @click="selectYear(year)" v-for="year in years" :key="year">{{ year }}</div>
          </div>
    </div>

    <div class="select-box" :class="{ 'selected': selectedValue === 'month' }" @click="toggleMonthDropdown"
        tabindex="0" @blur="closeDropdown">
        Month: {{ selectedMonth }}
        <div v-if="showMonthDropdown" class="dropdown">
            <div @click="selectMonth(month)" v-for="month in months" :key="month">{{ month }}</div>
        </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const years = [2002, 2003, 2004];
const months = Array.from({ length: 12 }, (_, index) => index + 1);
const showYearDropdown = ref(false);
const showMonthDropdown = ref(false);
const selectedYear = ref(years[0]);
const selectedMonth = ref(months[0]);
const selectedValue = ref(null);
const container = ref(null);

const toggleYearDropdown = () => {
  console.log(showYearDropdown.value );
  showYearDropdown.value = !showYearDropdown.value;
  showMonthDropdown.value = false;
  selectedValue.value = 'year';
};

const toggleMonthDropdown = () => {
  showMonthDropdown.value = !showMonthDropdown.value;
  showYearDropdown.value = false;
  selectedValue.value = 'month';
};

const selectYear = (year) => {
  selectedYear.value = year;
  showYearDropdown.value = false;
  selectedValue.value = 'year';
};

const selectMonth = (month) => {
  selectedMonth.value = month;
  showMonthDropdown.value = false;
  selectedValue.value = 'month';
};

onMounted(() => {
  container.value = document.querySelector('.container');
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});

const handleClickOutside = (event) => {
  if (container.value && !container.value.contains(event.target)) {
      if (!document.querySelector('.selected')) {
          selectedValue.value = null;
      }
      showYearDropdown.value = false;
      showMonthDropdown.value = false;
  }
};

const closeDropdown = () => {
  if (!document.querySelector('.selected')) {
      selectedValue.value = null;
  }
};
</script>


<style scoped>
.container {
  display: flex;
}

.select-box {
  position: relative;
  padding: 10px;
  margin-right: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
}

.dropdown {
  position: absolute;
  width: 100%; 
  top: calc(100% + 1px);
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  color:black;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 999; 
}

.selected {
  color: green;
}

.dropdown div:hover {
  background-color: #f1f1f1;
}
</style>

