import React from "react";
import { KeyContainer, BulletPoint } from "./styles";

function Key() {
  return (
    <KeyContainer role="list">
      <BulletPoint role="listitem">Completed</BulletPoint>
      <BulletPoint role="listitem">Not Completed</BulletPoint>
    </KeyContainer>
  )
}

export default Key;