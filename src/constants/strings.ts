import { PATHS } from ".";

export const strings = {
  //Core
  appName: "ZENDEN",
  readMore: "Read More",
  submit: "Submit",
  paths: {
    [PATHS.root]: "Landing",
    [PATHS.aboutUs]: "About Us",
    [PATHS.login]: "Login",
    [PATHS.signUp]: "Sign Up",
    [PATHS.testimonials]: "Testimonials",
  },
  navbar: {
    services: "Services",
    features: "Features",
    aboutUs: "About Us",
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
};
