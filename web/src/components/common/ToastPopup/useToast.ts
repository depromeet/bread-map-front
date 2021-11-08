import React from 'react';

const useToast = (initialState = false) => {
  const [toastStatus, setToastStatus] = React.useState(initialState);

  const openToast = () => {
    setToastStatus(true);
  };

  React.useEffect(() => {
    if (!toastStatus) return;

    setTimeout(() => {
      setToastStatus(false);
    }, 2000);
  }, [toastStatus]);

  return { toastStatus, openToast };
};

export default useToast;
