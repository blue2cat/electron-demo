import { useEffect } from 'react';

const useScript = () => {
  useEffect(() => {
    try {
      console.log('saveContent2');
      let content = document.getElementById('test').value;

      console.log(content);

    } catch (error) {
      console.log(error);
    }});
};

export default useScript;
