<!-- Use for Vue Provide, Inject API Only (issues when do, finish, cancel note)
import { useGlobalStore } from '../../composables';

const { actions } = useGlobalStore()

const onDoNote = async (id) => actions.doNote(id);
const onFinishNote = async (id) => actions.finishNote(id);
const onCancelNote = async (id) => actions.cancelNote(id);
const onDeleteNote = async (id) => actions.deleteNote(id);
-->

<script setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import { noteActionsType } from '../../store/modules';

const props = defineProps({
    data: Object,
});
const { id, value, status, priority, createdAt } = props.data;



const store = useStore()

const onDoNote = async (id) => store.dispatch(noteActionsType.DO_NOTE, id);
const onFinishNote = async (id) => store.dispatch(noteActionsType.FINISH_NOTE, id);
const onCancelNote = async (id) => store.dispatch(noteActionsType.CANCEL_NOTE, id);
const onDeleteNote = async (id) => store.dispatch(noteActionsType.DELETE_NOTE, id);

onMounted(() => {
    console.log('Render Note Item');
    
});
</script>

<template>
    <tr>
        <td style="width: 20%; text-align: end">{{ id }}</td>
        <td style="width: 10%; text-align: end">{{ value }}</td>
        <td style="width: 10%; text-align: end">{{ status }}</td>
        <td style="width: 10%; text-align: end">{{ priority }}</td>
        <td style="width: 20%; text-align: end">{{ new Date(createdAt).toLocaleString() }}</td>
        <td style="width: 30%; text-align: end">
            <input type="button" value="Do" @click="onDoNote(id)" />
            <input type="button" value="Finish" @click="onFinishNote(id)" />
            <input type="button" value="Cancel" @click="onCancelNote(id)" />
            <input type="button" value="Remove" @click="onDeleteNote(id)" />
        </td>
    </tr>
</template>
