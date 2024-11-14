import { campaigns } from "../../data/mockData";
import { renderMetric, renderPlatformIcons } from "../../helpers/table";

const CampaignTable = () => {
  return (
    <div className="w-full bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-md font-bold  text-gray-600  tracking-wider">
                Campaign Description
              </th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-600  tracking-wider hidden sm:table-cell">
                Platforms
              </th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-600  tracking-wider hidden md:table-cell">
                Campaign Status
              </th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-600  tracking-wider">
                Total Clicks
              </th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-600  tracking-wider hidden lg:table-cell">
                Total Installs
              </th>
              <th className="px-4 py-3 text-left text-md font-bold text-gray-600  tracking-wider hidden xl:table-cell">
                Total Events
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {campaigns.map((campaign) => (
              <tr key={campaign.id} className="hover:bg-gray-50">
                <td className="px-4 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={campaign.logo}
                      alt={campaign.name}
                      className="w-8 h-8 rounded"
                    />
                    <div className="flex flex-col">
                      <span className="font-medium">{campaign.name}</span>
                      <span className="text-sm text-gray-500">
                        {campaign.id}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 sm:hidden">
                    {renderPlatformIcons(campaign.platforms)}
                  </div>
                  <div className="mt-2 md:hidden ">
                    <div
                      className={`inline-flex items-center px-2 py-1 text-sm font-semibold
                      ${
                        campaign.status.text === "Active"
                          ? "bg-green-100 text-green-800"
                          : campaign.status.text === "Paused"
                          ? "bg-[#FFECDA] text-orange-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {campaign.status.count} {campaign.status.text}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                  {renderPlatformIcons(campaign.platforms)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap hidden md:table-cell">
                  <div
                    className={`inline-flex items-center px-3 py-2 text-center text-sm font-semibold
                    ${
                      campaign.status.text === "Active"
                        ? "bg-green-100 text-green-800"
                        : campaign.status.text === "Paused"
                        ? "bg-[#FFECDA] text-[#CA6F1C]"
                        : "bg-[#F0F0F0] text-[#808080]"
                    }`}
                  >
                    {campaign.status.count} {campaign.status.text}
                  </div>
                </td>
                <td className="px-4 py-4 whitespace-nowrap">
                  {renderMetric(campaign.totalClicks)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap hidden lg:table-cell">
                  {renderMetric(campaign.totalInstalls)}
                </td>
                <td className="px-4 py-4 whitespace-nowrap hidden xl:table-cell">
                  {renderMetric(campaign.totalEvents)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CampaignTable;
