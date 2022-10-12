<script setup>
// import sourceData from "@/data.json";
// const destinations = sourceData.destinations;

import { ref } from "vue";
let allDestination = ref();

const destinations = () => {
    fetch("http://localhost:3000/destinations")
        .then((response) => response.json())
        .then((data) => (allDestination.value = data));
};
destinations();
</script>

<template>
    <div id="nav">
        <router-link id="Logo" to="/"> Travel App </router-link>
        <router-link v-for="destination in allDestination" :key="destination.id" :to="{ name: 'destination.show', params: { id: destination.id, slug: destination.slug } }">
            {{ destination.name }}
        </router-link>
    </div>
</template>
