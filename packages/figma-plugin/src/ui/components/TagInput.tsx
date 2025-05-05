import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

interface TagInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

interface Tag {
  id: string;
  text: string;
}

const TagInput: React.FC<TagInputProps> = ({
  value,
  onChange,
  placeholder = "Add tags...",
  className = "",
}) => {
  // 将逗号分隔的标签字符串转换为标签对象数组
  const createTagsFromString = (str: string): Tag[] => {
    if (!str || str.trim() === "") return [];
    return str
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "")
      .map((tag) => ({
        id: `tag-${Math.random().toString(36).substring(2, 9)}`,
        text: tag,
      }));
  };

  const [tags, setTags] = useState<Tag[]>(createTagsFromString(value));
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // 当外部value改变时，更新内部tags状态
  useEffect(() => {
    const newTags = createTagsFromString(value);
    setTags(newTags);
  }, [value]);

  // 将标签数组转换回字符串并触发onChange
  const updateTags = (newTags: Tag[]) => {
    const tagsString = newTags.map((tag) => tag.text).join(",");
    onChange(tagsString);
    setTags(newTags);
  };

  // 添加新标签
  const addTag = (text: string) => {
    if (text && text.trim() !== "") {
      const trimmedText = text.trim();
      // 检查是否已存在相同标签
      if (
        !tags.some(
          (tag) => tag.text.toLowerCase() === trimmedText.toLowerCase()
        )
      ) {
        const newTag: Tag = {
          id: `tag-${Math.random().toString(36).substring(2, 9)}`,
          text: trimmedText,
        };
        updateTags([...tags, newTag]);
      }
      setInputValue("");
    }
  };

  // 移除标签
  const removeTag = (id: string) => {
    const newTags = tags.filter((tag) => tag.id !== id);
    updateTags(newTags);
  };

  // 处理输入框变化
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // 处理键盘事件 (回车添加新标签，退格键删除最后一个标签)
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === "Backspace" && inputValue === "" && tags.length > 0) {
      e.preventDefault();
      removeTag(tags[tags.length - 1].id);
    } else if (e.key === "," || e.key === " ") {
      e.preventDefault();
      addTag(inputValue);
    }
  };

  // 批量添加多个标签
  const addTags = (tagTexts: string[]) => {
    if (tagTexts.length === 0) return;

    // 过滤出所有有效且不重复的标签
    const validTags: Tag[] = [];
    const existingTexts = tags.map((tag) => tag.text.toLowerCase());

    tagTexts.forEach((text) => {
      const trimmed = text.trim();
      if (trimmed !== "" && !existingTexts.includes(trimmed.toLowerCase())) {
        validTags.push({
          id: `tag-${Math.random().toString(36).substring(2, 9)}`,
          text: trimmed,
        });
        // 添加到已存在列表中避免重复
        existingTexts.push(trimmed.toLowerCase());
      }
    });

    if (validTags.length > 0) {
      // 一次性更新所有标签
      updateTags([...tags, ...validTags]);
    }
  };

  // 处理粘贴事件，支持多种格式的标签粘贴
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text");

    // 处理多行文本，合并成一行
    const normalizedData = pastedData.replace(/\r\n|\r|\n/g, ",");

    // 提取所有有效的标签
    const allTags: string[] = [];

    // 匹配带引号的内容：支持单引号、双引号
    const quotedRegex = /(['"])(.*?)\1/g;
    let match;

    // 提取所有引号内的内容
    while ((match = quotedRegex.exec(normalizedData)) !== null) {
      const tagContent = match[2].trim();
      if (tagContent !== "") {
        allTags.push(tagContent);
      }
    }

    // 如果没有找到带引号的标签，或者希望也处理非引号内容
    if (allTags.length === 0) {
      // 按逗号或空格分割
      const simpleTags = normalizedData.split(/[,\s]+/);
      simpleTags.forEach((tag) => {
        const trimmed = tag.trim();
        if (trimmed !== "") {
          allTags.push(trimmed);
        }
      });
    }

    // 批量添加所有找到的标签
    console.log("解析出的标签:", allTags);
    addTags(allTags);
  };

  // 点击容器时聚焦输入框
  const handleContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="tag-input-container" onClick={handleContainerClick}>
      <div className="tag-input-tags">
        {tags.map((tag) => (
          <span key={tag.id} className="tag-input-tag">
            <span className="tag-input-tag-text">{tag.text}</span>
            <span
              className="tag-input-tag-remove"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(tag.id);
              }}
            >
              &times;
            </span>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          className="tag-input-field"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onPaste={handlePaste}
          placeholder={tags.length === 0 ? placeholder : ""}
        />
      </div>
    </div>
  );
};

export default TagInput;
