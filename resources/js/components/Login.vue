<template>
    <section class="section-padding section-bg">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12">
                    <h3 class="mb-4 pb-2">Login</h3>
                </div>

                <div class="col-lg-12 col-12">
                    <form @submit.prevent="login" class="login-form custom-form contact-form">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12"> 
                                <div class="form-floating">
                                    <input type="text" name="email" id="email" v-model="email" class="form-control" placeholder="Email address">
                                    <label for="floatingInput">Email</label>
                                </div>
                                <span v-if="errors.email" class="error text-danger">{{ errors.email }}</span>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-floating">
                                    <input type="password" name="password" id="password" v-model="password" class="form-control" placeholder="Password">
                                    <label for="floatingInput">Password</label>
                                </div>
                                <span v-if="errors.password" class="error text-danger">{{ errors.password }}</span>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-lg-4 col-12 pt-2">
                                <button type="submit" class="btn btn-md btn-primary">Login</button>
                                <span v-if="errorMessage" class="error text-danger">{{ errorMessage }}</span>
                            </div>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </section>
  </template>
  
  <script>
    import axios from 'axios';
    axios.defaults.headers.common['X-CSRF-TOKEN'] = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    
    export default {
        data() {
            return {
                email: '',
                password: '',
                errors: {},
                errorMessage: ''
            };
        },
        methods: {
            async login() {
                try {
                    const response = await axios.post('api/auth/login', {
                        email: this.email,
                        password: this.password
                    });
                    
                    localStorage.setItem('authToken', response.data.token);
                    console.log('Login successful:', response.data);

                    // Clear fields after successful login
                    this.email = '';
                    this.password = '';
                    alert('Login successful');
                    const self = this;
                    self.$router.push("/products");

                } catch (error) {
                    console.error('Login failed:', error.response.data);
                    var data = error.response.data;
                    if (data.errors) {
                        this.errors = {};
                        for (let field in data.errors) {
                            this.errors[field] = data.errors[field][0];
                        }
                    } else {
                        this.errors = '';
                        this.errorMessage = data.message;
                    }
                }
            }
        }
    };
  </script>