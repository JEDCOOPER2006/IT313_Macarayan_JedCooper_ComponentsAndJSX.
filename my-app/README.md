# IT313_Macarayan_JedCooper_ComponentsAndJSX

## What the App Does
This is a small class roster app built with Expo and React Native for our Mobile Programming lab. It takes a list of enrolled students from an array and displays them as clean, reusable info cards. The app counts the total number of students dynamically, displays a special "Full Load" badge for students taking 18 or more units, and lets you reverse the roster order to see how React tracking keys handle re-renders.

## How the Components Are Structured
* **StudentRoster (The Parent Component):** This handles the main screen. It holds the starter array of student data and loops through it using the `.map()` method to print out the cards. It also uses a JSX expression to calculate the length of the array so the total student count updates automatically at the top, and handles the list reversal logic.
* **StudentCard (The Child Component):** This is the reusable UI layout for each individual student. It uses prop destructuring inside its function arguments so I can call variables like `name` or `units` directly without typing `props.name` every time. It also uses the logical `&&` short-circuit operator to show the "Full Load" text banner only if the student's `isFullLoad` value is true.

## How to Setup and Run the Project
To get this project running on your computer, just follow these simple steps:

1. Open your terminal and change your directory into the main folder:
   ```bash
   cd my-app
   ```
2. Download and install all the required project dependencies:
   ```bash
   npm install
   ```
3. Boot up the local Expo development server:
   ```bash
   npx expo start
   ```
4. Make sure your Android Studio Emulator phone is active on your desktop background, then press **`a`** on your keyboard inside the terminal. The app will compile and load right onto the virtual screen.
