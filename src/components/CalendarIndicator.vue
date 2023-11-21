<template>
  <div class="calendar__indicator">
    <div class="indicator__items">
      <fa-icons @click="getPreviousDate" :icon="'arrow-left'" class="arrow" />
      <b class="indicator__date">{{ selectDate }} </b>
      <fa-icons @click="getNextDate" :icon="'arrow-right'" class="arrow" />
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    selectedDate: {
      type: Object,
      required: true,
    },
  },
  computed: {
    selectDate() {
      return this.selectedDate.format("MMMM YYYY");
    },
  },
  methods: {
    getPreviousDate() {
      let newDate = dayjs(this.selectedDate).subtract(1, "month");
      this.$emit("selectDate", newDate);
    },
    getNextDate() {
      let newDate = dayjs(this.selectedDate).add(1, "month");
      this.$emit("selectDate", newDate);
    },
  },
};
</script>

<style>
.indicator__date {
  text-align: center;
  display: inline-block;
  width: 130px;
  padding: 0 25px;
}
.indicator__items {
  margin-bottom: 25px;
}
.arrow {
  cursor: pointer;
}
</style>
