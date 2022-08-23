import { useForm, SubmitHandler } from "react-hook-form";


export default function TagSelect() {
  const tagList = ["단타", "장타"]
    const {register, handleSubmit} = useForm();

    const handleClick = (data :any)=> console.log(data)
  return (
    <>
      {tagList.map((x, i) => {
        return (
          <div key={i}>
            <form onSubmit={handleSubmit(handleClick)}>
            <input type="checkbox" {...register("asasd")}/>
            <input type="submit" />
            </form>
          </div>
        );
      })}
    </>
  );
}
