import React, { useState } from "react";

export default function TaskItem({ task, onUpdate, onDelete, onToggle }) {
  const [editing, setEditing] = useState(false);

  const [title, setTitle] = useState(task.title);
  const [desc, setDesc] = useState(task.description);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const save = () => {
    onUpdate({
      ...task,
      title,
      description: desc,
      priority,
      dueDate
    });
    setEditing(false);
  };

  return (
    <div className="p-3 border rounded bg-white flex justify-between gap-3">
      <div className="flex-1">
        {editing ? (
          <div className="space-y-2">
            <input
              className="w-full p-2 border"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="w-full p-2 border"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />

            <select
              className="p-2 border"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>

            <input
              type="date"
              className="p-2 border"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggle(task.id)}
              />
              <span
                className={task.completed ? "line-through text-slate-400" : ""}
              >
                {task.title}
              </span>
            </div>

            <div className="text-sm text-slate-600">{task.description}</div>
          </>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {editing ? (
          <>
            <button
              onClick={save}
              className="px-3 py-1 bg-blue-600 text-white rounded"
            >
              Save
            </button>
            <button
              onClick={() => setEditing(false)}
              className="px-3 py-1 border rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setEditing(true)}
              className="px-3 py-1 border rounded"
            >
              Edit
            </button>
            <button
              onClick={() => {
                if (confirm("Delete?")) onDelete(task.id);
              }}
              className="px-3 py-1 border rounded"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}
