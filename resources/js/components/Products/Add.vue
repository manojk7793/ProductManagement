<template>
    <section class="section-padding section-bg">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="card">
                        <div class="card-header">
                            <h4>Add Product</h4>
                        </div>
                        <div class="card-body">
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
                                        <button type="submit" class="btn btn-primary">Save</button>
                                    </div>
                                </div>                        
                            </form>
                        </div>
                    </div>
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