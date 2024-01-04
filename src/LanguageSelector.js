// LanguageSelector.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector({setSelectedLanguage}) {
  const { i18n } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
    </div>
  );
}

export default LanguageSelector;
