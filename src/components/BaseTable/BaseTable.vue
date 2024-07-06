<template>
    <table>
        <BaseHead :columns="columns"></BaseHead>
        <template v-if="items?.length">
            <BaseRow v-for="row in items" :key="row.id" :columns="columns" :row="row">
                <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
                    <slot :name="slot" v-bind="scope || {}" />
                </template>
            </BaseRow>
        </template>
    </table>
</template>

<script setup>
import BaseHead from './overview/BaseHead.vue';
import BaseRow from './overview/BaseRow.vue';

defineProps({ items: { type: Array }, columns: { type: Array } });
</script>

<style></style>
