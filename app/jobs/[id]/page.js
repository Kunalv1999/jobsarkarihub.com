async function getJob(id) {
  const res = await fetch("http://localhost:3000/api/jobs", {
    cache: "no-store",
  });

  const jobs = await res.json();
  return jobs.find((j) => j._id === id);
}

export default async function JobPage({ params }) {
  const job = await getJob(params.id);

  if (!job) {
    return <p className="p-4">Job not found</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">

      {/* Title */}
      <h1 className="text-2xl font-bold text-gray-800">
        {job.title}
      </h1>

      {/* Organization */}
      <p className="text-gray-600 mt-2">
        {job.organization} • {job.location}
      </p>

      {/* Info Tags */}
      <div className="flex gap-3 mt-4">
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded">
          🎓 {job.category}
        </span>

        <span className="bg-red-100 text-red-600 px-3 py-1 rounded">
          ⏳ Last Date: {job.lastDate}
        </span>
      </div>

      {/* Description */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">
          Job Description
        </h2>
        <p className="mt-2 text-gray-700 leading-relaxed">
          {job.description}
        </p>
      </div>

      {/* Apply Button */}
      <a
        href={job.applyLink}
        target="_blank"
        className="inline-block mt-6 px-6 py-2 bg-green-600 text-white rounded-lg"
      >
        Apply Now
      </a>

    </div>
  );
}