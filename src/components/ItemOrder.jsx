const ItemOrder = ({ status }) => {
    return (
        <div className="grid grid-cols-3 p-2 items-center rounded-lg hover:bg-grey cursor-pointer text-lg">
            <div className="center gap-4">
                <img 
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
                    alt="user"
                    className="size-9" 
                />
                <p>John Snow</p>
            </div>

            <div className="center">
                <p>29-05-2024</p>
            </div>

            <div className="w-full center">
                <div 
                    className="size-8 md:size-auto md:w-3/5 rounded-full"
                    style={{ backgroundColor: status === "Completed" ? "#3C91E6" : status === "Process" ? "#FFCE26" : "#FD7238" }}
                >
                    <p className="hidden md:block text-center text-light p-2">{status}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemOrder