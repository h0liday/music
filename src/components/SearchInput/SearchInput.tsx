import { FC } from "react";
import { Form } from "react-bootstrap";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchInput: FC<SearchInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <Form.Group className="mb-3" controlId="search">
      <Form.Control
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form.Group>
  );
};

export default SearchInput;
