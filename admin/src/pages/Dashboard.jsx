import TableMovie from "../components/table/TableMovie";
function Dashboard() {
  return (
    <>
      <div className="text-end mb-5">
        <label className="px-6 py-2 bg-blue-500 rounded text-white font-semibold hover:cursor-pointer" htmlFor="addmovie">
          Add Movie
        </label>
      </div>
      <TableMovie />
    </>
  );
}

export default Dashboard;
