<template>
  <v-container>
    <v-alert border="left" close-text="Close Alret" color="green accent-4" dark dismissible v-if="this.$route.params.message">
    {{this.$route.params.message}}
    </v-alert>
    <v-form ref="form" class="pa-5" @submit.prevent="submitForm" enctype="multipart/form-data">
      <v-text-field label="Search" v-model="search" prepend-icon="mdi-account-search" :rules="rules">
      </v-text-field>
      <v-btn type="submit" class="mt-3" color="primary">Search</v-btn>
    </v-form>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <v-card class="pa-1" :to="{ name: 'post' , params: {id: post._id} }">
          <v-img height="250" :src="`/${post.image}`"></v-img> 
          <v-btn class="ml-4 mt-2" small outlined color="indigo">
            {{ post.category }} 
            </v-btn> 
            <v-btn class="ml-4 mt-2" small outlined color="green">
            available
            </v-btn> 
            <!-- <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.gender }} 
            </v-btn> -->
            <v-card-title class="headline">
              Name: {{ post.name }} 
            </v-card-title> 
            <v-card-text class="py-0">
              <p>{{ post.content.substring(0, 100) + "..." }}</p> 
            </v-card-text> 
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from "../api";
  export default {
    name: "home",
    data() {
      return {
        rules: [(value) => !!value || "This field is required"],
        posts: [],
        search: "",
      };
    },
    async created() {
      this.posts = await API.getAllPost();
    },
     methods: {
        async submitForm() {
            const formData = new FormData();
            formData.append('search', this.search);
            if (this.$refs.form.validate()) {
              this.posts = await API.search(this.search);
                // if (this.$route.path !== "/") {
                //     this.$router.push("/");
                // }
            }
        },
    },
  };
</script>
