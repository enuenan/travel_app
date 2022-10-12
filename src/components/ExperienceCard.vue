<script setup>
const props = defineProps({
    experience: {
        type: Object,
        required: true,
    },
});
console.log(props);
</script>

<template>
    <div class="card">
        <img :src="`/images/${experience.image}`" :alt="experience.name" srcset="" />
        <span class="card__text">
            {{ experience.name }}
        </span>
    </div>
</template>
