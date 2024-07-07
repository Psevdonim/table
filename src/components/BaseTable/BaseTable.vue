<template>
    <h1>Base Table</h1>
    <table v-if="modelValue.length">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
            </tr>
        </thead>
        <tbody>
            <BaseRow v-for="row in modelValue" :key="row.id" :columns="columns" :row="row" @actionItem="actionItem" />
        </tbody>
    </table>
    <p v-else>No data</p>
</template>

<script setup>
import { computed, provide } from 'vue';
import BaseRow from './overview/BaseRow.vue';

const props = defineProps({ modelValue: { type: Array }, columns: { type: Array } });
const emit = defineEmits(['update:modelValue']);

const currentItems = computed({
    get: () => {
        return props.modelValue;
    },
    set: (value) => {
        emit('update:modelValue', value);
    }
});

const deleteItem = (data) => {
    currentItems.value = currentItems.value.filter((item) => item !== data);
};

const actionItem = (data) => {
    emit(data.column.action ?? 'clickRow', data);
};

provide('actions', { deleteItem, actionItem });
</script>

<style></style>
