import React from 'react';
import { Link } from "react-router-dom";
import { HeaderTag } from './Header.styles'

export default function Header() {
  return (
    <HeaderTag>
      <Link to="/"><img src={ process.env.PUBLIC_URL + "/logo.svg"} alt="match" width="110" /></Link>
    </HeaderTag>
  );
}
