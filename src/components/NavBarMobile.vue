<template>
      <div>
        <Contact :contactClicked="cclicked" :hidden="hclicked" @updateProps="updateProps"></Contact>
    </div>
 
    <div :class="{ 'dark-text': isDark, 'light-text': isLight }">
        <div class="mobile-nav">
        <div style="position: absolute;">
            <Contact :contactClicked="cclicked" :hidden="hclicked" @updateProps="updateProps"></Contact>
        </div>
        <div class="mobile-logo">
            <p>RICHMANN</p>
        </div>
        <div class="navigation-icon" @click="toggleShowDropdown">
            <Icon class="icon" v-if="!showDropdown" icon="solar:hamburger-menu-linear"  width="48" />
            <Icon class="icon" v-if="showDropdown" icon="mingcute:close-line"  width="48" />
        </div>
    </div>
    <div class="dropdown" v-show="showDropdown">
        <ul>
            <router-link to="/">
                <li>Projects</li>
            </router-link>

            <router-link :to="{ name: 'about' }">
                <li>About</li>
            </router-link>

            <li @click="toggleContactClicked" style="margin-bottom: 0;">Contact</li>
        </ul>
    </div>
    </div>
   
</template>




<script>
import Contact from '@/components/Contact.vue'
import { Icon } from '@iconify/vue';

export default {
    name: 'NavBarMobile',
    components: {
        Icon, Contact,
    },
    props: {
        isDark: false,
        isLight: true,
    },
    data() {
        return {
            showDropdown: false,
            cclicked: false,
            hclicked: true,
        }
    },

    methods: {
        toggleShowDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        toggleContactClicked() {
            this.cclicked = !this.cclicked
            this.hclicked = !this.hclicked
        },

        updateProps() {
            this.cclicked = !this.cclicked
            this.hclicked = !this.hclicked
        }
    },
}
</script>


<style scoped>
/* Dark text styling */
.light-text a {
    color: #353535;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
}

.light-text .mobile-logo {
    font-family: 'Rakkas', cursive;
    color: #353535;
    font-size: 32px;
    font-style: normal;
    line-height: normal;
    display: inline-block;
}

.light-text .mobile-nav {
    display: flex;
    justify-content: space-between;
    /* max-width: 1290px; */
}

.light-text .dropdown {
    position: sticky;
    z-index: 1;
    left: 1000px;
    right: 34px;
    font-family: 'Red Hat Display', sans-serif;
    color: #353535;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 140px;
    height: fit-content;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 24px;
    border-radius: 10px;
}


.light-text li {
    list-style: none;
    margin: 0 auto 16px;
}
.light-text .icon{
    color:#353535;
}


/* Light text styling */
.dark-text a {
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-decoration: none;
}

.dark-text .mobile-logo {
    font-family: 'Rakkas', cursive;
    color: #fff;
    font-size: 32px;
    font-style: normal;
    line-height: normal;
    display: inline-block;
}

.dark-text .mobile-nav {
    display: flex;
    justify-content: space-between;
    /* max-width: 1290px; */
}

.dark-text .dropdown {
    position: sticky;
    z-index: 1;
    left: 1000px;
    right: 34px;
    font-family: 'Red Hat Display', sans-serif;
    color: #fff;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 140px;
    height: fit-content;
    background-color: rgba(256, 256, 256, 0.2);
    padding: 24px;
    border-radius: 10px;
}


.dark-text li {
    list-style: none;
    margin: 0 auto 16px;
}

.dark-text .icon{
color: #fff;
}




/* MEDIA QUERIES */
/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {

    /* Dark text styling */
    .light-text .mobile-logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
        display: inline-block;
        margin: auto 0px;
    }

    
    .light-text .dropdown {
        position: sticky;
        z-index: 1;
        left: 1000px;
        right: 34px;
        font-family: 'Red Hat Display', sans-serif;
        color: #353535;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: 140px;
        height: fit-content;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 24px;
        border-radius: 10px;
    }

    .light-text a {
        color: #353535;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
    }

    .light-text .icon {
        width: 40px;
    }



    /* Light text styling */
    .dark-text .mobile-logo {
        font-family: 'Rakkas', cursive;
        color: #fff;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
        display: inline-block;
        margin: auto 0px;
    }

    
    .dark-text .dropdown {
        position: sticky;
        z-index: 1;
        left: 1000px;
        right: 34px;
        font-family: 'Red Hat Display', sans-serif;
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: 140px;
        height: fit-content;
        background-color: rgba(256, 256, 256, 0.2);
        padding: 24px;
        border-radius: 10px;
    }

    .dark-text a {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
    }

    .dark-text .icon {
        width: 40px;
    }
}


/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {
    /* Dark text styling */
    .light-text .mobile-logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 24px;
        font-style: normal;
        line-height: normal;
        display: inline-block;
        margin: auto 0px;
    }

    
    .light-text .dropdown {
        position: sticky;
        z-index: 1;
        left: 1000px;
        right: 34px;
        font-family: 'Red Hat Display', sans-serif;
        color: #353535;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: 140px;
        height: fit-content;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 24px;
        border-radius: 10px;
    }

    .light-text a {
        color: #353535;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
    }

    .light-text .icon {
        width: 40px;
    }


    /* Light text styling */
    .dark-text .mobile-logo {
        font-family: 'Rakkas', cursive;
        color: #fff;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
        display: inline-block;
        margin: auto 0px;
    }

    
    .dark-text .dropdown {
        position: sticky;
        z-index: 1;
        left: 1000px;
        right: 34px;
        font-family: 'Red Hat Display', sans-serif;
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: 140px;
        height: fit-content;
        background-color: rgba(256, 256, 256, 0.2);
        padding: 24px;
        border-radius: 10px;
    }

    .dark-text a {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
    }

    .dark-text .icon {
        width: 40px;
    }
}



/*Small Devices (Phones): */
@media (max-width: 480px) {

    /* Dark Text styling */
    .light-text .mobile-logo {
        visibility: hidden;
    }

    .light-text .dropdown {
        position: sticky;
        z-index: 1;
        left: 1000px;
        right: 34px;
        font-family: 'Red Hat Display', sans-serif;
        color: #353535;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: 140px;
        height: fit-content;
        background-color: rgba(0, 0, 0, 0.1);
        padding: 24px;
        border-radius: 10px;
    }

    .light-text a {
        color: #353535;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
    }

    .icon {
        width: 40px;
    }



    /* Light Text styling */
    .dark-text .mobile-logo {
        visibility: hidden;
    }

    .dark-text .dropdown {
        position: sticky;
        z-index: 1;
        left: 1000px;
        right: 34px;
        font-family: 'Red Hat Display', sans-serif;
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        width: 140px;
        height: fit-content;
        background-color: rgba(256, 256, 256, 0.2);
        padding: 24px;
        border-radius: 10px;
    }

    .dark-text a {
        color: #fff;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        text-decoration: none;
    }

    .icon {
        width: 40px;
    }


}
</style>