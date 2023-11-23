import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
  faCirclePlus,
  faCircleXmark,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowRight, faArrowLeft, faCirclePlus, faCircleXmark, faTrash);

createApp(App).component("fa-icons", FontAwesomeIcon).mount("#app");
