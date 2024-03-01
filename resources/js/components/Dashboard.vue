<template>
    <section class="section-padding section-bg">
        <div class="container">
            <div class="row">
                <table id="productTable" class="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </section>
</template>
  
<script>
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-bs4';
import 'datatables.net-bs4/css/dataTables.bootstrap4.min.css';

export default {
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios.get('/api/products')
        .then(response => {
          this.initDataTable(response.data.data);
        })
        .catch(error => {
          console.error('Error fetching products: ', error);
        });
    },
    initDataTable(data) {
        const self = this;
        const table = $('#productTable').DataTable({
            ajax: {
                url: '/api/products',
                type: 'GET',
                dataSrc: 'data'
            },
            columns: [
            { data: 'id' },
            { data: 'name' },
            { data: 'description' },
            { data: 'price' },
            { data: null, render: function (data, type, row) {
                return '<button class="btn btn-danger btn-sm delete-btn" data-id="' + row.id + '">Delete</button>';
            }}
            ]
        });

        // Add event listener for delete button click
        $('#productTable').on('click', '.delete-btn', function() {
            const productId = $(this).data('id');
            self.deleteProduct(productId);
        });
    },
    deleteProduct(productId) {
        axios.delete('/api/products/' + productId)
        .then(response => {
            // Refresh the DataTable after deletion
            $('#productTable').DataTable().ajax.reload();
        }).catch(error => {
            console.error('Error deleting product: ', error);
        });
    }
  }
}
</script>
