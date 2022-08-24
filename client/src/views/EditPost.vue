<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="mx-auto">
                <v-card class="pa=5">
                    <v-card-title> Edit this post </v-card-title>
                    <v-divider></v-divider>
                    <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                        <v-text-field label="Name" v-model="post.name" prepend-icon="mdi-note"></v-text-field>
                        <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list">
                        </v-text-field>
                        <v-text-field label="Gender" v-model="post.gender" prepend-icon="mdi-view-list" :rules="view - list">
                        </v-text-field>
                        <v-text-field label="Age" v-model="post.age" prepend-icon="mdi-view-list" :rules="view - list"></v-text-field>
                        <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus">
                        </v-textarea>
                        <v-file-input @change="selectFile" show-size counter multiple label="Select Image">
                        </v-file-input>
                        <v-img :src="`/${post.image}`" width="120"></v-img>
                        <v-btn type="submit" class="mt-3" color="success">Update Post</v-btn>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../api";
export default {
    name: 'editpost',
    data() {
        return {
            rules: [(value) => !!value || "This field is required"],
            post: {
                name: "",
                category: "",
                gender: "",
                age: "",
                content: "",
                image: "",
            },
            image: "",
        };
    },
    async created() {
        const response = await API.getPostById(this.$route.params.id);
        this.post = response;
    },
    methods: {
        selectFile(file) {
            this.image = file[0];
        },
        async updateForm() {
            const formData = new FormData();
            formData.append('image', this.image);
            formData.append('name', this.post.name);
            formData.append('category', this.post.category);
            formData.append('content', this.post.content);
            formData.append('old_image', this.post.image);
            if (this.$refs.form.validate()) {
                const response = await API.updatePost(this.$route.params.id, formData);
                this.$router.push({ title: "home", params: { message: response.message } });
            }
        },
    },
};
</script>
