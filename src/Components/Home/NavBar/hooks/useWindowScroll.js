import { useState, useEffect } from 'react';

export const useWindowScroll = () => {
  const [section, setSection] = useState('#');

  useEffect(() => {
    const onScroll = [
      'scroll',
      () => {
        const hash = window.location.hash;
        setSection(hash || "#")
      }
    ]
    window.addEventListener(...onScroll);

    return () => window.removeEventListener(...onScroll);
  }, [section])

  return [section]
}
