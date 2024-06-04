/**
 * Programming With JavaScript - QAP2
 *
 *
 * Please update the following with your information:
 *
 *      Name: Steven Norris
 *      Date: JUNE 3RD 2024
 *      Note: includes comments for personal use to review material
 */

/*******************************************************************************
 * Problem 1: replace all internal whitespace in a string value with underscore
 * ('_'), and makes it lowercase.
 *
 * We want to be able to convert a string to Lower Snake Case style, so that all
 * leading/trailing whitespace is removed, and any internal spaces, tabs, or dots,
 * are converted to '_' and all letters are lower cased.
 *
 * The snake() function should work like this:
 *
 * snake('abc') --> returns 'abc'
 * snake(' ABC ') --> returns 'abc'
 * snake('ABC') --> returns 'abc'
 * snake('A BC') --> returns 'a_bc'
 * snake(' A bC  ') --> returns 'a-bc'
 * snake('A   BC') --> returns 'a_bc'
 * snake('A.BC') --> returns 'a_bc'
 * snake(' A..  B   C ') --> returns 'a_b_c'
 *
 ******************************************************************************/
console.log("--Question 1--");
console.log("");

function snake(value) {
  if (typeof value !== "string") {
    throw new TypeError("Input must be a string"); // Validates if input is a string
  }
  let trimmed = value.trim(); // Trims the input string to remove leading and trailing whitespace
  let lowerCased = trimmed.toLowerCase(); // Converts the trimmed string to lowercase
  let snakeCased = lowerCased.replace(/[\s.]+/g, "_"); // Replaces all spaces, tabs, and dots with underscores
  return snakeCased;
}

// Test cases
console.log(snake("abc")); // "abc"
console.log(snake(" ABC ")); // "abc"
console.log(snake("ABC")); // "abc"
console.log(snake("A BC")); // "a_bc"
console.log(snake(" A bC  ")); // "a_bc"
console.log(snake("A   BC")); // "a_bc"
console.log(snake("A.BC")); // "a_bc"
console.log(snake(" A..  B   C ")); // "a_b_c"
console.log("");
console.log("");
/*******************************************************************************
 * Problem 2: create an HTML <video> element for the given url.
 *
 * In HTML, we use markup syntax to indicate how browsers should format elements
 * of a web page.  For example, here is a URL to video:
 *
 * http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4
 *
 * Try navigating to it in your browser.  In order for a web page to know how to
 * interpret this URL (e.g., should we show the text of the URL itself, or use
 * it to load an image? or a video?), we have to use special markup. The <video>
 * tag is how we specify that a URL is to be interpreted as a video, see:
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
 *
 * Here is how we might use HTML to markup this video:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>
 *
 * Our <video> has two attributes:
 *
 * - src: the URL to a video file
 * - width: the width to use (in pixels) when showing the video
 *
 * Write the createVideo() function to accept a URL and width, and return the
 * properly formatted video element.  For example:
 *
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 *
 * should return the following string of HTML:
 *
 * '<video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500"></video>'
 *
 * A <video> can also optionally contain a `controls` attribute, which turns on the play/pause/etc controls. For example:
 *
 * <video src="http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4" width="500" controls></video>
 *
 * In this case, the <video> element should include the user controls.  Therefore,
 * your createVideo() function should also accept a third argument, controls:
 *
 * // No controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500)
 * // With controls
 * createVideo('http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4', 500, true)
 *
 * The returned <video> HTML string should be formatted as follows:
 *
 * - Remove leading/trailing whitespace from src before you use them
 * - The src and width attribute values should be wrapped in double-quotes (e.g., src="..." width="...")
 * - There should be a single space between the end of one attribute and start of the next (e.g., src="..." width="..." controls)
 * - The width attribute should only be added if a valid integer value (number or string) is included.  Otherwise ignore it.
 *
 * ******************************************************************************/

// Note-The purpose of this code is to dynamically generate HTML <video> elements using JavaScript.
//      This can be useful in scenarios where the video URL, width, or the need for controls
//      is determined at runtime. rather than being hard-coded into the HTML.
console.log("--Question 2--");
console.log("");

