import React from 'react'

function RightContainer() {
    return (
        <aside className="w-full bg-white rounded-2xl shadow p-6 flex flex-col gap-6">
            <input
                type="text"
                placeholder="Search Twitter"
                className="w-full border p-2 rounded-lg focus:outline-blue-400"
            />

            <div className="bg-gray-50 p-4 rounded-xl border">
                <h3 className="text-lg font-semibold mb-2">Trends for you</h3>
                <ul className="flex flex-col gap-2">
                    <li className="hover:text-blue-500 cursor-pointer">#BreakingNews</li>
                    <li className="hover:text-blue-500 cursor-pointer">#WebDevelopment</li>
                    <li className="hover:text-blue-500 cursor-pointer">#ReactJS</li>
                    <li className="hover:text-blue-500 cursor-pointer">#NodeJS</li>
                </ul>
            </div>
        </aside>
    )
}

export default RightContainer
