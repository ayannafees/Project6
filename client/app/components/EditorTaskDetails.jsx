import { useRef } from "react";

const EditorTaskDetails = ({task}) => {
    const fileInputRef = useRef();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{task.title}</h1>
      <p className="text-lg text-gray-600">
        <span className="font-bold">Created by:</span> {task.createdby}
      </p>
      <p className="text-lg text-gray-800">
        <span className="font-bold">Description:</span> {task.description}
      </p>
      <p className="text-lg">
        <span className="font-bold">
          Signed URL:{" "}
          <span className="text-blue-500 hover:underline">
            {task.signedUrl}
          </span>
        </span>
      </p>
      {/* <iframe
        className="mt-6"
        width="680"
        height="300"
        src={`https://www.youtube.com/embed/Qwm6BSGrOq0`}
        frameBorder="0"
        allowFullScreen
        title="YouTube Video"
      ></iframe> */}
      <div className="flex justify-center space-x-4 mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Show Chat
        </button>
        <input 
              type="file"
              ref={fileInputRef}
              style={{display: 'none'}}
              onChange = {(e) => setFile(e.target.files[0])}
            />
        <button 
            onClick={()=>fileInputRef.current.click()}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload Video to Signed Url
        </button>
      </div>
    </div>
  );
};

export default EditorTaskDetails;
