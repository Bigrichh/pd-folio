<template>
  <div class="navbar">
    <NavBarMobile v-if="mobileView" :isDark="false" :isLight="true"></NavBarMobile>
    <NavBar v-if="!mobileView" :isDark="false" :isLight="true"></NavBar>
  </div>

  <div class="container">
    <div data-aos="fade-up-right" data-aos-duration="2500" class="left-container">
    </div>
    <div data-aos="fade-up-left" data-aos-duration="2500" class="right-container">
      <div class="job-role">
        <p>PRODUCT DESIGNER</p>
      </div>

      <div class="description">
        <p class="greeting">Hey there,</p>
        <p class="text">I'm Richmann, a UI/UX product designer and front-end developer. With a flair for creating stunning
          digital
          experiences, I blend my design skills with coding expertise to bring ideas to life. From wireframing and
          prototyping to crafting interfaces that make users go “Wow!”, I love the challenge of creating user-centered
          designs that not only delight users but align with business goals as well. With rougly two years of experience
          designing and coding, I've had the privilege of working on contract projects as well as freelancing, honing my
          skills
          in
          wireframing, prototyping, and all things user-centered design. I thrive on collaboration, working closely with
          cross-functional teams to deliver seamless and user-friendly designs. So, whether it's sketching out ideas or
          diving into HTML, CSS, and JavaScript, I'm all in for creating engaging experiences that leave users wanting
          more. Check out my portfolio to see my work in action, and let's team up to make the digital world a more
          beautiful and user-friendly place!</p>

        <div class="design-process">

          <p class="text">My design process:</p>

          <div class="process-container">
            <div class="number">
              <p class="heading">1</p>
            </div>
            <div>
              <p class="heading">Digging Deep and Understanding the User</p>
              <p class="text">Before diving into any project, I take the time to understand my customers better. I make
                sure to get to
                truly know them and understand their needs. It’s a very important step to me because my success and the
                success of the customer lies in first building trust and showing my commitment to their long-term success.
                This step is a must-do, and I won't skip it for anything.</p>
            </div>
          </div>

          <div class="process-container">
            <div class="number">
              <p class="heading">2</p>
            </div>
            <div>
              <p class="heading">Creating Kickass User- experiences</p>
              <p class="text">Designing a system isn't just about how things look or work but also about the overall
                structure and architecture. That's why I bring design-thinking into the picture, creating user-centered
                experiences that are backed by solid data. It's all about finding the best solution to a problem that puts
                the user front and center.</p>
            </div>
          </div>

          <div class="process-container">
            <div class="number">
              <p class="heading">3</p>
            </div>
            <div>
              <p class="heading">Making it Beautiful and Functional</p>
              <p class="text">Beauty is subjective, but that won't stop me from creating stunning designs that please the
                eye and engage users. Micro-interactions, motion, and visual design are my secret weapons to captivate
                users and leave them wanting more through killer user interface designs and prototypes.</p>
            </div>
          </div>

          <div class="process-container">
            <div class="number">
              <p class="heading">4</p>
            </div>
            <div>
              <p class="heading">Testing, Tweaking and Improving</p>
              <p class="text">There's nothing quite like the satisfaction of releasing something you've created. But the
                real magic happens when I gather feedback, listen to the customers, and iterate based on their needs. It's
                all about learning from success and failure to create something that truly resonates and keeps getting
                better.</p>
            </div>
          </div>

          <p class="text" style="padding-left: 56px;">In a nutshell, I'm all about diving deep, creating awesome
            experiences, making things look
            great, and constantly learning and improving along the way.</p>
        </div>


        <!-- Skillset section -->
        <div class="design-process">

          <p class="text">My skills:</p>

          <div style="padding-left: 64px; margin:32px 0;">
            <div>
              <ul>
                <li>
                  <p class="heading">User interface design with Figma(primary design tool)</p>
                </li>
                <li>
                  <p class="heading">UX Research</p>
                </li>
                <li>
                  <p class="heading">Wireframing and A/B testing</p>
                </li>
                <!-- <li> -->
                <!-- <p class="heading">Expertise in Saas, Fintech, E-commerce, and Healthcare sectors</p> -->
                <!-- </li> -->
                <li>
                  <p class="heading">Prototype creation and interaction design</p>
                </li>
                <li>
                  <p class="heading">Website, web and mobile application design</p>
                </li>
                <li>
                  <p class="heading">Front-end development : HTML, CSS, Sass, Bootstrap, Tailwind CSS, JavaScript, Vue.js
                  </p>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <!-- tools i use section -->
        <div class="design-process">

          <p class="text">The tools,languages and frameworks i'm able to use:</p>

          <div style="margin:32px auto;">
            <div class="skillsandtoolsimg">
              <img src="@/assets/skillsandtools.jpg" alt="skills-and-tools">
            </div>
          </div>

        </div>
      </div>

      <footer>
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
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import NavBarMobile from '@/components/NavBarMobile.vue'

