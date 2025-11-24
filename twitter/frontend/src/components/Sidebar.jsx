import React from 'react'

function Sidebar() {
    return (
        <aside className="w-full bg-white rounded-2xl shadow p-6 flex flex-col gap-6 h-full">
            <h1 className="text-2xl font-bold text-blue-500">Logo</h1>

            <nav className="flex flex-col gap-4 text-lg">
                <a className="hover:text-blue-500" href="#">Home</a>
                <a className="hover:text-blue-500" href="#">Explore</a>
                <a className="hover:text-blue-500" href="#">Notifications</a>
                <a className="hover:text-blue-500" href="#">Messages</a>
                <a className="hover:text-blue-500" href="#">Bookmarks</a>
                <a className="hover:text-blue-500" href="#">Profile</a>
            </nav>

            <button className="bg-blue-500 text-white py-2 rounded-full text-center hover:bg-blue-600">
                Tweet
            </button>
        </aside>
    )
}

export default Sidebar
