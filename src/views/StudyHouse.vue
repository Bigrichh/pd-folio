<template>
    <div class="landing">
      <div class="navbar">
        <NavBarMobile v-if="mobileView" :isDark="true" :isLight="false"></NavBarMobile>
        <NavBar v-if="!mobileView" :isDark="true" :isLight="false"></NavBar>
      </div>
      <div class="landing-title">
        <p class="project-caption">
          The academic cheat-code</p>
        <p class="project-case">
          STUDY HOUSE CASE STUDY</p>
      </div>
      <div class="summary">
        <p class="summary-text"><span class="summary-text-span">Role:</span>Co-founder & Product designer</p>
        <p class="summary-text"><span class="summary-text-span">Background:</span>Web and Mobile application</p>
        <p class="summary-text"><span class="summary-text-span">Duration:</span>Mar 2023 - ongoing</p>
      </div>

    </div>

    <div class="project-details">
      <div data-aos="fade-up" data-aos-duration="2500" class="HHimagepreviews">
        <img class="HHimagepreview" style=" width: 80%; margin-left: 50px;" src="@/assets/SHimagepreview.jpg"
          alt="image-preview1">
      </div>

      <!-- Background -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>BACKGROUND</p>
        </div>
        <div class="template1-text">
          <p data-aos="fade-up-left" data-aos-duration="2500" style="margin-bottom: 50px;">Welcome to Study House! I took charge of designing,
            developing, and managing the user interface and experience for both the web and mobile apps in this project.
            But let's dive
            deeper into what Study House is and how it came to be. To answer that, we need to first understand the problem
            at hand... </p>

          <p data-aos="fade-up-left" data-aos-duration="2500" style="margin-bottom: 50px;">We noticed a recurring problem back in university - we lacked
            a centralized platform through which we could
            access study materials, books, and other resources. Everything was scattered across various Google
            drives and cloud storage services, making it difficult to keep up with our learning. It was frustrating when
            suggested textbooks weren't available in the school library, and we had to wait for lecture notes from our
            class reps after each session. We knew there had to be a better way, so we embarked on a mission to fix this
            issue.</p>

          <p data-aos="fade-up-left" data-aos-duration="2500" style="margin-bottom: 50px;">Study House was our brainchild! We thought, why just stop at a website where all
            these resources could be
            organized and accessed? Let's go big and create an app that can do it all! We took the idea further and came
            up with something even better – an all-in-one application to assist students with everything from finding
            course resources and textbooks to time management tools and even a cool social feature for in-app messaging
            and study groups. It was an application with the potential to not only serve students of our university but
            students in schools all over the
            country and beyond if it aligned with their needs.</p>

          <p data-aos="fade-up-left" data-aos-duration="2500">Our challenge was to design an interface that offers access to all these amazing features and functionalities
            to other students. It wasn't really just about how to develop Study House, but what exactly it needed to
            have(the essential features) to become the ultimate companion to students throughout their university journey.
            We had some ideas of what should go into an app like this but we still needed to see if it aligned with the
            needs of other students.
            So, we set out to discover the answers.</p>
        </div>
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
                <Icon icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                  color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Market Research</p>
              </div>
              <div class="goal-text">
                <p>I first gathered data on e-learning trends, user demographics, and preferences to identify potential
                  target markets and understand user needs in the context of the broader industry.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <Icon icon="iconoir:multiple-pages" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Competitor Analysis</p>
              </div>
              <div class="goal-text">
                <p>Analyzing existing e-learning apps and platforms to understand their strengths, weaknesses, and unique
                  selling points also helped to identify opportunities for differentiation in our own app.
                </p>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="icon">
                <Icon icon="fluent:people-community-20-regular" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Focus groups</p>
              </div>
              <div class="goal-text">
                <p>I also organized focus group discussions with a diverse set of student participants to generate
                  collective feedback and ideas about e-learning app features and functionalities.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <Icon icon="fluent-mdl2:survey-questions" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Surveys</p>
              </div>
              <div class="goal-text">
                <p>Conducting online surveys to supplement the knowledge generated from the focus group also helped to
                  gather insights from potential users about their preferences, needs, and expectations related to
                  e-learning apps.
                </p>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="icon">
                <Icon icon="eva:question-mark-outline" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Contextual Inquiry</p>
              </div>
              <div class="goal-text">
                <p>Observing and interviewing potential users in their natural learning environment also helped us gain
                  insights into their learning behaviors, preferences, and pain points.
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


      <!-- Key Takeaways andProject goals -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>CORE USER NEEDS AND FEATURES</p>
        </div>

        <div class="vertical-container">

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">
            <div class="template1-text">
              <p>Our research led us to uncover what students from different faculties pursuing different career paths
                really needed in an app like this. This set the foundation for determining the core features and
                functionalities in the application</p>
            </div>
          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>1</p>
              </div>
              <div class="goal-header">
                <p>Accessible Learning Materials Feature</p>
              </div>
              <div class="goal-text">
                <p>Provide a vast library of easily accessible learning resources, including video lectures, e-books,
                  interactive quizzes, and study guides.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>2</p>
              </div>
              <div class="goal-header">
                <p>Personalized Learning Paths Feature</p>
              </div>
              <div class="goal-text">
                <p>Offer adaptive learning algorithms that assess each user's proficiency and interests, then suggest
                  personalized study paths and content.
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
                <p>Real-Time Progress Tracking Feature</p>
              </div>
              <div class="goal-text">
                <p> Implement a progress tracking dashboard that enables users to monitor their learning journey, track
                  completed courses, and view performance analytics.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>4</p>
              </div>
              <div class="goal-header">
                <p>Peer Collaboration Feature</p>
              </div>
              <div class="goal-text">
                <p>Facilitate discussion forums, study groups, and social networking capabilities to encourage peer
                  interaction and knowledge sharing.
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
                <p>Offline Learning Feature</p>
              </div>
              <div class="goal-text">
                <p>Allow users to download select learning materials and courses for offline access, enabling learning
                  even without an internet connection.
                </p>
              </div>
            </div>

            <div class="item">
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

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>7</p>
              </div>
              <div class="goal-header">
                <p>Multilingual Support Feature</p>
              </div>
              <div class="goal-text">
                <p>Provide content and interface support in multiple languages to cater to diverse global audiences.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>8</p>
              </div>
              <div class="goal-header">
                <p>Expert Support Feature</p>
              </div>
              <div class="goal-text">
                <p>Offer access to qualified instructors, tutors, or mentors through live chat, video conferencing, or
                  scheduled virtual office hours.
                </p>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>9</p>
              </div>
              <div class="goal-header">
                <p>Feedback and Assessment Feature</p>
              </div>
              <div class="goal-text">
                <p>Incorporate assessment tools like quizzes, assignments, and exams with instant feedback, enabling
                  learners to gauge their understanding and progress.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>10</p>
              </div>
              <div class="goal-header">
                <p>Content Curation and Recommendations Feature</p>
              </div>
              <div class="goal-text">
                <p>Utilize machine learning algorithms to curate personalized learning recommendations based on users'
                  preferences and past interactions.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>


      <!-- Case study images -->
      <div data-aos="fade-up" data-aos-duration="2500" class="style-guide">
        <p>EXTRACTS FROM RESEARCH</p>
        <img class="style-guide-img" src="@/assets/SHcasestudyimages.jpg" alt="style-guide">
      </div>

      <!-- Design -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>DESIGN</p>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
          <p>After understanding the needs of different students studying different subjects we put together our findings
            and used it to guide us during the application's design.
          </p>
        </div>
      </div>
    </div>

    <div class="phone-preview-template">
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <img class="website-preview-image12and5" src="@/assets/SHwebsitepreview1.gif" alt="">
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <p class="phone-preview-template-title">Onboarding</p>
        <div class="phone-preview-template-text">
          <p>The onboarding screens in our e-learning application serve as the user's initial gateway to a world of
            knowledge. These screens welcome newcomers to an engaging
            introduction to the application. Through captivating visuals and brief explanations as well as an easy to use
            interface that was designed to convey the setting of a notepad, users quickly grasp
            how the app will transform their learning journey. With an emphasis on simplicity and clarity, the onboarding
            screens establish a strong foundation for users to explore the application in detail</p>
        </div>
      </div>

    </div>
    <div class="phone-preview-template-reverse">
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <img class="website-preview-image12and5" src="@/assets/SHwebsitepreview2.gif" alt="">
      </div>
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <p class="phone-preview-template-title-reverse">Dashboard</p>
        <div class="phone-preview-template-text-reverse">
          <p>Upon logging in, users are greeted with a dashboard that
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
        <img class="website-preview-image3and4" src="@/assets/SHwebsitepreview3.gif" alt="">
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <p class="phone-preview-template-title odd-title">Schedules & Time management</p>
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
        <img class="website-preview-image3and4" src="@/assets/SHwebsitepreview4.gif" alt="">
      </div>
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <p class="phone-preview-template-title-reverse">Academics</p>
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
    <div class="phone-preview-template">
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <img class="website-preview-image12and5" src="@/assets/SHwebsitepreview5.gif" alt="">
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <p class="phone-preview-template-title-reverse">Social media integration</p>
        <div class="phone-preview-template-text-reverse">
          <p>The social media integration page introduces an easy way of connecting users with peers and educators, this
            page
            integrates social features that foster
            collaboration, discussions, and knowledge sharing. Users can participate in course-specific forums,join study
            groups, share
            insights, and engage in meaningful conversations that enhance their understanding of the subject matter. With
            social media integration, our app becomes not just a platform for learning but also a vibrant community for
            intellectual exchange.</p>
        </div>
      </div>

    </div>

    <!-- conclusion -->
    <div class="template">
      <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
        <p>CONCLUSION</p>
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
        <p>In a nutshell, this case study takes you through the journey of designing an e-learning app aimed at making
          university students' academic lives easier. We designed it with students in mind, considering their preferences
          and needs. Along the way, we listened to user feedback and made improvements to ensure a smooth and enjoyable
          experience.
          But wait, the story doesn't end here! We're thrilled to share that the project is well underway, with a planned
          launch expected early next year.
          We'll keep updating the user interface and experience to create an even better learning platform. Our goal is to
          make a positive impact on students' educational journeys, empowering them to excel in their academic pursuits
          and we are truly excited about the future and the opportunities our e-learning app will bring.
        </p>
      </div>
    </div>


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
    <ScrollToTop></ScrollToTop>
