<template>
    <div class="content-box">
        <div v-for="(item, index) in items" v-bind:item="item" v-bind:index="index" v-bind:key="item.id">
            <div v-if="item.item_id == $route.params.id">
                <h2>{{item.title}}</h2>
                <p>시작 날짜 {{item.start_date}}</p>
                <v-calendar @dayclick="dayClicked" class="custom-calendar max-w-full" :attributes="attributes" disable-page-swipe is-expanded></v-calendar>
            </div>
        </div>
    </div>
</template>

<script>
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();

export default {
    data() {
        return {
            selectedDay: null,
            // date: new Date(),
            // today: new Date(year, month, day) * 1,
        // masks: {
        //     weekdays: "WWW"
        // },
            // attributes: [
            //     {
            //         key: 1,
            //         customData: {
            //             title: '타이틀',
            //             status: 'on',
            //         },
            //         dates: new Date(year, month, 1)
            //     },
            //     {
            //         key: 4,
            //         customData: {
            //             title: '타이틀',
            //             status: 'on',
            //         },
            //         dates: new Date(year, month, 4)
            //     },
            // ],
            attributes: [
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
            items: [
                { 
                    title: '스트레칭 하기',
                    start_date: '2022.03.20',
                    item_id: '1'
                },
                { 
                    title: '물 2L 마시기',
                    start_date: '2022.03.18',
                    item_id: '2'
                },
            ],    
        };
    },
    methods: {
        dayClicked(day) {
            var is_hightlight = false;
            var num;

            for(var i in this.attributes) {
                if(this.attributes[i].key == day.day) {
                    is_hightlight = true;
                    num = i;
                    break;
                } else {
                    is_hightlight = false;
                }
            }

            if(is_hightlight == false) {
                this.attributes.push({
                    key: day.day,
                    highlight: true,
                    dates: new Date(year, month, day.day),
                })
            } else {
                this.attributes.splice(num, 1)
            }
        },
    }
};
</script>