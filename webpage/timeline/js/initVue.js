/**
 * Created by 10446 on 2017/7/13.
 */

var vue = new Vue({

    el:'.timeline-content',
    data:{
        timenow:'1950',
        items: [
            {time: '1900'},
            {time: '1910'},
            {time: '1920'},
            {time: '1949'},
            {time: '1969'},
            {time: '1970'},
            {time: '1971'},
            {time: '1978'},
            {time: '1999'},
            {time: '2000'},
            {time: '2003'},
            {time: '2005'},
            {time: '2008'},
            {time: '2012'},
            {time: '2015'},
            {time: '2016'},
            {time: '2017'},

        ]
    },
    methods: {
        timeClick: function (time) {
            this.timenow=time;


        }
        }
});
