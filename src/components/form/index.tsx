export interface IFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

const Form = ({ onSubmit }: IFormProps): JSX.Element => {
  return (
    <form action="submit" onSubmit={onSubmit}>
      <input type="text" placeholder="Name" name="name" />
      <input type="number" placeholder="Price" name="price" />
      <input type="number" placeholder="Stock" name="stock" />
      <input type="text" placeholder="Image" name="image" />
      <button type="submit" className='success'>Add</button>
    </form>
  )
}

export default Form
