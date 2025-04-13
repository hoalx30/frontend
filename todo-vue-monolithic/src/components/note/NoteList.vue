<!-- Use for Vue Provide, Inject API Only (issues when do, finish, cancel note)
import { useGlobalStore } from '../../composables';
const { state } = useGlobalStore();

const notes = computed(() => state.isSearching ? state.latestSearchNote : state.latestNote);
-->

<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import NoteItem from './NoteItem.vue';

const store = useStore()
const notes = computed(() => store.getters.isSearching ? store.getters.latestSearchNote : store.getters.latestNote);

onMounted(() => {
    console.log('Render Note List');
});
</script>

<template>
    <div>
        <br />
        <strong>Note List: </strong>
        <p v-if="!notes">No data available</p>
        <table v-else>
            <thead>
                <tr>
                    <th style="text-align: end">ID</th>
                    <th style="text-align: end">Value</th>
                    <th style="text-align: end">Status</th>
                    <th style="text-align: end">Priority</th>
                    <th style="text-align: end">Created At</th>
                    <th style="text-align: end">Actions</th>
                </tr>
            </thead>
            <tbody>
                <NoteItem v-for="note in notes" :key="note.id" :data="note" />
            </tbody>
        </table>
    </div>
</template>
