// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import Select from "react-select";

// const typeOptions = ["Adventure", "Wildlife", "Sightseeing"].map((it) => ({
//   value: it,
//   label: it,
// }));

// const customStyle = {
//   container: (provided) => ({
//     ...provided,
//     zIndex: 100000,
//   }),
//   valueContainer: (provided) => ({
//     ...provided,
//     padding: 0,
//   }),
//   singleValue: (provided) => ({
//     ...provided,
//     cursor: "pointer",
//   }),
//   menu: (provided) => ({
//     ...provided,
//     marginTop: 5,
//     border: "none",
//     boxShadow: "none",
//     height: 0,
//   }),
//   option: (provided, state) => ({
//     ...provided,
//     color: "white",
//     padding: "4px 20px",
//     backgroundColor: state.isSelected ? "#e8604c" : "#313041",
//     transition: "all 0.4s ease",
//     cursor: "pointer",
//     borderBottom:
//       state.label === typeOptions[typeOptions.length - 1].label
//         ? "none"
//         : "0.5px solid #ffffff33",
//     "&:hover": {
//       backgroundColor: "#e8604c",
//     },
//     borderRadius:
//       state.label === typeOptions[typeOptions.length - 1].label
//         ? "0 0 8px 8px"
//         : 0,
//     fontSize: 16,
//     fontWeight: 500,
//   }),
//   control: (base) => ({
//     ...base,
//     height: 0,
//     borderColor: "transparent",
//     boxShadow: "none",
//     borderRadius: "8px",
//     "&:hover": {
//       borderColor: "transparent",
//     },
//   }),
// };

// const TourSearchForm = () => {
//   const [startDate, setStartDate] = useState(new Date());
//   const [selected, setSelected] = useState("Adventure");

//   const handleSelect = ({ value }) => {
//     setSelected(value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);
//     const data = {
//       type: selected,
//       date: startDate,
//       place: formData.get("place"),
//     };
//     console.log(data);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="tour-search-one">
//       <div className="tour-search-one__inner">
//         <div className="tour-search-one__inputs">
//           <div className="tour-search-one__input-box">
//             <label htmlFor="place">Where to</label>
//             <input
//               type="text"
//               placeholder="Enter keywords"
//               name="place"
//               id="place"
//             />
//           </div>
//           <div className="tour-search-one__input-box">
//             <label>When</label>
//             <DatePicker
//               selected={startDate}
//               onChange={(date) => setStartDate(date)}
//               className="hasDatepicker"
//               placeholderText="September"
//             />
//           </div>
//           <div className="tour-search-one__input-box tour-search-one__input-box-last">
//             <label htmlFor="type">Type</label>
//             <Select
//               defaultValue={typeOptions[0]}
//               name="type"
//               options={typeOptions}
//               onChange={handleSelect}
//               styles={customStyle}
//               isSearchable={false}
//               components={{
//                 DropdownIndicator: () => null,
//                 IndicatorSeparator: () => null,
//               }}
//               instanceId="tourTypeSelect"
//             />
//           </div>
//         </div>
//         <div className="tour-search-one__btn-wrap">
//           <button type="submit" className="thm-btn tour-search-one__btn">
//             Find now
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default TourSearchForm;
import React from "react";

const styles = {
  form: {
    background: "rgba(255, 255, 255, 0.95)",
    borderRadius: "10px",
    padding: "25px 30px",
    // maxWidth: "950px",
    maxWidth: "1090px",
    margin: "0 auto",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)",
  },
  inner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: "20px",
  },
  inputs: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    flex: 1,
  },
  inputBox: {
    position: "relative",
    flex: "1 1 180px",
    display: "flex",
    alignItems: "center",
  },
  input: {
    width: "100%",
    border: "none",
    borderBottom: "1px solid #ddd",
    padding: "8px 30px 8px 0",
    fontSize: "15px",
    outline: "none",
    background: "transparent",
    color: "#333",
  },
  icon: {
    position: "absolute",
    right: 0,
    color: "#e8604c",
    pointerEvents: "none",
  },
  btnWrap: {
    flexShrink: 0,
  },
  btn: {
    background: "#e8604c",
    color: "#fff",
    border: "none",
    padding: "12px 35px",
    borderRadius: "6px",
    fontWeight: 600,
    letterSpacing: "0.5px",
    cursor: "pointer",
    textTransform: "uppercase",
    fontSize: "14px",
  },
};

const TourSearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };
    // TODO: submit logic yahan likhni hai
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inner}>
        <div style={styles.inputs}>
          <div style={styles.inputBox}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              id="name"
              style={styles.input}
            />
            <svg style={styles.icon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
            </svg>
          </div>

          <div style={styles.inputBox}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              id="email"
              style={styles.input}
            />
            <svg style={styles.icon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 6l10 7 10-7" />
            </svg>
          </div>

          <div style={styles.inputBox}>
            <input
              type="tel"
              placeholder="Phone No."
              name="phone"
              id="phone"
              style={styles.input}
            />
            <svg style={styles.icon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>

          <div style={styles.inputBox}>
            <input
              type="text"
              placeholder="Message..."
              name="message"
              id="message"
              style={styles.input}
            />
            <svg style={styles.icon} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="M2 6l10 7 10-7" />
            </svg>
          </div>
        </div>

        <div style={styles.btnWrap}>
          <button type="submit" style={styles.btn}>
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default TourSearchForm;