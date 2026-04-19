import { connectDB } from "@/lib/db";
import Job from "@/models/Job";

export async function GET() {
  await connectDB();
  const jobs = await Job.find();
  return Response.json(jobs);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const job = await Job.create(body);
  return Response.json(job);
}
