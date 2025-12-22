export default function EmbedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-transparent overflow-hidden">
            {children}
        </div>
    );
}
