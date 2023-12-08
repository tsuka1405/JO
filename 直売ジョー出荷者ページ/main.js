var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js and Bootstrap 5!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
})

