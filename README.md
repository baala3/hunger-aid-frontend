# HungerAid

—- _Sharing surplus, feeding hope_

## Project Problem Statement:

Every day, many restaurants have surplus food at the end of the day that goes to unsold/waste. This food waste not only harms the environment but also represents a missed opportunity to help those in need.

**HungerAid**(_"give" and "lean" towards sustainability_) aims to create a platform that connects restaurants with food banks, allowing them to efficiently share leftover food.

By doing so, restaurants reduce waste, and food banks can better serve hungry individuals, creating a sustainable and impactful solution to fight food poverty.

- _envision a world where no food goes to waste, and no one goes hungry._

## Proposed Solution/Project Idea:

We are developing a 3-Tier Web Application using NodeJS + MongoDB that allows restaurants and users to post available food in their local area. Local charities can sign up, view nearby food availability, search and contact donors, and upvote posts.

This project helps connect food donors with charities to reduce food waste and support those in need. Since it’s just a learning project, it may not be fully efficient.

## Features List

1. **User Sign-Up:** A sign-up form allows new users to create an account. User records are stored in MongoDB. Existing users are prevented from signing up again.
2. **Login Page:** Enables authorized users to log in. Validates username and password matches and redirecting users to home pages.
3. **Dashboard Page:** Provides a widget for users to upload images of leftover food and input details like the amount of food cooked and wasted. Food images are uploaded to Cloudinary.
4. **Food Location Tracking:** Users can trace food locations and get directions from their current location using integrated maps.
5. **Profile Management:** Users can update their profiles with relevant information.
6. **Upvote System:** Users can upvote posts if they find the information helpful.
7. **Support System:** Users can contact the support team for assistance with any issues they encounter.

## Tech Stack used:
**Frontend:**

- React 17, React DOM, React Router DOM
- Redux, React-Redux, Redux Thunk, Redux DevTools
- Axios, timeago.js, web-vitals

**UI/UX:**

- Material-UI Core & Icons, Material Table
- React Swipeable Views, AOS (Animate On Scroll)

**Maps & Location:**

- @react-google-maps/api, React Map GL
- @reach/combobox, use-places-autocomplete

**Utilities:**

- React Country Region Selector
- ESLint, React Scripts

**Testing:**

- Jest, React Testing Library

**Backend:**

- Node.js, Express, MongoDB, Mongoose
- JWT Auth, Cloudinary, FTP-mail

**Deployment**
- **Netlify** – Hosting platform

## Links
- live https://hunger-aid.netlify.app/
- backend repo https://github.com/baala3/hunger-aid-backend
