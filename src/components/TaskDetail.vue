<template>
    <div class="detail-content">
        <h2>{{emoji}} {{title}}</h2>
        <v-calendar @dayclick="dayClicked" class="custom-calendar max-w-full" :days="days" disable-page-swipe is-expanded></v-calendar>
        <v-calendar @dayclick="dayClicked" class="custom-calendar max-w-full" :attributes="attributes" disable-page-swipe is-expanded></v-calendar>
    </div>
</template>

<script>
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();

export default {
    name: 'TaskDetail',
    props : {
        title : {
            type : String,
            required : true
        },
        emoji : {
            type : String,
            required : true
        },
        days: { type: Array, default: () => [] }
    },
    data() {
        return {
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
        };
    },
    methods: {
        dayClicked(day) {
            console.log(this.attributes);
            // console.log(this.days);
            // console.log(JSON.parse(this.days)[0]);

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
    },
    components: {
        
    }
}
</script>