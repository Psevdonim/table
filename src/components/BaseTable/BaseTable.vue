<template>
    <h1>Base Table</h1>
    <table v-if="modelValue.length">
        <thead>
            <tr>
                <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
            </tr>
        </thead>
        <tbody>
            <BaseRow v-for="row in currentItems" :key="row.id" :columns="columns" :row="row" @actionItem="actionItem" />
        </tbody>
    </table>
    <p v-else>No data</p>
</template>

<script setup>
import { computed, provide } from 'vue';
import BaseRow from './overview/BaseRow.vue';
import { useActionsTable } from '@/composables';

const props = defineProps({
    modelValue: { type: Array },
    columns: { type: Array },
    useActions: { type: Function, default: useActionsTable }
});
const emit = defineEmits(['update:modelValue']);

const items = computed({
    get: () => {
        return props.modelValue;
    },
    set: (value) => {
        emit('update:modelValue', value);
    }
});

const { deleteItem, currentItems } = props.useActions(items);

const actionItem = (data) => {
    emit(data.column.action ?? 'clickRow', data);
};

provide('actions', { currentItems, deleteItem, actionItem });
</script>

<style></style>
