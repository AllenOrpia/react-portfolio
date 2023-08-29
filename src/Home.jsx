import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Home() {
    return (
        <div>
            <div className='text-center px-10 py-5'>
              <h2 className=' text-6xl py-2 text-blue-500 font-medium md:text-6xl font-signature'>Allen Orpia</h2>
              <h3 className=' text-2xl py-2 font-medium md:text-3xl'>Aspiring Web Developer</h3>
              <p className=' leading-10 text-xl py-5  text-grey-800 md:text-2xl max-w-xl mx-auto'> Get to know me! Find out why I transitioned into tech, the technologies I know and love to use as well how to contact me!
              </p>

            </div>
            <div className='mb-3 flex justify-center'>
                <a href='#Projects' className=' group px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl cursor-pointer hover:-translate-y-1 duration-300 hover:-translate-x-1'>
                  Portfolio
                  <span className='group-hover:rotate-90 duration-300 ml-1'>
                    <ArrowForwardIcon />
                  </span>
                </a>
            </div>
            
        </div>
           
        
    )
}