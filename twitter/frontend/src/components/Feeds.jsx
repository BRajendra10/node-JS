import React, { useEffect, useState } from 'react';
import { Pencil, Trash2 } from "lucide-react";


function Feeds() {
    const [tweets, setTweets] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    const [id, setId] = useState("");

    const url = "http://localhost:4040/api/v1";

    useEffect(() => {
        fetch(`${url}/tweets`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setTweets(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const handleDelete = async (tweetId) => {
        try {
            const res = await fetch(`${url}/tweet/${tweetId}`, {
                method: "DELETE",
            });

            const data = await res.json();
            setTweets(data);
        } catch (error) {
            console.log("Delete failed:", error);
        }
    }

    const handleEdit = async () => {
        try {
            const res = await fetch(`${url}/tweet/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, tweet: text }),
            })

            const data = await res.json();
            setTweets(data);
            setText("");
            setId("");
            setUsername("");
        } catch (error) {
            console.log(`Tweet Edit failed ${error}`)
        }
    }

    const handlePost = async () => {
        try{
            const res = await fetch(`${url}/tweets`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, tweet: text }),
            })

            const data = await res.json();
            setTweets(data);
            setUsername("");
            setText("");
        } catch(error) {
            console.log(`Something went wrong: ${error}`)
        }
    }


    return (
        <main className="w-full bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-3 overflow-y-auto max-h-screen border border-gray-200">

            {/* Title */}
            <h2 className="text-2xl font-semibold">Home</h2>

            {/* Tweet Input Box */}
            <div className="bg-white p-5 rounded-2xl border shadow-zinc-200 shadow-lg border-gray-200 flex gap-4 items-start">
                {/* Input fields */}
                <div className="flex flex-col w-full gap-3">
                    <input
                        type="text"
                        value={username}
                        placeholder="Your username"
                        className="border rounded-xl p-3 w-full focus:outline-blue-400"
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <textarea
                        value={text}
                        placeholder="What's happening?"
                        className="border rounded-xl p-3 w-full focus:outline-blue-400"
                        rows="3"
                        onChange={(e) => setText(e.target.value)}
                    />

                    <div className="flex justify-end">
                        <button 
                            className="bg-blue-500 text-white px-8 py-2.5 rounded-full hover:bg-blue-600 transition"
                            onClick={() => id ? handleEdit() : handlePost()}
                        >
                            Tweet
                        </button>
                    </div>
                </div>
            </div>

            {/* Error Message */}
            {error && (
                <div className="p-4 bg-red-100 border-l-4 border-red-600 text-red-700 rounded-lg">
                    ❌ {error}
                </div>
            )}

            {/* Loading State */}
            {loading && (
                <div className="text-center text-gray-500 py-4">
                    Loading tweets...
                </div>
            )}

            {/* Tweets List */}
            <div className="flex flex-col gap-5">
                {!loading && tweets.length === 0 && (
                    <p className="text-gray-500 text-center">No tweets available.</p>
                )}

                {tweets.map((t) => (
                    <div className="p-4 rounded-xl border border-zinc-200/70 shadow-zinc-200 shadow-lg flex gap-4" key={t.id}>

                        {/* User Avatar */}
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt="user"
                            className="w-12 h-12 rounded-full object-cover"
                        />

                        {/* Tweet Content */}
                        <div className="flex flex-col w-full">

                            {/* Username + Created/Updated time */}
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <h3 className="font-semibold text-black">@{t.username}</h3>

                                <span>· {new Date(t.createdAt).toLocaleString()}</span>

                                {t.updatedAt && (
                                    <span className="text-blue-500">
                                        (Updated · {new Date(t.updatedAt).toLocaleString()})
                                    </span>
                                )}
                            </div>

                            {/* Tweet text */}
                            <p className="mt-1 text-gray-800">{t.tweet}</p>

                            {/* Action Icons (bottom right) */}
                            <div className="flex justify-end gap-4 mt-3 text-gray-600">

                                {/* Update */}
                                <button
                                    onClick={() => {
                                        setText(t.tweet)
                                        setUsername(t.username)
                                        setId(t.id)
                                    }}
                                    className="hover:text-blue-500 transition"
                                >
                                    <Pencil size={18} />
                                </button>

                                {/* Delete */}
                                <button
                                    onClick={() => handleDelete(t.id)}
                                    className="hover:text-red-500 transition"
                                >
                                    <Trash2 size={18} />
                                </button>

                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </main>
    );
}

export default Feeds;
