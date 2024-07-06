<template>
    <td>
        <slot :name="column.key" :column="column" :item="item" :row="row"> {{ item }} </slot>
    </td>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({ column: { type: Object }, row: { type: Object } });

const item = computed(() => {
    const key = props.column.key;
    return props.row[key];
});
</script>

<style></style>
