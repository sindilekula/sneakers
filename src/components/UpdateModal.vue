<template>
	<button @click="toggleModal"><i class="fa-solid fa-pen ms-2"></i><span class="ms-2">Edit</span></button>
	<div v-if="active" class="mod">
		<form>
			<div>IMAGE</div>
			<input type="text" v-model="product.image" />
			<div>BRAND</div>
			<input type="text" v-model="product.brand" />
			<div>DESCRIPTION</div>
			<input type="text" v-model="product.descriptions" />
			<div>PRICE</div>
			<input type="text" v-model="product.price" />
		</form>
	</div>
</template>
<script>
	export default {
		props: ["product"],
		data() {
			return {
				active: false,
			};
		},
		methods: {
			toggleModal() {
				this.active = !this.active;
			},
		},
		mounted() {
			console.log(this.product);
		},
	};
</script>