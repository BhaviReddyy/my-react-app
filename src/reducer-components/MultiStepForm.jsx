import React, { useReducer } from "react";

// ---------------- Reducer ----------------
const initialState = {
  step: 1,
  isSubmitted: false,
  formData: {
    name: "",
    email: "",
    username: "",
    password: ""
  }
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };

    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };

    case "PREVIOUS_STEP":
      return { ...state, step: state.step - 1 };

    case "SUBMIT_FORM":
      return { ...state, isSubmitted: true };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

// ---------------- Component ----------------
export default function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { step, formData, isSubmitted } = state;

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value
    });
  };

  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_FORM" });
  };

  if (isSubmitted) {
    return (
      <div style={{ margin: "20px", fontSize: "18px" }}>
        <h2>🎉 Registration Successful!</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </div>
    );
  }

  return (
    <div style={{ margin: "20px", fontSize: "18px" }}>
      <h2>Multi-Step User Registration</h2>
      <p>Step {step} / 3</p>
      <hr />

      {/* -------- Step 1 -------- */}
      {step === 1 && (
        <div>
          <h3>Personal Details</h3>

          <label>Name:</label>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <br /><br />

          <label>Email:</label>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <br /><br />
          <button
            disabled={!formData.name || !formData.email}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next →
          </button>
        </div>
      )}

      {/* -------- Step 2 -------- */}
      {step === 2 && (
        <div>
          <h3>Account Details</h3>

          <label>Username:</label>
          <input
            name="username"
            value={formData.username}
            onChange={handleChange}
          />

          <br /><br />

          <label>Password:</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
          />

          <br /><br />

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            ← Back
          </button>

          <button
            disabled={!formData.username || !formData.password}
            onClick={() => dispatch({ type: "NEXT_STEP" })}
          >
            Next →
          </button>
        </div>
      )}

      {/* -------- Step 3 -------- */}
      {step === 3 && (
        <div>
          <h3>Review & Submit</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>

          <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
            ← Back
          </button>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}
