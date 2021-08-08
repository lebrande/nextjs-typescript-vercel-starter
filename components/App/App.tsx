import { FC } from "react";

type Colors = 'red' | 'green' | 'blue';

interface ColorPickerProps<TColors> {
  colors: Array<TColors>;
  onPickColor(color: TColors): void;
}

declare const ColorPicker: FC<ColorPickerProps<'red' | 'green'>>;

const onPickColor = (color: 'red' | 'green') => {
  console.log(color);
}

export const App = () => {
  return (
    <ColorPicker
      colors={['red', 'green']}
      onPickColor={onPickColor}
    />
  );
}