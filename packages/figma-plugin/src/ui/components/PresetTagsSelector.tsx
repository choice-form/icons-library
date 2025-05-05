import React, { useState } from "react";
import { tagPresets } from "../types";

interface PresetTagsSelectorProps {
  onTagSelect: (tag: string) => void;
  className?: string;
}

const PresetTagsSelector: React.FC<PresetTagsSelectorProps> = ({
  onTagSelect,
  className = "",
}) => {
  const [selectedPreset, setSelectedPreset] = useState("");

  // 处理预设选择变更
  const handlePresetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPreset(event.target.value);
  };

  return (
    <div className={`preset-container ${className}`}>
      <label className="preset-label">Preset tags:</label>
      <select
        className="preset-dropdown"
        value={selectedPreset}
        onChange={handlePresetChange}
      >
        <option value="">-- Select preset --</option>
        {Object.keys(tagPresets).map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      {selectedPreset && (
        <div className="preset-tags">
          {tagPresets[selectedPreset].map((tag) => (
            <span
              key={tag}
              className="preset-tag"
              onClick={() => onTagSelect(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default PresetTagsSelector;
