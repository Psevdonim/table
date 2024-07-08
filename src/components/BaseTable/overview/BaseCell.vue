<template>
    <td>
        <component :is="currentCell?.component" v-bind="currentCell?.bind" @click="action">
            {{ currentCell.cell }}
        </component>
    </td>
</template>

<script setup>
import { serializeComponent } from '@/methods';
import { computed, inject } from 'vue';
defineOptions({ name: 'BaseCell' });

const props = defineProps({
    column: {
        type: Object,
        default: () => ({})
    },
    row: {
        type: Object,
        default: () => ({})
    }
});

const actions = inject('actions');

const currentCell = computed(() => {
    const { column, row } = props;
    const text = row[column?.key];
    const bindProps = { column, row, cell: text };
    const defaultComponent = { component: 'p', cell: text };

    return serializeComponent(defaultComponent, bindProps, column?.component);
});
const action = () => {
    const { column, row } = props;
    if (actions[column.action]) {
        actions[column.action]?.call(null, row);
    } else {
        actions.actionItem({ column, row });
    }
};
</script>

<style></style>
