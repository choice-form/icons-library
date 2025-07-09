import { IconButton, Range } from "@choiceform/design-system";
import { Refresh } from "@choiceform/icons-react";
import { forwardRef } from "react";
import { useCustomizer } from "../../context";

export const Customizer = forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, ref) => {
  const { color, setColor, strokeWidth, setStrokeWidth, size, setSize } =
    useCustomizer();

  const convertColor = (color: string) => {
    if (color.includes("currentColor")) {
      return "#000000";
    }
    return color;
  };

  return (
    <div
      ref={ref}
      {...props}
      className="pl-4 pr-2 pt-2 pb-4 bg-default-background rounded-xl mr-4
      grid grid-cols-[1fr_auto] gap-2 items-center"
    >
      <h2 className="text-sm font-medium">Customizer</h2>
      <IconButton
        className="ml-auto"
        onClick={() => {
          setColor("currentColor");
          setStrokeWidth(1);
          setSize(16);
        }}
        tooltip={{
          content: "Reset",
        }}
      >
        <Refresh />
      </IconButton>

      <span>Color</span>
      <label
        htmlFor="color-picker"
        className="relative flex items-center gap-1 bg-secondary-background rounded-md px-2 py-1
        border border-transparent hover:border-selected-boundary"
      >
        <div
          className="w-4 h-4 rounded-full"
          style={{
            backgroundColor: color,
          }}
        />
        <span className="font-mono">{color}</span>
        <input
          className="absolute inset-0 opacity-0"
          id="color-picker"
          type="color"
          value={convertColor(color)}
          onChange={(e) => setColor(e.target.value)}
        />
      </label>

      <span>Size</span>
      <strong className="text-right">{size}</strong>
      <Range
        className="col-span-full"
        trackSize={{ width: 198, height: 8 }}
        thumbSize={12}
        min={16}
        max={48}
        step={4}
        value={size}
        defaultValue={16}
        onChange={setSize}
      />

      <span>Stroke width</span>
      <strong className="text-right">{strokeWidth}</strong>
      <Range
        className="col-span-full"
        trackSize={{ width: 198, height: 8 }}
        thumbSize={12}
        min={0.5}
        max={3}
        step={0.25}
        value={strokeWidth}
        defaultValue={1}
        onChange={setStrokeWidth}
      />
    </div>
  );
});

Customizer.displayName = "Customizer";
