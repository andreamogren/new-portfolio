<template>
<div class="hello">
  <div id="mobile-header">
    <p>{ Andrea Mogren }</p><button ref="toggleNav" @click="toggleNav()"><img src="../assets/images/hamburger.png" alt="Hamburger"/></button>
  </div>
  <div id="navbar" ref="navbar" :class="{ open: this.isOpen }">
    <nav>
      <a href="#intro">Intro</a>
      <a href="#skills">Skills</a>
      <a href="#background">Background</a>
      <a href="#who">Who am I?</a>
    </nav>
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
    <h2>🚧 Please note! 🚧</h2>
    <p style="margin-top: 0;">This portfolio is not completed yet, here is a list of the things I have done and will do:</p>
    <ul class="no-list-style">
      <li><s>🔧 Set up a project in Vue</s></li>
      <li><s>👶 Start creating a first version</s></li>
      <li><s>📚 Learn how to build files for production in Vue and how to host the site online</s></li>
      <li><s>🚀 Host everything to a GitHub pages branch</s></li>
      <li><s>🌺 Implement new theme (lavender)</s></li>
      <li><s>📈 Update the My skills chart to show things I've learned</s></li>
      <li>📱 Adjust design to mobile/tablet (include hamburger menu)</li>
      <li>⚓ Make link click scroll smoother</li>
      <li>🦸 Make hero headings more readable</li>
      <li>🎓 Add links to Treehouse Fullstack Techdegree projects that I've completed</li>
      <li>🐶 New content in Who am I section</li>
      <li>👾 If I make games in Vue, add these to portfolio</li>
    </ul>
  </section>
  <section id="skills" class="dark-section">
    <h1>My skills</h1>
    <h2 class="center-h2">1 - Beginner, 2 - Elementary, 3 - Intermediate, 4 - Advanced, 5 - Expert</h2>
    <canvas id="skills-chart"></canvas>
  </section>
  <section id="background" class="light-section">
    <h1>Background</h1>
    <h2>Currently</h2>
    <strong>
      <h3 class="no-margin-bottom">2018 - </h3>
    </strong>
    <p>I work as a front and developer, aspiring to become full stack, at <a href="https://www.comprend.com/" target="_blank" rel="noopener noreferrer">Comprend</a>. I work mostly with creating websites for clients
      in our own CMS called <a href="https://www.comprend.com/blog/2018/website-as-a-service-what-is-that/" target="_blank" rel="noopener noreferrer">WaaS</a>. I've also developed some features for the application itself.</p>
    <p>The tech I work with at Comprend is:</p>
      <ul>
        <li>HTML5</li>
        <li>CSS3/LESS</li>
        <li>JavaScript (EJS, jQuery, ES5/6+ and some Vue.js)</li> 
        <li>and MongoDB</li>
      </ul>
    <p>Apart from working with development, I'm also interested in group dynamics and what makes a group work well together.
      I hold regularly hold team building exercises so that my team not only talk about what we do together, but also how we should do it.</p>
    <h2>Previously</h2>
    <strong>
      <h3 class="no-margin-bottom">2016 - 2018</h3>
    </strong>
    <p>In 2018, I graduated from Hyper Island where I studied the Digital Data Strategist program. This is where I learned basic HTML, CSS, JavaScript and also how to use optimization tools such as
      Google analytics and HotJar, about Search Engine Marketing, for example AdWords and how to properly use SEO, and lastly how to present yourself and your work.
      Everything I have and will learn comes with a data perspective, and how you can use data to your advantage.
      I’ve also learned a lot about group dynamics and how to create more effective teams.</p>
    <p>While studying, I did my internship at Comprend, learning a lot about front end development but also about back end.</p>

    <strong>
      <h3 class="no-margin-bottom">2012 - 2016</h3>
    </strong>
    <p>Before coming to Hyper, I worked as a freelance journalist at Oh My! and OP communication,
      where I've written many articles and interviewed a bunch of people. I also have a bachelor's
      degree in English linguistics from the Professional Language program at Stockholm University,
      where I studied English and Swedish linguistics with a focus on business communication.</p>
  </section>
  <section id="who" class="dark-section">
    <h1>Who am I?</h1>
    <p>As a person, I am happy, organized, calm and I love all sorts of games (pc, video, board game, you name it). I also love dogs, creating things (everything from web sites to scarfs), languages and tea. Especially green tea. 🍵</p>
    <h2>Me in GIFs:</h2>
    <div class="gifs">
      <div class="gif-container">
        <div class="gif">
          <img src="../assets/images/andrea.gif" width="240" height="439" alt="Andrea waving at the camera"/>
        </div>
      </div>
      <div class="gif-container">
        <div class="gif">
          <img src="../assets/images/corgis.gif" width="240" height="152" alt="Two Corgis on a treadmill"/>
        </div>
        <!-- Might include this gif later <div class="gif">
          <iframe src="https://giphy.com/embed/26tn33aiTi1jkl6H6" width="240" height="115" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          <p><a href="http://giphy.com/gifs/screen-monitor-closeup-26tn33aiTi1jkl6H6"></a></p>
        </div> -->
        <div class="gif">
          <img src="../assets/images/toad.gif" width="240" height="288" alt="Captain Toad from the Nintendo game"/>
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
      <p>Andrea Mogren 2019 <!-- Make JS function that automatically changes the year --> | All GIFs belong to Giphy</p>
  </footer>
