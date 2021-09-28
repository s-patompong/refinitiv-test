import { useEffect, useState } from 'react'
import axios from "axios";

const url = 'https://api.publicapis.org/categories';

function App() {
  const [ categories, setCategories ] = useState([]);
  const [ filterText, setFilterText ] = useState('');
  const [ filteredCategories, setFilteredCategories ] = useState([]);

  useEffect(() => {
    axios.get(url).then(({ data }) => {
      setCategories(data);
    });
  }, []);

  // Watch for categories and filter text changes and filter accordingly
  useEffect(() => {
    // Use lowercase comparison to ignore case
    const tempFilteredCategories = categories.filter(category => category.toLowerCase().includes(filterText.toLowerCase()));
    setFilteredCategories(tempFilteredCategories);
  }, [ categories, filterText ]);

  return (
    <div className="max-w-2xl mx-auto py-4 flex flex-col gap-4 text-gray-700">
      <div>
        <label htmlFor="filter">Filter</label>
        <input
          type="text"
          id="filter"
          className="mt-1 w-full border-2 border-gray-500 py-1 px-3 rounded focus:outline-none focus:ring-2 focus:ring-opacity-50 focus:ring-gray-700"
          value={filterText}
          onChange={e => setFilterText(e.target.value)}
        />
      </div>
      <div>
        <table className="border-collapse">
          <thead>
          <tr className="border">
            <th className="text-left py-1 px-2">Category Name</th>
          </tr>
          </thead>
          <tbody>
          {filteredCategories.map(category => (
            <tr key={category} className="border">
              <td className="py-1 px-2">{category}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
