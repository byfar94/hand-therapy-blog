"use client";
import styles from "./RMO.module.css";
import React, { useEffect, useState } from "react";
import RMODiagnosisDropDown from "./RMODiagnosisDropDown";
import rmoDiagnosesData from "../../../public/jsonData/rmoDiagnosesData";

export default function DiagnosisBox() {
  const [RMODiagnosis, setRMODiagnosis] = useState("");

  const [orthosisSummaryText, setOrthosisSummaryText] = useState("");
  const [fabricationSummaryText, setFabricationSummaryText] = useState("");
  const [adjacentTreatmentText, setAdjacentTreatmentText] = useState("");

  useEffect(() => {
    if (RMODiagnosis) {
      const diagnosisData = rmoDiagnosesData.rmoDiagnosesData[RMODiagnosis];
      if (diagnosisData) {
        setOrthosisSummaryText(diagnosisData.category);
        setFabricationSummaryText(diagnosisData.fabrication);
        setAdjacentTreatmentText(diagnosisData.adjacentTreatment);
      } else {
        setOrthosisSummaryText("");
        setFabricationSummaryText("");
        setAdjacentTreatmentText("");
      }
    }
  }, [RMODiagnosis]);

  return (
    <div id="diagnosisBoxContain">
      <RMODiagnosisDropDown
        setRMODiagnosis={setRMODiagnosis}
        RMODiagnosis={RMODiagnosis}
      ></RMODiagnosisDropDown>
      <div id="orthosisTypeContain">
        <p id="orthosisTypeTitle">Category:</p>
        <p id="orthosisSummary">{orthosisSummaryText}</p>
      </div>
      <div id="fabricationContain">
        <p id="fabricationTitle">Fabrication:</p>
        <p id="fabricationSummary">{fabricationSummaryText}</p>
      </div>
      <div id="adjacentTreatmentContain">
        <p id="adjacentTreatmentTitle">Adjacent Treatment:</p>
        <p id="adjacentTreatmentSummary">{adjacentTreatmentText}</p>
      </div>
    </div>
  );
}
