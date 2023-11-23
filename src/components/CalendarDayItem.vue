<template>
  <li class="calendar__day" :class="{ current__month: !isCurrentmonth }">
    <span :class="{ today: isToday }">{{ number }}</span>
    <div class="tasks_length" v-show="thereAreTasks">
      <span>tasks:</span>
      <span class="length">{{ lengthTask }}</span>
    </div>
    <the-button
      v-show="isCurrentmonth"
      class="calendar__day_button"
      @click="openTaskBlock"
    >
      <fa-icons :icon="'circle-plus'" class="button_icon"
    /></the-button>
  </li>
</template>

<script>
import dayjs from "dayjs";
import TheButton from "./UI/TheButton.vue";
export default {
  components: {
    TheButton,
  },
  props: {
    lengthTask: {
      type: Number,
      default: 0,
    },
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
    isOpen: {
      type: Boolean,
    },
  },
  computed: {
    number() {
      return dayjs(this.day).format("D");
    },
    isToday() {
      return this.currentDate == dayjs(this.day).format("YYYY-MM-DD");
    },
    thereAreTasks() {
      return this.lengthTask !== 0;
    },
  },
  methods: {
    openTaskBlock() {
      this.$emit("openTaskBlock");
    },
  },
};
</script>

<style>
.calendar__day {
  position: relative;
  border: 2px solid #fff;
  font-size: 20px;
  min-height: 80px;
  margin: 3px;
  color: #fff;
  display: grid;
  align-content: space-between;
}
.calendar__day > span {
  width: max-content;
  height: max-content;
  margin: 5px;
}
.tasks_length {
  font-size: 14px;
}
.length {
  color: green;
}
.current__month {
  color: grey;
  border-color: grey;
  background-color: #3832324f;
}
.today {
  border: 2px solid rgb(123, 123, 250);
  border-radius: 50%;
  padding: 2px;
}
.calendar__day_button {
  background: rgba(255, 255, 255, 0.308);
}
.button_icon {
  color: #fff;
  font-size: 16px;
}
</style>
