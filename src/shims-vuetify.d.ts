import 'vuetify/types'

declare module 'vuetify/lib/framework' {
  import Vuetify from 'vuetify'
  export default Vuetify
}

declare module 'vuetify/lib' {
  import 'vuetify/types/lib'
}
