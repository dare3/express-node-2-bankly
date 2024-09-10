// Function to convert time to words
function timeWord(time) {
    // Split time into hour and minute parts
    const [hourStr, minuteStr] = time.split(':');
    const hour = parseInt(hourStr, 10);
    const minute = parseInt(minuteStr, 10);
  
    // Words for numbers 0-59
    const numbers = [
      'twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
      'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty',
      'twenty one', 'twenty two', 'twenty three', 'twenty four', 'twenty five', 'twenty six', 'twenty seven',
      'twenty eight', 'twenty nine', 'thirty', 'thirty one', 'thirty two', 'thirty three', 'thirty four',
      'thirty five', 'thirty six', 'thirty seven', 'thirty eight', 'thirty nine', 'forty', 'forty one',
      'forty two', 'forty three', 'forty four', 'forty five', 'forty six', 'forty seven', 'forty eight',
      'forty nine', 'fifty', 'fifty one', 'fifty two', 'fifty three', 'fifty four', 'fifty five', 'fifty six',
      'fifty seven', 'fifty eight', 'fifty nine'
    ];
  
    // Handling special cases
    if (hour === 0 && minute === 0) return 'midnight';
    if (hour === 12 && minute === 0) return 'noon';
  
    // Determine AM or PM
    const period = hour < 12 ? 'am' : 'pm';
  
    // Convert 24-hour format to 12-hour format
    const hourWord = numbers[hour % 12 === 0 ? 0 : hour % 12];
  
    // Convert minute to words
    const minuteWord = minute === 0 ? "o’clock" : (minute < 10 ? `oh ${numbers[minute]}` : numbers[minute]);
  
    // Construct and return the result
    return minute === 0 ? `${hourWord} ${minuteWord} ${period}` : `${hourWord} ${minuteWord} ${period}`;
  }
  
  // Export the function for testing
  module.exports = timeWord;
  
//   Pseudocode for timeToWords
// Input: Receive a string time in the format "HH:MM".

// Split the Input:

// Split the time string into hourStr and minuteStr using the colon (:) as the delimiter.
// Convert hourStr and minuteStr to integers hour and minute.
// Define an Array of Words for Numbers:

// Create an array numbers containing words for numbers 0 to 59.
// Handle Special Cases:

// If hour is 0 and minute is 0, return "midnight".
// If hour is 12 and minute is 0, return "noon".
// Determine Period (AM or PM):

// If hour is less than 12, set period to "am".
// Otherwise, set period to "pm".
// Convert 24-hour Format to 12-hour Format:

// If hour % 12 is 0, set hourWord to "twelve".
// Otherwise, set hourWord to the corresponding word from the numbers array using hour % 12.
// Convert Minutes to Words:

// If minute is 0, set minuteWord to "o’clock".
// If minute is less than 10, set minuteWord to "oh" followed by the corresponding word from numbers.
// Otherwise, set minuteWord to the corresponding word from the numbers array using minute.
// Construct the Output:

// If minute is 0, concatenate hourWord, minuteWord, and period.
// Otherwise, concatenate hourWord, minuteWord, and period.
// Return the Result:

// Return the constructed string as the time in words.
// Example Steps for Input "06:18"
// Split "06:18" into hourStr = "06" and minuteStr = "18".
// Convert to integers: hour = 6, minute = 18.
// Define number words from 0 to 59.
// No special case matches.
// hour < 12, so period = "am".
// hourWord = "six".
// minute = 18, so minuteWord = "eighteen".
// Construct output: "six eighteen am".
// Return "six eighteen am".