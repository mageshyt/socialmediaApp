export const bgs = ["#A5BBFF", "#DDBEFE", "#FF63ED", "#B98EFF"];
export const DATA = [
  {
    key: "3571572",
    title: "SocialCircle",
    description:
      "Connect with friends, family, and new people in your life on SocialCircle. Share photos, stories, and experiences with the people who matter mos",
    image: "https://i.ibb.co/G5GHm0z/gloab.png",
  },
  {
    key: "3571747",
    title: "Spark",
    description:
      "Description: Join the Spark community to ignite your passions and connect with others who share your interests. From art to sports, music to gaming, Spark is where you can share your talents and get inspired by others.",
    image: "https://i.ibb.co/XsYHRcY/game-controller.png",
  },
  {
    key: "3571680",
    title: "Thrive",
    description:
      "Build your online presence and expand your network with Thrive. Share your professional achievements, connect with like-minded individuals, and grow your career.",
    image: "https://iili.io/HU2RUWg.png",
  },
  {
    key: "3571603",
    title: "Wanderlust",
    description:
      "Description: Share your travel experiences, explore new destinations, and connect with fellow travelers on Wanderlust. Whether you're a seasoned adventurer or a newbie, Wanderlust is the perfect platform to share your journey.",
    image: "https://iili.io/HU2R0RS.png",
  },
];

export const RegisterInputData: InputType[] = [
  {
    label: "Full Name",
    id: "name",
    placeholder: "Enter your name",
    required: true,
  },
  {
    label: "email",
    id: "email",
    type: "email",
    placeholder: "Enter your email",
    required: true,
    pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    errorMessage: "It should be a valid email address!",
  },
  {
    label: "password",
    id: "password",
    type: "password",
    placeholder: "Enter your password",
    required: true,
    pattern:
      /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
    errorMessage:
      "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
  },
];

export type InputType = {
  label: string;
  id: string;
  placeholder?: string;
  required: boolean;
  type?: string;
  pattern?: RegExp;
  errorMessage?: string;
  about?: string;
};
