new Vue({
    el: "#app",
    data: {
        goals: [],
        enteredVal: "",
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredVal);
        },
    },
});
