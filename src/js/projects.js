var thumbStepCounter = require("../assets/images/project-stepCounter-thumb.png");
var thumbQuiz = require("../assets/images/project-quiz-thumb.png");
var thumbPanels = require("../assets/images/project-panels-thumb.jpg");

let data = {
  order: ['stepCounter', 'quiz', 'vuePanels'],
  list: {
    quiz: {
      id: 'quiz',
      label: 'Quiz Platform',
      slats: [
        {
          title: 'project',
          text: "Quiz Platform",
        },
        {
          title: 'client',
          text: 'Various Companies'
        },
        {
          title: 'role',
          text: 'Sole Developer',
        },
        {
          title: 'description',
          text: 'This quiz platform was built to suit the several different needs of Oncology and Lifescience companies at events around the world, engaging hundreds of users per event.<br><br>Websockets allow for guided sessions with live leaderboards and round based play. An OOP JavaScript framework and PHP/MySQL backend power the flexible quiz platform.<br><br>The administrative dashboard gives our clients full control over the game experience and see answer analytics. It is built with scalability in mind to allow for easy quiz management and weighting of questions. A leaderboard updates live to encourage competition.',
        }
      ],
      video: "https://player.vimeo.com/video/413863293",
      thumbnail: thumbQuiz
    },
    stepCounter: {
      id: 'stepCounter',
      label: 'Step Counter',
      slats: [
        {
          title: 'project',
          text: "Step Sensor Experiences",
        },
        {
          title: 'client',
          text: 'Biopharma Companies'
        },
        {
          title: 'role',
          text: 'Lead Developer',
        },
        {
          title: 'description',
          text: 'At international healthcare conferences, booth draw and engagement are some of the biggest concerns for pharmaceutical companies. As the sole developer, I architect, build, and install interactive gamified and charity experiences that draw hundreds of engagements per show.<br><br>Technologies utilized are a Node.js backend, JavaScript frontend, Arduino physical computing, among others. During installation and show, I work face to face with clients to make sure everything the booth experience is to tuned to their liking.',
        }
      ],
      video: "https://player.vimeo.com/video/414288785",
      thumbnail: thumbStepCounter
    },
    vuePanels: {
      id: 'vuePanels',
      label: 'Vue Panels',
      slats: [{
          title: 'project',
          text: 'Vue.js Touch Panels'
        },
        {
          title: 'client',
          text: 'Neuroscience Company'
        },
        {
          title: 'role',
          text: 'Developer'
        },
        {
          title: 'description',
          text: 'The heavily regulated pharmaceutical space calls for frequent and rapid updates to content. When tasked with building two sets of touch panels for an international neurology conference, I reached for the lightweight Vue.js framework.<br><br>Through building usable components, we were able to iterate various designs and copy decks on the fly. Despite the tight timeline, we launched successfuly and had great show engagement.'
        }
      ],
      video: "https://player.vimeo.com/video/414574086",
      thumbnail: thumbPanels
    }
  }
};

export default data;