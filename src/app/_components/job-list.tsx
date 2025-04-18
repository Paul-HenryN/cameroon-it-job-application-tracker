"use client";
import { useState } from "react";
import { JobCard } from "./job-card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQuery } from "@tanstack/react-query";
import { getJobs } from "@/lib/firebase";
import { Job } from "@/types/job";

const PER_PAGE = 2;

export function JobList() {
  const [sortBy, setSortBy] = useState("recent");
  const [maxResults, setMaxResults] = useState(PER_PAGE);
  const { data: jobs } = useQuery<Job[]>({
    queryKey: ["jobs", maxResults],
    queryFn: () => getJobs({ maxResults }),
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">{jobs?.length || 0}</span> jobs
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="recent">Most Recent</SelectItem>
              <SelectItem value="salary-high">Salary: High to Low</SelectItem>
              <SelectItem value="salary-low">Salary: Low to High</SelectItem>
              <SelectItem value="relevance">Relevance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-4">
        {jobs?.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button
          variant="outline"
          className="mx-auto"
          onClick={() => setMaxResults(maxResults + PER_PAGE)}
        >
          Load More Jobs
        </Button>
      </div>
    </div>
  );
}
