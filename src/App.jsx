import "./App.css";

function App() {
  const headers = ["S.No", "Title", "Assigned to", "Status", "Action"];

  const todos = [
    {
      id: "abc",
      title: "ABC",
      assignedTo: "Pooja",
      status: "Pending",
    },
    {
      id: "def",
      title: "DEF",
      assignedTo: "Pooja",
      status: "In Progress",
    },
    {
      id: "ghi",
      title: "EFG",
      assignedTo: "Pooja",
      status: "Done",
    },
  ];

  return (
    <div className="bg-green-50 w-full min-h-screen flex flex-col gap-4 items-center py-16">
      <h1 className="font-bold text-3xl">Todos</h1>

      <div class="relative flex flex-col min-w-2/3 h-full text-gray-700 bg-green-100 shadow-md rounded-xl">
        <button className="bg-green-100 w-fit p-4 rounded-md shadow-md text-green-700 font-bold border-1 border-green-700 cursor-pointer">
          + ADD NEW
        </button>
        <table class="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              {headers.map((header) => {
                return (
                  <th class="p-4 border-b border-green-500">
                    <p class="font-bold text-green-700">{header}</p>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {todos.map((item, index) => {
              let statusClass = "text-gray-700 bg-gray-50";
              if (item.status === "Pending") {
                statusClass = "text-yellow-500 bg-yellow-50";
              }
              if (item.status === "Done") {
                statusClass = "text-green-500 bg-green-50";
              }
              return (
                <tr key={item.id}>
                  <td class="p-4">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {index + 1}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {item.title}
                    </p>
                  </td>
                  <td class="p-4">
                    <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {item.assignedTo}
                    </p>
                  </td>
                  <td class="p-4">
                    <a
                      href="#"
                      class={`font-bold rounded-md p-2 ${statusClass}`}
                    >
                      {item.status}
                    </a>
                  </td>
                  <td>
                    <div className="flex flex-row gap-4">
                      <button className="bg-green-200 w-10 h-10 rounded-full flex items-center justify-center ">
                        E
                      </button>
                      <button className="bg-red-200 w-10 h-10 rounded-full flex items-center justify-center ">
                        D
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
