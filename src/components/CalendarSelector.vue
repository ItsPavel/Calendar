<template>
  <div class="calendar__selector">
    <span @click="getCurrentDate"
      >Today: <b>{{ currentDate }}</b></span
    >
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    currentDate: {
      type: String,
      required: true,
    },
  },
  methods: {
    getCurrentDate() {
      let newDate = dayjs(this.currentDate);
      this.$emit("selectDate", newDate);
    },
  },
};
</script>

<style>
.calendar__selector {
  background: #1b1f21;
  padding: 10px 40px;
  border-radius: 12px;
  cursor: pointer;
}
span {
  margin: 20px;
}
</style>