</template>
  
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import NavBarMobile from '@/components/NavBarMobile.vue'
import ScrollToTop from '@/components/ScrollToTop.vue'
import { Icon } from '@iconify/vue';

export default {
  name: 'StudyHouse',
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.83) 0%, rgba(0, 0, 0, 0.73) 100%), url('@/assets/studyHouselandingimage.jpg'), lightgray;
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
  max-width: 94%;
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


.website-preview-image12and5 {
  width: 800px;
}

.website-preview-image3and4 {
  width: 780px;
}


.phone-preview-template {
  max-width: 90%;
  display: flex;
  margin: 200px auto;
  gap: 220px;
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

.odd-title {
  width: 360px;
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
  gap: 220px;
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

  .website-preview-image12and5 {
    width: 800px;
  }

  .website-preview-image3and4 {
    width: 780px;
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.83) 0%, rgba(0, 0, 0, 0.73) 100%), url('@/assets/studyHouselandingimage.jpg'), lightgray;
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
    max-width: 690px;
    display: flex;
    flex-direction: column;
    margin: 200px auto;
    gap: 80px;
    align-items: center;
  }

  .website-preview-image12and5 {
    width: 600px;
  }

  .website-preview-image3and4 {
    width: 580px;
  }

  .phone-preview-template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
    width: 390px;
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/studyHouselandingimage.jpg'), lightgray;
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

  .website-preview-image12and5 {
    width: 700px;
  }

  .website-preview-image3and4 {
    width: 680px;
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/studyHouselandingimage.jpg'), lightgray;
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

  .website-preview-image12and5 {
    width: 500px;
  }

  .website-preview-image3and4 {
    width: 480px;
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/studyHouselandingimage.jpg'), lightgray;
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

  .website-preview-image12and5 {
    width: 400px;
  }

  .website-preview-image3and4 {
    width: 380px;
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/studyHouselandingimage.jpg'), lightgray;
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

  .website-preview-image12and5 {
    width: 350px;
  }

  .website-preview-image3and4 {
    width: 330px;
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/studyHouselandingimage.jpg'), lightgray;
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

  .website-preview-image12and5 {
    width: 250px;
  }

  .website-preview-image3and4 {
    width: 230px;
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


  /* Footer styles */
  footer {
    background: #E6E6E6;
    max-width: 100vw;
    height: 350px;
    padding-top: 58px;
    /* position: relative; */
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