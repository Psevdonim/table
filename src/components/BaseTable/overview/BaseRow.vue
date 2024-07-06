<template>
    <tr>
        <template v-for="column in columns" :key="column.key">
            <BaseCell :column="column" :row="row">
                <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
                    <slot :name="slot" v-bind="scope || {}" />
                </template>
            </BaseCell>
        </template>
    </tr>
</template>

<script setup>
import BaseCell from './BaseCell.vue';
defineProps({ columns: { type: Array }, row: { type: Object } });
defineEmits(['deleteItem']);
</script>

<style></style>
