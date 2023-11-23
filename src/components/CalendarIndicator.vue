<template>
  <div class="calendar__indicator">
    <div class="indicator__items">
      <the-button @click="getPreviousDate">
        <fa-icons :icon="'arrow-left'" class="arrow" />
      </the-button>
      <b class="indicator__date">{{ selectDate }} </b>
      <the-button @click="getNextDate">
        <fa-icons :icon="'arrow-right'" class="arrow" />
      </the-button>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
import TheButton from "./UI/TheButton.vue";
export default {
  components: {
    TheButton,
  },
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
  color: #fff;
}
</style>
