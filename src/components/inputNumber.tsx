export default function InputNumber() {
    return(
        <div className="flex">
            <div className="">
                <label htmlFor="nb-group" className="sr-only block text-sm font-medium leading-6 text-gray-900">
                    nombre de groupes
                </label>
                <div className="flex mr-4">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-sm">
                        <input
                            type="text"
                            name="nb-group"
                            id="nb-group"
                            className="block flex-1 border-0 bg-transparent py-1.5 pl-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            placeholder="nombre de groupes"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}