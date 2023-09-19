
<template>
    <div class="landing">
      <div class="navbar">
        <NavBarMobile v-if="mobileView" :isDark="true" :isLight="false"></NavBarMobile>
        <NavBar v-if="!mobileView" :isDark="true" :isLight="false"></NavBar>
      </div>
      <div class="landing-title">
        <p class="project-caption">
          E-library Web App</p>
        <p class="project-case">
          LIBRAVUE CASE STUDY</p>
      </div>
      <div class="summary">
        <p class="summary-text"><span class="summary-text-span">Role:</span>Founder, Product designer & Developer</p>
        <p class="summary-text"><span class="summary-text-span">Background:</span>Web app</p>
        <p class="summary-text"><span class="summary-text-span">Duration:</span>August 2023 - ongoing</p>
      </div>

    </div>

    <div class="project-details">
      <div data-aos="fade-up" data-aos-duration="2500" class="HHimagepreviews">
        <img class="HHimagepreview" src="@/assets/LVimagepreview.jpg"
          alt="image-preview1">
      </div>

      <!-- Background -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>BACKGROUND</p>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
          <p style="margin-bottom: 50px;">I set out to create an innovative e-library website as part of a mini-project.
            The traditional library setting has always been an invaluable source of knowledge, but I saw an opportunity to
            transform this experience by crafting a digital library that breaks free from physical limitations, making
            learning accessible to individuals from diverse corners of the world. </p>

          <p style="margin-bottom: 50px;">My goal was to design an e-library web app that catered to the needs of
            students, researchers, and knowledge seekers alike. To achieve this, I envisioned an extensive repository of
            digital books, scholarly articles, research papers, and educational materials covering various disciplines.
          </p>
        </div>
      </div>




      <!-- Goals for the project-->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>GOALS FOR THE PROJECT</p>
        </div>

        <div class="vertical-container">

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>1</p>
              </div>
              <div class="goal-header">
                <p>The creation of a Comprehensive Digital Repository</p>
              </div>
              <div class="goal-text">
                <p>To develop an extensive collection of digital resources, including e-books, scholarly articles,
                  research
                  papers, and educational materials, covering a wide range of subjects and disciplines.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>2</p>
              </div>
              <div class="goal-header">
                <p>Educational Partnerships</p>
              </div>
              <div class="goal-text">
                <p> Forge collaborations with academic publishers, libraries, and educational institutions to expand the
                  e-library's content offerings and establish it as a valuable educational resource.
                </p>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>3</p>
              </div>
              <div class="goal-header">
                <p>Facilitate Easy Access and Navigation</p>
              </div>
              <div class="goal-text">
                <p> Design a functional interface that allows users to search, browse, and access resources
                  effortlessly, with intuitive navigation and efficient search functionalities.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>4</p>
              </div>
              <div class="goal-header">
                <p>Enhance User Experience</p>
              </div>
              <div class="goal-text">
                <p>Focus on providing an exceptional user experience, with a visually appealing design, quick loading
                  times, and streamlined workflows to keep users engaged and satisfied.
                </p>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>5</p>
              </div>
              <div class="goal-header">
                <p>Offer Seamless Integration with Learning Management Systems</p>
              </div>
              <div class="goal-text">
                <p> Integrate with existing learning management systems in educational institutions to facilitate easy
                  access to e-library resources for students and faculty.
                </p>
              </div>
            </div>

            <div class="item" style="display: none;">
              <div class="goal-number">
                <p>6</p>
              </div>
              <div class="goal-header">
                <p>Scheduling and Reminders Feature</p>
              </div>
              <div class="goal-text">
                <p>Offer a calendar feature for scheduling study sessions, setting reminders for upcoming assignments, and
                  managing course deadlines.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <!-- UI Style guide -->
      <div data-aos="fade-up" data-aos-duration="2500" class="style-guide">
        <p>UI STYLE GUIDE USING FIGMA</p>
        <img class="style-guide-img" src="@/assets/LVstyleguide.jpg" alt="style-guide">
      </div>



      <!-- Research methods -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>RESEARCH METHODS</p>
        </div>

        <div class="vertical-container">

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="icon">
                <Icon icon="iconoir:multiple-pages" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Competitor Analysis</p>
              </div>
              <div class="goal-text">
                <p>I analyzed existing e-library websites and digital library platforms to understand their strengths,
                  weaknesses, and unique selling points to identify opportunities for differentiation and innovation.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <Icon icon="fluent-mdl2:survey-questions" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>User Surveys</p>
              </div>
              <div class="goal-text">
                <p>I conducted online surveys to gather quantitative data about users' habits, preferences, and
                  satisfaction with existing e-library platforms. The surveys helped to identify pain points and areas for
                  improvement.

                </p>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="icon">
                <Icon icon="uit:document-layout-left" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Persona Development</p>
              </div>
              <div class="goal-text">
                <p>Creating user personas to represent different types of user’s helped to better understand their
                  potential motivations and goals for the use of this platform. This gave more insight into user needs and
                  helped design a tailored experience.

                </p>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <Icon icon="bi:phone" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Prototyping and user testing</p>
              </div>
              <div class="goal-text">
                <p>Developing interactive prototypes of the app’s user interface and conducting user testing sessions also
                  helped to gather feedback early in the development process.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>



      <!-- Case study images -->
      <div data-aos="fade-up" data-aos-duration="2500" class="style-guide">
        <!-- <p>EXTRACTS FROM RESEARCH</p> -->
        <img class="style-guide-img" src="@/assets/LVcasestudyimages.jpg" alt="style-guide">
      </div>

      <!-- Design -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>DESIGN</p>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
          <p>Through my research, I observed that the primary goal of a library is to offer access to books for anyone
            interested. However, I recognized that to truly fulfill this purpose, the library's setting and environment
            play a crucial role, just as its functionality does. With this design, I aimed to create a clean and efficient
            interface that cuts to the chase, providing users with a well-designed platform that fosters a conducive and
            inviting environment for their exploration and learning experience.
          </p>
        </div>
      </div>
    </div>

    <!-- Design previews -->
    <div class="phone-preview-template">
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <img class="website-preview-image1and2" src="@/assets/LVwebsitepreview1.gif" alt="">
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <p class="phone-preview-template-title">Landing</p>
        <div class="phone-preview-template-text">
          <p>The onboarding screens in our e-learning application serve as the user's initial gateway to a world of
            knowledge. These screens welcome newcomers to an engaging
            introduction to the app's. Through captivating visuals and brief explanations as well as an easy to use
            interface that was designed to convey the setting of a notepad, users quickly grasp
            how the app will transform their learning journey. With an emphasis on simplicity and clarity, the onboarding
            screens establish a strong foundation for users to explore the application in detail</p>
        </div>
      </div>

    </div>
    <div class="phone-preview-template-reverse">
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <img class="website-preview-image1and2" src="@/assets/LVwebsitepreview2.gif" alt="">
      </div>
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <p class="phone-preview-template-title-reverse">Onboarding</p>
        <div class="phone-preview-template-text-reverse">
          <p>Upon logging in, users are greeted with a visually appealing dashboard that
            offers a snapshot of their current courses, progress, and upcoming assignments. The layout ensures
            that users can easily navigate between courses, access resources, and track their academic achievements. With
            a design that was built upon organization and accessibility, the dashboard screen becomes an indispensable
            tool for
            users to manage their e-learning journey quickly and effectively.</p>
        </div>
      </div>

    </div>
    <div class="phone-preview-template">
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <img class="website-preview-image3and4" src="@/assets/LVwebsitepreview3.gif" alt="">
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <p class="phone-preview-template-title">Reading now</p>
        <div class="phone-preview-template-text">
          <p>The schedule page is the user's compass for effective time management within our e-learning application.
            Designed with practicality in mind, this page offers users a visual representation of their course schedules,
            deadlines,personal timetable and upcoming events. Here, users can effortlessly organize their academic
            commitments, set reminders, and plan their learning journey strategically. The schedule page empowers users to
            maintain a balanced and productive academic routine, ensuring they make the most of their e-learning.
            experience.</p>
        </div>
      </div>

    </div>
    <div class="phone-preview-template-reverse">
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <img class="website-preview-image3and4" src="@/assets/LVwebsitepreview4.gif" alt="">
      </div>
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <p class="phone-preview-template-title-reverse">Book store</p>
        <div class="phone-preview-template-text-reverse">
          <p>The academics page is where the essence of our e-learning application truly comes to life. This page hosts a
            variety of course materials, including interactive lectures, downloadable resources,past-quizzes, and
            assignments. Here, users can access course content, engage in
            learning activities, and track their progress. The academics page is thoughtfully designed to
            accommodate different learning styles, ensuring that users can absorb knowledge in the way that resonates best
            with them.</p>

        </div>
      </div>

    </div>

    <!-- conclusion -->
    <div class="template">
      <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
        <p>CONCLUSION</p>
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
        <p>To wrap it up, turning our idea into reality has been truly amazing. We've been super focused on what our users
          need and making sure everything is top-notch. Our approach has resulted in the design of an interface that
          effortlessly links students with loads of educational resources.
        </p>
      </div>
    </div>


    <footer data-aos="fade" data-aos-duration="2500">
      <router-link to="/ndaauth/techeats">
        <div class="next-project">
          <p class="next-project-text1">Next project</p>
          <p class="next-project-text2">TechEats</p>
          <div
            style="display: flex; align-items: center; justify-content: center; width: 60px; height: 60px; border-radius: 100%; border: 2px solid rgba(53, 53, 53, 0.40); margin-top: -8px;">
            <Icon icon="fluent:arrow-up-16-regular" color="rgba(53, 53, 53, 0.40)" width="28" :rotate="1" />
          </div>
        </div>
      </router-link>
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
    <ScrollToTop></ScrollToTop>
