<template>
  <div>
    <the-calendar />
  </div>
</template>

<script>
import TheCalendar from "./components/TheCalendar.vue";

export default {
  components: { TheCalendar },
};
</script>

<style>
body {
  font-family: "IBM Plex Sans", sans-serif;
  box-sizing: border-box;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
button {
  border: none;
  padding: 0;
}
input {
  border: none;
  padding: 0;
}
input[type="text"] {
  padding-left: 10px;
}
</style>
