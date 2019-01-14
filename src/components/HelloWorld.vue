<template>
    <div class="hello">
      <nav ref="nav"> <!-- :class="{violet: scrollPosition > 60, blue: scrollPosition > 1932}" -->
        <a href="#hero" @click="this.violetHeading">Top</a>
        <a href="#skills" @click="blueHeading">Skills</a>
        <a href="#background" @click="greenHeading">Background</a>
        <a href="#who" @click="orangeHeading">Who am I?</a>
        <a href="#contact" @click="this.redHeading">Contact</a>
      </nav>
      <div id="hero" ref="hero">
        <div class="fullscreen-bg">
          <video loop muted autoplay poster="../assets/video/teaframe.png" class="fullscreen-bg__video">
            <!--  <source src="video/big_buck_bunny.webm" type="video/webm"> -->
              <source src="../assets/video/Steaming_Tea_Cup.mp4" type="video/mp4">
            <!--  <source src="video/big_buck_bunny.ogv" type="video/ogg"> -->
          </video>
        </div>
        <div class="shading"></div>
        <div class="name-title">
          <h1>Andrea Mogren</h1>
          <p>Front end developer</p>
        </div>
      </div>
      <h1 class="violet">Hi there!</h1>
      <div class="gif">
        <iframe src="https://giphy.com/embed/dBgUdHwD9kEQU" width="480" height="853" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dBgUdHwD9kEQU"></a></p>
      </div>
      <p>I'm Andrea, a front-end developer (aspsiring to become fullstack) and Hyper Island graduate. How nice of you to stop by! This portfolio is built in Vue.js, and I am working on constantly developing it and adding new things.</p>
      <h1 id="skills" ref="skills" class="blue">My skills</h1>
      <p>Vue.js, HTML, CSS, JavaScript, Less, CMS, Git, Terminal, MongoDB, Node, Chrome dev tools </p>
      <p>  beginner
        elementary
        intermediate
        advanced
        expert</p>
      <h1 id ="background" ref="background" class="green">Background</h1>
      <h3>Currently</h3>
      <strong><p>2018 - </p></strong>
      <p>I work as a front and developer, aspiring to become full stack, at <a href="https://www.comprend.com/" target="_blank" rel="noopener noreferrer">Comprend</a>. I work mostly with creating websites for clients
      in our own CMS called <a href="https://www.comprend.com/blog/2018/website-as-a-service-what-is-that/" target="_blank" rel="noopener noreferrer">WaaS</a>. For some clients, I am their contact person and as well as their developer. I participate in meetings where I take in their
      requests and give advice/time estimates from a technical standpoint. I also started working with the application for the CMS itself recently. </p>
      <p>Apart from working with development, I'm also interested in group dynamics and what makes a group work well together.
        I hold regularly hold team building exercises so that my team not only talk about what we do together, but also how we should do it.</p>
      <h3>Previously</h3>
      <strong><p>2016 - 2018</p></strong>
      <p>In 2018, I graduated from Hyper Island where I studied the Digital Data Strategist program. This is where I learned basic HTML, CSS, JavaScript and also how to use optimization tools such as
         Google analytics and HotJar, about Search Engine Marketing, for example AdWords and how to properly use SEO, and lastly how to present yourself and your work.
         Everything I have and will learn comes with a data perspective, and how you can use data to your advantage.
         I’ve also learned a lot about group dynamics and how to create more effective teams.</p>
      <p>While studying, I did my internship at Comprend, learning a lot about front end development but also about back end.</p>

      <strong><p>2012 - 2016</p></strong>
      <p>Before coming to Hyper, I worked as a freelance journalist at Oh My! and OP communication,
        where I've written many articles and interviewed a bunch of people. I also have a bachelor's
        degree in English linguistics from the Professional Language program at Stockholm University,
        where I studied English and Swedish linguistics with a focus on business communication.</p>
      <h1 id ="who" ref="who" class="orange">Who am I?</h1>
      <p>As a person, I am happy, organized, calm and I love all sorts of games (pc, video, board game, you name it).
      I also love dogs, creating things (everything from web sites to scarfs), languages and tea. Especially green tea.</p>
      <h3>Me in GIFs:</h3>
      <div class="gif">
        <iframe src="https://giphy.com/embed/dBgUdHwD9kEQU" width="480" height="853" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/dBgUdHwD9kEQU"></a></p>
      </div>
      <div class="gif">
        <iframe src="https://giphy.com/embed/13mLwGra9bNEKQ" width="480" height="304"></iframe>
      </div>
      <div class="gif">
        <iframe src="https://giphy.com/embed/26tn33aiTi1jkl6H6" width="480" height="269" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/screen-monitor-closeup-26tn33aiTi1jkl6H6"></a></p>
      </div>
      <div class="gif">
        <iframe src="https://giphy.com/embed/49B5kpre24clW" width="480" height="576" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/49B5kpre24clW"</a></p>
      </div>
      <h1 id="contact" ref="contact" class="red">Contact</h1>
      <p>Feel free to contact me in any of the following ways!</p>
      <p>Mobile: <a href="tel:+4672542032">072 542 20 32</a></p>
      <p>Email: <a href="mailto:mogrenandrea@gmail.com">mogrenandrea@gmail.com</a></p>
      <div class="logo">
        <a href="https://www.linkedin.com/in/andrea-mogren-146053a5"><img src="../assets/images/linkedin.png" alt="LinkedIn Logo"/></a>
        <a href="https://github.com/andreamogren"><img src="../assets/images/Octocat.png" alt="GitHub Logo"/></a>
      </div>
      <footer>
        <p>Andrea Mogren 2019.</p>
        <p>All GIFs used belong to <a href="https://giphy.com/" target="_blank" rel="noopener noreferrer">Giphy</a></p>
      </footer>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      /*now: {},
      start: {},*/
      scrollPosition: null,
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
    /* https://stackoverflow.com/questions/41095814/vuejs-how-to-dynamically-change-a-css-class-after-a-scroll-position :D */
    updateScroll(){
      this.scrollPosition = window.scrollY;
      console.log(this.scrollPosition);

      if (this.scrollPosition < 60) {
        this.$refs.nav.style.backgroundColor = "#8B00FF";
      } else if (this.scrollPosition > 1932 && this.scrollPosition < 2140) {
        this.$refs.nav.style.backgroundColor = "#0000FF";
      } else if (this.scrollPosition > 2140 && this.scrollPosition < 3116) {
        this.$refs.nav.style.backgroundColor = "#00FF00";
      } else if (this.scrollPosition > 3116 && this.scrollPosition < 5410) {
        this.$refs.nav.style.backgroundColor = "#FF7F00";
      } else if (this.scrollPosition > 5410) {
        this.$refs.nav.style.backgroundColor = "#FF0000";
      }
    },
    /*violetHeading(){
      this.$refs.nav.style.color = "#8B00FF";
    },
    blueHeading (){
      this.$refs.nav.style.color = "#0000FF";
    },
    greenHeading (){
        this.$refs.nav.style.color = "#00FF00";
    },
    orangeHeading (){
        this.$refs.nav.style.color = "#FF7F00";
    },
    redHeading (){
        this.$refs.nav.style.color = "#FF0000";
    },*/
    getScrollPosition() {
      console.log("hero ", this.$refs.hero.offsetTop);
      console.log("skills ", this.$refs.skills.offsetTop);
      console.log("background ",this.$refs.background.offsetTop);
      console.log("who ",this.$refs.who.offsetTop);
      console.log("contact ",this.$refs.contact.offsetTop);
      //this.$refs.contact.style.color = "#000000";
    },
  },
  computed: {
  },
  mounted() {
      //this.getYear();
      window.addEventListener('scroll', this.updateScroll);
      this.getScrollPosition();
  },
};

