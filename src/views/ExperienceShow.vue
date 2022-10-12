<script setup>
const props = defineProps({
    id: { type: Number, required: true },
    experienceSlug: { type: String, required: true },
});
const id = props.id;
const destination = ref();
const response = (id) => {
    fetch(`http://localhost:3000/destinations/${id}`)
        .then((response) => response.json())
        .then((data) => (destination.value = data));
};
response(id);
console.log(destination);
</script>

<template>
    <section>
        <h1>{{ experience.name }}</h1>
        <img src="`/images/${experience.image}`" :alt="experience.name" srcset="" />
        <p>{{ experience.description }}</p>
    </section>
</template>
