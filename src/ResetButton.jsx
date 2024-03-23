import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ setCount }) {
  const handleClick = (event) => {
    setCount(0);

    // adding to prevent it from interferring with the spacebar functionality
    event.currentTarget.blur();
  };

  return (
    <button onClick={handleClick} className="reset-btn">
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
