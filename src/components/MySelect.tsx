import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select";
interface Props {
  data: { label: string; value: string | number }[];
  placeholder: string;
  onSelectChange: (value: number | string | null) => void;
  seletedValue: string | number | null;
}

const MySelect = ({
  data,
  placeholder,
  onSelectChange,
  seletedValue,
}: Props) => {
  return (
    <NativeSelectRoot
      onChange={(event) => {
        onSelectChange(event.target.value);
      }}
      size="md"
      rounded={"xl"}
      bgColor={"var(--card-color)"}
      width="240px"
    >
      <NativeSelectField
        bgColor={"var(--card-color)"}
        border={0}
        placeholder={placeholder}
        value={seletedValue || undefined}
      >
        {data.map((item) => (
          <option
            style={{ backgroundColor: "var(--card-color)" }}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </NativeSelectField>
    </NativeSelectRoot>
  );
};

export default MySelect;
