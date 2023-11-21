<template>
  <div class="calendar">
    <header class="calendar__header">
      <calendar-indicator :selectedDate="date" @selectDate="setSelectedDate" />
      <calendar-selector :currentDate="today" @selectDate="setSelectedDate" />
    </header>
    <main class="calendar__main">
      <calendar-weekdays />
      <ul class="calendar__month">
        <calendar-day-item
          v-for="(day, i) in days"
          :key="i"
          :day="day.date"
          :isCurrentmonth="day.isCurrentmonth"
          :currentDate="today"
        />
      </ul>
    </main>
  </div>
</template>

<script>
import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
dayjs.extend(weekday);

import CalendarIndicator from "./components/CalendarIndicator.vue";
import CalendarSelector from "./components/CalendarSelector.vue";
import CalendarWeekdays from "./components/CalendarWeekdays.vue";
import CalendarDayItem from "./components/CalendarDayItem.vue";

export default {
  components: {
    CalendarIndicator,
    CalendarSelector,
    CalendarWeekdays,
    CalendarDayItem,
  },
  data() {
    return {
      date: dayjs(),
    };
  },

  methods: {
    setSelectedDate(newDate) {
      this.date = newDate;
      this.days = [];
    },
    getFirstWeeekDay(date) {
      return Number(dayjs(date).weekday());
    },
  },
  computed: {
    days() {
      return [
        ...this.getPreviousCalendarDays,
        ...this.getCurrentMounthDays,
        ...this.getNextCalendarDays,
      ];
    },

    today() {
      return dayjs().format("YYYY-MM-DD");
    },
    month() {
      return this.date.format("M");
    },
    year() {
      return this.date.format("YYYY");
    },
    getDaysOfMonth() {
      return dayjs(this.date).daysInMonth();
    },

    getCurrentMounthDays() {
      return [...Array(this.getDaysOfMonth)].map((day, i) => {
        return {
          date: dayjs(`${this.year}-${this.month}-${i + 1}`).format(
            "YYYY-MM-DD"
          ),
          isCurrentmonth: true,
        };
      });
    },
    getCurrentDate() {
      return dayjs(`${this.year}-${this.month}-01`);
    },
    getPreviousCalendarDays() {
      const firstDayOfTheMonthWeekday = this.getFirstWeeekDay(
        this.getCurrentMounthDays[0].date
      );
      const numberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday
        ? firstDayOfTheMonthWeekday - 1
        : 6;
      const previousMount = this.getCurrentDate.subtract(1, "month");
      const lastDaysOfPreviousMonth = dayjs(this.getCurrentMounthDays[0].date)
        .subtract(numberOfDaysFromPreviousMonth, "day")
        .date();
      return [...Array(numberOfDaysFromPreviousMonth)].map((day, i) => {
        return {
          date: dayjs(
            `${previousMount.year()}-${previousMount.month() + 1}-${
              lastDaysOfPreviousMonth + i
            }`
          ).format("YYYY-MM-DD"),
          isCurrentmonth: false,
        };
      });
    },
    getNextCalendarDays() {
      const lastDayOfTheMonthWeekday = this.getFirstWeeekDay(
        `${this.year}-${this.month}-${this.getCurrentMounthDays.length}`
      );
      const nextMonth = dayjs(this.getCurrentDate).add(1, "month");
      const numberOfDaysFromNextMonth = lastDayOfTheMonthWeekday
        ? 7 - lastDayOfTheMonthWeekday
        : lastDayOfTheMonthWeekday;
      if (lastDayOfTheMonthWeekday) {
        return [...Array(numberOfDaysFromNextMonth)].map((day, i) => {
          return {
            date: dayjs(
              `${nextMonth.year()}-${nextMonth.month() + 1}-${i + 1}`
            ).format("YYYY-MM-DD"),
            isCurrentmonth: false,
          };
        });
      } else {
        return [];
      }
    },
  },
};
</script>

<style>
body {
  font-family: "IBM Plex Sans", sans-serif;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.calendar {
  position: relative;
  background: #1d252c;
  color: #fff;
  border-radius: 20px;
  padding: 20px;
  margin: 80px auto;
  max-width: 1000px;
  box-shadow: 7px 7px 22px 8px rgba(14, 24, 31, 0.76);
}
.calendar__header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.calendar__month {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
}
</style>
