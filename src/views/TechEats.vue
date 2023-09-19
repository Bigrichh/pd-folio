<template>
    <div class="landing">
      <div class="navbar">
        <NavBarMobile v-if="mobileView" :isDark="true" :isLight="false"></NavBarMobile>
        <NavBar v-if="!mobileView" :isDark="true" :isLight="false"></NavBar>
      </div>
      <div class="landing-title">
        <p class="project-caption">
          Your meal at your doorstep</p>
        <p class="project-case">
          TECH EATS CASE STUDY</p>
      </div>
      <div class="summary">
        <p class="summary-text"><span class="summary-text-span">Role:</span>Co-founder & Product designer</p>
        <p class="summary-text"><span class="summary-text-span">Background:</span>Mobile application</p>
        <p class="summary-text"><span class="summary-text-span">Duration:</span>June 2023 - ongoing</p>
      </div>

    </div>
    <div class="project-details">
      <div data-aos="fade-up" data-aos-duration="2500" class="TEimagepreviews">
        <img class="TEimagepreview" src="@/assets/TEimgpreview1.jpg" alt="image-preview1">
        <img class="TEimagepreview" src="@/assets/TEimgpreview2.jpg" alt="image-preview2">
        <img class="TEimagepreview" src="@/assets/TEimgpreview3.jpg" alt="image-preview3">
        <img class="TEimagepreview" src="@/assets/TEimgpreview4.jpg" alt="image-preview4">
      </div>

      <!-- Background -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500">
          <p class="template-title">BACKGROUND</p>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
          <p>Life at university can get crazy busy, with early morning classes and late study sessions
            leaving students with limited time to grab meals. Being a student already comes with its own set of
            challenges,
            and who needs the added stress of figuring out how to grab food before breakfast or during super short lunch
            breaks? . So, we came up with Tech Eats, a food delivery app that's not just for students but for anyone who
            wants their favorite food delivered fast and hassle-free with maximum convenience. </p>
        </div>
      </div>

      <!-- Project goals -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>PROJECT GOALS</p>
        </div>

        <div class="vertical-container">

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>1</p>
              </div>
              <div class="goal-header">
                <p>Market expansion</p>
              </div>
              <div class="goal-text">
                <p>To strategically expand the app's availability to new cities or regions to reach a broader customer
                  base.
                  The goal is to increase market reach and drive business growth as well as generate a loyal customer
                  base.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>2</p>
              </div>
              <div class="goal-header">
                <p>Diverse restaurant options</p>
              </div>
              <div class="goal-text">
                <p>Partnership with a wide range of restaurants offering various cuisines to cater to different customer
                  preferences. The goal is to provide users with an extensive selection of food choices to suit their
                  tastes.
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
                <p>Real time order tracking</p>
              </div>
              <div class="goal-text">
                <p>To provide real-time order tracking for customers to monitor the status of their deliveries. The goal
                  is
                  to keep customers informed and engaged throughout the delivery process.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>4</p>
              </div>
              <div class="goal-header">
                <p>Efficient restaurant management</p>
              </div>
              <div class="goal-text">
                <p>To offer a user-friendly restaurant dashboard for partners to manage orders, update menus, and track
                  performance. The goal is to streamline restaurant operations and enhance the partnership experience.
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
                <p>Responsive customer support</p>
              </div>
              <div class="goal-text">
                <p>To provide responsive customer support to address any issues or inquiries promptly. The goal is to
                  ensure
                  excellent customer service and resolve any concerns effectively.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>6</p>
              </div>
              <div class="goal-header">
                <p>Seamless user experience</p>
              </div>
              <div class="goal-text">
                <p>To create an intuitive and user-friendly interface that allows customers to browse restaurants, view
                  menus, customize orders, and place orders with ease. The goal is to ensure a smooth and enjoyable
                  experience for customers throughout the app.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <!-- UI Style guide -->
      <div data-aos="fade-up" data-aos-duration="2500" class="style-guide">
        <p>UI STYLE GUIDE USING FIGMA</p>
        <img class="style-guide-img" src="@/assets/TEstyleguide.jpg" alt="style-guide">
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
                <p>To get started, I gathered data on the market size, demographics, and behavior of potential users to
                  understand the demand for food delivery services in specific areas in our region.
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
                <p>I then analyzed existing food delivery apps to understand their strengths, weaknesses, and unique
                  selling points while identifying opportunities for improvement and differentiation.
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
                <p>Afterwards, the team assisted me in conducting brief one-on-one interviews with potential users,
                  current food delivery app users, and restaurant owners to gain in-depth qualitative feedback.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="icon">
                <Icon icon="uit:document-layout-left" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Persona Development and CJM</p>
              </div>
              <div class="goal-text">
                <p>I then created user personas representing different target audience segments to better understand their
                  motivations, needs, and pain points. I also created customer journey maps to visualize the end-to-end
                  user experience.
                </p>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="icon">
                <Icon icon="system-uicons:hierarchy" color="#353535" width="32" />
              </div>
              <div class="goal-header">
                <p>Information architecture</p>
              </div>
              <div class="goal-text">
                <p>I then used research gathered on IA to organize and structure the app's content, features, and
                  functionalities in a way that makes it intuitive and easy for users to navigate and find what they need.
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

          <!-- <div class="horizontal-container">
            <div class="template1-text">
              <p>In order to better understand the future users of the Tech EATS app, we set up interview sessions with 8
                students and 4 restaurant managers/owners to gain insights on their needs, motivations and frustrations to
                help shape the app solution.</p>
            </div>
          </div> -->
        </div>
      </div>

      <!-- Interviews
      <div class="style-guide">
        <p>INTERVIEWS</p>
        <img class="style-guide-img" src="@/assets/interviews.jpg" alt="interviews">
      </div> -->

      <!-- Key Focus Areas -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>KEY FOCUS AREAS</p>
        </div>

        <div class="vertical-container">

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">
            <div class="template1-text">
              <p>These key focus area questions guided the development and improvement of our app, ensuring that it met
                the
                needs of users and addressed key challenges in the industry.</p>
            </div>
          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>1</p>
              </div>
              <div class="goal-header">
                <p>User experience</p>
              </div>
              <div class="goal-text">
                <ul style="padding-left: 16px;">
                  <li>
                    <p>How can we create an intuitive and user-friendly interface to enhance the overall user experience?
                    </p>
                  </li>
                  <li>
                    <p>What features and functionalities are essential to provide a seamless and enjoyable ordering
                      process?
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>2</p>
              </div>
              <div class="goal-header">
                <p>Restaurant partnerships</p>
              </div>
              <div class="goal-text">
                <ul style="padding-left: 16px;">
                  <li>
                    <p>How can we attract a diverse range of restaurants and cuisines to offer a wide selection to our
                      users?
                    </p>
                  </li>
                  <li>
                    <p>What criteria should we use to select and onboard partner restaurants to ensure quality and
                      reliability?
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>3</p>
              </div>
              <div class="goal-header">
                <p>Delivery efficiency</p>
              </div>
              <div class="goal-text">
                <ul style="padding-left: 16px;">
                  <li>
                    <p>How can we optimize the delivery process to ensure fast and reliable deliveries for customers?
                    </p>
                  </li>
                  <li>
                    <p>What strategies can we implement to reduce delivery times and minimize delays?
                    </p>
                  </li>
                  <li>
                    <p>How can we integrate real-time tracking to keep customers informed about their order status?
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>4</p>
              </div>
              <div class="goal-header">
                <p>Order Customization</p>
              </div>
              <div class="goal-text">
                <ul style="padding-left: 16px;">
                  <li>
                    <p>How can we allow users to customize their orders based on dietary preferences, allergies, and
                      special
                      requests?
                    </p>
                  </li>
                  <li>
                    <p>What options should be provided to make it easy for users to modify their orders according to their
                      preferences?
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>5</p>
              </div>
              <div class="goal-header">
                <p>Payment and security</p>
              </div>
              <div class="goal-text">
                <ul style="padding-left: 16px;">
                  <li>
                    <p>What secure and convenient payment options should be offered to users?
                    </p>
                  </li>
                  <li>
                    <p>How can we ensure the safety of users' financial information during transactions?
                    </p>
                  </li>
                  <li>
                    <p>What measures should be in place to prevent fraudulent activities and protect user data?
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>6</p>
              </div>
              <div class="goal-header">
                <p>Customer support</p>
              </div>
              <div class="goal-text">
                <ul style="padding-left: 16px;">
                  <li>
                    <p>How can we provide responsive and effective customer support to address any issues or inquiries?
                    </p>
                  </li>
                  <li>
                    <p>What channels should be available for users to reach customer support, such as chat, email, or
                      phone?
                    </p>
                  </li>
                  <li>
                    <p>How can we gather feedback from users to continuously improve the app and services?
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>7</p>
              </div>
              <div class="goal-header">
                <p>Marketing</p>
              </div>
              <div class="goal-text">
                <ul style="padding-left: 16px;">
                  <li>
                    <p>What marketing strategies can be employed to attract new users and increase app downloads?
                    </p>
                  </li>
                  <li>
                    <p>How can we incentivize referrals and repeat orders to promote customer retention?
                    </p>
                  </li>
                </ul>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>8</p>
              </div>
              <div class="goal-header">
                <p>Data analytics and insights</p>
              </div>
              <div class="goal-text">
                <ul style="padding-left: 16px;">
                  <li>
                    <p>What key performance indicators (KPIs) should be tracked to measure the success of the app?
                    </p>
                  </li>
                  <li>
                    <p>How can data analytics be used to gain insights into user behavior and preferences, driving
                      data-driven decisions?
                    </p>
                  </li>
                </ul>
              </div>
            </div>

          </div>

        </div>
      </div>

      <!-- Core user needs -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>CORE USER NEEDS</p>
        </div>

        <div class="vertical-container">

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">
            <div class="template1-text">
              <p>Based on the insights gained from addressing these questions, we gained a clear understanding of our
                users’
                needs. We shortlisted 10 core customer needs which helped to guide and direct our design choices. </p>
            </div>
          </div>

          <div data-aos="fade-up-left" data-aos-duration="2500" class="horizontal-container">

            <div class="item">
              <div class="goal-number">
                <p>1</p>
              </div>
              <div class="goal-header">
                <p>User-friendly interface</p>
              </div>
              <div class="goal-text">
                <p>Customers seek an app with an intuitive and easy-to-use interface, allowing them to navigate
                  effortlessly
                  and place orders quickly.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>2</p>
              </div>
              <div class="goal-header">
                <p>Diverse restaurant options</p>
              </div>
              <div class="goal-text">
                <p>Customers desire access to a diverse range of restaurants and cuisines to cater to their different
                  tastes
                  and preferences.
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
                <p>Customization Options</p>
              </div>
              <div class="goal-text">
                <p>Customers appreciate the ability to customize their orders based on dietary preferences, allergies, and
                  personal tastes.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>4</p>
              </div>
              <div class="goal-header">
                <p>Transparent Pricing</p>
              </div>
              <div class="goal-text">
                <p>Customers expect clear and transparent pricing, including item costs, taxes, delivery fees, and any
                  additional charges.
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
                <p>Secure Payment Options</p>
              </div>
              <div class="goal-text">
                <p>Customers require secure and reliable payment methods to protect their financial information during
                  transactions.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>6</p>
              </div>
              <div class="goal-header">
                <p>Real-Time Order Tracking</p>
              </div>
              <div class="goal-text">
                <p>Customers want the ability to track their orders in real-time to know the delivery status and
                  approximate
                  arrival time.
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
                <p>Speed and Timeliness</p>
              </div>
              <div class="goal-text">
                <p>Customers expect timely and fast deliveries to satisfy their cravings promptly, especially during busy
                  days or short lunch breaks.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>8</p>
              </div>
              <div class="goal-header">
                <p>Loyalty and Rewards</p>
              </div>
              <div class="goal-text">
                <p>Customers appreciate loyalty programs and rewards that incentivize repeat orders and offer exclusive
                  benefits.
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
                <p>Responsive customer support</p>
              </div>
              <div class="goal-text">
                <p>Customers value responsive and efficient customer support to address any issues, inquiries, or order
                  discrepancies promptly.
                </p>
              </div>
            </div>

            <div class="item">
              <div class="goal-number">
                <p>10</p>
              </div>
              <div class="goal-header">
                <p>Convenience</p>
              </div>
              <div class="goal-text">
                <p>Customers need a food delivery app that provides a convenient and effortless way to order their
                  favorite
                  meals from a variety of restaurants with just a few taps on their smartphones.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>

      <!-- Case Study Images -->
      <div data-aos="fade-up" data-aos-duration="2500" class="style-guide">
        <img class="style-guide-img" src="@/assets/casestudyimages.jpg" alt="research-images">
      </div>

      <!-- Design -->
      <div class="template">
        <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
          <p>DESIGN</p>
        </div>
        <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
          <p>Having gained valuable insights into our potential customers, their needs, and pain points, we synthesized
            our
            findings and integrated them into the application's design, ensuring a user-centric approach for a seamless
            and
            satisfying experience. </p>
        </div>
      </div>
    </div>

    <!-- Design previews -->
    <div data-aos="fade-up" data-aos-duration="2500" class="style-guide">
      <p>APP WEBSITE</p>
      <img class="website-preview-image" src="@/assets/TEwebsitepreview.gif" alt="">
    </div>

    <div class="phone-preview-template">
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <img class="phone-preview-image" src="@/assets/TEphonepreview1.gif" alt="">
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <p class="phone-preview-template-title">Onboarding</p>
        <div class="phone-preview-template-text">
          <p>The onboarding screens welcome users to the food delivery app with a clean and intuitive design. The first
            screen displays the app's logo and proceeds with a brief introduction, setting the tone for a seamless user
            experience. Next, users are guided through a quick registration process, where they can sign up using their
            email or social media accounts.</p>
        </div>
      </div>

    </div>
    <div class="phone-preview-template-reverse">
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <img class="phone-preview-image" src="@/assets/TEphonepreview2.gif" alt="">
      </div>
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <p class="phone-preview-template-title-reverse">Dashboard and Search</p>
        <div class="phone-preview-template-text-reverse">
          <p>The dashboard and search screens provide users with a range of food
            options tailored to their preferences. The dashboard displays popular restaurants based on the user's location
            and previous orders if any. The search screen allows users to explore specific cuisines, filter by dietary or
            other preferences, and sort restaurants based on ratings and delivery times. A dynamic search bar ensures
            effortless navigation and an efficient way to find their favorite meals.</p>
        </div>
      </div>

    </div>
    <div class="phone-preview-template">
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <img class="phone-preview-image" src="@/assets/TEphonepreview3.gif" alt="">
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <p class="phone-preview-template-title">Account settings</p>
        <div class="phone-preview-template-text">
          <p>The account settings screens put users in full control of their food delivery experience. Users can easily
            manage their profiles, delivery addresses, payment methods, and
            notification preferences. Whether it's updating contact details, adding dietary preferences, or tracking
            loyalty points, the account settings provide a hassle-free and personalized experience, fostering a sense of
            trust and security.</p>
        </div>
      </div>

    </div>
    <div class="phone-preview-template-reverse">
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <img class="phone-preview-image" src="@/assets/TEphonepreview4.gif" alt="">
      </div>
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <p class="phone-preview-template-title-reverse">Restaurant page and order flow</p>
        <div class="phone-preview-template-text-reverse">
          <p>Once users select a restaurant from the search results, they are directed to the restaurant page which
            showcases each menu item in a clean layout. Users can view high-quality images of the
            restaurant's top-rated dishes. A comprehensive menu with detailed descriptions and pricing is provided,
            making it easy for users to explore the restaurant's offerings. Users can also access customer reviews and
            ratings to make informed decisions. A minimal interface allows for effortless customization of their
            orders, with options for special requests or dietary restrictions.</p>
        </div>
      </div>

    </div>
    <div class="phone-preview-template">
      <div data-aos="fade-up-right" data-aos-duration="2500">
        <img class="phone-preview-image" src="@/assets/TEphonepreview5.gif" alt="">
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500">
        <p class="phone-preview-template-title">Real time tracking and delivery ETA</p>
        <div class="phone-preview-template-text">
          <p>Once an order is confirmed, users are continuously informed about the status of their delivery. A live map
            displays the location of the delivery rider in real-time, creating anticipation and excitement for the arrival
            of their food. Estimated delivery time is updated dynamically, keeping users informed about any changes. Push
            notifications also ensure users never miss updates, providing a seamless tracking experience.</p>
        </div>
      </div>

    </div>


    <!-- conclusion -->
    <div class="template">
      <div data-aos="fade-up-right" data-aos-duration="2500" class="template-title">
        <p>CONCLUSION</p>
      </div>
      <div data-aos="fade-up-left" data-aos-duration="2500" class="template1-text">
        <p>Through comprehensive research and a need to put users first, we successfully designed a food delivery app that
          caters to the core needs and preferences of our customers. With a user-friendly interface, diverse restaurant
          options, efficient delivery, and customization capabilities, our app has the potential to provide a convenient
          and delightful experience. This project is in no way a done and dusted deal since much remains to be done. We
          remain committed to continuous improvement, seeking user feedback and staying ahead of industry trends to
          further enhance the app's design and exceed customer expectations. </p>
      </div>
    </div>


    <footer data-aos="fade" data-aos-duration="2500">
      <router-link to="/ndaauth/hostelhouse">
        <div class="next-project">
          <p class="next-project-text1">Next project</p>
          <p class="next-project-text2">Hostel House </p>
          <div class="icon-div">
            <Icon class="icon" icon="fluent:arrow-up-16-regular" color="rgba(53, 53, 53, 0.40)" width="28" :rotate="1" />
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
  name: 'TechEats',
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
    },
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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/techEatslandingimage.jpg'), lightgray;
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
  /* margin: 500px auto; */
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

