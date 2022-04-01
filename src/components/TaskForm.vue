<template>
    <div>
        <!-- <input type="text" v-model="form.title" placeholder="습관을 추가해보세요">
        <button v-on:click="createTask">추가</button> -->
        <form>
            <select name="" v-model="form.emoji" id="task-emoji">
                <option v-for="emoji in emojiList" :key="emoji" :value="emoji" v-bind:selected="emoji == form.emoji ? 'selected' : false">{{emoji}}</option>
            </select>
            <input type="text" v-model="form.title" placeholder="습관을 추가해보세요" id="task-title">
            <button type="button" @click = "createTask">추가</button>
        </form>
    </div>
</template>

<script>
import emojiList from '@/assets/emoji.json'

export default{ 
    name: 'TaskForm',
    props : {
        title : {
            type : String,
            required : true
        },
        emoji : {
            type : String,
            required : true
        }
    },
    data() {
        return {
            form: {
                emoji: '😀',
                title: '',
            },
            emojiList
        };
    },
    createTask: function() {
        this.$emit('create', this.form);
    },
    methods: {
        createTask() {
            var select = document.getElementById("task-emoji");
            var task_title = document.getElementById('task-title').value;
            var task_emoji = select.options[select.selectedIndex].value;
            var task_id = 1;

            if(document.getElementsByClassName('task-item').length != 0) task_id = Number(document.getElementsByClassName('task-item')[document.getElementsByClassName('task-item').length -1].getAttribute('id')) + 1;

            this.$emit('titleFromChild', task_title, task_emoji, task_id);
        }
    }
}

</script>