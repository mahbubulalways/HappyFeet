import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

type TInput = {
  label: string;
  register: any;
  defaultValue?: string;
  type: string;
};

const MInput = ({ label, register, defaultValue, type }: TInput) => {
  return (
    <div>
      <input
        className="border-[1.5px] border-gray-400/50 focus:outline-none px-2 w-full py-3 placeholder:text-gray-500 font placeholder:text-[14px] poppins-light "
        type={type}
        placeholder={label}
        {...register}
        defaultValue={defaultValue}
      />
    </div>
  );
};

export default MInput;
