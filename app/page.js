"use client";

import { useState, useEffect } from "react";
import JobCard from "@/components/JobCard";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    async function fetchJobs() {
      const res = await fetch("/api/jobs");
      const data = await res.json();
      setJobs(data);
    }

    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      `${job.title} ${job.organization} ${job.category}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === "" || job.category === category;

    const matchesLocation =
      location === "" || job.location === location;

    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <main className="min-h-screen bg-gray-50">

      <div className="bg-white shadow-sm p-4">
        <h1 className="text-xl font-bold text-center text-blue-600">
          Job Sarkari Hub 🚀
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-4">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search jobs..."
          className="w-full p-2 border rounded-lg mb-4"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* FILTERS (FIXED LOCATION) */}
        <div className="flex gap-3 mb-4">

          {/* Category */}
          <select
            className="w-1/2 p-2 border rounded-lg"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Graduate">Graduate</option>
            <option value="12th Pass">12th Pass</option>
            <option value="10th Pass">10th Pass</option>
          </select>

          {/* Location */}
          <select
            className="w-1/2 p-2 border rounded-lg"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">All Locations</option>
            <option value="India">India</option>
            <option value="Delhi">Delhi</option>
            <option value="Haryana">Haryana</option>
          </select>

        </div>

        {/* JOB LIST */}
        {filteredJobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        )}

      </div>
    </main>
  );
}