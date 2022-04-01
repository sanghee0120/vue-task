<template>
    <div class="layout">
        <h1>습관 기록</h1>
        <div class="content-box">
            <TaskList />
        </div>
    </div>
</template>

<script>
import TaskList from './components/TaskList.vue'

export default {
    components: {
        TaskList,
    },
}
</script>