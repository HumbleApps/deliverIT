export type OptionProps = {
  label: string;
  value: string;
  disabled?: boolean;
};

export type SelectOptionComponentProps = {
  item: OptionProps;
  isSelected: boolean;
  disabled?: boolean;
};
