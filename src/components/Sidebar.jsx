import { FaShoppingBag, FaChartPie, FaUserFriends, FaSignOutAlt } from "react-icons/fa"
import { MdDashboard, MdSettings } from "react-icons/md"
import { BiSolidMessageDots } from "react-icons/bi"
import { useState } from "react"
import { useMenuContext } from "../context/MenuContext"

const Sidebar = () => {
  const { showMenu } = useMenuContext()
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const onItemClick = (title) => {
    if (title !== "Logout") {
      setSelectedItem(title);
    }
  }

  const items = [
    { title: "Dashboard", icon: <MdDashboard />, menuTop: true },
    { title: "My Store", icon: <FaShoppingBag />, menuTop: true },
    { title: "Analytics", icon: <FaChartPie />, menuTop: true },
    { title: "Messages", icon: <BiSolidMessageDots />, menuTop: true },
    { title: "Team", icon: <FaUserFriends />, menuTop: true },
    { title: "Settings", icon: <MdSettings />, menuTop: false },
    { title: "Logout", icon: <FaSignOutAlt/>, menuTop: false,
    }
  ]

  return (
    <div className="h-screen bg-sky-800 flex flex-col justify-between">
      <div>
        <div className="center py-10 text-light" style={{ height: !showMenu && '113px' }}>
          {showMenu && (
            <p className="text-2xl font-medium uppercase border-b">Admin Page</p>
          )}
        </div>

        <div className="w-full pl-2 flex flex-col gap-4">
          {items.map(
            (item, index) =>
              item.menuTop && (
                <Item
                  key={index}
                  title={item.title}
                  onClick={() => onItemClick(item.title)}
                  active={selectedItem === item.title}
                  showMenu={showMenu}
                >
                  {item.icon}
                </Item>
              )
          )}
        </div>
      </div>

      <div className="pl-2 flex flex-col gap-4">
        {items.map(
          (item, index) =>
            !item.menuTop && (
              <Item
                key={index}
                title={item.title}
                onClick={() => onItemClick(item.title)}
                active={selectedItem === item.title}
                showMenu={showMenu}
              >
                {item.icon}
              </Item>
            )
        )}
      </div>
    </div>
  )
}

const Item = ({ children, title, active, onClick, showMenu }) => {
  return (
    <div
      className={`p-3 rounded-l-2xl cursor-pointer h-12 relative ${active && "bg-grey"}`}
      onClick={onClick}
    >
      <div 
        className="absolute right-0 -top-12 size-12 rounded-2xl" 
        style={{ boxShadow: active && "20px 24px #EEE", pointerEvents: "none" }}
      />

      <div 
        className="absolute right-0 -bottom-12 size-12 rounded-2xl" 
        style={{ boxShadow: active && "20px -24px #EEE", pointerEvents: "none" }}
      />

      <div className={`flex items-center w-full h-full pl-2 ${active ? "text-dark" : "text-light hover:text-sky-200"}`}>
        <div className="center text-2xl pr-3">{children}</div>
        {showMenu && (
          <p className="text-xl">{title}</p>
        )}
      </div>
    </div>
  )
}

export default Sidebar
