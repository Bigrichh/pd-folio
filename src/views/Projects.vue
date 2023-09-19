<template >
  <!-- <div class="content"> -->

    <div class="navbar">
      <NavBarMobile v-if="mobileView" :isDark="false" :isLight="true"></NavBarMobile>
      <NavBar v-if="!mobileView" :isDark="false" :isLight="true"></NavBar>
    </div>

    <div class="container">
      <div data-aos="fade-up" data-aos-duration="3000" class="project-tradehaven">
        <div class="th-label-container">
          <p class="th-label1">UPCOMING PROJECT - TradeHaven </p>
          <p class="th-label2">Students trading app and marketplace • Coming soon</p>
        </div>
      </div>

      <router-link data-aos="fade-up" data-aos-duration="2500" :to="{ name: 'libraVue' }">
        <div class="project-libravue" :style="addBoxShadowLV"
          @mouseover="projectLibraVueisHovered = !projectLibraVueisHovered"
          @mouseout="projectLibraVueisHovered = !projectLibraVueisHovered">
          <div class="lv-label-container">
            <p class="lv-label1">LibraVue</p>
            <p class="lv-label2">E-library and Bookstore • August 2023</p>
          </div>
          <div class="lv-image" :style="scaleImageLV">
            <img src="@/assets/libravueimage1.jpg" alt="LibraVue-img">
          </div>
        </div>
      </router-link>

      <div class="tEats-hHouse">
        <router-link data-aos="fade-up-right" data-aos-duration="2500" to="/ndaauth/techeats">
          <div class="project-container" :style="addBoxShadowTE"
            @mouseover="projecttechEatsisHovered = !projecttechEatsisHovered"
            @mouseout="projecttechEatsisHovered = !projecttechEatsisHovered">
            <div class="lv-label-container">
              <p class="lv-label1">TechEATS</p>
              <p class="lv-label2">Food delivery app • June 2023</p>
            </div>
            <div class="TE-img" :style="scaleImageTE">
              <img src="@/assets/techeatsimage.jpg" alt="TechEats-img">
            </div>
          </div>
        </router-link>

        <router-link data-aos="fade-up-left" data-aos-duration="2500" to="/ndaauth/hostelhouse">
          <div class="project-container" :style="addBoxShadowHH"
            @mouseover="projectHostelHouseisHovered = !projectHostelHouseisHovered"
            @mouseout="projectHostelHouseisHovered = !projectHostelHouseisHovered">
            <div class="lv-label-container">
              <p class="lv-label1">Hostel House</p>
              <p class="lv-label2">Property Rental App • Feb 2023</p>
            </div>
            <div class="HH-img" :style="scaleImageHH">
              <img src="@/assets/hostelhouseimage.jpg" alt="TechEats-img">
            </div>
          </div>
        </router-link>

      </div>

      <router-link data-aos="fade-up" data-aos-duration="2500" :to="{ name: 'studyHouse' }">
        <div class="project-libravue" :style="addBoxShadowSH"
          @mouseover="projectStudyHouseisHovered = !projectStudyHouseisHovered"
          @mouseout="projectStudyHouseisHovered = !projectStudyHouseisHovered">
          <div class="sh-label-container">
            <p class="lv-label1">Study House</p>
            <p class="lv-label2">E-learning App • Mar 2023</p>
          </div>
          <div class="sh-image" :style="scaleImageSH">
            <img src="@/assets/studyhouseimage.jpg" alt="LibraVue-img">
          </div>
        </div>
      </router-link>

      <router-link data-aos="fade-up" data-aos-duration="2500" :to="{ name: 'pitw' }">
        <div class="projects-in-the-works">
          <div class="pitw-label-container">
            <p class="pitw-label1">Projects in the works </p>
            <p class="pitw-label2">An archive of works in progress</p>
          </div>
           <div>
            <img src="@/assets/Screen.jpg" alt="image">
          </div>
        </div>
      </router-link>

      <footer data-aos="fade" data-aos-duration="2500">
        <div class="cta">
          <p class="cta-text">Let's work together</p>
          <p><a class="email-link" href="mailto:richmanaddai@gmail.com">richmanaddai@gmail.com</a></p>
        </div>
        <div class="end">
          <div class="copyright">
            <p>&copy 2023 Built by Richmann</p>
          </div>
          <div class="social-links">
            <p style="opacity: 1;">Reach me on</p>
            <p><a target="_blank" href="https://www.instagram.com/big.richhh/">Instagram</a></p>
            <p><a target="_blank" href="https://twitter.com/hasanirichmann">Twitter</a></p>
            <p><a target="_blank" href="https://discordapp.com/users/935100341127626792">Discord</a></p>
          </div>
        </div>

      </footer>
    </div>
  <!-- </div> -->
