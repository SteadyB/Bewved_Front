
const buttonTextHome = "Dashboard"
let textButton = buttonTextHome

export default function button({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <a type="button" href="http://localhost:3000/boards" className="flex items-center justify-center rounded-md py-2 px-4 text-white hover:bg-white border-2 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="font-semibold p-0">{children}</span>
        </a>
    )
}