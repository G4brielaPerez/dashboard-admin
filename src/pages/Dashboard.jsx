import { MdCloudDownload } from "react-icons/md"
import { FaCalendarCheck, FaUserFriends } from "react-icons/fa"
import { FaCircleDollarToSlot } from "react-icons/fa6"
import Breadcrumb from "../components/Breadcrumb"
import ItemInfo from "../components/ItemInfo"
import TableOrders from "../components/TableOrders"
import TableToDo from "../components/TableToDo"

const Dashboard = () => {
    return (
        <div className="space-y-4">
            <h1 className="font-bold uppercase text-[28px] tracking-wider text-dark">Dashboard</h1>
            
            <div className="flex items-center justify-between">
                <Breadcrumb />

                <button className="flex items-center gap-2 bg-sky-600 rounded-xl p-3 text-light hover:bg-sky-700">
                    <MdCloudDownload className="text-2xl" />
                    Download PDF
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <ItemInfo id={1} title="New Order" info="1020">
                    <FaCalendarCheck  />
                </ItemInfo>
                <ItemInfo id={2} title="Visitors" info="2834">
                    <FaUserFriends />
                </ItemInfo>
                <ItemInfo id={3} title="Total Orders" info="$2543">
                    <FaCircleDollarToSlot />
                </ItemInfo>
            </div>

            <div className="flex flex-col xl:flex-row gap-6 w-full">
                <div className="w-full xl:w-3/5">
                    <TableOrders />
                </div>

                <div className="w-full xl:w-2/5">
                    <TableToDo />
                </div>
            </div>
        </div>
    )
}

export default Dashboard