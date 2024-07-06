<template>
    <thead>
        <tr>
            <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
        </tr>
    </thead>
</template>

<script setup>
defineProps({ columns: { type: Array } });
</script>

<style></style>