</template>
  
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import NavBarMobile from '@/components/NavBarMobile.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import { Icon } from '@iconify/vue';

export default {
  name: 'LibraVue',
  components: {
    NavBar, Icon, NavBarMobile,ScrollToTop
  },
  data() {
    return {
      mobileView: true,
      showNav: false,
    }
  },
  methods: {
    handleMobileNav() {
      this.mobileView = window.innerWidth <= 768;
    }
  },
  created() {
    this.handleMobileNav();
  },
}
</script>
  
<style scoped>

/* Navbar styles */
.navbar {
  margin: 0 auto;
  width: 1290px;
}


/* Landing page styles */
.landing {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 210px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.65) 100%), url('@/assets/libraVuelandingimage.jpg'), lightgray;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
}


.landing-title {
  display: flex;
  flex-direction: column;
  align-items: center;
}


.project-caption {
  color: #FFF;
  font-family: Rakkas;
  font-size: 56px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.project-case {
  color: #FFF;
  font-family: Red Hat Display;
  font-size: 28px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}

.summary {
  display: flex;
  width: 1290px;
  justify-content: space-between;
  align-items: center;
}

.summary-text {
  color: #FFF;
  font-family: Red Hat Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.summary-text-span {
  color: #FFF;
  font-family: Red Hat Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  margin-right: 30px;
}


/* Project details section styles */
.project-details {
  width: 100%;
}

.HHimagepreviews {
  max-width: 85%;
  display: flex;
  align-items: center;
  margin: 64px auto;

}

.HHimagepreview {
  max-width: 100%;

}

.template {
  max-width: 1290px;
  display: flex;
  margin: 200px auto;
  gap: 380px;
}

.template-title {
  color: #353535;
  font-family: Rakkas;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 620px;
}

.template1-text {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 760px;
}

.vertical-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 500px;
}

.horizontal-container {
  display: flex;
  gap: 100px;
  margin-bottom: 32px;
}

.goal-number {
  display: flex;
  font-family: Red Hat Display;
  font-weight: 600;
  border: 2px solid #353535;
  display: flex;
  width: 28px;
  height: 32px;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
}

.goal-header {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 240px;
  margin-bottom: 4px;
}

.goal-text {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  width: 240px;
}


.style-guide {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.style-guide p {
  color: #353535;
  font-family: Rakkas;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 61.6px;
}

.style-guide-img {
  width: 100%;
}

.icon {
  margin-bottom: 16px;
}

ul {
  list-style: none;
}

ul li::before {
  content: "•";
  color: #353535;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
  margin-left: -16px;
  position: absolute;
}

.website-preview-image1and2 {
    width: 880px;
  }

  .website-preview-image3and4 {
    width: 880px;
  }

.phone-preview-template {
  max-width: 90%;
  display: flex;
  margin: 200px auto;
  gap: 200px;
  align-items: center;
}


.phone-preview-template-title {
  color: #353535;
  font-family: Rakkas;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: right;
  margin-bottom: 16px;
}

.phone-preview-template-text {
  color: #353535;
  text-align: right;
  font-family: Red Hat Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 360px;

}

.phone-preview-template-reverse {
  max-width: 90%;
  display: flex;
  flex-direction: row-reverse;
  margin: 200px auto;
  gap: 200px;
  align-items: center;
}

.phone-preview-template-text-reverse {
  color: #353535;
  text-align: left;
  font-family: Red Hat Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 360px;

}

.phone-preview-template-title-reverse {
  color: #353535;
  font-family: Rakkas;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
  margin-bottom: 16px;
}

/* Footer styles */
footer {
  background: #E6E6E6;
  max-width: 100vw;
  height: 350px;
  padding-top: 58px;
  position: relative;
}

.next-project {
  margin: 0 auto;
  width: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 1;
  transition: all 0.2s ease-in-out;
}

.next-project:hover {
  margin: 0 auto;
  width: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
}

.next-project-text2 {
  color: #353535;
  font-family: Rakkas;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -16px;
}

.next-project-text1 {
  color: rgba(53, 53, 53, 0.40);
  font-family: Red Hat Display;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.icon-div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 2px solid rgba(53, 53, 53, 0.40);
  margin-top: -8px;
  padding-top: 10px;
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


/* MEDIA QUERIES */
/* Extra Extra Large Devices (Large Desktops and Widescreens): */
@media (min-width: 1201px) and (max-width: 1460px) {

  /* Navbar styles */
  .navbar {
    margin: 0 auto;
    width: 1090px;
  }

  .summary {
    display: flex;
    width: 1090px;
    justify-content: space-between;
    align-items: center;
    /* margin: 500px auto; */
  }

  .template {
    width: 1090px;
    display: flex;
    margin: 200px auto;
    gap: 180px;
  }

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 280px;
  }

  .phone-preview-template {
    max-width: 1090px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 50px;
    align-items: center;
  }

  .website-preview-image1and2 {
    width: 1000px;
  }

  .website-preview-image3and4 {
    width: 880px;
  }

  .phone-preview-template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 1090px;
    margin-bottom: 16px;
  }

  .phone-preview-template-text {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 1090px;

  }

  .phone-preview-template-reverse {
    max-width: 1090px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 50px;
    align-items: center;
  }

  .phone-preview-template-title-reverse {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 16px;
    width: 1090px;
  }




  .phone-preview-template-text-reverse {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 1090px;

  }

  .end {
    display: flex;
    margin: 72px auto 24px;
    justify-content: space-between;
    align-items: center;
    width: 1090px;

  }
}




/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {

  /* Navbar styles */
  .navbar {
    margin: 0 auto;
    width: 890px;
  }

  .landing {
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.65) 100%), url('@/assets/libraVuelandingimage.jpg'), lightgray;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  position: relative;
}

  .project-caption {
    color: #FFF;
    font-family: Rakkas;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .project-case {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  .summary {
    display: flex;
    width: 890px;
    justify-content: space-between;
    align-items: center;
  }


  .summary-text {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .summary-text-span {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-right: 16px;
  }

  .template {
    width: 890px;
    display: flex;
    margin: 200px auto;
    gap: 60px;
  }

  .horizontal-container {
    display: flex;
    gap: 40px;
    margin-bottom: 32px;
  }

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 320px;
  }

  .phone-preview-template {
    max-width: 890px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .website-preview-image1and2 {
    width: 800px;
  }

  .website-preview-image3and4 {
    width: 800px;
  }

  .phone-preview-template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 16px;
  }

  .phone-preview-template-text {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 890px;

  }

  .phone-preview-template-reverse {
    max-width: 890px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 50px;
    align-items: center;
  }

  .phone-preview-template-title-reverse {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 16px;
    width: 890px;
  }

  .phone-preview-template-text-reverse {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 890px;

  }

  .end {
    display: flex;
    margin: 72px auto 24px;
    justify-content: space-between;
    align-items: center;
    width: 890px;

  }
}




/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {

  /* Navbar styles */
  .navbar {
    margin: 0 auto;
    width: 690px;
  }

  .landing {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.65) 100%), url('@/assets/libraVuelandingimage.jpg'), lightgray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
  }

  .project-caption {
    color: #FFF;
    font-family: Rakkas;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .project-case {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  .summary {
    display: flex;
    flex-direction: column;
    width: 690px;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }


  .summary-text {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .summary-text-span {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-right: 16px;
  }

  .template {
    width: 690px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px auto;
    gap: 60px;
  }

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 320px;
    text-align: center;
  }

  .template1-text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 690px;
  }

  .vertical-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 690px;
  }

  .horizontal-container {
    display: flex;
    gap: 200px;
    margin-bottom: 32px;
  }



  .phone-preview-template {
    max-width: 690px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 50px;
    align-items: center;
  }

  .website-preview-image1and2 {
    width: 700px;
  }

  .website-preview-image3and4 {
    width: 700px;
  }

  .phone-preview-template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 690px;
    margin-bottom: 16px;
  }

  .phone-preview-template-text {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 690px;

  }

  .phone-preview-template-reverse {
    max-width: 690px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .phone-preview-template-title-reverse {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 16px;
    width: 690px;
  }

  .phone-preview-template-text-reverse {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 690px;

  }


  .next-project-text2 {
    color: #353535;
    font-family: Rakkas;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -16px;
  }

  .next-project-text1 {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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

  /* Navbar styles */
  .navbar {
    margin: 0 auto;
    width: 490px;
  }

  .landing {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/libraVuelandingimage.jpg'), lightgray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    overflow: hidden;
  }

  .project-caption {
    color: #FFF;
    font-family: Rakkas;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .project-case {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  .summary {
    display: flex;
    flex-direction: column;
    width: 490px;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }


  .summary-text {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .summary-text-span {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-right: 16px;
  }

  .template {
    width: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px auto;
    gap: 60px;
  }

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 320px;
    text-align: center;
  }

  .template1-text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 490px;
  }

  .vertical-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 490px;
    align-items: center;
  }

  .horizontal-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
  }



  .phone-preview-template {
    max-width: 490px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .website-preview-image1and2 {
    width: 550px;
  }

  .website-preview-image3and4 {
    width: 550px;
  }

  .phone-preview-template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 490px;
    margin-bottom: 16px;
  }

  .phone-preview-template-text {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 490px;

  }

  .phone-preview-template-reverse {
    max-width: 490px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .phone-preview-template-title-reverse {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 16px;
    width: 490px;
  }

  .phone-preview-template-text-reverse {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 490px;

  }



  .next-project-text2 {
    color: #353535;
    font-family: Rakkas;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -16px;
  }

  .next-project-text1 {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
    margin: 52px auto 24px;
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


  /* Navbar styles */
  .navbar {
    margin: 0 auto;
    width: 470px;
  }

  .landing {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/libraVuelandingimage.jpg'), lightgray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    overflow: hidden;
  }

  .project-caption {
    color: #FFF;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .project-case {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  .summary {
    display: flex;
    flex-direction: column;
    width: 470px;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }


  .summary-text {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .summary-text-span {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-right: 16px;
  }

  .template {
    width: 470px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px auto;
    gap: 60px;
  }

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 320px;
    text-align: center;
  }

  .template1-text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 440px;
  }

  .style-guide p {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 61.6px;
  }

  .vertical-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 470px;
    align-items: center;
  }

  .horizontal-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
  }



  .phone-preview-template {
    max-width: 440px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .website-preview-image1and2 {
    width: 440px;
  }

  .website-preview-image3and4 {
    width: 440px;
  }


  .phone-preview-template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 440px;
    margin-bottom: 16px;
  }

  .phone-preview-template-text {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 440px;

  }

  .phone-preview-template-reverse {
    max-width: 440px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .phone-preview-template-title-reverse {
    color: #353535;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 16px;
    width: 440px;
  }

  .phone-preview-template-text-reverse {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 440px;

  }


  .next-project-text2 {
    color: #353535;
    font-family: Rakkas;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -16px;
  }

  .next-project-text1 {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
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
    margin: 52px auto 24px;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 470px;

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
@media (min-width: 400px) and (max-width: 479px) {

  
  /* Navbar styles */
  .navbar {
    margin: 0 auto;
    width: 380px;
  }

  .landing {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/libraVuelandingimage.jpg'), lightgray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    overflow: hidden;
  }

  .project-caption {
    color: #FFF;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .project-case {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  .summary {
    display: flex;
    flex-direction: column;
    width: 380px;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }


  .summary-text {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .summary-text-span {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-right: 16px;
  }

  .template {
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px auto;
    gap: 60px;
  }

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 320px;
    text-align: center;
  }

  .template1-text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 380px;
  }

  .style-guide p {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 61.6px;
  }

  .vertical-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 380px;
    align-items: center;
  }

  .horizontal-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
  }



  .phone-preview-template {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .website-preview-image1and2 {
    width: 360px;
  }

  .website-preview-image3and4 {
    width: 360px;
  }


  .phone-preview-template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 360px;
    margin-bottom: 16px;
  }

  .phone-preview-template-text {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 360px;

  }

  .phone-preview-template-reverse {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .phone-preview-template-title-reverse {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 16px;
    width: 360px;
  }

  .phone-preview-template-text-reverse {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 360px;

  }


  .next-project {
    margin: 0 auto;
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }

  .next-project:hover {
    margin: 0 auto;
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.6;
  }

  .next-project-text2 {
    color: #353535;
    font-family: Rakkas;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -16px;
  }

  .next-project-text1 {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .icon-div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    border: 2px solid rgba(53, 53, 53, 0.40);
    margin-top: -8px;
    padding-top: 10px;
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
    margin: 40px auto 24px;
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

  
  /* Navbar styles */
  .navbar {
    margin: 0 auto;
    width: 300px;
  }

  .landing {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/libraVuelandingimage.jpg'), lightgray;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    overflow: hidden;
  }

  .project-caption {
    color: #FFF;
    font-family: Rakkas;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }

  .project-case {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  .summary {
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: space-between;
    gap: 8px;
    align-items: center;
  }


  .summary-text {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }

  .summary-text-span {
    color: #FFF;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
    margin-right: 16px;
  }

  .template {
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 200px auto;
    gap: 60px;
  }

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 300px;
    text-align: center;
  }

  .template1-text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 280px;
  }

  .style-guide p {
    color: #353535;
    font-family: Rakkas;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 61.6px;
    text-align: center;
  }

  .vertical-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    max-width: 380px;
    align-items: center;
  }

  .horizontal-container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    margin-bottom: 32px;
  }



  .phone-preview-template {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }


  .website-preview-image1and2 {
    width: 300px;
  }

  .website-preview-image3and4 {
    width: 300px;
  }

  .phone-preview-template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 300px;
    margin-bottom: 16px;
  }

  .phone-preview-template-text {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 300px;

  }

  .phone-preview-template-reverse {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .phone-preview-template-title-reverse {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    margin-bottom: 16px;
    width: 300px;
  }

  .phone-preview-template-text-reverse {
    color: #353535;
    text-align: center;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 300px;

  }

  .next-project {
        margin: 0 auto;
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        opacity: 1;
        gap: 8px;
        transition: all 0.2s ease-in-out;
    }

    .next-project:hover {
        margin: 0 auto;
        width: 300px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
        opacity: 0.6;
    }

    .next-project-text2 {
        color: #353535;
        font-family: Rakkas;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        margin-top: -16px;
    }

    .next-project-text1 {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .icon-div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 100%;
        border: 2px solid rgba(53, 53, 53, 0.40);
        margin-top: -8px;
        padding-bottom: 10px;
    }

    .social-links {
        display: flex;
        flex-direction: column;
        gap: 8px;
        align-items: center;
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
        font-size: 12px;
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
        margin: 42px auto 24px;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
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