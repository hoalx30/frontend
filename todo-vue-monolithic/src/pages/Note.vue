<script setup>
import { NoteCreate, NoteList, NoteSearch } from '../components/note';
</script>

<template>
    <div>
        <NoteCreate />
        <NoteSearch />
        <NoteList />
        <router-link to="/about">About</router-link>
    </div>
</template>
