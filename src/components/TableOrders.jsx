import { MdFilterList, MdOutlineSearch } from "react-icons/md"
import ItemOrder from "./ItemOrder"

const TableOrders = () => {
    return (
        <div className="bg-light rounded-xl p-6">
            <div className="flex items-center justify-between mb-4">
                <p className="text-2xl font-semibold">Recent Orders</p>
                <div className="flex items-center gap-2">
                    <MdOutlineSearch className="text-2xl" />
                    <MdFilterList className="text-2xl" />
                </div>
            </div>

            <div className="w-full flex flex-col gap-2">
                <div className="grid grid-cols-3 font-semibold text-lg border-b-2 text-center">
                    <p>User</p>
                    <p>Date Order</p>
                    <p>Status</p>
                </div>

                <ItemOrder status="Completed" />
                <ItemOrder status="Pending" />
                <ItemOrder status="Process" />
                <ItemOrder status="Pending" />
                <ItemOrder status="Completed" />
            </div>
        </div>
    )
}

export default TableOrders