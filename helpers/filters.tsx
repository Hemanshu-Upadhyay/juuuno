import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../src/components/ui/select";

interface FilterSelectProps {
  placeholder: string;
  options: { value: string; label: string }[];
}

const FilterSelect = ({ placeholder, options }: FilterSelectProps) => (
  <Select>
    <SelectTrigger className="w-full">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent>
      {options.map((option) => (
        <SelectItem key={option.value} value={option.value}>
          {option.label}
        </SelectItem>
      ))}
    </SelectContent>
  </Select>
);

export default FilterSelect;
