<template>
  <v-app id="inspire">

    <v-navigation-drawer v-model="drawer" app>
      <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link>
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>

    </v-navigation-drawer>

    <v-app-bar app color="blue" elevation="4" rounded>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Cat Society</v-toolbar-title>
      
    </v-app-bar>

    <v-main>
      <router-view>

      </router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { text: "Gallery of Cats", icon: "mdi-folder-multiple-image", link: "/" },
      { text: "Add Cat", icon: "mdi-plus-box-outline", link: "/add-post" },
      { text: "Adopted Cats", icon: "mdi-format-list-bulleted", link: "/adopt-cat" },
      { text: "LogIn", icon: "mdi-login", link: "/about" },
      { text: "Signup", icon: "mdi-account-plus", link: "/signup" },
    ],
  }),
}
</script>