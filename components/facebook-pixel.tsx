"use client"

import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

const FB_PIXEL_ID = process.env.FB_PIXEL_ID
const TEST_EVENT_CODE = process.env.FB_PIXEL_TEST_CODE

export function FacebookPixel() {
  const pathname = usePathname()

  // Verifica se as variáveis de ambiente estão carregadas
  if (!FB_PIXEL_ID) {
    console.warn('⚠️ FB_PIXEL_ID não encontrado nas variáveis de ambiente')
    return null
  }

  useEffect(() => {
    if (typeof window.fbq !== 'undefined') {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', '${FB_PIXEL_ID}');
            
            ${process.env.NODE_ENV === 'development' && TEST_EVENT_CODE ? `
            // Modo teste apenas em desenvolvimento
            fbq('set', 'testEventCode', '${TEST_EVENT_CODE}');
            fbq('set', 'debug', true);
            console.log('🔧 Pixel em modo de teste');
            ` : ''}
            
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  )
}

declare global {
  interface Window {
    fbq: any
  }
}