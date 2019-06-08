<template>
<div class="hello">
  <div id="navbar" class="bottom">
    <a href="#intro">Intro</a>
    <a href="#skills">Skills</a>
    <a href="#background">Background</a>
    <a href="#who">Who am I?</a>
  </div>

  <div class="landing--container">
    <div class="landing--title">
      <p>Andrea Mogren</p>
      <h1>front end developer.</h1>
      <button class="primary-btn">Read more about me</button>
      <div class="landing--line"></div>
    </div>

  </div>

  <section class="light-section" id="intro">
    <h1>Hi there!</h1>
    <div class="gif">
      <iframe src="https://giphy.com/embed/dBgUdHwD9kEQU" width="240" height="426" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/dBgUdHwD9kEQU"></a></p>
    </div>
    <p>I'm Andrea, a front-end developer (aspsiring to become fullstack) and Hyper Island graduate. How nice of you to stop by! This portfolio is built in Vue.js, and I am working on constantly developing it and adding new things.</p>
  </section>
  <section id="skills" class="dark-section">
    <h1>My skills</h1>
    <h3 class="center-h3">1 - Beginner, 2 - Elementary, 3 - Intermediate, 4 - Advanced, 5 - Expert</h3>
    <canvas id="skills-chart"></canvas>
  </section>
  <section id="background" class="light-section">
    <h1>Background</h1>
    <h3>Currently</h3>
    <strong>
      <p class="no-margin-bottom">2018 - </p>
    </strong>
    <p>I work as a front and developer, aspiring to become full stack, at <a href="https://www.comprend.com/" target="_blank" rel="noopener noreferrer">Comprend</a>. I work mostly with creating websites for clients
      in our own CMS called <a href="https://www.comprend.com/blog/2018/website-as-a-service-what-is-that/" target="_blank" rel="noopener noreferrer">WaaS</a>. For some clients, I am their contact person and as well as their developer. I participate
      in meetings where I take in their
      requests and give advice/time estimates from a technical standpoint. I also started working with the application for the CMS itself recently. </p>
    <p>Apart from working with development, I'm also interested in group dynamics and what makes a group work well together.
      I hold regularly hold team building exercises so that my team not only talk about what we do together, but also how we should do it.</p>
    <h3>Previously</h3>
    <strong>
      <p class="no-margin-bottom">2016 - 2018</p>
    </strong>
    <p>In 2018, I graduated from Hyper Island where I studied the Digital Data Strategist program. This is where I learned basic HTML, CSS, JavaScript and also how to use optimization tools such as
      Google analytics and HotJar, about Search Engine Marketing, for example AdWords and how to properly use SEO, and lastly how to present yourself and your work.
      Everything I have and will learn comes with a data perspective, and how you can use data to your advantage.
      I’ve also learned a lot about group dynamics and how to create more effective teams.</p>
    <p>While studying, I did my internship at Comprend, learning a lot about front end development but also about back end.</p>

    <strong>
      <p class="no-margin-bottom">2012 - 2016</p>
    </strong>
    <p>Before coming to Hyper, I worked as a freelance journalist at Oh My! and OP communication,
      where I've written many articles and interviewed a bunch of people. I also have a bachelor's
      degree in English linguistics from the Professional Language program at Stockholm University,
      where I studied English and Swedish linguistics with a focus on business communication.</p>
  </section>
  <section id="who" class="dark-section">
    <h1>Who am I?</h1>
    <p>As a person, I am happy, organized, calm and I love all sorts of games (pc, video, board game, you name it). I also love dogs, creating things (everything from web sites to scarfs), languages and tea. Especially green tea. 🍵</p>
    <h3>Me in GIFs:</h3>
    <div class="gif">
      <iframe src="https://giphy.com/embed/dBgUdHwD9kEQU" width="240" height="426" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/dBgUdHwD9kEQU"></a></p>
    </div>
    <div class="gif">
      <iframe src="https://giphy.com/embed/13mLwGra9bNEKQ" width="240" height="152"></iframe>
    </div>
    <div class="gif">
      <iframe src="https://giphy.com/embed/26tn33aiTi1jkl6H6" width="240" height="115" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="http://giphy.com/gifs/screen-monitor-closeup-26tn33aiTi1jkl6H6"></a></p>
    </div>
    <div class="gif">
      <iframe src="https://giphy.com/embed/49B5kpre24clW" width="240" height="288" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="http://giphy.com/gifs/49B5kpre24clW"></a></p>
    </div>
  </section>
  <section class="light-section">
    <h1 id="contact">Contact</h1>
    <p class="txt-center">Feel free to contact me in any of the following ways!</p>
    <div class="logo">
      <a href="mailto:mogrenandrea@gmail.com"><img src="../assets/images/email.svg" alt="Email icon" /></a>
      <a href="https://www.linkedin.com/in/andrea-mogren-146053a5"><img src="../assets/images/linkedin.png" alt="LinkedIn Logo" /></a>
      <a href="https://github.com/andreamogren"><img src="../assets/images/Octocat.png" alt="GitHub Logo" /></a>
    </div>
  </section>

  <footer>
    <div class="footer--social">
      <a href="https://instagram.com/julieparkim" target="_blank"><i class="fab fa-instagram" style="font-size: 1.2em"></i></a>
      <a href="https://twitter.com/juliepark" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href=""><i class="far fa-envelope"></i></a>
    </div>
    <div class="footer--bottom">
      <p class="footer--text">Andrea Mogren 2019
        <!-- JS function later --> | &amp; All GIFs belong to Giphy</a></p>
    </div>
  </footer>
