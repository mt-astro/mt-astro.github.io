// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-research",
    title: "Research",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "About",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/about/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Journal articles and preprints, newest first.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-conferences-and-workshops",
          title: "Conferences and workshops",
          description: "Talks, conferences, and workshops",
          section: "Navigation",
          handler: () => {
            window.location.href = "/conferences/";
          },
        },{id: "nav-outreach",
          title: "Outreach",
          description: "Outreach activities",
          section: "Navigation",
          handler: () => {
            window.location.href = "/outreach/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "Email and office",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Curriculum vitae",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "conferences-doe-fellows-symposium",
          title: 'DOE Fellows Symposium',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/doe-fellows/";
            },},{id: "conferences-ccapp-fellows-symposium",
          title: 'CCAPP Fellows Symposium',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/ccapp-2022/";
            },},{id: "conferences-supervirtual-2022",
          title: 'SuperVirtual 2022',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/supervirtual-2022/";
            },},{id: "conferences-extreme-black-holes",
          title: 'eXtreme Black Holes',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/extreme-black-holes/";
            },},{id: "conferences-rise-time",
          title: 'Rise Time',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/rise-time/";
            },},{id: "conferences-cataclysmic-variables-and-related-objects-vi",
          title: 'Cataclysmic Variables and Related Objects VI',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/cvs-palermo/";
            },},{id: "conferences-ccapp-fellows-symposium",
          title: 'CCAPP Fellows Symposium',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/ccapp-2023/";
            },},{id: "conferences-transients-down-under",
          title: 'Transients Down Under',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/transients-down-under/";
            },},{id: "conferences-ccapp-fellows-symposium",
          title: 'CCAPP Fellows Symposium',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/ccapp-2024/";
            },},{id: "conferences-florida-type-ia-workshop",
          title: 'Florida Type Ia Workshop',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/florida-snia/";
            },},{id: "conferences-ccapp-fellows-symposium",
          title: 'CCAPP Fellows Symposium',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/ccapp-2025/";
            },},{id: "conferences-the-metal-poor-frontier",
          title: 'The Metal-Poor Frontier',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/metal-poor-frontier/";
            },},{id: "conferences-ccapp-fellows-symposium",
          title: 'CCAPP Fellows Symposium',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/ccapp-2026/";
            },},{id: "conferences-type-ii-supernovae-the-chaotic-deaths-of-supergiants",
          title: 'Type II Supernovae: The Chaotic Deaths of Supergiants',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/snii-rsg/";
            },},{id: "conferences-type-ia-supernova-progenitors-and-cosmology-in-light-of-desi",
          title: 'Type-Ia Supernova Progenitors and Cosmology in Light of DESI',
          description: "",
          section: "Conferences",handler: () => {
              window.location.href = "/conferences/ccapp-snia-2026/";
            },},{id: "projects-galex-and-gphoton",
          title: 'GALEX and gPhoton',
          description: "New science with the GALEX UV photon archive",
          section: "Projects",handler: () => {
              window.location.href = "/research/galex/";
            },},{id: "projects-low-surface-brightness",
          title: 'Low Surface Brightness',
          description: "The low surface brightness sky with a decade of ASAS-SN",
          section: "Projects",handler: () => {
              window.location.href = "/research/low-surface-brightness/";
            },},{id: "projects-rare-and-exotic-transients-with-scat",
          title: 'Rare and Exotic Transients with SCAT',
          description: "Rare supernovae, tidal disruption events, interstellar objects, and more",
          section: "Projects",handler: () => {
              window.location.href = "/research/rare-and-exotic-transients/";
            },},{id: "projects-type-ia-supernovae",
          title: 'Type Ia Supernovae',
          description: "The progenitors and origins of Type Ia supernovae",
          section: "Projects",handler: () => {
              window.location.href = "/research/type-ia-supernovae/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%75%63%6B%65%72.%39%35%37@%6F%73%75.%65%64%75", "_blank");
        },
      },{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/cv.pdf", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
