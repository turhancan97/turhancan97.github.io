AOS.init();

//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Jr. Data Scientist",
    cardImage: "assets/images/experience-page/PSNC.jpg",
    place: "Poznan Supercomputing and Networking Center | PSNC |",
    time: "(Mar, 2022 - Now)",
    desp: "<li>Detecting anomalies in the energy consumption based time series data.</li> <li>Forecasting the future values in time series data. </li> <li>Developing a tool for the analysis of the energy consumption of buildings. </li>  <li>Being part of the RENergetic project (www.renergetic.eu). </li> <li> Simulation and analysis of various renewable energy system setups. </li> "
  },
  {
    title: "Erasmus+ Internship",
    cardImage: "assets/images/experience-page/silezya.png",
    place: "Silesian University of Technology",
    time: "(Nov, 2020 - Feb, 2021)",
    desp: "<li>The internship lasted 13 weeks and each week the trainee had specific tasks in the project.</li> <li>The project subject of the intern is Methods Of Clustering Single-Cell RNA Sequencing Data.</li> <li>The trainee has used R programming language to analyze single-cell RNA sequencing data.</li>",
  },
  {
    title: "Mandatory Internship and Graduation Project",
    cardImage: "assets/images/experience-page/tescom.jpg",
    place: "Tescom UPS",
    time: "(Aug 2019 - Jul, 2020)",
    desp: "<li>My graduation project (High Power Efficiency Design Approach of an LLC Resonant Converter for UPS Battery Charger Application and Battery Charge-Discharge Regression Model) is supported by the Scientific and Technical Research Council of Turkey (TUBITAK) under 2209B-Bachelor Final Thesis Focused on Industry Program. Industrial support for my work was provided by Tescom Elektronik A.Ş.</li><li>Besides, I was a production intern at Tescom UPS. I have worked on different sections of the manufacturing such as PCB Typesetting, Card Test, Cabling and Device Test.</li>",
  },
  {
    title: "Working Student",
    cardImage: "assets/images/experience-page/asm.png",
    place: "Deutz Service Group ASM Ex-Proof",
    time: "(Dec, 2019 - Feb, 2020)",
    desp:"<li>Worked on the project for industrial motor, automotive, machinery Ex-Proof products.</li>",
  },
  {
    title: "Mandatory Internship",
    cardImage: "assets/images/experience-page/elpro.png",
    place: "Elpro Energy",
    time: "(Aug, 2019 - Seb, 2019)",
    desp:"<li>Creating bill of quantity of projects, making market and price research for materials.</li><li>Structure of Electrical Installation Design.</li><li>AutoCAD.</li>",
  },
  {
    title: "Optional Internship",
    cardImage: "assets/images/experience-page/maselmak.jpg",
    place: "Maselmak Engineering",
    time: "(Jul, 2017 - Aug, 2017)",
    desp:"<li>Electrical Panel Design (See Electrical)</li><li>Tia Portal</li><li>PLC</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "IEEE",
    cardImage: "assets/images/experience-page/ieee.jpeg",
    description:
      "IEEE Izmir Katip Celebi University Student Branch Treasurer. The treasurer is mainly responsible for control and reporting of the Student Branch’s finances.",
  },
  {
    title: "IEEE PES",
    cardImage: "assets/images/experience-page/pes.jpg",
    description:
      "IEEE Izmir Katip Celebi University Power and Energy Society Vice-Chairman. Vice-Chair’s main role is to support the Chair.",
  },
  {
    title: "IOT Turkey",
    cardImage: "assets/images/experience-page/iot.png",
    description:
      "Editor for ioturkiye.com",
  },
  {
    title: "CybAiR Science Club",
    cardImage: "assets/images/experience-page/cybair.png",
    description:
      "It is a scientific student club at PUT Poznan in the field of Robotics, Automation, Autonomous Vehicles. I am a member here and we are working on different projects.",
  },
  {
    title: "Global AI Hub",
    cardImage: "assets/images/experience-page/gaih.jpg",
    description:
      "Global AI Hub is a non-profit organization that aims to educate and train people in the field of artificial intelligence. I am a Global Core Member and Mentor in this organization.",
  },
  {
    title: "Data Science Earth",
    cardImage: "assets/images/experience-page/data.jpg",
    description:
      "Content Producer for www.datasciencearth.com",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* 
// Hackathon Section - Bu kısma bir şey bul


const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "The Uplift Project",
    subtitle: "Mentor",
    image: "assets/images/experience-page/uplift.png",
    desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
  },
  {
    title: "ULHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/ulhacks.png",
    desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
  },
  {
    title: "WaffleHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/wafflehacks.png",
    desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
  },
  {
    title: "Elevate Tech",
    subtitle: "Judge",
    image: "assets/images/experience-page/elevate.png",
    desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
  },
  {
    title: "PitchTeen",
    subtitle: "Judge",
    image: "assets/images/experience-page/pitchteen.png",
    desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
  },
  {
    title: "Hack-A-Solution",
    subtitle: "Judge",
    image: "assets/images/experience-page/hackasolution.png",
    desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
  },
  {
    title: "UniGlobe Hacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/uniglobe.png",
    desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
  },
  {
    title: "AtlasHacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/atlas.png",
    desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
  },
  {
    title: "NeoHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
  },
  {
    title: "Mission Inspired",
    subtitle: "Judge",
    image: "assets/images/experience-page/mission.png",
    desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
  },
  {
    title: "Hack3",
    subtitle: "Judge",
    image: "assets/images/experience-page/hack3.png",
    desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
  },
  {
    title: "JITHack",
    subtitle: "Mentor",
    image: "assets/images/experience-page/jithack.png",
    desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
  },
  {
    title: "Recess Hacks",
    subtitle: "Mentor",
    image: "assets/images/experience-page/recess.png",
    desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
  },
  {
    title: "Citro Tech",
    subtitle: "Mentor",
    image: "assets/images/experience-page/citro.png",
    desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
  },
  {
    title: "NHacks",
    subtitle: "Judge",
    image: "assets/images/experience-page/nhacks.png",
    desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
  }
  

];
*/
const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp}) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
