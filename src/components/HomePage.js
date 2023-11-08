import React from 'react';

import Lok2Image from '../images/Lok2.jpg';


const HomePage = () => {
    return (
        <div>
            <div>
                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">All About</span> Me</h1>

                <p class="mb-3 font-sans  text-gray-900  first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 ">Hello Everyone,My name is Lokaranjan R and I am a Full Stack Developer with 7 years of hands-on experience developing and deploying enterprise applications with a complete Software Development Life Cycle for both frontend and backend systems.  so currently working as a full stack developer in Molina where the intent of the project is to design, develop, deploy and support a web application using Agile methodology to provide end to end service to the Customer. I am part of the Customer Management Team, So the idea is to integrate different business domains into one single place, such that everything can be accessed into one single entry point. So, the customer experience is improved on the total. I am involved in the front end, back end, and also cloud.
                </p>
            </div>
            <div>
                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">My</span> Photo</h1>
                <div class="flex-row">

                    <div class="w-1/3 p-4">
                        <img src={Lok2Image} alt="Image 2" class="w-full h-auto mx-auto" />
                    </div>

                </div>


            </div>
        </div>


    );

};

export default HomePage;