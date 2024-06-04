# SDN-QAP2 - JavaScript Function Documentation

1. **Name**: Steven N.
2. **Date of Submission**: June 4th

# --------- TABLE OF CONTENTS ------------

1. Overview [AA1]
2. Key Concepts [AA2]
3. Lessons Learned [AA3]
4. Key Takeaways [AA4]
5. Function Explanations [AA5]
6. Detailed Code Breakdowns [AA6]
7. Examples and Test Cases [AA7]

## -- OVERVIEW -- [AA1]

This project involves developing and explaining various JavaScript functions that perform specific tasks such as string manipulation, date handling, URL construction, and more. The aim is to illustrate key programming concepts and best practices in JavaScript through practical examples.

## -- KEY CONCEPTS AND LESSONS LEARNED --

### ----- Key Concepts ----- [AA2]

1. **Input Validation**:

   - Ensuring that function inputs, in JavaScript, are of the correct type and within the expected range or format.
   - Example: Checking if a string input is not empty before processing it.

2. **Error Handling**:

   - Using `try...catch` blocks to handle errors gracefully.
   - Example: Catching errors when parsing a date string and providing a meaningful error message.

3. **String Manipulation**:

   - Utilizing methods like `trim()`, `toLowerCase()`, `replace()`, and `split()`.
   - Example: Converting a string to lower snake case.

4. **Date and Time Handling**:

   - Extracting and formatting date components using JavaScript's `Date` object.
   - Example: Converting a date string in "YYYY-MM-DD" format to a JavaScript `Date` object.

5. **URL Construction and Encoding**:

   - Building URLs with query parameters and encoding special characters using `encodeURIComponent()`.
   - Example: Constructing a URL for an API request with various parameters.

6. **Set and Array Methods**:

   - Using `Set` to handle collections of unique values for quick lookups.
   - Example: Checking if a value is in a set of true or false representations.

7. **Logical Operations**:
   - Implementing logical checks to determine if all, some, or none of the elements in a collection meet certain conditions.
   - Example: Checking if all provided values are truthy.

### ----- Lessons Learned ----- [AA3]

1. **Robust Input Validation**:

   - Prevents unexpected behavior and errors in your functions.
   - Ensures that functions only process valid data, which leads to more reliable code.

2. **Effective Error Handling**:

   - Makes debugging easier and improves the user experience.
   - Ensures that functions fail gracefully and provide meaningful error messages.

3. **String and Date Manipulation**:

   - Essential for tasks like formatting and validation.
   - Demonstrates the importance of understanding built-in methods for common operations.

4. **Constructing URLs**:

   - Ensures properly formatted API requests.
   - Demonstrates the importance of encoding parameters to handle special characters.

5. **Logical Checks and Operations**:
   - Useful for tasks like validation and filtering.
   - Shows how to implement common logical operations using array methods.

### ----- Key Takeaways ----- [AA4]

1. **Utilizing Built-in Methods**:

   - JavaScript provides many built-in methods for common tasks.
   - Familiarize yourself with these methods to write more efficient and readable code.

2. **Effective Use of Collections**:

   - Using `Set` and array methods allows for efficient processing of collections.
   - This is important for tasks that involve filtering, mapping, and reducing data.

3. **Writing Reusable Functions**:
   - Write functions that are reusable and can handle a variety of inputs.
   - This improves code maintainability and reduces redundancy.

## -- FUNCTION EXPLANATIONS -- [AA5]

### 1. `snake(value)`

**Purpose**: Converts a string to lower snake case.

**Explanation**:
This function takes a string input, removes leading and trailing whitespace, converts it to lowercase, and replaces spaces and dots with underscores to format the string in lower snake case.

- **Key Concepts**: Input validation, string manipulation.
- **Lessons Learned**: Importance of input validation to ensure the function processes valid data.

### 2. `createVideo(src, width, controls)`

**Purpose**: Creates an HTML `<video>` element for a given URL.

**Explanation**:
This function trims the input URL, validates it to ensure it is not empty, and constructs an HTML video element string. It optionally adds width and controls attributes if they are provided and valid.