function createVideo(src, width, controls) {
  let trimmedSrc = src.trim(); // Trims the src string to remove leading/trailing whitespaces
  if (!trimmedSrc) {
    throw new Error("Invalid src value"); // validates if src is non-empty
  }
  let videoElement = `<video src="${trimmedSrc}"`; // Start the constructing of the video element string

  if (Number.isInteger(width) && width > 0) {
    videoElement += ` width="${width}"`; // Checks if width is a valid integer and add it to the video element
  }

  if (controls) {
    videoElement += " controls"; // Adds controls attribute - if controls parameter is true
  }

  videoElement += "></video>"; // Closes the video tag

  return videoElement;
}

// Test cases //

console.log(
  createVideo(" https://www.youtube.com/watch?v=YZvbCgnCJoA ", 500, true) // Output: <video src="https://www.youtube.com/watch?v=YZvbCgnCJoA" width="500" controls></video>
);

console.log(createVideo(" https://www.youtube.com/watch?v=YZvbCgnCJoA ", 500)); // Output: <video src="https://www.youtube.com/watch?v=YZvbCgnCJoA" width="500"></video>

console.log(
  createVideo(" https://www.youtube.com/watch?v=YZvbCgnCJoA ", "invalid", true) // Output: <video src="https://www.youtube.com/watch?v=YZvbCgnCJoA" controls></video>
);

console.log(
  createVideo(" https://www.youtube.com/watch?v=YZvbCgnCJoA ", 500, false) // Output: <video src="https://www.youtube.com/watch?v=YZvbCgnCJoA" width="500"></video>
);

console.log(
  createVideo(" https://www.youtube.com/watch?v=YZvbCgnCJoA ", 0, true) // Output: <video src="https://www.youtube.com/watch?v=YZvbCgnCJoA" controls></video>
);

/*  commented out to allow rest of code to run
console.log(createVideo(" ", 500, true));
// Output: Error: Invalid src value */

console.log("");
console.log("");
/*******************************************************************************
 * Problem 3: extract Date from date string
 *
 * A date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * January 1, 2021 would therefore be the following date string:
 *
 * 2021-01-01
 *
 * Similarly, September 29, 2021 would be:
 *
 * 2021-09-29
 *
 * Write a function, parseDateString() that accepts a date string of the format
 * specified above, and returns a JavaScript Date object, set to the correct day.
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * To help developers using your function, you are asked to provide detailed error
 * messages when the date string is formatted incorrectly.  We will use the `throw`
 * statement to throw an Error object when a particular value is not what we expect, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
 *
 * For example: parseDateString('01-01-01') should fail, because the year is
 * not 4 digits.
 *
 * Similarly, parseDateString('2021-1-01') should fail because
 * the day is not 2 digits, and parseDateString('2021-01-1') should fail because
 * the month is not 2 digits.
 *
 * Also, a totally invalid date string should also
 * cause an exception to be thrown, for example parseDateString(null) or
 * parseDateString("this is totally wrong").
 *
 ******************************************************************************/
console.log("--Question 3--");
console.log("");
function parseDateString(value) {
  const datePattern = /^\d{4}-\d{2}-\d{2}$/;
  if (!datePattern.test(value)) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD"); // Validates the input format using a regular expression
  }

  const [yearStr, monthStr, dayStr] = value.split("-"); // Splits the string into year, month, and day components

  const year = parseInt(yearStr, 10);
  const month = parseInt(monthStr, 10); // Converts the extracted components to integers
  const day = parseInt(dayStr, 10);

  if (yearStr.length !== 4) {
    throw new Error("Invalid year format. Year must be 4 digits."); // Validates the year, month, and day components
  }
  if (month < 1 || month > 12) {
    throw new Error("Invalid month. Month must be between 01 and 12.");
  }

  function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0; // Helper function to check for leap year :)
  }

  const daysInMonth = [
    31, // January
    isLeapYear(year) ? 29 : 28, // February
    31, // March
    30, // April
    31, // May
    30, // June
    31, // July
    31, // August
    30, // September
    31, // October
    30, // November
    31, // December
  ];
  // Validates day based on the month and year
  if (day < 1 || day > daysInMonth[month - 1]) {
    throw new Error(
      `Invalid day. Day must be between 01 and ${
        daysInMonth[month - 1]
      } for month ${month}.`
    );
  }

  const date = new Date(year, month - 1, day); // Creates and returns a Date object (Note - Months are 0-indexed in JavaScript)
  return date;
}

