import { useFormContext } from "react-hook-form";
import field from "../../../styles/mc/TextField.module.css";
import btn from "../../../styles/mc/Button.module.css";
import Tag from "../tag/tag";

export default function TagForm() {
    const tags = ["장타", "단타", "야생", "모드", "1231"];

  return (
    <>
      <div className={field.McField}>
        <div className="grid grid-flow-row grid-cols-4 gap-2">
          {tags.map((x, i) => (
            <div className="" key={i}>
              <Tag name={x} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
