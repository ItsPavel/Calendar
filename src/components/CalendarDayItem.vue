<template>
  <li class="calendar__day" :class="{ current__month: !isCurrentmonth }">
    <span :class="{ today: isToday }">{{ number }}</span>
  </li>
</template>

<script>
import dayjs from "dayjs";
export default {
  props: {
    day: {
      type: String,
      required: true,
    },
    isCurrentmonth: {
      type: Boolean,
      required: true,
    },
    currentDate: {
      type: String,
      required: true,
    },
  },
  computed: {
    number() {
      return dayjs(this.day).format("D");
    },
    isToday() {
      return this.currentDate == dayjs(this.day).format("YYYY-MM-DD");
    },
  },
};
</script>

<style>
.calendar__day {
  border: 2px solid #fff;
  font-size: 20px;
  min-height: 80px;
  margin: 3px;
  color: #fff;
  display: grid;
}
.calendar__day > span {
  width: max-content;
  height: max-content;
  margin: 5px;
}

.current__month {
  color: grey;
  border-color: grey;
  background-color: #3832324f;
}
.today {
  border: 2px solid green;
  border-radius: 50%;
  padding: 2px;
}
</style>
