import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { createListCollectionHelper } from "@/utils/selectUtils";

const PlatformFilter = () => {
  const frameworks = createListCollectionHelper();

  return (
    <SelectRoot variant={"filled"} collection={frameworks}>
      <SelectLabel  />
      <SelectTrigger  rounded={"xl"}  bgColor={"var(--card-color)"}>
        <SelectValueText placeholder="Select Platform" />
      </SelectTrigger>
      <SelectContent>
        {frameworks.items.map((platform) => (
          <SelectItem item={platform} key={platform.value}>
            {platform.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};

export default PlatformFilter;
