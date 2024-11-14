import * as React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Sidebar from "@/components/Sidebar";
import Filters from "@/components/Filters";
import CampaignTable from "@/components/CampaignTable";

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div className="flex h-screen  bg-white">
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      <main className="flex-1 overflow-auto bg-gray-50">
        <div className="p-4 sm:p-6 w-full mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-2xl font-bold">Dashboard</h1>
          </div>
          {/* Filters */}
          <Filters />
          {/* Campaigns Table */}
          <CampaignTable />
        </div>
      </main>
    </div>
  );
};

export default App;
