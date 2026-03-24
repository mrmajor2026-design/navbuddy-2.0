/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import WelcomeScreen from "./components/WelcomeScreen";
import SignUpScreen from "./components/SignUpScreen";
import LoginScreen from "./components/LoginScreen";
import DashboardScreen from "./components/DashboardScreen";
import TermsOfServiceScreen from "./components/TermsOfServiceScreen";
import PrivacyPolicyScreen from "./components/PrivacyPolicyScreen";
import CookiesPolicyScreen from "./components/CookiesPolicyScreen";
import ProfileScreen from "./components/ProfileScreen";
import SettingsScreen from "./components/SettingsScreen";
import CurrencyScreen from "./components/CurrencyScreen";
import CameraScreen from "./components/CameraScreen";
import MedicalScreen from "./components/MedicalScreen";
import CountdownTodoScreen from "./components/CountdownTodoScreen";
import LocationsScreen from "./components/LocationsScreen";

type Screen = "welcome" | "signup" | "login" | "dashboard" | "terms" | "privacy" | "cookies" | "profile" | "settings" | "currency" | "camera" | "medical" | "countdown_todo" | "locations";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [previousScreen, setPreviousScreen] = useState<Screen>("welcome");

  const navigateTo = (screen: Screen) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
  };

  return (
    <>
      {currentScreen === "welcome" && (
        <WelcomeScreen 
          onSignUp={() => navigateTo("signup")} 
          onLogin={() => navigateTo("login")} 
          onTerms={() => navigateTo("terms")}
          onPrivacy={() => navigateTo("privacy")}
          onCookies={() => navigateTo("cookies")}
        />
      )}
      {currentScreen === "signup" && (
        <SignUpScreen 
          onBack={() => navigateTo("welcome")} 
          onLogin={() => navigateTo("login")} 
          onSignUpSuccess={() => navigateTo("dashboard")}
        />
      )}
      {currentScreen === "login" && (
        <LoginScreen 
          onBack={() => navigateTo("welcome")} 
          onSignUp={() => navigateTo("signup")} 
          onLoginSuccess={() => navigateTo("dashboard")}
        />
      )}
      {currentScreen === "dashboard" && (
        <DashboardScreen 
          onLogout={() => navigateTo("welcome")}
          onTerms={() => navigateTo("terms")}
          onPrivacy={() => navigateTo("privacy")}
          onCookies={() => navigateTo("cookies")}
          onProfile={() => navigateTo("profile")}
          onSettings={() => navigateTo("settings")}
          onCurrency={() => navigateTo("currency")}
          onCamera={() => navigateTo("camera")}
          onMed={() => navigateTo("medical")}
          onCountdownTodo={() => navigateTo("countdown_todo")}
          onLocations={() => navigateTo("locations")}
        />
      )}
      {currentScreen === "locations" && (
        <LocationsScreen 
          onBack={() => navigateTo("dashboard")}
          onHome={() => navigateTo("dashboard")}
          onCurrency={() => navigateTo("currency")}
          onCamera={() => navigateTo("camera")}
          onMed={() => navigateTo("medical")}
          onProfile={() => navigateTo("profile")}
          onSettings={() => navigateTo("settings")}
        />
      )}
      {currentScreen === "countdown_todo" && (
        <CountdownTodoScreen 
          onBack={() => navigateTo("dashboard")}
        />
      )}
      {currentScreen === "medical" && (
        <MedicalScreen 
          onHome={() => navigateTo("dashboard")}
          onCurrency={() => navigateTo("currency")}
          onCamera={() => navigateTo("camera")}
          onProfile={() => navigateTo("profile")}
          onSettings={() => navigateTo("settings")}
          onLogout={() => navigateTo("welcome")}
          onTerms={() => navigateTo("terms")}
          onPrivacy={() => navigateTo("privacy")}
          onCookies={() => navigateTo("cookies")}
          onCountdownTodo={() => navigateTo("countdown_todo")}
          onLocations={() => navigateTo("locations")}
        />
      )}
      {currentScreen === "profile" && (
        <ProfileScreen 
          onBack={() => navigateTo("dashboard")}
          onSettings={() => navigateTo("settings")}
        />
      )}
      {currentScreen === "settings" && (
        <SettingsScreen 
          onBack={() => navigateTo(previousScreen === "settings" ? "dashboard" : previousScreen)}
          onProfile={() => navigateTo("profile")}
        />
      )}
      {currentScreen === "terms" && (
        <TermsOfServiceScreen 
          onBack={() => navigateTo(previousScreen === "terms" ? "welcome" : previousScreen)}
          onSettings={() => navigateTo("settings")}
          onProfile={() => navigateTo("profile")}
        />
      )}
      {currentScreen === "privacy" && (
        <PrivacyPolicyScreen 
          onBack={() => navigateTo(previousScreen === "privacy" ? "welcome" : previousScreen)}
          onSettings={() => navigateTo("settings")}
          onProfile={() => navigateTo("profile")}
        />
      )}
      {currentScreen === "cookies" && (
        <CookiesPolicyScreen 
          onBack={() => navigateTo(previousScreen === "cookies" ? "welcome" : previousScreen)}
          onSettings={() => navigateTo("settings")}
          onProfile={() => navigateTo("profile")}
        />
      )}
      {currentScreen === "currency" && (
        <CurrencyScreen 
          onHome={() => navigateTo("dashboard")}
          onMed={() => navigateTo("medical")}
          onProfile={() => navigateTo("profile")}
          onSettings={() => navigateTo("settings")}
          onLogout={() => navigateTo("welcome")}
          onTerms={() => navigateTo("terms")}
          onPrivacy={() => navigateTo("privacy")}
          onCookies={() => navigateTo("cookies")}
          onCamera={() => navigateTo("camera")}
          onCountdownTodo={() => navigateTo("countdown_todo")}
          onLocations={() => navigateTo("locations")}
        />
      )}
      {currentScreen === "camera" && (
        <CameraScreen 
          onHome={() => navigateTo("dashboard")}
          onCurrency={() => navigateTo("currency")}
          onMed={() => navigateTo("medical")}
          onProfile={() => navigateTo("profile")}
          onSettings={() => navigateTo("settings")}
          onLogout={() => navigateTo("welcome")}
          onTerms={() => navigateTo("terms")}
          onPrivacy={() => navigateTo("privacy")}
          onCookies={() => navigateTo("cookies")}
          onCountdownTodo={() => navigateTo("countdown_todo")}
          onLocations={() => navigateTo("locations")}
        />
      )}
    </>
  );
}
