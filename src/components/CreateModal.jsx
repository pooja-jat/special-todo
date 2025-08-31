import React, { useState } from "react";
import { createTodo } from "../redux/slice";
import { useDispatch } from "react-redux";

function CreateModal({ setVisible }) {
  const dispatch = useDispatch();

  const handleCancel = () => {
    setVisible(false);
  };

  const [form, setForm] = useState({
    name: "",
    assignedTo: "",
    status: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    assignedTo: "",
    status: "",
  });

  const handleSave = (e) => {
    e.preventDefault();
    let hasError = false;
    let _formError = { ...formError };
    // 1. validate name
    // 1.1 name should not be longer than 10 characters
    if (form.name.length === 0) {
      _formError.name = "Required field";
      hasError = true;
    }
    if (form.name.length > 10) {
      _formError.name = "Max length 10";
      hasError = true;
    }
    // 2. assigned to
    // 2.1 name should not be longer than 10 characters
    if (form.assignedTo.length === 0) {
      _formError.assignedTo = "Required field";
      hasError = true;
    }
    if (form.assignedTo.length > 10) {
      _formError.assignedTo = "Max length 10";
      hasError = true;
    }

    // 2. assigned to
    if (form.status.length === 0) {
      _formError.status = "Required field";
      hasError = true;
    }
    if (hasError) {
      setFormError(_formError);
      return;
    } else {
      setFormError({
        name: "",
        assignedTo: "",
        status: "",
      });
    }

    dispatch(createTodo(form));
    setVisible(false);
  };

  console.log("formError", formError);

  return (
    <div class="absolute flex items-center justify-center w-full h-screen z-1">
      <form
        class="relative p-6 min-w-1/2 min-h-[200px] bg-white rounded-lg shadow-sm flex flex-col gap-4"
        onSubmit={handleSave}
      >
        <div>
          <input
            class="border border-gray-300 rounded-lg w-full p-2 outline-none"
            placeholder="Name"
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {formError.name && (
            <p className="text-xs px-2 text-red-500">{formError.name}</p>
          )}
        </div>

        <div>
          <input
            class="border border-gray-300 rounded-lg w-full p-2 outline-none"
            placeholder="Assigned to"
            onChange={(e) => setForm({ ...form, assignedTo: e.target.value })}
          />
          {formError.assignedTo && (
            <p className="text-xs px-2 text-red-500">{formError.assignedTo}</p>
          )}
        </div>

        <div>
          <select
            class="border border-gray-300 rounded-lg w-full p-2 outline-none"
            onChange={(e) => setForm({ ...form, status: e.target.value })}
          >
            <option selected>Choose a status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
          {formError.status && (
            <p className="text-xs px-2 text-red-500">{formError.status}</p>
          )}
        </div>

        <div className="flex flex-row gap-4">
          <button
            onClick={handleCancel}
            className="w-full cursor-pointer bg-gray-100 border-1 border-gray-600 rounded-md px-2 py-1 font-semibold"
          >
            CANCEL
          </button>
          <button className="w-full cursor-pointer bg-green-200 border-1 border-green-700 rounded-md px-2 py-1 font-semibold">
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateModal;
