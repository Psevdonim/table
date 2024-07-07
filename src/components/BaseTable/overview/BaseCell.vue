<template>
    <td>
        <component :is="currentCell?.component" v-bind="currentCell?.bind" @click="action">
            {{ currentCell.text }}
        </component>
    </td>
</template>

<script setup>
import { computed, inject } from 'vue';
defineOptions({ name: 'BaseCell' });

const props = defineProps({ column: { type: Object }, row: { type: Object, default: () => ({}) } });
const item = computed(() => {
    const { column, row } = props;
    return row?.[column?.key] ?? {};
});
const actions = inject('actions');

const currentCell = computed(() => {
    const { column, row } = props;
    const text = row[column?.key];

    let component = { component: 'p', text };

    if (column?.component) {
        component = {
            component: column.component,
            bind: {
                column,
                row,
                text
            }
        };
    }
    return component;
});
const action = () => {
    const { column, row } = props;
    if (actions[column?.action]) {
        actions[column?.action](row);
    } else {
        actions.actionItem({ item, column, row });
    }
};
</script>

<style></style>
