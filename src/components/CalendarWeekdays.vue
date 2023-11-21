<template>
  <div class="calendar__weekdays">
    <ul class="weekdays__row">
      <li class="weekdays__col" v-for="(weekday, i) in WEEKDAYSNAME" :key="i">
        {{ weekday }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      WEEKDAYSNAME: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
    };
  },
};
</script>

<style>
.weekdays__row {
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
}
.weekdays__col {
  position: relative;
}
.weekdays__col::after {
  margin-top: 5px;
  content: "";
  position: absolute;
  height: 2px;
  background: grey;
  width: 30%;
  top: 100%;
  right: 35%;
}
</style>
