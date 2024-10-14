import ConfirmAndPay from "@/app/mainFlow/page";
import { PATHS } from ".";

export const strings = {
  //Core
  appName: "ZENDEN",
  readMore: "Read More",
  submit: "Submit",
  contactPhone: "+(91) 9264-9017-04",
  paths: {
    [PATHS.root]: "Landing",
    [PATHS.aboutUs]: "About Us",
    [PATHS.login]: "Login",
    [PATHS.signUp]: "Sign Up",
    // [PATHS.testimonials]: "Testimonials",
  },
  navbar: {
    services: "Services",
    features: "Features",
    aboutUs: "About Us",
    listYourProperty: "List your property",
    notifcations: "Notifications",
    trips: "Trips",
    wishlist: "Wishlist",
    account: "Account",
    help: "Help",
    logout: "Log Out",
    download: "Download our app",
  },
  //Landing

  //Landing
  landing: {
    heading: "Reserve Your Ideal Holiday",
    subHeading:
      "We're thrilled to have you! Let's find you the ideal place to stay.",
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
    testimonials: {
      heading: "Over 1000+ people trust us",
      subHeading:
        "Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS.",
      seeAllReviews: "See all reviews by our customers",
    },
    faqs: {
      heading: "Frequently Asked Questions",
      subHeading:
        "Everything you need to know about the student Accomodation and Housing",
      stillHaveQuestions: "Still have questions?",
      cantFindAnswer:
        "Can't find the answer you're looking for? Please chat to our friendly team.",
      getInTouch: "Get in touch",
    },
  },

  footer: {
    description:
      "We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    newsletter: "Newsletter",
    newsletterPromo:
      "Be the first one to know about discounts, offers and events",
    enterMail: "Enter your email",
    allRightsReserved: "© 2000-2021, All Rights Reserved",
  },

  //About Us
  aboutUs: {
    title: "About Us",
    tag: "Live Easy | Feel Home",
    subTitle:
      "ZenDen is reshaping student accommodation by offering affordable, comfortable and luxurious living spaces.",
    join: "Join Us",
    joinUs: "Join us in creating a home away from home for you across",
    whyUs: "Why Us",
    whyUsSubheading: "Lorem ipsum dolor sit amet, consectetur adipis elit",
    teamHeading: "Our Creative Minds",
    distributedTeamHeading: "We're a distributed team",
    distributedTeamSubheading:
      "We have offices and teams all around the world.",
    team: {
      support: "Support",
      supportBody: "Our friendly team is here to help.",
      sales: "Sales",
      salesBody: "Questions or queries? Get in touch!",
      phone: "Phone",
      phoneBody: "Mon-Fri from 8am to 5pm.",
    },
  },
  //SignUp/Login
  signup: {
    signIntoAccount: "Sign in to your account",
    subHeading:
      "Clarity gives you the blocks and components you need to create a truly professional website.",

    firstName: "first name",
    lastName: "last name",
    emailPlaceholder: "email address",
    passwordPlaceholder: "password",
    confirmPasswordPlaceholder: "confirm password",
    rememberMe: "remember me",
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

  //Property
  propertyDetails: {
    reservation: {
      dateTime: "Choose a Date and Time",
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
    viewOnMap: "View on Map",
    ratings: "Ratings",
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
    sideSection: {
      mapView: "Map View",
      sortBy: "Sort By",
      viewDetails: "View Details",
      bookNow: "Book Now",
    },
    viewOnMap: "View on Map",
  },

  testimonial: {
    heading: "Testimonials",
    subHeading: "Review from our satisfied coustomers",
  },

  Amenity: {
    guestamenities: {
      heading: "Tell the guest what your place has to offer",
      subHeading: "You can add more amenities after you publish your listings",
    },
    guestamenities1: {
      heading: "Do you have any standout amenities?",
    },
  },
  Placetype: {
    place1: {
      heading: "What type of place will guest have?",
    },
  },
  peopletype: {
    heading: " Who else might be there ? ",
    subheading:
      "Guest need to know whether they will encounter with other people there",
  },

  Amenities1: {
    heading: "Let's start with basics ",
    subheading: "How many people can stay here?",
  },

  Describehome: {
    heading: "Next, Let's describe your property",
    subheading:
      "Choose up to 2 highlights. We'll use this to get your description ready.",
  },

  options: {
    heading: "You,re just three steps to setup your zenden",
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

  mainFlow: {
    ConfirmAndPay: "Confirm and pay",
    yourTrip: "Your Trip",
    dates: "Dates",
    edit: "Edit",
    guests: "Guests",
    chooseHowToPay: "Choose how to pay",
    payInFull: "Pay in Full",
    payPartNowPartLater: "Pay part now part later",
    paymentDetails: "Payment details",
    creditCard: "Credit card",
    name: "Name",
    expirationDate: "Expiration date",
    cvv: "Cvv",
    confirmOrder: "Confirm order",
    cancelAndReturn: "cancel and return",
    priceDetails: "Price Details",
    cancellationPolicy: "Cancellation policy",
    groundRules: "Ground rules",
  },
};
