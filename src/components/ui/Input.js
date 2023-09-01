const Input = ({ type, value, handleOnChange, placeholder, children }) => {
  return (
    <div className="form-group relative">
      <input
        id="search-video"
        name="search-video"
        type={type}
        value={value}
        onChange={handleOnChange}
        className="peer form-input w-full dark:bg-dark border-0 border-b-2 border-b-gray-500 ps-0 focus:border-b-primary focus:ring-0 placeholder:dark:text-dark placeholder:text-white"
        placeholder={placeholder}
      />
      <label
        htmlFor="search-video"
        className="peer absolute top-0 left-0 -translate-y-1/2 text-gray-500 peer-focus:dark:text-white peer-focus:text-dark peer-focus:top-0 peer-placeholder-shown:top-1/2 transition-all"
      >
        {placeholder}
      </label>
      {children}
    </div>
  );
};

export default Input;
