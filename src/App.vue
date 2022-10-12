<script setup>
import Navigation from "@/components/Navigation.vue";
</script>

<template>
    <Navigation></Navigation>
    <div class="container">
        <router-view :key="$route.path" />
    </div>
</template>