</script>

<style scoped lang="less">
@import (reference) "../assets/variables.less";

html {
  font-size: 16px;
}

h1, h3, p {
  max-width: 900px;
  margin: 0 auto;
  line-height: 2rem;
}

h1 {
  text-align: center;
  font-family: 'Permanent Marker', cursive;
  font-size: 3rem;
  margin-bottom: 1rem;
  margin-top: 5rem;
}

h3 {
    font-family: 'Poppins', sans-serif;
}

p {
  margin-bottom: 1rem;
}

nav {
  text-align: center;
  position: fixed;
  background-color: @violet;
  width: 100%;
  padding: 2rem;
  top: 0;
  z-index: 2;

  a {
    color: #fff;
    padding: 1rem;
  }
}

footer {
  background-color: @violet;
  text-align: center;
  padding: 4rem 0;
  color: #FFF;
}

#hero {
  //background: linear-gradient(0.25turn, #FEEF56, #FF69B4);
  //background: linear-gradient(0.25turn, @violet, #FF69B4);
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;

  .shading {
    background-color: black;
    opacity: 0.3;
    height: 125vh;
    width: 100vw;
    position: absolute;
    top: 0;

  }

  .name-title {
      color: #FFF;
      padding-left: 2rem;
      position: absolute;
      top: 50%;

      h1, p {
          font-family: 'Poppins', sans-serif;
      }
  }
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

.gif {
  max-width: 480px;
  margin: 0 auto;

  &:nth-of-type(4) {
    margin-top: 0.7rem;
  }
}

.logo {
  //margin: 0 auto;
  width: 14rem;

  img {
    padding: 1rem;
    width: 5rem;
  }
}

/*** Background video CSS ***/

.fullscreen-bg {
    /*position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: -100;*/
}

.fullscreen-bg__video {
    /*position: absolute;
    top: 50%;
    left: 50%;
    width: auto;
    height: auto;
    min-width: 100%;
    min-height: 100%;
	  transform: translate(-50%, -50%);*/
    width: 100vw;
    //height: 100vh;
    border: none;

}

@media (max-width: 767px) {
    .fullscreen-bg {
        background: url('../assets/video/teaframe.png') center center / cover no-repeat;
    }

    .fullscreen-bg__video {
        display: none;
    }
}
</style>
