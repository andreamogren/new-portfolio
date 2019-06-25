<template>
<div class="hello">
  <div id="mobile-header">
    <button ref="toggleNav" @click="toggleNav()">Close/open</button>
  </div>
  <div id="navbar" ref="navbar" :class="{ open: this.isOpen }">
    <a href="#intro">Intro</a>
    <a href="#skills">Skills</a>
    <a href="#background">Background</a>
    <a href="#who">Who am I?</a>
  </div>

  <div class="hero-background">
    <div class="hero-title">
      <p>Andrea Mogren</p>
      <h1>front end developer</h1>
      <div class="hero-white-line"></div>
    </div>
  </div>

  <section class="light-section" id="intro">
    <h1>Hi there!</h1>
    <div class="gif">
      <iframe src="https://giphy.com/embed/dBgUdHwD9kEQU" width="240" height="426" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <p><a href="https://giphy.com/gifs/dBgUdHwD9kEQU"></a></p>
    </div>
    <p>I'm Andrea, a front-end developer (aspsiring to become fullstack) and Hyper Island graduate. How nice of you to stop by! This portfolio is built in Vue.js, and I am working on constantly developing it and adding new things.</p>
    <h3>🚧 Please note! 🚧</h3>
    <p style="margin-top: 0;">This portfolio is not completed yet, here is a list of the things I have done and will do:</p>
    <ul>
      <li><s>🔧 Set up a project in Vue</s></li>
      <li><s>👶 Start creating a first version</s></li>
      <li><s>📚 Learn how to build in Vue and how to host the site online</s></li>
      <li><s>🚀 Host everything to a GitHub pages branch</s></li>
      <li><s>🌺 Implement new theme (lavender)</s></li>
      <li>⚓ Make link click scroll smoother</li>
      <li>🦸 Make hero headings more readable</li>
      <li>📱 Adjust design to mobile/tablet (include hamburger menu)</li>
      <li>📈 Update the My skills chart to show things I've learned</li>
      <li>🐶 New content in Who am I section</li>
      <li>👾 If I make games in Vue, add these to portfolio</li>
    </ul>
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
    <div class="gifs">
      <div class="gif-container">
        <div class="gif">
          <iframe src="https://giphy.com/embed/dBgUdHwD9kEQU" width="240" height="426" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p><a href="https://giphy.com/gifs/dBgUdHwD9kEQU"></a></p>
        </div>
      </div>
      <div class="gif-container">
        <div class="gif">
          <iframe src="https://giphy.com/embed/13mLwGra9bNEKQ" width="240" height="152"></iframe>
        </div>
        <!-- <div class="gif">
          <iframe src="https://giphy.com/embed/26tn33aiTi1jkl6H6" width="240" height="115" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p><a href="http://giphy.com/gifs/screen-monitor-closeup-26tn33aiTi1jkl6H6"></a></p>
        </div> -->
        <div class="gif">
          <iframe src="https://giphy.com/embed/49B5kpre24clW" width="240" height="288" style="transform: translateY(-5px);" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p><a href="http://giphy.com/gifs/49B5kpre24clW"></a></p>
        </div>
      </div>
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
      <p>Andrea Mogren 2019 <!-- JS function later --> | All GIFs belong to Giphy</p>
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
      initialNavPosition: null,
      isOpen: false, 
    };
  },
  watch: {},
  props: {},
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    },
    addBottom (){
      if (window.innerWidth > 900) {
        this.$refs.navbar.classList.add("bottom"); 
      }
    }, 
    stickyFunction() {
      if (window.innerWidth > 900) {
        this.scrollPosition = window.scrollY;
        if (this.scrollPosition >= this.initialNavPosition) {
          this.$refs.navbar.classList.add("sticky"); 
        } else {
          this.$refs.navbar.classList.remove("sticky");
        }
      }
    },
    toggleNav() {
      this.isOpen = !this.isOpen; 
    } 
  },
  computed: {
  },
  mounted() {
    this.addBottom(); 
    this.initialNavPosition = this.$refs.navbar.offsetTop;
    this.createChart('skills-chart', this.skillsChartData);
    window.addEventListener('scroll', this.stickyFunction);
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
    background: @lavender;
    overflow-x: hidden;
    font-family:  "Open Sans", sans-serif;
    color: @darkgray;
}

h1 {
    text-align: center;
    font-family: 'Permanent Marker', cursive;
    font-size: 4rem;

    @media (max-width: 768px) {
      font-size: 3rem;
    }
}

a {
    color: @darkgray;
    text-decoration: none;
}

strong {
    font-weight: 700;
}

h1, h3, p, ul {
    max-width: 900px;
    margin: 0 auto;
    color: @darkgray;
}

p, h3, ul {
  font-family: @sans;
}

p, ul {
    line-height: 1.5rem;
    margin-bottom: 1rem;
    margin-top: 0;
}

ul {
  list-style-type: none;
}

#navbar {
  background: @lavender;  
  a {
    font-family: @sans;
    text-transform: uppercase;
  }
  @media (min-width: 1024px) {
    padding: 35px 45px;
    width: 100vw; 
    height: 20px;
    text-align: center; 
    a {
      font-size: 0.7em; 
      padding-right: 10%; 
    }
  }

  @media (max-width: 768px) {
    width: 100%; 
    position: fixed; 
    z-index: 10; 
    display: flex;
    flex-wrap: wrap; 
    flex-direction: column; 
    align-items: center; 
    justify-content: center; 
    height: 0; 
    //height: 332px; 

    a {
      display: none; 
      padding: 2rem; 
    }



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

.hero-background {
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

.hero-title {
    position: absolute;
    width: 100%;
    top: 40%;
    text-align: center;
    p {
        font-family: @sans;
        text-transform: uppercase;
        text-align: center;
        color: @lavender;
        font-size: 2em;
        letter-spacing: 0.3em;
        font-weight: 700;
        text-shadow: 2px 2px 2px rgba(@darkest, 0.4);
    }
    h1 {
        margin: 0;
        max-width: 100%;
        line-height: 5rem;
        margin-top: -20px;
        font-family: @serif;
        color: @white;
        font-size: 3em;
        text-shadow: 2px 2px 2px rgba(@darkest, 0.4);
    }
}

.hero-white-line {
    background: @white;
    width: 8%;
    left: 46%;
    top: 125%;
    height: 7px;
    position: absolute;
}

section {
    padding: 4rem;
}

.light-section {
    background: @light;
}

.dark-section {
    background: @darkest;
}

#intro {
  p {
    margin-top: 1rem;
  }
}

#background {
    .no-margin-bottom {
        margin-bottom: 0;
    }
}

#contact + p {
    text-align: center;
}

.logo {
    width: 23rem;
    padding-bottom: 5rem;
    margin: 0 auto;

    img {
        padding: 1rem;
        width: 5rem;
    }
}

.gifs {
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px){
    flex-wrap: wrap;
  }
}

footer {
    background: @dark;
    width: 100vw;
    min-height: 20vh;
    font-size: 0.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
</style>
