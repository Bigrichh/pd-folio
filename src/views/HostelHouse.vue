<template>
        <div class="landing">
            <div class="navbar">
                <NavBarMobile v-if="mobileView" :isDark="true" :isLight="false"></NavBarMobile>
                <NavBar v-if="!mobileView" :isDark="true" :isLight="false"></NavBar>
            </div>
            <div class="landing-title">
                <p class="project-caption">
                    The best rental property</p>
                <p class="project-case">
                    HOSTEL HOUSE CASE STUDY</p>
            </div>
            <div class="summary">
                <p class="summary-text"><span class="summary-text-span">Role:</span>Co-founder & Product designer</p>
                <p class="summary-text"><span class="summary-text-span">Background:</span>Web and Mobile application</p>
                <p class="summary-text"><span class="summary-text-span">Duration:</span>Feb 2023 - ongoing</p>
            </div>

        </div>

        <div class="project-details">
            <div data-aos="fade-up" data-aos-duration="2500" class="HHimagepreviews">
                <img class="HHimagepreview" src="@/assets/HHimagepreview.jpg" alt="image-preview1">
            </div>

            <!-- Background -->
            <div class="template">
                <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
                    <p>BACKGROUND</p>
                </div>
                <div class="template1-text">
                    <p data-aos="fade-up-left" data-aos-duration="2500" style="margin-bottom: 100px;">During my time in university, I encountered the recurring challenge of
                        arranging future
                        accommodations for the upcoming year. It led me to question the entire process. Why couldn't this
                        process be as straightforward as signing
                        up for classes. Inspired to simplify this process, my colleagues and I collaborated to develop an
                        application to address this specific issue. Taking charge of the design
                        and management, I applied user experience principles to create an aesthetically pleasing and
                        intuitive cross-platform design. Collaborating closely with a team of five skilled web developers,
                        we aimed to deliver the finest user experience possible in a cross-platform solution that combined
                        aesthetic appeal with efficient functionality.. </p>

                    <p data-aos="fade-up-left" data-aos-duration="2500">It all started with a simple problem. Students struggled with the process of finding their stay for
                        the upcoming year. So, we put our heads together and came up with an idea - we came up with Hostel
                        House, a digital service for students to find and book hostels for the academic year. Our main
                        aim was to connect people offering their property (hostels, apartments, hotels, you name it!) for
                        rent with those who needed a place to stay (students and others). While our focus was on students'
                        hostel needs, anyone looking for accommodation was free to use the app. But then came the real
                        challenge. How
                        do we make it happen? How can we create a digital solution that simplifies the hostel-finding
                        experience and make university life a little better? To figure it all out, we needed to truly
                        understand the scope of the problem and the needs of our main users - students. To find the answers,
                        we needed to take time to do the research </p>
                </div>
            </div>

            <!-- UI Style guide -->
            <div data-aos="fade-up" data-aos-duration="2500" class="style-guide">
                <p>UI STYLE GUIDE USING FIGMA</p>
                <img class="style-guide-img" src="@/assets/HHstyleguide.jpg" alt="style-guide">
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
                                <Icon
                                    icon="streamline:money-graph-arrow-increase-ascend-growth-up-arrow-stats-graph-right-grow"
                                    color="#353535" width="32" />
                            </div>
                            <div class="goal-header">
                                <p>Market Research</p>
                            </div>
                            <div class="goal-text">
                                <p>I conducted market research to understand the current landscape of university
                                    accommodation booking
                                    services, market trends, and potential target demographics.
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
                                <p>I proceeded to analyze existing apps and platforms that solved a similar problem to
                                    identify their
                                    strengths, weaknesses, and to find opportunities for differentiation.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

                        <div class="item">
                            <div class="icon">
                                <Icon icon="solar:user-linear" color="#353535" width="32" />
                            </div>
                            <div class="goal-header">
                                <p>User Interviews</p>
                            </div>
                            <div class="goal-text">
                                <p>I then conducted short interviews with students, university administrators, and other
                                    stakeholders to
                                    gather in-depth qualitative feedback on their experiences and requirements for such an
                                    application.
                                </p>
                            </div>
                        </div>

                        <div class="item">
                            <div class="icon">
                                <Icon icon="uit:document-layout-left" color="#353535" width="32" />
                            </div>
                            <div class="goal-header">
                                <p>Persona Development</p>
                            </div>
                            <div class="goal-text">
                                <p>Creating user personas to represent different types of students helped to better
                                    understand their
                                    motivations, goals, and challenges in sorting out their stays each year.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

                        <div class="item">
                            <div class="icon">
                                <Icon icon="bi:phone" color="#353535" width="32" />
                            </div>
                            <div class="goal-header">
                                <p>Prototyping and user testing</p>
                            </div>
                            <div class="goal-text">
                                <p>Developing interactive prototypes of the app's interface and functionality and conducting
                                    usability
                                    testing sessions with students also helped to gather feedback and identify areas for
                                    improvement.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">
                        <div class="template1-text">
                            <p>To figure out the best way to tackle the problem, our team knew we had to dig deep. Maybe the
                                problem
                                wasn't
                                as big as we thought, and people were fine with how things were. So, we hit campus and spent
                                some time
                                asking
                                the right questions to our target audience. Did their answers convince us? See for
                                yourself...</p>
                        </div>
                    </div>
                </div>
            </div>


            <!-- Student feedback -->
            <div data-aos="fade-up" data-aos-duration="2500" class="style-guide" style="margin-bottom: 200px;">
                <p>STUDENT FEEDBACK</p>
                <img class="style-guide-img" src="@/assets/studentfeedback.jpg" alt="interviews">
            </div>

            <!-- Interviews
            <div class="style-guide">
                <p>INTERVIEWS</p>
                <img class="style-guide-img" src="@/assets/interviews.jpg" alt="interviews">
            </div> -->

            <!-- Key Takeaways andProject goals -->
            <div class="template">
                <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
                    <p>KEY TAKEAWAYS & PROJECT GOALS</p>
                </div>

                <div class="vertical-container">

                    <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">
                        <div class="template1-text">
                            <p>That day on campus was eye-opening! Talking to students helped us understand their needs
                                better. We noticed some recurring needs shared by many students – those were the pain points
                                we decided to focus on which in turn helped to shape our project goals.</p>
                        </div>
                    </div>

                    <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

                        <div class="item">
                            <div class="goal-number">
                                <p>1</p>
                            </div>
                            <div class="goal-header">
                                <p>Detailed Dorm Information</p>
                            </div>
                            <div class="goal-text">
                                <p>Students needed comprehensive and accurate information about each hostel, including
                                    amenities,
                                    room types, floor plans, pricing, and availability. Clear and informative descriptions
                                    and visuals were crucial to them.
                                </p>
                            </div>
                        </div>

                        <div class="item">
                            <div class="goal-number">
                                <p>2</p>
                            </div>
                            <div class="goal-header">
                                <p>Real-time Availability and Booking</p>
                            </div>
                            <div class="goal-text">
                                <p>Students also needed up-to-date availability information to view which hostels were
                                    currently open for booking. They needed to be able to book hostels instantly, with a
                                    straightforward and secure booking process.
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
                                <p>Feedback and Ratings</p>
                            </div>
                            <div class="goal-text">
                                <p>A lot of students expressed a need for feedback systems for students to share their
                                    hostel stay
                                    experiences and rate the facilities, to help future students make informed choices.
                                </p>
                            </div>
                        </div>

                        <div class="item">
                            <div class="goal-number">
                                <p>4</p>
                            </div>
                            <div class="goal-header">
                                <p>Roommate Matching</p>
                            </div>
                            <div class="goal-text">
                                <p>Students also needed a roommate matching feature to facilitate compatible roommate
                                    pairing for
                                    the hostels they book based on lifestyle and compatibility criteria.
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
                                <p>Simplified Dorm Booking Process with transparent booking policies</p>
                            </div>
                            <div class="goal-text">
                                <p>We were also guided by the need to create a user-friendly interface that streamlined the
                                    hosel booking process, making it easy for students to search, view, and reserve
                                    available
                                    hostels while also clearly communicating hostel booking policies, cancellation
                                    procedures,
                                    and refund guidelines to ensure students were well-informed about the terms and
                                    conditions of stay at each hostel.
                                </p>
                            </div>
                        </div>

                        <div class="item">
                            <div class="goal-number">
                                <p>6</p>
                            </div>
                            <div class="goal-header">
                                <p>Transparent Pricing and Payment Options</p>
                            </div>
                            <div class="goal-text">
                                <p>Students also required transparent pricing information, including any additional fees,
                                    payment schedules, and refund policies. Also, offering multiple payment options, such as
                                    credit/debit cards or digital wallets was guaranteed to ensure convenience for students.
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
                                <p>Secure Payment and Booking</p>
                            </div>
                            <div class="goal-text">
                                <p>We needed to provide a secure and reliable payment gateway for hassle-free booking and
                                    payment transactions, ensuring the safety of students' financial information.
                                </p>
                            </div>
                        </div>

                        <div class="item">
                            <div class="goal-number">
                                <p>8</p>
                            </div>
                            <div class="goal-header">
                                <p>User Support and Assistance </p>
                            </div>
                            <div class="goal-text">
                                <p>A lot os students expressed concerns of assistance in times of confusion, so we were set
                                    on providing FAQs and responsive customer support services to address students'
                                    inquiries and issues related to the hostel booking process in order to create a positive
                                    user experience.
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>


            <!-- Design -->
            <div class="template">
                <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
                    <p>DESIGN</p>
                </div>
                <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
                    <p>During our visit to campus, we immersed ourselves in conversations with students, truly understanding
                        their experiences and needs. We discovered recurring pain points like complex booking processes,
                        lack of real-time availability updates, and the desire for customizable dorm preferences. Armed with
                        these insights, we were ready to design a hostel booking app that addressed these
                        specific needs. Our clear goals and understanding of our users helped to guide us in creating a
                        seamless and stress-free user interface that enhanced the overall experience for every student who
                        sought out campus accommodations. </p>
                </div>
            </div>
        </div>

        <!-- Design previews -->
        <div data-aos="fade-up" data-aos-duration="2500" class="style-guide">
            <p>WEB APP</p>
            <img class="website-preview-image" src="@/assets/HHwebsitepreview.gif" alt="">
        </div>

        <div class="phone-preview-template">
            <div data-aos="fade-up-right" data-aos-duration="2500">
                <img class="phone-preview-image1" src="@/assets/HHphonepreview1.gif" alt="">
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2500">
                <p class="phone-preview-template-title">Onboarding</p>
                <div class="phone-preview-template-text">
                    <p>As users launch
                        the app for the first time, they are greeted by a series of engaging screens that introduce them to
                        the application. These screens provide a glimpse into the hassle-free and convenient Hostel booking
                        process that awaits them. Through visually appealing graphics and succinct explanations, users
                        quickly grasp the app's value proposition and ease of use, setting the stage for a seamless hostel
                        booking experience.</p>
                </div>
            </div>

        </div>
        <div class="phone-preview-template-reverse">
            <div data-aos="fade-up-left" data-aos-duration="2500">
                <img class="phone-preview-image2" src="@/assets/HHphonepreview2.gif" alt="">
            </div>
            <div data-aos="fade-up-right" data-aos-duration="2500">
                <p class="phone-preview-template-title-reverse">Dashboard and Search</p>
                <div class="phone-preview-template-text-reverse">
                    <p>Upon logging in, users are
                        presented with a dashboard that offers an overview of available hostels. The search
                        screen empowers users to explore an extensive range of hostel options based
                        on their preferences, whether it's location, amenities, or pricing. The intuitive search filters
                        provide a way to narrow down choices and discover the ideal home away from home.</p>
                </div>
            </div>

        </div>
        <div class="phone-preview-template">
            <div data-aos="fade-up-right" data-aos-duration="2500">
                <img class="phone-preview-image3" src="@/assets/HHphonepreview3.gif" alt="">
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2500">
                <p class="phone-preview-template-title">Account settings</p>
                <div class="phone-preview-template-text">
                    <p>The account settings screens put users in control of their hostel booking journey. Here, users can
                        personalize their profiles, manage booking preferences, and review past reservations. Users can
                        update contact information, set notification preferences, and manage
                        payment methods. These screens embody our commitment to user empowerment and convenience,
                        ensuring that users can customize their Hostel booking experience to align with their unique needs
                        and
                        preferences.</p>
                </div>
            </div>

        </div>
        <div class="phone-preview-template-reverse">
            <div data-aos="fade-up-left" data-aos-duration="2500">
                <img class="phone-preview-image4" src="@/assets/HHphonepreview4.gif" alt="">
            </div>
            <div data-aos="fade-up-right" data-aos-duration="2500">
                <p class="phone-preview-template-title-reverse">Hostel page and booking flow</p>
                <div class="phone-preview-template-text-reverse">
                    <p>Diving deeper, each hostel page offers users a comprehensive view of a selected hostel’s details.
                        Rich visuals, informative descriptions, and real-time availability status paint a vivid picture of
                        the hostel's offerings. Users can easily toggle between room types and explore amenities, making
                        informed decisions. Transitioning to the payment screens, users experience a secure and streamlined
                        process. With multiple payment options and transparent pricing breakdowns, users proceed with
                        confidence, knowing their booking is in safe hands.</p>
                </div>
            </div>

        </div>

        <!-- conclusion -->
        <div class="template">
            <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
                <p>CONCLUSION</p>
            </div>
            <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
                <p style="margin-bottom: 32px;">Our case study outlines the design process for a Hostel booking app that
                    aims to
                    improve the way students find and reserve accommodations on campus. </p>
                <p style="margin-bottom: 32px;">Our team's commitment to understanding our users' needs and incorporate UX
                    principles was instrumental in designing a seamless and user-friendly app. The app's clear and intuitive
                    user interface will help guide
                    students through the booking journey, ensuring transparency in policies, easy payment options, and
                    efficient roommate matching for those who prefer to share a room.

                </p>
            </div>
        </div>


        <footer data-aos="fade" data-aos-duration="2500">
            <router-link :to="{ name: 'studyHouse' }">
                <div class="next-project">
                    <p class="next-project-text1">Next project</p>
                    <p class="next-project-text2">Study House </p>
                    <div class="icon-div">
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
import ScrollToTop from '@/components/ScrollToTop.vue'
import NavBarMobile from '@/components/NavBarMobile.vue'
import { Icon } from '@iconify/vue';

