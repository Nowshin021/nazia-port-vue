import { createApp } from 'vue'
import App from './App.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {faGithub,faLinkedin,faFacebook,faTwitter} from "@fortawesome/free-brands-svg-icons";

library.add(fas,faGithub,faLinkedin,faFacebook,faTwitter);


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-vue/dist/bootstrap-vue.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle";



