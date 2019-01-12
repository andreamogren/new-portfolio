<template>
  <div>
    <div class="hello">
      <h1 class="red">Hi there!</h1>
      <p>Short intro</p>
      <h1 class="orange">My skills</h1>
      <p>My skills</p>
      <p>Vue.js, HTML, CSS, JavaScript, Less, CMS, Git, Terminal, MongoDB, Node, Chrome dev tools </p>
      <h1 class="yellow">Background</h1>
      <h3>Currently</h3>
      <p>I work as a front and developer, aspiring to become full stack, at <a href="https://www.comprend.com/" target="_blank" rel="noopener noreferrer">Comprend</a>. I work mostly with creating websites for clients
      in our own CMS called <a href="https://www.comprend.com/blog/2018/website-as-a-service-what-is-that/" target="_blank" rel="noopener noreferrer">WaaS</a>. For some clients, I am their contact person and as well as their developer. I participate in meetings where I take in their
      requests and give advice/time estimates from a technical standpoint. I also started working with the application for the CMS itself recently. </p>
      <p>Apart from working with development, I'm also interested in group dynamics and what makes a group work well together.
        I hold regularly hold team building exercises so that my team not only talk about what we do together, but also how we should do it.</p>
      <h3>Previously</h3>
      <p>In 2018, I graduated from Hyper Island where I studied the Digital Data Strategist program. This is where I learned basic HTML, CSS, JavaScript and also how to use optimization tools such as
         Google analytics and HotJar, about Search Engine Marketing, for example AdWords and how to properly use SEO, and lastly how to present yourself and your work.
         Everything I have and will learn comes with a data perspective, and how you can use data to your advantage.
         I’ve also learned a lot about group dynamics and how to create more effective teams.</p>
      <p>While studying, I did my internship at Comprend, learning a lot about front end development but also about back end.</p>
      <p>Before coming to Hyper, I worked as a freelance journalist at Oh My! and OP communication,
        where I've written many articles and interviewed a bunch of people. I also have a bachelor's
        degree in English linguistics from the Professional Language program at Stockholm University,
        where I studied English and Swedish linguistics with a focus on business communication.</p>
      <h1 class="green">Who am I</h1>
      <p>Heckin background</p>
      <p>As a person, I am happy, organized, calm and I love all sorts of games (pc, video, board game, you name it).
      I also love dogs, creating things (everything from web sites to scarfs), languages and reading.</p>
      <h1 class="blue">Contact</h1>
      <p>Mobile: <a href="tel:+4672542032">072 542 20 32</a></p>
      <p>Email:<a href="mailto:mogrenandrea@gmail.com">mogrenandrea@gmail.com</a></p>
      <p>LinkedIn:</p>
      <p>GitHub:</p>
      <h1 class="violet">Henlo</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      /*now: {},
      start: {},*/
    };
  },
  watch: {
  },
  props: {
  },
  methods: {
    getYear() {
      /*this.now = new Date(); //Hur få detta till ett år och få ut ett nummer?
      this.start = new Date(now.getFullYear(), 0, 0);*/
    },
  },
  computed: {
  },
  mounted() {
      this.getYear();
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import (reference) "../assets/variables.less";

html {
  font-size: 16px;
}

  h1 {
    text-align: center;
    font-family: 'Permanent Marker', cursive;
    font-size: 3rem;
  }

  .red {
    color: @red;
  }

  .orange {
    color: @orange;
  }

  .yellow {
    color: @yellow;
  }

  .green {
    color: @green;
  }

  .blue {
    color: @blue;
  }

  .violet {
    color: @violet;
  }

  p {
    max-width: 1000px;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
</style>