export default {
    name: 'HostelHouse',
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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.70) 100%), url('@/assets/hostelHouselandingimage.jpg'), lightgray;
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
    width: 320px;
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

.phone-preview-template {
    max-width: 1290px;
    display: flex;
    margin: 200px auto;
    gap: 250px;
    align-items: center;
}

.website-preview-image {
    width: 1290px;
}

.phone-preview-image1 {
    width: 480px;
}

.phone-preview-image2 {
    width: 380px;
}

.phone-preview-image3 {
    width: 480px;
}

.phone-preview-image4 {
    width: 400px;
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
    width: 560px;

}

.phone-preview-template-reverse {
    max-width: 1290px;
    display: flex;
    flex-direction: row-reverse;
    margin: 200px auto;
    gap: 320px;
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
    width: 560px;

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
        margin: 200px auto;
        gap: 150px;
        align-items: center;
    }

    .website-preview-image {
        width: 1090px;
    }


    .phone-preview-template-text {
        color: #353535;
        text-align: right;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 460px;

    }

    .phone-preview-template-reverse {
        max-width: 1090px;
        display: flex;
        flex-direction: row-reverse;
        margin: 200px auto;
        gap: 260px;
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
        width: 420px;

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
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.70) 100%), url('@/assets/hostelHouselandingimage.jpg'), lightgray;
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
        /* margin: 500px auto; */
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
        margin: 200px auto;
        gap: 90px;
        align-items: center;
    }

    .website-preview-image {
        width: 890px;
    }

    .phone-preview-image1 {
        width: 440px;
    }

    .phone-preview-image2 {
        width: 340px;
    }

    .phone-preview-image3 {
        width: 440px;
    }

    .phone-preview-image4 {
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
        max-width: 890px;
        display: flex;
        flex-direction: row-reverse;
        margin: 200px auto;
        gap: 150px;
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
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/hostelHouselandingimage.jpg'), lightgray;
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
        gap: 80px;
        align-items: center;
    }

    .website-preview-image {
        width: 690px;
    }

    .phone-preview-image1 {
        width: 440px;
    }

    .phone-preview-image2 {
        width: 340px;
    }

    .phone-preview-image3 {
        width: 440px;
    }

    .phone-preview-image4 {
        width: 360px;
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
        width: 360px;

    }


    .phone-preview-template-text {
        color: #353535;
        text-align: justify;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 360px;

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
        width: 360px;
    }

    .phone-preview-template-text-reverse {
        color: #353535;
        text-align: justify;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 360px;

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
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/hostelHouselandingimage.jpg'), lightgray;
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

    .website-preview-image {
        width: 490px;
    }

    .phone-preview-image1 {
        width: 440px;
    }

    .phone-preview-image2 {
        width: 340px;
    }

    .phone-preview-image3 {
        width: 440px;
    }

    .phone-preview-image4 {
        width: 360px;
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
        width: 360px;

    }


    .phone-preview-template-text {
        color: #353535;
        text-align: justify;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 360px;

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
        width: 360px;
    }

    .phone-preview-template-text-reverse {
        color: #353535;
        text-align: justify;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 360px;

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
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/hostelHouselandingimage.jpg'), lightgray;
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
        width: 400px;
    }

    .style-guide p {
        color: #353535;
        font-family: Rakkas;
        font-size: 32px;
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
        max-width: 470px;
        display: flex;
        flex-direction: column;
        margin: 200px auto;
        gap: 80px;
        align-items: center;
    }

    .website-preview-image {
        width: 470px;
    }

    .phone-preview-image1 {
        width: 420px;
    }

    .phone-preview-image2 {
        width: 320px;
    }

    .phone-preview-image3 {
        width: 420px;
    }

    .phone-preview-image4 {
        width: 340px;
    }


    .phone-preview-template-title {
        color: #353535;
        font-family: Rakkas;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        margin-bottom: 16px;
        width: 360px;

    }


    .phone-preview-template-text {
        color: #353535;
        text-align: justify;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 360px;

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
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-align: center;
        margin-bottom: 16px;
        width: 360px;
    }

    .phone-preview-template-text-reverse {
        color: #353535;
        text-align: justify;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        width: 360px;

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
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/hostelHouselandingimage.jpg'), lightgray;
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

    .website-preview-image {
        width: 380px;
    }

    .phone-preview-image1 {
        width: 400px;
    }

    .phone-preview-image2 {
        width: 300px;
    }

    .phone-preview-image3 {
        width: 380px;
    }

    .phone-preview-image4 {
        width: 320px;
    }


    .phone-preview-template-title {
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


    .phone-preview-template-text {
        color: #353535;
        text-align: justify;
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
        text-align: justify;
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
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/hostelHouselandingimage.jpg'), lightgray;
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
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: 61.6px;
        text-align: center;
    }


    .vertical-container {
        display: flex;
        flex-direction: column;
        gap: 32px;
        max-width: 300px;
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

    .website-preview-image {
        width: 300px;
    }

    .phone-preview-image1 {
        width: 300px;
    }

    .phone-preview-image2 {
        width: 200px;
    }

    .phone-preview-image3 {
        width: 280px;
    }

    .phone-preview-image4 {
        width: 220px;
    }


    .phone-preview-template-title {
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


    .phone-preview-template-text {
        color: #353535;
        text-align: justify;
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
        text-align: justify;
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