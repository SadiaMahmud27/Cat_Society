<template>
  <v-container>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in [
    {
        _id: '62fd1892384f250f69cce9cd',
        title: 'Kyo baby',
        category: 'cat',
        image: 'image_1660754066778_274255065_386134406263711_5114014713869541228_n.jpg',
        created: '2022-08-17T16:34:26.785Z'
    }
]" :key="post._id">
        <v-card class="pa-1">
          <v-img height="250" :src="`/${post.image}`"></v-img> 
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.category }} 
            </v-btn> 
            <v-card-title class="headline">
              {{ post.title }} 
            </v-card-title> 
            <!-- <v-card-text class="py-0">
              <p>{{ post.content.substring(0, 100) + "..." }}</p> 
            </v-card-text>  -->
          </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import API from "../api";
  export default {
    name: "Home",
    data() {
      return {
        posts: [],
      };
    },
    async created() {
      await API.getAllPost().then(response => console.log(response));
      console.log(this.posts[0])
    },
  };
</script>
