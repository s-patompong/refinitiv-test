function Input({number, setNumber}) {
  return (
    <input
      type="number"
      value={number}
      onChange={e => setNumber(e.target.value.replace(/\D\.-/,''))}
      className="border-2 border-gray-400 py-1 px-2"
    />
  )
}

export default Input;