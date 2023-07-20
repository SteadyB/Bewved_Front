export default function EmptyHome({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <div className="container">
            {children}
        </div>
    )
}