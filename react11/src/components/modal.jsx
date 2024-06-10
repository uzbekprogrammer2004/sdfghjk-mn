import React, { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const UserModal = ({ open, toggle, addCar, editCar, isEditing, currentCar }) => {
  const [form, setForm] = useState({
    name: "",
    price: "",
    year: "",
    color: "",
    brand: ""
  });

  useEffect(() => {
    if (isEditing && currentCar) {
      setForm(currentCar);
    } else {
      setForm({
        name: "",
        price: "",
        year: "",
        color: "",
        brand: ""
      });
    }
  }, [isEditing, currentCar]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      editCar(form);
    } else {
      const newCar = { ...form, id: nanoid() };
      addCar(newCar);
    }
    toggle();
  };

  return (
    <Modal isOpen={open} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        <h1 className="text-center">{isEditing ? "Edit Car" : "Add Car"}</h1>
      </ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} id="submit">
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            className="form-control my-2"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="number"
            required
            placeholder="Price"
            name="price"
            className="form-control my-2"
            value={form.price}
            onChange={handleChange}
          />
          <input
            type="date"
            required
            placeholder="Year"
            name="year"
            className="form-control my-2"
            value={form.year}
            onChange={handleChange}
          />
          <input
            type="text"
            required
            placeholder="Color"
            name="color"
            className="form-control my-2"
            value={form.color}
            onChange={handleChange}
          />
          <input
            type="text"
            required
            placeholder="Brand"
            name="brand"
            className="form-control my-2"
            value={form.brand}
            onChange={handleChange}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={toggle}>
          Cancel
        </button>
        <button className="btn btn-success" type="submit" form="submit">
          {isEditing ? "Save Changes" : "Save"}
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default UserModal;
