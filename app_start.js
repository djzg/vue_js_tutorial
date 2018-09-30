
// making a new instance of vue.js
new Vue({
  // designating which id element will be connected to this instance
  el: "#vue-app",
  data: {
    name: "Ivanko",
    job: "Expert"
  },
  methods: {
    greet: function(time){
      return "Good " + time + " " + this.name;
    }
  }

});
// another  example of vue instance
new Vue({
  // designating which id element will be connected to this instance
  el: "#vue-app-2",
  data: {
    name: "Aurelius",
    job: "Beginner"
  },
  methods: {
    greet: function(time){
      return "Bad " + time + " " + this.name;
    }
  }

});
