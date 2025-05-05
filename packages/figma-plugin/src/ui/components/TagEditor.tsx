import React, { useState } from "react";
import TagInput from "./TagInput";
import PresetTagsSelector from "./PresetTagsSelector";

interface TagEditorProps {
  initialTags: string;
  onConfirm: (tags: string) => void;
  onCancel: () => void;
}

const TagEditor: React.FC<TagEditorProps> = ({
  initialTags,
  onConfirm,
  onCancel,
}) => {
  const [tags, setTags] = useState(initialTags);

  // 处理标签输入变化
  const handleTagChange = (newTags: string) => {
    setTags(newTags);
  };

  // 处理预设标签点击
  const handlePresetTagClick = (tag: string) => {
    // 检查标签是否已存在
    const currentTags = tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    if (!currentTags.includes(tag)) {
      // 添加标签
      const newTags = [...currentTags, tag].join(",");
      setTags(newTags);
    }
  };

  // 处理确认按钮点击
  const handleConfirm = () => {
    onConfirm(tags);
  };

  return (
    <div className="inline-editor">
      <TagInput
        value={tags}
        onChange={handleTagChange}
        placeholder="Enter tags..."
      />

      <PresetTagsSelector onTagSelect={handlePresetTagClick} />

      <div className="edit-buttons">
        <button onClick={handleConfirm} data-variant="primary">
          Confirm
        </button>
        <button onClick={onCancel} data-variant="secondary">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default TagEditor;
