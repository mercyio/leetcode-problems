function createPalindrome(originalText) {
    const reversedText = originalText.split('').reverse().join('');
    for (let matchingPosition = 0; matchingPosition < originalText.length; matchingPosition++) {
        if (originalText.substring(matchingPosition) === reversedText.substring(0, originalText.length - matchingPosition)) {
            return originalText + reversedText.substring(originalText.length - matchingPosition);
        }
    }
    return originalText;
  }
  