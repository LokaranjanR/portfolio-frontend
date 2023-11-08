import React, { useState } from 'react';
import portfolioService from '../services/portfolioService';


function PortfolioItemForm({ onSubmit }) {
    const [projectname, setprojectname] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState('');
    const [repolink, setrepolink] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            //Using portfolioService to add a new item
            await portfolioService.addPortfolioItem({ projectname, description, skills, repolink });


            //resetting the form fields
            setprojectname('');
            setDescription('');
            setSkills('');
            setrepolink('');


        } catch (error) {
            console.log('Error adding portfolio item', error);
        }


    };

    return (
        <div className='bg-gray-700 flex justify-center items-center h-screen'>
            {/* box with shadow */}
            <div className='bg-white p-6 rounded-lg shadow-md w-96'>
                <div className='text-center py-8'>
                    <h2 className='mt-2 text-lg text-black-600'>Add Portfolio Item</h2>

                </div>

                <form onSubmit={handleSubmit} className='text-center'>
                    <div className='mx-auto w-1/2'>
                        <label class="block">
                            <span class="block text-medium font-serif text-slate-600">Project Name</span>
                            <input
                                type='text'
                                placeholder='Project Name'
                                value={projectname}
                                onChange={(e) => setprojectname(e.target.value)}
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                            />
                        </label>
                        <label class="block text">
                            <span class="block text-medium font-serif text-slate-600">Description</span>
                            <textarea
                                placeholder='Description'
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"

                            />
                        </label>
                        <label class="block text">
                            <span class="block text-medium font-serif text-slate-600">Skills</span>
                            <input
                                type='text'
                                placeholder='Skills'
                                value={skills}
                                onChange={(e) => setSkills(e.target.value)}
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"
                            />

                        </label>
                        <label class="block text">
                            <span class="block text-medium font-serif text-slate-600">Repository Link</span>
                            <input
                                type='text'
                                placeholder='Repository Link'
                                value={repolink}
                                onChange={(e) => setrepolink(e.target.value)}
                                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none"

                            />

                        </label>
                    </div>



                    <button type='submit' class="bg-blue-950 hover:bg-blue-400 text-yellow-50 font-semibold py-3 px-4 border-b-8 border-blue-700 hover:border-blue-400 rounded">Add</button>
                </form>
            </div>
        </div>

    );

}


export default PortfolioItemForm;