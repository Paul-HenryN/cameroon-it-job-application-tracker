import Image from "next/image";
import { CalendarDays, MapPin, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  logo: string;
  skills: string[];
  remote: boolean;
}

interface JobCardProps {
  job: Job;
}

export function JobCard({ job }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-shrink-0">
          <Image
            src={job.logo || "/placeholder.svg"}
            alt={`${job.company} logo`}
            width={60}
            height={60}
            className="rounded-md"
          />
        </div>

        <div className="flex-grow">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
            <div className="flex items-center gap-2">
              {job.remote && (
                <Badge
                  variant="outline"
                  className="bg-green-50 text-green-700 border-green-200"
                >
                  Remote
                </Badge>
              )}
              <Badge
                variant="outline"
                className="bg-gray-50 text-gray-700 border-gray-200"
              >
                {job.type}
              </Badge>
            </div>
          </div>

          <div className="mt-2 text-gray-700">{job.company}</div>

          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span>{job.salary}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>Posted {job.posted}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {job.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="bg-gray-100 text-gray-800"
              >
                {skill}
              </Badge>
            ))}
          </div>

          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
              Apply Now
            </Button>
            <Button variant="outline">Save Job</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
