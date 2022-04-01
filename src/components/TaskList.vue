<template>
    <div>
        <ul class="task-list">
            <li class="task-item" v-for="task in tasks" :key="task.id" :id="task.id">
                <div class="info" v-on:click="viewDetail(task.id, $event)">
                    <div class="emoji">{{task.emoji}}</div>
                    <div class="title">{{task.title}}</div>
                </div>
                <div class="icon">
                    <div class="delete" v-on:click="deleteItem(task.id)">삭제</div>
                </div>
            </li>
        </ul>
        <task-form :title="title" :emoji="emoji" @titleFromChild="addTask" class="add-input"/>
        <TaskDetail :title="title" :emoji="emoji" :id="id" :days="this.days" />
    </div>
</template>

<script>
import TaskForm from '@/components/TaskForm.vue'
import TaskDetail from '@/components/TaskDetail.vue'

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();

export default {
    data() {
        return {
            tasks : [
                { 
                    id: 0, 
                    title: '아침 루틴 지키기', 
                    emoji: '📅',
                    days: [
                        {
                            key: 8,
                            highlight: true,
                            dates: new Date(year, month, 8),
                        },
                    ],
                },
                { 
                    id: 1, 
                    title: '일기 쓰기', 
                    emoji: '📝',
                    days: [
                        {
                            key: 1,
                            highlight: true,
                            dates: new Date(year, month, 1),
                        },
                    ],
                },
                { 
                    id: 2, 
                    title: '책 읽기', 
                    emoji: '📚',
                    days: [
                        {
                            key: 4,
                            highlight: true,
                            dates: new Date(year, month, 4),
                        },
                    ],
                },
            ],
            emoji: '',
            title: '',
            id: '',
            days: [
                {
                    key: 12,
                    highlight: true,
                    dates: new Date(year, month, 12),
                },
                {
                    key: 13,
                    highlight: true,
                    dates: new Date(year, month, 13),
                },
                {
                    key: 14,
                    highlight: true,
                    dates: new Date(year, month, 14),
                },
            ],
        };
    },
    methods: {
        deleteItem: function(id) {
            var num;

            for(var i in this.tasks) {
                if(this.tasks[i].id == id) {
                    num = i;
                    // break;
                    this.tasks.splice(num, 1);
                } 
            }
        },
        addTask(title,emoji,id) {
            this.title = title;
            this.emoji = emoji;
            this.id = id;
            console.log('test', id);
            this.tasks.push ({
                title: title,
                emoji: emoji,
                id: id,
            })
        },
        viewDetail(id) {
            console.log(id);
            // var detail_content = document.getElementsByClassName('detail-content');
            // console.log(detail_content);
            // detail_content.classList.remove('display');
            this.title = this.tasks[id].title;
            this.emoji = this.tasks[id].emoji;
            console.log(this.tasks[id].title);
            // console.log(JSON.stringify(this.tasks[id].days));
            // console.log(JSON.parse(JSON.stringify(this.tasks[id].days))[0]);
            // this.$router.push('/detail/'+item_id)
        }
    },
    components: {
        TaskForm,
        TaskDetail
    }
}
</script>