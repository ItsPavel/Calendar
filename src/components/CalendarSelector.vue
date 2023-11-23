<template>
  <the-button @click="getCurrentDate">
    <div class="calendar__selector">
      <span
        >Today: <b>{{ currentDate }}</b></span
      >
    </div>
  </the-button>
</template>

<script>
import TheButton from "./UI/TheButton.vue";
import dayjs from "dayjs";
export default {
  components: {
    TheButton,
  },
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
  color: #fff;
}
span {
  margin: 20px;
}
</style>
