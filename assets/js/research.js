/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
    {
        title : "DDPG-based reinforcement learning for controlling a spatial three-section continuum robot",
        authors : "Selman Djeffal, Mohamed Razi Morakchi, Abdelhamid Ghoul, Turhan Can Kargin",
        conferences : "Franklin Open Journal, Elsevier",
        researchYr : 2024,
        citebox : "popup1",
        image : "assets/images/research-page/threedimension.png",
        citation: {
            vancouver: "Djeffal, S., Morakchi, M. R., Ghoul, A., & Kargin, T. C. (2024). DDPG-based reinforcement learning for controlling a spatial three-section continuum robot. Franklin Open, 100077. doi:10.1016/j.fraope.2024.100077"
        },
        abstract: "This paper proposes an approach to controlling a spatial three-section continuum robot using reinforcement learning (RL). Rather than relying on traditional methods that use bending and orientation angles, this study utilizes the curvature of each section to achieve the desired position. The training process involves identifying a 3D workspace for the robot and utilizing a deep neural network to optimize its control policies. The results demonstrate that the robot’s end effector can follow a given trajectory with a maximum error of 1 [1/mm] based on the generated curvature for each section. The Deep Deterministic Policy Gradients (DDPG) algorithm is employed to optimize the robot’s control policies. Additionally, the developed DDPG algorithm is compared to the Deep Q-Network (DQN) from a precision standpoint, particularly during the tracking of a circular trajectory. This comparison highlights the superior accuracy of DDPG in managing the intricate movements required for continuum robotics, making it a promising tool for applications where precision is crucial, such as in medical and surgical robotics.",
        absbox: "absPopup1"
    },
    {
        title : "A Reinforcement Learning Approach for Continuum Robot Control",
        authors : "Turhan Can Kargin and Jakub Kołota",
        conferences : "Journal of Intelligent and Robotic Systems, Springer",
        researchYr : 2023,
        citebox : "popup1",
        image : "assets/images/research-page/robot_figure.png",
        citation: {
            vancouver: "Kargin, T.C., Kołota, J. A Reinforcement Learning Approach for Continuum Robot Control. J Intell Robot Syst 109, 77 (2023). https://doi.org/10.1007/s10846-023-02003-0"
        },
        abstract: "Rigid joint manipulators are limited in their movement and degrees of freedom (DOF), while continuum robots possess a continuous backbone that allows for free movement and multiple DOF. Continuum robots move by bending over a section, taking inspiration from biological manipulators such as tentacles and trunks. This paper presents an implementation of a forward kinematics and velocity kinematics model to describe the planar continuum robot, along with the application of reinforcement learning (RL) as a control algorithm. In this paper, we have adopted the planar constant curvature representation for the forward kinematic modeling. This choice was made due to its straightforward implementation and its potential to fill the literature gap in the field RL-based control for planar continuum robots. The intended control mechanism is achieved through the use of Deep Deterministic Policy Gradient (DDPG), a RL algorithm that is suited for learning controls in continuous action spaces. After simulating the algorithm, it was observed that the planar continuum robot can autonomously move from any initial point to any desired goal point within the task space of the robot. By analyzing the results, we wanted to recommend a future direction for research in the field of continuum robot control, specifically in the application of RL algorithms. One potential area of focus could be the integration of sensory feedback, such as vision or force sensing, to improve the robot’s ability to navigate complex environments. Additionally, exploring the use of different RL algorithms, such as Proximal Policy Optimization (PPO) or Trust Region Policy Optimization (TRPO), could lead to further advancements in the field. Overall, this paper demonstrates the potential for RL-based control of continuum robots and highlights the importance of continued research in this area.",
        absbox: "absPopup1"
    },

    {
        title : "Comparison of Various Reinforcement Learning Environments in the Context of Continuum Robot Control",
        authors : "Turhan Can Kargin and Jakub Kołota",
        conferences : "Robotics and Automation, Motion Planning and Control for Automatic Machines, Robots and Multibody Systems, MDPI",
        researchYr : 2023,
        citebox : "popup2",
        image : "assets/images/research-page/comparison.png",
        citation: {
            vancouver: "Kołota, J.; Kargin, T.C. Comparison of Various Reinforcement Learning Environments in the Context of Continuum Robot Control. Appl. Sci. 2023, 13, 9153. https://doi.org/10.3390/app13169153"
        },
        abstract: "Controlling flexible and continuously structured continuum robots is a challenging task in the field of robotics and control systems. This study explores the use of reinforcement learning (RL) algorithms in controlling a three-section planar continuum robot. The study aims to investigate the impact of various reward functions on the performance of the RL algorithm. The RL algorithm utilized in this study is the Deep Deterministic Policy Gradient (DDPG), which can be applied to both continuous-state and continuous-action problems. The study’s findings reveal that the design of the RL environment, including the selection of reward functions, significantly influences the performance of the RL algorithm. The study provides significant information on the design of RL environments for the control of continuum robots, which may be valuable to researchers and practitioners in the field of robotics and control systems.",
        absbox: "absPopup2"
    },

    {
        title : "Planning data center waste heat re-use in a university campus - a case study and software tools",
        authors : "Jakub Adamski, Radosław Górzeński, Turhan Can Kargin, Łukasz Malewski, Ariel Oleksiak, and Franciszek Sidorski",
        conferences : "International Workshop on Energy-Efficient Data Centres",
        researchYr : 2023,
        citebox : "popup3",
        image : "assets/images/research-page/renergetic.png",
        citation: {
            vancouver: "Adamski, J.; Górzenski, R.; Kargin, T.C.; Malewski, L.; Oleksiak, A.; Sidorski, F. Planning Data Center Waste Heat Re-Use in a University Campus - a Case Study and Software Tools. In Proceedings of the Companion Proceedings of the 14th ACM International Conference on Future Energy Systems; Association for Computing Machinery: New York, NY, USA, 2023; e-Energy’23 Companion, p. 98–105. https://doi.org/10.1145/3599733.3600256."
        },
        abstract: "Data centers are huge energy consumers but also a source of significant amounts of waste heat. Within this paper we present approach to re-use the data center waste heat both locally and in connection to a district heating network. The heat re-use design and analysis process is supported by the methodology and software tools developed by the RENergetic project. The analysis is performed based on a case study of the university campus and a data center located in a close neighbourhood.",
        absbox: "absPopup3"
    },

    {
        title : "High Power Efficiency Design Approach of a LLC Resonant Converter for UPS Battery Charger Application and Battery Charge-Discharge Regression Model",
        authors : "Turhan Can Kargin, Fırat Deveci, and Savaş Şahin",
        conferences : "International Balkan University - International Conference of Applied Sciences, Engineering and Mathematics (2020; R. North Macedonia)",
        researchYr : 2020,
        citebox : "popup4",
        image : "assets/images/research-page/circuit.png",
        citation: {
            vancouver: "T.C. Kargın, F. Deveci, & S. Şahin, High Power Efficiency Design Approach of an LLC Resonant Converter for UPS Battery Charger Application and Battery Charge-Discharge Regression Model, 2nd International Conference of Applied Sciences, Engineering and Mathematics (IBU-ICASEM 2020), June 4-6, Skopje/North Macedonia, Proceedings Book, ISBN 978-608-4868-06-4, 20, 2020."
        },
        abstract: "In this study, design procedure of inductor-inductor-capacitor (LLC) resonant DC-DC converter is developed for uninterruptible power supply battery charge applications based on high power efficiency. The LLC resonant converters have many advantages such as high-power efficiency and less switching losses when compared with other converters features. It is also capable of operating in narrow switching frequency where zero voltage switching can be provided. The DC-DC converter with 400V input and 48V/3.1A output has been selected as an experimental setup. In order to reach desired design of LLC resonant converter and required output values, switching frequency might be determined as above of resonance frequency via Power Electronics Simulation package program. The obtained maximum power efficiency was measured as 95.22%. Besides, charge-discharge models of the battery were obtained from the battery data obtained via deriving regression models with machine learning algorithms where battery electrical energy consumptions, battery status, and temperature data can be analyzed. 𝑅2 and root mean square error scores are performed for different regression models. Random forest regression is determined as the best model among regression models for the obtained data set.",
        absbox: "absPopup4"
    }
];
AOS.init();   
const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, citebox, citation, absbox, abstract}) =>
        (output +=`
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div>
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div> ${authors} </div> <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
        
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
        );
    researchTable.innerHTML = output;

};
document.addEventListener("DOMContentLoaded", fillData);

