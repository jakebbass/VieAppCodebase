VieApp

VieApp is a React Native mobile application that provides users with financial tools to analyze their paycheck information, explore account features, and interact with a sleek and intuitive user interface.

Features
	•	Splash Screen: Displays a centered logo with a fade-in animation.
	•	Sign Up / Sign In: Options to sign up or sign in with Apple, Meta, Google, or email (includes confirmation email functionality).
	•	Home Screen: Users can input paycheck information to calculate financial projections, displayed using charts.
	•	Account Settings: A screen for managing user account preferences.
	•	Payments and Records: Interactive navigation for exploring payment options (ends with a “Coming Soon” screen).
	•	Bottom Navigation: Easy-to-use tab navigation for seamless transitions between screens.
	•	Dynamic Button Behavior: Buttons change color based on text field completion (gray when empty, green when filled).

Tech Stack
	•	Frontend Framework: React Native
	•	Navigation: React Navigation
	•	Charts: react-native-chart-kit
	•	Styling: Custom CSS-in-JS with dynamic accents (#36FF45, #006246, and #C4C4C4)

Setup Instructions
	1.	Prerequisites:
	•	Install Node.js (LTS version recommended).
	•	Install Xcode (for iOS development).
	•	Install npm or yarn package manager.
	2.	Clone the Repository:

git clone <repository-url>
cd VieAppCodebase


	3.	Install Dependencies:

npm install


	4.	Install CocoaPods for iOS:

cd ios
pod install
cd ..


	5.	Run the App:
	•	iOS Simulator:

npx react-native run-ios


	•	Android Emulator:

npx react-native run-android


	6.	Start the Metro Bundler:

npm start

File Structure

src/
├── components/
│   ├── SplashScreen.js          # Splash screen with logo animation
│   ├── SignUpSignInScreen.js    # Sign-up and sign-in functionality
│   ├── HomeScreen.js            # Paycheck input and financial projections
│   ├── AccountScreen.js         # Account settings screen
│   ├── PaymentsRecordsScreen.js # Payments and records functionality
│   ├── ComingSoonScreen.js      # Placeholder "Coming Soon" screen
│   └── NavBar.js                # Bottom navigation bar
├── assets/                      # App assets (e.g., images, icons)
├── App.js                       # Main app file

Usage
	1.	Launch the app to view the splash screen.
	2.	Navigate to the sign-up/sign-in screen to authenticate.
	3.	Input paycheck information on the Home screen to see financial projections.
	4.	Explore other tabs like Account Settings and Payments/Records.

Contributing

Contributions are welcome! Please follow these steps:
	1.	Fork the repository.
	2.	Create a new branch:

git checkout -b feature/your-feature-name


	3.	Commit your changes:

git commit -m "Add your commit message"


	4.	Push to your branch:

git push origin feature/your-feature-name


	5.	Create a Pull Request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements

Special thanks to all contributors and the open-source libraries used in this project.