// Regular Test cases
console.log(parseDateString("2021-01-01")); // Fri Jan 01 2021
console.log(parseDateString("2021-09-29")); // Wed Sep 29 2021

// Testing leap year
console.log(parseDateString("2020-02-29")); // Sat Feb 29 2020 (leap year)

try {
  console.log(parseDateString("2019-02-29")); // Error: Invalid day. Day must be between 01 and 28 for month 2.
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString("01-01-01")); // Error: Invalid date format. Expected format: YYYY-MM-DD
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString("2021-1-01")); // Error: Invalid month. Month must be between 01 and 12.
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString("2021-01-1")); // Error: Invalid day. Day must be between 01 and 31 for month 1.
} catch (e) {
  console.error(e.message);
}

try {
  console.log(parseDateString("invalid-date")); // Error: Invalid date format. Expected format: YYYY-MM-DD
} catch (e) {
  console.error(e.message);
}
console.log("");
console.log("");
/*******************************************************************************
 * Problem 4: convert Date to date string with specified format.
 *
 * As above, a date string is expected to be formatted as follows:
 *
 * YYYY-MM-DD
 *
 * Meaning, Year (4 digits), Month (2 digits), Day (2 digits).
 *
 * Write a function, toDateString() that accepts a Date object, and returns a
 * date string formatted according to the specification above. Make sure your
 * day and month values are padded with a leading '0' if necessary (e.g., 03 vs. 3).
 *
 * In your solution, you are encouraged to use the following Date methods:
 *
 * - setFullYear()
 * - setMonth()
 * - setDate()
 *
 * NOTE: it should be possible to use parseDateString() from the previous question
 * and toDateString() to reverse each other. For example:
 *
 * toDateString(parseDateString('2021-01-29)) should return '2021-01-29'
 *
 * If an invalid Date is passed, throw an Error object with an appropriate error message.
 * HINT: use try/catch, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
 *
 ******************************************************************************/
console.log("--Question 4--");
console.log("");
function toDateString(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid Date object"); // Validates the input to ensure it's a valid Date object
  }

  const year = date.getFullYear(); // Extracts the year, month, and day components from the Date object
  const month = date.getMonth() + 1; // (Remember: Months are 0-indexed)
  const day = date.getDate();

  const formattedMonth = month < 10 ? "0" + month : month.toString(); // Formats the month and day to ensure they are two digits long
  const formattedDay = day < 10 ? "0" + day : day.toString();

  return `${year}-${formattedMonth}-${formattedDay}`; // Constructs and returns the formatted date string
}

// Test cases
console.log(toDateString(new Date(2021, 0, 1))); // "2021-01-01"
console.log(toDateString(new Date(2021, 8, 29))); // "2021-09-29"
console.log(toDateString(new Date(2020, 1, 29))); // "2020-02-29" (leap year)

try {
  console.log(toDateString(new Date("invalid-date"))); // Error: Invalid Date object
} catch (e) {
  console.error(e.message);
}

try {
  console.log(toDateString("2021-01-01")); // Error: Invalid Date object
} catch (e) {
  console.error(e.message);
}
console.log("");
console.log("");
/*******************************************************************************
 * Problem 5: parse a geographic coordinate
 *
 * Coordinates are defined as numeric, decimal values of Longitude and Latitude.
 * A example, let's suppose the Keyin College St.John's campus is located at:
 *
 * Longitude: -77.4369 (negative number means West)
 * Latitude: 42.9755 (positive number means North)
 *
 * A dataset includes thousands of geographic coordinates, stored as strings.
 * However, over the years, different authors have used slightly different formats.
 * All of the following are valid and need to be parsed:
 *
 * 1. "42.9755,-77.4369" NOTE: no space
 * 4. "[-77.4369, 42.9755]" NOTE: the space, as well as lat/lng values are reversed
 *
 * Valid Longitude values are decimal numbers between -180 and 180.
 *
 * Valid Latitude values are decimal numbers between -90 and 90.
 *
 * Parse the value and reformat it into the form: "(lat, lng)"
 *
 ******************************************************************************/
