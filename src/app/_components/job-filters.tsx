"use client"

import { Button } from "@/components/ui/button"

import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function JobFilters() {
  const [salaryRange, setSalaryRange] = useState([300000])

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>

      <Accordion type="multiple" defaultValue={["location", "jobType", "experience", "skills"]}>
        <AccordionItem value="location">
          <AccordionTrigger className="text-base font-medium">Location</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="yaounde" />
                <Label htmlFor="yaounde" className="text-sm font-normal">
                  Yaoundé
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="douala" />
                <Label htmlFor="douala" className="text-sm font-normal">
                  Douala
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="buea" />
                <Label htmlFor="buea" className="text-sm font-normal">
                  Buea
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="limbe" />
                <Label htmlFor="limbe" className="text-sm font-normal">
                  Limbe
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="remote" />
                <Label htmlFor="remote" className="text-sm font-normal">
                  Remote
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="jobType">
          <AccordionTrigger className="text-base font-medium">Job Type</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="fulltime" />
                <Label htmlFor="fulltime" className="text-sm font-normal">
                  Full-time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="parttime" />
                <Label htmlFor="parttime" className="text-sm font-normal">
                  Part-time
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="contract" />
                <Label htmlFor="contract" className="text-sm font-normal">
                  Contract
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="freelance" />
                <Label htmlFor="freelance" className="text-sm font-normal">
                  Freelance
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="internship" />
                <Label htmlFor="internship" className="text-sm font-normal">
                  Internship
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="experience">
          <AccordionTrigger className="text-base font-medium">Experience Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="entry" />
                <Label htmlFor="entry" className="text-sm font-normal">
                  Entry Level
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="junior" />
                <Label htmlFor="junior" className="text-sm font-normal">
                  Junior (1-3 years)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="mid" />
                <Label htmlFor="mid" className="text-sm font-normal">
                  Mid-Level (3-5 years)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="senior" />
                <Label htmlFor="senior" className="text-sm font-normal">
                  Senior (5+ years)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="lead" />
                <Label htmlFor="lead" className="text-sm font-normal">
                  Lead/Manager
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="salary">
          <AccordionTrigger className="text-base font-medium">Salary Range (XAF)</AccordionTrigger>
          <AccordionContent>
            <div className="pt-6 px-2">
              <Slider defaultValue={[300000]} max={2000000} step={50000} onValueChange={setSalaryRange} />
              <div className="mt-2 text-sm text-gray-600">{salaryRange[0].toLocaleString()} XAF and above</div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="skills">
          <AccordionTrigger className="text-base font-medium">Skills</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 pt-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="javascript" />
                <Label htmlFor="javascript" className="text-sm font-normal">
                  JavaScript
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="python" />
                <Label htmlFor="python" className="text-sm font-normal">
                  Python
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="react" />
                <Label htmlFor="react" className="text-sm font-normal">
                  React
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="java" />
                <Label htmlFor="java" className="text-sm font-normal">
                  Java
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="php" />
                <Label htmlFor="php" className="text-sm font-normal">
                  PHP
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sql" />
                <Label htmlFor="sql" className="text-sm font-normal">
                  SQL
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="aws" />
                <Label htmlFor="aws" className="text-sm font-normal">
                  AWS
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="devops" />
                <Label htmlFor="devops" className="text-sm font-normal">
                  DevOps
                </Label>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6">
        <Button variant="outline" className="w-full">
          Clear Filters
        </Button>
      </div>
    </div>
  )
}
