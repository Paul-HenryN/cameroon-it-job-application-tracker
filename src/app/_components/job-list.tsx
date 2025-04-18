"use client"

import { useState } from "react"
import { JobCard } from "./job-card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Mock data for job listings
const JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCamer Solutions",
    location: "Douala, Cameroon",
    type: "Full-time",
    salary: "800,000 - 1,200,000 XAF",
    posted: "2 days ago",
    logo: "/placeholder.svg?height=50&width=50",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    remote: false,
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Fintech Cameroon",
    location: "Yaoundé, Cameroon",
    type: "Full-time",
    salary: "900,000 - 1,400,000 XAF",
    posted: "1 day ago",
    logo: "/placeholder.svg?height=50&width=50",
    skills: ["Python", "Django", "PostgreSQL"],
    remote: false,
  },
  {
    id: 3,
    title: "DevOps Engineer",
    company: "Global Tech Cameroon",
    location: "Remote",
    type: "Contract",
    salary: "1,200,000 - 1,800,000 XAF",
    posted: "3 days ago",
    logo: "/placeholder.svg?height=50&width=50",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    remote: true,
  },
  {
    id: 4,
    title: "Mobile App Developer",
    company: "Camer Mobile Solutions",
    location: "Buea, Cameroon",
    type: "Full-time",
    salary: "700,000 - 1,100,000 XAF",
    posted: "5 days ago",
    logo: "/placeholder.svg?height=50&width=50",
    skills: ["React Native", "Flutter", "Firebase"],
    remote: false,
  },
  {
    id: 5,
    title: "UI/UX Designer",
    company: "Creative Designs Cameroon",
    location: "Douala, Cameroon",
    type: "Full-time",
    salary: "600,000 - 900,000 XAF",
    posted: "1 week ago",
    logo: "/placeholder.svg?height=50&width=50",
    skills: ["Figma", "Adobe XD", "User Research"],
    remote: false,
  },
  {
    id: 6,
    title: "Data Scientist",
    company: "DataCamer Analytics",
    location: "Yaoundé, Cameroon",
    type: "Full-time",
    salary: "1,000,000 - 1,500,000 XAF",
    posted: "3 days ago",
    logo: "/placeholder.svg?height=50&width=50",
    skills: ["Python", "Machine Learning", "SQL", "Data Visualization"],
    remote: false,
  },
  {
    id: 7,
    title: "Network Administrator",
    company: "Cameroon Telecom",
    location: "Douala, Cameroon",
    type: "Full-time",
    salary: "700,000 - 1,000,000 XAF",
    posted: "4 days ago",
    logo: "/placeholder.svg?height=50&width=50",
    skills: ["Networking", "Cisco", "Security"],
    remote: false,
  },
  {
    id: 8,
    title: "IT Support Specialist",
    company: "Tech Support Cameroon",
    location: "Limbe, Cameroon",
    type: "Full-time",
    salary: "400,000 - 600,000 XAF",
    posted: "1 week ago",
    logo: "/placeholder.svg?height=50&width=50",
    skills: ["Troubleshooting", "Windows", "Linux"],
    remote: false,
  },
]

export function JobList() {
  const [sortBy, setSortBy] = useState("recent")

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm text-gray-600">
          Showing <span className="font-medium">{JOBS.length}</span> jobs
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
        {JOBS.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline" className="mx-auto">
          Load More Jobs
        </Button>
      </div>
    </div>
  )
}