</template>




<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import NavBarMobile from '@/components/NavBarMobile.vue'
import { Icon } from '@iconify/vue'

export default {
  name: 'Projects',
  components: {
    NavBar, NavBarMobile, Icon,
  },


  data() {
    return {
      projectLibraVueisHovered: false,
      projecttechEatsisHovered: false,
      projectHostelHouseisHovered: false,
      projectStudyHouseisHovered: false,
      mobileView: true,
      showNav: false,
    };
  },

  methods: {
    handleMobileNav() {
      this.mobileView = window.innerWidth <= 768;
    }
  },
  created() {
    this.handleMobileNav();
  },

  computed: {
    // Scale image and add box shadow to libravue container
    scaleImageLV() {
      return {
        transform: this.projectLibraVueisHovered ? 'scale(1.2)' : 'scale(1)',
        transition: 'transform 0.5s ease-in-out',
      };
    },

    addBoxShadowLV() {
      return {
        boxShadow: this.projectLibraVueisHovered ? '10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25)' : 'none',
        transition: 'box-shadow 0.5s ease-in-out',
      };
    },



    // Scale image and add box shadow to techEats container
    scaleImageTE() {
      return {
        transform: this.projecttechEatsisHovered ? 'scale(1.15)' : 'scale(1)',
        transition: 'transform 0.5s ease-in-out',
      };
    },

    addBoxShadowTE() {
      return {
        boxShadow: this.projecttechEatsisHovered ? '10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25)' : 'none',
        transition: 'box-shadow 0.5s ease-in-out',
      };
    },



    // Scale image and add box shadow to hostelHouse container
    scaleImageHH() {
      return {
        transform: this.projectHostelHouseisHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.5s ease-in-out',
      };
    },

    addBoxShadowHH() {
      return {
        boxShadow: this.projectHostelHouseisHovered ? '10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25)' : 'none',
        transition: 'box-shadow 0.5s ease-in-out',
      };
    },


    // Scale image and add box shadow to studyHouse container
    scaleImageSH() {
      return {
        transform: this.projectStudyHouseisHovered ? 'scale(1.1)' : 'scale(1)',
        transition: 'transform 0.5s ease-in-out',
      };
    },

    addBoxShadowSH() {
      return {
        boxShadow: this.projectStudyHouseisHovered ? '10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25)' : 'none',
        transition: 'box-shadow 0.5s ease-in-out',
      };
    },
  },
}
</script>




<style scoped>
* {
  color: #353535;
}

a {
  text-decoration: none;
}

/* 
  .content {
    max-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
    overflow-y: scroll;
    margin-right: 4px;
    scrollbar-width: thin;
    scrollbar-color: #353535 #e6e6e6;
  }

  .content::-webkit-scrollbar {
    width: 4px;
  }

  .content::-webkit-scrollbar-thumb {
    background-color: #353535;
    border-radius: 8px;
  }

  .content::-webkit-scrollbar-thumb:hover {
    background-color: #e6e6e6;
  } */

.navbar {
  margin: 50px auto 0;
  max-width: 1290px;
}

img {
  width: 100%;
}


