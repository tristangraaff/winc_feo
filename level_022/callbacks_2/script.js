const huiswerkMaken = (vak, callback) => {
  setTimeout(() => {
    callback();
  }, 5000);
  console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
};

const klaarMetHuiswerk = () => {
  console.log("Kijk Paps/Mams, ik ben klaar met mijn huiswerk!");
};

huiswerkMaken("wiskunde", klaarMetHuiswerk);