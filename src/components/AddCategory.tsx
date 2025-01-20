import { useState } from "react";

interface AddCategoryProps {
  // setCategories: React.Dispatch<React.SetStateAction<string[]>>
  onNewCategory: (value: string) => void;
}

/**
 * Component that renders a form to add a new category
 * @param {React.Dispatch<React.SetStateAction<string[]>>} setCategories
 *    Function to update the categories state
 * @returns {JSX.Element} The component
 */
export const AddCategory: React.FC<AddCategoryProps> =  ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState<string>('One Punch');


  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (ev : React.FormEvent) => {
    ev.preventDefault();
    if(inputValue.trim().length <= 1) return;
    onNewCategory(inputValue.trim());
    setInputValue('');
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />

    </form>
  )
}
