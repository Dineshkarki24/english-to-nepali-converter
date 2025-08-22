export const convertToNepali = (inputText) => {
    let outputText;
    outputText = inputText
      ?.toString()
      .split("")
      .map((key) => {
        return unicodeMapping[key] || key;
      })
      .join("");
      
    replacementRules.forEach((rule) => {
      outputText = outputText.replace(new RegExp(rule[0], "g"), rule[1]);
    });
    return outputText;
  };