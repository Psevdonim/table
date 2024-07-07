<template>
    <td>
        <component :is="column?.component ?? 'p'" :row="row" :column="column" :item="item" @click="action">
            {{ row[column?.key] }}
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
