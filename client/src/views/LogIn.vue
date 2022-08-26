<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-lg-7 mx-auto d-flex justify-content-center flex-column">
                <h1 class="text-center">Welcome to Cat Society</h1>
                <form @submit.prevent="loginUser()" role="form" id="contact-form" method="post" autocomplete="off">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                            </div>
                        </div>
                        <div class="mb-4">
                            <div class="input-group input-group-dynamic">
                                <label class="form-label">Email Address:</label>
                                <input type="email" class="form-control">
                            </div>
                        </div>
                        <v-divider></v-divider>
                        <div class="input-group input-group-static">
                            <label>Password:</label>
                            <input type="password" class="form-control">
                        </div>
                    </div>
                    <v-divider></v-divider>
                    <v-btn type="submit" class="mt-3" color="success">Login</v-btn>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import API from "../api";
export default {
    name: 'login',
    data() {
        return {
            rules: [(value) => !!value || "This field is required"],
            user: {
                email: "",
                password: "",
            },
        };
    },
    methods: {
        async submitForm() {
            if (this.$refs.form.validate()) {
                console.log(this.user.email);
                console.log(this.user.password);
                const response = await API.login(`${this.user.email}/${this.user.password}`);
                if (this.$route.path !== "/") {
                    this.$router.push("/");
                }
            }
        },
    },
};
</script>