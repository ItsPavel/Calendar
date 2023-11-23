<template>
  <div class="calendar__task">
    <div class="task__close">
      <the-button @click="close"
        ><fa-icons class="close__icon" :icon="'fa-circle-xmark'"
      /></the-button>
    </div>
    <div class="task__date">{{ getDate }}</div>
    <div class="task__header">
      <input
        v-on:keyup.enter="addTask"
        class="task__input"
        type="text"
        v-model="value"
        placeholder="Add new task"
      />
      <the-button class="task__add" @click="addTask"></the-button>
    </div>
    <ul v-for="(task, i) in getTasks" :key="i" class="task__list">
      <li>{{ i + 1 }}. {{ task }}</li>
      <div class="task__item_btn">
        <the-button @click="deleteTask(i)"
          ><fa-icons :icon="'fa-trash'" class="trash__icon"
        /></the-button>
      </div>
    </ul>
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
    selectedDateForTasks: {
      type: Object,
    },
  },
  data() {
    return {
      value: "",
    };
  },
  methods: {
    addTask() {
      if (this.value) {
        this.$emit("addTask", this.value);
        this.value = "";
      }
    },
    close() {
      this.$emit("close");
    },
    deleteTask(i) {
      this.$emit("deleteTask", i);
    },
  },
  computed: {
    getTasks() {
      return this.selectedDateForTasks.tasks;
    },
    getDate() {
      return dayjs(this.selectedDateForTasks.date).format("DD MMMM YYYY");
    },
  },
};
</script>

<style>
.calendar__task {
  margin-top: 20px;
  border-top: 6px double #fff;
}
.task__date {
  display: flex;
  justify-content: center;
}
.task__header {
  display: flex;
  margin-top: 20px;
  justify-content: space-around;
  height: 30px;
}
.task__close {
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
}
.close__icon {
  color: #fff;
  font-size: 20px;
}
.close__icon:hover {
  color: rgb(139, 138, 138);
}
.task__input,
.task__add {
  background: #fff;
  height: 100%;
  border-radius: 6px;
  font-size: 1.2em;
}
.task__input {
  width: 70%;
  padding-right: 10px;
}

.task__add {
  padding: 4px;
  text-align: center;
}
.task__list {
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px;
}
.task__item_btn {
  padding: 5px;
}
.trash__icon {
  color: #fff;
}
</style>