console.log("--Question 5--");
console.log("");
function normalizeCoord(value) {
  const coordPattern = /^\[?(-?\d+(\.\d+)?),\s*(-?\d+(\.\d+)?)\]?$/; // Regular expression to match the different coordinate formats

  const match = value.match(coordPattern); // Attempt to match the coordinate string
  if (!match) {
    throw new Error("Invalid coordinate format");
  }

  let lat = parseFloat(match[1]); // Extract latitude from the match
  let lng = parseFloat(match[3]); // Extract longitude

  if (value.trim().startsWith("[")) {
    [lat, lng] = [lng, lat]; // If the coordinates are reversed (lng, lat), swap them if so
  }

  if (lat < -90 || lat > 90) {
    throw new Error(
      "Invalid latitude value. Latitude must be between -90 and 90." // Validate latitude and longitude ranges
    );
  }
  if (lng < -180 || lng > 180) {
    throw new Error(
      "Invalid longitude value. Longitude must be between -180 and 180."
    );
  }

  return `(${lat}, ${lng})`; // Returns the formatted coordinate string
}

// Test cases
console.log(normalizeCoord("42.9755,-77.4369")); // "(42.9755, -77.4369)"
console.log(normalizeCoord("[-77.4369, 42.9755]")); // "(42.9755, -77.4369)"

try {
  console.log(normalizeCoord("invalid-coord")); // Error: Invalid coordinate format
} catch (e) {
  console.error(e.message);
}

try {
  console.log(normalizeCoord("91.0,-77.4369")); // Error: Invalid latitude value. Latitude must be between -90 and 90.
} catch (e) {
  console.error(e.message);
}

try {
  console.log(normalizeCoord("42.9755,-181.0")); // Error: Invalid longitude value. Longitude must be between -180 and 180.
} catch (e) {
  console.error(e.message);
}
console.log("");
console.log("");
/*******************************************************************************
   * Problem 6: format any number of coordinates as a list in a string
   *
   * You are asked to format geographic lat, lng coordinates in a list using your
   * normalizeCoord() function from problem 5.
   *
   * Where normalizeCoord() takes a single geographic coord, the formatCoords()
   * function takes a list of any number of geographic coordinates, parses them,
   * filters out any invalid coords, and creates a list.
   *
   * For example: given the following coords, "42.9755,-77.4369" and "[-62.1234, 42.9755]",
   * a new list would be created of the following form "((42.9755, -77.4369), (42.9755, -62.1234))".
   *
   * Notice how the list has been enclosed in an extra set of (...) braces, and each
   * formatted geographic coordinate is separated by a comma and space.
   *
   * The formatCoords() function can take any number of arguments, but they must all
   * be strings.  If any of the values can't be parsed by normalizeCoord() (i.e., if
   * an Error is thrown), skip the value.  For example:
   *
   * formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000") should return
   * "((42.9755, -77.4369), (42.9755, -62.1234))" and skip the invalid coordinate.
   *
  
   ******************************************************************************/
console.log("--Question 6--");
console.log("");
function formatCoords(...values) {
  const validCoords = []; // Step 1: Initialize an array to hold valid normalized coordinates

  // For loop to iterate over each coordinate string
  for (const value of values) {
    try {
      const normalized = normalizeCoord(value); // Attempts to normalize the coordinate using normalizeCoord function
      validCoords.push(normalized);
    } catch (e) {
      console.error(`Invalid coordinate: ${value} - ${e.message}`); // Skip invalid coordinates
    }
  }

  return `(${validCoords.join(", ")})`; // Combines coordinates into a formatted string for returning
}

// Test cases
console.log(formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]"));
// Output: "((42.9755, -77.4369), (42.9755, -62.1234))"

console.log(
  formatCoords("42.9755,-77.4369", "invalid-coord", "[-62.1234, 42.9755]")
);
// Output: "((42.9755, -77.4369), (42.9755, -62.1234))" (invalid-coord is skipped)

