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
import ItineraryScreen from "./components/ItineraryScreen";
import TippingGuideScreen from "./components/TippingGuideScreen";
import LawsScreen from "./components/LawsScreen";
import MapsScreen from "./components/MapsScreen";
import PersonalInfoScreen from "./components/PersonalInfoScreen";
import TravelPreferencesScreen from "./components/TravelPreferencesScreen";
import SecuritySettingsScreen from "./components/SecuritySettingsScreen";
import EmergencyContactsScreen from "./components/EmergencyContactsScreen";
import NotificationsSettingsScreen from "./components/NotificationsSettingsScreen";
import LanguageSettingsScreen from "./components/LanguageSettingsScreen";
import UnitsSettingsScreen from "./components/UnitsSettingsScreen";
import PrivacySettingsScreen from "./components/PrivacySettingsScreen";
import HelpSupportScreen from "./components/HelpSupportScreen";

type Screen = "welcome" | "signup" | "login" | "dashboard" | "terms" | "privacy" | "cookies" | "profile" | "settings" | "currency" | "camera" | "medical" | "countdown_todo" | "locations" | "itinerary" | "tipping" | "laws" | "maps" | "personal_info" | "travel_prefs" | "security" | "emergency" | "notif_settings" | "lang_settings" | "unit_settings" | "priv_settings" | "help_support";

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>("welcome");
  const [previousScreen, setPreviousScreen] = useState<Screen>("welcome");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigateTo = (screen: Screen, openSidebar: boolean = false) => {
    setPreviousScreen(currentScreen);
    setCurrentScreen(screen);
    setSidebarOpen(openSidebar);
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
          initialSidebarOpen={sidebarOpen}
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
          onItinerary={() => navigateTo("itinerary")}
          onTipping={() => navigateTo("tipping")}
          onLaws={() => navigateTo("laws")}
          onMaps={() => navigateTo("maps")}
        />
      )}
      {currentScreen === "maps" && (
        <MapsScreen 
          onBack={() => navigateTo("dashboard", true)}
          onHome={() => navigateTo("dashboard")}
          onCurrency={() => navigateTo("currency")}
          onCamera={() => navigateTo("camera")}
          onMed={() => navigateTo("medical")}
          onProfile={() => navigateTo("profile")}
          onSettings={() => navigateTo("settings")}
        />
      )}
      {currentScreen === "itinerary" && (
        <ItineraryScreen 
          onBack={() => navigateTo("dashboard", true)}
          onHome={() => navigateTo("dashboard")}
          onCurrency={() => navigateTo("currency")}
          onCamera={() => navigateTo("camera")}
          onMed={() => navigateTo("medical")}
          onProfile={() => navigateTo("profile")}
          onSettings={() => navigateTo("settings")}
        />
      )}
      {currentScreen === "tipping" && (
        <TippingGuideScreen 
          onBack={() => navigateTo("dashboard", true)}
          onHome={() => navigateTo("dashboard")}
          onCurrency={() => navigateTo("currency")}
          onCamera={() => navigateTo("camera")}
          onMed={() => navigateTo("medical")}
          onProfile={() => navigateTo("profile")}
          onSettings={() => navigateTo("settings")}
        />
      )}
      {currentScreen === "laws" && (
        <LawsScreen 
          onBack={() => navigateTo("dashboard", true)}
          onHome={() => navigateTo("dashboard")}
          onCurrency={() => navigateTo("currency")}
          onCamera={() => navigateTo("camera")}
          onMed={() => navigateTo("medical")}
          onProfile={() => navigateTo("profile")}
          onSettings={() => navigateTo("settings")}
        />
      )}
      {currentScreen === "locations" && (
        <LocationsScreen 
          onBack={() => navigateTo("dashboard", true)}
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
          onBack={() => navigateTo("dashboard", true)}
        />
      )}
      {currentScreen === "medical" && (
        <MedicalScreen 
          onBack={() => navigateTo("dashboard", true)}
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
          onItinerary={() => navigateTo("itinerary")}
          onTipping={() => navigateTo("tipping")}
          onLaws={() => navigateTo("laws")}
          onMaps={() => navigateTo("maps")}
        />
      )}
      {currentScreen === "profile" && (
        <ProfileScreen 
          onBack={() => navigateTo("dashboard")}
          onSettings={() => navigateTo("settings")}
          onPersonalInfo={() => navigateTo("personal_info")}
          onTravelPrefs={() => navigateTo("travel_prefs")}
          onSecurity={() => navigateTo("security")}
          onEmergency={() => navigateTo("emergency")}
        />
      )}
      {currentScreen === "personal_info" && (
        <PersonalInfoScreen onBack={() => navigateTo("profile")} />
      )}
      {currentScreen === "travel_prefs" && (
        <TravelPreferencesScreen onBack={() => navigateTo("profile")} />
      )}
      {currentScreen === "security" && (
        <SecuritySettingsScreen onBack={() => navigateTo("profile")} />
      )}
      {currentScreen === "emergency" && (
        <EmergencyContactsScreen onBack={() => navigateTo("profile")} />
      )}
      {currentScreen === "settings" && (
        <SettingsScreen 
          onBack={() => navigateTo("dashboard")}
          onProfile={() => navigateTo("profile")}
          onNotifications={() => navigateTo("notif_settings")}
          onLanguage={() => navigateTo("lang_settings")}
          onUnits={() => navigateTo("unit_settings")}
          onPrivacy={() => navigateTo("priv_settings")}
          onHelp={() => navigateTo("help_support")}
          onLogout={() => navigateTo("welcome")}
        />
      )}
      {currentScreen === "notif_settings" && (
        <NotificationsSettingsScreen onBack={() => navigateTo("settings")} />
      )}
      {currentScreen === "lang_settings" && (
        <LanguageSettingsScreen onBack={() => navigateTo("settings")} />
      )}
      {currentScreen === "unit_settings" && (
        <UnitsSettingsScreen onBack={() => navigateTo("settings")} />
      )}
      {currentScreen === "priv_settings" && (
        <PrivacySettingsScreen onBack={() => navigateTo("settings")} />
      )}
      {currentScreen === "help_support" && (
        <HelpSupportScreen onBack={() => navigateTo("settings")} />
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
          onItinerary={() => navigateTo("itinerary")}
          onTipping={() => navigateTo("tipping")}
          onLaws={() => navigateTo("laws")}
          onMaps={() => navigateTo("maps")}
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
          onItinerary={() => navigateTo("itinerary")}
          onTipping={() => navigateTo("tipping")}
          onLaws={() => navigateTo("laws")}
          onMaps={() => navigateTo("maps")}
        />
      )}
    </>
  );
}