</div>
</template>

<script>
import Chart from 'chart.js';
import skillsChartData from '../chart-data.js';

export default {
  name: 'PortfolioStart',
  data() {
    return {
      scrollPosition: null,
      skillsChartData: skillsChartData,
      initialNavPosition: null,
      isOpen: false, 
    };
  },
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
      //Makes nav align with bottom of hero area 
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

h1, h2, h3, p, ul {
    max-width: 850px;
    margin: auto;
    color: @darkgray;
}

p, h2, h3, ul {
  font-family: @sans;
}

p, ul {
    line-height: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 400; 
    margin-top: 0;
}

h2 {
  margin-bottom: 1rem; 
}

.no-list-style {
  list-style-type: none; 
}

#navbar {
  background: @lavender;  
  a {
    font-family: @sans;
    text-transform: uppercase;
  }
    //See assets/variables.less for mixins 
  .for-desktop-up({
    box-sizing: border-box;
    padding: 2rem;  
    width: 100%; 
    height: 82px;
    text-align: center; 
    nav {
      max-width: 50%; 
      margin: 0 auto; 
      display: flex; 
      justify-content: space-evenly;
    }
    a {
      font-size: 0.8rem; 
    }
  }); 

  .for-phone-only({
      width: 100%;  
      top: 60px; 
      position: fixed; 
      z-index: 3; 
      display: flex;
      flex-wrap: wrap; 
      flex-direction: column; 
      align-items: center; 
      justify-content: center; 
      height: 0; 
      width: 100%; 
      box-sizing: border-box; 
      transition: 0.3s; 

      nav {
        width: 100%; 
        display: none; 
      }

      a {
        width: 100%; 
        display: block; 
        text-align: center; 
        padding: 2rem; 
        border-bottom: 1px solid @dark; 
      }

      &.open {
        height: 332px; 

        nav {
          display: block; 
        }
      }
  }); 
}

#mobile-header {
  position: fixed; 
  top: 0; 
  height: 60px; 
  width: 100%; 
  z-index: 4; 
  display: flex; 
  justify-content: space-around; 
  align-items: center; 
  background-color: @light; 

  p {
    margin: 0; 
    font-size: 25px; 
    font-weight: 700; 
    font-family: 'Permanent Marker', cursive;

  }

  button {
    height: 50px; 
    width: 50px; 
    background-color: transparent; 
    border: none; 

    img {
      width: 40px; 
      height: 40px; 
    }
  }

  .for-desktop-up({
    display: none; 
  });
}

#skills-chart {
  max-width: 1000px; 
  margin: auto;
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
    background-image: url("../assets/images/pexels-photo-164470.jpeg");
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
    top: 50%;
    left: 50%; 
    transform: translate(-50%, -50%); 
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

    .for-phone-only({
      width: 100%; 
    }); 
}

.gifs {
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media (max-width: 768px){
    flex-wrap: wrap;
  }

  .gif-container {
    .gif:nth-of-type(2) {
      transform: translateY(-5px);
    }
  }
}

footer {
    background: @dark;
    width: 100%;
    min-height: 20vh;
    font-size: 0.6rem;
    letter-spacing: 2px;
    text-transform: uppercase;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
</style>
