AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "A Reinforcement Learning Approach for Continuum Robot Control",
    cardImage: "assets/images/project-page/continuum_rl.png",
    description: "Simulation based Soft Continuum Robot Control via Reinforcement Learning Algorithm",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.researchgate.net/publication/364363862_Master_Thesis",
    Githublink: "https://github.com/turhancan97/RL-based-Control-of-a-Soft-Continuum-Robot",
  },
  {
    title: "BIOBLU Project",
    cardImage: "assets/images/project-page/bioblu-robot.png",
    description: "Project from University of Catania, Italy.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://turhancankargin.com/bioblu-project/",
    Githublink: "https://huggingface.co/spaces/turhancan97/yolov8-orientation",
  },
  {
    title: "RENergetic Project",
    cardImage: "assets/images/project-page/Renergetic.png",
    description: "EU Project which I am involved in as PSNC worker.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.renergetic.eu/",
    Githublink: "https://www.renergetic.eu/",
  },
  {
    title: "Intelligent Face Recognition Attendance System",
    cardImage: "assets/images/project-page/attendance.png",
    description: "This project is a comprehensive face recognition-based attendance system for universities. It leverages OpenCV for face detection and recognition, Firebase for data storage, and Flask for the web interface. The system allows for student registration, face capture, and attendance tracking, providing a modern solution for attendance management.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/turhancan97/Intelligent-Face-Recognition-Attendance-System",
    Githublink: "https://github.com/turhancan97/Intelligent-Face-Recognition-Attendance-System",
  },
  {
    title: "Convolutional Neural Network for Object Tracking",
    cardImage: "assets/images/project-page/object_dete.png",
    description: "In this project, you will find couple of projects that can be helpful to learn Image Processing, Computer Vision, Deep Neural Network, Convolutional Neural Network topics and OpenCV, Tensorflow, Keras, YOLO Frameworks.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/turhancan97/Convolutional-Neural-Network-for-Object-Tracking",
    Githublink: "https://github.com/turhancan97/Convolutional-Neural-Network-for-Object-Tracking",
  },
  {
    title: "Control of Two-wheeled Mobile Robots",
    cardImage: "assets/images/project-page/mobile_robot_dif.png",
    description: "In this project, the aim is to control two-wheeled mobile robot in ROS and MATLAB",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.researchgate.net/publication/365409556_Control_of_Two-Wheeled_Mobile_Robots_Moving_in_Formation",
    Githublink: "https://github.com/turhancan97/Control-of-Two-wheeled-Mobile-Robots",
  },
  {
    title: "Simulation of a Dynamic Flying Object",
    cardImage: "assets/images/project-page/flying_object_3d.png",
    description: "In this project, the aim is to simulate the control of flying robots in a dynamic environments.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/turhancan97/Flying_Robot_Control",
    Githublink: "https://github.com/turhancan97/Flying_Robot_Control",
  },
  {
    title: "Simulation of Artificial Intelligence Applications for Robotics",
    cardImage: "assets/images/project-page/ai_robotics.png",
    description: "In this project, visualization and simulation of Udacity course (AI for Robotics) are available",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/turhancan97/Artificial-Intelligence-for-Robotics",
    Githublink: "https://github.com/turhancan97/Artificial-Intelligence-for-Robotics",
  },
  {
    title: "LLC Resonant Converter for UPS Battery",
    cardImage: "assets/images/project-page/Simulation_Image.PNG",
    description: "High Power Efficiency Design Approach of a LLC Resonant Converter for UPS Battery Charger Application and Battery Charge - Discharge Regression Model",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://www.researchgate.net/publication/347984764_High_Power_Efficiency_Design_Approach_of_an_LLC_Resonant_Converter_for_UPS_Battery_Charger_Application_and_Battery_Charge-Discharge_Regression_Model?_sg=Wm7CB6CKjDUmvzNrU53izU82Ag8is3veHIKvjhLg5k8Gt2oSAqd2dpOLv73vz7MvZxPqBd6ZTUGo7Vp1Tz9Yor7vEBbh45jzAsFzKNbp._CmwG8eJM5cmyu3YOL9jnRjeg4pznV6JcnRhIX05pYLd-B_dHkz0hFRe0A2h4sexXrbK2VIy1_C5z2KqGnd4IQ",
    Githublink: "https://github.com/turhancan97/LLC-Resonant-Converter-and-Battery-Charge-Discharge-Regression-Model",
  },
  {
    title: "Methods of Clustering Single-Cell RNA Sequencing Data",
    cardImage: "assets/images/project-page/singlecell.PNG",
    description: "The goal of the project is to test different clustering algorithms to define cell subpopulation using breast cancer single-cell data.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://www.researchgate.net/publication/348579794_Workflow_for_clustering_of_single-cell_RNA-seq_data_with_dropClust_ABT_data",
    Githublink: "https://github.com/turhancan97/Methods-of-Clustering-Single-Cell-RNA-Sequencing-Data",
  },
  {
    title: "Navigation of a unicycle-like vehicle using dynamic window approach",
    cardImage: "assets/images/project-page/robot.PNG",
    description: "Local motion planning with dynamic window approach on MATLAB",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://www.youtube.com/watch?v=Xq5NMQ2SGNM",
    Githublink: "https://github.com/turhancan97/Navigation-of-a-Unicycle-Like-Vehicle",
  },
  {
    title: "2D and 3D Constant Curvature Kinematics",
    cardImage: "assets/images/project-page/task_space.png",
    description: "Main purpose of this repository is to show 2D and 3D Kinematic Modeling of Constant Curvature Continuum Robots.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/turhancan97/2D-and-3D-Constant-Curvature-Kinematics",
    Githublink: "https://github.com/turhancan97/2D-and-3D-Constant-Curvature-Kinematics",
  },
  {
    title: "Basic Prediction Web App",
    cardImage: "assets/images/project-page/app.PNG",
    description: "This repo aims to make you get started with putting your trained machine learning models into production using Flask API.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/turhancan97/Basic-Prediction-Web-App",
    Githublink: "https://github.com/turhancan97/Basic-Prediction-Web-App",
  },
  {
    title: "Basic Recommendation Web App",
    cardImage: "assets/images/project-page/recom.PNG",
    description: "In this project, a classification model using Support Vector Classification was built. Cleaned and balanced cuisine dataset was used for the classification. In addition, we built a small web app to use a saved model, leveraging Onnx's web runtime.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://github.com/turhancan97/Basic-Recommendation-Web-App",
    Githublink: "https://github.com/turhancan97/Basic-Recommendation-Web-App",
  },
  {
    title: "Artificial Neural Network based Mobile Robot Control",
    cardImage: "assets/images/project-page/temp.PNG",
    description: "In this project, our aim is to use neural network to control mobile robot. The robot will follow the light source. The robot has three sensors and each sensor has a range which can detect the light source.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "https://github.com/turhancan97/Artificial-Neural-Network-based-Mobile-Robot-Control",
    Githublink: "https://github.com/turhancan97/Artificial-Neural-Network-based-Mobile-Robot-Control",
  },
  {
    title: "Neural Networks on Letter and Image Recognition Using Matlab Program",
    cardImage: "assets/images/project-page/image_rec.PNG",
    description: "Laboratory of Basics of Smart System",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://github.com/turhancan97/Neural-Network-Training-on-Matlab",
    Githublink: "https://github.com/turhancan97/Neural-Network-Training-on-Matlab",
  },
  {
    title: "Turkish Super League Football Teams",
    cardImage: "assets/images/project-page/Proje_Resmi.PNG",
    description: "The aim of the project is to design a short animation on Proteus using a GLCD and PIC18F45K22 microprocessor.",
    tagimg: "--",
    Previewlink: "https://github.com/turhancan97/Turkish-Super-League-Football-Teams-Project",
    Githublink: "https://github.com/turhancan97/Turkish-Super-League-Football-Teams-Project",
  },
  {
    title: "Climate Change Prediction of Future Temperature",
    cardImage: "assets/images/project-page/temp.PNG",
    description: "Machine Learning Lecture Project.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "https://github.com/turhancan97/Machine-Learning-Project/blob/master/Climate%20Change_Prediction%20of%20Future%20Temperature_Turhan_Ata.pdf",
    Githublink: "https://github.com/turhancan97/Machine-Learning-Project",
  },
  {
    title: "OPC Server Based DC Motor Control with PLC Communication System",
    cardImage: "assets/images/project-page/opc.PNG",
    description:
      "it was developed based on the server-client architecture for the communication of the different controllers. In this project, communication is established between NI Labview 2019 and ABB PM564 PLC using OPC server.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://drive.google.com/file/d/1WGuhrUgb_9PELi5UgAa3iHNXnvPGjkZF/view?usp=sharing",
    Githublink: "https://drive.google.com/file/d/1WGuhrUgb_9PELi5UgAa3iHNXnvPGjkZF/view?usp=sharing",
  },
  {
    title: "Controlling Ac Motor Speed And Direction",
    cardImage: "assets/images/project-page/plc.PNG",
    description: "CONTROLLING AC MOTOR SPEED AND DIRECTION BY USING STM32F4 MICROCONTROLLER WITH MATLAB GRAPHICAL USER INTERFACE",
    tagimg: "--",
    Previewlink: "https://drive.google.com/file/d/1d6WSmG3cvC-XCFtnASq8cETYd1wAXTjc/view?usp=sharing",
    Githublink: "https://drive.google.com/file/d/1d6WSmG3cvC-XCFtnASq8cETYd1wAXTjc/view?usp=sharing",
  },
  
  {
    title: "Number Guessing Game with Python",
    cardImage: "assets/images/project-page/number_interface.PNG",
    description: "This is a simple number guessing game using python and tkinter. This is a small project for beginners to understand functions and basic GUI design using tkinter.",
    tagimg: "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    Previewlink: "https://github.com/turhancan97/Guess-The-Number",
    Githublink: "https://github.com/turhancan97/Guess-The-Number",
  },
  /* 
  {
    title: "Music Recommendation Engine",
    cardImage: "assets/images/project-page/music.jpg",
    description: "Built using Python.",
    tagimg: "https://camo.githubusercontent.com/888e388801f947dec7c3d843942c277af25fe2b1aed1821542c4e711f210312a/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f632f63332f507974686f6e2d6c6f676f2d6e6f746578742e7376672f37363870782d507974686f6e2d6c6f676f2d6e6f746578742e7376672e706e67",
    Previewlink: "",
    Githublink: "",
  },
  */
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tags, Previewlink, Githublink }) => {
      (output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`
      )
    }
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}