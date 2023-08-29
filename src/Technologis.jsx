
import html from './assets/html.png'
import css from './assets/css.png'
import tailwind from './assets/tailwind.png'
import reactImg from './assets/react.svg'
import js from './assets/javascript.png'
import python from './assets/python.png'
import github from './assets/github.png'
import sql from './assets/sql.png'
import git from './assets/git.png'


export default function Technologies() {
    return (
        <div className="p-10">
            <div className=''>
                <h3 className='text-3xl py-2 font-medium'>Technologies</h3>
                <p className='text-xl py-2'>Here you will find all the <span className="text-blue-500">technologies</span> i am most comfortable with and 
                have <span className="text-blue-500">used</span> either in projects or <span className="text-blue-500"> when</span> practicing/learning code.</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg dark:shadow-orange-500'>
                    <img src={html} alt="html logo image" className='w-20 mx-auto my-4 ' />
                    <p>HTML</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg dark:shadow-blue-500'>
                    <img src={css} alt="css logo image" className='w-20 mx-auto my-4' />
                    <p>CSS</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg dark:shadow-teal-500'>
                    <img src={tailwind} alt="tailwind logo image" className='w-20 mx-auto my-4' />
                    <p>Tailwind</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg dark:shadow-blue-400'>
                    <img src={reactImg} alt="react logo image" className='w-20 mx-auto my-4' />
                    <p>REACT</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg dark:shadow-yellow-300'>
                    <img src={js} alt="Javascript logo image" className='w-20 mx-auto my-4' />
                    <p>JAVASCRIPT</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg dark:shadow-yellow-500'>
                    <img src={python} alt="Python logo image" className='w-20 mx-auto my-4' />
                    <p>PYTHON</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg dark:shadow-blue-500'>
                    <img src={sql} alt="sql logo image" className='w-20 mx-auto my-4' />
                    <p>SQL</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg dark:shadow-white'>
                    <img src={github} alt="github logo image" className='w-20 mx-auto my-4' />
                    <p>GITHUB</p>
                </div>
                <div className='shadow-md hover:scale-105 duration-300 py-2 rounded-lg dark:shadow-red-400'>
                    <img src={git} alt="git logo image" className='w-20 mx-auto my-4' />
                    <p>GIT</p>
                </div>
            </div>
        </div>
    )
}