</div>
</template>

<script>
import Chart from 'chart.js';
import skillsChartData from '../chart-data.js';

export default {
  name: 'HelloWorld',
  data() {
    return {
      scrollPosition: null,
      skillsChartData: skillsChartData,
    };
  },
  watch: {},
  props: {},
  methods: {
    /* https://stackoverflow.com/questions/41095814/vuejs-how-to-dynamically-change-a-css-class-after-a-scroll-position :D */
    updateScroll() {
      this.scrollPosition = window.scrollY;

      /*if (this.scrollPosition < 60) {
        this.$refs.nav.style.backgroundColor = "#8B00FF";
      } else if (this.scrollPosition > 1932 && this.scrollPosition < 2140) {
        this.$refs.nav.style.backgroundColor = "#0000FF";
      } else if (this.scrollPosition > 2140 && this.scrollPosition < 3116) {
        this.$refs.nav.style.backgroundColor = "#00FF00";
      } else if (this.scrollPosition > 3116 && this.scrollPosition < 5410) {
        this.$refs.nav.style.backgroundColor = "#FF7F00";
      } else if (this.scrollPosition > 5410) {
        this.$refs.nav.style.backgroundColor = "#FF0000";
      }*/
    },
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  },
  computed: {},
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
    this.createChart('skills-chart', this.skillsChartData);
  },
};
</script>

<style scoped lang="less">
@import (reference) "../assets/variables.less";

html {
    font-size: 16px;
}

body {
    margin: 0;
    background: @light;
    overflow-x: hidden;
    font-family:  "Open Sans", sans-serif;
    color: @darkgray;
}

h1 {
    text-align: center;
    font-family: 'Permanent Marker', cursive;
    font-size: 4rem;
}

a {
    color: @darkgray;
    text-decoration: none;
}

strong {
    font-weight: 700;
}

p {
    line-height: 1.5rem;
    margin-bottom: 1rem;
}

#navbar {
    background: @light;
    height: 20px;
    padding: 35px 45px;
    overflow: hidden;
    text-align: center;
    width: 100%;

    a {
        font-family: @sans;
        letter-spacing: 3px;
        font-size: 0.7em;
        padding-right: 10%;
        text-transform: uppercase;
    }
}

.bottom {
    position: absolute;
    bottom: 0;
    z-index: 1;
    margin: 0;
}

.gif {
    max-width: 240px;
    margin: 0 auto;
}

.sticky {
    position: fixed;
    top: 0;
}

.landing--container {
    position: relative;
    margin: 0;
    background-image: url("https://images.pexels.com/photos/164470/pexels-photo-164470.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=650&w=940");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 95vh;
}

.landing--title {
    position: absolute;
    width: 100%;
    top: 40%;
    text-align: center;
    p {
        font-family: @sans;
        text-transform: uppercase;
        text-align: center;
        color: @light;
        font-size: 2em;
        letter-spacing: 0.3em;
        font-weight: 700;
        text-shadow: 2px 2px 2px rgba(@dark, 0.4);
    }
    h1 {
        margin: 0;
        max-width: 100%;
        line-height: 5rem;
        margin-top: -20px;
        font-family: @serif;
        color: @white;
        font-size: 3em;
        text-shadow: 2px 2px 2px rgba(@dark, 0.4);
    }
}

.primary-btn {
    padding: 20px;
    outline: 0;
    border: none;
    text-transform: uppercase;
    font-family: @sans;
    letter-spacing: 4px;
    background: @pink;
    border-radius: 25px;
    font-weight: 100;
    color: @darkgray;
    font-size: 0.6em;
    cursor: pointer;
    transition: @ease;
    &:hover {
        background: @darkgray;
        color: @light;
        transition: @ease;
        transform: scale(1.05);
    }
}

.landing--line {
    background: @white;
    width: 8%;
    left: 46%;
    top: 125%;
    height: 7px;
    position: absolute;
}

h1,
h3,
p {
    max-width: 900px;
    margin: 0 auto;
    color: @darkgray;
}

section {
    padding: 4rem;
}

.light-section {
    background: @cream;
}

.dark-section {
    background: @dark;
}

#background {
    p {
        margin-bottom: 1rem;
    }

    .no-margin-bottom {
        margin-bottom: 0;
    }
}

.logo {
    margin: 0 auto;
    width: 23rem;
    padding-bottom: 5rem;

    img {
        padding: 1rem;
        width: 5rem;
    }
}

footer {
    height: 20vh;
    background: @pink;
    position: relative;
    width: 100%;
    text-align: center;
}
.footer--social {
    height: 100px;
    padding-top: 15px;
    i {
        padding: 30px;
        color: @darkgray;
        transition: @ease;
        &:hover {
            color: @darkgray;
            transition: @ease;
            transform: scale(1.3);
        }
    }
}
.footer--bottom {
    width: 100%;
    position: absolute;
    height: 20%;
    bottom: 0;
}
.footer--text {
    font-family: @sans;
    font-size: 0.5em;
    color: @darkgray;
    letter-spacing: 2px;
    text-transform: uppercase;
    span {
        color: @darkgray;
    }
    a {
        font-family: @serif;
        font-style: italic;
        color: @darkgray;
        &:hover {
            background: @darkgray;
            color: @darkgray;
        }
    }
}
</style>
