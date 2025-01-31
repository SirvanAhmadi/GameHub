import usePlatforms from "@/hook/usePlatforms";
import { createListCollection } from "@chakra-ui/react";

export const createListCollectionHelper = () => {
  const { data } = usePlatforms();

  const items: { label: string; value: number }[] = data?.results.map(
    (platform) => ({
      label: platform.name,
      value: platform.id,
    })
  ) || [{ label: "", value: 0 }];

  const frameworks = createListCollection({ items });

  return frameworks
};

