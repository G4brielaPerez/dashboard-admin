import { MdMenu, MdOutlineSearch } from "react-icons/md"
import { FaBell } from "react-icons/fa"
import { useMenuContext } from "../context/MenuContext"

const Navbar = () => {
    const { showMenu, setShowMenu } = useMenuContext()

    return (
        <div className="flex justify-between items-center bg-light py-4 px-8 text-dark shadow-md">
            <div className="flex gap-12 w-3/4">
                <div className="hidden md:flex center text-2xl gap-4">
                    <MdMenu className="cursor-pointer" onClick={() => setShowMenu(!showMenu)} />
                    <p className="font-medium hover:text-sky-800 cursor-pointer transition-colors">Categories</p>
                </div>

                <div className="flex w-full md:w-2/3">
                    <input 
                        type="text"
                        placeholder="Search..."
                        className="w-full h-10 p-2 rounded-l-lg bg-grey outline-none"
                    />
                    <button className="center w-10 bg-sky-800 rounded-r-lg cursor-pointer">
                        <MdOutlineSearch className="text-2xl text-light"/>
                    </button>
                </div>
            </div>

            <div className="flex justify-end gap-12 w-1/2 md:w-1/4">
                <div className="center relative cursor-pointer">
                    <FaBell className="text-3xl"/>
                    <span className="absolute -top-2 -right-1 bg-red size-5 rounded-full center font-medium text-[10px] text-light border-2 border-light">8</span>
                </div>

                <div className="center">
                    <img 
                        src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                        alt="user"
                        className="size-10" 
                    />
                </div>
            </div>
        </div>
    )
}

export default Navbar