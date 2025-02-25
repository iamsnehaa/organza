import { useState } from "react";

export default function ProductForm() {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setImageFile(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("imageFile", imageFile);

    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      alert("Product added successfully!");
    } else {
      alert("Failed to add product");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded-lg shadow-md">
      <input type="text" placeholder="Product Name" required className="w-full p-2 border rounded" />
      <input type="text" placeholder="Description" required className="w-full p-2 border rounded mt-2" />
      <input type="number" placeholder="Price" required className="w-full p-2 border rounded mt-2" />

      {/* Image Upload */}
      <input type="file" accept="image/*" onChange={handleFileChange} className="mt-2" />
      {preview && <img src={preview} alt="Preview" className="mt-2 w-32 h-32 object-cover" />}

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md mt-2">
        Add Product
      </button>
    </form>
  );
}
