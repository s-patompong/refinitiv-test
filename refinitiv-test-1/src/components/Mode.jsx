import { modes } from "../App";

function Mode({mode, setMode}) {
  return (
    <select name="mode" value={mode} onChange={e => setMode(e.target.value)} className="border-2 border-gray-400 py-1 px-2">
      {modes.map(mode => (
        <option value={mode} key={mode}>{mode}</option>
      ))}
    </select>
  );
}

export default Mode;