<template>
	<div class="admin">
        <td><CreateModal :product="product" /></td>
		<table>
			<thead>
				<tr>
					<th scope="col"></th>
					<th scope="col">Brand</th>
					<th scope="col">Description</th>
					<th scope="col">Price</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product of products" :key="product.id">
					<td scope="row"><img v-bind:src="product.image" alt="" /></td>
					<td>{{ product.brand }}</td>
					<td>{{ product.descriptions }}</td>
					<td>{{ product.price }}</td>
					<td><button @click="deleteProduct(product.product_id)"><i class="fa-solid fa-trash"></i><span class="ms-2">Delete</span></button><UpdateModal :product="product" /></td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
<script>
	import UpdateModal from "../components/UpdateModal.vue";
    import CreateModal from "../components/CreateModal.vue"
	export default {
		components: {
			UpdateModal,
            CreateModal,
		},

		mounted() {
			this.$store.dispatch("getProducts");
		},
		computed: {
			products() {
				return this.$store.state.products;
			},
		},
		methods: {
			deleteProduct(id) {
				return this.$store.dispatch("deleteProduct", id);
			},
              createProduct() {
      this.$store.dispatch("createProduct", {
 		name: this.name,
		price: this.price,
		descriptions: this.descriptions,
        image: this.image,
		brand: this.brand,
      });
      
    },
		},
	};
</script>

<style>
.admin {
    margin: 20px;
    padding: 10px;
    color: white;
}
table {
    width: 100%;
    padding: 15px;
}

td {
    border: solid 1px white;
}
img {
    width: 150px;
    height: 150px;
}

@media screen and (max-width: 800px) {
  img {
    width: 100px;
  }
  .admin {
    padding: 0;
    margin: 0;
  }
}

@media screen and (max-width: 300px) {
    .admin {
        display: flex;
        flex-direction: column;
    }

    .table {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: fit-content;
    }
}
</style>