- **Key Concepts**: Input validation, string manipulation.
- **Lessons Learned**: Handling optional parameters and constructing HTML elements dynamically.

### 3. `parseDateString(value)`

**Purpose**: Converts a date string in the format "YYYY-MM-DD" into a JavaScript `Date` object.

**Explanation**:
This function validates the input date string format, splits it into year, month, and day components, converts them to integers, checks for leap years, and returns a JavaScript `Date` object if the date is valid.

- **Key Concepts**: Input validation, date and time handling.
- **Lessons Learned**: Importance of validating date formats and handling leap years.

### 4. `toDateString(date)`

**Purpose**: Converts a JavaScript `Date` object into a string in the format "YYYY-MM-DD".

**Explanation**:
This function checks if the input is a valid `Date` object, extracts the year, month, and day, formats them to ensure they are two digits long where necessary, and constructs a date string in the format "YYYY-MM-DD".

- **Key Concepts**: Date and time handling, string manipulation.
- **Lessons Learned**: Ensuring date components are properly formatted.

### 5. `normalizeCoord(value)`

**Purpose**: Normalizes a string representing geographic coordinates into a consistent format `(lat, lng)`.

**Explanation**:
This function validates the coordinate format using a regular expression, extracts latitude and longitude values, swaps them if necessary (based on specific formatting), and returns a formatted coordinate string.

- **Key Concepts**: Input validation, string manipulation.
- **Lessons Learned**: Handling geographic coordinates and ensuring consistent formatting.

### 6. `formatCoords(...values)`

**Purpose**: Formats multiple coordinate strings into a single string.

**Explanation**:
This function takes multiple coordinate strings, normalizes them using the `normalizeCoord` function, collects the valid coordinates, and returns them as a single formatted string.

- **Key Concepts**: Input validation, logical operations.
- **Lessons Learned**: Aggregating and formatting multiple values.

### 7. `generateLicenseLink(licenseCode, targetBlank = false)`

**Purpose**: Generates an HTML link for a given license code with an optional target attribute to open the link in a new tab.

**Explanation**:
This function maps license codes to their descriptions, constructs a URL for the license, and returns an HTML link string. If `targetBlank` is true, it adds the `target="_blank"` attribute to the link.

- **Key Concepts**: Input validation, string manipulation.
- **Lessons Learned**: Dynamically generating HTML links based on input parameters.

### 8. `pureBool(value)`

**Purpose**: Converts various representations of truthy and falsy values into a boolean.

**Explanation**:
This function checks if the input is a boolean, converts strings to lowercase, checks against sets of true and false representations, and returns the corresponding boolean value. If the input does not match any known true or false values, it throws an error.

- **Key Concepts**: Input validation, logical operations.
- **Lessons Learned**: Converting and validating various representations of boolean values.

### 9. Logical Check Functions: `every`, `any`, and `none`

**Purpose**: Perform logical checks on collections of values.

**Explanation**:

- **`every(...args)`**: Checks if all provided values are truthy using the `pureBool` function.
- **`any(...args)`**: Checks if at least one of the provided values is truthy using the `pureBool` function.
- **`none(...args)`**: Checks if all provided values are falsy using the `pureBool` function.

These functions handle errors by catching exceptions thrown by `pureBool` and returning `false` if an error occurs.

- **Key Concepts**: Logical operations, error handling.
- **Lessons Learned**: Implementing common logical operations and handling errors gracefully.

### 10. `buildUrl(query, order, count, license)`

**Purpose**: Constructs a URL for querying the iNaturalist API with specific parameters.

**Explanation**:
This function validates the input parameters (`query`, `order`, `count`, and `license`), encodes the query string, and constructs the full URL with query parameters for the API request.

- **Key Concepts**: Input validation, URL construction.
- **Lessons Learned**: Constructing URLs with query parameters and ensuring valid input.

## -- DETAILED CODE BREAKDOWNS -- [AA6]

### 1. `snake(value)`

