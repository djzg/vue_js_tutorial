
// making a new instance of vue.js
new Vue({
  // designating which id element will be connected to this instance
  el: "#vue-app",
  data: {
    name: "Ivanko",
    job: "Expert",
    website: "http://www.reddit.com",
    websiteTag:"<a href='http://www.google.com'> The google </a>"
  },
  methods: {
    greet: function(time){
      return "Good " + time + " " + this.name;
    }
  }

});

new Vue({
  el: "#vue-app-events",
  data: {
    age: 12,
    x: 0,
    y: 0
  },
  methods: {
    add: function(inc){
      this.age+= inc;
    },
    subtract: function(dec){
      this.age-= dec;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event. offsetY;
    },
    click: function(click){
      console.log("You clicked me");
    }
  }
});

new Vue ({
  el: "#vue-keyboard-events",
  data: {

  },
  methods: {
    logName: function(){
      console.log("You entered your name");
    },
    logAge: function(){
      console.log("You entered your age");
    },
    logOccupation: function(){
      console.log("You entered your occupation");
    },
    logHobby: function(){
      console.log("You entered your hobby");
    }
  }
});
new Vue ({
  el: "#vue-2-way-data-binding",
  data: {
    name: "",
    age: ""

  },
  methods: {
    logName: function(){

    },
    logAge: function(){

    }
  }
});

new Vue ({
  el: "#vue-computed-properties",
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  methods: {
    /*
    addToA: function(){
      return this.a + this.age;
    },
    addToB: function(){
      return this.b + this.age;
    }*/
  },
  computed: {
    addToA: function(){
      return this.a + this.age;
    },
    addToB: function(){
      return this.b + this.age;
    }
  }
});

new Vue ({
  el: "#vue-dynamic-css",
  data: {
    available: false,
    nearby: false
  },
  methods: {

  },
  computed: {
    compClasses: function(){
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})
