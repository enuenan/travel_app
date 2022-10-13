<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
    id: { type: Number, required: true },
    experienceSlug: { type: String, required: true },
});

const id = props.id;
const experience = ref({});
const route = useRoute();
console.log("route => ", route.params.experienceSlug);

const getExperience = async (desId) => {
    const res = await axios.get(`http://localhost:3000/destinations/${desId}`);
    experience.value = res.data.experiences.find((result) => props.experienceSlug == result.slug);
};

onMounted(() => {
    getExperience(id);
});

watch(
    () => route.params.experienceSlug,
    async () => {
        getExperience(route.params.id);
    }
);
</script>

<template>
    <section v-if="experience">
        <h1>{{ experience.name }}</h1>
        <img :src="`/images/${experience.image}`" :alt="experience.name" v-if="experience.image" />
        <p>{{ experience.description }}</p>
    </section>
</template>
