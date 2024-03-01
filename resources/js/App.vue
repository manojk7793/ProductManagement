<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container">
            <a class="navbar-brand" href="/">
                <i class="bi-back"></i>
                <span>Laravel-Vue</span>
            </a>

            <div class="d-lg-none ms-auto me-4">
                <a href="#top" class="navbar-icon bi-person smoothscroll"></a>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-lg-5 me-lg-auto" :key="!isLoggedIn">
                    <li class="nav-item">
                        <a v-if="!isLoggedIn" class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="!isLoggedIn" class="nav-link" href="/register">Register</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="!isLoggedIn" class="nav-link" href="/login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a v-if="isLoggedIn" class="nav-link" href="/products">Products</a>
                    </li>
                </ul>

                <div class="d-none d-lg-block" v-if="isLoggedIn">

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-lg-5 me-lg-auto" :key="!isLoggedIn">
                            <div class="ms-auto"> <!-- Added wrapper for dropdown nav-item -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle navbar-icon bi-person smoothscroll" href="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>

                                    <ul class="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                                        <a href="/profile" class="btn btn-sm btn-link nav-link">Profile</a>
                                        <button v-if="isLoggedIn" class="btn btn-sm btn-link nav-link" @click="logout">Logout</button>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </nav>

    <router-view></router-view>

    <footer class="site-footer section-padding">
        <div class="container">
            <div class="row">

                <div class="col-lg-3 col-12 mb-4 pb-2">
                    <a class="navbar-brand mb-2" href="index.html">
                        <i class="bi-back"></i>
                        <span>Laravel-Vue</span>
                    </a>
                </div>

                <div class="col-lg-3 col-md-4 col-6">
                    <h6 class="site-footer-title mb-3">Resources</h6>

                    <ul class="site-footer-links">
                        <li class="site-footer-link-item">
                            <a href="#" class="site-footer-link">Home</a>
                        </li>

                        <li class="site-footer-link-item">
                            <a href="#" class="site-footer-link">How it works</a>
                        </li>

                        <li class="site-footer-link-item">
                            <a href="#" class="site-footer-link">FAQs</a>
                        </li>

                        <li class="site-footer-link-item">
                            <a href="#" class="site-footer-link">Contact</a>
                        </li>
                    </ul>
                </div>

                <div class="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                    <h6 class="site-footer-title mb-3">Information</h6>

                    <p class="text-white d-flex mb-1">
                        <a href="tel: 305-240-9671" class="site-footer-link">
                            305-240-9671
                        </a>
                    </p>

                    <p class="text-white d-flex">
                        <a href="mailto:info@company.com" class="site-footer-link">
                            info@company.com
                        </a>
                    </p>
                </div>

                <div class="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            English</button>

                        <ul class="dropdown-menu">
                            <li><button class="dropdown-item" type="button">Thai</button></li>

                            <li><button class="dropdown-item" type="button">Myanmar</button></li>

                            <li><button class="dropdown-item" type="button">Arabic</button></li>
                        </ul>
                    </div>

                    <p class="copyright-text mt-lg-5 mt-4">Copyright © 2048 Topic Listing Center. All rights reserved.
                        <br><br>Design: <a rel="nofollow" href="https://templatemo.com" target="_blank">TemplateMo</a>
                    </p>

                </div>

            </div>
        </div>
    </footer>

</template>

<script>

// Import CSS files
import '../assets/css/bootstrap.min.css';
import '../assets/css/bootstrap-icons.css';
import '../assets/css/templatemo-topic-listing.css';


import '../assets/js/jquery.min.js';
import '../assets/js/bootstrap.bundle.min.js';
import '../assets/js/jquery.sticky.js';
import '../assets/js/custom.js';

export default {
    data() {
        return {
            isLoggedIn: localStorage.getItem('isLoggedIn') === 'true' // Retrieve from localStorage
        };
    },
    mounted() {
         // Check if authToken is present in local storage
         if (localStorage.getItem('authToken')) {
            this.isLoggedIn = true;
            localStorage.setItem('isLoggedIn', 'true'); // Update localStorage
        } else {
            this.isLoggedIn = false;
            localStorage.setItem('isLoggedIn', 'false'); // Update localStorage
        }
    },
    methods: {
        logout() {
            localStorage.removeItem('authToken');
            this.isLoggedIn = false;
            localStorage.setItem('isLoggedIn', 'false'); 
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
.navbar-nav .nav-link {
    color: black !important;
}

footer {
  flex-shrink: 0; /* Prevent the footer from shrinking */
}
</style>