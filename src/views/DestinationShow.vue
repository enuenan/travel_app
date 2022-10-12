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
import { ref, watch } from "vue";
import ExperienceCard from "@/components/ExperienceCard.vue";

const route = useRoute();
const destination = ref();
const id = route.params.id;

const response = (id) => {
    fetch(`http://localhost:3000/destinations/${id}`)
        .then((response) => response.json())
        .then((data) => (destination.value = data));
};
response(id);
watch(
    () => route.params.id
    // async (newId) => {
    //     response(newId);
    // }
);
</script>

<template>
    <section v-if="destination">
        <h1>{{ destination.name }}</h1>
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <section class="experiences" v-if="destination">
        <h2>Top experiences in {{ destination.name }}</h2>
        <div class="cards">
            <ExperienceCard v-for="experience in destination.experiences" :key="experience.slug" :experience="experience" />
        </div>
    </section>
</template>
