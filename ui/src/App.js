import './App.css';

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
    <h2 className="font-bold text-2xl py-2">Write Data</h2>
    <input id='input'  className='border-2 border-teal-700 focus:border-cyan-500 mb-6 py-2 px-10 rounded' type="text" placeholder="Enter the data" />
    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Store Data</button>
    <br /><br /><br />
    <h2 className="font-bold text-2xl py-2">Read Data</h2>
    <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Get Data</button>
    <p className="font-semibold text-lg py-2"></p>
  </div>
  );
}

export default App;
