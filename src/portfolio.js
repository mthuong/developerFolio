/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Tom Nguyen",
  title: "Hi all, I'm Thường (Tom) Nguyễn",
  subTitle: emoji(
    "A passionate Software Developer 🚀 having an experience of building Mobile applications with iOS, React Native, Flutter and Web with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/19s2iC8Sqzn0YuRFUMC4nLKtuYcACofOd/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mthuong",
  linkedin: "https://www.linkedin.com/in/thuong-nguyen-manh/",
  gmail: "nguyenmanhthuong41@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/741291/mthuong",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "DEVELOP SOFTWARE, COLLABORATE WITH OTHERS AND LEARN NEW THINGS EVERY DAY",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces mobile applications"
    ),
    emoji("⚡ Develop back-end and front-end for web applications"),
    emoji("⚡ Integration of third party services such as Firebase"),
    emoji("⚡ Continuous Integration/Delivery with Jenkins, CircleCI and more")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "XCode",
      icon: require("./assets/images/skills/xcode.png"),
      url: "https://developer.apple.com/xcode/"
    },
    {
      skillName: "Swift",
      icon: require("./assets/images/skills/swift.png"),
      url: "https://developer.apple.com/swift/"
    },
    {
      skillName: "SwiftUI",
      icon: require("./assets/images/skills/swiftui.png"),
      url: "https://developer.apple.com/xcode/swiftui/"
    },
    {
      skillName: "React Native",
      icon: require("./assets/images/skills/react-native.png"),
      url: "https://reactnative.dev/"
    },
    {
      skillName: "Flutter",
      icon: require("./assets/images/skills/flutter.png"),
      url: "https://flutter.dev/",
      height: 60,
      width: "auto"
    },
    {
      skillName: "ReactJS",
      icon: require("./assets/images/skills/react-native.png"),
      url: "https://reactjs.org/"
    },
    {
      skillName: "NextJS",
      icon: require("./assets/images/skills/nextjs.png"),
      url: "https://nextjs.org/"
    },
    {
      skillName: "NodeJS",
      icon: require("./assets/images/skills/nodejs.png"),
      url: "https://nodejs.org/",
      height: 60,
      width: "auto"
    },
    {
      skillName: "NestJS",
      icon: require("./assets/images/skills/nestjs.png"),
      url: "https://nestjs.com/"
    },
    {
      skillName: "TypeScript",
      icon: require("./assets/images/skills/typescript.png"),
      url: "https://www.typescriptlang.org/"
    },
    {
      skillName: "Javascript",
      icon: require("./assets/images/skills/javascript.png"),
      url: "https://www.javascript.com/"
    },
    {
      skillName: "Selenium",
      icon: require("./assets/images/skills/selenium.png"),
      url: "https://www.selenium.dev/"
    },
    {
      skillName: "Firebase",
      icon: require("./assets/images/skills/firebase.png"),
      url: "https://firebase.google.com/"
    },
    {
      skillName: "Jenkins",
      icon: require("./assets/images/skills/jenkins.png"),
      url: "https://www.jenkins.io/",
      height: 60,
      width: "auto"
    },
    {
      skillName: "CircleCI",
      iconDark: require("./assets/images/skills/circle-ci-white.png"),
      icon: require("./assets/images/skills/circle-ci-black.png"),
      url: "https://circleci.com/",
      height: 60,
      width: "auto"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "HCMC University of Technology and Education",
      logo: require("./assets/images/hcmute.png"),
      subHeader: "The Degree of Bachelor in Information Technology",
      duration: "September 2006 - April 2011",
      desc: "",
      descBullets: [
        "Some courses: Computer Science, Data Structure and Algorithms, Databases Systems, Web Development, Object Oriented Programming, Artificial Intelligence, Information Security",
        "Teaching Assistant for Web Development"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "iOS App Development", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Front-end web application",
      progressPercentage: "75%"
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Android App Development",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Mobile team leader / Mobile developer",
      company: "ItAds",
      url: "https://itads.net/",
      companylogo: require("./assets/images/companies/itads.png"),
      date: "Oct 2019 – Present",
      desc: "Build best applications for Thailand market",
      descBullets: [
        "Setup Jenkins for auto-deployment mobile applications",
        "Write gray box end-to-end testing and automation library for mobile apps with Detox, Selenium",
        "Integrated automation testing with Jenkins",
        "Write unit test with Jest for React Native application",
        "Setup bitbucket pipeline to run Jest automatically for any Pull request",
        "Review codes",
        "Setup React Native project boilerplate with Typescript, mobx, redux, i18n, react-navigation.",
        "Work with Flutter, NodeJS, ReactJS"
      ]
    },
    {
      role: "Mobile team leader/manager / Mobile developer",
      company: "The App Team",
      url: "https://www.theappteam.com.au/",
      companylogo: require("./assets/images/companies/theappteam.png"),
      date: "July 2017 - Sep 2019",
      desc: "Team Manager - build up a new company.",
      descBullets: [
        "Mobile Team Leader. Mobile Developer",
        "Successfully build up a new company at the beginning",
        "Planned, supervised, and coordinated daily activity of Vietnam team and Australia team",
        "React Native developer",
        "iOS Mobile Application developer"
      ]
    },
    {
      role: "General Manager / Team Leader / Mobile Developer",
      company: "Kerofrog",
      url: "https://twitter.com/kerofrogapps",
      companylogo: require("./assets/images/companies/kerofrog.jpg"),
      date: "May 2015 - July 2017",
      // desc: "Build up a new company",
      descBullets: [
        "Build up a new company",
        "Training team member",
        "Build iOS Mobile application"
      ]
    },
    {
      role: "Senior Mobile Developer",
      company: "Vinasource",
      url: "https://www.facebook.com/PoetaVietnam",
      companylogo: require("./assets/images/companies/vinasource.png"),
      date: "Nov 2012 – Jun 2015",
      // desc: "Main responsible for iOS mobile project",
      descBullets: [
        "Main responsible for iOS mobile project",
        "Guide new junior member"
      ]
    },
    {
      role: "Mobile Developer",
      company: "TMA Solution",
      url: "https://www.tma.vn/",
      companylogo: require("./assets/images/companies/tma.jpeg"),
      date: "Jan 2011 – Nov 2012",
      // desc: "Main responsible for iOS mobile project",
      descBullets: [
        "Develop new application base on requirement with iOS Objective-C",
        "Write unit test"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "IF YOU WANT TO DISCUSS ANYTHING, CONTACT ME AT ONE OF THESE SOCIAL MEDIA BELOW",
  email_address: "nguyenmanhthuong41@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "mthuong", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