- **Step-by-Step Explanation**:
  - **Input Validation**: Check if the input is a string and throw an error if not.
  - **Trimming**: Remove any leading or trailing whitespace from the input string.
  - **Lowercase Conversion**: Convert the trimmed string to lowercase.
  - **Replacement**: Replace all spaces and dots in the string with underscores.
  - **Return**: Return the transformed string.

### 2. `createVideo(src, width, controls)`

- **Step-by-Step Explanation**:
  - **Trimming**: Remove any leading or trailing whitespace from the source URL.
  - **Validation**: Ensure the source URL is not empty, throwing an error if it is.
  - **Building the Element**: Start constructing the HTML `<video>` element string with the source URL.
  - **Width Attribute**: If the width is a valid positive integer, add it to the video element.
  - **Controls Attribute**: If the `controls` parameter is true, add the controls attribute to the video element.
  - **Close the Element**: Complete the video element string and return it.

### 3. `parseDateString(value)`

- **Step-by-Step Explanation**:
  - **Date Pattern**: Define a regular expression to match the date format "YYYY-MM-DD".
  - **Validation**: Check if the input string matches the date pattern and throw an error if it doesn't.
  - **Extract Components**: Split the input string into year, month, and day components.
  - **Convert to Integers**: Convert the extracted components to integers.
  - **Component Validation**: Ensure the year is 4 digits, the month is between 1 and 12, and the day is within the valid range for the month.
  - **Leap Year Check**: Determine if the year is a leap year to validate the day in February.
  - **Return**: Create and return a JavaScript `Date` object using the validated components.

### 4. `toDateString(date)`

- **Step-by-Step Explanation**:
  - **Validation**: Ensure the input is a valid `Date` object and throw an error if not.
  - **Extract Components**: Get the year, month, and day from the `Date` object.
  - **Format Components**: Ensure the month and day are two digits long by adding a leading zero if necessary.
  - **Construct String**: Construct the date string in the format "YYYY-MM-DD" and return it.

### 5. `normalizeCoord(value)`

- **Step-by-Step Explanation**:
  - **Coordinate Pattern**: Define a regular expression to match different coordinate formats.
  - **Validation**: Check if the input string matches the coordinate pattern and throw an error if it doesn't.
  - **Extract Components**: Extract the latitude and longitude values from the matched pattern.
  - **Swap Components**: If the coordinates are in the format `[lng, lat]`, swap them to `[lat, lng]`.
  - **Range Validation**: Ensure the latitude is between -90 and 90, and the longitude is between -180 and 180.
  - **Return**: Construct and return the formatted coordinate string.

### 6. `formatCoords(...values)`

- **Step-by-Step Explanation**:
  - **Initialize Array**: Create an array to hold valid normalized coordinates.
  - **Iterate Over Values**: Iterate over each coordinate string.
  - **Normalization**: Attempt to normalize each coordinate using the `normalizeCoord` function.
  - **Error Handling**: Catch any errors thrown by `normalizeCoord` and skip invalid coordinates.
  - **Collect Valid Coordinates**: Add valid normalized coordinates to the array.
  - **Construct String**: Join the valid coordinates into a single formatted string and return it.

### 7. `generateLicenseLink(licenseCode, targetBlank = false)`

- **Step-by-Step Explanation**:
  - **License Map**: Define a mapping of license codes to their descriptions.
  - **Validation**: Check if the provided license code is valid using the license map.
  - **Default Link**: If the license code is invalid, return a default "All Rights Reserved" link.
  - **URL Construction**: Construct the URL for the license using the license code.
  - **HTML Link**: Construct the HTML link string with the license description.
  - **Target Attribute**: If `targetBlank` is true, add the `target="_blank"` attribute to the link.
  - **Return**: Return the constructed HTML link string.

### 8. `pureBool(value)`

- **Step-by-Step Explanation**:
  - **Boolean Check**: Check if the input is already a boolean and return it if true.
  - **String Conversion**: If the input is a string, convert it to lowercase.
  - **True/False Sets**: Define sets of values representing true and false.
  - **Value Check**: Check if the input matches any value in the true or false sets.
  - **Return Boolean**: Return `true` or `false` based on the set the input matches.
  - **Error Handling**: If the input doesn't match any known values, throw an error.

