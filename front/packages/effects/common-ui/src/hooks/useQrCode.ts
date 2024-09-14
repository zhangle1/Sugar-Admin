import { useState, useEffect } from 'react';
import QRCode from 'qrcode';

const useQRCode = (value: string): string | undefined => {
  const [qrCodeSrc, setQrCodeSrc] = useState<string | undefined>(undefined);

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrCodeDataUrl = await QRCode.toDataURL(value);
        setQrCodeSrc(qrCodeDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    if (value) {
      generateQRCode();
    }
  }, [value]);

  return qrCodeSrc;
};

export default useQRCode;