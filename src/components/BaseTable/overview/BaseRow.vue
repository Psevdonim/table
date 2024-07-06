<template>
    <tr>
        <BaseCell :column="column" :row="row" v-for="column in columns" :key="column.key" />
        <BaseCell><slot name="deleteButton"></slot></BaseCell>
        <!--<BaseCell><DeleteButton :item="row" @deleteItem="deleteItem" /></BaseCell>-->
    </tr>
</template>

<script setup>
//import DeleteButton from '@/components/DeleteButton';
//import { inject } from 'vue';
import BaseCell from './BaseCell.vue';

defineProps({ columns: { type: Array }, row: { type: Object } });
defineEmits(['deleteItem']);

//const deleteItem = inject('deleteItem');
</script>

<style></style>
