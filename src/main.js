import { createApp } from "vue";
import Calendar from "./Calendar.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight, faArrowLeft);

createApp(Calendar).component("fa-icons", FontAwesomeIcon).mount("#app");
