import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom"
import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {

  const history = useHistory();
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };
  // Make a put request to save your updated color
  // think about where will you get the id from...
  // where is it saved right now?
  const saveEdit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/api/colors/${id}`, colorToEdit)
      .then(res => {
        console.log(res)
        const updatedColors = colors.map( color => {
          if (color.id === res.data.id){
            return res.data
          } else {
            return color
          }
        }) 
        updateColors(updatedColors)
      })
      .catch(err => {
        console.log(err)
      })
    axiosWithAuth()
      .post('/api/colors', colorToEdit)
  };

  const deleteColor = color => {
    // make a delete request to delete this color
    axiosWithAuth()
      .delete(`/api/colors/${color.id}`)
      .then(res => {
        const filteredColors = colors.filter(color => {
          return color.id !== res.data
        })
        updateColors(filteredColors)
      })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => (
          <li key={color.color} onClick={() => editColor(color)}>
            <span>
              <span className="delete" onClick={e => {
                    e.stopPropagation();
                    deleteColor(color)
                  }
                }>
                  x
              </span>{" "}
              {color.color}
            </span>
            <div
              className="color-box"
              style={{ backgroundColor: color.code.hex }}
            />
          </li>
        ))}
      </ul>
      {editing && (
        <form onSubmit={saveEdit}>
          <legend>edit color</legend>
          <label>
            color name:
            <input
              onChange={e =>
                setColorToEdit({ ...colorToEdit, color: e.target.value })
              }
              value={colorToEdit.color}
            />
          </label>
          <label>
            hex code:
            <input
              onChange={e =>
                setColorToEdit({
                  ...colorToEdit,
                  code: { hex: e.target.value }
                })
              }
              value={colorToEdit.code.hex}
            />
          </label>
          <div className="button-row">
            <button type="submit">save</button>
            <button onClick={() => setEditing(false)}>cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