export default {
  name: 'About',
  components: {
    NavBar,NavBarMobile,
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
.navbar {
  margin: 50px auto 0;
  max-width: 1290px;
}

.container {
  display: flex;
  justify-content: space-between;
  max-width: 1290px;
  margin: 60px auto 30px;
}

.left-container {
  width: 624px;
  height: 580px;
  border-radius: 18px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('@/assets/profileimage.jpg'), lightgray;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;

}

.right-container {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  height: 580px;
  border-radius: 18px 18px 0 0;
  padding-right: 5px;
  gap: 32px;
  scrollbar-width: thin;
  scrollbar-color: #353535 #e6e6e6;
}

.right-container::-webkit-scrollbar {
  width: 4px;
}

.right-container::-webkit-scrollbar-thumb {
  background-color: #353535;
  border-radius: 8px;
}

.right-container::-webkit-scrollbar-thumb:hover {
  background-color: #e6e6e6;
}

.job-role {
  display: flex;
  border-radius: 18px;
  background: #E6E6E6;
  max-width: 630px;
  height: 150px;
  padding: 60px 45px;
  justify-content: center;
  align-items: center;
}

.job-role p {
  color: #353535;
  font-family: Rakkas;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.description {
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  background: #E6E6E6;
  max-width: 630px;
  height: fit-content;
  padding: 40px 80px;
  justify-content: center;
  align-items: left;
}

.description .greeting {
  color: #353535;
  font-family: Rakkas;
  font-size: 48px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.description .text {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.design-process {
  margin-top: 32px;
}

.process-container {
  margin: 32px 0;
  display: flex;
  gap: 24px;
}

.heading {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin: 4px 0 16px;
}

.number {
  border: 2px solid #353535;
  display: flex;
  width: 150px;
  height: 32px;
  padding-top: 12px;
  justify-content: center;
  align-items: center;
  font-family: Red Hat Display;
  font-weight: 600;
}

.skillsandtoolsimg img{
  width: 480px;
  height: 420px;

}


/* Footer styles */
footer {
  background: #E6E6E6;
  max-width: 630px;
  height: 350px;
  padding-top: 58px;
  border-radius: 18px;
}

.cta {
  margin: 0 auto;
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
  width: 300px;
  /* margin: 56px 0 32px 380px; */
}

.social-links p {
  color: #353535;
  font-family: Red Hat Display;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  opacity: 0.4;
  transition: all 0.3s ease-in-out;
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
  /* margin: 56px 0 32px 40px; */
  display: inline-block;
}

.end {
  display: flex;
  margin: 72px auto 24px;
  justify-content: space-between;
  width: 90%;

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






/* MEDIA QUERIES */

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1300px) {


  .navbar {
    margin: 50px auto 0;
    max-width: 940px;
  }

  .container {
    display: flex;
    justify-content: space-between;
    max-width: 940px;
    margin: 80px auto 30px;
  }

  .left-container {
    width: 464px;
    height: 580px;
    border-radius: 18px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('@/assets/profileimage.jpg'), lightgray;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

  }

  .right-container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 460px;
    height: 580px;
    border-radius: 18px 18px 0 0;
    padding-right: 5px;
    gap: 32px;
    scrollbar-width: thin;
    scrollbar-color: #353535 #e6e6e6;
  }


  .job-role {
    display: flex;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 460px;
    height: 150px;
    padding: 60px 30px;
    justify-content: center;
    align-items: center;
  }

  .job-role p {
    color: #353535;
    font-family: Rakkas;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 460px;
    height: fit-content;
    padding: 40px 40px;
    justify-content: center;
    align-items: left;
  }

  .description .greeting {
    color: #353535;
    font-family: Rakkas;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description .text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .design-process {
    margin-top: 32px;
  }

  .process-container {
    margin: 32px 0;
    display: flex;
    gap: 24px;
  }

  .heading {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 4px 0 16px;
  }

  .number {
    border: 2px solid #353535;
    display: flex;
    width: 150px;
    height: 32px;
    padding-top: 12px;
    justify-content: center;
    align-items: center;
    font-family: Red Hat Display;
    font-weight: 600;
  }

  .skillsandtoolsimg img{
    width: 340px;
    height: auto;
  }



  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 630px;
    height: 350px;
    padding-top: 58px;
    border-radius: 18px;
  }

  .cta {
    margin: 0 auto;
    width: 400px;
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
    width: 300px;
    /* margin: 56px 0 32px 380px; */
  }

  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* margin: 56px 0 32px 40px; */
    display: inline-block;
  }

  .end {
    display: flex;
    flex-direction: column;
    margin: 52px auto 24px;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    width: 90%;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
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
    max-width: 700px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 700px;
    margin: 80px auto 30px;
    gap: 40px;
  }

  .left-container {
    width: 700px;
    height: 580px;
    border-radius: 18px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('@/assets/profileimage.jpg'), lightgray;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

  }

  .right-container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 700px;
    height: 580px;
    border-radius: 18px 18px 0 0;
    padding-right: 5px;
    gap: 32px;
    scrollbar-width: thin;
    scrollbar-color: #353535 #e6e6e6;
  }


  .job-role {
    display: flex;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 700px;
    height: 150px;
    padding: 60px 30px;
    justify-content: center;
    align-items: center;
  }

  .job-role p {
    color: #353535;
    font-family: Rakkas;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 700px;
    height: fit-content;
    padding: 40px 40px;
    justify-content: center;
    align-items: left;
  }

  .description .greeting {
    color: #353535;
    font-family: Rakkas;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description .text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .design-process {
    margin-top: 32px;
  }

  .process-container {
    margin: 32px 0;
    display: flex;
    gap: 24px;
  }

  .heading {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 4px 0 16px;
  }

  .number {
    border: 2px solid #353535;
    display: flex;
    width: 150px;
    height: 32px;
    padding-top: 12px;
    justify-content: center;
    align-items: center;
    font-family: Red Hat Display;
    font-weight: 600;
  }

  .skillsandtoolsimg img{
    width: 610px;
    height: auto;
  }



  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 700px;
    height: 350px;
    padding-top: 58px;
    border-radius: 18px;
  }

  .cta {
    margin: 0 auto;
    width: 400px;
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
    width: 300px;
    /* margin: 56px 0 32px 380px; */
  }

  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* margin: 56px 0 32px 40px; */
    display: inline-block;
  }

  .end {
    display: flex;
    margin: 72px auto 24px;
    justify-content: space-between;
    width: 90%;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
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
    max-width: 500px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 500px;
    margin: 80px auto 30px;
    gap: 40px;
  }

  .left-container {
    width: 500px;
    height: 580px;
    border-radius: 18px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('@/assets/profileimage.jpg'), lightgray;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

  }

  .right-container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 500px;
    height: 580px;
    border-radius: 18px 18px 0 0;
    padding-right: 5px;
    gap: 32px;
    scrollbar-width: thin;
    scrollbar-color: #353535 #e6e6e6;
  }


  .job-role {
    display: flex;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 500px;
    height: 150px;
    padding: 60px 30px;
    justify-content: center;
    align-items: center;
  }

  .job-role p {
    color: #353535;
    font-family: Rakkas;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 500px;
    height: fit-content;
    padding: 40px 40px;
    justify-content: center;
    align-items: left;
  }

  .description .greeting {
    color: #353535;
    font-family: Rakkas;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description .text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .design-process {
    margin-top: 32px;
  }

  .process-container {
    margin: 32px 0;
    display: flex;
    gap: 24px;
  }

  .heading {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 4px 0 16px;
  }

  .number {
    border: 2px solid #353535;
    display: flex;
    width: 150px;
    height: 32px;
    padding-top: 12px;
    justify-content: center;
    align-items: center;
    font-family: Red Hat Display;
    font-weight: 600;
  }

  .skillsandtoolsimg img{
    width: 410px;
    height: auto;
  }



  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 500px;
    height: 350px;
    padding-top: 58px;
    border-radius: 18px;
  }

  .cta {
    margin: 0 auto;
    width: 400px;
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
    width: 300px;
    /* margin: 56px 0 32px 380px; */
  }

  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;
  }

  .social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
  }

  .copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* margin: 56px 0 32px 40px; */
    display: inline-block;
  }

  .end {
    display: flex;
    flex-direction: column;
    margin: 52px auto 24px;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    width: 90%;

  }

  a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 14px;
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
    max-width: 400px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 400px;
    margin: 80px auto 30px;
    gap: 40px;
  }

  .left-container {
    width: 400px;
    height: 480px;
    border-radius: 18px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('@/assets/profileimage.jpg'), lightgray;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

  }

  .right-container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 400px;
    height: 580px;
    border-radius: 18px 18px 0 0;
    padding-right: 5px;
    gap: 32px;
    scrollbar-width: thin;
    scrollbar-color: #353535 #e6e6e6;
  }


  .job-role {
    display: flex;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 400px;
    height: 150px;
    padding: 60px 30px;
    justify-content: center;
    align-items: center;
  }

  .job-role p {
    color: #353535;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 400px;
    height: fit-content;
    padding: 40px 40px;
    justify-content: center;
    align-items: left;
  }

  .description .greeting {
    color: #353535;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description .text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .design-process {
    margin-top: 32px;
  }

  .process-container {
    margin: 32px 0;
    display: flex;
    gap: 24px;
  }

  .heading {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 4px 0 16px;
  }

  .number {
    border: 2px solid #353535;
    display: flex;
    width: 150px;
    height: 32px;
    padding-top: 12px;
    justify-content: center;
    align-items: center;
    font-family: Red Hat Display;
    font-weight: 600;
  }

  .skillsandtoolsimg img{
    width: 310px;
    height: auto;
  }



  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 400px;
    height: 350px;
    padding-top: 58px;
    border-radius: 18px;
  }

  .cta {
    margin: 0 auto;
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
    width: 300px;
    /* margin: 56px 0 32px 380px; */
  }

  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;
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
    /* margin: 56px 0 32px 40px; */
    display: inline-block;
  }

  .end {
    display: flex;
    flex-direction: column;
    margin: 72px auto 24px;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    width: 90%;

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


/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {
  .navbar {
    margin: 50px auto 0;
    max-width: 380px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 380px;
    margin: 80px auto 30px;
    gap: 40px;
  }

  .left-container {
    width: 380px;
    height: 480px;
    border-radius: 18px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('@/assets/profileimage.jpg'), lightgray;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

  }

  .right-container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 380px;
    height: 580px;
    border-radius: 18px 18px 0 0;
    padding-right: 5px;
    gap: 32px;
    scrollbar-width: thin;
    scrollbar-color: #353535 #e6e6e6;
  }


  .job-role {
    display: flex;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 380px;
    height: 150px;
    padding: 60px 30px;
    justify-content: center;
    align-items: center;
  }

  .job-role p {
    color: #353535;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 400px;
    height: fit-content;
    padding: 40px 40px;
    justify-content: center;
    align-items: left;
  }

  .description .greeting {
    color: #353535;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description .text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .design-process {
    margin-top: 32px;
  }

  .process-container {
    margin: 32px 0;
    display: flex;
    gap: 24px;
  }

  .heading {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 4px 0 16px;
  }

  .number {
    border: 2px solid #353535;
    display: flex;
    width: 150px;
    height: 32px;
    padding-top: 12px;
    justify-content: center;
    align-items: center;
    font-family: Red Hat Display;
    font-weight: 600;
  }

  .skillsandtoolsimg img{
    width: 310px;
    height: auto;
  }



  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 400px;
    height: 350px;
    padding-top: 58px;
    border-radius: 18px;
  }

  .cta {
    margin: 0 auto;
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
    width: 300px;
    /* margin: 56px 0 32px 380px; */
  }

  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;
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
    /* margin: 56px 0 32px 40px; */
    display: inline-block;
  }

  .end {
    display: flex;
    flex-direction: column;
    margin: 72px auto 24px;
    gap: 16px;
    align-items: center;
    justify-content: space-between;
    width: 90%;

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





/*Extra Small Devices (Phones) */
@media (max-width: 399px) {
  .navbar {
    margin: 50px auto 0;
    max-width: 300px;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 300px;
    margin: 20px auto 30px;
    gap: 40px;
  }

  .left-container {
    width: 300px;
    height: 380px;
    border-radius: 18px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url('@/assets/profileimage.jpg'), lightgray;
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;

  }

  .right-container {
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    width: 300px;
    height: 380px;
    border-radius: 18px 18px 0 0;
    padding-right: 5px;
    gap: 32px;
    scrollbar-width: thin;
    scrollbar-color: #353535 #e6e6e6;
  }


  .job-role {
    display: flex;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 300px;
    height: 50px;
    padding: 60px 10px;
    justify-content: center;
    align-items: center;
  }

  .job-role p {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description {
    display: flex;
    flex-direction: column;
    border-radius: 18px;
    background: #E6E6E6;
    max-width: 400px;
    height: fit-content;
    padding: 40px 20px;
    justify-content: center;
    align-items: left;
  }

  .description .greeting {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .description .text {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .design-process {
    margin-top: 32px;
  }

  .process-container {
    margin: 32px 0;
    display: flex;
    gap: 24px;
  }

  .heading {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 4px 0 16px;
  }

  .number {
    border: 2px solid #353535;
    display: flex;
    width: 150px;
    height: 32px;
    padding-top: 12px;
    justify-content: center;
    align-items: center;
    font-family: Red Hat Display;
    font-weight: 600;
  }

  .skillsandtoolsimg img{
    width: 250px;
    height: auto;
  }



  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 400px;
    height: 350px;
    padding-top: 58px;
    border-radius: 18px;
  }

  .cta {
    margin: 0 auto;
    width: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cta-text {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 16px;
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
    flex-direction: column;
    justify-content: space-between;
    gap: 16px;
    text-align: center;
    /* margin: 56px 0 32px 380px; */
  }

  .social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.3s ease-in-out;
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
    /* margin: 56px 0 32px 40px; */
    display: inline-block;
  }

  .end {
    display: flex;
    flex-direction: column;
    margin: 72px auto 24px;
    justify-content: space-between;
    gap: 16px;
    align-items: center;
    width: 280px;

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