<template>
  <v-app id="inspire">
    
    <v-navigation-drawer
      v-model="drawer"
      app
    >
        <v-list-item
          v-for="(item, i) in items"
          :key="i" :to="item.link" link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
     
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>All About Cats</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<!-- signup page -->
<script>
import SignUp from './components/views/SignUp.vue'
export default {
  name: 'App',
  components:{
    SignUp
  }
}
</script>

<script>
  export default {
    data: () => ({ 
      drawer: null,
       items: [
        { text: "Title", icon: "mdi-home", link: "/" },
        { text: "Add Cat", icon: "mdi-note-plus", link: "/add-post" },
        { text: "About", icon: "mdi-help-box", link: "/about" },
      ], 
      }),
  }
</script>

