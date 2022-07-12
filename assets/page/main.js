const base_url='https://api.jurnal.id/partner/core/api/v1/'

const routes = [
  //front
  {
    name: 'home',
    path: '/',
    component: httpVueLoader('assets/page/home.vue'),
    
    name: 'login',
    path: '/login',
    component: httpVueLoader('assets/page/login.vue'),
    
    name: 'katalog',
    path: '/katalog',
    component: httpVueLoader('assets/page/katalog.vue'),
  }
  
  
]

const router = new VueRouter({
    routes // short for `routes: routes`
  })



var v = new Vue({
    router,
    el: '#app',
    vuetify: new Vuetify(),
    data: {
        title:"belajar vue",
        cards: ['Today', 'Yesterday'],
      drawer: false,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
        items: [
          {
            color: '#1F7087',
            src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
            title: 'Supermodel',
            artist: 'Foster the People',
          },
          {
            color: '#952175',
            src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            title: 'Halcyon Days',
            artist: 'Ellie Goulding',
          },
          {
            color: '#952175',
            src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            title: 'Halcyon Days',
            artist: 'Ellie Goulding',
          },
          {
            color: '#952175',
            src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
            title: 'Halcyon Days',
            artist: 'Ellie Goulding',
          },
        ],
        
    },
    created() {

    },
    computed: {
        hal_login(){
          return this.$route.meta.login
        },
        config_axios(){
          var config = {
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('jwt')
            }
          }
          return config
          
        }

    },
    methods: {
      logout(){
        localStorage.clear()
        this.$router.push('/')
      },
      
    }
})

