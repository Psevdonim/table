<template>
    <BaseTable :items="items" :columns="columns">
        <template #address="{ item }"> {{ item.city }} -- {{ item.street }} -- {{ item.suite }} </template>
        <template #company="{ item }"> {{ item.name }} </template>
        <template #deleteButton="{ row }">
            <DeleteButton :item="row" @deleteItem="deleteItem" />
        </template>
    </BaseTable>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { columns } from './constants/columns';
import BaseTable from './components/BaseTable';
import DeleteButton from './components/DeleteButton';

const items = ref([]);

const getItems = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    items.value = data;
};

const deleteItem = (data) => {
    items.value = items.value.filter((item) => item.id !== data.id);
};

onMounted(() => {
    getItems();
});
</script>