/* TradeHaven project styles */
.project-tradehaven {
  border-radius: 20px;
  background: url("@/assets/Latestproject.jpg") no-repeat center center / cover;
  height: 863px;
  max-width: 1290px;
  margin: 50px auto 0;
  position: relative;
}

.th-label-container {
  position: absolute;
  left: 60px;
  top: 60px;
}

.th-label1 {
  color: #353535;
  font-family: Rakkas;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.th-label2 {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}


/* LibraVue project styles */
.project-libravue {
  border-radius: 20px;
  background: #E6E6E6;
  width: 1293px;
  height: 520px;
  margin: 60px auto;
  position: relative;
}

.lv-label-container {
  position: absolute;
  left: 30px;
  top: 30px;
}

.lv-label1 {
  color: #353535;
  font-family: Rakkas;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.lv-label2 {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.lv-image {
  width: 672px;
  height: 360px;
  position: absolute;
  left: 493px;
  top: 100px;
}


/* TechEats project styles */
.tEats-hHouse {
  display: flex;
  max-width: 1290px;
  margin: 0 auto 60px;
  justify-content: space-between;
}

.project-container {
  width: 624px;
  height: 520px;
  border-radius: 20px;
  background: #E6E6E6;
  position: relative;
  overflow: hidden;
}

.HH-img {
  position: absolute;
  width: 528px;
  top: 142px;
  left: 82px;
}

.TE-img {
  position: absolute;
  width: 548px;
  top: 188px;
  left: 32px;
}


/* StudyHouse project styles */
.sh-image {
  width: 530px;
  height: 425px;
  position: absolute;
  left: 160px;
  top: 48px;
}

.sh-label-container {
  position: absolute;
  right: 30px;
  top: 30px;
}

/* Projects in the works styles */
.projects-in-the-works {
  border-radius: 20px;
  height: 750px;
  max-width: 1290px;
  margin: 60px auto;
  position: relative;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
}

.projects-in-the-works:hover {
  border-radius: 20px;
  height:750px;
  max-width: 1290px;
  margin: 60px auto;
  position: relative;
  box-shadow: 10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25);
}

.projects-in-the-works img {
  border-radius: 20px;
  height: fit-content;
  max-width: 1290px;
  transition: all 0.4s ease-in-out;
}

.projects-in-the-works img:hover {
  transform: scale(1.1);
}

.pitw-label-container {
  position: absolute;
  left: 40px;
  top: 30px;
  z-index: 10;
}

.pitw-label1 {
  color: #353535;
  font-family: Rakkas;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.pitw-label2 {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

/* Footer styles */
footer {
  background: #E6E6E6;
  max-width: 100vw;
  height: 350px;
  padding-top: 58px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.cta {
  /* margin: 0 auto; */
  width: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cta-text {
  color: #353535;
  font-family: Rakkas;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.email-link {
  color: rgba(53, 53, 53, 0.40);
  font-family: Red Hat Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  transition: all 0.3s ease-in-out;
}

.email-link:hover {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  /* margin-top: -10px; */
  cursor: pointer;
}

.social-links {
  display: flex;
  justify-content: space-between;
  width: 400px;
}


.social-links p {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.4;
  transition: all 0.2s ease-in-out;
}

.social-links p:hover {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 1;
  cursor: pointer;
}

.copyright {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
}

.end {
  display: flex;
  margin: 72px auto 24px;
  justify-content: space-between;
  align-items: center;
  width: 1290px;

}

a {
  text-decoration: none;
  color: #353535;
  font-family: Red Hat Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  /* opacity: 0.4; */
}







/* MEDIA QUERIES */
/* Extra Extra Large Devices (Large Desktops and Widescreens): */
@media (min-width: 1201px) and (max-width: 1460px) {

  .navbar {
    margin: 50px auto 0;
    max-width: 1090px;
  }


  /* TradeHaven project styles */
  .project-tradehaven {
    border-radius: 20px;
    background: url("@/assets/Latestproject.jpg") no-repeat center center / cover;
    height: 840px;
    max-width: 1090px;
    margin: 50px auto 0;
    position: relative;
  }


  /* LibraVue project styles */
  .project-libravue {
    border-radius: 20px;
    background: #E6E6E6;
    width: 1093px;
    height: 480px;
    margin: 60px auto;
    position: relative;
  }

  .lv-image {
    width: 600px;
    height: 360px;
    position: absolute;
    left: 400px;
    top: 120px;
  }


  /* TechEats project styles */
  .tEats-hHouse {
    display: flex;
    max-width: 1090px;
    margin: 0 auto 60px;
    justify-content: space-between;
  }

  .project-container {
    width: 524px;
    height: 480px;
    border-radius: 20px;
    background: #E6E6E6;
    position: relative;
    overflow: hidden;
  }

  .HH-img {
    position: absolute;
    width: 440px;
    top: 142px;
    left: 82px;
  }

  .TE-img {
    position: absolute;
    width: 460px;
    top: 188px;
    left: 32px;
  }


  /* StudyHouse project styles */
  .sh-image {
    width: 490px;
    height: 425px;
    position: absolute;
    left: 140px;
    top: 48px;
  }

  /* Projects in the works styles */
  .projects-in-the-works {
    border-radius: 20px;
    height: 700px;
    max-width: 1090px;
    margin: 60px auto;
    position: relative;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .projects-in-the-works:hover {
    border-radius: 20px;
    height: 700px;
    max-width: 1090px;
    margin: 60px auto;
    position: relative;
    box-shadow: 10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25);
  }

  .projects-in-the-works img {
    border-radius: 20px;
    height: auto;
    max-width: 1090px;
    transition: all 0.4s ease-in-out;
  }

  .projects-in-the-works img:hover {
    transform: scale(1.1);
  }


  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 100vw;
    height: 350px;
    padding-top: 58px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .cta {
    /* margin: 0 auto; */
    width: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-text {
    color: #353535;
    font-family: Rakkas;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    transition: all 0.3s ease-in-out;
  }

  .email-link:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    /* margin-top: -10px; */
    cursor: pointer;
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    width: 400px;
  }


  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .end {
    display: flex;
    margin: 72px auto 24px;
    justify-content: space-between;
    align-items: center;
    width: 1090px;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* opacity: 0.4; */
  }

}




/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {

  .navbar {
    margin: 50px auto 0;
    max-width: 890px;
  }


  /* TradeHaven project styles */
  .project-tradehaven {
    border-radius: 20px;
    background: url("@/assets/Latestproject.jpg") no-repeat center center / cover;
    height: 780px;
    max-width: 890px;
    margin: 50px auto 0;
    position: relative;
  }

  .th-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .th-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* LibraVue project styles */
  .project-libravue {
    border-radius: 20px;
    background: #E6E6E6;
    width: 893px;
    height: 420px;
    margin: 60px auto;
    position: relative;
  }

  .lv-image {
    width: 460px;
    height: auto;
    position: absolute;
    left: 380px;
    top: 120px;
  }

  .lv-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .lv-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* TechEats project styles */
  .tEats-hHouse {
    display: flex;
    max-width: 890px;
    margin: 0 auto 60px;
    justify-content: space-between;
  }

  .project-container {
    width: 424px;
    height: 420px;
    border-radius: 20px;
    background: #E6E6E6;
    position: relative;
    overflow: hidden;
  }

  .HH-img {
    position: absolute;
    width: 380px;
    top: 142px;
    left: 72px;
  }

  .TE-img {
    position: absolute;
    width: 380px;
    top: 188px;
    left: 24px;
  }


  /* StudyHouse project styles */
  .sh-image {
    width: 390px;
    height: auto;
    position: absolute;
    left: 100px;
    top: 68px;
  }

  /* Projects in the works styles */
  .projects-in-the-works {
    border-radius: 20px;
    height: 600px;
    max-width: 890px;
    margin: 60px auto;
    position: relative;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .projects-in-the-works:hover {
    border-radius: 20px;
    height: 600px;
    max-width: 890px;
    margin: 60px auto;
    position: relative;
    box-shadow: 10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25);
  }

  .projects-in-the-works img {
    border-radius: 20px;
    height: auto;
    max-width: 890px;
    transition: all 0.4s ease-in-out;
  }

  .projects-in-the-works img:hover {
    transform: scale(1.1);
  }

  .pitw-label-container {
    position: absolute;
    left: 40px;
    top: 20px;
    z-index: 10;
  }

  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 100vw;
    height: 350px;
    padding-top: 58px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .cta {
    /* margin: 0 auto; */
    width: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-text {
    color: #353535;
    font-family: Rakkas;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    transition: all 0.3s ease-in-out;
  }

  .email-link:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    /* margin-top: -10px; */
    cursor: pointer;
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    width: 400px;
  }


  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .end {
    display: flex;
    margin: 72px auto 24px;
    justify-content: space-between;
    align-items: center;
    width: 890px;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* opacity: 0.4; */
  }


}




/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {

  .navbar {
    margin: 50px auto 0;
    max-width: 690px;
  }


  /* TradeHaven project styles */
  .project-tradehaven {
    border-radius: 10px;
    background: url("@/assets/Latestproject.jpg") no-repeat center center / cover;
    height: 680px;
    max-width: 690px;
    margin: 50px auto 0;
    position: relative;
  }

  .th-label-container {
    position: absolute;
    left: 40px;
    top: 40px;
  }

  .th-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .th-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* LibraVue project styles */
  .project-libravue {
    border-radius: 10px;
    background: #E6E6E6;
    width: 693px;
    height: 400px;
    margin: 60px auto;
    position: relative;
  }

  .lv-image {
    width: 380px;
    height: auto;
    position: absolute;
    left: 280px;
    top: 160px;
  }

  .lv-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .lv-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* TechEats project styles */
  .tEats-hHouse {
    display: flex;
    max-width: 690px;
    margin: 0 auto 60px;
    justify-content: space-between;
  }

  .project-container {
    width: 324px;
    height: 400px;
    border-radius: 10px;
    background: #E6E6E6;
    position: relative;
    overflow: hidden;
  }

  .HH-img {
    position: absolute;
    width: 340px;
    top: 142px;
    left: 42px;
  }

  .TE-img {
    position: absolute;
    width: 320px;
    top: 188px;
    left: 4px;
  }


  /* StudyHouse project styles */
  .sh-image {
    width: 390px;
    height: auto;
    position: absolute;
    left: 60px;
    top: 68px;
    z-index: 0;
  }

  .sh-label-container {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 1;
  }

  /* Projects in the works styles */
  .projects-in-the-works {
    border-radius: 20px;
    height: 450px;
    max-width: 690px;
    margin: 60px auto;
    position: relative;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .projects-in-the-works:hover {
    border-radius: 20px;
    height: 450px;
    max-width: 690px;
    margin: 60px auto;
    position: relative;
    box-shadow: 10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25);
  }

  .projects-in-the-works img {
    border-radius: 20px;
    height: fit-content;
    width: 690px;
    transition: all 0.4s ease-in-out;
  }

  .projects-in-the-works img:hover {
    transform: scale(1.1);
  }

  .pitw-label-container {
    position: absolute;
    left: 30px;
    top: 10px;
    z-index: 10;
  }

  .pitw-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 26px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .pitw-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 100vw;
    height: 350px;
    padding-top: 58px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .cta {
    /* margin: 0 auto; */
    width: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-text {
    color: #353535;
    font-family: Rakkas;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    transition: all 0.3s ease-in-out;
  }

  .email-link:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    /* margin-top: -10px; */
    cursor: pointer;
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    width: 400px;
  }


  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .end {
    display: flex;
    margin: 72px auto 24px;
    justify-content: space-between;
    align-items: center;
    width: 690px;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* opacity: 0.4; */
  }


}



/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {

  .navbar {
    margin: 50px auto 0;
    max-width: 490px;
  }


  /* TradeHaven project styles */
  .project-tradehaven {
    border-radius: 10px;
    background: url("@/assets/Latestproject.jpg") no-repeat center center / cover;
    height: 480px;
    max-width: 490px;
    margin: 50px auto 0;
    position: relative;
  }

  .th-label-container {
    position: absolute;
    left: 40px;
    top: 40px;
  }

  .th-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .th-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* LibraVue project styles */
  .project-libravue {
    border-radius: 10px;
    background: #E6E6E6;
    width: 493px;
    height: 360px;
    margin: 40px auto;
    position: relative;
  }

  .lv-image {
    width: 360px;
    height: auto;
    position: absolute;
    left: 70px;
    top: 140px;
  }

  .lv-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .lv-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* TechEats project styles */
  .tEats-hHouse {
    display: flex;
    flex-direction: column;
    max-width: 490px;
    justify-content: space-between;
    gap: 40px;
  }

  .project-container {
    width: 493px;
    height: 360px;
    border-radius: 10px;
    background: #E6E6E6;
    position: relative;
    overflow: hidden;

  }

  .HH-img {
    position: absolute;
    width: 340px;
    top: 122px;
    left: 82px;
  }

  .TE-img {
    position: absolute;
    width: 380px;
    top: 138px;
    left: 64px;
  }


  /* StudyHouse project styles */
  .sh-image {
    width: 310px;
    height: auto;
    position: absolute;
    left: 20px;
    top: 98px;
    z-index: 0;
  }

  .sh-label-container {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 1;
  }

  /* Projects in the works styles */
  .projects-in-the-works {
    border-radius: 20px;
    height: 330px;
    max-width: 490px;
    margin: 60px auto;
    position: relative;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .projects-in-the-works:hover {
    border-radius: 20px;
    height: 330px;
    max-width: 490px;
    margin: 60px auto;
    position: relative;
    box-shadow: 10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25);
  }

  .projects-in-the-works img {
    border-radius: 20px;
    height: fit-content;
    width: 490px;
    transition: all 0.4s ease-in-out;
  }

  .projects-in-the-works img:hover {
    transform: scale(1.1);
  }

  .pitw-label-container {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    left: 30px;
    top: 10px;
    z-index: 10;
  }

  .pitw-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .pitw-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 100vw;
    height: 350px;
    padding-top: 58px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .cta {
    /* margin: 0 auto; */
    width: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-text {
    color: #353535;
    font-family: Rakkas;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    transition: all 0.3s ease-in-out;
  }

  .email-link:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    /* margin-top: -10px; */
    cursor: pointer;
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    width: 400px;
  }


  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .end {
    display: flex;
    flex-direction: column;
    margin: 72px auto 24px;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 490px;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* opacity: 0.4; */
  }


}


/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {

  .navbar {
    margin: 50px auto 0;
    max-width: 470px;
  }


  /* TradeHaven project styles */
  .project-tradehaven {
    border-radius: 10px;
    background: url("@/assets/Latestproject.jpg") no-repeat center center / cover;
    height: 480px;
    max-width: 470px;
    margin: 50px auto 0;
    position: relative;
  }

  .th-label-container {
    position: absolute;
    left: 40px;
    top: 40px;
  }

  .th-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .th-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* LibraVue project styles */
  .project-libravue {
    border-radius: 10px;
    background: #E6E6E6;
    width: 470px;
    height: 360px;
    margin: 40px auto;
    position: relative;
  }

  .lv-image {
    width: 360px;
    height: auto;
    position: absolute;
    left: 70px;
    top: 140px;
  }

  .lv-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .lv-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* TechEats project styles */
  .tEats-hHouse {
    display: flex;
    flex-direction: column;
    max-width: 470px;
    justify-content: space-between;
    gap: 40px;
  }

  .project-container {
    width: 493px;
    height: 360px;
    border-radius: 10px;
    background: #E6E6E6;
    position: relative;
    overflow: hidden;

  }

  .HH-img {
    position: absolute;
    width: 340px;
    top: 122px;
    left: 82px;
  }

  .TE-img {
    position: absolute;
    width: 380px;
    top: 138px;
    left: 64px;
  }


  /* StudyHouse project styles */
  .sh-image {
    width: 310px;
    height: auto;
    position: absolute;
    left: 20px;
    top: 98px;
    z-index: 0;
  }

  .sh-label-container {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 1;
  }


  /* Projects in the works styles */
  .projects-in-the-works {
    border-radius: 20px;
    height: 320px;
    max-width: 470px;
    margin: 60px auto;
    position: relative;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .projects-in-the-works:hover {
    border-radius: 20px;
    height: 320px;
    max-width: 470px;
    margin: 60px auto;
    position: relative;
    box-shadow: 10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25);
  }

  .projects-in-the-works img {
    border-radius: 20px;
    height: fit-content;
    width: 470px;
    transition: all 0.4s ease-in-out;
  }

  .projects-in-the-works img:hover {
    transform: scale(1.1);
  }

  .pitw-label-container {
    display: flex;
    align-items: center;
    gap: 8px;
    position: absolute;
    left: 30px;
    top: 10px;
    z-index: 10;
  }

  .pitw-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .pitw-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 100vw;
    height: 300px;
    padding-top: 58px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .cta {
    /* margin: 0 auto; */
    width: 470px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-text {
    color: #353535;
    font-family: Rakkas;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    transition: all 0.3s ease-in-out;
  }

  .email-link:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    /* margin-top: -10px; */
    cursor: pointer;
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    width: 400px;
  }


  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .end {
    display: flex;
    flex-direction: column;
    margin: 72px auto 24px;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 470px;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* opacity: 0.4; */
  }

}


/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {

  .navbar {
    margin: 50px auto 0;
    max-width: 380px;
  }


  /* TradeHaven project styles */
  .project-tradehaven {
    border-radius: 10px;
    background: url("@/assets/Latestproject.jpg") no-repeat center center / cover;
    height: 480px;
    max-width: 380px;
    margin: 50px auto 0;
    position: relative;
  }

  .th-label-container {
    position: absolute;
    left: 20px;
    top: 20px;
  }

  .th-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .th-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* LibraVue project styles */
  .project-libravue {
    border-radius: 10px;
    background: #E6E6E6;
    width: 380px;
    height: 360px;
    margin: 40px auto;
    position: relative;
  }

  .lv-image {
    width: 320px;
    height: auto;
    position: absolute;
    left: 40px;
    top: 140px;
  }

  .lv-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .lv-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* TechEats project styles */
  .tEats-hHouse {
    display: flex;
    flex-direction: column;
    max-width: 380px;
    justify-content: space-between;
    gap: 40px;
  }

  .project-container {
    width: 380px;
    height: 360px;
    border-radius: 10px;
    background: #E6E6E6;
    position: relative;
    overflow: hidden;

  }

  .HH-img {
    position: absolute;
    width: 340px;
    top: 122px;
    left: 82px;
  }

  .TE-img {
    position: absolute;
    width: 360px;
    top: 138px;
    left: 14px;
  }


  /* StudyHouse project styles */
  .sh-image {
    width: 300px;
    height: auto;
    position: absolute;
    left: 20px;
    top: 105px;
    z-index: 0;
  }

  .sh-label-container {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 1;
  }


  /* Projects in the works styles */
  .projects-in-the-works {
    border-radius: 20px;
    height: 250px;
    max-width: 380px;
    margin: 60px auto;
    position: relative;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .projects-in-the-works:hover {
    border-radius: 20px;
    height: 250px;
    max-width: 380px;
    margin: 60px auto;
    position: relative;
    box-shadow: 10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25);
  }

  .projects-in-the-works img {
    border-radius: 20px;
    height: fit-content;
    width: 380px;
    transition: all 0.4s ease-in-out;
  }

  .projects-in-the-works img:hover {
    transform: scale(1.1);
  }

  .pitw-label-container {
    display: flex;
    align-items: center;
    gap: 4px;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 10;
  }

  .pitw-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .pitw-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 100vw;
    height: 300px;
    padding-top: 58px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .cta {
    /* margin: 0 auto; */
    width: 470px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-text {
    color: #353535;
    font-family: Rakkas;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    transition: all 0.3s ease-in-out;
  }

  .email-link:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    /* margin-top: -10px; */
    cursor: pointer;
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    width: 380px;
  }


  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .end {
    display: flex;
    flex-direction: column;
    margin: 12px auto 24px;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 380px;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* opacity: 0.4; */
  }

}



/*Extra Small Devices (Phones) */
@media (max-width: 399px) {

  .navbar {
    margin: 50px auto 0;
    max-width: 300px;
  }


  /* TradeHaven project styles */
  .project-tradehaven {
    border-radius: 10px;
    background: url("@/assets/Latestproject.jpg") no-repeat center center / cover;
    height: 300px;
    max-width: 300px;
    margin: 20px auto 0;
    position: relative;
  }

  .th-label-container {
    position: absolute;
    left: 20px;
    top: 20px;
  }

  .th-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .th-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* LibraVue project styles */
  .project-libravue {
    border-radius: 10px;
    background: #E6E6E6;
    width: 300px;
    height: 300px;
    margin: 40px auto;
    position: relative;
  }

  .lv-image {
    width: 260px;
    height: auto;
    position: absolute;
    left: 20px;
    top: 120px;
  }

  .lv-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .lv-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* TechEats project styles */
  .tEats-hHouse {
    display: flex;
    flex-direction: column;
    max-width: 480px;
    justify-content: space-between;
    gap: 40px;
    margin: 0 auto;
  }

  .project-container {
    width: 300px;
    height: 300px;
    border-radius: 10px;
    background: #E6E6E6;
    position: relative;
    overflow: hidden;
    margin: 0 auto;

  }

  .HH-img {
    position: absolute;
    width: 280px;
    top: 102px;
    left: 32px;
  }

  .TE-img {
    position: absolute;
    width: 280px;
    top: 118px;
    left: 14px;
  }


  /* StudyHouse project styles */
  .sh-image {
    width: 240px;
    height: auto;
    position: absolute;
    left: 40px;
    top: 88px;
    z-index: 0;
  }

  .sh-label-container {
    position: absolute;
    right: 30px;
    top: 30px;
    z-index: 1;
  }


  /* Projects in the works styles */
  .projects-in-the-works {
    border-radius: 20px;
    height: 200px;
    max-width: 300px;
    margin: 60px auto;
    position: relative;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
  }

  .projects-in-the-works:hover {
    border-radius: 20px;
    height: 200px;
    max-width: 300px;
    margin: 60px auto;
    position: relative;
    box-shadow: 10px 15px 25px -5px rgba(0, 0, 0, 0.25), 10px 0px 25px -15px rgba(0, 0, 0, 0.25);
  }

  .projects-in-the-works img {
    border-radius: 20px;
    height: fit-content;
    width: 300px;
    transition: all 0.4s ease-in-out;
  }

  .projects-in-the-works img:hover {
    transform: scale(1.1);
  }

  .pitw-label-container {
    display: flex;
    align-items: center;
    gap: 4px;
    position: absolute;
    left: 10px;
    top: 10px;
    z-index: 10;
  }

  .pitw-label1 {
    color: #353535;
    font-family: Rakkas;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .pitw-label2 {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 10px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }


  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 100vw;
    height: 250px;
    padding-top: 58px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .cta {
    /* margin: 0 auto; */
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-text {
    color: #353535;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    transition: all 0.3s ease-in-out;
  }

  .email-link:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    /* margin-top: -10px; */
    cursor: pointer;
  }

  .social-links {
    display: flex;
    justify-content: space-between;
    width: 250px;
  }


  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .end {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin: 52px auto 24px;
    justify-content: space-between;
    align-items: center;
    width: 300px;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* opacity: 0.4; */
  }


}
</style>

