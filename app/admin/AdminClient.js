"use client";

import { useState } from "react";

export default function AdminClient() {

  const [form, setForm] = useState({
    title: "",
    organization: "",
    category: "",
    location: "",
    lastDate: "",
    applyLink: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Job added successfully 🚀");

      setForm({
        title: "",
        organization: "",
        category: "",
        location: "",
        lastDate: "",
        applyLink: "",
        description: ""
      });
    } else {
      alert("Error adding job");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4">
        Admin Panel – Add Job
      </h1>

      <form onSubmit={handleSubmit} className="space-y-3">

        <input name="title" placeholder="Job Title"
          className="w-full p-2 border"
          value={form.title}
          onChange={handleChange}
        />

        <input name="organization" placeholder="Organization"
          className="w-full p-2 border"
          value={form.organization}
          onChange={handleChange}
        />

        <input name="category" placeholder="Category"
          className="w-full p-2 border"
          value={form.category}
          onChange={handleChange}
        />

        <input name="location" placeholder="Location"
          className="w-full p-2 border"
          value={form.location}
          onChange={handleChange}
        />

        <input name="lastDate" placeholder="Last Date"
          className="w-full p-2 border"
          value={form.lastDate}
          onChange={handleChange}
        />

        <input name="applyLink" placeholder="Apply Link"
          className="w-full p-2 border"
          value={form.applyLink}
          onChange={handleChange}
        />

        <textarea name="description" placeholder="Description"
          className="w-full p-2 border"
          value={form.description}
          onChange={handleChange}
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Job
        </button>

      </form>
    </div>
  );
}