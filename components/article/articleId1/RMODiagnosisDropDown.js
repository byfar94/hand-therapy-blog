import styles from "./RMO.module.css";

export default function RMODiagnosisDropDown({
  RMODiagnosis,
  setRMODiagnosis,
}) {
  const handleChange = (event) => {
    setRMODiagnosis(event.target.value);
  };

  return (
    <div>
      <label htmlFor="condition-select">Diagnosis:</label>
      <select
        id="condition-select"
        value={RMODiagnosis}
        onChange={handleChange}
      >
        <option value="">Select a diagnosis</option> {/* Blank item */}
        <option value="extensorTendonRepair">
          Extensor Tendon Repair Zone IV-VII
        </option>
        <option value="acuteSagittalBandInjury">
          Acute Sagittal Band Injury
        </option>
        <option value="boutonniereDeformity">Boutonniere Deformity</option>
      </select>
    </div>
  );
}
