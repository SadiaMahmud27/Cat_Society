<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                <h1 class="text-center">Sign Up to Adopt A Cat Today</h1>
                <v-form ref="form" @submit.prevent="submitForm" role="form"  class="pa-5" enctype="multipart/form-data">
                    <v-text-field label="Name" v-model="user.name" prepend-icon="mdi-note" :rules="rules">
                        </v-text-field>
                        <v-text-field label="Email:" v-model="user.email" prepend-icon="mdi-view-list"
                            :rules="view - list">
                        </v-text-field>
                        <v-text-field label="Password:" v-model="user.password" prepend-icon="mdi-view-list"
                            :rules="view - list">
                        </v-text-field>
                        <v-text-field label="Address:" v-model="user.address" prepend-icon="mdi-view-list"
                            :rules="view - list">
                        </v-text-field>   
                        <v-text-field label="Phone:" v-model="user.phone" prepend-icon="mdi-view-list"
                            :rules="view - list">
                        </v-text-field> 
                        <v-text-field label="NID:" v-model="user.nid" prepend-icon="mdi-view-list"
                            :rules="view - list">
                        </v-text-field> 
                        <v-btn type="submit" class="mt-3" color="primary">Signup</v-btn>
                </v-form>
            </div>
        </div>
    </div>
</template>

<script>
import API from "../api";
export default {
    name: 'signup',
    data() {
        return {
            rules: [(value) => !!value || "This field is required"],
            user: {
                email: "",
                password: "",
                name: "",
                address: "",
                phone:"",
                nid: "",
            },
        };
    },
    methods: {
        async submitForm() {
            if (this.$refs.form.validate()) {
                console.log(this.user.email);
                console.log(this.user.name);
                console.log(this.user.password);
                console.log(this.user.address);
                const response = await API.signup(`${this.user.email}/${this.user.password}/${this.user.name}/${this.user.address}/${this.user.phone}/${this.user.nid}`);
                if (this.$route.path !== "/") {
                    this.$router.push("/");
                }
            }
        },
    },
};
</script>
