<template>
    <tbody>
        <BaseRow v-for="row in items" :key="row.id" :columns="columns" :row="row">
            <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
                <slot :name="slot" v-bind="scope || {}" />
            </template>
        </BaseRow>
    </tbody>
</template>

<script setup>
defineProps({ items: { type: Array }, columns: { type: Array } });
</script>

<style></style>
