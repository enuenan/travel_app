<script setup>
import { ref } from "vue";
// import sourceData from "@/data.json";
// const destinations = ref(sourceData.destinations);

let allDestination = ref();
const destinations = () => {
    fetch("http://localhost:3000/destinations")
        .then((response) => response.json())
        .then((data) => (allDestination.value = data));
};

destinations();
</script>

<template>
    <div class="home">
        <h1>All Destinations</h1>
        <div class="destinations">
            <router-link v-for="destination in allDestination" :key="destination.id" :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
                <h2>{{ destination.name }}</h2>
                <img :src="`/images/${destination.image}`" :alt="destination.name" />
            </router-link>
        </div>
    </div>
</template>
