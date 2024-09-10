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
  