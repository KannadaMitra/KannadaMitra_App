const { useUser } = require("@clerk/clerk-react");
const User = require("./schema");
const { mongoConnect } = require("../db");

const storeUserData = async (user) => {
  try {
    const userData = {
      id: user.id,
      email: user.emailAddresses[0].emailAddress,
      firstName: user.firstName,
      lastName: user.lastName,
    };

    const existingUser = await User.findOne({ id: user.id });
    if (existingUser) {
      console.log("User already exists in MongoDB");
      return;
    }

    const newUser = new User(userData);
    await newUser.save();
    console.log("User data stored in MongoDB");
  } catch (error) {
    console.error("Error storing user data:", error);
  }
};

const fetchAndStoreUserData = () => {
  const { user } = useUser();

  if (user) {
    storeUserData(user);
  }
};

module.exports = fetchAndStoreUserData;
