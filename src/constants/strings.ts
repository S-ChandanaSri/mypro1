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

  adminDashboard: {
    sidebar: {
      dashboard: "Dashboard",
      rooms: "Rooms",
      bookings: "Bookings",
      concierge: "Concierge",
    },
    dashboard: {
      dashboard: "Dashboard",
      checkIn: "CHECK IN",
      checkOut: "CHECK OUT",
      totalCustomers: "TOTAL CUSTOMERS",
      cash: "CASH",
      reservation: {
        reservationStats: "Reservation stats",
        reservationDescription: "Your current reservation summary and activity",
        bitcoin: "Bitcoin",
        credit: "Credit",
        cash: "Cash",
      },
      recentCustomers: "Recent Customers",
      recentCustomersText: "Lorem ipsum dolor sit ametis amhde",
      seeAllCustomers: "SEE ALL CUSTOMERS",
    },

    roomList: {
      roomList: "Room List",
      allRooms: "All Rooms",
      activeEmployee: "Active Employee",
      inactiveEmployee: "Inactive Employee",
      roomName: "Room Name",
      bedType: "Bed Type",
      roomFloor: "Room FLoor",
      facilities: "Facilities",
      rate: "Rate",
      status: "Status",
      newRoom: "New Room",
    },
    conciergeList: {
      conciergeList: "Concierge List",
      allRooms: "All Rooms",
      activeEmployee: "Active Employee",
      inactiveEmployee: "Inactive Employee",
      EmployeeName: "Employee Name",
      jobDetails: "Job Details",
      schedule: "Schedule",
      contact: "Contact",
      status: "Status",
      newRoom: "New Room",
    },
  },
};
