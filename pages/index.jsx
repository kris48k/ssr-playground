// index.html
import { useState } from 'react';
import QRCode from 'qrcode.react';

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton']

  return (
    <div>
      <h1>This is fully rendered on the server side!</h1>
      <h2>QRCode.react, Canvas version:</h2>
      <QRCode value="republic.com" />
      <h2>QRCode.react, SVG version:</h2>
      <QRCode value="republic.com" renderAs='svg'/>
    </div>
  )
}