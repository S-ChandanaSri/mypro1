import { PATHS } from ".";

export const strings = {
  //Core
  appName: "ZENDEN",
  paths: {
    [PATHS.root]: "Landing",
    [PATHS.aboutUs]: "About Us",
    [PATHS.login]: "Login",
    [PATHS.signUp]: "Sign Up",
  },
  navbar: {
    services: "Services",
    features: "Features",
    aboutUs: "About Us",
  },
  //Landing
  landing: {
    tags: {
      verified: "Verified Properties",
      support: "24/7 Support",
      price: "Pricematch",
    },
    ourServices: {
      heading: "Book in 4 easy steps",
      subHeading:
        "Hassle free booking with prioritize 1 on 1 support, and peace of mind for students",
    },
    whyChooseUs: {
      heading: "Why Choose Us",
      subHeading:
        "Hassle free with prioritize security, and peace of mind for students and their parents",
    },
    getInTouch: {
      heading: "Get in touch with us",
      subHeading: "If you have any query feel free to contact us",
    },
  },
  //SignUp/Login
  signup: {
    signIntoAccount: "Sign in to your account",
    subHeading:
      "Clarity gives you the blocks and components you need to create a truly professional website.",
    firstName: "First Name",
    lastName: "Last Name",
    emailPlaceholder: "Email Address",
    passwordPlaceholder: "Password",
    confirmPasswordPlaceholder: "Confirm Password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot Password?",
    signUpFirst: "Don't have an account?",
    register: "Sign Up",
    login: "Sign In",
    loginWithGoogle: "Sign In with Google",
    errors: {
      nonMatchingPassword: "Password must match with confirmation password",
      invalidFirstName: "First name is required",
      invalidLastName: "Last name is required",
      invalidEmail: "Email must be valid.",
      invalidPassword: {
        minLength: "Password must be at least 8 characters long",
        maxLength: "Password cannot be more than 16 characters long",
        upperCaseCharacter:
          "Password must contain at least one uppercase letter",
        lowerCaseCharacter:
          "Password must contain at least one lowercase letter",
        number: "Password must contain at least one number",
      },
    },
  },

  propertyDetails: {
    reservation: {
      dateTime: "Choose a date and time",
      reserve: "Reserve now",
      instruction1: "No charges until your reservation begins",
      instruction2: "Cancel for free upto 2 hours before",
      request: "Request free tour",
      hourly: "Hourly",
      daily: "Daily",
    },
    bookNow: "Book now",
    accomodates: "Accomodates",
    openingHours: "Opening hours",
    ammenities: "Ammenities",
    roomServices: "Additional In-room Services",
  },

  roomView: {
    filterSection: {
      collections: "Collections",
      categories: "Categories",
      showMore: "Show more",
      rating: "Rating",
      filters: "Filters",
      priceRange: "Price Range",
    },
  },

  filterOptionFlow: {
    filters: "Filters",
    priceRange: "Price Range",
    minimum: "Minimum",
    maximum: "Maximum",
    bedsAndBathrooms: "Beds and bathrooms",
    beds: "Beds",
    bathrooms: "Bathrooms",
    any: "Any",
    propertyTypes: "Property type",
    amenities: "Amenities",
    essentials: "Essentials",
    hostLanguage: "Host Language",
    showMore: "Show more",
    clearAll: "Clear all",
  },

  contactUs: {
    contactUs: "Contact us",
    getInTouch: "Get in touch",
    weLoveLine: "We'd love to hear from you. Please fill out this form.",
    labelNames: {
      firstName: "First name",
      lastName: "Last name",
      email: "Email",
      phoneNumbers: "Phone number",
      message: "Message",
      agreement: "You agree to our friendly",
      privacyPolicy: "privacy policy",
      sendMessage: "Send message",
    },
  },
};
