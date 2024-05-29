import { HiOutlineDotsVertical } from "react-icons/hi"

const ItemToDo = ({ status }) => {
    return (
        <div 
            className="flex items-center justify-between bg-grey p-4 rounded-lg border-l-[10px] cursor-pointer"
            style={{ borderLeftColor: status === "completed" ? "#3C91E6" : "#FD7238" }}
        >
            <p className="text-lg">Task</p>
            <HiOutlineDotsVertical className="text-xl" />
        </div>
    )
}

export default ItemToDo