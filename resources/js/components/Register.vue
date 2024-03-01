<template>
    <!-- <div class="container">
      <h2>Register</h2>
      <form @submit.prevent="register" class="register-form">
        <div class="form-group">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="name" class="form-control">
          <span v-if="errors.name" class="error text-danger">{{ errors.name }}</span>
        </div>
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="email" class="form-control">
          <span v-if="errors.email" class="error text-danger">{{ errors.email }}</span>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control">
          <span v-if="errors.password" class="error text-danger">{{ errors.password }}</span>
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
    </div> -->


    <section class="section-padding section-bg">
        <div class="container">
            <div class="row">

                <div class="col-lg-12 col-12">
                    <h3 class="mb-4 pb-2">Register</h3>
                </div>

                <div class="col-lg-12 col-12">
                   <form @submit.prevent="register" class="register-form custom-form contact-form">

                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12"> 
                                <div class="form-floating">
                                    <input type="text" name="name" id="name" v-model="name" class="form-control" placeholder="Name">
                                    <label for="floatingInput">Name</label>
                                </div>
                                <span v-if="errors.email" class="error text-danger">{{ errors.email }}</span>
                            </div>
                        </div>

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
                                    <input type="text" name="password" id="password" v-model="password" class="form-control" placeholder="Password">
                                    <label for="floatingInput">Password</label>
                                </div>
                                <span v-if="errors.password" class="error text-danger">{{ errors.password }}</span>
                            </div>
                        </div>
                        
                        <div class="row">
                            <div class="col-lg-4 col-12 pt-2">
                                <button type="submit" class="btn btn-md btn-primary">Register</button>
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
                name        :   '',
                email       :   '',
                password    :   '',
                errors      :   {}
            };
        },
        methods: {
            async register() {
                try {
                    const response = await axios.post('api/auth/register', {
                        name        :   this.name,
                        email       :   this.email,
                        password    :   this.password
                    });
                    
                    console.log('Register successful:', response.data);
                    
                    // Clear fields after successful register
                    this.name       =   '';
                    this.email      =   '';
                    this.password   =   '';
                    this.errors     =   '';
                    alert('Register successful');
                } catch (error) {
                    console.error('Registration failed:', error.response.data);
                    var data = error.response.data;
                    if (data.errors) {
                        this.errors = {};
                        for (let field in data.errors) {
                            this.errors[field] = data.errors[field][0];
                        }
                    }

                }
            }
        }
    }
</script>


