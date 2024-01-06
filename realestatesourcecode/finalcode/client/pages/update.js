import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT
import { CreateOne } from "../PageComponents/CreatePage";
import {
  Header,
  Footer,
  Copyright,
  Loader,
} from "../PageComponents/Components";
import { useStateContext } from "../context";
import { checkIfImage } from "../utils";

const categories = [
  "Housing",
  "Rental",
  "Farmhouse",
  "Office",
  "commercial",
  "country",
];

const create = () => {
  const router = useRouter();
  const { query } = router;

  //STATE VARIABLE
  const [isLoading, setIsLoading] = useState(false);
  const { address, contract, updatePropertyFunction } = useStateContext();

  const [form, setForm] = useState({
    productId: "",
    propertyTitle: "",
    description: "",
    category: "",
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
        await updatePropertyFunction({
          ...form,
          productId: query.property * 1,
        });
        setIsLoading(false);
        window.location.reload();
      } else {
        alert("Provide valid image URL");
        setForm({ ...form, images: "" });
      }
    });
  };

  return (
    <div class="template-color-1 nft-body-connect">
      <Header />
      <CreateOne title="Update Property" />
      <div class="creat-collection-area pt--80">
        <div class="container">
          <div class="row g-5 ">
            <div class="col-lg-3 offset-1 ml_md--0 ml_sm--0">
              <div class="collection-single-wized banner">
                <label class="title required">Logo image</label>

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
                        onClick={() => handleSubmit()}
                        class="btn btn-primary-alta btn-large"
                      >
                        {isLoading ? <Loader /> : "Update"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Copyright />
    </div>
  );
};

export default create;
