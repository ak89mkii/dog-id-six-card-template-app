import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [image, setImage] = useState(null);
  const [dogName, setDogName] = useState("");
  const [breed, setBreed] = useState("");
  const [memberName, setMemberName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [expiration, setExpiration] = useState("");

  const [image2, setImage2] = useState(null);
  const [dogName2, setDogName2] = useState("");
  const [breed2, setBreed2] = useState("");
  const [memberName2, setMemberName2] = useState("");
  const [idNumber2, setIdNumber2] = useState("");
  const [expiration2, setExpiration2] = useState("");

  const [image3, setImage3] = useState(null);
  const [dogName3, setDogName3] = useState("");
  const [breed3, setBreed3] = useState("");
  const [memberName3, setMemberName3] = useState("");
  const [idNumber3, setIdNumber3] = useState("");
  const [expiration3, setExpiration3] = useState("");

  const [image4, setImage4] = useState(null);
  const [dogName4, setDogName4] = useState("");
  const [breed4, setBreed4] = useState("");
  const [memberName4, setMemberName4] = useState("");
  const [idNumber4, setIdNumber4] = useState("");
  const [expiration4, setExpiration4] = useState("");

  const [image5, setImage5] = useState(null);
  const [dogName5, setDogName5] = useState("");
  const [breed5, setBreed5] = useState("");
  const [memberName5, setMemberName5] = useState("");
  const [idNumber5, setIdNumber5] = useState("");
  const [expiration5, setExpiration5] = useState("");

  const [image6, setImage6] = useState(null);
  const [dogName6, setDogName6] = useState("");
  const [breed6, setBreed6] = useState("");
  const [memberName6, setMemberName6] = useState("");
  const [idNumber6, setIdNumber6] = useState("");
  const [expiration6, setExpiration6] = useState("");

  const handleImageUpload = (event, slot) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result;
        switch (slot) {
          case 1: setImage(result); break;
          case 2: setImage2(result); break;
          case 3: setImage3(result); break;
          case 4: setImage4(result); break;
          case 5: setImage5(result); break;
          case 6: setImage6(result); break;
          default: break;
        }
      };
      reader.readAsDataURL(file);
    }
  };  

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">
      
      <h1>Dog ID Form Six-Card Template App</h1>
      <p className="text">Developed by Ponder Code</p>
      <p className="text">NOTE: To easily resize or crop an image, go to <a href="https://www.resizepixel.com" target="_blank">ResizePixel.com</a> (not affiliated with Ponder Code)</p>
      <button onClick={handlePrint} className="print-button">Print ID Card</button>

      {/* Card 01 */}
      <br></br>      
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 1)} className="input-field" />
      <input type="text" placeholder="Dog's Name" value={dogName} onChange={(e) => setDogName(e.target.value)} className="input-field" />
      <input type="text" placeholder="Breed" value={breed} onChange={(e) => setBreed(e.target.value)} className="input-field" />
      <input type="text" placeholder="Associate Member's Name" value={memberName} onChange={(e) => setMemberName(e.target.value)} className="input-field" />
      <input type="text" placeholder="ID Number" value={idNumber} onChange={(e) => setIdNumber(e.target.value)} className="input-field" />
      <input type="text" placeholder="Expiration Date" value={expiration} onChange={(e) => setExpiration(e.target.value)} className="input-field" />
      
      <div className="id-card">
        {image && <img src={image} alt="ID" className="uploaded-photo" />}
        <p className="dog-name">{dogName}</p>
        <p className="breed">{breed}</p>
        <p className="member-name">{memberName}</p>
        <p className="id-number">{idNumber}</p>
        <p className="expiration">{expiration}</p>
      </div>

      {/* Card 02 */}
      <br></br>      
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 2)} className="input-field" />
      <input type="text" placeholder="Dog's Name" value={dogName2} onChange={(e) => setDogName2(e.target.value)} className="input-field" />
      <input type="text" placeholder="Breed" value={breed2} onChange={(e) => setBreed2(e.target.value)} className="input-field" />
      <input type="text" placeholder="Associate Member's Name" value={memberName2} onChange={(e) => setMemberName2(e.target.value)} className="input-field" />
      <input type="text" placeholder="ID Number" value={idNumber2} onChange={(e) => setIdNumber2(e.target.value)} className="input-field" />
      <input type="text" placeholder="Expiration Date" value={expiration2} onChange={(e) => setExpiration2(e.target.value)} className="input-field" />

      <div className="id-card-2">
        {image && <img src={image2} alt="ID" className="uploaded-photo" />}
        <p className="dog-name">{dogName2}</p>
        <p className="breed">{breed2}</p>
        <p className="member-name">{memberName2}</p>
        <p className="id-number">{idNumber2}</p>
        <p className="expiration">{expiration2}</p>
      </div>

      {/* Card 03 */}
      <br></br>      
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 3)} className="input-field" />
      <input type="text" placeholder="Dog's Name" value={dogName3} onChange={(e) => setDogName3(e.target.value)} className="input-field" />
      <input type="text" placeholder="Breed" value={breed3} onChange={(e) => setBreed3(e.target.value)} className="input-field" />
      <input type="text" placeholder="Associate Member's Name" value={memberName3} onChange={(e) => setMemberName3(e.target.value)} className="input-field" />
      <input type="text" placeholder="ID Number" value={idNumber3} onChange={(e) => setIdNumber3(e.target.value)} className="input-field" />
      <input type="text" placeholder="Expiration Date" value={expiration3} onChange={(e) => setExpiration3(e.target.value)} className="input-field" />

      <div className="id-card-3">
        {image && <img src={image3} alt="ID" className="uploaded-photo" />}
        <p className="dog-name">{dogName3}</p>
        <p className="breed">{breed3}</p>
        <p className="member-name">{memberName3}</p>
        <p className="id-number">{idNumber3}</p>
        <p className="expiration">{expiration3}</p>
      </div>

      {/* Card 04 */}
      <br></br>      
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 4)} className="input-field" />
      <input type="text" placeholder="Dog's Name" value={dogName4} onChange={(e) => setDogName4(e.target.value)} className="input-field" />
      <input type="text" placeholder="Breed" value={breed4} onChange={(e) => setBreed4(e.target.value)} className="input-field" />
      <input type="text" placeholder="Associate Member's Name" value={memberName4} onChange={(e) => setMemberName4(e.target.value)} className="input-field" />
      <input type="text" placeholder="ID Number" value={idNumber4} onChange={(e) => setIdNumber4(e.target.value)} className="input-field" />
      <input type="text" placeholder="Expiration Date" value={expiration4} onChange={(e) => setExpiration4(e.target.value)} className="input-field" />

      <div className="id-card-4">
        {image && <img src={image4} alt="ID" className="uploaded-photo" />}
        <p className="dog-name">{dogName4}</p>
        <p className="breed">{breed4}</p>
        <p className="member-name">{memberName4}</p>
        <p className="id-number">{idNumber4}</p>
        <p className="expiration">{expiration4}</p>
      </div>

      {/* Card 05 */}
      <br></br>      
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 5)} className="input-field" />
      <input type="text" placeholder="Dog's Name" value={dogName5} onChange={(e) => setDogName5(e.target.value)} className="input-field" />
      <input type="text" placeholder="Breed" value={breed5} onChange={(e) => setBreed5(e.target.value)} className="input-field" />
      <input type="text" placeholder="Associate Member's Name" value={memberName5} onChange={(e) => setMemberName5(e.target.value)} className="input-field" />
      <input type="text" placeholder="ID Number" value={idNumber5} onChange={(e) => setIdNumber5(e.target.value)} className="input-field" />
      <input type="text" placeholder="Expiration Date" value={expiration5} onChange={(e) => setExpiration5(e.target.value)} className="input-field" />

      <div className="id-card-5">
        {image && <img src={image5} alt="ID" className="uploaded-photo" />}
        <p className="dog-name">{dogName5}</p>
        <p className="breed">{breed5}</p>
        <p className="member-name">{memberName5}</p>
        <p className="id-number">{idNumber5}</p>
        <p className="expiration">{expiration5}</p>
      </div>

      {/* Card 06 */}
      <br></br>      
      <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e, 6)} className="input-field" />
      <input type="text" placeholder="Dog's Name" value={dogName6} onChange={(e) => setDogName6(e.target.value)} className="input-field" />
      <input type="text" placeholder="Breed" value={breed6} onChange={(e) => setBreed6(e.target.value)} className="input-field" />
      <input type="text" placeholder="Associate Member's Name" value={memberName6} onChange={(e) => setMemberName6(e.target.value)} className="input-field" />
      <input type="text" placeholder="ID Number" value={idNumber6} onChange={(e) => setIdNumber6(e.target.value)} className="input-field" />
      <input type="text" placeholder="Expiration Date" value={expiration6} onChange={(e) => setExpiration6(e.target.value)} className="input-field" />

      <div className="id-card-6">
        {image && <img src={image6} alt="ID" className="uploaded-photo" />}
        <p className="dog-name">{dogName6}</p>
        <p className="breed">{breed6}</p>
        <p className="member-name">{memberName6}</p>
        <p className="id-number">{idNumber6}</p>
        <p className="expiration">{expiration6}</p>
      </div>
      
    </div>
  );
};

export default App;
