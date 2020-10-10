const app = new Vue({
  el: "#app",
  data: {
    title: "Todo List With Vue",
    activity: "",
    activities: [],
  },
  methods: {
    addActivity() {
      this.activities.push({
        name: this.activity,
        state: false,
      });
      this.activity = "";
    },
    editTask(index) {
      this.activities[index].state = true;
    },
    deleteTask(index) {
      this.activities.splice(index, 1);
    },
  },
});
