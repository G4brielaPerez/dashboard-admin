import { MdFilterList, MdAdd } from "react-icons/md"
import ItemToDo from "./ItemToDo"

const TableToDo = () => {
    return (
        <div className="bg-light rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
                <p className="text-2xl font-semibold">To Do</p>
                <div className="flex items-center gap-2">
                    <MdAdd className="text-2xl" />
                    <MdFilterList className="text-2xl" />
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <ItemToDo status={"completed"} />
                <ItemToDo status={"completed"} />
                <ItemToDo status={"no-completed"} />
                <ItemToDo status={"completed"} />
                <ItemToDo status={"no-completed"} />
            </div>
        </div>
    )
}

export default TableToDo