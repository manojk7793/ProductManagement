<template>
    <section class="section-padding section-bg">
        <div class="container">
            <div class="row">
                <div class="col-12 mb-2 text-end">
                    <button @click="createProduct()" class="btn btn-primary">Create</button>
                </div>
                <div class="col-12">
                    <div class="">
                        <h4>Products</h4>
                    </div>
                    <table class="table table-striped" id="productsTable">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <!-- Table body will be populated dynamically -->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import $ from 'jquery';

export default {
    name: "products",
    data() {
        return {
            productsTable: null
        }
    },
    mounted() {
        window.addEventListener('click', this.handleButtonClick);
        this.initializeDataTable();
        this.getProducts();
    },
    beforeDestroy() {
        window.removeEventListener('click', this.handleButtonClick);
    },
    methods: {
        async getProducts() {
            axios.get('/api/products').then(response => {
                this.populateDataTable(response.data);
            }).catch(error => {
                console.log(error);
            });
        },
        createProduct() {
            this.$router.push({ name: 'ProductCreate' });
        },
        editProduct(productId) {
            this.$router.push({ name: 'ProductEdit', params: { id: productId } });
        },
        deleteProduct(id) {
            if (confirm("Are you sure to delete this product ?")) {
                axios.delete(`/api/products/${id}`).then(response => {
                    this.getProducts();
                }).catch(error => {
                    console.log(error);
                });
            }
        },
        initializeDataTable() {
            this.productsTable = $('#productsTable').DataTable();
        },
        populateDataTable(products) {
            this.productsTable.clear().draw();
            products.forEach(product => {
                this.productsTable.row.add([
                    product.id,
                    product.name,
                    product.description,
                    product.price,
                    `<button data-action="edit" data-id="${product.id}" class="btn btn-sm btn-warning">Edit</button>
                     <button data-action="delete" data-id="${product.id}" class="btn btn-sm btn-danger">Delete</button>`
                ]).draw();
            });
        },
        handleButtonClick(event) {
            console.log('Button clicked:', event.target);
            const target = event.target;
            if (target.dataset.action === 'edit') {
                this.editProduct(parseInt(target.dataset.id));
            } else if (target.dataset.action === 'delete') {
                this.deleteProduct(parseInt(target.dataset.id));
            }
        }
    }
}
</script>