try {
  console.log(
    formatCoords("42.9755,-77.4369", "91.0,-77.4369", "[-62.1234, 42.9755]")
  );
  // Output: Error for invalid latitude value
} catch (e) {
  console.error(e.message);
}

console.log("");
console.log("");
/*******************************************************************************
   * Problem 7: determine MIME type from filename extension
   *
   * Web browsers and servers exchange streams of bytes, which must be interpreted
   * by the receiver based on their type.  For example, an HTML web page is
   * plain text, while a JPG image is a binary sequence.
   *
   * The Content-Type header contains information about a resource's MIME type, see:
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type
   *
   * The MIME type is made-up of a `type` and a `subtype` separated by a `/` character.
   * The type is general, for example, 'text' or 'video'.  The subtype is more
   * specific, indicating the specific type of text, image, video, etc.  See:
   * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types
   *
   * A number of common types are used in web development:
   *
   * mimeFromFilename('/User/Documents/readme.txt') --> returns 'text/plain'
   *
   * Your mimeFromFilename() function should support all of the following extensions
   * with and without the leading '.':
   *
   * - .html, .htm --> text/html
   * - .css --> text/css
   * - .js --> text/javascript
   * - .jpg, .jpeg --> image/jpeg
   * - .gif --> image/gif
   * - .bmp --> image/bmp
   * - .ico, .cur --> image/x-icon
   * - .png --> image/png
   * - .svg --> image/svg+xml
   * - .webp --> image/webp
   * - .mp3 --> audio/mp3
   * - .wav --> audio/wav
   * - .mp4 --> video/mp4
   * - .webm --> video/webm
   * - .json --> application/json
   * - .mpeg --> video/mpeg
   * - .csv --> text/csv
   * - .ttf --> font/ttf
   * - .woff --> font/woff
   * - .zip --> application/zip
   * - .avi --> video/x-msvideo
   *
   *
   * NOTE: any other extension should use the `application/octet-stream` MIME type,
   * to indicate that it is an unknown stream of bytes (e.g., binary file). You should
   * also use `application/octet-stream` if the file has no extension.
   *
  
   ******************************************************************************/
console.log("--Question 7--");
console.log("");
function mimeFromFilename(filename) {
  const extensionPattern = /\.([a-z0-9]+)$/i; // Extract the file extension from the filename
  const match = filename.match(extensionPattern);
  const ext = match ? match[1].toLowerCase() : "";

  // Switch statement to map extensions to MIME types
  switch (ext) {
    case "html":
    case "htm":
      return "text/html";
    case "css":
      return "text/css";
    case "js":
      return "text/javascript";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "gif":
      return "image/gif";
    case "bmp":
      return "image/bmp";
    case "ico":
    case "cur":
      return "image/x-icon";
    case "png":
      return "image/png";
    case "svg":
      return "image/svg+xml";
    case "webp":
      return "image/webp";
    case "mp3":
      return "audio/mp3";
    case "wav":
      return "audio/wav";
    case "mp4":
      return "video/mp4";
    case "webm":
      return "video/webm";
    case "json":
      return "application/json";
    case "mpeg":
      return "video/mpeg";
    case "csv":
      return "text/csv";
    case "ttf":
      return "font/ttf";
    case "woff":
      return "font/woff";
    case "zip":
      return "application/zip";
    case "avi":
      return "video/x-msvideo";
    default:
      return "application/octet-stream";
  }
}

// Test cases
console.log(mimeFromFilename("readme.txt")); // "application/octet-stream"
console.log(mimeFromFilename("/User/Documents/readme.html")); // "text/html"
console.log(mimeFromFilename("image.jpeg")); // "image/jpeg"
console.log(mimeFromFilename("style.css")); // "text/css"
console.log(mimeFromFilename("script.js")); // "text/javascript"
console.log(mimeFromFilename("archive.zip")); // "application/zip"
console.log(mimeFromFilename("icon.")); // "application/octet-stream"
console.log(mimeFromFilename("noextensionfile")); // "application/octet-stream"
console.log("");
console.log("");

