<!-- Use for Vue Provide, Inject API Only (issues when do, finish, cancel note)
import { useGlobalStore } from '../../composables';
import { actions } from '../../context/global/reducer';

const { state } = useGlobalStore();

const searchValue = ref('');
const searchPriority = ref(state.priorities.map(v => v.value));
const searchStatus = ref(state.status.map(v => v.value));

const onSearchNote = () => {
    actions.searchNote(searchValue.value, searchPriority.value, searchStatus.value);
}

const onResetNote = () => {
    actions.resetSearchNote();
}
-->

<script setup>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { noteActionsType } from '../../store/modules';

const store = useStore();

const searchValue = ref('');
const searchPriority = ref(store.getters.priorities.map(v => v.value));
const searchStatus = ref(store.getters.status.map(v => v.value));

const onSearchNote = () => {
    store.dispatch(noteActionsType.SEARCH_NOTE, { searchValue: searchValue.value, searchPriority: searchPriority.value, searchStatus: searchStatus.value });
}

const onResetNote = () => {
    store.dispatch(noteActionsType.RESET_SEARCH_NOTE);
}

onMounted(() => {
    console.log('Render Note Search');
});
</script>

<template>
    <br />
    <strong>Search Note: </strong> <br />
    <i>Content: </i> <br />
    <input type="text" v-model="searchValue" /> <br />

    <i>Priorities: </i> <br />
    <input type="checkbox" value="Medium" v-model="searchPriority" /> Medium <br>
    <input type="checkbox" value="High" v-model="searchPriority" /> High <br>
    <input type="checkbox" value="Low" v-model="searchPriority" /> Low <br>

    <i>Status: </i> <br />
    <input type="checkbox" value="Todo" v-model="searchStatus" /> Todo <br>
    <input type="checkbox" value="Doing" v-model="searchStatus" /> Doing <br>
    <input type="checkbox" value="Done" v-model="searchStatus" /> Done <br>
    <input type="checkbox" value="Cancel" v-model="searchStatus" /> Cancel <br>

    <input type="button" value="Search" @click="onSearchNote" />
    <input type="button" value="Reset" @click="onResetNote" />
</template>
