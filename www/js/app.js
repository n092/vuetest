// Init F7 Vue Plugin
Vue.use(Framework7Vue, Framework7);

// Init App
new Vue({
  el: '#app',
  // Init Framework7 by passing parameters here

  framework7: {
    root: '#app', // App root element
    id: 'io.framework7.testapp', // App bundle ID
    name: 'VUE TEST', // App name
    theme: 'auto', // Automatic theme detection
    // App routes
    routes: [
      {
        path: '/about/',
        url: './pages/about.html'
      },
      {
        path: '/list/',
        url: './pages/list.html'
      }
    ],
  },
  data: {
    message: 'HDRezka!',
    simpleText: 'More Video. Here is your blank Framework7 app. Let\'s see what we have here.'
  }
});
