import React from 'react';
import Script from 'next/script';
import {MiroSDKInit} from '../components/SDKInit';
import { AppBody } from '../screens/AppBody';

export default function RootLayout({children}) {
  return (
    <html>
      <body>
        <Script
          src="https://miro.com/app/static/sdk/v2/miro.js"
          strategy="beforeInteractive"
        />
        <MiroSDKInit />
        <div id="root">
          <AppBody/>
        </div>
      </body>
    </html>
  );
}