/*******************************************************************************
 * Problem 8, Part 1: generate license text and link from license code.
 *
 * Images, videos, and other resources on the web are governed by copyright.
 * Everything you find on the web is copyright to its creator automatically, and
 * you cannot reuse it unless you are granted a license to do so.
 *
 * Different licenses exist to allow creators to share their work. For example,
 * the Creative Commons licenses are a popular way to allow people to reuse
 * copyright material, see https://creativecommons.org/licenses/.
 *
 * Below is a list of license codes, and the associated license text explaining the code:
 *
 * CC-BY: Creative Commons Attribution License
 * CC-BY-NC: Creative Commons Attribution-NonCommercial License
 * CC-BY-SA: Creative Commons Attribution-ShareAlike License
 * CC-BY-ND: Creative Commons Attribution-NoDerivs License
 * CC-BY-NC-SA: Creative Commons Attribution-NonCommercial-ShareAlike License
 * CC-BY-NC-ND: Creative Commons Attribution-NonCommercial-NoDerivs License
 *
 * NOTE: any other licenseCode should use the URL https://choosealicense.com/no-permission/
 * and the explanation text, "All Rights Reserved"
 *
 * Write a function, generateLicenseLink(), which takes a license code, and returns
 * an HTML link to the appropriate license URL, and including the explanation text.
 *
 * For example:
 *
 * generateLicenseLink('CC-BY-NC') should return the following HTML string:
 *
 * '<a href="https://creativecommons.org/licenses/by-nc/4.0/">Creative Commons Attribution-NonCommercial License</a>'
 *
 * The URL is generated based on the license code:
 *
 * - remove the `CC-` prefix
 * - convert to lower case
 * - place formatted license code within URL https://creativecommons.org/licenses/[...here]/4.0/
 *
 * Your generateLicenseLink() function should also accept an optional second argument,
 * `targetBlank`.  If `targetBlank` is true, add ` target="_blank"` to your link
 * so that the URL opens in a blank tab/window.
 *
 * You can read more about HTML links at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
 *
 ******************************************************************************/
console.log("--Question 8--");
console.log("");
function generateLicenseLink(licenseCode, targetBlank = false) {
  // Define the mapping of license codes to explanation texts
  const licenseMap = {
    "CC-BY": "Creative Commons Attribution License",
    "CC-BY-NC": "Creative Commons Attribution-NonCommercial License",
    "CC-BY-SA": "Creative Commons Attribution-ShareAlike License",
    "CC-BY-ND": "Creative Commons Attribution-NoDerivs License",
    "CC-BY-NC-SA":
      "Creative Commons Attribution-NonCommercial-ShareAlike License",
    "CC-BY-NC-ND":
      "Creative Commons Attribution-NonCommercial-NoDerivs License",
  };

  // Check if the provided license code is valid
  if (!licenseMap.hasOwnProperty(licenseCode)) {
    return '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>';
  }

  // Generate the URL based on the license code
  const licenseKey = licenseCode.replace("CC-", "").toLowerCase();
  const url = `https://creativecommons.org/licenses/${licenseKey}/4.0/`;
  const text = licenseMap[licenseCode];

  // Construct the HTML link string
  let link = `<a href="${url}">${text}</a>`;
  if (targetBlank) {
    link = `<a href="${url}" target="_blank">${text}</a>`;
  }

  return link;
}

// Test cases
console.log(generateLicenseLink("CC-BY"));
// Output: '<a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution License</a>'

console.log(generateLicenseLink("CC-BY-NC", true));
// Output: '<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">Creative Commons Attribution-NonCommercial License</a>'

console.log(generateLicenseLink("CC-BY-NC-ND"));
// Output: '<a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivs License</a>'

