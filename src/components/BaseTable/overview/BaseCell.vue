<template>
    <td>
        <slot>
            {{ row[column.key] }}
        </slot>
    </td>
</template>

<script setup>
defineProps({ column: { type: Object }, row: { type: Object, default: () => ({}) } });
</script>

<style></style>
