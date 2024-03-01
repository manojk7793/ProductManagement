<template>
    <section class="section-padding section-bg">
        <header class="site-header d-flex flex-column justify-content-center align-items-center">
            <div class="container">
                <div class="row align-items-center">

                    <div class="col-lg-5 col-12">
                        <h2 class="text-white">Add Product</h2>
                    </div>

                </div>
            </div>
        </header>

        <div class="container mt-5">
            <div class="row">
                <div class="col-12">
                    
                        
                            <form @submit.prevent="create">
                                <div class="row">
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="text" class="form-control" v-model="product.name">
                                        </div>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label>Description</label>
                                            <input type="text" class="form-control" v-model="product.description">
                                        </div>
                                    </div>
                                    <div class="col-12 mb-2">
                                        <div class="form-group">
                                            <label>Price</label>
                                            <input type="text" class="form-control" v-model="product.price">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <button type="submit" class="btn btn-primary">Create</button>
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
export default {
    name:"add-product",
    data(){
        return {
            product:{
                name:"",
                description:"",
                price: ""
            }
        }
    },
    methods:{
        async create() {
            try {
                const response = await axios.post('/api/products', this.product);
                const self = this;
                self.$router.push("/products");
            } catch (error) {
                console.error("Error creating product:", error);
            }
        }

    }
}
</script>