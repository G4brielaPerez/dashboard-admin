const ItemInfo = ({ id, info, title, children }) => {
    const getColor = () => {
        switch (id) {
            case 1:
                return "bg-light-blue text-blue text-3xl"
            case 2:
                return "bg-light-yellow text-yellow text-4xl"
            case 3:
                return "bg-light-orange text-orange text-3xl"
        }
    }

    const bgColor = getColor()

    return (
        <div className="flex items-center gap-6 p-6 bg-light rounded-xl">
            <div className={`center size-20 rounded-lg ${bgColor}`}>
                {children}
            </div>
            <div className="text-xl">
                <p className="font-bold">{info}</p>
                <p>{title}</p>
            </div>
        </div>
    )
}

export default ItemInfo
