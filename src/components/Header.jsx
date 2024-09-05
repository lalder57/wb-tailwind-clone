import { BsFillGrid3X3GapFill } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <nav className="h-[7vh] flex justify-center items-center bg-white">
        <div className="w-1/2 flex justify-between items-center ml-16">
          <img className="w-6 h-6" src="https://www.adobe.com/federal/assets/svgs/adobe-logo.svg" />
          <button>Creativity & Design</button>
          <button>PDF & E-signatures</button>
          <button>Marketing & Commerce</button>
          <button>Help & Support</button>  
        </div>
        <div className="w-1/6 flex justify-center items-center">
          <BsFillGrid3X3GapFill className="mr-5" />
          <button>Sign in</button>
        </div>

      </nav>
    </>
  )
}

export default Header