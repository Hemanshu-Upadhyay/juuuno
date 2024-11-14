import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FilterSelect from "../../helpers/filters";
import { filterOptions } from "../../data/mockData";

const Filters = () => {
  return (
    <Card className="p-6 bg-white shadow-sm">
      <h2 className="text-sm font-semibold mb-2">Search for Saved Campaigns</h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#B9B9B9] h-4 w-4" />
          <Input
            placeholder="Search for Saved Campaigns"
            className="pl-10 pr-4 py-2 w-full text-[#B9B9B9]"
            aria-label="Search Campaigns"
          />
        </div>
        <Button
          className="bg-[#8B1F11] text-white hover:bg-[#6F180D] transition-colors duration-200 whitespace-nowrap"
          aria-label="Create a Campaign"
        >
          Create Campaign
        </Button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4 text-[#B9B9B9]">
        {filterOptions.map((filter) => (
          <FilterSelect
            key={filter.placeholder}
            placeholder={filter.placeholder}
            options={filter.options}
          />
        ))}
        <div className="relative">
          {/* <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" /> */}
          <Input
            type="date"
            placeholder="Date Range"
            aria-label="Select Date Range"
          />
        </div>
        <Button
          className="bg-[#D7E0FF] text-[#222222] hover:bg-[#D1D4FF] transition-colors duration-200 w-full"
          aria-label="Apply Filters"
        >
          Apply
        </Button>
      </div>
    </Card>
  );
};

export default Filters;
