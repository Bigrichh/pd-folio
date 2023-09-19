<template>
    <div>
        <Contact :contactClicked="cclicked" :hidden="hclicked" @updateProps="updateProps"></Contact>
    </div>
    <nav :class="{ 'dark-text': isDark, 'light-text': isLight }">
        <div>
            <p class="logo">RICHMANN</p>
        </div>

        <div class="links">
            <router-link to="/">
                <div class="route">
                    <p>Projects</p>
                </div>
            </router-link>

            <router-link :to="{ name: 'about' }">
                <div class="route">
                    <p>About</p>
                </div>
            </router-link>

            <div class="noroute" @click="toggleContactClicked">
                <p>Contact</p>
            </div>
        </div>

    </nav>
</template>




<script>
import Contact from '@/components/Contact.vue'

export default {
    name: 'NavBar',
    props: {
        isDark: false,
        isLight: true,
    },
    components: {
        Contact,
    },
    data() {
        return {
            cclicked: false,
            hclicked: true,
        }
    },

    methods: {
        toggleContactClicked() {
            this.cclicked = !this.cclicked
            this.hclicked = !this.hclicked
        },

        updateProps() {
            this.cclicked = !this.cclicked
            this.hclicked = !this.hclicked
        }
    }
}
</script>


<style scoped>
/* dark text styling */
nav.light-text {
    display: flex;
    justify-content: space-between;
    max-width: 1290px;
}

nav.light-text .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 330px;
}

nav.light-text p.logo {
    font-family: 'Rakkas', cursive;
    color: #353535;
    font-size: 36px;
    font-style: normal;
    line-height: normal;
}

nav.light-text .links p {
    font-family: 'Red Hat Display', sans-serif;
    color: #353535;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

nav.light-text .route {
    opacity: 0.5;
    height: 60%;
    border-bottom: none;
    transition: all 0.15s ease-in-out;
}

nav.light-text .route:hover {
    opacity: 1;
    border-bottom: 3.5px solid #353535;
}

nav.light-text .noroute {
    opacity: 0.5;
    transition: all 0.15s ease-in-out;
}

nav.light-text .noroute:hover {
    opacity: 0.5;
    opacity: 1;
    border-bottom: 3.5px solid #353535;
    cursor: pointer;
}

nav.light-text .active .route {
    opacity: 1;
    border-bottom: 3.5px solid #353535;
}

nav.light-text a {
    text-decoration: none;
}



/* light text styling */
nav.dark-text {
    display: flex;
    justify-content: space-between;
    max-width: 1290px;
}

nav.dark-text .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 330px;
}

nav.dark-text p.logo {
    font-family: 'Rakkas', cursive;
    color: white;
    font-size: 36px;
    font-style: normal;
    line-height: normal;
}

nav.dark-text .links p {
    font-family: 'Red Hat Display', sans-serif;
    color: white;
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}

nav.dark-text .route {
    opacity: 0.8;
    height: 60%;
    border-bottom: none;
    transition: all 0.15s ease-in-out;
}

nav.dark-text .route:hover {
    opacity: 1;
    border-bottom: 3.5px solid white;
}

nav.dark-text .noroute {
    opacity: 0.8;
    transition: all 0.15s ease-in-out;
}

nav.dark-text .noroute:hover {
    opacity: 0.5;
    opacity: 1;
    border-bottom: 3.5px solid white;
    cursor: pointer;
}

nav.dark-text .active .route {
    opacity: 1;
    border-bottom: 3.5px solid white;
}

nav.dark-text a {
    text-decoration: none;
}



/* MEDIA QUERIES */

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {
/* dark text styling */
nav.light-text .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
}

nav.light-text p.logo {
    font-family: 'Rakkas', cursive;
    color: #353535;
    font-size: 32px;
    font-style: normal;
    line-height: normal;
}

nav.light-text .links p {
    font-family: 'Red Hat Display', sans-serif;
    color: #353535;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}



/* light text styling */


nav.dark-text .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
}

nav.dark-text p.logo {
    font-family: 'Rakkas', cursive;
    color: white;
    font-size: 32px;
    font-style: normal;
    line-height: normal;
}

nav.dark-text .links p {
    font-family: 'Red Hat Display', sans-serif;
    color: white;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}
}




/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {
/* dark text styling */
nav.light-text .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
}

nav.light-text p.logo {
    font-family: 'Rakkas', cursive;
    color: #353535;
    font-size: 28px;
    font-style: normal;
    line-height: normal;
}

nav.light-text .links p {
    font-family: 'Red Hat Display', sans-serif;
    color: #353535;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}



/* light text styling */


nav.dark-text .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
}

nav.dark-text p.logo {
    font-family: 'Rakkas', cursive;
    color: white;
    font-size: 32px;
    font-style: normal;
    line-height: normal;
}

nav.dark-text .links p {
    font-family: 'Red Hat Display', sans-serif;
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
}


}



</style>