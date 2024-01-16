import React, { useEffect, useCallback } from 'react';

const Cek = () => {
  // Declare redirectTimeout using useCallback
  const redirectTimeout = useCallback(() => {
    // Redirect to 'home.js' after 15 seconds
    window.location.href = 'home';
  }, []);

  useEffect(() => {
    // Set the timeout using the memoized function
    const timeoutId = setTimeout(redirectTimeout, 5000); // 15000 milliseconds (15 seconds)

    // Clear the timeout to avoid memory leaks when the component unmounts
    return () => clearTimeout(timeoutId);
  }, [redirectTimeout]);

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      marginTop: '9cm',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h2 style={{ color: '#000000' }}>
        Silahkan cek aplikasi Whatsapp anda untuk melanjutkan pembelian
      </h2>
    </div>
  );
}

export default Cek;