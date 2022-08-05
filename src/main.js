import { createApp } from "vue";
import App from "./App.vue";
import "./styles/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

library.add(faTrashCan, faPenToSquare);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
