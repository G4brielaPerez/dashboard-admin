import { FiChevronRight } from "react-icons/fi"

const Breadcrumb = () => {
    return (
        <div className="flex items-center gap-2 text-lg font-medium">
            <p className="text-dark-grey cursor-pointer">Home</p>
            <FiChevronRight />
            <p className="text-sky-700">Dashboard</p>
        </div>
    )
}

export default Breadcrumb