### 9. Logical Check Functions: `every`, `any`, and `none`

- **every(...args)**:

  - **Purpose**: Check if all provided values are truthy.
  - **Explanation**: Uses `pureBool` to convert each value to a boolean. If all values are true, it returns `true`. Otherwise, it returns `false`. Catches errors and returns `false` if any value is invalid.

- **any(...args)**:

  - **Purpose**: Check if at least one of the provided values is truthy.
  - **Explanation**: Uses `pureBool` to convert each value to a boolean. If any value is true, it returns `true`. Catches errors and returns `false` if all values are invalid.

- **none(...args)**:
  - **Purpose**: Check if all provided values are falsy.
  - **Explanation**: Uses `pureBool` to convert each value to a boolean. If all values are false, it returns `true`. Catches errors and returns `false` if any value is invalid.

### 10. `buildUrl(query, order, count, license)`

- **Step-by-Step Explanation**:
  - **Query Validation**: Check if the query parameter is a non-empty string.
  - **Order Validation**: Validate that the order parameter is either "ascending" or "descending".
  - **Count Validation**: Ensure the count parameter is an integer between 1 and 50.
  - **License Validation**: Validate that the license parameter matches one of the accepted license codes.
  - **Encode Query**: Use `encodeURIComponent` to encode the query string.
  - **Construct URL**: Build the complete URL with the encoded query and other parameters.
  - **Return**: Return the constructed URL string.

## -- EXAMPLES AND TEST CASES -- [AA7]

### `snake(value)`

- **Example**: Converting a string to lower snake case.
  - **Input**: `" A..  B   C "`
  - **Output**: `"a_b_c"`

### `createVideo(src, width, controls)`

- **Example**: Creating an HTML video element string.
  - **Input**: `src = "https://www.youtube.com/watch?v=YZvbCgnCJoA", width = 500, controls = true`
  - **Output**: `'<video src="https://www.youtube.com/watch?v=YZvbCgnCJoA" width="500" controls></video>'`

### `parseDateString(value)`

- **Example**: Converting a date string to a JavaScript `Date` object.
  - **Input**: `"2021-09-29"`
  - **Output**: `Date` object representing September 29, 2021.

### `toDateString(date)`

- **Example**: Converting a `Date` object to a formatted date string.
  - **Input**: `new Date(2021, 0, 1)`
  - **Output**: `"2021-01-01"`

### `normalizeCoord(value)`

- **Example**: Normalizing geographic coordinates.
  - **Input**: `"42.9755,-77.4369"`
  - **Output**: `"(42.9755, -77.4369)"`

### `formatCoords(...values)`

- **Example**: Aggregating and formatting multiple coordinate strings.
  - **Input**: `"42.9755,-77.4369", "[-62.1234, 42.9755]"`
  - **Output**: `"(42.9755, -77.4369), (42.9755, -62.1234)"`

### `generateLicenseLink(licenseCode, targetBlank = false)`

- **Example**: Generating an HTML link for a specific license code.
  - **Input**: `"CC-BY-NC", true`
  - **Output**: `'<a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank">Creative Commons Attribution-NonCommercial License</a>'`

### `pureBool(value)`

- **Example**: Converting various truthy and falsy representations to boolean.
  - **Input**: `"yes"`
  - **Output**: `true`

### Logical Check Functions: `every`, `any`, and `none`

- **Example**: Checking collections of values for truthiness or falsiness.
  - **Input**: `every("Y", "yes", 1)`
  - **Output**: `true`
  - **Input**: `any("Y", "no", 1)`
  - **Output**: `true`
  - **Input**: `none("no", "false", "Faux")`
  - **Output**: `true`

### `buildUrl(query, order, count, license)`

- **Example**: Constructing a URL for querying the iNaturalist API.
  - **Input**: `"Monarch Butterfly", "ascending", 25, "cc-by"`
  - **Output**: `"https://api.inaturalist.org/v2/observations?query=Monarch%20Butterfly&order=ascending&count=25&license=cc-by"`
