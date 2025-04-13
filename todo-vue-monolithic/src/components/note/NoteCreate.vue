<!-- Use for Vue Provide, Inject API Only (issues when do, finish, cancel note)
import { useGlobalStore } from '../../composables';

const { actions } = useGlobalStore();
const value = ref('');
const priority = ref('Medium');
const valueRef = ref(null);

const onAddNote = async () => {
    actions.addNote({ id: nanoid(), value: value.value, priority: priority.value, status: 'Todo', createdAt: Date.now() });
    value.value = '';
    priority.value = 'Medium';
    valueRef.value.focus();
}

onMounted(() => {
    console.log('Render Note Create');
    valueRef.value.focus();
});
-->

<script setup>
import { nanoid } from 'nanoid';
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import { noteActionsType } from '../../store/modules';

const store = useStore();
const value = ref('');
const priority = ref('Medium');
const valueRef = ref(null);

const onAddNote = async () => {
    store.dispatch(noteActionsType.ADD_NOTE, { id: nanoid(), value: value.value, priority: priority.value, status: 'Todo', createdAt: Date.now() });
    value.value = '';
    priority.value = 'Medium';
    valueRef.value.focus();
}

onMounted(() => {
    console.log('Render Note Create');
    valueRef.value.focus();
});
</script>

<template>
    <div>
        <br />
        <strong>Create Note:</strong> <br />
        <input type="text" v-model="value" ref="valueRef" />
        <select v-model="priority">
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Low">Low</option>
        </select>
        <input type="button" value="Add" @click="onAddNote" />
        <br />
    </div>
</template>
