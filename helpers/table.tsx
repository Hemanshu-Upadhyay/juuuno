import Up from "../src/assets/Up.svg";
import Down from "../src/assets/Down.svg";
import android from "../src/assets/icons/android.svg";
import apple from "../src/assets/icons/apple.svg";
import windows from "../src/assets/icons/windows.svg";

export const renderMetric = ({
  value,
  change,
  positive,
}: {
  value: string;
  change: number;
  positive: boolean;
}) => (
  <div className="flex flex-col">
    <span className="text-xl font-bold">{value}</span>
    <div
      className={`flex items-center text-md font-medium ${
        positive ? "text-green-600" : "text-red-600"
      }`}
    >
      <span>{change.toFixed(2)}%</span>
      {positive ? <img src={Up} alt="up" /> : <img src={Down} alt="down" />}
    </div>
  </div>
);

export const renderPlatformIcons = (platforms: string[]) => {
  return (
    <div className="flex gap-1 rounded-full">
      {platforms.map((platform) => (
        <div
          key={platform}
          className="w-7 h-7 flex items-center justify-center bg-gray-100 rounded-full"
        >
          {platform === "android" && (
            <img src={android} alt="android" className="w-16 h-16 " />
          )}
          {platform === "apple" && (
            <img src={apple} className="rounded-full" alt="apple" />
          )}
          {platform === "windows" && <img src={windows} alt="windows" />}
        </div>
      ))}
    </div>
  );
};
