<template>
    <BaseTable v-model="items" :columns="columns" />
</template>

<script setup>
import { onMounted, shallowRef } from 'vue';
import { columns, fields } from './constants';
import { serializeCells } from './methods';

import BaseTable from './components/BaseTable';

const items = shallowRef([]);

const getItems = async () => {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 2000);
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users', { controller: controller });
        const data = await res.json();
        items.value = serializeCells(data, fields.users);
    } catch (error) {
        console.log(error);
        items.value = [];
    }
};

onMounted(() => {
    getItems();
});
</script>