.TEimagepreviews {
  max-width: 1290px;
  display: flex;
  justify-content: space-between;
  margin: 64px auto;

}

.TEimagepreview {
  width: 246px;

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
  gap: 180px;
  align-items: center;
}

.website-preview-image {
  width: 1290px;
}

.phone-preview-image {
  width: 520px;
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
  gap: 180px;
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
    width: 320px;
  }

  .TEimagepreviews {
    max-width: 1090px;
    display: flex;
    justify-content: space-between;
    margin: 64px auto;

  }

  .TEimagepreview {
    width: 226px;

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

  .phone-preview-image {
    width: 480px;
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
    width: 460px;

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
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/techEatslandingimage.jpg'), lightgray;
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

  .TEimagepreviews {
    max-width: 890px;
    display: flex;
    justify-content: space-between;
    margin: 64px auto;

  }

  .TEimagepreview {
    width: 186px;

  }

  .phone-preview-template {
    max-width: 890px;
    display: flex;
    margin: 200px auto;
    gap: 150px;
    align-items: center;
  }

  .website-preview-image {
    width: 890px;
  }

  .phone-preview-image {
    width: 380px;
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
    /* justify-content: space-between; */
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/techEatslandingimage.jpg'), lightgray;
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

  .TEimagepreviews {
    max-width: 690px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    margin: 64px auto;

  }

  .TEimagepreview {
    width: 236px;

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

  .phone-preview-image {
    width: 380px;
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
    /* justify-content: space-between; */
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/techEatslandingimage.jpg'), lightgray;
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


  .TEimagepreviews {
    max-width: 690px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    margin: 64px auto;

  }

  .TEimagepreview {
    width: 236px;

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

  .phone-preview-image {
    width: 380px;
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
    /* justify-content: space-between; */
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/techEatslandingimage.jpg'), lightgray;
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

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 320px;
  }

  .TEimagepreviews {
    max-width: 690px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    margin: 64px auto;

  }

  .TEimagepreview {
    width: 236px;

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

  .phone-preview-image {
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
    /* justify-content: space-between; */
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/techEatslandingimage.jpg'), lightgray;
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
    font-size: 16px;
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

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 320px;
  }

  .TEimagepreviews {
    max-width: 380px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    margin: 64px auto;

  }

  .TEimagepreview {
    width: 236px;

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
    width: 400px;
  }

  .phone-preview-image {
    width: 370px;
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

  .next-project-text2 {
    color: #353535;
    font-family: Rakkas;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -16px;
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
    /* justify-content: space-between; */
    gap: 160px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url('@/assets/techEatslandingimage.jpg'), lightgray;
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
    text-align: center;
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
    width: 300px;
    justify-content: space-between;
    gap: 8px;
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
    font-size: 16px;
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

  .template-title {
    color: #353535;
    font-family: Rakkas;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 300px;
  }

  .TEimagepreviews {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 64px;
    margin: 64px auto;

  }

  .TEimagepreview {
    width: 236px;

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

  .phone-preview-image {
    width: 280px;
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

  .next-project-text2 {
    color: #353535;
    font-family: Rakkas;
    font-size: 40px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -16px;
  }


  .next-project {
    margin: 0 auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    opacity: 1;
    transition: all 0.2s ease-in-out;
  }

  .next-project:hover {
    margin: 0 auto;
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    opacity: 0.6;
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
    /* padding-bottom: 10px; */
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