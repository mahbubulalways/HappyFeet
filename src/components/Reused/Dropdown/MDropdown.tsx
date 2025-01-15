import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

type TInput = {
  label: string;
  register: any;
  options: string[];
};

const MDropdown = ({ label, register, options }: TInput) => {
  return (
    <div>
      <select
        name=""
        id=""
        {...register}
        className="border-[1.5px] border-gray-400/50 focus:outline-none px-2 w-full py-3 placeholder:text-gray-500 font placeholder:text-[14px] poppins-light "
        placeholder={label}
      >
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MDropdown;
