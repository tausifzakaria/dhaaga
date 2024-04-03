import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
const app = createApp(App, {
    /* other options */
    // productionTip: false,
})
import "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
const vuetify = createVuetify({
    components,
    directives,
})
app.use(vuetify)
app.use(router)

app.mount('#app')