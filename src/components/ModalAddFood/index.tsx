import { FiCheckSquare } from "react-icons/fi";
import { Form } from "./styles";
import Modal from "../Modal";
import Input from "../Input";

interface ModalAddFoodProps {
  isOpen: boolean;
  setIsOpen: () => void;
  handleAddFood: (food: FoodForm) => Promise<void>;
}

interface FoodForm {
  image: string;
  name: string;
  price: number;
  description: string;
}

const ModalAddFood = ({
  isOpen,
  setIsOpen,
  handleAddFood,
}: ModalAddFoodProps) => {
  const handleSubmit = async (data: FoodForm) => {
    handleAddFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
};

export default ModalAddFood;
