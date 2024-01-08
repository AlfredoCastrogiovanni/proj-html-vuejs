import { createApp } from 'vue'
import App from '../App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import { faRulerCombined } from '@fortawesome/free-solid-svg-icons'
import { faLifeRing } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'




/* add icons to the library */
library.add(faTwitter, faFacebookF, faInstagram, faLinkedinIn, faAngleDown, faClock, faRulerCombined, faLifeRing, faBook, faCartShopping)

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
