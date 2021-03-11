function removeLineNumber(){
  let allATags = document.querySelectorAll('pre a');
  allATags = Array.from(allATags);
  allATags.forEach(aTag => {
    const line = aTag.querySelector('.line-number');
    aTag.removeChild(line);
  });
}

removeLineNumber();
