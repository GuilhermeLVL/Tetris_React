import React from "react";

import Cell from "./Cell";

const Stage = ({ stage }) => (

<div>

    {stage.map(row => row.map((cell , x) => <cell key={x} type={cell[0]}></cell>))}
</div>
);

export default Stage;