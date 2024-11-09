import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import "./ExamsDetail.scss";
import MaterialStyledInput from "../../ResuableComponent/MaterialStyledInput";

function ExamsDetail() {
  const [formData, setFormData] = useState({
    mainsRankCRL: "",
    mainsRankCategory: "",
    advancedRankAIR: "",
    advancedRankCategory: "",
  });

  const [modificationsLeft, setModificationsLeft] = useState({
    mainsRankCRL: 1,
    mainsRankCategory: 2,
    advancedRankAIR: 2,
    advancedRankCategory: 2,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (rankType) => {
    if (modificationsLeft[rankType] > 0) {
      // Validation
      if (!formData[rankType]) {
        setErrors({ ...errors, [rankType]: "Please enter a rank" });
        return;
      }

      // Subtract a modification
      setModificationsLeft({
        ...modificationsLeft,
        [rankType]: modificationsLeft[rankType] - 1,
      });

      alert(`Rank submitted: ${formData[rankType]}`);
    }
  };

  return (
    <Container fluid className="exams-2024">
      <h2>Exams 2024</h2>
      <p>
        **If seat type is other than "Open" please enter respective category
        rank also.
      </p>

      <div className="rank-section">
        <label>
          MAINS RANK <span className="info-text">(Enter CRL only)</span>
        </label>
        <div className="d-flex flex-row align-items-center exam-details-input-field-wrapper">
          <MaterialStyledInput
            className="exam-detail-input-field"
            name="mainsRankCRL"
            value={formData.mainsRankCRL}
            onChange={handleChange}
            error={errors.mainsRankCRL}
            isInvalid={!!errors.mainsRankCRL}
          />
          <Button
            className="rank-submit-btn"
            onClick={() => handleSubmit("mainsRankCRL")}
            disabled={modificationsLeft.mainsRankCRL <= 0}
          >
            Submit
          </Button>
        </div>

        <p className="modifications-info">
          Modifications permitted: {modificationsLeft.mainsRankCRL}
        </p>
      </div>

      <div className="rank-section">
        <label>
          MAINS RANK{" "}
          <span className="info-text">(Enter category rank only)</span>
        </label>
        <div className="d-flex flex-row align-items-center exam-details-input-field-wrapper">
          <MaterialStyledInput
            className="exam-detail-input-field"
            name="mainsRankCategory"
            value={formData.mainsRankCategory}
            onChange={handleChange}
            error={errors.mainsRankCategory}
            isInvalid={!!errors.mainsRankCategory}
          />
          <Button
            className="rank-submit-btn"
            onClick={() => handleSubmit("mainsRankCategory")}
            disabled={modificationsLeft.mainsRankCategory <= 0}
          >
            Submit
          </Button>
        </div>
        <p className="modifications-info">
          Modifications permitted: {modificationsLeft.mainsRankCategory}
        </p>
      </div>

      <div className="rank-section">
        <label>
          ADVANCED (RANK) <span className="info-text">(Enter AIR only)</span>
        </label>
        <div className="d-flex flex-row align-items-center exam-details-input-field-wrapper">
          <MaterialStyledInput
            className="exam-detail-input-field"
            name="advancedRankAIR"
            value={formData.advancedRankAIR}
            onChange={handleChange}
            error={errors.advancedRankAIR}
            isInvalid={!!errors.advancedRankAIR}
          />
          <Button
            className="rank-submit-btn"
            onClick={() => handleSubmit("advancedRankAIR")}
            disabled={modificationsLeft.advancedRankAIR <= 0}
          >
            Submit
          </Button>
        </div>
        <p className="modifications-info">
          Modifications permitted: {modificationsLeft.advancedRankAIR}
        </p>
      </div>

      <div className="rank-section">
        <label>
          ADVANCED (RANK){" "}
          <span className="info-text">(Enter category rank only)</span>
        </label>
        <div className="d-flex flex-row align-items-center exam-details-input-field-wrapper">
          <MaterialStyledInput
            className="exam-detail-input-field"
            name="advancedRankCategory"
            value={formData.advancedRankCategory}
            onChange={handleChange}
            error={errors.advancedRankCategory}
            isInvalid={!!errors.advancedRankCategory}
          />

          <Button
            className="rank-submit-btn"
            onClick={() => handleSubmit("advancedRankCategory")}
            disabled={modificationsLeft.advancedRankCategory <= 0}
          >
            Submit
          </Button>
        </div>
        <p className="modifications-info">
          Modifications permitted: {modificationsLeft.advancedRankCategory}
        </p>
      </div>
    </Container>
  );
}

export default ExamsDetail;