console.log(generateLicenseLink("UNKNOWN-LICENSE"));
// Output: '<a href="https://choosealicense.com/no-permission/">All Rights Reserved</a>'
console.log("");
console.log("");
/*******************************************************************************
 * Problem 9 Part 1: convert a value to a Boolean (true or false)
 *
 * A dataset contains fields that indicate a value is true or false.  However,
 * users have entered data in various formats and languages (English and French)
 * over the years, and the data is a mess. For example, the dataset contains all
 * of the following values:
 *
 * Yes, yes, YES, Y, Oui, oui, OUI, O, t, TRUE, true, True, vrai, V, VRAI, 1, 2, ...any positive number
 * No, no, NO, Non, non, NON, N, n, f, FALSE, false, False, FAUX, faux, Faux, 0, -1, -2, ...any negative number
 *
 * Write a function pureBool() which takes a String, Number, or Boolean,
 * and attempts to convert it into a pure Boolean value, according to these rules:
 *
 * 1. If the value is already a Boolean (true or false) return the value without conversion
 * 2. If the value is one of the "true" type values, return `true` (Boolean)
 * 3. If the value is one of the "false" type values, return `false` (Boolean)
 * 4. If the value is none of the "true" or "false" values, throw an error with the error
 * message, 'invalid value'.
 *
 ******************************************************************************/
console.log("--Question 9 Part 1--");
console.log("");
function pureBool(value) {
  // Check if the value is already a boolean
  if (typeof value === "boolean") {
    return value;
  }

  // Convert string values to lowercase for case-insensitive comparison
  if (typeof value === "string") {
    value = value.toLowerCase();
  }

  // Define sets of true and false representations
  const trueValues = new Set([
    "yes",
    "y",
    "oui",
    "o",
    "t",
    "true",
    "vrai",
    "1",
  ]);
  const falseValues = new Set([
    "no",
    "n",
    "non",
    "f",
    "false",
    "faux",
    "0",
    "-1",
    "-2",
  ]);

  // Check if the value is in the true set
  if (trueValues.has(String(value))) {
    return true;
  }

  // Check if the value is in the false set
  if (falseValues.has(String(value))) {
    return false;
  }

  // Throw an error for invalid values
  throw new Error("Invalid value");
}

// Test cases
console.log(pureBool(true)); // true
console.log(pureBool(false)); // false
console.log(pureBool("yes")); // true
console.log(pureBool("NO")); // false
console.log(pureBool(1)); // true
console.log(pureBool(0)); // false
console.log(pureBool("vrai")); // true
console.log(pureBool("Faux")); // false

try {
  console.log(pureBool("maybe")); // Error: Invalid value
} catch (e) {
  console.error(e.message);
}
console.log("");
console.log("");
/*******************************************************************************
 * Problem 9 Part 2: checking for all True or all False values in a normalized list
 *
 * Using your pureBool() function above, create three new functions to check
 * if a list of arguments are all "true", partially "true", or all "false" values:
 *
 * every('Y', 'yes', 1) --> returns true
 * any('Y', 'no', 1) --> returns true
 * none('Y', 'invalid', 1) --> returns false
 *
 * Use try/catch syntax to avoid having your functions throw errors when pureBool()
 * throws on invalid data.
 ******************************************************************************/
console.log("--Question 9 Part 2--");
console.log("");
function every(...args) {
  try {
    return args.every((arg) => pureBool(arg) === true);
  } catch (e) {
    return false;
  }
}

function any(...args) {
  try {
    return args.some((arg) => pureBool(arg) === true);
  } catch (e) {
    return false;
  }
}

function none(...args) {
  try {
    return args.every((arg) => pureBool(arg) === false);
  } catch (e) {
    return false;
  }
}

// Test cases
console.log(every("Y", "yes", 1)); // true
console.log(any("Y", "no", 1)); // true
console.log(none("no", "false", "Faux")); // true

try {
  console.log(every("Y", "invalid", 1)); // false (because 'invalid' will throw an error in pureBool)
} catch (e) {
  console.error(e.message);
}

try {
  console.log(any("N", "no", "invalid")); // false (because 'invalid' will throw an error in pureBool)
} catch (e) {
  console.error(e.message);
}

try {
  console.log(none("no", "false", "invalid")); // false (because 'invalid' will throw an error in pureBool)
} catch (e) {
  console.error(e.message);
}

