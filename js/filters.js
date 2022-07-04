const btnScaleSmaller = document.querySelector('.scale__control--smaller');
const btnScaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');


const scaleControl = () => {

  let maxValue = 100;
  let minValue = 0;
  const STEP = 25;

  scaleValue.value = `${maxValue}%`;


  const MIN = `${minValue}%`;
  const MAX = `${maxValue}%`;

  const onBtnScaleSmallerClick = () => {
    scaleValue.value = `${maxValue -= STEP}%`;

    if (scaleValue.value === MIN) {
      btnScaleSmaller.disabled = true;
    }
    if (scaleValue.value !== MAX) {
      btnScaleBigger.disabled = false;
    }
  };

  const onBtnScaleBiggerClick = () => {
    scaleValue.value = `${minValue += STEP}%`;

    if (scaleValue.value === MAX) {
      btnScaleBigger.disabled = true;
    }
    if (scaleValue.value !== MIN) {
      btnScaleSmaller.disabled = false;
    }
  };
  btnScaleSmaller.addEventListener('click', onBtnScaleSmallerClick);
  btnScaleBigger.addEventListener('click', onBtnScaleBiggerClick);
};

export { scaleControl };
