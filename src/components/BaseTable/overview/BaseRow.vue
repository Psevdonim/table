<template>
    <tr>
        <BaseCell :column="column" :row="row" v-for="column in columns" :key="column.key" />
    </tr>
</template>

<script setup>
import BaseCell from './BaseCell.vue';

defineProps({ columns: { type: Array }, row: { type: Object } });
</script>

<style></style>
