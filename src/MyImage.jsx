
import me from '/me.jpg'
import coder from '/vecteezy_boy-standing-holding-laptop-with-left-hand-giving-thumbs-up_11006184_525.png'
export default function MyImage() {
    return (
        <div className=' p-5'>
              <img src={me} alt='' className=' w-80 h-80 mx-auto rounded-full md:w-96 md:h-96 shadow-xl ' />
          </div>
    )
}