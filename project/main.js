const textConvert = document.getElementById("textinput");
const textresult = document.getElementById("result");

const enconvert = () => {
  const textValue = textConvert.value;
  const textencoded = btoa(textValue);
  //alert(textencoded);
  textresult.innerHTML = textencoded;
};

const deconvert = () => {
  const textValue = textConvert.value;
  const textdecoded = atob(textValue);
  //alert(textdecoded);
  textresult.innerHTML = textdecoded;
};
