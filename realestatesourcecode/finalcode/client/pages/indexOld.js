import React, { useState, useEffect } from "react";
import { ethers } from "ethers";

import { useStateContext } from "../context";
import { checkIfImage } from "../utils";
const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);

  const {
    address,
    contract,
    connect,
    createPropertyFunction,
    getPropertiesData,
    updatePropertyFunction,
  } = useStateContext();

  const [form, setForm] = useState({
    propertyTitle: "",
    description: "",
    category: "",
    price: "",
    images: "",
    propertyAddress: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setForm({ ...form, [fieldName]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    checkIfImage(form.images, async (exists) => {
      if (exists) {
        setIsLoading(true);
        await createPropertyFunction({
          ...form,
          price: ethers.utils.parseUnits(form.price, 18),
        });
        setIsLoading(false);
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, images: "" });
      }
    });
  };

  //GET DATA
  const fetchProperty = async () => {
    setIsLoading(true);
    const data = await getPropertiesData();
    setProperties(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchProperty();
  }, [address, contract]);

  return (
    <div>
      <button onClick={() => connect()}>Connect</button>

      <h1>Create</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="propertyTitle"
          onChange={(e) => handleFormFieldChange("propertyTitle", e)}
        />
        <input
          type="text"
          placeholder="description"
          onChange={(e) => handleFormFieldChange("description", e)}
        />
        <input
          type="text"
          placeholder="category"
          onChange={(e) => handleFormFieldChange("category", e)}
        />
        <input
          type="number"
          placeholder="price"
          onChange={(e) => handleFormFieldChange("price", e)}
        />
        <input
          type="url"
          placeholder="images"
          onChange={(e) => handleFormFieldChange("images", e)}
        />
        <input
          type="text"
          placeholder="propertyAddress"
          onChange={(e) => handleFormFieldChange("propertyAddress", e)}
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={() => updatePropertyFunction()}>Update</button>
    </div>
  );
};

export default index;