console.log("");
console.log("");
/*******************************************************************************
 * Problem 10 - build a URL
 *
 * Querying the iNaturalist Web API (https://api.inaturalist.org/v2/observations)
 * for data involves formatting a URL in a particular way.  As we know might know, a URL can contain optional name=value pairs. For reference: read query strings on web :)
 *
 * For example:
 *
 *   https://www.store.com/search?q=dog includes q=dog
 *
 *   https://www.store.com?_encoding=UTF8&node=18521080011 includes
 *   both _encoding=UTF8 and also node=18521080011, separated by &
 *
 * We will write a buildUrl() function to build a URL for the iNaturalist API
 * based on arguments passed by the caller.
 *
 * The buildUrl() function accepts the following arguments:
 *
 * - query: a URI encoded search string, for example "butterfly" or "Horse-chestnut"
 * - order: a string indicating sort order, with possible values of `ascending` or `descending`
 * - count: a number from 1 to 50, indicating how many results to return per page
 * - license: a string indicating which items to return (e.g., which license they use). Possible
 *   values include: none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 * Write an implementation of buildUrl() that accepts arguments for all of the above
 * parameters, validates them (e.g., count must be between 1 and 50, etc), and returns
 * a properly formatted URL.
 *
 * For example:
 *
 * buildUrl('Monarch Butterfly', 'ascending', 25, 'cc-by') would return the following URL:
 *
 * https://api.inaturalist.org/v2/observations?query='Monarch%20Butterfly'&count=25&order=ascending&license=cc-by
 *
 * NOTE: if any of the values passed to buildUrl() are invalid, an Error should be thrown.
 *
 * NOTE: make sure you properly encode the query value, since URLs can't contain
 * spaces or other special characters. HINT: use the encodeURIComponent() function
 * to do this, see:
 *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
 *
 * The following might be the parameters
 *
 *  "query" the query to use. Must be properly URI encoded
 * "order" the sort order to use, must be one of `ascending` or `descending`
 * "count" the number of results per page, must be 1-50
 * "license" the license to use, must be one of none, any, cc-by, cc-by-nc, cc-by-sa, cc-by-nd, cc-by-nc-sa, cc-by-nc-nd
 *
 ******************************************************************************/
console.log("--Question 10--");
console.log("");
function buildUrl(query, order, count, license) {
  // Validates the query parameter
  if (typeof query !== "string" || query.trim() === "") {
    throw new Error("Invalid query parameter");
  }

  // Validates the order parameter
  const validOrders = ["ascending", "descending"];
  if (!validOrders.includes(order)) {
    throw new Error("Invalid order parameter");
  }

  // Validates the count parameter
  if (!Number.isInteger(count) || count < 1 || count > 50) {
    throw new Error("Invalid count parameter");
  }

  // Validates the license parameter
  const validLicenses = [
    "none",
    "any",
    "cc-by",
    "cc-by-nc",
    "cc-by-sa",
    "cc-by-nd",
    "cc-by-nc-sa",
    "cc-by-nc-nd",
  ];
  if (!validLicenses.includes(license)) {
    throw new Error("Invalid license parameter");
  }

  // Encode the query parameter
  const encodedQuery = encodeURIComponent(query);

  // Construct the URL
  const baseUrl = "https://api.inaturalist.org/v2/observations";
  const url = `${baseUrl}?query=${encodedQuery}&order=${order}&count=${count}&license=${license}`;

  return url;
}

// Test cases
console.log(buildUrl("Monarch Butterfly", "ascending", 25, "cc-by"));
// Output: "https://api.inaturalist.org/v2/observations?query=Monarch%20Butterfly&order=ascending&count=25&license=cc-by"

console.log(buildUrl("Butterfly", "descending", 10, "cc-by-nc"));
// Output: "https://api.inaturalist.org/v2/observations?query=Butterfly&order=descending&count=10&license=cc-by-nc"

try {
  console.log(buildUrl("", "ascending", 25, "cc-by")); // Error: Invalid query parameter
} catch (e) {
  console.error(e.message);
}

try {
  console.log(buildUrl("Butterfly", "random", 25, "cc-by")); // Error: Invalid order parameter
} catch (e) {
  console.error(e.message);
}

try {
  console.log(buildUrl("Butterfly", "ascending", 100, "cc-by")); // Error: Invalid count parameter
} catch (e) {
  console.error(e.message);
}

try {
  console.log(buildUrl("Butterfly", "ascending", 25, "unknown-license")); // Error: Invalid license parameter
} catch (e) {
  console.error(e.message);
}
