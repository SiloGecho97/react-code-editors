import React, { useState } from 'react'

const NameForm = () => {
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    const handleSubmit = () => {
        alert(value, 'submited')
    }

    return (
        <div className="max-w-xl w-full p-4">
            <form onSubmit={handleSubmit} className="flex space-x-4 items-end">
                <label>
                    Name: {value}
                    <input
                        className="bg-gray-50 border border-gray-300 text-blue-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        type="text"
                        value={value}
                        onChange={handleChange}
                    />
                </label>
                <input
                    type="submit"
                    value="Submit"
                    className="text-white bg-blue-700 hover:bg-yellow-900 focus:ring-4 focus:ring-blue-300 font-bold  rounded-lg text-lg z-10 px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                />
            </form>

            <div className='relative'>
                <div className="w-32 bg-red-600 h-32 absolute top-0"></div>

                <div className="w-8 h-8 bg-green-500 absolute top-0 z-10"></div>

                <div className="w-16 h-16 bg-blue-500 absolute top-0"></div>

            </div>
        </div>
    )
}

export default NameForm
