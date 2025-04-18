import { Search } from "./_components/search";
import { JobFilters } from "./_components/job-filters";
import { JobList } from "./_components/job-list";
import { MobileFilters } from "./_components/mobile-filters";

export default function JobListingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">CamerTech Jobs</h1>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Jobs
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Companies
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Resources
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 rounded-md">
              Sign In
            </button>
            <button className="px-4 py-2 text-sm font-medium text-white bg-emerald-600 hover:bg-emerald-700 rounded-md">
              Post a Job
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Find IT Jobs in Cameroon
          </h2>
          <p className="text-gray-600">
            Discover the best tech opportunities across Yaoundé, Douala, and
            beyond
          </p>
        </div>

        <Search />

        <div className="md:hidden mt-6">
          <MobileFilters />
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="hidden md:block">
            <JobFilters />
          </div>

          <div className="md:col-span-3">
            <JobList />
          </div>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">CamerTech Jobs</h3>
              <p className="text-gray-400 text-sm">
                The leading platform for IT professionals in Cameroon to find
                their dream jobs.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Create Profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Job Alerts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Career Advice
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Browse Candidates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Recruitment Solutions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Email: info@camertechjobs.com</li>
                <li>Phone: +237 6XX XXX XXX</li>
                <li>Akwa, Douala, Cameroon</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
            <p>© 2025 CamerTech Jobs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
