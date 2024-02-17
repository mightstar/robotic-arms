# Package Sorter Application

## Overview
The Package Sorter Application is a web-based tool designed for Thoughtful’s robotic automation factory. It allows users to input package dimensions and mass, then determines the correct stack (STANDARD, SPECIAL, REJECTED, or INVALID) for dispatch based on predefined criteria.

## Features
- **User Input for Package Specifications**: Users can input width, height, length (in centimeters), and mass (in kilograms) for a package.
- **Automatic Sorting Logic**: Based on the input, the application categorizes packages into STANDARD, SPECIAL, REJECTED, or INVALID.
- **Immediate Feedback**: The sorting result is displayed instantly on the webpage without needing to reload.

## How to Use
1. **Open the Application**: Load the HTML file in a web browser.
2. **Enter Package Details**: Input the width, height, length, and mass of the package in the respective fields.
3. **Submit**: Click the "Sort Package" button to see the sorting result.
4. **View Result**: The application will display the category of the package below the form.

## Manual Testing Guide
To ensure the application works as expected, you can perform manual tests using the following scenarios:

### Test Cases
1. **Standard Package**
   - **Input**: Width = 50 cm, Height = 50 cm, Length = 50 cm, Mass = 10 kg
   - **Expected Output**: Package Stack: STANDARD

2. **Special Package (Bulky by Volume)**
   - **Input**: Width = 100 cm, Height = 100 cm, Length = 100 cm, Mass = 10 kg
   - **Expected Output**: Package Stack: SPECIAL

3. **Special Package (Bulky by Dimension)**
   - **Input**: Width = 150 cm, Height = 50 cm, Length = 50 cm, Mass = 10 kg
   - **Expected Output**: Package Stack: SPECIAL

4. **Special Package (Heavy)**
   - **Input**: Width = 50 cm, Height = 50 cm, Length = 50 cm, Mass = 20 kg
   - **Expected Output**: Package Stack: SPECIAL

5. **Rejected Package (Bulky and Heavy)**
   - **Input**: Width = 150 cm, Height = 150 cm, Length = 150 cm, Mass = 20 kg
   - **Expected Output**: Package Stack: REJECTED

6. **Invalid Input (Negative Dimension)**
   - **Input**: Width = -50 cm, Height = 50 cm, Length = 50 cm, Mass = 10 kg
   - **Expected Output**: Package Stack: INVALID

### Tips for Testing
- Ensure to clear the input fields before entering new values for each test.
- Pay attention to the application's response to invalid inputs, such as negative numbers or non-numeric values.

## Feedback and Contributions
We welcome your feedback and contributions to this project. Please feel free to submit issues or pull requests through the project's GitHub repository.
