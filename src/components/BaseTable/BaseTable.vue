<template>
    <h1>Base Table</h1>
    <table v-if="items.length">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
                <th v-if="deletable">Delete?</th>
            </tr>
        </thead>
        <tbody>
            <BaseRow v-for="row in items" :key="row.id" :columns="columns" :row="row">
                <template #deleteButton v-if="deletable">
                    <DeleteButton :item="row" @deleteItem="deleteItem" />
                </template>
            </BaseRow>
        </tbody>
    </table>
    <p v-else>No data</p>
</template>

<script setup>
import { provide } from 'vue';
import DeleteButton from '../DeleteButton';
import BaseRow from './overview/BaseRow.vue';

defineProps({ columns: { type: Array }, deletable: { type: Boolean } });

const items = defineModel('items', { type: Array, default: [] });

const deleteItem = (data) => {
    items.value = items.value.filter((item) => item.id !== data.id);
};

provide('deleteItem', deleteItem);
</script>

<style></style>
