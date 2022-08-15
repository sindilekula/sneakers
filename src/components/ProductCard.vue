<template>
  <router-link
    :to="{ name: 'SingleCardView', params: { id: item.id } }"
    class="link"
  >
    <div class="card shadow mb-3">
      <img :src="item.image" class="car-img mb-2" alt="Picture of item" />
      <h5 class="text-black">{{ item.name }}</h5>
      <p class="text-secondary">
        {{ item.catergory }}
      </p>
      <p>R{{ item.price }}</p>
      <h5 class="text-black mb-3">{{ item.category }}</h5>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["item"],
};
</script>