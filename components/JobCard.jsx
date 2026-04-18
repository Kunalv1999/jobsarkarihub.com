export default function JobCard({ job }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm hover:shadow-md transition bg-white">
      
      <h2 className="text-lg font-semibold text-gray-800">
        {job.title}
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        {job.organization} • {job.location}
      </p>

      <div className="flex flex-wrap gap-2 mt-3 text-sm">
        <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
          🎓 {job.category}
        </span>

        <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
          ⏳ Last Date: {job.lastDate}
        </span>
      </div>

      <div className="flex gap-3 mt-4">
        <a
          href={`/jobs/${job._id}`}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm"
        >
          View Details
        </a>

        <a
          href={`/jobs/${job._id}`}
          target="_blank"
          className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm"
        >
          Apply
        </a>
      </div>
    </div>
  );
}