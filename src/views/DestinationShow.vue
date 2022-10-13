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
import { ref, watch, onMounted } from "vue";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";

const route = useRoute();
const destination = ref();
const id = route.params.id;

const getDestination = async (desId) => {
    const res = await axios.get(`http://localhost:3000/destinations/${desId}`);
    destination.value = res.data;
};

onMounted(() => {
    getDestination(id);
});

watch(
    () => route.params.id,
    async (newId) => {
        getDestination(newId);
    }
);
</script>

<template>
    <section v-if="destination">
        <h1>{{ destination.name }}</h1>
        <GoBack />
        <div class="destination-details">
            <img :src="`/images/${destination.image}`" :alt="destination.name" />
            <p>{{ destination.description }}</p>
        </div>
    </section>
    <section class="experiences" v-if="destination">
        <h2>Top experiences in {{ destination.name }}</h2>
        <div class="cards">
            <router-link v-for="experience in destination.experiences" :key="experience.slug" :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }">
                <ExperienceCard :experience="experience" />
            </router-link>
        </div>
        <router-view />
    </section>
</template>

<style scoped>
.router-link-active {
    color: red !important;
    font-size: 1.5rem;
    text-decoration: dashed;
}
</style>
