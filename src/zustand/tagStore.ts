import create from "zustand";

interface TagStoreProps {
  TagList: string[];
  SetTag: (tag: string[]) => void;
}

export const useTagStore = create<TagStoreProps>((set) => ({
  TagList: [],
  SetTag: (tag: string[]) => set((state) => ({ TagList: tag })),
}));

export function pushTags(tags: string[], tag: string): string[] {
  if (isExistTag(tags, tag)) {
    let new_tags = [...tags];
    new_tags.push(tag);
    return new_tags;
  } else {
    return tags;
  }
}

export function removeTags(tags: string[], tag: string): string[] {
  let old_tags = [...tags];
  let index = old_tags.indexOf(tag);
  old_tags.splice(index,1);
  return old_tags;
}

export function isExistTag(tags: string[], tag: string) {
  if (tags == undefined) {
    return false;
  }
  let old_tags = [...tags];
  if (old_tags.indexOf(tag) == -1) {
    return true;
  }
  return false;
}
