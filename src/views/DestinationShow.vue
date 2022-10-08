<script setup>
// < --------------- before using fetch data --------------->
// import { ref } from "vue";
// import { useRoute } from "vue-router";
// import sourceData from "@/data.json";

// const destinations = sourceData.destinations;

// const destination = computed(() => {
//     return destinations.find((destination) => destination.id == useRoute().params.id);
// });
// < --------------- before using fetch data --------------->

import { useRoute } from "vue-router";
const response = await fetch(`http://localhost:3000/destinations/${useRoute().params.id}`);
const destination = await response.json();
console.log(destination.name);
</script>

<template>
    <div v-if="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{ destination.description }}</p>
        </div>
    </div>
</template>
