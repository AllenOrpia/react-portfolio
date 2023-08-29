
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';


export default function Links() {
    return (
        <div className='flex-col top-[35%] left-0 fixed hidden md:flex'>
            <ul>
                <li className='flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-tr-md'>
                    <a href="https://www.linkedin.com/in/allen-orpia-386b2213b/" className='flex justify-between items-center w-full text-white'>LinkedIn <LinkedInIcon fontSize='large' /></a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300'>
                    <a href="https://github.com/AllenOrpia" className='flex justify-between items-center w-full text-white'>GitHub <GitHubIcon fontSize='large' /></a>
                </li>
                <li className='flex justify-between items-center w-40 h-14 px-4 bg-gradient-to-r from-cyan-500 via-cyan-600 to-blue-600 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 rounded-br-md'>
                    <a href="Resume.pdf" download='resume' className='flex justify-between items-center w-full text-white'>Resume <PictureAsPdfIcon fontSize='large' /></a>
                </li>
            </ul>
        </div>
    )
}