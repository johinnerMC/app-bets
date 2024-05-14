/** @format */

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div>
        <h1 className="bg-blue-200">menu dashboard</h1>
      </div>

      {children}
    </>
  );
}
