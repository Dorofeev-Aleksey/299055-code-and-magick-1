'use strict';


(function () {
  var userDialog = document.querySelector('.setup');
  var similarListElement = userDialog.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;

  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards[i] = {
      name: window.util.getRandomItem(window.util.WIZARD_NAMES) + ' ' + window.util.getRandomItem(window.util.WIZARD_SURNAME),
      coatColor: window.util.getRandomItem(window.util.COLOR_COAT),
      eyesColor: window.util.getRandomItem(window.util.COLOR_EYES)
    };
  }

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);

  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireballWrap = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.util.getRandomItem(window.util.COLOR_COAT);
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.util.getRandomItem(window.util.COLOR_EYES);
  });

  fireballWrap.addEventListener('click', function () {
    fireballWrap.style.backgroundColor = window.util.getRandomItem(window.util.COLOR_FIREBALLS);
  });
})();
