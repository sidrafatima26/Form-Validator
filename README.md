# Form Validator JavaScript
This JavaScript file (FormValidator.js) accompanies the Form Validator project, providing interactive validation for the form's username, email, password, and password confirmation fields.

# Functions
`showError(input, message)`
Displays an error message for the specified input field.

`showSuccess(input)`
Indicates a successful validation for the specified input field.

`checkEmail(input)`
Validates the email format using a regular expression.

`checkRequired(inputArr)`
Checks if the input fields are filled and displays error messages if any are empty.

`checkLength(input, min, max)`
Verifies if the input length is within the specified range and displays appropriate messages.

`getFieldName(input)`
Returns a formatted field name for error messages.

`checkpswdmatch(input1, input2)`
Compares the password and confirm password fields to ensure a match.

# Event Listener
Listens for the form submission event and performs the necessary validation using the above functions.

# Clone the repository:

git clone [ Form-Validator@github.com](sidrafatima26/Form-Validator.git)
Open the index.html file in your preferred web browser.

# Features
- **Username Validation:** Ensures the username meets specified criteria.
- **Email Validation:** Validates the email format.
- **Password Validation:** Checks for password strength.
- **Password Confirmation:** Ensures the password and confirm password fields match.
  
# Project Structure
- **FormValidator.html:** Contains the HTML structure for the form.
- **FormValidator.css:** Stylesheet for the form.
- **FormValidator.js:** JavaScript file for form validation.
  
# Usage
Open index.html in a web browser.
Fill out the form with the required information.
Receive real-time feedback on any errors and correct them accordingly.

# Contributing
Feel free to contribute to the project by opening issues or submitting pull requests. Any suggestions or improvements are welcome!

# License
This project is licensed under the MIT License.
