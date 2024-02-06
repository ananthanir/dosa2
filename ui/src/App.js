import './App.css';

function App() {

  const postData = async () => {
    const input = document.getElementById('input').value;
    await fetch('http://127.0.0.1:3001/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: input })
    });
  }

  const getData = async () => {
    const response = await fetch('http://127.0.0.1:3001/data');
    const data = await response.json();
    document.querySelector('p').innerHTML = data.data;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen text-center">
      <h2 className="font-bold text-2xl py-2">Write Data</h2>
      <input id='input' className='border-2 border-teal-700 focus:border-cyan-500 mb-6 py-2 px-10 rounded' type="text" placeholder="Enter the data" />
      <button onClick={postData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Store Data</button>
      <br /><br /><br />
      <h2 className="font-bold text-2xl py-2">Read Data</h2>
      <button onClick={getData} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">Get Data</button>
      <p className="font-semibold text-lg py-2"></p>
    </div>
  );
}

export default App;
