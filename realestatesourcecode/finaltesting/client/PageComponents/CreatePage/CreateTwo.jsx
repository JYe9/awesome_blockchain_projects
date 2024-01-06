import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";

//INTERNAL IMPORT
import { CreateThree } from "../CreatePage";
import { useStateContext } from "../../context";
import { checkIfImage } from "../../utils";

const categories = [
  "Housing",
  "Rental",
  "Farmhouse",
  "Office",
  "commercial",
  "country",
];

const CreateTwo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [file, setFile] = useState(null);
  const [showImg, setShowImg] = useState(null);
  const [fileName, setFileName] = useState();

  const { address, contract, connect, createPropertyFunction } =
    useStateContext();

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

  const handleSubmit = async () => {
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

  //TAKE IMAGE
  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setFile(URL.createObjectURL(event.target.files[0]));
    }
  };

  //UPLOAD TO PINATA
  const handleUpload = async () => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: `06c3090c13c5847af87b`,
            pinata_secret_api_key: `
            a17317bb60c20e6e59326c85ebd933a9cdb1ae69c03ced4ff2eb42c51af73679`,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

        setFileName(ImgHash);
        console.log(ImgHash);

        alert("Successfully Image Uploaded");
        setFileName("No image selected");
        setFile(null);
      } catch (error) {
        alert("Unable to upload image to Pinata", error);
      }
    }
    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);
    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };
    setFileName(e.target.files[0].name);
    e.preventDefault();
  };

  return (
    <>
      <div class="creat-collection-area pt--80">
        <div class="container">
          <div class="row g-5 ">
            <div class="col-lg-3 offset-1 ml_md--0 ml_sm--0">
              <div class="collection-single-wized banner">
                <label class="title required">Logo image</label>

                <input
                  type="file"
                  placeholder="upload"
                  onChange={(e) => (retrieveFile(e), onImageChange(e))}
                />
                <img src={fileName || showImg} alt="test" />
                <button onClick={() => handleUpload()}>Upload</button>

                <div class="create-collection-input logo-image">
                  <div class="logo-c-image logo">
                    <img
                      id="rbtinput1"
                      src="/profile/profile-01.jpg"
                      alt="Profile-NFT"
                    />
                    <label for="fatima" title="No File Choosen">
                      <span class="text-center color-white">
                        <i class="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div class="button-area">
                    <div class="brows-file-wrapper">
                      <input name="fatima" id="fatima" type="file" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="collection-single-wized banner">
                <label class="title">Cover Image</label>
                <div class="create-collection-input feature-image">
                  <div class="logo-c-image feature">
                    <img
                      id="rbtinput2"
                      src="/profile/cover-04.png"
                      alt="Profile-NFT"
                    />
                    <label for="nipa" title="No File Choosen">
                      <span class="text-center color-white">
                        <i class="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div class="button-area">
                    <div class="brows-file-wrapper">
                      <input name="nipa" id="nipa" type="file" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="collection-single-wized banner">
                <label class="title">Featured image</label>
                <div class="create-collection-input feature-image">
                  <div class="logo-c-image feature">
                    <img
                      id="createfileImage"
                      src="/profile/cover-03.jpg"
                      alt="Profile-NFT"
                    />
                    <label for="createinputfile" title="No File Choosen">
                      <span class="text-center color-white">
                        <i class="feather-edit"></i>
                      </span>
                    </label>
                  </div>
                  <div class="button-area">
                    <div class="brows-file-wrapper">
                      <input
                        name="createinputfile"
                        id="createinputfile"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-7">
              <div class="create-collection-form-wrapper">
                <div class="row">
                  <div class="col-lg-6">
                    <div class="collection-single-wized">
                      <label for="name" class="title required">
                        Property Title
                      </label>
                      <div class="create-collection-input">
                        <input
                          id="name"
                          class="name"
                          type="text"
                          placeholder="propertyTitle"
                          onChange={(e) =>
                            handleFormFieldChange("propertyTitle", e)
                          }
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="collection-single-wized">
                      <label for="url" class="title">
                        Image
                      </label>
                      <div class="create-collection-input">
                        <input
                          id="url"
                          class="url"
                          type="url"
                          required
                          placeholder="images"
                          onChange={(e) => handleFormFieldChange("images", e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="collection-single-wized">
                      <label class="title">Category</label>
                      <div class="create-collection-input">
                        <div class="nice-select mb--30" tabindex="0">
                          <span class="current">Add Category</span>
                          <ul class="list">
                            {categories.map((el, i) => (
                              <li
                                key={i + 1}
                                onClick={() =>
                                  setForm({
                                    ...form,
                                    category: el,
                                  })
                                }
                                data-value="Housing"
                                class="option"
                              >
                                {el}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="collection-single-wized">
                      <label for="description" class="title">
                        Description
                      </label>
                      <div class="create-collection-input">
                        <textarea
                          id="description"
                          class="text-area"
                          placeholder="description"
                          onChange={(e) =>
                            handleFormFieldChange("description", e)
                          }
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="collection-single-wized">
                      <label for="earning" class="title">
                        Price
                      </label>
                      <div class="create-collection-input">
                        <input
                          id="earning"
                          class="url"
                          type="number"
                          placeholder="price"
                          onChange={(e) => handleFormFieldChange("price", e)}
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="collection-single-wized">
                      <label for="wallet" class="title">
                        Property address
                      </label>
                      <div class="create-collection-input">
                        <input
                          id="wallet"
                          class="url"
                          type="text"
                          placeholder="propertyAddress"
                          onChange={(e) =>
                            handleFormFieldChange("propertyAddress", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="nuron-information mb--30">
                      <div class="single-notice-setting">
                        <div class="input">
                          <input
                            type="checkbox"
                            id="themeSwitch"
                            name="theme-switch"
                            class="theme-switch__input"
                          />
                          <label for="themeSwitch" class="theme-switch__label">
                            <span></span>
                          </label>
                        </div>
                        <div class="content-text">
                          <p>Explicit & sensitive content</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="button-wrapper">
                      <a
                        href="#"
                        class="btn btn-primary btn-large mr--30"
                        data-bs-toggle="modal"
                        data-bs-target="#collectionModal"
                      >
                        Preview
                      </a>
                      <a
                        onClick={() => handleSubmit()}
                        class="btn btn-primary-alta btn-large"
                      >
                        Create
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateThree data={form} />
    </>
  );
};

export default CreateTwo;
